import { deleteClientCookie, getClientCookie, setClientCookie } from "./cookie.client";

const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

export const tokenStorage = {
  getAccess: (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(ACCESS_TOKEN_KEY) ?? getClientCookie(ACCESS_TOKEN_KEY) ?? null;
  },

  getRefresh: (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(REFRESH_TOKEN_KEY) ?? getClientCookie(REFRESH_TOKEN_KEY) ?? null;
  },

  set: (accessToken: string, refreshToken?: string): void => {
    if (typeof window === "undefined") return;
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    setClientCookie(ACCESS_TOKEN_KEY, accessToken);
    if (refreshToken) {
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
      setClientCookie(REFRESH_TOKEN_KEY, refreshToken);
    }
  },

  clear: (): void => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    deleteClientCookie(ACCESS_TOKEN_KEY);
    deleteClientCookie(REFRESH_TOKEN_KEY);
  },
};
