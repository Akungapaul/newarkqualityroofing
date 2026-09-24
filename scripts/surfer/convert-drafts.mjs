// Converts cached Surfer draft HTML (.cache/surfer/{editorId}.html, written by
// fetch-drafts.mjs) into the page JSON the site renders verbatim.
//
// Verbatim contract: prose text is never rewritten. The converter only DROPS
// blocks the page template already renders (H1, images, phone/CTA stubs,
// link-only navigation blocks, related-links / guides / compare / schedule
// sections) and unlinks anchors whose target is not a live URL. Every drop and
// unlink is written to the sync report.
//
// Usage: node scripts/surfer/convert-drafts.mjs
import fs from 'node:fs'
import path from 'node:path'
import { parse } from 'node-html-parser'

const SITE = 'https://newarkqualityroofing.com'
const OUT = 'src/data/surfer-verbatim/pages'
const REPORT = '.planning/seo/surfer-verbatim-sync-2026-09-24.md'
const manifest = JSON.parse(fs.readFileSync('scripts/surfer/manifest.json', 'utf8'))
// Owner-requested new meta description per page (written from each page's own copy).
const METAS = JSON.parse(fs.readFileSync('scripts/surfer/meta-descriptions.json', 'utf8'))

// Editors whose draft does not match its page (reported, not synced).
const HOLD = {
  16740559: 'draft was imported from /storm-damage-roof-repair-in-newark-nj — every H2 is storm-damage copy',
}

// H2 sections the template already renders (links, guides, CTAs).
const DROP_H2 = [
  /^Related Roofing Services/i, /Guides That Explain/i, /^Compare Your Roofing Options/i,
  /^Schedule /i, /^Request (a )?Free/i, /^Find Us/i, /Nearby Towns/i,
  /Recent Roofing Projects/i, /How Different Roofing Options Compare/i, /Knowledge Base/i,
  /^Roofing Guides/i, /^More Roofing Services/i, /^Roofing Service Area/i,
  /Customers Say/i, /^Popular Roofing Services in Each/i, /Pages to Explore/i,
]
const FAQ_H2 = /FAQ/i

const CITY_NAMES = { newark: 'Newark', 'east orange': 'East Orange', orange: 'Orange', 'west orange': 'West Orange', montclair: 'Montclair', bloomfield: 'Bloomfield', belleville: 'Belleville', nutley: 'Nutley', irvington: 'Irvington' }
const ACRONYMS = { epdm: 'EPDM', tpo: 'TPO', pvc: 'PVC' }
const SMALL = new Set(['and', 'in', 'of', 'for'])

// ─── Live URL set (for link validation) ─────────────────────────────────────
async function liveUrls() {
  const set = new Set(['/'])
  const idx = await (await fetch(`${SITE}/sitemap.xml`)).text()
  for (const [, seg] of idx.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const xml = await (await fetch(seg)).text()
    for (const [, u] of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) set.add(u.replace(SITE, '') || '/')
  }
  return set
}

// Internal targets outside the sitemaps (hubs, noindexed pages) count as live
// when production answers 200 without redirecting. Pre-resolved in main().
const statusCache = new Map()
const isLive = (href, live) => live.has(href) || statusCache.get(href) === 200
async function resolveStatuses(hrefs) {
  for (const h of hrefs) {
    if (statusCache.has(h)) continue
    const r = await fetch(SITE + h, { method: 'HEAD', redirect: 'manual' })
    statusCache.set(h, r.status)
  }
}

// ─── Inline model: [{t:'text',v} | {t:'b'|'i'|'u',c:[...]} | {t:'a',href,c:[...]}] ──
function inline(node, ctx) {
  const out = []
  for (const n of node.childNodes) {
    if (n.nodeType === 3) {
      const v = n.text.replace(/ /g, ' ')
      if (v) out.push({ t: 'text', v })
      continue
    }
    const tag = (n.rawTagName || '').toLowerCase()
    if (tag === 'br') { out.push({ t: 'text', v: ' ' }); continue }
    if (tag === 'img') continue
    const c = inline(n, ctx)
    if (tag === 'strong' || tag === 'b') out.push({ t: 'b', c })
    else if (tag === 'em' || tag === 'i') out.push({ t: 'i', c })
    else if (tag === 'u') out.push({ t: 'u', c })
    else if (tag === 'a') {
      let href = n.getAttribute('href') || ''
      if (href.startsWith(SITE)) href = href.slice(SITE.length).replace(/\/$/, '') || '/'
      if (href.startsWith('/') && !isLive(href.split('#')[0], ctx.live)) {
        ctx.log.unlinked.push(`${plain(c)} → ${href}`)
        out.push(...c)
      } else out.push({ t: 'a', href, c })
    } else out.push(...c)
  }
  return out
}
const plain = (runs) => runs.map((r) => (r.t === 'text' ? r.v : plain(r.c))).join('')
const wordCount = (s) => (s.trim().match(/\S+/g) || []).length
const linkText = (runs) => runs.map((r) => (r.t === 'a' ? plain(r.c) : r.t === 'text' ? '' : linkText(r.c))).join('')

