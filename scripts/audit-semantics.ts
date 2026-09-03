/**
 * Semantic Content Ruleset Audit — tiered enforcement (NQR-SEMANTIC-CONTENT-RULESET.md).
 *
 * Companion to audit-headings.ts. Where audit-headings enforces the heading
 * POLICY (question form, hierarchy), this enforces the PROSE rules of the
 * answer-first semantic ruleset, in two tiers:
 *
 *   GATE (build-failing, process.exit(1)):
 *     - Rule 6  modality: will/should/need to/needs to/have to/has to/must/ought to/shall
 *               in BODY prose only (FAQ `question:` and `*heading*` fields excluded).
 *     - Rule 9  outbound links: https?:// or markdown ](http…) or <a href> in any content.
 *               EXCEPT scoped allowlisted HTTPS citations — see OUTBOUND_EXEMPT.
 *               Exempted links are echoed as advisory, never silently dropped.
 *     - Rule 10 [VERIFY]/[UNVERIFIED] leaks in any content/meta string.
 *     - Rule 10 de-fabrication literals (24/7, same-day, GAF Certified, Master Elite,
 *               0% financing, top-rated, 500+, fake NAP) in content AND metaTitle/metaDescription.
 *     - rich-text marker leaks in prerendered HTML (parser failed): `**` tested
 *               against markup, `[[`/`{{` against tag-stripped text.
 *
 *   ADVISORY (report only, never fails the build):
 *     - Rule 14 sentiment/hype words.       - Rule 12 casual language / analogies.
 *     - Rule 13 entity-pronoun co-reference (count + sample; high false-positive rate).
 *     - Rule 8  plural-count mismatch (only the FP-safe "N nouns: a, b, c" inline pattern).
 *     - Rule 31 H2 question length (from heading-config).
 *     - Rule 23 generic/low-quality internal-link anchors.
 *     - Rule 39 internal-link micro-discipline — a RENDERED prose-link pass over a
 *               sampled set of prerendered pages (needs a build): in-body CONTEXTUAL
 *               link-count >15, anchor-text reuse >3×, a link opening its paragraph,
 *               and >1 link per heading section. Counts only <a href="/…"> inside a
 *               <p> outside nav/footer; entity grids & navigation lists are exempt.
 *
 * SCOPE (so a batch verifies only its own pages; default = everything):
 *   --types=services,cities,combos,articles,comparisons   (comma list; default all)
 *   --ids=roof-repair,roof-leak-repair                    (restrict to these content ids)
 *   --quiet                                               (suppress advisory detail)
 *
 * Dynamic imports per type keep scoped runs fast (a services-only run never loads
 * the 1,388 combo-content files).
 *
 * Run: tsx scripts/audit-semantics.ts            (npm run audit:semantics)
 *      tsx scripts/audit-semantics.ts --types=services --ids=roof-repair,...
 * The `**` rendered pass requires a prior `next build` (otherwise it is skipped).
 */

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { parse, type HTMLElement } from 'node-html-parser';
import { linkPolicy } from '@/lib/outbound-links';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PRERENDER_DIR = join(REPO_ROOT, '.next', 'server', 'app');

// ─── CLI ────────────────────────────────────────────────────────────────────

const ARGV = process.argv.slice(2);
function argVal(name: string): string | undefined {
  const hit = ARGV.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : undefined;
}
const ALL_TYPES = ['services', 'cities', 'combos', 'articles', 'comparisons', 'hubs'] as const;
type ContentType = (typeof ALL_TYPES)[number];
const TYPES: ContentType[] = (argVal('types')?.split(',').map((s) => s.trim()).filter(Boolean) as ContentType[]) ?? [
  ...ALL_TYPES,
];
const ID_FILTER = new Set((argVal('ids')?.split(',').map((s) => s.trim()).filter(Boolean)) ?? []);
const QUIET = ARGV.includes('--quiet');

// ─── Field classification ─────────────────────────────────────────────────────

