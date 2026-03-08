/**
 * Service Content Augmentation Script (v2 — safe string handling)
 * Adds pricing, whyChooseUs, credentialsHighlight to existing service content files.
 * Run with: npx tsx scripts/augment-service-content.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// ─── Pricing lookup ──────────────────────────────────────────────────────────

const PRICING: Record<string, { range: string; note: string }> = {
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
  'asphalt-shingle-roofing': { range: '$8,500–$18,000', note: 'full installation with tear-off' },
  'metal-roof-installation-repair': { range: '$15,000–$35,000', note: 'premium standing seam or panel systems' },
  'slate-roof-installation-repair': { range: '$20,000–$45,000', note: 'natural slate installation or restoration' },
  'tile-roof-installation-repair': { range: '$18,000–$40,000', note: 'clay or concrete tile systems' },
  'flat-roof-installation-repair': { range: '$6,000–$18,000', note: 'EPDM, TPO, or modified bitumen' },
  'wood-shake-roofing': { range: '$14,000–$30,000', note: 'cedar shake or wood shingle installation' },
  'cedar-shake-roofing': { range: '$15,000–$32,000', note: 'premium cedar shake with preservative treatment' },
  'rubber-roofing-epdm': { range: '$6,000–$16,000', note: 'EPDM rubber membrane system' },
  'commercial-roof-installation': { range: '$8–$14/sq ft', note: 'varies by system and building size' },
  'commercial-roof-repair': { range: '$500–$5,000', note: 'for most commercial repair projects' },
  'commercial-roof-replacement': { range: '$8–$16/sq ft', note: 'full tear-off and replacement' },
  'silicone-roof-coating': { range: '$3–$6/sq ft', note: 'extends roof life 10–15 years' },
  'silicone-elastomeric-roof-coating': { range: '$3–$7/sq ft', note: 'reflective coating application' },
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
  'solar-panel-roofing-installation': { range: '$18,000–$35,000', note: 'full solar panel roof integration' },
  'solar-shingle-installation': { range: '$25,000–$50,000', note: 'integrated solar shingle system' },
  'energy-efficient-roofing-solutions': { range: '$10,000–$28,000', note: 'cool-roof or reflective systems' },
  'roof-thermal-imaging-inspections': { range: '$300–$700', note: 'infrared thermal scan with report' },
  'infrared-roof-leak-detection': { range: '$350–$800', note: 'pinpoint leak detection service' },
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
  'tpo-roofing-installation': { range: '$7–$12/sq ft', note: 'TPO membrane system installed' },
  'epdm-commercial-roofing': { range: '$6–$11/sq ft', note: 'EPDM rubber membrane system' },
  'modified-bitumen-roofing': { range: '$6–$10/sq ft', note: 'modified bitumen membrane system' },
  'built-up-roofing': { range: '$5–$9/sq ft', note: 'traditional built-up roofing system' },
  'commercial-metal-roofing': { range: '$10–$18/sq ft', note: 'commercial metal panel system' },
  'pvc-roofing': { range: '$7–$13/sq ft', note: 'PVC single-ply membrane' },
  'green-roof-installation': { range: '$15–$35/sq ft', note: 'living green roof system' },
  'spray-foam-roofing': { range: '$4–$8/sq ft', note: 'spray polyurethane foam application' },
  'custom-roof-design-consultation': { range: '$200–$500', note: 'applied toward project cost' },
  'historic-roof-restoration': { range: '$15,000–$50,000', note: 'historic material sourcing and restoration' },
  'roof-ice-dam-prevention': { range: '$800–$3,000', note: 'ice dam prevention system installation' },
};

function getCostFactors(serviceId: string): string[] {
  if (serviceId.includes('commercial') || serviceId.includes('tpo') || serviceId.includes('epdm') ||
      serviceId.includes('modified-bitumen') || serviceId.includes('built-up') || serviceId.includes('pvc') ||
      serviceId.includes('green-roof') || serviceId.includes('spray-foam')) {
    return [
      'Building square footage and roof area',
      'Membrane system selected (TPO, EPDM, PVC, modified bitumen)',
      'Insulation requirements and R-value targets',
      'Phasing requirements to maintain business operations',
    ];
  }
  if (serviceId.includes('replacement') || serviceId.includes('installation') || serviceId.includes('re-roofing') ||
      serviceId.includes('tear-off') || serviceId.includes('overlay') || serviceId.includes('aging')) {
    return [
      'Total roof square footage',
      'Material chosen (architectural shingles, metal, slate, tile)',
      'Number of layers to tear off',
      'Structural repairs needed (decking, rafters, fascia)',
    ];
  }
  if (serviceId.includes('repair') || serviceId.includes('leak') || serviceId.includes('damage') ||
      serviceId.includes('emergency') || serviceId.includes('cleaning')) {
    return [
      'Size and location of the damaged area',
      'Roofing material type (shingle, membrane, slate, tile)',
      'Accessibility and roof pitch',
      'Whether underlying decking needs repair',
    ];
  }
  if (serviceId.includes('flashing') || serviceId.includes('gutter') || serviceId.includes('skylight') ||
      serviceId.includes('fascia') || serviceId.includes('soffit') || serviceId.includes('vent') ||
      serviceId.includes('chimney') || serviceId.includes('deck') || serviceId.includes('waterproofing')) {
    return [
      'Linear footage or unit count required',
      'Material grade and finish selected',
      'Accessibility and installation complexity',
      'Integration with existing roofing system',
    ];
  }
  return [
    'Roof size and square footage',
    'Material selection and quality grade',
    'Complexity of roof design (pitch, valleys, penetrations)',
    'Current condition and extent of existing damage',
  ];
}

function serviceIdToName(id: string): string {
  return id.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    .replace(/Epdm/g, 'EPDM').replace(/Tpo/g, 'TPO').replace(/Pvc/g, 'PVC');
}

function esc(s: string): string {
  return s.replace(/'/g, "\\'");
}

function findClosingBracket(str: string, openIdx: number, open = '[', close = ']'): number {
  let depth = 0;
  for (let i = openIdx; i < str.length; i++) {
    if (str[i] === open) depth++;
    if (str[i] === close) { depth--; if (depth === 0) return i; }
  }
  return -1;
}

function insertAt(str: string, idx: number, insertion: string): string {
  return str.slice(0, idx) + insertion + str.slice(idx);
}

// ─── Process service content files ──────────────────────────────────────────

const SERVICE_DIR = path.resolve(__dirname, '../src/data/service-content');
const serviceFiles = fs.readdirSync(SERVICE_DIR).filter(
  (f) => f.endsWith('.ts') && f !== 'index.ts'
);

let totalAugmented = 0;
let totalSkipped = 0;
let totalErrors = 0;

for (const file of serviceFiles) {
  const filePath = path.join(SERVICE_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  if (content.includes('credentialsHighlight:')) {
    console.log(`  SKIP (already augmented): ${file}`);
    totalSkipped++;
    continue;
  }

  console.log(`  Processing: ${file}`);

  // Find all serviceId entries
  const serviceIdRegex = /serviceId:\s*'([^']+)'/g;
  let match;
  const serviceEntries: { id: string; idx: number }[] = [];
  while ((match = serviceIdRegex.exec(content)) !== null) {
    serviceEntries.push({ id: match[1], idx: match.index });
  }

  // Process in REVERSE order to preserve indices
  for (let i = serviceEntries.length - 1; i >= 0; i--) {
    const { id: serviceId, idx: startIdx } = serviceEntries[i];
    const pricing = PRICING[serviceId];
    const serviceName = serviceIdToName(serviceId);

    if (!pricing) {
      console.error(`    No pricing for: ${serviceId}`);
      totalErrors++;
      continue;
    }

    // Determine the boundary of this service entry
    const nextEntryIdx = i < serviceEntries.length - 1 ? serviceEntries[i + 1].idx : content.length;
    const block = content.slice(startIdx, nextEntryIdx);

    // Find the faqs array in this block
    const faqsRelIdx = block.indexOf('faqs:');
    if (faqsRelIdx === -1) continue;

    const faqsAbsIdx = startIdx + faqsRelIdx;
    const faqsOpenIdx = content.indexOf('[', faqsAbsIdx);
    if (faqsOpenIdx === -1) continue;

    const faqsCloseIdx = findClosingBracket(content, faqsOpenIdx);
    if (faqsCloseIdx === -1) continue;

    // Find the service object closing `},` or `}` after the faqs
    // It's the `},` that closes the whole service entry in the array
    let objCloseIdx = -1;
    for (let k = faqsCloseIdx; k < nextEntryIdx && k < content.length; k++) {
      if (content[k] === '}' && (content[k + 1] === ',' || content[k + 1] === '\n' || k + 1 >= nextEntryIdx)) {
        objCloseIdx = k;
        break;
      }
    }
    if (objCloseIdx === -1) continue;

    // Build the new fields
    const factors = getCostFactors(serviceId);
    const newFields = `\n    pricing: {\n      range: '${esc(pricing.range)}',\n      factors: [\n        '${esc(factors[0])}',\n        '${esc(factors[1])}',\n        '${esc(factors[2])}',\n        '${esc(factors[3])}',\n      ],\n      financingNote: '0% financing available on qualifying projects. Ask about our flexible payment plans when you call for your free estimate.',\n    },\n    whyChooseUs: {\n      heading: 'Why Choose Newark Quality Roofing for ${esc(serviceName)}',\n      reasons: [\n        {\n          title: 'Licensed & Certified Experts',\n          description: 'NJ HIC licensed, GAF Certified Contractor with 15+ years of hands-on experience across Essex County. Every project meets the highest industry standards.',\n        },\n        {\n          title: 'Transparent, Upfront Pricing',\n          description: 'Detailed written estimates before work begins. No hidden fees, no surprise charges. You know exactly what you\\'re paying for before we touch your roof.',\n        },\n        {\n          title: 'Premium Materials & Warranties',\n          description: 'We install only top-tier products from GAF, CertainTeed, Owens Corning, and Firestone — backed by manufacturer warranties up to 50 years.',\n        },\n        {\n          title: 'Fast Response & Emergency Service',\n          description: 'Same-day estimates and 24/7 emergency crews. When your roof needs attention, we\\'re there — not next week, not tomorrow, today.',\n        },\n        {\n          title: 'Local Team, Local Reputation',\n          description: 'We live and work in Essex County. Our reputation rides on every job. We treat your property like it belongs to a neighbor — because it does.',\n        },\n      ],\n    },\n    credentialsHighlight: [\n      'NJ HIC Licensed',\n      'GAF Certified Contractor',\n      'Fully Insured & Bonded',\n      '15+ Years in Essex County',\n    ],`;

    // Insert before the closing } of the service object
    content = insertAt(content, objCloseIdx, newFields);

    // Add pricing FAQ (if less than 10)
    const faqCountInBlock = (block.match(/\{\s*question:/g) || []).length;
    if (faqCountInBlock < 10) {
      // Re-find the faqs closing bracket (indices shifted)
      const newFaqsAbsIdx = content.indexOf('faqs:', startIdx);
      if (newFaqsAbsIdx > -1) {
        const newFaqsOpenIdx = content.indexOf('[', newFaqsAbsIdx);
        if (newFaqsOpenIdx > -1) {
          const newFaqsCloseIdx = findClosingBracket(content, newFaqsOpenIdx);
          if (newFaqsCloseIdx > -1) {
            const pricingFaq = `\n      {\n        question: 'How much does ${esc(serviceName.toLowerCase())} cost in Essex County, NJ?',\n        answer: 'Most ${esc(serviceName.toLowerCase())} projects in Essex County range from ${esc(pricing.range)}, ${esc(pricing.note)}. Your exact cost depends on factors like roof size, material selection, and project complexity. We provide free, detailed written estimates with no obligation — call us today or fill out our online form to schedule yours. Ask about our 0% financing options for qualifying projects.',\n      },`;

            content = insertAt(content, newFaqsCloseIdx, pricingFaq + '\n    ');
          }
        }
      }
    }

    totalAugmented++;
  }

  fs.writeFileSync(filePath, content, 'utf-8');
}

console.log(`\nService content augmentation complete:`);
console.log(`  Files processed: ${serviceFiles.length}`);
console.log(`  Services augmented: ${totalAugmented}`);
console.log(`  Skipped: ${totalSkipped}`);
console.log(`  Errors: ${totalErrors}`);
