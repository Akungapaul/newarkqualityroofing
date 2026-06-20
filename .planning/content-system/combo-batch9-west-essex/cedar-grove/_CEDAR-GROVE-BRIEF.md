# Cedar Grove Combo Author Brief — Combo Batch 9 (west-essex; entity-grounding inherited)

You are rewriting ONE Cedar Grove service×city combo page (`src/data/combo-content/cedar-grove/<service>.ts`)
**answer-first**, **de-fabbed**, and **entity-grounded**. The combo = the intersection of a service (already
rewritten answer-first at `src/data/service-content/<categoryFile>.ts`) and Cedar Grove (facts below).
**Localize the finished service content to Cedar Grove** — do not invent a new service story.

> Cedar Grove = **Township of Cedar Grove**, northern Essex County, NJ — a between-the-Watchungs township of
> predominantly **postwar ranch and split-level homes** on tree-shaded residential streets, set between the First and
> Second Watchung mountains and adjoining the **Mills Reservation** and **Hilltop Reservation**, with low-slope
> commercial storefronts along the **Pompton Avenue / Route 23** corridor. Ownership is **strongly homeowner-facing
> (76.3% owner-occupied across 5,008 housing units, per the U.S. Census Bureau)** — frame the audience as
> **owner-occupants of a mature, predominantly single-family suburb**, with a secondary Pompton-Avenue / Route 23
> commercial-storefront angle. The single biggest Cedar Grove-specific fact for COA framing: **Cedar Grove has NO
> local Historic Preservation Commission, NO Certificate of Appropriateness, and NO locally designated historic
> district or landmark — only an ADVISORY Heritage Advisory Committee with no designation, COA, or regulatory
> authority.** Cedar Grove is the **ONLY no-COA city in this batch** — its closest analogs are Belleville, East Orange,
> and Irvington (none of those carry a binding reroof COA either). A private homeowner reroof in Cedar Grove needs no
> Certificate of Appropriateness; per the National Park Service, National Register listing alone places no restriction
> on a private owner. State this plainly in the historic FAQ.

---

## 0. ENTITY-GROUNDING (read first — it changes directAnswer + credentials)
This batch bakes the site-wide entity-grounding pattern into the combos from the start (like Irvington, Bloomfield,
Belleville, Nutley, and Maplewood/South Orange did).

1. **`directAnswer` is entity-grounded** — author it in this exact shape (gold exemplars:
   `src/data/combo-content/orange/roof-repair.ts` and the committed Cedar Grove CITY page
   `src/data/city-content/west-essex.ts`, cityId 'cedar-grove'):
   > `**Newark Quality Roofing is a roofing contractor providing {service} across Cedar Grove, New Jersey, and Essex County, {1–2 city-specific scope clauses}** … as a registered New Jersey Home Improvement Contractor.`
   - The **bolded span** (from "Newark Quality Roofing" through the scope clauses) must be **≤40 words** — end the
     bold before the credential tail if needed. The credential tail "as a registered New Jersey Home Improvement
     Contractor." is OUTSIDE the bold.
   - Establish **"Cedar Grove, New Jersey"** (the state, spelled out) and **"roofing contractor"** as the descriptor.
   - This answers the page H1 "Who Provides {Service} in Cedar Grove?". No modality.
2. **DO NOT author a `definition` field.** The canonical "What Is {service}?" definition is propagated verbatim from
   the service layer by a deterministic post-assembly splice (entity-stable across all cities). If you write one it
   will be overwritten — omit it entirely.
3. **Credential = "registered New Jersey Home Improvement Contractor" — NEVER "licensed" for NQR.** NJ has no
   standalone roofing license; roofing is HIC *registration* (N.J.S.A. 56:8-136). NQR self-credential framing is
   **"a registered New Jersey Home Improvement Contractor"** and, where insurance is mentioned, **"fully insured."**
   Do **NOT** write "licensed and insured," "NJ licensed," or "licensed roofing contractor" for NQR anywhere
   (directAnswer, overview, challenges, process, faqs, whyChooseUs, metaDescription, conversionHooks). **The CURRENT
   files carry "NJ licensed, GAF Certified" in whyChooseUs — delete it.**
   - KEEP factual **third-party** "licensed" cites verbatim where the fact pack uses them: a *licensed Construction
     Official*, a *licensed public adjuster or attorney* (N.J.S.A. 17:22B), a *licensed structural/professional
     engineer*, a *licensed asbestos abatement* contractor, "*not licensed to remediate mold*." Those are correct.

