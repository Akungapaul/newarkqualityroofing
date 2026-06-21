# North Caldwell Combo Author Brief — Combo Batch 10 (entity-grounding inherited)

You are rewriting ONE North Caldwell service×city combo page (`src/data/combo-content/north-caldwell/<service>.ts`)
**answer-first**, **de-fabbed**, and **entity-grounded**. The combo = the intersection of a service (already
rewritten answer-first at `src/data/service-content/<categoryFile>.ts`) and North Caldwell (facts below).
**Localize the finished service content to North Caldwell** — do not invent a new service story.

> North Caldwell = **Borough of North Caldwell**, Essex County, NJ — an affluent, large-lot, heavily wooded, almost
> entirely residential borough ("The Green Jewel of Essex County," per the North Caldwell Historical Society) in the
> far-western uplands of Essex County, set on the **Second Watchung Mountain**. It is the **only city in this batch that
> abuts a county reservation — the Hilltop Reservation** — and it holds **Essex County's highest point (~691 ft at the
> Hilltop)**. Its defining stock is **custom colonials, contemporaries, and Tudors** on large (often 1+ acre) wooded
> lots, with negligible commercial / multi-family stock; ownership is **~96% owner-occupied (among the highest in Essex
> County, per the U.S. Census Bureau)** — frame the audience as **owner-occupants of a wooded, large-lot, single-family
> borough**, served by the borough's mature oak/maple canopy as the defining roof stressor. The single biggest North
> Caldwell-specific fact for COA framing: **North Caldwell has a local Historic Preservation Commission under Chapter
> 107, Article XIII, but under §107-87 it is ADVISORY / SURVEY-ONLY — it surveys, recommends, and advises, issues NO
> Certificate of Appropriateness, and has designated NO local district or landmark.** Therefore **NO COA applies to a
> homeowner's reroof anywhere in North Caldwell.** This is unlike Caldwell's narrow Chapter-130 two-landmark gate,
> Roseland's owner-consent COA ordinance, or Maplewood's conditional Article-VIII framework: North Caldwell's mechanism
> is purely advisory — state plainly in the historic FAQ that **no COA applies in North Caldwell.**

---

## 0. ENTITY-GROUNDING (read first — it changes directAnswer + credentials)
This batch bakes the site-wide entity-grounding pattern into the combos from the start (like Irvington, Bloomfield,
Belleville, Nutley, and the first-suburbs / west-essex batches did).

1. **`directAnswer` is entity-grounded** — author it in this exact shape (gold exemplars:
   `src/data/combo-content/orange/roof-repair.ts` and the committed North Caldwell CITY page
   `src/data/city-content/caldwells-roseland.ts`, cityId 'north-caldwell'):
   > `**Newark Quality Roofing is a roofing contractor providing {service} across North Caldwell, New Jersey, and Essex County, {1–2 city-specific scope clauses}** … as a registered New Jersey Home Improvement Contractor.`
   - The **bolded span** (from "Newark Quality Roofing" through the scope clauses) must be **≤40 words** — end the
     bold before the credential tail if needed. The credential tail "as a registered New Jersey Home Improvement
     Contractor." is OUTSIDE the bold.
   - Establish **"North Caldwell, New Jersey"** (the state, spelled out) and **"roofing contractor"** as the descriptor.
   - This answers the page H1 "Who Provides {Service} in North Caldwell?". No modality.
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
(H1 "Who Provides {Service} in North Caldwell?", later H2 "What {Service} Is Available in North Caldwell?") — **do NOT
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
   to North Caldwell's building stock** (figure-free; the entity definition is the separate spliced block — do not
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
   `[Caldwell](/roof-repair-caldwell-nj)`. The committed Newark/Orange/Irvington/Bloomfield/Belleville/Nutley/
   Maplewood/South-Orange/west-essex combos carry ZERO inline links — match that. No synthesized superlatives.
6. **No price in any prose lead.** Pricing lives ONLY in the `pricing` field (see §E) and the cost FAQ.

