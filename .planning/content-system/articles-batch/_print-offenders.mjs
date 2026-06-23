// Print the FULL current value of each >40w offending field so trims can be crafted as exact Edits.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const HERE = dirname(fileURLToPath(import.meta.url));
const { articles } = JSON.parse(readFileSync(join(HERE, '_authored.json'), 'utf8'));
const strip = (s) => s.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
const words = (s) => strip(s).split(' ').filter(Boolean).length;
const firstSentence = (s) => strip(s).split(/(?<=[.!?])\s/)[0] || strip(s);
const boldSpan = (s) => { const m = s.match(/\*\*([\s\S]*?)\*\*/); return m ? m[1].replace(/\s+/g, ' ').trim() : strip(s); };
const byId = new Map(articles.map((a) => [a.articleId, a]));
const OFF = [
  ['commercial-roof-installation-signs', 'directAnswer'],
  ['commercial-roof-installation-signs', 's0b0'],
  ['commercial-roof-installation-cost-guide', 's0b0'],
  ['commercial-roof-repair-cost-guide', 's2b0'],
  ['commercial-roof-repair-decision', 'directAnswer'],
  ['commercial-roof-replacement-cost-guide', 'directAnswer'],
  ['commercial-roof-replacement-cost-guide', 's0b0'],
  ['roof-thermal-imaging-inspections-decision', 's1b0'],
  ['infrared-roof-leak-detection-decision', 'directAnswer'],
];
for (const [id, field] of OFF) {
  const a = byId.get(id);
  let val, wc;
  if (field === 'directAnswer') { val = a.directAnswer; wc = words(boldSpan(val)); }
  else { const i = +field[1]; val = a.sections[i].body[0]; wc = words(firstSentence(val)); }
  console.log(`\n===== ${id} :: ${field}  (${wc}w over) =====`);
  console.log(val);
}
