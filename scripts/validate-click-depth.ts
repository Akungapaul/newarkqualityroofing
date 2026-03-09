/**
 * Click Depth Validator (BFS from Homepage)
 *
 * Builds an adjacency graph from the DATA LAYER (not HTML parsing),
 * then runs BFS from homepage to verify no page is more than 3 clicks away.
 *
 * Link sources modeled:
 * 1. Header nav: all services via mega-menu, all cities, comparison groups
 * 2. Footer: all cities, service category representatives, comparison guides
 * 3. Template internal links: service, city, combo, comparison, article pages
 * 4. Homepage: services grid, locations grid, comparison grid, article guides, browse services
 * 5. Hub/core pages: services hub, locations hub, sitemap
 *
 * Run with: npx tsx scripts/validate-click-depth.ts
 */

import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { combos } from '@/data/combos';
import { comparisons } from '@/data/comparisons';
import { articles } from '@/data/articles';
import { corePages } from '@/data/core-pages';
import { generateComboSlug, generateCityPageSlug } from '@/lib/slug-utils';

// ─── Types ──────────────────────────────────────────────────────────────────

type AdjGraph = Map<string, Set<string>>;

// ─── Helpers ────────────────────────────────────────────────────────────────

const graph: AdjGraph = new Map();

/** All known page slugs for validation */
const allPages = new Set<string>();

function ensurePage(slug: string) {
  allPages.add(slug);
  if (!graph.has(slug)) {
    graph.set(slug, new Set());
  }
}

function addEdge(from: string, to: string) {
  if (!graph.has(from)) graph.set(from, new Set());
  graph.get(from)!.add(to);
}

// ─── Build lookup maps ──────────────────────────────────────────────────────

const serviceById = new Map(services.map((s) => [s.id, s]));
const cityById = new Map(cities.map((c) => [c.id, c]));

// ─── Register all pages ─────────────────────────────────────────────────────

// Homepage
const HOMEPAGE = '';
ensurePage(HOMEPAGE);

// Core pages
for (const cp of corePages) {
  ensurePage(cp.slug);
}

// Service pages
for (const s of services) {
  ensurePage(s.slug);
}

// City pages
for (const c of cities) {
  ensurePage(generateCityPageSlug(c.slug));
}

// Combo pages
for (const combo of combos) {
  ensurePage(combo.slug);
}

// Comparison pages
for (const comp of comparisons) {
  ensurePage(comp.slug);
}

// Article pages
for (const article of articles) {
  ensurePage(article.slug);
}

// ─── Link Source 1: Header nav (every page links to these targets) ──────────
// The header is on every page, so we model this as: homepage links to them (depth 1),
// and all pages at depth 1+ link to them. For BFS correctness, we just need the
// homepage to link to all header targets (they're at most depth 1 from homepage).

// Header: all services (via mega-menu dropdown)
for (const s of services) {
  addEdge(HOMEPAGE, s.slug);
}

// Header: all cities (dropdown)
for (const c of cities) {
  addEdge(HOMEPAGE, generateCityPageSlug(c.slug));
}

// Header: comparison groups (accessible via menu)
for (const comp of comparisons) {
  addEdge(HOMEPAGE, comp.slug);
}

// Header: core pages (about, contact, services, locations, sitemap)
for (const cp of corePages) {
  addEdge(HOMEPAGE, cp.slug);
}

// ─── Link Source 2: Footer links ────────────────────────────────────────────
// Footer is sitewide -- same logic as header. The important navigation targets
// are already covered by header links above. Footer adds:
// - All 21 city pages (already linked from header)
// - Service category representatives (subset, already linked)
// - Comparison guides (subset, already linked)
// - Privacy policy, sitemap.xml (already core pages)
// No additional edges needed since header already links all services/cities/comparisons.

// ─── Link Source 3: Homepage-specific outbound links ────────────────────────

// Homepage -> ServicesGrid: one representative service per category (already covered by header)
// Homepage -> LocationsGrid: all 21 cities (already covered)
// Homepage -> Browse Services section: ~20 curated service links (subset, already covered)
// Homepage -> HomeComparisonGrid: featured comparisons (already covered)
// Homepage -> HomepageGuides: core articles
const homepageArticles = articles.filter(
  (a) => a.parentType === 'core' && a.parentId === 'homepage'
);
for (const article of homepageArticles) {
  addEdge(HOMEPAGE, article.slug);
}

