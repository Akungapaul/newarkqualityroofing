// ─── Content Constants ──────────────────────────────────────────────────────
// Centralized pricing, brands, credentials, CTAs, and weather data
// for conversion-optimized content across all page types.

// ─── Pricing Ranges by Service Category ────────────────────────────────────

export const PRICING = {
  // Repair & Maintenance
  'roof-repair': { range: '$350–$1,500', note: 'depending on scope and materials' },
  'roof-replacement': { range: '$8,500–$25,000+', note: 'based on roof size and material choice' },
  'roof-leak-repair': { range: '$300–$1,200', note: 'for most residential leak repairs' },
  'emergency-roof-repair': { range: '$500–$2,500', note: 'including after-hours and storm response' },
  'roof-inspection': { range: '$150–$400', note: 'comprehensive inspection with written report' },
  'roof-maintenance-programs': { range: '$250–$600/year', note: 'annual maintenance plan pricing' },
  'storm-damage-roof-repair': { range: '$500–$3,000', note: 'varies by extent of storm damage' },
  'wind-damage-roof-repair': { range: '$400–$2,000', note: 'for wind-lifted or missing shingle repairs' },
  'hail-damage-roof-repair': { range: '$500–$2,500', note: 'often covered by homeowner insurance' },
  'roof-cleaning-moss-removal': { range: '$300–$800', note: 'based on roof size and growth severity' },

  // Residential Roof Types
  'asphalt-shingle-roofing': { range: '$8,500–$18,000', note: 'full installation with tear-off' },
  'metal-roof-installation-repair': { range: '$15,000–$35,000', note: 'premium standing seam or panel systems' },
  'slate-roof-installation-repair': { range: '$20,000–$45,000', note: 'natural slate installation or restoration' },
  'tile-roof-installation-repair': { range: '$18,000–$40,000', note: 'clay or concrete tile systems' },
  'flat-roof-installation-repair': { range: '$6,000–$18,000', note: 'EPDM, TPO, or modified bitumen' },
  'wood-shake-roofing': { range: '$14,000–$30,000', note: 'cedar shake or wood shingle installation' },
  'cedar-shake-roofing': { range: '$15,000–$32,000', note: 'premium cedar shake with preservative treatment' },
  'rubber-roofing-epdm': { range: '$6,000–$16,000', note: 'EPDM rubber membrane system' },

  // Commercial
  'commercial-roof-installation': { range: '$8–$14/sq ft', note: 'varies by system and building size' },
  'commercial-roof-repair': { range: '$500–$5,000', note: 'for most commercial repair projects' },
  'commercial-roof-replacement': { range: '$8–$16/sq ft', note: 'full tear-off and replacement' },
  'silicone-roof-coating': { range: '$3–$6/sq ft', note: 'extends roof life 10–15 years' },
  'silicone-elastomeric-roof-coating': { range: '$3–$7/sq ft', note: 'reflective coating application' },

  // Components & Specialty
  'roof-flashing-installation-repair': { range: '$300–$1,500', note: 'per area of flashing work' },
  'skylight-installation-repair': { range: '$1,500–$5,000', note: 'per skylight installed or repaired' },
  'gutter-installation-repair': { range: '$1,000–$3,500', note: 'full gutter system for typical home' },
  'gutter-guard-installation': { range: '$800–$2,500', note: 'for whole-home gutter protection' },
  'roof-vent-installation-repair': { range: '$300–$1,200', note: 'per vent unit installed' },
  'soffit-installation-repair': { range: '$1,500–$4,000', note: 'soffit replacement or repair' },
  'fascia-installation-repair': { range: '$1,200–$3,500', note: 'fascia board replacement' },
  'chimney-flashing-repair': { range: '$400–$1,500', note: 'chimney flashing and counter-flashing' },
  'roof-deck-repair-replacement': { range: '$2,000–$6,000', note: 'structural deck repair pricing' },
  'roof-waterproofing': { range: '$1,500–$5,000', note: 'waterproofing membrane application' },

  // Energy & Solar
  'solar-panel-roofing-installation': { range: '$18,000–$35,000', note: 'full solar panel roof integration' },
  'solar-shingle-installation': { range: '$25,000–$50,000', note: 'integrated solar shingle system' },
  'energy-efficient-roofing-solutions': { range: '$10,000–$28,000', note: 'cool-roof or reflective systems' },
  'roof-thermal-imaging-inspections': { range: '$300–$700', note: 'infrared thermal scan with report' },
  'infrared-roof-leak-detection': { range: '$350–$800', note: 'pinpoint leak detection service' },

  // Commercial Roof Types
  'tpo-roofing-installation': { range: '$7–$12/sq ft', note: 'TPO membrane system installed' },
  'epdm-commercial-roofing': { range: '$6–$11/sq ft', note: 'EPDM rubber membrane system' },
  'modified-bitumen-roofing': { range: '$6–$10/sq ft', note: 'modified bitumen membrane system' },
  'built-up-roofing': { range: '$5–$9/sq ft', note: 'traditional built-up roofing system' },
  'commercial-metal-roofing': { range: '$10–$18/sq ft', note: 'commercial metal panel system' },
  'pvc-roofing': { range: '$7–$13/sq ft', note: 'PVC single-ply membrane' },
  'green-roof-installation': { range: '$15–$35/sq ft', note: 'living green roof system' },
  'spray-foam-roofing': { range: '$4–$8/sq ft', note: 'spray polyurethane foam application' },

  // Design & Consultation Extras
  'custom-roof-design-consultation': { range: '$200–$500', note: 'applied toward project cost' },
  'historic-roof-restoration': { range: '$15,000–$50,000', note: 'historic material sourcing and restoration' },
  'roof-ice-dam-prevention': { range: '$800–$3,000', note: 'ice dam prevention system installation' },

  // Replacement Sub-Pages
  'residential-roof-installation': { range: '$8,500–$25,000', note: 'complete residential installation' },
  'roof-overlay-installation': { range: '$6,000–$14,000', note: 'overlay without full tear-off' },
  're-roofing': { range: '$7,500–$22,000', note: 'full re-roofing project' },
  'full-roof-tear-off': { range: '$9,000–$26,000', note: 'complete tear-off and replacement' },
  'aging-roof-replacement': { range: '$8,500–$25,000', note: 'replacing end-of-life roofing' },
  'storm-damage-roof-replacement': { range: '$9,000–$28,000', note: 'often insurance-covered' },
  'fire-damage-roof-replacement': { range: '$12,000–$35,000', note: 'including structural repair' },
  'insurance-roof-replacement': { range: '$8,500–$30,000', note: 'we handle the claims process' },
  'roof-replacement-after-leak': { range: '$8,500–$25,000', note: 'when repair is no longer viable' },
  'roof-replacement-cost': { range: '$8,500–$25,000', note: 'NJ average for Essex County homes' },
  'asphalt-shingle-roof-replacement': { range: '$8,500–$18,000', note: 'asphalt shingle tear-off and replacement' },
  'metal-roof-replacement': { range: '$15,000–$35,000', note: 'metal roof replacement installed' },
  'slate-roof-replacement': { range: '$20,000–$45,000', note: 'slate roof replacement or restoration' },
  'tile-roof-replacement': { range: '$18,000–$40,000', note: 'tile roof replacement installed' },
  'flat-roof-replacement': { range: '$6,000–$18,000', note: 'flat roof membrane replacement' },
  'cedar-shake-roof-replacement': { range: '$15,000–$32,000', note: 'cedar shake roof replacement' },

  // Design & Consultation
  'design-consultation': { range: '$200–$500', note: 'applied toward project cost' },

  // City-level averages
  '_city_repair': { range: '$350–$1,500', note: 'average roof repair in Essex County' },
  '_city_replacement': { range: '$8,500–$25,000', note: 'average full roof replacement in Essex County' },
} as const;