---

## A. The combo render contract (author to these fields, in this order)
`ComboTemplate` renders: **EntityDefinition** (first H2 "What Is {Service}?" — *spliced, you do NOT write it*) →
`directAnswer` (hero, copper-bold) → `overview` (ProseLead, **first string = lead**) → `challenges` (ProseLead,
first string = lead) → `conversionHooks.midPageCta`+`urgencyNote` → `process` (parseRichText) → `pricing` →
`whyChooseUs` (**ignored at render — but still de-fab it**) → `faqs` (parseRichText). Headings are template-driven
(H1 "Who Provides {Service} in Cedar Grove?", later H2 "What {Service} Is Available in Cedar Grove?") — **do NOT write
headings into content**.

Rich-text fields (bold `**…**` parses): `directAnswer`, `overview`, `challenges`, `process`, `faqs.answer`.
RAW fields (NO `**`, NO markdown — it leaks and fails the gate): `whyChooseUs`, `pricing.range`, `pricing.note`,
`metaDescription`, `conversionHooks.midPageCta`, `conversionHooks.urgencyNote`, FAQ `question`.

Schema: `overview` 3–5 strings · `challenges` 2–4 · `process` 2–4 · `faqs` 3–6 `{question,answer}` ·
`metaDescription` ≤160 chars · `pricing?{range,note?}` · `whyChooseUs?[]` · `conversionHooks?{midPageCta?,urgencyNote?}`.
**Do NOT include a `definition` field** (see §0.2).

## B. Answer-first + hard rules (NQR Semantic Content Ruleset)
1. **R2 answer-length** — `directAnswer` bold span, the **first string** of `overview`/`challenges`/`process`, and
   the **first sentence** of every `faqs.answer` must each be a **definitive ≤40-word answer**. Count standalone
   em-dash " — " tokens as words; tighten BELOW 40 to be safe. `overview[0]` leads with **NQR + the service applied
   to Cedar Grove's building stock** (figure-free; the entity definition is the separate spliced block — do not
   duplicate it here).
2. **R3 strict body-lead bold** — bold 1–3 named topics in each lead with `**…**`. Then each following body string
   **opens by re-bolding a topic from that section's lead**, in the same order. Fact-preserve.
3. **R6 no modality** in declaratives — ban "will / should / need to / must" in statements (FAQ *questions* are
   exempt). Use indicative: "requires," "restores," "traces," "admits."
4. **No de-fab literals anywhere** (GATE-failing): `GAF Certified`, `same-day`, `24/7`, `0% financing`, `500+`,
   `top-rated`, `15+ years`, fabricated review counts/ratings, "hundreds of projects," any invented NQR self-stat,
   any response-time claim ("within 2–4 hours"), any manufacturer-certification claim, any "closest contractor"
   superlative, any manufacturer brand as an NQR credential ("Premium materials from GAF/CertainTeed/Owens Corning"),
   any fabricated program ("investment property program," "portfolio pricing"). NQR's only credential framing is
   **"a registered New Jersey Home Improvement Contractor"** + **"fully insured."**
