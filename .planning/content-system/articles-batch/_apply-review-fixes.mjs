// REVIEW-confirmed fixes for components-specialty (2 findings, cross-checked vs gold + fact packs).
// Entry: [articleId, field, oldSub, newSub]; field = 'directAnswer' | 'sNbM'.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const HERE = dirname(fileURLToPath(import.meta.url));
const F = join(HERE, '_authored.json');
const data = JSON.parse(readFileSync(F, 'utf8'));
const byId = new Map(data.articles.map((a) => [a.articleId, a]));

const R = [
  // Finding 1 (med, currency): hedge the 90-95% flashing-leak stat as an industry estimate attributed to NRCA (gold form, all 8 gold occurrences hedged).
  ['chimney-flashing-repair-signs', 'directAnswer',
    'and the NRCA estimates roughly 90 to 95 percent of roof leaks originate at flashing details.',
    'and the roofing industry estimates roughly 90 to 95 percent of roof leaks originate at flashing details, an estimate attributed to the NRCA.'],
  ['chimney-flashing-repair-signs', 's0b1',
    'and the NRCA estimates that roughly 90 to 95 percent of roof leaks originate at flashing details rather than the open field of the shingles.',
    'and the roofing industry estimates that roughly 90 to 95 percent of roof leaks originate at flashing details rather than the open field of the shingles, an estimate attributed to the NRCA.'],
  // Finding 2 (low, source-attribution): drop the unsupported "most common reason" superlative; keep the sourced mechanism.
  ['roof-vent-installation-repair-decision', 's0b1',
    'which is why blocked eaves are the most common reason a vent system underperforms.',
    'so blocked eaves leave the ridge exhaust short of the intake air it draws on.'],
];

let ok = 0, bad = 0;
for (const [id, field, oldSub, newSub] of R) {
  const a = byId.get(id);
  if (!a) { console.error(`MISS article ${id}`); bad++; continue; }
  if (field === 'directAnswer') {
    if (!a.directAnswer.includes(oldSub)) { console.error(`MISS ${id} directAnswer: "${oldSub}"`); bad++; continue; }
    a.directAnswer = a.directAnswer.replace(oldSub, newSub); ok++;
  } else {
    const m = field.match(/^s(\d+)b(\d+)$/);
    const si = Number(m[1]), bi = Number(m[2]);
    const cur = a.sections[si].body[bi];
    if (!cur.includes(oldSub)) { console.error(`MISS ${id} s${si}b${bi}: "${oldSub}"`); bad++; continue; }
    a.sections[si].body[bi] = cur.replace(oldSub, newSub); ok++;
  }
}
console.log(`review fixes applied ${ok}, missed ${bad} of ${R.length}`);
if (bad) process.exit(1);
writeFileSync(F, JSON.stringify({ articles: data.articles }, null, 2));
console.log('wrote _authored.json');
