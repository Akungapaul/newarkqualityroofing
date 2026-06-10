# East Orange Combo Author Brief — Combo Batch 2

You are rewriting ONE East Orange service×city combo page (`src/data/combo-content/east-orange/<service>.ts`)
**answer-first** and **de-fabbed**. The combo = the intersection of a service (already
rewritten answer-first at `src/data/service-content/<categoryFile>.ts`) and East Orange (facts below).
**Localize the finished service content to East Orange** — do not invent a new service story.

---

## A. The combo render contract (author to these fields, in this order)
`ComboTemplate` renders: `directAnswer` (hero, copper-bold) → `overview` (ProseLead, **first string = lead**)
→ `challenges` (ProseLead, first string = lead) → `conversionHooks.midPageCta`+`urgencyNote`
→ `process` (parseRichText) → `pricing` → `whyChooseUs` (**ignored at render — but still de-fab it**)
→ `faqs` (parseRichText). Headings are template-driven (H1 "Who Provides {Service} in East Orange?",
coreH2 "What {Service} Is Available in East Orange?") — **do NOT write headings into content**.

Rich-text fields (bold `**…**` parses): `directAnswer`, `overview`, `challenges`, `process`, `faqs.answer`.
RAW fields (NO `**`, NO markdown — it leaks and fails the gate): `whyChooseUs`, `pricing.range`, `pricing.note`,
`metaDescription`, `conversionHooks.midPageCta`, `conversionHooks.urgencyNote`, FAQ `question`.

Schema: `overview` 3–5 strings · `challenges` 2–4 · `process` 2–4 · `faqs` 3–6 `{question,answer}` ·
`metaDescription` ≤160 chars · `pricing?{range,note?}` · `whyChooseUs?[]` · `conversionHooks?{midPageCta?,urgencyNote?}`.

## B. Answer-first + hard rules (NQR Semantic Content Ruleset)
1. **R2 answer-length** — `directAnswer`, the **first string** of `overview`/`challenges`/`process`, and the
   **first sentence** of every `faqs.answer` must each be a **definitive ≤40-word answer**. Count standalone
   em-dash " — " tokens as words; tighten BELOW 40 to be safe. The `overview[0]` lead is a **figure-free
   definition** — move any number into a later string or a row.
2. **R3 strict body-lead bold** — bold 1–3 named topics in each lead with `**…**`. Then each following body
   string **opens by re-bolding a topic from that section's lead**, in the same order. Fact-preserve.
3. **R6 no modality** in declaratives — ban "will / should / need to / must" in statements (FAQ *questions* are exempt).
   Use indicative: "requires," "restores," "traces," "admits."
4. **No de-fab literals anywhere** (GATE-failing): `GAF Certified`, `same-day`, `24/7`, `0% financing`,
   `500+`, `top-rated`, `15+ years`, fabricated review counts/ratings, "hundreds of projects," any invented
   NQR self-stat, any manufacturer-certification claim. NQR is a **New Jersey Home Improvement Contractor,
   licensed & insured** — that is the only credential framing.
5. **Every hard number named-sourced** from a fact pack (cite the source in-text, e.g. "per HomeAdvisor,"
   "an industry estimate attributed to the NRCA," "per N.J.A.C. 5:23-2.7"). If no pack supports a number,
   **de-quantify** — never invent. **No links or URLs anywhere** — name sources in prose only, and **strip every
   existing markdown self-link** like `[roof repair](/roof-repair)` from the current file (the committed Newark
   combos carry ZERO inline links — match that). No synthesized superlatives.
6. **No price in any prose lead.** Pricing lives ONLY in the `pricing` field (see §E) and the cost FAQ.

## C. East Orange load-bearing facts (carry verbatim where used; sources from CITY-FACTS-urban-core.md)
- **Permit office:** the **East Orange Building Division**, applications filed in person at the
  **Department of Property Maintenance, East Orange City Hall, 44 City Hall Plaza** (3rd floor). The Building
  Division is a **designated State Uniform Construction Code Enforcement Agency** led by a licensed Construction
  Official. **Do NOT cite a specific local code section number** (the municipal code sections were not readable —
  name the Building Division qualitatively only).
