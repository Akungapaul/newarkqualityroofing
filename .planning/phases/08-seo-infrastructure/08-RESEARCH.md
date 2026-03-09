# Phase 8: SEO Infrastructure - Research

**Researched:** 2026-03-09
**Domain:** Technical SEO, Schema Markup, Semantic Optimization for Next.js 16 SSG site
**Confidence:** HIGH

## Summary

Phase 8 covers technical SEO infrastructure for a 1,744-page Next.js 16 static site. The site already has a working catch-all `[slug]/page.tsx` dispatcher with `generateMetadata()`, visual breadcrumbs on all page types, and a homepage JSON-LD `@graph` pattern. The phase adds: XML sitemaps split by page type, robots.txt, canonical tags, OpenGraph tags, schema markup (LocalBusiness, Service, FAQ, Breadcrumb) as a shared utility library, heading hierarchy audit/auto-fix, semantic HTML upgrades, meta title/description truncation, 404 page enhancement, Core Web Vitals optimization, internal link anchor text patterns, build-time validation scripts (3-click depth, flat URL check, topical map, cannibalization), and bundle analysis.

The primary technical challenge is the XML sitemap strategy. Next.js does NOT auto-generate a sitemap index from multiple nested `sitemap.ts` files. The cleanest approach for this project is to use the route-segment nesting pattern (e.g., `app/services/sitemap.ts`, `app/cities/sitemap.ts`) with a manual sitemap index at `app/sitemap.xml/route.ts`. The schema markup work is straightforward -- extract the existing `HomeJsonLd` pattern into a shared `src/lib/schema.ts` utility with typed builder functions, then wire each template to render the appropriate `@graph`.

**Primary recommendation:** Build all SEO infrastructure using native Next.js APIs (MetadataRoute.Sitemap, MetadataRoute.Robots, metadata.alternates.canonical, metadata.openGraph). Create a shared `src/lib/schema.ts` with typed JSON-LD builder functions following the existing `@graph` pattern. All audit/validation work should be build-time scripts in `scripts/` following the established pattern (e.g., `scripts/audit-orphan-pages.ts`).

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- Use @graph pattern on every page (matching existing homepage pattern)
- Shared schema utility library at `src/lib/schema.ts` with reusable builder functions: `buildLocalBusinessSchema()`, `buildServiceSchema()`, `buildFaqSchema()`, `buildBreadcrumbSchema()`, `buildWebPageSchema()`, `buildArticleSchema()`
- Standard schema mapping per page type (Homepage: Organization + RoofingContractor + WebSite + WebPage + Breadcrumb + FAQ; Service pages: Service + WebPage + Breadcrumb + FAQ; City pages: LocalBusiness with city-specific areaServed + WebPage + Breadcrumb + FAQ; Combo pages: Service + WebPage + Breadcrumb + FAQ; Comparison pages: WebPage + Breadcrumb + FAQ; Articles: Article + WebPage + Breadcrumb)
- LocalBusiness on city pages uses central Newark HQ address with city-specific `areaServed` property
- Sitemap index file pointing to type-specific sitemaps (sitemap-services.xml, sitemap-cities.xml, sitemap-combos.xml, sitemap-comparisons.xml, sitemap-articles.xml, sitemap-core.xml)
- Generated via Next.js built-in MetadataRoute.Sitemap (app/sitemap.ts pattern)
- Skip priority and changefreq values (Google ignores them)
- robots.txt: allow all crawlers, reference sitemap index, block /api/, /thank-you, /_next/
- Automated heading audit script with auto-fix and before/after report
- H1 patterns per page type: Service "[Service Name] in Essex County, NJ", City "Roofing Services in [City], NJ", Combo "[Service Name] in [City], NJ"
- Single H1 enforced per page (flag zero or multiple H1s)
- Meta title auto-truncate at 60 chars, meta description at 160 chars
- OG tags: og:title, og:description, og:type, og:url, og:image on every page
- Default branded OG image (1200x630px)
- Topical map validation as build-time script (fail if pillar < 3 supporting pages)
- Full cannibalization audit with >70% similarity flagging
- Semantic HTML upgrades: article, section, aside, figure, figcaption, address
- Custom 404 page matching Editorial Trust design
- No trailing slashes (trailingSlash: false in next.config)
- Minimal noindex: only thank-you and privacy-policy pages
- Anchor text rotation patterns for internal links
- Core Web Vitals: next/image, explicit dimensions, font-display: swap, bundle analysis, preconnect hints
- Build-time 3-click depth BFS validation
- Build-time flat URL check
- AI detection QA pass SKIPPED (content differentiation engine already ensures variation)

