# Essex Fells Combo Author Brief — Combo Batch 10 (entity-grounding inherited)

You are rewriting ONE Essex Fells service×city combo page (`src/data/combo-content/essex-fells/<service>.ts`)
**answer-first**, **de-fabbed**, and **entity-grounded**. The combo = the intersection of a service (already
rewritten answer-first at `src/data/service-content/<categoryFile>.ts`) and Essex Fells (facts below).
**Localize the finished service content to Essex Fells** — do not invent a new service story.

> Essex Fells = **Borough of Essex Fells**, Essex County, NJ — **Essex County's smallest municipality by area
> (~1.4 sq mi)**, an overwhelmingly single-family (~97% detached), ~96–98% owner-occupied enclave of **custom homes
> on large lots** along the winding roads of **Ernest W. Bowditch's ~1889–1902 planned community**, under a "unique"
> mature tree canopy. Its defining stock is **architect-collaborated, turn-of-the-20th-century to mid-century custom
> single-family homes** on hilly, rocky far-western Essex high ground — no apartment buildings, no commercial
> district (residents shop in neighboring boroughs). Ownership is **strongly homeowner-facing (~96–98% owner-occupied
> across roughly 806 homes, per the U.S. Census Bureau and the Borough of Essex Fells 2018 Master Plan)** — frame the
> audience as **owner-occupants of a mature, custom-home single-family enclave**, with the borough's few municipal /
> institutional structures (Borough Hall, school, post office) and detached estate accessory buildings as the only
> low-slope / commercial angle. The single biggest Essex-Fells-specific fact for COA framing: **Essex Fells has NO
> Historic Preservation Commission, NO historic-preservation ordinance, NO Certificate-of-Appropriateness process,
> and NO National- or State-Register listing of any kind — a homeowner reroof requires NO historic-board approval.**
> The assumed "Essex Fells Historic District" is REFUTED. This is DISTINCT from Caldwell's narrow Chapter-130 two-landmark
> COA, North Caldwell's advisory-only HPC, Fairfield's advisory/educational HPC, and Roseland's owner-consent-gated
> Chapter-30 ordinance with zero designated properties: Essex Fells's gate is simply **NONE**.

---

## 0. ENTITY-GROUNDING (read first — it changes directAnswer + credentials)
This batch bakes the site-wide entity-grounding pattern into the combos from the start (like Irvington, Bloomfield,
Belleville, Nutley, Maplewood, and South Orange did).

1. **`directAnswer` is entity-grounded** — author it in this exact shape (gold exemplars:
   `src/data/combo-content/orange/roof-repair.ts` and the committed Essex Fells CITY page
   `src/data/city-content/caldwells-roseland.ts`, cityId 'essex-fells'):
   > `**Newark Quality Roofing is a roofing contractor providing {service} across Essex Fells, New Jersey, and Essex County, {1–2 city-specific scope clauses}** … as a registered New Jersey Home Improvement Contractor.`
   - The **bolded span** (from "Newark Quality Roofing" through the scope clauses) must be **≤40 words** — end the
     bold before the credential tail if needed. The credential tail "as a registered New Jersey Home Improvement
     Contractor." is OUTSIDE the bold.
   - Establish **"Essex Fells, New Jersey"** (the state, spelled out) and **"roofing contractor"** as the descriptor.
   - This answers the page H1 "Who Provides {Service} in Essex Fells?". No modality.
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
(H1 "Who Provides {Service} in Essex Fells?", later H2 "What {Service} Is Available in Essex Fells?") — **do NOT write
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
   to Essex Fells's building stock** (figure-free; the entity definition is the separate spliced block — do not
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
   `[North Caldwell](/roof-repair-north-caldwell-nj)`. The committed Newark/Orange/Irvington/Bloomfield/Belleville/
   Nutley/Maplewood/South-Orange/West-Essex combos carry ZERO inline links — match that. No synthesized superlatives.
6. **No price in any prose lead.** Pricing lives ONLY in the `pricing` field (see §E) and the cost FAQ.

