# Requirements: Newark Quality Roofing

**Defined:** 2026-03-05
**Core Value:** Every page converts visitors into roofing leads through above-the-fold forms and click-to-call

## v1 Requirements

### Foundation & Data Layer

- [x] **FNDN-01**: Next.js 15 project with TypeScript, Tailwind CSS v4, deployed on Vercel
- [x] **FNDN-02**: Zod-validated data schemas for services (63), cities (21), and cross-product combos (1,323)
- [x] **FNDN-03**: Slug registry with build-time collision detection for all ~1,697 flat URLs
- [x] **FNDN-04**: Single catch-all `[slug]` route with dispatcher resolving to correct template
- [x] **FNDN-05**: Full SSG with Vercel split builds for all ~1,697 pages
- [x] **FNDN-06**: Cormorant (headings) + Cormorant Garamond (body) fonts via next/font
- [x] **FNDN-07**: Editorial Trust design system — forest green (#1A3A2A), copper (#C17F4E), parchment (#F5F0E8) palette with CSS variables
- [x] **FNDN-08**: Mobile-responsive, conversion-optimized layout

### Lead Capture

- [x] **LEAD-01**: Lead form above the fold on every page (first name, last name, phone, email, service dropdown, project details textarea)
- [x] **LEAD-02**: Form submits to server-side API route that proxies to GoHighLevel webhook
- [x] **LEAD-03**: Thank you page redirect after form submission
- [x] **LEAD-04**: Click-to-call phone number on every page (sticky header on mobile)
- [x] **LEAD-05**: GoHighLevel tracking phone number integration for call source attribution
- [x] **LEAD-06**: Server-side logging for webhook submissions (lead loss prevention)

### Page Templates — Core Pages (~8)

- [x] **CORE-01**: Homepage with hero + form, trust bar, services grid, residential/commercial split, locations grid, testimonials, FAQ
- [x] **CORE-02**: About page with company story, values, team (placeholder content)
- [x] **CORE-03**: Contact page with form, map embed, NAP info
- [x] **CORE-04**: Services hub page listing all 63 services with category grouping
- [x] **CORE-05**: Locations hub page listing all 21 Essex County cities
- [x] **CORE-06**: HTML sitemap page (crawlable, listing all URLs by category)
- [x] **CORE-07**: Thank you page (post-form submission confirmation)
- [x] **CORE-08**: Privacy policy page

### Page Templates — Service Pages (63)

- [x] **SRVC-01**: Service page template with H1 primary keyword, H2 secondary keywords, H3 long-tail/FAQ
- [x] **SRVC-02**: 2,000+ words per service page with residential AND commercial sections
- [x] **SRVC-03**: Lead form above the fold in hero section
- [x] **SRVC-04**: Related services block (internal linking)
- [x] **SRVC-05**: Service-specific FAQ section
- [x] **SRVC-06**: Breadcrumbs (Home > Services > [Service Name])
- [x] **SRVC-07**: All 63 services populated: repair/maintenance (10), residential roof types (8), commercial roof types (8), components/specialty (10), energy/solar (4), commercial services (5), design/consultation (3), replacement sub-pages (17 — reduced from 18, excluding duplicate)

### Page Templates — City Pages (21)

- [x] **CITY-01**: City page template with unique city-specific content (neighborhoods, building types, weather patterns, local codes)
- [x] **CITY-02**: 2,000+ words per city page covering both residential and commercial roofing
- [x] **CITY-03**: Lead form above the fold
- [x] **CITY-04**: Map embed for the city
- [x] **CITY-05**: Nearby cities block (geographically adjacent cities)
- [x] **CITY-06**: Services available in this city block
- [x] **CITY-07**: Breadcrumbs (Home > Locations > [City Name])
- [x] **CITY-08**: All 21 Essex County cities populated with unique content

### Page Templates — Service x City Combo Pages (1,323)

- [x] **CMBO-01**: Combo page template combining service + city data
- [x] **CMBO-02**: City data matrix providing genuinely unique content per combo (not just city name swaps)
- [x] **CMBO-03**: Content variation engine with multiple intro structures, rotating content blocks
- [ ] **CMBO-04**: Lead form above the fold
- [ ] **CMBO-05**: Same service in nearby cities block
- [ ] **CMBO-06**: Other services in same city block
- [ ] **CMBO-07**: Breadcrumbs (Home > [Service] > [Service] in [City])
- [ ] **CMBO-08**: Flat URL structure (/roof-repair-montclair-nj)

### Page Templates — Comparison Pages (30)

- [x] **COMP-01**: Comparison page template with side-by-side analysis
- [x] **COMP-02**: 15 material vs material comparisons
- [x] **COMP-03**: 5 service vs service comparisons
- [x] **COMP-04**: 6+ decision-helper pages (best roofing for NJ weather, etc.)
- [x] **COMP-05**: Lead form above the fold
- [x] **COMP-06**: Comparison table/matrix with clear winner recommendations
- [x] **COMP-07**: FAQ section with comparison-specific questions

### Page Templates — Supporting Articles (252)

- [x] **ARTL-01**: Supporting article template (~750 words, 60%+ optimization)
- [x] **ARTL-02**: 3 supporting articles per money page (service pages)
- [x] **ARTL-03**: Reverse silo linking: article links back to money page + links to next supporting article
- [x] **ARTL-04**: No outbound links from supporting articles (all equity flows to money page)
- [x] **ARTL-05**: Content mapped to money page's keyword cluster

### SEO — Technical

- [x] **SEOT-01**: XML sitemap auto-generated, split by page type
- [x] **SEOT-02**: HTML sitemap (crawlable page listing all URLs)
- [x] **SEOT-03**: robots.txt
- [x] **SEOT-04**: Canonical tags on every page
- [x] **SEOT-05**: Core Web Vitals optimized (LCP, FID, CLS)
- [ ] **SEOT-06**: Breadcrumbs on all pages
- [x] **SEOT-07**: Flat URL structure (no nesting)
- [x] **SEOT-08**: No page more than 3 clicks from homepage

### SEO — Schema Markup

- [ ] **SCHM-01**: LocalBusiness schema on homepage, contact page, city pages
- [ ] **SCHM-02**: Service schema on service pages and combo pages
- [ ] **SCHM-03**: FAQ schema on pages with FAQ sections
- [ ] **SCHM-04**: Breadcrumb schema on all pages with breadcrumbs

### SEO — Internal Linking

- [ ] **LINK-01**: Reverse silo linking per Page Optimizer Pro methodology
- [ ] **LINK-02**: Money pages link to ONE supporting article only
- [ ] **LINK-03**: Supporting articles link to next supporting article + back to money page
- [ ] **LINK-04**: Nearby cities block on city and combo pages
- [ ] **LINK-05**: Related services block on service and combo pages
- [ ] **LINK-06**: Footer mega-links (all 21 cities + major service categories)
- [ ] **LINK-07**: Contextual in-content internal links (not just nav/footer)
- [ ] **LINK-08**: No orphan pages (every page has 3+ internal links pointing to it)

### SEO — Semantic & Content

- [ ] **SEMA-01**: NLP-optimized content with related entities, synonyms, LSI keywords
- [ ] **SEMA-02**: H1: primary keyword + location (one per page)
- [ ] **SEMA-03**: H2s: secondary keywords (major sections)
- [ ] **SEMA-04**: H3s: long-tail keywords and FAQ questions
- [x] **SEMA-05**: Full topical map with pillar pages and content clusters
- [x] **SEMA-06**: Content variation patterns to avoid duplicate content detection
- [x] **SEMA-07**: AI detection QA pass (ZeroGPT or similar as sanity check)

### SEO — Local

- [x] **LOCL-01**: NAP consistency (Name, Address, Phone) across all pages
- [x] **LOCL-02**: Map embeds on city pages and contact page
- [x] **LOCL-03**: City-specific unique content (neighborhoods, building types, weather)
- [x] **LOCL-04**: Google Business Profile integration readiness

### Design & UI

- [x] **DSGN-01**: Editorial Trust design direction implemented per approved preview
- [x] **DSGN-02**: Trust bar with text cards (licenses, insurance, years experience, BBB) — no images
- [x] **DSGN-03**: Testimonials section with star ratings (placeholder content initially)
- [x] **DSGN-04**: Before/after project gallery with CSS brand treatment on stock photos
- [x] **DSGN-05**: Curated stock photos with CSS warm tone filter, grain texture, consistent cropping
- [x] **DSGN-06**: 50/50 residential and commercial content split throughout site
- [x] **DSGN-07**: Animations and micro-interactions using motion library
- [x] **DSGN-08**: Rounded corners, organic shapes, grain texture per Editorial Trust aesthetic

### Content — Residential/Commercial Split

- [x] **CONT-01**: Homepage addresses both homeowners and business owners equally
- [x] **CONT-02**: Service pages have residential AND commercial sections
- [x] **CONT-03**: Commercial-specific service pages (commercial install, repair, replacement, thermal imaging, infrared detection)
- [x] **CONT-04**: City pages cover both residential and commercial roofing needs
- [x] **CONT-05**: Different CTA language for residential vs commercial audiences

### Image Creation System

- [x] **IMG-01**: Image manifest schema with Zod validation mapping image IDs to file paths, alt text, dimensions, and page associations
- [x] **IMG-02**: Prompt definitions for all ~137 images organized by category (homepage, service heroes, city heroes, gallery, content pool) with shared style prefix
- [x] **IMG-03**: OpenAI client wrapper for gpt-image-1 with rate limiting, concurrency control, and exponential backoff
- [x] **IMG-04**: Sharp processing pipeline for resize, WebP conversion, and optimization
- [x] **IMG-05**: Image generation CLI (npm run images:generate) with dry-run mode and category filtering
- [x] **IMG-06**: Staging/approve workflow (npm run images:approve) with HTML preview page for visual review
- [x] **IMG-07**: Status reporting (npm run images:status) with cost tracking and generation reports
- [x] **IMG-08**: Coverage audit (npm run images:audit) validating every page has a mapped image in manifest
- [x] **IMG-09**: OG image compositor using sharp SVG overlay with branded gradient, copper accent bar, and auto-wrapping title text
- [x] **IMG-10**: OG generation CLI (npm run images:og) producing ~87 OG composites for homepage, service, and city pages
- [x] **IMG-11**: Component manifest integration: all 8 image-referencing components use manifest lookups with graceful stock photo fallbacks
- [x] **IMG-12**: Per-page OG images in buildOG() metadata function with fallback to shared SEO_CONFIG.OG_IMAGE
- [x] **IMG-13**: Dead file cleanup (3 empty badge files) and infrastructure updates (.gitignore, .env.example, package.json)

## Milestone v1.1 Requirements — Full-Site Topical-Map Overhaul

**Defined:** 2026-06-01
**Source:** `.planning/IMPLEMENTATION-PLAN.md` (authoritative) + `.planning/IMPLEMENTATION-BRIEF.md` (verbatim H-tag trees). Each REQ is testable; phases per the plan's §19.

### Information Architecture & Routing (Phase 11)

- [ ] **IA-01**: The nested KB route (`app/roofing-knowledge-base/[[...slug]]`) serves `/roofing-knowledge-base/` + all 6 cluster hubs at HTTP 200; `dynamicParams=false` with the fixed nested paths enumerated in `generateStaticParams`
- [ ] **IA-02**: `/roofing-glossary/` resolves at HTTP 200 via a dedicated route (not the flat `[slug]` dispatcher)
- [ ] **IA-03**: All 44 KB-article NESTED URLs (`/roofing-knowledge-base/{cluster}/{slug}/`) resolve at HTTP 200 and are registered collision-free
- [ ] **IA-04**: The 5 new hubs (`/residential-roofing`, `/commercial-roofing`, `/flat-roof-systems`, `/roofing-materials`, `/free-roofing-estimate`) + `/our-roofing-process` resolve at 200 with real content; the "Full page content coming soon" placeholder is removed; incomplete scaffolds are noindexed until content lands
- [ ] **IA-05**: `PageTypeSchema` + slug registry are extended with `kb-hub`, `kb-cluster-hub`, `kb-article`, `glossary`, and the hub page type, with build-time collision checking
- [ ] **IA-06**: `/resources` returns 301 to `/roofing-knowledge-base` so the site has a single canonical KB index _(Phase 13)_

### Indexation Pipeline (Phase 11)

- [ ] **INDX-01**: `scripts/build-url-classification.ts` generates `src/generated/url-classification.json` + `src/generated/redirects.generated.mjs` from `URL-Classification.csv`; `src/data/url-classification.ts` consumes the JSON and exposes `getComboVerdict`/`getComboRedirects`/`getClassification`/`isKeep`/`isNoindex`/`isRedirect`
- [ ] **INDX-02**: The build validates the counts 255 keep / 942 noindex / 168 combo-redirect / 8 legacy-redirect and fails on mismatch
- [ ] **INDX-03**: Routing precedence is redirect > 404 > keep > noindex; all 942 NOINDEX combos emit `robots:{index:false,follow:true}` and are excluded from the sitemap
- [ ] **INDX-04**: The 168 combo + 8 legacy redirects emit permanent 301s to their CSV targets via the generated redirects imported into `next.config.ts`, and are excluded from `generateStaticParams` + sitemap; existing flat-roof + www redirects are preserved
- [ ] **INDX-05**: All 255 KEEP combos are indexable and in the sitemap; unknown slugs return 404
- [ ] **INDX-06**: `/services`→`/roofing-services`, `/locations`→`/service-areas`, `/resources`→`/roofing-knowledge-base` 301 migrations are in place and the core slugs are updated
- [ ] **INDX-07**: `seo-priority.ts` is reconciled — `PRIORITY_COMBO_PAIRS` ⊆ the 255 KEEP set; no NOINDEX/CONSOLIDATE combo is priority-boosted
- [ ] **INDX-08**: `trailingSlash: false` is retained; nested KB/glossary URLs are served without a trailing slash

### Knowledge Base Data & Content (Phases 11 & 13)

- [ ] **KB-01**: `ArticleSchema` gains a required `cluster` enum (6 clusters); all 253 existing articles are cluster-assigned (none undefined) and the build validates _(Phase 11)_
- [ ] **KB-02**: `ArticleContentSchema` (or a KB content schema) supports ≥10 sections + a `faqs[]` array _(Phase 11)_
- [ ] **KB-03**: All 253 article titles are rewritten to question form, cluster-keyed; slugs stay stable; titles are unique _(Phase 12)_
- [ ] **KB-04**: `/roofing-knowledge-base/` renders the §5 H1 + 7-H2 tree; each of the 6 cluster hubs lists its member articles; the hub links all 6 clusters + the glossary _(Phase 13)_
- [ ] **KB-05**: All 44 KB articles are authored at their nested URLs via the §6 template — question-form H1, visible FAQs matching FAQPage schema, internal links to services + related KB; no "Content Coming Soon"/placeholder/thin sections _(Phase 13)_
- [ ] **KB-06**: The 253 folded articles are surfaced under their clusters with cluster-aware breadcrumbs _(Phase 13)_
- [ ] **KB-07**: Every new KB/cluster/glossary/hub page exports metadata (title, description, openGraph, `alternates.canonical`) with exactly one h1 _(Phase 13)_

### Question-Form Heading Hierarchy (Phase 12)

- [ ] **HTAG-01**: The homepage emits exactly one question-form H1 as a single uninterrupted string (no `<br>`/`<span>` split)
- [ ] **HTAG-02**: Homepage order is Core-first — the "What Roofing Services Do We Provide…" H2 (7 service H3s) precedes every Outer section; the page includes the 5-step "How Does Our Roofing Process Work?" H2 + a Roofing-Knowledge-Base link section + the verbatim §4.1 Outer H2s
- [ ] **HTAG-03**: No `<p>`/`<span>`/`<div>` pseudo-heading introduces a section (testimonials/CTA/pricing-PAA/maps promoted to real headings); strict h1>h2>h3>h4 with no skipped levels; H1 never repeated as H2; no H-tags in nav/footer/buttons/form-labels
- [ ] **HTAG-04**: Every service page H1 is "Who Provides [Service] in Newark?" with the §4.2 9-question H2/H3 tree
- [ ] **HTAG-05**: Every city page H1 is "Who Provides Roofing Services in [City]?" with the §4.3 11-question tree, including the new Permits and Materials-for-[City] sections
- [ ] **HTAG-06**: Every combo page H1 is "Who Provides [Service] in [City]?" with the §4.4 question tree
- [ ] **HTAG-07**: Core-before-Outer holds on every template; `ContentAuthorityBlock` is out of the Core band
- [ ] **HTAG-08**: The first major H2 after the hero is the Core Section per §17 page-type rules

### Roofing Glossary (Phase 14)

- [ ] **GLOS-01**: `/roofing-glossary/` renders the §7 H1 + 5 H2 term-group headings + all 25 DefinedTerm entries (definition · why it matters · related services/problems/materials/components · internal links), each cross-linked to its matching KB article

### Internal Linking (Phase 15)

- [ ] **LINK-01**: No internal `next/link` points to `/services`, `/locations`, or `/resources`; all hub links use the new URLs
- [ ] **LINK-02**: `src/linking/kb-graph.ts` is the single source the link-engine uses for §15 definition links; no KB targets are hard-coded in components
- [ ] **LINK-03**: Roof Repair / Replacement / Storm / Commercial pages link the §15 KB definitions under question-form headings; commercial↔definition links are bidirectional; location pages link city services + nearby cities + local KB + free estimate
- [ ] **LINK-04**: No broken internal links; no orphan KB articles or glossary terms

### Schema (Phases 13 / 14 / 15)

- [ ] **SCHM-01**: KB articles emit Article + WebPage + BreadcrumbList (+ FAQPage where FAQs are visible); Article includes datePublished/dateModified/image/mainEntityOfPage + isPartOf its cluster hub _(Phase 13)_
- [ ] **SCHM-02**: The glossary emits one DefinedTermSet whose members are DefinedTerm nodes + BreadcrumbList, via new `buildDefinedTermSetSchema`/`buildDefinedTermSchema` _(Phase 14)_
- [ ] **SCHM-03**: Exactly one `Organization` @id and one `LocalBusiness` @id exist sitewide; `Service.provider` references the LocalBusiness @id; `Place` is used for `areaServed` on city + combo; no per-page LocalBusiness entities; the combo WebPage `name` bug is fixed _(Phase 15)_
- [ ] **SCHM-04**: Per-type JSON-LD @graphs validate (home/service/location/combo/KB/glossary) per §16; FAQPage appears only where FAQs are visible; AggregateRating is omitted unless `rating.enabled` is true _(Phase 15)_

### Trust & NAP (Phases 11 & 16)

- [ ] **TRST-01**: `src/config/site-config.ts` is the single source for all NAP/trust/identity values (consolidates `src/data/site-config.ts`); no template/JSON-LD hardcodes these values _(config created Phase 11, enforced Phase 16)_
- [ ] **TRST-02**: No fabricated rating/review/project counts and no public placeholders (`[License #]`, `[Policy Info]`, `[CANONICAL VALUE REQUIRED]`, `0.0`, `0+`, fake `5.0`, fake `500+`) render in HTML or JSON-LD; unknown claims are omitted _(Phase 16)_
- [ ] **TRST-03**: AggregateRating is gated behind `rating.enabled` and omitted from HTML + JSON-LD while false _(Phase 16)_
- [ ] **TRST-04**: The NJ HIC license number renders wherever a licensed claim appears, or the claim is omitted if unknown; legal-entity clarification is added if the license is shared across brands _(Phase 16)_
- [ ] **TRST-05**: The Contact page map and every CityMapNap embed reference the canonical address/geo or are omitted (no generic placeholder query) _(Phase 16)_

### Duplicate Cleanup (Phase 16)

- [ ] **DEDP-01**: A shared `<CtaBanner/>` replaces the triplicated "$10,000" CTA across service/city/combo banners
- [ ] **DEDP-02**: Each page renders at most one crawlable LeadForm and one crawlable testimonial section
- [ ] **DEDP-03**: One process block per page; full process detail lives only on canonical `/our-roofing-process`; the footer duplicate-comment + mini lead-form placeholder are removed

### SEO-Language Removal (Phase 16)

- [ ] **SEOL-01**: No public crawlable text references Google/GSC/Search Console/impressions/indexing quality/content target/`10/10`/crawl-paths/"money page"; a repo grep over rendered components returns zero matches
- [ ] **SEOL-02**: `PriorityIndexingHub` + `ContentAuthorityBlock` + dead jargon components are deleted; any replacement headings are question-form

### Audit Scripts (Phases 12–17) — each fails the build on violation

- [ ] **AUD-01**: `audit:headings` created _(Phase 12)_
- [ ] **AUD-02**: `audit:kb` created _(Phase 13)_
- [ ] **AUD-03**: `audit:glossary` created _(Phase 14)_
- [ ] **AUD-04**: `audit:links` + `audit:schema` created _(Phase 15)_
- [ ] **AUD-05**: `audit:trust` + `audit:dedupe` + `audit:seo-language` created _(Phase 16)_
- [ ] **AUD-06**: `audit:sitemap` + `audit:redirects` + `audit:all` created; `audit:all` aggregates every audit and fails the build on any violation _(Phase 17)_

### Launch QA (Phase 17)

- [ ] **QA-01**: Staging + production crawl verifies all H-tags are questions, no nav/footer/form H-tags, and Core-before-Outer
- [ ] **QA-02**: Crawl verifies 255 keep indexable, 942 noindex,follow, no noindex/redirected URLs in the sitemap, 168+8 redirects correct with no chains, and no old-hub internal links
- [ ] **QA-03**: KB hub + 6 clusters + 44 articles return 200 and are complete; glossary returns 200 with 25 terms; schema validates per page type; no fake ratings/placeholders in HTML or JSON-LD; no SEO-facing language
- [ ] **QA-04**: The updated sitemap is submitted and Search Console is monitored for 404s, redirect issues, noindex pages, and indexed-page count
- [ ] **QA-05**: The §22 completion report is produced; `npm run build` and `npm run audit:all` both pass

## v2 Requirements

### Enhanced Lead Capture

- **LEAD-V2-01**: Multi-step progressive form (step 1: service -> step 2: details -> step 3: contact)
- **LEAD-V2-02**: Speed-to-lead automation via GoHighLevel workflows (instant auto-response)
- **LEAD-V2-03**: Lead loss prevention with localStorage fallback

### Enhanced Trust

- **TRST-V2-01**: Review/AggregateRating schema (once real reviews exist)
- **TRST-V2-02**: Real project photography replacing stock photos
- **TRST-V2-03**: Video testimonials

### Enhanced SEO

- **SEO-V2-01**: Google Business Profile claimed and optimized
- **SEO-V2-02**: Citation building across directories
- **SEO-V2-03**: Backlink acquisition strategy

## Out of Scope

| Feature | Reason |
|---------|--------|
| Blog / content marketing | Focus on service + location + comparison + supporting articles only |
| Real project photography | Launch with curated stock + CSS treatment, replace later |
| Google Ads / PPC | Organic SEO focus only |
| Social media integration | Not needed for lead gen |
| User accounts / login | No user-facing auth needed |
| Payment processing | Leads only, no transactions |
| Mobile app | Web only |
| Multi-language support | English only |
| Online quote calculator | Expectation mismatch -- leads to bad estimates and lost trust |
| Live chat widget | Adds complexity without proven conversion benefit for roofing |
| ISR / on-demand generation | User chose full SSG with split builds |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FNDN-01 | Phase 1 | Pending |
| FNDN-02 | Phase 1 | Pending |
| FNDN-03 | Phase 1 | Pending |
| FNDN-04 | Phase 1 | Pending |
| FNDN-05 | Phase 1 | Pending |
| FNDN-06 | Phase 1 | Pending |
| FNDN-07 | Phase 1 | Pending |
| FNDN-08 | Phase 1 | Pending |
| LEAD-01 | Phase 2 | Pending |
| LEAD-02 | Phase 2 | Pending |
| LEAD-03 | Phase 2 | Pending |
| LEAD-04 | Phase 2 | Pending |
| LEAD-05 | Phase 2 | Pending |
| LEAD-06 | Phase 2 | Pending |
| CORE-01 | Phase 2 | Pending |
| CORE-02 | Phase 2 | Pending |
| CORE-03 | Phase 2 | Pending |
| CORE-04 | Phase 2 | Pending |
| CORE-05 | Phase 2 | Pending |
| CORE-06 | Phase 2 | Pending |
| CORE-07 | Phase 2 | Pending |
| CORE-08 | Phase 2 | Pending |
| SRVC-01 | Phase 3 | Complete |
| SRVC-02 | Phase 3 | Complete |
| SRVC-03 | Phase 3 | Complete |
| SRVC-04 | Phase 3 | Complete |
| SRVC-05 | Phase 3 | Complete |
| SRVC-06 | Phase 3 | Complete |
| SRVC-07 | Phase 3 | Complete |
| CONT-02 | Phase 3 | Complete |
| CONT-03 | Phase 3 | Complete |
| CONT-05 | Phase 3 | Complete |
| CITY-01 | Phase 4 | Complete |
| CITY-02 | Phase 4 | Complete |
| CITY-03 | Phase 4 | Complete |
| CITY-04 | Phase 4 | Complete |
| CITY-05 | Phase 4 | Complete |
| CITY-06 | Phase 4 | Complete |
| CITY-07 | Phase 4 | Complete |
| CITY-08 | Phase 4 | Complete |
| LOCL-01 | Phase 4 | Complete |
| LOCL-02 | Phase 4 | Complete |
| LOCL-03 | Phase 4 | Complete |
| LOCL-04 | Phase 4 | Complete |
| CONT-04 | Phase 4 | Complete |
| CMBO-01 | Phase 5 | Complete |
| CMBO-02 | Phase 5 | Complete |
| CMBO-03 | Phase 5 | Complete |
| SEMA-06 | Phase 5 | Complete |
| CMBO-04 | Phase 6 | Pending |
| CMBO-05 | Phase 6 | Pending |
| CMBO-06 | Phase 6 | Pending |
| CMBO-07 | Phase 6 | Pending |
| CMBO-08 | Phase 6 | Pending |
| LINK-01 | Phase 6 | Pending |
| LINK-02 | Phase 6 | Pending |
| LINK-03 | Phase 6 | Pending |
| LINK-04 | Phase 6 | Pending |
| LINK-05 | Phase 6 | Pending |
| LINK-06 | Phase 6 | Pending |
| LINK-07 | Phase 6 | Pending |
| LINK-08 | Phase 6 | Pending |
| COMP-01 | Phase 7 | Complete |
| COMP-02 | Phase 7 | Complete |
| COMP-03 | Phase 7 | Complete |
| COMP-04 | Phase 7 | Complete |
| COMP-05 | Phase 7 | Complete |
| COMP-06 | Phase 7 | Complete |
| COMP-07 | Phase 7 | Complete |
| ARTL-01 | Phase 7 | Complete |
| ARTL-02 | Phase 7 | Complete |
| ARTL-03 | Phase 7 | Complete |
| ARTL-04 | Phase 7 | Complete |
| ARTL-05 | Phase 7 | Complete |
| SEOT-01 | Phase 8 | Complete |
| SEOT-02 | Phase 8 | Complete |
| SEOT-03 | Phase 8 | Complete |
| SEOT-04 | Phase 8 | Complete |
| SEOT-05 | Phase 8 | Complete |
| SEOT-06 | Phase 8 | Pending |
| SEOT-07 | Phase 8 | Complete |
| SEOT-08 | Phase 8 | Complete |
| SCHM-01 | Phase 8 | Pending |
| SCHM-02 | Phase 8 | Pending |
| SCHM-03 | Phase 8 | Pending |
| SCHM-04 | Phase 8 | Pending |
| SEMA-01 | Phase 8 | Pending |
| SEMA-02 | Phase 8 | Pending |
| SEMA-03 | Phase 8 | Pending |
| SEMA-04 | Phase 8 | Pending |
| SEMA-05 | Phase 8 | Complete |
| SEMA-07 | Phase 8 | Complete |
| DSGN-01 | Phase 9 | Complete |
| DSGN-02 | Phase 9 | Complete |
| DSGN-03 | Phase 9 | Complete |
| DSGN-04 | Phase 9 | Complete |
| DSGN-05 | Phase 9 | Complete |
| DSGN-06 | Phase 9 | Complete |
| DSGN-07 | Phase 9 | Complete |
| DSGN-08 | Phase 9 | Complete |
| CONT-01 | Phase 9 | Complete |
| IMG-01 | Phase 10 | Complete |
| IMG-02 | Phase 10 | Complete |
| IMG-03 | Phase 10 | Complete |
| IMG-04 | Phase 10 | Complete |
| IMG-05 | Phase 10 | Complete |
| IMG-06 | Phase 10 | Complete |
| IMG-07 | Phase 10 | Complete |
| IMG-08 | Phase 10 | Complete |
| IMG-09 | Phase 10 | Complete |
| IMG-10 | Phase 10 | Complete |
| IMG-11 | Phase 10 | Complete |
| IMG-12 | Phase 10 | Complete |
| IMG-13 | Phase 10 | Complete |

**Coverage (v1):**
- v1 requirements: 114 total (101 original + 13 image creation system)
- Mapped to phases: 114
- Unmapped: 0

### Milestone v1.1 Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| IA-01 | Phase 11 | Pending |
| IA-02 | Phase 11 | Pending |
| IA-03 | Phase 11 | Pending |
| IA-04 | Phase 11 | Pending |
| IA-05 | Phase 11 | Pending |
| INDX-01 | Phase 11 | Pending |
| INDX-02 | Phase 11 | Pending |
| INDX-03 | Phase 11 | Pending |
| INDX-04 | Phase 11 | Pending |
| INDX-05 | Phase 11 | Pending |
| INDX-06 | Phase 11 | Pending |
| INDX-07 | Phase 11 | Pending |
| INDX-08 | Phase 11 | Pending |
| KB-01 | Phase 11 | Pending |
| KB-02 | Phase 11 | Pending |
| KB-03 | Phase 12 | Pending |
| HTAG-01 | Phase 12 | Pending |
| HTAG-02 | Phase 12 | Pending |
| HTAG-03 | Phase 12 | Pending |
| HTAG-04 | Phase 12 | Pending |
| HTAG-05 | Phase 12 | Pending |
| HTAG-06 | Phase 12 | Pending |
| HTAG-07 | Phase 12 | Pending |
| HTAG-08 | Phase 12 | Pending |
| AUD-01 | Phase 12 | Pending |
| IA-06 | Phase 13 | Pending |
| KB-04 | Phase 13 | Pending |
| KB-05 | Phase 13 | Pending |
| KB-06 | Phase 13 | Pending |
| KB-07 | Phase 13 | Pending |
| SCHM-01 | Phase 13 | Pending |
| AUD-02 | Phase 13 | Pending |
| GLOS-01 | Phase 14 | Pending |
| SCHM-02 | Phase 14 | Pending |
| AUD-03 | Phase 14 | Pending |
| LINK-01 | Phase 15 | Pending |
| LINK-02 | Phase 15 | Pending |
| LINK-03 | Phase 15 | Pending |
| LINK-04 | Phase 15 | Pending |
| SCHM-03 | Phase 15 | Pending |
| SCHM-04 | Phase 15 | Pending |
| AUD-04 | Phase 15 | Pending |
| TRST-01 | Phase 16 | Pending |
| TRST-02 | Phase 16 | Pending |
| TRST-03 | Phase 16 | Pending |
| TRST-04 | Phase 16 | Pending |
| TRST-05 | Phase 16 | Pending |
| DEDP-01 | Phase 16 | Pending |
| DEDP-02 | Phase 16 | Pending |
| DEDP-03 | Phase 16 | Pending |
| SEOL-01 | Phase 16 | Pending |
| SEOL-02 | Phase 16 | Pending |
| AUD-05 | Phase 16 | Pending |
| QA-01 | Phase 17 | Pending |
| QA-02 | Phase 17 | Pending |
| QA-03 | Phase 17 | Pending |
| QA-04 | Phase 17 | Pending |
| QA-05 | Phase 17 | Pending |
| AUD-06 | Phase 17 | Pending |

**Milestone v1.1 coverage:**
- v1.1 requirements: 59 total
- Mapped to phases (11–17): 59
- Unmapped: 0

---
*Requirements defined: 2026-03-05*
*Last updated: 2026-06-01 -- Milestone v1.1 requirements traceability added (59 reqs across Phases 11–17)*
