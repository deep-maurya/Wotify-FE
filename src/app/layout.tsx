import type { Metadata } from 'next';
import { Instrument_Serif, DM_Mono, Sora } from 'next/font/google';
import '@/index.css';
import { Providers } from '@/components/Providers';

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
});

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
});

const sora = Sora({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: 'Wotify — Web3 Wallet Activity Notifications',
  description:
    'Watch wallets across multiple chains and get instant notifications on transfers, swaps, and on-chain activity.',
  openGraph: {
    title: 'Wotify — Web3 Wallet Activity Notifications',
    description:
      'Watch wallets across multiple chains and get instant notifications on transfers, swaps, and on-chain activity.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${dmMono.variable} ${sora.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
