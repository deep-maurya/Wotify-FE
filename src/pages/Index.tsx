import { Link } from "react-router-dom";
import { ArrowRight, Bell, Eye, Layers, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/wotify/SiteHeader";
import { CHAINS } from "@/lib/wotify";
import { StatusBadge } from "@/components/wotify/StatusBadge";
import { Address } from "@/components/wotify/Address";

const features = [
  {
    icon: Eye,
    title: "Watch any wallet",
    body: "Track treasuries, whales, or your own addresses across every major chain. Tag, group, and organise without limits.",
  },
  {
    icon: Bell,
    title: "Real-time notifications",
    body: "Email, push, and webhook alerts the moment a transfer, swap, or approval lands on-chain. No polling, no delay.",
  },
  {
    icon: Layers,
    title: "Multi-chain by design",
    body: "Ethereum, Solana, BNB Chain, Polygon, Arbitrum, and Base — one inbox for every network you care about.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-10 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="stagger max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              <span className="live-dot bg-success" />
              <span className="font-mono">Live across 6 chains</span>
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight mt-6">
              Notifications for
              <br />
              every wallet you watch.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Wotify is the wallet activity layer for serious on-chain operators. Monitor addresses across
              chains and get alerted the second something moves.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/register">
                <Button size="lg" className="rounded-full h-12 px-6 text-sm">
                  Start watching free <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="rounded-full h-12 px-6 text-sm">
                  View live demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero card preview */}
          <div className="mt-16 md:mt-20 rounded-xl border border-border bg-card overflow-hidden card-hover">
            <div className="flex items-center justify-between border-b border-border px-5 h-12">
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                wotify.app/dashboard
              </div>
              <span className="font-mono text-xs text-muted-foreground">live feed</span>
            </div>
            <div className="divide-y divide-border">
              {[
                { kind: "Transfer", asset: "1.250 ETH", status: "confirmed" as const, addr: "0x8aE2C4f2bD9C6d61b2A1Bf7C4e9D5a3b8C7e6F12" },
                { kind: "Swap",     asset: "420 USDC → SOL", status: "confirmed" as const, addr: "9xQeWv2pE7K4mN3rT8sZ1qF5bL6yU0vC3dHnJaP4MzX2" },
                { kind: "Approval", asset: "USDT spend cap", status: "pending" as const, addr: "0x4F46E58D9bD2C4f2bD9C6d61b2A1Bf7C4e9D5a3b" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-12 items-center px-5 py-4 gap-4">
                  <div className="col-span-3 md:col-span-2 text-sm font-medium">{row.kind}</div>
                  <div className="col-span-5 md:col-span-5 text-sm text-muted-foreground font-mono">{row.asset}</div>
                  <div className="hidden md:block md:col-span-3"><Address value={row.addr} /></div>
                  <div className="col-span-4 md:col-span-2 flex justify-end"><StatusBadge status={row.status} live /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Features</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">Built for the way you watch wallets.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-border p-7 card-hover bg-card">
                <f.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <h3 className="mt-6 text-lg font-medium">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chains */}
      <section id="chains" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Networks</p>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">One feed. Every chain.</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Plug in any address and Wotify auto-detects activity across the networks it supports.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-12">
            {CHAINS.map((c) => (
              <div key={c.key} className="rounded-xl border border-border bg-card p-5 card-hover">
                <span className="h-3 w-3 rounded-full inline-block" style={{ backgroundColor: c.color }} />
                <div className="mt-4 text-sm font-medium">{c.name}</div>
                <div className="mt-1 font-mono text-xs text-muted-foreground">{c.symbol}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How */}
      <section id="how" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 grid md:grid-cols-3 gap-10">
          {[
            { icon: ShieldCheck, n: "01", t: "Create your account", b: "Sign up in under 30 seconds. No wallet connect required." },
            { icon: Zap,         n: "02", t: "Add wallets to watch", b: "Paste an address, pick a chain, label it. Done." },
            { icon: Bell,        n: "03", t: "Get notified instantly", b: "Receive alerts the moment activity is detected on-chain." },
          ].map((s) => (
            <div key={s.n}>
              <div className="font-mono text-xs text-muted-foreground">{s.n}</div>
              <s.icon className="h-5 w-5 mt-4 text-primary" strokeWidth={1.75} />
              <h3 className="mt-5 font-serif text-2xl">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24">
          <div className="rounded-2xl border border-border p-10 md:p-16 bg-card">
            <h2 className="font-serif text-4xl md:text-6xl leading-tight max-w-3xl">
              Stop refreshing block explorers.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl">
              Wotify watches for you — quietly, accurately, and across every chain that matters.
            </p>
            <div className="mt-10">
              <Link to="/register">
                <Button size="lg" className="rounded-full h-12 px-6">
                  Create your account <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-10 h-20 flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-mono">© 2026 Wotify Labs</span>
          <span className="font-mono">v1.0 — built for on-chain operators</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
