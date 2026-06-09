import { decisionHelpers } from '../../../src/data/comparison-content/decision-helper';
import { ComparisonContentSchema } from '../../../src/data/comparison-content/schema';
const CMP = new Set(['best-roofing-material-nj-weather','best-commercial-roofing-material','best-roofing-for-flat-roofs','best-roofing-for-historic-homes-nj','cheapest-vs-most-durable-roofing','most-energy-efficient-roofing-materials','best-roofing-for-essex-county-colonial-homes','roof-warranty-comparison-guide']);
let bad = 0;
for (const c of decisionHelpers) {
  if (!CMP.has(c.comparisonId)) continue;
  const r = ComparisonContentSchema.safeParse(c);
  if (!r.success) { bad++; console.log(`\n✗ ${c.comparisonId}`); for (const i of r.error.issues) console.log(`   ${i.path.join('.')}: ${i.message}`); }
}
for (const c of decisionHelpers) {
  if (!CMP.has(c.comparisonId)) continue;
  const s = { introP:c.introParagraphs.length, rows:c.comparisonRows.length, da:c.detailedAnalysis.length, daMax:Math.max(...c.detailedAnalysis.map(a=>a.content.length)), nj:c.njSpecific.content.length, res:c.residentialSection.content.length, com:c.commercialSection.content.length, faqs:c.faqs.length };
  console.log(`size ${c.comparisonId}: ${JSON.stringify(s)}`);
}
console.log(bad===0 ? '\n✅ all 8 schema-valid' : `\n❌ ${bad} invalid`);
process.exit(bad===0?0:1);
