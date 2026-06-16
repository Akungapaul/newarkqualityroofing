// Aggregate the per-service review findings. Reports coverage, counts by severity,
// and the full finding list for triage. Flags any missing findings files (re-run those).
import fs from 'fs';

const HERE = '.planning/content-system/entity-grounding-3b-combo-reframe';
const dir = `${HERE}/findings`;
const expected = JSON.parse(fs.readFileSync(`${HERE}/_payload.json`, 'utf8')).map((p) => p.serviceId);

const have = new Set();
const all = [];
for (const fn of fs.readdirSync(dir).filter((f) => f.endsWith('.json'))) {
  let o;
  try { o = JSON.parse(fs.readFileSync(`${dir}/${fn}`, 'utf8')); }
  catch (e) { console.error(`PARSE FAIL ${fn}: ${e.message}`); continue; }
  have.add(o.serviceId);
  for (const f of (o.findings || [])) all.push({ serviceId: o.serviceId, ...f });
}

const missing = expected.filter((s) => !have.has(s));
const bySev = { high: 0, med: 0, low: 0 };
for (const f of all) bySev[f.severity] = (bySev[f.severity] || 0) + 1;

console.log(`findings files: ${have.size}/65  (missing: ${missing.length})`);
if (missing.length) { console.log('  MISSING: ' + missing.join(', ')); fs.writeFileSync(`${HERE}/_review-missing.json`, JSON.stringify([...missing])); }
console.log(`total findings: ${all.length}  (high=${bySev.high} med=${bySev.med} low=${bySev.low})`);
console.log('');
for (const f of all.sort((a, b) => ({ high: 0, med: 1, low: 2 }[a.severity] - { high: 0, med: 1, low: 2 }[b.severity]))) {
  console.log(`[${f.severity}] ${f.serviceId}/${f.city}: ${f.issue}`);
  if (f.suggestedFix) console.log(`      fix→ ${f.suggestedFix}`);
}
fs.writeFileSync(`${HERE}/_findings-all.json`, JSON.stringify(all, null, 2));
