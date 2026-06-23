// R6 modality fixes for the commercial-roof-types gate (substring swaps, definitive present tense).
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const HERE = dirname(fileURLToPath(import.meta.url));
const F = join(HERE, '_authored.json');
const data = JSON.parse(readFileSync(F, 'utf8'));
const byId = new Map(data.articles.map((a) => [a.articleId, a]));

const R = [
  ['tpo-roofing-installation-cost-guide', 1, 0, 'a low-slope roof needs to drain', 'a low-slope roof needs for drainage'],
  ['epdm-commercial-roofing-cost-guide', 1, 2, 'a flat roof needs to drain', 'a flat roof needs for drainage'],
  ['modified-bitumen-roofing-cost-guide', 1, 2, 'a low-slope roof needs to drain', 'a low-slope roof needs for drainage'],
  ['pvc-roofing-signs', 0, 2, 'where it should hold for decades', 'rather than holding for decades'],
  ['green-roof-installation-decision', 1, 0, 'a structural assessment must confirm', 'a structural assessment confirms'],
];

let ok = 0, bad = 0;
for (const [id, si, bi, oldSub, newSub] of R) {
  const a = byId.get(id);
  const cur = a.sections[si].body[bi];
  if (!cur.includes(oldSub)) { console.error(`MISS ${id} s${si}b${bi}: "${oldSub}"`); bad++; continue; }
  a.sections[si].body[bi] = cur.replace(oldSub, newSub);
  ok++;
}
console.log(`R6 applied ${ok}, missed ${bad} of ${R.length}`);
if (bad) process.exit(1);
writeFileSync(F, JSON.stringify(data, null, 2));
console.log('wrote _authored.json');
