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

console.log(`Article-link audit: ${checked} articles checked, ${errors.length} violation(s).`);
for (const e of errors.slice(0, 40)) console.log(`  - ${e}`);
if (errors.length > 40) console.log(`  ...and ${errors.length - 40} more`);
process.exit(errors.length > 0 ? 1 : 0);
