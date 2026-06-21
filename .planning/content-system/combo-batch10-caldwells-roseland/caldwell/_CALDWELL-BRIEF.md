# Caldwell Combo Author Brief — Combo Batch 10 (entity-grounding inherited)

You are rewriting ONE Caldwell service×city combo page (`src/data/combo-content/caldwell/<service>.ts`)
**answer-first**, **de-fabbed**, and **entity-grounded**. The combo = the intersection of a service (already
rewritten answer-first at `src/data/service-content/<categoryFile>.ts`) and Caldwell (facts below).
**Localize the finished service content to Caldwell** — do not invent a new service story.

> Caldwell = **Borough of Caldwell**, Essex County, NJ — a small (~1.17 sq mi), built-out, walkable downtown borough
> on the far-western Essex uplands. It is the **renter-heavier exception in this batch (~41% owner-occupied — a
> majority-renter borough)**, with **Victorian-era and Colonial-Revival cores**, interwar/postwar **Capes and ranches
> on compact lots**, and **low-rise multifamily** near the **Bloomfield Avenue downtown** and **Caldwell University**.
> Frame the audience as a **mixed owner/renter downtown borough** — owner-occupants of older built-out single-family
> stock plus a Bloomfield-Avenue storefront / mixed-use commercial angle and a college-adjacent low-rise multifamily
> pocket. The single biggest Caldwell-specific fact for COA framing: **Caldwell HAS a real local Historic Preservation
> Commission and ordinance — Chapter 130 "Historic Preservation" (§§130-1 to 130-13) — but has designated only TWO
> individual local landmarks (no district).** A reroof on one of those two designated landmarks routes through a
> township Certificate of Appropriateness before the permit; a typical Caldwell home is NOT in a COA-regulated district.
> This is a **NARROW LOCAL COA** — real but parcel-narrow: unlike North Caldwell (no COA, advisory/survey-only HPC),
> Essex Fells (none at all), Fairfield (advisory HPC, no COA), and Roseland (COA ordinance exists but zero designations,
> owner-consent gated). Assert the COA **only for the two designated landmarks**, never township-wide, never for a
> district. **NEVER reintroduce the "HD-1/HD-2/HD-3 downtown historic-district overlay" — that is Caldwell, IDAHO.**

---

## 0. ENTITY-GROUNDING (read first — it changes directAnswer + credentials)
This batch bakes the site-wide entity-grounding pattern into the combos from the start (like Irvington, Bloomfield,
Belleville, and Nutley did).

1. **`directAnswer` is entity-grounded** — author it in this exact shape (gold exemplars:
   `src/data/combo-content/orange/roof-repair.ts` and the committed Caldwell CITY page
   `src/data/city-content/caldwells-roseland.ts`, cityId 'caldwell'):
   > `**Newark Quality Roofing is a roofing contractor providing {service} across Caldwell, New Jersey, and Essex County, {1–2 city-specific scope clauses}** … as a registered New Jersey Home Improvement Contractor.`
   - The **bolded span** (from "Newark Quality Roofing" through the scope clauses) must be **≤40 words** — end the
     bold before the credential tail if needed. The credential tail "as a registered New Jersey Home Improvement
     Contractor." is OUTSIDE the bold.
   - Establish **"Caldwell, New Jersey"** (the state, spelled out) and **"roofing contractor"** as the descriptor.
   - This answers the page H1 "Who Provides {Service} in Caldwell?". No modality.
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
(H1 "Who Provides {Service} in Caldwell?", later H2 "What {Service} Is Available in Caldwell?") — **do NOT write
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
   to Caldwell's building stock** (figure-free; the entity definition is the separate spliced block — do not
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
   `[Caldwell](/roofing-in-caldwell-nj)`. The committed Newark/Orange/Irvington/Bloomfield/Belleville/Nutley/
   Maplewood/South-Orange/West-Essex combos carry ZERO inline links — match that. No synthesized superlatives.