### Claude's Discretion
- Exact implementation of schema builder function signatures and TypeScript types
- CSS critical inlining implementation approach
- Bundle analyzer threshold configuration
- BFS crawler implementation details (data layer vs HTML parsing)
- Anchor text rotation algorithm
- 404 page layout and styling details
- Preconnect tag placement strategy

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| SEOT-01 | XML sitemap auto-generated, split by page type | Next.js MetadataRoute.Sitemap with route-segment nesting + manual sitemap index route handler |
| SEOT-02 | HTML sitemap (crawlable page listing all URLs) | Already exists at `/sitemap` (SitemapPage component) -- verify and update if needed |
| SEOT-03 | robots.txt | Next.js MetadataRoute.Robots at `app/robots.ts` |
| SEOT-04 | Canonical tags on every page | Next.js `metadata.alternates.canonical` in `generateMetadata()` |
| SEOT-05 | Core Web Vitals optimized (LCP, FID, CLS) | next/image, font optimization, @next/bundle-analyzer, preconnect hints |
| SEOT-06 | Breadcrumbs on all pages | Visual breadcrumbs already exist on all templates; add matching BreadcrumbList schema |
| SEOT-07 | Flat URL structure (no nesting) | Already enforced by slug-registry; add build-time validation script |
| SEOT-08 | No page more than 3 clicks from homepage | Build-time BFS depth validation script |
| SCHM-01 | LocalBusiness schema on homepage, contact page, city pages | Schema utility buildLocalBusinessSchema() with city-specific areaServed |
| SCHM-02 | Service schema on service pages and combo pages | Schema utility buildServiceSchema() |
| SCHM-03 | FAQ schema on pages with FAQ sections | Schema utility buildFaqSchema() |
| SCHM-04 | Breadcrumb schema on all pages with breadcrumbs | Schema utility buildBreadcrumbSchema() |
| SEMA-01 | NLP-optimized content with entities, synonyms, LSI keywords | Template-level entity audit; existing content already has entity richness |
| SEMA-02 | H1: primary keyword + location (one per page) | Heading audit script with auto-fix patterns per page type |
| SEMA-03 | H2s: secondary keywords (major sections) | Heading audit script checks H2 keyword presence |
| SEMA-04 | H3s: long-tail keywords and FAQ questions | Heading audit script checks H3 keyword presence |
| SEMA-05 | Full topical map with pillar pages and content clusters | Build-time topical map validation script |
| SEMA-07 | AI detection QA pass | SKIPPED per user decision (content differentiation engine covers this) |
</phase_requirements>

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.1.6 | Framework -- MetadataRoute.Sitemap, MetadataRoute.Robots, generateMetadata | Already installed; native SEO APIs eliminate third-party deps |
| React | 19.2.3 | ReactDOM.preconnect(), ReactDOM.prefetchDNS() for resource hints | Already installed; official API for link hints in app router |
| TypeScript | ^5 | Type-safe schema builders, audit scripts | Already installed |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @next/bundle-analyzer | latest | JS bundle size analysis | Plan 08-04 (CWV optimization) -- install as devDependency |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Native MetadataRoute.Sitemap | next-sitemap | next-sitemap has auto sitemap index but adds dependency; native approach matches existing patterns |
| Manual JSON-LD builders | next-seo | next-seo adds weight; manual builders match existing HomeJsonLd pattern exactly |
| @next/bundle-analyzer | source-map-explorer | bundle-analyzer integrates with Turbopack in Next.js 16.1; source-map-explorer is framework-agnostic but less integrated |

**Installation:**
```bash
npm install -D @next/bundle-analyzer
```

## Architecture Patterns

