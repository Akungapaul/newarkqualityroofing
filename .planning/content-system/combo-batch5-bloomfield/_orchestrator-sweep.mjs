// Combo Batch 5 (Bloomfield) — orchestrator cross-file recurrence sweep.
// Run in the FIX step (AFTER the review workflow finishes reading the files).
// Fixes the systematic recurrences per-cohort reviewers miss (confirmed vs committed gold):
//   A. abbreviated N.J.A.C. 5:23-6.4 recover-material list  → full statutory list
//   B. banned NRCA "extends roof (service) life by up to 25%" vent stat → drop the figure
// (Claim-deadline fix in storm-damage-roof-repair is applied as a direct edit, not here.)
import { readdirSync, readFileSync, writeFileSync } from 'fs';

const DIR = 'src/data/combo-content/bloomfield';
const files = readdirSync(DIR).filter(f => f.endsWith('.ts') && f !== 'index.ts');

const SUBS = [
  // A — full statutory 5:23-6.4 list (per facts-nj-regulatory-climate.md §63); catches BOTH
  //     "is wood, slate, or tile" and "a wood, slate, or tile roof" (all in recover/tear-off context)
  [/wood, slate, or tile/g, 'wood shake, slate, clay, cement, or asbestos-cement tile'],
  // B — drop the banned NRCA "up to 25%" ventilation figure (gold combos dropped it; keep the qualitative
  //     NRCA point). Two variants ("by up to 25%" / "up to 25%"). The legit 5:23-2.7 "up to 25% of the
  //     total roof" permit rule is NOT followed by ", per the NRCA", so it is untouched.
  [/ by up to 25%, per the NRCA/g, ', per the NRCA'],
  [/ up to 25%, per the NRCA/g, ', per the NRCA'],
];

const counts = SUBS.map(() => 0);
let touched = 0;
for (const f of files) {
  const p = `${DIR}/${f}`;
  let src = readFileSync(p, 'utf8');
  const before = src;
  SUBS.forEach((s, i) => { counts[i] += (src.match(s[0]) || []).length; src = src.replace(s[0], s[1]); });
  if (src !== before) { writeFileSync(p, src); touched++; }
}
console.log(`Sweep applied: A(5:23-6.4 list)=${counts[0]}  B1(vent "by up to 25%")=${counts[1]}  B2(vent "up to 25%")=${counts[2]}  files touched=${touched}`);
