# Roadmap: Newark Quality Roofing

## Overview

This roadmap delivers a conversion-first roofing lead generation website targeting ~1,697 pages across 65 services, 21 Essex County cities, and their cross-product combinations. The build progresses from data foundation through templates, content differentiation at scale, and SEO infrastructure -- with lead capture functional from Phase 2 onward. Every phase produces a verifiable, working capability that builds toward the goal: every page converts visitors into roofing leads.

## Phases

**Phase Numbering:**

- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundation and Data Layer** - Next.js project, design system, data schemas, slug registry, catch-all dispatcher
- [x] **Phase 2: Lead Capture and Core Pages** - Lead form, GoHighLevel integration, homepage, about, contact, hub pages, thank you, privacy
- [x] **Phase 3: Service Pages** - Service template, 65 services with residential/commercial content, related services linking
- [x] **Phase 4: City Pages and Local SEO** - City template, 21 cities with unique local content, map embeds, NAP consistency
- [x] **Phase 5: Content Differentiation Engine** - Content variation system, city data matrix, similarity validation for combo pages
- [x] **Phase 6: Programmatic Scale** - 1,365 combo pages, reverse silo internal linking engine, full site navigation (completed 2026-03-08)
- [ ] **Phase 7: Supporting Content** - 30 comparison pages, 252 supporting articles, reverse silo article linking
- [x] **Phase 8: SEO Infrastructure** - Technical SEO, schema markup, semantic optimization, sitemaps, AI detection QA (completed 2026-03-09)
- [ ] **Phase 9: Conversion and Design Polish** - Editorial Trust design refinement, animations, trust signals, gallery, residential/commercial homepage balance
- [x] **Phase 10: Add Image Creation System** - AI-powered image generation with GPT-4o, ~120 core photos + ~87 OG images, CLI toolset (completed 2026-03-10)

## Phase Details

### Phase 1: Foundation and Data Layer

**Goal**: The project builds, deploys to Vercel, and serves pages through a working slug-to-template dispatcher with validated data for all 1,697 URLs
**Depends on**: Nothing (first phase)
**Requirements**: FNDN-01, FNDN-02, FNDN-03, FNDN-04, FNDN-05, FNDN-06, FNDN-07, FNDN-08
**Success Criteria** (what must be TRUE):

  1. Running `next build` produces a deployable site on Vercel with zero errors
  2. Visiting any of the ~1,697 slugs in a browser resolves to the correct template type (service, city, combo, comparison, or article)
  3. Build-time validation catches and rejects duplicate slugs across all page types
  4. Cormorant headings and Cormorant Garamond body text render correctly on all pages
  5. The forest green / copper / parchment color palette is applied site-wide via CSS variables

**Plans**: 4 plans

Plans:

- [x] 01-01-PLAN.md -- Next.js 16 project setup with TypeScript, Tailwind v4 @theme design tokens, Cormorant fonts
- [x] 01-02-PLAN.md -- Zod schemas + all 63 services, 21 cities, 30 comparisons, core pages data
- [x] 01-03-PLAN.md -- Slug registry with collision detection, combo generation, catch-all [slug] dispatcher with SSG
- [x] 01-04-PLAN.md -- Sticky header with navigation dropdowns, mega-footer, mobile menu, responsive layout shell

### Phase 2: Lead Capture and Core Pages (COMPLETE)

**Goal**: Visitors can submit leads from any page and reach a human via click-to-call, with all core informational pages live
**Depends on**: Phase 1
**Requirements**: LEAD-01, LEAD-02, LEAD-03, LEAD-04, LEAD-05, LEAD-06, CORE-01, CORE-02, CORE-03, CORE-04, CORE-05, CORE-06, CORE-07, CORE-08
**Success Criteria** (what must be TRUE):

  1. Submitting the lead form on any page sends the data to GoHighLevel and redirects to the thank you page
  2. Tapping the phone number on mobile initiates a call; the number is visible and sticky on mobile
  3. The homepage displays hero with form, trust bar, services grid, residential/commercial split, locations grid, testimonials, and FAQ
  4. All 8 core pages (home, about, contact, services hub, locations hub, HTML sitemap, thank you, privacy) are accessible and render complete content
  5. Server-side logging captures every form submission for lead loss prevention

**Plans**: 5 plans

Plans:

- [x] 02-01-PLAN.md -- Lead form foundation: Server Action, LeadForm component, PhoneNumber, data files (site-config, testimonials, FAQ)
- [x] 02-02-PLAN.md -- Homepage with hero + form, trust bar, services grid, testimonials, locations grid, FAQ accordion
- [x] 02-03-PLAN.md -- Thank-you page and phone number integration into sticky header
- [x] 02-04-PLAN.md -- About page and Contact page with map embed, CoreTemplate dispatcher update
- [x] 02-05-PLAN.md -- Services hub, Locations hub, HTML sitemap, Privacy policy, final CoreTemplate wiring

### Phase 3: Service Pages (COMPLETE)

