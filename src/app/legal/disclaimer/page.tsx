import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | Wotify',
};

export default function DisclaimerPage() {
  return (
    <div className="space-y-12 pb-20">
      <div className="space-y-4 border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
          ⚠️ Important Notice
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Legal Disclaimer
        </h1>
        <div className="text-sm font-mono text-muted-foreground">
          Read carefully before using Wotify
        </div>
      </div>

      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm flex gap-3 leading-relaxed">
        <span className="text-lg shrink-0 mt-0.5">🚨</span>
        <div className="text-destructive">
          <strong>
            Cryptocurrency investments are highly speculative and carry a
            significant risk of loss.
          </strong>{' '}
          Wotify does not provide financial, investment, legal, or tax advice.
          Nothing on this platform should be construed as such.
        </div>
      </div>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-lg shrink-0">
            📊
          </div>
          <h2 className="text-xl font-semibold">Not Financial Advice</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            All information provided by Wotify — including transaction data,
            wallet balances, and any associated metrics — is provided for{' '}
            <strong>informational and monitoring purposes only</strong>.
          </p>
          <p>
            Wotify is{' '}
            <strong>
              not a financial advisor, broker, dealer, or investment advisor
            </strong>
            . We are not registered with SEBI (Securities and Exchange Board of
            India), RBI, or any other regulatory authority as an investment
            advisor.
          </p>
          <p>
            You should consult a qualified financial advisor before making any
            investment decisions related to cryptocurrencies or digital assets.
          </p>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-lg shrink-0">
            ⛓️
          </div>
          <h2 className="text-xl font-semibold">Blockchain Data Accuracy</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            Transaction data displayed on Wotify is sourced from public
            blockchains via third-party providers. While we strive for accuracy:
          </p>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Data may be <strong>delayed</strong> due to network congestion or
              provider issues
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Data may be <strong>incomplete</strong> during blockchain
              reorganisations
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              We cannot guarantee <strong>real-time accuracy</strong> of
              displayed information
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Transaction confirmation status may change (rare, but possible)
            </li>
          </ul>
          <p>
            <strong>
              Always verify critical transaction information directly on a
              blockchain explorer
            </strong>{' '}
            (e.g., Etherscan.io) before taking any action.
          </p>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-lg shrink-0">
            🔔
          </div>
          <h2 className="text-xl font-semibold">Notification Reliability</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            Wotify aims to deliver timely notifications but{' '}
            <strong>cannot guarantee delivery</strong> of every notification.
            Missed notifications may occur due to:
          </p>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Email delivery failures or spam filters
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Webhook provider downtime (Alchemy)
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Server maintenance or unexpected outages
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Network connectivity issues
            </li>
          </ul>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm flex gap-3 mt-4">
            <span className="text-lg shrink-0 mt-0.5">⚠️</span>
            <div className="text-warning">
              Do <strong>not</strong> rely solely on Wotify notifications for
              time-sensitive financial decisions. Always maintain your own
              monitoring practices.
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-lg shrink-0">
            🇮🇳
          </div>
          <h2 className="text-xl font-semibold">
            Regulatory Disclaimer (India)
          </h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            Cryptocurrency and virtual digital assets (VDAs) are subject to
            evolving regulations in India. Please be aware:
          </p>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Cryptocurrency transactions in India may be subject to{' '}
              <strong>30% tax on gains</strong> under Section 115BBH of the
              Income Tax Act
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              A <strong>1% TDS (Tax Deducted at Source)</strong> may apply on
              transfers above specified thresholds under Section 194S
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Regulations may change — consult a qualified tax professional for
              advice specific to your situation
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Wotify does not provide tax calculation services
            </li>
          </ul>
          <p>
            Wotify is a technology service provider only. We do not facilitate
            cryptocurrency transactions and are not subject to VDA reporting
            requirements as an intermediary.
          </p>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-lg shrink-0">
            🔐
          </div>
          <h2 className="text-xl font-semibold">Security Disclaimer</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            While Wotify implements industry-standard security measures, users
            must understand:
          </p>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Wotify only requires your <strong>public wallet address</strong> —
              never your private key or seed phrase
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Knowing a public address does not grant any access to your funds
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              We are <strong>not responsible</strong> for any cryptocurrency
              losses resulting from phishing, social engineering, or security
              breaches unrelated to Wotify
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              No internet-connected system is completely immune to security
              threats
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-lg shrink-0">
            🌐
          </div>
          <h2 className="text-xl font-semibold">
            Third-Party Links & Services
          </h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            Wotify may contain links to third-party websites or integrate
            third-party services (blockchain explorers, data providers). We:
          </p>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Have no control over third-party content, privacy practices, or
              availability
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Are not responsible for any loss or damage caused by third-party
              services
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Do not endorse any third-party products or services unless
              explicitly stated
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