- **Reroof permit rule (statewide UCC — identical to Newark):** a **detached one- or two-family reroof —
  including a full tear-off and re-cover — is "ordinary maintenance" under N.J.A.C. 5:23-2.7 and requires NO
  construction permit**. A permit IS required on **commercial, multi-family, or attached** buildings (the
  **25% rule**) and any structural roof work. East Orange enforces but does not override the state classification.
  (This is load-bearing here: East Orange is **~69% renter / 87.6% multi-unit**, so the permit-required commercial/
  multi-family path applies to a large share of its building stock.)
- **Historic COA = NO (KEY DIFFERENCE FROM NEWARK).** **No local historic-preservation ordinance or commission
  has been identified in East Orange** — the city's own **2006 Master Plan Historic Preservation Element** notes it
  operates "even in the absence of a designated Historic Preservation Commission (HPC) and Ordinance" and only
  *recommends* creating one. **There is no confirmed parcel where a Certificate of Appropriateness is required.**
  Several sites carry **National/State Register listing or SHPO-eligible status** (Central Avenue Commercial
  Historic District, the Brick Church and East Orange rail stations, the Ambrose-Ward Mansion), but **per the
  National Park Service, Register listing alone places no restriction on a privately funded reroof.** Where a
  historic angle is relevant, write: *"East Orange has no identified local historic-preservation ordinance, so a
  Certificate of Appropriateness is not triggered; a privately funded reroof on a Register-listed building is
  unrestricted — verify current local requirements with the East Orange Department of Planning, Policy &
  Development."* **Never assert a COA, an HPC, or a historic district design-review gate for East Orange.**
- **Housing stock:** dense inner-ring suburb of Newark. **31.0% owner-occupied (~69% renter)** and **87.6% of
  units in multi-unit structures** (per U.S. Census QuickFacts) — heavily **pre-war apartments, two-/three-family,
  and walk-ups** along the transit corridors, with **older spacious single-family homes** concentrated in the
  northern neighborhoods. Verified neighborhoods only: **Brick Church** (around the Brick Church NJ Transit
  station; commercial corridor + pre-war apartments and older single-family), **Ampere** (NE; single-family,
  duplexes, apartments), **Elmwood / Elmwood Park** (SE, around Elmwood Park — NOT the Bergen County borough),
  **Doddtown / Franklin**, **Greenwood**, and **Presidential Estates** (northern, larger well-maintained
  single-family with mature shade trees). **Converted-Victorian** texture is qualitative.
