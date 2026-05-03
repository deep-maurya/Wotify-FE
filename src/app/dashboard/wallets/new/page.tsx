'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Wallet, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CHAINS, type ChainKey } from '@/lib/wotify';
import { toast } from '@/hooks/use-toast';

const AddWallet = () => {
  const navigate = useRouter();
  const [chain, setChain] = useState<ChainKey>('ethereum');
  const [address, setAddress] = useState('');
  const [label, setLabel] = useState('');
  const [err, setErr] = useState<string | null>(null);

  const selectedChain = CHAINS.find((c) => c.key === chain);

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
            <Select
              value={chain}
              onValueChange={(v) => setChain(v as ChainKey)}
            >
              <SelectTrigger className="h-11 rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CHAINS.map((c) => (
                  <SelectItem key={c.key} value={c.key}>
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: c.color }}
                      />
                      <span>{c.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">
                        · {c.symbol}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
            {/* Chain hint */}
            {selectedChain && (
              <p className="text-xs text-muted-foreground font-mono flex items-center gap-1.5">
                <span
                  className="h-1.5 w-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: selectedChain.color }}
                />
                Monitoring on {selectedChain.name} · {selectedChain.symbol}
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
            <Button
              type="button"
              variant="outline"
              className="rounded-full h-11 px-6 gap-2"
              onClick={() => navigate.back()}
            >
              <X className="h-4 w-4" />
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWallet;