### Recommended Project Structure (new files for this phase)
```
src/
  app/
    robots.ts                         # MetadataRoute.Robots
    sitemap.xml/
      route.ts                        # Sitemap index route handler
    sitemaps/
      services/sitemap.ts             # 65 service URLs
      cities/sitemap.ts               # 21 city URLs
      combos/sitemap.ts               # 1,323 combo URLs
      comparisons/sitemap.ts          # 30 comparison URLs
      articles/sitemap.ts             # 252 article URLs
      core/sitemap.ts                 # ~8 core page URLs
    not-found.tsx                     # Enhanced 404 page (already exists, upgrade)
  lib/
    schema.ts                         # JSON-LD builder functions
    seo-config.ts                     # Base URL, OG image path, shared SEO constants
  components/
    seo/
      JsonLd.tsx                      # Generic JSON-LD renderer component
scripts/
  audit-headings.ts                   # Heading hierarchy audit + auto-fix
  audit-meta.ts                       # Meta title/description audit + auto-truncate
  validate-click-depth.ts             # BFS 3-click depth validator
  validate-flat-urls.ts               # Flat URL structure validator
  validate-topical-map.ts             # Topical map coverage validator
  audit-cannibalization.ts            # Keyword cannibalization detector
  audit-anchor-text.ts               # Internal link anchor text audit
```

### Pattern 1: Sitemap Index via Route Handler
**What:** Since Next.js does not auto-generate a sitemap index from nested `sitemap.ts` files, create a manual `app/sitemap.xml/route.ts` that returns XML referencing all child sitemaps.
**When to use:** When splitting sitemaps by type (required for 1,744 pages).

**IMPORTANT NOTE on sitemap approach:** The CONTEXT.md specifies sitemap file names like `sitemap-services.xml`, but Next.js route-segment sitemaps generate URLs like `/sitemaps/services/sitemap.xml`. An alternative approach that matches the user's naming preference: use a single `app/sitemap.ts` with `generateSitemaps()` returning `[{id: 'services'}, {id: 'cities'}, ...]` which produces `/sitemap/services.xml`, `/sitemap/cities.xml` etc. However, `generateSitemaps` does NOT automatically create a sitemap index either. The cleanest approach: use route-segment nesting AND a manual index, OR use a single `app/sitemap.ts` with `generateSitemaps()` and a separate index route handler.

**Recommended approach (cleanest for this project):** Single `app/sitemap.ts` with `generateSitemaps()`:
```typescript
// app/sitemap.ts
import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { combos } from '@/data/combos';
import { comparisons } from '@/data/comparisons';
import { articles } from '@/data/articles';
import { corePages } from '@/data/core-pages';
import { generateCityPageSlug } from '@/lib/slug-utils';

const BASE_URL = 'https://www.newarkqualityroofing.com';

type SitemapId = 'core' | 'services' | 'cities' | 'combos' | 'comparisons' | 'articles';

export async function generateSitemaps() {
  return [
    { id: 'core' },
    { id: 'services' },
    { id: 'cities' },
    { id: 'combos' },
    { id: 'comparisons' },
    { id: 'articles' },
  ];
}

export default async function sitemap(
  props: { id: Promise<string> }
): Promise<MetadataRoute.Sitemap> {
  const id = (await props.id) as SitemapId;

  switch (id) {
    case 'core':
      return [
        { url: BASE_URL },
        ...corePages
          .filter(p => p.id !== 'thank-you') // noindex pages excluded
          .map(p => ({ url: `${BASE_URL}/${p.slug}` })),
      ];
    case 'services':
      return services.map(s => ({ url: `${BASE_URL}/${s.slug}` }));
    case 'cities':
      return cities.map(c => ({
        url: `${BASE_URL}/${generateCityPageSlug(c.slug)}`,
      }));
    case 'combos':
      return combos.map(c => ({ url: `${BASE_URL}/${c.slug}` }));
    case 'comparisons':
      return comparisons.map(c => ({ url: `${BASE_URL}/${c.slug}` }));
    case 'articles':
      return articles.map(a => ({ url: `${BASE_URL}/${a.slug}` }));
    default:
      return [];
  }
}
```

This produces URLs like `/sitemap/core.xml`, `/sitemap/services.xml`, etc. Next.js does NOT create the index automatically, so add:

```typescript
// app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';

const BASE_URL = 'https://www.newarkqualityroofing.com';
const SITEMAP_IDS = ['core', 'services', 'cities', 'combos', 'comparisons', 'articles'];

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SITEMAP_IDS.map(id => `  <sitemap>
    <loc>${BASE_URL}/sitemap/${id}.xml</loc>
  </sitemap>`).join('\n')}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
```

**Confidence:** HIGH -- verified against Next.js 16.1.6 official docs.

