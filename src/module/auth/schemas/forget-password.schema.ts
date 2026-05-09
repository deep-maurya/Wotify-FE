import { z } from 'zod';

export const forgotPasswordSchema = {
  email: z.object({
    email: z.string().email('Please enter a valid email address'),
  }),

  otp: z.object({
    otp: z
      .string()
      .length(6, 'OTP must be exactly 6 digits')
      .regex(/^\d+$/, 'OTP must contain only digits'),
  }),

  reset: z
    .object({
      password: z.string().min(8, 'Password must be at least 8 characters'),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ['confirmPassword'],
    }),
};

export namespace ForgotPasswordTypes {
  export type Email = z.infer<typeof forgotPasswordSchema.email>;
  export type Otp = z.infer<typeof forgotPasswordSchema.otp>;
  export type Reset = z.infer<typeof forgotPasswordSchema.reset>;
}
