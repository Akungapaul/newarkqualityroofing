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
    `Most roofing work in ${cityName} requires a construction permit before the first shingle comes off. In Essex County municipalities, a full roof replacement, a tear-off, structural deck repair, and the installation of a new roofing system are all permitted under the New Jersey Uniform Construction Code, which the local building department enforces. Minor repairs — replacing a handful of shingles or sealing a small leak — are often considered ordinary maintenance and may not need a permit, but the safe move is always to confirm with the ${cityName} building office before work begins so the project stays on the right side of local requirements.`,
    `New Jersey ties roofing work to the International Residential Code and the energy and fire provisions adopted statewide. That means a re-roof has to account for how many layers are already on the structure — New Jersey generally limits a roof to two layers of asphalt shingles, so a third covering triggers a required tear-off down to the deck. Ice-barrier underlayment at the eaves, proper fastening for wind resistance, and adequate attic ventilation are all code points an inspector will look for. We build every ${cityName} project to those standards from the start, so the roof passes inspection the first time and protects the home for its full expected life.`,
    `As your licensed contractor, we handle the permit process for you. We pull the construction permit from the ${cityName} building department under our New Jersey Home Improvement Contractor registration, schedule the required inspections, and meet the inspector on site so nothing slows the job down. Homeowners are not expected to navigate the municipal paperwork alone — that responsibility sits with the contractor doing the work, and pulling a proper permit is also what keeps the work documented for insurance claims and future property sales.`,
    `Skipping the permit is a costly shortcut. Unpermitted roofing work in ${cityName} can lead to stop-work orders, fines, and the obligation to remove and redo the roof to code — and it can surface as a red flag during a home sale or an insurance inspection, since unpermitted work often is not covered when a claim is filed. Properties in local historic districts or under homeowners-association rules can carry added review steps for materials and appearance. We flag any of those ${cityName}-specific requirements up front, so there are no surprises once the project is underway.`,
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
