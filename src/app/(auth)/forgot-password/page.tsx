'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, Mail, KeyRound, Lock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { useState, useEffect, useRef } from 'react';
import { AxiosError } from 'axios';
import { ApiErrorData } from '@/module/auth/auth.types';
import {
  forgotPasswordSchema,
  ForgotPasswordTypes,
} from '@/module/auth/schemas/forget-password.schema';

const steps = [
  { id: 1, label: 'Email', icon: Mail },
  { id: 2, label: 'Verify', icon: KeyRound },
  { id: 3, label: 'Reset', icon: Lock },
];
const OTP_TTL = 60;

const StepIndicator = ({ current }: { current: number }) => {
  return (
    <div className="flex items-center gap-0 mb-10">
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
                  'h-px w-12 mb-4 mx-1 transition-all duration-500',
                  current > step.id ? 'bg-foreground' : 'bg-border',
                ].join(' ')}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const OtpInput = ({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) => {
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
    const focusIdx = Math.min(pasted.length, 5);
    inputs.current[focusIdx]?.focus();
    e.preventDefault();
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2.5 justify-between">
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
              'w-full h-14 text-center text-xl font-semibold rounded-lg border bg-background',
              'focus:outline-none focus:ring-2 focus:ring-ring transition-all',
              error ? 'border-destructive' : 'border-input',
            ].join(' ')}
          />
        ))}
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
};

const ForgotPasswordSuccess = ({
  successMessage = 'Your password has been reset.',
  redirectText = 'Back to login',
  redirectLink = '/login',
}: {
  successMessage?: string;
  redirectText?: string;
  redirectLink?: string;
}) => {
  return (
    <div className="w-full max-w-md mx-auto stagger text-center space-y-4">
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
      </div>
      <h3 className="text-3xl font-semibold tracking-tight">All done!</h3>
      <p className="text-muted-foreground">{successMessage}</p>
      <Link href={redirectLink} className="inline-block">
        <Button className="h-11 rounded-full px-8 mt-2 text-accent">
          {redirectText} <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
};

// ─── Step 1 – Email ──────────────────────────────────────────────────────────
const EmailStep = ({ onNext }: { onNext: (email: string) => void }) => {
  const [loading, setLoading] = useState(false);

  const form = useForm<ForgotPasswordTypes.Email>({
    resolver: zodResolver(forgotPasswordSchema.email),
    defaultValues: { email: '' },
  });

  const onSubmit = async (values: ForgotPasswordTypes.Email) => {
    setLoading(true);
    try {
      // TODO: replace with your actual API call
      // await sendForgotPasswordOtp(values.email);
      await new Promise((r) => setTimeout(r, 800)); // simulate
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
            Send OTP <ArrowRight className="ml-1 h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Remembered your password?{' '}
        <Link
          href="/login"
          className="text-foreground underline-offset-4 hover:underline"
        >
          Back to login
        </Link>
      </p>
    </form>
  );
};

// ─── Step 2 – OTP ────────────────────────────────────────────────────────────
const OtpStep = ({
  email,
  onNext,
  onBack,
}: {
  email: string;
  onNext: (otp: string) => void;
  onBack: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [resendTimer, setResendTimer] = useState(OTP_TTL);
  const [resending, setResending] = useState(false);

  // countdown
  useEffect(() => {
    if (resendTimer <= 0) return;
    const id = setTimeout(() => setResendTimer((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [resendTimer]);

  const handleResend = async () => {
    setResending(true);
    try {
      // TODO: replace with your actual API call
      await new Promise((r) => setTimeout(r, 600));
      toast.success('OTP resent!');
      setResendTimer(OTP_TTL);
      setOtp('');
    } catch {
      toast.error('Could not resend OTP.');
    } finally {
      setResending(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = forgotPasswordSchema.otp.safeParse({ otp });
    if (!result.success) {
      setOtpError(result.error.errors[0].message);
      return;
    }
    setOtpError('');
    setLoading(true);
    try {
      // TODO: replace with your actual API call
      // await verifyOtp(email, otp);
      await new Promise((r) => setTimeout(r, 800));
      toast.success('OTP verified!');
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-sm text-muted-foreground">
        We sent a 6-digit code to{' '}
        <span className="font-medium text-foreground">{email}</span>.
      </p>

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
  );
};

// ─── Step 3 – Reset password ──────────────────────────────────────────────────
const ResetStep = ({
  email,
  otp,
  onDone,
}: {
  email: string;
  otp: string;
  onDone: () => void;
}) => {
  const [loading, setLoading] = useState(false);

  const form = useForm<ForgotPasswordTypes.Reset>({
    resolver: zodResolver(forgotPasswordSchema.reset),
    defaultValues: { password: '', confirmPassword: '' },
  });

  const onSubmit = async (values: ForgotPasswordTypes.Reset) => {
    setLoading(true);
    try {
      // TODO: replace with your actual API call
      // await resetPassword({ email, otp, password: values.password });
      await new Promise((r) => setTimeout(r, 800));
      toast.success('Password updated! Please log in.');
      onDone();
    } catch (error) {
      const message =
        (error as AxiosError<ApiErrorData>).response?.data?.message ??
        'Could not reset password. Please try again.';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="password">New password</Label>
        <Input
          id="password"
          type="password"
          {...form.register('password')}
          placeholder="Min. 8 characters"
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
        disabled={loading}
        className="w-full h-11 rounded-full"
      >
        {loading ? (
          'Updating password…'
        ) : (
          <>
            Update password <ArrowRight className="ml-1 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
};

// ─── Main component ──────────────────────────────────────────────────────────
const stepMeta = [
  {
    title: 'Forgot password?',
    subtitle: "No worries. Enter your email and we'll send you an OTP.",
  },
  {
    title: 'Check your inbox.',
    subtitle: 'Enter the 6-digit code we just sent you.',
  },
  {
    title: 'Set new password.',
    subtitle: 'Choose something strong and memorable.',
  },
];

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [done, setDone] = useState(false);

  if (done) {
    return <ForgotPasswordSuccess />;
  }

  const meta = stepMeta[step - 1];

  return (
    <div className="w-full max-w-md mx-auto stagger">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Reset password
      </p>

      <h3 className="text-3xl md:text-3xl font-semibold tracking-tight leading-[1.05] mt-1">
        {meta.title}
      </h3>

      <p className="mt-3 text-muted-foreground">{meta.subtitle}</p>

      <div className="mt-8">
        <StepIndicator current={step} />

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

        {step === 3 && (
          <ResetStep email={email} otp={otp} onDone={() => setDone(true)} />
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
