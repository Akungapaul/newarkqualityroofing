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
    `The best roofing material for a ${cityName} property depends on the roof's pitch and the building's use: architectural asphalt shingles suit most pitched homes, while single-ply membranes protect the flat and low-slope roofs on commercial buildings.`,
    `Architectural asphalt shingles cover the majority of pitched residential roofs in ${cityName}. They balance cost, durability, and curb appeal, and they carry manufacturer warranties of 30 years or more when installed with proper underlayment, an ice-and-water barrier along the eaves, and balanced attic ventilation. Standing-seam and metal panel systems shed snow readily, resist wind uplift, and last 50 years or longer, which fits the steeper roofs and exposed elevations found across ${cityName}.`,
    `Commercial and multi-family buildings in ${cityName} carry flat or low-slope roofs, which single-ply membranes protect best. TPO and PVC membranes reflect heat and tolerate ponding water, while EPDM rubber remains a dependable, cost-effective choice for low-traffic roofs. On roofs that take foot traffic or host rooftop equipment, modified bitumen and built-up systems add puncture resistance and redundancy.`,
    `Essex County's climate shapes the material choice. The Newark Liberty station averages about 31.5 inches of snowfall a year under the NOAA 1991–2020 U.S. Climate Normals, and northern New Jersey roofs are designed to the wind and snow-load provisions of ASCE 7-16 as adopted in the New Jersey Uniform Construction Code. Newark Quality Roofing starts every recommendation with a free inspection of the structure, slope, and exposure, then lays out the material options side by side with honest cost ranges and expected lifespans.`,
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
