// Phase 3b body credential sweep: reframe NQR "licensed and insured" self-claims in
// faqs/overview/challenges (rendered fields) to the accurate "registered NJ HIC".
// Targeted exact-phrase replacements only — KEEPS factual / third-party cites:
//   "licensed Construction Official", "not licensed to remediate mold",
//   "licensed public adjuster / structural engineer / attorney / abatement".
// Run AFTER splice-reframe (so directAnswers are already reframed) and meta-sweep.
import { readFileSync, writeFileSync, readdirSync } from 'fs';

const base = 'src/data/combo-content';
const cities = ['newark', 'east-orange', 'orange'];

// Ordered exact-phrase replacements. Each is an NQR self-claim → "registered NJ HIC".
// The "., comma" appositive form is distinct from the dead-code whyChooseUs em-dash form
// ("Contractor — licensed and insured."), so whyChooseUs is untouched.
const REPLACEMENTS = [
  ['New Jersey Home Improvement Contractor, licensed and insured', 'registered New Jersey Home Improvement Contractor'],
  ['licensed and insured New Jersey Home Improvement Contractor', 'registered New Jersey Home Improvement Contractor'],
  ['any licensed, insured contractor', 'any registered, insured contractor'],
];

let changed = 0; const perRepl = REPLACEMENTS.map(() => 0); const touched = [];
for (const city of cities) {
  const dir = `${base}/${city}`;
  for (const fn of readdirSync(dir).filter((f) => f.endsWith('.ts') && f !== 'index.ts')) {
    const path = `${dir}/${fn}`;
    let src = readFileSync(path, 'utf8');
    const before = src;
    REPLACEMENTS.forEach((r, i) => {
      const parts = src.split(r[0]);
      if (parts.length > 1) { perRepl[i] += parts.length - 1; src = parts.join(r[1]); }
    });
    if (src !== before) { writeFileSync(path, src); changed++; touched.push(path.replace('src/data/combo-content/', '')); }
  }
}
console.log(`body sweep: files changed=${changed}`);
REPLACEMENTS.forEach((r, i) => console.log(`  [${perRepl[i]}×] "${r[0].slice(0, 50)}…" -> "${r[1].slice(0, 40)}…"`));
console.log('touched: ' + touched.join(', '));