6. **No price in any prose lead.** Pricing lives ONLY in the `pricing` field (see §E) and the cost FAQ.

## C. Caldwell load-bearing facts (carry verbatim where used; source = the Caldwell crib `.planning/content-system/cities-batchD/caldwell.md` and the committed Caldwell city page `src/data/city-content/caldwells-roseland.ts`, cityId 'caldwell')
- **Permit office:** the **Borough of Caldwell Construction Department**, at **24 Smull Avenue (Borough Hall)** —
  the State UCC enforcing agency. Use that generic safe phrasing; do **NOT** name a Construction Official, a
  director, or a fee schedule. **It is NOT on Bloomfield Avenue** (Bloomfield Avenue is the downtown commercial
  corridor, not the permit office — the CURRENT files wrongly say "the Caldwell Building Department on Bloomfield
  Avenue"; correct it to "the Borough of Caldwell Construction Department at 24 Smull Avenue").
- **Reroof permit rule (statewide UCC — identical to every prior city):** a **detached one- or two-family reroof —
  including a full tear-off and re-cover — is "ordinary maintenance" under N.J.A.C. 5:23-2.7 and requires NO
  construction permit, no inspection, and no notice.** A permit IS required on **commercial, multi-family, or
  attached** buildings (the **25% rule**: repairing >25% of total roof area in a 12-month period) and any structural
  roof work; recover-vs-tear-off limits follow the **Rehab Subcode, N.J.A.C. 5:23-6.4**. The Bloomfield Avenue
  downtown storefronts are the natural place this commercial path applies.
- **Historic = NARROW LOCAL COA — TWO designated landmarks only, NO district (KEY).** Caldwell **HAS** a real local
  **Historic Preservation Commission** and ordinance — **Chapter 130 "Historic Preservation" (§§130-1 to 130-13)**.
  Per **Preservation New Jersey**, Caldwell has **TWO individually, LOCALLY designated landmarks** — one being the
  **Caldwell Public Library** (a 1917 Classical Revival Carnegie library, locally designated since 2016; the **SECOND
  site is UNNAMED by any source — do NOT name it**). For a parcel that **IS** one of those two designated landmarks,
  exterior roofing routes through the **HPC's Certificate-of-Appropriateness review before a permit**. BUT Caldwell
  has **NOT designated any local historic DISTRICT** (the NJ Historic Trust calls them "potential" districts only),
  so a **typical home is NOT in a COA-regulated district.** Frame exactly:
  > *"Caldwell maintains a Historic Preservation Commission and an ordinance under Chapter 130, and exterior roofing on
  > one of the borough's two locally designated historic landmarks routes through a Certificate of Appropriateness
  > review before a permit. Caldwell has designated no local historic district, so a typical home is not in a
  > Certificate-of-Appropriateness-regulated district."*
  Rules:
  - **Assert the COA ONLY for the two designated landmarks** — never township-wide, never for a district. Indicative
    present ("routes through… before a permit"); NO `can`/`may`/modal hedge in the declarative.
  - **The Grover Cleveland Birthplace (207 Bloomfield Avenue) is STATE-owned** and is Caldwell's **only National and
    State Register property** — administered by the NJ Division of Parks & Forestry, **NOT a homeowner COA gate**. Per
    the National Park Service, **Register listing alone places no restriction on a private owner.** Use it as heritage
    color only.
  - **NEVER reintroduce the "HD-1/HD-2/HD-3 downtown historic-district overlay"** — that is **Caldwell, IDAHO**, not
    Caldwell, NJ. **Do NOT** call the Caldwell Public Library a National Register property; do **NOT** name the second
    landmark; do **NOT** import North Caldwell's advisory-only HPC, Essex Fells's "no ordinance," Fairfield's Van Ness
    House advisory HPC, or Roseland's owner-consent Chapter-30 ordinance as Caldwell's.
  - State the COA mechanism where the historic angle arises (historic-roof-restoration, slate/tile/cedar-shake,
    custom-roof-design-consultation). A COA, where it applies, is a **SEPARATE approval from the building permit**.
- **Housing stock & demographics:** Caldwell is the **renter-heavier exception in this batch — about 41%
  owner-occupied** (a **majority-renter borough**), anchored by a walkable **Bloomfield Avenue downtown** and
  **Caldwell University (~2,200 students)**. Frame as a **mixed owner/renter downtown borough** with **older built-out
  Victorian-era / Colonial-Revival stock** plus **interwar/postwar Capes & ranches** and **low-rise multifamily** —
  **NOT a large-lot enclave.** The older architect-/period-built stock → **deteriorated sheathing discovered at
  tear-off**, aging valley/chimney/wall flashing, **natural slate/metal/copper period detailing**; the Bloomfield
  Avenue storefronts → **EPDM/TPO/mod-bit low-slope membrane**. **Do NOT publish a population integer or a Census %**
  — the **~41% owner-occupancy** and the **downtown/university character** are the load-bearing qualitative facts; the
  **~2,200 Caldwell University students** is the only on-page demographic figure (neighborhood/renter context only).
- **Neighborhoods / sections (VERIFIED ONLY — the ONLY ones any combo may name):** **Bloomfield Avenue** (the
  downtown commercial spine / storefront / mixed-use corridor — flat & low-slope parapet roofs), **Central Avenue** (a
  named residential street through the older built-out blocks), the **Grover Cleveland Park vicinity** (the residential
  blocks on the **Brookside Avenue** side, an Essex County Olmsted park straddling the Essex Fells line), and the
  **Caldwell University area** (a college-adjacent residential/low-rise-multifamily pocket). **Franklin** and
  **Westville** are HISTORICAL settlement names — heritage color only, **not present-day neighborhoods**. **DROP** any
  street/section NOT above — do NOT carry "Personette Street," "Ridgewood Road," "Rutgers Street," "Crestwood Drive,"
  "Prospect Street," or any fabricated landmark list.
- **Geography (HARD guardrails):**
  - Caldwell is a **small, compact, built-out borough on the far-western Essex uplands** (~397 ft, QUALITATIVE — do
    NOT print the number). It **borders NO large Essex County reservation** (the **Hilltop Reservation is NORTH
    Caldwell, not Caldwell**) and carries **NO Passaic floodplain exposure** (it is upland — **never import Fairfield's
    flood framing**).
  - The **mature street-tree canopy** over its older built-out blocks is the **defining residential roof stressor** —
    leaf/branch debris in valleys & gutters, branch impact in storms, shade-driven moss/algae on north slopes. Keep
    QUALITATIVE (no canopy-% figure).
  - The **Bloomfield Avenue downtown** is the walkable storefront / mixed-use commercial corridor (flat/low-slope/
    parapet roofs). Keep all geography **QUALITATIVE** (no elevation/gust/canopy-% number).
  - **RESERVATION / FLOODPLAIN GUARDRAIL MATRIX (the cross-city contamination guard — never violate it):**
    - **Hilltop Reservation** (~284 ac, Second Watchung) = **NORTH CALDWELL only** (in this batch). **Caldwell, Essex
      Fells, Fairfield, and Roseland border NO large Essex County reservation.**
    - **Passaic-River floodplain** = **FAIRFIELD** (the DEFINING floodplain city) + **ROSELAND'S western/riverine edge**
      only. **Caldwell, North Caldwell, and Essex Fells are UPLAND — NEVER attach any floodplain / FEMA-flood-zone /
      Great Piece Meadows framing to those three.**
    - **Roseland** contains county **PARKS** (most of Becker Park; part of West Essex Park), **NEVER "reservations."**
      The **West Essex Trail** is a linear rail-trail (Cedar Grove / Verona / Essex Fells / Roseland area), **NOT a
      reservation**, and does NOT run through Caldwell or Fairfield.
    - The ONLY hard elevation fact is **Essex County's highest point (~691 ft) at the Hilltop in North Caldwell**
      (attribute it; do NOT extrapolate a borough-wide wind/snow figure). Every other elevation/snow/wind claim stays
      QUALITATIVE on the shared EWR baseline.
  - Caldwell borders **North Caldwell, West Caldwell, and Essex Fells** (per the city page). Do **NOT** import
    Belleville's "Second-River / Route 21," Nutley's "Third-River / ON3," Fairfield's "Passaic floodplain / Route 46-
    I-80 corridor," North Caldwell's "Hilltop Reservation," or Roseland's "Eisenhower Parkway / Becker Farm office-park"
    framing as Caldwell's.
- **Climate (shared EWR baseline, HEDGED — identical to every prior city):** ~31.5 in/yr snow; nor'easters Oct–April;
  ~25–30 thunderstorms/yr; ground snow load **Pg ~25 psf** and **~110–115 mph ASCE 7-16** design wind kept **HEDGED**
  (not Essex-confirmed). **BAN every city-specific degree/gust/elevation number** (the ONLY exception is the attributed
  ~691 ft Essex County high point at the Hilltop, North Caldwell only). No distinct Caldwell microclimate number.
- **UNVERIFIED — never publish:** any population integer, an exact pre-1940/pre-1950 %, a median year built, a
  Construction Official's name ("Carl Thunell"), the name of the second designated landmark, any "HD-1/HD-2/HD-3
  downtown historic-district overlay" (Caldwell, Idaho), any designated Caldwell historic DISTRICT, any treatment of
  the Grover Cleveland Birthplace as a homeowner COA gate, COA fees/fines, any street/section beyond the verified list,
  any FEMA flood-zone figure, any reservation adjacency for Caldwell, any city-specific elevation/snow/wind number,
  any high-owner-occupancy "enclave"/"large-lot" framing (Caldwell is majority-renter), the fabricated "40–60%
  storm-spike," "2–4 hour response," and named-quarry slate-inventory claims in the current files.

## D. De-fab targets present in the CURRENT combo files (fix all)
- `overview[0]` opens "Newark Quality Roofing delivers expert {service} in Caldwell — with prices starting from $X–$Y
  and free estimates available today" → **delete the price + hype**, replace with an answer-first NQR-applied,
  entity-grounded lead (bold the named topics; figure-free).
- **Pricing range** is the OLD invented tiers (`$350–$1,500` on roof-repair; `$15,000–$50,000` on
  historic-roof-restoration; and other invented tiers) → replace with the sourced default for the service type (§E):
  repair & maintenance `$400–$1,000`; replacement/installation `$10,000–$25,000`.
- **`whyChooseUs`** templated trust lines — "NJ licensed, GAF Certified — 15+ years protecting Essex County…",
  "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "Local team that knows
  Caldwell — same-day estimates and 24/7 emergency response" → **de-fab** to clean factual reasons (§E), using the
  **registered HIC / fully insured** framing.
- **The FALSE "Caldwell lacks a formal historic preservation commission" claim** (current historic-roof-restoration
  file says "While Caldwell lacks a formal historic preservation commission…" and the FAQ says "Caldwell does not have
  a formal historic preservation commission or overlay zone") → **CORRECT it.** Caldwell **HAS** a real HPC and a
  Chapter-130 ordinance with **two locally designated landmarks**; reframe to the §C historic framing (COA applies to
  the two designated landmarks; Caldwell has designated NO local district, so a typical home is not COA-regulated).
- **Fabricated Caldwell-specific prose in the current files** — the "**colonial and cape cod designs from the 1950s
  through the 1970s**" / 1960s-development / split-level era story (the city page frames the core as Victorian-era /
  Colonial-Revival plus interwar/postwar Capes & ranches — do NOT invent a decade-locked tract narrative); the
  **small-town "diner / Little League field / school sports parents / one neighbor at a time"** color; the named
  shingle SKUs (**"Timberline HD in Weathered Wood and Charcoal, Landmark in Driftwood and Moire Black"**); named
  slate-quarry sourcing ("**quarries producing compatible color**"-type inventory claims); "the **Caldwell Building
  Department on Bloomfield Avenue**" (correct office = **Borough of Caldwell Construction Department at 24 Smull
  Avenue**); the "**six-foot clearance**"/"**fifty-plus years of service**"/"**two to four times more**"
  unsourced numbers; any **reservation adjacency** (Caldwell borders none); any **Passaic floodplain** framing
  (upland); any **high-owner-occupancy "enclave"/"large-lot"** framing (Caldwell is majority-renter); any
  city-specific elevation/snow/wind number → **DELETE/CORRECT all of it.** Replace with VERIFIED Caldwell texture
  (Victorian-era / Colonial-Revival cores + interwar/postwar Capes & ranches; deteriorated sheathing at tear-off;
  natural slate/metal/copper period detailing; Bloomfield Avenue storefront low-slope membrane; mature street-tree
  canopy debris; the Chapter-130 two-landmark COA framework where it applies).
