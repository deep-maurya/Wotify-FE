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
  name: z.string().trim().min(2, 'Name is too short').max(80),
  email: z.string().trim().email('Enter a valid email').max(255),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(120),
});

const Register = () => {
  const navigate = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
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
    setTimeout(() => {
      toast({
        title: 'Welcome to Wotify',
        description: 'Your account is ready.',
      });
      navigate.push('/dashboard');
    }, 600);
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

      <form onSubmit={onSubmit} className="mt-10 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Jane Cooper"
            className="h-11"
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">email</Label>
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
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="At least 8 characters"
            className="h-11"
          />
          {errors.password && (
            <p className="text-xs text-destructive">{errors.password}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full h-11 rounded-full"
        >
          {loading ? (
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
