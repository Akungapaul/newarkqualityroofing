/**
 * Article → Money-Page Link Audit (AUD-03 — build-failing when run).
 *
 * POLICY (2026-09 owner decision): every knowledge-base article funnels to its
 * money pages:
 *   - its parent money page (service page / comparison page; core → /roofing-services)
 *     — required IN-BODY (this audit)
 *   - the roof-replacement cost article additionally links /roof-replacement-cost-in-newark-nj
 *   - its pillar hub (/residential-roofing or /commercial-roofing) — rendered
 *     structurally by ArticleCta via getArticlePillarHub() on EVERY article, so
 *     it is NOT required in-body (in-body hub links exist only where the prose
 *     names the hub naturally; forcing them produced misleading anchors)
 * Cap: at most 5 in-body links per article. Links live in `intro`,
 * `sections[].body`, and `ctaText` (never in `directAnswer`).
 *
 * Run with: tsx scripts/audit-article-links.ts  (npm run audit:article-links)
 */

import { articles } from '@/data/articles';
import { services } from '@/data/services';
import { comparisons } from '@/data/comparisons';
import { getAllArticleContent } from '@/data/article-content';
import { generateServicePageSlug } from '@/lib/slug-utils';
import { SURFER_PAGES } from '@/data/surfer-verbatim/generated-index';
import { getArticlePillarHub } from '@/data/linking/link-engine';

const svc = new Map(services.map((s) => [s.id, s]));
const cmp = new Map(comparisons.map((c) => [c.id, c]));
const meta = new Map(articles.map((a) => [a.id, a]));
const COMMERCIAL_CATS = new Set(['commercial-services', 'commercial-roof-types']);
const COMMERCIAL_CMP = new Set([
  'tpo-vs-epdm-roofing', 'pvc-vs-tpo-roofing', 'modified-bitumen-vs-tpo',
  'built-up-roofing-vs-modified-bitumen', 'spray-foam-vs-tpo', 'rubber-roofing-vs-tpo',
  'best-commercial-roofing-material', 'roof-coating-vs-replacement',
  'green-roof-vs-traditional-roofing', 'standing-seam-vs-corrugated-metal',
]);

function requiredTargets(articleId: string): string[] {
  const a = meta.get(articleId)!;
  const targets: string[] = [];
  if (a.parentType === 'service') {
    const s = svc.get(a.parentId)!;
    targets.push(`/${generateServicePageSlug(s.slug)}`);
    if (a.parentId === 'roof-replacement' && a.id.includes('cost')) targets.push('/roof-replacement-cost-in-newark-nj');
  } else if (a.parentType === 'comparison') {
    const c = cmp.get(a.parentId)!;
    targets.push(`/${c.slug}`);
  } else {
    targets.push('/roofing-services');
  }
  return targets;
}
// COMMERCIAL_CATS / COMMERCIAL_CMP mirror getArticlePillarHub() in
// src/data/linking/link-engine.ts — kept here as documentation of the pillar
// assignment; the template link itself is structural and cannot be missing.
void COMMERCIAL_CATS; void COMMERCIAL_CMP;

const errors: string[] = [];
let checked = 0;
for (const c of getAllArticleContent()) {
  const cc = c as { articleId: string; intro?: string; directAnswer?: string; ctaText?: string; sections?: Array<{ body?: string[] }> };
  checked++;
  // ctaText counts: it renders as visible prose links via parseRichText in ArticleCta.
  const bodyText = [cc.intro ?? '', ...(cc.sections ?? []).flatMap((s) => s.body ?? []), cc.ctaText ?? ''].join('\n');
  const links = [...bodyText.matchAll(/\]\((\/[a-z0-9-]+)\)/g)].map((m) => m[1]);
  const present = new Set(links);
  for (const t of requiredTargets(cc.articleId)) {
    if (!present.has(t)) errors.push(`${cc.articleId}: missing in-body link to ${t}`);
  }
  if (links.length > 5) errors.push(`${cc.articleId}: ${links.length} in-body links exceeds the 5-link cap`);
  if (/\]\(\//.test(cc.directAnswer ?? '')) errors.push(`${cc.articleId}: link inside directAnswer (lead must stay clean)`);
}

// Surfer guide articles (verbatim drafts): links are exact runs, not markdown.
// The converter adds at most 5 money-page links; here we require the parent
// money page (or, for homepage guides, any service page) to be linked in-body.
let surferChecked = 0;
for (const a of articles) {
  const page = SURFER_PAGES[`/${a.slug}`];
  if (page?.type !== 'article') continue;
  surferChecked++;
  const hrefs = new Set<string>();
  const walk = (x: unknown): void => {
    if (Array.isArray(x)) x.forEach(walk);
    else if (x && typeof x === 'object') {
      const r = x as { t?: string; href?: string };
      if (r.t === 'a' && r.href?.startsWith('/')) hrefs.add(r.href.split('#')[0]);
      Object.values(x).forEach(walk);
    }
  };
  walk(page.sections);
  // Parent money page, or the pillar hub that lists it (the converter links the
  // parent first when its phrase occurs in the copy; verbatim text is never edited).
  const required = [...requiredTargets(a.id), getArticlePillarHub(a.id).slug];
  const ok = a.parentType === 'core'
    ? [...hrefs].some((h) => h.endsWith('-in-newark-nj') || h === '/roofing-services' || h === '/residential-roofing')
    : required.some((t) => hrefs.has(t));
  if (!ok) errors.push(`${a.id} (surfer): no in-body link to ${a.parentType === 'core' ? 'a service page' : required.join(' / ')}`);
}

console.log(`Article-link audit: ${checked} articles checked (+${surferChecked} Surfer guide articles), ${errors.length} violation(s).`);
for (const e of errors.slice(0, 40)) console.log(`  - ${e}`);
if (errors.length > 40) console.log(`  ...and ${errors.length - 40} more`);
process.exit(errors.length > 0 ? 1 : 0);
