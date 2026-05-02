'use client';

import Link from 'next/link';
import {
  ArrowUpRight,
  Plus,
  TrendingUp,
  Minus,
  Bell,
  RefreshCw,
  Wallet,
  Activity,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChainTag } from '@/components/wotify/ChainTag';
import { Address } from '@/components/wotify/Address';
import { StatusBadge } from '@/components/wotify/StatusBadge';
import { SAMPLE_EVENTS, SAMPLE_WALLETS } from '@/lib/wotify';

const stats = [
  {
    label: 'Wallets watched',
    value: '3',
    icon: Wallet,
    trend: 'up',
    trendLabel: '+1 this week',
  },
  {
    label: 'Events (24h)',
    value: '47',
    icon: Activity,
    trend: 'up',
    trendLabel: '+12 vs yesterday',
  },
  {
    label: 'Pending alerts',
    value: '2',
    icon: Bell,
    trend: 'neutral',
    trendLabel: 'No change',
  },
  {
    label: 'Chains active',
    value: '3',
    icon: RefreshCw,
    trend: 'neutral',
    trendLabel: 'ETH · SOL · BNB',
  },
];

const TrendIcon = ({ trend }: { trend: string }) => {
  if (trend === 'up')
    return <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />;
  return <Minus className="h-3.5 w-3.5 text-muted-foreground" />;
};

const Dashboard = () => {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="space-y-10">
      {/* Page header */}
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Overview
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2 leading-tight tracking-tight">
            {greeting}, Jane.
          </h1>
          <p className="mt-2 text-muted-foreground text-sm">
            Here's what's moving across your watchlist.
          </p>
        </div>
        <Link href="/wallets/new">
          <Button className="rounded-full h-11 px-5 bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            <Plus className="h-4 w-4" />
            Add wallet
          </Button>
        </Link>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border p-4 md:p-5 bg-card flex flex-col gap-3 hover:border-border/80 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground leading-tight">
                {s.label}
              </span>
              <span className="h-7 w-7 rounded-md bg-secondary flex items-center justify-center shrink-0">
                <s.icon className="h-3.5 w-3.5 text-muted-foreground" />
              </span>
            </div>
            <div className="text-4xl font-semibold tracking-tight leading-none">
              {s.value}
            </div>
            <div className="flex items-center gap-1.5">
              <TrendIcon trend={s.trend} />
              <span className="text-xs text-muted-foreground font-mono">
                {s.trendLabel}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Wallets */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Watched wallets
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              {SAMPLE_WALLETS.length} wallets monitored in real-time
            </p>
          </div>
          <Link
            href="/wallets/new"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
          >
            Manage <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="rounded-xl border border-border overflow-hidden bg-card">
          <div className="hidden md:grid grid-cols-12 px-5 py-3 border-b border-border text-xs font-mono uppercase tracking-widest text-muted-foreground bg-secondary/30">
            <div className="col-span-3">Label</div>
            <div className="col-span-5">Address</div>
            <div className="col-span-2">Chain</div>
            <div className="col-span-2 text-right">Added</div>
          </div>

          <div className="divide-y divide-border">
            {SAMPLE_WALLETS.map((w) => (
              <div
                key={w.id}
                className="px-5 py-4 hover:bg-secondary/20 transition-colors"
              >
                {/* Mobile */}
                <div className="flex items-start justify-between gap-3 md:hidden">
                  <div className="min-w-0">
                    <p className="text-sm font-medium">
                      {w.label ?? 'Untitled'}
                    </p>
                    <div className="mt-1">
                      <Address value={w.address} />
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-col items-end gap-1.5">
                    <ChainTag chain={w.chain} />
                    <span className="text-xs text-muted-foreground font-mono">
                      {w.addedAt}
                    </span>
                  </div>
                </div>

                {/* Desktop */}
                <div className="hidden md:grid grid-cols-12 items-center gap-3">
                  <div className="col-span-3 text-sm font-medium">
                    {w.label ?? 'Untitled'}
                  </div>
                  <div className="col-span-5">
                    <Address value={w.address} />
                  </div>
                  <div className="col-span-2">
                    <ChainTag chain={w.chain} />
                  </div>
                  <div className="col-span-2 text-right text-xs text-muted-foreground font-mono">
                    {w.addedAt}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="px-5 py-3 border-t border-border bg-secondary/20 flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-mono">
              {SAMPLE_WALLETS.length} of 10 wallet slots used
            </span>
            <Link href="/wallets/new">
              <Button
                variant="ghost"
                size="sm"
                className="h-7 text-xs rounded-full gap-1 text-primary hover:text-primary hover:bg-primary/10"
              >
                <Plus className="h-3 w-3" />
                Add wallet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Activity */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Recent activity
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Last 24 hours across all wallets
            </p>
          </div>
          <Link
            href="/notifications"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
          >
            View all <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="hidden md:grid grid-cols-12 px-5 py-3 border-b border-border text-xs font-mono uppercase tracking-widest text-muted-foreground bg-secondary/30">
            <div className="col-span-2">Type</div>
            <div className="col-span-3">Amount</div>
            <div className="col-span-3">Wallet</div>
            <div className="col-span-2">Chain</div>
            <div className="col-span-2 text-right">Status</div>
          </div>

          <div className="divide-y divide-border">
            {SAMPLE_EVENTS.slice(0, 5).map((e) => (
              <div
                key={e.id}
                className="px-5 py-4 hover:bg-secondary/20 transition-colors"
              >
                {/* Mobile */}
                <div className="flex items-start justify-between gap-3 md:hidden">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-medium">{e.kind}</span>
                      <ChainTag chain={e.chain} />
                    </div>
                    <div className="mt-1 font-mono text-sm">
                      {e.amount !== '—' && (
                        <span className="text-foreground">{e.amount} </span>
                      )}
                      <span className="text-muted-foreground">{e.asset}</span>
                    </div>
                    <div className="mt-1">
                      <Address value={e.walletAddress} />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono mt-1 block">
                      {e.timestamp}
                    </span>
                  </div>
                  <div className="shrink-0">
                    <StatusBadge status={e.status} live />
                  </div>
                </div>

                {/* Desktop */}
                <div className="hidden md:grid grid-cols-12 items-center gap-3">
                  <div className="col-span-2">
                    <div className="text-sm font-medium">{e.kind}</div>
                    <div className="text-xs text-muted-foreground font-mono mt-0.5">
                      {e.timestamp}
                    </div>
                  </div>
                  <div className="col-span-3 font-mono text-sm">
                    {e.amount !== '—' && (
                      <span className="text-foreground">{e.amount} </span>
                    )}
                    <span className="text-muted-foreground">{e.asset}</span>
                  </div>
                  <div className="col-span-3">
                    <Address value={e.walletAddress} />
                  </div>
                  <div className="col-span-2">
                    <ChainTag chain={e.chain} />
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <StatusBadge status={e.status} live />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="px-5 py-3 border-t border-border bg-secondary/20 flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-mono">
              Showing 5 of 47 events today
            </span>
            <Link href="/notifications">
              <Button
                variant="ghost"
                size="sm"
                className="h-7 text-xs rounded-full gap-1 text-primary hover:text-primary hover:bg-primary/10"
              >
                View all <ArrowUpRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
