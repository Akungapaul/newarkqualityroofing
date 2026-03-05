# Project Research Summary

**Project:** Newark Quality Roofing - Lead Generation Website
**Domain:** Programmatic SEO local lead generation (roofing, Essex County NJ)
**Researched:** 2026-03-05
**Confidence:** HIGH

## Executive Summary

Newark Quality Roofing is a programmatic SEO lead generation site targeting ~1,700 pages across 63 roofing services, 21 Essex County cities, and their cross-product combinations. The expert consensus is clear: this is a static-first Next.js 15 site deployed on Vercel, with no database, no CMS, and no complex client-side state. The entire content layer lives as TypeScript data files in the repo, validated by Zod at build time, and rendered through 5 page templates dispatched via a single catch-all route. Lead capture flows through React Hook Form to a server-side API route that proxies to GoHighLevel webhooks -- never directly from the client.

The recommended approach is a flat URL structure (`/roof-repair-montclair-nj`) powered by a slug registry that maps every one of the ~1,700 slugs to a page type and template. Content is generated programmatically but must contain genuinely unique, city-specific information per page -- this is not a find-and-replace operation. The architecture must plan for a hybrid SSG/ISR build strategy from day one: pre-render the ~90 highest-priority pages at build time and use ISR for the remaining ~1,600 combo and supporting pages to avoid Vercel's 45-minute build timeout.

The dominant risk is a Google penalty for scaled content abuse. Google's August and December 2025 updates specifically target doorway pages and AI-generated filler content. If the 1,323 service-x-city combo pages are functionally identical with swapped city names, the entire site gets de-indexed -- not just the offending pages. Content differentiation is not a nice-to-have; it is the single most important engineering problem in this project. Secondary risks include webhook lead loss (GoHighLevel does not retry 5xx failures), slug collisions across 1,700 flat URLs, and schema markup over-optimization triggering spam penalties.

## Key Findings

### Recommended Stack

Next.js 15 with App Router, React 19, and TypeScript form the core framework. Tailwind CSS v4 handles styling with its new Rust-based engine. The content layer is plain TypeScript/JSON data files validated by Zod v4 -- no CMS, no database, no Contentlayer (abandoned). Forms use React Hook Form + Zod with Server Actions proxying to GoHighLevel webhooks. The `motion` library (formerly Framer Motion) handles animations. All SEO uses Next.js built-in APIs (Metadata API, sitemap.ts, generateStaticParams).

**Core technologies:**
- **Next.js 15.x + React 19:** SSG/ISR framework with App Router, Server Components, built-in metadata and sitemap APIs
- **TypeScript + Zod 4.x:** Type-safe data layer with build-time content validation across 1,700 pages
- **Tailwind CSS 4.x:** Utility-first styling with 5x faster builds via Rust engine
- **React Hook Form 7.x:** Client-side form validation paired with server-side Zod validation
- **motion 12.x:** Page load orchestration, scroll-triggered reveals, micro-interactions
- **schema-dts 1.x:** Type-safe JSON-LD generation for structured data (Google-maintained)
- **sharp 0.34.x:** Image optimization engine required by next/image in production

**Explicitly avoid:** Contentlayer (abandoned), next-sitemap (unmaintained), framer-motion package (renamed to motion), any CMS, any database/ORM, Redux/Zustand, styled-components/Emotion.

### Expected Features

**Must have (table stakes):**
- Mobile-first responsive design with sticky click-to-call bar
- Lead capture form (4 fields max) integrated with GoHighLevel
- "Get a Free Quote" CTAs above the fold on every page
- 15-20 individual service pages (residential and commercial)
- 21+ city/location pages with genuinely unique local content
- 1,323 service-x-city combo pages (programmatic generation)
- Google Business Profile integration and NAP consistency
- Reviews/testimonials with proper schema markup
- Trust signals (NJ HIC license, insurance, manufacturer certifications)
- Before/after project gallery
- Core Web Vitals performance (<2s page load)
- Structured data (LocalBusiness, Service, FAQ, Breadcrumb schemas)
- XML sitemaps split by page type
- Reverse silo internal linking architecture

