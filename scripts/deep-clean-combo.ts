/**
 * Deep clean combo files that have corrupted content from failed augmentation.
 * Strategy: Remove all augmentation artifacts and reconstruct cleanly.
 * Run with: npx tsx scripts/deep-clean-combo.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const COMBO_DIR = path.resolve(__dirname, '../src/data/combo-content');
const cityDirs = fs.readdirSync(COMBO_DIR).filter((f) => {
  const stat = fs.statSync(path.join(COMBO_DIR, f));
  return stat.isDirectory();
});

let cleaned = 0;

for (const cityDir of cityDirs) {
  const cityPath = path.join(COMBO_DIR, cityDir);
  const files = fs.readdirSync(cityPath).filter((f) => f.endsWith('.ts') && f !== 'index.ts');

  for (const file of files) {
    const filePath = path.join(cityPath, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Only process files that have issues (duplicate FAQ patterns, broken strings)
    // Check for duplicate "How much does" FAQ pattern (sign of double-augmentation)
    const howMuchCount = (content.match(/How much does .+ cost in .+, NJ\?/g) || []).length;
    if (howMuchCount <= 1 && !content.includes('\n},\n8,') && !content.includes("range from $")) {
      // This file looks clean
      continue;
    }

    // Strategy: find all the clean original content and rebuild
    // 1. Remove the conversion opener from overview
    content = content.replace(
      /Newark Quality Roofing delivers expert [^'"]+? — with prices starting from [^'"]+? and free estimates available today\. /g,
      ''
    );

    // 2. Remove ALL pricing FAQ entries (the "How much does X cost" ones)
    // They may be corrupted or duplicated
    // Pattern: FAQ object with "How much does" question
    content = content.replace(
      /,?\s*\{\s*\n\s*question:\s*'How much does [^']+cost in [^']+, NJ\?',\s*\n\s*answer:\s*'[^']*(?:\\'[^']*)*'\s*,?\s*\n\s*\},?/g,
      ''
    );

    // Also remove broken FAQ entries (where the string got split across lines)
    // Pattern: partial answer that starts with "Most" and has broken content
    content = content.replace(
      /,?\s*\{\s*\n\s*question:\s*'How much does [^']+',\s*\n\s*answer:\s*'Most [^}]*\},?/g,
      ''
    );

    // 3. Remove pricing, whyChooseUs, conversionHooks blocks (we'll re-add them)
    content = content.replace(
      /\s*pricing:\s*\{[^}]*\},?/g,
      ''
    );
    content = content.replace(
      /\s*whyChooseUs:\s*\[[^\]]*\],?/g,
      ''
    );
    content = content.replace(
      /\s*conversionHooks:\s*\{[^}]*\},?/g,
      ''
    );

    // 4. Clean up any double blank lines or trailing whitespace issues
    content = content.replace(/\n{3,}/g, '\n\n');
    content = content.replace(/,\s*\n\s*\]/g, ',\n  ]');
    content = content.replace(/\}\s*\n\s*\n\s*\]/g, '},\n  ]');

    // Make sure file ends with };\n
    content = content.replace(/\s*\};\s*$/, '\n};\n');

    fs.writeFileSync(filePath, content, 'utf-8');
    cleaned++;
  }
}

console.log(`Deep cleaned ${cleaned} files`);
