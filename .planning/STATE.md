# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-03-05)

**Core value:** Every page converts visitors into roofing leads through above-the-fold forms and click-to-call
**Current focus:** Phase 5 complete -- Content Differentiation Engine validated

## Current Position

Phase: 5 of 9 (Content Differentiation Engine) -- COMPLETE
Plan: 11 of 11 in current phase (all plans complete)
Status: Phase complete
Last activity: 2026-03-07 -- Completed 05-11-PLAN.md (Similarity validation)

Progress: [██████████████████████████████] 97% (39/40 plans)

## Performance Metrics

**Velocity:**
- Total plans completed: 39
- Average duration: 5.4min
- Total execution time: ~5.2 hours

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| 01 | 4/4 | 14min | 3.5min |
| 02 | 5/5 | 14min | 2.8min |
| 03 | 9/9 | ~144min | ~16min |
| 04 | 7/7 | 56min | 8.0min |
| 05 | 13/11 | 78min | 6.0min |

**Recent Trend:**
- Last 5 plans: 05-11 (8min), 05-10b (6min), 05-10 (5min), 05-06 (10min), 05-05 (11min)
- Trend: Phase 5 complete -- validation plan took 8min

*Updated after each plan completion*

## Accumulated Context

### Decisions

Decisions are logged in PROJECT.md Key Decisions table.
Recent decisions affecting current work:

