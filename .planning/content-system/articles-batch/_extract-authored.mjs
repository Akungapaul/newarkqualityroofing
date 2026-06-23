// Unwrap the workflow task-output file and write _authored.json ({articles:[...]}).
// Run: node _extract-authored.mjs <task-output-file> <out-json>
import { readFileSync, writeFileSync } from 'node:fs';

const [, , F, OUT] = process.argv;
let raw;
try {
  raw = JSON.parse(readFileSync(F, 'utf8'));
} catch (e) {
  console.error('top-level JSON parse failed:', e.message);
  process.exit(2);
}

// Task output is a {summary,logs,result} wrapper; result may be an object or a JSON string.
let r = raw;
if (r && typeof r === 'object' && 'result' in r) r = r.result;
if (typeof r === 'string') {
  try { r = JSON.parse(r); } catch { /* leave as-is */ }
}

const articles = Array.isArray(r) ? r : r && r.articles;
if (!Array.isArray(articles)) {
  console.error('no articles array. top keys=', Object.keys(raw), ' r keys=', r && typeof r === 'object' ? Object.keys(r) : typeof r);
  process.exit(1);
}

writeFileSync(OUT, JSON.stringify({ articles }, null, 2));
console.log(`wrote ${articles.length} articles -> ${OUT}`);
if (r && r.missing && r.missing.length) console.log('MISSING:', r.missing.join(', '));
for (const a of articles) console.log(`  - ${a.articleId} (meta ${a.metaDescription ? a.metaDescription.length : '?'}c, ${a.sections ? a.sections.length : '?'} sections)`);
