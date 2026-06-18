# South Orange Combo Author Brief — Combo Batch 8 (entity-grounding inherited)

You are rewriting ONE South Orange service×city combo page (`src/data/combo-content/south-orange/<service>.ts`)
**answer-first**, **de-fabbed**, and **entity-grounded**. The combo = the intersection of a service (already
rewritten answer-first at `src/data/service-content/<categoryFile>.ts`) and South Orange (facts below).
**Localize the finished service content to South Orange** — do not invent a new service story.

> South Orange = the **Township of South Orange Village**, Essex County, NJ — an inner-ring "first-suburb" west of
> Newark that **borders the South Mountain Reservation on the Reservation's EASTERN edge**, with the East Branch of the
> Rahway River running through the village. Its defining stock is **large pre-war homes — Victorians, Colonial Revivals,
> Tudor Revivals — plus Colonials and Capes** on tree-lined streets; **over half of the housing stock predates 1940 and
> 82% predates 1960** (Township planning evaluation). Anchors our crews serve: the **Montrose Park historic district**,
> the Wyoming sections, the **Village center around the NJ Transit station and the South Orange Performing Arts Center
> (SOPAC)**, and the **Seton Hall University 58-acre campus** (a substantial institutional low-slope roof inventory).
> Frame the audience as **owners of large, mature pre-war single-family homes**, with a secondary multi-family
> (near the train / Seton Hall) and Village-center / institutional commercial angle. The single biggest South
> Orange-specific fact for COA framing: **South Orange has a BINDING local COA — the Montrose Park Historic District is a
> LOCALLY designated district under Village Code Chapter 185, where exterior roofing on a designated property requires a
> Certificate of Appropriateness from the South Orange Historic Preservation Commission, separate from the construction
> permit.** This is the OPPOSITE of Maplewood's framework-only / Register-only posture; assert it ONLY as a LOCAL-ordinance
> matter (Chapter 185), ONLY inside the designated district / for designated local landmarks, and **NOT** "because of
> National Register listing," and **NOT** Village-wide.

---

## 0. ENTITY-GROUNDING (read first — it changes directAnswer + credentials)
This batch bakes the site-wide entity-grounding pattern into the combos from the start (like Irvington, Bloomfield,
Belleville, and Nutley did).

1. **`directAnswer` is entity-grounded** — author it in this exact shape (gold exemplars:
   `src/data/combo-content/orange/roof-repair.ts` and the committed South Orange CITY page
   `src/data/city-content/first-suburbs.ts`, cityId 'south-orange'):
   > `**Newark Quality Roofing is a roofing contractor providing {service} across South Orange, New Jersey, and Essex County, {1–2 city-specific scope clauses}** … as a registered New Jersey Home Improvement Contractor.`
   - The **bolded span** (from "Newark Quality Roofing" through the scope clauses) must be **≤40 words** — end the
     bold before the credential tail if needed. The credential tail "as a registered New Jersey Home Improvement
     Contractor." is OUTSIDE the bold.
   - Establish **"South Orange, New Jersey"** (the state, spelled out) and **"roofing contractor"** as the descriptor.
   - This answers the page H1 "Who Provides {Service} in South Orange?". No modality.
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
(H1 "Who Provides {Service} in South Orange?", later H2 "What {Service} Is Available in South Orange?") — **do NOT
write headings into content**.

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
   to South Orange's building stock** (figure-free; the entity definition is the separate spliced block — do not
   duplicate it here). **NOTE the COA=YES trap:** the historic FAQ's first sentence must stay ≤40w even with the long
   "Montrose Park Historic District" + "Certificate of Appropriateness" + "Village Code Chapter 185" — SPLIT it (a
   definitive first sentence ending after the COA requirement, then a second sentence for the local-ordinance / not-NR /
   not-Village-wide qualification).
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
   `[Maplewood](/roof-repair-maplewood-nj)`. The committed Newark/Orange/Irvington/Bloomfield/Belleville/Nutley
   combos carry ZERO inline links — match that. No synthesized superlatives.
6. **No price in any prose lead.** Pricing lives ONLY in the `pricing` field (see §E) and the cost FAQ.

## C. South Orange load-bearing facts (carry verbatim where used; source = CITY-FACTS-first-suburbs.md §South Orange + §0–§5, and the committed South Orange city page `src/data/city-content/first-suburbs.ts`, cityId 'south-orange')
- **Permit office:** the **Township of South Orange Village Building Department**, at **76 South Orange Avenue**; plan
  review runs within **20 business days**. Use that generic safe phrasing; do **NOT** name a Construction Official, a
  director, or a fee schedule.
