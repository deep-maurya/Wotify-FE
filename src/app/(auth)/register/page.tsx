'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Mail, KeyRound, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRegisterMutation } from '@/module/auth/useAuthMutations';
import { useForm } from 'react-hook-form';
import {
  registerDetailsSchema,
  RegisterDetailsValues,
} from '@/module/auth/schemas/register.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { ApiErrorData } from '@/module/auth/auth.types';
import { useState, useEffect, useRef } from 'react';
import { z } from 'zod';

// ─── Schemas ─────────────────────────────────────────────────────────────────

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

const otpSchema = z.object({
  otp: z
    .string()
    .length(6, 'OTP must be exactly 6 digits')
    .regex(/^\d+$/, 'OTP must contain only digits'),
});

type EmailValues = z.infer<typeof emailSchema>;

// ─── Step indicator ───────────────────────────────────────────────────────────

const steps = [
  { id: 1, label: 'Email', icon: Mail },
  { id: 2, label: 'Verify', icon: KeyRound },
  { id: 3, label: 'Details', icon: User },
];

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center mb-10">
      {steps.map((step, idx) => {
        const Icon = step.icon;
        const done = current > step.id;
        const active = current === step.id;

        return (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              <div
                className={[
                  'w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300',
                  done
                    ? 'bg-foreground border-foreground text-background'
                    : active
                      ? 'bg-background border-foreground text-foreground'
                      : 'bg-background border-muted text-muted-foreground',
                ].join(' ')}
              >
                {done ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <Icon className="h-4 w-4" />
                )}
              </div>
              <span
                className={[
                  'text-[10px] font-mono uppercase tracking-wider',
                  active ? 'text-foreground' : 'text-muted-foreground',
                ].join(' ')}
              >
                {step.label}
              </span>
            </div>

            {idx < steps.length - 1 && (
              <div
                className={[
                  'h-px w-16 mb-4 mx-1 transition-all duration-500',
                  current > step.id ? 'bg-foreground' : 'bg-border',
                ].join(' ')}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── OTP Input ────────────────────────────────────────────────────────────────

const OTP_TTL = 60;

function OtpInput({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const digits = Array.from({ length: 6 }, (_, i) => value[i] ?? '');

  const handleKey = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const next = digits.map((d, i) => (i === idx ? '' : d)).join('');
      onChange(next.trimEnd());
      if (idx > 0) inputs.current[idx - 1]?.focus();
    }
  };

  const handleChange = (idx: number, raw: string) => {
    const digit = raw.replace(/\D/g, '').slice(-1);
    const next = digits.map((d, i) => (i === idx ? digit : d)).join('');
    onChange(next.replace(/\s/g, ''));
    if (digit && idx < 5) inputs.current[idx + 1]?.focus();
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const pasted = e.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, 6);
    onChange(pasted);
    const focusIdx = Math.min(pasted.length - 1, 5);
    inputs.current[focusIdx]?.focus();
    e.preventDefault();
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2 w-full">
        {digits.map((digit, idx) => (
          <input
            key={idx}
            ref={(el) => {
              inputs.current[idx] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(idx, e.target.value)}
            onKeyDown={(e) => handleKey(idx, e)}
            onPaste={handlePaste}
            className={[
              'w-0 flex-1 h-14 text-center text-xl font-semibold rounded-lg border bg-background',
              'focus:outline-none focus:ring-2 focus:ring-ring transition-all',
              error ? 'border-destructive' : 'border-input',
            ].join(' ')}
          />
        ))}
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

// ─── Step 1 — Email ───────────────────────────────────────────────────────────

function EmailStep({ onNext }: { onNext: (email: string) => void }) {
  const [loading, setLoading] = useState(false);

  const form = useForm<EmailValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = async (values: EmailValues) => {
    setLoading(true);
    try {
      // TODO: replace with your actual API call to send OTP
      // await sendRegisterOtp(values.email);
      await new Promise((r) => setTimeout(r, 800));
      toast.success('OTP sent to ' + values.email);
      onNext(values.email);
    } catch (error) {
      const message =
        (error as AxiosError<ApiErrorData>).response?.data?.message ??
        'Failed to send OTP. Please try again.';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Create account
      </p>
      <h3 className="text-3xl font-semibold tracking-tight leading-[1.05] mt-1 mb-2">
        Watch wallets in seconds.
      </h3>
      <p className="text-muted-foreground mb-10">
        Free forever for the first 5 wallets.
      </p>

      <StepIndicator current={1} />

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
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

        <Button
          type="submit"
          disabled={loading}
          className="w-full h-11 rounded-full"
        >
          {loading ? (
            'Sending OTP…'
          ) : (
            <>
              Continue <ArrowRight className="ml-1 h-4 w-4" />
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
    </>
  );
}

// ─── Step 2 — OTP ─────────────────────────────────────────────────────────────

function OtpStep({
  email,
  onNext,
  onBack,
}: {
  email: string;
  onNext: (otp: string) => void;
  onBack: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [resendTimer, setResendTimer] = useState(OTP_TTL);
  const [resending, setResending] = useState(false);

  useEffect(() => {
    if (resendTimer <= 0) return;
    const id = setTimeout(() => setResendTimer((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [resendTimer]);

  const handleResend = async () => {
    setResending(true);
    try {
      // TODO: replace with your actual resend API call
      await new Promise((r) => setTimeout(r, 600));
      toast.success('OTP resent!');
      setResendTimer(OTP_TTL);
      setOtp('');
      setOtpError('');
    } catch {
      toast.error('Could not resend OTP.');
    } finally {
      setResending(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = otpSchema.safeParse({ otp });
    if (!result.success) {
      setOtpError(result.error.errors[0].message);
      return;
    }
    setOtpError('');
    setLoading(true);
    try {
      // TODO: replace with your actual OTP verify API call
      // await verifyRegisterOtp(email, otp);
      await new Promise((r) => setTimeout(r, 800));
      toast.success('Email verified!');
      onNext(otp);
    } catch (error) {
      const message =
        (error as AxiosError<ApiErrorData>).response?.data?.message ??
        'Invalid OTP. Please try again.';
      toast.error(message);
      setOtpError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Create account
      </p>
      <h3 className="text-3xl font-semibold tracking-tight leading-[1.05] mt-1 mb-2">
        Check your inbox.
      </h3>
      <p className="text-muted-foreground mb-10">
        Enter the 6-digit code sent to{' '}
        <span className="font-medium text-foreground">{email}</span>.
      </p>

      <StepIndicator current={2} />

      <form onSubmit={handleSubmit} className="space-y-5">
        <OtpInput value={otp} onChange={setOtp} error={otpError} />

        <Button
          type="submit"
          disabled={loading || otp.length < 6}
          className="w-full h-11 rounded-full"
        >
          {loading ? (
            'Verifying…'
          ) : (
            <>
              Verify OTP <ArrowRight className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <button
            type="button"
            onClick={onBack}
            className="hover:text-foreground transition-colors"
          >
            ← Change email
          </button>

          {resendTimer > 0 ? (
            <span>Resend in {resendTimer}s</span>
          ) : (
            <button
              type="button"
              disabled={resending}
              onClick={handleResend}
              className="text-foreground underline-offset-4 hover:underline disabled:opacity-50"
            >
              {resending ? 'Resending…' : 'Resend OTP'}
            </button>
          )}
        </div>
      </form>
    </>
  );
}

// ─── Step 3 — Details ─────────────────────────────────────────────────────────

function DetailsStep({ email, otp }: { email: string; otp: string }) {
  const register = useRegisterMutation();

  const form = useForm<RegisterDetailsValues>({
    resolver: zodResolver(registerDetailsSchema),
    defaultValues: {
      name: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (values: RegisterDetailsValues) => {
    const { confirmPassword: _, ...rest } = values;

    register.mutate(
      { email, ...rest },
      {
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
      }
    );
  };

  return (
    <>
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Create account
      </p>
      <h3 className="text-3xl font-semibold tracking-tight leading-[1.05] mt-1 mb-2">
        Almost there.
      </h3>
      <p className="text-muted-foreground mb-10">
        Set up your profile to get started.
      </p>

      <StepIndicator current={3} />

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input
            id="confirmPassword"
            type="password"
            {...form.register('confirmPassword')}
            placeholder="Re-enter your password"
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
    </>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

const Register = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  return (
    <div className="w-full max-w-md mx-auto stagger">
      {step === 1 && (
        <EmailStep
          onNext={(e) => {
            setEmail(e);
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <OtpStep
          email={email}
          onNext={(o) => {
            setOtp(o);
            setStep(3);
          }}
          onBack={() => setStep(1)}
        />
      )}

      {step === 3 && <DetailsStep email={email} otp={otp} />}
    </div>
  );
};

export default Register;
