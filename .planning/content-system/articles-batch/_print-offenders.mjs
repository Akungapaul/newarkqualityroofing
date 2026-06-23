// Auto-detect every >40w answer-first lead in _authored.json and print its full
// current value + the exact over-limit span (boldSpan for directAnswer, firstSentence
// for section body[0]) + word count, so trims can be crafted precisely.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const HERE = dirname(fileURLToPath(import.meta.url));
const { articles } = JSON.parse(readFileSync(join(HERE, '_authored.json'), 'utf8'));
const LIMIT = 40;
const strip = (s) => s.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
const words = (s) => strip(s).split(' ').filter(Boolean).length;
const firstSentence = (s) => strip(s).split(/(?<=[.!?])\s/)[0] || strip(s);
const boldSpan = (s) => { const m = s.match(/\*\*([\s\S]*?)\*\*/); return m ? m[1].replace(/\s+/g, ' ').trim() : strip(s); };

for (const a of articles) {
  const offs = [];
  if (a.directAnswer && words(boldSpan(a.directAnswer)) > LIMIT) offs.push(['directAnswer', words(boldSpan(a.directAnswer)), boldSpan(a.directAnswer), a.directAnswer]);
  a.sections.forEach((s, i) => {
    const fs = firstSentence(s.body[0]);
    if (words(fs) > LIMIT) offs.push([`s${i}b0`, words(fs), fs, s.body[0]]);
  });
  if (!offs.length) continue;
  console.log(`\n################ ${a.articleId} ################`);
  for (const [field, wc, span, full] of offs) {
    console.log(`\n----- ${field} (${wc}w) -----`);
    console.log(`RAW: ${JSON.stringify(full)}`);
  }
}
