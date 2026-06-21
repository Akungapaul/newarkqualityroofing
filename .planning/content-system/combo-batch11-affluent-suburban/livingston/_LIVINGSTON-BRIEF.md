# Livingston Combo Author Brief — Combo Batch 11 (entity-grounding inherited)

You are rewriting ONE Livingston service×city combo page (`src/data/combo-content/livingston/<service>.ts`)
**answer-first**, **de-fabbed**, and **entity-grounded**. The combo = the intersection of a service (already
rewritten answer-first at `src/data/service-content/<categoryFile>.ts`) and Livingston (facts below).
**Localize the finished service content to Livingston** — do not invent a new service story.

> Livingston = **Township of Livingston**, Essex County, NJ — a large (~13.8 sq mi), affluent, ~88.9%-owner-occupied
> residential township in western Essex County of **post-war split-levels, raised ranches, and colonials** under a
> **mature street-tree canopy**, PLUS one of Essex County's largest **flat-roof commercial-and-medical markets** along
> the **Route 10 shopping corridor**, the **Eisenhower Parkway office/medical parks**, and the **Cooperman Barnabas
> Medical Center** campus. Frame the audience as **owner-occupants of a mature post-war single-family suburb**, with a
> large secondary **Route 10 / Eisenhower Parkway commercial-and-medical** angle. The single biggest Livingston-specific
> fact for COA framing: **Livingston has designated NO local historic district or landmark requiring a Certificate of
> Appropriateness, so a homeowner reroof needs NO historic-board approval.** This is the OPPOSITE of Millburn's binding-
> but-narrow Wyoming / Short Hills Park COA, and unlike Bloomfield's Chapter-302 listed-parcel gate, Nutley's Chapter-410
> Third-River district, South Orange's binding Montrose-Park / Chapter-185 COA, or Maplewood's conditional Article-VIII
> framework: Livingston's preservation provisions are **planning identifications only** — the Master Plan merely
> RECOMMENDS that the township consider adopting preservation provisions; code §170-3 and the ~38 Master-Plan "historic
> sites" are planning IDs, not reroof gates; the Force Homestead is a township-owned Register-listed museum, not a gate.

---

## 0. ENTITY-GROUNDING (read first — it changes directAnswer + credentials)
This batch bakes the site-wide entity-grounding pattern into the combos from the start (like Irvington, Bloomfield,
Belleville, Nutley, Maplewood, and South Orange did).

1. **`directAnswer` is entity-grounded** — author it in this exact shape (gold exemplars:
   `src/data/combo-content/orange/roof-repair.ts` and the committed Livingston CITY page
   `src/data/city-content/affluent-suburban.ts`, cityId 'livingston'):
   > `**Newark Quality Roofing is a roofing contractor providing {service} across Livingston, New Jersey, and Essex County, {1–2 city-specific scope clauses}** … as a registered New Jersey Home Improvement Contractor.`
   - The **bolded span** (from "Newark Quality Roofing" through the scope clauses) must be **≤40 words** — end the
     bold before the credential tail if needed. The credential tail "as a registered New Jersey Home Improvement
     Contractor." is OUTSIDE the bold.
   - Establish **"Livingston, New Jersey"** (the state, spelled out) and **"roofing contractor"** as the descriptor.
   - This answers the page H1 "Who Provides {Service} in Livingston?". No modality.
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
(H1 "Who Provides {Service} in Livingston?", later H2 "What {Service} Is Available in Livingston?") — **do NOT write
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
   to Livingston's building stock** (figure-free; the entity definition is the separate spliced block — do not
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
   `[Millburn](/slate-roof-installation-repair-millburn-nj)`. The committed Newark/Orange/Irvington/Bloomfield/
   Belleville/Nutley/Maplewood/South-Orange combos carry ZERO inline links — match that. No synthesized superlatives.
6. **No price in any prose lead.** Pricing lives ONLY in the `pricing` field (see §E) and the cost FAQ.

## C. Livingston load-bearing facts (carry verbatim where used; source = `.planning/content-system/cities-batchE/livingston.md` + the committed Livingston city page `src/data/city-content/affluent-suburban.ts`, cityId 'livingston')
- **Permit office:** the **Township of Livingston Building Department** at **357 South Livingston Avenue**. Use that
  generic safe phrasing; do **NOT** name a Construction Official, a director, or a fee schedule.
