import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import workData from '@/content/work.json';
import OurWorkGallery from '@/components/OurWorkGallery';
import ScrollReveal from '@/components/ScrollReveal';
import type { WorkItem } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Our Work | Garments, Accessories & Packaging Showcase',
  description:
    'Browse our project gallery of manufactured garments, woven labels, hang tags, poly bags, and branded packaging cartons produced in Dhaka, Bangladesh.',
};

export default function OurWorkPage() {
  const items = workData as WorkItem[];

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
              <li className="text-ink font-medium">Our work</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-h1 font-semibold text-ink tracking-tight">
            Our Work
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate max-w-2xl">
            A visual showcase of finished garments, custom trims, labels, and branded retail packaging produced for clients in Bangladesh and worldwide.
          </p>
        </div>
      </section>

      {/* ── Gallery Section (White background) ────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <OurWorkGallery items={items} />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Closing CTA Band (Indigo) ────────────────────────────── */}
      <section className="bg-indigo text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-caption font-semibold uppercase tracking-wider text-kraft mb-1">
                Have a project in mind?
              </p>
              <h2 className="text-2xl font-semibold text-white">
                Request physical samples or discuss custom specifications
              </h2>
            </div>
            <Link href="/contact" className="btn-inverted flex-shrink-0 inline-flex items-center gap-2">
              <span>Contact our team</span>
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
