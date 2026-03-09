# Phase 8: SEO Infrastructure - Context

**Gathered:** 2026-03-09
**Status:** Ready for planning

<domain>
## Phase Boundary

Complete technical SEO, schema markup, and semantic optimization across all ~1,744 pages. This includes XML sitemaps, robots.txt, canonical tags, schema markup (LocalBusiness, Service, FAQ, Breadcrumb), heading hierarchy audit and optimization, NLP/semantic content validation, Core Web Vitals optimization, and crawlability infrastructure. AI detection QA is skipped per user decision.

</domain>

<decisions>
## Implementation Decisions

### Schema Markup Strategy
- Use @graph pattern on every page (matching existing homepage pattern)
- Shared schema utility library at `src/lib/schema.ts` with reusable builder functions: `buildLocalBusinessSchema()`, `buildServiceSchema()`, `buildFaqSchema()`, `buildBreadcrumbSchema()`, `buildWebPageSchema()`, `buildArticleSchema()`
- Standard schema mapping per page type:
  - Homepage: Organization + RoofingContractor + WebSite + WebPage + Breadcrumb + FAQ
  - Service pages: Service + WebPage + Breadcrumb + FAQ
  - City pages: LocalBusiness (with city-specific areaServed) + WebPage + Breadcrumb + FAQ
  - Combo pages: Service + WebPage + Breadcrumb + FAQ
  - Comparison pages: WebPage + Breadcrumb + FAQ
  - Articles: Article + WebPage + Breadcrumb
- LocalBusiness on city pages uses central Newark HQ address with city-specific `areaServed` property (city name, state, zip codes)
- Automated build-time schema validation: render representative pages (1 per template type), validate JSON-LD against schema.org specs. Also manual Google Rich Results Test on live pages post-deploy.

### XML Sitemap Structure
- Sitemap index file pointing to type-specific sitemaps:
  - sitemap-services.xml (65 pages)
  - sitemap-cities.xml (21 pages)
  - sitemap-combos.xml (1,323 pages)
  - sitemap-comparisons.xml (30 pages)
  - sitemap-articles.xml (252 pages)
  - sitemap-core.xml (~8 pages)
- Generated via Next.js built-in MetadataRoute.Sitemap (app/sitemap.ts pattern)
- Skip priority and changefreq values (Google ignores them); focus on accurate URLs
- robots.txt: allow all crawlers, reference sitemap index, block /api/, /thank-you, /_next/

### Heading & Keyword Optimization
- Automated audit script that checks and auto-fixes heading issues with before/after report
- H1 patterns standardized per page type:
  - Service pages: "[Service Name] in Essex County, NJ"
  - City pages: "Roofing Services in [City], NJ"
  - Combo pages: "[Service Name] in [City], NJ"
  - Comparison A-vs-B: "[A] vs [B]: Which Is Best?"
  - Decision-helper comparisons: Keep current question/guide format (add location qualifier if missing)
  - Articles: Audit and standardize all 252 for consistent keyword + location pattern
- Single H1 enforced per page (flag zero or multiple H1s)
- H2s and H3s audited for keyword presence (not just hierarchy correctness)
  - H2s must reference secondary keywords (service variations, location terms)
  - H3s must reference long-tail/FAQ terms
- Generic headings auto-fixed by prepending service/city context: "Our Process" -> "Our Roof Repair Process", "FAQ" -> "Roof Repair FAQ"

### Meta Title & Description
- Automated audit with auto-truncate for violations:
  - Meta titles over 60 chars: intelligently truncated preserving brand/location
  - Meta descriptions over 160 chars: trimmed at sentence boundaries
  - Keyword presence checked but reported only (not auto-fixed)
  - Before/after report for all changes

### Open Graph Tags
- Add og:title, og:description, og:type, og:url, og:image to every page via Next.js metadata
- Use same title/description as SEO meta
- Default branded OG image (1200x630px) since no page-specific images yet

### Semantic Optimization
- Template-level semantic patterns: validate templates surface related entities (brands, certifications, neighborhoods, landmarks) naturally
- Skip AI detection QA pass (content differentiation engine already ensures variation)
- Data-driven topical map validation as build-time script:
  - Generate map from existing data (services as pillars, articles as cluster content)
  - Fail build if any pillar page has fewer than 3 supporting pages linking to it
  - Output summary report
- Full cannibalization audit: compare every page's title, H1, description against all others using similarity scoring. Flag pages with >70% overlap in target keywords. Validate intent-level separation (transactional service pages, local combo pages, informational articles)

### Entity Optimization
- Template-level entity sections: ensure consistent reference to manufacturer brands (GAF, CertainTeed, Owens Corning), certifications (NJ HIC license, EPA lead-safe), and geographic entities (Newark ward names, Essex County landmarks)
- Audit existing content and fill gaps where entities are missing

