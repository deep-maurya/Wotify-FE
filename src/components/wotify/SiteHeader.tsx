import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const SiteHeader = () => (
  <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
    <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between gap-6">
      <Logo />
      <nav className="hidden lg:flex items-center gap-7 text-sm">
        {["Features", "Chains", "How it works", "Pricing"].map((label) => (
          <a key={label} href={`#${label.toLowerCase().replace(/\s/g, "-")}`}
             className="inline-flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors">
            {label}
            {label !== "Pricing" && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Link to="/register" className="hidden sm:inline-flex">
          <Button variant="ghost" size="sm" className="rounded-full">Sign in</Button>
        </Link>
        <Link to="/register">
          <Button size="sm" className="rounded-full h-10 px-5 bg-primary text-primary-foreground hover:bg-primary/90">
            Open free account
          </Button>
        </Link>
      </div>
    </div>
  </header>
);
