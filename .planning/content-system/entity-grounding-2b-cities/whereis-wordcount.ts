// Entity-grounding Phase 2b — whereIs ≤40-word first-sentence gate (cities).
// Counts the FIRST sentence of each city `whereIs`, stripping ** markers,
// splitting on whitespace so standalone " — " em-dashes count as tokens (matches the
// CMP/2a wordcount strictness). Prints any whereIs whose first sentence exceeds 40 words.
import { getAllCityContent } from '../../../src/data/city-content';

function firstSentence(s: string): string {
  const stripped = s.replace(/\*\*/g, '').trim();
  // first sentence ends at the first period followed by whitespace, else whole string
  const m = stripped.match(/^(.*?[.!?])(\s|$)/s);
  return (m ? m[1] : stripped).trim();
}
function wordCount(s: string): number {
  return s.split(/\s+/).filter(Boolean).length;
}

let over = 0;
let withWhereIs = 0;
for (const c of getAllCityContent()) {
  if (!c.whereIs) continue;
  withWhereIs++;
  const fs = firstSentence(c.whereIs);
  const n = wordCount(fs);
  if (n > 40) {
    over++;
    console.log(`OVER ${n}w  ${c.cityId}  ::  ${fs}`);
  }
}
console.log(`\ncities with whereIs: ${withWhereIs}`);
console.log(over === 0 ? 'PASS — all whereIs first sentences ≤40 words' : `FAIL — ${over} over 40 words`);
process.exit(over === 0 ? 0 : 1);