- **`conversionHooks.urgencyNote`** "Don't wait for minor damage to become a major expense. Early action saves
  thousands." → factual, no fabricated savings (e.g. "Addressing roof damage early limits interior and structural
  water damage.").
- **Inline markdown self-links** like `[historic roof restoration](/historic-roof-restoration)`,
  `[Caldwell](/roofing-in-caldwell-nj)`, `[Glen Ridge](/historic-roof-restoration-glen-ridge-nj)`,
  `[Montclair](/historic-roof-restoration-montclair-nj)`, `[Bloomfield](/historic-roof-restoration-bloomfield-nj)`
  → strip the link syntax (keep words as plain text; the committed siblings carry zero links). Do NOT carry cross-city
  mentions of Glen Ridge / Montclair / Bloomfield into a Caldwell combo.
- **Unsourced hard numbers** (decade-specific lifespans, the "25–30%"/"30%" repair-vs-replace rule) → name-source from
  the packs (lifespans = the InterNACHI life-expectancy chart; flashing-origin leaks ~90–95% / field 5–10% = NRCA; the
  30% rule = Kellow/Modernize/Josten per materials-economics §8) or **de-quantify**.
- **Preserve** the genuinely good Caldwell texture (mature street-tree canopy debris in valleys & gutters; dormer/
  valley flashing failure; ice-dam backup at low-pitch eaves; slate/copper period detailing; Bloomfield Avenue
  low-slope membrane; the careful-maintenance owner-occupant documentation angle) — restructure it answer-first, do
  not discard it.

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
- "Local Essex County crew familiar with Caldwell's older Victorian-era and Colonial-Revival homes, Capes, ranches, and Bloomfield Avenue downtown storefronts."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials, NO "licensed.")

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in
Caldwell."). `urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural
water damage.").

