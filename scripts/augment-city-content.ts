/**
 * City Content Augmentation Script
 * Adds pricing, credentialsHighlight to existing city content files.
 * Also adds pricing FAQ.
 * Run with: npx tsx scripts/augment-city-content.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// ─── City display names ──────────────────────────────────────────────────────

const CITY_NAMES: Record<string, string> = {
  newark: 'Newark',
  belleville: 'Belleville',
  bloomfield: 'Bloomfield',
  montclair: 'Montclair',
  'east-orange': 'East Orange',
  caldwell: 'Caldwell',
  millburn: 'Millburn',
  irvington: 'Irvington',
  'west-orange': 'West Orange',
  orange: 'Orange',
  nutley: 'Nutley',
  'south-orange': 'South Orange',
  maplewood: 'Maplewood',
  livingston: 'Livingston',
  'glen-ridge': 'Glen Ridge',
  verona: 'Verona',
  'cedar-grove': 'Cedar Grove',
  'north-caldwell': 'North Caldwell',
  'essex-fells': 'Essex Fells',
  fairfield: 'Fairfield',
  roseland: 'Roseland',
};

// ─── Process city content files ──────────────────────────────────────────────

const CITY_DIR = path.resolve(__dirname, '../src/data/city-content');
const cityFiles = fs.readdirSync(CITY_DIR).filter(
  (f) => f.endsWith('.ts') && f !== 'index.ts'
);

let totalAugmented = 0;
let totalSkipped = 0;
let totalErrors = 0;

for (const file of cityFiles) {
  const filePath = path.join(CITY_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Skip if already augmented
  if (content.includes('credentialsHighlight:') && content.includes('pricing:')) {
    console.log(`  SKIP (already augmented): ${file}`);
    totalSkipped++;
    continue;
  }

  console.log(`  Processing: ${file}`);

  // Find all cityId entries in this file
  const cityIdRegex = /cityId:\s*'([^']+)'/g;
  let match;
  const cityIds: string[] = [];
  while ((match = cityIdRegex.exec(content)) !== null) {
    cityIds.push(match[1]);
  }

  // For each city entry, find its closing section and insert new fields
  // Work backwards to preserve string positions
  for (let i = cityIds.length - 1; i >= 0; i--) {
    const cityId = cityIds[i];
    const cityName = CITY_NAMES[cityId] || cityId;

    // Find this city's block in the file
    const idPattern = new RegExp(`cityId:\\s*'${cityId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`);
    const idMatch = idPattern.exec(content);
    if (!idMatch) continue;

    const startIdx = idMatch.index;

    // Find metaDescription for this city (marks near-end of the object)
    const cityBlock = content.slice(startIdx);
    const metaDescIdx = cityBlock.indexOf('metaDescription:');
    if (metaDescIdx === -1) {
      console.error(`    No metaDescription found for: ${cityId}`);
      totalErrors++;
      continue;
    }

    // Find the end of metaDescription string
    const metaDescStart = startIdx + metaDescIdx;
    const afterMetaDesc = content.slice(metaDescStart);
    const metaDescEndMatch = afterMetaDesc.match(/metaDescription:\s*(?:'[^']*'|"[^"]*"|`[^`]*`),?\s*\n/);
    if (!metaDescEndMatch) {
      console.error(`    Could not parse metaDescription for: ${cityId}`);
      totalErrors++;
      continue;
    }

    const insertIdx = metaDescStart + (metaDescEndMatch.index ?? 0) + metaDescEndMatch[0].length;

    // Build the new fields block
    const newFields = `    pricing: {
      averageRepair: '$350–$1,500',
      averageReplacement: '$8,500–$25,000',
      note: 'Prices vary based on roof size, material, and project complexity. Call for your free personalized estimate in ${cityName}.',
    },
    credentialsHighlight: [
      'NJ HIC Licensed',
      'GAF Certified Contractor',
      'Fully Insured & Bonded',
      '15+ Years Serving ${cityName}',
      'Family-Owned & Local',
    ],
`;

    // Insert before the closing of the object (which follows metaDescription)
    content = content.slice(0, insertIdx) + newFields + content.slice(insertIdx);

    // Add pricing FAQ to the faqs array
    // Re-find the block (positions shifted)
    const idMatch2 = idPattern.exec(content);
    if (idMatch2) {
      const block2 = content.slice(idMatch2.index);
      const faqsIdx = block2.indexOf('faqs:');
      if (faqsIdx > -1) {
        // Count existing FAQs
        const nextCityOrEnd = cityIds[i + 1]
          ? block2.indexOf(`cityId: '${cityIds[i + 1]}'`)
          : block2.length;
        const faqSection = block2.slice(faqsIdx, nextCityOrEnd > 0 ? nextCityOrEnd : undefined);
        const faqCount = (faqSection.match(/\{\s*question:/g) || []).length;

        if (faqCount < 8) {
          // Find the closing ] of the faqs array
          const faqsStart = block2.indexOf('[', faqsIdx);
          let depth = 0;
          let closeIdx = -1;
          for (let k = faqsStart; k < block2.length && k < (nextCityOrEnd > 0 ? nextCityOrEnd + faqsIdx : block2.length); k++) {
            if (block2[k] === '[') depth++;
            if (block2[k] === ']') {
              depth--;
              if (depth === 0) {
                closeIdx = k;
                break;
              }
            }
          }

          if (closeIdx > -1) {
            const absCloseIdx = idMatch2.index + closeIdx;
            const pricingFaq = `      {
        question: 'How much does roofing cost in ${cityName}, NJ?',
        answer: 'Most roof repairs in ${cityName} range from $350 to $1,500, while full replacements typically cost $8,500 to $25,000 depending on roof size, material chosen, and project complexity. Newark Quality Roofing provides free, detailed written estimates with no obligation. Call us today or fill out our online form to get your personalized quote. We also offer 0% financing on qualifying projects.',
      },`;
            content = content.slice(0, absCloseIdx) + '\n' + pricingFaq + '\n    ' + content.slice(absCloseIdx);
          }
        }
      }
    }

    totalAugmented++;
  }

  fs.writeFileSync(filePath, content, 'utf-8');
}

console.log(`\nCity content augmentation complete:`);
console.log(`  Files processed: ${cityFiles.length}`);
console.log(`  Cities augmented: ${totalAugmented}`);
console.log(`  Skipped: ${totalSkipped}`);
console.log(`  Errors: ${totalErrors}`);
