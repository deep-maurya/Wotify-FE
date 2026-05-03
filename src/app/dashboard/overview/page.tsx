'use client';

import { useState, useEffect } from 'react';
import {
  RefreshCw,
  Plus,
  TrendingUp,
  TrendingDown,
  Minus,
  Wallet,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Address } from '@/components/wotify/Address';
import { ChainTag } from '@/components/wotify/ChainTag';
import { SAMPLE_WALLETS, CHAINS, ChainKey } from '@/lib/wotify';

type WalletBalance = {
  id: string;
  label: string;
  address: string;
  chain: ChainKey;
  balance: string;
  balanceUsd: number;
  token: string;
  change24h: number;
  lastUpdated: string;
  status: 'live' | 'syncing' | 'error';
};

// Simulate fetched balances — replace with real API calls per chain
const MOCK_BALANCES: WalletBalance[] = [
  {
    id: '1',
    label: 'Treasury',
    address: '0x4f2a...3c91',
    chain: 'ethereum',
    balance: '12.4821',
    balanceUsd: 41230.5,
    token: 'ETH',
    change24h: 2.4,
    lastUpdated: 'just now',
    status: 'live',
  },
  {
    id: '2',
    label: 'Trading desk',
    address: 'DeFi7...9KmP',
    chain: 'solana',
    balance: '840.00',
    balanceUsd: 12480.0,
    token: 'SOL',
    change24h: -1.2,
    lastUpdated: '30s ago',
    status: 'live',
  },
  {
    id: '3',
    label: 'Hot wallet',
    address: '0xb831...77ea',
    chain: 'bnb',
    balance: '18.2',
    balanceUsd: 5460.0,
    token: 'BNB',
    change24h: 0.0,
    lastUpdated: '1m ago',
    status: 'syncing',
  },
];

const totalUsd = MOCK_BALANCES.reduce((s, w) => s + w.balanceUsd, 0);
const bestPerformer = [...MOCK_BALANCES].sort(
  (a, b) => b.change24h - a.change24h
)[0];
const worstPerformer = [...MOCK_BALANCES].sort(
  (a, b) => a.change24h - b.change24h
)[0];

const fmt = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    n
  );

const ChangeChip = ({ value }: { value: number }) => {
  if (value > 0)
    return (
      <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-600 dark:text-emerald-400">
        <TrendingUp className="h-3 w-3" />+{value.toFixed(2)}%
      </span>
    );
  if (value < 0)
    return (
      <span className="inline-flex items-center gap-1 text-xs font-mono text-red-500">
        <TrendingDown className="h-3 w-3" />
        {value.toFixed(2)}%
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground">
      <Minus className="h-3 w-3" />
      0.00%
    </span>
  );
};

const StatusDot = ({ status }: { status: WalletBalance['status'] }) => {
  if (status === 'live')
    return (
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
    );
  if (status === 'syncing')
    return (
      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
    );
  return <span className="h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />;
};

