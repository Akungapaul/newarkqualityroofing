# Feature Landscape

**Domain:** Roofing lead generation website (programmatic SEO, local service area)
**Project:** Newark Quality Roofing - Essex County, NJ (~1,697 pages)
**Researched:** 2026-03-05
**Overall Confidence:** HIGH (well-established domain with clear industry patterns)

---

## Table Stakes

Features users expect. Missing any of these = visitors leave, leads lost, or SEO fails.

### Lead Capture Forms

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Above-the-fold lead form on every page | 60% of contractor searches start online; visitors who don't see a form within 3 seconds bounce. This is THE primary conversion mechanism | Medium | GoHighLevel webhook/API integration. Fields: first name, last name, phone, email, service needed (dropdown), project details (textarea). 5-6 fields max -- longer forms kill conversion rates |
| Form validation with inline errors | Users abandon forms that show no feedback or confusing error messages | Low | Client-side validation with accessible error messages. Highlight invalid fields. Use correct input types (tel, email) and autocomplete attributes per web standards |
| Mobile-responsive form inputs | 60%+ of local service traffic is mobile. Forms that break on mobile = zero leads | Low | Tap-friendly input sizes, proper keyboard types (numeric for phone), autocomplete attributes, clickable labels |
| Hidden UTM fields for attribution | Must know which pages/campaigns drive leads. Without attribution, optimization is blind | Low | Hidden fields capture UTM source, medium, campaign, plus the referring page URL. Pass to GoHighLevel with submission |
| Thank you / confirmation page | Users need confirmation their form submitted. Enables conversion tracking in GA4 and ad platforms | Low | Redirect to /thank-you after submission. Fire GA4 conversion event on page load. No-index this page |
| Form on every page (not just Contact) | Each of 1,697 pages is a potential entry point. If the form only lives on Contact, deep-page visitors must navigate to convert | Low | Reusable form component rendered in hero section of every template. Same component, different page context |

### Phone / Click-to-Call

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Click-to-call phone number in header | Phone calls convert 30-50% vs ~5% for forms. Header phone number is expected on every contractor site | Low | `tel:` link. Human-readable format with area code. Visible on all viewports |
| Sticky mobile click-to-call bar | Mobile visitors expect one-tap calling. During emergencies (storm damage, active leaks), they will not fill a form | Low | Fixed-position bottom bar on mobile with phone icon + number. Disappears on desktop (header handles it) |
| Phone number on every page | Consistency builds trust. Users land on any page and should see the number without scrolling | Low | Header (all pages), hero section, mid-page CTA, footer. Single source of truth in config |

### Trust Signals

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Manufacturer certification logos | GAF Master Elite, Owens Corning, CertainTeed logos signal legitimacy. Homeowners look for these specifically | Low | Trust bar below hero. Placeholder logos until business provides actual certifications |
| License and insurance display | NJ requires HIC (Home Improvement Contractor) license. Displaying it is baseline trust for roofing | Low | NJ HIC license number in footer and About page. Insurance badge |
| Customer testimonials | 88% of consumers trust online reviews as much as personal recommendations. Reviews boost conversion ~34% | Low | Testimonial sections on homepage + service pages. Placeholder content initially, replaced with real reviews |
| Star rating / review count | Visible aggregate rating (e.g., "4.9 stars from 127 reviews") is expected shorthand for quality | Low | Display on homepage hero area and near forms. Only use AggregateRating schema when backed by real reviews |
| BBB / industry association logos | Secondary trust signals reinforcing legitimacy. Particularly important for commercial leads | Low | Display in trust bar alongside manufacturer certs |
| SSL certificate (HTTPS) | Chrome flags HTTP as insecure. Non-negotiable. Vercel provides this automatically | None | Zero action needed -- Vercel handles it |
| Warranty information | Homeowners expect to know coverage terms. Missing warranty info = suspicion | Low | Warranty section on service pages. Workmanship + manufacturer warranty details |
| Before/after project photos | Visual proof of work quality. Stock photos acceptable at launch | Low | Curated stock with CSS brand treatment (warm tone, grain, consistent crop). Plan to replace with real photos |