- **Reroof permit rule (statewide UCC — identical to every prior city):** a **detached one- or two-family reroof —
  including a full tear-off and re-cover — is "ordinary maintenance" under N.J.A.C. 5:23-2.7 and requires NO
  construction permit, no inspection, and no notice.** A permit IS required on **commercial, multi-family, or
  attached** buildings (the **25% rule**: repairing >25% of total roof area in a 12-month period) and any structural
  roof work; recover-vs-tear-off limits follow the **Rehab Subcode, N.J.A.C. 5:23-6.4**. The Village center, SOPAC-area
  mixed-use, and the Seton Hall institutional roofs are the natural place this commercial path applies.
- **Historic = BINDING LOCAL COA (KEY — the OPPOSITE of Maplewood's framework-only posture).** The Township of South
  Orange Village has a **Historic Preservation Commission** operating under **Village Code Chapter 185**, and the
  **Montrose Park Historic District** (~550 homes) is a **LOCALLY designated COA district** — exterior roofing work on a
  designated property requires a **Certificate of Appropriateness from the South Orange Historic Preservation Commission
  before a construction permit, separate from the permit step.** Frame exactly:
  > *"Exterior roofing work on a designated property in the Montrose Park Historic District requires a Certificate of
  > Appropriateness from the South Orange Historic Preservation Commission under Village Code Chapter 185, separate from a
  > construction permit. The Certificate of Appropriateness is a local-ordinance requirement set by Village Code Chapter
  > 185, not by National Register listing, so it applies only inside the locally designated district and to designated
  > local landmarks, not Village-wide. Per the National Park Service, National Register listing alone places no federal
  > restriction on a private property owner."*
  Rules:
  - **Assert the COA as a LOCAL-ordinance matter (Village Code Chapter 185), NOT "because of National Register listing,"
    and NOT Village-wide** — only inside the designated **Montrose Park** district and for **designated local landmarks**
    ("Montrose Park plus individually designated local landmarks — verify each").
  - The COA checklist cites **Ordinance #2012-09** (current framework **Ordinance 2024-16**) — you may cite "Village Code
    Chapter 185" generically; do **NOT** invent COA fees, fines, buffer zones, or a full landmark inventory.
  - Other South Orange National-Register listings (**Old Main DL&W Railroad Historic District, Prospect Street**) are
    **Register-only** unless local designation is separately confirmed — do NOT assert a COA for them.
  - A **COA is a SEPARATE approval from the building permit.** State the Chapter-185 / Montrose-Park gate where the
    historic angle arises (historic-roof-restoration, slate/tile/cedar-shake, custom-roof-design-consultation). Do
    **NOT** import Maplewood's framework-only framing, Bloomfield's Chapter-302 Property List, Nutley's Chapter-410
    Third-River district, or Orange's four districts.
- **Housing stock:** large **pre-war Victorians, Colonial Revivals, Tudor Revivals** plus **Colonials, Capes, and smaller
  detached single-family** homes on tree-lined streets, with **multi-family near the train and Seton Hall**. **Over half
  the housing stock predates 1940 and 82% predates 1960, per the Township planning evaluation** (this IS published on the
  committed city page — keep it named-sourced in the who/what / aging-stock framing; do NOT print a population integer).
  The large pre-war stock → **aging steep-slope valley/chimney/wall flashing** (the heaviest leak load), slate/metal/
  copper period detailing, **plank/deteriorated sheathing discovered at tear-off**; the Village-center / SOPAC / Seton
  Hall buildings → EPDM/TPO/mod-bit low-slope membrane.
- **Neighborhoods / sections (VERIFIED ONLY — drop anything not on this list):** **Montrose Park** (most architecturally
  intact historic neighborhood, ~550 Queen Anne / Colonial Revival / Tudor Revival homes — the LOCALLY designated
  Chapter-185 COA district), **Upper Wyoming and Lower Wyoming** (the two official Wyoming neighborhoods split by the rise
  toward the South Mountain ridge — older single-family detached), **Newstead** (large older single-family near the South
  Mountain edge), **Tuxedo Park** (older detached single-family on tree-lined streets), **Academy Heights** (detached
  single-family), **Seton Village** (adjoins Seton Hall's 58-acre campus; single-family + rental/multi-family tied to the
  university), **Village Center and SOPAC** (commercial / transit-oriented multi-family on flat low-slope roofs around the
  NJ Transit station + the South Orange Performing Arts Center), **South Mountain** (directly abuts the Reservation along
  the western boundary — branch-impact). **DROP** any street/section NOT above; do **NOT** publish a fabricated landmark list.
- **Geography (HARD guardrails):**
  - South Orange **borders the South Mountain Reservation on the Reservation's EASTERN edge** (the wooded ridgeline along
    the **WESTERN** boundary), per **Essex County Parks** — the ridgeline drops branches onto adjoining roofs (the South
    Mountain / Newstead / Wyoming reservation-edge homes) during nor'easters/summer storms. Keep **QUALITATIVE** (branch
    impact, canopy debris); no acreage claim is needed (the ~2,100-acre figure belongs to the Reservation generally).
  - The **East Branch of the Rahway River runs through the village** — a localized low-lying/drainage angle, **QUALITATIVE
    only** (no FEMA zone/%/depth/named-street flood).
  - **Mature street-tree canopy** — the Township maintains **over 8,000 shade trees across 181 Village streets, per the
    Township Fast Facts** → leaf load clogging valleys & gutters, branch impact, shade-driven moss on north slopes. This
    "8,000 trees / 181 streets" figure is South-Orange-SPECIFIC (named the Township Fast Facts) — use it.
  - **Seton Hall University** (58-acre campus) is the SOUTH-ORANGE-distinct institutional / low-slope angle — academic
    buildings + residence halls with a substantial flat-roof inventory (25% rule + UCC permitting). **SOPAC** + the NJ
    Transit station anchor the Village commercial center.
  - South Orange borders **Maplewood, Newark, Orange, West Orange, Millburn** (and Irvington nearby). Do **NOT** import
    Maplewood's "reservation reaches INTO the western edge / Maplewood Village / Springfield Avenue / 574 Valley Street"
    framing, Belleville's "Second-River / Route 21," Nutley's "Third-River / ON3," Bloomfield's "town center / GSP,"
    Irvington's "Vailsburg / I-78," or Orange's "Watchung-ridge-foot" framing as South Orange's.