5. **Every hard number named-sourced** from a fact pack (cite the source in-text, e.g. "per HomeAdvisor," "an
   industry estimate attributed to the NRCA," "per N.J.A.C. 5:23-2.7," "per the InterNACHI life-expectancy chart").
   If no pack supports a number, **de-quantify** — never invent. **No links or URLs anywhere** — name sources in
   prose only, and **strip every existing markdown self-link** like `[roof repair](/roof-repair)` or
   `[Montclair](/roof-repair-montclair-nj)`. The committed Newark/Orange/Irvington/Bloomfield/Belleville/Nutley/
   Maplewood/South-Orange combos carry ZERO inline links — match that. No synthesized superlatives.
6. **No price in any prose lead.** Pricing lives ONLY in the `pricing` field (see §E) and the cost FAQ.

## C. Cedar Grove load-bearing facts (carry verbatim where used; source = cities-batchC/cedar-grove.md + CITY-FACTS-west-essex.md §Cedar Grove, and the committed Cedar Grove city page `src/data/city-content/west-essex.ts`, cityId 'cedar-grove')
- **Permit office:** the **Township of Cedar Grove Building Department**, at **525 Pompton Avenue**. Use that generic
  safe phrasing; do **NOT** name a Construction Official, a director, or a fee schedule. **The CURRENT files say
  "Cedar Grove Building Department" loosely and sometimes omit the address — use "the Township of Cedar Grove Building
  Department at 525 Pompton Avenue."**
- **Reroof permit rule (statewide UCC — identical to every prior city):** a **detached one- or two-family reroof —
  including a full tear-off and re-cover — is "ordinary maintenance" under N.J.A.C. 5:23-2.7 and requires NO
  construction permit, no inspection, and no notice.** A permit IS required on **commercial, multi-family, or
  attached** buildings (the **25% rule**: repairing >25% of total roof area in a 12-month period) and any structural
  roof work; recover-vs-tear-off limits follow the **Rehab Subcode, N.J.A.C. 5:23-6.4**. The Pompton Avenue / Route 23
  commercial storefronts are the natural place this commercial path applies.
- **Historic = NO COA AT ALL (KEY — Cedar Grove is the ONLY no-COA city in this batch).** Cedar Grove has **NO local
  Historic Preservation Commission, NO Certificate of Appropriateness process, and NO locally designated historic
  district or landmark.** The township maintains only an **advisory Heritage Advisory Committee**, which runs
  educational and cultural programs and holds **no landmark-designation, COA, or regulatory authority**. A private
  homeowner reroof in Cedar Grove faces **no historic-district restriction**. Per the **National Park Service**,
  National Register listing alone places **no restriction on a private owner**. Frame exactly:
  > *"Cedar Grove has no local Historic Preservation Commission and no Certificate-of-Appropriateness process, so a
  > homeowner reroof in Cedar Grove faces no historic-district restriction. Cedar Grove maintains only an advisory
  > Heritage Advisory Committee, which runs educational and cultural programs and holds no landmark-designation or
  > regulatory authority. Per the National Park Service, National Register listing alone places no restriction on a
  > private owner."*
  Rules:
  - **State plainly that NO COA applies in Cedar Grove.** Do NOT hedge it into a conditional — there is no framework,
    no district, no landmark. This is the OPPOSITE of a conditional-COA city.
  - **Do NOT** import a neighbor's gate: NOT Glen Ridge's Chapter-15.32 broad district, NOT Montclair's Article-XXIII
    4-districts-plus-landmarks, NOT West Orange's Section-25-30 landmark-only, NOT Verona's Chapter-150 "HPC review,"
    NOT Maplewood's Article-VIII framework, NOT South Orange's Montrose-Park / Chapter-185, NOT Bloomfield's
    Chapter-302, NOT Nutley's Chapter-410, NOT Orange's four districts.
  - Surface the no-COA fact where the historic angle arises (historic-roof-restoration, slate/tile/cedar-shake,
    custom-roof-design-consultation). Where the NPS Register note adds nothing, the plain "no COA" statement suffices.
- **Housing stock:** **predominantly postwar ranch and split-level homes** (plus bi-levels, colonials, Cape Cods) on
  tree-shaded residential streets, with older period homes carrying slate/metal detailing on the township's higher
  ground; the Pompton Avenue / Route 23 corridor carries the strip retail, offices, and auto/service buildings on
  low-slope roofs. **76.3% owner-occupied across 5,008 housing units, per the U.S. Census Bureau** (this figure IS
  published on the committed city page — keep it, named-sourced, in the who/what residential framing; do NOT print a
  population integer or a decade-built %). The older period stock → **deteriorated sheathing discovered at tear-off**,
  aging valley/chimney/wall flashing, slate/metal period detailing; the Pompton-Avenue / Route 23 storefronts →
  EPDM/TPO/mod-bit low-slope membrane.
- **Neighborhoods / sections (VERIFIED ONLY — the ONLY ones any combo may name; drop anything not on this list):**
  **North End** (Cedar Grove section north of the Fairview Avenue / Pompton Avenue intersection; higher-elevation
  postwar single-family streets), **Park Ridge Estates** (upscale development in the North End on higher eastern/
  northern ground; larger homes on wooded lots), **Central Cedar Grove** (Fairview Avenue to Bradford Avenue along
  Pompton Avenue; the township business district of strip retail, offices, and service buildings), **South End**
  (Bradford Avenue to the Verona border; the most densely developed area, homes set closer together), the **Pompton
  Avenue / Route 23 corridor** (the commercial spine, low-slope storefronts), and the **Mills Reservation edge** (the
  wooded ridgeline on the east side of central Cedar Grove near the Cedar Grove Reservoir). **DROP** any street/section
  NOT above — the CURRENT files FABRICATE "Ridge Road," "Bowden Road," "Bradford Avenue colonials," "upper Bradford
  Avenue" as a wind-exposure list, "Route 23 storefront" addresses written as completed jobs, and similar; do **NOT**
  carry them as named addresses or completed-project locations. Do **NOT** publish a fabricated individual-landmark
  list.
- **Geography (HARD guardrails):**
  - Cedar Grove is a **northern Essex County township between the First and Second Watchung mountains** — qualitative
    **"higher ground"** only; **no city-specific elevation, snow, or wind number.** Do **NOT** write "western slope of
    the Second Watchung Mountain," "storms climb the Watchung slope," or "winds 15–20% higher than valley homes" — those
    are FABRICATED in the current files.
  - **RESERVATION GUARDRAIL (never violate):** Cedar Grove adjoins the **Mills Reservation** (157.15 acres, shared with
    Montclair) and the **Hilltop Reservation** (284.16 acres, shared with North Caldwell and Verona), per **Essex County
    Parks**. Cedar Grove does **NOT** touch the **South Mountain Reservation** (that is West Orange only in this batch)
    and does **NOT** touch the **Eagle Rock Reservation** (West Orange / Montclair / Verona). The reservation edges and
    the township's mature deciduous canopy + conifer needle-shed press heavy canopy against nearby roofs → leaf/branch
    debris in valleys & gutters, branch impact in nor'easters/summer storms, shade-driven moss/algae on north slopes.
    Keep **QUALITATIVE** (the 157.15-acre / 284.16-acre figures are the only reservation numbers, and only when the
    reservation itself is the subject; cite Essex County Parks).
  - **Mature street-tree canopy** plus the reservation edges → the defining Cedar Grove roof stressor. Keep QUALITATIVE
    (no canopy-% figure).
  - Cedar Grove borders Montclair, Verona, Little Falls (Passaic County), and North Caldwell. Do **NOT** import
    Belleville's "Second-River / Route 21," Nutley's "Third-River / ON3," Bloomfield's "town center / GSP," Irvington's
    "Vailsburg / I-78," Maplewood's "South Mountain reservation reaching INTO its western edge," or South Orange's
    "Seton Hall / SOPAC" framing as Cedar Grove's. The Cedar Grove commercial spine is **Pompton Avenue / Route 23**.
- **Climate (shared EWR baseline, HEDGED — identical to every prior city):** ~31.5 in/yr snow; nor'easters Oct–April;
  ~25–30 thunderstorms/yr; ground snow load **Pg ~25 psf** and **~110–115 mph ASCE 7-16** design wind kept **HEDGED**
  (not Essex-confirmed). **BAN every city-specific degree/gust/elevation number.** No distinct Cedar Grove microclimate
  number — and specifically NO "snowfall 2 to 4 inches greater per storm," which was fabricated in the prior page.
- **UNVERIFIED — never publish:** any population integer, an exact pre-1940/pre-1950 %, a median year built, a decade
  range like "ranch homes built between 1950 and 1975," the Construction Official's name, any individually designated
  landmark list, COA fees/fines (there is no COA), any street/section beyond the verified list above, any FEMA
  flood-zone figure, the "western slope of the Second Watchung Mountain," the Norway-spruce species claim, the
  "2 to 4 inches greater per storm" snow claim, the "extend shingle life by 5 to 8 years" claim, the "reduce energy
  costs by 15–25 percent" claim, the fabricated "24–48 hour" / "4–6 hour" response-time claims, and the
  "$11,000–$17,000" / "$16,000–$26,000" / "$350–$1,500" / "$15,000–$50,000" / "$500–$3,000" pricing tiers.

## D. De-fab targets present in the CURRENT combo files (fix all)
- `overview[0]` opens "Newark Quality Roofing delivers expert {service} in Cedar Grove — with prices starting from $X–$Y
  and free estimates available today" → **delete the price + hype**, replace with an answer-first NQR-applied,
  entity-grounded lead (bold the named topics; figure-free).
- **Pricing range** is the OLD `$350–$1,500` (roof-repair), `$15,000–$50,000` (historic-roof-restoration),
  `$500–$3,000` (storm-damage), and other invented tiers → replace with the sourced default for the service type
  (§E): repair & maintenance `$400–$1,000`; replacement/installation `$10,000–$25,000`.
- **`whyChooseUs`** templated trust lines — "NJ licensed, GAF Certified — 15+ years protecting Essex County…",
  "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "same-day estimates and
  24/7 emergency response" → **de-fab** to clean factual reasons (§E), using the **registered HIC / fully insured**
  framing.
- **Fabricated Cedar Grove-specific prose in the current files** — the **"western slope of the Second Watchung
  Mountain"** location claim; "**ranch-style homes from the 1950s through 1970s**" / "**built between 1950 and 1975
  constitute the single largest category**" decade claims; the **Norway-spruce** species claim; **"winter snowfall 2
  to 4 inches greater per storm"**; "**extend shingle life by 5 to 8 years**"; "**reduce energy costs by 15–25
  percent**"; fabricated wind-exposure streets (**Ridge Road / Bowden Road / upper Bradford Avenue**, "winds fifteen
  to twenty percent higher than valley homes"); fabricated **Bradford Avenue colonial / Route 23 storefront** jobs
  written as completed projects at named addresses; the **"within 24 to 48 hours" / "within four to six hours"**
  response-time claims; "we have a crew on-site within four to six hours," "we keep earth-toned architectural shingles
  (Weathered Wood / Driftwood / Charcoal) in inventory" inventory claims; "**many of our new Cedar Grove clients come
  through recommendations from neighbors**" / "our next referral comes from the homeowner watching from across the
  fence"; the false **"Cedar Grove lacks the concentration of historic architecture found in Glen Ridge or
  Montclair"** comparative; and every fabricated NQR warranty term → **DELETE/CORRECT all of it.** Replace with
  VERIFIED Cedar Grove texture (predominantly postwar ranch/split-level stock; deteriorated sheathing at tear-off;
  Pompton Avenue / Route 23 storefronts; Mills/Hilltop reservation-edge + street-canopy debris; the advisory-only
  Heritage Committee / no-COA fact where the historic angle applies).
- **`conversionHooks.urgencyNote`** "Don't wait for minor damage to become a major expense. Early action saves
  thousands" → factual, no fabricated savings (e.g. "Addressing roof damage early limits interior and structural
  water damage.").
- **Inline markdown self-links** like `[roof repair](/roof-repair)`, `[Montclair](/roof-repair-montclair-nj)`,
  `[Verona](/roof-repair-verona-nj)`, `[Glen Ridge](/historic-roof-restoration-glen-ridge-nj)` → strip the link syntax
  (keep words as plain text; the committed siblings carry zero links).
- **Unsourced hard numbers** (decade-specific lifespans, the "more than 25 percent of the roof surface" rule stated
  without a UCC cite, the "two to four times more" restoration multiplier) → name-source from the packs (the 25% rule
  = N.J.A.C. 5:23-2.7 / NJ UCC; lifespans = the InterNACHI life-expectancy chart; the "two to four times more" =
  re-pair to a sourced cost-guidance pack or de-quantify) or **de-quantify**.
- **Preserve** the genuinely good Cedar Grove texture (postwar ranch/split-level stock; deteriorated sheathing at
  tear-off; slate/metal period detailing on older homes; Pompton Avenue / Route 23 low-slope membrane; valley-and-
  transition flashing failures; reservation-edge + street-canopy debris; ice-dam mechanism on tree-shaded slopes) —
  restructure it answer-first, do not discard it.

## E. Pricing + whyChooseUs + conversionHooks (use these defaults — do NOT invent)
**`pricing`** — align to the SAME sourced ranges the city/service layers ship; name the source in `note`:
- Repair & maintenance services → `range: '$400–$1,000'`,
  `note: 'Typical NJ leak-repair range per HomeAdvisor; final cost depends on roof size, pitch, material, and access. Newark Quality Roofing provides a free written estimate.'`
- Replacement / installation / roof-type services → `range: '$10,000–$25,000'`,
  `note: 'Typical NJ roof-replacement range per HomeAdvisor and Modernize; final cost depends on roof size, pitch, material, and access. Newark Quality Roofing provides a free written estimate.'`
- Components-specialty (flashing, gutter, skylight, fascia, soffit, vent, waterproofing, deck) → use a pack-sourced
  figure if one exists (e.g. chimney flashing `$300–$1,500` per Modernize); otherwise set `range: 'Varies by scope'`,
  `note: 'Final cost depends on scope, materials, and access. Newark Quality Roofing provides a free written estimate.'`
  — **no invented number**.
- The **cost FAQ** answers with the same range + free-written-estimate framing; never a fabricated guarantee.

**`whyChooseUs`** (raw, no `**`) — replace the templated trust line with 3–4 of:
- "A registered New Jersey Home Improvement Contractor, fully insured."
- "Local Essex County crew familiar with Cedar Grove's postwar ranch and split-level homes and Pompton Avenue storefronts."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials, NO "licensed.")

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in
Cedar Grove."). `urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural
water damage.").