const SKIP_KEYS = new Set([
  'slug', 'serviceId', 'cityId', 'comboId', 'id', 'category', 'categoryId', 'parentId',
  'cluster', 'clusterId', 'clusterSlug', 'icon', 'iconName', 'href', 'url', 'image',
  'imageUrl', 'imageAlt', 'imagePosition', 'ogImage', 'type', 'kind', 'ctaLabel', 'metaKeywords',
  'ctaText', 'cta', 'ariaLabel', 'layout', 'variant', 'color', 'theme', 'name', 'cityName',
]);
const META_KEYS = new Set(['metaTitle', 'metaDescription', 'title', 'seoTitle', 'ogTitle', 'ogDescription']);
const lastKey = (path: string) => path.replace(/\[\d+\]$/, '').split('.').pop() ?? path;
function classify(path: string): 'skip' | 'meta' | 'question' | 'heading' | 'body' {
  const k = lastKey(path);
  if (SKIP_KEYS.has(k)) return 'skip';
  if (META_KEYS.has(k)) return 'meta';
  if (k === 'question') return 'question';
  if (/heading|subheading/i.test(k)) return 'heading';
  return 'body';
}

// ─── String collector ─────────────────────────────────────────────────────────

interface Str { path: string; value: string }
function collectStrings(node: unknown, path: string, out: Str[]): void {
  if (typeof node === 'string') { out.push({ path, value: node }); return; }
  if (Array.isArray(node)) { node.forEach((v, i) => collectStrings(v, `${path}[${i}]`, out)); return; }
  if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) collectStrings(v, path ? `${path}.${k}` : k, out);
  }
}

// ─── Patterns ─────────────────────────────────────────────────────────────────

const MODALITY = /\b(will|shall|should|need to|needs to|have to|has to|must|ought to)\b/gi;
const OUTBOUND = /https?:\/\/|\]\(\s*https?:|<a\s+href=/i;
/** Markdown link with an absolute destination: captures the href in group 1. */
const MD_LINK = /\]\(\s*(https?:\/\/[^)\s]+)\s*\)/gi;

/**
 * R9 exemptions — scoped, allowlisted outbound citations.
 *
 * R9 bans outbound links. The owner ruled 2026-09-03 that the Cora on-page
 * report takes precedence, and Cora requires external citations. Rather than
 * delete the pattern (which would disable R9 on all 1,545 pages), each exemption
 * is narrowed on FOUR axes at once: page scope, field path, scheme, and host.
 *
 * The host allowlist is shared with the renderer via `@/lib/outbound-links`, so
 * the gate and what actually ships cannot drift.
 *
 * NOTE on the path regex: `collectStrings` emits array indices immediately after
 * the key (`sections[3].body[1]`), so the trailing class must be `[.\[]` — a
 * bare `\.` would match only `whyChooseUs` and silently let the rest through.
 */
