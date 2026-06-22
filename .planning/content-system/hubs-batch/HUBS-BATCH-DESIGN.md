# Hubs Batch — Design Spec (6 FLAT hubs → answer-first + indexable)

**Status:** APPROVED (design) 2026-06-22 · supersedes the noindex hub scaffolds from Phase 11
**Scope:** the 6 FLAT hubs only — DISTINCT from the 6 KB cluster hubs under `/roofing-knowledge-base/`.
**Decisions locked (user, 2026-06-22):** Hybrid content architecture · Footer + Header nav · lean conversion/process treatment for the 2 utility hubs.

This is the last content layer before the 252 articles. It mirrors the answer-first machinery already shipped on Service / City / Combo / Comparison templates (the [[entity-grounding-initiative]] v1.7 canon) and the lockstep re-index pattern proven on the 942-combo doorway flip (`4e42255`).

---

## 0. The 6 hubs

| slug | kind | H1 (already in `HEADING_CONFIG.hub`, question-form ✓) | def block? |
|---|---|---|---|
| `residential-roofing` | category | "What Residential Roofing Services Do We Provide?" | yes |
| `commercial-roofing` | category | "What Commercial Roofing Services Do We Provide?" | yes |
| `flat-roof-systems` | category | "What Flat Roof Systems Do We Install and Repair?" | yes |
| `roofing-materials` | category | "What Roofing Materials Should You Consider?" | yes |
| `free-roofing-estimate` | utility | "How Can You Request a Free Roofing Estimate?" | no (lean) |
| `our-roofing-process` | utility | "How Does Our Roofing Process Work?" | no (lean) |

- **Category hubs** (4): fully entity-grounded — `definition` + `definitionHeading` ("What Is Residential Roofing?" etc.) rendered as the first content H2 via `EntityDefinition`, plus the def Q&A prepended to FAQPage JSON-LD.
- **Utility hubs** (2): answer-first `directAnswer` + prose + FAQs + strong CTAs, but NO forced `What Is…?` def block (`definition` left unused → `EntityDefinition` render gated off, no def prepend to FAQ schema).

No new research. Category hubs summarize the already-rewritten service pages; utility hubs summarize NQR's process. Grounded in existing fact packs under `.planning/content-system/research/`. ZERO fabrication (no GAF-Certified / 24-7 / same-day / 500+ / fake stats / fake warranties); registered-NJ-HIC credential framing; named-source attribution; "Essex County, New Jersey" geo where natural.

---

## 1. Data layer (NEW) — `src/data/hub-content/`

Does not exist today (verified): no `hub-content.ts`, no `HubContentSchema`. The only per-hub data is the H1 in `heading-config.ts:137–144` + inline `eyebrow`/`intro`/`title`/`description` literals in each route.

### `schema.ts` — `HubContentSchema`
Modeled on `combo-content/schema.ts` (lean body) + the additive single-block `definition?`/`definitionHeading?` from `comparison-content/schema.ts:18–25` (rankings have no registry entity to derive a heading from — hubs are the same).

```ts
export const HubContentSchema = z.object({
  hubId: z.string(),
  directAnswer: z.string().optional(),       // hero answer-first, ≤40w BOLD SPAN, **markdown
  definition: z.string().optional(),         // category hubs only — "What Is …?" ≤40w, **markdown
  definitionHeading: z.string().optional(),  // author-supplied question heading (comparison pattern)
  overview: z.array(z.string()).min(2).max(5),               // [0] = answer-first lead
  sections: z.array(z.object({
    heading: z.string(),                                     // question-form H2
    body: z.array(z.string()).min(1).max(4),                // [0] = answer-first lead
  })).min(2).max(5),
  childLinks: z.object({                                     // category hubs — the ONE curated link section
    heading: z.string(),
    groups: z.array(z.object({
      label: z.string(),
      links: z.array(z.object({ text: z.string(), href: z.string() })).min(1),
    })).min(1),
  }).optional(),
  faqs: z.array(z.object({ question: z.string(), answer: z.string() })).min(3).max(6),
  metaTitle: z.string().max(60),
  metaDescription: z.string().max(160),
});
export type HubContent = z.infer<typeof HubContentSchema>;
```

Field-key conventions matter for `audit-semantics` (classifies by last key): `metaTitle`/`metaDescription` → meta (skipped from prose gates); `*heading`/`definitionHeading` → heading; `question` → question; everything else → body. The shape above is compliant.

### `index.ts`
Mirror `comparison-content/index.ts:11–33`: module-level `z.array(HubContentSchema).parse([...6 imports])`, a `Map` keyed by `hubId`, exports `getHubContent(id)` + `getAllHubContent()`.