**Goal**: All 65 service pages are live with full-length content covering both residential and commercial audiences
**Depends on**: Phase 2
**Requirements**: SRVC-01, SRVC-02, SRVC-03, SRVC-04, SRVC-05, SRVC-06, SRVC-07, CONT-02, CONT-03, CONT-05
**Success Criteria** (what must be TRUE):

  1. All 65 service pages render with 2,000+ words, H1/H2/H3 keyword hierarchy, and residential AND commercial sections
  2. Each service page has a lead form above the fold in the hero section
  3. Each service page displays a related services block linking to other services in the same category
  4. Breadcrumbs show Home > Services > [Service Name] on every service page
  5. Commercial-specific services (commercial install, repair, replacement, thermal imaging, infrared detection) have dedicated pages with B2B-appropriate language

**Plans**: 9 plans (4 original + 5 gap closure)

Plans:

- [x] 03-01-PLAN.md -- ServiceTemplate component with split hero, 10 section components, sticky sidebar, breadcrumbs, floating CTA
- [x] 03-02-PLAN.md -- Content population: repair/maintenance (10), residential roof types (9), commercial roof types (8)
- [x] 03-03-PLAN.md -- Content population: components/specialty (10), energy/solar (5), commercial services (5), design/consultation (3)
- [x] 03-04-PLAN.md -- Replacement sub-pages (15), content index with Zod validation, full integration of all 65 services
- [x] 03-05-PLAN.md -- Gap closure: expand repair/maintenance content (10 services) to 2,000+ words
- [x] 03-06-PLAN.md -- Gap closure: expand components/specialty content (10 services) to 2,000+ words
- [x] 03-07-PLAN.md -- Gap closure: expand residential roof types content (9 services) to 2,000+ words
- [x] 03-08-PLAN.md -- Gap closure: expand commercial roof types content (8 services) to 2,000+ words
- [x] 03-09-PLAN.md -- Gap closure: expand commercial services (5), energy/solar (4), design/consultation (2) to 2,000+ words

### Phase 4: City Pages and Local SEO (COMPLETE)

**Goal**: All 21 Essex County city pages are live with genuinely unique local content, map embeds, and consistent NAP data
**Depends on**: Phase 2
**Requirements**: CITY-01, CITY-02, CITY-03, CITY-04, CITY-05, CITY-06, CITY-07, CITY-08, LOCL-01, LOCL-02, LOCL-03, LOCL-04, CONT-04
**Success Criteria** (what must be TRUE):

  1. All 21 city pages render with 2,000+ words of unique content including neighborhoods, building types, weather patterns, and local codes
  2. Each city page displays a map embed, lead form above the fold, and services available in that city
  3. Nearby cities block on each page links to geographically adjacent Essex County cities
  4. NAP (Name, Address, Phone) information is identical across every page on the site
  5. City pages address both residential and commercial roofing needs with distinct sections

**Plans**: 7 plans

Plans:

- [x] 04-01-PLAN.md -- CityContentSchema, 14 section components, CityTemplate, scroll spy hook, metadata wiring
- [x] 04-02-PLAN.md -- City content: Urban Core (Newark, East Orange, Orange, Irvington)
- [x] 04-03-PLAN.md -- City content: First Suburbs (Bloomfield, Belleville, Nutley, Maplewood, South Orange)
- [x] 04-04-PLAN.md -- City content: West Essex (West Orange, Montclair, Glen Ridge, Verona, Cedar Grove)
- [x] 04-05-PLAN.md -- City content: Caldwells-Roseland (Caldwell, North Caldwell, Essex Fells, Fairfield, Roseland)
- [x] 04-06-PLAN.md -- City content: Affluent Suburban (Livingston, Millburn)
- [x] 04-07-PLAN.md -- Final integration: aggregator assembly, metadata wiring, content completeness audit

### Phase 5: Content Differentiation Engine (COMPLETE)

**Goal**: A validated content variation system produces genuinely unique combo pages that pass cross-page similarity checks below 70%
**Depends on**: Phase 3, Phase 4
**Requirements**: CMBO-01, CMBO-02, CMBO-03, SEMA-06
**Success Criteria** (what must be TRUE):

  1. The content variation engine produces combo pages with 5-8 distinct intro structures per service category
  2. A sample batch of 50 combo pages shows less than 70% similarity between any two pages for the same service
  3. City-specific data (neighborhoods, building types, weather challenges) is injected into combo content -- not just city name swaps
  4. Content variation patterns are demonstrably different enough to avoid duplicate content detection by search engines

**Plans**: 15 plans (11 original + 4 splits)

Plans:

