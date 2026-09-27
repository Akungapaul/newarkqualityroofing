/**
 * Rendered Internal-Link Validator (post-build gate).
 *
 * The one audit that reads EMITTED HTML rather than intended URLs. Every other
 * audit/validate script reasons over src/data/**, which is why all six wired
 * audits reported PASS while 10,103 internal links 404'd across 1,140 combo
 * pages (ComboRelatedLinks double-suffixed an already-complete combo slug —
 * fixed in 357293d). Asserts, over every <a href> in .next/server/app/**:
 *   1. GATE     — every internal href resolves to a prerendered page, an app
 *                 route asset (/robots.txt, /sitemap.xml, ...), or a file in
 *                 public/. Unresolvable = a live 404 in production.
 *   2. GATE     — every KNOWN_DEAD allowlist entry is still actually violated.
 *                 A stale entry fails the build, so fixing a link forces its
 *                 removal and the list cannot rot silently.
 *   3. ADVISORY — hrefs pointing at a declared 301 source (redirect chain).
 *   4. ADVISORY — drift between the slug registry and the built route set.
 *
 * Only GATE violations drive the exit code (tiering model: audit-semantics.ts).
 * Any gate violation -> process.exit(1); else process.exit(0).
 *
 * Scope: <a href> only. src/content attributes are NOT validated, so a dangling
 * og:image (seo-config.ts -> /images/og-default.jpg, which 404s) is out of
 * scope here by design. middleware.ts and the next.config.ts `/:path*` www rule
 * are host-level, not path-level, and are deliberately ignored.
 *
 * Run with: tsx scripts/validate-internal-links.ts  (npm run validate:links)
 * Runs automatically after `next build` via the `postbuild` npm hook.
 */

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative, sep } from 'node:path';
import { parse } from 'node-html-parser';
import generatedRedirects from '@/generated/redirects.generated.mjs';
import { getAllSlugs } from '@/data/slug-registry';
import { isRedirect } from '@/data/url-classification';
import { KB_CLUSTER_SLUGS } from '@/data/kb-clusters';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PRERENDER_DIR = join(REPO_ROOT, '.next', 'server', 'app');
const PUBLIC_DIR = join(REPO_ROOT, 'public');
const ROUTES_MANIFEST = join(REPO_ROOT, '.next', 'app-path-routes-manifest.json');

type Redirect = { source: string; destination: string; permanent: boolean };
type Tier = 'GATE' | 'ADVISORY';
interface V {
  tier: Tier;
  rule: string;
  detail: string;
}

/**
 * Escape hatch for a dead link that is known and deliberately deferred, so it
 * stays visible rather than silently tolerated. Fixing one REMOVES its entry —
 * a stale entry is itself a gate violation (assertion 2), so this cannot rot.
 *
 * CURRENTLY EMPTY, and that is the target state. It was seeded with the 8 links
 * that predated this gate (4 in homepage body copy via LocationsGrid, 4 in
 * article content); all 8 were repaired and de-listed. Add an entry only to
 * defer a fix consciously, with the source location and the reason.
 */
const KNOWN_DEAD = new Map<string, string>([]);

/** Recursively collect every .html file under dir, as paths relative to dir. */
function walkHtml(dir: string, base = dir): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const abs = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkHtml(abs, base));
    else if (entry.name.endsWith('.html')) out.push(relative(base, abs));
  }
  return out;
}

/** ".next/server/app" relative html path -> served route path. */
function fileToRoute(file: string): string {
  const p = file.replace(/\.html$/, '').split(sep).join('/');
  return p === 'index' ? '/' : `/${p}`;
}

/** Normalise an href to a comparable pathname, or null if it is not ours to check. */
function toPathname(href: string): string | null {
  if (!href) return null;
  if (href.startsWith('//')) return null; // protocol-relative -> external
  if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return null; // https:, tel:, mailto:
  if (href.startsWith('#')) return null; // in-page fragment
  if (!href.startsWith('/')) return null; // relative; none emitted, but be safe
  const path = href.split('#')[0].split('?')[0];
  if (path.startsWith('/_next/')) return null; // build artifacts, not routes
  if (path === '') return null;
  try {
    return decodeURIComponent(path);
  } catch {
    return path;
  }
}