## C. North Caldwell load-bearing facts (carry verbatim where used; source = `.planning/content-system/cities-batchD/north-caldwell.md` + the committed North Caldwell city page `src/data/city-content/caldwells-roseland.ts`, cityId 'north-caldwell')
- **Permit office:** the **Borough of North Caldwell Construction Department** at **141 Gould Avenue (Borough Hall)**.
  Use that generic safe phrasing; do **NOT** name a Construction Official (the CURRENT files / fact bank do not provide
  one — and "Paul Milani" is a fabrication to strike), a director, or a fee schedule.
- **Reroof permit rule (statewide UCC — identical to every prior city):** a **detached one- or two-family reroof —
  including a full tear-off and re-cover — is "ordinary maintenance" under N.J.A.C. 5:23-2.7 and requires NO
  construction permit, no inspection, and no notice.** A permit IS required on **commercial, multi-family, or
  attached** buildings (the **25% rule**: repairing >25% of total roof area in a 12-month period) and any structural
  roof work; recover-vs-tear-off limits follow the **Rehab Subcode, N.J.A.C. 5:23-6.4**. Because North Caldwell is
  almost entirely residential, the commercial path applies mainly to estate accessory structures (pool houses, detached
  garages, carriage houses) and the borough's municipal / institutional buildings.
- **Historic = NO COA — ADVISORY / SURVEY-ONLY HPC (KEY — distinct from every sibling).** North Caldwell **HAS** a
  local **Historic Preservation Commission** established under **Chapter 107 (Zoning and Land Use), Article XIII
  (§§107-85 to 107-87)**. BUT under **§107-87** the Commission is **ADVISORY / SURVEY-ONLY** — it prepares a survey,
  makes recommendations, and advises boards; it **issues NO Certificate of Appropriateness** and has designated **NO
  local district or landmark.** Therefore **NO COA applies to a homeowner's reroof anywhere in North Caldwell.** No
  North Caldwell property is on the National or NJ State Register; per the **National Park Service**, Register listing
  alone places no restriction on a private owner. Frame plainly and unconditionally (committed city-page wording is the
  exemplar):
  > *"No Certificate of Appropriateness applies to a homeowner's reroof anywhere in North Caldwell, because the
  > borough's Historic Preservation Commission under Chapter 107, Article XIII is advisory and survey-only, with no
  > locally designated district or landmark. The commission surveys, recommends, and advises but issues no Certificate
  > of Appropriateness, and no North Caldwell property sits on the National or NJ State Register. Per the National Park
  > Service, Register listing alone places no federal restriction on a private owner, so a North Caldwell reroof follows
  > the standard N.J.A.C. 5:23-2.7 ordinary-maintenance path."*
  Rules:
  - **Do NOT cite proposed Ordinance O-8-2026 as in force.** A revised HPC ordinance that WOULD add COA review
    (O-8-2026) was only **introduced, not adopted**, and designates nothing — omit it entirely.
  - **Do NOT confuse North Caldwell with adjacent Caldwell** (Caldwell's Chapter 130 + TWO individually designated
    landmarks). **Do NOT import the "North Caldwell Historic District" on the National Register — that listing is in
    Caldwell, IDAHO, not New Jersey.** Never reintroduce the "HD-1/HD-2/HD-3 downtown overlay" (also Idaho).
  - **Do NOT** import Roseland's Chapter-30 Article-IX owner-consent COA, Maplewood's Article-VIII conditional
    framework, or Bloomfield's / Nutley's / Orange's district gates.
  - State the advisory-no-COA fact wherever the historic angle arises (historic-roof-restoration, slate/tile/cedar-shake,
    custom-roof-design-consultation). For commercial/municipal work, a building permit (the 25% rule) still applies — it
    is a UCC permit, not a COA.
- **Housing stock:** **custom colonials, contemporaries, and Tudors** on large (often 1+ acre) wooded lots — an affluent,
  almost entirely residential borough with negligible commercial / multi-family stock. Ownership is **~96% owner-occupied
  (among the highest in Essex County, per the U.S. Census Bureau)** — keep that named-sourced in the who/what residential
  framing. The committed city page also cites **2,364 housing units, per the U.S. Census Bureau** (you MAY use units +
  owner-occupancy %); do **NOT** print a population integer or a hard income figure (cite affluence as roughly
  $200,000+ income / high-value homes only if a service genuinely needs it). The older custom stock → **deteriorated
  sheathing discovered at tear-off**, aging valley/chimney/wall flashing, natural-slate and copper period detailing on
  the Tudors and large estate homes; the estate accessory + municipal/institutional structures → EPDM/TPO/mod-bit
  low-slope membrane.
