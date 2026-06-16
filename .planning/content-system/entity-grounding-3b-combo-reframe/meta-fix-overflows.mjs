// Fix the 5 metaDescriptions that overflow 160 after the licensed→registered swap
// (they had no "free estimate" clause to trim). Minimal, meaning-preserving trims.
import { readFileSync, writeFileSync } from 'fs';

const FIXES = [
  ['src/data/combo-content/newark/metal-roof-replacement.ts',
    'Ironbound industrial-conversion re-roofing', 'Ironbound industrial re-roofing'],
  ['src/data/combo-content/east-orange/flat-roof-installation-repair.ts',
    'apartment walk-ups and multi-family buildings', 'apartment walk-ups and multi-family homes'],
  ['src/data/combo-content/orange/commercial-roof-repair.ts',
    'tenant-occupied scheduling', 'tenant scheduling'],
  ['src/data/combo-content/orange/roof-vent-installation-repair.ts',
    'balanced soffit-and-ridge attic ventilation', 'balanced soffit-and-ridge ventilation'],
  ['src/data/combo-content/orange/slate-roof-installation-repair.ts',
    'matched slate sourcing', 'slate sourcing'],
];

let ok = 0; const errs = [];
for (const [path, from, to] of FIXES) {
  let src = readFileSync(path, 'utf8');
  if (!src.includes(from)) { errs.push(`phrase not found in ${path}: "${from}"`); continue; }
  src = src.replace(from, to);
  writeFileSync(path, src);
  ok++;
}
console.log(`overflow fixes applied: ${ok}/${FIXES.length}`);
for (const e of errs) console.error('  ERR', e);
if (errs.length) process.exit(1);