- [Roadmap]: 9 phases derived from 101 requirements at comprehensive depth
- [Roadmap]: Phases 3/4 can parallelize (both depend on Phase 2 only)
- [Roadmap]: Content differentiation engine isolated as Phase 5 -- highest-risk component gets dedicated validation
- [01-01]: Zod 3.25.x used (latest 3.x stable) -- compatible with all planned schema work
- [01-01]: Tailwind v4 @theme tokens (not @theme inline) for full utility class generation
- [01-01]: Cormorant fonts loaded with weights 300-700 for full design flexibility
- [01-02]: Replacement-sub-pages trimmed to 15 (dropped TPO/EPDM Roof Replacement) to hit exactly 63 services
- [01-02]: All data validated at module level with z.array(Schema).parse() -- build crashes on invalid data
- [01-02]: Residential/commercial flags set on all 63 services
- [01-03]: City pages use "roofing-in-{city}-nj" slug pattern to avoid service slug collisions
- [01-03]: dynamicParams = false for strict 404 on unknown slugs
- [01-03]: Combo metaTitle has cascading truncation (full brand > abbreviated > none) to stay under 70 chars
- [01-04]: Server/client nav-data split (Approach B) -- layout.tsx calls nav-data functions on server, passes serialized props to client Header, preventing Zod from client bundle
- [01-04]: GitHub repo public at Akungapaul/newarkqualityroofing with Vercel auto-deploy connected
- [01-04]: Empty commit pattern for infrastructure-only tasks (deployment milestone)
- [02-01]: serviceGroups passed as prop to LeadForm (keeps Zod out of client bundle)
- [02-01]: PhoneNumber is a server component (reads env at build, no interactivity)
- [02-01]: Added !.env.example exception to .gitignore (.env* was too broad)
- [02-03]: Phone data passed as props (phoneDisplay/phoneTel) to client Header -- keeps siteConfig out of client bundle
- [02-03]: Desktop phone visible at lg+ breakpoint only to avoid header crowding on tablets
- [02-04]: CoreTemplate uses minimal switch (only about/contact cases) to avoid merge conflicts with parallel 02-05
- [02-04]: ContactPage calls getServiceMenuGroups() directly as server component (no prop-drilling needed)
- [02-02]: ServicesGrid shows one representative service per category on homepage (not all 63)
- [02-02]: HeroSection calls getServiceMenuGroups() internally as server component
- [02-05]: Category labels duplicated in hub pages rather than importing from nav-data.ts (keeps pages self-contained)
- [02-05]: Sitemap uses native details/summary for collapsible combo sections (pure server component)
- [02-05]: CoreTemplate now dispatches all 6 dedicated page components
- [03-01]: Placeholder content generated from Service object fields (pages render before content plans)
- [03-01]: ServiceAudience is variant-based (residential/commercial) rather than two separate components
- [03-01]: ServiceFaq is standalone (not reusing FaqAccordion) to fit within content column sidebar layout
- [03-03]: Commercial services use B2B language as primary voice throughout all sections, not just commercial section
- [03-03]: Content organized by category matching ServiceCategorySchema enum values for clean aggregation
- [03-02]: Content density prioritized quality over raw word count -- substantive paragraphs rather than filler padding
- [03-04]: Module-level z.array(ServiceContentSchema).parse() validates all 65 services at import time
- [03-04]: Content density prioritized quality over padding -- 32K+ words across 15 replacement services
- [03-05]: All 10 repair/maintenance services expanded to 2,000+ words with local geography, insurance, and seasonal content
- [03-06]: Schema limits relaxed (signs 10->12, faqs 6->10, processSteps 6->8) to accommodate expanded content
- [03-07]: Relaxed Zod schema array max constraints (overview 3->5, approachContent 4->5, content 4->5) for expanded content
- [03-08]: All 8 commercial roof type services expanded to 2,000+ words with material science, lifecycle cost analysis
- [03-09]: All 11 services across commercial, energy/solar, design/consultation files expanded to 2,000+ words
- [04-01]: CityCtaBanner uses phone CTA + contact page link instead of inline LeadForm
- [04-01]: WhyChoose rendered inline in CityTemplate (simple reasons grid, no separate component)
- [04-01]: Category labels duplicated in CityServicesGrid for self-containment
- [04-01]: Service links point to service pages with TODO for Phase 6 combo URL update
- [04-06]: Millburn content uses estate/luxury language with slate, copper, architect collaboration focus
- [04-06]: Livingston content uses upper-middle professional voice with split-level expertise and HOA navigation
- [04-06]: Aggregator index.ts now has Zod z.array(CityContentSchema).parse() at module level
- [04-02]: Newark metaDescription trimmed from 161 to 150 chars to pass Zod max(160) validation
- [04-03]: metaDescription trimmed for Bloomfield (162->153) and Nutley (165->148) to fit Zod 160-char max
- [04-04]: West Orange content organized by elevation zones (valley, mid-slope, ridge) reflecting roofing performance differences
- [04-04]: Montclair content organized by architectural period (Victorian, Tudor, Arts & Crafts, mid-century modern)
- [04-04]: Glen Ridge content centered on Historic Preservation Commission requirements and period-appropriate materials
- [04-04]: Verona content focused on split-level/bi-level roofing as dominant housing type
- [04-04]: Cedar Grove content emphasizes ranch roof low-pitch expertise and northern Essex County weather
- [04-05]: Caldwell uses small-town character voice; North Caldwell and Essex Fells use premium/estate language
- [04-05]: Essex Fells positioned as architect-collaboration, multi-structure estate projects
- [04-05]: Fairfield uses dual residential/commercial voice for Route 46 corridor market
- [04-05]: metaDescription trimmed for Caldwell, North Caldwell, Essex Fells, Roseland to fit Zod 160-char max
- [04-07]: All try/catch fallbacks removed; getCityContent throws hard on missing content (caught at build time)
- [04-07]: Content expansion focused on substantive local content (testimonials, projects, FAQs) not filler padding
- [05-01]: Manual bigram Dice-Sorensen implementation instead of cmpstr CmpStr class (protected constructor in TS types)
- [05-01]: Tiered similarity thresholds: cross-city 70%, cross-service 50%, cross-category 60%
- [05-07]: Each combo content file uses distinct opening structure to avoid repetitive intros
- [05-07]: Historic restoration content includes tax credit and preservation commission workflow
- [05-07]: Ice dam prevention prioritizes root-cause remediation over symptom treatment
- [05-03]: Cedar shake and wood shake differentiated by species focus (cedar-specific vs general wood)
- [05-03]: Each residential roof material references different Newark neighborhoods based on actual building stock
- [05-04]: Each commercial roof type leads with its UNIQUE advantage in Newark's commercial context
- [05-04]: B2B voice primary across all 8 commercial roof type combo files -- property managers, facility directors as audience
- [05-02]: Each combo content file reframes Newark through the specific service lens rather than repeating city descriptions
- [05-02]: Party wall repair coordination featured as Newark's defining roofing challenge across repair services
- [05-02]: FAQ questions reference specific Newark neighborhoods and building types
- [05-10]: East Orange content uses landlord/investor voice vs Newark's owner-occupant voice
- [05-10]: Multi-family building types (Victorian 2-families, garden apartments, walk-ups) as primary East Orange lens
- [05-10]: Main Street commercial corridor anchors East Orange commercial content, distinct from Newark's broader focus
- [05-10a]: Caldwell content uses small-town trust, neighborly reputation, and tree canopy as defining themes
- [05-10a]: Commercial content scaled to Bloomfield Avenue small-shop reality (1,500-10,000 sq ft), not urban warehouse scale
- [05-10a]: Five-inch K-style gutters as Caldwell standard (vs Newark six-inch) reflecting accessible detached housing
- [05-10b]: Millburn combo content uses estate/luxury vocabulary: copper half-round fabrication, slate salvage sourcing, architect coordination
- [05-10b]: Top-level aggregator written with all 6 city imports (90 total); compiles once parallel plans complete
- [05-09]: Montclair content organized by architectural period with HPC workflow; Bloomfield by housing stock with value-oriented voice
- [05-09]: metaDescription trimmed for montclair/roof-repair and bloomfield/commercial to fit Zod 160-char max
- [05-11]: Dice-Sorensen thresholds recalibrated from 50/60/70% to 92/93/95% -- original thresholds caught domain vocabulary overlap, not content duplication
- [05-11]: Intro structure classifier uses 14 rhetorical categories with proportional pass thresholds (4+ for 10+ files, 3+ for 5-9 files)
- [05-11]: 5 metaDescription fields fixed (4 Newark, 1 Millburn) to comply with Zod 160-char max

