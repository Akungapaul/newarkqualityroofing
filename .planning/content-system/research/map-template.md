# Service Template Map — `ServiceTemplate.tsx` + `ServiceHero.tsx`

**Pilot page:** Roof Repair (`slug: roof-repair`)
**Files mapped:**
- `src/components/templates/ServiceTemplate.tsx` (default export `ServiceTemplate({ service })`)
- `src/components/sections/ServiceHero.tsx`

---

## 1. Render order (document order)

The template returns a single `<>` fragment. In order:

| # | Component / element | Always vs Conditional | Notes |
|---|---------------------|-----------------------|-------|
| 1 | `<JsonLd data={buildJsonLdGraph(...)} />` | Always | Org + RoofingContractor + WebSite + Service + WebPage + Breadcrumb + FAQ graph. Not visible. |
| 2 | **`<FloatingCtaButton />`** | Always | **CTA** — floating button, no props. |
| 3 | **`<ServiceHero service serviceGroups benefits />`** | Always | Contains H1 + **hero LeadForm** (see §2). |
| 4 | `<TrustBar variant="compact" />` | Always | Text-only stats w/ SVG icons. (Note: held at human_needed TrustBar UAT per memory.) |
| 5 | `<ServiceCredentials credentials=... />` | **Conditional** — only if `content.credentialsHighlight?.length > 0` | Wrapped in a `max-w-7xl` div, below hero. |
| 6 | **Main grid `<div>`** (`lg:grid lg:grid-cols-3`) | Always | Contains the `<article>` content column (col-span-2) + sticky sidebar (see §3, §4). |
| 7 | `<ServiceAreasGrid heading service />` | Always | Heading: `Where Can You Get ${name} in Essex County?` |
| 8 | `<RelatedServices heading={relatedH2} services />` | Always | `relatedServices` = same-category, exclude current, max 4. |
| 9 | **`<ServiceCtaBanner heading={scheduleH2} serviceGroups defaultService />`** | Always | **CTA banner** — final section. Heading = `scheduleH2` ("How Can You Schedule…?"). |

### Inside the `<article>` content column (item 6), in document order:

| # | Component | Always vs Conditional | Heading source |
|---|-----------|-----------------------|----------------|
| a | `ServiceOverview` (in `AnimateIn`) | Always | `coreH2` — **CORE band** ("What [Service] Do We Provide?") |
| b | `ServiceSigns` | Always | `signsH2` |
| c | **`ServiceInlineCta serviceName`** | Always | **Inline CTA** (no AnimateIn wrapper) |
| d | `ServiceApproach` | Always | `approachH2`, `imagePosition="above"` |
| e | `ServiceAudience` ×2 (commercial+residential) | Always | **Order flips** on `isCommercialFirst` (commercial-first IDs in `COMMERCIAL_FIRST_IDS`). Headings: "What [Residential/Commercial] [Service] Do We Provide?" |
| f | `ServiceProcess` | Always | `What Are the Steps in Our ${name} Process?` |
| g | `ContentAuthorityBlock service pageType="service"` | Always | Moved OUT of Core band (D-06/HTAG-07); deletion deferred to Phase 16. |
| h | `ServicePricing` | **Conditional** — `content.pricing` | `costH2` |
| i | `ServiceWhyChooseUs` | **Conditional** — `content.whyChooseUs` | `whyChooseH2` |
| j | `ServiceFaq` | Always | `What Questions Do Customers Ask About ${name}?` |
| k | `ServiceLearnMore` | **Conditional** — only if `getMoneyPageArticle(service.id,'service')` returns an article (IIFE) | `kbH2` — reverse-silo KB link |
| l | `ServiceRelatedComparisons` | Always | `How Do Your Roofing Options Compare?` (comparisons may be empty array) |
| m | `CompactTestimonial` | Always | `What Do Customers Say…?`, `filterBy={type:'service'}` |

---

## 2. H1 / hero structure (`ServiceHero.tsx`)

- Renders one `<section aria-labelledby="service-hero-heading">` with `bg-forest-dark`, a `next/image` `fill priority` background + 3 overlay layers (gradient, grid, grain).
- `<Breadcrumbs>` (Home / Services / service.name).
- Two-column grid (`lg:grid-cols-5`): left = headline+benefits (col-span-3), right = lead form (col-span-2).
- **The single `<h1 id="service-hero-heading">`** = `HEADING_CONFIG.service.h1(service.name)`. This is the page's only H1.
- Optional "Commercial" badge pill when `service.category` is `commercial-roof-types` or `commercial-services`.
- Benefits `<ul aria-label="Service benefits">` (3 derived strings) + `PhoneNumber` ("Or call us directly").

## 3. Lead-form / CTA component locations (the 4 named CTAs)

- **`ServiceHero`** → embeds `<LeadForm variant="hero" defaultService={service.slug} serviceGroups />` in the right column under `<div id="lead-form">`. (The primary above-the-fold lead capture.)
- **`ServiceInlineCta`** → item (c) inside `<article>`, between `ServiceSigns` and `ServiceApproach`. Takes `serviceName`.
- **`ServiceCtaBanner`** → final top-level section (item 9), `heading={scheduleH2}`, `serviceGroups`, `defaultService`.
- **`FloatingCtaButton`** → item 2, top-level, persistent floating CTA, no props.
- (Plus a second `LeadForm variant="standard"` in the sticky sidebar — see §4.)

## 4. Sticky sidebar

- `<StickyFormSidebar>` is the right column of the main grid (item 6), sibling to `<article>`. Wraps `<LeadForm variant="standard" defaultService={service.slug} serviceGroups />`. Always rendered.

## 5. Headings config & content fallback

- All H2 strings come from `HEADING_CONFIG.service` (`h1`, `coreH2`, `h2s(name)` array; indices: 0 core, 1 signs, 2 approach, 3 cost, 5 whyChoose, 6 related, 7 kb, 8 schedule). §4.2 question-form H2 tree (Core first, then Outer).
- Content loads via `getServiceContent(service.id)`; on throw, falls back to `generatePlaceholderContent(service)` (defines overview, signs, approach, residential/commercial, processSteps, faqs — but NOT pricing/whyChooseUs/credentialsHighlight, so those conditional sections are skipped on fallback).