**Should have (differentiators):**
- Comparison pages ("TPO vs EPDM", "Asphalt vs Metal") capturing "X vs Y" intent
- Supporting blog/article content (252 pages) for topical authority
- Commercial-specific landing experience with B2B language and different CTAs
- Multi-step qualifying form for higher-quality leads
- Speed-to-lead automation via GoHighLevel workflows
- FAQ sections per page with FAQPage schema for featured snippets
- Financing information/calculator
- Insurance claim assistance content

**Defer indefinitely:**
- User accounts / customer portal
- E-commerce / online payments
- Online booking/scheduling calendar
- Blog comments
- Social media feed embeds
- AI chatbot posing as human

### Architecture Approach

The architecture uses a single catch-all dynamic route (`app/[slug]/page.tsx`) that dispatches to 5 templates (Service, City, Combo, Comparison, Article) based on a slug registry lookup. All content lives in TypeScript data files under `src/data/`, with a slug registry mapping every flat URL to its page type and data key. Internal linking follows reverse silo rules enforced programmatically through the data model -- no manual link management. Form submissions route through a server-side API endpoint that validates, logs, and proxies to GoHighLevel, keeping the webhook URL hidden from clients.

**Major components:**
1. **Data Layer** (TypeScript files) -- 63 services, 21 cities, 1,323 combos, 30 comparisons, 252 articles, business config
2. **Slug Registry** -- Maps all ~1,700 flat slugs to page types; enforces uniqueness at build time
3. **Page Dispatcher** -- Single `[slug]/page.tsx` route that resolves slug to template
4. **5 Page Templates** -- ServiceTemplate, CityTemplate, ComboTemplate, ComparisonTemplate, ArticleTemplate
5. **Internal Linking Engine** -- Rule-based link generation following reverse silo methodology
6. **SEO Infrastructure** -- Schema generators, metadata generator, split sitemaps, robots.txt
7. **Lead Capture Pipeline** -- React Hook Form -> API route -> GoHighLevel webhook with fallback logging

### Critical Pitfalls

1. **Google Scaled Content Abuse / Doorway Penalty** -- The highest risk. Combo pages with swapped city names will trigger de-indexing. Prevention: genuinely unique content per city (local building codes, neighborhood challenges, weather patterns), 5-8 intro template variations per service category, cross-page similarity audit (<70% threshold). This must be solved before any pages go live.

2. **Vercel Build Timeout (45-minute limit)** -- 1,700 SSG pages can exceed the limit. Prevention: hybrid SSG/ISR strategy from day one. Pre-render ~90 high-priority pages at build time, use ISR for combo and supporting pages. Design this into the architecture before adding content pages.

3. **Flat URL Slug Collisions** -- 1,700 slugs at root level risk conflicts. Prevention: comprehensive slug registry with build-time validation, enforced naming conventions (services: `{service}`, cities: `{city}-nj`, combos: `{service}-{city}-nj`).

4. **GoHighLevel Webhook Lead Loss** -- 5xx errors are not retried. Prevention: server-side API route with fallback logging, webhook health monitoring, daily test submissions, form-submission-count vs GHL-contact-count reconciliation.

5. **Schema Over-Optimization** -- LocalBusiness + Service + FAQ + Review on all 1,700 pages triggers spam penalties. Prevention: LocalBusiness on homepage/contact only, Review schema only where reviews are visible, FAQ schema only where FAQs are displayed.

## Implications for Roadmap

### Phase 1: Foundation and Data Layer
**Rationale:** Everything depends on the data types, business config, and project setup. The slug registry must be validated before any templates exist.
**Delivers:** Working Next.js 15 project with Tailwind, fonts, root layout (Header/Footer), data types, business config, services data, cities data, slug registry with collision validation, and the page dispatcher route.
**Addresses:** Mobile-first design, SSL, project structure, NAP consistency
**Avoids:** Pitfall #3 (slug collisions) by building the registry first; Pitfall #10 (NAP inconsistency) by centralizing business data

