// Usage: node _save-review.mjs <city> <task-output-file>
import fs from 'node:fs';
const [city, F] = process.argv.slice(2);
const obj = JSON.parse(fs.readFileSync(F,'utf8'));
const r = obj.result || obj;
const out = `.planning/content-system/combo-batch11-affluent-suburban/_review-findings-${city}.json`;
fs.writeFileSync(out, JSON.stringify(r,null,2));
console.log(`${city}: confirmed=${r.confirmedCount} refuted=${r.refutedCount} low=${r.lowCount} failed=${(r.failedCohorts||[]).length}`);
if ((r.failedCohorts||[]).length) console.log(`  ⚠️ FAILED COHORTS (re-run): ${r.failedCohorts.join(', ')}`);
for (const c of (r.confirmed||[])) console.log(`  ${c.combo} ${c.field} [${c.category}/${c.severity}]`);
