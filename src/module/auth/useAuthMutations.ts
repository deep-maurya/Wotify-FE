import { useRouter } from 'next/navigation';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { authApi } from '@/module/auth/auth.api';
import type {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
  User,
} from '@/module/auth/auth.types';
import { queryKeys } from '@/shared/config/Querykeys';
import { tokenStorage } from '@/shared/utils/tokenStorage';

// ─────────────────────────────────────────────────────────────────────────────
//  WHY useMutation for login/register/logout?
//
//  These are actions triggered by user intent (form submit, button click).
//  useMutation gives you:
//    - isPending  → show a loading spinner
//    - isError    → display the server error message
//    - isSuccess  → trigger redirects / toasts
//    - reset()    → clear error state when user edits the form
//    - onSuccess  → seed queryClient cache (avoids an extra GET /auth/me)
//
//  The token refresh inside axiosInstance is a plain async function because
//  it runs inside an Axios interceptor (outside of React), needs no UI state,
//  and must be invisible to the calling component.
// ─────────────────────────────────────────────────────────────────────────────

// Login
export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<AuthResponse, Error, LoginPayload>({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      // Here 2nd parameter is refreshToken but currently API is not returning refresh token in response,
      // so setting access token for both access and refresh token. Update this when API starts returning refresh token.
      tokenStorage.set(data.accessToken, data.accessToken);
      queryClient.setQueryData<User>(queryKeys.auth.me(), data.user);
      router.push('/dashboard');
    },
  });
};

// Register
export const useRegisterMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation<AuthResponse, Error, RegisterPayload>({
    mutationFn: authApi.register,
    onSuccess: (data) => {
      tokenStorage.set(data.accessToken, data.accessToken);
      queryClient.setQueryData<User>(queryKeys.auth.me(), data.user);
      router.push('/dashboard');
    },
  });
};

// Logout
export const useLogoutMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation<void, Error, void>({
    mutationFn: authApi.logout,
    onSettled: () => {
      tokenStorage.clear();
      queryClient.clear();
      router.push('/');
    },
  });
};
