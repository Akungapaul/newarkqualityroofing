import { materialComparisons } from '../../../src/data/comparison-content/material-vs-material';
import { ComparisonContentSchema } from '../../../src/data/comparison-content/schema';
const CMP2 = new Set(['modified-bitumen-vs-tpo','rubber-roofing-vs-tpo','cedar-shake-vs-wood-shingle','built-up-roofing-vs-modified-bitumen','spray-foam-vs-tpo','green-roof-vs-traditional-roofing','solar-shingles-vs-solar-panels','architectural-vs-3-tab-shingles']);
let bad = 0;
for (const c of materialComparisons) {
  if (!CMP2.has(c.comparisonId)) continue;
  const r = ComparisonContentSchema.safeParse(c);
  if (!r.success) { bad++; console.log(`\n✗ ${c.comparisonId}`); for (const i of r.error.issues) console.log(`   ${i.path.join('.')}: ${i.message}`); }
}
for (const c of materialComparisons) {
  if (!CMP2.has(c.comparisonId)) continue;
  const s = { introP:c.introParagraphs.length, rows:c.comparisonRows.length, da:c.detailedAnalysis.length, daMax:Math.max(...c.detailedAnalysis.map(a=>a.content.length)), nj:c.njSpecific.content.length, res:c.residentialSection.content.length, com:c.commercialSection.content.length, faqs:c.faqs.length };
  console.log(`size ${c.comparisonId}: ${JSON.stringify(s)}`);
}
console.log(bad===0 ? '\n✅ all 8 schema-valid' : `\n❌ ${bad} invalid`);
process.exit(bad===0?0:1);