- **Insurance (South-Orange-relevant):** wind and hail rank as the largest homeowners-insurance claim type at **2.8% of
  insured homes per year, per the Insurance Information Institute**; a reservation-edge home faces falling-branch impact.
- **Climate (shared EWR baseline, HEDGED — identical to every prior city):** ~31.5 in/yr snow; nor'easters Oct–April;
  ~25–30 thunderstorms/yr; ground snow load **Pg ~25 psf** and **~110–115 mph ASCE 7-16** design wind kept **HEDGED**
  (not Essex-confirmed); NJ ranges sit roughly **10–40% above national figures, per HomeGuide**. **BAN every
  city-specific degree/gust number.** No distinct South Orange microclimate number.
- **UNVERIFIED — never publish:** any population integer, an exact median year built (the "over half pre-1940 / 82%
  pre-1960" municipal framing is the only sourced housing-age figure), the Construction Official's name, COA fees/fines/
  buffer zones, an individually designated landmark inventory, any street/section beyond the verified list above, any
  FEMA flood-zone figure, a COA outside Montrose Park / designated local landmarks, a canopy-coverage %.

## D. De-fab targets present in the CURRENT combo files (fix all)
- `overview[0]` opens "Newark Quality Roofing delivers expert {service} in South Orange — with prices starting from
  $X–$Y and free estimates available today" → **delete the price + hype**, replace with an answer-first NQR-applied,
  entity-grounded lead (bold the named topics; figure-free).
- **Pricing range** is the OLD invented tier (e.g. `$350–$1,500`) → replace with the sourced default for the service
  type (§E): repair & maintenance `$400–$1,000`; replacement/installation `$10,000–$25,000`.
- **`whyChooseUs`** templated trust lines — "NJ licensed, GAF Certified — 15+ years protecting Essex County…",
  "Premium materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response" →
  **de-fab** to clean factual reasons (§E), using the **registered HIC / fully insured** framing.
- **Fabricated South-Orange-specific prose in the current files** — any fabricated street names not on the verified
  neighborhood list, any fabricated storm-spike % / response-time claim ("within 2–4 hours"), named slate-quarry
  inventory claims, invented landmark lists, any "because it's on the National Register" COA framing, any "Village-wide"
  COA claim, "South Orange's Construction Department" (use "the Township of South Orange Village Building Department") →
  **DELETE/CORRECT all of it.** Replace with VERIFIED South Orange texture (large pre-war Victorian/Colonial/Tudor stock;
  steep-slope flashing; Montrose Park binding Chapter-185 COA; Seton Hall institutional flat roofs; SOPAC / Village-center
  membrane; 8,000-tree canopy debris; reservation-edge branch impact).
- **`conversionHooks.urgencyNote`** "Early action saves thousands" → factual, no fabricated savings.
- **Inline markdown self-links** like `[roof repair](/roof-repair)`, `[Maplewood](/roof-repair-maplewood-nj)`,
  `[West Orange](/roof-repair-west-orange-nj)` → strip the link syntax (keep words as plain text; the committed
  siblings carry zero links).
- **Unsourced hard numbers** (decade-specific lifespans, the "30%" repair-vs-replace rule) → name-source from the packs
  (the 30% rule = Kellow/Modernize/Josten per materials-economics §8; lifespans = the InterNACHI life-expectancy chart)
  or **de-quantify**.
- **Preserve** the genuinely good South Orange texture (large pre-war Victorian/Colonial/Tudor stock + slate/copper
  period detailing + plank decking at tear-off; Village-center / SOPAC / Seton Hall low-slope membrane; steep-slope
  valley/chimney/wall flashing failures; reservation-edge branch impact; 8,000-tree canopy debris; the binding Montrose
  Park / Chapter-185 COA where it applies) — restructure it answer-first, do not discard it.

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
- "Local Essex County crew familiar with South Orange's large pre-war homes, Montrose Park, and the Seton Hall / Village-center buildings."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials, NO "licensed.")

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in
South Orange."). `urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural
water damage.").