- **Reroof permit rule (statewide UCC — identical to every prior city):** a **detached one- or two-family reroof —
  including a full tear-off and re-cover — is "ordinary maintenance" under N.J.A.C. 5:23-2.7 and requires NO
  construction permit, no inspection, and no notice.** A permit IS required on **commercial, multi-family, or
  attached** buildings (the **25% rule**: repairing >25% of total roof area in a 12-month period) and any structural
  roof work; recover-vs-tear-off limits follow the **Rehab Subcode, N.J.A.C. 5:23-6.4**. The Route 10 / Eisenhower
  Parkway / Cooperman Barnabas commercial-and-medical stock is the natural place this commercial path applies.
- **Historic = NO BINDING LOCAL COA (KEY — the OPPOSITE of Millburn's narrow gate).** Livingston has designated **NO
  local historic district or landmark requiring a Certificate of Appropriateness**, so a homeowner reroof in Livingston
  **needs NO historic-board approval.** The Township Master Plan Historic Preservation Plan Element only **RECOMMENDS**
  that the township consider adopting preservation provisions (an unadopted, voluntary measure); municipal code **§170-3
  "Historic site"** and the **~38 Master-Plan-identified sites** are planning identifications, **NOT reroof gates**. The
  **Force Homestead** (on South Livingston Avenue; township-owned, Register-listed museum, closed since 2023 for
  restoration) imposes **no rule on a private owner**. Per the **National Park Service**, National Register listing alone
  places **no restriction on a private owner.** Frame exactly, and definitively (this is the historic-FAQ first sentence
  and the historic-roof angle wherever it arises):
  > *"Livingston has designated no local historic district or landmark requiring a Certificate of Appropriateness, so a
  > homeowner's reroof in Livingston needs no historic-board approval. The Township Master Plan Historic Preservation
  > Plan Element only recommends that the township consider adopting preservation provisions, an unadopted voluntary
  > measure, and the code §170-3 'Historic site' definition and the roughly 38 Master-Plan-identified sites are planning
  > identifications, not reroof gates. The Force Homestead on South Livingston Avenue, a township-owned, Register-listed
  > museum closed since 2023 for restoration, imposes no rule on a private owner, because per the National Park Service,
  > Register listing alone places no restriction on a private property owner."*
  Rules:
  - **State plainly that NO COA applies to a Livingston reroof.** Do NOT hedge it as "conditional" or "framework-only"
    (that is Maplewood); do NOT assert any binding gate (that is Millburn/South Orange/Bloomfield/Nutley/Orange).
  - **Do NOT treat the Force Homestead as a homeowner COA gate** — it is heritage color only, a township-owned
    Register-listed museum with no rule on a private owner.
  - **Do NOT** import Millburn's Wyoming / Short Hills Park districts or Article-8 ordinance, Maplewood's Article-VIII
    framework, South Orange's Montrose-Park / Chapter-185, Bloomfield's Chapter-302, Nutley's Chapter-410, or Orange's
    four districts.
  - State this NO-COA position where the historic angle arises (historic-roof-restoration, slate/tile/cedar-shake,
    custom-roof-design-consultation). The Master-Plan recommendation is heritage context only, never an approval step.
- **Housing stock:** **post-war split-levels, raised ranches, and colonials** (also bi-levels, center-hall colonials)
  under a mature street-tree canopy, now joined by **newer luxury and teardown-rebuild construction**, PLUS the **Route
  10 / Eisenhower Parkway commercial-and-medical market** anchored by the **Cooperman Barnabas Medical Center** (formerly
  Saint Barnabas, a 597-bed teaching hospital). Ownership is **affluent, ~88.9% owner-occupied across 10,719 housing
  units, per the U.S. Census Bureau** (this figure IS published on the committed city page — keep it, named-sourced, in
  the who/what residential framing). Frame house types **qualitatively**; do **NOT** publish a population/area integer or
  the top-coded median-income / median-home-value literals. The older mid-century stock → **plank/deteriorated sheathing
  discovered at tear-off**, aging valley/chimney/wall flashing, addition-transition flashing where 1990s–2000s additions
  meet original framing; the Route 10 / Eisenhower Parkway / Cooperman Barnabas decks → EPDM/TPO/mod-bit low-slope membrane.
- **Neighborhoods / sections (VERIFIED ONLY — the ONLY ones any combo may name):** **Riker Hill** (eastern Riker Hill
  ridge; estate-style larger lots; upland, outside the western floodplain), **Collins and Burnet Hill** (post-WWII split-
  levels/ranches/colonials), **Hillside**, **Broadlawn**, **Bel Air**, **Laurel Hills and Chestnut Hill** (post-war stock
  + newer luxury/teardown-rebuild), the **Livingston Town Center / Livingston Mall area** (SW corner; retail/mixed-use flat
  roofs near South Livingston Avenue + Mount Pleasant Avenue), the **Route 10 shopping corridor** (flat-roof retail belt),
  the **Eisenhower Parkway office/medical parks** (western side; flat-roofed professional/corporate/medical), the **South
  Livingston Avenue town center**, **Cooperman Barnabas Medical Center** (formerly Saint Barnabas; Old Short Hills Road),
  and the **Passaic River / West Essex Park western edge.** **DROP** the fabricated names **Heritage Hills, Beaumont
  Terrace, Westminster, Northland, Collins Terrace, West Hills** (and the current files' "Northland Road," "Kingsland,"
  "Beaufort Avenue," "Crestwood," etc.) and ANY street/section not on this list. Do **NOT** publish a fabricated
  individual-landmark list.
- **Geography (HARD guardrails):**
  - Livingston is a **large (~13.8 sq mi) residential township in western Essex County** that does **NOT contain or
    border the South Mountain Reservation** (that belongs to **Millburn**). Its open space is **West Essex Park** (a
    roughly **1,360-acre** Essex County **Passaic-River wetlands greenway** on the **western edge**, ending just beyond
    South Orange Avenue, per **Essex County Parks**), **Riker Hill Art Park** (**42 acres**, a former Nike radar base, per
    Essex County Parks), and **Becker Park**. Keep QUALITATIVE.
  - The **Passaic River and Willow Brook** run along the **western/low-lying EDGE only** — a **localized FEMA Special
    Flood Hazard Area**, per the **FEMA Flood Insurance Study for Essex County** + the **Essex County Multi-Jurisdictional
    Hazard Mitigation Plan** (which names "Willow Brook in Livingston"). **NEVER township-wide, NEVER a basement-flood
    claim.** The **upland eastern sections such as Riker Hill sit OUTSIDE the floodplain.** Frame the floodplain as a
    roof-relevant **DRAINAGE / storm stressor on the western edge only** (positive deck drainage; gutters/downspouts on
    the lower-lying western parcels).
  - The **mature street-tree canopy** over the post-war split-levels, raised ranches, and colonials is the **defining
    residential roof stressor** (leaf/branch load in valleys & gutters, branch impact in nor'easters/summer storms,
    shade-driven moss/algae on north slopes). Keep QUALITATIVE (no canopy-% figure).
  - The **Route 10 / Eisenhower Parkway / South Livingston Avenue / Mount Pleasant Avenue** corridor and the **Cooperman
    Barnabas Medical Center** campus carry the **flat/low-slope commercial roofs.**
  - Livingston borders **Roseland, West Orange, Millburn, East Hanover, Florham Park, and the Morris County line.** Do
    **NOT** import Maplewood/South-Orange's "between the First and Second Watchung ridges," Belleville's "Second-River /
    Route 21," Nutley's "Third-River / ON3," Bloomfield's "town center / GSP," Irvington's "Vailsburg / I-78," or Orange's
    "Watchung-ridge-foot" framing as Livingston's.
- **RESERVATION / FLOODPLAIN GUARDRAIL MATRIX (the cross-city contamination guard — never violate it):**
  - **South Mountain Reservation** (~2,112 ac, between the First and Second Watchung ridges) = **MILLBURN only.**
    Livingston borders **NO** large Essex County reservation.
  - **Livingston's open space** = **West Essex Park** (~1,360 ac Passaic-River wetlands greenway, western edge), **Riker
    Hill Art Park** (42 ac, former Nike radar base), and **Becker Park.** NEVER attach West Essex Park / Riker Hill /
    Becker Park to Millburn.
  - **Passaic-River + Willow Brook floodplain** = **LIVINGSTON'S WESTERN/LOW-LYING EDGE only** (localized FEMA SFHA per
    the FEMA Flood Insurance Study + the Essex County Hazard Mitigation Plan). Millburn has **NO** Passaic floodplain;
    Millburn's only flood feature is the downtown Rahway-River village (commercial drainage only).
  - **Walter Kidde Dinosaur Park / Riker Hill Fossil Site** = **ROSELAND** (a committed prior city), **NEVER** Livingston.
  - **The Rahway River downtown-village flood** (Floyd 1999 / Irene 2011 / Ida 2021) = **MILLBURN** downtown low-slope
    COMMERCIAL drainage only — never a basement/interior, township-wide, or Short Hills residential claim; write "the
    Rahway River" (no branch). NOT a Livingston feature.
  - **No city-specific elevation/snow/wind number anywhere;** the Watchung-ridge "marginally cooler/snowier" (Millburn)
    stays QUALITATIVE on the shared EWR baseline.