- [x] 05-01-PLAN.md -- ComboContentSchema, directory structure, aggregator skeleton, similarity validation CLI script
- [x] 05-02-PLAN.md -- Newark combo content: repair-maintenance (10 services)
- [x] 05-03-PLAN.md -- Newark combo content: residential roof types (9 services)
- [x] 05-04-PLAN.md -- Newark combo content: commercial roof types (8 services)
- [x] 05-05-PLAN.md -- Newark combo content: components-specialty (10 services)
- [x] 05-06-PLAN.md -- Newark combo content: energy/solar (5) + commercial services (5)
- [x] 05-07-PLAN.md -- Newark combo content: design/consultation (3 services)
- [x] 05-07a-PLAN.md -- Newark combo content: replacement sub-pages batch 1 (6 services)
- [x] 05-07b-PLAN.md -- Newark combo content: replacement sub-pages final (3 services)
- [x] 05-08-PLAN.md -- Newark combo content: material replacements (6) + Newark city index assembly (65 total)
- [x] 05-09-PLAN.md -- Sample city combos: Montclair (5) + Bloomfield (5) for cross-city validation
- [x] 05-10-PLAN.md -- Sample city combos: East Orange (5)
- [x] 05-10a-PLAN.md -- Sample city combos: Caldwell (5)
- [x] 05-10b-PLAN.md -- Sample city combos: Millburn (5) + 6-city aggregator (90 total)
- [x] 05-11-PLAN.md -- Similarity validation run, analysis, and failure remediation

### Phase 6: Programmatic Scale

**Goal**: All 1,365 combo pages are live with full internal linking following reverse silo methodology
**Depends on**: Phase 5
**Requirements**: CMBO-04, CMBO-05, CMBO-06, CMBO-07, CMBO-08, LINK-01, LINK-02, LINK-03, LINK-04, LINK-05, LINK-06, LINK-07, LINK-08
**Success Criteria** (what must be TRUE):

  1. All 1,365 combo pages render with lead form above the fold, breadcrumbs, and flat URLs (/service-city-nj)
  2. Each combo page links to the same service in nearby cities and other services in the same city
  3. Money pages link to exactly ONE supporting article; supporting articles link back to the money page and forward to the next article
  4. Footer mega-links display all 21 cities and major service categories on every page
  5. No orphan pages exist -- every page has 3+ internal links pointing to it

**Plans**: 23 plans

Plans:

- [x] 06-01-PLAN.md -- ComboTemplate production component with 7 section components + link engine
- [x] 06-02-PLAN.md -- CityServicesGrid combo URL update + metadata switch + orphan audit script
- [x] 06-03-PLAN.md -- Montclair combo content expansion (60 remaining of 65)
- [x] 06-04-PLAN.md -- Bloomfield combo content expansion (60 remaining of 65)
- [x] 06-05-PLAN.md -- East Orange combo content expansion (60 remaining of 65)
- [x] 06-06-PLAN.md -- Caldwell combo content expansion (60 remaining of 65)
- [x] 06-07-PLAN.md -- Millburn combo content expansion (60 remaining of 65)
- [x] 06-08-PLAN.md -- Irvington combo content (65 new)
- [x] 06-09-PLAN.md -- West Orange combo content (65 new)
- [x] 06-10-PLAN.md -- Belleville combo content (65 new)
- [x] 06-11-PLAN.md -- Orange combo content (65 new)
- [x] 06-12-PLAN.md -- Nutley combo content (65 new)
- [x] 06-13-PLAN.md -- South Orange combo content (65 new)
- [x] 06-14-PLAN.md -- Maplewood combo content (65 new)
- [x] 06-15-PLAN.md -- Livingston combo content (65 new)
- [x] 06-16-PLAN.md -- Glen Ridge combo content (65 new)
- [x] 06-17-PLAN.md -- Verona combo content (65 new)
- [x] 06-18-PLAN.md -- Cedar Grove combo content (65 new)
- [x] 06-19-PLAN.md -- North Caldwell combo content (65 new)
- [x] 06-20-PLAN.md -- Essex Fells combo content (65 new)
- [x] 06-21-PLAN.md -- Fairfield combo content (65 new)
- [x] 06-22-PLAN.md -- Roseland combo content (65 new)
- [x] 06-23-PLAN.md -- Final integration: 21-city aggregator, footer mega-links, orphan audit, full build verification

### Phase 7: Supporting Content

**Goal**: All 30 comparison pages and 252 supporting articles are live, completing the topical authority structure
**Depends on**: Phase 6
**Requirements**: COMP-01, COMP-02, COMP-03, COMP-04, COMP-05, COMP-06, COMP-07, ARTL-01, ARTL-02, ARTL-03, ARTL-04, ARTL-05
**Success Criteria** (what must be TRUE):

  1. All 30 comparison pages render with side-by-side analysis, comparison tables, clear winner recommendations, and FAQ sections
  2. All 252 supporting articles (~750 words each) are mapped to their parent money page's keyword cluster
  3. Supporting articles link back to their money page and forward to the next supporting article -- with zero outbound links
  4. Each comparison page has a lead form above the fold
  5. 3 supporting articles exist per money page (service pages), completing the reverse silo structure

**Plans**: 10 plans

Plans:

