import { Bell, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const alerts = [
  {
    chain: 'ETH',
    chainColor: 'bg-[#627eea]/10 text-[#627eea]',
    title: '0x4f2a…3c91 received funds',
    sub: 'Ethereum Mainnet · Transfer',
    amount: '+2.45 ETH',
    amountColor: 'text-green-600 dark:text-green-400',
    time: 'just now',
  },
  {
    chain: 'SOL',
    chainColor: 'bg-[#9945ff]/10 text-[#9945ff]',
    title: 'DeFi7…9KmP swapped tokens',
    sub: 'Solana · Swap via Jupiter',
    amount: '−840 USDC',
    amountColor: 'text-red-500',
    time: '12s ago',
  },
  {
    chain: 'BNB',
    chainColor: 'bg-[#f0b90b]/10 text-[#b38a08]',
    title: '0xb831…77ea staked tokens',
    sub: 'BNB Chain · Staking',
    amount: '+18.2 BNB',
    amountColor: 'text-green-600 dark:text-green-400',
    time: '34s ago',
  },
  {
    chain: 'POL',
    chainColor: 'bg-[#8247e5]/10 text-[#8247e5]',
    title: '0x99fc…12da bridged assets',
    sub: 'Polygon · Bridge out',
    amount: '−1,200 USDT',
    amountColor: 'text-red-500',
    time: '1m ago',
  },
];

const chains = [
  { name: 'Ethereum', color: '#627eea' },
  { name: 'Solana', color: '#9945ff' },
  { name: 'BNB Chain', color: '#f0b90b' },
  { name: 'Polygon', color: '#8247e5' },
];

export default function HeroSection() {
  return (
    <section>
      <div className="mx-auto max-w-4xl px-6 md:px-10 pt-16 pb-10 md:pt-24 md:pb-16">
        <div className="text-center stagger">
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
            Open your free Wotify account and watch wallets across Ethereum,
            Solana, BNB, Polygon and more — with real-time alerts and zero
            hidden fees.
          </p>

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
            <Link href="/register">
              <Button className="rounded-full h-11 px-6 bg-primary text-primary-foreground hover:bg-primary/90">
                Open free account
              </Button>
            </Link>
          </form>

          {/* Trust badges */}
          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-muted-foreground font-mono">
            {['No credit card', 'Setup in 30 seconds', 'Cancel anytime'].map(
              (t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-green-500/15">
                    <svg
                      className="h-2 w-2 text-green-600"
                      viewBox="0 0 10 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <polyline points="2,5 4.5,7.5 8,3" />
                    </svg>
                  </span>
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