## F. Differentiation directive (pre-empt cross-city overlap — the in-archetype caldwells-roseland siblings are the primary differentiate target)
**The four other caldwells-roseland cities — North Caldwell, Essex Fells, Fairfield, Roseland — sit on a deliberately
DISTINCT COA spectrum and distinct geography from Caldwell.** Lead with the facts that are UNIQUE to Caldwell so the
page never mirrors a sibling or the committed Newark/East Orange/Orange/Irvington/Bloomfield/Belleville/Nutley/
Maplewood/South-Orange/West-Orange/Montclair/Glen-Ridge/Verona/Cedar-Grove versions:
- **Caldwell-DISTINCT anchors to FOREGROUND:** the **NARROW LOCAL COA** (real Chapter-130 HPC + ordinance; TWO
  individually designated landmarks only — one being the Caldwell Public Library; the second unnamed; **NO designated
  district**; Grover Cleveland Birthplace = state-owned, not a gate); the **majority-renter, mixed owner/renter
  downtown-borough** character (~41% owner-occupied); the **Victorian-era / Colonial-Revival cores + interwar/postwar
  Capes & ranches + low-rise multifamily**; the **mature street-tree canopy** (the defining residential stressor, no
  reservation, no floodplain); the **Bloomfield Avenue downtown** storefronts and the **Caldwell University area**; the
  Construction Department at **24 Smull Avenue**.
