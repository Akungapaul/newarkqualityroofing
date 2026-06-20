# Verona Combo Author Brief — Combo Batch 9 (west-essex; entity-grounding inherited)

You are rewriting ONE Verona service×city combo page (`src/data/combo-content/verona/<service>.ts`)
**answer-first**, **de-fabbed**, and **entity-grounded**. The combo = the intersection of a service (already
rewritten answer-first at `src/data/service-content/<categoryFile>.ts`) and Verona (facts below).
**Localize the finished service content to Verona** — do not invent a new service story.

> Verona = **Township of Verona**, Essex County, NJ — a **Watchung valley/upland township** set between the
> **Eagle Rock Reservation (First Watchung)** and the **Hilltop Reservation (Second Watchung)**, with the **Peckman
> River** running through. Its defining stock is **pre-war Colonials, postwar Capes and ranches, and many 1960s–70s
> split-levels** on tree-lined streets, plus the mixed-use storefronts of the **Bloomfield Avenue** and **Pompton
> Avenue (NJ Route 23)** corridors that meet near the central commercial core. Ownership is **strongly homeowner-facing
> (about four-fifths owner-occupied across roughly 6,000 housing units, per the U.S. Census Bureau ACS estimates)** —
> frame the audience as **owner-occupants of a mature, valley/upland single-family township**, with a secondary
> Bloomfield-Avenue / Pompton-Avenue commercial-storefront angle. The single biggest Verona-specific fact for COA
> framing: **Verona's historic mechanism is a NARROW "HPC review," NOT a literal "Certificate of Appropriateness."**
> Under **Zoning Ordinance Chapter 150, Article XXII**, the **Verona Historic Preservation Commission** reviews
> significant exterior changes PRIOR to permit issuance on a **locally designated landmark** — and Verona has
> **exactly TWO designated landmarks** (the **Erie Railroad Freight Shed at 62 Depot Street** and the **Verona United
> Methodist Church**). **In-kind exterior repairs are EXEMPT, and every other home reroofs with no HPC review.** This is
> NARROWER than Glen Ridge's binding district (>90% of the borough), Montclair's four conditional districts, or West
> Orange's ~10 landmarks — and it is NOT "none" like Cedar Grove. **Use "HPC review," NOT "Certificate of
> Appropriateness/COA," for Verona.**

---

## 0. ENTITY-GROUNDING (read first — it changes directAnswer + credentials)
This batch bakes the site-wide entity-grounding pattern into the combos from the start (like Irvington, Bloomfield,
Belleville, Nutley, Maplewood, and South Orange did).

1. **`directAnswer` is entity-grounded** — author it in this exact shape (gold exemplars:
   `src/data/combo-content/orange/roof-repair.ts` and the committed Verona CITY page
   `src/data/city-content/west-essex.ts`, cityId 'verona'):
   > `**Newark Quality Roofing is a roofing contractor providing {service} across Verona, New Jersey, and Essex County, {1–2 city-specific scope clauses}** … as a registered New Jersey Home Improvement Contractor.`
   - The **bolded span** (from "Newark Quality Roofing" through the scope clauses) must be **≤40 words** — end the
     bold before the credential tail if needed. The credential tail "as a registered New Jersey Home Improvement
     Contractor." is OUTSIDE the bold.
   - Establish **"Verona, New Jersey"** (the state, spelled out) and **"roofing contractor"** as the descriptor.
   - This answers the page H1 "Who Provides {Service} in Verona?". No modality.
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
(H1 "Who Provides {Service} in Verona?", later H2 "What {Service} Is Available in Verona?") — **do NOT write
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
   to Verona's building stock** (figure-free; the entity definition is the separate spliced block — do not
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
   `[Cedar Grove](/roof-repair-cedar-grove-nj)`. The committed Newark/Orange/Irvington/Bloomfield/Belleville/Nutley/
   Maplewood/South Orange combos carry ZERO inline links — match that. No synthesized superlatives.
6. **No price in any prose lead.** Pricing lives ONLY in the `pricing` field (see §E) and the cost FAQ.

## C. Verona load-bearing facts (carry verbatim where used; source = CITY-FACTS-west-essex.md §Verona + the Verona crib `.planning/content-system/cities-batchC/verona.md`, and the committed Verona city page `src/data/city-content/west-essex.ts`, cityId 'verona')
- **Permit office:** the **Township of Verona Department of Building and Inspections**, at the **Municipal Building,
  600 Bloomfield Avenue** (the State UCC enforcing agency). Use that generic safe phrasing; do **NOT** name a
  Construction Official, a director, or a fee schedule.
