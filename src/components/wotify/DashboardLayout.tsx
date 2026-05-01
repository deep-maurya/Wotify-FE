import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Bell, LayoutDashboard, Plus, Wallet, LogOut } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { to: "/wallets/new", label: "Add wallet", icon: Plus },
  { to: "/notifications", label: "Notifications", icon: Bell },
];

export const DashboardLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen flex w-full bg-background">
      <aside className="hidden md:flex w-64 shrink-0 flex-col border-r border-border bg-sidebar">
        <div className="px-6 h-16 flex items-center border-b border-border">
          <Logo />
        </div>
        <nav className="flex-1 px-3 py-6 space-y-1">
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>
        <div className="px-3 py-4 border-t border-border">
          <NavLink
            to="/"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </NavLink>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border flex items-center justify-between px-6 md:px-10">
          <div className="md:hidden">
            <Logo />
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Wallet className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Watching 3 wallets across 3 chains</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              live
            </span>
            <ThemeToggle />
          </div>
        </header>
        <main className="flex-1 px-6 md:px-10 py-8 md:py-12">
          <div className="mx-auto max-w-6xl animate-fade-in">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
