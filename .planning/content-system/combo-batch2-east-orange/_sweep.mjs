#!/usr/bin/env node
// Orchestrator cross-file recurrence sweep (Combo Batch 2 / East Orange).
// Deterministic exact-string replacements matching the committed Newark siblings.
//   A) N.J.A.C. 5:23-6.4 covering list: abbreviated -> full statutory list (committed Newark form).
//   B) NRCA "up to 25%" ventilation-life stat: DROPPED (committed Newark frames ventilation qualitatively).
// roof-maintenance-programs up-to-25% is handled by the confirmed-#1 inline edits, not here.
import fs from 'node:fs';
import path from 'node:path';

const DIR = 'src/data/combo-content/east-orange';
const REPL = [
  // A — order-independent, exact substring
  ['is wood, slate, or tile', 'is wood shake, slate, clay, cement, or asbestos-cement tile'],
  // B — do the " and ARMA" variant FIRST so the plain variant doesn't partial-match it
  ['extends roof service life by up to 25%, per the NRCA and ARMA', 'extends roof service life, per the NRCA'],
  ['extends roof service life by up to 25%, per the NRCA', 'extends roof service life, per the NRCA'],
  ['extends roof life by up to 25%, per the NRCA', 'extends roof life, per the NRCA'],
];

let totalFiles = 0, totalHits = 0;
const report = [];
for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.ts') && x !== 'index.ts')) {
  const p = path.join(DIR, f);
  let txt = fs.readFileSync(p, 'utf8');
  let fileHits = 0;
  for (const [from, to] of REPL) {
    const before = txt;
    txt = txt.split(from).join(to);
    const n = (before.length - txt.length) === 0 && before !== txt ? 1 : (before.split(from).length - 1);
    if (n > 0) fileHits += n;
  }
  if (fileHits > 0) {
    fs.writeFileSync(p, txt);
    totalFiles++; totalHits += fileHits;
    report.push(`  ${f}: ${fileHits} replacement(s)`);
  }
}
console.log(`Sweep applied to ${totalFiles} file(s), ${totalHits} replacement(s):`);
console.log(report.join('\n'));
// Residual check
let residA = 0, residB = 0;
for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.ts') && x !== 'index.ts')) {
  const txt = fs.readFileSync(path.join(DIR, f), 'utf8');
  if (txt.includes('is wood, slate, or tile')) residA++;
  if (/extends roof (service )?life by up to 25%/.test(txt)) residB++;
}
console.log(`Residual: A(5:23-6.4 abbrev)=${residA} files | B(up-to-25% vent)=${residB} files (excludes roof-maintenance-programs handled inline)`);
