import { readFileSync, copyFileSync, existsSync } from 'fs';
import { transformSync } from 'esbuild';
const cities = ['belleville', 'bloomfield', 'cedar-grove', 'glen-ridge', 'irvington', 'maplewood', 'montclair', 'newark', 'nutley', 'south-orange', 'verona', 'west-orange'];
const HAAG = '.planning/content-system/combo-batch11-affluent-suburban/_haag';
let ok = 0; const errs = [];
for (const c of cities) {
  const defab = `${HAAG}/${c}.hail.defab.ts`;
  const orig = `src/data/combo-content/${c}/hail-damage-roof-repair.ts`;
  if (!existsSync(defab)) { errs.push(`${c}: .defab.ts missing`); continue; }
  const dt = readFileSync(defab, 'utf8');
  try { transformSync(dt, { loader: 'ts' }); } catch (e) { errs.push(`${c}: parse fail ${String(e.message).split('\n')[0]}`); continue; }
  if (/HAAG/i.test(dt)) { errs.push(`${c}: HAAG still present in .defab.ts`); continue; }
  const ot = readFileSync(orig, 'utf8');
  const ol = ot.split('\n'), dl = dt.split('\n');
  if (ol.length !== dl.length) { errs.push(`${c}: line count ${ol.length}→${dl.length} (structural change — INSPECT)`); continue; }
  const overEdits = [];
  for (let i = 0; i < ol.length; i++) {
    if (ol[i] !== dl[i] && !/HAAG/i.test(ol[i])) overEdits.push(i + 1);
  }
  if (overEdits.length) { errs.push(`${c}: ${overEdits.length} non-HAAG line(s) changed (lines ${overEdits.slice(0,6).join(',')}) — INSPECT`); continue; }
  const changed = ol.filter((l, i) => l !== dl[i]).length;
  copyFileSync(defab, orig);
  ok++; console.log(`✓ ${c}: ${changed} HAAG line(s) changed, 0 over-edits, spliced`);
}
if (errs.length) { console.error('\nERRORS / INSPECT:\n' + errs.join('\n')); process.exit(1); }
console.log(`\nHAAG splice: ${ok}/${cities.length} (all HAAG-only)`);
