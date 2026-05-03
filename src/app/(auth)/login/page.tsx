'use client';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import {
  LoginFormValues,
  loginSchema,
} from '@/module/auth/schemas/login.schema';
import { useLoginMutation } from '@/module/auth/useAuthMutations';
import { useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import { ApiErrorData } from '@/module/auth/auth.types';

const Login = () => {
  const login = useLoginMutation();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    const { remember: _, ...payload } = values;

    login.mutate(payload, {
      onSuccess: () => {
        toast.success('Welcome back!');
      },
      onError: (error) => {
        const message =
          (error as AxiosError<ApiErrorData>).response?.data?.message ??
          'Login failed. Please try again.';
        toast.error(message);
      },
    });
  };

  return (
    <div className="w-full max-w-md mx-auto stagger">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Login
      </p>

      <h3 className="text-3xl md:text-3xl font-semibold tracking-tight leading-[1.05]">
        Welcome back.
      </h3>

      <p className="mt-3 text-muted-foreground">
        Enter your credentials to continue.
      </p>

      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-5">
        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...form.register('email')}
            placeholder="jane@company.com"
            className="h-11"
          />
          {form.formState.errors.email && (
            <p className="text-xs text-destructive">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/forgot-password"
              className="text-xs text-muted-foreground hover:underline"
            >
              Forgot?
            </Link>
          </div>

          <Input
            id="password"
            type="password"
            {...form.register('password')}
            placeholder="Enter your password"
            className="h-11"
          />

          {form.formState.errors.password && (
            <p className="text-xs text-destructive">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={login.isPending}
          className="w-full h-11 rounded-full"
        >
          {login.isPending ? (
            'Signing in…'
          ) : (
            <>
              Login <ArrowRight className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>

        {/* Footer */}
        <p className="text-xs text-muted-foreground text-center">
          Don't have an account?{' '}
          <Link
            href="/register"
            className="text-foreground underline-offset-4 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
