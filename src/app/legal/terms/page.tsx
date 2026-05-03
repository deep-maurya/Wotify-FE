import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Wotify',
};

export default function TermsPage() {
  return (
    <div className="space-y-12 pb-20">
      <div className="space-y-4 border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
          📜 Legal Document
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Terms of Service
        </h1>
        <div className="text-sm font-mono text-muted-foreground">
          Effective: January 1, 2025 &nbsp;·&nbsp; Governing law: India
        </div>
      </div>

      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm flex gap-3 leading-relaxed">
        <span className="text-lg shrink-0 mt-0.5">⚠️</span>
        <div className="text-warning">
          Please read these Terms carefully before using Wotify. By creating an
          account or using our service, you agree to be bound by these Terms. If
          you do not agree, do not use Wotify.
        </div>
      </div>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-lg shrink-0">
            🤝
          </div>
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            These Terms of Service ("Terms") constitute a legally binding
            agreement between you ("User", "you") and <strong>Wotify</strong>{' '}
            ("Company", "we", "us") governing your access to and use of the
            Wotify platform, website, and related services (collectively, the
            "Service").
          </p>
          <p>
            You must be at least <strong>18 years of age</strong> and capable of
            entering into a legally binding contract under the Indian Contract
            Act, 1872 to use this Service.
          </p>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-lg shrink-0">
            🛠️
          </div>
          <h2 className="text-xl font-semibold">2. Description of Service</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            Wotify provides a cryptocurrency wallet monitoring service that
            allows users to:
          </p>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-accent before:font-bold">
              Track Ethereum wallet address activity
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-accent before:font-bold">
              Receive email notifications when transactions occur on monitored
              wallets
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-accent before:font-bold">
              View transaction history for their monitored wallets
            </li>
          </ul>

          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200 text-sm flex gap-3 mt-4">
            <span className="text-lg shrink-0 mt-0.5">ℹ️</span>
            <div className="text-blue-500">
              Wotify is a <strong>monitoring and notification tool only</strong>
              . We do not provide cryptocurrency exchange, custody, trading,
              investment, or financial advisory services.
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-lg shrink-0">
            👤
          </div>
          <h2 className="text-xl font-semibold">3. Account Registration</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <h3 className="text-primary font-semibold uppercase tracking-wider text-sm pt-2">
            3.1 Eligibility
          </h3>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              You must be 18 years or older
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              You must provide accurate and truthful information
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              One person may not create multiple accounts
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Accounts are non-transferable
            </li>
          </ul>

          <h3 className="text-primary font-semibold uppercase tracking-wider text-sm pt-4">
            3.2 Account Security
          </h3>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              You are responsible for maintaining the confidentiality of your
              password
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              You must notify us immediately of any unauthorized access at{' '}
              <a
                href="mailto:security@wotify.app"
                className="text-primary hover:underline"
              >
                security@wotify.app
              </a>
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              You are responsible for all activities that occur under your
              account
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Use a strong, unique password and enable any available security
              features
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-lg shrink-0">
            🚫
          </div>
          <h2 className="text-xl font-semibold">4. Prohibited Uses</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>You agree NOT to use Wotify to:</p>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Violate any applicable Indian or international law or regulation
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Monitor wallets belonging to others without their knowledge or
              consent
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Conduct or facilitate any fraudulent, illegal, or unauthorized
              activity
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Attempt to circumvent, disable, or interfere with security
              features
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Scrape, crawl, or systematically access the Service beyond normal
              use
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Reverse engineer, decompile, or disassemble any part of the
              Service
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Transmit viruses, malware, or other harmful code
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Use the Service for money laundering, terrorist financing, or tax
              evasion
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Impersonate any person or entity
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Resell or commercially exploit the Service without written
              permission
            </li>
          </ul>

          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm flex gap-3 mt-4">
            <span className="text-lg shrink-0 mt-0.5">🚨</span>
            <div className="text-destructive">
              Violation of prohibited uses may result in{' '}
              <strong>immediate account termination</strong> and may be reported
              to law enforcement authorities including the Financial
              Intelligence Unit (FIU-IND) where applicable.
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-lg shrink-0">
            💡
          </div>
          <h2 className="text-xl font-semibold">5. Intellectual Property</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            All content, features, and functionality of Wotify — including but
            not limited to the design, logo, code, text, graphics, and user
            interface — are the exclusive property of Wotify and are protected
            under applicable Indian and international intellectual property
            laws.
          </p>
          <p>
            You are granted a limited, non-exclusive, non-transferable,
            revocable licence to access and use the Service for personal,
            non-commercial purposes only.
          </p>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-lg shrink-0">
            ⚖️
          </div>
          <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>To the maximum extent permitted by applicable Indian law:</p>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Wotify shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              We are not liable for any financial losses arising from your use
              of, or reliance on, information displayed on Wotify
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              We are not liable for delays, errors, or omissions in blockchain
              data provided by third-party services
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Our total liability to you for any claim shall not exceed the
              amount you paid us in the 3 months preceding the claim (or ₹1,000
              if you paid nothing)
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-lg shrink-0">
            🔚
          </div>
          <h2 className="text-xl font-semibold">7. Termination</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            We reserve the right to suspend or terminate your account at any
            time, with or without notice, for:
          </p>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Violation of these Terms
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Fraudulent, abusive, or illegal activity
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Extended periods of inactivity (12+ months)
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              At our sole discretion for any reason
            </li>
          </ul>
          <p>
            You may delete your account at any time from account settings. Upon
            termination, your right to use the Service ceases immediately.
          </p>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-lg shrink-0">
            🏛️
          </div>
          <h2 className="text-xl font-semibold">
            8. Governing Law & Dispute Resolution
          </h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of <strong>India</strong>, without regard to its conflict
            of law provisions.
          </p>
          <p>
            Any dispute, controversy, or claim arising out of or relating to
            these Terms shall be:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground marker:text-primary marker:font-semibold">
            <li>
              First, attempted to be resolved through good-faith negotiation
              (30-day notice period)
            </li>
            <li>
              If unresolved, submitted to <strong>arbitration</strong> under the
              Arbitration and Conciliation Act, 1996
            </li>
            <li>
              Arbitration shall be conducted in <strong>English</strong> at a
              mutually agreed location in India
            </li>
          </ol>
          <p>
            The courts of <strong>New Delhi, India</strong> shall have exclusive
            jurisdiction for matters that cannot be resolved by arbitration.
          </p>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-lg shrink-0">
            📝
          </div>
          <h2 className="text-xl font-semibold">9. Changes to Terms</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            We may modify these Terms at any time. We will provide at least{' '}
            <strong>14 days' notice</strong> before changes take effect by:
          </p>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Sending an email to your registered email address
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              Displaying a prominent notice on the platform
            </li>
          </ul>
          <p>
            Continued use after the effective date constitutes acceptance of the
            revised Terms.
          </p>
        </div>
      </section>
    </div>
  );
}
