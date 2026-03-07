/**
 * Orphan Page Audit Script
 *
 * Computes inbound internal link counts for every page on the site
 * using the data layer (no HTML crawling).
 *
 * Run with: npx tsx scripts/audit-orphan-pages.ts
 */

import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { combos } from '@/data/combos';
import { comparisons } from '@/data/comparisons';
import { corePages } from '@/data/core-pages';
import { getAllComboContent } from '@/data/combo-content';
import { generateComboSlug, generateCityPageSlug } from '@/lib/slug-utils';

// ─── Types ──────────────────────────────────────────────────────────────────

interface LinkRecord {
  inboundCount: number;
  sources: Set<string>;
  hasContent: boolean; // for combo pages: whether hand-written content exists
  type: string;
}

// ─── Initialize all pages ───────────────────────────────────────────────────

const pages = new Map<string, LinkRecord>();

function ensurePage(slug: string, type: string, hasContent = true) {
  if (!pages.has(slug)) {
    pages.set(slug, { inboundCount: 0, sources: new Set(), hasContent, type });
  }
}

function addLink(targetSlug: string, source: string) {
  const page = pages.get(targetSlug);
  if (page) {
    page.inboundCount++;
    page.sources.add(source);
  }
}

// Register all pages
// Homepage (slug: '' -- represented as 'homepage')
ensurePage('homepage', 'homepage');

// Core pages
for (const cp of corePages) {
  ensurePage(cp.slug, 'core');
}

// Service pages
for (const s of services) {
  ensurePage(s.slug, 'service');
}

// City pages
for (const c of cities) {
  ensurePage(generateCityPageSlug(c.slug), 'city');
}

// Combo pages -- check which have content
const comboContentSet = new Set<string>();
for (const cc of getAllComboContent()) {
  comboContentSet.add(`${cc.serviceId}:${cc.cityId}`);
}

for (const combo of combos) {
  const hasContent = comboContentSet.has(`${combo.serviceId}:${combo.cityId}`);
  ensurePage(combo.slug, 'combo', hasContent);
}

// Comparison pages
for (const comp of comparisons) {
  ensurePage(comp.slug, 'comparison');
}

// ─── Link Source 1: Header/Footer (sitewide navigation) ────────────────────
// Header links: homepage, services hub, locations hub
// Footer links: all city pages, service category representatives, core pages
// Every page on the site includes header/footer, so these targets get
// 1 inbound link from "header/footer" (counted once, not per-page)

const headerFooterTargets = [
  'homepage',
  // Core pages linked in header/footer
  ...corePages.map((cp) => cp.slug),
  // Footer city links (all 21 cities)
  ...cities.map((c) => generateCityPageSlug(c.slug)),
];

for (const target of headerFooterTargets) {
  addLink(target, 'header/footer');
}

// Footer also links to service category pages (all 63 services via mega-menu)
for (const s of services) {
  addLink(s.slug, 'header/footer-megamenu');
}

// ─── Link Source 2: Service pages (related services) ────────────────────────
// Each service page links to related services in the same category (up to 4)
for (const service of services) {
  const sameCategory = services.filter(
    (s) => s.category === service.category && s.id !== service.id
  );
  const related = sameCategory.slice(0, 4);
  for (const rel of related) {
    addLink(rel.slug, `service:${service.slug}`);
  }
}

// ─── Link Source 3: City pages ──────────────────────────────────────────────
// CityServicesGrid: each city page links to all 63 combo pages for that city
for (const city of cities) {
  const cityPageSlug = generateCityPageSlug(city.slug);
  for (const service of services) {
    const comboSlug = generateComboSlug(service.slug, city.slug);
    addLink(comboSlug, `city:${cityPageSlug}`);
  }

  // CityNearbyCities: links to adjacent city pages
  const cityData = cities.find((c) => c.id === city.id);
  if (cityData) {
    for (const adjId of cityData.adjacentCityIds) {
      const adjCity = cities.find((c) => c.id === adjId);
      if (adjCity) {
        addLink(generateCityPageSlug(adjCity.slug), `city:${cityPageSlug}`);
      }
    }
  }
}

// ─── Link Source 4: Combo pages (for pages with content) ────────────────────
// Each combo page with content links to:
// - Parent service page
// - Parent city page
// - Nearby city combo pages (via adjacentCityIds)
for (const combo of combos) {
  const hasContent = comboContentSet.has(`${combo.serviceId}:${combo.cityId}`);
  if (!hasContent) continue;

  const comboSlug = combo.slug;

  // Link to parent service page
  const service = services.find((s) => s.id === combo.serviceId);
  if (service) {
    addLink(service.slug, `combo:${comboSlug}`);
  }

  // Link to parent city page
  const city = cities.find((c) => c.id === combo.cityId);
  if (city) {
    addLink(generateCityPageSlug(city.slug), `combo:${comboSlug}`);

    // Link to nearby city combos (same service, adjacent cities)
    for (const adjId of city.adjacentCityIds) {
      const adjCity = cities.find((c) => c.id === adjId);
      if (adjCity && service) {
        const adjComboSlug = generateComboSlug(service.slug, adjCity.slug);
        addLink(adjComboSlug, `combo:${comboSlug}`);
      }
    }
  }
}

