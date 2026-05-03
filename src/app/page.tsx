'use client';
import Link from 'next/link';
import {
  ArrowRight,
  Bell,
  Eye,
  Layers,
  ShieldCheck,
  Zap,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteHeader } from '@/components/wotify/SiteHeader';
import { Ticker } from '@/components/wotify/Ticker';
import { CHAINS } from '@/lib/wotify';
import { StatusBadge } from '@/components/wotify/StatusBadge';
import { Address } from '@/components/wotify/Address';
import HeroSection from '@/components/wotify/HeroSection';
import Footer from '@/components/wotify/Footer';

const features = [
  {
    icon: Eye,
    title: 'Watch any wallet',
    body: 'Track treasuries, whales, or your own addresses across every major chain. Tag, group, organise without limits.',
  },
  {
    icon: Bell,
    title: 'Real-time notifications',
    body: 'Email, push, and webhook alerts the moment a transfer, swap, or approval lands on-chain. No polling, no delay.',
  },
  {
    icon: Layers,
    title: 'Multi-chain by design',
    body: 'Ethereum, Solana, BNB Chain, Polygon, Arbitrum and Base — one inbox for every network you care about.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & trust',
    body: 'Read-only watching. We never touch your keys, never request signatures, never custody assets.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Ticker />

      {/* Hero */}
      <HeroSection />

      {/* Why Wotify */}
      <section id="features" className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Why operators choose{' '}
              <span className="font-serif italic">Wotify</span>?
            </h2>
            <p className="mt-4 text-muted-foreground">
              The all-in-one wallet activity layer — built for treasuries,
              traders, and serious on-chain teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl bg-background border border-border p-7 card-hover"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/40">
                  <f.icon
                    className="h-5 w-5 text-foreground"
                    strokeWidth={1.75}
                  />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {f.body}
                </p>
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
                Wotify streams on-chain events directly from nodes we operate.
                Sub-second latency, rich metadata, and clean status indicators
                so you always know what's confirmed.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/register">
                  <Button className="rounded-full h-11 px-5 bg-primary text-primary-foreground hover:bg-primary/90">
                    Get started <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/dashboard">
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
                <span className="font-mono text-xs text-muted-foreground">
                  live
                </span>
              </div>
              <div className="divide-y divide-border">
                {[
                  {
                    kind: 'Transfer',
                    asset: '1.250 ETH',
                    status: 'confirmed' as const,
                    addr: '0x8aE2C4f2bD9C6d61b2A1Bf7C4e9D5a3b8C7e6F12',
                  },
                  {
                    kind: 'Swap',
                    asset: '420 USDC → SOL',
                    status: 'confirmed' as const,
                    addr: '9xQeWv2pE7K4mN3rT8sZ1qF5bL6yU0vC3dHnJaP4MzX2',
                  },
                  {
                    kind: 'Approval',
                    asset: 'USDT spend cap',
                    status: 'pending' as const,
                    addr: '0x4F46E58D9bD2C4f2bD9C6d61b2A1Bf7C4e9D5a3b',
                  },
                  {
                    kind: 'Stake',
                    asset: '32.000 ETH',
                    status: 'confirmed' as const,
                    addr: '0x8aE2C4f2bD9C6d61b2A1Bf7C4e9D5a3b8C7e6F12',
                  },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-12 items-center px-5 py-4 gap-3"
                  >
                    <div className="col-span-3 text-sm font-semibold">
                      {row.kind}
                    </div>
                    <div className="col-span-5 text-sm text-muted-foreground font-mono">
                      {row.asset}
                    </div>
                    <div className="hidden md:block md:col-span-2">
                      <Address value={row.addr} />
                    </div>
                    <div className="col-span-9 md:col-span-2 flex justify-end">
                      <StatusBadge status={row.status} live />
                    </div>
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
              Plug in any address and Wotify auto-detects activity across the
              networks it supports.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-14">
            {CHAINS.map((c) => {
              const Logo = c.logo;
              return (
                <div
                  key={c.key}
                  className="rounded-2xl border border-border bg-background p-5 text-center"
                >
                  <div className="flex items-center justify-center h-12 w-12 mx-auto">
                    <Logo />
                  </div>

                  <div className="mt-4 text-sm font-semibold">{c.name}</div>
                  <div className="mt-0.5 font-mono text-xs text-muted-foreground">
                    {c.symbol}
                  </div>
                </div>
              );
            })}
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
              {
                icon: ShieldCheck,
                n: '1',
                t: 'Create your account',
                b: 'Sign up in under 30 seconds. No wallet connect required.',
              },
              {
                icon: Zap,
                n: '2',
                t: 'Add wallets to watch',
                b: 'Paste an address, pick a chain, label it. Done.',
              },
              {
                icon: Bell,
                n: '3',
                t: 'Get notified instantly',
                b: 'Real-time alerts the moment activity hits the chain.',
              },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-3xl relative border overflow-hidden border-border bg-surface p-8 card-hover"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/40">
                    <s.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono absolute right-[-30] bottom-[-60] font-extrabold  text-[150px] text-primary/70 pointer-events-none select-none">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.b}
                </p>
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
                Wotify watches for you — quietly, accurately, across every chain
                that matters.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="rounded-full h-12 px-6 bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Open free account <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full h-12 px-6 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    Try the demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
