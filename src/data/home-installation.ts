// ─── Homepage "Roof Installation in Newark" content ──────────────────────────
//
// Installation-depth block folded into the homepage hub (augment approach).
// Copy carried from the client Surfer/installation brief with the standing
// factual fixes applied: "licensed"/"contractor license" → "registered";
// competitor names removed; every dollar figure framed as a TYPICAL NEWARK
// MARKET RANGE (not an NQR quote). Confirmed-true claims kept: 25+ years,
// 25-point inspection, GAF-certified installers, 1–4 hr emergency response,
// financing. Rendered by HomeInstallation.tsx (all question-form H2/H3).

export interface InstallStep {
  title: string;
  description: string;
}

export interface InstallMaterial {
  name: string;
  range: string; // typical Newark installed market range
  note: string;
}

export interface InstallPersona {
  name: string;
  description: string;
}

export const homeInstallation = {
  h2: 'How We Install New Roofs in Newark, NJ',
  intro: [
    '**Newark Quality Roofing installs new residential and commercial roofs across Newark, New Jersey** — with full permit coordination through Newark’s Office of Uniform Construction Code, transparent pricing with no surprise fees, and materials selected for Newark’s humid continental climate.',
    'Getting a new roof in Newark shouldn’t mean weeks of delays, unexpected charges after tear-off, or a contractor who doesn’t understand the building you own. We deliver professional {{roof installation}} across Newark’s diverse neighborhoods — from Victorian slate restorations in Forest Hill to commercial flat-roof replacement on Ironbound warehouses — with transparent pricing and full permit coordination. No surprise fees, no guesswork, no {{contractors}} disappearing mid-project.',
  ],
  different: {
    h3: 'Roof Installation in Newark, NJ: What Makes It Different',
    body: [
      '**Newark’s urban environment creates roofing challenges you won’t find in suburban New Jersey.** Tall buildings downtown and in the Ironbound create wind tunnels that accelerate uplift forces on {{shingles}} and membranes. Row houses share party walls that complicate flashing details. Historic homes in Forest Hill require materials and techniques most {{contractors}} have never worked with. And every winter, nor’easters and freeze-thaw cycles punish roofs that weren’t installed with Newark’s humid continental climate in mind.',
      'We engineer solutions for these conditions: ice-and-water-shield underlayment to prevent winter ice dams where meltwater refreezes near the eaves, wind-rated materials for urban corridors, and {{flat-roof}} drainage systems that eliminate standing water. Over 25 years serving Newark homes and commercial properties, we’ve installed every architectural style — from historic slate and copper-flashing restoration to modern TPO and EPDM membrane systems on retail and multi-family buildings.',
    ],
  },
  process: {
    h3: 'The Steps in Our Roof Installation Process',
    steps: [
      {
        title: 'Free 25-Point Newark Property Inspection',
        description:
          'Every installation starts with a free, comprehensive 25-point assessment designed for Newark’s challenges. We evaluate structural {{rafters}} and sheathing, check for rot and moisture damage, assess attic ventilation, examine existing flashing around penetrations and chimneys, and inspect flat-roof drainage. We also identify neighborhood-specific issues — wind-exposure patterns, historic-preservation requirements, and load-bearing capacity for heavier materials like slate. The no-obligation assessment takes 60–90 minutes with a preliminary estimate on-site.',
      },
      {
        title: 'Custom Installation Plan and Material Selection',
        description:
          'Based on your inspection results, property type, and budget, we build a tailored {{roofing}}-system recommendation with a detailed timeline, permit coordination through Newark’s Building Division, and complete insurance documentation if you’re filing a claim. We also offer flexible financing to help manage {{roof-replacement}} cost without compromising on quality materials.',
      },
      {
        title: 'Professional Installation with Layered Warranty',
        description:
          'As GAF-certified installers, our crews handle everything from tear-off and deck inspection to final membrane or {{shingle}} installation, with daily cleanup and landscaping protection. Every component carries manufacturer warranty protection — asphalt architectural systems up to 50 years, metal and premium membranes 20–30 years — and we add our own workmanship warranty on top. A final inspection confirms code compliance, proper flashing, ventilation, and manufacturer-spec adherence.',
      },
    ] as InstallStep[],
  },
  materials: {
    h3: 'Roofing Materials We Install for the Newark, NJ Climate',
    intro:
      'We select every component for Newark’s wind, snow, moisture, and thermal-cycling conditions. The figures below are **typical Newark-area market ranges** — your exact price comes from a free on-site estimate.',
    items: [
      {
        name: 'Architectural asphalt shingles',
        range: '$5.50–$9.50 / sq ft installed',
        note: 'The most popular choice — affordable and durable, with 25–30 year lifespans.',
      },
      {
        name: 'Standing-seam metal',
        range: '$9–$15.50+ / sq ft',
        note: '40–70 year lifespans with excellent performance in snow and wind.',
      },
      {
        name: 'TPO & EPDM membranes',
        range: '$5–$12 / sq ft (commercial flat)',
        note: 'Ideal for flat commercial roofs; TPO is highly UV-reflective for energy efficiency.',
      },
      {
        name: 'Natural slate',
        range: '$12–$24 / sq ft',
        note: 'Extraordinary 75–200 year lifespans for historic restoration projects.',
      },
      {
        name: 'Modified bitumen',
        range: '$7–$12 / sq ft',
        note: 'Excellent for commercial buildings with rooftop equipment and foot traffic.',
      },
    ] as InstallMaterial[],
    projectNote:
      'At the project level, a typical Newark residential asphalt-shingle replacement runs about $12,000–$18,000, metal roofs $18,000–$40,000, and full slate restorations $30,000–$70,000+ depending on scope and material sourcing.',
  },
  personas: {
    h3: 'Who We Install Roofs For in Newark, NJ',
    items: [
      {
        name: 'Homeowners with aging roofs',
        description:
          'Missing shingles, loose flashing, or leaks after heavy rain — a complete replacement that protects your home and adds value.',
      },
      {
        name: 'Property managers with multi-family buildings',
        description:
          'Row houses and multi-unit properties needing reliable solutions that minimize tenant disruption with proper warranty coverage.',
      },
      {
        name: 'Commercial building owners',
        description:
          'Warehouses, retail, and office buildings seeking energy-efficient flat-roof systems in TPO, EPDM, or modified bitumen.',
      },
      {
        name: 'Historic property owners',
        description:
          'Homes in Forest Hill, Fairmount, and other preservation districts needing slate repair, copper detailing, and architecturally appropriate restoration.',
      },
      {
        name: 'Emergency storm situations',
        description:
          'When a storm hits, we deploy emergency tarping within hours and coordinate your full replacement and insurance documentation.',
      },
    ] as InstallPersona[],
  },
};
