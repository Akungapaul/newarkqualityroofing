# Orange Combo Author Brief — Combo Batch 3

You are rewriting ONE Orange service×city combo page (`src/data/combo-content/orange/<service>.ts`)
**answer-first** and **de-fabbed**. The combo = the intersection of a service (already rewritten answer-first at
`src/data/service-content/<categoryFile>.ts`) and Orange (facts below). **Localize the finished service content to
Orange** — do not invent a new service story.

> Orange = **City of Orange Township**, Essex County, NJ (a township operating as "City of Orange"). It shares the
> urban-core fact bank with the already-committed **Newark** and **East Orange** combos. The single biggest
> Orange-specific fact: **Orange HAS a binding historic Certificate-of-Appropriateness (COA) regime in four
> locally designated districts** — the *opposite* of East Orange (no COA), and structurally like Newark.

---

## A. The combo render contract (author to these fields, in this order)
`ComboTemplate` renders: `directAnswer` (hero, copper-bold) → `overview` (ProseLead, **first string = lead**)
→ `challenges` (ProseLead, first string = lead) → `conversionHooks.midPageCta`+`urgencyNote`
→ `process` (parseRichText) → `pricing` → `whyChooseUs` (**ignored at render — but still de-fab it**)
→ `faqs` (parseRichText). Headings are template-driven (H1 "Who Provides {Service} in Orange?",
coreH2 "What {Service} Is Available in Orange?") — **do NOT write headings into content**.

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

## C. Orange load-bearing facts (carry verbatim where used; sources from CITY-FACTS-urban-core.md §Orange)
- **Permit office:** the **City of Orange Township Building & Construction Division** (under the Department of
  Planning & Economic Development) — issues building/electrical/plumbing/fire permits, inspections, and
  certificates of occupancy. (Name it qualitatively; do not invent a fee schedule or an official's name.)
- **Reroof permit rule (statewide UCC — identical to Newark/East Orange):** a **detached one- or two-family
  reroof — including a full tear-off and re-cover — is "ordinary maintenance" under N.J.A.C. 5:23-2.7 and requires
  NO construction permit**. A permit IS required on **commercial, multi-family, or attached** buildings (the
  **25% rule**) and any structural roof work; recover-vs-tear-off limits follow the **Rehab Subcode, N.J.A.C.
  5:23-6.4**. This is load-bearing here: Orange is **~76% renter-occupied (owner-occupancy ~23.8%)** and dense
  with two-/three-family and investor-owned buildings, so the permit-required commercial/multi-family path applies
  to a large share of its stock.
- **Historic COA = YES (KEY DIFFERENCE FROM EAST ORANGE; structurally like Newark).** Orange has a binding local
  historic-preservation ordinance: the **City of Orange Township Historic Preservation Commission**, established
  under **Development Regulations Ch. 210, Art. X** (N.J.S.A. 40:55D-65(i) and 40:55D-107 et seq.; §210-91 purpose,
  §210-92 designation criteria, §210-93 actions requiring a COA). A **Certificate of Appropriateness (COA)** is
  **DECISIONAL/BINDING** for regulated exterior alteration/rehabilitation/construction — **including roofing** —
  on a property inside an **approved historic district** or a **designated significant property**. **Emergency
  repairs may proceed first.** A COA is **separate from** the UCC construction permit. The **four locally
  designated districts** where the COA applies are **(1) Orange Valley, (2) Montrose/Seven Oaks Park, (3) Main
  Street, and (4) St. John's.** A **National/State Register listing alone places no restriction** (per the
  National Park Service) — the *local* ordinance binds; e.g. Day Street Public School and the Orange Public
  Library carry Register records but the COA gate is the local designation. **Do NOT assert a COA, an HPC review,
  or a historic-district gate for a property OUTSIDE the four designated districts.** **Do NOT assert any
  per-district roofing-material rule** (the HPC design guidelines were not extracted). Where a historic angle is
  relevant, write a sentence on the model of:
  > *"In Orange's four locally designated historic districts — Orange Valley, Montrose/Seven Oaks Park, Main
  > Street, and St. John's — regulated exterior roofing work requires a Certificate of Appropriateness from the
  > City of Orange Township Historic Preservation Commission (Development Regulations Ch. 210, Art. X), a binding
  > approval separate from the construction permit; emergency repairs may proceed first, a Register listing alone
  > imposes no restriction, and a property outside a designated district is not subject to a COA. Confirm a
  > parcel's status with the City of Orange Township Department of Planning & Economic Development."*
  This COA angle is most relevant to **historic-roof-restoration, slate/tile/cedar-shake roofing, custom-roof-
  design-consultation**, and any combo touching designated-district properties; for ordinary non-historic
  services it is a brief contextual note at most — **do not force it onto every page.**
