'use client';

import Footer from '@/components/wotify/Footer';
import { SiteHeader } from '@/components/wotify/SiteHeader';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LEGAL_LINKS = [
  { label: 'Privacy Policy', short: 'Privacy', href: '/legal/privacy' },
  { label: 'Terms of Service', short: 'Terms', href: '/legal/terms' },
  { label: 'Disclaimer', short: 'Disclaimer', href: '/legal/disclaimer' },
  { label: 'Cookie Policy', short: 'Cookies', href: '/legal/cookies' },
  { label: 'About Us', short: 'About', href: '/legal/about' },
  { label: 'Contact', short: 'Contact', href: '/legal/contact' },
];

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      {/* ── Mobile pill nav ─────────────────────────────────── */}
      <div className="md:hidden border-b border-border bg-background sticky top-16 z-30">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide px-6 py-3">
          {LEGAL_LINKS.map(({ short, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  active
                    ? 'bg-primary/10 text-primary border-primary/30'
                    : 'text-muted-foreground border-border hover:text-foreground hover:bg-accent'
                }`}
              >
                {short}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── Main layout ─────────────────────────────────────── */}
      <main className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto px-6 md:px-10 py-8 md:py-20 gap-8 md:gap-16">
        {/* ── Desktop sidebar ─────────────────────────────────── */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-24 flex flex-col gap-0.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 px-2">
              Legal & Info
            </p>
            {LEGAL_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm px-3 py-2 rounded-md transition-colors ${
                    active
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </aside>

        {/* ── Content ─────────────────────────────────────────── */}
        <div className="flex-1 min-w-0 max-w-3xl">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
