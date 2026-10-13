import type { Metadata } from 'next';
import { IBM_Plex_Sans, Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

/* ── Fonts ─────────────────────────────────────────────────────── */
const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
});

const notoSansBengali = Noto_Sans_Bengali({
  weight: ['400', '600'],
  subsets: ['bengali'],
  variable: '--font-noto-sans-bengali',
  display: 'swap',
});

/* ── Root metadata ─────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL('https://www.artistry-bd.com'),
  title: {
    template: 'Artistry A&P | %s',
    default: 'Artistry Accessories & Packaging — Dhaka',
  },
  description:
    'Artistry Accessories & Packaging is a Dhaka-based garments manufacturer and accessories supplier. We make garments and supply labels, packaging, and trims for local and export markets.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.artistry-bd.com',
    siteName: 'Artistry Accessories & Packaging',
    title: 'Artistry Accessories & Packaging — Dhaka',
    description:
      'Garments manufacturer and accessories supplier based in Dhaka, Bangladesh. One supplier for garments, labels, trims, and packaging.',
    images: [
      {
        url: '/images/placeholder-4x3.svg',
        width: 400,
        height: 300,
        alt: 'Artistry Accessories & Packaging',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artistry Accessories & Packaging — Dhaka',
    description: 'Garments manufacturer and accessories supplier based in Dhaka, Bangladesh.',
  },
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ── Root layout ───────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${notoSansBengali.variable}`}
    >
      <body className="font-sans text-ink antialiased">
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 btn-primary"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>

        <Footer />

        {/* Floating WhatsApp button — mobile only */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