function trimRuns(runs) {
  // Collapse whitespace at the edges only; interior text untouched.
  const r = structuredClone(runs)
  const first = r.find((x) => x.t === 'text'); const last = [...r].reverse().find((x) => x.t === 'text')
  if (first && r[0] === first) first.v = first.v.replace(/^\s+/, '')
  if (last && r[r.length - 1] === last) last.v = last.v.replace(/\s+$/, '')
  return r.filter((x) => x.t !== 'text' || x.v)
}

const hasTel = (n) => n.querySelectorAll('a').some((a) => (a.getAttribute('href') || '').startsWith('tel:'))
/** A paragraph that is only navigation: ≥2 links carrying ≥80% of its text. */
const isLinkOnly = (runs) => {
  const txt = plain(runs).trim(); const lt = linkText(runs).trim()
  const links = JSON.stringify(runs).split('"t":"a"').length - 1
  return txt && links >= 2 && lt.length / txt.length >= 0.8
}

// ─── Block conversion ───────────────────────────────────────────────────────
function blocksFrom(nodes, ctx) {
  const blocks = []
  for (const n of nodes) {
    const tag = (n.rawTagName || '').toLowerCase()
    if (!tag || tag === 'img') continue
    if (hasTel(n)) {
      // A short CTA box with a phone number is template chrome and goes
      // entirely. A substantive paragraph (a price or 40+ words) stays as
      // written, phone number included.
      const rest = n.text.replace(/\s+/g, ' ').trim()
      if (tag !== 'p' || !(rest.includes('$') || wordCount(rest) >= 40)) {
        ctx.log.dropped.push(`phone line: "${rest.slice(0, 90)}"`); dropCtaStub(blocks, ctx); continue
      }
    }
    if (tag === 'p' || tag === 'blockquote') {
      const runs = trimRuns(inline(n, ctx))
      if (!plain(runs).trim()) continue
      if (isLinkOnly(runs)) { ctx.log.dropped.push(`link-only nav: "${plain(runs).slice(0, 90)}"`); continue }
      blocks.push({ t: 'p', runs })
    } else if (tag === 'ul' || tag === 'ol') {
      // An item is a list of paragraphs: step lists carry [number badge, title,
      // body] as separate <p>s. The number badge duplicates the <ol> numbering.
      const items = n.querySelectorAll(':scope > li').map((li) => {
        const ps = li.childNodes.filter((c) => (c.rawTagName || '').toLowerCase() === 'p')
        const paras = (ps.length ? ps : [li]).map((c) => trimRuns(inline(c, ctx))).filter((r) => plain(r).trim())
        return paras.filter((r, k) => !(k === 0 && paras.length > 1 && /^\d+$/.test(plain(r).trim())))
      }).filter((paras) => paras.length)
      if (!items.length) continue
      if (items.every((paras) => paras.every((r) => isLinkOnly(r) || linkText(r).trim() === plain(r).trim()))) {
        ctx.log.dropped.push(`link-only list (${items.length} items)`); continue
      }
      blocks.push({ t: tag, items })
    } else if (/^h[3-6]$/.test(tag)) {
      blocks.push({ t: tag === 'h3' ? 'h3' : 'h4', runs: trimRuns(inline(n, ctx)) })
    } else if (tag === 'table') {
      const rows = n.querySelectorAll('tr').map((tr) => tr.querySelectorAll('th,td').map((c) => trimRuns(inline(c, ctx))))
      blocks.push({ t: 'table', rows })
    } else {
      const runs = trimRuns(inline(n, ctx))
      if (plain(runs).trim()) blocks.push({ t: 'p', runs })
    }
  }
  // Headings left with no prose under them (their links were nav) are chrome too.
  return blocks.filter((b, i) => !(b.t === 'h3' || b.t === 'h4') || (blocks[i + 1] && blocks[i + 1].t !== 'h3' && blocks[i + 1].t !== 'h4'))
}

