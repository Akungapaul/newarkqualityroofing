// REVIEW-confirmed fixes for commercial-roof-types (2 findings, cross-checked vs gold).
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const HERE = dirname(fileURLToPath(import.meta.url));
const F = join(HERE, '_authored.json');
const data = JSON.parse(readFileSync(F, 'utf8'));
const byId = new Map(data.articles.map((a) => [a.articleId, a]));

const R = [
  // Finding 1 (low): $4 floor is spray-foam, not single-ply membrane. Gold single-ply = $6+ (PVC $6-12).
  ['commercial-metal-roofing-decision', 1, 0,
    'against membranes at $4 to $12',
    'against single-ply membranes at $6 to $12'],
  ['commercial-metal-roofing-decision', 2, 0,
    'favors a single-ply membrane at $4 to $12 per square foot, per the InterNACHI life-expectancy chart and Josten Roofing NJ.',
    'favors a single-ply membrane at $6 to $12 per square foot, per Josten Roofing NJ and commercial cost guides.'],
  // Finding 2 (med): leaked internal "; gold" citation token.
  ['green-roof-installation-cost-guide', 2, 0,
    '(NJ Uniform Construction Code; gold).',
    '(NJ Uniform Construction Code).'],
];

let ok = 0, bad = 0;
for (const [id, si, bi, oldSub, newSub] of R) {
  const a = byId.get(id);
  const cur = a.sections[si].body[bi];
  if (!cur.includes(oldSub)) { console.error(`MISS ${id} s${si}b${bi}: "${oldSub}"`); bad++; continue; }
  a.sections[si].body[bi] = cur.replace(oldSub, newSub);
  ok++;
}
console.log(`review fixes applied ${ok}, missed ${bad} of ${R.length}`);
if (bad) process.exit(1);
writeFileSync(F, JSON.stringify(data, null, 2));
console.log('wrote _authored.json');
