import { HEADING_CONFIG } from '@/data/heading-config';
import { ProseLead, SectionHeading } from './ProseLead';

interface CityPermitsProps {
  cityName: string;
}

const PERMITS_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d="M5 3h9l5 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6M9 17h4" />
  </svg>
);

/**
 * Shared §4.3 "What Should You Know About Roofing Permits in [City]?" section
 * (D-11). Single localized copy block with the city name interpolated — no new
 * schema field, no 21 hand-authored variants. The H2 is sourced verbatim from
 * HEADING_CONFIG.city.permitsH2 so the page and the audit can never drift.
 */
export function CityPermits({ cityName }: CityPermitsProps) {
  const heading = HEADING_CONFIG.city.permitsH2(cityName);

  const content: string[] = [
    `According to the New Jersey Uniform Construction Code (N.J.A.C. 5:23-2.7), a complete re-roof or tear-off on a detached one- or two-family home in ${cityName} is **ordinary maintenance** that requires **no construction permit**, inspection, or notice to the construction official.`,
    `That **ordinary maintenance** exemption covers the roof covering only. On commercial buildings, condominiums, townhouses, and other attached or multi-family structures, the same code treats roofing as ordinary maintenance up to 25 percent of the roof area in a 12-month period; work beyond that threshold requires a permit. Structural work — cutting or replacing load-bearing framing or altering the roof structure — always requires a permit under N.J.A.C. 5:23-2.7(b), regardless of building type.`,
    `When **a construction permit** applies, New Jersey's Rehabilitation Subcode (N.J.A.C. 5:23-6.4) calls for full removal of the existing roof covering, with no recover-over, when the roof is water-soaked or deteriorated, when the covering is wood shake, slate, clay, cement, or asbestos-cement tile, or when two or more layers already exist. A third layer of asphalt shingles is therefore not allowed; the code calls for a tear-off down to the deck.`,
    `On the projects that do require **a construction permit**, Newark Quality Roofing pulls it under our New Jersey Home Improvement Contractor registration — required of roofing contractors statewide under the Contractors' Registration Act (N.J.S.A. 56:8-136) — schedules the required inspections, and meets the inspector on site. Properties in a local historic district or governed by homeowners-association rules can carry added review of materials and appearance, and we identify any of those ${cityName}-specific requirements before the work starts.`,
  ];

  return (
    <div className="rounded-lg border-l-4 border-forest bg-forest/5 p-6 lg:p-8">
      <SectionHeading id="permits-heading" icon={PERMITS_ICON}>
        {heading}
      </SectionHeading>
      <div className="mt-5">
        <ProseLead paragraphs={content} />
      </div>
    </div>
  );
}