// ─── Brand Names ────────────────────────────────────────────────────────────

export const BRANDS = {
  shingle: ['GAF', 'CertainTeed', 'Owens Corning', 'IKO', 'Atlas'],
  membrane: ['Firestone', 'Carlisle', 'Johns Manville', 'GAF', 'Versico'],
  metal: ['Standing Seam', 'Englert', 'ATAS', 'McElroy Metal'],
  slate: ['Vermont Structural Slate', 'North Country Slate', 'Greenstone Slate'],
  gutter: ['Alcoa', 'Senox', 'Spectra Metals'],
  coating: ['GacoRoof', 'Henry', 'Tropical Roofing Products'],
} as const;

export const TOP_BRANDS = 'GAF, CertainTeed, Owens Corning, and Firestone';

// ─── Credentials ────────────────────────────────────────────────────────────

export const CREDENTIALS = {
  experience: '15+ years serving Essex County',
  license: 'NJ Home Improvement Contractor (HIC) licensed',
  certification: 'GAF Certified Contractor',
  insurance: 'Fully insured and bonded',
  ownership: 'Family-owned and locally operated',
  bbb: 'A+ rated with the Better Business Bureau',
  warranty: 'Manufacturer-backed warranty coverage',
  reviews: '5-star rated across Google and HomeAdvisor',
} as const;

