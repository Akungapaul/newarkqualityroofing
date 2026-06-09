import { serviceComparisons } from '../../../src/data/comparison-content/service-vs-service';
import { ComparisonContentSchema } from '../../../src/data/comparison-content/schema';
const CMP2 = new Set(['roof-repair-vs-replacement','roof-coating-vs-replacement','roof-overlay-vs-tear-off','patching-vs-full-roof-repair','preventive-maintenance-vs-emergency-repair','diy-vs-professional-roof-repair']);
let bad = 0;
for (const c of serviceComparisons) {
  if (!CMP2.has(c.comparisonId)) continue;
  const r = ComparisonContentSchema.safeParse(c);
  if (!r.success) { bad++; console.log(`\n✗ ${c.comparisonId}`); for (const i of r.error.issues) console.log(`   ${i.path.join('.')}: ${i.message}`); }
}
for (const c of serviceComparisons) {
  if (!CMP2.has(c.comparisonId)) continue;
  const s = { introP:c.introParagraphs.length, rows:c.comparisonRows.length, da:c.detailedAnalysis.length, daMax:Math.max(...c.detailedAnalysis.map(a=>a.content.length)), nj:c.njSpecific.content.length, res:c.residentialSection.content.length, com:c.commercialSection.content.length, faqs:c.faqs.length };
  console.log(`size ${c.comparisonId}: ${JSON.stringify(s)}`);
}
console.log(bad===0 ? '\n✅ all 6 schema-valid' : `\n❌ ${bad} invalid`);
process.exit(bad===0?0:1);