- [ ] 07-01-PLAN.md -- Infrastructure: content schemas, article registry (252 articles), slug registration, link engine, dispatcher
- [ ] 07-02-PLAN.md -- ComparisonTemplate rebuild with 7 section components (hero, table, analysis, verdict, FAQs, related)
- [ ] 07-03-PLAN.md -- ArticleTemplate with 4 section components (hero, body, CTA, navigation)
- [ ] 07-04-PLAN.md -- Comparison content: all 30 pages (16 material, 6 service, 8 decision-helper)
- [ ] 07-05-PLAN.md -- Article content: repair-maintenance (30) + residential-roof-types (27)
- [ ] 07-06-PLAN.md -- Article content: commercial-roof-types (24) + components-specialty (30)
- [ ] 07-07-PLAN.md -- Article content: replacement-sub-pages + energy-solar + commercial-services + design-consultation
- [ ] 07-08-PLAN.md -- Article content: comparison articles (60) + homepage articles (3)
- [ ] 07-09-PLAN.md -- Article aggregator, Learn More sections, reverse silo wiring into ServiceTemplate/ComparisonTemplate/homepage
- [ ] 07-10-PLAN.md -- Final integration: metadata update, build verification, link chain validation, visual checkpoint

### Phase 8: SEO Infrastructure

**Goal**: Complete technical SEO, schema markup, and semantic optimization are in place across all ~1,744 pages
**Depends on**: Phase 6
**Requirements**: SEOT-01, SEOT-02, SEOT-03, SEOT-04, SEOT-05, SEOT-06, SEOT-07, SEOT-08, SCHM-01, SCHM-02, SCHM-03, SCHM-04, SEMA-01, SEMA-02, SEMA-03, SEMA-04, SEMA-05, SEMA-07
**Success Criteria** (what must be TRUE):

  1. XML sitemaps are auto-generated and split by page type; robots.txt is present and correct
  2. Every page has a canonical tag, proper breadcrumb markup, and is reachable within 3 clicks from the homepage
  3. LocalBusiness schema renders on homepage, contact page, and city pages; Service schema on service and combo pages; FAQ schema on pages with FAQ sections; Breadcrumb schema on all pages
  4. Every page has an H1 with primary keyword + location, H2s with secondary keywords, and H3s with long-tail/FAQ keywords
  5. Core Web Vitals pass (LCP < 2.5s, FID < 100ms, CLS < 0.1) on representative pages across all templates

**Plans**: 4 plans

Plans:

- [ ] 08-01-PLAN.md -- XML sitemaps (split by type), robots.txt, canonical tags, OG tags, seo-config, trailingSlash config
- [ ] 08-02-PLAN.md -- Schema markup utility library (10 builder functions) and JSON-LD wiring into all 7 page types
- [ ] 08-03-PLAN.md -- Semantic HTML upgrades, heading audit, meta audit, anchor text rotation, enhanced 404 page
- [ ] 08-04-PLAN.md -- Validation scripts (3-click depth, flat URLs, topical map, cannibalization), preconnect hints, final integration

### Phase 9: Conversion and Design Polish

**Goal**: The site looks and feels like a premium, trustworthy roofing company with polished design, animations, and balanced residential/commercial messaging
**Depends on**: Phase 2
**Requirements**: DSGN-01, DSGN-02, DSGN-03, DSGN-04, DSGN-05, DSGN-06, DSGN-07, DSGN-08, CONT-01
**Success Criteria** (what must be TRUE):

  1. The Editorial Trust design direction is fully implemented -- rounded corners, organic shapes, grain texture, warm tone photography treatment
  2. Trust bar displays license, insurance, years experience, and BBB credentials as text cards (no images)
  3. Testimonials section with star ratings and before/after project gallery with CSS brand treatment are visible on appropriate pages
  4. Page load animations, scroll-triggered reveals, and hover micro-interactions are present using the motion library
  5. The homepage addresses both homeowners and business owners equally with balanced residential/commercial messaging

**Plans**: 4 plans

Plans:

- [x] 09-01-PLAN.md -- Editorial Trust CSS foundation: Motion install, photo treatment utility, grain texture, AnimateIn/CountUp/StaggerGrid components, MotionConfig
- [ ] 09-02-PLAN.md -- Trust signals: TrustBar redesign (text-only, SVG icons, count-up), TestimonialCarousel (aggregate rating, no outbound links), CompactTestimonial, BeforeAfterGallery
- [ ] 09-03-PLAN.md -- Animations: hero entrance orchestration, header scroll shrink, floating CTA entrance, section AnimateIn wrappers across all templates
- [ ] 09-04-PLAN.md -- Residential/commercial balance: unified hero headline, 50/50 split section, balanced services grid, footer restructure, commercial badge

### Phase 10: Add Image Creation System

**Goal**: A complete AI-powered image generation system using GPT-4o produces ~120 core photos and ~87 OG images, replaces all stock photos with AI-generated images matching the Editorial Trust aesthetic, and delivers a reusable CLI toolset for generating, reviewing, approving, and auditing images
**Depends on**: Phase 9
**Requirements**: IMG-01, IMG-02, IMG-03, IMG-04, IMG-05, IMG-06, IMG-07, IMG-08, IMG-09, IMG-10, IMG-11, IMG-12, IMG-13
**Success Criteria** (what must be TRUE):

  1. A manifest-driven image system maps all ~120 core photos to their page associations with SEO-optimized alt text
  2. CLI scripts (images:generate, images:approve, images:status, images:audit, images:og, images:preview) provide a complete workflow for generating, reviewing, and deploying images
  3. All 8 homepage components use manifest lookups with graceful fallback to existing stock photos
  4. Per-page OG images are served for homepage, 65 service pages, and 21 city pages via buildOG() metadata function
  5. Coverage audit script validates that every page has a mapped image in the manifest

