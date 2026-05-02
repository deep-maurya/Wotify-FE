'use client';

import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Address } from '@/components/wotify/Address';
import { ChainTag } from '@/components/wotify/ChainTag';
import { StatusBadge } from '@/components/wotify/StatusBadge';
import { CHAINS, SAMPLE_EVENTS, type EventStatus } from '@/lib/wotify';

const Notifications = () => {
  const [q, setQ] = useState('');
  const [chain, setChain] = useState<string>('all');
  const [status, setStatus] = useState<string>('all');

  const events = useMemo(() => {
    return SAMPLE_EVENTS.filter((e) => {
      if (chain !== 'all' && e.chain !== chain) return false;
      if (status !== 'all' && e.status !== status) return false;
      if (
        q &&
        !`${e.kind} ${e.asset} ${e.walletAddress}`
          .toLowerCase()
          .includes(q.toLowerCase())
      )
        return false;
      return true;
    });
  }, [q, chain, status]);

  const confirmedCount = SAMPLE_EVENTS.filter(
    (e) => e.status === 'confirmed'
  ).length;
  const pendingCount = SAMPLE_EVENTS.filter(
    (e) => e.status === 'pending'
  ).length;
  const failedCount = SAMPLE_EVENTS.filter((e) => e.status === 'failed').length;

  return (
    <div className="space-y-10">
      {/* Page header */}
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Notifications
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2 leading-tight tracking-tight">
            Activity log
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Every event, every wallet, every chain — in one place.
          </p>
        </div>
      </header>

      {/* Summary stats */}
      <section className="grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-border p-4 md:p-5 bg-card flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Total events
          </span>
          <span className="text-4xl font-semibold tracking-tight leading-none">
            {SAMPLE_EVENTS.length}
          </span>
          <span className="text-xs text-muted-foreground font-mono">
            All time
          </span>
        </div>
        <div className="rounded-xl border border-border p-4 md:p-5 bg-card flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Confirmed
          </span>
          <span className="text-4xl font-semibold tracking-tight leading-none text-emerald-500">
            {confirmedCount}
          </span>
          <span className="text-xs text-muted-foreground font-mono">
            {Math.round((confirmedCount / SAMPLE_EVENTS.length) * 100)}% success
            rate
          </span>
        </div>
        <div className="rounded-xl border border-border p-4 md:p-5 bg-card flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Pending
          </span>
          <span className="text-4xl font-semibold tracking-tight leading-none text-amber-500">
            {pendingCount}
          </span>
          <span className="text-xs text-muted-foreground font-mono">
            {failedCount} failed
          </span>
        </div>
      </section>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search events, assets, addresses…"
            className="h-11 pl-9 rounded-xl"
          />
        </div>
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-muted-foreground shrink-0" />
          <Select value={chain} onValueChange={setChain}>
            <SelectTrigger className="h-11 w-[160px] rounded-xl">
              <SelectValue placeholder="Chain" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All chains</SelectItem>
              {CHAINS.map((c) => (
                <SelectItem key={c.key} value={c.key}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="h-11 w-[160px] rounded-xl">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              {(['confirmed', 'pending', 'failed'] as EventStatus[]).map(
                (s) => (
                  <SelectItem key={s} value={s}>
                    {s[0].toUpperCase() + s.slice(1)}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        {/* Desktop header */}
        <div className="hidden md:grid grid-cols-12 px-5 py-3 border-b border-border text-xs font-mono uppercase tracking-widest text-muted-foreground bg-secondary/30">
          <div className="col-span-2">Event</div>
          <div className="col-span-3">Amount / asset</div>
          <div className="col-span-3">Wallet</div>
          <div className="col-span-2">Chain</div>
          <div className="col-span-1">Time</div>
          <div className="col-span-1 text-right">Status</div>
        </div>

        <div className="divide-y divide-border">
          {events.length === 0 && (
            <div className="px-5 py-20 text-center">
              <Search className="h-8 w-8 text-muted-foreground/40 mx-auto mb-3" />
              <p className="text-sm font-medium text-muted-foreground">
                No events match your filters
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {events.map((e) => (
            <div
              key={e.id}
              className="px-5 py-4 hover:bg-secondary/20 transition-colors"
            >
              {/* Mobile layout */}
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

              {/* Desktop layout */}
              <div className="hidden md:grid grid-cols-12 items-center gap-3">
                <div className="col-span-2 text-sm font-medium">{e.kind}</div>
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
                <div className="col-span-1 text-xs font-mono text-muted-foreground">
                  {e.timestamp.split(' ')[1]}
                </div>
                <div className="col-span-1 flex justify-end">
                  <StatusBadge status={e.status} live />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {events.length > 0 && (
          <div className="px-5 py-3 border-t border-border bg-secondary/20 flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-mono">
              Showing {events.length} of {SAMPLE_EVENTS.length} events
            </span>
            {(q || chain !== 'all' || status !== 'all') && (
              <button
                onClick={() => {
                  setQ('');
                  setChain('all');
                  setStatus('all');
                }}
                className="text-xs text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
