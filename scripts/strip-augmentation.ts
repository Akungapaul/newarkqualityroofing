/**
 * Strip corrupted augmentation from untracked combo files.
 * Run with: npx tsx scripts/strip-augmentation.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const COMBO_DIR = path.resolve(__dirname, '../src/data/combo-content');
const cityDirs = fs.readdirSync(COMBO_DIR).filter((f) => {
  const stat = fs.statSync(path.join(COMBO_DIR, f));
  return stat.isDirectory();
});

let stripped = 0;

for (const cityDir of cityDirs) {
  const cityPath = path.join(COMBO_DIR, cityDir);
  const files = fs.readdirSync(cityPath).filter((f) => f.endsWith('.ts') && f !== 'index.ts');

  for (const file of files) {
    const filePath = path.join(cityPath, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Only process files that have pricing (augmented files)
    if (!content.includes('pricing:')) continue;

    // Remove the pricing, whyChooseUs, conversionHooks blocks
    // These were added after metaDescription
    const metaIdx = content.indexOf('metaDescription:');
    if (metaIdx === -1) continue;

    // Find the first pricing: after metaDescription
    const pricingIdx = content.indexOf('pricing:', metaIdx);
    if (pricingIdx === -1) continue;

    // Find the closing }; of the whole object
    const closingIdx = content.lastIndexOf('};');
    if (closingIdx === -1) continue;

    // The augmented content is between the end of metaDescription line and `};`
    // Find end of metaDescription value
    let metaEnd = metaIdx;
    // Find the quote that starts metaDescription value
    const afterMeta = content.slice(metaIdx);
    const metaValMatch = afterMeta.match(/metaDescription:\s*(?:'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")/);
    if (metaValMatch) {
      metaEnd = metaIdx + metaValMatch.index! + metaValMatch[0].length;
      // Skip comma and whitespace
      const afterVal = content.slice(metaEnd);
      const trailingMatch = afterVal.match(/^,?\s*\n/);
      if (trailingMatch) {
        metaEnd += trailingMatch[0].length;
      }
    }

    // Everything from metaEnd to the closing }; should be just the closing
    // Remove the augmented fields by replacing from metaEnd to closingIdx with just `};`
    content = content.slice(0, metaEnd) + '};\n';

    // Also fix any corrupted overview text (remove the prepended conversion opener)
    // The opener starts with "Newark Quality Roofing delivers expert"
    content = content.replace(/Newark Quality Roofing delivers expert [^'"]+ — with prices starting from \$[\d,–$+\/a-z. ]+ and free estimates available today\. /g, '');

    // Fix corrupted FAQ entries (remove the pricing FAQ that was inserted)
    // These have "How much does X cost in Y, NJ?" pattern
    content = content.replace(/\s*\{\s*\n\s*question: 'How much does [^']+cost in [^']+, NJ\?',\s*\n\s*answer: 'Most [^']+'\s*\n?\s*\},?/g, '');

    fs.writeFileSync(filePath, content, 'utf-8');
    stripped++;
  }
}

console.log(`Stripped augmentation from ${stripped} files`);
