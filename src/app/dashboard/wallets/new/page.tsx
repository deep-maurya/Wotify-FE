'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Wallet, X, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CHAINS, type ChainKey } from '@/lib/wotify';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

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
  const navigate = useRouter();
  const [chain, setChain] = useState<ChainKey>('ethereum');
  const [address, setAddress] = useState('');
  const [label, setLabel] = useState('');
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = address.trim();
    if (trimmed.length < 20 || trimmed.length > 80) {
      setErr('Enter a valid wallet address.');
      return;
    }
    setErr(null);
    toast({
      title: 'Wallet added',
      description: "We'll start watching activity instantly.",
    });
    navigate.push('/dashboard');
  };

  return (
    <div className="max-w-2xl space-y-10">
      {/* Page header */}
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

      {/* Form card */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        {/* Card header */}
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

        <form onSubmit={onSubmit} className="px-6 py-6 space-y-6">
          {/* Chain */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Blockchain</Label>
            <ChainSelector value={chain} onChange={setChain} />
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address" className="text-sm font-medium">
              Wallet address
            </Label>
            <div className="relative">
              <Input
                id="address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  setErr(null);
                }}
                placeholder={
                  chain === 'solana'
                    ? 'Solana base58 address…'
                    : '0x… Ethereum-style address'
                }
                className="h-11 font-mono text-sm rounded-xl pr-9"
              />
              {address && (
                <button
                  type="button"
                  onClick={() => setAddress('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            {err && (
              <p className="text-xs text-destructive flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                {err}
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
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="e.g. Treasury, Trading desk"
              maxLength={60}
              className="h-11 rounded-xl"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Button
              type="submit"
              className="rounded-full h-11 px-6 bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
            >
              Start watching
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWallet;