## F. Differentiation directive (pre-empt cross-city overlap — the in-archetype west-essex siblings are the primary differentiate target)
**Cedar Grove shares the reservation-edge / tree-canopy / predominantly-single-family pattern with its west-essex
siblings and with Nutley and Maplewood.** Lead with the facts UNIQUE to Cedar Grove so the page never mirrors the
other four west-essex cities or the committed Newark/East Orange/Orange/Irvington/Bloomfield/Belleville/Nutley/
Maplewood/South-Orange versions:
- **Cedar Grove-DISTINCT anchors to FOREGROUND:** the **NO-COA position** (no HPC, no Certificate of Appropriateness,
  no locally designated district or landmark — only an advisory Heritage Advisory Committee — the only no-COA city in
  the batch); the **Mills Reservation + Hilltop Reservation** edges (NOT South Mountain, NOT Eagle Rock) and the
  street-canopy debris that loads them; **predominantly postwar ranch and split-level** homes (76.3% owner-occupied
  across 5,008 housing units); the **Pompton Avenue / Route 23** commercial corridor; the verified sections
  (**North End, Park Ridge Estates, Central Cedar Grove, South End, the Pompton Avenue / Route 23 corridor, the Mills
  Reservation edge**); the permit office at **525 Pompton Avenue**.
