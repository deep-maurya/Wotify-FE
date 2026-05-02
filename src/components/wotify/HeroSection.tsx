import { Bell, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section>
      <div className="mx-auto max-w-4xl px-6 md:px-10 pt-16 pb-10 md:pt-24 md:pb-16">
        <div className="text-center stagger">
          <span className="pill-accent  items-center justify-center gap-2 text-xs sm:text-sm px-3 py-1.5 text-center">
            <Sparkles className="h-3.5 w-3.5 shrink-0" />
            <span className="leading-tight">
              Trusted by 4,200+ on-chain operators · 6 chains live
            </span>
          </span>

          <h1 className="mt-7 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] font-semibold leading-[1.1] sm:leading-[1.05] tracking-tight">
            Fast & Smart Wallet
            <br />
            Notifications for Everyone
          </h1>
          <p className="mt-7 text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Open your free Wotify account and watch wallets across Ethereum,
            Solana, BNB, Polygon and more — with real-time alerts and zero
            hidden fees.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 mx-auto max-w-xl flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-1 rounded-2xl sm:rounded-full bg-surface border border-border p-2 sm:p-1.5 shadow-[0_8px_30px_-12px_hsl(158_60%_12%/0.15)]"
          >
            {/* Icon */}
            <span className="hidden sm:grid h-10 w-10 place-items-center rounded-full bg-secondary shrink-0">
              <Bell className="h-4 w-4" />
            </span>

            {/* Input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border-0 outline-none text-sm px-3 py-2 placeholder:text-muted-foreground w-full"
            />

            {/* Button */}
            <Link href="/register" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto rounded-xl sm:rounded-full h-11 px-6 bg-primary text-primary-foreground hover:bg-primary/90">
                Open free account
              </Button>
            </Link>
          </form>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-muted-foreground font-mono">
            {['No credit card', 'Setup in 30 seconds', 'Cancel anytime'].map(
              (t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500/15 shrink-0">
                    <svg
                      className="h-2.5 w-2.5 text-green-600"
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
