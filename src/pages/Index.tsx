import { Link } from "react-router-dom";
import { ArrowRight, Bell, Eye, Layers, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/wotify/SiteHeader";
import { Ticker } from "@/components/wotify/Ticker";
import { CHAINS } from "@/lib/wotify";
import { StatusBadge } from "@/components/wotify/StatusBadge";
import { Address } from "@/components/wotify/Address";
import heroImage from "@/assets/wotify-hero.png";

const features = [
  {
    icon: Eye,
    title: "Watch any wallet",
    body: "Track treasuries, whales, or your own addresses across every major chain. Tag, group, organise without limits.",
  },
  {
    icon: Bell,
    title: "Real-time notifications",
    body: "Email, push, and webhook alerts the moment a transfer, swap, or approval lands on-chain. No polling, no delay.",
  },
  {
    icon: Layers,
    title: "Multi-chain by design",
    body: "Ethereum, Solana, BNB Chain, Polygon, Arbitrum and Base — one inbox for every network you care about.",
  },
  {
    icon: ShieldCheck,
    title: "Security & trust",
    body: "Read-only watching. We never touch your keys, never request signatures, never custody assets.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Ticker />

      {/* Hero */}
      <section>
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-16 pb-10 md:pt-24 md:pb-16">
          <div className="text-center max-w-4xl mx-auto stagger">
            <span className="pill-accent">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted by 4,200+ on-chain operators · 6 chains live
            </span>
            <h1 className="mt-7 text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
              Fast & Smart Wallet
              <br />
              Notifications for Everyone
            </h1>
            <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Open your free Wotify account and watch wallets across Ethereum, Solana, BNB,
              Polygon and more — with real-time alerts and zero hidden fees.
            </p>

            {/* Pill input + CTA */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 mx-auto max-w-xl flex items-center gap-1 rounded-full bg-surface border border-border p-1.5 shadow-[0_8px_30px_-12px_hsl(158_60%_12%/0.15)]"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary shrink-0">
                <Bell className="h-4 w-4" />
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-0 outline-none text-sm px-2 placeholder:text-muted-foreground"
              />
              <Link to="/register">
                <Button className="rounded-full h-11 px-6 bg-primary text-primary-foreground hover:bg-primary/90">
                  Open free account
                </Button>
              </Link>
            </form>

            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-muted-foreground font-mono">
              <span>✓ No credit card</span>
              <span>✓ Setup in 30 seconds</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>

          {/* Hero illustration */}
          <div className="relative mt-12 md:mt-16 flex items-center justify-center">
            <div className="absolute -left-4 md:left-10 top-1/2 -translate-y-1/2 hidden md:block">
              <div className="rounded-2xl border border-border bg-surface px-4 py-3 shadow-sm">
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">SEBI of Web3</div>
                <div className="text-sm font-semibold mt-0.5">Read-only · Audited</div>
              </div>
            </div>
            <div className="absolute -right-4 md:right-10 top-1/3 hidden md:block">
              <div className="rounded-2xl border border-border bg-surface px-4 py-3 shadow-sm">
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">SOC 2</div>
                <div className="text-sm font-semibold mt-0.5">Type II Certified</div>
              </div>
            </div>
            <img
              src={heroImage}
              alt="Wotify dashboard preview with floating crypto coins"
              className="relative w-full max-w-3xl mx-auto"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Why Wotify */}
      <section id="features" className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Why operators choose <span className="font-serif italic">Wotify</span>?
            </h2>
            <p className="mt-4 text-muted-foreground">
              The all-in-one wallet activity layer — built for treasuries, traders, and serious on-chain teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {features.map((f) => (
              <div key={f.title} className="rounded-3xl bg-background border border-border p-7 card-hover">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/40">
                  <f.icon className="h-5 w-5 text-foreground" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live preview */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="pill-accent">Live feed</span>
              <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                Every transfer, every swap — the second it happens.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Wotify streams on-chain events directly from nodes we operate. Sub-second latency,
                rich metadata, and clean status indicators so you always know what's confirmed.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/register">
                  <Button className="rounded-full h-11 px-5 bg-primary text-primary-foreground hover:bg-primary/90">
                    Get started <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" className="rounded-full h-11 px-5">
                    View live demo
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-surface overflow-hidden card-hover">
              <div className="flex items-center justify-between border-b border-border px-5 h-12">
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-positive animate-pulse" />
                  wotify.app/dashboard
                </div>
                <span className="font-mono text-xs text-muted-foreground">live</span>
              </div>
              <div className="divide-y divide-border">
                {[
                  { kind: "Transfer", asset: "1.250 ETH",          status: "confirmed" as const, addr: "0x8aE2C4f2bD9C6d61b2A1Bf7C4e9D5a3b8C7e6F12" },
                  { kind: "Swap",     asset: "420 USDC → SOL",     status: "confirmed" as const, addr: "9xQeWv2pE7K4mN3rT8sZ1qF5bL6yU0vC3dHnJaP4MzX2" },
                  { kind: "Approval", asset: "USDT spend cap",     status: "pending"   as const, addr: "0x4F46E58D9bD2C4f2bD9C6d61b2A1Bf7C4e9D5a3b" },
                  { kind: "Stake",    asset: "32.000 ETH",         status: "confirmed" as const, addr: "0x8aE2C4f2bD9C6d61b2A1Bf7C4e9D5a3b8C7e6F12" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-12 items-center px-5 py-4 gap-3">
                    <div className="col-span-3 text-sm font-semibold">{row.kind}</div>
                    <div className="col-span-5 text-sm text-muted-foreground font-mono">{row.asset}</div>
                    <div className="hidden md:block md:col-span-2"><Address value={row.addr} /></div>
                    <div className="col-span-9 md:col-span-2 flex justify-end"><StatusBadge status={row.status} live /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chains */}
      <section id="chains" className="bg-surface border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="pill-accent">Networks</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              One feed. Every chain.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Plug in any address and Wotify auto-detects activity across the networks it supports.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-14">
            {CHAINS.map((c) => (
              <div key={c.key} className="rounded-2xl border border-border bg-background p-5 card-hover text-center">
                <span className="h-10 w-10 mx-auto rounded-full grid place-items-center" style={{ backgroundColor: `${c.color}22` }}>
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: c.color }} />
                </span>
                <div className="mt-4 text-sm font-semibold">{c.name}</div>
                <div className="mt-0.5 font-mono text-xs text-muted-foreground">{c.symbol}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How */}
      <section id="how-it-works" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="pill-accent">How it works</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              Watching wallets, simplified.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, n: "01", t: "Create your account", b: "Sign up in under 30 seconds. No wallet connect required." },
              { icon: Zap,         n: "02", t: "Add wallets to watch", b: "Paste an address, pick a chain, label it. Done." },
              { icon: Bell,        n: "03", t: "Get notified instantly", b: "Real-time alerts the moment activity hits the chain." },
            ].map((s) => (
              <div key={s.n} className="rounded-3xl border border-border bg-surface p-8 card-hover">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/40">
                    <s.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="pricing">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
          <div className="rounded-[2rem] bg-primary text-primary-foreground p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                Stop refreshing block explorers.
              </h2>
              <p className="mt-5 text-primary-foreground/70 text-lg max-w-xl">
                Wotify watches for you — quietly, accurately, across every chain that matters.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/register">
                  <Button size="lg" className="rounded-full h-12 px-6 bg-accent text-accent-foreground hover:bg-accent/90">
                    Open free account <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button size="lg" variant="outline" className="rounded-full h-12 px-6 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                    Try the demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <span className="font-mono">© 2026 Wotify Labs · Built for on-chain operators</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