// ─── Link Source 4: Service page outbound links ─────────────────────────────
// Each service page links to:
// - Related services in same category (up to 4)
// - Learn More article link (first article for this service)
// - Related comparisons
for (const service of services) {
  const sameCategory = services.filter(
    (s) => s.category === service.category && s.id !== service.id
  );
  // Related services
  for (const rel of sameCategory.slice(0, 4)) {
    addEdge(service.slug, rel.slug);
  }

  // Learn More article (position 1 article for this service)
  const serviceArticles = articles.filter(
    (a) => a.parentType === 'service' && a.parentId === service.id
  );
  if (serviceArticles.length > 0) {
    addEdge(service.slug, serviceArticles[0].slug);
  }

  // Related comparisons (via comparison-links mapping)
  // We model the general pattern: services link to comparisons in their domain
  // Since serviceComparisonMap is internal to comparison-links.ts, we approximate
  // by linking each service to comparisons that reference related terms
  // For BFS correctness, comparisons are already at depth 1 from header.
}

// ─── Link Source 5: City page outbound links ────────────────────────────────
// Each city page links to:
// - All 63 combo pages for that city (CityServicesGrid)
// - Adjacent city pages (CityNearbyCities)
for (const city of cities) {
  const citySlug = generateCityPageSlug(city.slug);

  // CityServicesGrid: links to all combo pages for this city
  for (const service of services) {
    addEdge(citySlug, generateComboSlug(service.slug, city.slug));
  }

  // CityNearbyCities: links to adjacent city pages
  for (const adjId of city.adjacentCityIds) {
    const adjCity = cityById.get(adjId);
    if (adjCity) {
      addEdge(citySlug, generateCityPageSlug(adjCity.slug));
    }
  }
}

// ─── Link Source 6: Combo page outbound links ───────────────────────────────
// Each combo page links to:
// - Parent service page
// - Parent city page
// - Nearby city combo pages (same service, adjacent cities)
// - Related service combo pages (same city, other services in category, up to 5 per category)
for (const combo of combos) {
  const service = serviceById.get(combo.serviceId);
  const city = cityById.get(combo.cityId);
  if (!service || !city) continue;

  // Parent pages
  addEdge(combo.slug, service.slug);
  addEdge(combo.slug, generateCityPageSlug(city.slug));

  // Nearby city combos
  for (const adjId of city.adjacentCityIds) {
    const adjCity = cityById.get(adjId);
    if (adjCity) {
      addEdge(combo.slug, generateComboSlug(service.slug, adjCity.slug));
    }
  }

  // Related services in same city (up to 5 per category)
  const categoryCount = new Map<string, number>();
  for (const otherService of services) {
    if (otherService.id === service.id) continue;
    const count = categoryCount.get(otherService.category) ?? 0;
    if (count >= 5) continue;
    addEdge(combo.slug, generateComboSlug(otherService.slug, city.slug));
    categoryCount.set(otherService.category, count + 1);
  }
}

// ─── Link Source 7: Comparison page outbound links ──────────────────────────
// Comparison pages link to:
// - Related comparisons (same category, limited set)
// - Learn More article (first article for this comparison)
for (const comp of comparisons) {
  // Related comparisons (same category)
  const sameCategory = comparisons.filter(
    (c) => c.category === comp.category && c.id !== comp.id
  );
  for (const rel of sameCategory) {
    addEdge(comp.slug, rel.slug);
  }

  // Learn More article
  const compArticles = articles.filter(
    (a) => a.parentType === 'comparison' && a.parentId === comp.id
  );
  if (compArticles.length > 0) {
    addEdge(comp.slug, compArticles[0].slug);
  }
}

// ─── Link Source 8: Article page outbound links ─────────────────────────────
// Article pages link to:
// - Money page (parent service/comparison/homepage)
// - Next article in chain
// - Previous article in chain
const articlesByParent = new Map<string, typeof articles>();
for (const article of articles) {
  const key = `${article.parentType}:${article.parentId}`;
  if (!articlesByParent.has(key)) articlesByParent.set(key, []);
  articlesByParent.get(key)!.push(article);
}
// Sort by position
for (const group of articlesByParent.values()) {
  group.sort((a, b) => a.position - b.position);
}

