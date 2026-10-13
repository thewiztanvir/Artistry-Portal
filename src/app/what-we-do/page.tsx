import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shirt, Layers } from 'lucide-react';
import whatWeDoData from '@/content/whatwedo.json';
import ProcessStrip from '@/components/ProcessStrip';
import StitchDivider from '@/components/StitchDivider';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'What We Do | Garments Manufacturing & Accessories Supply',
  description:
    'Explore Artistry capabilities: garments manufacturing (knit & woven) and comprehensive accessories supply (labels, hang tags, poly bags, cartons, trims). 5-step production process.',
};

export default function WhatWeDoPage() {
  const { sections, process } = whatWeDoData;
  const garments = sections.find((s) => s.id === 'garments') || sections[0];
  const accessories = sections.find((s) => s.id === 'accessories') || sections[1];

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
              <li className="text-ink font-medium">What we do</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-h1 font-semibold text-ink tracking-tight">
            What We Do
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate max-w-2xl">
            Two specialized divisions operating in tandem: full-scale garment manufacturing and end-to-end accessory &amp; packaging supply.
          </p>
        </div>
      </section>

      {/* ── Section 1: Garments Manufacturing (White) ─────────────── */}
      <section id="garments" className="py-16 sm:py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo/10 text-indigo rounded text-caption font-semibold mb-4 border border-indigo/20">
                  <Shirt className="w-3.5 h-3.5" />
                  <span>Division 01</span>
                </div>
                <h2 className="text-2xl sm:text-h2 font-semibold text-indigo mb-4">
                  {garments.title}
                </h2>
                <p className="text-base text-slate leading-relaxed mb-6">
                  {garments.intro}
                </p>
                <div className="p-5 rounded-xl border border-line bg-mist/60 shadow-2xs">
                  <h3 className="text-caption font-semibold text-ink uppercase tracking-wider mb-2">
                    Order Approach &amp; Lead Times
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {garments.orderApproach}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="border border-line rounded-xl p-6 sm:p-7 bg-white shadow-2xs">
                  <h3 className="text-h3 font-semibold text-ink mb-4">
                    Product Categories
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {garments.offered.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink font-medium">
                        <CheckCircle2 className="w-4 h-4 text-kraft flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-line rounded-xl p-6 sm:p-7 bg-white shadow-2xs">
                  <h3 className="text-h3 font-semibold text-ink mb-2">
                    Fabrics &amp; Materials
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {garments.materials}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <StitchDivider />
      </div>

      {/* ── Section 2: Accessories & Packaging Supply (Mist) ───────── */}
      <section id="accessories" className="bg-mist py-16 sm:py-20 border-y border-line scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-kraft/20 text-ink rounded text-caption font-semibold mb-4 border border-kraft/30">
                  <Layers className="w-3.5 h-3.5 text-ink" />
                  <span>Division 02</span>
                </div>
                <h2 className="text-2xl sm:text-h2 font-semibold text-indigo mb-4">
                  {accessories.title}
                </h2>
                <p className="text-base text-slate leading-relaxed mb-6">
                  {accessories.intro}
                </p>
                <div className="p-5 rounded-xl border border-line bg-white shadow-2xs">
                  <h3 className="text-caption font-semibold text-ink uppercase tracking-wider mb-2">
                    Order Approach &amp; Minimums
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {accessories.orderApproach}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="border border-line rounded-xl p-6 sm:p-7 bg-white shadow-2xs">
                  <h3 className="text-h3 font-semibold text-ink mb-4">
                    Trims, Labels &amp; Packaging Range
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {accessories.offered.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink font-medium">
                        <CheckCircle2 className="w-4 h-4 text-kraft flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-line rounded-xl p-6 sm:p-7 bg-white shadow-2xs">
                  <h3 className="text-h3 font-semibold text-ink mb-2">
                    Substrates &amp; Raw Materials
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {accessories.materials}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <StitchDivider />
      </div>

      {/* ── Section 3: Process Strip (White) ───────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="max-w-2xl mb-12">
              <p className="text-caption font-semibold uppercase tracking-wider text-slate mb-2">
                Order Execution
              </p>
              <h2 className="text-2xl sm:text-h2 font-semibold text-indigo">
                Our 5-Step Process
              </h2>
              <p className="mt-2 text-base text-slate">
                How we move from your initial inquiry to sample sign-off and final shipment.
              </p>
            </div>

            <div className="border border-line rounded-xl p-6 sm:p-10 bg-white shadow-xs">
              <ProcessStrip steps={process} />
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
                Custom Production
              </p>
              <h2 className="text-2xl font-semibold text-white">
                Need custom branded trims or private label apparel?
              </h2>
              <p className="text-sm text-white/80 mt-1">
                Send your artwork files or physical samples for technical review.
              </p>
            </div>
            <Link href="/contact" className="btn-inverted flex-shrink-0 inline-flex items-center gap-2">
              <span>Start an enquiry</span>
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
