// REVIEW-confirmed fixes for replacement-sub-pages (5 findings: 2 med + 3 low).
// 4 are long body[0] first sentences (the audit's firstSentence regex splits on the
// periods in N.J.A.C./N.J.S.A. and under-counts them, but a reader sees 41-44 words) —
// split at a clause boundary. 1 is a slate-source mis-attribution (Josten -> NJ roofing
// guides, matching the gold). Every fact + statute preserved.
// Entry: [articleId, field, oldSub, newSub]; field = 'directAnswer' | 'sNbM'.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const HERE = dirname(fileURLToPath(import.meta.url));
const F = join(HERE, '_authored.json');
const data = JSON.parse(readFileSync(F, 'utf8'));
const byId = new Map(data.articles.map((a) => [a.articleId, a]));

const R = [
  // 1) insurance-decision s2b0 (44w 1st sentence) — split after the no-permit clause.
  ['insurance-roof-replacement-decision', 's2b0',
    '**A complete tear-off on a detached one- and two-family dwelling counts as ordinary maintenance** under N.J.A.C. 5:23-2.7 and requires no construction permit, while a structural change to rafters or trusses, or a commercial roof replacement, triggers a permit, per the NJ Uniform Construction Code.',
    '**A complete tear-off on a detached one- and two-family dwelling counts as ordinary maintenance** under N.J.A.C. 5:23-2.7 and requires no construction permit, per the NJ Uniform Construction Code. A structural change to rafters or trusses, or a commercial roof replacement, instead triggers a permit.'],
  // 2) insurance-decision s3b0 (43w 1st sentence) — split the statute list.
  ['insurance-roof-replacement-decision', 's3b0',
    '**Verify a registered New Jersey Home Improvement Contractor**, with the 13VH registration number on the contract and advertising per N.J.S.A. 56:8-144, at least $500,000 per-occurrence commercial general liability insurance per N.J.S.A. 56:8-142, and a written contract for work over $500 per N.J.A.C. 13:45A-16.2.',
    '**Verify a registered New Jersey Home Improvement Contractor**, with the 13VH registration number on the contract and advertising per N.J.S.A. 56:8-144. Confirm at least $500,000 per-occurrence commercial general liability insurance per N.J.S.A. 56:8-142, and a written contract for work over $500 per N.J.A.C. 13:45A-16.2.'],
  // 3) aging-cost-guide s0b0 — slate $10-$30 is sourced to "NJ roofing guides" in the gold, not Josten.
  ['aging-roof-replacement-cost-guide', 's0b0',
    'metal at $9.00 to $16.00, and slate at $10 to $30, per Josten Roofing NJ pricing',
    'metal at $9.00 to $16.00, per Josten Roofing NJ pricing, and slate at $10 to $30, per NJ roofing guides'],
  // 4) roof-replacement-after-leak-decision s3b0 (41w 1st sentence) — split off the registration-not-license clause.
  ['roof-replacement-after-leak-decision', 's3b0',
    '**A leaked-roof contractor** confirms active New Jersey Home Improvement Contractor registration under N.J.S.A. 56:8-136, with the 13VH number shown on the contract and advertising per N.J.S.A. 56:8-144 — a registration, not a roofing license, because New Jersey issues no roofing license.',
    '**A leaked-roof contractor** confirms New Jersey Home Improvement Contractor registration under N.J.S.A. 56:8-136, with the 13VH number shown on the contract and advertising per N.J.S.A. 56:8-144. This is a registration, not a roofing license, because New Jersey issues no roofing license.'],
  // 5) cedar-decision s3b0 (41w 1st sentence) — split off the 13VH clause; shorten the bold span.
  ['cedar-shake-roof-replacement-decision', 's3b0',
    '**Confirm the contractor holds New Jersey Home Improvement Contractor registration under N.J.S.A. 56:8-136 — a registration, not a license, because New Jersey issues no roofing license** — with the 13VH registration number displayed on the contract and advertising per N.J.S.A. 56:8-144.',
    '**Confirm the contractor holds New Jersey Home Improvement Contractor registration under N.J.S.A. 56:8-136** — a registration, not a license, because New Jersey issues no roofing license. The 13VH registration number appears on the contract and advertising per N.J.S.A. 56:8-144.'],
];

let ok = 0, bad = 0;
for (const [id, field, oldSub, newSub] of R) {
  const a = byId.get(id);
  if (!a) { console.error(`MISS article ${id}`); bad++; continue; }
  if (field === 'directAnswer') {
    if (!a.directAnswer.includes(oldSub)) { console.error(`MISS ${id} directAnswer`); bad++; continue; }
    a.directAnswer = a.directAnswer.replace(oldSub, newSub); ok++;
  } else {
    const m = field.match(/^s(\d+)b(\d+)$/);
    const si = Number(m[1]), bi = Number(m[2]);
    const cur = a.sections[si].body[bi];
    if (!cur.includes(oldSub)) { console.error(`MISS ${id} s${si}b${bi}`); bad++; continue; }
    a.sections[si].body[bi] = cur.replace(oldSub, newSub); ok++;
  }
}
console.log(`review fixes applied ${ok}, missed ${bad} of ${R.length}`);
if (bad) process.exit(1);
writeFileSync(F, JSON.stringify({ articles: data.articles }, null, 2));
console.log('wrote _authored.json');
