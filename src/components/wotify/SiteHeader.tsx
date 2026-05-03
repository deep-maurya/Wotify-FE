'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import EthereumLogo from '@/components/icons/EthereumLogo';
import SolonaLogo from '@/components/icons/SolonaLogo';
import TronLogo from '@/components/icons/TronLogo';
import PolygonLogo from '@/components/icons/PolygonLogo';

const NAV_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'Chains', href: '/#chains' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
];

const DrawerPromo = () => (
  <div className="mx-4 mb-4 rounded-xl border border-border bg-secondary/40 p-4 overflow-hidden relative">
    {/* Gradient bg */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 pointer-events-none rounded-xl" />

    {/* Floating logos */}
    <div className="absolute top-2 right-3 opacity-10 animate-float">
      <EthereumLogo />
    </div>
    <div className="absolute bottom-3 right-8 opacity-10 animate-float delay-300">
      <PolygonLogo />
    </div>

    <div className="relative z-10">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
        Multi-chain support
      </p>
      <p className="text-sm font-semibold text-foreground leading-snug">
        Track wallets across{' '}
        <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          multiple chains
        </span>
      </p>
      <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
        Instant alerts for transactions, balances, and on-chain activity.
      </p>

      {/* Chain logos row */}
      <div className="mt-3 flex items-center gap-3">
        <EthereumLogo />
        <SolonaLogo />
        <TronLogo />
        <PolygonLogo />
        <span className="text-xs font-mono text-muted-foreground">
          +12 chains
        </span>
      </div>
    </div>
  </div>
);

export const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between gap-6">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex font-medium items-center gap-1 text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="rounded-full">
                Sign in
              </Button>
            </Link>

            <Link href="/register" className="hidden sm:inline-flex">
              <Button
                size="sm"
                className="rounded-full h-10 px-5 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Open free account
              </Button>
            </Link>

            <button
              className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Right slide-in drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-background border-l border-border shadow-xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="h-16 px-6 flex items-center justify-between border-b border-border shrink-0">
          <Logo />
          <button
            className="p-2 rounded-md hover:bg-accent transition-colors"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-4 py-4 flex-1 overflow-y-auto">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 px-3 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Promo banner */}
        <DrawerPromo />

        {/* Bottom CTA */}
        <div className="px-4 py-4 border-t border-border shrink-0 flex flex-col gap-2">
          <Link href="/login" onClick={() => setMobileOpen(false)}>
            <Button
              variant="outline"
              size="sm"
              className="w-full rounded-full h-10"
            >
              Sign in
            </Button>
          </Link>
          <Link href="/register" onClick={() => setMobileOpen(false)}>
            <Button
              size="sm"
              className="w-full rounded-full h-10 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Open free account
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
