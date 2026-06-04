# Data-Model Map — Roof Repair Service Page

**Task:** Enumerate every field on the `Service` type, mark which are populated for the
`roof-repair` pilot page and with what value, and which are empty/absent. Goal: tell the
answer-first rewrite blueprint exactly what structured data already exists vs. what must be added.

**Date:** 2026-06-03
**Read-only audit.** No code changed.

---

## Important framing: two distinct schemas feed the page

The `Service` type (the thing the task names) is intentionally THIN — it is only the
catalog/metadata record. The page's actual body content lives in a separate, much richer
`ServiceContent` record looked up by `serviceId`. An answer-first rewrite touches BOTH, so
both are mapped below.

| Schema | File | Role | Lookup |
|---|---|---|---|
| `Service` (`ServiceSchema`) | `src/lib/schemas.ts` L18–29 → inferred in `src/lib/types.ts` L19 | Catalog row: identity, taxonomy, meta tags | by `slug` in `src/data/services.ts` |
| `ServiceContent` (`ServiceContentSchema`) | `src/lib/schemas.ts` L128–168 | Page body: overview, signs, approach, FAQs, etc. | `getServiceContent(serviceId)` via `src/data/service-content/index.ts` |

---

## A. `Service` type — ALL 10 fields (the literal task)

Source: `ServiceSchema`, `src/lib/schemas.ts` L18–29. Entry: `src/data/services.ts` L11–22.
**The type has NO optional fields. All 10 are required and all 10 are populated for roof-repair.**

| # | Field | Type / constraint | Populated? | Value for roof-repair |
|---|---|---|---|---|
| 1 | `id` | `string` | ✅ | `'roof-repair'` |
| 2 | `name` | `string` | ✅ | `'Roof Repair'` |
| 3 | `slug` | `string` `/^[a-z0-9-]+$/` | ✅ | `'roof-repair'` |
| 4 | `category` | `ServiceCategory` enum | ✅ | `'repair-maintenance'` |
| 5 | `parentId` | `string \| null` | ✅ (null) | `null` (top-level service, no parent) |
| 6 | `isResidential` | `boolean` | ✅ | `true` |
| 7 | `isCommercial` | `boolean` | ✅ | `true` |
| 8 | `shortDescription` | `string` | ✅ | `'Expert roofing repair and maintenance for leaks, missing shingles, and structural damage across Essex County.'` |
| 9 | `metaTitle` | `string` max 80 | ✅ | `'Roof Repair in Newark NJ \| Free Estimates \| NQR'` |
| 10 | `metaDescription` | `string` max 160 | ✅ | `'Professional roof repair in Newark NJ and Essex County. We fix leaks, storm damage, and structural issues fast. Free estimates — call today.'` |

**`Service` verdict:** Nothing empty or absent. There is no slot on `Service` for answer-first
content (no summary/TL;DR/key-takeaways field). Any "answer-first" payload must be added either
to `ServiceContent` or to a new field/schema — it cannot live on `Service` as currently typed.

---

## B. `ServiceContent` type — where the page body actually lives

Source: `ServiceContentSchema`, `src/lib/schemas.ts` L128–168. roof-repair entry:
`src/data/service-content/repair-maintenance.ts` L9–93 (serviceId at L10, block closes L93).

| Field | Type / constraint | Required? | Populated for roof-repair? | Notes |
|---|---|---|---|---|
| `serviceId` | `string` | required | ✅ `'roof-repair'` | join key |
| `overview` | `string[]` min2 max5 | required | ✅ 2 paragraphs (L11–14) | symptom→consequence framing, not answer-first |
| `signsHeading` | `string` | required | ✅ `'Warning Signs Your Property Needs Attention'` | |
| `signs` | `string[]` min4 max10 | required | ✅ 4 items (L16–21) | at lower bound (4/10) |
| `approachHeading` | `string` | required | ✅ `'How We Handle Every Project'` | |
| `approachContent` | `string[]` min2 max5 | required | ✅ 2 paragraphs (L23–26) | |
| `approachSubheadings` | `string[]` **optional** | optional | ✅ present, 2 items (L27–30) | "Expert Diagnostics…", "Quality Solutions…" |
| `residential` | `{heading, content[2-5], ctaLabel}` | required | ✅ full (L31–38) | ctaLabel `'Get Home Estimate'` |
| `commercial` | `{heading, content[2-5], ctaLabel}` | required | ✅ full (L39–46) | ctaLabel `'Get Commercial Quote'` |
| `processSteps` | `{title,description}[]` min4 max8 | required | ✅ 4 steps (L47–64) | at lower bound (4/8) |
| `faqs` | `{question,answer}[]` min4 max10 | required | ✅ 5 FAQs (L65–86) | includes cost ($350–$1,500), 25% rule, seasonality |
| `pricing` | `{range, factors[], financingNote?}` **optional** | optional | ❌ ABSENT | cost data only buried in an FAQ answer, not structured |
| `whyChooseUs` | `{heading, reasons:{title,description}[]}` **optional** | optional | ❌ ABSENT | no structured trust/differentiator block |
| `credentialsHighlight` | `string[]` **optional** | optional | ✅ present, 4 items (L87–92) | NJ HIC Licensed; GAF Certified; Insured & Bonded; 15+ Years |

**`ServiceContent` verdict — 3 optional fields, 2 unused:**
- `approachSubheadings` ✅ used
- `credentialsHighlight` ✅ used
- `pricing` ❌ **unused** — high-value gap for answer-first (structured price range exists only as FAQ prose)
- `whyChooseUs` ❌ **unused** — high-value gap for answer-first trust signals

---

## C. Implications for the answer-first rewrite (what's missing)

1. **No answer-first / direct-answer field exists on EITHER schema.** There is no
   `tldr` / `summary` / `directAnswer` / `keyTakeaways` slot. An answer-first lead paragraph or
   "quick answer" box must be added as a NEW field (recommend on `ServiceContentSchema`, since
   `Service` is metadata-only and rendering reads `ServiceContent`).
2. **`pricing` (optional, already typed) is unused** — populating it surfaces the $350–$1,500
   range as machine-readable structured data instead of FAQ prose. Zero schema change needed.
3. **`whyChooseUs` (optional, already typed) is unused** — populating it gives a structured
   differentiators block. Zero schema change needed.
4. **`signs` (4/4) and `processSteps` (4/8) sit at their minimum bounds** — room to enrich
   without schema changes if the rewrite wants more depth.
5. Existing FAQ content already does answer-first work conversationally (Q→direct A) and is the
   strongest existing asset to mine/promote for an answer-first hero.

---

## File reference index
- `Service` type definition: `src/lib/types.ts` L19 (inferred from schema)
- `ServiceSchema`: `src/lib/schemas.ts` L18–29
- `ServiceContentSchema`: `src/lib/schemas.ts` L128–168
- roof-repair `Service` row: `src/data/services.ts` L11–22
- roof-repair `ServiceContent` block: `src/data/service-content/repair-maintenance.ts` L9–93
- Content lookup API: `src/data/service-content/index.ts` (`getServiceContent`)
