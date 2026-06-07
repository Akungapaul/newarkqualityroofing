import { HEADING_CONFIG } from '@/data/heading-config';
import { ProseLead, SectionHeading } from './ProseLead';

interface CityMaterialsProps {
  cityName: string;
}

const MATERIALS_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
    <path d="m3 17 9 5 9-5" />
  </svg>
);

/**
 * Shared §4.3 "What Roofing Materials Work Best for [City] Properties?" section
 * (D-11). Single localized copy block with the city name interpolated — no new
 * schema field, no 21 hand-authored variants. The H2 is sourced verbatim from
 * HEADING_CONFIG.city.materialsH2 so the page and the audit can never drift.
 */
export function CityMaterials({ cityName }: CityMaterialsProps) {
  const heading = HEADING_CONFIG.city.materialsH2(cityName);

  const content: string[] = [
    `The best roofing material for a ${cityName} property depends on pitch, use, and climate: **architectural asphalt shingles** suit most pitched homes, **single-ply membranes** protect flat and low-slope commercial roofs, and the **local climate** sets the wind and snow loads each roof meets.`,
    `**Architectural asphalt shingles** cover the majority of pitched residential roofs in ${cityName}. They balance cost, durability, and curb appeal, and they carry manufacturer warranties of 30 years or more when installed with proper underlayment, an ice-and-water barrier along the eaves, and balanced attic ventilation. Standing-seam and metal panel systems shed snow readily, resist wind uplift, and last 50 years or longer, which fits the steeper roofs and exposed elevations found across ${cityName}.`,
    `**Single-ply membranes** protect the flat and low-slope roofs on commercial and multi-family buildings in ${cityName}. TPO and PVC membranes reflect heat and tolerate ponding water, while EPDM rubber remains a dependable, cost-effective choice for low-traffic roofs. On roofs that take foot traffic or host rooftop equipment, modified bitumen and built-up systems add puncture resistance and redundancy.`,
    `The **local climate** shapes the material choice in ${cityName}. The Newark Liberty station averages about 31.5 inches of snowfall a year under the NOAA 1991–2020 U.S. Climate Normals, and northern New Jersey roofs are designed to the wind and snow-load provisions of ASCE 7-16 as adopted in the New Jersey Uniform Construction Code. Newark Quality Roofing starts every recommendation with a free inspection of the structure, slope, and exposure, then lays out the material options side by side with honest cost ranges and expected lifespans.`,
  ];

  return (
    <div className="rounded-lg border-l-4 border-copper bg-copper/5 p-6 lg:p-8">
      <SectionHeading id="materials-heading" icon={MATERIALS_ICON}>
        {heading}
      </SectionHeading>
      <div className="mt-5">
        <ProseLead paragraphs={content} />
      </div>
    </div>
  );
}
