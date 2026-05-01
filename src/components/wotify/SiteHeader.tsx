import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export const SiteHeader = () => (
  <header className="border-b border-border">
    <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
      <Logo />
      <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        <a href="#chains" className="hover:text-foreground transition-colors">Chains</a>
        <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
      </nav>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Link to="/register" className="hidden sm:inline-flex">
          <Button variant="ghost" size="sm">Sign in</Button>
        </Link>
        <Link to="/register">
          <Button size="sm" className="rounded-full">Get started</Button>
        </Link>
      </div>
    </div>
  </header>
);
