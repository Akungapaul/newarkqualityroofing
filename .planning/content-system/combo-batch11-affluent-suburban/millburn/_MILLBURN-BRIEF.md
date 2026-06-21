# Millburn Combo Author Brief — Combo Batch 11 (entity-grounding inherited)

You are rewriting ONE Millburn service×city combo page (`src/data/combo-content/millburn/<service>.ts`)
**answer-first**, **de-fabbed**, and **entity-grounded**. The combo = the intersection of a service (already
rewritten answer-first at `src/data/service-content/<categoryFile>.ts`) and Millburn (facts below).
**Localize the finished service content to Millburn** — do not invent a new service story.

> Millburn = **Township of Millburn** (including the **Short Hills** section), Essex County, NJ — an affluent
> ~9.33-sq-mi township in southwestern Essex County with a deep stock of **early-20th-century high-style homes** —
> Tudor Revival, Arts-and-Crafts, and estate homes in **natural slate, copper, clay/concrete tile, and cedar** — that
> abut the **South Mountain Reservation** in the wooded Watchung foothills, plus the **downtown Millburn village** (on
> the Rahway River) and the **Mall at Short Hills** commercial cores. Frame the audience as **owner-occupants of an
> affluent, architect-built single-family suburb** with a deep slate/copper/tile/cedar premium, plus a secondary
> downtown-village / Short-Hills-mall commercial-storefront angle. The single biggest Millburn-specific fact for COA
> framing: **Millburn HAS a binding local Historic Preservation Commission and ordinance (the Township of Millburn
> Historic Preservation ordinance, Article 8, enabled by MLUL N.J.S.A. 40:55D-107) that issues a Certificate of
> Appropriateness before permit-triggering exterior/roof work — BUT only on an individually designated landmark OR
> inside the locally designated Wyoming or Short Hills Park historic district, NOT township-wide.** This is **BINDING
> but NARROW**: most Millburn and Short Hills homes need no HPC review; the COA is the HPC's exterior-design approval,
> SEPARATE from the building permit; and a detached 1–2-family reroof stays N.J.A.C. 5:23-2.7 ordinary maintenance even
> where a COA applies. This is the OPPOSITE of Livingston (NO binding local COA), and unlike Maplewood's framework-only
> Register-listing or South Orange's binding Montrose-Park / Chapter-185 gate — Millburn's binding COA is real but
> tied to **two named districts + designated landmarks only.**

---

## 0. ENTITY-GROUNDING (read first — it changes directAnswer + credentials)
This batch bakes the site-wide entity-grounding pattern into the combos from the start (like Irvington, Bloomfield,
Belleville, and Nutley did).

1. **`directAnswer` is entity-grounded** — author it in this exact shape (gold exemplars:
   `src/data/combo-content/orange/roof-repair.ts` and the committed Millburn CITY page
   `src/data/city-content/affluent-suburban.ts`, cityId 'millburn'):
   > `**Newark Quality Roofing is a roofing contractor providing {service} across Millburn, New Jersey, and Essex County, {1–2 city-specific scope clauses}** … as a registered New Jersey Home Improvement Contractor.`
   - The **bolded span** (from "Newark Quality Roofing" through the scope clauses) must be **≤40 words** — end the
     bold before the credential tail if needed. The credential tail "as a registered New Jersey Home Improvement
     Contractor." is OUTSIDE the bold.
   - Establish **"Millburn, New Jersey"** (the state, spelled out) and **"roofing contractor"** as the descriptor.
   - This answers the page H1 "Who Provides {Service} in Millburn?". No modality.
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
(H1 "Who Provides {Service} in Millburn?", later H2 "What {Service} Is Available in Millburn?") — **do NOT write
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
   to Millburn's building stock** (figure-free; the entity definition is the separate spliced block — do not
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
   `[Montclair](/storm-damage-roof-repair-montclair-nj)`. The committed Newark/Orange/Irvington/Bloomfield/Belleville/Nutley
   combos carry ZERO inline links — match that. No synthesized superlatives.
6. **No price in any prose lead.** Pricing lives ONLY in the `pricing` field (see §E) and the cost FAQ.

## C. Millburn load-bearing facts (carry verbatim where used; source = cities-batchE/millburn.md + the committed Millburn city page `src/data/city-content/affluent-suburban.ts`, cityId 'millburn')
- **Permit office:** the **Township of Millburn Building Department**. The committed city page prints **NO street
  address** for it — do **NOT** invent one, and do **NOT** name a Construction Official, director, or fee schedule.