### Pattern 2: Shared JSON-LD Builder Library
**What:** Extract the existing `HomeJsonLd` pattern into reusable typed builder functions in `src/lib/schema.ts`.
**When to use:** Every page type needs JSON-LD structured data.
**Example:**
```typescript
// src/lib/schema.ts
import { siteConfig } from '@/data/site-config';

const BASE_URL = 'https://www.newarkqualityroofing.com';

// Reusable address object
function buildPostalAddress() {
  return {
    '@type': 'PostalAddress' as const,
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: 'US',
  };
}

// Organization -- referenced by @id from other schemas
export function buildOrganizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: siteConfig.companyName,
    url: BASE_URL,
    telephone: siteConfig.phone.tel,
    email: siteConfig.email,
    address: buildPostalAddress(),
  };
}

// RoofingContractor -- specific LocalBusiness subtype
export function buildRoofingContractorSchema() {
  return {
    '@type': 'RoofingContractor',
    '@id': `${BASE_URL}/#roofingcontractor`,
    name: siteConfig.companyName,
    url: BASE_URL,
    telephone: siteConfig.phone.tel,
    email: siteConfig.email,
    priceRange: '$$',
    address: buildPostalAddress(),
    // ... opening hours, aggregate rating
  };
}

// LocalBusiness for city pages -- city-specific areaServed
export function buildLocalBusinessSchema(city: {
  name: string;
  state: string;
  zipCodes: string[];
}) {
  return {
    '@type': 'RoofingContractor',
    '@id': `${BASE_URL}/#roofingcontractor`,
    name: siteConfig.companyName,
    url: BASE_URL,
    telephone: siteConfig.phone.tel,
    address: buildPostalAddress(),
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'State',
        name: city.state,
      },
    },
  };
}

// Service schema
export function buildServiceSchema(service: {
  name: string;
  slug: string;
  shortDescription: string;
}) {
  return {
    '@type': 'Service',
    '@id': `${BASE_URL}/${service.slug}/#service`,
    name: service.name,
    description: service.shortDescription,
    provider: { '@id': `${BASE_URL}/#organization` },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Essex County, NJ',
    },
  };
}

// FAQ schema
export function buildFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// BreadcrumbList schema
export function buildBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>
) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

// WebPage schema
export function buildWebPageSchema(url: string, name: string) {
  return {
    '@type': 'WebPage',
    '@id': `${url}/#webpage`,
    url,
    name,
    isPartOf: { '@id': `${BASE_URL}/#website` },
  };
}

// Graph assembler
export function buildJsonLdGraph(...schemas: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}
```

**Confidence:** HIGH -- follows existing HomeJsonLd pattern exactly, uses standard schema.org types.

### Pattern 3: Canonical URLs via generateMetadata
**What:** Add `alternates.canonical` and `openGraph` to the existing `generateMetadata()` in `[slug]/page.tsx`.
**When to use:** Every page needs canonical + OG tags.
**Example:**
```typescript
// In [slug]/page.tsx generateMetadata()
const BASE_URL = 'https://www.newarkqualityroofing.com';