for (const article of articles) {
  // Money page link
  switch (article.parentType) {
    case 'service': {
      const service = serviceById.get(article.parentId);
      if (service) addEdge(article.slug, service.slug);
      break;
    }
    case 'comparison': {
      const comp = comparisons.find((c) => c.id === article.parentId);
      if (comp) addEdge(article.slug, comp.slug);
      break;
    }
    case 'core':
      addEdge(article.slug, HOMEPAGE);
      break;
  }

  // Next/prev article links
  const key = `${article.parentType}:${article.parentId}`;
  const siblings = articlesByParent.get(key) ?? [];
  const idx = siblings.findIndex((a) => a.id === article.id);
  if (idx < siblings.length - 1) {
    addEdge(article.slug, siblings[idx + 1].slug);
  }
  if (idx > 0) {
    addEdge(article.slug, siblings[idx - 1].slug);
  }
}

// ─── Link Source 9: Hub/core pages ──────────────────────────────────────────
// Services hub: links to all 63 service pages
const servicesHub = 'services';
for (const s of services) {
  addEdge(servicesHub, s.slug);
}

// Locations hub: links to all 21 city pages
const locationsHub = 'locations';
for (const c of cities) {
  addEdge(locationsHub, generateCityPageSlug(c.slug));
}

// Sitemap: links to everything
const sitemapSlug = 'sitemap';
for (const page of allPages) {
  if (page !== sitemapSlug) {
    addEdge(sitemapSlug, page);
  }
}

// ─── BFS ────────────────────────────────────────────────────────────────────

function bfs(startSlug: string): Map<string, number> {
  const depth = new Map<string, number>();
  const queue: string[] = [startSlug];
  depth.set(startSlug, 0);

  while (queue.length > 0) {
    const current = queue.shift()!;
    const currentDepth = depth.get(current)!;
    const neighbors = graph.get(current);
    if (!neighbors) continue;

    for (const neighbor of neighbors) {
      if (!depth.has(neighbor)) {
        depth.set(neighbor, currentDepth + 1);
        queue.push(neighbor);
      }
    }
  }

  return depth;
}

// ─── Main ───────────────────────────────────────────────────────────────────

function main() {
  console.log('='.repeat(72));
  console.log('  CLICK DEPTH VALIDATION (BFS from Homepage)');
  console.log('='.repeat(72));
  console.log();

  const depths = bfs(HOMEPAGE);

  // Check for unreachable pages
  const unreachable: string[] = [];
  for (const page of allPages) {
    if (!depths.has(page)) {
      unreachable.push(page);
    }
  }

  // Compute depth distribution
  const depthBuckets = new Map<number, string[]>();
  let maxDepth = 0;

  for (const [page, d] of depths) {
    maxDepth = Math.max(maxDepth, d);
    if (!depthBuckets.has(d)) depthBuckets.set(d, []);
    depthBuckets.get(d)!.push(page);
  }

  // Summary
  console.log(`Total registered pages: ${allPages.size}`);
  console.log(`Reachable from homepage: ${depths.size}`);
  console.log(`Unreachable: ${unreachable.length}`);
  console.log(`Max depth: ${maxDepth}`);
  console.log();

  // Depth distribution
  console.log('Depth distribution:');
  console.log('-'.repeat(50));
  for (let d = 0; d <= maxDepth; d++) {
    const pages = depthBuckets.get(d) ?? [];
    console.log(`  Depth ${d}: ${pages.length} pages`);
  }
  console.log('-'.repeat(50));
  console.log();

  // Check violations (depth > 3)
  const violations: Array<{ slug: string; depth: number }> = [];
  for (const [slug, d] of depths) {
    if (d > 3) {
      violations.push({ slug, depth: d });
    }
  }

  // Add unreachable as violations too
  for (const slug of unreachable) {
    violations.push({ slug, depth: Infinity });
  }

  if (violations.length > 0) {
    console.log('-'.repeat(72));
    console.log(`  VIOLATIONS (pages beyond 3 clicks): ${violations.length}`);
    console.log('-'.repeat(72));
    const sorted = violations.sort((a, b) => a.depth - b.depth);
    for (const v of sorted.slice(0, 50)) {
      const depthStr = v.depth === Infinity ? 'UNREACHABLE' : `depth ${v.depth}`;
      console.log(`  [${depthStr}] /${v.slug}`);
    }
    if (sorted.length > 50) {
      console.log(`  ... and ${sorted.length - 50} more`);
    }
    console.log();
    process.exit(1);
  }

  console.log('All pages within 3 clicks from homepage. PASS');
  process.exit(0);
}

main();
