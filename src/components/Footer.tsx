import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Navigation, ExternalLink } from 'lucide-react';
import siteData from '@/content/site.json';

/* ── Footer ────────────────────────────────────────────────────── */
export default function Footer() {
  const year = new Date().getFullYear();
  const { contact } = siteData;

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'What we do', href: '/what-we-do' },
    { label: 'Our work', href: '/our-work' },
    { label: 'Contact', href: '/contact' },
  ];

  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    siteData.social.whatsappMessage
  )}`;

  return (
    <footer className="bg-indigo text-white border-t border-indigo/80">
      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Column 1: Logo + tagline */}
        <div className="md:col-span-5 space-y-4">
          <Link
            href="/"
            className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            aria-label="Artistry A&P — Home"
          >
            {/* Official white reverse logo for dark Indigo background */}
            <Image
              src="/artistry-logo/artistry-logo-white.svg"
              alt="Artistry Accessories & Packaging"
              width={180}
              height={60}
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-white/80 text-sm leading-relaxed max-w-sm">
            Garments manufacturer &amp; accessories supplier in Dhaka, Bangladesh. One reliable partner for finished apparel, woven trims, labels, and branded retail packaging.
          </p>
          <div className="pt-1">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-kraft" aria-hidden="true" />
              <span>Established 2014 &bull; Export Ready</span>
            </span>
          </div>
        </div>

        {/* Column 2: Quick links */}
        <nav aria-label="Footer navigation" className="md:col-span-3">
          <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4 opacity-70">
            Navigation
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/80 text-sm hover:text-white hover:underline underline-offset-2 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3: Contact details with Location Icon */}
        <div className="md:col-span-4 space-y-4">
          <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4 opacity-70">
            Head Office
          </h3>
          <address className="not-italic text-sm text-white/80 space-y-3 leading-relaxed">
            {/* Physical Address with MapPin */}
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-kraft flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <p className="text-white font-medium">{contact.address}</p>
                <a
                  href={contact.directionsLink || contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-kraft hover:text-white underline underline-offset-2 mt-1"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Telephone */}
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-white/60 flex-shrink-0" aria-hidden="true" />
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="hover:text-white hover:underline underline-offset-2 transition-colors"
              >
                {contact.phone}
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-white/60 flex-shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-white hover:underline underline-offset-2 transition-colors"
              >
                {contact.email}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="pt-1">
              <a
                href={whatsappUrl}
                className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full border border-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp Message"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366]" aria-hidden="true" />
                <span>WhatsApp: {contact.phone}</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>

            <p className="text-xs text-white/60 pt-1">{contact.hours}</p>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-indigo/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-kraft text-xs">
            &copy; {year} Artistry Accessories &amp; Packaging. All rights reserved.
          </p>
          <p className="text-white/50 text-xs">
            Flat 4D, Silver Rain Tower, 88, Bijoy Nagar, Noya Paltan, Dhaka
          </p>
        </div>
      </div>
    </footer>
  );
}
