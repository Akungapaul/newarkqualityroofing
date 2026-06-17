import fs from 'fs';
const dir = 'src/data/combo-content/belleville';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
const over = [];
const RE = /metaDescription:\s*(['"`])([\s\S]*?)\1\s*,/;
for (const f of files) {
  const t = fs.readFileSync(`${dir}/${f}`, 'utf8');
  const m = t.match(RE);
  if (!m) { console.log(`  NO metaDescription match: ${f}`); continue; }
  const val = m[2].replace(/\\(.)/g, '$1'); // unescape for true length
  if (val.length > 160) over.push({ f, len: val.length, val });
}
over.sort((a, b) => b.len - a.len);
console.log(`metaDescription >160: ${over.length} files`);
for (const o of over) console.log(`  ${o.len}  ${o.f}\n        "${o.val}"`);
