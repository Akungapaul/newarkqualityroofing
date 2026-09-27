import fs from 'node:fs'
import { parse } from 'node-html-parser'
const man = JSON.parse(fs.readFileSync('scripts/surfer/manifest.json','utf8'))
const W = (s) => s.replace(/ /g,' ').replace(/\*\*/g,'').split(/\s+/).filter(Boolean)
// Inline runs join with no separator (they are one text flow); blocks join with a space.
const runs = (r) => r.map((x) => (x.t === 'text' ? x.v : runs(x.c))).join('')
const blockText = (b) => b.runs ? runs(b.runs) : b.items ? b.items.map((it) => it.map(runs).join(' ')).join(' ') : b.rows ? b.rows.map((row) => row.map(runs).join(' ')).join(' ') : ''
const plain = (page) => [
  ...page.lead.map(runs),
  ...page.sections.flatMap((s) => [s.heading, ...(s.blocks || []).map(blockText), ...(s.faqs || []).flatMap((f) => [f.q, ...f.a.map(blockText)])]),
].join(' ')
let bad=0; const ratios=[]
for (const m of man) {
  const f = `src/data/surfer-verbatim/pages/${m.slug==='/'?'home':m.slug.slice(1)}.json`
  if (!fs.existsSync(f)) continue
  const src = parse(fs.readFileSync(`.cache/surfer/${m.editorId}.html`,'utf8'))
  src.querySelectorAll('h1').forEach(h=>h.remove())
  // Step-number badges (<li><p>1</p>…) duplicate the <ol> numbering and are dropped.
  src.querySelectorAll('li > p:first-child').forEach(p=>{ if(/^\d+$/.test(p.text.trim()) && p.parentNode.querySelectorAll('p').length>1) p.remove() })
  // Word-level text of each block, so adjacent blocks don't fuse words.
  const srcW = W(src.querySelectorAll('h2,h3,h4,h5,h6,p,li,td,th,blockquote').filter(n=>!n.querySelector('p')).map(n=>n.text).join(' '))
  const outW = W(plain(JSON.parse(fs.readFileSync(f,'utf8'))))
  // out must be an in-order subsequence of src
  let i=0; for (const w of outW) { while (i<srcW.length && srcW[i]!==w) i++; if (i===srcW.length) { bad++; console.log('NOT SUBSEQ', m.slug, 'at', w); break } i++ }
  ratios.push([outW.length/srcW.length, m.slug, outW.length, srcW.length])
}
ratios.sort((a,b)=>a[0]-b[0])
console.log('bad', bad); console.log('lowest kept ratio:', ratios.slice(0,8).map(r=>`${r[1]} ${(r[0]*100|0)}% (${r[2]}/${r[3]})`).join('\n'))
console.log('median', (ratios[ratios.length>>1][0]*100|0)+'%')
