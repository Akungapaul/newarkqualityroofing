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
- [ ] **IMG-05**: Image generation CLI (npm run images:generate) with dry-run mode and category filtering
- [ ] **IMG-06**: Staging/approve workflow (npm run images:approve) with HTML preview page for visual review
- [x] **IMG-07**: Status reporting (npm run images:status) with cost tracking and generation reports
- [x] **IMG-08**: Coverage audit (npm run images:audit) validating every page has a mapped image in manifest
- [x] **IMG-09**: OG image compositor using sharp SVG overlay with branded gradient, copper accent bar, and auto-wrapping title text
- [x] **IMG-10**: OG generation CLI (npm run images:og) producing ~87 OG composites for homepage, service, and city pages
- [ ] **IMG-11**: Component manifest integration: all 8 image-referencing components use manifest lookups with graceful stock photo fallbacks
- [ ] **IMG-12**: Per-page OG images in buildOG() metadata function with fallback to shared SEO_CONFIG.OG_IMAGE
- [x] **IMG-13**: Dead file cleanup (3 empty badge files) and infrastructure updates (.gitignore, .env.example, package.json)

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
| IMG-05 | Phase 10 | Pending |
| IMG-06 | Phase 10 | Pending |
| IMG-07 | Phase 10 | Complete |
| IMG-08 | Phase 10 | Complete |
| IMG-09 | Phase 10 | Complete |
| IMG-10 | Phase 10 | Complete |
| IMG-11 | Phase 10 | Pending |
| IMG-12 | Phase 10 | Pending |
| IMG-13 | Phase 10 | Complete |

**Coverage:**
- v1 requirements: 114 total (101 original + 13 image creation system)
- Mapped to phases: 114
- Unmapped: 0

---
*Requirements defined: 2026-03-05*
*Last updated: 2026-03-10 -- Phase 10 requirements added (IMG-01 through IMG-13)*