## F. Differentiation directive (pre-empt cross-city overlap — ESPECIALLY with Maplewood, the sibling in THIS batch)
**South Orange and Maplewood both border the South Mountain Reservation and share the tree-canopy / slate-heavy
period-housing pattern — they are the closest city pair in the project.** Lead with the facts that are UNIQUE to South
Orange so the page never mirrors Maplewood or the committed Newark/East Orange/Orange/Irvington/Bloomfield/Belleville/
Nutley versions:
- **South-Orange-DISTINCT anchors to FOREGROUND:** the **binding Montrose Park / Village Code Chapter 185 COA** (local
  ordinance, not Register, not Village-wide); **Seton Hall University's 58-acre campus** (institutional low-slope
  inventory) + **SOPAC** + the Village center around the NJ Transit station; **large pre-war Victorians / Colonial
  Revivals / Tudor Revivals** with **slate, metal, and copper** detailing (over half the stock predates 1940); the
  **8,000 shade trees across 181 Village streets** Fast-Facts canopy; the Reservation on the **Reservation's EASTERN
  edge** along the WESTERN boundary; the Building Department at **76 South Orange Avenue**.
- **AVOID importing Maplewood's distinct anchors** (do NOT write these into a South Orange combo): the **conditional /
  framework-only COA** (South Orange's is BINDING), **Maplewood Village + Springfield Avenue** storefronts, the
  **architect-designed Tudor / Colonial Revival / Italian Revival** house-style framing, the **74.9% owner-occupied /
  9,051-unit** Census figure, the **574 Valley Street** office, the "reservation reaching INTO the western edge / partial
  containment" framing, and the "2,100-acre in Maplewood/Millburn/West Orange" acreage line.
- For the **process-heavy / low-localizability** services — **roof-thermal-imaging-inspections, storm-damage-roof-repair,
  commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection, insurance-roof-replacement,
  roof-overlay-installation** — LEAD with the South Orange situation (Seton Hall institutional flat roofs; SOPAC /
  Village-center storefronts; reservation-edge branch impact; large pre-war steep-slope flashing; owner documentation)
  before the standardized facts.
**Preserve every cited standard/cost fact** (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize/
InterNACHI figures) — differentiation is about which local facts lead, not about changing the sourced figures.

## G. Output format
Write the **complete file** to `<service>.snippet.ts` (in `.planning/content-system/combo-batch8-maplewood-southorange/south-orange/`)
— keep the exact first line `import type { ComboContent } from '../schema';` and the EXACT
`export const <ExportName>: ComboContent = {` you are given (so `south-orange/index.ts` imports stay valid). Keep
`serviceId` and `cityId: 'south-orange'` unchanged. **Omit the `definition` field.** Also write a short `<service>.md`
noting the de-fabs you cleared + the named sources you used. Voice/structure exemplar: the committed **Orange combo
`src/data/combo-content/orange/roof-repair.ts`** (same answer-first + entity-grounded shape — localize, do NOT copy
Orange's geography or COA) and the committed South Orange **city page** `src/data/city-content/first-suburbs.ts`
(cityId 'south-orange') for verified South Orange geography/voice.
