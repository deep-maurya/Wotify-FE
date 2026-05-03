import type { AuthResponse, LoginPayload, RegisterPayload, User } from "@/module/auth/auth.types";
import axiosInstance from "@/shared/libs/axios";

export const authApi = {
  /**
   * POST /auth/login
   * Returns tokens + user on success.
   */
  login: async (payload: LoginPayload): Promise<AuthResponse> => {
    const { data } = await axiosInstance.post<AuthResponse>("/auth/login", payload);
    return data;
  },

  /**
   * POST /auth/register
   * Returns tokens + user if your API auto-logs-in after registration.
   */
  register: async (payload: RegisterPayload): Promise<AuthResponse> => {
    const { data } = await axiosInstance.post<AuthResponse>("/auth/register", payload);
    return data;
  },

  /**
   * POST /auth/logout
   * Invalidates the refresh token on the server.
   */
  logout: async (): Promise<void> => {
    await axiosInstance.post("/auth/logout");
  },

  /**
   * GET /auth/me
   * Returns the currently authenticated user.
   */
  getMe: async (): Promise<User> => {
    const { data } = await axiosInstance.get<User>("/auth/me");
    return data;
  },
};
