'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Bell,
  LayoutDashboard,
  Plus,
  Wallet,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { Logo } from '@/components/wotify/Logo';
import { ThemeToggle } from '@/components/wotify/ThemeToggle';
import { cn } from '@/lib/utils';

const nav = [
  { to: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { to: '/wallets/new', label: 'Add wallet', icon: Plus },
  { to: '/notifications', label: 'Notifications', icon: Bell },
];

const Sidebar = ({
  pathname,
  onClose,
}: {
  pathname: string;
  onClose?: () => void;
}) => (
  <div className="flex flex-col h-full">
    <div className="px-6 h-16 flex items-center justify-between border-b border-border shrink-0">
      <Logo />
      {onClose && (
        <button
          onClick={onClose}
          className="p-2 rounded-md hover:bg-accent transition-colors md:hidden"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>

    <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
      {nav.map((item) => {
        const active = pathname === item.to;
        return (
          <Link
            key={item.to}
            href={item.to}
            onClick={onClose}
            className={cn(
              'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
              active
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>

    <div className="px-3 py-4 border-t border-border shrink-0">
      <Link
        href="/"
        onClick={onClose}
        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
      >
        <LogOut className="h-4 w-4" />
        Sign out
      </Link>
    </div>
  </div>
);

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen flex w-full bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col border-r border-border bg-sidebar">
        <Sidebar pathname={pathname} />
      </aside>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile slide-in sidebar */}
      <div
        className={cn(
          'fixed top-0 left-0 z-50 h-full w-64 bg-sidebar border-r border-border flex flex-col transition-transform duration-300 ease-in-out md:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <Sidebar pathname={pathname} onClose={() => setMobileOpen(false)} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border flex items-center justify-between px-6 md:px-10 shrink-0">
          {/* Left — hamburger on mobile, wallet info on desktop */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="md:hidden">
              <Logo />
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Wallet className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Watching 3 wallets across 3 chains
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              live
            </span>
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1 px-6 md:px-10 py-8 md:py-12">
          <div className="mx-auto max-w-6xl animate-fade-in">{children}</div>
        </main>
      </div>
    </div>
  );
}