/** Every literal path-level 301, source -> destination: 225 generated + the inline next.config.ts set. */
function buildRedirectMap(): Map<string, string> {
  const map = new Map<string, string>();
  for (const r of generatedRedirects as Redirect[]) map.set(r.source, r.destination);

  // next.config.ts mixes single and double quotes across its four redirect
  // groups (audit-redirects.ts:110 handles the same hazard), so match both.
  // The `/:path*` wildcard is the host-level www rule — excluded deliberately.
  // Scope to the redirects() block: rewrites() uses the same source/destination
  // shape but is not a 301 (/sitemap.xml -> /sitemap-index.xml).
  const config = readFileSync(join(REPO_ROOT, 'next.config.ts'), 'utf8');
  const redirectsBlock = config.slice(config.indexOf('async redirects()'), config.indexOf('async rewrites()'));
  const pair = /source:\s*['"](\/[^'"]*)['"]\s*,\s*destination:\s*['"]([^'"]*)['"]/g;
  for (const [, src, dest] of redirectsBlock.matchAll(pair)) {
    if (src.includes(':')) continue; // parameterised (host/wildcard) rule
    map.set(src, dest);
  }
  return map;
}

function main() {
  console.log('='.repeat(72));
  console.log('  RENDERED INTERNAL-LINK VALIDATION (tiered — gate + advisory)');
  console.log('='.repeat(72));
  console.log();

  if (!existsSync(PRERENDER_DIR)) {
    console.log('NOTICE: No prerendered HTML found in .next/server/app — skipping link validation.');
    console.log('        Run `next build` first (or `npm run build`, which chains this via postbuild).');
    process.exit(0);
  }

  const files = walkHtml(PRERENDER_DIR);
  const builtRoutes = new Set(files.map(fileToRoute));

  // App routes that serve non-page assets (/robots.txt, /sitemap/*.xml, ...).
  const appRoutes = new Set<string>();
  if (existsSync(ROUTES_MANIFEST)) {
    const manifest = JSON.parse(readFileSync(ROUTES_MANIFEST, 'utf8')) as Record<string, string | string[]>;
    for (const value of Object.values(manifest)) {
      for (const route of Array.isArray(value) ? value : [value]) {
        if (route && !route.includes('[')) appRoutes.add(route);
      }
    }
  }

  // Literal rewrites resolve to their destination route (/sitemap.xml -> /sitemap-index.xml).
  const rewritesManifest = join(REPO_ROOT, '.next', 'routes-manifest.json');
  if (existsSync(rewritesManifest)) {
    const { rewrites } = JSON.parse(readFileSync(rewritesManifest, 'utf8')) as {
      rewrites?: { beforeFiles?: { source: string; destination: string }[]; afterFiles?: { source: string; destination: string }[] };
    };
    for (const r of [...(rewrites?.beforeFiles ?? []), ...(rewrites?.afterFiles ?? [])]) {
      if (!r.source.includes(':') && appRoutes.has(r.destination)) appRoutes.add(r.source);
    }
  }

  const redirectMap = buildRedirectMap();
  const redirectSources = new Set(redirectMap.keys());

  const gate: V[] = [];
  const advisory: V[] = [];
  const seenDead = new Set<string>();

  let hrefCount = 0;
  const chainCount = new Map<string, number>();
  const deadBySource = new Map<string, Set<string>>();
  const brokenChain = new Map<string, Set<string>>();

  const resolves = (path: string): boolean =>
    builtRoutes.has(path) ||
    appRoutes.has(path) ||
    existsSync(join(PUBLIC_DIR, path.slice(1)));

  for (const file of files) {
    const sourceRoute = fileToRoute(file);
    const root = parse(readFileSync(join(PRERENDER_DIR, file), 'utf8'));
    for (const a of root.querySelectorAll('a')) {
      const path = toPathname(a.getAttribute('href') ?? '');
      if (path === null) continue;
      hrefCount++;

      // Order matters: a 301 source has no prerendered page of its own, so it
      // would look "dead" to a file-existence check while actually serving a
      // redirect. Classify it as a chain BEFORE testing for a built page.
      if (redirectSources.has(path) || isRedirect(path.slice(1))) {
        chainCount.set(path, (chainCount.get(path) ?? 0) + 1);
        const dest = redirectMap.get(path);
        if (dest && !resolves(dest)) {
          const set = brokenChain.get(`${path} -> ${dest}`) ?? new Set<string>();
          set.add(sourceRoute);
          brokenChain.set(`${path} -> ${dest}`, set);
        }
        continue;
      }

      if (!resolves(path)) {
        if (KNOWN_DEAD.has(path)) {
          seenDead.add(path);
          continue;
        }
        const set = deadBySource.get(path) ?? new Set<string>();
        set.add(sourceRoute);
        deadBySource.set(path, set);
      }
    }
  }

  for (const [path, sources] of [...deadBySource.entries()].sort()) {
    const list = [...sources].sort();
    const shown = list.slice(0, 3).join(', ') + (list.length > 3 ? `, +${list.length - 3} more` : '');
    gate.push({
      tier: 'GATE',
      rule: 'dead-link',
      detail: `${path} does not resolve — linked from ${list.length} page(s): ${shown}`,
    });
  }

  // A redirect that lands on a 404 is worse than a plain dead link, never allowlisted.
  for (const [pair, sources] of [...brokenChain.entries()].sort()) {
    gate.push({
      tier: 'GATE',
      rule: 'broken-redirect',
      detail: `${pair} — destination does not resolve; linked from ${sources.size} page(s)`,
    });
  }

  // A KNOWN_DEAD entry that is gone or now resolves must be deleted from the list.
  for (const [path, note] of KNOWN_DEAD) {
    if (seenDead.has(path)) continue;
    const why = resolves(path) ? 'now resolves' : 'is no longer linked anywhere';
    gate.push({
      tier: 'GATE',
      rule: 'stale-allowlist',
      detail: `${path} ${why} — remove it from KNOWN_DEAD (${note})`,
    });
  }

  for (const [path, n] of [...chainCount.entries()].sort((a, b) => b[1] - a[1])) {
    advisory.push({ tier: 'ADVISORY', rule: 'redirect-chain', detail: `${path} is a 301 source — linked ${n}x` });
  }

  // Cross-check: the registry-derived route set should equal what was built.
  // The KB paths are deliberately absent from the registry (slug-registry.ts:90
  // keeps '/'-containing slugs out of it), so add them back from the shared
  // taxonomy rather than hardcoding a count that goes stale when the KB changes.
  const registryRoutes = getAllSlugs().filter((s) => !isRedirect(s)).length;
  const kbRoutes = 1 + KB_CLUSTER_SLUGS.length; // KB hub + one page per cluster
  const expected = registryRoutes + 1 + kbRoutes + 2; // + homepage + KB + _not-found/_global-error
  if (expected !== builtRoutes.size) {
    advisory.push({
      tier: 'ADVISORY',
      rule: 'registry-drift',
      detail: `registry implies ${expected} routes, build produced ${builtRoutes.size}`,
    });
  }

  console.log(`HTML files scanned : ${files.length}`);
  console.log(`Built routes       : ${builtRoutes.size}`);
  console.log(`Internal hrefs     : ${hrefCount}`);
  console.log(`Allowlisted dead   : ${seenDead.size} of ${KNOWN_DEAD.size}`);
  console.log();

  console.log('-'.repeat(72));
  console.log(`  GATE violations: ${gate.length}`);
  console.log('-'.repeat(72));
  for (const v of gate.slice(0, 60)) console.log(`  ✗ [${v.rule}] ${v.detail}`);
  if (gate.length > 60) console.log(`  …and ${gate.length - 60} more gate violations`);
  console.log();

  console.log('-'.repeat(72));
  console.log(`  ADVISORY (not build-failing): ${advisory.length}`);
  console.log('-'.repeat(72));
  for (const v of advisory.slice(0, 25)) console.log(`  · [${v.rule}] ${v.detail}`);
  if (advisory.length > 25) console.log(`  …and ${advisory.length - 25} more advisory items`);
  console.log();

  if (gate.length > 0) {
    console.log(`LINK VALIDATION FAILED — ${gate.length} gate violation(s). Advisory: ${advisory.length}.`);
    process.exit(1);
  }
  console.log(`Link validation PASS — 0 gate violations. Advisory: ${advisory.length} (review, non-blocking).`);
  process.exit(0);
}

main();