- **Climate (shared EWR baseline, HEDGED — identical to every prior city):** ~31.5 in/yr snow; nor'easters Oct–April;
  ~25–30 thunderstorms/yr; ground snow load **Pg ~25 psf** and **~110–115 mph ASCE 7-16** design wind kept **HEDGED**
  (not Essex-confirmed). **BAN every city-specific degree/gust/elevation number** (no elevation exception in this batch;
  the ONLY named-sourced acreage figures are **South Mountain Reservation ~2,112 ac [Millburn]** and **West Essex Park
  ~1,360 ac + Riker Hill Art Park 42 ac [Livingston]**). No distinct Livingston microclimate number.
- **UNVERIFIED — never publish:** any population integer, any area integer, the top-coded median-income or
  median-home-value literals, an exact pre-1940/pre-1950 %, a median year built, the Construction Official's name, any
  individually designated landmark list, COA fees/fines, any street/section beyond the verified list above, any FEMA
  flood-zone figure or depth, any South Mountain Reservation attribution, any Walter Kidde Dinosaur Park / Riker Hill
  Fossil Site attribution, any township-wide or basement-flood claim, the fabricated neighborhood names (Heritage Hills /
  Beaumont Terrace / Westminster / Northland / Collins Terrace / West Hills), any HOA / architectural-review-committee
  approval process, any named slate-quarry inventory or salvaged-slate-inventory / slate-ripper-stock claim, any
  manufacturer-rep relationship, and any fabricated NQR warranty term, response-time, or savings claim.