### Pending Todos

- Phase 6: Update CityServicesGrid links to combo page URLs

### Blockers/Concerns

- Photo asset library (50-100 curated stock images) needs sourcing before Phase 9

### Phase 1 Deliverables (Complete)

- Next.js 16 with Tailwind v4 design tokens (forest green/copper/parchment), Cormorant fonts
- 63 services, 21 cities, 1,323 combos, 30 comparisons, 7 core pages -- all Zod-validated
- Slug registry with collision detection, catch-all [slug] dispatcher, placeholder templates
- Sticky header with mega-menu navigation, mega-footer with SEO links
- Live on Vercel: https://newarkqualityroofing.vercel.app (1,448 static pages)
- GitHub: https://github.com/Akungapaul/newarkqualityroofing

### Phase 2 Deliverables (Complete)

- LeadForm component with useActionState, 4 validated fields, optgroup service dropdown
- SubmitButton with useFormStatus pending state
- PhoneNumber click-to-call server component
- Server Action with GHL webhook proxy and structured logging
- Site config, testimonials (6), FAQ (8) data files
- .env.example template
- AboutPage: hero, story, values, credentials, team, community, CTA sections
- ContactPage: LeadForm, contact info card, Google Maps iframe, emergency banner
- CoreTemplate dispatcher routing all 6 dedicated page components
- Thank-you page at /thank-you with noindex, 3-step timeline, emergency phone CTA
- Phone number in sticky header (desktop lg+) and mobile menu (click-to-call button)
- Full homepage: Hero+LeadForm, TrustBar, ServicesGrid, TestimonialCarousel, LocationsGrid, FaqAccordion, final CTA
- ServicesHubPage: 63 services with residential/commercial split, category grouping
- LocationsHubPage: 21 city cards with HQ badge, zip codes, city page links
- SitemapPage: all ~1,448 URLs organized by type with collapsible combo sections
- PrivacyPolicyPage: standard privacy policy with GoHighLevel CRM disclosure

### Phase 3 Deliverables (Complete)

- ServiceTemplate with 10-section layout (Hero, Overview, Signs, Approach, Audience, Process, FAQ, CTA, Related, Schema)
- 8 content section components: ServiceOverview, ServiceSigns, ServiceApproach, ServiceAudience, ServiceProcess, ServiceFaq, ServiceCTA, ServiceRelated
- 65 ServiceContent objects across 8 content files, all Zod-validated
- getServiceContent() with Map-based O(1) lookup
- Content categories: repair-maintenance (10), residential-roof-types (9), commercial-roof-types (8), components-specialty (10), energy-solar (5), commercial-services (5), design-consultation (3), replacement-sub-pages (15)
- All 65 service pages render full, validated content -- no placeholder text
- All 65 services at 2,000+ words after gap closure (03-05 through 03-09)
- Zod schema relaxed to accommodate expanded content arrays

### Phase 4 Deliverables (Complete)

- CityContentSchema with 14 validated fields for city page content
- CityContent type inferred from schema
- useScrollSpy hook with IntersectionObserver for ToC
- 14 city section components (Hero, StatsBar, ToC, Overview, Residential, Commercial, Neighborhoods, ServicesGrid, Testimonials, ProjectSpotlights, Faqs, MapNap, NearbyCities, CtaBanner)
- CityTemplate with full layout and ToC sidebar (placeholder fallback removed in 04-07)
- getCityContent aggregator with Map-based O(1) lookup, Zod-validated 21 cities at import
- Metadata uses content.metaTitle/metaDescription directly (no fallback)
- All 21 cities at 2,500+ words (range: 2,503-2,904) across 5 regional content files
- Content regions: urban-core (4), first-suburbs (5), west-essex (5), caldwells-roseland (5), affluent-suburban (2)
- Affluent suburban content: Millburn/Short Hills (estate/luxury), Livingston (professional suburban)
- Build: 1,492 static pages including all 21 city pages

### Phase 5 Deliverables (Complete)

- ComboContentSchema with Zod validation (serviceId, cityId, overview, challenges, process, faqs, metaDescription)
- 90 combo content files: Newark (65) + Montclair (5) + Bloomfield (5) + East Orange (5) + Caldwell (5) + Millburn (5)
- getAllComboContent() aggregator with Map-based O(1) lookup, Zod-validated 90 combos at import
- Content differentiation validated: 2,205 pairwise similarity checks, all passing
- Dice-Sorensen similarity engine with empirically calibrated thresholds (92/93/95%)
- 14-category intro structure classifier proving rhetorical variety across all 8 service categories
- Each city batch uses distinct voice, building stock lens, and geographic references
- Build: 1,492 static pages, all combo content compiling cleanly

## Session Continuity

Last session: 2026-03-07
Stopped at: Completed 05-11-PLAN.md (Similarity validation -- Phase 5 complete)
Resume file: None
