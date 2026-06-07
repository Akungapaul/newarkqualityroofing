import { HEADING_CONFIG } from '@/data/heading-config';

interface CityPermitsProps {
  cityName: string;
}

/**
 * Shared §4.3 "What Should You Know About Roofing Permits in [City]?" section
 * (D-11). Single localized copy block with the city name interpolated — no new
 * schema field, no 21 hand-authored variants. The H2 is sourced verbatim from
 * HEADING_CONFIG.city.permitsH2 so the page and the audit can never drift.
 */
export function CityPermits({ cityName }: CityPermitsProps) {
  const heading = HEADING_CONFIG.city.permitsH2(cityName);

  const content: string[] = [
    `According to the New Jersey Uniform Construction Code (N.J.A.C. 5:23-2.7), a complete re-roof or tear-off on a detached one- or two-family home in ${cityName} is ordinary maintenance that requires no construction permit, inspection, or notice to the construction official.`,
    `That exemption covers the roof covering only. On commercial buildings, condominiums, townhouses, and other attached or multi-family structures, the same code treats roofing as ordinary maintenance up to 25 percent of the roof area in a 12-month period; work beyond that threshold requires a permit. Structural work — cutting or replacing load-bearing framing or altering the roof structure — always requires a permit under N.J.A.C. 5:23-2.7(b), regardless of building type.`,
    `When a permit applies, New Jersey's Rehabilitation Subcode (N.J.A.C. 5:23-6.4) calls for full removal of the existing roof covering, with no recover-over, when the roof is water-soaked or deteriorated, when the covering is wood shake, slate, clay, cement, or asbestos-cement tile, or when two or more layers already exist. A third layer of asphalt shingles is therefore not allowed; the code calls for a tear-off down to the deck.`,
    `On the projects that do require a permit, Newark Quality Roofing pulls it under our New Jersey Home Improvement Contractor registration — required of roofing contractors statewide under the Contractors' Registration Act (N.J.S.A. 56:8-136) — schedules the required inspections, and meets the inspector on site. Properties in a local historic district or governed by homeowners-association rules can carry added review of materials and appearance, and we identify any of those ${cityName}-specific requirements before the work starts.`,
  ];

  return (
    <div className="rounded-lg border-l-4 border-forest bg-forest/5 p-6 lg:p-8">
      <h2 id="permits-heading" className="font-heading text-2xl font-bold text-forest sm:text-3xl">
        {heading}
      </h2>
      <div className="mt-4 space-y-4">
        {content.map((paragraph, index) => (
          <p
            key={index}
            className="font-body text-base leading-relaxed text-text-secondary"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