- **Neighborhoods / sections (VERIFIED ONLY — drop anything not on this list):** **Mountain Avenue** (principal
  north-south borough spine of large wooded lots, running to the Cedar Grove line), **Gould Avenue** (Borough Hall at
  141 Gould Ave + Gould School + the municipal complex), **Grandview Avenue** (between West Greenbrook Road and Fairfield
  Road; lends its name to Grandview School), **Central Avenue** (established large-lot residential blocks), **the Hilltop
  area / Hilltop Drive / Hilltop Park** (the borough's highest, most elevated NW section near the Hilltop Reservation —
  Essex County's high point ~691 ft), and the **West/East Greenbrook Road & Fairfield Road edge** (the Fairfield
  Township line at the borough's north/northwest edge). A short **Bloomfield Avenue** segment only touches the borough.
  **DROP** any street/section NOT above — the CURRENT files FABRICATE "**Green Brook Road**" (the verified name is
  *West/East Greenbrook Road*, an edge, not an estate street) and similar invented estate-street names; do **NOT** carry
  them. Confirm any large-lot subdivision street name against this list before naming. Do **NOT** publish a fabricated
  individual-landmark list, an "architectural review board," or any "HOA covenant" gate (the current files invent these).
- **Geography (HARD guardrails):**
  - North Caldwell sits in **northwestern Essex County on the Second Watchung Mountain**; it is the **ONLY city in this
    batch that abuts a county reservation — the Hilltop Reservation (~284 acres, shared with Cedar Grove and Verona,
    per Essex County Parks)** — and it holds **Essex County's highest point (~691 ft at the Hilltop, per the North
    Caldwell description / Wikipedia, with a Verona-edge ambiguity — do NOT extrapolate a borough-wide wind/snow
    figure).** Keep the reservation/high-point references QUALITATIVE beyond the attributed ~691 ft and ~284 acres.
  - North Caldwell is **UPLAND** and does **NOT** sit in or border the **Passaic floodplain** (that belongs to
    Fairfield — never import it). NO floodplain / FEMA-flood-zone / Great Piece Meadows framing on North Caldwell.
  - A **heavily wooded, large-lot residential borough** whose **mature oak / maple canopy is the defining roof
    stressor** — leaf / valley / gutter debris, branch impact in nor'easters and summer storms, shade-driven moss/algae
    on north slopes. Almost no commercial corridor. Keep canopy framing QUALITATIVE (no canopy-% figure).
  - North Caldwell borders **Caldwell, West Caldwell, Cedar Grove, Verona, Fairfield, and (via a short segment)
    Roseland / the Caldwell line**. Do **NOT** import Caldwell's "walkable Bloomfield Ave downtown / Caldwell
    University," Essex Fells' "Bowditch-plan no-commercial-district," Fairfield's "Passaic floodplain / Route 46–I-80
    corridor," Roseland's "Eisenhower Pkwy / Becker Farm office park," or any committed-city framing (Belleville's
    Second-River, Nutley's Third-River/ON3, Maplewood's South-Mountain-Reservation edge, West Orange's Eagle Rock)
    as North Caldwell's.

