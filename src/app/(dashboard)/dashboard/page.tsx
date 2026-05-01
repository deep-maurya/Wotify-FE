"use client";
import Link from "next/link";
;
import { ArrowUpRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChainTag } from "@/components/wotify/ChainTag";
import { Address } from "@/components/wotify/Address";
import { StatusBadge } from "@/components/wotify/StatusBadge";
import { SAMPLE_EVENTS, SAMPLE_WALLETS } from "@/lib/wotify";

const stats = [
  { label: "Wallets watched", value: "3" },
  { label: "Events (24h)", value: "47" },
  { label: "Pending alerts", value: "2" },
  { label: "Chains active", value: "3" },
];

const Dashboard = () => {
  return (
    <div className="space-y-12">
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Overview</p>
          <h1 className="font-serif text-4xl md:text-5xl mt-2 leading-tight">Good morning, Jane.</h1>
          <p className="mt-2 text-muted-foreground">Here's what's moving across your watchlist.</p>
        </div>
        <Link href="/wallets/new">
          <Button className="rounded-full h-11 px-5">
            <Plus className="h-4 w-4 mr-1" /> Add wallet
          </Button>
        </Link>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border p-5 card-hover bg-card">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
            <div className="font-serif text-4xl mt-3">{s.value}</div>
          </div>
        ))}
      </section>

      {/* Wallets */}
      <section>
        <div className="flex items-end justify-between mb-5">
          <h2 className="font-serif text-2xl">Watched wallets</h2>
          <Link href="/wallets/new" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
            Manage <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="rounded-xl border border-border overflow-hidden bg-card">
          <div className="hidden md:grid grid-cols-12 px-5 py-3 border-b border-border text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <div className="col-span-3">Label</div>
            <div className="col-span-5">Address</div>
            <div className="col-span-2">Chain</div>
            <div className="col-span-2 text-right">Added</div>
          </div>
          <div className="divide-y divide-border">
            {SAMPLE_WALLETS.map((w) => (
              <div key={w.id} className="grid grid-cols-12 items-center px-5 py-4 gap-3">
                <div className="col-span-12 md:col-span-3 text-sm font-medium">{w.label ?? "Untitled"}</div>
                <div className="col-span-12 md:col-span-5"><Address value={w.address} /></div>
                <div className="col-span-6 md:col-span-2"><ChainTag chain={w.chain} /></div>
                <div className="col-span-6 md:col-span-2 text-right text-xs text-muted-foreground font-mono">{w.addedAt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity */}
      <section>
        <div className="flex items-end justify-between mb-5">
          <h2 className="font-serif text-2xl">Recent activity</h2>
          <Link href="/notifications" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
            View all <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="rounded-xl border border-border bg-card divide-y divide-border">
          {SAMPLE_EVENTS.slice(0, 5).map((e) => (
            <div key={e.id} className="grid grid-cols-12 items-center gap-3 px-5 py-4">
              <div className="col-span-3 md:col-span-2">
                <div className="text-sm font-medium">{e.kind}</div>
                <div className="text-xs text-muted-foreground font-mono mt-0.5">{e.timestamp}</div>
              </div>
              <div className="col-span-5 md:col-span-4 font-mono text-sm">
                {e.amount !== "—" && <span className="text-foreground">{e.amount} </span>}
                <span className="text-muted-foreground">{e.asset}</span>
              </div>
              <div className="hidden md:block md:col-span-3"><Address value={e.walletAddress} /></div>
              <div className="hidden md:block md:col-span-1"><ChainTag chain={e.chain} /></div>
              <div className="col-span-4 md:col-span-2 flex justify-end"><StatusBadge status={e.status} live /></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