### Phase 2: Core Templates and Lead Capture
**Rationale:** The site must capture leads before anything else matters. Service pages are the highest-value page type. The lead form and GoHighLevel integration must work end-to-end.
**Delivers:** LeadForm component, click-to-call, ServiceTemplate (63 pages), CityTemplate (21 pages), Homepage, API route for GoHighLevel webhook with fallback logging, trust signals, about page, contact page.
**Addresses:** Lead capture form, click-to-call, free quote CTAs, service pages, city pages, trust signals, contact page, about page
**Avoids:** Pitfall #4 (webhook lead loss) by building server-side proxy with fallback from day one; Pitfall #5 (broken silo) by designing link data model

### Phase 3: Content Differentiation Engine
**Rationale:** Before scaling to 1,300+ combo pages, the content variation system must produce genuinely unique pages that pass similarity checks. This is the make-or-break phase.
**Delivers:** Content variation engine (5-8 intro templates per service category, city-specific data injection, rotating content blocks), content differentiation matrix for all 21 cities, cross-page similarity validation script, sample batch of 50 combo pages for manual review.
**Addresses:** Service x city combo content quality, AI content quality signals
**Avoids:** Pitfall #1 (scaled content abuse) by validating content uniqueness before mass generation; Pitfall #9 (AI content detection) by injecting local specifics

### Phase 4: Programmatic Scale
**Rationale:** With the content engine validated, generate all combo pages and implement the full internal linking architecture. ISR strategy handles build-time constraints.
**Delivers:** 1,323 combo pages via ComboTemplate, ISR configuration for combo pages, reverse silo internal linking engine, breadcrumb navigation, FAQ sections with FAQPage schema, split XML sitemaps.
**Addresses:** Combo pages, internal linking, breadcrumbs, FAQs, XML sitemaps
**Avoids:** Pitfall #2 (build timeout) via ISR for combo pages; Pitfall #8 (crawl budget) via tiered sitemap submission and link count limits

### Phase 5: Supporting Content and SEO
**Rationale:** With money pages live, add supporting content that builds topical authority and captures comparison/informational queries.
**Delivers:** 30 comparison pages, 252 supporting articles, comparison vs service keyword intent separation, schema markup (per-page-type strategy), cost guide, insurance claim content, emergency/storm damage page.
**Addresses:** Comparison pages, blog/article content, schema markup, supporting SEO content
**Avoids:** Pitfall #6 (schema over-optimization) via schema-per-page-type strategy; Pitfall #13 (cannibalization) via intent segmentation

### Phase 6: Conversion Optimization
**Rationale:** With traffic flowing, optimize conversion rate. These features improve lead quality and capture rate but are not launch blockers.
**Delivers:** Multi-step qualifying form, speed-to-lead automation (GoHighLevel workflows), retargeting pixel integration, commercial-specific landing experience, financing information, reviews/testimonials display, before/after gallery, analytics and tracking setup.
**Addresses:** All differentiator features, conversion optimization, analytics
**Avoids:** Pitfall #7 (forced 50/50 split) by classifying services by audience and tailoring content contextually

### Phase Ordering Rationale

- **Data layer before templates:** Templates consume typed data contracts. The slug registry must prove zero collisions before any pages render.
- **Lead capture before content scale:** A site with 90 well-built pages that captures leads is worth more than 1,700 pages with a broken form.
- **Content engine before mass generation:** The content variation system is the project's highest-risk component. Validate it thoroughly with a small batch before generating 1,323 pages.
- **Money pages before supporting content:** Reverse silo methodology requires money pages to exist before supporting articles can link to them.
- **Conversion optimization last:** These features improve an already-working site. They cannot help if the foundation is broken.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 3 (Content Differentiation Engine):** This is novel engineering -- building a system that produces 1,323 genuinely unique pages from 63 services x 21 cities. The content variation patterns, city-specific data sources, and similarity validation tooling need detailed design.
- **Phase 4 (Programmatic Scale):** ISR configuration for 1,300+ pages on Vercel needs testing. The internal linking engine rules (reverse silo) need precise specification.
- **Phase 5 (Supporting Content):** Keyword intent segmentation between comparison pages and service pages needs careful mapping to avoid cannibalization.