- **Reroof permit rule (statewide UCC — identical to every prior city):** a **detached one- or two-family reroof —
  including a full tear-off and re-cover — is "ordinary maintenance" under N.J.A.C. 5:23-2.7 and requires NO
  construction permit, no inspection, and no notice.** A permit IS required on **commercial, multi-family, or
  attached** buildings (the **25% rule**: repairing >25% of total roof area in a 12-month period) and any structural
  roof work; recover-vs-tear-off limits follow the **Rehab Subcode, N.J.A.C. 5:23-6.4**. The Bloomfield Avenue /
  Pompton Avenue corridor storefronts are the natural place this commercial path applies.
- **Historic = NARROW "HPC REVIEW" (KEY — 2 designated landmarks; NOT a literal "Certificate of Appropriateness").**
  Under **Zoning Ordinance Chapter 150, Article XXII**, the **Verona Historic Preservation Commission** reviews
  significant exterior changes PRIOR to permit issuance on a **locally designated landmark**. Verona has **exactly TWO
  designated landmarks** — the **Erie Railroad Freight Shed at 62 Depot Street** and the **Verona United Methodist
  Church**. **In-kind exterior repairs are EXEMPT, and every other Verona home reroofs with no HPC review.** Frame
  exactly, and conditionally:
  > *"Verona requires HPC review prior to the issuance of permits only for significant exterior changes on a locally
  > designated landmark, under Zoning Ordinance Chapter 150, Article XXII, and in-kind exterior repairs stay exempt.
  > Exactly two locally designated landmarks exist in Verona — the Erie Railroad Freight Shed at 62 Depot Street and
  > the Verona United Methodist Church — so every other Verona home reroofs with no HPC review. Per the National Park
  > Service, National Register listing alone places no restriction on a private property owner, and Verona Park is an
  > Olmsted-designed Essex County park, not a homeowner reroof gate."*
  Rules:
  - **Use "HPC review," NOT "Certificate of Appropriateness" or "COA," for Verona.** The pack and city page both use
    "HPC review prior to issuance of permits."
  - **The Afterglow section is PROPOSED (2017 Verona Historic Resources Survey), NOT designated.** A reroof there
    follows the **standard N.J.A.C. 5:23-2.7 path with no HPC review on that basis.** Do NOT call Afterglow a
    designated district.
  - **Verona Park is an Olmsted-designed Essex County park, NOT a reroof gate** — never frame it as a homeowner
    restriction. Per the **National Park Service**, National Register listing alone places no restriction on a private
    owner.
  - **Do NOT** import Glen Ridge's binding Chapter 15.32 district, Montclair's four conditional districts / Chapter
    347 §347-136, West Orange's ~10 landmarks / Section 25-30, Cedar Grove's "none," South Orange's Chapter-185, or
    Maplewood's Article-VIII framework. Verona's gate is its own: Chapter 150, Article XXII — 2 landmarks, in-kind
    exempt.
  - State the HPC-review framework where the historic angle arises (historic-roof-restoration, slate/tile/cedar-shake,
    custom-roof-design-consultation). HPC review, where it applies, is a **SEPARATE approval from the building permit**.
- **Housing stock:** **pre-war Colonials and Dutch Colonials, postwar Capes and ranches, and many 1960s–70s
  split-levels and bi-levels** on tree-lined streets; the township's oldest houses cluster on **Personette Avenue**
  and **Claremont Avenue**; the **Bloomfield Avenue** and **Pompton Avenue (NJ Route 23)** corridors carry the
  mixed-use, retail, and office storefronts. **About four-fifths owner-occupied across roughly 6,000 housing units,
  per the U.S. Census Bureau ACS estimates** (this framing IS on the committed city page — keep it, named-sourced, in
  the who/what residential framing; do NOT print a population integer). The **split-level transition flashing** detail
  is the distinctive Verona roof concern: a split-level breaks the slope into offset planes that meet a vertical wall,
  and the roof-to-wall step and counter-flashing at that transition fails before the open shingle field. The older
  pre-war stock → aging valley/chimney/wall flashing, slate/metal period detailing, plank/deteriorated sheathing
  discovered at tear-off; the corridor storefronts → EPDM/TPO/mod-bit low-slope membrane.
