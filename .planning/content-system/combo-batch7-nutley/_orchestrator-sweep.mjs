// Combo Batch 7 (Nutley) — orchestrator cross-file recurrence sweep.
// Run in the FIX step (AFTER the review workflow finishes reading the files).
// Fixes the systematic recurrences per-cohort reviewers miss (confirmed vs committed gold):
//   A. abbreviated N.J.A.C. 5:23-6.4 recover-material list  → full statutory list
//   B. banned NRCA "extends roof (service) life by up to 25%" vent stat → drop the figure
//   C. fabricated "30-day / two-year statutory NJ DOBI claim deadline" → gold ~60-day proof-of-loss
//      policy-term framing (NJ has no statutory roofing claim deadline) — storm-damage-roof-repair ×2
import { readdirSync, readFileSync, writeFileSync } from 'fs';

const DIR = 'src/data/combo-content/nutley';
const files = readdirSync(DIR).filter(f => f.endsWith('.ts') && f !== 'index.ts');

const SUBS = [
  // A — full statutory 5:23-6.4 list (per facts-nj-regulatory-climate.md §63); catches BOTH
  //     "is wood, slate, or tile" and "a wood, slate, or tile roof" (all in recover/tear-off context)
  [/wood, slate, or tile/g, 'wood shake, slate, clay, cement, or asbestos-cement tile'],
  // A2 — normalize the partial variant "wood shake, slate, clay, or tile" (missing cement/asbestos-cement)
  //      to the full statutory list. Does NOT match the already-correct full list.
  [/wood shake, slate, clay, or tile/g, 'wood shake, slate, clay, cement, or asbestos-cement tile'],
  // A3 — the "is slate, clay, or cement tile" variant (drops wood shake + asbestos-cement) → full list
  //      (commercial-roof-replacement challenges[2] + process[2], review findings [9]/[10]).
  [/is slate, clay, or cement tile/g, 'is wood shake, slate, clay, cement, or asbestos-cement tile'],
  // B — drop the banned NRCA "up to 25%" ventilation figure (gold combos dropped it; keep the qualitative
  //     NRCA point). Two variants ("by up to 25%" / "up to 25%"). The legit 5:23-2.7 "up to 25% of the
  //     total roof" permit rule is NOT followed by ", per the NRCA", so it is untouched.
  [/ by up to 25%, per the NRCA/g, ', per the NRCA'],
  [/ up to 25%, per the NRCA/g, ', per the NRCA'],
  // C — fabricated statutory claim deadline → gold proof-of-loss policy-term framing (Batch-4 lesson).
  //     NJ has NO statutory roofing claim deadline; the proof-of-loss is a policy contract term (~60 days).
  [/, interpreted as within 30 days of discovery, with a separate two-year statutory window for hurricane and named-storm losses, per the NJ Department of Banking and Insurance/g,
    ' and a proof of loss within a policy-set window — commonly about 60 days — set by the policy contract rather than by statute, per United Policyholders and the NAIC'],
  // D — fabricated "RICOWI wind-investigation findings" attribution → plain "per IIBEC" (gold wind siblings
  //     carry no RICOWI; not in any pack). wind-damage-roof-repair overview[2] + process[0], finding [3].
  [/ RICOWI wind-investigation findings/g, ''],
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
console.log(`Sweep applied: A(5:23-6.4 list)=${counts[0]}  A2(partial)=${counts[1]}  A3(slate-clay-cement)=${counts[2]}  B1(vent "by up to 25%")=${counts[3]}  B2(vent "up to 25%")=${counts[4]}  C(claim-deadline)=${counts[5]}  D(RICOWI)=${counts[6]}  files touched=${touched}`);
