import { Logo } from '@/components/wotify/Logo';
import EthereumLogo from '@/components/icons/EthereumLogo';
import SolonaLogo from '@/components/icons/SolonaLogo';
import TronLogo from '@/components/icons/TronLogo';
import PolygonLogo from '@/components/icons/PolygonLogo';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen grid lg:grid-cols-[2fr_1fr] bg-background">
      <div className="flex flex-col lg:order-2">
        <div className="sticky top-0 z-30 h-16 px-6 md:px-10 flex items-center justify-between border-b border-border bg-background/80 backdrop-blur-md">
          <Logo />
        </div>
        <div className="flex-1 flex items-center px-6 md:px-10 py-16">
          {children}
        </div>
      </div>

      <aside className="relative lg:order-1 hidden lg:flex border-r border-border bg-secondary/40 items-center justify-center p-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 pointer-events-none" />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-12 left-12 opacity-20 animate-float">
            <EthereumLogo />
          </div>
          <div className="absolute bottom-20 left-20 opacity-20 animate-float delay-200">
            <TronLogo />
          </div>
          <div className="absolute top-24 right-16 opacity-20 animate-float delay-500">
            <SolonaLogo />
          </div>
          <div className="absolute bottom-12 right-12 opacity-20 animate-float delay-700">
            <PolygonLogo />
          </div>
        </div>

        <div className="relative z-10 max-w-md text-center">
          <h2 className="mt-8 text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
            Track wallets across{' '}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              multiple chains
            </span>
          </h2>

          <p className="mt-4 text-sm text-muted-foreground">
            Get instant alerts for transactions, balances, and on-chain
            activity. Built for speed, reliability, and scale.
          </p>

          <div className="mt-10 flex items-center justify-center gap-5 opacity-80">
            <EthereumLogo />
            <SolonaLogo />
            <TronLogo />
            <PolygonLogo />
            <span className="text-xs font-mono text-muted-foreground">
              +12 chains
            </span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Layout;
