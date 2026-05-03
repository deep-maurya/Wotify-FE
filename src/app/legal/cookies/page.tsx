import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Wotify',
};

export default function CookiesPage() {
  return (
    <div className="space-y-12 pb-20">
      <div className="space-y-4 border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
          🍪 Tracking Notice
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Cookie Policy
        </h1>
        <div className="text-sm font-mono text-muted-foreground">
          Effective: January 1, 2025
        </div>
      </div>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-lg shrink-0">
            🍪
          </div>
          <h2 className="text-xl font-semibold">What Are Cookies?</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            Cookies are small text files that are stored on your device when you
            visit a website. They help the website remember your preferences,
            keep you logged in, and understand how you use the service.
          </p>
          <p>
            Wotify uses cookies and similar technologies (local storage, session
            storage) to operate and improve our service.
          </p>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-lg shrink-0">
            📂
          </div>
          <h2 className="text-xl font-semibold">Types of Cookies We Use</h2>
        </div>
        <div className="text-muted-foreground space-y-8 leading-relaxed">
          <div>
            <h3 className="text-foreground font-semibold flex items-center gap-2 mb-2">
              Essential Cookies{' '}
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/20">
                Required
              </span>
            </h3>
            <p className="mb-4">
              These cookies are necessary for Wotify to function. They cannot be
              disabled.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-background">
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs border-b border-border text-foreground">
                      Cookie Name
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs border-b border-border text-foreground">
                      Purpose
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs border-b border-border text-foreground">
                      Expiry
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  <tr className="hover:bg-accent/5 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs">
                      cwt_auth_token
                    </td>
                    <td className="px-4 py-3">
                      Keeps you logged in (JWT session)
                    </td>
                    <td className="px-4 py-3">7 days</td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs">cwt_csrf</td>
                    <td className="px-4 py-3">
                      Protects against cross-site request forgery
                    </td>
                    <td className="px-4 py-3">Session</td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs">cwt_session</td>
                    <td className="px-4 py-3">
                      Maintains your active session state
                    </td>
                    <td className="px-4 py-3">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-semibold flex items-center gap-2 mb-2">
              Analytics Cookies{' '}
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Optional
              </span>
            </h3>
            <p className="mb-4">
              We use Google Analytics to understand how users interact with
              Wotify. This helps us improve the service.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-background">
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs border-b border-border text-foreground">
                      Cookie Name
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs border-b border-border text-foreground">
                      Purpose
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs border-b border-border text-foreground">
                      Expiry
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  <tr className="hover:bg-accent/5 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs">_ga</td>
                    <td className="px-4 py-3">
                      Google Analytics — distinguishes users
                    </td>
                    <td className="px-4 py-3">2 years</td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs">_ga_*</td>
                    <td className="px-4 py-3">
                      Google Analytics — session state
                    </td>
                    <td className="px-4 py-3">2 years</td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs">_gid</td>
                    <td className="px-4 py-3">
                      Google Analytics — distinguishes users (24h)
                    </td>
                    <td className="px-4 py-3">24 hours</td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs">_gat</td>
                    <td className="px-4 py-3">
                      Google Analytics — throttles request rate
                    </td>
                    <td className="px-4 py-3">1 minute</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              Google Analytics data is anonymised — we have enabled IP
              anonymisation. Google's privacy policy:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                policies.google.com/privacy
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold flex items-center gap-2 mb-2">
              Preference Cookies{' '}
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Optional
              </span>
            </h3>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-background">
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs border-b border-border text-foreground">
                      Cookie Name
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs border-b border-border text-foreground">
                      Purpose
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider text-xs border-b border-border text-foreground">
                      Expiry
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  <tr className="hover:bg-accent/5 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs">cwt_theme</td>
                    <td className="px-4 py-3">
                      Remembers your colour scheme preference
                    </td>
                    <td className="px-4 py-3">1 year</td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs">cwt_lang</td>
                    <td className="px-4 py-3">
                      Remembers your language preference
                    </td>
                    <td className="px-4 py-3">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-lg shrink-0">
            ⚙️
          </div>
          <h2 className="text-xl font-semibold">
            Managing Your Cookie Preferences
          </h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>You can control cookies in the following ways:</p>

          <h3 className="text-foreground font-semibold mt-6">
            Browser Settings
          </h3>
          <p>
            Most browsers allow you to refuse or delete cookies. Note that
            disabling essential cookies will prevent Wotify from functioning
            correctly.
          </p>
          <ul className="space-y-2 list-none pl-0">
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                Google Chrome
              </a>
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <a
                href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                Mozilla Firefox
              </a>
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <a
                href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                Apple Safari
              </a>
            </li>
            <li className="relative pl-5 before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
              <a
                href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>

          <h3 className="text-foreground font-semibold mt-6">
            Opt-Out of Google Analytics
          </h3>
          <p>
            Install the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>{' '}
            to prevent your data from being used by Google Analytics across all
            websites.
          </p>

          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200 text-sm flex gap-3 mt-4">
            <span className="text-lg shrink-0 mt-0.5">ℹ️</span>
            <div className="text-blue-500">
              We respect your choices. Declining optional cookies will not
              affect your ability to use core Wotify features.
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4 bg-surface p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-accent/30">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-lg shrink-0">
            🔄
          </div>
          <h2 className="text-xl font-semibold">Updates to This Policy</h2>
        </div>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            We may update this Cookie Policy when we add or change the cookies
            we use. The "Effective" date at the top will always reflect the
            latest version. For significant changes, we will notify you via
            email or an in-app notice.
          </p>
        </div>
      </section>
    </div>
  );
}
