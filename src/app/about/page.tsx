import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import aboutData from '@/content/about.json';
import siteData from '@/content/site.json';
import StitchDivider from '@/components/StitchDivider';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'About | Artistry Accessories & Packaging',
  description:
    'Learn about Artistry Accessories & Packaging — established in 2014 in Dhaka. Global supplier of garment equipment, clothing, brand trims, and export packaging.',
};

export default function AboutPage() {
  const { story, profile } = aboutData;
  const { contact } = siteData;

  return (
    <div className="bg-white text-ink">
      {/* ── Page Header (Mist background) ────────────────────────── */}
      <section className="bg-mist border-b border-line py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="text-caption text-slate mb-3" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="link-indigo">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li className="text-ink font-medium">About</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-h1 font-semibold text-ink tracking-tight">
            About Artistry
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate max-w-2xl">
            A decade of reliable garment equipment manufacturing, clothing supply, and packaging solutions for global partners.
          </p>
        </div>
      </section>

      {/* ── Company Story (White background) ──────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-caption font-semibold uppercase tracking-wider text-slate mb-3">
                Our Story
              </p>
              <h2 className="text-2xl sm:text-h2 font-semibold text-indigo mb-8">
                Built on craftsmanship, discipline &amp; trust
              </h2>
              <div className="space-y-6 text-base text-ink leading-relaxed">
                {story.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <StitchDivider />
      </div>

      {/* ── Company Profile & Overview (Mist background) ──────────── */}
      <section className="bg-mist py-16 sm:py-20 border-y border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mb-10">
              <p className="text-caption font-semibold uppercase tracking-wider text-slate mb-2">
                Company Overview
              </p>
              <h2 className="text-2xl sm:text-h2 font-semibold text-indigo">
                Operational Profile
              </h2>
              <p className="mt-2 text-base text-slate">
                Key corporate facts and international trade credentials for brand owners, factories, and buying houses.
              </p>
            </div>

            {/* Profile table */}
            <div className="bg-white border border-line rounded-lg overflow-hidden max-w-4xl shadow-xs">
              <table className="w-full text-left text-sm border-collapse">
                <caption className="sr-only">Artistry operational specifications and profile</caption>
                <thead>
                  <tr className="border-b border-line bg-mist/60 text-slate font-semibold text-caption uppercase tracking-wider">
                    <th scope="col" className="px-6 py-4 w-1/3">Item</th>
                    <th scope="col" className="px-6 py-4">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {profile.map((item) => (
                    <tr key={item.label} className="hover:bg-mist/30 transition-colors">
                      <th scope="row" className="px-6 py-4 font-semibold text-ink align-top">
                        {item.label}
                      </th>
                      <td className="px-6 py-4 text-slate leading-relaxed">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Head Office Visit (White background) ───────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="border border-line rounded-xl p-8 sm:p-12 bg-white max-w-4xl mx-auto text-center shadow-xs">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-mist text-indigo mb-5 border border-line">
                <MapPin className="h-6 w-6 text-indigo" strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-semibold text-ink mb-3">
                Visit Our Head Office in Dhaka
              </h3>
              <p className="text-slate max-w-xl mx-auto text-base leading-relaxed mb-3">
                {contact.address}
              </p>
              <p className="text-caption text-slate/80 max-w-md mx-auto mb-6">
                Our merchandising and international trade team is available for meetings, material reviews, and order consultations.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  <span>Schedule a meeting</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </Link>
                <a
                  href={contact.directionsLink || contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-indigo text-sm font-semibold inline-flex items-center gap-1.5 px-3 py-2"
                >
                  <span>Google Maps directions</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Closing CTA Band (Indigo) ────────────────────────────── */}
      <section className="bg-indigo text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-caption font-semibold uppercase tracking-wider text-kraft mb-1">
                Collaborate With Us
              </p>
              <h2 className="text-2xl font-semibold text-white">
                Ready to review samples or request a quotation?
              </h2>
            </div>
            <Link href="/contact" className="btn-inverted flex-shrink-0 inline-flex items-center gap-2">
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