**Plans**: 4 plans

Plans:

- [ ] 10-01-PLAN.md -- Foundation: types, manifest schema, shared libraries (OpenAI client, sharp pipeline, cost tracker), prompt definitions, npm deps
- [ ] 10-02-PLAN.md -- CLI scripts: generate (with dry-run and category filter), approve (stage-to-production), status, preview (HTML review page)
- [ ] 10-03-PLAN.md -- OG image compositor with sharp SVG overlay, OG generation CLI, coverage audit script
- [ ] 10-04-PLAN.md -- Site integration: component manifest lookups, per-page OG metadata, dead file cleanup

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
Note: Phases 3 and 4 can run in parallel (both depend only on Phase 2). Phases 7 and 8 can run in parallel (both depend on Phase 6). Phase 9 can run anytime after Phase 2. Phase 10 depends on Phase 9.

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation and Data Layer | 4/4 | Complete | 2026-03-05 |
| 2. Lead Capture and Core Pages | 5/5 | Complete | 2026-03-06 |
| 3. Service Pages | 9/9 | Complete | 2026-03-06 |
| 4. City Pages and Local SEO | 7/7 | Complete | 2026-03-07 |
| 5. Content Differentiation Engine | 15/15 | Complete | 2026-03-07 |
| 6. Programmatic Scale | 23/23 | Complete   | 2026-03-08 |
| 7. Supporting Content | 9/10 | In Progress|  |
| 8. SEO Infrastructure | 4/4 | Complete   | 2026-03-09 |
| 9. Conversion and Design Polish | 1/4 | In Progress | - |
| 10. Add Image Creation System | 4/4 | Complete    | 2026-03-10 |

---
*Roadmap created: 2026-03-05*
*Last updated: 2026-03-10 -- Phase 10 planned (4 plans in 2 waves)*

---

## Milestone v1.1 — Full-Site Topical-Map Overhaul

Brownfield milestone (Phases 11–17) continuing from the shipped v1.0 site. Implements `.planning/IMPLEMENTATION-PLAN.md` verbatim (authoritative) with the verbatim question-form H-tag trees in `.planning/IMPLEMENTATION-BRIEF.md §4.1–4.4, §5, §6, §7`. Transforms the programmatic-SEO site into a nested roofing-contractor topical-map system: a contained combo index (255 keep / 942 noindex / 168+8 redirect), a question-form H-tag hierarchy with explicit Core-before-Outer structure on every template, a real Knowledge Base (hub + 6 cluster hubs + 44 nested articles + 253 folded), a 25-term roofing glossary, a knowledge-graph internal-linking model, single-identity schema, truthful trust signals, and 11 build-failing audit scripts aggregated by `audit:all`. Source of indexation truth: `URL-Classification.csv`.

### Phases

- [x] **Phase 11: IA, Routing, Canonical Data & URL Classification** - Canonical siteConfig, generated URL-classification pipeline (255 keep / 942 noindex / 168+8 redirect) with redirect>404>keep>noindex precedence, hub 301 migrations, nested KB + glossary routes, 6 new hubs, article cluster taxonomy (completed 2026-06-03)
- [ ] **Phase 12: Question-Form H-Tag & Core/Outer Template System** - Verbatim question-form H1/H2/H3 trees on home/service/city/combo/core, 253 article titles → questions, Core-before-Outer policy, `audit:headings`
- [ ] **Phase 13: Knowledge Base Hub, Clusters & 44 KB Articles** - `/roofing-knowledge-base/` hub + 6 cluster hubs + 44 nested KB articles + 253 folded + article/FAQPage schema, `audit:kb`
- [ ] **Phase 14: Roofing Glossary & Entity Dictionary** - `/roofing-glossary/` with 25 DefinedTerm entries + DefinedTermSet schema + KB cross-links, `audit:glossary`
- [ ] **Phase 15: Knowledge-Graph Linking & Schema** - `kb-graph` + bidirectional §15 edges, repointed hub links, single Organization/LocalBusiness @id + Place areaServed, per-type JSON-LD, `audit:links` + `audit:schema`
- [ ] **Phase 16: Trust/NAP Cleanup, Deduplication & SEO-Language Removal** - Single-source siteConfig enforced, gated AggregateRating, shared CtaBanner/dedup, scrubbed SEO jargon, deleted dead components, `audit:trust` + `audit:dedupe` + `audit:seo-language`
- [ ] **Phase 17: Launch QA, Crawl Verification & Indexation Monitoring** - Staging + production crawl, indexation/redirect/schema verification, Search Console monitoring, §22 completion report, `audit:sitemap` + `audit:redirects` + `audit:all`

### Phase Details

#### Phase 11: IA, Routing, Canonical Data & URL Classification