- **Neighborhoods / sections (VERIFIED ONLY — the ONLY ones any combo may name; drop anything not on this list):**
  the **Afterglow section** (eastern ridge against the Montclair border; large early-20th-century Tudor Revival and
  Romantic Revival homes; PROPOSED-only, not designated), **Personette Avenue** (some of the township's oldest houses
  — a street of older pre-war stock, not a tightly bounded neighborhood), **Claremont Avenue** (some of Verona's
  oldest structures, near the early core), **Verona Park and Lakeside Avenue** (the southern park area fronting the
  54.32-acre Olmsted-designed Essex County park and its lake on the Peckman River; Lakeside Avenue and Bloomfield
  Avenue border the water), and the **Bloomfield Avenue and Pompton Avenue corridors** (the commercial corridors that
  meet near the central commercial core). **DROP** any street/section NOT above — the CURRENT files FABRICATE
  "Lakeview," "Sunset," "Park Place," and similar; do **NOT** carry them. Do **NOT** publish a fabricated
  individual-landmark list beyond the two verified landmarks above.
- **Geography (HARD guardrails):**
  - **Verona is a Watchung valley/upland township between the Eagle Rock Reservation (First Watchung Mountain) and
    the Hilltop Reservation (Second Watchung Mountain), per Essex County Parks — NOT the South Mountain Reservation.**
    The wooded reservation edges plus mature street trees near Verona Park drop leaf load and broken branches that
    collect in valleys and gutters → valley/gutter blockage backs water under the roof covering and rots fascia,
    soffit, and decking; shade on north-facing slopes settles moss and algae. Keep **QUALITATIVE**.
  - **The Peckman River runs through Verona** and feeds the lake at Verona Park — a real, named, NWS-gauged
    drainage/flood angle along **Bloomfield Avenue and Lakeside Avenue near Verona Park**. The committed city page
    cites the NOAA National Weather Service Peckman River gauge at Verona (at roughly a 5-foot stage, water covers
    roads and reaches 1–3 feet into properties along Bloomfield Avenue and Lakeside Avenue near Verona Park) — you may
    reuse that named-sourced framing, but keep the river angle **QUALITATIVE** (no FEMA zone/%/depth beyond the
    city-page's own attributed gauge language).
  - **Split-level transition flashing** is the distinctive Verona roof detail (1960s–70s split-levels/bi-levels) —
    foreground it where the service touches flashing, leaks, or shingle re-roofing.
  - **RESERVATION GUARDRAIL MATRIX (the cross-city contamination guard — never violate):**
    - South Mountain Reservation = **West Orange only** (in this batch). Montclair, Glen Ridge, Verona, Cedar Grove do
      NOT touch it.
    - Eagle Rock Reservation = West Orange, Montclair, **Verona**.
    - Mills Reservation = Montclair, Cedar Grove.
    - Hilltop Reservation = **Verona**, Cedar Grove.
    - Glen Ridge borders NO large county reservation (inner lowland borough; canopy is the stressor).
    → For Verona, name **Eagle Rock + Hilltop ONLY.** Never write "South Mountain" or "Mills" for Verona.
  - Verona borders Cedar Grove, Montclair, West Orange, and other adjacent municipalities. Do **NOT** import West
    Orange's "South Mountain," Montclair's "Mills Reservation," Glen Ridge's "no reservation," Cedar Grove's "three
    sections / Route 23," Belleville's "Second-River / Route 21," Nutley's "Third-River / ON3," Bloomfield's "town
    center / GSP," Maplewood's "South Mountain western edge," or South Orange's "Seton Hall / SOPAC" framing as
    Verona's.
- **Climate (shared EWR baseline, HEDGED — identical to every prior city):** ~31.5 in/yr snow; nor'easters Oct–April;
  ~25–30 thunderstorms/yr; ground snow load **Pg ~25 psf** and **~110–115 mph ASCE 7-16** design wind kept **HEDGED**
  (not Essex-confirmed). **BAN every city-specific degree/gust/elevation number.** No distinct Verona microclimate
  number.
- **UNVERIFIED — never publish:** any population integer, an exact pre-1940/pre-1950 %, a median year built, the
  Construction Official's name, any individually designated landmark beyond the two verified (Erie Railroad Freight
  Shed / Verona United Methodist Church), HPC-review fees/fines, any street/section beyond the verified list above,
  any FEMA flood-zone figure or invented flood depth beyond the city-page's attributed Peckman gauge language, the
  fabricated "15–20% stronger gusts on hilltop homes" / named slate-quarry-inventory / "hundreds of Verona
  split-levels" / response-time claims in the current files.