const BalanceOverview = () => {
  const [balances, setBalances] = useState<WalletBalance[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastSync, setLastSync] = useState('');

  const load = async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);
    // Simulate network fetch — replace with real per-chain RPC/API calls
    await new Promise((r) => setTimeout(r, 1200));
    setBalances(MOCK_BALANCES);
    setLastSync(new Date().toLocaleTimeString());
    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    load();
  }, []);

  const total = balances.reduce((s, w) => s + w.balanceUsd, 0);

  return (
    <div className="space-y-10">
      {/* Page header */}
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Portfolio
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2 leading-tight tracking-tight">
            Balance overview
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Live balances fetched across all watched wallets.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {lastSync && (
            <span className="text-xs text-muted-foreground font-mono">
              Synced {lastSync}
            </span>
          )}
          <Button
            variant="outline"
            size="sm"
            className="rounded-full h-9 px-4 gap-2"
            onClick={() => load(true)}
            disabled={refreshing || loading}
          >
            <RefreshCw
              className={`h-3.5 w-3.5 ${refreshing ? 'animate-spin' : ''}`}
            />
            Refresh
          </Button>
          <Link href="/wallets/new">
            <Button
              size="sm"
              className="rounded-full h-9 px-4 gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Plus className="h-3.5 w-3.5" />
              Add wallet
            </Button>
          </Link>
        </div>
      </header>

      {/* Summary stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="col-span-2 rounded-xl border border-border p-4 md:p-5 bg-card flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Total portfolio value
          </span>
          {loading ? (
            <div className="h-10 w-40 rounded-lg bg-secondary animate-pulse" />
          ) : (
            <span className="text-4xl font-semibold tracking-tight leading-none">
              {fmt(total)}
            </span>
          )}
          <span className="text-xs text-muted-foreground font-mono">
            Across {balances.length} wallets
          </span>
        </div>
        <div className="rounded-xl border border-border p-4 md:p-5 bg-card flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Best 24h
          </span>
          {loading ? (
            <div className="h-10 w-20 rounded-lg bg-secondary animate-pulse" />
          ) : (
            <span className="text-4xl font-semibold tracking-tight leading-none text-emerald-500">
              +{bestPerformer.change24h.toFixed(1)}%
            </span>
          )}
          <span className="text-xs text-muted-foreground font-mono truncate">
            {bestPerformer.label}
          </span>
        </div>
        <div className="rounded-xl border border-border p-4 md:p-5 bg-card flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Worst 24h
          </span>
          {loading ? (
            <div className="h-10 w-20 rounded-lg bg-secondary animate-pulse" />
          ) : (
            <span className="text-4xl font-semibold tracking-tight leading-none text-red-500">
              {worstPerformer.change24h.toFixed(1)}%
            </span>
          )}
          <span className="text-xs text-muted-foreground font-mono truncate">
            {worstPerformer.label}
          </span>
        </div>
      </section>

      {/* Balance table */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Wallet balances
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Fetched live from each chain's RPC
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden">
          {/* Desktop header */}
          <div className="hidden md:grid grid-cols-12 px-5 py-3 border-b border-border text-xs font-mono uppercase tracking-widest text-muted-foreground bg-secondary/30">
            <div className="col-span-3">Wallet</div>
            <div className="col-span-3">Address</div>
            <div className="col-span-2">Chain</div>
            <div className="col-span-2 text-right">Balance</div>
            <div className="col-span-1 text-right">24h</div>
            <div className="col-span-1 text-right">USD</div>
          </div>

          <div className="divide-y divide-border">
            {loading &&
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="px-5 py-4 flex items-center gap-4">
                  <div className="h-4 w-24 rounded bg-secondary animate-pulse" />
                  <div className="h-4 w-32 rounded bg-secondary animate-pulse" />
                  <div className="h-4 w-16 rounded bg-secondary animate-pulse ml-auto" />
                </div>
              ))}

            {!loading &&
              balances.map((w) => (
                <div
                  key={w.id}
                  className="px-5 py-4 hover:bg-secondary/20 transition-colors"
                >
                  {/* Mobile */}
                  <div className="flex items-start justify-between gap-3 md:hidden">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <StatusDot status={w.status} />
                        <span className="text-sm font-medium">{w.label}</span>
                        <ChainTag chain={w.chain} />
                      </div>
                      <div className="mt-1">
                        <Address value={w.address} />
                      </div>
                      <div className="mt-1.5 flex items-center gap-3">
                        <span className="text-sm font-mono font-medium">
                          {w.balance} {w.token}
                        </span>
                        <ChangeChip value={w.change24h} />
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-sm font-semibold">
                        {fmt(w.balanceUsd)}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono mt-1">
                        {w.lastUpdated}
                      </p>
                    </div>
                  </div>

                  {/* Desktop */}
                  <div className="hidden md:grid grid-cols-12 items-center gap-3">
                    <div className="col-span-3 flex items-center gap-2">
                      <StatusDot status={w.status} />
                      <div>
                        <p className="text-sm font-medium">{w.label}</p>
                        <p className="text-xs text-muted-foreground font-mono">
                          {w.lastUpdated}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <Address value={w.address} />
                    </div>
                    <div className="col-span-2">
                      <ChainTag chain={w.chain} />
                    </div>
                    <div className="col-span-2 text-right font-mono text-sm">
                      {w.balance} {w.token}
                    </div>
                    <div className="col-span-1 flex justify-end">
                      <ChangeChip value={w.change24h} />
                    </div>
                    <div className="col-span-1 text-right">
                      <p className="text-sm font-semibold">
                        {fmt(w.balanceUsd)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Footer */}
          {!loading && (
            <div className="px-5 py-3 border-t border-border bg-secondary/20 flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-mono">
                Total · {fmt(total)}
              </span>
              <Link
                href="/wallets/new"
                className="text-xs text-primary hover:text-primary/80 font-medium transition-colors inline-flex items-center gap-1"
              >
                <Plus className="h-3 w-3" />
                Add wallet
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Per-wallet breakdown */}
      {!loading && (
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-semibold tracking-tight">Allocation</h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Portfolio share per wallet
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="px-5 py-4 space-y-4">
              {balances.map((w) => {
                const pct = total > 0 ? (w.balanceUsd / total) * 100 : 0;
                const chain = CHAINS.find((c) => c.key === w.chain);
                return (
                  <div key={w.id}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span
                          className="h-2.5 w-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: chain?.color ?? '#888' }}
                        />
                        <span className="text-sm font-medium">{w.label}</span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {w.token}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <ChangeChip value={w.change24h} />
                        <span className="text-sm font-semibold">
                          {fmt(w.balanceUsd)}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono w-10 text-right">
                          {pct.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: chain?.color ?? '#6366f1',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BalanceOverview;