**Goal**: The site has a single canonical config and a generated indexation pipeline that classifies every URL, so the routing layer serves the correct verdict (keep / noindex / redirect / 404) and all new topical-map routes resolve
**Depends on**: Phase 10 (shipped v1.0 baseline)
**Requirements**: IA-01, IA-02, IA-03, IA-04, IA-05, INDX-01, INDX-02, INDX-03, INDX-04, INDX-05, INDX-06, INDX-07, INDX-08, KB-01, KB-02
**Success Criteria** (what must be TRUE):

  1. `npm run build` is green; visiting any of the 255 KEEP combos returns an indexable page in the sitemap, and visiting any of the 942 NOINDEX combos returns a live page emitting `robots:{index:false,follow:true}` that is excluded from the sitemap
  2. The 168 combo redirects and 8 legacy redirects (incl. `/services`→`/roofing-services`, `/locations`→`/service-areas`, `/resources`→`/roofing-knowledge-base`) return permanent 301s to their CSV targets; existing flat-roof + www redirects are preserved; unknown slugs return 404
  3. The build validates the counts 255 keep / 942 noindex / 168 combo-redirect / 8 legacy-redirect and fails on any mismatch; routing precedence is redirect > 404 > keep > noindex; `PRIORITY_COMBO_PAIRS` ⊆ the 255 KEEP set
  4. `/roofing-knowledge-base/` + all 6 cluster hubs (HTTP 200, `dynamicParams=false`), `/roofing-glossary/` (HTTP 200 via dedicated route), and all 44 KB-article nested URLs (`/roofing-knowledge-base/{cluster}/{slug}/`) resolve collision-free
  5. The 6 new hubs (`/residential-roofing`, `/commercial-roofing`, `/flat-roof-systems`, `/roofing-materials`, `/free-roofing-estimate`, `/our-roofing-process`) resolve at 200; the "Full page content coming soon" placeholder is removed; incomplete scaffolds are noindexed until content lands; no public placeholder trust values render
  6. `ArticleSchema` has a required 6-value `cluster` enum with all 253 articles assigned (none undefined); `ArticleContentSchema` supports ≥10 sections + a `faqs[]` array; `PageTypeSchema` + slug registry are extended with `kb-hub`/`kb-cluster-hub`/`kb-article`/`glossary`/hub types with build-time collision checking

**Plans**: 5 plans (3 waves)

Plans:
**Wave 1**

- [x] 11-01-PLAN.md — Canonical src/config/site-config.ts (rating.enabled=false, env phone preserved) + re-export shim + gated buildAggregateRating (D-01)
- [x] 11-02-PLAN.md — URL-classification generator (255/942/168/8 + zero-chain asserts) emits JSON+redirects.mjs; verdict API consumer; prebuild wiring (D-02, D-03)
- [x] 11-03-PLAN.md — ArticleSchema cluster enum + classify all articles + generator update; parallel KB content schema (≥10 sections + faqs[]); PageTypeSchema + slug registry extension (D-13, D-14, D-15)

**Wave 2** *(blocked on Wave 1 completion)*

- [x] 11-04-PLAN.md — next.config redirects (168+8 301s, flat-roof+www preserved) + hub core-slug renames; combo robots/canonical gate; sitemap keep-filter; PRIORITY_COMBO_PAIRS reconciliation (D-04..D-09)

**Wave 3** *(blocked on Wave 2 completion)*

- [x] 11-05-PLAN.md — KB catch-all route (hub+6 clusters+44 articles) + dedicated glossary route + 6 hub scaffolds (noindexed, no placeholder); audit:sitemap + audit:redirects validators (D-10, D-11, D-12)

#### Phase 12: Question-Form H-Tag & Core/Outer Template System

**Goal**: Every important template emits a single question-form H1 and an all-questions heading tree with Core-before-Outer ordering, enforced by a build-failing heading audit
**Depends on**: Phase 11
**Requirements**: KB-03, HTAG-01, HTAG-02, HTAG-03, HTAG-04, HTAG-05, HTAG-06, HTAG-07, HTAG-08, AUD-01
**Success Criteria** (what must be TRUE):

  1. `npm run audit:headings` passes in the build: every important page has exactly one question-form H1 rendered as a single uninterrupted string (no `<br>`/split-`<span>`), all H2/H3/H4 are questions, no skipped heading levels, the H1 is never repeated as an H2, and there are no H-tags in nav/footer/buttons/form-labels
  2. The homepage emits the verbatim §4.1 tree Core-first — the "What Roofing Services Do We Provide…" H2 (7 service H3s) precedes every Outer section — and includes the 5-step "How Does Our Roofing Process Work?" H2 plus a Roofing-Knowledge-Base link section
  3. Every service page H1 is "Who Provides [Service] in Newark?" (§4.2 tree), every city page H1 is "Who Provides Roofing Services in [City]?" (§4.3 tree, incl. new Permits and Materials-for-[City] sections), and every combo page H1 is "Who Provides [Service] in [City]?" (§4.4 tree)
  4. Pseudo-headings (testimonials/CTA/pricing-PAA/maps introduced by `<p>`/`<span>`/`<div>`) are promoted to real headings; `ContentAuthorityBlock` is out of the Core band; the first major H2 after the hero is the Core Section per §17 page-type rules on every template
  5. All 253 article titles are rewritten to cluster-keyed question form, are unique, and keep their slugs stable

