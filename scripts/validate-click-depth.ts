/**
 * Click-Depth Validator (BFS over the REAL rendered link graph — build-failing gate).
 *
 * Rewrite of the old data-layer model, which pretended the header linked all 65
 * services / 21 cities / 30 comparisons at depth 1 (measured reality before the
 * server-rendered-nav fix: 3 header links). This version models NOTHING: it
 * parses every prerendered page in .next/server/app/**, extracts the actual
 * <a href> edges between built pages (header/footer links count — they are real
 * links), and BFS-walks from the homepage. If a link is not in the HTML, it is
 * not in the graph.
 *
 * REQUIRED page set = exactly what src/app/sitemap.ts emits: homepage + core
 * pages (minus the noindex thank-you/privacy-policy) + 65 service hubs
 * (generateServicePageSlug) + 21 city pages (generateCityPageSlug) + keep-
 * classified combos (isKeep) + comparisons + articles + KB (index, 6 clusters,
 * glossary) + the 6 flat hubs (slug-registry type 'hub' — same list as the
 * sitemap's FLAT_HUB_SLUGS).
 *
 * GATES (any violation -> process.exit(1); model: scripts/audit-headings.ts):
 *   1. exists      — every required page has a prerendered HTML file.
 *   2. reachable   — every required page is reachable from home via real links.
 *   3. depth ≤ 3   — every required page is at most 3 clicks from home.
 *   4. not orphan  — every required page has ≥1 inbound link from a DIFFERENT page.
 *
 * Href normalisation follows scripts/validate-internal-links.ts (strip
 * fragment/query, ignore external/tel/mailto/_next, decode). Only hrefs that
 * resolve to a built page become edges — redirect sources, app-route assets and
 * public/ files are validate-internal-links' concern, not nodes here.
 *
 * Run with: tsx scripts/validate-click-depth.ts          (npm run audit:depth)
 *           tsx scripts/validate-click-depth.ts --json   (adds a machine-readable
 *           {depths, orphans, unreachable} JSON object on stdout; the human
 *           report then goes to stderr so stdout stays pure JSON)
 */

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative, sep } from 'node:path';
import { parse } from 'node-html-parser';

import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { combos } from '@/data/combos';
import { comparisons } from '@/data/comparisons';
import { articles } from '@/data/articles';
import { corePages } from '@/data/core-pages';
import { generateCityPageSlug, generateServicePageSlug } from '@/lib/slug-utils';
import { isKeep } from '@/data/url-classification';
import { KB_CLUSTER_SLUGS } from '@/data/kb-clusters';
import { getSlugsByType } from '@/data/slug-registry';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PRERENDER_DIR = join(REPO_ROOT, '.next', 'server', 'app');

const HOME = '/';
const MAX_DEPTH = 3;
const JSON_MODE = process.argv.includes('--json');

// In --json mode the human report moves to stderr so stdout is pure JSON.
const report = JSON_MODE ? console.error : console.log;

// ─── HTML discovery (convention: validate-internal-links.ts) ─────────────────

/**
 * Recursively collect every .html file under dir, as paths relative to dir.
 * Skips the framework's non-page shells (_not-found, _global-error).
 */
function walkHtml(dir: string, base = dir): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('_')) continue; // _not-found / _global-error
    const abs = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkHtml(abs, base));
    else if (entry.name.endsWith('.html')) out.push(relative(base, abs));
  }
  return out;
}

/** ".next/server/app" relative html path -> served route path. */
function fileToRoute(file: string): string {
  const p = file.replace(/\.html$/, '').split(sep).join('/');
  return p === 'index' ? HOME : `/${p}`;
}

/** Normalise an href to a comparable pathname, or null if it is not ours to check. */
function toPathname(href: string): string | null {
  if (!href) return null;
  if (href.startsWith('//')) return null; // protocol-relative -> external
  if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return null; // https:, tel:, mailto:
  if (href.startsWith('#')) return null; // in-page fragment
  if (!href.startsWith('/')) return null; // relative; none emitted, but be safe
  let path = href.split('#')[0].split('?')[0];
  if (path.startsWith('/_next/')) return null; // build artifacts, not routes
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1); // trailing slash
  if (path === '') return null;
  try {
    return decodeURIComponent(path);
  } catch {
    return path;
  }
}

