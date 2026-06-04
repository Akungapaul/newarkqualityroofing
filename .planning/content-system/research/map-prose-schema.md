# Service-Page Prose & Schema Map

Pilot: **Roof Repair** service page (slug `roof-repair`). Goal: separate **data-driven prose** (rewrite the data) from **hardcoded prose** (rewrite the component).

## Render pipeline & data flow

- **Route**: `src/app/[slug]/page.tsx` (flat catch-all) → resolves slug via `slug-registry` → renders `src/components/templates/ServiceTemplate.tsx` (default export, the only consumer of all `Service*` sections).
- **Per-service prose source**: `src/data/service-content/<category>.ts` (8 files), aggregated + Zod-validated in `src/data/service-content/index.ts` (`ServiceContentSchema` from `src/lib/schemas.ts`). Lookup `getServiceContent(serviceId)`. Roof Repair lives in `repair-maintenance.ts` (first object, lines 9–93). If a service has no content entry, `ServiceTemplate.generatePlaceholderContent()` (lines 58–130) synthesizes hardcoded fallback prose.
- **Service identity** (name, slug, shortDescription, meta): `src/data/services.ts`.
- **All section H2 headings are NOT taken from the data file.** `ServiceTemplate` overrides them with the question-form strings from `src/data/heading-config.ts` (`HEADING_CONFIG.service.h2s(name)` / `coreH2(name)`) or builds them inline as template literals (e.g. `What Residential ${service.name} Do We Provide?`). The `signsHeading` / `approachHeading` / `whyChooseUs.heading` / `pricing`-less headings in `ServiceContent` are effectively **dead fields** — the component prop `heading` always comes from the template, not the data object.

## Per-component breakdown

| Component | Copy source | Heading source | Body pattern | Schema emitted |
|---|---|---|---|---|
| **ServiceOverview** | `content.overview[]` (data-driven). **Hardcoded**: stat callout `"500+ projects completed in Essex County"` + `CREDENTIALS.experience/certification/insurance` from `content-constants.ts`. | `coreH2` (heading-config) | `<h2>` + paragraphs; `boldFirstSentence()` wraps first sentence of para[0] in `<strong>`; rest via `parseRichText` (markdown `**`/`*`). | none (callout is plain HTML) |
| **ServiceSigns** | `content.signs[]` (data-driven). Images from `image-manifest` (`section-warning-signs`). | `signsH2` (heading-config) | `<h2>` + image grid + `<ul>` of `<li>`, each `parseRichText(sign)`. | none |
| **ServiceProcess** | `content.processSteps[]` `{title, description}` (data-driven). Image from content-pool `crew`. | inline literal `What Are the Steps in Our ${name} Process?` | `<h2>` + numbered `<ol>`; `title` plain, `description` via `parseRichText`. | none |
| **ServiceApproach** | `content.approachContent[]` + optional `content.approachSubheadings[]` (data-driven). Image from content-pool `materials`. | `approachH2` (heading-config) | `<h2>` + per-para optional subheading + paragraph; `boldFirstSentence()` on para[0]. | none |
| **ServiceAudience** (×2: residential + commercial) | `content.residential.content[]` / `content.commercial.content[]` + `ctaLabel` (data-driven). | inline literal `What Residential/Commercial ${name} Do We Provide?` | `<h2>` + paragraphs (`parseRichText`) + section image + `#lead-form` CTA `<a>`. | none |
| **ServiceFaq** | `content.faqs[]` `{question, answer}` (data-driven). | inline literal `What Questions Do Customers Ask About ${name}?` | `<h2>` + `<details>/<summary>` accordion; answer via `parseRichText`. | **Feeds FAQPage JSON-LD** (see below) — but the component itself emits no schema; template does. |
| **ServiceAudience/Credentials** **ServiceCredentials** | `content.credentialsHighlight[]` (data-driven array of badge labels). Rendered only if present, above main content. | n/a (badge row, no heading) | `role="list"` of `<span>` badges with check SVG. | none |
| **ServiceWhyChooseUs** | `content.whyChooseUs.reasons[]` `{title, description}` (data-driven, optional). **Hardcoded**: `REASON_ICONS` regex→SVG map keyed off reason `title` keywords. | `whyChooseH2` (heading-config) | `<h2>` + 2-col card grid; icon picked by title regex, else numbered; `description` via `parseRichText`. | none |
| **ServicePricing** | `content.pricing` `{range, factors[], financingNote?}` (data-driven, optional). **Hardcoded labels**: `"Typical Price Range"`, `"Cost Factors:"`. Image from `section-pricing`. PhoneNumber from config. | `costH2` (heading-config) | `<h2>` + price card; factors `<ul>` via `parseRichText`; financingNote via `parseRichText`. | none |
| **ServiceRelatedComparisons** | `getRelatedComparisons(service.id)` → `Comparison[]` from `comparison-content` (data-driven; `name` + `metaDescription`). Renders null if empty. **Hardcoded**: `"Compare Now"` link label + arrow SVG. | inline literal `"How Do Your Roofing Options Compare?"` (hardcoded in template, NOT heading-config) | `<h2>` + 2-col `<Link>` cards. | none |

## JSON-LD / schema for service pages

- **Single emission site**: `ServiceTemplate.tsx` lines 190–202, via `<JsonLd data={buildJsonLdGraph(...)} />`. No section component emits its own JSON-LD.
- **Builders**: `src/lib/schema.ts`. The `@graph` for a service page contains:
  - `buildOrganizationSchema()`, `buildRoofingContractorSchema()`, `buildWebSiteSchema()` (site-wide, from `site-config`).
  - `buildServiceSchema({name, slug, shortDescription})` → `@type: Service`, description = `service.shortDescription` (from `services.ts`).
  - `buildWebPageSchema(url, service.metaTitle)`.
  - `buildBreadcrumbSchema([Home, Services, service.name])`.
  - `buildFaqSchema(content.faqs)` → `@type: FAQPage`, mainEntity from `content.faqs` (`stripMarkdown` strips `**`/`*`). **This is the only schema fed by per-service prose data.**
- `aggregateRating` is gated off (`canonicalConfig.rating.enabled === false`, D-01) — key omitted entirely.

## Rewrite implications

- **Rewrite the DATA** (`service-content/*.ts`) to change prose for: overview, signs, approach (+subheadings), residential/commercial audience, process steps, FAQs, pricing range/factors/financingNote, whyChooseUs reasons, credentialsHighlight badges. This also automatically updates FAQPage + Service-description schema.
- **Rewrite the COMPONENT/TEMPLATE** to change: all H2 headings (live in `heading-config.ts` + inline template literals in `ServiceTemplate`, not the data), the hardcoded `"500+ projects completed in Essex County"` stat callout + CREDENTIALS line in ServiceOverview, the `"Typical Price Range"`/`"Cost Factors:"` labels in ServicePricing, the `"Compare Now"` label, the whyChooseUs icon-mapping regexes, and the `generatePlaceholderContent()` fallback prose.
- **Dead data fields** to note: `signsHeading`, `approachHeading`, and any `*.heading` inside ServiceContent are ignored at render — headings are template-controlled.
