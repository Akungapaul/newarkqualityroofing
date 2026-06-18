// Combo Batch 8 (Maplewood + South Orange) — orchestrator cross-file recurrence sweep.
// Run in the FIX step (AFTER the review workflow finishes reading the files).
// Fixes the systematic recurrences per-cohort reviewers miss (confirmed vs committed gold),
// across BOTH city dirs. Seeded with the carried-forward batch-7 sweep classes; ADD any
// new batch-8 confirmed-finding signatures here before running.
import { readdirSync, readFileSync, writeFileSync } from 'fs';

const DIRS = ['src/data/combo-content/maplewood', 'src/data/combo-content/south-orange'];

const SUBS = [
  // A — full statutory 5:23-6.4 list (per facts-nj-regulatory-climate.md §63)
  [/wood, slate, or tile/g, 'wood shake, slate, clay, cement, or asbestos-cement tile'],
  // A2 — partial variant "wood shake, slate, clay, or tile" (missing cement/asbestos-cement) → full list
  [/wood shake, slate, clay, or tile/g, 'wood shake, slate, clay, cement, or asbestos-cement tile'],
  // A3 — "is slate, clay, or cement tile" variant → full list
  [/is slate, clay, or cement tile/g, 'is wood shake, slate, clay, cement, or asbestos-cement tile'],
  // B — drop the banned NRCA "up to 25%" ventilation figure (gold combos dropped it; keep the qualitative point)
  [/ by up to 25%, per the NRCA/g, ', per the NRCA'],
  [/ up to 25%, per the NRCA/g, ', per the NRCA'],
  // C — fabricated statutory claim deadline → gold proof-of-loss policy-term framing (Batch-4 lesson)
  [/, interpreted as within 30 days of discovery, with a separate two-year statutory window for hurricane and named-storm losses, per the NJ Department of Banking and Insurance/g,
    ' and a proof of loss within a policy-set window — commonly about 60 days — set by the policy contract rather than by statute, per United Policyholders and the NAIC'],
  // D — fabricated "RICOWI wind-investigation findings" attribution → plain "per IIBEC"
  [/ RICOWI wind-investigation findings/g, ''],
  // E — the "2,110-acre" South Mountain Reservation figure → city-page "roughly 2,100 acres" (Maplewood fab)
  [/2,110-acre/g, 'roughly 2,100-acre'],
  [/2,110 acres/g, 'roughly 2,100 acres'],
  // ── ADD batch-8 confirmed-finding sweep classes below (after review) ──
];

const counts = SUBS.map(() => 0);
let touched = 0;
for (const DIR of DIRS) {
  const files = readdirSync(DIR).filter(f => f.endsWith('.ts') && f !== 'index.ts');
  for (const f of files) {
    const p = `${DIR}/${f}`;
    let src = readFileSync(p, 'utf8');
    const before = src;
    SUBS.forEach((s, i) => { counts[i] += (src.match(s[0]) || []).length; src = src.replace(s[0], s[1]); });
    if (src !== before) { writeFileSync(p, src); touched++; }
  }
}
console.log(`Sweep applied (both cities): ${counts.map((c, i) => `[${i}]=${c}`).join('  ')}  files touched=${touched}`);
