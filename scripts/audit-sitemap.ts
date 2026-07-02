/**
 * Sitemap Membership Validator (INDX-05 / INDX-03 build gate).
 *
 * Build-fail validator (model: validate-flat-urls.ts) for the generated sitemap.
 * Re-derives the EXPECTED sitemap membership from the verdict API + data layer
 * and asserts the ACTUAL sitemap (src/app/sitemap.ts) matches:
 *
 *   INCLUDES: 1140 keep combos + all indexable core pages + 65 services +
 *             21 cities + 30 comparisons + 252 articles + the KB hub +
 *             6 cluster hubs + glossary + the 6 FLAT hubs (residential-roofing
 *             etc. — now content-bearing + indexable).
 *   EXCLUDES: the 225 redirected combos (0 noindex combos remain after the
 *             942-doorway re-index) and the 44 nested KB articles.
 *
 * Any included-but-should-be-excluded OR excluded-but-should-be-included entry
 * -> process.exit(1) with a clear message; else process.exit(0).
 *
 * Run with: tsx scripts/audit-sitemap.ts  (npm run audit:sitemap)
 */

import sitemap, { generateSitemaps } from '@/app/sitemap';
import { SEO_CONFIG } from '@/lib/seo-config';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { combos } from '@/data/combos';
import { comparisons } from '@/data/comparisons';
import { articles } from '@/data/articles';
import { corePages } from '@/data/core-pages';
import { generateCityPageSlug, generateServicePageSlug } from '@/lib/slug-utils';
import { isKeep, isNoindex, isRedirect } from '@/data/url-classification';

const { BASE_URL } = SEO_CONFIG;

// Core pages excluded from the sitemap (noindex) — mirror src/app/sitemap.ts.
const EXCLUDED_CORE_PAGES = new Set(['thank-you', 'privacy-policy']);

// The 6 FLAT hubs + glossary live as flat slugs. The 6 hubs are now content-bearing
// and indexable, so they MUST be included in the sitemap (alongside the glossary + KB IA).
const FLAT_HUB_SCAFFOLDS = [
  'residential-roofing',
  'commercial-roofing',
  'flat-roof-systems',
  'roofing-materials',
  'free-roofing-estimate',
  'our-roofing-process',
];

const KB_CLUSTERS = [
  'roof-problems',
  'roof-components',
  'roofing-materials',
  'roofing-process',
  'roofing-costs',
  'local-roofing-knowledge',
];

async function collectSitemapUrls(): Promise<Set<string>> {
  const segments = await generateSitemaps();
  const urls = new Set<string>();
  for (const { id } of segments) {
    const entries = await sitemap({ id: Promise.resolve(id) });
    for (const e of entries) urls.add(e.url);
  }
  return urls;
}

async function main() {
  console.log('='.repeat(72));
  console.log('  SITEMAP MEMBERSHIP VALIDATION');
  console.log('='.repeat(72));
  console.log();

  const errors: string[] = [];
  const actual = await collectSitemapUrls();

  const u = (slug: string) => (slug === '' ? BASE_URL : `${BASE_URL}/${slug}`);

  // ── Expected INCLUDED ─────────────────────────────────────────────────────────
  const mustInclude = new Set<string>();
  // Homepage + indexable core pages
  mustInclude.add(BASE_URL);
  for (const c of corePages) {
    if (!EXCLUDED_CORE_PAGES.has(c.id)) mustInclude.add(u(c.slug));
  }
  // Services / cities / comparisons / articles
  // Service hubs live at the "{service}-in-newark-nj" slug (migrated from the bare slug).
  for (const s of services) mustInclude.add(u(generateServicePageSlug(s.slug)));
  for (const c of cities) mustInclude.add(u(generateCityPageSlug(c.slug)));
  for (const c of comparisons) mustInclude.add(u(c.slug));
  for (const a of articles) mustInclude.add(u(a.slug));
  // 738 KEEP combos
  const keepCombos = combos.filter((c) => isKeep(c.slug));
  for (const c of keepCombos) mustInclude.add(u(c.slug));
  // KB IA: hub + 6 cluster hubs + glossary
  mustInclude.add(u('roofing-knowledge-base'));
  for (const cl of KB_CLUSTERS) mustInclude.add(u(`roofing-knowledge-base/${cl}`));
  mustInclude.add(u('roofing-glossary'));
  // 6 FLAT hubs — now content-bearing + indexable
  for (const h of FLAT_HUB_SCAFFOLDS) mustInclude.add(u(h));

  // ── Expected EXCLUDED ─────────────────────────────────────────────────────────
  const mustExclude = new Set<string>();
  // 225 redirected + 402 noindexed combos excluded from the sitemap
  for (const c of combos) {
    if (isNoindex(c.slug) || isRedirect(c.slug)) mustExclude.add(u(c.slug));
  }
  // 44 nested KB articles are NOT enumerated in any sitemap segment — assert the
  // sitemap contains NO nested KB article paths (anything under the KB prefix that
  // is not the hub or a cluster hub).
  const allowedKbPrefixed = new Set<string>([
    u('roofing-knowledge-base'),
    ...KB_CLUSTERS.map((cl) => u(`roofing-knowledge-base/${cl}`)),
  ]);

  // Sanity: keep count must be exactly 738 (1140 indexable combos − 402 zero-demand phantoms noindexed).
  if (keepCombos.length !== 738) {
    errors.push(`Keep combo count: expected 738, got ${keepCombos.length}`);
  }

  // ── Assert INCLUDED present ────────────────────────────────────────────────────
  for (const url of mustInclude) {
    if (!actual.has(url)) errors.push(`MISSING from sitemap (should be included): ${url}`);
  }

  // ── Assert EXCLUDED absent ──────────────────────────────────────────────────────
  for (const url of mustExclude) {
    if (actual.has(url)) errors.push(`PRESENT in sitemap (should be excluded): ${url}`);
  }

  // ── Assert no stray nested KB article URLs leaked in ────────────────────────────
  const kbPrefix = `${BASE_URL}/roofing-knowledge-base/`;
  for (const url of actual) {
    if (url.startsWith(kbPrefix) && !allowedKbPrefixed.has(url)) {
      errors.push(`Nested KB article URL leaked into sitemap: ${url}`);
    }
  }

  // ── Report ──────────────────────────────────────────────────────────────────────
  console.log(`Sitemap URLs: ${actual.size}`);
  console.log(`Expected included: ${mustInclude.size} | Expected excluded (sampled): ${mustExclude.size}`);
  console.log(`Keep combos: ${keepCombos.length}`);
  console.log(`${errors.length} violation(s) found.`);
  console.log();

  if (errors.length > 0) {
    console.log('-'.repeat(72));
    console.log('  VIOLATIONS:');
    console.log('-'.repeat(72));
    for (const e of errors.slice(0, 40)) console.log(`  - ${e}`);
    if (errors.length > 40) console.log(`  ...and ${errors.length - 40} more`);
    console.log();
    process.exit(1);
  }

  console.log('Sitemap membership valid: 738 keep + core/KB/glossary + 6 FLAT hubs included;');
  console.log('225 redirected + 402 noindexed + 44 nested KB articles excluded. PASS');
  process.exit(0);
}

main();
