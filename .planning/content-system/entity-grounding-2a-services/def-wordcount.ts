// Entity-grounding Phase 2a — definition ≤40-word first-sentence gate (services).
// Counts the FIRST sentence of each service `definition`, stripping ** markers,
// splitting on whitespace so standalone " — " em-dashes count as tokens (matches the
// CMP wordcount strictness). Prints any definition whose first sentence exceeds 40 words.
import { getAllServiceContent } from '../../../src/data/service-content';

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
let withDef = 0;
for (const c of getAllServiceContent()) {
  if (!c.definition) continue;
  withDef++;
  const fs = firstSentence(c.definition);
  const n = wordCount(fs);
  if (n > 40) {
    over++;
    console.log(`OVER ${n}w  ${c.serviceId}  ::  ${fs}`);
  }
}
console.log(`\nservices with definition: ${withDef}`);
console.log(over === 0 ? 'PASS — all definition first sentences ≤40 words' : `FAIL — ${over} over 40 words`);
process.exit(over === 0 ? 0 : 1);