- **Reroof permit rule (statewide UCC — identical to every prior city):** a **detached one- or two-family reroof —
  including a full tear-off and re-cover — is "ordinary maintenance" under N.J.A.C. 5:23-2.7 and requires NO
  construction permit, no inspection, and no notice.** A permit IS required on **commercial, multi-family, or
  attached** buildings (the **25% rule**: repairing >25% of total roof area in a 12-month period) and any structural
  roof work; recover-vs-tear-off limits follow the **Rehab Subcode, N.J.A.C. 5:23-6.4**. The downtown Millburn village
  storefronts and the Mall at Short Hills are the natural place this commercial path applies. **File the commercial
  permit with the Township of Millburn Building Department.**
- **Historic = BINDING but NARROW COA (KEY — Wyoming / Short Hills Park districts or a designated landmark only).**
  Millburn **HAS** a binding local Historic Preservation Commission and ordinance — the **Township of Millburn Historic
  Preservation ordinance, Article 8, enabled by MLUL N.J.S.A. 40:55D-107** — that issues a **Certificate of
  Appropriateness** before permit-triggering exterior/roof work. BUT the COA applies **ONLY** on an **individually
  designated landmark** OR inside the **locally designated Wyoming Historic District or Short Hills Park Historic
  District — NOT township-wide.** Frame exactly:
  > *"Most Millburn and Short Hills homes need no Historic Preservation Commission review, but a designated landmark or
  > a property inside the Wyoming or Short Hills Park historic district requires a Certificate of Appropriateness before
  > permit-triggering roof work. The Township of Millburn Historic Preservation ordinance names roof repairs or
  > replacement, and a Certificate of Appropriateness is the Commission's exterior-design approval, separate from the
  > building permit, so a detached one- or two-family reroof stays N.J.A.C. 5:23-2.7 ordinary maintenance even where the
  > Certificate of Appropriateness applies. Short Hills Village is a recently designated or pending third historic
  > district; a property there is checked against current designation status. Per the National Park Service, National
  > Register listing alone places no restriction on a private owner, so the Paper Mill Playhouse and Cora Hartshorn
  > Arboretum impose no roofing gate on a neighboring home."*
  Rules:
  - **Assert the COA ONLY for the two named districts (Wyoming, Short Hills Park) + individually designated landmarks.**
    NEVER township-wide. NEVER "because of a National Register listing." Indicative present ("requires," "is checked");
    NO `can`/`may`/modal hedge in the declarative.
  - **Short Hills Village = recently designated or pending THIRD district** — frame as "checked against current
    designation status," neither asserted nor denied.
  - **The Paper Mill Playhouse and the Cora Hartshorn Arboretum are Register/institutional sites, NOT homeowner COA
    gates** — per the National Park Service, Register listing imposes no private restriction.
  - **Do NOT** import Maplewood's framework-only Register framing, South Orange's Montrose-Park / Chapter-185 framing,
    Bloomfield's Chapter-302 Property List, Nutley's Chapter-410 Third-River district, or Livingston's NO-COA position.
  - State the COA framework where the historic angle arises (historic-roof-restoration, slate/tile/cedar-shake,
    custom-roof-design-consultation, full-roof-tear-off, slate/tile/metal replacement). A COA, where it applies, is a
    **SEPARATE approval from the building permit.**
- **Housing stock:** **affluent**, with a deep stock of **early-20th-century high-style homes** — **Tudor Revival,
  Arts-and-Crafts, and estate homes** in **natural slate, copper, clay/concrete tile, and cedar** (the
  slate/copper/tile/cedar premium drives the residential roofing market) — concentrated in the **Short Hills** section,
  plus Colonial Revivals, downtown-village older homes, and contemporary luxury construction. The **downtown Millburn
  village** (Millburn Avenue retail on the Rahway River) and the **Mall at Short Hills** carry the commercial cores.
  Frame wealth **QUALITATIVELY** ("deep stock of early-20th-century high-style homes / Short Hills estates"); do **NOT**
  publish a population/area integer, and do **NOT** print the top-coded **median income ($250,001)** or the ACS
  **median home value ($1.37M)** literals. The older high-style stock → slate/tile/copper period detailing, aging
  valley/chimney/wall flashing, deteriorated sheathing discovered at tear-off; the downtown village / Short-Hills-mall
  storefronts → EPDM/TPO/mod-bit low-slope membrane.
