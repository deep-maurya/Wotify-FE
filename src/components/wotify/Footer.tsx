import Link from 'next/link';

const LEGAL_LINKS = [
  { label: 'About', href: '/legal/about' },
  { label: 'Privacy', href: '/legal/privacy' },
  { label: 'Terms', href: '/legal/terms' },
  { label: 'Cookies', href: '/legal/cookies' },
  { label: 'Disclaimer', href: '/legal/disclaimer' },
  { label: 'Contact', href: '/legal/contact' },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-8">
        {/* Mobile: links wrap above copyright */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          <span className="text-xs text-muted-foreground shrink-0">
            © 2026 Wotify
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