**Plans**: 5 plans (3 waves)

Plans:
**Wave 1**

- [x] 12-01-PLAN.md — Central heading-config module + hybrid build-failing audit:headings (static + rendered passes) + gated node-html-parser install (AUD-01, KB-03 static checks)

**Wave 2** *(parallel; all depend on 12-01; disjoint file sets)*

- [ ] 12-02-PLAN.md — Homepage §4.1 Core-first + service §4.2 tree; split-H1 fix + Header nav H-tag demote + pseudo-heading promotion (HTAG-01/02/03/04/07/08)
- [ ] 12-03-PLAN.md — City §4.3 tree + new shared Permits/Materials sections; combo §4.4 tree incl. placeholder; ContentAuthorityBlock out of Core band (HTAG-05/06/07/08, D-11)
- [ ] 12-04-PLAN.md — Generator title patterns → question form + regenerate articles.ts (252 unique, slugs stable); in-scope core/hub H1s (KB-03, HTAG-01/03, D-12)

**Wave 3** *(phase gate; depends on 12-01..12-04)*

- [ ] 12-05-PLAN.md — Full `next build && audit:headings` green; fix residual violations; wire build-failing gate; human-verify new copy + tree fidelity (AUD-01, §19 verify)

**UI hint**: yes

#### Phase 13: Knowledge Base Hub, Clusters & 44 KB Articles

**Goal**: The Knowledge Base exists end-to-end — a hub, 6 cluster hubs, and 44 authored nested articles — with the 253 existing articles folded under clusters and correct Article/FAQPage schema
**Depends on**: Phase 11, Phase 12
**Requirements**: IA-06, KB-04, KB-05, KB-06, KB-07, SCHM-01, AUD-02
**Success Criteria** (what must be TRUE):

  1. `npm run audit:kb` (and `audit:schema`) pass in the build; the KB hub + 6 cluster hubs + all 44 KB articles return HTTP 200 with complete content — no "Content Coming Soon"/placeholder/thin sections
  2. `/roofing-knowledge-base/` renders the §5 H1 + 7-H2 tree, links all 6 clusters + the glossary, and each cluster hub lists its member articles
  3. All 44 KB articles are authored at their nested URLs via the §6 template — question-form H1, visible FAQs that match FAQPage schema, internal links to services + related KB
  4. The 253 existing articles are surfaced under their clusters with cluster-aware breadcrumbs; `/resources` returns 301 to `/roofing-knowledge-base`
  5. KB articles emit Article + WebPage + BreadcrumbList (+ FAQPage where FAQs are visible); Article includes datePublished/dateModified/image/mainEntityOfPage + `isPartOf` its cluster hub; every new KB/cluster/glossary/hub page exports metadata (title, description, openGraph, `alternates.canonical`) with exactly one h1

**Plans**: TBD
**UI hint**: yes

#### Phase 14: Roofing Glossary & Entity Dictionary

**Goal**: A 25-term roofing glossary is live with structured definitions, KB cross-links, and DefinedTermSet schema, enforced by a build-failing glossary audit
**Depends on**: Phase 11, Phase 13
**Requirements**: GLOS-01, SCHM-02, AUD-03
**Success Criteria** (what must be TRUE):

  1. `npm run audit:glossary` (and `audit:schema`) pass in the build
  2. `/roofing-glossary/` renders the §7 H1 + 5 H2 term-group headings + all 25 DefinedTerm entries, each with definition · why it matters · related services/problems/materials/components · internal links
  3. Every glossary term is cross-linked to its matching KB article and related service; no orphan terms
  4. The glossary emits exactly one DefinedTermSet whose members are DefinedTerm nodes + a BreadcrumbList, via new `buildDefinedTermSetSchema`/`buildDefinedTermSchema`, and the schema validates

**Plans**: TBD
**UI hint**: yes

#### Phase 15: Knowledge-Graph Linking & Schema

**Goal**: A single knowledge-graph link source wires the §15 edges across the site and the site emits single-identity, per-type JSON-LD, with no links to retired hubs and no orphans
**Depends on**: Phase 13, Phase 14 (link targets must exist)
**Requirements**: LINK-01, LINK-02, LINK-03, LINK-04, SCHM-03, SCHM-04, AUD-04
**Success Criteria** (what must be TRUE):

  1. `npm run audit:links` and `npm run audit:schema` pass in the build; no internal `next/link` points to `/services`, `/locations`, or `/resources` — all hub links use the new URLs
  2. `src/linking/kb-graph.ts` is the single source the link-engine uses for §15 definition links (no KB targets hard-coded in components); Roof Repair / Replacement / Storm / Commercial pages link the §15 KB definitions under question-form headings with bidirectional commercial↔definition links; location pages link city services + nearby cities + local KB + free estimate
  3. There are no broken internal links and no orphan KB articles or glossary terms
  4. Exactly one `Organization` @id and one `LocalBusiness` @id exist sitewide; `Service.provider` references the LocalBusiness @id; `Place` is used for `areaServed` on city + combo pages; no per-page LocalBusiness entities; the combo WebPage `name` bug is fixed
  5. Per-type JSON-LD @graphs validate (home/service/location/combo/KB/glossary) per §16; FAQPage appears only where FAQs are visible; AggregateRating is omitted unless `rating.enabled` is true

