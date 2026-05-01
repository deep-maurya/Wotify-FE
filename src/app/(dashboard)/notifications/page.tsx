"use client";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Address } from "@/components/wotify/Address";
import { ChainTag } from "@/components/wotify/ChainTag";
import { StatusBadge } from "@/components/wotify/StatusBadge";
import { CHAINS, SAMPLE_EVENTS, type EventStatus } from "@/lib/wotify";

const Notifications = () => {
  const [q, setQ] = useState("");
  const [chain, setChain] = useState<string>("all");
  const [status, setStatus] = useState<string>("all");

  const events = useMemo(() => {
    return SAMPLE_EVENTS.filter((e) => {
      if (chain !== "all" && e.chain !== chain) return false;
      if (status !== "all" && e.status !== status) return false;
      if (q && !`${e.kind} ${e.asset} ${e.walletAddress}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [q, chain, status]);

  return (
    <div className="space-y-10">
      <header>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Notifications</p>
        <h1 className="font-serif text-4xl md:text-5xl mt-2 leading-tight">Activity log</h1>
        <p className="mt-3 text-muted-foreground">Every event, every wallet, every chain — in one place.</p>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search events, assets, addresses…"
            className="h-11 pl-9"
          />
        </div>
        <Select value={chain} onValueChange={setChain}>
          <SelectTrigger className="h-11 w-[180px]"><SelectValue placeholder="Chain" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All chains</SelectItem>
            {CHAINS.map((c) => (
              <SelectItem key={c.key} value={c.key}>{c.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="h-11 w-[180px]"><SelectValue placeholder="Status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            {(["confirmed", "pending", "failed"] as EventStatus[]).map((s) => (
              <SelectItem key={s} value={s}>{s[0].toUpperCase() + s.slice(1)}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="hidden md:grid grid-cols-12 px-5 py-3 border-b border-border text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <div className="col-span-2">Event</div>
          <div className="col-span-3">Amount / asset</div>
          <div className="col-span-3">Wallet</div>
          <div className="col-span-2">Chain</div>
          <div className="col-span-1">Time</div>
          <div className="col-span-1 text-right">Status</div>
        </div>
        <div className="divide-y divide-border">
          {events.length === 0 && (
            <div className="px-5 py-16 text-center text-sm text-muted-foreground">
              No events match your filters.
            </div>
          )}
          {events.map((e) => (
            <div key={e.id} className="grid grid-cols-12 items-center gap-3 px-5 py-4">
              <div className="col-span-6 md:col-span-2 text-sm font-medium">{e.kind}</div>
              <div className="col-span-6 md:col-span-3 font-mono text-sm">
                {e.amount !== "—" && <span>{e.amount} </span>}
                <span className="text-muted-foreground">{e.asset}</span>
              </div>
              <div className="col-span-6 md:col-span-3"><Address value={e.walletAddress} /></div>
              <div className="col-span-6 md:col-span-2"><ChainTag chain={e.chain} /></div>
              <div className="hidden md:block md:col-span-1 text-xs font-mono text-muted-foreground">{e.timestamp.split(" ")[1]}</div>
              <div className="col-span-12 md:col-span-1 flex md:justify-end"><StatusBadge status={e.status} live /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