// For a service page:
return {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: `${BASE_URL}/${service.slug}`,
  },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `${BASE_URL}/${service.slug}`,
    siteName: 'Newark Quality Roofing',
    type: 'website',
    images: [{ url: `${BASE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};
```

**Important:** Also set `metadataBase` in root `layout.tsx`:
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://www.newarkqualityroofing.com'),
  // ... existing metadata
};
```

**Confidence:** HIGH -- verified against Next.js 16.1.6 generateMetadata docs.

### Pattern 4: robots.ts
**What:** Native Next.js robots.txt generation.
**Example:**
```typescript
// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/thank-you', '/_next/'],
    },
    sitemap: 'https://www.newarkqualityroofing.com/sitemap.xml',
  };
}
```

**Confidence:** HIGH -- directly from Next.js 16.1.6 official docs.

### Pattern 5: Preconnect via ReactDOM
**What:** Add resource hints for external domains (Google Maps, GoHighLevel).
**Example:**
```typescript
// src/app/preload-resources.tsx
'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
  ReactDOM.preconnect('https://maps.googleapis.com', { crossOrigin: 'anonymous' });
  ReactDOM.prefetchDNS('https://rest.gohighlevel.com');
  return null;
}
```

Import in `layout.tsx` inside `<body>`.

**Confidence:** HIGH -- official React 19 / Next.js 16 pattern for resource hints.

### Pattern 6: Build-Time Validation Scripts
**What:** TypeScript scripts in `scripts/` that validate SEO requirements at build time.
**When to use:** 3-click depth, flat URLs, topical map, cannibalization.
**Example (BFS click depth):**
```typescript
// scripts/validate-click-depth.ts
// Uses data layer (not HTML parsing) for speed and accuracy
// Import slug-registry, nav-data, link-engine
// Build adjacency graph from: header nav links, footer links,
// template internal links (related services, nearby cities, etc.)
// BFS from homepage, track depth for each node
// Fail if any page > 3 clicks deep
```

This follows the established pattern from `scripts/audit-orphan-pages.ts` (data layer, not HTML crawling).

**Confidence:** HIGH -- follows existing project script patterns.

### Anti-Patterns to Avoid
- **Using next-sitemap or next-seo packages:** The project already has a clean pattern for native metadata and JSON-LD. Adding third-party packages introduces unnecessary dependencies.
- **Putting schema markup in layout.tsx:** Schema varies per page type. Each template should render its own JSON-LD, not a global wrapper.
- **Hardcoding schema objects per template:** Use the shared builder library to ensure consistency and avoid drift across 6 page types.
- **HTML crawling for validation scripts:** The data layer (slug-registry, link-engine, content data) is the authoritative source of truth. HTML parsing is fragile and slow for 1,744 pages.
- **Using priority/changefreq in sitemaps:** Google ignores these. Including them adds noise without value.
- **Blocking all bots in robots.txt:** Only block specific paths (/api/, /thank-you, /_next/). All 1,742+ content pages should be indexed.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| robots.txt | String template file | `app/robots.ts` with MetadataRoute.Robots | Type-safe, auto-served, cached |
| XML sitemaps | Custom XML generation | MetadataRoute.Sitemap + generateSitemaps() | Handles XML escaping, proper headers, caching |
| Canonical tags | Manual `<link>` tags in head | `metadata.alternates.canonical` | Next.js handles deduplication, SSR ordering |
| OG tags | Manual `<meta>` tags in head | `metadata.openGraph` | Next.js handles proper og: prefix, merging |
| Preconnect hints | Manual `<link>` tags | `ReactDOM.preconnect()` / `ReactDOM.prefetchDNS()` | Proper insertion timing, SSR-safe |
| JSON-LD escaping | Manual JSON.stringify | Shared `JsonLd` component with dangerouslySetInnerHTML | Consistent escaping, single render pattern |
| Bundle analysis | Manual size inspection | @next/bundle-analyzer | Visual treemap, Turbopack integration in 16.1 |

**Key insight:** Next.js 16 has native APIs for every SEO primitive this phase needs. Using them ensures correct HTTP headers, caching behavior, and SSG compatibility without custom infrastructure.

## Common Pitfalls

### Pitfall 1: Sitemap Index Not Auto-Generated
**What goes wrong:** Developer creates multiple `sitemap.ts` files in route segments expecting Next.js to create a sitemap index. It does not.
**Why it happens:** This is a widely-requested but unimplemented Next.js feature.
**How to avoid:** Create a manual sitemap index route handler at `app/sitemap.xml/route.ts` that references all child sitemaps.
**Warning signs:** Google Search Console shows individual sitemaps but no index.

### Pitfall 2: Canonical URL Trailing Slash Mismatch
**What goes wrong:** Canonical URLs have trailing slashes that don't match the actual page URLs.
**Why it happens:** `metadataBase` composition can add trailing slashes unexpectedly.
**How to avoid:** Set `trailingSlash: false` in next.config.ts AND verify canonical output. Use absolute URLs in `alternates.canonical` rather than relative paths.
**Warning signs:** Google Search Console reports conflicting canonical signals.

### Pitfall 3: Schema Markup Missing @id Cross-References
**What goes wrong:** Schema blocks are isolated instead of forming a connected graph. Google can't associate the Service with the Organization.
**Why it happens:** Each builder function creates standalone objects without `@id` references.
**How to avoid:** Every schema builder should include `@id` for its entity and reference parent entities via `{ '@id': '...' }` notation. The `@graph` wrapper connects them.
**Warning signs:** Google Rich Results Test shows entities but no relationships.

### Pitfall 4: generateMetadata Overwriting Layout Metadata
**What goes wrong:** Page-level `generateMetadata()` overwrites root layout metadata (like metadataBase or default OG settings) instead of extending it.
**Why it happens:** Next.js metadata merging is shallow -- nested objects like `openGraph` are replaced, not merged.
**How to avoid:** Always include all required OG fields in page-level metadata. Use a shared OG image constant to avoid repetition.
**Warning signs:** Pages missing OG tags that were set in layout.

### Pitfall 5: Schema on Thank-You or Noindex Pages
**What goes wrong:** Adding full schema markup to pages that are noindexed, wasting crawl budget and potentially confusing Google.
**Why it happens:** Applying schema uniformly without filtering noindex pages.
**How to avoid:** Schema builder functions should check page type. Thank-you and privacy-policy pages get minimal/no schema.
**Warning signs:** Google Search Console shows schema errors on noindex pages.

### Pitfall 6: BFS Click Depth Overcounting
**What goes wrong:** BFS validator reports false positives because it only counts explicit navigation links, missing internal content links.
**Why it happens:** Only checking header/footer nav, ignoring template-level internal links (Related Services, Nearby Cities, CityServicesGrid).
**How to avoid:** Build the link graph from ALL internal linking sources: header nav, footer links, template related services/cities, learn more sections, comparison related, article chains.
**Warning signs:** Pages that are clearly accessible showing as 4+ clicks deep.

### Pitfall 7: H1 Auto-Fix Breaking Existing Good Content
**What goes wrong:** Heading audit script applies patterns too aggressively, changing intentionally unique H1s to generic patterns.
**Why it happens:** Blanket regex replacement without checking if existing H1 is already keyword-optimized.
**How to avoid:** Two-pass approach: first audit to REPORT all headings, then fix only those flagged as missing keywords or location. Generate before/after report for review.
**Warning signs:** Content quality regression after auto-fix.

### Pitfall 8: OG Image 404s on Social Share
**What goes wrong:** Sharing pages on social media shows broken image because the OG image path is relative or doesn't exist.
**Why it happens:** Using relative path like `/og-image.jpg` without verifying the file exists in `public/`.
**How to avoid:** Create the actual OG image file in `public/images/` FIRST, then reference with full absolute URL via metadataBase composition.
**Warning signs:** Facebook/LinkedIn debugger shows no image preview.

## Code Examples

### Existing HomeJsonLd Pattern (reference for schema utility)
```typescript
// Source: src/app/page.tsx (existing)
const graph = [
  { '@type': 'Organization', '@id': `${baseUrl}/#organization`, ... },
  { '@type': 'RoofingContractor', '@id': `${baseUrl}/#roofingcontractor`, ... },
  { '@type': 'WebSite', '@id': `${baseUrl}/#website`, ... },
  { '@type': 'WebPage', '@id': `${baseUrl}/#webpage`, ... },
  { '@type': 'BreadcrumbList', '@id': `${baseUrl}/#breadcrumb`, ... },
  { '@type': 'FAQPage', '@id': `${baseUrl}/#faqpage`, ... },
];

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
  }}