### SEO - Schema Markup (5 Types)

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| LocalBusiness / RoofingContractor schema | Required for local pack and AI Overviews (2026 critical). Google supports `RoofingContractor` as a specific type | Medium | JSON-LD on all pages. Properties: name, address, phone, geo coordinates, service area, hours, payment methods. Use `@type: "RoofingContractor"` (subtype of LocalBusiness) |
| Service schema on service pages | Tells Google what each page represents. Enables service-specific rich results | Medium | One Service schema per service page: name, description, provider (links to LocalBusiness), areaServed (Essex County cities) |
| FAQPage schema on pages with FAQ sections | FAQ rich results in SERP drive high CTR. Google still supports these in 2026 | Low | Must exactly match visible on-page Q&A content. 4-6 questions per page. Schema invalid if content doesn't match |
| BreadcrumbList schema | Structured breadcrumbs in SERP improve CTR and help Google understand site hierarchy | Low | Mirrors visible breadcrumb trail: Home > Services > [Service] or Home > [City] > [Service in City] |
| AggregateRating / Review schema | Star ratings in SERP dramatically increase CTR | Low | ONLY implement when real reviews exist from Google Business Profile. Do NOT fabricate. Google issues manual actions for fake review markup |

### SEO - Technical Foundation

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| XML sitemap (auto-generated, split by type) | 1,697 pages need efficient crawl management. Google requires sitemap for large sites | Medium | Split: services-sitemap.xml, cities-sitemap.xml, combos-sitemap.xml, comparisons-sitemap.xml, articles-sitemap.xml. Next.js has built-in sitemap generation |
| HTML sitemap page | Crawlable index of all URLs. Aids discovery of deep programmatic pages | Low | Single /sitemap page grouping URLs by category |
| robots.txt | Controls crawler access. Prevents indexing of utility pages | Low | Block /thank-you, /api routes. Allow everything else |
| Canonical tags on every page | Prevents duplicate content issues across 1,697 pages. Critical for programmatic sites | Low | Self-referencing canonicals. Next.js metadata API handles this |
| Core Web Vitals optimization | Google ranking factor since 2021. SSG baseline is excellent but needs image/font tuning | Medium | Targets: LCP < 2.5s, CLS < 0.1, INP < 200ms. SSG + Vercel CDN + next/image + font optimization |
| Meta title + description (unique per page) | Basic SEO. Each of 1,697 pages needs unique, keyword-rich metadata | Medium | Programmatic generation from templates with service/city variables. Must read naturally |
| Open Graph meta tags | Shared links need proper previews on social platforms | Low | OG title, description, image per page type |
| Breadcrumbs (visible navigation) | Orientation on a 1,697-page site. Users need to know where they are | Low | Home > [Category] > [Page]. Clickable links back to parent |
| Custom 404 page | Users hitting dead links need a path forward | Low | Popular services, city list, phone number, form |
| Flat URL structure | SEO-friendly, keeps pages close to root. Max 3 clicks from homepage | Low | `/roof-repair-montclair-nj` not `/services/repair/montclair/nj` |

### SEO - Local

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| NAP consistency across all pages | Name, Address, Phone must be identical everywhere. Inconsistency tanks local rankings | Low | Single source of truth in config file. All templates render from one constant |
| Google Maps embed on city + contact pages | Visual location confirmation expected on local service sites | Low | Google Maps embed or static map showing service area per city |
| City-specific unique content | Google penalizes thin doorway pages. Each city page needs genuinely different content | High | Neighborhoods, building types, weather patterns, local codes, community references. NOT just city name swapped into a template. This is the hardest part |
| Service area declaration | Users and Google need to know coverage area | Low | Service area list on homepage, contact, and in LocalBusiness schema `areaServed` |
| Google Business Profile readiness | GBP is the #1 local ranking factor. Site must support it even if GBP setup is separate | Low | Consistent NAP, categories matching service pages, link back from GBP to site |

### SEO - Content Structure

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| H1 with primary keyword + location | Standard on-page SEO. One H1 per page | Low | Template pattern: "[Service] in [City], NJ" or "[City] [Service] Services" |
| Proper heading hierarchy (H1 > H2 > H3) | Semantic structure for Google topic understanding. Also accessibility requirement | Low | H2s for major sections (secondary keywords), H3s for subsections/FAQ questions (long-tail keywords) |
| 2000+ word money pages | Longer content correlates with higher rankings for competitive local service terms | High | Service pages and city pages. Templates with content variation blocks to avoid repetitiveness |
| ~750 word supporting articles | Enough substance to pass quality gates. Primary purpose is linking value via reverse silo | Medium | Focused long-tail topics. Each links to money page + next supporting article |