- **Neighborhoods / sections (VERIFIED ONLY — the ONLY ones any combo may name; drop anything not on this list):**
  **Short Hills** (the **Short Hills Park Historic District**, the **Mall at Short Hills**); **Wyoming** (the **Wyoming
  Historic District**, **Wyoming Presbyterian Church**); the **downtown Millburn village** (Millburn Avenue retail on
  the Rahway River); the **Cora Hartshorn Arboretum**; and the **Paper Mill Playhouse**. Describe other areas
  qualitatively. **DROP** any street/section NOT above — the CURRENT files FABRICATE "Old Short Hills Road," "White Oak
  Ridge," "Glenwood," "Knollwood," "Merrywood," "Mountaintop," "Country Club," "Old Short Hills Park," and similar; do
  **NOT** carry them. Do **NOT** publish a fabricated individual-landmark list.
- **Geography (HARD guardrails):**
  - Millburn (including the Short Hills section) is an affluent **~9.33-sq-mi** township in **southwestern Essex County**
    that **ABUTS the South Mountain Reservation** — a roughly **2,112-acre** Essex County reservation **between the First
    and Second Watchung ridges**, per **Essex County Parks**. **South Mountain is MILLBURN's reservation, never
    Livingston's.** It presses heavy canopy against Millburn's wooded estate lots → leaf/branch debris in valleys and
    gutters, branch impact in nor'easters/summer storms, shade-driven moss/algae on north slopes. Keep **QUALITATIVE.**
  - The **Watchung-foothills ridge terrain** on the **Short Hills side** holds snow **marginally longer** —
    **QUALITATIVE only.** There is **NO Millburn-specific elevation/snow/wind number**; all weather figures use the
    shared NOAA EWR baseline.
  - The **downtown Millburn village sits on the Rahway River and has flash-flooded** (Hurricane Floyd 1999, Hurricane
    Irene 2011, the remnants of Hurricane Ida 2021). Frame this **ONLY** as a **DOWNTOWN low-slope COMMERCIAL drainage
    stressor** (positive slope-to-drain + parapet/scupper/downspout flashing). **NEVER** a basement/interior,
    township-wide, or Short-Hills-residential claim. Write **"the Rahway River"** — **no branch.**
  - The **heavy oak/maple canopy** over the Short Hills estate lots and the **Cora Hartshorn Arboretum** is the
    **defining storm branch-impact stressor.** Keep QUALITATIVE (no canopy-% figure).
  - **RESERVATION / FLOODPLAIN GUARDRAIL MATRIX (the cross-city contamination guard — never violate it):**
    - **South Mountain Reservation (~2,112 ac, between the First and Second Watchung ridges) = MILLBURN only.**
      Livingston borders NO large Essex County reservation.
    - Livingston's open space = **West Essex Park** (~1,360 ac Passaic-River wetlands greenway), **Riker Hill Art Park**
      (42 ac, a former Nike radar base), and **Becker Park.** **NEVER attach West Essex Park / Riker Hill / Becker Park
      to Millburn.**
    - The **Passaic-River + Willow Brook floodplain = LIVINGSTON'S western/low-lying edge only** (a localized FEMA
      SFHA). **Millburn has NO Passaic floodplain;** Millburn's only flood feature is the downtown Rahway-River village
      (commercial drainage only).
    - **Walter Kidde Dinosaur Park / Riker Hill Fossil Site = ROSELAND**, never Livingston.
    - **No city-specific elevation/snow/wind number anywhere;** the Watchung-ridge "marginally cooler/snowier"
      (Millburn) stays QUALITATIVE on the shared EWR baseline.
- **Climate (shared EWR baseline, HEDGED — identical to every prior city):** ~31.5 in/yr snow; nor'easters Oct–April;
  ~25–30 thunderstorms/yr; ground snow load **Pg ~25 psf** and **~110–115 mph ASCE 7-16** design wind kept **HEDGED**
  (not Essex-confirmed). **BAN every city-specific degree/gust/elevation number** (no elevation exception in this batch;
  the ONLY named-sourced acreage figure attributable to Millburn is South Mountain Reservation ~2,112 ac). No distinct
  Millburn microclimate number.
- **UNVERIFIED — never publish:** any population/area integer (9.33 sq mi held qualitative), the top-coded median income
  ($250,001) or median home value ($1.37M) literals, an exact pre-1940/pre-1950 %, a median year built, the
  Construction Official's name, any individually designated landmark list, COA fees/fines, any street/section beyond the
  verified list above, any FEMA flood-zone figure, any Millburn-specific elevation/snow/wind number, any West Essex
  Park / Riker Hill / Passaic-River feature (those are Livingston), any basement/interior or township-wide Rahway flood
  claim, any river "branch," and the fabricated estate specifics in the current files (see §D).