const OUTBOUND_EXEMPT: Array<{ scope: RegExp; path: RegExp; confirmed: string }> = [
  {
    scope: /^service:roof-repair$/,
    path: /^(sections|processSteps|faqs|whyChooseUs)[.[]/,
    confirmed: '2026-09-03',
  },
];

/** Links exempted this run — echoed as advisory so they stay visible. */
const exemptedOutbound: string[] = [];

function isOutboundExempt(scope: string, path: string, href: string): boolean {
  if (!/^https:\/\//i.test(href)) return false;          // http:// never exempt
  if (linkPolicy(href) === 'reject') return false;        // host must be allowlisted
  return OUTBOUND_EXEMPT.some((e) => e.scope.test(scope) && e.path.test(path));
}
const VERIFY = /\[(?:VERIFY|UNVERIFIED)\]/i;
const DEFAB: Array<[string, RegExp]> = [
  ['24/7', /\b24\s*\/\s*7\b|\b24-7\b/i],
  ['same-day', /same[-\s]day/i],
  ['GAF Certified', /\bGAF[-\s]?certified\b/i],
  ['Master Elite', /\bmaster[-\s]elite\b/i],
  ['0% financing', /\b0\s*%?\s*(?:percent\s*)?financing\b/i],
  ['top-rated', /\btop[-\s]rated\b/i],
  // NQR tenure claim ("15+ years of experience") — NOT material lifespans ("tile lasts 75+ years")
  ['N+ experience claim', /\b\d+\+\s*years?\s+(?:of\s+)?(?:experience|in business|in the (?:roofing\s+)?(?:business|industry)|serving)/i],
  // trust-count claims ("500+ projects/roofs/reviews") — NOT prices ("$1,000+") or lifespans
  ['N+ count claim', /\b\d+\+\s*(?:projects?|roofs?|homes?|homeowners?|jobs?|customers?|clients?|installs?|installations?|reviews?|five[-\s]star)\b/i],
  ['fake NAP', /123\s+main\s+st|\(973\)\s*555-0123/i],
];

/**
 * R10 exemptions — narrowly scoped, owner-confirmed TRUE claims.
 *
 * R10 is the DE-FABRICATION rule: it exists to catch invented marketing claims.
 * A claim the owner has confirmed is literally true is a false positive, not a
 * content defect. Exempt it HERE rather than removing the pattern from DEFAB —
 * removing the pattern would disable the check for every future page.
 *
 * Rewording to evade the regex is explicitly NOT the remedy: "round-the-clock"
 * and "within one business day" assert the same thing while reading as a weaker
 * commitment than the business actually offers.
 *
 * Each entry records WHAT is exempt, WHERE, and WHEN it was confirmed.
 */
const DEFAB_EXEMPT: Array<{ scope: RegExp; path: RegExp; labels: string[]; confirmed: string }> = [
  {
    // Owner-confirmed 2026-09-03: NQR does run same-day estimates and 24/7
    // emergency response. Same claims appear in Footer.tsx, ContactPage.tsx and
    // seo-utils.ts, which this audit does not scan — they are consistent.
    scope: /^service:roof-repair$/,
    path: /^whyChooseUs\.reasons\[5\]\./,
    labels: ['24/7', 'same-day'],
    confirmed: '2026-09-03',
  },
];

function isDefabExempt(scope: string, path: string, label: string): boolean {
  return DEFAB_EXEMPT.some(
    (e) => e.labels.includes(label) && e.scope.test(scope) && e.path.test(path)
  );
}
const SENTIMENT = /\b(best|amazing|trusted|leading|premier|top[-\s]rated|unbeatable|world[-\s]class|stunning|incredible|exceptional|renowned|cutting[-\s]edge|game[-\s]changing|top\s+roofers)\b/gi;
const CASUAL = /\b(basically|a ton of|at the end of the day|when it comes to|kind of|pretty much|you guys)\b|\b(?:like|as if) a\b|\bimagine\b/gi;
// High-signal entity pronouns only. "this/that/these/those/there" are excluded —
// they are overwhelmingly relativizers/determiners ("the work that fixes…",
// "these systems"), not entity co-references, and swamp the report with FPs.
const PRONOUN = /\b(it|its|they|them|their)\b/gi;
const GENERIC_ANCHOR = /^\s*(click here|here|this|this page|learn more|read more|more|link)\s*$/i;
const INTERNAL_LINK = /\[([^\]]+)\]\((\/[^)]+)\)/g;
const COUNTED_LIST = /\b(\d{1,2})\s+([a-z][a-z-]+s)\s*:\s*([^.]+?)\./i; // "3 materials: a, b, c."

// ─── Violations ───────────────────────────────────────────────────────────────

interface V { tier: 'GATE' | 'ADVISORY'; rule: string; scope: string; path: string; detail: string }
const gate: V[] = [];
const advisory: V[] = [];
const push = (arr: V[], v: V) => arr.push(v);
const excerpt = (s: string, m: string) => {
  const i = s.toLowerCase().indexOf(m.toLowerCase());
  const start = Math.max(0, i - 25);
  return `…${s.slice(start, i + m.length + 25).replace(/\s+/g, ' ')}…`;
};

