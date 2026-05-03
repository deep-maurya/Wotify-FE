import Footer from '@/components/wotify/Footer';
import { SiteHeader } from '@/components/wotify/SiteHeader';
import Link from 'next/link';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto px-6 md:px-10 py-12 md:py-20 gap-10 md:gap-16">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24 flex flex-col gap-3">
            <h3 className="font-semibold text-lg mb-2">Legal & Info</h3>
            <Link
              href="/legal/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/legal/disclaimer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Disclaimer
            </Link>
            <Link
              href="/legal/cookies"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              href="/legal/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/legal/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </aside>

        <div className="flex-1 max-w-3xl">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
