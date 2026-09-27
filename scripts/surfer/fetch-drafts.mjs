// Fetches every Surfer Content Editor in the NQR workspace, maps each local
// keyword to its live URL, and caches the draft HTML under .cache/surfer/.
// Usage: node scripts/surfer/fetch-drafts.mjs   (needs SURFER_API_KEY)
import fs from 'node:fs'
import path from 'node:path'

const WS = 1356663
const KEY = process.env.SURFER_API_KEY
const BASE = `https://app.surferseo.com/api/v2/workspaces/${WS}`
const CACHE = '.cache/surfer'
const SITE = 'https://newarkqualityroofing.com'
const CITIES = ['east orange', 'west orange', 'orange', 'montclair', 'bloomfield', 'belleville', 'nutley', 'irvington', 'newark']
// Owner: never touch these pages.
const EXCLUDE_EDITORS = new Set([16360920 /* roof repair newark nj */, 16743306 /* "spray form" typo */])
// City-less (national) editors published as guide articles at /{slug}. Hand-mapped:
// each row carries the article's parent money page + knowledge-base cluster.
const ARTICLES = new Map(JSON.parse(fs.readFileSync('scripts/surfer/articles.json', 'utf8')).map((a) => [a.editorId, a]))

const get = async (p) => {
  const r = await fetch(BASE + p, { headers: { 'API-KEY': KEY } })
  if (!r.ok) throw new Error(`${r.status} ${p}`)
  return p.includes('/content?') ? r.text() : r.json()
}

async function listEditors() {
  const out = []
  // Default window = last 90 days, which holds every editor except the
  // excluded roof-repair one (2026-07-11).
  for (let page = 1; ; page++) {
    const j = await get(`/content_editors?page=${page}&page_size=100`)
    out.push(...j.data)
    if (page >= (j.meta.total_pages || 0)) break
  }
  return out
}

async function liveUrls() {
  const set = new Set(['/'])
  for (const seg of ['services', 'combos', 'cities']) {
    const xml = await (await fetch(`${SITE}/sitemap/${seg}.xml`)).text()
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) set.add(m[1].replace(SITE, ''))
  }
  return set
}

const slugify = (s) => s.replace(/\band\b/g, ' ').trim().split(/\s+/).join('-')

function mapKeyword(kw) {
  const k = kw.toLowerCase().replace(/\s+/g, ' ').trim()
  const city = CITIES.find((c) => k.endsWith(` ${c} nj`))
  if (!city) return null
  let svc = k.slice(0, -(city.length + 4)).replace(/ in$/, '').trim()
  const citySlug = city.replace(' ', '-')
  if (svc === 'roofing contractors') {
    return city === 'newark'
      ? { slug: '/', type: 'home', svc, city }
      : { slug: `/roof-repair-and-installation-in-${citySlug}-nj`, type: 'city', svc, city }
  }
  let s = slugify(svc)
  if (s === 'energy-efficient-roofing') s = 'energy-efficient-roofing-solutions'
  return city === 'newark'
    ? { slug: `/${s}-in-newark-nj`, type: 'service', svc, city }
    : { slug: `/${s}-${citySlug}-nj`, type: 'combo', svc, city }
}

const editors = await listEditors()
const live = await liveUrls()
const manifest = []
const skipped = []
for (const e of editors) {
  if (e.state !== 'completed') { skipped.push([e.id, e.main_keyword, e.state]); continue }
  if (EXCLUDE_EDITORS.has(e.id)) { skipped.push([e.id, e.main_keyword, 'excluded']); continue }
  const art = ARTICLES.get(e.id)
  if (art) {
    // Not live yet (this run creates the page), so no live-URL assertion.
    const { editorId, ...rest } = art
    manifest.push({ editorId, keyword: e.main_keyword.replace(/\s+/g, ' ').trim(), score: e.content_score?.total, type: 'article', ...rest })
    continue
  }
  const m = mapKeyword(e.main_keyword)
  if (!m) { skipped.push([e.id, e.main_keyword, 'national/no-city']); continue }
  if (!live.has(m.slug)) throw new Error(`no live page for "${e.main_keyword}" -> ${m.slug}`)
  // Cross-check against the URL Surfer imported the draft from.
  const imported = (e.import_content_url || '').replace(SITE, '').replace(/\/$/, '') || '/'
  if (e.import_content_url && imported !== m.slug) console.warn(`MISMATCH ${e.id} "${e.main_keyword}": mapped ${m.slug}, imported ${imported}`)
  manifest.push({ editorId: e.id, keyword: e.main_keyword.replace(/\s+/g, ' ').trim(), score: e.content_score?.total, ...m })
}
const dup = manifest.map((m) => m.slug).filter((s, i, a) => a.indexOf(s) !== i)
if (dup.length) throw new Error('duplicate slugs: ' + dup.join(', '))

fs.mkdirSync(CACHE, { recursive: true })
for (const m of manifest) {
  const f = path.join(CACHE, `${m.editorId}.html`)
  if (!fs.existsSync(f)) fs.writeFileSync(f, await get(`/content_editors/${m.editorId}/content?format=html`))
}
manifest.sort((a, b) => a.slug.localeCompare(b.slug))
fs.writeFileSync('scripts/surfer/manifest.json', JSON.stringify(manifest, null, 2) + '\n')
console.log(`editors ${editors.length} | mapped ${manifest.length} | skipped ${skipped.length}`)
for (const t of ['home', 'service', 'city', 'combo', 'article']) console.log(t, manifest.filter((m) => m.type === t).length)
const missingArticles = [...ARTICLES.keys()].filter((id) => !manifest.some((m) => m.editorId === id))
if (missingArticles.length) throw new Error('articles.json editors not completed/found: ' + missingArticles.join(', '))
console.log('skipped (non-national):', skipped.filter((s) => s[2] !== 'national/no-city'))
