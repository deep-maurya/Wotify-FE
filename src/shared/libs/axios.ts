import axios, { type AxiosError, type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from "axios";

import type { ApiErrorData, RefreshResponse } from "@/module/auth/auth.types";
import { tokenStorage } from "@/shared/utils/tokenStorage";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4000/v1";

// Extend AxiosRequestConfig to carry the _retry flag
interface RetryableRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

// Queue item for requests waiting on a token refresh
interface QueueItem {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}

let isRefreshing = false;
let failedQueue: QueueItem[] = [];

const processQueue = (error: unknown, token: string | null = null): void => {
  failedQueue.forEach((item) => {
    if (error || !token) {
      item.reject(error);
    } else {
      item.resolve(token);
    }
  });
  failedQueue = [];
};

// ─── Create instance ──────────────────────────────────────────────────────────
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// ─── Request interceptor — attach access token ────────────────────────────────
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = tokenStorage.getAccess();
    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// ─── Response interceptor — auto refresh on 401 ───────────────────────────────
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,

  async (error: AxiosError<ApiErrorData>) => {
    const originalRequest = error.config as RetryableRequestConfig | undefined;

    if (
      error.response?.status !== 401 ||
      !originalRequest ||
      originalRequest._retry ||
      originalRequest.url?.includes("/auth/login")
    ) {
      return Promise.reject(error);
    }

    // ── Another refresh already in-flight: queue and wait ──
    if (isRefreshing) {
      return new Promise<string>((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then((newToken) => {
          originalRequest.headers.set("Authorization", `Bearer ${newToken}`);
          return axiosInstance(originalRequest);
        })
        .catch((queueError) => Promise.reject(queueError));
    }

    // ── First 401: attempt token refresh ──
    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const refreshToken = tokenStorage.getRefresh();
      if (!refreshToken) throw new Error("No refresh token available");

      // Use plain axios (not the instance) to avoid interceptor loops
      const { data } = await axios.post<RefreshResponse>(`${BASE_URL}/auth/refresh`, { refreshToken });

      tokenStorage.set(data.data.accessToken, data.data.refreshToken);

      processQueue(null, data.data.accessToken);

      originalRequest.headers.set("Authorization", `Bearer ${data.data.accessToken}`);
      return axiosInstance(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError, null);
      tokenStorage.clear();

      // In Next.js App Router, use router.push("/login") inside a component.
      // Here we fall back to a hard redirect for cases outside React (e.g. Server Actions).
      if (typeof window !== "undefined") {
        window.location.href = "/";
      }

      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  },
);

export default axiosInstance;