### Semantic HTML
- Upgrade templates from generic divs to semantic elements:
  - `<article>` for main content areas
  - `<section>` for distinct content sections
  - `<aside>` for sidebar/related content
  - `<figure>` / `<figcaption>` for images
  - `<address>` for NAP info
- Template-level manual fix (changes propagate to all pages of that type)

### Core Web Vitals & Performance
- Full performance audit including:
  - All images via next/image component (auto WebP/AVIF, responsive sizes, lazy loading)
  - Explicit width/height on all images to prevent CLS
  - Font optimization: keep next/font (already self-hosts at build time), verify font-display: swap and preload
  - JS bundle size analysis via @next/bundle-analyzer, flag page bundles over 100KB
  - Full CSS audit + critical CSS inlining for above-the-fold content
  - Preconnect hints for Google Maps (maps.googleapis.com), DNS-prefetch for GoHighLevel
- Canonical tags via Next.js metadata.alternates.canonical in generateMetadata()
- Build-time 3-click depth validation: BFS crawl from homepage counting click depth, fail if any page >3 clicks deep
- Build-time flat URL check: validate no URL contains path separators
- Vercel defaults + explicit Cache-Control headers for static assets (long max-age)
- Post-deploy Lighthouse spot checks on 5-6 representative pages (no CI integration)

### Internal Link Anchor Text
- Keyword-rich but natural anchor text: "roof repair services" instead of "Roof Repair", "roofing in Montclair, NJ" instead of "Montclair"
- Template patterns with variation: 3-4 anchor text patterns per link type, rotate based on position/index
  - Service links: "[service] services", "professional [service]", "[service] in Essex County"
  - City links: "[city] roofing", "roofing services in [city]", "[city], NJ roofing"
- Vary across instances to avoid over-optimization

### 404 Page
- Custom 404 page matching Editorial Trust design:
  - "Page Not Found" heading
  - Links to homepage, services hub, locations hub, contact
  - Top 5-6 popular services as quick links
  - Click-to-call phone number

### URL Policy
- No trailing slashes (trailingSlash: false in next.config)
- Canonical tags enforce this policy
- Consistent with existing flat URL structure

### Crawlability
- Minimal noindex: only thank-you page (already done) and privacy policy
- All other 1,742 pages indexed as money pages, hub pages, or supporting content

### Claude's Discretion
- Exact implementation of schema builder function signatures and TypeScript types
- CSS critical inlining implementation approach
- Bundle analyzer threshold configuration
- BFS crawler implementation details (data layer vs HTML parsing)
- Anchor text rotation algorithm
- 404 page layout and styling details
- Preconnect tag placement strategy

</decisions>

<specifics>
## Specific Ideas

- Schema markup should follow the exact @graph pattern already established in the homepage's HomeJsonLd component
- The heading audit auto-fix should use the page's service name and city from data to build keyword-rich headings
- Topical map validation and 3-click depth check should be build-time scripts that can fail the build
- Cannibalization audit should flag pages competing for the same intent+keyword combination specifically
- Anchor text variation should feel natural, not templated -- rotate patterns based on index/position

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `Breadcrumbs` component (`src/components/sections/Breadcrumbs.tsx`): Already renders visual breadcrumbs on all page types -- needs matching Breadcrumb schema
- `HomeJsonLd` component (`src/app/page.tsx`): @graph pattern with Organization, RoofingContractor, WebSite, WebPage, BreadcrumbList, FAQPage -- reference for schema utility
- `siteConfig` (`src/data/site-config.ts`): NAP data, phone, email, address -- feeds into LocalBusiness schema
- `slug-registry` (`src/data/slug-registry.ts`): Central source of all slugs and page types -- feeds sitemap generation
- `generateMetadata` in `[slug]/page.tsx`: Already generates title/description per page type -- extend with canonical, OG tags

### Established Patterns
- All pages dispatched through single `[slug]/page.tsx` catch-all route
- Server components render templates; client components limited to LeadForm, MobileMenu, TestimonialCarousel
- Content data is Zod-validated at import time (module-level parse)
- next/font self-hosts Cormorant fonts with display: swap

### Integration Points
- `generateMetadata()` in `[slug]/page.tsx`: Add canonical URLs and OG tags here
- `layout.tsx`: Add preconnect/dns-prefetch link tags here
- Each template (Service, City, Combo, Comparison, Article, Core): Add JSON-LD schema component
- `next.config.ts`: Add trailingSlash: false, potentially headers config
- `app/not-found.tsx`: Custom 404 page
- `app/robots.ts`: Next.js built-in robots.txt generation
- `app/sitemap.ts` (or multiple): Next.js built-in sitemap generation

</code_context>

<deferred>
## Deferred Ideas

None -- discussion stayed within phase scope

</deferred>

---

*Phase: 08-seo-infrastructure*
*Context gathered: 2026-03-09*
