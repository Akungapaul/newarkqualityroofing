import type { ReactNode } from 'react';
import Link from 'next/link';
import { generateServicePageSlug } from '@/lib/slug-utils';
import { AnimateIn } from '@/components/animations/AnimateIn';
import { StaggerGrid, StaggerItem } from '@/components/animations/StaggerGrid';
import { HEADING_CONFIG } from '@/data/heading-config';

// ─── Services grid ───────────────────────────────────────────────────────────
// Two audience groups — Residential and Commercial — each closing with a CTA
// into its pillar hub (/residential-roofing, /commercial-roofing). The section
// H2 stays the §17 Core question string and each group heading is a question-
// form H3 (the heading audit gates home H2–H4 as questions). Card names are
// declarative service labels rendered as styled text, not headings.

type IconKey =
  | 'repair' | 'replace' | 'inspect' | 'emergency'
  | 'storm' | 'commercial' | 'materials' | 'gutters';

// Line icons (roofing-relevant), rendered inside a 24×24 stroked <svg>.
const ICONS: Record<IconKey, ReactNode> = {
  repair: (<><path d="M3 12l9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></>),
  replace: (<><path d="M4 13l8-7 8 7" /><path d="M6 11v9h12v-9" /><path d="M12 3v3M12 14l2.5 2.5" /></>),
  inspect: (<><circle cx="11" cy="11" r="6" /><path d="M20 20l-4-4" /><path d="M11 8v6M8 11h6" /></>),
  emergency: (<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />),
  storm: (<><path d="M7 16a4 4 0 010-8 5 5 0 019.6-1.5A3.5 3.5 0 0117 16H7z" /><path d="M8 19l-1 2M12 19l-1 2M16 19l-1 2" /></>),
  commercial: (<><path d="M4 21V6l7-3v18M11 21V9l7 2v10M4 21h16" /><path d="M7 9h0M7 13h0M15 14h0M15 17h0" /></>),
  materials: (<><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5M3 17l9 5 9-5" /></>),
  gutters: (<><path d="M3 12h18M5 12v5a2 2 0 002 2h10a2 2 0 002-2v-5" /><path d="M8 12V7a4 4 0 018 0v5" /></>),
};

interface ServiceCardData {
  icon: IconKey;
  name: string;
  desc: string;
  slug: string; // base service slug → generateServicePageSlug() adds "-in-newark-nj"
}

const RESIDENTIAL_SERVICES: ServiceCardData[] = [
  { icon: 'repair', name: 'Roof Repair', desc: 'Leaks, missing shingles, and failed flashing — fixed fast and done right.', slug: 'roof-repair' },
  { icon: 'replace', name: 'Roof Replacement', desc: 'Full tear-off and new-roof systems built for Newark’s weather.', slug: 'roof-replacement' },
  { icon: 'inspect', name: 'Roof Inspection', desc: 'A free 25-point assessment with photos and a written report.', slug: 'roof-inspection' },
  { icon: 'emergency', name: 'Emergency Roof Repair', desc: 'Storm damage or a sudden leak — 1–4 hour response with tarping.', slug: 'emergency-roof-repair' },
  { icon: 'materials', name: 'Shingle & Metal Roofing', desc: 'Architectural asphalt, standing-seam metal, and slate installs.', slug: 'asphalt-shingle-roofing' },
  { icon: 'gutters', name: 'Gutters & Components', desc: 'Gutters, skylights, chimney flashing, and roof ventilation.', slug: 'gutter-installation-repair' },
];

const COMMERCIAL_SERVICES: ServiceCardData[] = [
  { icon: 'commercial', name: 'Commercial Roof Installation', desc: 'Engineered TPO, EPDM, and metal systems for Newark businesses.', slug: 'commercial-roof-installation' },
  { icon: 'materials', name: 'TPO Roofing', desc: 'Heat-welded single-ply membranes for air-conditioned buildings.', slug: 'tpo-roofing-installation' },
  { icon: 'replace', name: 'EPDM Rubber Roofing', desc: 'Durable rubber membranes for warehouses and low-slope roofs.', slug: 'epdm-commercial-roofing' },
  { icon: 'repair', name: 'Commercial Roof Repair', desc: 'Membrane repairs, leak surveys, and flashing restoration.', slug: 'commercial-roof-repair' },
];

function ServiceCard({ s }: { s: ServiceCardData }) {
  return (
    <Link
      href={`/${generateServicePageSlug(s.slug)}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-parchment-light p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-copper-light hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-parchment"
    >
      {/* Copper ridgeline — persistent, brightens on hover */}
      <span
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-copper-light via-copper to-copper-dark opacity-40 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <span
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10 text-copper-dark transition-colors duration-300 group-hover:bg-forest group-hover:text-copper-light"
        aria-hidden="true"
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {ICONS[s.icon]}
        </svg>
      </span>
      <span className="font-heading text-xl font-semibold leading-tight text-forest">
        {s.name}
      </span>
      <span className="mt-2 flex-1 font-body text-base italic leading-relaxed text-text-secondary">
        {s.desc}
      </span>
      <span className="mt-5 inline-flex items-center gap-1.5 font-heading text-base font-semibold text-copper-dark transition-colors group-hover:text-copper">
        Learn more
        <svg
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}

function HubCta({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-8 text-center">
      <Link
        href={href}
        className="inline-flex items-center gap-2 font-heading text-lg font-semibold text-copper-dark transition-colors hover:text-copper"
      >
        {label}
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <section className="bg-parchment py-16 lg:py-24" aria-labelledby="services-heading">
      <AnimateIn>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-3 font-heading text-sm font-semibold uppercase tracking-[0.28em] text-copper-dark">
              <span className="h-px w-8 bg-copper/60" aria-hidden="true" />
              Our Roofing Services
              <span className="h-px w-8 bg-copper/60" aria-hidden="true" />
            </span>
            <h2
              id="services-heading"
              className="mt-5 text-balance font-heading text-3xl font-bold leading-[1.1] text-forest sm:text-4xl lg:text-5xl"
            >
              {HEADING_CONFIG.home.coreH2}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-body text-lg text-text-secondary">
              From emergency repairs to complete replacements, we deliver expert
              craftsmanship for every residential and commercial roof across Newark
              and Essex County.
            </p>
          </div>

          {/* Residential group */}
          <h3 className="mt-14 text-center font-heading text-2xl font-bold text-forest sm:text-3xl">
            Residential Roofing Services We Provide
          </h3>
          <StaggerGrid className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RESIDENTIAL_SERVICES.map((s) => (
              <StaggerItem key={s.slug}>
                <ServiceCard s={s} />
              </StaggerItem>
            ))}
          </StaggerGrid>
          <HubCta href="/residential-roofing" label="Explore Residential Roofing" />

          {/* Commercial group */}
          <h3 className="mt-16 text-center font-heading text-2xl font-bold text-forest sm:text-3xl">
            Commercial Roofing Services We Provide
          </h3>
          <StaggerGrid className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {COMMERCIAL_SERVICES.map((s) => (
              <StaggerItem key={s.slug}>
                <ServiceCard s={s} />
              </StaggerItem>
            ))}
          </StaggerGrid>
          <HubCta href="/commercial-roofing" label="Explore Commercial Roofing" />

          {/* View all */}
          <div className="mt-14 text-center">
            <Link
              href="/roofing-services"
              className="inline-flex items-center gap-2 rounded-md border-2 border-forest bg-transparent px-8 py-3 font-heading text-lg font-semibold text-forest transition-colors hover:bg-forest hover:text-text-on-dark"
            >
              View All Services
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
