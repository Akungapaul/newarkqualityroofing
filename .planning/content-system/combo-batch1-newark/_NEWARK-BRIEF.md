# Newark Combo Author Brief — Combo Batch 1

You are rewriting ONE Newark service×city combo page (`src/data/combo-content/newark/<service>.ts`)
**answer-first** and **de-fabbed**. The combo = the intersection of a service (already
rewritten answer-first at `src/data/service-content/<categoryFile>.ts`) and Newark (facts below).
**Localize the finished service content to Newark** — do not invent a new service story.

---

## A. The combo render contract (author to these fields, in this order)
`ComboTemplate` renders: `directAnswer` (hero, copper-bold) → `overview` (ProseLead, **first string = lead**)
→ `challenges` (ProseLead, first string = lead) → `conversionHooks.midPageCta`+`urgencyNote`
→ `process` (parseRichText) → `pricing` → `whyChooseUs` (**ignored at render — but still de-fab it**)
→ `faqs` (parseRichText). Headings are template-driven (H1 "Who Provides {Service} in Newark?",
coreH2 "What {Service} Is Available in Newark?") — **do NOT write headings into content**.

Rich-text fields (bold `**…**` + links parse): `directAnswer`, `overview`, `challenges`, `process`, `faqs.answer`.
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
   **de-quantify** — never invent. No outbound links (name sources in prose, no URLs). No synthesized superlatives.
6. **No price in any prose lead.** Pricing lives ONLY in the `pricing` field (see §E) and the cost FAQ.

## C. Newark load-bearing facts (carry verbatim where used)
- **Permit office:** *Newark Department of Engineering — Building Division / Office of Uniform Construction Code*
  (Central Permit Office, 920 Broad Street, City Hall). **NOT** Economic & Housing Development.
- **Reroof permit rule (statewide UCC):** a **detached one- or two-family reroof — including a full tear-off
  and re-cover — is "ordinary maintenance" under N.J.A.C. 5:23-2.7 and requires NO construction permit**. A
  permit IS required on **commercial, multi-family, or attached** buildings (the **25% rule**) and any
  structural roof work. Newark enforces but does not override the state classification.
- **Historic COA = YES but parcel-specific:** the **Newark Landmarks & Historic Preservation Commission**
  issues Certificates of Appropriateness under **Newark Municipal Code Chapter 41:10**. The ordinance
  auto-designates pre-May-30-2007 National/State Register districts as **local landmarks**. **James Street
  Commons** and **Lincoln Park** are confirmed local-designated → COA applies. Forest Hill / Four Corners /
  Military Park Commons / Weequahic Park are **INFERRED-local — HEDGE**: write "Newark's ordinance
  auto-designates pre-2007 Register districts as local landmarks; **verify a specific parcel's local/contributing
  status before assuming a COA.**" Register listing **alone** places no restriction on a private owner (per NPS).
- **Housing stock:** dense urban core, **~3/4 renter-occupied (24.4% owner-occupied), heavily two-/three-family
  and apartment**; North Ward / **Forest Hill** retains the most single-family (1870s–1920s Victorian/Colonial/
  Beaux-Arts). **Roseville** = Victorian brownstones/row-homes. **Ironbound/East Ward** = dense multi-ethnic,
  rowhouses + 1–3 family + active factories + flat-roof commercial along Ferry Street; low-lying, **Passaic-River
  /tidal flood exposure** (frame qualitatively). **Vailsburg/West Ward** = Dutch Colonial/Victorian, single-/two-family.
  **Weequahic/South Ward** = early-20thC detached homes around Weequahic Park. **Downtown/University Heights** =
  institutional + brownstones near James Street Commons.
- **Geography:** Passaic River = eastern/northeastern boundary, drains to Newark Bay (NOT the Hackensack);
  topography ~0 ft (Ironbound) to ~230 ft (Forest Hill/Vailsburg) — east-flood / west-elevated. EWR straddles
  Newark **and** Elizabeth — never "entirely in Newark."
- **Climate (shared EWR baseline, HEDGED):** ~31.5 in/yr snow; nor'easters Oct–April; ~25–30 thunderstorms/yr;
  ground snow load Pg ~25 psf and ~110–115 mph ASCE 7-16 design wind kept HEDGED (not Essex-confirmed).
  **Urban heat island = EPA-attributed, QUALITATIVE ONLY** — use: "Per the U.S. EPA, the heat-island effect makes
  daytime air temperatures in U.S. urban areas about 1–7°F higher than outlying areas." **BAN every city-specific
  degree/gust number** ("160°F surface," "10–15°F above suburbs," "80 mph downtown") — no source supports them.

## D. De-fab targets present in the CURRENT combo file (fix all)
- `overview[0]` ends with "…with prices starting from $X–$Y and free estimates available today" → **delete the
  price + hype**, replace with a figure-free answer-first definition.
- `whyChooseUs` (all identical, templated): "NJ licensed, **GAF Certified** — **15+ years** protecting Essex…",
  "**same-day** estimates and **24/7** emergency response", "Premium materials from GAF, CertainTeed, Owens Corning
  with manufacturer warranties." → **de-fab** to clean factual reasons (see §E).
- `conversionHooks.urgencyNote` "saves thousands" hype → soften to a factual prompt.
- Any unsourced hard number in prose (surface temps, percentages, lifespans) → name-source or de-quantify.
- **Preserve** the genuinely good Newark texture already in the file (party-wall row-house leaks, Ironbound
  flat-roof membranes, North Ward access constraints, slate/brownstone references) — restructure it answer-first,
  do not discard it.

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
- "Local Essex County crew familiar with Newark's row-house, brownstone, and flat-roof building stock."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials.)

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in Newark.").
`urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural water damage.").

## F. Output format
Write the **complete file** to `<service>.snippet.ts` — keep the exact first line
`import type { ComboContent } from '../schema';` and the EXACT `export const <ExportName>: ComboContent = {` you
are given (so `newark/index.ts` imports stay valid). Keep `serviceId` and `cityId: 'newark'` unchanged.
Also write a short `<service>.md` noting the de-fabs you cleared + the named sources you used.
Voice/structure exemplar: the committed `roof-repair` object in `src/data/service-content/repair-maintenance.ts`.