Phases with standard patterns (skip deeper research):
- **Phase 1 (Foundation):** Standard Next.js 15 project setup. Well-documented.
- **Phase 2 (Core Templates):** Standard React component patterns. GoHighLevel webhook integration is straightforward.
- **Phase 6 (Conversion Optimization):** Standard conversion optimization patterns. GoHighLevel workflow configuration is well-documented.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | All technologies verified via official docs. Next.js 15, Tailwind 4, Zod 4 are mature and well-documented. |
| Features | HIGH | Roofing lead gen is a well-understood domain. Feature list sourced from 15+ industry-specific guides and competitor analysis. |
| Architecture | HIGH | Flat slug + catch-all dispatcher pattern verified in Next.js docs. SSG at this scale is proven. |
| Pitfalls | HIGH | Google spam policies verified via official docs. Build timeout limits verified via Vercel docs. GoHighLevel webhook behavior confirmed via official support. |

**Overall confidence:** HIGH

### Gaps to Address

- **Content variation depth:** Research confirms the need for unique content but does not specify exactly how many intro templates, local data points, or structural variations are sufficient. This needs empirical testing in Phase 3 -- generate 50 pages, run similarity analysis, iterate.
- **GoHighLevel webhook reliability:** Failure rates are anecdotal. Build the fallback mechanism regardless, but plan to measure actual failure rate in production.
- **Residential/commercial service classification:** The 63 services need to be categorized as primarily residential, primarily commercial, or genuinely dual before content templates are finalized. This classification does not exist yet.
- **Photo asset library:** The CSS brand treatment and photo-to-page mapping strategy is defined, but the actual photo library (50-100 images) needs to be sourced and curated before templates can be visually complete.
- **Build time with ISR:** The hybrid SSG/ISR approach is recommended based on documented Vercel limits, but actual build times need measurement with realistic content payloads early in development.
- **City-specific data:** Research calls for local building codes, neighborhood challenges, and weather patterns per city. This data needs to be gathered for all 21 Essex County cities -- a research/content task that precedes development.

## Sources

### Primary (HIGH confidence)
- [Next.js App Router Documentation](https://nextjs.org/docs/app) -- generateStaticParams, Metadata API, sitemap.ts, Server Actions, JSON-LD
- [Next.js generateSitemaps](https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps) -- Sitemap splitting for large sites
- [Tailwind CSS v4.0](https://tailwindcss.com/blog/tailwindcss-v4) -- Rust engine, CSS-first configuration
- [Google Spam Policies](https://developers.google.com/search/docs/essentials/spam-policies) -- Doorway pages, scaled content abuse definitions
- [Vercel Build Timeout Documentation](https://vercel.com/kb/guide/troubleshooting-build-error-build-step-did-not-complete-within-45-minutes) -- 45-minute limit, ISR alternatives
- [GoHighLevel Webhook Integration Guide](https://marketplace.gohighlevel.com/docs/webhook/WebhookIntegrationGuide/index.html) -- Inbound webhook triggers
- [React Hook Form](https://react-hook-form.com/) -- Form library patterns
- [Zod v4](https://zod.dev/v4) -- Schema validation
- [Motion for React](https://motion.dev/docs/react) -- Animation library (rebranded from Framer Motion)

### Secondary (MEDIUM confidence)
- [Google August 2025 Spam Update](https://localdominator.co/google-august-2025-spam-update/) -- Doorway page targeting specifics
- [Google December 2025 Core Update](https://almcorp.com/blog/google-december-2025-core-update-complete-guide/) -- AI content quality signals
- [GoHighLevel Webhook Retry Behavior](https://consultevo.com/gohighlevel-automated-webhook-retries/) -- 5xx non-retry behavior
- [Enterprise Programmatic SEO Infrastructure](https://gracker.ai/white-papers/enterprise-programmatic-seo-infrastructure-technical-architecture-guide) -- Architecture patterns
- [schema-dts on npm](https://www.npmjs.com/package/schema-dts) -- Google-maintained Schema.org types
- Industry roofing marketing guides (CyberOptik, Triton Commerce, WebFX, Roofing SEO Guy, Local Roofing SEO Agency) -- Feature landscape

---
*Research completed: 2026-03-05*
*Ready for roadmap: yes*