**Plans**: TBD

#### Phase 16: Trust/NAP Cleanup, Deduplication & SEO-Language Removal

**Goal**: All trust/NAP values flow from a single config with no fabricated or placeholder claims, duplicate crawlable sections are collapsed, and all internal-SEO-facing language is removed — penalty-risk hardening
**Depends on**: Phase 11 (independent of Phases 12–15; may run anytime after 11)
**Requirements**: TRST-01, TRST-02, TRST-03, TRST-04, TRST-05, DEDP-01, DEDP-02, DEDP-03, SEOL-01, SEOL-02, AUD-05
**Success Criteria** (what must be TRUE):

  1. `npm run audit:trust`, `audit:dedupe`, and `audit:seo-language` (plus `audit:schema`) pass in the build
  2. `src/config/site-config.ts` is the single source for all NAP/trust/identity values; no template or JSON-LD hardcodes them; no fabricated rating/review/project counts and no public placeholders (`[License #]`, `[Policy Info]`, `[CANONICAL VALUE REQUIRED]`, `0.0`, `0+`, fake `5.0`, fake `500+`) render in HTML or JSON-LD
  3. AggregateRating is gated behind `rating.enabled` and omitted from HTML + JSON-LD while false; the NJ HIC license renders wherever a licensed claim appears (or the claim is omitted), with legal-entity clarification if shared across brands; the Contact map and every CityMapNap embed reference the canonical address/geo or are omitted
  4. A shared `<CtaBanner/>` replaces the triplicated "$10,000" CTA; each page renders at most one crawlable LeadForm and one crawlable testimonial section; one process block per page, with full process detail only on `/our-roofing-process`; the footer duplicate-comment + mini lead-form placeholder are removed
  5. A repo grep over rendered components returns zero matches for Google/GSC/Search Console/impressions/indexing quality/content target/`10/10`/crawl-paths/"money page"; `PriorityIndexingHub` + `ContentAuthorityBlock` + dead jargon components are deleted; any replacement headings are question-form

**Plans**: TBD
**UI hint**: yes

#### Phase 17: Launch QA, Crawl Verification & Indexation Monitoring

**Goal**: A full staging + production crawl confirms the entire overhaul holds end-to-end, `audit:all` gates the build, and the §22 completion report ships
**Depends on**: Phase 11, Phase 12, Phase 13, Phase 14, Phase 15, Phase 16 (final gate)
**Requirements**: QA-01, QA-02, QA-03, QA-04, QA-05, AUD-06
**Success Criteria** (what must be TRUE):

  1. `audit:sitemap`, `audit:redirects`, and `audit:all` exist; `audit:all` aggregates every audit and fails the build on any violation; `npm run build` and `npm run audit:all` both pass
  2. Staging + production crawl verifies all H-tags are questions, there are no nav/footer/form H-tags, and Core-before-Outer holds on every template
  3. Crawl verifies the 255 keep combos are indexable, the 942 noindex combos emit `noindex,follow`, no noindex/redirected URLs appear in the sitemap, the 168+8 redirects are correct with no chains, and no old-hub internal links remain
  4. KB hub + 6 clusters + 44 articles return 200 and are complete; the glossary returns 200 with 25 terms; schema validates per page type; no fake ratings/placeholders render in HTML or JSON-LD; no SEO-facing language remains
  5. The updated sitemap is submitted and Search Console is monitored for 404s, redirect issues, noindex pages, and indexed-page count; the §22 completion report is produced

**Plans**: TBD

### Progress (Milestone v1.1)

**Execution Order:**
Phases execute: 11 → 12 → 13 → 14 → 15 → 17, with Phase 16 runnable anytime after Phase 11 (independent of Phases 12–15; penalty-risk hardening) and Phase 17 as the final QA gate after all others (11–16).

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 11. IA, Routing, Canonical Data & URL Classification | 5/5 | Complete   | 2026-06-03 |
| 12. Question-Form H-Tag & Core/Outer Template System | 1/5 | In Progress|  |
| 13. Knowledge Base Hub, Clusters & 44 KB Articles | 0/? | Not started | - |
| 14. Roofing Glossary & Entity Dictionary | 0/? | Not started | - |
| 15. Knowledge-Graph Linking & Schema | 0/? | Not started | - |
| 16. Trust/NAP Cleanup, Deduplication & SEO-Language Removal | 0/? | Not started | - |
| 17. Launch QA, Crawl Verification & Indexation Monitoring | 0/? | Not started | - |

---
*Milestone v1.1 roadmap appended: 2026-06-01 — 7 phases (11–17) derived from IMPLEMENTATION-PLAN.md §19; 59 requirements mapped, 100% coverage*
