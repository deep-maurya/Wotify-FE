'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Wallet, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CHAINS, type ChainKey } from '@/lib/wotify';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CreateWalletFormValues,
  createWalletSchema,
} from '@/module/wallet/schema/createWallet.schema';
import { useWalletRegisterMutation } from '@/module/wallet/useWalletMutations';

const ChainSelector = ({
  value,
  onChange,
}: {
  value: ChainKey;
  onChange: (v: ChainKey) => void;
}) => {
  const [open, setOpen] = useState(false);

  const selected = CHAINS.find((c) => c.key === value);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          'w-full h-11 flex items-center gap-2.5 px-3 rounded-xl border bg-background text-sm text-left transition-all',
          'hover:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-ring',
          open ? 'border-foreground/40 ring-2 ring-ring' : 'border-input'
        )}
      >
        {selected && (
          <>
            <selected.logo className="h-5 w-5 shrink-0" />

            <span className="flex-1 font-medium">{selected.name}</span>

            <span className="font-mono text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
              {selected.symbol}
            </span>
          </>
        )}

        <ChevronDown
          className={cn(
            'h-4 w-4 text-muted-foreground transition-transform duration-200 shrink-0',
            open && 'rotate-180'
          )}
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-1.5 w-full rounded-xl border border-border bg-background shadow-lg overflow-hidden">
          {CHAINS.map((c) => {
            const Logo = c.logo;
            const isSelected = value === c.key;

            return (
              <button
                key={c.key}
                type="button"
                onClick={() => {
                  onChange(c.key);
                  setOpen(false);
                }}
                className={cn(
                  'w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors text-left',
                  'hover:bg-muted/60',
                  isSelected && 'bg-muted'
                )}
              >
                <Logo className="h-5 w-5 shrink-0" />

                <span className="flex-1 font-medium">{c.name}</span>

                <span className="font-mono text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-md">
                  {c.symbol}
                </span>

                {isSelected && (
                  <CheckCircle2 className="h-4 w-4 text-foreground shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

const AddWallet = () => {
  const router = useRouter();
  const walletMutation = useWalletRegisterMutation();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<CreateWalletFormValues>({
    resolver: zodResolver(createWalletSchema),

    defaultValues: {
      wallet_address: '',
      chain: 'ethereum',
      label: '',
    },
  });

  const chain = watch('chain');
  const label = watch('label') || '';

  const onSubmit = (values: CreateWalletFormValues) => {
    walletMutation.mutate(
      {
        address: values.wallet_address,
        chain: values.chain,
        name: values.label,
      },
      {
        onSuccess: () => {
          toast({
            title: 'Wallet added',
            description: "We'll start watching activity instantly.",
          });

          router.push('/dashboard');
        },

        onError: (error) => {
          toast({
            variant: 'destructive',
            title: 'Failed to add wallet',
            description:
              error.message || 'Something went wrong. Please try again.',
          });
        },
      }
    );
  };

  return (
    <div className="max-w-2xl space-y-10">
      {/* Header */}

      <header>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          New wallet
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold mt-2 leading-tight tracking-tight">
          Add a wallet to watch.
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Paste any public address. We'll monitor on-chain activity and notify
          you in real time.
        </p>
      </header>

      {/* Card */}

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        {/* Card Header */}

        <div className="px-6 py-4 border-b border-border bg-secondary/30 flex items-center gap-3">
          <span className="h-7 w-7 rounded-md bg-secondary flex items-center justify-center shrink-0">
            <Wallet className="h-3.5 w-3.5 text-muted-foreground" />
          </span>

          <div>
            <p className="text-sm font-medium">Wallet details</p>

            <p className="text-xs text-muted-foreground">
              All fields except label are required
            </p>
          </div>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-6 space-y-6">
          {/* Chain */}

          <div className="space-y-2">
            <Label className="text-sm font-medium">Blockchain</Label>

            <Controller
              control={control}
              name="chain"
              render={({ field }) => (
                <ChainSelector value={field.value} onChange={field.onChange} />
              )}
            />
          </div>

          {/* Address */}

          <div className="space-y-2">
            <Label htmlFor="address" className="text-sm font-medium">
              Wallet address
            </Label>

            <div className="relative">
              <Input
                id="address"
                placeholder={
                  chain === 'solana'
                    ? 'Solana base58 address…'
                    : '0x… Ethereum-style address'
                }
                className="h-11 font-mono text-sm rounded-xl pr-9"
                {...register('wallet_address')}
              />
            </div>

            {errors.wallet_address && (
              <p className="text-xs text-destructive">
                {errors.wallet_address.message}
              </p>
            )}
          </div>

          {/* Label */}

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="label" className="text-sm font-medium">
                Label
              </Label>

              <span className="text-xs text-muted-foreground font-mono">
                optional · {label.length}/60
              </span>
            </div>

            <Input
              id="label"
              placeholder="e.g. Treasury, Trading desk"
              maxLength={60}
              className="h-11 rounded-xl"
              {...register('label')}
            />
          </div>

          {/* Submit */}

          <div className="flex gap-3 pt-2">
            <Button
              type="submit"
              disabled={walletMutation.isPending}
              className="rounded-full h-11 px-6 bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
            >
              {walletMutation.isPending ? 'Adding...' : 'Start watching'}

              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWallet;
