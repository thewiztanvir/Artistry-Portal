import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Workflow, PackageCheck, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import homeData from '@/content/home.json';
import servicesData from '@/content/services.json';
import workData from '@/content/work.json';
import siteData from '@/content/site.json';
import ServiceCard from '@/components/ServiceCard';
import StitchDivider from '@/components/StitchDivider';
import ScrollReveal from '@/components/ScrollReveal';
import SafeImage from '@/components/SafeImage';
import type { WorkItem } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Artistry — Garment Equipment Manufacturer & Global Clothing Supplier',
  description:
    'Worldwide manufacturer and supplier of garment equipment, ready clothing, brand accessories, labels, and export packaging.',
};

const iconMap: Record<string, React.ReactNode> = {
  award: <Award className="w-6 h-6 text-indigo" strokeWidth={1.75} aria-hidden="true" />,
  workflow: <Workflow className="w-6 h-6 text-indigo" strokeWidth={1.75} aria-hidden="true" />,
  package: <PackageCheck className="w-6 h-6 text-indigo" strokeWidth={1.75} aria-hidden="true" />,
  globe: <Globe className="w-6 h-6 text-indigo" strokeWidth={1.75} aria-hidden="true" />,
};

export default function HomePage() {
  const { hero, whyArtistry, featuredWorkIds } = homeData;

  const featuredItems: WorkItem[] = (workData as WorkItem[]).filter((item) =>
    featuredWorkIds.includes(item.id)
  );

  return (
    <div className="bg-white text-ink">
      {/* ── 1. HERO SECTION ─────────────────────────────────────── */}
      <section className="relative bg-indigo overflow-hidden">
        {/* Decorative watermark — artistry mark at large scale */}
        <div
          className="pointer-events-none select-none absolute -right-24 top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.07] sm:-right-16 lg:right-0"
          aria-hidden="true"
        >
          <Image
            src="/artistry-logo/artistry-mark.svg"
            alt=""
            fill
            sizes="520px"
            className="object-contain"
            priority
          />
        </div>

        {/* Subtle top dashed Kraft accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-kraft opacity-60" aria-hidden="true" />

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            {/* Eyebrow / global badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-semibold uppercase tracking-widest text-kraft mb-6 backdrop-blur-sm">
              <Globe className="w-3.5 h-3.5 text-kraft" strokeWidth={2} aria-hidden="true" />
              <span>Worldwide Manufacturing &amp; Supply</span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
              {hero.headline}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl font-normal">
              {hero.subheading}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-2 bg-white text-indigo text-sm font-semibold px-6 py-3.5 rounded-btn hover:bg-mist transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white shadow-sm"
              >
                <span>{hero.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2 border border-white/25 text-white hover:bg-white/10 text-sm font-semibold px-6 py-3.5 rounded-btn transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>{hero.secondaryCta.label}</span>
                <ArrowRight className="w-4 h-4 text-kraft" strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ── 2. SERVICES SUMMARY (Mist background) ─────────────────── */}
      <section className="bg-mist py-16 sm:py-20 border-y border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="max-w-2xl mb-12">
              <p className="text-caption font-semibold uppercase tracking-wider text-slate mb-2">
                What We Offer
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-indigo">
                Two core capabilities under one roof
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service, idx) => (
              <ScrollReveal key={service.id} delay={idx * 100}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  items={service.items}
                  orderInfo={service.orderInfo}
                  href={`/what-we-do#${service.id}`}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <StitchDivider />
      </div>

      {/* ── 3. FEATURED WORK (White background) ──────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <p className="text-caption font-semibold uppercase tracking-wider text-slate mb-2">
                  Showcase Portfolio
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-indigo">
                  Featured production &amp; packaging
                </h2>
              </div>
              <Link
                href="/our-work"
                className="link-indigo text-sm font-semibold inline-flex items-center gap-1 self-start sm:self-auto"
              >
                <span>View all {workData.length} items in gallery</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Static responsive 4:3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item, idx) => (
              <ScrollReveal key={item.id} delay={idx * 75}>
                <Link
                  href="/our-work"
                  className="group block border border-line rounded-lg overflow-hidden bg-white hover:border-indigo transition-all duration-200 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo"
                  aria-label={`${item.title} — view in gallery`}
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-mist">
                    <SafeImage
                      src={item.image}
                      alt={item.caption}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      loading="lazy"
                      category={item.category}
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/90 backdrop-blur-sm text-slate text-xs font-semibold border border-line">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-ink group-hover:text-indigo transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <StitchDivider />
      </div>

      {/* ── 4. WHY ARTISTRY (Mist background) ────────────────────── */}
      <section className="bg-mist py-16 sm:py-20 border-y border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="max-w-2xl mb-12">
              <p className="text-caption font-semibold uppercase tracking-wider text-slate mb-2">
                The Artistry Advantage
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-indigo">
                {whyArtistry.heading}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyArtistry.points.map((point, idx) => (
              <ScrollReveal key={point.heading} delay={idx * 75}>
                <article className="bg-white border border-line rounded-lg p-6 h-full flex flex-col hover:border-indigo transition-colors duration-150 shadow-xs">
                  <div
                    className="w-12 h-12 rounded-lg bg-mist border border-line flex items-center justify-center mb-4"
                    aria-hidden="true"
                  >
                    {iconMap[point.iconKey || ''] || (
                      <CheckCircle2 className="w-6 h-6 text-indigo" strokeWidth={1.75} />
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-ink mb-2">
                    {point.heading}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {point.body}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CLOSING CTA BAND (Indigo background) ──────────────── */}
      <section className="bg-indigo text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-kraft mb-2">
                  Ready To Order
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                  Have an enquiry or need sample development?
                </h2>
                <p className="text-base text-white/80 leading-relaxed">
                  Send us your tech pack or accessory specification. We quote within 24 hours and turn samples around in 7 to 10 days.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-inverted inline-flex items-center gap-2">
                  <span>Contact us</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </Link>
                <Link
                  href="/our-work"
                  className="text-white hover:text-white/80 text-sm font-semibold underline underline-offset-4 transition-colors py-2"
                >
                  Explore work samples
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
