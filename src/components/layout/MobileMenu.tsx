'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import type { NavServiceGroup, NavCityItem } from '@/data/nav-data';

// ─── Props ──────────────────────────────────────────────────────────────────

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  serviceGroups: NavServiceGroup[];
  cityItems: NavCityItem[];
}

// ─── Accordion section ──────────────────────────────────────────────────────

function AccordionSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(defaultOpen);

  return (
    <div className="border-b border-forest-light/30">
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-expanded={isExpanded}
        className="flex w-full items-center justify-between px-6 py-4 text-left font-heading text-base font-bold tracking-wide text-parchment transition-colors duration-200 hover:bg-forest-light/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-copper"
      >
        {title}
        <svg
          className={`h-4 w-4 flex-shrink-0 text-copper-light transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4">{children}</div>
      </div>
    </div>
  );
}

// ─── Mobile menu component ──────────────────────────────────────────────────

export function MobileMenu({ isOpen, onClose, serviceGroups, cityItems }: MobileMenuProps) {
  // Scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-400 md:hidden ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-modal={isOpen}
      role="dialog"
      aria-label="Navigation menu"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-forest-dark/60 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-forest shadow-2xl transition-transform duration-400 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-forest-light/30 px-6 py-4">
          <span className="font-heading text-lg font-bold text-parchment">Menu</span>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-md text-parchment transition-colors duration-200 hover:bg-forest-light/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
            aria-label="Close navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          {/* Services accordion groups */}
          <AccordionSection title="Services" defaultOpen>
            <div className="space-y-4">
              {serviceGroups.map((group) => (
                <div key={group.category}>
                  <h4 className="mb-1.5 font-heading text-xs font-bold uppercase tracking-widest text-copper-light">
                    {group.categoryLabel}
                  </h4>
                  <ul className="space-y-0.5">
                    {group.services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/${service.slug}`}
                          onClick={onClose}
                          className="block rounded px-3 py-1.5 font-body text-sm text-parchment/80 transition-colors duration-150 hover:bg-forest-light/20 hover:text-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-copper"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AccordionSection>

          {/* Locations */}
          <AccordionSection title="Locations">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-0.5">
              {cityItems.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/${city.slug}`}
                    onClick={onClose}
                    className="block rounded px-3 py-1.5 font-body text-sm text-parchment/80 transition-colors duration-150 hover:bg-forest-light/20 hover:text-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-copper"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionSection>

          {/* Static links */}
          <div className="border-b border-forest-light/30">
            <Link
              href="/about"
              onClick={onClose}
              className="block px-6 py-4 font-heading text-base font-bold tracking-wide text-parchment transition-colors duration-200 hover:bg-forest-light/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-copper"
            >
              About
            </Link>
          </div>
          <div className="border-b border-forest-light/30">
            <Link
              href="/contact"
              onClick={onClose}
              className="block px-6 py-4 font-heading text-base font-bold tracking-wide text-parchment transition-colors duration-200 hover:bg-forest-light/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-copper"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-forest-light/30 p-6">
          <Link
            href="#lead-form"
            onClick={onClose}
            className="block w-full rounded-md bg-copper px-6 py-3 text-center font-heading text-base font-bold tracking-wide text-text-on-copper shadow-lg transition-all duration-200 hover:bg-copper-dark hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-light focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
          >
            Get Free Estimate
          </Link>
        </div>
      </div>
    </div>
  );
}