## D. De-fab targets present in the CURRENT combo files (fix all)
The current Millburn combos are among the most fabricated in the project — verify your per-combo file at
`src/data/combo-content/millburn/<service>.ts` and strip every de-fab found there. Known fabrications:
- `overview[0]` opens "Newark Quality Roofing delivers expert {service} in Millburn — with prices starting from $X–$Y
  and free estimates available today" → **delete the price + hype**, replace with an answer-first NQR-applied,
  entity-grounded lead (bold the named topics; figure-free).
- **Pricing range** is an OLD invented tier (`$350–$1,500`, `$500–$3,000`, etc.) → replace with the sourced default for
  the service type (§E): repair & maintenance `$400–$1,000`; replacement/installation `$10,000–$25,000`.
- **`whyChooseUs`** templated trust lines — "NJ licensed, GAF Certified — 15+ years protecting Essex County…",
  "Premium materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response" →
  **de-fab** to clean factual reasons (§E), using the **registered HIC / fully insured** framing.
- **`conversionHooks.urgencyNote`** "Early action saves thousands" → factual, no fabricated savings.
- **Inline markdown self-links** like `[storm damage roof repair](/storm-damage-roof-repair)`,
  `[Montclair](/storm-damage-roof-repair-montclair-nj)`, `[Bloomfield](/storm-damage-roof-repair-bloomfield-nj)` →
  strip the link syntax (keep words as plain text; the committed siblings carry zero links).
- **Fabricated Millburn-specific estate prose in the current files — DELETE/CORRECT ALL of it:**
  - **Fabricated streets/sections:** "Old Short Hills Road," "White Oak Ridge," "Glenwood," "Knollwood," "Merrywood,"
    "Mountaintop," "Country Club," "Old Short Hills Park," "South Mountain (section)." Use only the §C verified list.
  - **Township-wide / wrong-district COA claims** ("Short Hills Historic District," "individually designated properties
    throughout the township," any assertion that a COA applies township-wide) → bind it to **Wyoming / Short Hills Park
    + designated landmarks only** (§C), and treat the **Paper Mill Playhouse / Cora Hartshorn Arboretum as NOT homeowner
    gates.**
  - **Named slate-quarry inventory / salvage fictions:** "Vermont unfading green," "Buckingham black," "Pennsylvania
    gray slates," "we maintain an inventory of salvaged slates," "salvage yards / quarry relationships," "$500 per
    square installed slate," "1924 / 4,200 sq ft," "ColorGard," "80-mil TPO Grand Manor." All fabricated → DELETE. Keep
    slate restoration QUALITATIVE and source-pinned (NPS Brief 29; Secretary of the Interior's Standard 6).
  - **Fabricated estate operations:** "dedicated slate restoration crew," "in-house copper fabrication / sheet metal
    shop," "quarry-direct," "20-year NDL / Golden Pledge," "multi-structure estate assessment" (carriage houses, guest
    quarters, pool pavilions), "senior project manager walks the entire property," "dedicated walkways over landscape
    beds," "specimen plantings / irrigation." → DELETE; NQR has no such fabricated apparatus.
  - **Fabricated relationships / programs:** "architect-driven renovation culture," "designated architects," "landscape
    architects," "HNW insurance carriers," "six-figure claim settlements," "matching material provisions" framed as a
    Millburn-specific carrier program. Insurance facts stay generic + source-pinned (Insurance Information Institute
    wind/hail 2.8%; storm/falling-branch damage documented with timestamped photos for the adjuster).
  - **Wrong river / flood framing:** any basement/interior or township-wide Rahway flood claim, any river "branch" →
    downtown low-slope **COMMERCIAL** drainage only; write **"the Rahway River."**
  - **Every fabricated NQR warranty term** → DELETE.
- **Unsourced hard numbers** (decade-specific lifespans without the chart, the "25–30%"/"30%" repair-vs-replace rule)
  → name-source from the packs (the 30% rule = Kellow/Modernize/Josten per materials-economics §8; lifespans = the
  InterNACHI life-expectancy chart) or **de-quantify**.
- **Preserve** the genuinely correct Millburn texture (early-20th-century high-style Tudor/Arts-and-Crafts/estate stock
  in slate/copper/tile/cedar; flashing-first leak diagnosis; reservation-edge canopy debris; downtown-village /
  Mall-at-Short-Hills low-slope membrane; the binding Wyoming / Short-Hills-Park COA where it applies) — restructure it
  answer-first and source-pinned, do not discard it.

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
- A **natural slate, copper, or tile roof on a Short Hills estate costs more than asphalt** — slate installed at roughly
  **$10–$30 per square foot, per NJ roofing guides** — may be cited in the cost FAQ / replacement `note`, named-sourced.
- The **cost FAQ** answers with the same range + free-written-estimate framing; never a fabricated guarantee.

**`whyChooseUs`** (raw, no `**`) — replace the templated trust line with 3–4 of:
- "A registered New Jersey Home Improvement Contractor, fully insured."
- "Local Essex County crew familiar with Millburn's early-20th-century high-style homes and Short Hills estates in slate, copper, tile, and cedar."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials, NO "licensed.")

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in
Millburn."). `urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural
water damage.").

