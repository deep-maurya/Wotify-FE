import { z } from 'zod';

// register.schema.ts
const registerBaseSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
});

export const registerSchema = registerBaseSchema.refine(
  (data) => data.password === data.confirmPassword,
  { message: "Passwords don't match", path: ['confirmPassword'] }
);

// Export the base schema separately so we can .omit() from it
export const registerDetailsSchema = registerBaseSchema
  .omit({ email: true })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
export type RegisterDetailsValues = z.infer<typeof registerDetailsSchema>;