- **Housing stock:** dense (~2.21 sq mi of land), **older (median year built ~1939 — frame "roughly half pre-1939"
  qualitatively)**, ~14,943 total units (2020), **~23.8% owner-occupied (≈76% renter)**. The mix: **two-/three-
  family homes, older detached houses (concentrated in Seven Oaks), rowhouse/attached stock, and converted
  industrial/loft buildings in the Valley Arts area.** Frame the audience as **many 2–3-family and
  investor/landlord-owned buildings**, NOT a high-homeownership suburb.
- **Neighborhoods (verified only — drop anything not here):** **Seven Oaks** (= the locally designated
  **Montrose/Seven Oaks Park** district; leafy historic residential section in the southern city near the East
  Orange/South Orange edges; tree-lined streets, larger older single-family homes), **The Valley / Valley Arts
  District** (former industrial neighborhood/arts district centered on the **Highland Avenue station**, ~15 blocks
  spanning parts of Orange and West Orange; converted industrial/loft buildings — **DISTINCT from the separately
  designated "Orange Valley Historic District"**), **Main Street corridor / downtown** (Orange's principal
  commercial corridor; **Orange Public Library, 348 Main St**; the locally designated **Main Street Historic
  District** follows it), **Orange Valley** (historic western-Orange former hat-manufacturing area; the **Orange
  Valley Historic District**), and **St. John's** (small locally designated district in central/northern Orange).
  **Scotland Road** and **Park Avenue** are real Orange streets (Highland Avenue station is on Scotland Road) —
  use them as plain streets, **no blanket COA**. NJ Transit: **Orange station** and **Highland Avenue station** on
  the **Morris & Essex Lines** (to Newark, Secaucus Junction, NY Penn).
- **Geography (DO NOT import Newark's waterfront, NOR East Orange's "flat Watsessing plain"):** Orange borders
  **East Orange, Glen Ridge, Montclair, South Orange, and West Orange**; **I-280** runs east–west through the
  city. Orange sits at the **eastern foot of the first Watchung ridge**; "the Valley" (Valley Arts) is a
  **low-lying former-industrial section near the rail line**, and the city runs a municipal **Stormwater program**
  — frame stormwater **qualitatively, with NO flood-zone % or flood depth** unless a FEMA/NJDEP source is named.
  **NO reservation adjacency:** the South Mountain Reservation is in **West Orange/Maplewood/Millburn** — Orange is
  **one municipality removed** (it borders West Orange to its west). The roofing-relevant tree/branch stressor is
  **Orange's own dense street trees plus the wooded West Orange / first-Watchung ridge to the west** — keep it
  **qualitative, no canopy figure**. **BAN every river / Passaic / Newark Bay / tidal / reservation-adjacency
  reference, and any "flat plain" framing.**
- **Climate (shared EWR baseline, HEDGED — identical to Newark/East Orange):** ~31.5 in/yr snow; nor'easters
  Oct–April; ~25–30 thunderstorms/yr; ground snow load **Pg ~25 psf** and **~110–115 mph ASCE 7-16** design wind
  kept **HEDGED** (not Essex-confirmed). **Urban heat island = EPA-attributed, QUALITATIVE ONLY** — use: "Per the
  U.S. EPA, the heat-island effect makes daytime air temperatures in U.S. urban areas about 1–7°F higher than
  outlying areas." **BAN every city-specific degree/gust number.** There is **no distinct Orange microclimate
  number.**