- **Commercial corridors:** **Central Avenue** (the city's former "Fifth Avenue of New Jersey") and **Main Street
  (renamed Dr. Martin Luther King Jr. Boulevard in 1987 — the SAME corridor)** carry mixed-use and high-rise near
  the **Brick Church** and **East Orange** NJ Transit stations (Morristown Line; Brick Church carries Midtown
  Direct to NY Penn) — the relevant context for commercial / flat-roof / multi-family work and the 25% rule.
  Medical anchor = **CareWell Health Medical Center** (formerly East Orange General Hospital).
- **Geography (DO NOT IMPORT NEWARK'S):** East Orange sits on a **flat Watsessing/Newark plain**, a **fully
  built-out dense inner-ring suburb with NO river-frontage, no waterfront, and no reservation adjacency.**
  **BAN every flood / Passaic River / tidal / Newark Bay / reservation reference** — none apply to East Orange.
  The roofing-relevant natural stressor is the **mature street-tree canopy** ("wide, tree-lined streets," large
  shade trees in the northern neighborhoods → leaf/branch debris, shade and moss on north-facing slopes) — keep
  it **qualitative, no canopy figure.**
- **Climate (shared EWR baseline, HEDGED — identical to Newark):** ~31.5 in/yr snow; nor'easters Oct–April;
  ~25–30 thunderstorms/yr; ground snow load Pg ~25 psf and ~110–115 mph ASCE 7-16 design wind kept HEDGED (not
  Essex-confirmed). **Urban heat island = EPA-attributed, QUALITATIVE ONLY** — use: "Per the U.S. EPA, the
  heat-island effect makes daytime air temperatures in U.S. urban areas about 1–7°F higher than outlying areas."
  **BAN every city-specific degree/gust number** ("160°F surface," "10–15°F above suburbs," "80 mph") — no source
  supports them. There is **no distinct East Orange microclimate number.**

## D. De-fab targets present in the CURRENT combo file (fix all)
- `overview[0]` opens "Newark Quality Roofing delivers expert {service} in East Orange — with prices starting from
  $X–$Y and free estimates available today" → **delete the price + hype**, replace with a figure-free answer-first
  definition (bold the named topics).
- **Inline markdown self-links** like `[Aging roof replacement](/aging-roof-replacement)` → **strip the link
  syntax** (keep the words as plain text; no URLs anywhere — the committed Newark combos have zero links).
- `whyChooseUs` (all identical, templated): "NJ licensed, **GAF Certified** — **15+ years** protecting Essex…",
  "**same-day** estimates and **24/7** emergency response", "Premium materials from GAF, CertainTeed, Owens Corning
  with manufacturer warranties." → **de-fab** to clean factual reasons (see §E).
- `conversionHooks.urgencyNote` "saves thousands" hype → soften to a factual prompt.
- Any unsourced hard number in prose (surface temps, percentages, lifespans, fabricated datasets) → name-source or
  de-quantify. **Watch for invented geography** (any river/flood/reservation claim is a fabrication for East Orange).
- **Preserve** the genuinely good East Orange texture already in the file (multi-family/rental landlord economics,
  layered flat-roof systems on pre-war walk-ups, tenant-access coordination under NJ landlord-tenant notice rules,
  Brick Church / Elmwood / Doddtown references, Central Ave & Main St/MLK Blvd corridors) — restructure it
  answer-first, do not discard it. **Drop any neighborhood not in the verified list in §C** (e.g. unverified street
  names) unless it is a real, checkable East Orange street.

## E. Pricing + whyChooseUs + conversionHooks (use these defaults — do NOT invent)
**`pricing`** — align to the SAME sourced ranges the city/service layers ship; name the source in `note`:
- Repair & maintenance services → `range: '$400–$1,000'`,
  `note: 'Typical NJ leak-repair range per HomeAdvisor; final cost depends on roof size, pitch, material, and access. Newark Quality Roofing provides a free written estimate.'`
- Replacement / installation / roof-type services → `range: '$10,000–$25,000'`,
  `note: 'Typical NJ roof-replacement range per HomeAdvisor and Modernize; final cost depends on roof size, pitch, material, and access. Newark Quality Roofing provides a free written estimate.'`
- Components-specialty (flashing, gutter, skylight, fascia, soffit, vent, waterproofing, deck) → use a pack-sourced
  figure if one exists (e.g. chimney flashing `$300–$1,500` per Modernize); otherwise set
  `range: 'Varies by scope'`, `note: 'Final cost depends on scope, materials, and access. Newark Quality Roofing provides a free written estimate.'` — **no invented number**.
- The **cost FAQ** answers with the same range + free-written-estimate framing; never a fabricated guarantee.

**`whyChooseUs`** (raw, no `**`) — replace the templated trust line with 3–4 of:
- "New Jersey Home Improvement Contractor — licensed and insured."
- "Local Essex County crew familiar with East Orange's multi-family, pre-war apartment, and older single-family building stock."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials.)

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in East Orange.").
`urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural water damage.").

## F. Output format
Write the **complete file** to `<service>.snippet.ts` — keep the exact first line
`import type { ComboContent } from '../schema';` and the EXACT `export const <ExportName>: ComboContent = {` you
are given (so `east-orange/index.ts` imports stay valid). Keep `serviceId` and `cityId: 'east-orange'` unchanged.
Also write a short `<service>.md` noting the de-fabs you cleared + the named sources you used.
Voice/structure exemplar: the committed `roof-repair` object in `src/data/service-content/repair-maintenance.ts`
AND the committed Newark combo `src/data/combo-content/newark/roof-repair.ts` (same answer-first shape, localized).
