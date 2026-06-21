# Fairfield Combo Author Brief — Combo Batch 10 (entity-grounding inherited)

You are rewriting ONE Fairfield service×city combo page (`src/data/combo-content/fairfield/<service>.ts`)
**answer-first**, **de-fabbed**, and **entity-grounded**. The combo = the intersection of a service (already
rewritten answer-first at `src/data/service-content/<categoryFile>.ts`) and Fairfield (facts below).
**Localize the finished service content to Fairfield** — do not invent a new service story.

> Fairfield = **Township of Fairfield**, Essex County, NJ — the **largest municipality in this batch (~10.13 sq mi)**
> and the **DEFINING Passaic-River floodplain city**. It sits LOW-LYING in the northwest corner of Essex County,
> downstream of the Passaic-Pompton confluence ("Two Bridges"), with much of the township inside the FEMA Special
> Flood Hazard Area. Its defining character is **DUAL**: an affluent, predominantly owner-occupied (~79%) later-20th-
> century suburban residential township (colonials, split-levels, bi-levels, raised ranches) PLUS one of northern NJ's
> dense **Route 46 / I-80 commercial-industrial corridors** — a large flat/low-slope commercial roof market (big-box
> retail, offices, warehouse/flex/light-manufacturing). Frame the audience as **owner-occupants of a mature suburban
> township AND the property managers / owners of the Route 46-I-80 commercial belt** — commercial is a CO-LEAD here,
> not a footnote. The single biggest Fairfield-specific fact for COA framing: **Fairfield has NO Certificate of
> Appropriateness — its Historic Preservation Commission is ADVISORY/EDUCATIONAL/CELEBRATORY (focused on the township-
> owned Peter Van Ness House), it issues no binding COA, and there is NO locally designated historic district, so a
> homeowner reroof requires NO historic approval.** This is the OPPOSITE of Roseland's existing-but-dormant Chapter-30
> ordinance, narrower than Caldwell's two-landmark Chapter-130, and unlike Maplewood's framework-only Article VIII or
> South Orange's binding Chapter-185 — Fairfield's mechanism is purely advisory. The OTHER defining Fairfield fact is
> the **Passaic floodplain** — frame it as a roof-relevant DRAINAGE/storm stressor, never a basement-flood sales claim.

---

## 0. ENTITY-GROUNDING (read first — it changes directAnswer + credentials)
This batch bakes the site-wide entity-grounding pattern into the combos from the start (like Irvington, Bloomfield,
Belleville, Nutley, Maplewood, South Orange, and the west-essex cities did).