- **AVOID importing the OTHER FOUR west-essex siblings' anchors** (do NOT write these into a Cedar Grove combo):
  - **West Orange:** NARROW landmark-only COA (Section 25-30; ~10 landmarks; Llewellyn Park = private deed-of-trust);
    office the Township of West Orange Building & Construction Code Enforcement; South Mountain + Eagle Rock.
  - **Montclair:** CONDITIONAL local COA (Article XXIII of Chapter 347 §347-136; 4 districts + local landmarks; in-kind
    exempt); office the Township of Montclair Building Office; Eagle Rock + Mills.
  - **Glen Ridge:** BINDING local COA, BROADEST in the batch (Chapter 15.32, >90% of the borough); office the Borough
    of Glen Ridge Building Department at 825 Bloomfield Avenue; NO reservation (inner lowland borough; canopy is the
    stressor).
  - **Verona:** NARROW "HPC review" (Chapter 150 Article XXII; 2 designated landmarks; in-kind exempt; NOT a literal
    "Certificate of Appropriateness"); office the Township of Verona Department of Building and Inspections, Municipal
    Building, 600 Bloomfield Avenue; Eagle Rock + Hilltop + Peckman River.
  Also avoid the committed Newark/East-Orange/Orange/Irvington/Bloomfield/Belleville/Nutley/Maplewood/South-Orange
  anchors.