/** The mid-page CTA box: up to 3 short, unbolded lines directly above a phone line. */
function dropCtaStub(blocks, ctx) {
  for (let k = 0; k < 3; k++) {
    const b = blocks[blocks.length - 1]
    if (!b || b.t !== 'p' || wordCount(plain(b.runs)) > 16 || b.runs.some((r) => r.t === 'b')) return
    ctx.log.dropped.push(`CTA stub: "${plain(b.runs)}"`)
    blocks.pop()
  }
}

function faqsFrom(nodes, ctx) {
  const faqs = []
  for (const n of nodes) {
    const tag = (n.rawTagName || '').toLowerCase()
    if (tag === 'h3' || tag === 'h4') faqs.push({ q: plain(trimRuns(inline(n, ctx))).trim(), a: [] })
    else if (faqs.length) faqs[faqs.length - 1].a.push(...blocksFrom([n], ctx))
  }
  return faqs.filter((f) => f.q && f.a.length)
}

// ─── Keyword / H1 / first-sentence ──────────────────────────────────────────
const titleCase = (s) => s.split(' ').map((w, i) => ACRONYMS[w] || (i && SMALL.has(w) ? w : w[0].toUpperCase() + w.slice(1))).join(' ')

function keywordFor(m) {
  const city = CITY_NAMES[m.city]
  if (m.type === 'home') return { phrase: 'roofing contractors', city, h1: 'Roofing Contractors Newark, NJ' }
  if (m.type === 'city') return { phrase: 'roof repair and installation', city, h1: `Roof Repair and Installation ${city}, NJ` }
  return { phrase: m.svc, city, h1: `${titleCase(m.svc)} ${city}, NJ` }
}

// The first-sentence check runs at render time (src/lib/surfer-verbatim.ts), where
// the template's existing hero lead is available for pages whose draft has none.
function leadSentence(m, kw) {
  const phrase = kw.phrase.split(' ').map((w) => ACRONYMS[w] || w).join(' ')
  if (m.type === 'home') return `Newark Quality Roofing is a team of roofing contractors in ${kw.city}, NJ.`
  return `Newark Quality Roofing provides ${phrase} in ${kw.city}, NJ.`
}