// ─── Link Source 5: Homepage ────────────────────────────────────────────────
// Homepage links to:
// - Representative services (one per category, 8 categories)
// - All 21 city cards
const seenCategories = new Set<string>();
for (const service of services) {
  if (!seenCategories.has(service.category)) {
    seenCategories.add(service.category);
    addLink(service.slug, 'homepage');
  }
}

for (const city of cities) {
  addLink(generateCityPageSlug(city.slug), 'homepage');
}

// ─── Output Report ──────────────────────────────────────────────────────────

const ORPHAN_THRESHOLD = 3;

console.log('='.repeat(72));
console.log('  ORPHAN PAGE AUDIT REPORT');
console.log('='.repeat(72));
console.log();

const allPages = Array.from(pages.entries());
const totalPages = allPages.length;

// Separate orphans
const orphans = allPages
  .filter(([, record]) => record.inboundCount < ORPHAN_THRESHOLD)
  .sort((a, b) => a[1].inboundCount - b[1].inboundCount);

const contentPendingOrphans = orphans.filter(
  ([, record]) => record.type === 'combo' && !record.hasContent
);

const trueOrphans = orphans.filter(
  ([, record]) => !(record.type === 'combo' && !record.hasContent)
);

// Statistics
const counts = allPages.map(([, r]) => r.inboundCount);
const minLinks = Math.min(...counts);
const maxLinks = Math.max(...counts);
const avgLinks = (counts.reduce((a, b) => a + b, 0) / counts.length).toFixed(1);

// By type stats
const typeStats = new Map<string, { count: number; orphanCount: number }>();
for (const [, record] of allPages) {
  const stat = typeStats.get(record.type) ?? { count: 0, orphanCount: 0 };
  stat.count++;
  if (record.inboundCount < ORPHAN_THRESHOLD) stat.orphanCount++;
  typeStats.set(record.type, stat);
}

console.log(`Total pages audited: ${totalPages}`);
console.log(`Inbound link stats: min=${minLinks}, max=${maxLinks}, avg=${avgLinks}`);
console.log();

console.log('Pages by type:');
for (const [type, stat] of typeStats) {
  console.log(`  ${type}: ${stat.count} pages (${stat.orphanCount} orphans)`);
}
console.log();

// True orphans
if (trueOrphans.length > 0) {
  console.log('-'.repeat(72));
  console.log(`  ORPHANS (< ${ORPHAN_THRESHOLD} inbound links): ${trueOrphans.length}`);
  console.log('-'.repeat(72));
  for (const [slug, record] of trueOrphans) {
    console.log(`  [${record.inboundCount} links] /${slug} (${record.type})`);
    console.log(`           Sources: ${Array.from(record.sources).join(', ')}`);
  }
  console.log();
}

// Content-pending orphan risks
if (contentPendingOrphans.length > 0) {
  console.log('-'.repeat(72));
  console.log(`  CONTENT-PENDING ORPHAN RISKS: ${contentPendingOrphans.length}`);
  console.log('  (Combo pages without hand-written content -- fewer outbound links)');
  console.log('-'.repeat(72));

  // Group by inbound count
  const byCount = new Map<number, string[]>();
  for (const [slug, record] of contentPendingOrphans) {
    const existing = byCount.get(record.inboundCount) ?? [];
    existing.push(slug);
    byCount.set(record.inboundCount, existing);
  }

  for (const [count, slugs] of Array.from(byCount.entries()).sort((a, b) => a[0] - b[0])) {
    console.log(`  [${count} links] ${slugs.length} pages`);
    // Show first 5 examples
    for (const slug of slugs.slice(0, 5)) {
      console.log(`           /${slug}`);
    }
    if (slugs.length > 5) {
      console.log(`           ... and ${slugs.length - 5} more`);
    }
  }
  console.log();
}

// Well-linked pages summary
const wellLinked = allPages.filter(([, r]) => r.inboundCount >= ORPHAN_THRESHOLD).length;
console.log('-'.repeat(72));
console.log(`  SUMMARY`);
console.log('-'.repeat(72));
console.log(`  Well-linked pages (>= ${ORPHAN_THRESHOLD} inbound): ${wellLinked}`);
console.log(`  Orphan pages (< ${ORPHAN_THRESHOLD} inbound):       ${trueOrphans.length}`);
console.log(`  Content-pending orphan risks:    ${contentPendingOrphans.length}`);
console.log(`  Total:                           ${totalPages}`);
console.log();
console.log('='.repeat(72));
