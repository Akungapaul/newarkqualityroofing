/**
 * Combo Content Augmentation Script (v2 — fixed $ escaping)
 * Adds pricing, whyChooseUs, conversionHooks to existing combo content files.
 * Run with: npx tsx scripts/augment-combo-content.ts
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
  'design-consultation': { range: '$200–$500', note: 'applied toward project cost' },
};

const CITY_NAMES: Record<string, string> = {
  newark: 'Newark', belleville: 'Belleville', bloomfield: 'Bloomfield', montclair: 'Montclair',
  'east-orange': 'East Orange', caldwell: 'Caldwell', millburn: 'Millburn', irvington: 'Irvington',
  'west-orange': 'West Orange', orange: 'Orange', nutley: 'Nutley', 'south-orange': 'South Orange',
  maplewood: 'Maplewood', livingston: 'Livingston', 'glen-ridge': 'Glen Ridge', verona: 'Verona',
  'cedar-grove': 'Cedar Grove', 'north-caldwell': 'North Caldwell', 'essex-fells': 'Essex Fells',
  fairfield: 'Fairfield', roseland: 'Roseland',
};

function serviceIdToName(id: string): string {
  return id.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    .replace(/Epdm/g, 'EPDM').replace(/Tpo/g, 'TPO').replace(/Pvc/g, 'PVC');
}

// ─── Safe string insertion (avoids regex $-backreference issues) ─────────

function insertAt(str: string, idx: number, insertion: string): string {
  return str.slice(0, idx) + insertion + str.slice(idx);
}

function findClosingBracket(str: string, openIdx: number, open = '[', close = ']'): number {
  let depth = 0;
  for (let i = openIdx; i < str.length; i++) {
    if (str[i] === open) depth++;
    if (str[i] === close) { depth--; if (depth === 0) return i; }
  }
  return -1;
}

// ─── Main ────────────────────────────────────────────────────────────────────

const COMBO_DIR = path.resolve(__dirname, '../src/data/combo-content');
const cityDirs = fs.readdirSync(COMBO_DIR).filter((f) => {
  const stat = fs.statSync(path.join(COMBO_DIR, f));
  return stat.isDirectory();
});

let augmented = 0;
let skipped = 0;
let errors = 0;

for (const cityDir of cityDirs) {
  const cityPath = path.join(COMBO_DIR, cityDir);
  const files = fs.readdirSync(cityPath).filter((f) => f.endsWith('.ts') && f !== 'index.ts');

  for (const file of files) {
    const filePath = path.join(cityPath, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Skip already augmented
    if (content.includes('pricing:') && content.includes('whyChooseUs:')) {
      skipped++;
      continue;
    }

    const serviceIdMatch = content.match(/serviceId:\s*'([^']+)'/);
    const cityIdMatch = content.match(/cityId:\s*'([^']+)'/);
    if (!serviceIdMatch || !cityIdMatch) {
      console.error(`  SKIP: No IDs in ${filePath}`);
      errors++;
      continue;
    }

    const serviceId = serviceIdMatch[1];
    const cityId = cityIdMatch[1];
    const cityName = CITY_NAMES[cityId] || cityId;
    const serviceName = serviceIdToName(serviceId);
    const pricing = PRICING[serviceId];

    if (!pricing) {
      console.error(`  SKIP: No pricing for "${serviceId}" in ${file}`);
      errors++;
      continue;
    }

    // 1. Find the closing `};` and insert new fields before it
    const closingIdx = content.lastIndexOf('};');
    if (closingIdx === -1) {
      console.error(`  SKIP: No closing }; in ${filePath}`);
      errors++;
      continue;
    }

    const esc = (s: string) => s.replace(/'/g, "\\'");
    const newFields = [
      `  pricing: {`,
      `    range: '${esc(pricing.range)}',`,
      `    note: '${esc(pricing.note)}',`,
      `  },`,
      `  whyChooseUs: [`,
      `    'NJ licensed, GAF Certified — 15+ years protecting Essex County homes and businesses.',`,
      `    'Transparent pricing with free written estimates — no hidden fees, no surprises.',`,
      `    'Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties.',`,
      `    'Local team that knows ${esc(cityName)} — same-day estimates and 24/7 emergency response.',`,
      `  ],`,
      `  conversionHooks: {`,
      `    midPageCta: 'Get your free ${esc(serviceName.toLowerCase())} estimate in ${esc(cityName)} — call now or fill out our form.',`,
      `    urgencyNote: 'Don\\'t wait for minor damage to become a major expense. Early action saves thousands.',`,
      `  },`,
    ].join('\n') + '\n';

    content = insertAt(content, closingIdx, newFields);

    // 2. Add pricing FAQ
    const faqCount = (content.match(/\{\s*question:/g) || []).length;
    if (faqCount < 6) {
      const faqsIdx = content.indexOf('faqs:');
      if (faqsIdx > -1) {
        const faqsOpenIdx = content.indexOf('[', faqsIdx);
        if (faqsOpenIdx > -1) {
          const faqsCloseIdx = findClosingBracket(content, faqsOpenIdx);
          if (faqsCloseIdx > -1) {
            const pricingFaq = [
              `    {`,
              `      question: 'How much does ${esc(serviceName.toLowerCase())} cost in ${esc(cityName)}, NJ?',`,
              `      answer: 'Most ${esc(serviceName.toLowerCase())} projects in ${esc(cityName)} range from ${esc(pricing.range)}. Your exact cost depends on roof size, materials, and project complexity. We provide free, detailed written estimates with no obligation — call us today to schedule yours.',`,
              `    },`,
            ].join('\n') + '\n  ';

            content = insertAt(content, faqsCloseIdx, '\n' + pricingFaq);
          }
        }
      }
    }

    // 3. Prepend conversion opener to overview[0]
    const overviewIdx = content.indexOf('overview:');
    if (overviewIdx > -1) {
      const overviewOpenIdx = content.indexOf('[', overviewIdx);
      if (overviewOpenIdx > -1) {
        // Find the first quote after the opening bracket
        let firstQuoteIdx = -1;
        for (let i = overviewOpenIdx + 1; i < content.length; i++) {
          if (content[i] === "'" || content[i] === '"') {
            firstQuoteIdx = i;
            break;
          }
        }
        if (firstQuoteIdx > -1) {
          const opener = `Newark Quality Roofing delivers expert ${serviceName.toLowerCase()} in ${cityName} — with prices starting from ${pricing.range} and free estimates available today. `;
          content = insertAt(content, firstQuoteIdx + 1, opener);
        }
      }
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    augmented++;
  }
}

console.log(`\nCombo content augmentation complete:`);
console.log(`  Augmented: ${augmented}`);
console.log(`  Skipped (already done): ${skipped}`);
console.log(`  Errors: ${errors}`);