## D. De-fab targets present in the CURRENT combo files (fix all)
- **Price-in-lead.** `overview[0]` opens "Newark Quality Roofing delivers expert {service} in Verona — with prices
  starting from $X–$Y and free estimates available today" (e.g. `$350–$1,500` on roof-repair, `$15,000–$50,000` on
  historic, `$8–$14/sq ft` on commercial) → **delete the price + hype**, replace with an answer-first NQR-applied,
  entity-grounded lead (bold the named topics; figure-free).
- **Pricing range** is the OLD invented tier (`$350–$1,500`, `$15,000–$50,000`, `$8–$14/sq ft`, and similar) →
  replace with the sourced default for the service type (§E): repair & maintenance `$400–$1,000`;
  replacement/installation `$10,000–$25,000`.
- **`whyChooseUs`** templated trust lines — "NJ licensed, GAF Certified — 15+ years protecting Essex County…",
  "Premium materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response" →
  **de-fab** to clean factual reasons (§E), using the **registered HIC / fully insured** framing.
- **Fabricated Verona-specific prose in the current files** — fabricated neighborhoods/streets (**Lakeview**,
  **Sunset**, **Park Place** as named neighborhoods); the "**15 to 20 percent stronger gusts** on hilltop homes"
  fabrication; the falsehood that "**Verona does not have a formal historic preservation commission**" (it DOES —
  Chapter 150, Article XXII; correct to the HPC-review framing in §C); "**Newark Quality Roofing has repaired
  hundreds of Verona split-levels**" and other invented self-stats/volume claims; any named slate-quarry inventory;
  any fabricated savings/storm-spike/response-time claim → **DELETE/CORRECT all of it.** Replace with VERIFIED Verona
  texture (pre-war Colonial / postwar Cape/ranch / 1960s–70s split-level stock; split-level transition flashing;
  plank decking at tear-off; Bloomfield Avenue / Pompton Avenue storefronts; reservation-edge canopy debris from
  Eagle Rock and Hilltop; the Peckman River drainage near Verona Park; the Chapter-150-Article-XXII HPC-review
  framework where it applies).
- **`conversionHooks.urgencyNote`** "Don't wait for minor damage to become a major expense. Early action saves
  thousands." → factual, no fabricated savings.
- **Inline markdown self-links** like `[roof repair](/roof-repair)`, `[Cedar Grove](/roof-repair-cedar-grove-nj)`,
  `[Montclair](/roof-repair-montclair-nj)`, `[West Orange](/roof-repair-west-orange-nj)`,
  `[Glen Ridge](/historic-roof-restoration-glen-ridge-nj)`, `[historic roof restoration](/historic-roof-restoration)`,
  `[commercial roof installation](/commercial-roof-installation)` → strip the link syntax (keep words as plain text;
  the committed siblings carry zero links).
- **Unsourced hard numbers** (decade-specific lifespans, the "25–30%"/"30%" repair-vs-replace rule, the "130-mph /
  six-nail" hilltop spec, the "three to six times more / $30,000–$60,000" historic-cost claim) → name-source from the
  packs (the 30% rule = Kellow/Modernize/Josten per materials-economics §8; lifespans = the InterNACHI
  life-expectancy chart; ice barrier = IRC R905.1.2; flashing-leak share = NRCA) or **de-quantify**. The committed
  city page uses **130-mph / six-nail as template-consistent gold** — keep that form only if a pack supports it, but
  do NOT layer the fabricated "hilltop gusts 15–20% stronger" justification onto it.
- **Preserve** the genuinely good Verona texture (split-level transition flashing and the offset-plane geometry;
  pre-war Colonial slate/metal period detailing; plank decking at tear-off; Bloomfield Avenue / Pompton Avenue
  low-slope membrane; valley-and-transition flashing failures; reservation-edge canopy debris; the Peckman River
  drainage near Verona Park) — restructure it answer-first, do not discard it.

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
- "Local Essex County crew familiar with Verona's pre-war Colonials, postwar Capes and ranches, and 1960s–70s split-levels."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials, NO "licensed.")

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in
Verona."). `urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural
water damage.").

