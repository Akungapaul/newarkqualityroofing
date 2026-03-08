/**
 * Fix missing commas after `]` before new fields (pricing:, etc.)
 * Run with: npx tsx scripts/fix-bracket-commas.ts
 */
import * as fs from 'fs';
import * as path from 'path';

function fixDir(dir: string, recursive: boolean): number {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let fixed = 0;
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && recursive) {
      fixed += fixDir(fullPath, true);
    } else if (entry.isFile() && entry.name.endsWith('.ts') && entry.name !== 'index.ts' && entry.name !== 'schema.ts') {
      let content = fs.readFileSync(fullPath, 'utf-8');
      const before = content;
      // Fix: `]\n  \n    pricing:` — missing comma after ]
      content = content.replace(/\]\s*\n(\s*)\n(\s*)(pricing:|whyChooseUs:|credentialsHighlight:)/g,
        '],\n$1\n$2$3');
      // Fix: `]\n    pricing:` without blank line
      content = content.replace(/\](\s*\n\s*)(pricing:|whyChooseUs:|credentialsHighlight:)/g,
        '],$1$2');
      if (content !== before) {
        fs.writeFileSync(fullPath, content, 'utf-8');
        fixed++;
      }
    }
  }
  return fixed;
}

const root = path.resolve(__dirname, '../src/data');
const s = fixDir(path.join(root, 'service-content'), false);
const c = fixDir(path.join(root, 'combo-content'), true);
console.log(`Fixed bracket commas: service=${s}, combo=${c}`);