function auditObject(scope: string, obj: unknown): void {
  const strs: Str[] = [];
  collectStrings(obj, '', strs);
  for (const { path, value } of strs) {
    const kind = classify(path);
    if (kind === 'skip') continue;

    // ── checks that run on ALL non-skip strings (incl. meta/question/heading) ──
    if (VERIFY.test(value)) push(gate, { tier: 'GATE', rule: 'R10 [VERIFY] leak', scope, path, detail: excerpt(value, value.match(VERIFY)![0]) });
    // ── R9 outbound links, with a scoped allowlist ───────────────────────────
    // Exempt markdown links to allowlisted HTTPS citation hosts in permitted
    // field paths. Each exempted link is REMOVED from a working copy and the
    // remainder is still gated, so one allowlisted citation beside one rogue
    // URL still fails. `<a href=` and any `http://` are never exempted.
    let residue = value;
    for (const m of value.matchAll(MD_LINK)) {
      if (isOutboundExempt(scope, path, m[1])) {
        exemptedOutbound.push(`${scope} ${path} → ${m[1]}`);
        residue = residue.replace(m[0], '');
      }
    }
    if (OUTBOUND.test(residue)) push(gate, { tier: 'GATE', rule: 'R9 outbound link', scope, path, detail: excerpt(residue, residue.match(OUTBOUND)![0]) });
    for (const [label, re] of DEFAB) {
      if (isDefabExempt(scope, path, label)) continue;
      const m = value.match(re);
      if (m) push(gate, { tier: 'GATE', rule: `R10 de-fab "${label}"`, scope, path, detail: excerpt(value, m[0]) });
    }

    // ── BODY-only checks ──────────────────────────────────────────────────────
    if (kind !== 'body') continue;

    let m: RegExpMatchArray | null;
    if ((m = value.match(MODALITY))) {
      push(gate, { tier: 'GATE', rule: `R6 modality "${[...new Set(m.map((x) => x.toLowerCase()))].join('/')}"`, scope, path, detail: excerpt(value, m[0]) });
    }
    // advisory
    const sent = value.match(SENTIMENT);
    if (sent) push(advisory, { tier: 'ADVISORY', rule: `R14 sentiment "${[...new Set(sent.map((x) => x.toLowerCase()))].join('/')}"`, scope, path, detail: excerpt(value, sent[0]) });
    const cas = value.match(CASUAL);
    if (cas) push(advisory, { tier: 'ADVISORY', rule: `R12 casual/analogy "${cas[0]}"`, scope, path, detail: excerpt(value, cas[0]) });
    const pron = value.match(PRONOUN);
    if (pron) push(advisory, { tier: 'ADVISORY', rule: `R13 entity-pronoun (${pron.length}×)`, scope, path, detail: excerpt(value, pron[0]) });
    // plural-count, FP-safe inline pattern only
    const cl = value.match(COUNTED_LIST);
    if (cl) {
      const stated = Number(cl[1]);
      const items = cl[3].split(/,|;| and /).map((s) => s.trim()).filter(Boolean).length;
      if (stated !== items) push(advisory, { tier: 'ADVISORY', rule: `R8 plural-count (${stated} stated, ${items} listed)`, scope, path, detail: `${cl[1]} ${cl[2]}: ${cl[3].trim()}` });
    }
    // generic internal-link anchors
    let lm: RegExpExecArray | null;
    INTERNAL_LINK.lastIndex = 0;
    while ((lm = INTERNAL_LINK.exec(value))) {
      if (GENERIC_ANCHOR.test(lm[1])) push(advisory, { tier: 'ADVISORY', rule: 'R23 generic anchor', scope, path, detail: `[${lm[1]}](${lm[2]})` });
    }
  }
}

// ─── Rendered ** leak pass (gate) ─────────────────────────────────────────────

function renderedAsteriskPass(): { ran: boolean; files: string[] } {
  if (!existsSync(PRERENDER_DIR)) return { ran: false, files: [] };
  const htmls = readdirSync(PRERENDER_DIR).filter((f) => f.endsWith('.html'));
  if (htmls.length === 0) return { ran: false, files: [] };
  const leaks: string[] = [];
  for (const f of htmls) {
    let html = readFileSync(join(PRERENDER_DIR, f), 'utf8');
    html = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
    // `**` is safe to test against markup: it never appears in valid HTML.
    if (html.includes('**')) { leaks.push(f); continue; }
    // The other rich-text markers DO collide with markup and RSC payload, so
    // they are only meaningful once tags are stripped as well:
    //   `[[` appears in every file via self.__next_f.push([[ … ]])
    //   `__` appears in every file via __next_f / CSS-module hashes
    // Measured on a full build: raw `[[` matched 1527/1527 files, tag-stripped
    // matched 0/1527. Strip scripts (above) THEN tags before testing.
    const text = html.replace(/<[^>]+>/g, ' ');
    if (text.includes('[[') || text.includes('{{')) leaks.push(f);
  }
  return { ran: true, files: leaks };
}

