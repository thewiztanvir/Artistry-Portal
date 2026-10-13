import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import siteData from '@/content/site.json';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Contact Us | Artistry Accessories & Packaging Dhaka',
  description:
    'Contact Artistry Accessories & Packaging at our head office in Bijoy Nagar, Dhaka, Bangladesh. Inquire about apparel manufacturing, equipment, brand trims, and export packaging.',
};

export default function ContactPage() {
  const { contact, social } = siteData;
  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    social.whatsappMessage
  )}`;

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
              <li className="text-ink font-medium">Contact</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-h1 font-semibold text-ink tracking-tight">
            Contact Us
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate max-w-2xl">
            Whether you need a quick quote, physical fabric swatches, or pre-production sample development, our merchandising team responds within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Main Two-Column Contact Section ──────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="border border-line rounded-xl p-6 sm:p-8 bg-white shadow-xs">
                  <h2 className="text-2xl font-semibold text-indigo mb-2">
                    Send an Enquiry
                  </h2>
                  <p className="text-sm text-slate mb-6">
                    Fill out the form below. Please mention style, estimated quantities, and required delivery date if available.
                  </p>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Office & Factory Details with Location Icon */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal delay={100}>
                <div className="border border-line rounded-xl p-6 sm:p-8 bg-mist/60 space-y-6">
                  <h2 className="text-xl font-semibold text-indigo">
                    Head Office Address
                  </h2>

                  {/* Office Address Card */}
                  <div className="bg-white border border-line rounded-lg p-5 shadow-2xs">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-md bg-indigo/10 text-indigo flex-shrink-0 mt-0.5">
                        <MapPin className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-caption font-semibold uppercase tracking-wider text-slate">
                          Head Office
                        </h3>
                        <p className="text-base text-ink font-semibold leading-snug">
                          {contact.address}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                          <a
                            href={contact.directionsLink || contact.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo hover:underline underline-offset-2"
                          >
                            <Navigation className="w-3.5 h-3.5" strokeWidth={2} />
                            <span>Get Directions</span>
                          </a>
                          <span className="text-line text-xs" aria-hidden="true">&bull;</span>
                          <a
                            href={contact.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-slate hover:text-indigo hover:underline underline-offset-2"
                          >
                            <span>Open Google Maps</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact Channels */}
                  <div className="space-y-4 border-t border-line pt-4">
                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-md bg-white border border-line text-indigo flex-shrink-0 mt-0.5">
                        <Phone className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-caption font-semibold uppercase tracking-wider text-slate mb-0.5">
                          Telephone
                        </h3>
                        <a
                          href={`tel:${contact.phone.replace(/\s/g, '')}`}
                          className="text-base font-semibold text-ink hover:text-indigo transition-colors"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-md bg-white border border-line text-indigo flex-shrink-0 mt-0.5">
                        <Mail className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-caption font-semibold uppercase tracking-wider text-slate mb-0.5">
                          Email Enquiries
                        </h3>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-base font-semibold text-ink hover:text-indigo transition-colors"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-md bg-white border border-line text-indigo flex-shrink-0 mt-0.5">
                        <Clock className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-caption font-semibold uppercase tracking-wider text-slate mb-0.5">
                          Business Hours
                        </h3>
                        <p className="text-sm text-ink font-medium">
                          {contact.hours}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Direct WhatsApp Call to Action */}
                  <div className="border-t border-line pt-4">
                    <h3 className="text-caption font-semibold uppercase tracking-wider text-slate mb-2">
                      Instant WhatsApp Messaging
                    </h3>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 w-full bg-[#25D366] text-white px-5 py-3 rounded-btn font-semibold text-sm hover:opacity-90 transition-opacity shadow-xs"
                      aria-label="Chat with Artistry team on WhatsApp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <span>Chat directly on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
