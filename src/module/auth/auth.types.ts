export interface User {
  id: string;
  name: string;
  email: string;
  // status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export interface AuthData {
  accessToken: string;
  refreshToken: string;
  tokenType: 'Bearer';
  expiresIn: number; // seconds — 900 = 15 minutes
  user: User;
}

//We have to convert api reposne to match this type because currently API is not returning refresh token in response, so setting access token for both access and refresh token. Update this when API starts returning refresh token.
// export type AuthResponse = ApiResponse<AuthData>;
export type AuthResponse = AuthData;

export interface RefreshData {
  accessToken: string;
  refreshToken?: string;
  tokenType: 'Bearer';
  expiresIn: number;
}

export type RefreshResponse = ApiResponse<RefreshData>;

export interface ApiErrorData {
  success: false;
  message: string;
  statusCode?: number;
  errors?: Record<string, string[]>;
}