1. **`directAnswer` is entity-grounded** — author it in this exact shape (gold exemplars:
   `src/data/combo-content/orange/roof-repair.ts` and the committed Fairfield CITY page
   `src/data/city-content/caldwells-roseland.ts`, cityId 'fairfield', whose `directAnswer` already reads
   "Newark Quality Roofing is a **roofing contractor** serving **Fairfield, New Jersey**, and **Essex County**…as a
   registered New Jersey Home Improvement Contractor."):
   > `**Newark Quality Roofing is a roofing contractor providing {service} across Fairfield, New Jersey, and Essex County, {1–2 city-specific scope clauses}** … as a registered New Jersey Home Improvement Contractor.`
   - The **bolded span** (from "Newark Quality Roofing" through the scope clauses) must be **≤40 words** — end the
     bold before the credential tail if needed. The credential tail "as a registered New Jersey Home Improvement
     Contractor." is OUTSIDE the bold.
   - Establish **"Fairfield, New Jersey"** (the state, spelled out) and **"roofing contractor"** as the descriptor.
   - This answers the page H1 "Who Provides {Service} in Fairfield?". No modality.
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
(H1 "Who Provides {Service} in Fairfield?", later H2 "What {Service} Is Available in Fairfield?") — **do NOT write
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
   to Fairfield's building stock** (figure-free; the entity definition is the separate spliced block — do not
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

## C. Fairfield load-bearing facts (carry verbatim where used; source = `.planning/content-system/cities-batchD/fairfield.md` and the committed Fairfield city page `src/data/city-content/caldwells-roseland.ts`, cityId 'fairfield')
- **Permit office:** the **Building Department, Township of Fairfield**, at **230 Fairfield Road**. Use that exact
  generic safe phrasing; do **NOT** name a Construction Official, a director, a phone number, or a fee schedule.
- **Reroof permit rule (statewide UCC — identical to every prior city):** a **detached one- or two-family reroof —
  including a full tear-off and re-cover — is "ordinary maintenance" under N.J.A.C. 5:23-2.7 and requires NO
  construction permit, no inspection, and no notice.** A permit IS required on **commercial, multi-family, or
  attached** buildings (the **25% rule**: repairing >25% of total roof area in a 12-month period) and any structural
  roof work; recover-vs-tear-off limits follow the **Rehab Subcode, N.J.A.C. 5:23-6.4**. Because Fairfield carries a
  dense Route 46 / I-80 commercial-industrial corridor, this **commercial permit path is the natural everyday case**
  here — the 25% threshold reaches much of the township's commercial stock. **The CURRENT files say "Fairfield
  Building Department" loosely — use the exact "Building Department, Township of Fairfield, at 230 Fairfield Road."**
- **Historic = NO COA — advisory/educational HPC (KEY — Fairfield's defining COA position).** Fairfield's municipal
  code lists a **Historic Preservation Commission**, but its powers are **ADVISORY / EDUCATIONAL / CELEBRATORY** —
  promoting preservation and recommending programs for the township-owned **Peter Van Ness House**. It issues **NO
  binding Certificate of Appropriateness**, and there is **NO locally designated historic district**. **A homeowner
  reroof in Fairfield requires NO historic approval.** Frame exactly, plainly, and indicatively:
  > *"Fairfield's Historic Preservation Commission is advisory and educational, focused on the township-owned Van Ness
  > House, and issues no Certificate of Appropriateness, so a private reroof in Fairfield requires no historic
  > approval. Fairfield has no locally designated historic district, and the Van Ness House at 236 Little Falls Road
  > and the Fairfield Dutch Reformed Church on Fairfield Road carry National Register listings only as township-owned
  > and church-owned heritage sites. Per the National Park Service, National Register listing alone places no federal
  > restriction on a private property owner."*
  Rules:
  - **Do NOT publish a precise HPC ordinance section number.** The "§2-55" cite was UNVERIFIED — cite the body only
    qualitatively as "the Township of Fairfield municipal code." Never print a section number for the HPC.
  - **Do NOT treat the Van Ness House (236 Little Falls Rd; NRHP + township-owned) or the Fairfield Dutch Reformed
    Church (Fairfield Rd; NRHP + church-owned) as homeowner COA gates.** They are Register-listed heritage SITES used
    as heritage COLOR only — per the NPS, listing imposes no private restriction.
  - **Do NOT attribute the Israel Crane House to Fairfield — it is in Montclair.** Never name it here.
  - **Do NOT** import Roseland's Chapter-30 ordinance, Caldwell's Chapter-130 two-landmark gate, North Caldwell's
    Chapter-107 survey HPC, Maplewood's Article VIII, South Orange's Chapter 185, Bloomfield's Chapter 302, Nutley's
    Chapter 410, or Orange's four districts. Fairfield = advisory, no COA, no district, no section number.
  - State the no-COA position where the historic angle arises (historic-roof-restoration, slate/tile/cedar-shake,
    custom-roof-design-consultation, roof-inspection). State it plainly: **no COA applies to a private reroof.**
- **Housing stock:** a **DUAL-CHARACTER township**. (1) Affluent, predominantly owner-occupied **(~79%; the committed
  city page publishes 78.7% owner-occupied at a median owner value of $688,500, per the U.S. Census Bureau)**
  later-20th-century suburban residential — **colonials, split-levels, bi-levels, raised ranches** on tree-lined
  streets. Keep the styles QUALITATIVE — **do NOT publish a per-style count.** (2) The **Route 46 / I-80 commercial-
  industrial corridor** — big-box retail, offices, and warehouse/flex/light-manufacturing buildings — a **large
  flat/low-slope commercial roofing market.** The later-20th-century residential stock → asphalt re-roofs, aging
  valley/chimney/wall flashing, plus natural slate/metal/copper on the larger and older homes; the corridor → EPDM/
  TPO/mod-bit low-slope membrane on flat decks. Use the decennial population (**7,872, NOT 7,824**) ONLY if needed,
  and distinguish it from Fairfield Twp, **Cumberland County**. Do **NOT** publish a per-style count or a pre-1940 %.
- **Neighborhoods / sections (VERIFIED ONLY — these are the ONLY ones any combo may name; drop anything else):**
  **Fairfield Road** (a main spine; the Building Department sits at 230 Fairfield Road; the Fairfield Dutch Reformed
  Church is on Fairfield Rd), **Hollywood Avenue** (an established residential street, also the township Recreation
  Department at 221 Hollywood Avenue), **Big Piece Road** (a residential road through the low-lying owner-occupied
  neighborhoods), **Little Falls Road** (the township-owned Van Ness House at 236 Little Falls Road), **Pier Lane**,
  **Plymouth Street**, and the **Route 46 / I-80 commercial-industrial corridor**. Describe light-industrial uses
  **by corridor** — do **NOT** name a "**Fairfield Business Campus**" (unsourced/fabricated). **DROP** any street or
  section NOT on this list — the CURRENT files FABRICATE "Gould Place," "Two Bridges Road" (as a neighborhood),
  "developments near the Caldwell border," and "streets off Hollywood Avenue" as named blocks; do **NOT** carry them.
  Do **NOT** publish a fabricated individual-landmark list.
- **Geography (HARD guardrails):**
  - **Passaic-River floodplain = Fairfield's DEFINING differentiator.** Fairfield is the **largest municipality in
    this batch (~10.13 sq mi)** and sits **LOW-LYING (~174 ft, per Wikipedia — NOT upland)** in the NW corner of
    Essex County, downstream of the Passaic-Pompton confluence at **"Two Bridges,"** with much of the township in the
    **FEMA Special Flood Hazard Area / 100-year flood zone** (per the Township of Fairfield Flood Protection
    Information page and FEMA Essex County flood maps). The **Great Piece Meadows** Passaic wetland (**~1,170 acres
    in-township**, per Wikipedia and Wildlife Preserves) and the adjacent Hatfield Swamp / West Essex Park lie partly
    in/beside it. The **NOAA-NWS Passaic River at Pine Brook gauge (PINN4)** is the named station used to judge flood
    severity (named floods: **Hurricane Irene Aug 2011, remnants of Hurricane Ida Sept 2021, Hurricane Floyd Sept
    1999**). Frame the floodplain as a roof-relevant **DRAINAGE / storm stressor** — positive low-slope drainage,
    sound flashing, well-maintained gutters/scuppers/downspouts that carry storm water off before it backs up — **NOT
    a basement-flood sales claim.** **NO FEMA zone letters, NO PINN4 stage numbers (no feet), NO "~70% in a flood
    zone."** Keep QUALITATIVE.
  - **Route 46 and I-80 BISECT the township**, creating the dense commercial-industrial **flat/low-slope corridor** —
    the natural place the commercial permit path and membrane work apply.
  - Fairfield borders **NO reservation** (the Hilltop Reservation is **North Caldwell only**, NOT Fairfield), and the
    **West Essex Trail does NOT run through Fairfield.** A mature oak/maple street-tree canopy on the residential
    streets is the shared QUALITATIVE residential stressor (leaf/branch debris in valleys and gutters; moss/algae on
    shaded north slopes). Keep QUALITATIVE (no canopy-% figure).
  - Fairfield is **LOW-LYING (~174 ft)** — **never** attach an "upland," "cooler/snowier/windier," or higher-
    elevation differential to it. It borders Caldwell, North Caldwell, Roseland, West Caldwell, and the Passaic/
    Pompton rivers (with Wayne and the Two Bridges section beyond). Do **NOT** import the Caldwells/Essex Fells upland
    framing, Roseland's Eisenhower-Pkwy office-park belt as Fairfield's, or any committed sibling's geography.
- **RESERVATION / FLOODPLAIN GUARDRAIL MATRIX (the cross-city contamination guard — never violate it):**
  - **Hilltop Reservation** (~284 ac, Second Watchung) = **North Caldwell only** (in this batch). Caldwell, Essex
    Fells, **Fairfield, and Roseland border NO large Essex County reservation.**
  - **Passaic-River floodplain = FAIRFIELD** (the DEFINING floodplain city) **+ Roseland's western/riverine edge
    only.** Caldwell, North Caldwell, and Essex Fells are UPLAND — never attach floodplain / FEMA-flood-zone / Great
    Piece Meadows framing to those three.
  - **Roseland** contains county **PARKS** (most of Becker Park; part of West Essex Park), never "reservations." The
    **West Essex Trail** is a linear rail-trail (Cedar Grove / Verona / Essex Fells / Roseland area), NOT a
    reservation, and does **NOT** run through Fairfield.
  - The ONLY hard elevation fact in this batch is Essex County's highest point (~691 ft) at the Hilltop in **North
    Caldwell** — never extrapolate it to Fairfield. Every Fairfield elevation/snow/wind claim stays QUALITATIVE on the
    shared EWR baseline (the one Fairfield-specific elevation fact is the LOW ~174 ft, per Wikipedia).
- **Climate (shared EWR baseline, HEDGED — identical to every prior city):** ~31.5 in/yr snow; nor'easters Oct–April;
  ~25–30 thunderstorms/yr; ground snow load **Pg ~25 psf** and **~110–115 mph ASCE 7-16** design wind kept **HEDGED**
  (not Essex-confirmed). **BAN every city-specific degree/gust/elevation number** (the ONLY exception is the
  attributed ~691 ft Essex County high point at the Hilltop — North Caldwell only, never Fairfield; the LOW ~174 ft
  Fairfield elevation, per Wikipedia, IS allowed). No distinct Fairfield microclimate number.
- **Named-source figures available (cite in-text when used):** U.S. Census Bureau (78.7% owner-occupied; $688,500
  median owner value); Wikipedia / Wildlife Preserves (Great Piece Meadows ~1,170 ac); NOAA 1991–2020 normals at EWR
  (~31.5 in/yr snow; ~25–30 thunderstorms/yr); InterNACHI life-expectancy chart (architectural asphalt 30 / 3-tab 20;
  slate 60–150; metal 40–80; copper 70+; EPDM 15–25; TPO 7–20; modified bitumen 20); IRC R905.1.2 (ice barrier to
  ≥24 in inside the exterior wall line); NPS Preservation Brief 29 (full-slope slate replacement once ≥20% broken/
  missing/sliding; non-ferrous copper/stainless slater's nails); NRCA (~90–95% of leaks originate at flashing); NRCA
  and ARMA (≥¼ in/ft slope to drain; ponding >48 hrs = defect); N.J.A.C. 5:23-2.7 (NJ UCC reroof rule); National Park
  Service (Register listing places no private restriction); Insurance Information Institute (wind/hail = largest
  homeowners-claim type, 2.8% of insured homes/yr); HomeAdvisor and Modernize (replacement $10,000–$25,000; leak
  repair $400–$1,000); NJ roofing guides (slate ~$10–$30/sq ft).
- **UNVERIFIED — never publish:** any precise HPC ordinance section number ("§2-55"), any binding-COA claim, the Van
  Ness House or Dutch Reformed Church as homeowner COA gates, the Israel Crane House (Montclair, not Fairfield), any
  "upland"/cooler-snowier-windier differential, any reservation adjacency or West Essex Trail attribution, any
  basement-flood sales claim, "~70% in a flood zone," FEMA zone letters, PINN4 stage numbers (feet), a named
  "Fairfield Business Campus," a per-style housing count, a pre-1940/pre-1950 %, the population integer 7,824 (the
  decennial figure is 7,872), the Construction Official's name, COA fees/fines, any street/section beyond the verified
  list above, and every fabricated NQR warranty term / response-time / savings / financing claim in the current files.

## D. De-fab targets present in the CURRENT combo files (fix all)
- `overview[0]` opens "Newark Quality Roofing delivers expert {service} in Fairfield — with prices starting from $X–$Y
  and free estimates available today" → **delete the price + hype**, replace with an answer-first NQR-applied,
  entity-grounded lead (bold the named topics; figure-free).
- **Pricing range** is the OLD `$350–$1,500` / `$15,000–$50,000` / `$8–$14/sq ft` and other invented tiers → replace
  with the sourced default for the service type (§E): repair & maintenance `$400–$1,000`; replacement/installation
  `$10,000–$25,000`.
- **`whyChooseUs`** templated trust lines — "NJ licensed, GAF Certified — 15+ years protecting Essex County homes and
  businesses," "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "Local team
  that knows Fairfield — same-day estimates and 24/7 emergency response" → **de-fab** to clean factual reasons (§E),
  using the **registered HIC / fully insured** framing.
- **Fabricated Fairfield-specific prose in the current files** — the no-COA HISTORIC files are CLOSE but still soft
  ("Fairfield does not have a historic preservation commission" is WRONG: it HAS one, but it is ADVISORY/no-COA — fix
  to the §C plain framing); fabricated streets/blocks (**Gould Place**, "**Two Bridges Road**" as a neighborhood,
  "**streets off Hollywood Avenue**," "**developments near the Caldwell border**"); the **"$8–$14/sq ft"** and
  decade-specific build-era claims ("homes built between the 1960s and 1990s," "late 1970s and early 1980s," "second
  or third roof system"); the "**within two to four hours**" emergency-response claim; "**FM Global wind-uplift
  calculations**," "**emergency tie-down capability**," "we pre-position / enhanced storm-response protocols," named
  slate-quarry inventory; manufacturer-shingle name-drops as NQR materials ("**GAF Timberline and Owens Corning
  Duration**"); manufacturer "**twenty-year and thirty-year no-dollar-limit warranties**" presented as NQR offers;
  "**we maintain relationships with specialty slate quarries / salvage suppliers / custom metal fabricators**" →
  **DELETE/CORRECT all of it.** Replace with VERIFIED Fairfield texture (colonials/split-levels/raised ranches;
  deteriorated sheathing at tear-off; the Route 46 / I-80 commercial corridor membrane work; Passaic-floodplain
  drainage load; mature tree-canopy debris; the advisory-no-COA position where the historic angle arises).
- **`conversionHooks.urgencyNote`** "Don't wait for minor damage to become a major expense. Early action saves
  thousands." → factual, no fabricated savings (e.g. "Addressing roof damage early limits interior and structural
  water damage.").
- **Inline markdown self-links** like `[roof repair](/roof-repair)`, `[Caldwell](/roof-repair-caldwell-nj)`,
  `[Montclair](/historic-roof-restoration-montclair-nj)`, `[Glen Ridge](/roof-repair-glen-ridge-nj)`,
  `[Fairfield](/roofing-in-fairfield-nj)`, `[commercial roof installation](/commercial-roof-installation)` → strip
  the link syntax (keep words as plain text; the committed siblings carry zero links).
- **Unsourced hard numbers** (decade-specific lifespans, the "twenty-year lifespan" rule of thumb, the "25–30%"/"30%"
  repair-vs-replace rule) → name-source from the packs (the 30% rule = Kellow/Modernize/Josten per materials-economics
  §8; lifespans = the InterNACHI life-expectancy chart) or **de-quantify**.
- **Preserve** the genuinely good Fairfield texture (dual residential/commercial character; Route 46 / I-80 corridor
  membrane work; flat-roof equipment penetrations and drainage; deteriorated sheathing at tear-off; Passaic-floodplain
  drainage load; mature tree-canopy debris on the residential streets) — restructure it answer-first, do not discard
  it.

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
- "Local Essex County crew familiar with Fairfield's suburban colonials and split-levels and its Route 46 and I-80 commercial buildings."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials, NO "licensed.")

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in
Fairfield."). `urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural
water damage.").

## F. Differentiation directive (pre-empt cross-city overlap — the in-archetype caldwells-roseland siblings are the primary differentiate target)
**The four other caldwells-roseland siblings (Caldwell, North Caldwell, Essex Fells, Roseland) are the closest
cities to differentiate against. Lead with the facts UNIQUE to Fairfield so the page never mirrors a sibling or the
committed Newark/East Orange/Orange/Irvington/Bloomfield/Belleville/Nutley/Maplewood/South-Orange/West-Orange/
Montclair/Glen-Ridge/Verona/Cedar-Grove versions:**
- **Fairfield-DISTINCT anchors to FOREGROUND:** the **NO-COA, advisory/educational HPC** (focused on the township-
  owned Van Ness House; no district; no section number — a private reroof needs no historic approval); the **Passaic-
  River floodplain** (largest batch municipality ~10.13 sq mi; low-lying ~174 ft; Two Bridges confluence; FEMA SFHA;
  Great Piece Meadows ~1,170 ac; PINN4 gauge — all as a DRAINAGE stressor, qualitative); the **DUAL residential /
  Route 46–I-80 commercial-industrial** character (commercial is a CO-LEAD: big-box, offices, warehouse/flex membrane
  market); the **owner-occupied later-20th-century colonials/split-levels/raised ranches** (78.7% owner-occupied,
  $688,500 median, per the Census Bureau); the **verified streets** (Fairfield Road spine, Hollywood Avenue, Big
  Piece Road, Little Falls Road, Pier Lane, Plymouth Street); the **Building Department, Township of Fairfield, at
  230 Fairfield Road.**
- **AVOID importing the OTHER four caldwells-roseland siblings' anchors** (do NOT write these into a Fairfield combo):
  - **Caldwell:** NARROW LOCAL COA — TWO designated landmarks only (Chapter 130; one being the Caldwell Public
    Library; no district); office the **Borough of Caldwell Construction Department at 24 Smull Avenue (Borough
    Hall)** — NOT Bloomfield Avenue; NO reservation, **UPLAND (no floodplain)**, walkable Bloomfield Ave downtown +
    Caldwell University.
  - **North Caldwell:** NO COA — advisory/survey-only HPC (Chapter 107 Art. XIII); office the **Borough of North
    Caldwell Construction Department at 141 Gould Avenue (Borough Hall)**; **Hilltop Reservation + Essex County high
    point (~691 ft)**, UPLAND, large-lot wooded.
  - **Essex Fells:** NONE — no HPC, no ordinance, no COA, no Register listing; office the **Borough of Essex Fells
    Building Department (Building & Zoning) at Borough Hall, 255 Roseland Avenue**; NO reservation, UPLAND, no
    commercial district (Bowditch plan), unique tree canopy.
  - **Roseland:** COA ORDINANCE EXISTS but NO designations — no homeowner subject (Chapter 30 Art. IX); office the
    **Borough of Roseland construction/permit office at 300 Eagle Rock Avenue (the DPW building)** — NOT Borough Hall;
    NO reservation (county parks Becker/West Essex), **western-edge Passaic floodplain** + Eisenhower Pkwy / Becker
    Farm office-park corridor.
  - Note the contrast: Fairfield and Roseland both touch the Passaic floodplain, but Fairfield is the **DEFINING,
    township-wide** floodplain city while Roseland's is a **western/riverine EDGE only** — keep that distinct, and
    keep Roseland's office-park belt (Eisenhower Pkwy) separate from Fairfield's Route 46 / I-80 corridor.
- For the **process-heavy / low-localizability** services — **roof-thermal-imaging-inspections, storm-damage-roof-
  repair, commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection, insurance-roof-
  replacement, roof-overlay-installation** — LEAD with the Fairfield situation (the Route 46 / I-80 commercial-
  corridor membrane stock; Passaic-floodplain drainage load; deteriorated-sheathing plank-deck tear-offs on the
  suburban colonials; owner-occupant + property-manager documentation) before the standardized facts.
**Preserve every cited standard/cost fact** (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize/
InterNACHI figures) — differentiation is about which local facts lead, not about changing the sourced figures.

## G. Output format
Write the **complete file** to `<service>.snippet.ts` (in
`.planning/content-system/combo-batch10-caldwells-roseland/fairfield/`) — keep the exact first line
`import type { ComboContent } from '../schema';` and the EXACT `export const <ExportName>: ComboContent = {` you are
given (so `src/data/combo-content/fairfield/index.ts` imports stay valid). Keep `serviceId` and `cityId: 'fairfield'`
unchanged. **Omit the `definition` field.** Also write a short `<service>.md` noting the de-fabs you cleared + the
named sources you used. Voice/structure exemplar: the committed **Orange combo
`src/data/combo-content/orange/roof-repair.ts`** (same answer-first + entity-grounded shape — localize, do NOT copy
Orange's geography or COA) and the committed Fairfield **city page** `src/data/city-content/caldwells-roseland.ts`
(cityId 'fairfield') for verified Fairfield geography/voice.
