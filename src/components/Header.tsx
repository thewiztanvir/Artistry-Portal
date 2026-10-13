'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import type { NavLink } from '@/lib/types';

/* ── Navigation links ────────────────────────────────────────── */
const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'What we do', href: '/what-we-do' },
  { label: 'Our work', href: '/our-work' },
  { label: 'Contact', href: '/contact' },
];

/* ── Logo ──────────────────────────────────────────────────────── */
function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded py-1"
      aria-label="Artistry Accessories & Packaging — Return to homepage"
    >
      <Image
        src="/artistry-logo/artistry-logo-horizontal.svg"
        alt="Artistry Accessories & Packaging Logo"
        width={180}
        height={60}
        priority
        className="h-9 sm:h-10 w-auto"
      />
    </Link>
  );
}

/* ── Header ────────────────────────────────────────────────────── */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Track scroll to add subtle shadow */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close mobile nav on resize to desktop */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-shadow duration-200 border-b border-line ${
        scrolled ? 'shadow-xs' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Logo />

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink hover:text-indigo underline-offset-4 hover:underline transition-colors duration-150 py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-3">
            {/* Desktop: Contact us button */}
            <Link
              href="/contact"
              className="hidden md:inline-flex btn-primary"
            >
              Contact us
            </Link>

            {/* Mobile: Hamburger toggle */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-ink hover:bg-mist transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo cursor-pointer"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileOpen ? (
                <X className="h-6 w-6 text-ink" strokeWidth={2} aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 text-ink" strokeWidth={2} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden bg-white border-t border-line shadow-lg"
          aria-label="Mobile navigation"
        >
          <ul className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2.5 px-3 rounded-md text-base font-medium text-ink hover:bg-mist hover:text-indigo transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/contact"
                className="btn-primary w-full justify-center text-center"
                onClick={() => setMobileOpen(false)}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
