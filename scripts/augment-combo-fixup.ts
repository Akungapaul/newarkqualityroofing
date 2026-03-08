/**
 * Fixup script for combo files that the main augmentation missed.
 * Handles files where metaDescription is on the last line before `};`
 * Run with: npx tsx scripts/augment-combo-fixup.ts
 */

import * as fs from 'fs';
import * as path from 'path';

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
  'residential-roof-installation': { range: '$8,500–$25,000', note: 'complete residential installation' },
  'solar-shingle-installation': { range: '$25,000–$50,000', note: 'integrated solar shingle system' },
  'storm-damage-roof-replacement': { range: '$9,000–$28,000', note: 'often insurance-covered' },
  'slate-roof-replacement': { range: '$20,000–$45,000', note: 'slate roof replacement or restoration' },
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

const COMBO_DIR = path.resolve(__dirname, '../src/data/combo-content');
const cityDirs = fs.readdirSync(COMBO_DIR).filter((f) => {
  const stat = fs.statSync(path.join(COMBO_DIR, f));
  return stat.isDirectory();
});

let fixed = 0;

for (const cityDir of cityDirs) {
  const cityPath = path.join(COMBO_DIR, cityDir);
  const files = fs.readdirSync(cityPath).filter((f) => f.endsWith('.ts') && f !== 'index.ts');

  for (const file of files) {
    const filePath = path.join(cityPath, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Only process files that DON'T already have pricing
    if (content.includes('pricing:')) continue;

    const serviceIdMatch = content.match(/serviceId:\s*'([^']+)'/);
    const cityIdMatch = content.match(/cityId:\s*'([^']+)'/);
    if (!serviceIdMatch || !cityIdMatch) continue;

    const serviceId = serviceIdMatch[1];
    const cityId = cityIdMatch[1];
    const cityName = CITY_NAMES[cityId] || cityId;
    const serviceName = serviceIdToName(serviceId);
    const pricing = PRICING[serviceId];

    if (!pricing) {
      console.error(`  No pricing for: ${serviceId}`);
      continue;
    }

    // Strategy: find `};` at the end and insert before it
    const closingIdx = content.lastIndexOf('};');
    if (closingIdx === -1) continue;

    const newFields = `  pricing: {\n    range: '${pricing.range}',\n    note: '${pricing.note}',\n  },\n  whyChooseUs: [\n    'NJ licensed, GAF Certified — 15+ years protecting Essex County homes and businesses.',\n    'Transparent pricing with free written estimates — no hidden fees, no surprises.',\n    'Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties.',\n    'Local team that knows ${cityName} — same-day estimates and 24/7 emergency response.',\n  ],\n  conversionHooks: {\n    midPageCta: 'Get your free ${serviceName.toLowerCase()} estimate in ${cityName} — call now or fill out our form.',\n    urgencyNote: "Don't wait for minor damage to become a major expense. Early action saves thousands.",\n  },\n`;

    content = content.slice(0, closingIdx) + newFields + content.slice(closingIdx);

    // Also add pricing FAQ
    const faqCount = (content.match(/\{\s*question:/g) || []).length;
    if (faqCount < 6) {
      // Find last FAQ closing before the faqs array close
      const faqsClosePattern = /(\s*\},?\s*\n)(\s*\],\s*\n\s*metaDescription)/;
      if (faqsClosePattern.test(content)) {
        const pricingFaq = `    {\n      question: 'How much does ${serviceName.toLowerCase()} cost in ${cityName}, NJ?',\n      answer: 'Most ${serviceName.toLowerCase()} projects in ${cityName} range from ${pricing.range}. Your exact cost depends on roof size, materials, and project complexity. We provide free, detailed written estimates with no obligation — call us today to schedule yours.',\n    },`;
        content = content.replace(faqsClosePattern, `$1${pricingFaq}\n$2`);
      }
    }

    // Prepend conversion opener to overview[0]
    const overviewPattern = /overview:\s*\[\s*\n\s*('|")/;
    const overviewMatch = content.match(overviewPattern);
    if (overviewMatch) {
      const quoteChar = overviewMatch[1];
      const overviewStartIdx = content.indexOf('overview:');
      const firstStringStart = content.indexOf(quoteChar, overviewStartIdx + 'overview:'.length + 1);
      if (firstStringStart > -1) {
        const opener = `Newark Quality Roofing delivers expert ${serviceName.toLowerCase()} in ${cityName} — with prices starting from ${pricing.range} and free estimates available today. `;
        content = content.slice(0, firstStringStart + 1) + opener + content.slice(firstStringStart + 1);
      }
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    fixed++;
    console.log(`  Fixed: ${filePath}`);
  }
}

console.log(`\nFixup complete: ${fixed} files fixed`);