- For the **process-heavy / low-localizability** services — **roof-thermal-imaging-inspections, storm-damage-roof-repair,
  commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection, insurance-roof-replacement,
  roof-overlay-installation** — LEAD with the Cedar Grove situation (Pompton Avenue / Route 23 storefronts;
  reservation-edge + street-canopy branch impact on the postwar ranches; deteriorated plank-deck tear-offs; the no-COA
  Heritage-Committee-only historic posture; owner-occupant documentation) before the standardized facts.
**Preserve every cited standard/cost fact** (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize/
InterNACHI figures) — differentiation is about which local facts lead, not about changing the sourced figures.

## G. Output format
Write the **complete file** to `<service>.snippet.ts` (in `.planning/content-system/combo-batch9-west-essex/cedar-grove/`)
— keep the exact first line `import type { ComboContent } from '../schema';` and the EXACT
`export const <ExportName>: ComboContent = {` you are given (so `cedar-grove/index.ts` imports stay valid). Keep
`serviceId` and `cityId: 'cedar-grove'` unchanged. **Omit the `definition` field.** Also write a short `<service>.md`
noting the de-fabs you cleared + the named sources you used. The final assembled file lands at
`src/data/combo-content/cedar-grove/<service>.ts`. Voice/structure exemplar: the committed **Orange combo
`src/data/combo-content/orange/roof-repair.ts`** (same answer-first + entity-grounded shape — localize, do NOT copy
Orange's geography or COA) and the committed Cedar Grove **city page** `src/data/city-content/west-essex.ts`
(cityId 'cedar-grove') for verified Cedar Grove geography/voice.