// ─── Required page set (derived exactly as src/app/sitemap.ts derives it) ────

/** Pages the sitemap deliberately omits (noindex core pages). */
const EXCLUDED_CORE_PAGES = new Set(['thank-you', 'privacy-policy']);

function buildRequiredSet(): Map<string, string> {
  const required = new Map<string, string>(); // route -> segment label
  const add = (slug: string, segment: string) => {
    required.set(slug === '' ? HOME : `/${slug}`, segment);
  };

  add('', 'core'); // homepage
  for (const page of corePages) {
    if (!EXCLUDED_CORE_PAGES.has(page.id)) add(page.slug, 'core');
  }
  for (const service of services) add(generateServicePageSlug(service.slug), 'service');
  for (const city of cities) add(generateCityPageSlug(city.slug), 'city');
  for (const combo of combos) {
    if (isKeep(combo.slug)) add(combo.slug, 'combo');
  }
  for (const comparison of comparisons) add(comparison.slug, 'comparison');
  for (const article of articles) add(article.slug, 'article');
  add('roofing-knowledge-base', 'kb');
  for (const cluster of KB_CLUSTER_SLUGS) add(`roofing-knowledge-base/${cluster}`, 'kb');
  add('roofing-glossary', 'kb');
  // The 6 flat hubs — slug-registry type 'hub' is the same list as the
  // sitemap's FLAT_HUB_SLUGS (both enumerate the flat single-segment hubs).
  for (const hub of getSlugsByType('hub')) add(hub.slug, 'hub');

  return required;
}

// ─── Main ────────────────────────────────────────────────────────────────────

