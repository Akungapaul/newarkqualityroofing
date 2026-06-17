#!/usr/bin/env node
// Assemble Combo Batch 6 (Belleville): copy each <service>.snippet.ts -> src/data/combo-content/belleville/<service>.ts
// Validates that all 65 snippets exist and that each carries the expected export name before copying.
import fs from 'node:fs';
import path from 'node:path';

const BATCH = '.planning/content-system/combo-batch6-belleville';
const DEST = 'src/data/combo-content/belleville';
const rows = JSON.parse(fs.readFileSync(path.join(BATCH, '_combos.json'), 'utf8'));

let missing = [], badExport = [], badImport = [];
for (const r of rows) {
  const snip = path.join(BATCH, `${r.s}.snippet.ts`);
  if (!fs.existsSync(snip)) { missing.push(r.s); continue; }
  const t = fs.readFileSync(snip, 'utf8');
  if (!t.includes(`export const ${r.e}:`)) badExport.push(`${r.s} (want ${r.e})`);
  if (!/^import type \{ ComboContent \} from '\.\.\/schema';/.test(t.trimStart())) badImport.push(r.s);
}
if (missing.length) { console.error(`MISSING ${missing.length} snippets:`, missing.join(', ')); process.exit(1); }
if (badExport.length) { console.error(`BAD export name in:`, badExport.join(' | ')); process.exit(1); }
if (badImport.length) { console.error(`BAD/MISSING import line in:`, badImport.join(', ')); process.exit(1); }

let copied = 0;
for (const r of rows) {
  fs.copyFileSync(path.join(BATCH, `${r.s}.snippet.ts`), path.join(DEST, `${r.s}.ts`));
  copied++;
}
console.log(`Assembled ${copied}/${rows.length} Belleville combo files -> ${DEST}`);