- **AVOID importing the OTHER four siblings' distinct anchors** (do NOT write any of these into a Caldwell combo):
  - **North Caldwell:** NO COA — advisory/survey-only HPC (Chapter 107 Art. XIII §§107-85 to 107-87; O-8-2026
    introduced-not-adopted); office the **Borough of North Caldwell Construction Department at 141 Gould Avenue**;
    **Hilltop Reservation + Essex County high point (~691 ft)**; upland, large-lot wooded custom homes.
  - **Essex Fells:** NONE — no HPC, no ordinance, no COA, no National/State Register listing (the "Essex Fells
    Historic District" is REFUTED); office the **Borough of Essex Fells Building Department (Building & Zoning) at
    Borough Hall, 255 Roseland Avenue**; NO reservation, upland, NO commercial district (the Bowditch plan), unique
    tree canopy.
  - **Fairfield:** NO COA — advisory/educational HPC focused on the township-owned **Van Ness House** (no precise HPC
    §number); office the **Building Department, Township of Fairfield, at 230 Fairfield Road**; NO reservation, the
    **Passaic floodplain** (low-lying ~174 ft) + **Route 46 / I-80 commercial-industrial corridor**.
  - **Roseland:** COA ORDINANCE EXISTS but NO designations (Chapter 30 Art. IX §§30-901 to 30-910; COA at §30-909;
    §30-901.1 owner-consent → no homeowner subject); office the **Borough of Roseland construction/permit office at
    300 Eagle Rock Avenue (the DPW building) — NOT Borough Hall**; NO reservation (county parks Becker / West Essex),
    **western-edge Passaic floodplain** + **Eisenhower Parkway / Becker Farm office-park corridor**.
- For the **process-heavy / low-localizability** services — **roof-thermal-imaging-inspections, storm-damage-roof-
  repair, commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection, insurance-roof-
  replacement, roof-overlay-installation** — LEAD with the Caldwell situation (Bloomfield Avenue storefront low-slope
  membrane; mature-canopy branch impact and valley/gutter debris; deteriorated plank/sheathing tear-offs on the older
  Victorian-era stock; owner-occupant + renter-borough documentation) before the standardized facts.
**Preserve every cited standard/cost fact** (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize/
InterNACHI figures) — differentiation is about which local facts lead, not about changing the sourced figures.

## G. Output format
Write the **complete file** to `<service>.snippet.ts` (in
`.planning/content-system/combo-batch10-caldwells-roseland/caldwell/`) — keep the exact first line
`import type { ComboContent } from '../schema';` and the EXACT `export const <ExportName>: ComboContent = {` you are
given (so `caldwell/index.ts` imports stay valid). Keep `serviceId` and `cityId: 'caldwell'` unchanged. **Omit the
`definition` field.** The assembled files live at `src/data/combo-content/caldwell/<service>.ts`. Also write a short
`<service>.md` noting the de-fabs you cleared + the named sources you used. Voice/structure exemplar: the committed
**Orange combo `src/data/combo-content/orange/roof-repair.ts`** (same answer-first + entity-grounded shape — localize,
do NOT copy Orange's geography or COA) and the committed Caldwell **city page**
`src/data/city-content/caldwells-roseland.ts` (cityId 'caldwell') for verified Caldwell geography/voice.
