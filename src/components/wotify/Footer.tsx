import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <span className="">© 2026 Wotify</span>
        <div className="flex gap-6">
          <Link href="/legal/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/legal/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/legal/terms" className="hover:text-foreground">
            Terms
          </Link>
          <Link href="/legal/cookies" className="hover:text-foreground">
            Cookies
          </Link>
          <Link href="/legal/disclaimer" className="hover:text-foreground">
            Disclaimer
          </Link>
          <Link href="/legal/contact" className="hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
