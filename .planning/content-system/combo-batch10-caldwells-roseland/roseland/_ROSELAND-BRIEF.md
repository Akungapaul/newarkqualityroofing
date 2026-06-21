# Roseland Combo Author Brief — Combo Batch 10 (entity-grounding inherited)

You are rewriting ONE Roseland service×city combo page (`src/data/combo-content/roseland/<service>.ts`)
**answer-first**, **de-fabbed**, and **entity-grounded**. The combo = the intersection of a service (already
rewritten answer-first at `src/data/service-content/<categoryFile>.ts`) and Roseland (facts below).
**Localize the finished service content to Roseland** — do not invent a new service story.

> Roseland = **Borough of Roseland**, Essex County, NJ — an affluent, predominantly owner-occupied (~68%)
> far-western-Essex suburban borough of **single-family postwar homes** (colonials, ranches, split-levels, Capes)
> under a **mature tree canopy**, PLUS a recognized **office-park corridor** (Eisenhower Parkway / Becker Farm Road /
> Livingston Avenue, ~2,922 jobs) carrying **flat / low-slope commercial roofs**, with a genuine **Passaic-River
> floodplain confined to its western / riverine edge**. Frame the audience as **owner-occupants of a mature postwar
> single-family suburb**, with a real, **co-lead office-park commercial-roof** angle. The single biggest
> Roseland-specific fact for COA framing: **Roseland HAS a real on-the-books local historic ordinance — the
> Landmarks and Historic District Commission at Chapter 30, Article IX — but NO property, site, or district is
> confirmed to have been locally DESIGNATED, and the ordinance requires OWNER CONSENT (§30-901.1) before any residence
> can be designated, so NO Roseland homeowner is currently subject to a Certificate of Appropriateness.** This is
> distinct from every other batch city: the COA ordinance EXISTS (unlike North Caldwell / Essex Fells / Fairfield) but
> binds NO ONE (unlike Caldwell's two designated landmarks). Assert it only as a **conditional** gate — "the binding
> Certificate-of-Appropriateness gate applies only to locally designated properties; none are confirmed, so no
> homeowner is subject to it absent a designation."

---

## 0. ENTITY-GROUNDING (read first — it changes directAnswer + credentials)
This batch bakes the site-wide entity-grounding pattern into the combos from the start (like Irvington, Bloomfield,
Belleville, Nutley, Maplewood, and South Orange did).

1. **`directAnswer` is entity-grounded** — author it in this exact shape (gold exemplars:
   `src/data/combo-content/orange/roof-repair.ts` and the committed Roseland CITY page
   `src/data/city-content/caldwells-roseland.ts`, cityId 'roseland'):
   > `**Newark Quality Roofing is a roofing contractor providing {service} across Roseland, New Jersey, and Essex County, {1–2 city-specific scope clauses}** … as a registered New Jersey Home Improvement Contractor.`
   - The **bolded span** (from "Newark Quality Roofing" through the scope clauses) must be **≤40 words** — end the
     bold before the credential tail if needed. The credential tail "as a registered New Jersey Home Improvement
     Contractor." is OUTSIDE the bold.
   - Establish **"Roseland, New Jersey"** (the state, spelled out) and **"roofing contractor"** as the descriptor.
   - This answers the page H1 "Who Provides {Service} in Roseland?". No modality.
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
(H1 "Who Provides {Service} in Roseland?", later H2 "What {Service} Is Available in Roseland?") — **do NOT write
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
   to Roseland's building stock** (figure-free; the entity definition is the separate spliced block — do not
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
   `[Caldwell](/roof-repair-caldwell-nj)`. The committed Newark/Orange/Irvington/Bloomfield/Belleville/Nutley/Maplewood/
   South-Orange/West-Essex combos carry ZERO inline links — match that. No synthesized superlatives.
6. **No price in any prose lead.** Pricing lives ONLY in the `pricing` field (see §E) and the cost FAQ.

## C. Roseland load-bearing facts (carry verbatim where used; source = .planning/content-system/cities-batchD/roseland.md + CITY-FACTS-caldwells-roseland.md, and the committed Roseland city page `src/data/city-content/caldwells-roseland.ts`, cityId 'roseland')
- **Permit office:** the **Borough of Roseland construction/permit office at 300 Eagle Rock Avenue** (the DPW
  building — NOT Borough Hall). Use that generic safe phrasing ("the Borough of Roseland construction-code office at
  300 Eagle Rock Avenue"); do **NOT** name a Construction Official, a director, or a fee schedule (the title is in
  flux per Ord. 40-2023 — do not print it). **The CURRENT files say "the Roseland Building Department" — correct it to
  "the Borough of Roseland construction-code office at 300 Eagle Rock Avenue."**
- **Reroof permit rule (statewide UCC — identical to every prior city):** a **detached one- or two-family reroof —
  including a full tear-off and re-cover — is "ordinary maintenance" under N.J.A.C. 5:23-2.7 and requires NO
  construction permit, no inspection, and no notice.** A permit IS required on **commercial, multi-family, or
  attached** buildings (the **25% rule**: repairing >25% of total roof area in a 12-month period) and any structural
  roof work; recover-vs-tear-off limits follow the **Rehab Subcode, N.J.A.C. 5:23-6.4**. The Eisenhower Parkway /
  Becker Farm Road / Livingston Avenue office-park buildings are the natural place this commercial permit path applies.
- **Historic = COA ORDINANCE EXISTS but NO designations → NO HOMEOWNER SUBJECT (KEY — distinct from every batch city).**
  Roseland **HAS** a real, on-the-books local ordinance: the **Roseland Landmarks and Historic District Commission** at
  **Chapter 30 (Land Development), Article IX (§§30-901 to 30-910)**, with the **Certificate-of-Appropriateness process
  for "major" alterations at §30-909** — this is NOT merely advisory. BUT **no source confirms any specific local
  landmark, landmark site, or historic district has actually been DESIGNATED**, and **§30-901.1 requires OWNER CONSENT
  before any residence can be designated**. So the binding COA gate applies **ONLY to locally designated properties,
  and none are confirmed — no homeowner is subject to it unless their property has been locally designated.** Frame
  exactly, and conditionally:
  > *"Roseland maintains a Landmarks and Historic District Commission and a Certificate of Appropriateness process for
  > major alterations to designated properties under Chapter 30, Article IX. The binding Certificate-of-Appropriateness
  > gate applies only to locally designated properties; no specific Roseland landmark, site, or district is confirmed to
  > have been designated, and the ordinance requires owner consent before a residence can be designated, so no Roseland
  > homeowner is subject to a Certificate of Appropriateness absent a designation."*
  Rules:
  - **Do NOT assert that any specific Roseland homeowner currently needs a COA.** The ordinance exists; no property is
    confirmed designated; owner consent (§30-901.1) is required to designate a residence. Conditional, indicative
    present ("applies only to locally designated properties… none are confirmed"); NO `can`/`may`/modal hedge in the
    declarative.
  - The **Williams-Harrison House** (126 Eagle Rock Avenue; NJ and National Register + a Roseland Historical Society
    museum) is **heritage COLOR only, NOT a homeowner COA gate** — per the National Park Service, a Register listing
    alone places no restriction on a private property owner. Do **NOT** treat it as a COA trigger.
  - **Do NOT** import any other batch city's gate: Caldwell's two individually designated Chapter-130 landmarks (the
    Caldwell Public Library + one unnamed), North Caldwell's advisory/survey-only HPC, Essex Fells' "no HPC, no
    ordinance," or Fairfield's advisory/educational HPC. And NEVER reintroduce the "HD-1/HD-2/HD-3 downtown
    historic-district overlay" — that is Caldwell, **Idaho**.
  - State the COA framework where the historic angle arises (historic-roof-restoration, slate/tile/cedar-shake,
    custom-roof-design-consultation). A COA, where it ever applies, is a **SEPARATE approval from the building permit.**
- **Housing stock:** affluent, **predominantly owner-occupied (~68%)** — a built-out **single-family postwar suburban
  stock** (colonials, ranches, split-levels, Capes), plus later infill and some townhome/condo product (e.g. Roseland
  Green / Avalon-branded near the office corridor), PLUS a real **office-park employment base** (~2,922 jobs; **ADP**
  and **Lowenstein Sandler** are firm anchors) carrying **flat / low-slope commercial roofs**. The committed city page
  publishes **67.6% owner-occupied across roughly 2,600 housing units, per the U.S. Census Bureau** — you MAY keep that
  figure, named-sourced, in the residential who/what framing; do **NOT** print a population integer or a pre-1940 %.
  The postwar single-family stock → asphalt-shingle re-roofs, aging chimney/wall/valley flashing, plank/deteriorated
  sheathing discovered at tear-off; the office-park corridor → EPDM/TPO/modified-bitumen low-slope membrane and the
  commercial permit path. Frame house types qualitatively.
- **Neighborhoods / sections (VERIFIED ONLY — these are the ONLY ones any combo may name):** **Eagle Rock Avenue** (the
  permit office at 300 Eagle Rock Avenue; the Williams-Harrison House sits at the Harrison Avenue juncture),
  **Eisenhower Parkway**, **Harrison Avenue**, **Laurel Avenue**, **Livingston Avenue**, **Passaic Avenue**, the
  **Becker Farm Road office-park corridor**, and **Becker Park**. **No distinct named residential neighborhoods are
  sourced** — describe residential areas by **corridor/area** (e.g. "the single-family blocks off Harrison Avenue,"
  "the Livingston Avenue residential edge," "the tree-shaded streets near Becker Park"). **DROP** any street/section
  NOT on this list — the CURRENT files invent split-level "signature" geography and place Roseland on the "Watchung
  ridgeline"; do **NOT** carry those.
- **Geography (HARD guardrails):**
  - Roseland is a **far-western Essex County borough whose WESTERN municipal boundary is the Passaic River** (the
    border with East Hanover, Morris County). Per its Master Plan **~30% of the borough is environmentally
    constrained**, including **roughly 459 acres in the FEMA Special Flood Hazard Area**, with part of **West Essex
    Park** (a Passaic-River wetland preserve) on the western edge — frame this floodplain as a roof-relevant
    **DRAINAGE / storm stressor on the WESTERN / riverine side ONLY**, never a whole-borough or basement-flood claim.
    Explicitly note that "the office corridors and most neighborhoods sit on higher developed ground." Keep
    QUALITATIVE except the named-sourced 459-acre SFHA figure.
  - Roseland borders **NO Essex County reservation.** It contains county **PARKS** — **most of Becker Park** and
    **part of West Essex Park** — **never "reservations."** The **West Essex Trail** is a linear rail-trail, not a
    reservation, and does NOT run through Fairfield.
  - Roseland does **NOT** border Fairfield (they meet only via West Essex Park). Borders to name: **West Caldwell,
    Essex Fells, West Orange, Livingston**, with the **Passaic River** to the west.
  - Roseland is **NOT uniformly upland** (it has steep slopes AND a low riverine edge), so assert **NO Roseland-specific
    elevation/snow/wind number.** Do **NOT** place Roseland on the "Watchung ridge / eastern Watchung slope" (the
    CURRENT files do — DELETE it).
  - The **mature oak/maple street-tree canopy** over its single-family neighborhoods is the **defining residential roof
    stressor** (leaf/branch debris in valleys & gutters, branch impact in nor'easters/summer storms, shade-driven
    moss/algae on north slopes). Keep QUALITATIVE (no canopy-% figure).
  - The **Eisenhower Parkway / Becker Farm Road / Livingston Avenue office-park corridor** carries the **flat /
    low-slope commercial roofs** — this is a genuine **co-lead** market, not a footnote.
- **RESERVATION / FLOODPLAIN GUARDRAIL MATRIX (cross-city contamination guard — never violate):**
  - **Hilltop Reservation** (~284 ac, Second Watchung) = **North Caldwell only** in this batch. Caldwell, Essex Fells,
    Fairfield, and **Roseland border NO large Essex County reservation.**
  - **Passaic-River floodplain** = **Fairfield** (the defining floodplain city) + **Roseland's WESTERN / riverine edge
    only.** Caldwell, North Caldwell, and Essex Fells are UPLAND — NEVER attach floodplain / FEMA-flood-zone / Great
    Piece Meadows framing to those three.
  - Roseland contains county **PARKS** (most of Becker Park; part of West Essex Park), **never "reservations."**
  - The ONLY hard elevation fact in this batch is Essex County's **highest point (~691 ft) at the Hilltop in North
    Caldwell** (attribute it; do NOT extrapolate a borough-wide wind/snow figure). Every other elevation/snow/wind
    claim stays QUALITATIVE on the shared EWR baseline.
- **Climate (shared EWR baseline, HEDGED — identical to every prior city):** ~31.5 in/yr snow; nor'easters Oct–April;
  ~25–30 thunderstorms/yr; ground snow load **Pg ~25 psf** and **~110–115 mph ASCE 7-16** design wind kept **HEDGED**
  (per ASCE 7-16 as adopted by the NJ UCC; not Essex-confirmed). **BAN every city-specific degree/gust/elevation
  number** (the ONLY exception is the attributed ~691 ft Essex County high point at the Hilltop, North Caldwell only).
  No distinct Roseland microclimate number.
- **UNVERIFIED — never publish:** any population integer, an exact pre-1940/pre-1950 %, a median year built, the
  Construction Official's name (e.g. the fabricated "Thomas Jacobsen"), the "1,000–1,200 acre" Becker Farm figure, any
  individually designated Roseland landmark list (none confirmed), COA fees/fines, any street/section beyond the
  verified list above, any FEMA flood-zone figure beyond the named-sourced ~459-acre SFHA, any Roseland-specific
  elevation/snow/wind number, the "Watchung ridge / eastern Watchung slope" placement, the fabricated "40–60%
  storm-spike" / "2–4 hour response" / named-quarry slate-inventory claims in the current files, and every fabricated
  NQR warranty term.

## D. De-fab targets present in the CURRENT combo files (fix all)
Catalog the ACTUAL de-fabs in YOUR file at `src/data/combo-content/roseland/<service>.ts` and strip every one. The
patterns below recur across the current Roseland files:
- `overview[0]` opens "Newark Quality Roofing delivers expert {service} in Roseland — with prices starting from $X–$Y
  and free estimates available today" → **delete the price + hype**, replace with an answer-first NQR-applied,
  entity-grounded lead (bold the named topics; figure-free).
- **Pricing range** is an OLD invented tier (`$350–$1,500` on roof-repair; `$500–$3,000` on storm-damage;
  `$15,000–$50,000` on historic-roof-restoration; and similar) → replace with the sourced default for the service type
  (§E): repair & maintenance `$400–$1,000`; replacement/installation `$10,000–$25,000`.
- **`whyChooseUs`** templated trust lines — "NJ licensed, GAF Certified — 15+ years protecting Essex County…",
  "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "Local team that knows
  Roseland — same-day estimates and 24/7 emergency response" → **de-fab** to clean factual reasons (§E), using the
  **registered HIC / fully insured** framing.
- **Roseland-specific FABRICATIONS in the current files — DELETE/CORRECT all of these:**
  - Any assertion that a **Roseland homeowner needs a COA / historic review** (the ordinance EXISTS but no property is
    locally designated, and §30-901.1 requires owner consent → no homeowner is subject to it). NOTE: some current
    files swing the other way and say "Roseland does not have a formal historic preservation commission" — that is ALSO
    wrong. Use the §C conditional framing: the Landmarks and Historic District Commission and the COA process under
    Chapter 30, Article IX EXIST, but the binding gate applies only to locally designated properties, of which none are
    confirmed.
  - Any treatment of the **Williams-Harrison House** as a homeowner COA gate (it is heritage color only, per NPS).
  - Any claim that Roseland **borders Fairfield** (it does not — they meet only via West Essex Park).
  - Any **"reservation"** attribution (Roseland contains county PARKS — Becker Park, part of West Essex Park — not
    reservations).
  - Any placement of Roseland on the **"Watchung ridge / eastern Watchung slope"** ("position along the eastern
    Watchung slope," "Watchung ridgeline," "heavier precipitation than lower-elevation communities") → DELETE; Roseland
    is far-western Essex, NOT a Watchung-ridge town, and carries no Roseland-specific elevation/precipitation number.
  - Any **whole-borough or basement-flood** claim (the floodplain is the WESTERN / riverine edge only; the office
    corridors and most neighborhoods sit on higher developed ground).
  - Any **Roseland-specific elevation/snow/wind number** (use only the HEDGED EWR/ASCE baseline).
  - The **"1,000–1,200 acre" Becker Farm** figure → delete.
  - The named **Construction Official ("Thomas Jacobsen")** → delete; never name a Construction Official.
  - "**Roseland Building Department**" → correct to "the Borough of Roseland construction-code office at 300 Eagle Rock
    Avenue."
  - **ADP / Lowenstein Sandler** used as if NQR clients or as a specific project reference → keep them ONLY as borough
    commercial-corridor heritage color (the corridor "where ADP was long headquartered and Lowenstein Sandler occupies
    a redeveloped headquarters"), never as NQR clients/case studies. Do NOT call ADP a "global headquarters" anchoring
    an NQR project.
  - Fabricated **split-level percentages / "signature challenge" claims** ("account for a significant percentage of our
    Roseland residential repair calls," "the issue affects more homes per block") → de-quantify or delete; split-level
    geometry is fine as a building-stock description, but no invented call-volume/percentage.
  - The "**2–4 hour** response," "we keep materials staged and ready / pre-position tarps," "**40–60% storm-spike**,"
    named-quarry slate inventory ("salvage inventories," "matching the original quarry") framed as an NQR stocking
    claim → DELETE the response-time and stocking/inventory claims; keep generic, factual tarp-and-document storm
    response.
- **`conversionHooks.urgencyNote`** "Don't wait for minor damage to become a major expense. Early action saves
  thousands." → factual, no fabricated savings (e.g. "Addressing roof damage early limits interior and structural
  water damage.").
- **Inline markdown self-links** like `[roof repair](/roof-repair)`, `[commercial roof repair](/commercial-roof-repair)`,
  `[Caldwell](/roof-repair-caldwell-nj)`, `[Livingston](/roof-repair-livingston-nj)`, `[North Caldwell](/storm-damage-roof-repair-north-caldwell-nj)`,
  `[Glen Ridge](/historic-roof-restoration-glen-ridge-nj)`, `[Montclair](/historic-roof-restoration-montclair-nj)`,
  `[Essex Fells](/roof-repair-essex-fells-nj)` → strip the link syntax (keep words as plain text; the committed
  siblings carry zero links).
- **Unsourced hard numbers** (decade-specific lifespans, the "25–30%"/"one-third"/"30%" repair-vs-replace rule,
  ice-and-water "36 inches") → name-source from the packs (the 30% rule = Kellow/Modernize/Josten per
  materials-economics §8; lifespans = the InterNACHI life-expectancy chart; the ice barrier "at least 24 inches inside
  the exterior wall line" = the IRC R905.1.2 ice-barrier provision) or **de-quantify**.
- **Preserve** the genuinely good Roseland texture (postwar single-family stock + plank decking at tear-off; aging
  chimney/wall/valley flashing; the Eisenhower Parkway / Becker Farm Road / Livingston Avenue office-park low-slope
  membrane and commercial permit path; the mature-canopy valley/gutter debris on the single-family streets; the
  western-edge Passaic-River drainage stressor) — restructure it answer-first, do not discard it.

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
- "Local Essex County crew familiar with Roseland's postwar single-family homes and Eisenhower Parkway office-park roofs."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials, NO "licensed.")

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in
Roseland."). `urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural
water damage.").

## F. Differentiation directive (pre-empt cross-city overlap — ESPECIALLY with the four caldwells-roseland siblings in THIS batch)
**The in-archetype caldwells-roseland siblings (Caldwell, North Caldwell, Essex Fells, Fairfield) are the PRIMARY
differentiate target.** Lead with the facts that are UNIQUE to Roseland so the page never mirrors a sibling or the
committed Newark/East Orange/Orange/Irvington/Bloomfield/Belleville/Nutley/Maplewood/South-Orange/West-Orange/
Montclair/Glen-Ridge/Verona/Cedar-Grove versions:
- **Roseland-DISTINCT anchors to FOREGROUND:** the **COA ordinance EXISTS but binds no one** (Chapter 30, Article IX;
  no property locally designated; §30-901.1 owner consent — confirm with the Borough); the **genuine co-lead office-park
  commercial-roof market** along **Eisenhower Parkway / Becker Farm Road / Livingston Avenue** (~2,922 jobs; ADP /
  Lowenstein Sandler as corridor color); the **mature oak/maple canopy** over the **postwar single-family stock**
  (~68% owner-occupied; colonials/ranches/split-levels/Capes); the **Passaic-River floodplain on the WESTERN /
  riverine edge only** (~459-ac FEMA SFHA, West Essex Park) with most of the borough on higher ground; the verified
  neighborhoods (Eagle Rock Avenue, Eisenhower Parkway, Harrison Avenue, Laurel Avenue, Livingston Avenue, Passaic
  Avenue, Becker Farm Road corridor, Becker Park); the **construction-code office at 300 Eagle Rock Avenue.**
- **AVOID importing the OTHER four caldwells-roseland siblings' anchors** (do NOT write these into a Roseland combo):
  - **Caldwell:** NARROW LOCAL COA — **two individually designated landmarks only** (one being the Caldwell Public
    Library; the other unnamed), **no designated district**; the Borough of Caldwell Construction Department at **24
    Smull Avenue** (Borough Hall — NOT Bloomfield Avenue); NO reservation, **upland** (no floodplain); walkable
    Bloomfield Avenue downtown + **Caldwell University**.
  - **North Caldwell:** **NO COA** — advisory/survey-only HPC; the Borough of North Caldwell Construction Department at
    **141 Gould Avenue** (Borough Hall); **Hilltop Reservation** + the **Essex County high point (~691 ft)**, upland,
    large-lot wooded.
  - **Essex Fells:** **NONE** — no HPC, no ordinance, no COA, no Register listing; the Borough of Essex Fells Building
    Department (Building & Zoning) at Borough Hall, **255 Roseland Avenue**; NO reservation, **upland**, no commercial
    district (Bowditch plan), unique tree canopy.
  - **Fairfield:** **NO COA** — advisory/educational HPC; the Building Department, Township of Fairfield, at **230
    Fairfield Road**; NO reservation, **Passaic floodplain (low-lying ~174 ft)** + the **Route 46 / I-80
    commercial-industrial corridor**.
  (Note the two traps: do NOT let Roseland's western-edge floodplain become Fairfield's borough-defining floodplain,
  and do NOT let Roseland's office-park corridor become Fairfield's Route-46/I-80 industrial corridor — Roseland's is a
  corporate **office-park** corridor.)
- For the **process-heavy / low-localizability** services — **roof-thermal-imaging-inspections, storm-damage-roof-repair,
  commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection, insurance-roof-replacement,
  roof-overlay-installation** — LEAD with the Roseland situation (Eisenhower Parkway / Becker Farm Road office-park
  low-slope membrane; mature-canopy branch impact on the single-family streets; postwar plank-deck tear-offs;
  western-edge Passaic drainage; owner-occupant documentation) before the standardized facts.
**Preserve every cited standard/cost fact** (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize/
InterNACHI figures) — differentiation is about which local facts lead, not about changing the sourced figures.

## G. Output format
Write the **complete file** to `<service>.snippet.ts` (in
`.planning/content-system/combo-batch10-caldwells-roseland/roseland/`) — keep the exact first line
`import type { ComboContent } from '../schema';` and the EXACT `export const <ExportName>: ComboContent = {` you are
given (so `src/data/combo-content/roseland/index.ts` imports stay valid). Keep `serviceId` and `cityId: 'roseland'`
unchanged. **Omit the `definition` field.** Also write a short `<service>.md` noting the de-fabs you cleared + the
named sources you used. Voice/structure exemplar: the committed **Orange combo
`src/data/combo-content/orange/roof-repair.ts`** (same answer-first + entity-grounded shape — localize, do NOT copy
Orange's geography or COA) and the committed Roseland **city page** `src/data/city-content/caldwells-roseland.ts`
(cityId 'roseland') for verified Roseland geography/voice.