### Page Types (All Required for Full Topical Authority)

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Homepage | Front door. Trust + routing to services/locations in < 3 seconds | Medium | Hero with form, trust bar, services grid, residential/commercial split, city grid, testimonials, FAQ |
| 63 service pages | Each service targets specific search intent | High | Unique content with residential AND commercial sections per page |
| 21 city pages | Local SEO coverage for all Essex County | High | Genuinely unique local content per city |
| 1,323 service x city combo pages | Long-tail "[service] in [city]" capture | High | Programmatic with content variation engine. Highest volume, highest thin-content risk |
| 30 comparison pages | Decision-stage "X vs Y" queries | Medium | Structured comparison format with clear recommendations |
| 252 supporting articles | Reverse silo equity flow to money pages | High | 3 per money page, topically relevant, not filler |
| About, Contact, Privacy, Locations hub, Services hub, Sitemap, Thank You | Standard business pages | Low | Straightforward templates |

### Navigation & Architecture

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Clear primary navigation | Users find services/locations within 1 click | Low | Services dropdown, Locations dropdown, About, Contact. Clean, not overwhelming |
| Footer mega-links | All 21 cities + major service categories. Aids crawling + user discovery | Medium | All cities linked, top service categories, contact info, legal pages |
| No orphan pages | Every page needs 3+ internal links pointing to it | Medium | Automated verification. Nearby cities blocks, related services blocks |
| Mobile-first responsive layout | 60%+ of roofing traffic is mobile. Not optional | Medium | True mobile-first, not desktop-adapted. Tap targets, readable fonts, fast scroll |

---

## Differentiators

Features that set this site apart from generic roofing contractor websites. Provide competitive advantage.

### Content & SEO Differentiators

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Reverse silo internal linking (POP methodology) | Concentrates link equity on money pages instead of spreading thin. Proven to accelerate rankings for competitive terms | High | Money page links to 1 supporting article only. Supporting articles link to money page + next supporting article. No outbound links from supporting articles. No daisy-chaining (A links to B, but NOT directly to C). All supporting posts link directly to target page |
| Content variation engine for 1,323 combo pages | Avoids Google thin/duplicate content penalty. Multiple intro structures, rotating content blocks, variable sentence patterns per city/service combination | High | THE critical differentiator. Most programmatic roofing sites get penalized for name-swapping. True variation with city-specific data = rankings while competitors get filtered |
| NLP-optimized content with entity coverage | Semantic SEO beyond keywords: related entities, synonyms, LSI terms mapped to heading structure. Full topical breadth per page | High | Cover entities Google expects for each topic. "Roof repair" page must mention flashing, shingles, underlayment, decking, etc. naturally |
| 50/50 residential/commercial content split | Most roofing sites skew 90/10 residential. Commercial coverage captures higher-value leads (commercial jobs = 5-10x residential) | Medium | Every service page addresses both audiences with distinct sections, CTAs, and language |
| Comparison/decision-helper pages (30) | Capture high-intent "which material" queries. Most competitors lack these entirely | Medium | Structured format: pros/cons, cost ranges, durability, best-for use cases. High conversion intent |
| AI detection QA pass | Content that passes ZeroGPT demonstrates quality signals. Avoids potential algorithmic penalties | Medium | All generated content run through detection. Flagged sections rewritten for natural patterns |

