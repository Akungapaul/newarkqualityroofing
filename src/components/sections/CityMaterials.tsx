import { HEADING_CONFIG } from '@/data/heading-config';

interface CityMaterialsProps {
  cityName: string;
}

/**
 * Shared §4.3 "What Roofing Materials Work Best for [City] Properties?" section
 * (D-11). Single localized copy block with the city name interpolated — no new
 * schema field, no 21 hand-authored variants. The H2 is sourced verbatim from
 * HEADING_CONFIG.city.materialsH2 so the page and the audit can never drift.
 */
export function CityMaterials({ cityName }: CityMaterialsProps) {
  const heading = HEADING_CONFIG.city.materialsH2(cityName);

  const content: string[] = [
    `Choosing the right roofing material for a ${cityName} property comes down to matching the system to the roof's pitch, the building's use, and how it has to stand up to Essex County's freeze-thaw winters, humid summers, and the heavy rain and wind that move through northern New Jersey. The pitched homes that dominate most ${cityName} streets, the flat and low-slope roofs over commercial buildings, and the mixed-use structures in between each call for a different approach. We walk every owner through the trade-offs in lifespan, upfront cost, and long-term maintenance before recommending a material so the decision fits both the structure and the budget.`,
    `Architectural asphalt shingles are the workhorse for the majority of pitched residential roofs in ${cityName}. They balance cost, durability, and curb appeal, install quickly, and carry manufacturer warranties of 30 years or more when paired with proper underlayment, ice-and-water shield along the eaves, and balanced attic ventilation. For homeowners who want a longer service life or a distinct look, we also install standing-seam and metal panel systems, which shed snow readily, resist wind uplift, and can last 50 years or longer — a strong fit for the steeper roofs and exposed elevations found across ${cityName}.`,
    `Commercial and multi-family buildings in ${cityName} almost always have flat or low-slope roofs, and those are best protected by single-ply membranes. TPO and PVC membranes reflect heat and hold up well to ponding water, while EPDM rubber remains a dependable, cost-effective choice for many low-traffic roofs. For roofs that take foot traffic or host rooftop equipment, modified bitumen and built-up systems add puncture resistance and redundancy. We match the membrane to the deck, the drainage, and the way the building is actually used so the roof performs through ${cityName}'s full weather cycle.`,
    `No single material is right for every roof in ${cityName}, which is why we start with a free inspection rather than a sales pitch. We assess the existing structure, the slope, the surrounding tree cover and exposure, and your plans for the property, then lay out the material options side by side with honest cost ranges and expected lifespans. That way you can weigh asphalt against metal for a home, or compare membrane systems for a commercial roof, and choose the system that delivers the best value for your ${cityName} building over the long run.`,
  ];

  return (
    <div className="rounded-lg border-l-4 border-copper bg-copper/5 p-6 lg:p-8">
      <h2 id="materials-heading" className="font-heading text-2xl font-bold text-forest sm:text-3xl">
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