/>
```

### Reusable JsonLd Component
```typescript
// src/components/seo/JsonLd.tsx
interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
```

### Template Integration Example (ServiceTemplate)
```typescript
// Inside ServiceTemplate, after schema utility is built:
import { JsonLd } from '@/components/seo/JsonLd';
import {
  buildServiceSchema,
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildJsonLdGraph,
} from '@/lib/schema';

const BASE_URL = 'https://www.newarkqualityroofing.com';

// In render:
<JsonLd
  data={buildJsonLdGraph(
    buildServiceSchema({
      name: service.name,
      slug: service.slug,
      shortDescription: service.shortDescription,
    }),
    buildWebPageSchema(`${BASE_URL}/${service.slug}`, service.metaTitle),
    buildBreadcrumbSchema([
      { name: 'Home', url: BASE_URL },
      { name: 'Services', url: `${BASE_URL}/services` },
      { name: service.name },
    ]),
    buildFaqSchema(content.faqs),
  )}
/>
```

### Canonical + OG in generateMetadata
```typescript
// Extended generateMetadata for service pages:
case 'service': {
  const service = services.find((s) => s.id === pageData.serviceId);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/${service.slug}`, // metadataBase prepends domain
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/${service.slug}`,
      siteName: 'Newark Quality Roofing',
      type: 'website',
      images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    },
  };
}
```

### Semantic HTML Template Upgrade Pattern
```typescript
// Before (current):
<div className="space-y-12 pb-16 lg:col-span-2">
  <ServiceOverview ... />
  <ServiceSigns ... />
  ...
