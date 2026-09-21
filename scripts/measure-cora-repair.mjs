/** Local measurements, not a replacement for Cora's proprietary parser. */
import fs from 'node:fs';
import { parse } from 'node-html-parser';
const dir = '.planning/seo/cora-2026-09-11';
const tables = JSON.parse(fs.readFileSync(`${dir}/extracted-terms.json`, 'utf8'));
const variations = JSON.parse(fs.readFileSync(`${dir}/variations.json`, 'utf8'));
const normalize = (s) => s.toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9'-]+/g, ' ').trim();
const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const matchCount = (s, term) => [...normalize(s).matchAll(new RegExp(`(?<![a-z0-9'-])${escape(normalize(term))}(?![a-z0-9'-])`, 'g'))].length;
const visible = (root) => parse(root.toString().replace(/<[^>]*>/g, ' ')).text.replace(/\s+/g, ' ').trim();
function metrics(html) {
  const root = parse(html);
  const jsonTypes = new Set();
  function walk(o) { if (!o || typeof o !== 'object') return; for (const [k,v] of Object.entries(o)) { if(k==='@type') [v].flat().forEach(t=>jsonTypes.add(t)); else walk(v); } }
  root.querySelectorAll('script[type="application/ld+json"]').forEach(e=>walk(JSON.parse(e.text)));
  const includes = root.querySelectorAll('script[src],link[rel="stylesheet"]').length;
  const images = root.querySelectorAll('img').length;
  const title = root.querySelector('title').text;
  const description = root.querySelector('meta[name="description"]').getAttribute('content');
  const wholeH3 = root.querySelectorAll('h3').filter(e=>variations.includes(normalize(e.text))).map(e=>e.text);
  const counts = {};
  for (const tag of ['aside','span','fieldset']) counts[tag] = root.querySelectorAll(tag).reduce((sum,e)=>sum+variations.reduce((s,v)=>s+matchCount(visible(e),v),0),0);
  counts.ids = root.querySelectorAll('[id]').reduce((sum,e)=>sum+variations.reduce((s,v)=>s+matchCount(e.id.replace(/-/g,' '),v),0),0);
  root.querySelectorAll('script,style').forEach(e=>e.remove());
  const text=visible(root);
  const p=root.querySelectorAll('p').map(visible).filter(s=>normalize(s).split(' ').length>=4);
  const segmenter=new Intl.Segmenter('en',{granularity:'sentence'});
  const sentences=p.flatMap(text=>Array.from(segmenter.segment(text),s=>s.segment));
  const words=sentences.reduce((sum,s)=>sum+normalize(s).split(' ').filter(Boolean).length,0);
  const sentenceText=sentences.join(' ');
  const lsa={};
  for(let n=1;n<=4;n++) {
    const entries=[...new Set(tables[`lsa${n}`].map(r=>normalize(r[0])))];
    const hits=entries.map(term=>({term,count:matchCount(sentenceText,term)})).filter(x=>x.count);
    lsa[n]={occurrences:hits.reduce((s,h)=>s+h.count,0),unique:hits.length,hits};
  }
  // A transparent local clean-text approximation: longest non-overlapping variation matches.
  const body=normalize(sentenceText);const regex=new RegExp(`(?<![a-z0-9'-])(?:${[...variations].sort((a,b)=>b.length-a.length).map(v=>escape(normalize(v))).join('|')})(?![a-z0-9'-])`,'g');
  const matchedWords=[...body.matchAll(regex)].reduce((s,m)=>s+m[0].split(' ').length,0);
  return {title,titleLength:title.length,description,descriptionLength:description.length,images,includes,jsonTypes:[...jsonTypes].sort(),wholeH3,counts,paragraphSentences:sentences.length,paragraphWords:words,averageWordsPerSentence:words/sentences.length,cleanVariationDensity:100*matchedWords/words,lsa};
}
const before=metrics(fs.readFileSync(`${dir}/before-expanded-implementation.html`,'utf8'));
const response=await fetch('http://localhost:3100/roof-repair-in-newark-nj');
if(!response.ok)throw new Error(`Preview HTTP ${response.status}`);
const html=await response.text();fs.writeFileSync(`${dir}/expanded-local.html`,html);const after=metrics(html);
const lsaDelta={};for(let n=1;n<=4;n++){const existing=new Set(before.lsa[n].hits.map(x=>x.term));lsaDelta[n]={additionalOccurrences:after.lsa[n].occurrences-before.lsa[n].occurrences,newEntries:after.lsa[n].hits.filter(x=>!existing.has(x.term))};}
const report={method:'Local exact normalized whole-term matching, grouped by source table. Overlapping entries in different tables count separately. Sentence metrics use rendered paragraph text and Intl.Segmenter. Cora rerun required for its own scores.',before,after,lsaDelta};fs.writeFileSync(`${dir}/expanded-measurements.json`,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({before:{...before,lsa:undefined},after:{...after,lsa:undefined},lsaDelta:Object.fromEntries(Object.entries(lsaDelta).map(([k,v])=>[k,{additionalOccurrences:v.additionalOccurrences,newEntries:v.newEntries.length}]))},null,2));
