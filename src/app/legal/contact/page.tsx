import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Support | Wotify',
};

export default function ContactPage() {
  return (
    <div className="space-y-12 pb-20">
      <div className="space-y-4 border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
          💬 Get In Touch
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Contact &amp; Support
        </h1>
        <div className="text-sm font-mono text-muted-foreground">
          We typically respond within 24–48 hours
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { icon: '📧', label: 'General Enquiries', email: 'hello@wotify.app' },
          {
            icon: '🛠️',
            label: 'Technical Support',
            email: 'support@wotify.app',
          },
          {
            icon: '🚨',
            label: 'Security Vulnerability',
            email: 'security@wotify.app',
          },
        ].map((contact, i) => (
          <div
            key={i}
            className="bg-surface border border-border rounded-xl p-5 hover:border-accent/40 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="text-2xl mb-3">{contact.icon}</div>
            <div className="text-[11px] text-muted-foreground uppercase tracking-widest mb-1 font-semibold">
              {contact.label}
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors break-all"
            >
              {contact.email}
            </a>
          </div>
        ))}
      </div>

      <section className="space-y-6 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-lg shrink-0">
            ❓
          </div>
          <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
        </div>
        <div className="text-muted-foreground leading-relaxed divide-y divide-border/50">
          <div className="py-5 first:pt-2">
            <h3 className="text-foreground font-semibold text-lg mb-2">
              Is Wotify free to use?
            </h3>
            <p>
              Yes, Wotify is currently free. We may introduce optional premium
              features in the future with advance notice to all users.
            </p>
          </div>

          <div className="py-5">
            <h3 className="text-foreground font-semibold text-lg mb-2">
              Is my cryptocurrency safe?
            </h3>
            <p>
              Your funds are completely safe. Wotify only requires your{' '}
              <strong>public wallet address</strong> — the equivalent of sharing
              your bank account number to receive payments. We have no access to
              your private keys, and therefore have no ability to move your
              funds under any circumstances.
            </p>
          </div>

          <div className="py-5">
            <h3 className="text-foreground font-semibold text-lg mb-2">
              Which blockchains are supported?
            </h3>
            <p>
              Currently, <strong>Ethereum mainnet</strong> is supported. Support
              for Polygon, Arbitrum, Optimism, and BSC is on our roadmap.
            </p>
          </div>

          <div className="py-5">
            <h3 className="text-foreground font-semibold text-lg mb-2">
              How fast are notifications?
            </h3>
            <p>
              Notifications are typically delivered within{' '}
              <strong>5–15 seconds</strong> of a transaction being detected
              on-chain. Delivery speed depends on network congestion and email
              provider latency.
            </p>
          </div>

          <div className="py-5">
            <h3 className="text-foreground font-semibold text-lg mb-2">
              Can I monitor wallets I don't own?
            </h3>
            <p>
              Technically yes — wallet addresses are public. However, you must
              comply with our Terms of Service and applicable laws. Monitoring
              wallets with intent to harm, stalk, or defraud is strictly
              prohibited and may be reported to authorities.
            </p>
          </div>

          <div className="py-5">
            <h3 className="text-foreground font-semibold text-lg mb-2">
              How do I delete my account?
            </h3>
            <p>
              Go to <strong>Account Settings → Delete Account</strong>. Your
              data will be permanently deleted within 30 days, except where
              retention is required by law. You can also email{' '}
              <a
                href="mailto:privacy@wotify.app"
                className="text-primary hover:underline"
              >
                privacy@wotify.app
              </a>{' '}
              to request manual deletion.
            </p>
          </div>

          <div className="py-5">
            <h3 className="text-foreground font-semibold text-lg mb-2">
              I found a security vulnerability. What do I do?
            </h3>
            <p>
              Please email{' '}
              <a
                href="mailto:security@wotify.app"
                className="text-primary hover:underline"
              >
                security@wotify.app
              </a>{' '}
              immediately with details. Do not publicly disclose the
              vulnerability before we've had a chance to investigate and fix it.
              We genuinely appreciate responsible disclosure.
            </p>
          </div>

          <div className="py-5 pb-0">
            <h3 className="text-foreground font-semibold text-lg mb-2">
              What is your response time for support?
            </h3>
            <p>
              We aim to respond to all support emails within{' '}
              <strong>24–48 business hours</strong>. Security and privacy
              requests are prioritised and handled within 72 hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
