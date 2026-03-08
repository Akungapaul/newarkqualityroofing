/**
 * Fix missing commas between FAQ entries across ALL content files.
 * Run with: npx tsx scripts/fix-all-commas.ts
 */

import * as fs from 'fs';
import * as path from 'path';

function fixCommas(dir: string, recursive: boolean) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let fixed = 0;

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && recursive) {
      fixed += fixCommas(fullPath, true);
    } else if (entry.isFile() && entry.name.endsWith('.ts') && entry.name !== 'index.ts' && entry.name !== 'schema.ts') {
      let content = fs.readFileSync(fullPath, 'utf-8');
      const before = content;

      // Fix: `}\n    \n      {` or `}\n  \n    {` — FAQ object without trailing comma before next FAQ
      // Match: closing quote of answer, newline, closing brace, newline(s), opening brace of next FAQ
      content = content.replace(
        /('|")\s*\n(\s*\})\s*\n(\s*\{)\s*\n(\s*question:)/g,
        (_, quote, close, open, q) => `${quote}\n${close},\n${open}\n${q}`
      );

      if (content !== before) {
        fs.writeFileSync(fullPath, content, 'utf-8');
        fixed++;
      }
    }
  }
  return fixed;
}

const root = path.resolve(__dirname, '../src/data');
const comboFixed = fixCommas(path.join(root, 'combo-content'), true);
const serviceFixed = fixCommas(path.join(root, 'service-content'), false);
const cityFixed = fixCommas(path.join(root, 'city-content'), false);

console.log(`Fixed commas: combo=${comboFixed}, service=${serviceFixed}, city=${cityFixed}`);