## F. Differentiation directive (pre-empt cross-city overlap — the in-archetype west-essex siblings are the primary differentiate target)
**The four other west-essex siblings (West Orange, Montclair, Glen Ridge, Cedar Grove) share the Watchung-ridge /
reservation-edge / tree-canopy pattern and the same standardized service facts — Verona must lead with the facts that
are UNIQUE to it so the page never mirrors a sibling or the committed Newark/East Orange/Orange/Irvington/Bloomfield/
Belleville/Nutley/Maplewood/South Orange versions:**
- **Verona-DISTINCT anchors to FOREGROUND:** the **NARROW "HPC review"** position (Chapter 150, Article XXII; exactly
  TWO designated landmarks — Erie Railroad Freight Shed at 62 Depot Street + Verona United Methodist Church; in-kind
  exempt; Afterglow PROPOSED-only; NOT a literal "Certificate of Appropriateness"); the **Eagle Rock (First Watchung)
  + Hilltop (Second Watchung) reservation edges** — NOT South Mountain, NOT Mills; the **Peckman River** drainage
  along Bloomfield Avenue and Lakeside Avenue near Verona Park; the distinctive **split-level transition flashing** on
  the 1960s–70s stock; **pre-war Colonials / postwar Capes and ranches / split-levels** (about four-fifths
  owner-occupied across ~6,000 housing units); the verified sections (**Afterglow**, **Personette Avenue**,
  **Claremont Avenue**, **Verona Park / Lakeside Avenue**, the **Bloomfield Avenue + Pompton Avenue corridors**); the
  permit office at the **Township of Verona Department of Building and Inspections, Municipal Building, 600 Bloomfield
  Avenue**.
- **AVOID importing the OTHER four west-essex siblings' anchors** (do NOT write these into a Verona combo):
  - **West Orange:** NARROW LANDMARK-ONLY COA (Section 25-30; ~10 designated landmarks; Llewellyn Park = private
    deed-of-trust, NOT a township COA); office the Township of West Orange Building & Construction Code Enforcement;
    **South Mountain + Eagle Rock**.
  - **Montclair:** CONDITIONAL LOCAL COA (Article XXIII of Chapter 347 §347-136; 4 districts + local landmarks;
    in-kind exempt); office the Township of Montclair Building Office; **Eagle Rock + Mills**.
  - **Glen Ridge:** BINDING LOCAL COA, BROADEST IN THE BATCH (Chapter 15.32; district covers >90% of the borough);
    office the Borough of Glen Ridge Building Department at 825 Bloomfield Avenue; **NO reservation** (inner lowland
    borough; canopy is the stressor).
  - **Cedar Grove:** NONE (no HPC, no COA; advisory Heritage Advisory Committee only); office the Township of Cedar
    Grove Building Department at 525 Pompton Avenue; **Mills + Hilltop**; three sections along Pompton Avenue (North
    End, Central, South End).
- For the **process-heavy / low-localizability** services — **roof-thermal-imaging-inspections,
  storm-damage-roof-repair, commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection,
  insurance-roof-replacement, roof-overlay-installation** — LEAD with the Verona situation (Bloomfield Avenue /
  Pompton Avenue corridor storefronts; reservation-edge Eagle Rock / Hilltop branch impact; split-level
  transition-flashing diagnostics; Peckman River drainage near Verona Park; pre-war plank-deck tear-offs;
  owner-occupant documentation) before the standardized facts.
**Preserve every cited standard/cost fact** (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize/
InterNACHI figures) — differentiation is about which local facts lead, not about changing the sourced figures.

## G. Output format
Write the **complete file** to `<service>.snippet.ts` (in `.planning/content-system/combo-batch9-west-essex/verona/`)
— keep the exact first line `import type { ComboContent } from '../schema';` and the EXACT
`export const <ExportName>: ComboContent = {` you are given (so `verona/index.ts` imports stay valid). Keep
`serviceId` and `cityId: 'verona'` unchanged. **Omit the `definition` field.** Also write a short `<service>.md`
noting the de-fabs you cleared + the named sources you used. The finished file lands at
`src/data/combo-content/verona/<service>.ts`. Voice/structure exemplar: the committed **Orange combo
`src/data/combo-content/orange/roof-repair.ts`** (same answer-first + entity-grounded shape — localize, do NOT copy
Orange's geography or COA) and the committed Verona **city page** `src/data/city-content/west-essex.ts`
(cityId 'verona') for verified Verona geography/voice.
