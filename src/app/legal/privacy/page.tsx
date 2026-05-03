import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Wotify',
};

export default function PrivacyPage() {
  return (
    <div className="space-y-12 pb-20">
      <div className="space-y-4 border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
          🔒 Legal Document
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <div className="text-sm font-mono text-muted-foreground">
          Effective: January 1, 2025 &nbsp;·&nbsp; Last updated: January 1, 2025
        </div>
      </div>

      <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200 text-sm flex gap-3 leading-relaxed">
        <span className="text-lg shrink-0 mt-0.5">ℹ️</span>
        <div className="text-blue-500">
          This Privacy Policy applies to <strong>Wotify</strong> and explains
          how we collect, use, store, and protect your personal information in
          accordance with the <strong>Information Technology Act, 2000</strong>{' '}
          and the{' '}
          <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong> of
          India.
        </div>
      </div>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-lg shrink-0">
            📋
          </div>
          <h2 className="text-xl font-semibold">1. Who We Are</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            <strong>Wotify</strong> ("we", "us", "our") is a cryptocurrency
            wallet activity tracking service operated from India. We provide
            tools that allow users to monitor Ethereum wallet addresses and
            receive transaction notifications.
          </p>
          <p>
            By using Wotify, you agree to the collection and use of information
            as described in this policy.
          </p>
          <h3 className="text-primary font-semibold uppercase tracking-wider text-sm pt-4">
            Data Controller
          </h3>
          <p>
            For the purpose of applicable data protection laws, Wotify is the
            data controller responsible for your personal data. You can reach us
            at{' '}
            <a
              href="mailto:privacy@wotify.app"
              className="text-primary hover:underline"
            >
              privacy@wotify.app
            </a>
            .
          </p>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-lg shrink-0">
            📦
          </div>
          <h2 className="text-xl font-semibold">2. Information We Collect</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <h3 className="text-primary font-semibold uppercase tracking-wider text-sm pt-2">
            2.1 Information You Provide Directly
          </h3>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Email address</strong> — used for account creation, login,
              and sending transaction notifications
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Password</strong> — stored as a one-way cryptographic hash
              (bcrypt); we cannot read your password
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Wallet addresses</strong> — Ethereum public addresses you
              add for monitoring (these are public on the blockchain)
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Optional wallet labels</strong> — friendly names you give
              to your wallets
            </li>
          </ul>

          <h3 className="text-primary font-semibold uppercase tracking-wider text-sm pt-4">
            2.2 Information Collected Automatically
          </h3>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>IP address</strong> — for security, fraud prevention, and
              rate limiting
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Browser type and version</strong>
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Pages visited and time spent</strong> — via analytics
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Device type</strong> — mobile, tablet, or desktop
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Referring URL</strong> — how you found Wotify
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Cookies and similar tracking technologies</strong> — see
              our Cookie Policy
            </li>
          </ul>

          <h3 className="text-primary font-semibold uppercase tracking-wider text-sm pt-4">
            2.3 Blockchain Data (Public)
          </h3>
          <p>
            Transaction data we display (amounts, timestamps, wallet addresses,
            transaction hashes) is{' '}
            <strong>sourced from public blockchain records</strong>. This data
            is inherently public and not private information. We retrieve it via
            third-party providers (Alchemy).
          </p>

          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm flex gap-3 mt-4">
            <span className="text-lg shrink-0 mt-0.5">⚠️</span>
            <div className="text-warning">
              We <strong>never</strong> collect your private keys, seed phrases,
              or any information that could grant access to your cryptocurrency
              funds. Never share these with anyone, including Wotify.
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-lg shrink-0">
            🎯
          </div>
          <h2 className="text-xl font-semibold">
            3. How We Use Your Information
          </h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-background">
                  <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs border-b border-border text-foreground">
                    Purpose
                  </th>
                  <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs border-b border-border text-foreground">
                    Data Used
                  </th>
                  <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs border-b border-border text-foreground">
                    Legal Basis
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-3">
                    Account creation and authentication
                  </td>
                  <td className="px-4 py-3">Email, password hash</td>
                  <td className="px-4 py-3">Contract performance</td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-3">
                    Sending transaction notifications
                  </td>
                  <td className="px-4 py-3">Email, wallet addresses</td>
                  <td className="px-4 py-3">Contract performance</td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-3">Monitoring wallet activity</td>
                  <td className="px-4 py-3">Wallet addresses</td>
                  <td className="px-4 py-3">Contract performance</td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-3">Security and fraud prevention</td>
                  <td className="px-4 py-3">IP address, usage data</td>
                  <td className="px-4 py-3">Legitimate interest</td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-3">Service improvement</td>
                  <td className="px-4 py-3">Analytics data</td>
                  <td className="px-4 py-3">Legitimate interest</td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-3">Legal compliance</td>
                  <td className="px-4 py-3">All collected data</td>
                  <td className="px-4 py-3">Legal obligation</td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-3">Customer support</td>
                  <td className="px-4 py-3">Email, account data</td>
                  <td className="px-4 py-3">Legitimate interest</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            We <strong>do not</strong> sell, rent, or trade your personal
            information to third parties for their marketing purposes.
          </p>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-lg shrink-0">
            🤝
          </div>
          <h2 className="text-xl font-semibold">4. Third-Party Services</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            We share limited data with trusted service providers who help us
            operate Wotify:
          </p>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-background">
                  <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs border-b border-border text-foreground">
                    Service
                  </th>
                  <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs border-b border-border text-foreground">
                    Purpose
                  </th>
                  <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs border-b border-border text-foreground">
                    Data Shared
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-3">
                    <strong className="text-foreground">Alchemy</strong>
                  </td>
                  <td className="px-4 py-3">
                    Blockchain data & webhook delivery
                  </td>
                  <td className="px-4 py-3">Wallet addresses</td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-3">
                    <strong className="text-foreground">
                      Google Analytics
                    </strong>
                  </td>
                  <td className="px-4 py-3">Usage analytics</td>
                  <td className="px-4 py-3">Anonymised usage data, cookies</td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-3">
                    <strong className="text-foreground">Email provider</strong>
                  </td>
                  <td className="px-4 py-3">Sending notification emails</td>
                  <td className="px-4 py-3">Email address</td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-3">
                    <strong className="text-foreground">Cloud hosting</strong>
                  </td>
                  <td className="px-4 py-3">Server infrastructure</td>
                  <td className="px-4 py-3">All data (encrypted at rest)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            All third-party providers are contractually required to handle your
            data securely and only for the specified purpose.
          </p>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-lg shrink-0">
            🛡️
          </div>
          <h2 className="text-xl font-semibold">5. Data Security</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Passwords are hashed using <strong>bcrypt</strong> with a work
              factor of 12 — never stored in plain text
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              All data in transit is protected by <strong>TLS 1.2+</strong>{' '}
              (HTTPS)
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Databases are encrypted at rest
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              API access is protected by <strong>JWT authentication</strong>{' '}
              with short-lived tokens
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Webhook authenticity is verified using{' '}
              <strong>HMAC-SHA256 signatures</strong>
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Rate limiting is applied to all endpoints to prevent brute-force
              attacks
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Regular security reviews and dependency audits
            </li>
          </ul>
          <p>
            Despite these measures, no system is 100% secure. In the event of a
            data breach that affects your rights, we will notify you within{' '}
            <strong>72 hours</strong> as required by applicable law.
          </p>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-lg shrink-0">
            📅
          </div>
          <h2 className="text-xl font-semibold">6. Data Retention</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Account data</strong> — retained while your account is
              active, deleted within 30 days of account deletion request
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Transaction records</strong> — retained for 3 years (may
              be required for tax/legal purposes)
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Server logs (IP, access logs)</strong> — retained for 90
              days
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Analytics data</strong> — retained for 26 months (Google
              Analytics default)
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Notification history</strong> — retained for 12 months
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-lg shrink-0">
            ⚖️
          </div>
          <h2 className="text-xl font-semibold">
            7. Your Rights Under DPDPA 2023
          </h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            As a user in India, you have the following rights under the Digital
            Personal Data Protection Act, 2023:
          </p>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Right to Information</strong> — know what personal data we
              hold about you
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Right to Correction</strong> — request correction of
              inaccurate data
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Right to Erasure</strong> — request deletion of your
              personal data ("right to be forgotten")
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Right to Grievance Redressal</strong> — raise complaints
              with our grievance officer
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <strong>Right to Nominate</strong> — nominate a person to exercise
              rights on your behalf
            </li>
          </ul>
          <p>
            To exercise any of these rights, email us at{' '}
            <a
              href="mailto:privacy@wotify.app"
              className="text-primary hover:underline"
            >
              privacy@wotify.app
            </a>{' '}
            with subject line <em className="italic">"Data Rights Request"</em>.
            We will respond within <strong>30 days</strong>.
          </p>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-lg shrink-0">
            👶
          </div>
          <h2 className="text-xl font-semibold">8. Children's Privacy</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            Wotify is{' '}
            <strong>
              not intended for use by persons under 18 years of age
            </strong>
            . We do not knowingly collect personal information from minors. If
            we become aware that a person under 18 has provided personal
            information, we will delete it immediately.
          </p>
          <p>
            If you believe a minor has registered, please contact us at{' '}
            <a
              href="mailto:privacy@wotify.app"
              className="text-primary hover:underline"
            >
              privacy@wotify.app
            </a>
            .
          </p>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-lg shrink-0">
            🔄
          </div>
          <h2 className="text-xl font-semibold">9. Changes to This Policy</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            We may update this Privacy Policy from time to time. When we make
            significant changes, we will:
          </p>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Update the "Last updated" date at the top of this page
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Send an email notification to registered users
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Display a notice on the platform for at least 14 days
            </li>
          </ul>
          <p>
            Continued use of Wotify after changes constitutes your acceptance of
            the updated policy.
          </p>
        </div>
      </section>
    </div>
  );
}