## C. Essex Fells load-bearing facts (carry verbatim where used; source = `.planning/content-system/cities-batchD/essex-fells.md` + the committed Essex Fells city page `src/data/city-content/caldwells-roseland.ts`, cityId 'essex-fells')
- **Permit office:** the **Borough of Essex Fells Building Department** (Building & Zoning), at **Borough Hall,
  255 Roseland Avenue**. Use that generic safe phrasing; do **NOT** name a Construction Official, a director, or a
  fee schedule. **The CURRENT files carry no clean permit office line — supply this one.**
- **Reroof permit rule (statewide UCC — identical to every prior city):** a **detached one- or two-family reroof —
  including a full tear-off and re-cover — is "ordinary maintenance" under N.J.A.C. 5:23-2.7 and requires NO
  construction permit, no inspection, and no notice.** A permit IS required on **commercial, multi-family, or
  attached** buildings (the **25% rule**: repairing >25% of total roof area in a 12-month period) and any structural
  roof work; recover-vs-tear-off limits follow the **Rehab Subcode, N.J.A.C. 5:23-6.4**. The borough's few municipal /
  institutional structures (Borough Hall, the school, the post office) are the natural place this permit path applies.
- **Historic = NONE — no HPC, no ordinance, no COA, no Register listing (KEY — the simplest gate in the batch).**
  Essex Fells has **NO binding local historic-preservation ordinance, NO Historic Preservation Commission, and NO
  Certificate-of-Appropriateness process** (confirmed via the borough's eCode360 code and Building Department page).
  A homeowner reroof requires **NO historic-board approval.** There is also **NO "Essex Fells Historic District"** on
  the National or NJ Register — the assumption that one exists is **REFUTED**. Frame exactly, and plainly:
  > *"Essex Fells maintains no local historic-preservation ordinance, no Historic Preservation Commission, and no
  > Certificate-of-Appropriateness process, so a homeowner reroof in Essex Fells requires no historic-board approval.
  > No 'Essex Fells Historic District' exists on the National Register or the NJ State Register, and the borough's
  > Bowditch planned-community heritage carries no private-owner restriction. Per the National Park Service, National
  > Register listing alone places no federal restriction on a private property owner."*
  Rules:
  - **State plainly in the historic FAQ that no COA applies in Essex Fells.** No conditional "if a property is in a
    district" hedge — there are no districts and no landmarks. The Bowditch heritage is COLOR only (no restriction).
  - **Do NOT confuse** the code's **Chapter 142 "HISTORIC STRUCTURE"** wording — that is the **FEMA/NFIP floodplain
    definition**, NOT a preservation designation. Never cite it as a preservation gate.
  - **Do NOT** cite the **2018 Master Plan's Historic Preservation Element** as enacted law — it is aspirational
    ("could be the basis for…"), not adopted.
  - **The Grover Cleveland Birthplace is in CALDWELL, not Essex Fells** — never place it here.
  - **Do NOT** import Caldwell's Chapter-130 two-landmark COA, Roseland's Chapter-30 ordinance, or any neighbor's
    historic framing.
- **Housing stock:** an overwhelmingly single-family (**~97% detached**), **~96–98% owner-occupied** enclave of
  **custom homes on large lots** along winding Bowditch-plan roads — **the roughly 806 homes were largely built from
  the turn of the 20th century to mid-century, per the U.S. Census Bureau and the Borough of Essex Fells 2018 Master
  Plan** (keep these figures named-sourced in the who/what residential framing; do NOT print a population integer or
  a hard income/value figure). Frame lot size **qualitatively** ("large lots / custom homes") — do **NOT** assert a
  strict "one-acre minimum." The older custom stock → **deteriorated sheathing discovered at tear-off**, aging
  valley/chimney/wall flashing, **natural slate / metal / copper period detailing**; the borough's few municipal /
  institutional structures and detached estate accessory buildings (pool house, carriage house, garage) → the only
  EPDM/TPO/mod-bit low-slope membrane work.
- **Neighborhoods / sections (VERIFIED ONLY — the ONLY ones any combo may name; "neighborhoods" are effectively
  named roads in a ~1.4-sq-mi borough):** **Roseland Avenue** (the principal through-road; Borough Hall at 255
  Roseland Avenue), **Fells Road**, **Forest Way**, **Oak Lane**, and **Devon Road**. **DROP** any street/section NOT
  above — the CURRENT files FABRICATE "**Hawthorne Avenue**" and similar; do **NOT** carry them. Do **NOT** publish a
  fabricated individual-landmark list.
- **Geography (HARD guardrails):**
  - Essex Fells sits on the **hilly, rocky high ground of far-western Essex County, west of the Watchung ridges** —
    Essex County's **smallest municipality by area (~1.4 sq mi)**. The defining roof stressor is the borough's
    "unique," roughly **50–150-year-old mature tree canopy** (the Bowditch design legacy, per the Borough of Essex
    Fells 2018 Master Plan): leaf / valley / gutter debris, branch impact in storms, shade-driven moss/algae on
    north slopes. Keep all geography **QUALITATIVE** (no elevation / gust / canopy-% number).
  - **NO reservation.** Essex Fells does NOT border or contain any large Essex County reservation (NOT Hilltop, South
    Mountain, Eagle Rock, or Mills). The wooded character is **private/borough land + street canopy only.**
  - **NO floodplain.** Essex Fells is **UPLAND** and carries **NO Passaic floodplain exposure** (the Passaic
    floodplain belongs to Fairfield + Roseland's western/riverine edge). NEVER attach any FEMA-flood-zone / Great
    Piece Meadows framing to Essex Fells.
  - **No commercial business district** — residents shop in neighboring boroughs; no apartment buildings.
  - **RESERVATION / FLOODPLAIN GUARDRAIL MATRIX (never violate):**
    - Hilltop Reservation (~284 ac, Second Watchung) = NORTH CALDWELL only (in this batch). Caldwell, Essex Fells,
      Fairfield, and Roseland border NO large Essex County reservation.
    - Passaic-River floodplain = FAIRFIELD (the defining floodplain city) + ROSELAND's western/riverine edge only.
      Caldwell, North Caldwell, and Essex Fells are UPLAND — NEVER attach any floodplain / FEMA-flood-zone framing.
    - Roseland contains county PARKS (most of Becker Park; part of West Essex Park), NEVER "reservations." The West
      Essex Trail is a linear rail-trail (Cedar Grove / Verona / Essex Fells / Roseland area), NOT a reservation, and
      does NOT run through Fairfield.
    - The ONLY hard elevation fact is Essex County's highest point (~691 ft) at the Hilltop in NORTH CALDWELL — never
      extrapolate a borough-wide wind/snow figure for Essex Fells from it. Every other elevation/snow/wind claim
      stays QUALITATIVE on the shared EWR baseline.
  - Essex Fells borders **Caldwell, North Caldwell, Roseland, Verona, West Caldwell, and West Orange** (NOT
    Livingston). Do **NOT** import Caldwell's "walkable Bloomfield Ave downtown / Caldwell University," North
    Caldwell's "Hilltop Reservation / ~691 ft high point," Fairfield's "Passaic floodplain / Route 46–I-80 corridor,"
    or Roseland's "Eisenhower Pkwy / Becker Farm office park" framing as Essex Fells's.
- **Climate (shared EWR baseline, HEDGED — identical to every prior city):** ~31.5 in/yr snow; nor'easters Oct–April;
  ~25–30 thunderstorms/yr; ground snow load **Pg ~25 psf** and **~110–115 mph ASCE 7-16** design wind kept **HEDGED**
  (not Essex-confirmed). **BAN every city-specific degree/gust/elevation number** (the ONLY exception is the
  attributed ~691 ft Essex County high point at the Hilltop, North Caldwell only — and that is NOT Essex Fells).
- **UNVERIFIED — never publish:** any population integer, an exact pre-1940/pre-1950 %, a median year built, the
  Construction Official's name, any individually designated landmark/district list (there are none), COA fees/fines
  (there is no COA), any street/section beyond the verified list above, any FEMA flood-zone figure, a strict
  "one-acre minimum," any reservation adjacency, any city-specific elevation/snow/wind number, the fabricated
  named-quarry slate-inventory claims ("Vermont Unfading Green / Pennsylvania Black / Buckingham Virginia / Welsh …
  in standard repair sizes") and the "40–60% storm-spike" / "2–4 hour response" claims in the current files.

## D. De-fab targets present in the CURRENT combo files (fix all)
The CURRENT Essex Fells combo files (e.g. `roof-repair.ts`, `historic-roof-restoration.ts`) are fabrication-heavy.
Strip EVERY de-fab found in the per-combo file at `src/data/combo-content/essex-fells/<service>.ts`. Concretely:
- `overview[0]` opens "Newark Quality Roofing delivers expert {service} in Essex Fells — with prices starting from
  $X–$Y and free estimates available today" → **delete the price + hype**, replace with an answer-first NQR-applied,
  entity-grounded lead (bold the named topics; figure-free).
- **Pricing range** is the OLD invented tier (e.g. `$350–$1,500` on roof-repair, `$15,000–$50,000` on historic) →
  replace with the sourced default for the service type (§E): repair & maintenance `$400–$1,000`;
  replacement/installation `$10,000–$25,000`.
- **`whyChooseUs`** templated trust lines — "NJ licensed, GAF Certified — 15+ years protecting Essex County…",
  "Premium materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response" →
  **de-fab** to clean factual reasons (§E), using the **registered HIC / fully insured** framing.
- **Fabricated Essex-Fells-specific prose in the current files** — fabricated streets (**Hawthorne Avenue** and any
  street not on the verified list); the fabricated **"one-acre-minimum lots"** assertion; named slate-quarry inventory
  ("**Vermont unfading green, Pennsylvania black, Buckingham Virginia, Welsh slate** … maintained in salvaged stock");
  the "**40–60% storm-spike**" and "**2–4 hour** response" claims; the fabricated **multi-structure estate** narrative
  ("main residence, carriage house, pool pavilion, guest cottage" as the standard scope), the **architect-collaboration
  / architectural-review-submittal** culture claim, the **salvaged-slate-inventory** logistics claims, the "Newark
  industrialists' country retreats" origin story, and the population paraphrase ("roughly two thousand residents") →
  **DELETE/CORRECT all of it.** Replace with VERIFIED Essex Fells texture (custom single-family homes on large lots;
  deteriorated sheathing at tear-off; natural slate / metal / copper period detailing; mature-canopy valley & gutter
  debris; the few municipal/institutional/estate-accessory low-slope structures; the NONE-historic gate).
- **The "no historic preservation commission" fact is TRUE and good** — but the current historic-restoration file
  wraps it in a fabricated "voluntary architect-driven authenticity standard" narrative. **Keep the FACT (no HPC, no
  ordinance, no COA, no Register listing), drop the fabricated estate/architect-review/voluntary-standard wrapper.**
- **`conversionHooks.urgencyNote`** "Don't wait… Early action saves thousands" → factual, no fabricated savings.
- **Inline markdown self-links** like `[roof repair](/roof-repair)`, `[Newark](/roofing-in-newark-nj)`,
  `[North Caldwell](/roof-repair-north-caldwell-nj)`, `[Glen Ridge](/historic-roof-restoration-glen-ridge-nj)`,
  `[Millburn](/roofing-in-millburn-nj)` → strip the link syntax (keep words as plain text; committed siblings carry
  zero links).
- **Unsourced hard numbers** (decade-specific lifespans, the "25–30%"/"30%" repair-vs-replace rule) → name-source from
  the packs (the 30% rule = Kellow/Modernize/Josten per materials-economics §8; lifespans = the InterNACHI
  life-expectancy chart) or **de-quantify**.
- **Preserve** the genuinely good Essex Fells texture (custom single-family homes on large lots; deteriorated
  sheathing at tear-off; natural slate / metal / copper period detailing; valley-and-transition flashing failures;
  mature-canopy leaf/branch debris in valleys and gutters; municipal / estate-accessory low-slope membrane) —
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
- "Local Essex County crew familiar with Essex Fells's custom single-family homes on the borough's large Bowditch-plan lots."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials, NO "licensed.")

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in
Essex Fells."). `urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural
water damage.").

## F. Differentiation directive (pre-empt cross-city overlap — the in-archetype caldwells-roseland siblings are the primary differentiate target)
**Essex Fells, Caldwell, North Caldwell, Fairfield, and Roseland are five caldwells-roseland siblings rewritten in
this batch — keep each city's gate, geography, and office DISTINCT, never import a neighbor's.** Lead with the facts
that are UNIQUE to Essex Fells so the page never mirrors a sibling or the committed Newark/East Orange/Orange/
Irvington/Bloomfield/Belleville/Nutley/Maplewood/South-Orange/West-Orange/Montclair/Glen-Ridge/Verona/Cedar-Grove
versions:
- **Essex-Fells-DISTINCT anchors to FOREGROUND:** the **NONE historic gate** (no HPC, no ordinance, no COA, no
  Register listing — the "Essex Fells Historic District" is REFUTED); the **mature ~50–150-year canopy** (Bowditch
  design legacy) as the defining roof stressor on **upland, no-reservation, no-floodplain** terrain; the **custom
  single-family homes on large Bowditch-plan lots** (~97% detached, ~96–98% owner-occupied, ~806 homes); the
  **verified roads** (Roseland Avenue, Fells Road, Forest Way, Oak Lane, Devon Road); Essex County's **smallest
  borough by area (~1.4 sq mi)** with **no commercial district**; the Building Department at **Borough Hall, 255
  Roseland Avenue**.
- **AVOID importing the OTHER four caldwells-roseland siblings' anchors** (do NOT write these into an Essex Fells
  combo):
  - **Caldwell:** NARROW LOCAL COA — TWO designated landmarks only (one being the Caldwell Public Library; the 2nd
    unnamed; NO district; Grover Cleveland Birthplace = state-owned, not a gate); office the **Borough of Caldwell
    Construction Department at 24 Smull Avenue (Borough Hall)** — NOT Bloomfield Avenue; NO reservation, upland (no
    floodplain); walkable **Bloomfield Ave downtown + Caldwell University.** (And NEVER reintroduce the "HD-1/HD-2/HD-3
    downtown historic-district overlay" — that is Caldwell, IDAHO.)
  - **North Caldwell:** NO COA — advisory/survey-only HPC; office the **Borough of North Caldwell Construction
    Department at 141 Gould Avenue (Borough Hall)**; **Hilltop Reservation + Essex County high point (~691 ft)**,
    upland, large-lot wooded.
  - **Fairfield:** NO COA — advisory/educational HPC; office the **Building Department, Township of Fairfield, at 230
    Fairfield Road**; NO reservation, **Passaic floodplain (low-lying ~174 ft) + Route 46 / I-80 commercial-industrial
    corridor.**
  - **Roseland:** COA ORDINANCE EXISTS but NO designations — no homeowner subject; office the **Borough of Roseland
    construction/permit office at 300 Eagle Rock Avenue (the DPW building)** — NOT Borough Hall; NO reservation
    (county parks Becker / West Essex), **western-edge Passaic floodplain + Eisenhower Pkwy / Becker Farm
    office-park corridor.**
- For the **process-heavy / low-localizability** services — **roof-thermal-imaging-inspections, storm-damage-roof-repair,
  commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection, insurance-roof-replacement,
  roof-overlay-installation** — LEAD with the Essex Fells situation (the NONE historic gate; mature-canopy branch
  impact and valley/gutter debris on upland custom homes; deteriorated-sheathing custom-home tear-offs; the few
  municipal/institutional/estate-accessory low-slope structures; owner-occupant documentation) before the
  standardized facts.
**Preserve every cited standard/cost fact** (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize/
InterNACHI figures) — differentiation is about which local facts lead, not about changing the sourced figures.

## G. Output format
Write the **complete file** to `<service>.snippet.ts` (in
`.planning/content-system/combo-batch10-caldwells-roseland/essex-fells/`) — keep the exact first line
`import type { ComboContent } from '../schema';` and the EXACT `export const <ExportName>: ComboContent = {` you are
given (so `essex-fells/index.ts` imports stay valid). Keep `serviceId` and `cityId: 'essex-fells'` unchanged. **Omit
the `definition` field.** Also write a short `<service>.md` noting the de-fabs you cleared + the named sources you
used. The assembled files land in `src/data/combo-content/essex-fells/`. Voice/structure exemplar: the committed
**Orange combo `src/data/combo-content/orange/roof-repair.ts`** (same answer-first + entity-grounded shape — localize,
do NOT copy Orange's geography or COA) and the committed Essex Fells **city page**
`src/data/city-content/caldwells-roseland.ts` (cityId 'essex-fells') for verified Essex Fells geography/voice.