</div>

// After (semantic upgrade):
<article className="space-y-12 pb-16 lg:col-span-2">
  <section aria-labelledby="overview-heading">
    <ServiceOverview ... />
  </section>
  <section aria-labelledby="signs-heading">
    <ServiceSigns ... />
  </section>
  ...
</article>
```

### Anchor Text Rotation Algorithm
```typescript
// Utility for varying anchor text by position/index
const serviceAnchorPatterns = [
  (name: string) => `${name.toLowerCase()} services`,
  (name: string) => `professional ${name.toLowerCase()}`,
  (name: string) => `${name.toLowerCase()} in Essex County`,
  (name: string) => `expert ${name.toLowerCase()}`,
];

const cityAnchorPatterns = [
  (name: string) => `${name} roofing`,
  (name: string) => `roofing services in ${name}`,
  (name: string) => `${name}, NJ roofing`,
  (name: string) => `roofing contractor in ${name}`,
];

export function getAnchorText(
  patterns: ((name: string) => string)[],
  name: string,
  index: number
): string {
  return patterns[index % patterns.length](name);
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| next-seo package | Native Next.js metadata API | Next.js 13.2+ | No third-party dependency needed |
| Static robots.txt file | `app/robots.ts` with MetadataRoute.Robots | Next.js 13.3+ | Type-safe, dynamic capable |
| next-sitemap package | `app/sitemap.ts` with MetadataRoute.Sitemap | Next.js 13.3+ | Native, cached, SSG-compatible |
| Manual `<link>` preconnect tags | ReactDOM.preconnect() / prefetchDNS() | React 19 | Proper insertion timing, SSR-safe |
| `<link rel="preconnect">` in `<head>` | ReactDOM from client component | Next.js 14+ | No longer supported in metadata API directly |
| themeColor in metadata | viewport configuration | Next.js 14+ | Deprecated -- use generateViewport |
| generateSitemaps with auto-index | Manual sitemap index still required | Current (16.1.6) | Not yet implemented by Next.js team |

**Deprecated/outdated:**
- `metadata.themeColor`: Deprecated since Next.js 14. Use `generateViewport` instead. (Project already uses `<meta>` tag directly -- acceptable)
- `metadata.colorScheme`: Deprecated since Next.js 14.
- `next-seo` package: No longer necessary with native metadata API.
- `priority` and `changefreq` in sitemaps: Google officially ignores these values.

## Open Questions

1. **Sitemap Index Route vs generateSitemaps Pattern**
   - What we know: Both approaches work. `generateSitemaps()` produces `/sitemap/[id].xml` URLs. Route-segment nesting produces `/[segment]/sitemap.xml` URLs. Neither auto-generates an index.
   - What's unclear: Whether the `app/sitemap.xml/route.ts` pattern conflicts with `app/sitemap.ts` (both claim the `/sitemap.xml` path).
   - Recommendation: Use `generateSitemaps()` in `app/sitemap.ts` with the index at a DIFFERENT path. The index URL in robots.txt can point to `/sitemap-index.xml` via `app/sitemap-index.xml/route.ts` to avoid path conflicts. Alternatively, test if `app/sitemap.xml/route.ts` takes precedence.

2. **OG Image Creation**
   - What we know: A 1200x630px branded OG image is needed as default.
   - What's unclear: Whether to create this in Phase 8 or defer to Phase 9 (design).
   - Recommendation: Create a simple placeholder (forest green background + company name in Cormorant font) in Phase 8. Phase 9 can upgrade it with the full Editorial Trust design treatment.

3. **Heading Audit Scope for 252 Articles**
   - What we know: Articles have H1s from `article.metaTitle`, and content sections have H2s. Some may lack location qualifiers.
   - What's unclear: How many of the 252 articles actually need heading fixes vs. are already well-optimized.
   - Recommendation: Run audit in report-only mode first, auto-fix only patterns that are clearly generic (e.g., "FAQ" -> "[Service] FAQ"). Output before/after report for manual review.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Build-time validation scripts (TypeScript, tsx runner) |
| Config file | tsconfig.json (existing) |
| Quick run command | `npx tsx scripts/validate-flat-urls.ts` |
| Full suite command | `npm run build` (all validations run during build) |

### Phase Requirements to Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| SEOT-01 | XML sitemaps generated, split by type | smoke | `curl localhost:3000/sitemap.xml` after dev | No - Wave 0 |
| SEOT-03 | robots.txt served correctly | smoke | `curl localhost:3000/robots.txt` after dev | No - Wave 0 |
| SEOT-04 | Canonical tags on every page | build | `npx tsx scripts/audit-meta.ts` | No - Wave 0 |
| SEOT-05 | CWV passes (LCP < 2.5s, FID < 100ms, CLS < 0.1) | manual | Lighthouse on representative pages post-deploy | N/A |
| SEOT-07 | Flat URL structure | build | `npx tsx scripts/validate-flat-urls.ts` | No - Wave 0 |
| SEOT-08 | No page > 3 clicks from homepage | build | `npx tsx scripts/validate-click-depth.ts` | No - Wave 0 |
| SCHM-01 | LocalBusiness schema on homepage/contact/city pages | smoke | Google Rich Results Test (manual) | N/A |
| SCHM-02 | Service schema on service/combo pages | smoke | Google Rich Results Test (manual) | N/A |
| SCHM-03 | FAQ schema on FAQ pages | smoke | Google Rich Results Test (manual) | N/A |
| SCHM-04 | Breadcrumb schema matches visual breadcrumbs | build | Schema validation in audit script | No - Wave 0 |
| SEMA-02 | H1 contains primary keyword + location | build | `npx tsx scripts/audit-headings.ts` | No - Wave 0 |
| SEMA-05 | Topical map pillar pages have 3+ supporting pages | build | `npx tsx scripts/validate-topical-map.ts` | No - Wave 0 |

### Sampling Rate
- **Per task commit:** Build must pass (`npm run build`)
- **Per wave merge:** Full build + all validation scripts green
- **Phase gate:** Build green + Lighthouse spot checks on 5-6 representative pages

### Wave 0 Gaps
- [ ] `scripts/validate-flat-urls.ts` -- covers SEOT-07
- [ ] `scripts/validate-click-depth.ts` -- covers SEOT-08
- [ ] `scripts/audit-headings.ts` -- covers SEMA-02, SEMA-03, SEMA-04
- [ ] `scripts/audit-meta.ts` -- covers SEOT-04 (canonical verification)
- [ ] `scripts/validate-topical-map.ts` -- covers SEMA-05
- [ ] `scripts/audit-cannibalization.ts` -- covers cannibalization detection

## Sources

### Primary (HIGH confidence)
- [Next.js 16.1.6 MetadataRoute.Sitemap docs](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap) -- sitemap.ts API, generateSitemaps(), all properties
- [Next.js 16.1.6 generateSitemaps docs](https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps) -- multiple sitemap generation, id parameter as Promise<string>
- [Next.js 16.1.6 MetadataRoute.Robots docs](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots) -- robots.ts API, Robots object type
- [Next.js 16.1.6 generateMetadata docs](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) -- metadata fields, alternates.canonical, openGraph, metadataBase, resource hints
- [schema.org LocalBusiness](https://schema.org/LocalBusiness) -- LocalBusiness type hierarchy
- [schema.org BreadcrumbList](https://schema.org/BreadcrumbList) -- BreadcrumbList type spec

### Secondary (MEDIUM confidence)
- [GitHub Discussion #61025](https://github.com/vercel/next.js/discussions/61025) -- Confirmed: Next.js does NOT auto-generate sitemap index from nested sitemaps
- [Next.js trailingSlash config](https://nextjs.org/docs/app/api-reference/config/next-config-js/trailingSlash) -- trailingSlash: false behavior
- [@next/bundle-analyzer npm](https://www.npmjs.com/package/@next/bundle-analyzer) -- Setup and usage, Turbopack integration in 16.1
- [Schema markup for contractor websites](https://eseospace.com/blog/schema-markup-for-contractor-websites/) -- RoofingContractor-specific schema patterns

### Tertiary (LOW confidence)
- None -- all findings verified with official sources

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- all native Next.js 16 APIs, verified against official docs
- Architecture: HIGH -- sitemap and schema patterns verified, existing codebase patterns well-understood
- Pitfalls: HIGH -- common issues documented from official GitHub discussions and known limitations
- Validation scripts: MEDIUM -- script patterns established in project, but specific implementations are novel

**Research date:** 2026-03-09
**Valid until:** 2026-04-09 (stable APIs, unlikely to change)
