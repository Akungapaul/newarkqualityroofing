#!/usr/bin/env node
// Assemble Combo Batch 8 (Maplewood + South Orange): copy each <city>/<service>.snippet.ts
// -> src/data/combo-content/<city>/<service>.ts. Validates all 130 snippets exist and that
// each carries the expected export name + import line before copying.
// Optional arg: a city ('maplewood' | 'south-orange') to assemble only that city.
import fs from 'node:fs';
import path from 'node:path';

const BATCH = '.planning/content-system/combo-batch11-affluent-suburban';
const onlyCity = process.argv[2]; // optional
const rows = JSON.parse(fs.readFileSync(path.join(BATCH, '_combos.json'), 'utf8'))
  .filter((r) => !onlyCity || r.c === onlyCity);

let missing = [], badExport = [], badImport = [];
for (const r of rows) {
  const snip = path.join(BATCH, r.c, `${r.s}.snippet.ts`);
  if (!fs.existsSync(snip)) { missing.push(`${r.c}/${r.s}`); continue; }
  const t = fs.readFileSync(snip, 'utf8');
  if (!t.includes(`export const ${r.e}:`)) badExport.push(`${r.c}/${r.s} (want ${r.e})`);
  if (!/^import type \{ ComboContent \} from '\.\.\/schema';/.test(t.trimStart())) badImport.push(`${r.c}/${r.s}`);
}
if (missing.length) { console.error(`MISSING ${missing.length} snippets:`, missing.join(', ')); process.exit(1); }
if (badExport.length) { console.error(`BAD export name in:`, badExport.join(' | ')); process.exit(1); }
if (badImport.length) { console.error(`BAD/MISSING import line in:`, badImport.join(', ')); process.exit(1); }

let copied = 0;
for (const r of rows) {
  fs.copyFileSync(path.join(BATCH, r.c, `${r.s}.snippet.ts`), path.join('src/data/combo-content', r.c, `${r.s}.ts`));
  copied++;
}
const byCity = rows.reduce((a, r) => ((a[r.c] = (a[r.c] || 0) + 1), a), {});
console.log(`Assembled ${copied}/${rows.length} combo files`, JSON.stringify(byCity));