- **RESERVATION / FLOODPLAIN GUARDRAIL MATRIX (the cross-city contamination guard — never violate it):**
  - **Hilltop Reservation** (~284 ac, Second Watchung) = **NORTH CALDWELL only** in this batch (shared with Cedar Grove
    + Verona, neither in this batch). Caldwell, Essex Fells, Fairfield, and Roseland border NO large Essex County
    reservation.
  - **Passaic-River floodplain** = **FAIRFIELD** (the DEFINING floodplain city) + **ROSELAND'S WESTERN/RIVERINE EDGE**
    only. Caldwell, **North Caldwell**, and Essex Fells are **UPLAND — NEVER** attach any floodplain / FEMA-flood-zone /
    Great Piece Meadows framing to those three.
  - **Roseland** contains county **PARKS** (most of Becker Park; part of West Essex Park), NEVER "reservations." The
    **West Essex Trail** is a linear rail-trail (Cedar Grove / Verona / Essex Fells / Roseland area), NOT a reservation,
    and does NOT run through Fairfield.
  - The **ONLY hard elevation fact** is Essex County's highest point (~691 ft) at the Hilltop in **North Caldwell**
    (attribute it; do **NOT** extrapolate a borough-wide wind/snow figure). Every other elevation/snow/wind claim stays
    QUALITATIVE on the shared EWR baseline.

- **Climate (shared EWR baseline, HEDGED — identical to every prior city):** ~31.5 in/yr snow; nor'easters Oct–April;
  ~25–30 thunderstorms/yr; ground snow load **Pg ~25 psf** and **~110–115 mph ASCE 7-16** design wind kept **HEDGED**
  (not Essex-confirmed). **BAN every city-specific degree/gust/elevation number** — the ONLY exception is the attributed
  **~691 ft Essex County high point at the Hilltop** (North Caldwell only). No distinct North Caldwell microclimate
  number beyond that.
- **UNVERIFIED — never publish:** any population integer, an exact pre-1940/pre-1950 %, a median year built, a
  Construction Official's name (incl. "Paul Milani"), any individually designated landmark list, COA fees/fines, any
  street/section beyond the verified list above (esp. "Green Brook Road"), any FEMA flood-zone figure, a borough-wide
  wind/snow number, proposed Ordinance O-8-2026 as in force, any named-quarry slate-inventory claim, any "drone-assisted
  imaging" or "2–4 hour response" claim, the fabricated "architectural review board / HOA covenant" gate.

## D. De-fab targets present in the CURRENT combo files (fix all)
- `overview[0]` opens "Newark Quality Roofing delivers expert {service} in North Caldwell — with prices starting from
  $X–$Y and free estimates available today" → **delete the price + hype**, replace with an answer-first NQR-applied,
  entity-grounded lead (bold the named topics; figure-free).
- **Pricing range** is the OLD invented tier (`$350–$1,500` on roof-repair, `$15,000–$50,000` on historic-roof-
  restoration, and other invented tiers) → replace with the sourced default for the service type (§E): repair &
  maintenance `$400–$1,000`; replacement/installation `$10,000–$25,000`.
- **`whyChooseUs`** templated trust lines — "NJ licensed, GAF Certified — 15+ years protecting Essex County…",
  "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "same-day estimates and
  24/7 emergency response" → **de-fab** to clean factual reasons (§E), using the **registered HIC / fully insured**
  framing.
- **Fabricated North Caldwell-specific prose in the current files** (the current roof-repair / historic-roof-
  restoration files are dense with these — strip every one):
  - **The COA / review fabrication:** "Architectural review and HOA requirements add a compliance dimension," "Several
    North Caldwell neighborhoods maintain architectural standards," "architectural review committees," "covenants or
    HOA guidelines" → **DELETE.** Replace with the truth: **no COA applies in North Caldwell; the HPC under Chapter 107,
    Article XIII is advisory / survey-only with no designations** (state the no-COA fact where the historic angle arises).
  - **Fabricated streets** — "**Green Brook Road**" → use the verified **West/East Greenbrook Road & Fairfield Road
    edge**; drop any other invented estate-street name not on the §C list.
  - **The "24-hour emergency response," "crew chief on-site within two to four hours,"** "we pre-position tarps," and
    **"drone-assisted imaging on roof areas exceeding 5,000 square feet"** → **DELETE** (no response-time / drone claims).
  - **Named-quarry slate-inventory claims** — "Vermont slate … unfading green, gray-green, or purple-variegated,"
    "Pennsylvania slate in Peach Bottom or Chapman profiles," "we maintain a limited salvage inventory," "relationships
    with slate quarries, copper sheet suppliers, and specialty shingle distributors" → **DELETE** the fabricated
    inventory/supplier-network claims; keep only generic in-kind matching with the **NPS Preservation Brief 29** /
    InterNACHI-sourced material facts.
  - **Invented self-stat / scale claims** — "7,000-square-foot colonial," "six dormer clusters," "three intersecting
    ridgelines," "homes ranging from the 1910s through the 1940s," "another century" → **DE-QUANTIFY** to verified
    custom-colonial/contemporary/Tudor texture.
  - **Unsourced repair-vs-replace thresholds** — "more than forty percent of tiles delaminating" → re-pin to the
    sourced **NPS Preservation Brief 29 ≥20%-of-slates threshold** (broken/cracked/missing/sliding), or de-quantify.
  - "Construction Department" generic is acceptable as **"the Borough of North Caldwell Construction Department"**; any
    named Construction Official → **DELETE.**