### `<slug>.ts` × 6
One authored `HubContent` object per hub.

---

## 2. Template — upgrade `HubScaffold.tsx` → full hub render

Today `HubScaffold.tsx` is a 3-string-prop scaffold (`{eyebrow, heading, intro}` + 2 hardcoded CTAs, no schema/FAQ/JSON-LD). Upgrade in place (keep the name + `buildHubMetadata` export so the 6 routes keep importing it), OR add a sibling `HubTemplate`. Decision: **upgrade `HubScaffold` to accept `content: HubContent`** and render the full answer-first stack; keep `buildHubMetadata`.

Render stack (mirrors `ServiceTemplate.tsx:199–238` exactly):
1. **Hero** — eyebrow pill + `<h1>` from `HEADING_CONFIG.hub[slug]` + `directAnswer` rendered copper-bold via `parseRichText` (mirror `ServiceHero` directAnswer slot).
2. `<article className="space-y-12 …">`:
   - **EntityDefinition FIRST**, gated `content.definition && content.definitionHeading` — `<EntityDefinition headingId="hub-definition-heading" heading={content.definitionHeading} definition={content.definition} />` (category hubs only).
   - **overview** → `<ProseLead paragraphs={content.overview} />`.
   - **sections** → each `<SectionHeading id icon>{section.heading}</SectionHeading>` + `<ProseLead paragraphs={section.body} />`.
   - **childLinks** (category hubs) → grouped link section: heading + per-group label + `next/link` (or `parseRichText` `[text](/href)`) lists.
   - **FAQs** → `parseRichText` answers; emit `buildFaqSchema(content.definition ? [{question: content.definitionHeading, answer: content.definition}, ...content.faqs] : content.faqs)` as FAQPage JSON-LD.
   - **CTAs** — keep the existing 2 CTAs (free estimate + view services); utility hubs may add a stronger primary CTA.

The 6 routes (`src/app/<slug>/page.tsx`) change to: `const content = getHubContent('<slug>')`, `export const metadata = buildHubMetadata({ slug, title: content.metaTitle, description: content.metaDescription })`, `<HubScaffold content={content} heading={HEADING_CONFIG.hub['<slug>']} eyebrow="…" />`.

---

## 3. Heading config + headings audit

- `HEADING_CONFIG.hub` (`heading-config.ts:137–144`) keeps the 6 H1s (already question-form). No `definitionH2` accessor needed — heading comes from per-hub `definitionHeading`.
- `audit-headings.ts`: promote the 6 hub samples from `kind:'scaffold'` → `kind:'full'` (`scripts/audit-headings.ts:250–258`) and supply the expected first content H2 (`coreH2`): for category hubs that's the `definitionHeading`; for utility hubs it's the first `sections[0].heading`. Expose these expected first-H2 strings (small `HEADING_CONFIG.hub` companion map, or read from hub content in the audit). The static pass already asserts every `hub.*` H1 ends in `?`.

---

## 4. Re-index wiring (lockstep — same discipline as the 942-combo flip)

1. **`src/components/templates/HubScaffold.tsx:28`** — `robots: { index: false, follow: true }` → `{ index: true, follow: true }`. Refresh the stale "noindexed scaffold" comments (lines 6–12, 17).
2. **`src/app/sitemap.ts`** — add `'hubs'` to `SITEMAP_IDS` (line 15) + a `case 'hubs':` (before `default`, ~line 128) emitting the 6 hub URLs (`changeFrequency: 'monthly'`, `priority: 0.8`); update the "deliberately NOT emitted" comments (lines 17–24, 116–117).
3. **`scripts/audit-sitemap.ts`** — move the `FLAT_HUB_SCAFFOLDS` loop from `mustExclude` (lines 104–105) into `mustInclude` (alongside lines 78–96); update the header doc (lines 11–13) + PASS string (line 155). The combo keep-count sanity (`!== 1197`, lines 114–117) is untouched.
4. **Nav (Footer + Header):**
   - `src/components/layout/Footer.tsx` — linkify the `Services (Residential)` heading (line 290) → `/residential-roofing` and `Services (Commercial)` (line 308) → `/commercial-roofing`; add `/flat-roof-systems`, `/roofing-materials`, `/free-roofing-estimate`, `/our-roofing-process` to the bottom-bar row (~lines 349–374) or a small "Explore" list.
   - `src/components/layout/Header.tsx` + `src/components/layout/MobileMenu.tsx` + `src/data/nav-data.ts` — surface the 4 category hubs (Residential / Commercial as top-level links + flat-roof-systems / roofing-materials inside the Services mega-menu). Additive hardcoded link sets.