export const CREDENTIALS_SHORT = [
  'NJ HIC Licensed',
  'GAF Certified',
  'Fully Insured & Bonded',
  '15+ Years in Essex County',
  'Family-Owned',
] as const;

// ─── Response Times ─────────────────────────────────────────────────────────

export const RESPONSE = {
  estimate: 'Same-day free estimates available',
  emergency: '24/7 emergency response for urgent issues',
  inspection: 'Schedule your free inspection within 24 hours',
  callback: 'We return every call within 1 hour',
} as const;

// ─── Financing ──────────────────────────────────────────────────────────────

export const FINANCING = {
  primary: '0% financing available on qualifying projects',
  secondary: 'Flexible payment plans to fit your budget',
  insurance: 'We work directly with your insurance company on claims',
} as const;

// ─── NJ Weather Data ────────────────────────────────────────────────────────

export const NJ_WEATHER = {
  annualRain: '50 inches of annual rainfall',
  annualSnow: '28 inches of average annual snowfall',
  freezeThaw: 'Freeze-thaw cycles from November through March',
  summerHeat: '90°F+ summer days with intense UV exposure',
  norEasters: "Nor'easters delivering 40–60 mph sustained winds",
  hurricaneSeason: 'Atlantic hurricane season from June through November',
  hailRisk: 'Severe thunderstorms with hail from April through September',
} as const;

// ─── CTA Phrase Library ─────────────────────────────────────────────────────

export const CTAS = {
  freeEstimate: 'Call today for your free, no-obligation estimate.',
  scheduleInspection: 'Schedule your free inspection today.',
  emergencyCall: 'Need emergency help? Call us 24/7.',
  actNow: "Don't wait for a small problem to become a costly project — call now.",
  financing: 'Ask about our 0% financing options when you call.',
  sameDay: 'Same-day estimates available — call now to get started.',
  seasonal: 'Book your project now before the busy season fills our schedule.',
  insurance: 'We handle the insurance paperwork — you get peace of mind stress-free.',
} as const;

// ─── Urgency Notes ──────────────────────────────────────────────────────────

export const URGENCY = {
  leakDamage: 'Every day a leak goes unaddressed, water damage spreads to insulation, framing, and drywall — multiplying your costs.',
  stormSeason: "With storm season approaching, now is the time to address vulnerable areas before the next nor'easter hits Essex County.",
  winterPrep: "Don't let winter catch you off guard. Schedule your inspection before freeze-thaw cycles expose hidden weaknesses.",
  insurance: 'Insurance claims have strict filing deadlines. Call us within 48 hours of storm damage for documentation and filing support.',
  aging: "If your structure is over 20 years old, it's already past its designed lifespan. A proactive replacement saves thousands versus emergency work.",
} as const;

// ─── Why Choose Us Reasons (reusable across page types) ─────────────────────

export const WHY_CHOOSE_US_REASONS = [
  {
    title: 'Licensed & Certified Professionals',
    description: 'NJ HIC licensed, GAF Certified roofing Contractor — every roofing job meets the highest industry standards and manufacturer specifications.',
  },
  {
    title: '15+ Years of Essex County Experience',
    description: "We know every neighborhood, building style, and weather pattern in Essex County. Your roofing project isn't just another job — it's local roof work we stake our reputation on.",
  },
  {
    title: 'Transparent, Honest Pricing',
    description: "Detailed written estimates before work begins. No hidden fees, no surprise charges. We explain every line item so you know exactly what you're paying for.",
  },
  {
    title: 'Premium Materials, Manufacturer Warranties',
    description: 'We install GAF, CertainTeed, Owens Corning, and Firestone products backed by manufacturer warranties up to 50 years.',
  },
  {
    title: 'Same-Day Estimates & 24/7 Emergency Response',
    description: "When your roof needs attention, waiting isn't an option. We provide same-day roofing estimates and emergency repair crews ready around the clock.",
  },
  {
    title: 'Family-Owned, Community-Committed',
    description: 'We live and work in Newark and Essex County. Our roofing reputation is everything — we treat every home and business roof like it belongs to a neighbor, because it does.',
  },
] as const;