- **`conversionHooks.urgencyNote`** "Don't wait for minor damage to become a major expense. Early action saves
  thousands." → factual, no fabricated savings.
- **Inline markdown self-links** like `[roof repair](/roof-repair)`, `[Caldwell](/roof-repair-caldwell-nj)`,
  `[Essex Fells](/roof-repair-essex-fells-nj)`, `[North Caldwell](/roofing-in-north-caldwell-nj)`,
  `[Glen Ridge](/historic-roof-restoration-glen-ridge-nj)`, `[historic roof restoration](/historic-roof-restoration)`
  → strip the link syntax (keep words as plain text; the committed siblings carry zero links).
- **Unsourced hard numbers** (decade-specific lifespans, the "25–30%"/"30%" repair-vs-replace rule) → name-source from
  the packs (the 30% rule = Kellow/Modernize/Josten per materials-economics §8; lifespans = the InterNACHI
  life-expectancy chart; copper >100 yr = the Copper Development Association) or **de-quantify**.
- **Preserve** the genuinely good North Caldwell texture (custom colonials / contemporaries / Tudors on large wooded
  lots; deteriorated sheathing discovered at tear-off; natural-slate and copper period detailing on Tudors and estate
  homes; estate accessory + municipal/institutional low-slope membrane; mature-canopy valley-and-gutter debris near the
  Hilltop Reservation edge; flashing failure at chimneys/walls/valleys/dormers) — restructure it answer-first, do not
  discard it. To catalog the ACTUAL current fabs in your service, **read your own per-combo file at
  `src/data/combo-content/north-caldwell/<service>.ts`** and strip every de-fab found there.

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
- The **cost FAQ** answers with the same range + free-written-estimate framing; never a fabricated guarantee. (A natural
  slate/copper premium on a North Caldwell Tudor or estate home may be noted qualitatively, with slate installed at
  roughly $10–$30/sq ft per NJ roofing guides — only where the service genuinely warrants it, and named-sourced.)

**`whyChooseUs`** (raw, no `**`) — replace the templated trust line with 3–4 of:
- "A registered New Jersey Home Improvement Contractor, fully insured."
- "Local Essex County crew familiar with North Caldwell's custom colonials, contemporaries, and Tudors on large wooded lots."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials, NO "licensed.")

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in
North Caldwell."). `urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural
water damage.").

## F. Differentiation directive (pre-empt cross-city overlap — ESPECIALLY with the four caldwells-roseland siblings in THIS batch)
**The in-archetype caldwells-roseland siblings (Caldwell, Essex Fells, Fairfield, Roseland) are the primary
differentiate target.** Lead with the facts that are UNIQUE to North Caldwell so the page never mirrors a sibling or the
committed Newark/East Orange/Orange/Irvington/Bloomfield/Belleville/Nutley/Maplewood/South Orange/West Orange/Montclair/
Glen Ridge/Verona/Cedar Grove versions:
- **North Caldwell-DISTINCT anchors to FOREGROUND:** the **NO-COA / advisory-survey-only HPC** (Chapter 107, Art. XIII,
  §§107-85 to 107-87; no designations; O-8-2026 introduced-not-adopted); the **Hilltop Reservation (~284 ac) — the only
  reservation in this batch — and Essex County's highest point (~691 ft) at the Hilltop**; the **far-western upland
  Second-Watchung exposure**; the **custom colonials / contemporaries / Tudors on large 1+-acre wooded lots (~96%
  owner-occupied)**; the **mature oak/maple canopy** as the defining stressor; the verified neighborhoods (Mountain Ave,
  Gould Ave / Borough Hall, Grandview Ave, Central Ave, the Hilltop, the West/East Greenbrook Rd & Fairfield Rd edge);
  the Construction Department at **141 Gould Avenue (Borough Hall)**.
