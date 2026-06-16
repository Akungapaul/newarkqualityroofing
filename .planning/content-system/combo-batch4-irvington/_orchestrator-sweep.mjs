// Combo Batch 4 (Irvington) — orchestrator cross-file recurrence sweep.
// Run in the FIX step (AFTER the review workflow finishes reading the files).
// Fixes the systematic recurrences per-cohort reviewers miss (confirmed vs committed gold):
//   A. abbreviated N.J.A.C. 5:23-6.4 recover-material list  → full statutory list
//   B. banned NRCA "extends roof (service) life by up to 25%" vent stat → drop the figure
// (Claim-deadline fix in storm-damage-roof-repair is applied as a direct edit, not here.)
import { readdirSync, readFileSync, writeFileSync } from 'fs';

const DIR = 'src/data/combo-content/irvington';
const files = readdirSync(DIR).filter(f => f.endsWith('.ts') && f !== 'index.ts');

const SUBS = [
  // A — full statutory 5:23-6.4 list (per facts-nj-regulatory-climate.md §63)
  [/is wood, slate, or tile/g, 'is wood shake, slate, clay, cement, or asbestos-cement tile'],
  // B — drop the banned "up to 25%" ventilation figure (gold combos dropped it; keep the qualitative point)
  [/ by up to 25%, per the NRCA/g, ', per the NRCA'],
];

let totalA = 0, totalB = 0, touched = 0;
for (const f of files) {
  const p = `${DIR}/${f}`;
  let src = readFileSync(p, 'utf8');
  const before = src;
  const a = (src.match(SUBS[0][0]) || []).length;
  const b = (src.match(SUBS[1][0]) || []).length;
  src = src.replace(SUBS[0][0], SUBS[0][1]).replace(SUBS[1][0], SUBS[1][1]);
  if (src !== before) { writeFileSync(p, src); touched++; totalA += a; totalB += b; }
}
console.log(`Sweep applied: A(5:23-6.4 list)=${totalA}  B(vent-25%)=${totalB}  files touched=${touched}`);
