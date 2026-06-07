import Link from 'next/link';
import { StaggerGrid, StaggerItem } from '@/components/animations/StaggerGrid';
import { HEADING_CONFIG } from '@/data/heading-config';

// ─── Category bento config ──────────────────────────────────────────────────
// One tile per service category. Each tile links to that category's canonical,
// indexed service page (route `/{leadSlug}`); the descriptor carries the
// service-name keywords as text rather than dumping 65 per-service links.
// Inline line-icons (1.5 stroke) follow the HomeWhyChooseUs idiom — no icon dep.

interface Category {
  id: string;
  label: string;
  leadSlug: string;
  blurb: string;
  icon: React.ReactNode;
}

const iconClass = 'h-6 w-6';
const iconProps = {
  className: iconClass,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

const CATEGORIES: Category[] = [
  {
    id: 'repair-maintenance',
    label: 'Repair & Maintenance',
    leadSlug: 'roof-repair',
    blurb: 'Roof repair, leak repair, storm damage, and routine maintenance.',
    icon: (
      <svg {...iconProps}>
        <path d="M14.7 6.3a4 4 0 0 1-5.2 5.2L5 16l3 3 4.5-4.5a4 4 0 0 0 5.2-5.2l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5Z" />
      </svg>
    ),
  },
  {
    id: 'residential-roof-types',
    label: 'Residential Roof Types',
    leadSlug: 'asphalt-shingle-roofing',
    blurb: 'Asphalt, slate, metal, flat, tile, and cedar roofs.',
    icon: (
      <svg {...iconProps}>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-5h4v5" />
      </svg>
    ),
  },
  {
    id: 'commercial-roof-types',
    label: 'Commercial Roof Types',
    leadSlug: 'tpo-roofing-installation',
    blurb: 'TPO, EPDM, PVC, modified bitumen, and green roofs.',
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01" />
        <path d="M10 21v-3h4v3" />
      </svg>
    ),
  },
  {
    id: 'components-specialty',
    label: 'Components & Specialty',
    leadSlug: 'gutter-installation-repair',
    blurb: 'Flashing, gutters, skylights, soffit, fascia, and vents.',
    icon: (
      <svg {...iconProps}>
        <path d="M4 7h16v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7Z" />
        <path d="M9 13v4a2 2 0 0 0 2 2" />
      </svg>
    ),
  },
  {
    id: 'energy-solar',
    label: 'Energy & Solar',
    leadSlug: 'energy-efficient-roofing-solutions',
    blurb: 'Solar roofing, energy-efficient systems, and cool coatings.',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8" />
      </svg>
    ),
  },
  {
    id: 'commercial-services',
    label: 'Commercial Services',
    leadSlug: 'commercial-roof-installation',
    blurb: 'Commercial installation, repair, replacement, and inspections.',
    icon: (
      <svg {...iconProps}>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4V3h6v1" />
        <path d="m9 13 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 'design-consultation',
    label: 'Design & Consultation',
    leadSlug: 'custom-roof-design-consultation',
    blurb: 'Custom roof design, historic restoration, and ice-dam prevention.',
    icon: (
      <svg {...iconProps}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
      </svg>
    ),
  },
  {
    id: 'replacement-sub-pages',
    label: 'Replacement Services',
    leadSlug: 'roof-replacement',
    blurb: 'Full replacement, tear-off, re-roofing, and insurance claims.',
    icon: (
      <svg {...iconProps}>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 13 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </svg>
    ),
  },
];

interface CityServicesGridProps {
  cityName: string;
  /** Retained for template compatibility; combo links are no longer rendered. */
  citySlug?: string;
  /** §4.3 Core H2. Defaults to HEADING_CONFIG.city.coreH2; the template may pass it
   *  explicitly to keep heading-config the single source of truth for the page. */
  coreHeading?: string;
}

export function CityServicesGrid({ cityName, coreHeading }: CityServicesGridProps) {
  const heading = coreHeading ?? HEADING_CONFIG.city.coreH2(cityName);

  return (
    <div>
      <h2 id="services-heading" className="font-heading text-2xl font-bold text-forest sm:text-3xl">
        {heading}
      </h2>

      {/* Answer-first lead (§17 / Rule 2) — definitive ≤40-word answer to the H2. */}
      <p className="mt-4 max-w-3xl font-body text-lg leading-relaxed text-text-secondary">
        Newark Quality Roofing provides {CATEGORIES.length} categories of roofing
        service in {cityName} — roof repair and maintenance, residential and
        commercial roof types, components and specialty work, energy and solar,
        and full roof replacement.
      </p>

      <StaggerGrid className="mt-8 grid items-stretch gap-5 sm:grid-cols-2">
        {CATEGORIES.map((cat) => (
          <StaggerItem key={cat.id}>
            <Link
              href={`/${cat.leadSlug}`}
              aria-label={`Explore ${cat.label} roofing in ${cityName}`}
              className="group flex h-full flex-col rounded-lg border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-copper/40 hover:shadow-md"
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-copper/10 text-copper transition-colors duration-300 group-hover:bg-copper/20"
                aria-hidden="true"
              >
                {cat.icon}
              </span>

              <span className="mt-4 font-heading text-xl font-semibold text-forest">
                {cat.label}
              </span>

              <span className="mt-2 font-body text-base leading-relaxed text-text-secondary">
                {cat.blurb}
              </span>

              <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-body text-base font-semibold text-copper transition-colors group-hover:text-copper-dark">
                Explore
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  );
}