- **AVOID importing the OTHER four caldwells-roseland siblings' anchors** (do NOT write these into a North Caldwell combo):
  - **Caldwell:** NARROW LOCAL COA — **TWO individually designated landmarks only** (Chapter 130; one being the Caldwell
    Public Library; the 2nd unnamed; NO district; Grover Cleveland Birthplace = state-owned, not a gate); office the
    **Borough of Caldwell Construction Department at 24 Smull Avenue (Borough Hall)** — NOT Bloomfield Avenue; NO
    reservation, upland (no floodplain); walkable Bloomfield Ave downtown + Caldwell University. NEVER reintroduce the
    Caldwell-IDAHO "HD-1/HD-2/HD-3 downtown historic-district overlay."
  - **Essex Fells:** NONE — no HPC, no ordinance, no COA, no National/State Register listing (the "Essex Fells Historic
    District" is REFUTED); office the **Borough of Essex Fells Building Department (Building & Zoning) at Borough Hall,
    255 Roseland Avenue**; NO reservation, upland, no commercial district (Bowditch plan), unique tree canopy.
  - **Fairfield:** NO COA — advisory/educational HPC focused on the township-owned Van Ness House (no designated district;
    do NOT publish a precise HPC §number); office the **Building Department, Township of Fairfield, at 230 Fairfield
    Road**; NO reservation, **Passaic floodplain (low-lying ~174 ft) + Route 46 / I-80 commercial-industrial corridor**.
  - **Roseland:** COA ordinance EXISTS but NO designations — no homeowner subject (Chapter 30, Art. IX, §§30-901 to
    30-910; COA at §30-909; §30-901.1 requires owner consent); office the **Borough of Roseland construction/permit
    office at 300 Eagle Rock Avenue (the DPW building)** — NOT Borough Hall; NO reservation (county parks Becker / West
    Essex), **western-edge Passaic floodplain + Eisenhower Pkwy / Becker Farm office-park corridor**.
- For the **process-heavy / low-localizability** services — **roof-thermal-imaging-inspections, storm-damage-roof-repair,
  commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection, insurance-roof-replacement,
  roof-overlay-installation** — LEAD with the North Caldwell situation (the NO-COA advisory HPC; the Hilltop
  Reservation-edge / Second-Watchung upland canopy + branch impact; custom-colonial/Tudor plank-deck tear-offs; estate
  accessory + municipal/institutional low-slope work; owner-occupant documentation) before the standardized facts.
**Preserve every cited standard/cost fact** (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize/
InterNACHI figures, Copper Development Association, NPS Preservation Brief 29) — differentiation is about which local
facts lead, not about changing the sourced figures.

## G. Output format
Write the **complete file** to `<service>.snippet.ts` (in
`.planning/content-system/combo-batch10-caldwells-roseland/north-caldwell/`) — keep the exact first line
`import type { ComboContent } from '../schema';` and the EXACT `export const <ExportName>: ComboContent = {` you are
given (so `north-caldwell/index.ts` imports stay valid). Keep `serviceId` and `cityId: 'north-caldwell'` unchanged.
**Omit the `definition` field.** Also write a short `<service>.md` noting the de-fabs you cleared + the named sources
you used. Voice/structure exemplar: the committed **Orange combo `src/data/combo-content/orange/roof-repair.ts`** (same
answer-first + entity-grounded shape — localize, do NOT copy Orange's geography or COA) and the committed North Caldwell
**city page** `src/data/city-content/caldwells-roseland.ts` (cityId 'north-caldwell') for verified North Caldwell
geography/voice.