function main(): void {
  report('='.repeat(72));
  report('  CLICK-DEPTH VALIDATION (BFS over rendered HTML links — build-failing)');
  report('='.repeat(72));
  report('');

  if (!existsSync(PRERENDER_DIR)) {
    report('NOTICE: No prerendered HTML found in .next/server/app — cannot measure the link graph.');
    report('        Run `next build` first (or `npm run build`).');
    process.exit(1);
  }

  // ── Crawl: parse every built page, extract page-to-page edges ──────────────
  const files = walkHtml(PRERENDER_DIR);
  const builtRoutes = new Set(files.map(fileToRoute));

  const outLinks = new Map<string, Set<string>>(); // page -> pages it links to
  const inbound = new Map<string, Set<string>>(); // page -> DISTINCT other pages linking to it
  let hrefCount = 0;
  let edgeCount = 0;

  for (const file of files) {
    const sourceRoute = fileToRoute(file);
    const targets = new Set<string>();
    const root = parse(readFileSync(join(PRERENDER_DIR, file), 'utf8'));
    for (const a of root.querySelectorAll('a')) {
      const path = toPathname(a.getAttribute('href') ?? '');
      if (path === null) continue;
      hrefCount++;
      // Only links that land on a BUILT page are graph edges. Everything else
      // (redirect sources, assets, dead links) is validate-internal-links' beat.
      if (builtRoutes.has(path)) targets.add(path);
    }
    outLinks.set(sourceRoute, targets);
    edgeCount += targets.size;
    for (const target of targets) {
      if (target === sourceRoute) continue; // self-link never rescues an orphan
      const set = inbound.get(target) ?? new Set<string>();
      set.add(sourceRoute);
      inbound.set(target, set);
    }
  }

  // ── BFS from the homepage over the real edges ──────────────────────────────
  const depths = new Map<string, number>();
  if (builtRoutes.has(HOME)) {
    depths.set(HOME, 0);
    const queue: string[] = [HOME];
    while (queue.length > 0) {
      const current = queue.shift()!;
      const d = depths.get(current)!;
      for (const next of outLinks.get(current) ?? []) {
        if (!depths.has(next)) {
          depths.set(next, d + 1);
          queue.push(next);
        }
      }
    }
  }

  // ── Gates over the required (sitemap-emitted) set ──────────────────────────
  const required = buildRequiredSet();
  const errors: string[] = [];
  const missing: string[] = [];
  const unreachable: string[] = [];
  const tooDeep: Array<{ route: string; depth: number }> = [];
  const orphans: string[] = [];

  for (const [route, segment] of required) {
    if (!builtRoutes.has(route)) {
      missing.push(route);
      errors.push(`MISSING [${segment}] ${route} — required by the sitemap but not in the build`);
      continue; // a missing page is trivially unreachable/orphaned; report once
    }
    const depth = depths.get(route);
    if (depth === undefined) {
      unreachable.push(route);
      errors.push(`UNREACHABLE [${segment}] ${route} — no link path from the homepage`);
    } else if (depth > MAX_DEPTH) {
      tooDeep.push({ route, depth });
      errors.push(`DEPTH [${segment}] ${route} — ${depth} clicks from home (max ${MAX_DEPTH})`);
    }
    if (route !== HOME && (inbound.get(route)?.size ?? 0) === 0) {
      orphans.push(route);
      errors.push(`ORPHAN [${segment}] ${route} — zero inbound links from other pages`);
    }
  }

  // ── Report (always printed) ────────────────────────────────────────────────
  const buckets = new Map<number, number>();
  let maxDepth = 0;
  for (const d of depths.values()) {
    buckets.set(d, (buckets.get(d) ?? 0) + 1);
    maxDepth = Math.max(maxDepth, d);
  }
  const over3 = [...depths.values()].filter((d) => d > MAX_DEPTH).length;
  const crawledUnreachable = builtRoutes.size - depths.size;

  report(`HTML pages crawled : ${files.length}`);
  report(`Required (sitemap) : ${required.size}`);
  report(`Internal hrefs     : ${hrefCount} (${edgeCount} unique page-to-page edges)`);
  report('');
  report('Depth distribution (all crawled pages):');
  report('-'.repeat(50));
  report(`  Depth 0 (home): ${buckets.get(0) ?? 0}`);
  report(`  Depth 1       : ${buckets.get(1) ?? 0}`);
  report(`  Depth 2       : ${buckets.get(2) ?? 0}`);
  report(`  Depth 3       : ${buckets.get(3) ?? 0}`);
  report(`  Depth >3      : ${over3}${over3 > 0 ? ` (max ${maxDepth})` : ''}`);
  report(`  Unreachable   : ${crawledUnreachable}`);
  report('-'.repeat(50));
  report('');

  const deepest = [...required.keys()]
    .filter((route) => depths.has(route))
    .map((route) => ({ route, depth: depths.get(route)! }))
    .sort((a, b) => b.depth - a.depth)
    .slice(0, 20);
  report('20 deepest required pages:');
  for (const { route, depth } of deepest) report(`  [depth ${depth}] ${route}`);
  report('');

  const requiredUnreachableAll = [...missing, ...unreachable]; // missing pages are unreachable too
  report(`Orphans (required, ${orphans.length} total, showing ≤20):`);
  for (const route of orphans.slice(0, 20)) report(`  ${route}`);
  if (orphans.length === 0) report('  (none)');
  report('');
  report(`Unreachable (required, ${requiredUnreachableAll.length} total incl. ${missing.length} missing, showing ≤20):`);
  for (const route of requiredUnreachableAll.slice(0, 20)) report(`  ${route}`);
  if (requiredUnreachableAll.length === 0) report('  (none)');
  report('');

  report(`${errors.length} violation(s) found.`);
  report('');
  if (errors.length > 0) {
    report('-'.repeat(72));
    report('  VIOLATIONS:');
    report('-'.repeat(72));
    for (const e of errors.slice(0, 40)) report(`  - ${e}`);
    if (errors.length > 40) report(`  ...and ${errors.length - 40} more`);
    report('');
  }

  if (JSON_MODE) {
    console.log(
      JSON.stringify({
        depths: Object.fromEntries([...depths.entries()].sort((a, b) => a[1] - b[1])),
        orphans,
        unreachable: requiredUnreachableAll,
      }),
    );
  }

  if (errors.length > 0) {
    report(`CLICK-DEPTH VALIDATION FAILED — ${errors.length} violation(s).`);
    process.exit(1);
  }
  report(`All ${required.size} required pages exist, are reachable within ${MAX_DEPTH} clicks, and have inbound links. PASS`);
  process.exit(0);
}

main();