### Design & UX Differentiators

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Editorial Trust design direction | Forest green (#1A3A2A) / copper (#C17F4E) / parchment (#F5F0E8) with Cormorant fonts. Dramatically different from the blue/white/orange contractor site cliche | Medium | Most roofing sites are visually identical. This design signals sophistication and trustworthiness that generic templates cannot match |
| CSS brand treatment on stock photos | Warm tone filter, grain overlay, consistent cropping creates cohesive visual identity from free stock | Medium | Branded feel at $0 image cost. Competitors use unprocessed stock or have no photos at all |
| Contextual in-content anchor text links | Internal links woven naturally into body copy, not just nav/footer blocks. Signals topical relationships to Google | Medium | Anchor text matches target page keywords. More SEO value than sidebar "Related Services" widgets |
| Nearby cities geographic linking blocks | City pages link to geographically adjacent cities, not alphabetical lists. Mirrors how users think about location | Low | Build Essex County adjacency map. Each city links to 3-5 geographic neighbors |
| Related services blocks on service pages | Cross-pollinate traffic between service types. User who needs roof repair may also need gutter repair | Low | 4-6 related services per page based on logical service relationships |

### Lead Capture & CRM Differentiators

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| GoHighLevel automated speed-to-lead | Instant SMS + email confirmation on submission. Auto-follow-up if no response in 30 min. Most competitors respond in hours/days -- response within 5 minutes increases close rate dramatically | Medium | GHL workflow: form webhook triggers instant customer confirmation + sales team notification + timed follow-up sequence |
| Dynamic phone number insertion (DNI) | Know which pages and traffic sources generate calls. Optimize content based on actual call data, not guesses | Medium | CallRail or GHL built-in tracking. JavaScript snippet swaps displayed number per visitor source. Critical for proving and improving ROI |
| Page-context-aware form pre-population | Form on /roof-repair-montclair-nj auto-selects "Roof Repair" and "Montclair" from dropdowns | Low | Reduces friction, increases completion rate. Data attribute on form container passes page context |
| Multi-step qualifying form (Phase 2) | 3-4 step progressive form: property type > service needed > timeline > contact info. Higher quality leads with more qualifying data | Medium | Commitment/consistency principle increases completion. Captures data that helps sales team prioritize leads |
| Commercial-specific form variant | Property managers have different fields: company name, property type, roof size estimate, number of buildings | Low | Detect commercial service page context, swap form fields. Different CTA: "Schedule Commercial Assessment" |

### Technical Differentiators

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Next.js SSG over WordPress/Duda | Sub-second loads, perfect CWV, programmatic generation at build time. Reference site (huntingtonbeacheliteroofing.com) uses DudaOne -- this is a major performance upgrade | Low | SSG inherently faster. Vercel edge CDN adds global caching. No server-side rendering overhead per request |
| Split XML sitemaps by page type | Helps Google allocate crawl budget across 1,697 pages efficiently. Most competitors have monolithic sitemaps | Low | 5 sitemaps: services, cities, combos, comparisons, articles. Sitemap index at /sitemap.xml |
| Full 5-type schema markup | LocalBusiness + Service + FAQ + Review + Breadcrumb. Most competitors implement 0-2 schema types | Medium | Maximum rich result eligibility. Critical for AI Overviews presence in 2026 |
| Retargeting pixel integration | 90%+ of first visitors leave without converting. Pixels enable future remarketing without site changes | Low | GA4, Facebook Pixel, Google Ads tag. Fire on all pages. Infrastructure for future paid campaigns |

---

## Anti-Features

Things to deliberately NOT build. Common mistakes in roofing websites that waste effort, hurt performance, or damage conversion.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| Blog / content marketing hub | Dilutes topical focus, requires ongoing maintenance, doesn't directly generate leads. Supporting articles serve the SEO role without blog overhead | 252 supporting articles linked via reverse silo serve the same SEO purpose with direct link equity flow to money pages |
| Chat widget / chatbot | Adds JavaScript weight, hurts CWV, most roofing chatbots are annoying and unhelpful. Phone calls convert far better for urgent roofing needs | Prominent click-to-call + simple form. Roofing is high-urgency, phone-first |
| Instant quote calculator | Complex to build accurately, creates false pricing expectations, leads to price-shopping. Roofing quotes require physical inspection | "Get a Free Estimate" form connecting to humans. Cost guide page with ranges, not specific prices |
| Online booking/scheduling calendar | Roofing is not a dentist appointment. Jobs require site visits and custom quotes. Calendars create scheduling chaos | "Request a Callback" or "Schedule Free Estimate" form routed to sales team |
| User accounts / login | Zero value for lead gen. Adds security surface, complexity, friction | Anonymous form submission to GHL CRM. All customer management in CRM, not website |
| Social media feed embeds | Slows page loads, shows stale content, rarely drives conversion. External JS dependencies | Static social links in footer only. No embeds, no feeds |
| Excessive popup/modal lead capture | Exit-intent popups feel desperate, interrupt user journey, Google penalizes intrusive mobile interstitials | Inline forms, sticky CTA bars, scroll-triggered inline sections. Never overlay modals |
| Auto-playing video | Kills page load speed, frustrates mobile users, hurts CWV | Static images with CSS brand treatment. Video testimonials only with manual play, never autoplay |
| Cookie-cutter city pages (name-swap) | Google explicitly penalizes doorway pages. Name-swapping gets sites deindexed. Biggest risk for programmatic sites | Content variation engine with genuinely unique city data: neighborhoods, building types, weather, zoning, local references |
| Specific dollar amounts on cost pages | Prices change constantly, vary by project, create expectation mismatches, and date content immediately | "Factors that affect cost" content + "Get a free estimate" CTA. Ranges acceptable, specific quotes not |
| Review schema without real reviews | Google issues manual actions for fabricated review markup. AggregateRating with no verifiable source is high risk | Testimonial sections without schema until real GBP reviews exist. Add schema only when backed by real reviews |
| Complex mega-menu navigation | 1,697 pages tempts exposing everything in nav. Overwhelms visitors, destroys mobile UX | Clean shallow nav (Services, Areas, About, Contact). Internal linking and search handle deep discovery |
| Outbound links from money pages | Leaks link equity from the pages that need it most. Reverse silo methodology explicitly forbids this | All equity stays internal. Outbound links confined to supporting articles and minimized even there |
| Blog comments | Spam magnet. Zero SEO value in 2026. No homeowner reads roofing blog comments. Moderation burden | No comments anywhere on site |
| Music or sound effects | Still occasionally seen on contractor sites. Instantly unprofessional | Never |
| Mega-site launch without content quality gate | Publishing 1,697 thin pages simultaneously can trigger site-wide quality penalty | Phased launch: core pages first, expand as quality is verified and rankings stabilize |
| Heavy animations / parallax on content pages | Hurts CLS, distracts from conversion, increases mobile bounce rate. Editorial Trust achieves sophistication through typography and color | Subtle micro-interactions only: form focus states, hover effects. Reserve animation for homepage hero maximum |

---

## Feature Dependencies

```
FOUNDATION LAYER (must exist first):
  Next.js project + Tailwind config
  Design system (forest green/copper/parchment, Cormorant fonts)
  GoHighLevel CRM account + webhook endpoint
  Config: NAP details, phone, service area constants
    |
    v
CORE COMPONENTS (build these before any pages):
  Lead capture form component ---------> GoHighLevel webhook integration
  Click-to-call component -------------> Phone tracking number setup
  Header component (nav + phone + CTA)
  Footer component (mega-links + NAP)
  Breadcrumb component
  Schema markup utilities (JSON-LD generators for all 5 types)
  Content variation engine ------------> Required before combo page generation
  Image component (CSS brand treatment)
    |
    v
PAGE TEMPLATES (before content population):
  Homepage template
  Service page template -----> Service + FAQ + Breadcrumb schema
  City page template --------> LocalBusiness + FAQ + Breadcrumb schema
  Combo page template -------> Service + FAQ + Breadcrumb schema
  Comparison page template --> FAQ + Breadcrumb schema
  Supporting article template -> Reverse silo link structure
  Static pages (about, contact, privacy, thank-you)
    |
    v
CONTENT POPULATION:
  Homepage content
  63 service page content sets ---------> Residential + commercial sections each
  21 city page content sets ------------> Unique local data required (HIGH effort)
  30 comparison page content sets
  1,323 combo page content -------------> Content variation engine critical here
  252 supporting article content sets --> Reverse silo linking must be pre-planned
    |
    v
SEO INFRASTRUCTURE:
  XML sitemaps (split by type) ---------> Depends on all page URLs existing
  HTML sitemap page
  Internal link verification (no orphans, 3+ links each)
  Reverse silo link audit
  Schema validation (Google Rich Results Test)
  robots.txt + canonical verification
    |
    v
CONVERSION OPTIMIZATION:
  GA4 + conversion tracking setup
  GoHighLevel automated follow-up workflows
  Dynamic number insertion (DNI)
  Retargeting pixels (GA4, Facebook, Google Ads)
    |
    v
LAUNCH READINESS:
  Core Web Vitals audit (LCP, CLS, INP)
  Mobile responsiveness QA (all page types)
  Form submission end-to-end test (form -> GHL -> notification)
  Content quality gate (AI detection pass on sample pages)
  Cross-browser testing
```

### Critical Path Items

1. **Content variation engine** MUST be built before combo pages. Without it, 1,323 pages risk doorway page penalty and potential deindexation.
2. **GoHighLevel webhook** MUST be tested end-to-end before any page with a form goes live. Broken forms = lost leads = zero revenue.
3. **Schema utilities** should be built as reusable JSON-LD generator functions before any page template, not bolted on after.
4. **Reverse silo link structure** must be planned (which money page, which 3 supporting articles, link targets) before supporting articles are written. The linking pattern dictates content structure.
5. **NAP config** (phone, address, business name) must be a single source of truth before templates are built. Changing it later across 1,697 pages must be trivial.

---

## MVP Recommendation

For MVP, prioritize quality over quantity. Better 70 excellent pages ranking than 1,697 thin pages penalized.

### Phase 1: Core Lead Gen Machine
1. Homepage with full Editorial Trust design, lead form, trust signals
2. Top 10 highest-value service pages (roof repair, replacement, emergency repair, inspection, asphalt shingle, metal roof, flat roof, TPO, commercial install, commercial repair)
3. Top 5 highest-population city pages (Newark, East Orange, Irvington, Bloomfield, Orange)
4. 50 combo pages (top 10 services x top 5 cities)
5. Core infrastructure: forms + GHL webhook, click-to-call, all 5 schema types, XML/HTML sitemaps, breadcrumbs
6. About, Contact, Privacy, Thank You pages
7. 5 comparison pages (highest search volume material comparisons)

### Phase 2: Scale Programmatic Pages
8. Remaining 53 service pages
9. Remaining 16 city pages (with genuinely unique content per city)
10. Remaining 1,273 combo pages (after content variation engine is validated)
11. Remaining 25 comparison pages

### Phase 3: Reverse Silo Content
12. 252 supporting articles (3 per money page, phased)
13. Internal link audit and orphan page resolution
14. Full reverse silo verification

### Phase 4: Conversion Optimization
15. GoHighLevel automated follow-up sequences
16. Dynamic number insertion (CallRail or GHL)
17. Multi-step qualifying form
18. Commercial-specific form variant
19. Retargeting pixels
20. Content quality QA pass across all pages

### Defer Indefinitely
- User accounts, payment processing, booking calendar
- Blog, comments, social feeds
- Chat widget, chatbot
- Multi-language support

---

## Residential vs Commercial Feature Differences

| Dimension | Residential Approach | Commercial Approach |
|-----------|---------------------|---------------------|
| CTA Language | "Get My Free Roof Inspection" | "Schedule a Commercial Roof Assessment" |
| Trust Signals | Homeowner reviews, BBB, "family-owned" | Case studies, fleet/crew size, multi-site capability |
| Content Tone | Warm, reassuring, educational | Professional, data-driven, ROI-focused |
| Form Fields | Name, phone, email, service, details | + Company name, property type, roof size, building count |
| Decision Maker | Homeowner (emotional + practical) | Property manager / facility director (ROI + compliance) |
| Key Concerns | Cost, timeline, disruption, insurance claims | Warranty, maintenance programs, code compliance, minimal business disruption |
| Photo Evidence | Before/after residential projects | Large-scale commercial, aerial shots, multi-building |
| Service Emphasis | Weather damage, curb appeal, home value | Energy efficiency, TPO/EPDM specs, maintenance contracts, roof lifecycle cost |

---

## Sources

### Lead Capture & Conversion
- [WebFX - Roofing Lead Generation Guide](https://www.webfx.com/blog/home-services/roofing-lead-generation-guide/) - MEDIUM confidence
- [PHOS Creative - 5 Must-Have Elements](https://phoscreative.com/articles/high-converting-roofing-website/) - MEDIUM confidence
- [Robbenmedia - Conversion Optimization](https://robbenmedia.com/top-10-tips-for-roofing-contractor-website-conversion-optimization/) - MEDIUM confidence
- [Growform - 20 Lead Generation Ideas](https://www.growform.co/20-best-roofing-lead-generation-ideas/) - LOW confidence
- [Podium - CRO for Roofing](https://www.podium.com/article/conversion-rate-optimization-roofing/) - MEDIUM confidence

### Trust Signals & Reviews
- [10Web - 13 Roofing Websites That Nail Trust](https://10web.io/blog/roofing-websites/) - MEDIUM confidence
- [GatorWorks - Anatomy of High-Converting Site](https://gatorworks.net/anatomy-high-converting-home-services-website/) - MEDIUM confidence

### Schema Markup
- [EseoSpace - Schema for Contractor Websites](https://eseospace.com/blog/schema-markup-for-contractor-websites/) - MEDIUM confidence
- [RoofingSEO - Schema for Roofers](https://roofingseo.services/technical-seo/how-to-implement-schema-markup-for-roofers/) - MEDIUM confidence
- [BrightLocal - 8 Schema Templates for Local SEO](https://www.brightlocal.com/learn/local-seo-schema-templates/) - HIGH confidence
- [Fingerlakes1 - Schema + Architecture for Roofing (2026)](https://www.fingerlakes1.com/2026/02/23/schema-markup-and-site-architecture-seo-that-make-roofing-websites-easier-to-rank/) - MEDIUM confidence
- [SchemaApp - Service Schema Guide](https://www.schemaapp.com/schema-markup/services-schema-markup-schema-org-services/) - HIGH confidence

### Internal Linking & Silo Structure
- [PageOptimizer Pro - Reverse Silo Content](https://help.pageoptimizer.pro/article/seo-reverse-silo-content) - HIGH confidence (methodology source)
- [Synscribe - Kyle Roof's Reverse Silo](https://www.synscribe.com/blog/kyle-roofs-reverse-silo) - MEDIUM confidence
- [Authority Hacker - Site Architecture & SEO Silos](https://www.authorityhacker.com/site-architecture/) - HIGH confidence
- [HVSEO - Reverse Content Silos](https://hvseo.co/blog/the-hidden-hero-of-on-page-seo-reverse-content-silos/) - MEDIUM confidence

### Local SEO & City Pages
- [LuccaAM - Local SEO Strategy Case Study](https://www.luccaam.com/local-seo-strategy-for-roofing-contractors/) - MEDIUM confidence
- [LocalMighty - Local SEO for Roofing 2026](https://www.localmighty.com/blog/local-seo-checklist-for-roofing-contractors/) - MEDIUM confidence
- [Backlinko - SEO for Roofers](https://backlinko.com/seo-for-roofers) - HIGH confidence
- [SearchEngineLand - Programmatic SEO Guide](https://searchengineland.com/guide/programmatic-seo) - HIGH confidence

### GoHighLevel CRM
- [GoHighLevel - Roofing Playbook](https://www.gohighlevel.com/roofing-playbook) - HIGH confidence (official)
- [Beckerle Media - GHL for Roofing](https://beckerlemedia.com/go-high-level-roofing-companies/) - MEDIUM confidence
- [ColorWhistle - GHL CRM Integration Guide 2026](https://colorwhistle.com/gohighlevel-crm-integration/) - MEDIUM confidence

### Phone Tracking
- [CallRail - Dynamic Number Insertion](https://support.callrail.com/hc/en-us/articles/5711814948877-Dynamic-number-insertion-overview) - HIGH confidence (official docs)
- [Nimbata - DNI Explained](https://www.nimbata.com/tips/dynamic-number-insertion) - MEDIUM confidence
- [Nimbata - Dynamic Call Tracking Guide 2025](https://www.nimbata.com/guide/dynamic-call-tracking) - MEDIUM confidence

### Common Mistakes
- [SmallBusiness-SEO - 8 Roofing SEO Mistakes](https://smallbusiness-seo.com/8-roofing-seo-mistakes-that-drain-your-leads-and-how-to-fix-them/) - MEDIUM confidence
- [Bartholomew Media - 7 Design Mistakes](https://bartholomewmediagroup.com/roofing-website-design-mistakes/) - MEDIUM confidence
- [Glasshouse - Roofing Lead Gen 2025](https://www.glasshouse.biz/blog/roofing-lead-generation-2025) - MEDIUM confidence
- [ExposeProfits - Roofing Lead Gen Quick Guide](https://exposeprofits.com/roofing-lead-generation/) - LOW confidence
