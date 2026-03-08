/**
 * Fix missing commas between FAQ entries in augmented combo files.
 * The issue: last original FAQ often ends with `}` (no comma) before the new pricing FAQ.
 * Run with: npx tsx scripts/fix-missing-commas.ts
 */

import * as fs from 'fs';
import * as path from 'path';

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

    // Fix pattern: `}\n  \n    {` (missing comma between FAQ objects)
    // This happens when the last original FAQ had no trailing comma
    const before = content;

    // Pattern: closing brace of FAQ object, then whitespace/newline, then opening of new FAQ
    // Multiple variations:
    // `    }\n  \n    {`  or `    }\n    {`
    content = content.replace(
      /(\s*answer:\s*(?:'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"))\s*\n(\s*\})\s*\n(\s*\{)\s*\n(\s*question:)/g,
      (match, answer, closeBrace, openBrace, question) => {
        return `${answer}\n${closeBrace},\n${openBrace}\n${question}`;
      }
    );

    // Also fix: `}\n\n    {` pattern (extra blank line)
    content = content.replace(
      /(\}\s*)\n\s*\n(\s*\{\s*\n\s*question:)/g,
      (match, close, open) => {
        // Ensure the closing has a comma
        if (!close.trimEnd().endsWith(',')) {
          return close.trimEnd() + ',\n' + open;
        }
        return match;
      }
    );

    if (content !== before) {
      fs.writeFileSync(filePath, content, 'utf-8');
      fixed++;
    }
  }
}

console.log(`Fixed missing commas in ${fixed} files`);
