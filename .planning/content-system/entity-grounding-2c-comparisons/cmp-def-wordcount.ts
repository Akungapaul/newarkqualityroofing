// Entity-grounding 2c — definition ≤40-word first-sentence gate (comparisons).
// Checks the FIRST sentence of definitionA, definitionB, AND definition (ranking),
// stripping ** markers and splitting on whitespace so standalone " — " em-dashes
// count as tokens (matches the CMP wordcount strictness). Also flags missing bold
// lead and modality verbs. Exits 1 if any first sentence exceeds 40 words.
import { getAllComparisonContent } from '../../../src/data/comparison-content';

const MODALITY = /\b(will|should|must|need to|needs to|can)\b/i;

function firstSentence(s: string): string {
  const stripped = s.replace(/\*\*/g, '').trim();
  const m = stripped.match(/^(.*?[.!?])(\s|$)/s);
  return (m ? m[1] : stripped).trim();
}
const wc = (s: string): number => s.split(/\s+/).filter(Boolean).length;

let over = 0;
let withDef = 0;
const warns: string[] = [];

for (const c of getAllComparisonContent()) {
  const fields: [string, string | undefined][] = [
    ['definitionA', c.definitionA],
    ['definitionB', c.definitionB],
    ['definition', c.definition],
  ];
  for (const [label, val] of fields) {
    if (!val) continue;
    withDef++;
    const fs = firstSentence(val);
    const n = wc(fs);
    if (n > 40) { over++; console.log(`OVER ${n}w  ${c.comparisonId}.${label}  ::  ${fs}`); }
    if (!val.trimStart().startsWith('**')) warns.push(`${c.comparisonId}.${label}: no bold lead`);
    if (MODALITY.test(val)) warns.push(`${c.comparisonId}.${label}: modality "${(val.match(MODALITY) || [])[0]}"`);
  }
}

if (warns.length) { console.log('\nNON-BLOCKING WARNINGS:'); for (const w of warns) console.log('  ⚠ ' + w); }
console.log(`\ndefinition fields checked: ${withDef}`);
console.log(over === 0 ? 'PASS — all definition first sentences ≤40 words' : `FAIL — ${over} over 40 words`);
process.exit(over === 0 ? 0 : 1);