## F. Differentiation directive (pre-empt cross-city overlap — ESPECIALLY with Livingston, the sibling in THIS batch)
**Livingston and Millburn are the two affluent-suburban cities in Combo Batch 11 — Livingston is the primary
differentiate target.** Lead with the facts that are UNIQUE to Millburn so the page never mirrors Livingston or the
committed Newark/East Orange/Orange/Irvington/Bloomfield/Belleville/Nutley/Maplewood/South Orange versions:
- **Millburn-DISTINCT anchors to FOREGROUND:** the **binding but NARROW COA** (Township of Millburn Historic
  Preservation ordinance, Article 8, MLUL N.J.S.A. 40:55D-107 — a Certificate of Appropriateness ONLY in the **Wyoming
  or Short Hills Park historic district** or on a **designated landmark**, NOT township-wide; Short Hills Village =
  recently designated/pending third district; Paper Mill Playhouse + Cora Hartshorn Arboretum = NOT homeowner gates);
  the **South Mountain Reservation** (~2,112 ac, between the First and Second Watchung ridges) that **Millburn ABUTS**;
  the **Watchung-foothills ridge terrain** on the **Short Hills** side (marginally cooler/snowier, qualitative); the
  **heavy oak/maple canopy + Cora Hartshorn Arboretum** branch-impact stressor; the **downtown Millburn village on the
  Rahway River** (downtown commercial drainage; Floyd/Irene/Ida) + the **Mall at Short Hills**; the deep stock of
  **early-20th-century high-style homes — Tudor Revival, Arts-and-Crafts, estate homes in natural slate, copper, tile,
  and cedar;** the **Township of Millburn Building Department** (NO street address).
- **AVOID importing Livingston's distinct anchors** (do NOT write these into a Millburn combo): **NO binding local COA**
  (Livingston's Master Plan only recommends considering preservation; code §170-3 + the ~38 Master-Plan "historic sites"
  are planning IDs, not gates; the Force Homestead is a township-owned Register-listed museum, not a gate); the
  **Township of Livingston Building Department at 357 South Livingston Avenue**; **NO large reservation** — Livingston's
  open space is **West Essex Park** (~1,360 ac Passaic-River wetlands greenway), **Riker Hill Art Park** (42 ac, former
  Nike radar base), and **Becker Park**; the **western-edge Passaic-River / Willow-Brook floodplain (FEMA SFHA)**; the
  **Route 10 / Eisenhower Parkway / Cooperman Barnabas Medical Center commercial-medical corridor**; and the post-war
  **split-levels / raised-ranches** housing stock. None of those belong on a Millburn page.
- For the **process-heavy / low-localizability** services — **roof-thermal-imaging-inspections, storm-damage-roof-repair,
  commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection, insurance-roof-replacement,
  roof-overlay-installation** — LEAD with the Millburn situation (downtown-village / Mall-at-Short-Hills storefronts;
  reservation-edge Short Hills branch impact; slate/copper/tile estate tear-offs; owner-occupant documentation) before
  the standardized facts.
**Preserve every cited standard/cost fact** (ASTM C1153, NRCA cadence, IRC/UCC sections, NPS Preservation Briefs 19/29,
Secretary of the Interior's Standard 6, HomeAdvisor/Modernize/InterNACHI figures) — differentiation is about which
local facts lead, not about changing the sourced figures.

## G. Output format
Write the **complete file** to `<service>.snippet.ts` (in `.planning/content-system/combo-batch11-affluent-suburban/millburn/`)
— keep the exact first line `import type { ComboContent } from '../schema';` and the EXACT
`export const <ExportName>: ComboContent = {` you are given (so `millburn/index.ts` imports stay valid). Keep
`serviceId` and `cityId: 'millburn'` unchanged. **Omit the `definition` field.** Also write a short `<service>.md`
noting the de-fabs you cleared + the named sources you used. Voice/structure exemplar: the committed **Orange combo
`src/data/combo-content/orange/roof-repair.ts`** (same answer-first + entity-grounded shape — localize, do NOT copy
Orange's geography or COA) and the committed Millburn **city page** `src/data/city-content/affluent-suburban.ts`
(cityId 'millburn') for verified Millburn geography/voice/COA. The finished file lands at
`src/data/combo-content/millburn/<service>.ts`.
