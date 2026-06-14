import fs from 'fs';

// 7 confirmed review fixes (2 low committed-sibling overrides skipped: "cannot", "gravel ballast").
// Each [file, before, after] asserts EXACTLY ONE occurrence.
const M = 'src/data/comparison-content/material-vs-material.ts';
const S = 'src/data/comparison-content/service-vs-service.ts';
const D = 'src/data/comparison-content/decision-helper.ts';

const FIXES = [
  // 1. wood-shake definitionA — hyphenation consistency (taper-sawn)
  [M, 'hand-split or tapersawn western red cedar', 'hand-split or taper-sawn western red cedar'],
  // 2. rubber-roofing definitionB — reflectance governs solar only, not water-shedding
  [M, 'Its reflective white surface sheds water and rejects solar radiation as a cool roof.',
      'Its reflective white surface rejects solar radiation as a cool roof.'],
  // 7. metal-vs-tile definitionA — restore exposed-fastener form (entity-stable with 2a)
  [M, 'fitted as concealed-fastener standing-seam panels or interlocking metal shingles over the roof deck',
      'fitted as concealed- or exposed-fastener panels or interlocking metal shingles over the roof deck'],
  // 5a. historic-homes definitionHeading — spell out New Jersey (parallel with introHeading)
  [D, 'What Is the Best Roofing for Historic Homes in NJ?',
      'What Is the Best Roofing for Historic Homes in New Jersey?'],
  // 5b. historic-homes bold lead — match the heading subject
  [D, '**The best roofing for historic homes in NJ**',
      '**The best roofing for historic homes in New Jersey**'],
  // 6. warranty definition — manufacturer system warranty also covers certified install (page's own thesis)
  [D, '**A roof warranty** is a written guarantee that covers either factory material defects, issued by the manufacturer, or installation quality, issued by the contractor — distinct in what each one covers, who stands behind it, and how long it lasts.',
      '**A roof warranty** is a written guarantee covering factory material defects from the manufacturer, installation quality from the contractor, or both under a certified system warranty — differing in coverage, backer, and term.'],
  // 8. emergency-repair definitionB — urgency is event-forced, not inherently after-hours
  [S, '**Emergency Repair** is the after-hours response to a roof failure already underway',
      '**Emergency Repair** is the urgent response to a roof failure already underway'],
  // 9. most-energy-efficient definition — insulation cuts heating too, not only cooling load
  [D, "are roof coverings that lower a building's roof-surface temperature and cooling load through a high-reflectance surface, conductive insulation, or both.",
      "are roof coverings that cut a building's annual heating and cooling energy use through a high-reflectance surface, conductive insulation, or both."],
];

const cache = {};
const load = (f) => (cache[f] ??= fs.readFileSync(f, 'utf8'));
let applied = 0;
for (const [f, before, after] of FIXES) {
  let src = load(f);
  const n = src.split(before).length - 1;
  if (n !== 1) { console.error(`!! expected 1 occurrence, found ${n}: ${before.slice(0, 60)}…`); process.exit(1); }
  cache[f] = src.replace(before, after);
  applied++;
  console.log(`✓ ${f.split('/').pop()}: ${before.slice(0, 48)}…`);
}
for (const f of Object.keys(cache)) fs.writeFileSync(f, cache[f]);
console.log(`\napplied ${applied}/7 fixes`);