- **Cautions:** **Never** call the building at **239 Main Street** a "Scottish Rite Cathedral" — it is a former
  **Masonic Temple** (fire-damaged 2022), NOT Register-confirmed; omit it or describe it only as "the former
  Masonic Temple on Main Street." **Never** describe Orange as a high-homeownership suburb. (Context only:
  2020 Census population 34,447; 2024 estimate 35,079 — use qualitatively if at all.)

## D. De-fab targets present in the CURRENT combo file (fix all)
- `overview[0]` opens "Newark Quality Roofing delivers expert {service} in Orange — with prices starting from
  $X–$Y and free estimates available today" → **delete the price + hype**, replace with a figure-free answer-first
  definition (bold the named topics).
- **Inline markdown self-links** like `[Aging roof replacement](/aging-roof-replacement)` → **strip the link
  syntax** (keep the words as plain text; no URLs anywhere — the committed Newark combos have zero links).
- `whyChooseUs` (all identical, templated): "NJ licensed, **GAF Certified** — **15+ years** protecting Essex…",
  "**same-day** estimates and **24/7** emergency response", "Premium materials from GAF, CertainTeed, Owens Corning
  with manufacturer warranties." → **de-fab** to clean factual reasons (see §E).
- `conversionHooks.urgencyNote` "saves thousands" hype → soften to a factual prompt.
- Any unsourced hard number in prose (surface temps, percentages, lifespans, fabricated datasets) → name-source or
  de-quantify. **Watch for invented geography** (any river/flood/reservation-adjacency claim is a fabrication for
  Orange — and do NOT import East Orange's "flat plain" line either).
- **Preserve** the genuinely good Orange texture (multi-family/rental landlord economics; converted-industrial
  flat/low-slope roofs in the **Valley Arts** area; **Main Street** downtown commercial; older detached homes in
  **Seven Oaks**; tenant-access coordination under NJ landlord–tenant notice; the **four-district COA** where a
  historic angle applies) — restructure it answer-first, do not discard it. **Drop any neighborhood not in the
  verified list in §C.**

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
- "Local Essex County crew familiar with Orange's dense two-/three-family, converted-loft, and older-detached building stock."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials.)

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in Orange.").
`urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural water damage.").

## F. Differentiation directive (per the Batch-2 lesson — pre-empt cross-city overlap)
For the **process-heavy / low-localizability** services — **roof-thermal-imaging-inspections, storm-damage-roof-
repair, commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection,
insurance-roof-replacement, roof-overlay-installation** (and similar standardized-process pages) — **foreground
the Orange-specific application** so the page does not mirror Newark/East Orange. Lead with the local situation,
then bring in the standardized facts:
- **Valley Arts converted-industrial / loft buildings** → large flat/low-slope membrane roofs, parapets, internal
  drainage.
- **Main Street downtown commercial** corridor and mixed-use buildings.
- **Heavy 2-/3-family rental + investor/landlord ownership** → tenant-occupied access, NJ landlord–tenant notice,
  documentation for owners and insurers.
- **The four-district COA gate** (Orange Valley / Montrose-Seven Oaks / Main Street / St. John's) where a regulated
  property is involved.
- **Watchung-ridge / dense street-tree** wind-and-debris stressor (NOT a reservation).
**Preserve every cited standard/cost fact** (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize
ranges) — differentiation is about which local facts lead, not about changing the sourced figures.

## G. Output format
Write the **complete file** to `<service>.snippet.ts` — keep the exact first line
`import type { ComboContent } from '../schema';` and the EXACT `export const <ExportName>: ComboContent = {` you
are given (so `orange/index.ts` imports stay valid). Keep `serviceId` and `cityId: 'orange'` unchanged.
Also write a short `<service>.md` noting the de-fabs you cleared + the named sources you used.
Voice/structure exemplar: the committed `roof-repair` object in `src/data/service-content/repair-maintenance.ts`
AND the committed Newark combo `src/data/combo-content/newark/roof-repair.ts` (same answer-first shape, localized);
the COA framing mirrors Newark's historic combos.
