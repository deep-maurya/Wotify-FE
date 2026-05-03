import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Wotify',
};

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-20">
      <div className="space-y-4 border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
          🇮🇳 Made in India
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          About Wotify
        </h1>
        <div className="text-sm font-mono text-muted-foreground">
          Built for everyday crypto users
        </div>
      </div>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-lg shrink-0">
            💡
          </div>
          <h2 className="text-xl font-semibold">Our Story</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            Cryptocurrency is growing rapidly in India — millions of everyday
            people now hold digital assets like Bitcoin and Ethereum. But
            keeping track of wallet activity is surprisingly difficult. You
            either have to check blockchain explorers manually, or pay for
            expensive enterprise tools.
          </p>
          <p>
            <strong>Wotify</strong> was built to solve that. We wanted a simple,
            reliable way for regular crypto holders — not traders or
            institutions — to know when their wallets have activity, without
            complexity or cost.
          </p>
          <p>Add your wallet address. Get notified. That's it.</p>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
        <div className="bg-surface border border-border rounded-2xl p-6 text-center flex flex-col items-center justify-center">
          <div className="text-3xl font-bold font-mono bg-gradient-to-br from-accent to-cyan-400 bg-clip-text text-transparent leading-none">
            ETH
          </div>
          <div className="text-xs text-muted-foreground mt-3 uppercase tracking-wider font-medium">
            Chains Supported
          </div>
        </div>
        <div className="bg-surface border border-border rounded-2xl p-6 text-center flex flex-col items-center justify-center">
          <div className="text-3xl font-bold font-mono bg-gradient-to-br from-accent to-cyan-400 bg-clip-text text-transparent leading-none">
            &lt;5s
          </div>
          <div className="text-xs text-muted-foreground mt-3 uppercase tracking-wider font-medium">
            Avg. Notify Time
          </div>
        </div>
        <div className="bg-surface border border-border rounded-2xl p-6 text-center flex flex-col items-center justify-center">
          <div className="text-3xl font-bold font-mono bg-gradient-to-br from-accent to-cyan-400 bg-clip-text text-transparent leading-none">
            0₹
          </div>
          <div className="text-xs text-muted-foreground mt-3 uppercase tracking-wider font-medium">
            Keys Stored
          </div>
        </div>
        <div className="bg-surface border border-border rounded-2xl p-6 text-center flex flex-col items-center justify-center">
          <div className="text-3xl font-bold font-mono bg-gradient-to-br from-accent to-cyan-400 bg-clip-text text-transparent leading-none">
            🇮🇳
          </div>
          <div className="text-xs text-muted-foreground mt-3 uppercase tracking-wider font-medium">
            Based in India
          </div>
        </div>
      </div>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-lg shrink-0">
            🎯
          </div>
          <h2 className="text-xl font-semibold">What We Do</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Wallet Monitoring</strong> — Track any Ethereum wallet
              address in real-time
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Instant Notifications</strong> — Get email alerts the
              moment a transaction occurs
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Transaction History</strong> — View a clean, paginated
              history of all activity
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Multi-Wallet Support</strong> — Monitor multiple wallets
              from a single account
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Non-Custodial</strong> — We never hold, touch, or have
              access to your funds
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-lg shrink-0">
            🛡️
          </div>
          <h2 className="text-xl font-semibold">Our Principles</h2>
        </div>
        <div className="text-muted-foreground space-y-6 leading-relaxed">
          <div>
            <h3 className="text-foreground font-semibold text-lg mb-2">
              Privacy First
            </h3>
            <p>
              We collect only what we need to provide the service. We don't sell
              your data. We don't show you ads. Your wallet addresses are used
              only to monitor transactions — nothing else.
            </p>
          </div>
          <div>
            <h3 className="text-foreground font-semibold text-lg mb-2">
              Security by Default
            </h3>
            <p>
              Passwords are never stored in plain text. All communication is
              encrypted. Webhooks are verified cryptographically. We treat
              security as a feature, not an afterthought.
            </p>
          </div>
          <div>
            <h3 className="text-foreground font-semibold text-lg mb-2">
              Transparency
            </h3>
            <p>
              Our legal pages are written in plain English (not legalese), our
              data practices are clearly disclosed, and we notify you before any
              significant changes to how we operate.
            </p>
          </div>
          <div>
            <h3 className="text-foreground font-semibold text-lg mb-2">
              India-Focused
            </h3>
            <p>
              Built in India, for Indian users. We're aware of the local
              regulatory environment, tax implications of crypto in India, and
              the trust concerns Indian users have around sharing any financial
              data.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-lg shrink-0">
            🚀
          </div>
          <h2 className="text-xl font-semibold">What's Coming</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Support for <strong>Polygon, Arbitrum, and Optimism</strong>{' '}
              networks
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Telegram bot</strong> notifications
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Mobile app</strong> (Android & iOS) with push
              notifications
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Portfolio dashboard</strong> with net worth tracking
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Basic <strong>tax reporting</strong> for Indian users (Section
              115BBH)
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Public <strong>API access</strong> for developers
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