5. **`scripts/build-url-classification.ts`** — NO change. The 6 FLAT hubs are core pages, not in `URL-Classification.csv` (verified: `grep "/<hub>," ` = 0 rows); `EXPECT = {keep:1197,noindex:0,comboRedirect:168,legacyRedirect:0}` is combo-only.

---

## 5. Gates

- **`scripts/audit-semantics.ts`** — add `'hubs'` to `ALL_TYPES` (line 57) + a dispatch block after line 356 (mirror the comparisons branch L348–356) importing `getAllHubContent()`, `auditObject('hub:'+id, c)`. Field classification (L65–82) + rendered `**`-leak/R39 passes work unchanged.
- **`scripts/audit-meta.ts`** — add a hub loop (pattern at L94–140) → `checkMeta('hub', id, metaTitle, metaDescription)` (≤60 / ≤160) sourced from `getAllHubContent()`.
- **`scripts/audit-headings.ts`** — promote hubs scaffold→full (§3).
- **Per-batch `audit-leads.ts`** — clone `.planning/content-system/combo-batch11-affluent-suburban/audit-leads.ts` into `.planning/content-system/hubs-batch/`, importing the hub content set: word-count `directAnswer` BOLD SPAN ≤40w, each `overview[0]`/`sections[].body[0]`/`faqs[].answer` first sentence ≤40w; scan `**`-leak, de-fab literals, meta>160.
- **Full gate:** `npm run build` · `npm run audit:all` (headings + meta + semantics) · `npm run audit:sitemap` (must now PASS with hubs INCLUDED) · `npm run audit:redirects` · `npm run seo:validate` · per-batch `audit-leads`.
- **Runtime verify:** built `residential-roofing.html` flips to `index, follow` (or no robots meta); each hub = 200, exactly one question-H1, 0 `**` leaks, 0 de-fab, def Q&A present in FAQPage JSON-LD (category hubs), in `sitemap`.

---

## 6. Content principles (per the v1.7 canon)

Answer-first: R2 ≤40w leads (bold-span for `directAnswer`); every section body opens by re-bolding a topic from its lead (R3); question-form H2s answered immediately + named-source evidence (R-answer-first); no will/should/need-to modality, no opinion/casual/analogy, no outbound citation links. Entity-grounded def block on category hubs (R43). Descriptor = "roofing contractor"; credential = "registered NJ Home Improvement Contractor" — registration ≠ license (R44). Internal links via `parseRichText` `[text](/slug)` or `next/link`.

`childLinks` targets (category hubs):
- `residential-roofing` → residential service pages (`residential-roof-installation`, `asphalt-shingle-roofing`, `slate-roof-installation`, `metal-roof-installation`, `tile-roof-installation`, `cedar-shake-roof-installation`, `epdm-rubber-roofing`, `roof-repair`, `roof-replacement`…) + relevant city pages.
- `commercial-roofing` → commercial services (`tpo-roofing`, `epdm-commercial-roofing`, `modified-bitumen-roofing`, `built-up-roofing`, `commercial-metal-roofing`, `pvc-roofing`, `green-roof-installation`, `spray-foam-roofing`, `commercial-roof-installation/repair/replacement`, `roof-thermal-imaging-inspections`, `infrared-roof-leak-detection`).
- `flat-roof-systems` → low-slope membranes (TPO/EPDM/PVC/mod-bit/BUR/spray-foam) + the flat-roof comparisons (`best-roofing-for-flat-roofs`, membrane-vs-membrane).
- `roofing-materials` → material service pages + the material-vs-material comparisons (`asphalt-vs-metal-roofing`, `architectural-vs-3-tab-shingles`, etc.).

---

## 7. Pipeline (project batch pattern)

infra (schema + index + template + heading + gates + re-index wiring) → **author 6 hubs** (Workflow, 1 agent/hub, write-to-file snippet grounded in ruleset + gold service/city exemplars + fact packs) → assemble → GATE (build + audit:all scoped + audit-leads) → **REVIEW→refute** (throttled CHUNK=2, per-hub or 6-cohort) → FIX → re-gate → **render** (dev server `PORT=3240` + screenshots, hand over `http://localhost:3240/<slug>`) → sign-off → **2 commits** (feat + docs) → prompt `/clear`.

## 8. After this batch

The 252 articles (answer-first rewrite of 10 `src/data/article-content/*.ts` files; H1s already question-form; `generate:articles` only refreshes the metadata index) + the deferred cross-batch de-fab debt (article-layer HAAG; parent `service-content/repair-maintenance.ts` IIBEC/RICOWI + brand line; "$3,000–$12,000 hail repair" range; CRRC/ENERGY-STAR in commercial parents; metadata $X–$Y sweep; image-manifest "licensed" alts + credential chip).