// ─── Rendered internal-link pass (advisory — R39/R23) ─────────────────────────
//
// R39 internal-link micro-discipline is a RENDERED-HTML concern: the content
// data has no authored links yet (links are template-injected via next/link),
// so this parses prerendered pages — like audit-headings.ts — and reports
// in-body internal-link metrics. ALL findings are ADVISORY (never exit 1).
// NOTE: link counts on templated pages largely reflect the template (e.g. the
// city services grid), not authored content; treat as a signal, not a gate.

const MAX_BODY_LINKS = 15; // R39: ≤15 in-body contextual links per page
const MAX_ANCHOR_REUSE = 3; // R39: an anchor text repeats at most 3×

/** Is this element inside a nav/footer/header/aside/button/label region (tag OR role)? */
function inForbiddenRegion(el: HTMLElement): boolean {
  if (el.closest('nav,footer,header,aside,button,label')) return true;
  let cur: HTMLElement | null = el;
  while (cur) {
    const role = cur.getAttribute?.('role');
    if (role === 'navigation' || role === 'contentinfo' || role === 'banner') return true;
    cur = cur.parentNode as HTMLElement | null;
  }
  return false;
}

/** Pick a bounded, representative set of prerendered files to parse (templates are uniform). */
function pickLinkSampleFiles(): string[] {
  if (!existsSync(PRERENDER_DIR)) return [];
  const all = readdirSync(PRERENDER_DIR).filter((f) => f.endsWith('.html'));
  if (ID_FILTER.size) {
    const want = new Set<string>();
    for (const id of ID_FILTER) {
      want.add(`${id}.html`); // services / comparisons / combos / core
      want.add(`roofing-in-${id}-nj.html`); // cities
    }
    const hit = all.filter((f) => want.has(f));
    if (hit.length) return hit;
  }
  // No id match → a representative spread (known city/service/home first), capped.
  const preferred = [
    'roofing-in-livingston-nj.html', 'roofing-in-newark-nj.html',
    'roof-repair.html', 'roof-replacement.html', 'index.html',
  ];
  return [...new Set([...preferred.filter((f) => all.includes(f)), ...all])].slice(0, 40);
}

