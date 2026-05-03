'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRegisterMutation } from '@/module/auth/useAuthMutations';
import { useForm } from 'react-hook-form';
import {
  RegisterFormValues,
  registerSchema,
} from '@/module/auth/schemas/register.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { ApiErrorData } from '@/module/auth/auth.types';

const Register = () => {
  const register = useRegisterMutation();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (values: RegisterFormValues) => {
    const { confirmPassword: _, ...payload } = values;

    register.mutate(payload, {
      onSuccess: () => {
        toast.success('Account created! Welcome aboard.');
        form.reset();
      },
      onError: (error) => {
        const message =
          (error as AxiosError<ApiErrorData>).response?.data?.message ??
          'Registration failed. Please try again.';
        toast.error(message);
      },
    });
  };

  return (
    <div className="w-full max-w-md mx-auto stagger">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Create account
      </p>
      <h3 className="text-3xl md:text-3xl font-semibold tracking-tight leading-[1.05]">
        Watch wallets in seconds.
      </h3>
      <p className="mt-3 text-muted-foreground">
        Free forever for the first 5 wallets.
      </p>

      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            type="text"
            {...form.register('name')}
            placeholder="Jane Cooper"
            className="h-11"
          />
          {form.formState.errors.name && (
            <p className="text-xs text-destructive">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">email</Label>
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
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            {...form.register('password')}
            placeholder="At least 8 characters"
            className="h-11"
          />
          {form.formState.errors.password && (
            <p className="text-xs text-destructive">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            {...form.register('confirmPassword')}
            placeholder="Confirm your password"
            className="h-11"
          />
          {form.formState.errors.confirmPassword && (
            <p className="text-xs text-destructive">
              {form.formState.errors.confirmPassword.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          disabled={register.isPending}
          className="w-full h-11 rounded-full"
        >
          {register.isPending ? (
            'Creating account…'
          ) : (
            <>
              Create account <ArrowRight className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-foreground underline-offset-4 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
