'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const schema = z.object({
  email: z.string().trim().email('Enter a valid email').max(255),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(120),
});

const Login = () => {
  const navigate = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach(
        (i) => (errs[i.path[0] as string] = i.message)
      );
      setErrors(errs);
      return;
    }

    setErrors({});
    setLoading(true);

    // simulate login
    setTimeout(() => {
      toast({
        title: 'Welcome back',
        description: 'You are now logged in.',
      });
      navigate.push('/dashboard');
    }, 600);
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

      <form onSubmit={onSubmit} className="mt-10 space-y-5">
        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="jane@company.com"
            className="h-11"
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email}</p>
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
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Enter your password"
            className="h-11"
          />

          {errors.password && (
            <p className="text-xs text-destructive">{errors.password}</p>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full h-11 rounded-full"
        >
          {loading ? (
            'Signing in…'
          ) : (
            <>
              Login <ArrowRight className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>

        {/* Footer */}
        <p className="text-xs text-muted-foreground text-center">
          Don’t have an account?{' '}
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