// ─── Claims to flag once (verbatim rule: report, never edit) ────────────────
const CLAIMS = [/licensed/i, /GAF[- ]certified/i, /\b\d+\+? years/i, /24\/7/i, /same[- ]day/i, /\d+[-–]\d+ hours?/i, /guarantee/i, /\bbest\b/i, /#1|number one/i, /financing/i]

// ─── Main ───────────────────────────────────────────────────────────────────
const live = await liveUrls()
{
  const hrefs = new Set()
  for (const m of manifest) {
    for (const [, h] of fs.readFileSync(`.cache/surfer/${m.editorId}.html`, 'utf8').matchAll(/href="(?:https:\/\/newarkqualityroofing\.com)?(\/[^"#]*)/g)) {
      const u = h.replace(/\/$/, '') || '/'
      if (!live.has(u)) hrefs.add(u)
    }
  }
  await resolveStatuses(hrefs)
}
fs.rmSync(OUT, { recursive: true, force: true })
fs.mkdirSync(OUT, { recursive: true })
const report = []
const written = []

for (const m of manifest) {
  if (HOLD[m.editorId]) { report.push({ m, held: HOLD[m.editorId] }); continue }
  const root = parse(fs.readFileSync(`.cache/surfer/${m.editorId}.html`, 'utf8'))
  const log = { dropped: [], unlinked: [], claims: [] }
  const ctx = { live, log }

  // Split top-level nodes into [pre-H2] + H2 sections.
  const groups = [{ heading: null, nodes: [] }]
  for (const n of root.childNodes) {
    const tag = (n.rawTagName || '').toLowerCase()
    if (tag === 'h1') continue
    if (tag === 'h2') groups.push({ heading: n.text.replace(/ /g, ' ').trim(), nodes: [] })
    else groups[groups.length - 1].nodes.push(n)
  }

  const kw = keywordFor(m)
  const sections = []
  for (const g of groups.slice(1)) {
    if (DROP_H2.some((re) => re.test(g.heading))) { log.dropped.push(`section: "${g.heading}"`); continue }
    if (FAQ_H2.test(g.heading)) {
      const faqs = faqsFrom(g.nodes, ctx)
      if (faqs.length) sections.push({ heading: g.heading, faqs })
      continue
    }
    const blocks = blocksFrom(g.nodes, ctx)
    if (blocks.some((b) => b.t !== 'h3' && b.t !== 'h4')) sections.push({ heading: g.heading, blocks })
    else log.dropped.push(`empty-after-strip section: "${g.heading}"`)
  }

  // Pre-H2 prose becomes the hero lead (it IS the hero copy Surfer imported).
  // The homepage draft's pre-H2 block is hero chrome (badges, buttons), so the
  // template hero is kept there.
  let lead = m.type === 'home' ? [] : blocksFrom(groups[0].nodes, ctx).filter((b) => b.t === 'p')
  if (m.type === 'home') log.dropped.push('homepage pre-H2 hero chrome (template hero kept)')

  for (const re of CLAIMS) {
    const hits = plainAll({ lead, sections }).match(new RegExp(`[^.]*${re.source}[^.]*\\.?`, 'gi'))
    if (hits) log.claims.push(...hits.slice(0, 3).map((h) => h.trim().slice(0, 160)))
  }

  const page = {
    slug: m.slug, editorId: m.editorId, keyword: m.keyword, type: m.type,
    h1: kw.h1, leadPhrase: kw.phrase, city: kw.city, leadFallback: leadSentence(m, kw),
    lead: lead.map((b) => b.runs), sections,
    metaDescription: METAS[m.slug],
  }
  if (!page.metaDescription) throw new Error(`no meta description for ${m.slug}`)
  fs.writeFileSync(path.join(OUT, `${fileKey(m.slug)}.json`), JSON.stringify(page) + '\n')
  written.push(m)
  report.push({ m, kw, log, sectionCount: sections.length })
}

function plainAll(x) {
  if (Array.isArray(x)) return x.map(plainAll).join(' ')
  if (x && typeof x === 'object') {
    if (x.t === 'text') return x.v
    return Object.entries(x).filter(([k]) => !['href', 'slug', 't', 'type'].includes(k)).map(([, v]) => plainAll(v)).join(' ')
  }
  return typeof x === 'string' ? x : ''
}
function fileKey(slug) { return slug === '/' ? 'home' : slug.slice(1) }

// Generated static index (no fs at runtime).
const idx = [
  '// GENERATED by scripts/surfer/convert-drafts.mjs — do not edit by hand.',
  "import type { SurferPage } from './types'",
  ...written.map((m, i) => `import p${i} from './pages/${fileKey(m.slug)}.json'`),
  '',
  'export const SURFER_PAGES: Record<string, SurferPage> = {',
  ...written.map((m, i) => `  ${JSON.stringify(m.slug)}: p${i} as SurferPage,`),
  '}',
  '',
]
fs.writeFileSync('src/data/surfer-verbatim/generated-index.ts', idx.join('\n'))

// Report.
const md = [
  '# Surfer verbatim sync — 2026-09-24', '',
  `Synced ${written.length} pages; held ${report.filter((r) => r.held).length}. Source: Surfer workspace 1356663.`,
  'Verbatim contract: prose is unedited. Listed below per page: template-duplicated blocks dropped, anchors unlinked (target not a live URL), and claims flagged for owner review (shipped as written).', '',
  '## Held (not synced)', '',
  ...report.filter((r) => r.held).map((r) => `- \`${r.m.slug}\` (editor ${r.m.editorId}, "${r.m.keyword}"): ${r.held}`), '',
  '## Pages', '',
]
for (const r of report.filter((x) => !x.held)) {
  md.push(`### \`${r.m.slug}\``, '', `- Editor ${r.m.editorId} · "${r.m.keyword}" · H1/title: **${r.kw.h1}** · ${r.sectionCount} sections`)
  if (r.log.dropped.length) md.push(`- Dropped (template renders these): ${r.log.dropped.map((d) => `\n  - ${d}`).join('')}`)
  if (r.log.unlinked.length) md.push(`- Unlinked (not a live URL): ${r.log.unlinked.map((d) => `\n  - ${d}`).join('')}`)
  if (r.log.claims.length) md.push(`- Claims flagged: ${[...new Set(r.log.claims)].map((d) => `\n  - "${d}"`).join('')}`)
  md.push('')
}
fs.writeFileSync(REPORT, md.join('\n'))
console.log(`wrote ${written.length} pages, held ${report.filter((r) => r.held).length}; report → ${REPORT}`)