function renderedLinkPass(): { ran: boolean; files: string[] } {
  const files = pickLinkSampleFiles();
  if (files.length === 0) return { ran: false, files: [] };
  for (const f of files) {
    const root = parse(readFileSync(join(PRERENDER_DIR, f), 'utf8'));
    const scope = `rendered:${f}`;
    // CONTEXTUAL prose links only: an internal <a> inside a <p>, outside nav/footer.
    // Entity/navigation LISTS & GRIDS (the services grid, related-combos, nearby-cities)
    // are intentionally exempt — R39 allows a list of templatic-sibling entities to each
    // link its same-type page, so those are not "contextual" links and must not be counted.
    const bodyLinks = root.querySelectorAll('a').filter((a) => {
      const href = a.getAttribute('href') ?? '';
      if (!href.startsWith('/') || href.startsWith('//')) return false;
      if (inForbiddenRegion(a)) return false;
      return !!a.closest('p');
    });
    // R39 — link count ≤15
    if (bodyLinks.length > MAX_BODY_LINKS) {
      push(advisory, { tier: 'ADVISORY', rule: 'R39 link-count', scope, path: 'a[href^="/"]', detail: `${bodyLinks.length} in-body internal links (>${MAX_BODY_LINKS})` });
    }
    // R39 — anchor-text reuse ≤3
    const counts = new Map<string, number>();
    for (const a of bodyLinks) {
      const t = a.text.replace(/\s+/g, ' ').trim().toLowerCase();
      if (t) counts.set(t, (counts.get(t) ?? 0) + 1);
    }
    for (const [t, n] of counts) {
      if (n > MAX_ANCHOR_REUSE) push(advisory, { tier: 'ADVISORY', rule: 'R39 anchor-reuse', scope, path: 'a', detail: `"${t.slice(0, 40)}" reused ${n}× (>${MAX_ANCHOR_REUSE})` });
    }
    // R39 — no link as the first content node of its paragraph (best-effort)
    for (const a of bodyLinks) {
      const p = a.closest('p');
      if (!p) continue;
      const firstContent = p.childNodes.find((n) => n.nodeType === 1 || (n.nodeType === 3 && n.rawText.trim().length > 0));
      if (firstContent === a) push(advisory, { tier: 'ADVISORY', rule: 'R39 paragraph-opening anchor', scope, path: 'p>a', detail: `"${a.text.replace(/\s+/g, ' ').trim().slice(0, 40)}" opens its paragraph` });
    }
    // R39 — one link per heading section (best-effort: group by nearest preceding non-forbidden h2/h3)
    const ordered = root.querySelectorAll('h2,h3,a');
    let sectionLinks = 0;
    let sectionHeading = '(pre-heading)';
    const flushSection = () => {
      if (sectionLinks > 1) push(advisory, { tier: 'ADVISORY', rule: 'R39 multi-link section', scope, path: 'section', detail: `${sectionLinks} links under "${sectionHeading.slice(0, 50)}"` });
      sectionLinks = 0;
    };
    for (const el of ordered) {
      const tag = el.tagName?.toLowerCase();
      if ((tag === 'h2' || tag === 'h3') && !inForbiddenRegion(el)) {
        flushSection();
        sectionHeading = el.text.replace(/\s+/g, ' ').trim();
      } else if (tag === 'a') {
        const href = el.getAttribute('href') ?? '';
        if (href.startsWith('/') && !href.startsWith('//') && !inForbiddenRegion(el) && el.closest('p')) sectionLinks++;
      }
    }
    flushSection();
  }
  return { ran: true, files };
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  console.log('='.repeat(72));
  console.log('  SEMANTIC CONTENT RULESET AUDIT (tiered — gate + advisory)');
  console.log('='.repeat(72));
  console.log(`Scope: types=[${TYPES.join(',')}]${ID_FILTER.size ? ` ids=[${[...ID_FILTER].join(',')}]` : ' (all ids)'}`);
  console.log();

  const inScope = (id: string) => ID_FILTER.size === 0 || ID_FILTER.has(id);
  let audited = 0;

  if (TYPES.includes('services')) {
    const [{ getAllServiceContent }, { services }] = await Promise.all([import('@/data/service-content'), import('@/data/services')]);
    const metaById = new Map(services.map((s: { id: string; metaTitle?: string; metaDescription?: string }) => [s.id, s]));
    for (const c of getAllServiceContent()) {
      if (!inScope(c.serviceId)) continue;
      auditObject(`service:${c.serviceId}`, c);
      const meta = metaById.get(c.serviceId);
      if (meta) auditObject(`service:${c.serviceId}#meta`, { metaTitle: meta.metaTitle, metaDescription: meta.metaDescription });
      audited++;
    }
  }
  if (TYPES.includes('cities')) {
    const { getAllCityContent } = await import('@/data/city-content');
    for (const c of getAllCityContent()) {
      if (!inScope((c as { cityId: string }).cityId)) continue;
      auditObject(`city:${(c as { cityId: string }).cityId}`, c);
      audited++;
    }
  }
  if (TYPES.includes('combos')) {
    const { getAllComboContent } = await import('@/data/combo-content');
    for (const c of getAllComboContent()) {
      const key = `${(c as { serviceId: string }).serviceId}/${(c as { cityId: string }).cityId}`;
      if (ID_FILTER.size && !inScope((c as { serviceId: string }).serviceId) && !inScope((c as { cityId: string }).cityId)) continue;
      auditObject(`combo:${key}`, c);
      audited++;
    }
  }
  if (TYPES.includes('articles')) {
    const { getAllArticleContent } = await import('@/data/article-content');
    for (const c of getAllArticleContent()) {
      const id = (c as { articleId?: string; id?: string }).articleId ?? (c as { id?: string }).id ?? 'unknown';
      if (!inScope(id)) continue;
      auditObject(`article:${id}`, c);
      audited++;
    }
  }
  if (TYPES.includes('comparisons')) {
    const { getAllComparisonContent } = await import('@/data/comparison-content');
    for (const c of getAllComparisonContent()) {
      const id = (c as { comparisonId?: string; id?: string }).comparisonId ?? (c as { id?: string }).id ?? 'unknown';
      if (!inScope(id)) continue;
      auditObject(`comparison:${id}`, c);
      audited++;
    }
  }
  if (TYPES.includes('hubs')) {
    const { getAllHubContent } = await import('@/data/hub-content');
    for (const c of getAllHubContent()) {
      const id = (c as { hubId: string }).hubId;
      if (!inScope(id)) continue;
      auditObject(`hub:${id}`, c);
      audited++;
    }
  }

  // Rendered ** leak pass (only on full/default runs — needs a build).
  const ast = renderedAsteriskPass();
  for (const f of ast.files) push(gate, { tier: 'GATE', rule: '** render leak', scope: `rendered:${f}`, path: 'html', detail: 'literal "**" in prerendered HTML (markdown not parsed)' });

  // Rendered internal-link advisory pass (R39) — needs a build; ADVISORY only.
  const link = renderedLinkPass();

  // ── Report ────────────────────────────────────────────────────────────────
  console.log(`Audited ${audited} content object(s).`);
  console.log(`Rendered ** pass: ${ast.ran ? 'ran' : 'SKIPPED (run `next build` first)'}.`);
  console.log(`Rendered link pass: ${link.ran ? `ran (${link.files.length} page(s) sampled)` : 'SKIPPED (run `next build` first)'}.`);
  console.log();

  const cap = (arr: V[], n: number) => arr.slice(0, n);
  console.log('-'.repeat(72));
  console.log(`  GATE violations: ${gate.length}`);
  console.log('-'.repeat(72));
  for (const v of cap(gate, 60)) console.log(`  ✗ [${v.rule}] ${v.scope} ${v.path}\n      ${v.detail}`);
  if (gate.length > 60) console.log(`  …and ${gate.length - 60} more gate violations`);
  console.log();

  if (!QUIET) {
    console.log('-'.repeat(72));
    console.log(`  ADVISORY (not build-failing): ${advisory.length}`);
    console.log('-'.repeat(72));
    // R9 exemptions — echoed every run so an allowlisted outbound link is never
    // invisible. A silent exemption is how a scoped carve-out becomes a blanket one.
    if (exemptedOutbound.length) {
      console.log(`  R9 OUTBOUND EXEMPTIONS APPLIED: ${exemptedOutbound.length}`);
      for (const line of exemptedOutbound) console.log(`    • ${line}`);
      console.log('-'.repeat(72));
    }
    // group advisory by rule family for a readable summary
    const byRule = new Map<string, number>();
    for (const v of advisory) {
      const fam = v.rule.split(' (')[0].split(' "')[0];
      byRule.set(fam, (byRule.get(fam) ?? 0) + 1);
    }
    for (const [fam, n] of [...byRule.entries()].sort((a, b) => b[1] - a[1])) console.log(`  · ${fam}: ${n}`);
    console.log();
    for (const v of cap(advisory, 25)) console.log(`  · [${v.rule}] ${v.scope} ${v.path}\n      ${v.detail}`);
    if (advisory.length > 25) console.log(`  …and ${advisory.length - 25} more advisory items`);
    console.log();
  }

  if (gate.length > 0) {
    console.log(`SEMANTIC AUDIT FAILED — ${gate.length} gate violation(s). Advisory: ${advisory.length}.`);
    process.exit(1);
  }
  console.log(`Semantic audit PASS — 0 gate violations. Advisory: ${advisory.length} (review, non-blocking).`);
  process.exit(0);
}

main();