## D. De-fab targets present in the CURRENT combo files (fix all)
The CURRENT Livingston combo files (e.g. `src/data/combo-content/livingston/roof-repair.ts`,
`slate-roof-installation-repair.ts`, `commercial-roof-repair.ts`) are heavily fabricated. Your per-combo file is at
`src/data/combo-content/livingston/<service>.ts` — open it and strip EVERY de-fab found there. The recurring offenders:
- **Price-in-lead.** `overview[0]` opens "Newark Quality Roofing delivers expert {service} in Livingston — with prices
  starting from $X–$Y and free estimates available today" → **delete the price + hype**, replace with an answer-first
  NQR-applied, entity-grounded lead (bold the named topics; figure-free).
- **Pricing range** is the OLD invented tier (`$350–$1,500`, `$20,000–$45,000`, `$500–$5,000`, etc.) → replace with the
  sourced default for the service type (§E): repair & maintenance `$400–$1,000`; replacement/installation
  `$10,000–$25,000`.
- **`whyChooseUs`** templated trust lines — "NJ licensed, GAF Certified — 15+ years protecting Essex County…", "Premium
  materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response" → **de-fab** to
  clean factual reasons (§E), using the **registered HIC / fully insured** framing.
- **Fabricated Livingston-specific prose in the current files** — fabricated streets/sections (**Northland Road,
  Heritage Hills, Collins Terrace, Kingsland, Westminster, Beaufort Avenue,** plus residential mis-tags of "South Orange
  Avenue," "Old Short Hills Road," and "Eisenhower Parkway near South Mountain"); the entire **HOA / architectural-review-
  committee approval** narrative ("coordinate with the architectural review committee," "covenant-governed neighborhoods,"
  "submit material samples to the architectural review committee"); any **South Mountain** attribution ("near South
  Mountain"); named **slate quarries** ("Vermont," "Pennsylvania," "Vermont Unfading Green") and the **salvaged-slate
  inventory / slate-ripper / copper-nail-stock** inventory claims; the invented **manufacturer-rep relationships**
  ("relationships with manufacturer representatives," "GAF Timberline HDZ in Charcoal," "CertainTeed Landmark in
  Driftwood" as stocked inventory); the **same-day / next-day / single-day emergency-response** time claims; the "75 to
  150 years" / "three to five times more" / decade-specific unsourced figures → **DELETE/CORRECT all of it.** Replace
  with VERIFIED Livingston texture (post-war split-level/raised-ranch/colonial stock; plank decking at tear-off; addition-
  transition flashing where 1990s–2000s additions meet original framing; Route 10 / Eisenhower Parkway / Cooperman
  Barnabas low-slope membrane; mature-canopy debris in valleys & gutters; the western-edge Passaic / Willow Brook drainage
  angle; the NO-COA historic position).
- **`conversionHooks.urgencyNote`** "Don't wait… Early action saves thousands" → factual, no fabricated savings.
- **Inline markdown self-links** like `[roof repair](/roof-repair)`, `[Millburn](/slate-roof-installation-repair-millburn-nj)`,
  `[Montclair](/roof-repair-montclair-nj)`, `[West Orange](/roof-repair-west-orange-nj)`, `[East Orange](/commercial-roof-repair-east-orange-nj)`
  → strip the link syntax (keep words as plain text; the committed siblings carry zero links).
- **Unsourced hard numbers** (decade-specific lifespans, "three to four times heavier," the "25–30%"/"30%" repair-vs-
  replace rule, the "75 to 150" slate span) → name-source from the packs (slate 60–150 yr / metal 40–80 / copper 70+ /
  architectural asphalt 30 / 3-tab 20 / EPDM 15–25 / TPO 7–20 / mod-bit 20 = the **InterNACHI life-expectancy chart**;
  ~90–95% of leaks at flashing = an industry estimate attributed to the **NRCA**; ¼ in/ft slope + ponding-over-48-hr
  defect = the **NRCA and ARMA**; ice barrier eave-to-≥24-in-inside-the-wall = **IRC R905.1.2**; non-ferrous slater's
  nails + full-slope replacement once ≥20% slate broken = **NPS Preservation Brief 29**; the 30% repair-vs-replace
  rule-of-thumb = Kellow/Modernize/Josten per materials-economics §8) or **de-quantify**.
- **Preserve** the genuinely good Livingston texture (post-war split-level/ranch/colonial stock + plank decking at
  tear-off; addition-transition flashing failures; Route 10 / Eisenhower Parkway / Cooperman Barnabas low-slope membrane;
  mature-canopy valley-and-gutter debris; western-edge Passaic / Willow Brook drainage) — restructure it answer-first,
  do not discard it.

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
- "Local Essex County crew familiar with Livingston's post-war split-levels, raised ranches, and colonials and its Route 10 and Eisenhower Parkway commercial roofs."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials, NO "licensed.")

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in
Livingston."). `urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural
water damage.").

## F. Differentiation directive (pre-empt cross-city overlap — ESPECIALLY with Millburn, the affluent-suburban sibling in THIS batch)
**The in-archetype affluent-suburban sibling (Millburn) is the primary differentiate target.** Lead with the facts that
are UNIQUE to Livingston so the page never mirrors Millburn or the committed Newark/East Orange/Orange/Irvington/
Bloomfield/Belleville/Nutley/Maplewood/South-Orange/West-Orange/Montclair/Glen-Ridge/Verona/Cedar-Grove/Caldwell/
North-Caldwell/Essex-Fells/Fairfield/Roseland versions:
- **Livingston-DISTINCT anchors to FOREGROUND:** the **NO binding local COA** position (no locally designated district or
  landmark; the Master Plan only RECOMMENDS considering preservation; §170-3 + ~38 Master-Plan "historic sites" =
  planning IDs, not gates; the Force Homestead = township-owned Register-listed museum, not a gate); the **specific
  reservation/canopy/floodplain geography** (West Essex Park ~1,360-ac Passaic greenway + Riker Hill Art Park 42-ac former
  Nike radar base + Becker Park; the Passaic / Willow Brook **western-edge** localized FEMA SFHA; mature street-tree
  canopy; upland Riker Hill outside the floodplain — and NO South Mountain Reservation); the **housing stock** (post-war
  split-levels, raised ranches, bi-levels, center-hall colonials + newer luxury/teardown-rebuild; ~88.9% owner-occupied);
  the **verified neighborhoods** (Riker Hill; Collins and Burnet Hill; Hillside/Broadlawn/Bel Air; Laurel Hills and
  Chestnut Hill; Livingston Town Center / Livingston Mall area; Route 10 corridor; Eisenhower Parkway office/medical parks;
  South Livingston Avenue town center; Cooperman Barnabas Medical Center); the **permit office** at **357 South Livingston
  Avenue.**
- **AVOID importing Millburn's distinct anchors** (do NOT write these into a Livingston combo): Millburn's **BINDING but
  NARROW COA** — the Township of Millburn Historic Preservation ordinance (Article 8, enabled by MLUL N.J.S.A.
  40:55D-107), requiring a Certificate of Appropriateness before permit-triggering roof work ONLY on an individually
  designated landmark OR inside the locally designated **Wyoming** or **Short Hills Park** historic district (NOT
  township-wide); the Township of **Millburn Building Department** as the office (the committed Millburn city page prints
  **NO street address** — do NOT invent one, and do NOT attach Livingston's 357 South Livingston Avenue to Millburn); the
  **South Mountain Reservation** (~2,112 ac) and **Watchung-ridge** terrain; the **downtown-village Rahway-River
  commercial flood** (Floyd/Irene/Ida); the **Wyoming + Short Hills Park** historic districts; **Short Hills Village**
  (pending/recently-designated third district); **Paper Mill Playhouse** + **Cora Hartshorn Arboretum**; and Millburn's
  **estate slate / copper / tile / cedar** housing stock and "Short Hills" estate framing.
- For the **process-heavy / low-localizability** services — **roof-thermal-imaging-inspections, storm-damage-roof-repair,
  commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection, insurance-roof-replacement,
  roof-overlay-installation** — LEAD with the Livingston situation (Route 10 / Eisenhower Parkway / Cooperman Barnabas
  low-slope decks; mature-canopy branch impact and valley/gutter debris; post-war split-level plank-deck tear-offs and
  addition-transition flashing; western-edge Passaic / Willow Brook drainage; owner-occupant documentation) before the
  standardized facts.
**Preserve every cited standard/cost fact** (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize/
InterNACHI figures) — differentiation is about which local facts lead, not about changing the sourced figures.

## G. Output format
Write the **complete file** to `<service>.snippet.ts` (in `.planning/content-system/combo-batch11-affluent-suburban/livingston/`)
— keep the exact first line `import type { ComboContent } from '../schema';` and the EXACT
`export const <ExportName>: ComboContent = {` you are given (so `livingston/index.ts` imports stay valid). Keep
`serviceId` and `cityId: 'livingston'` unchanged. **Omit the `definition` field.** Also write a short `<service>.md`
noting the de-fabs you cleared + the named sources you used. Voice/structure exemplar: the committed **Orange combo
`src/data/combo-content/orange/roof-repair.ts`** (same answer-first + entity-grounded shape — localize, do NOT copy
Orange's geography or COA) and the committed Livingston **city page** `src/data/city-content/affluent-suburban.ts`
(cityId 'livingston') for verified Livingston geography/voice. The finished file lands at
`src/data/combo-content/livingston/<service>.ts`.
