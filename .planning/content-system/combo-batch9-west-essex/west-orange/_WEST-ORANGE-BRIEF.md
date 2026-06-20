# West Orange Combo Author Brief — Combo Batch 9 (entity-grounding inherited)

You are rewriting ONE West Orange service×city combo page (`src/data/combo-content/west-orange/<service>.ts`)
**answer-first**, **de-fabbed**, and **entity-grounded**. The combo = the intersection of a service (already
rewritten answer-first at `src/data/service-content/<categoryFile>.ts`) and West Orange (facts below).
**Localize the finished service content to West Orange** — do not invent a new service story.

> West Orange = **Township of West Orange**, Essex County, NJ — a hillside Watchung-ridge township west of Newark,
> set on the First Watchung (Orange Mountain) ridge where the **South Mountain and Eagle Rock Reservations press
> mature canopy against ridge-side roofs**. Its defining stock is **wide and mixed**: capes, ranches, and Colonials
> in **Pleasantdale** and **Gregory** up through hillside **Tudors** and the estate homes of **Llewellyn Park**, on
> tree-lined streets, plus the low-slope commercial storefronts of the **Main Street / Valley Road / Pleasant Valley
> Way** spine and the **Route 280 corridor**. Frame the audience as **owner-occupants of a mature ridge-side suburb**,
> with a secondary Main-Street / Valley-Road commercial-storefront angle. The single biggest West Orange-specific fact
> for COA framing: **West Orange has a Historic Preservation Commission that issues a Certificate of Appropriateness
> for the township's roughly ten LOCALLY DESIGNATED landmarks under Section 25-30 — a NARROW, LANDMARK-ONLY gate. A
> typical detached 1–2-family reroof needs NO COA.** This is NARROWER than Glen Ridge's binding district (>90% of the
> borough) and Montclair's conditional four-district gate, and is its own distinct point: **Llewellyn Park is a PRIVATE
> 1857 deed-of-trust community governed by its own Committee of Managers — that is NOT a township COA** (except an
> individually designated structure such as the Gate House). Assert a COA ONLY for the designated landmarks; NEVER
> assert a township COA over Llewellyn Park generally.

---

## 0. ENTITY-GROUNDING (read first — it changes directAnswer + credentials)
This batch bakes the site-wide entity-grounding pattern into the combos from the start (like Irvington, Bloomfield,
Belleville, Nutley, Maplewood, and South Orange did).

1. **`directAnswer` is entity-grounded** — author it in this exact shape (gold exemplars:
   `src/data/combo-content/orange/roof-repair.ts` and the committed West Orange CITY page
   `src/data/city-content/west-essex.ts`, cityId 'west-orange'):
   > `**Newark Quality Roofing is a roofing contractor providing {service} across West Orange, New Jersey, and Essex County, {1–2 city-specific scope clauses}** … as a registered New Jersey Home Improvement Contractor.`
   - The **bolded span** (from "Newark Quality Roofing" through the scope clauses) must be **≤40 words** — end the
     bold before the credential tail if needed. The credential tail "as a registered New Jersey Home Improvement
     Contractor." is OUTSIDE the bold.
   - Establish **"West Orange, New Jersey"** (the state, spelled out) and **"roofing contractor"** as the descriptor.
   - This answers the page H1 "Who Provides {Service} in West Orange?". No modality.
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
(H1 "Who Provides {Service} in West Orange?", later H2 "What {Service} Is Available in West Orange?") — **do NOT write
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
   to West Orange's building stock** (figure-free; the entity definition is the separate spliced block — do not
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

## C. West Orange load-bearing facts (carry verbatim where used; source = the West Orange crib `.planning/content-system/cities-batchC/west-orange.md`, the west-essex CITY-FACTS, and the committed West Orange city page `src/data/city-content/west-essex.ts`, cityId 'west-orange')
- **Permit office:** the **Township of West Orange Building & Construction Code Enforcement** office (the State UCC
  enforcing agency). Use that generic safe phrasing; do **NOT** name a Construction Official, a director, or a fee
  schedule. (The committed city page references "the Township building offices at 66 Main Street" only as
  neighborhood color — do NOT promote a street address into a combo as the permit office; name it by FUNCTION.)
- **Reroof permit rule (statewide UCC — identical to every prior city):** a **detached one- or two-family reroof —
  including a full tear-off and re-cover — is "ordinary maintenance" under N.J.A.C. 5:23-2.7 and requires NO
  construction permit, no inspection, and no notice.** A permit IS required on **commercial, multi-family, or
  attached** buildings (the **25% rule**: repairing >25% of total roof area in a 12-month period) and any structural
  roof work; recover-vs-tear-off limits follow the **Rehab Subcode, N.J.A.C. 5:23-6.4**. The Main Street / Valley
  Road / Pleasant Valley Way and Route 280 commercial storefronts are the natural place this commercial path applies.
- **Historic = NARROW LANDMARK-ONLY COA (KEY — its own distinct point in the west-essex spectrum).** West Orange's
  **Historic Preservation Commission** issues a **Certificate of Appropriateness** for the township's **roughly ten
  LOCALLY DESIGNATED landmarks** under **Section 25-30** of the municipal code — examples are **Holy Trinity Episcopal
  Church, the State Diner, and the Hedges Block**. A **typical detached 1–2-family reroof needs NO COA**; the gate
  applies only to the designated landmarks, not township-wide. **Llewellyn Park is a PRIVATE 1857 deed-of-trust
  community governed by its own Committee of Managers — that is NOT a township COA** (a Llewellyn Park homeowner
  answers to the private community for exterior work), **except an individually locally designated structure such as
  the Gate House**. Per the **National Park Service**, **National Register listing alone places no federal restriction
  on a private owner.** Frame exactly:
  > *"Exterior roofing work on one of West Orange's roughly ten locally designated historic landmarks requires a
  > Certificate of Appropriateness from the West Orange Historic Preservation Commission under Section 25-30 before a
  > construction permit issues. The Certificate of Appropriateness covers landmarks such as Holy Trinity Episcopal
  > Church, the State Diner, and the Hedges Block, and applies only to locally designated landmarks, not township-wide,
  > so a typical West Orange home faces no historic review. Llewellyn Park homeowners answer to a private 1857 deed
  > covenant rather than a township Certificate of Appropriateness, and per the National Park Service, National
  > Register listing alone places no federal restriction on a private property owner."*
  Rules:
  - **Assert the COA ONLY for the roughly ten designated landmarks.** NEVER assert a township-wide COA, and NEVER
    assert a township COA over Llewellyn Park generally (Llewellyn Park = PRIVATE deed-of-trust / Committee of
    Managers, except an individually designated structure such as the Gate House).
  - A COA, where it applies, is a **SEPARATE approval from the building permit** (it precedes the permit).
  - **Do NOT** import Glen Ridge's binding Chapter-15.32 borough-wide district, Montclair's Article-XXIII four-district
    conditional gate, Verona's "HPC review" of 2 landmarks, Cedar Grove's no-COA / advisory-only posture, South
    Orange's Chapter-185 / Montrose Park gate, Bloomfield's Chapter-302 list, Nutley's Chapter-410 district, or
    Orange's four districts.
  - State the COA framework where the historic angle arises (historic-roof-restoration, slate/tile/cedar-shake,
    custom-roof-design-consultation).
- **Housing stock (wide / mixed):** **capes, ranches, and Colonials** in **Pleasantdale** and **Gregory** (and the
  Orange/Newark edge) up through hillside **Tudors** and the large estate homes of **Llewellyn Park**, on tree-lined
  streets. The Main Street / Valley Road / Pleasant Valley Way spine and the Route 280 corridor carry the period and
  low-slope commercial storefronts. The mature ridge-side stock → **deteriorated sheathing discovered at tear-off**,
  aging valley/chimney/wall flashing, **natural slate / metal / copper period detailing** on the hillside Tudors and
  Llewellyn Park estates; the commercial spine → **EPDM / TPO / modified-bitumen** low-slope membrane. **Do NOT
  publish a population integer or a Census %.** The committed city page used **New Jersey Real Estate Network** home
  values (Gregory "low $400,000s up toward $1 million") only as RAW neighborhood color — keep that figure ONLY if you
  attribute it to the New Jersey Real Estate Network and only as neighborhood color; never as a roofing stat.
- **Neighborhoods / sections (VERIFIED ONLY — the ONLY ones any combo may name; drop anything not on this list):**
  **St. Cloud** (higher-end residential between Northfield Avenue and Pleasant Valley Way, near South Mountain
  Reservation — reservation-edge canopy), **Gregory** (residential along Gregory Avenue south of Northfield Avenue,
  near Main Street), **Pleasantdale** (bounded by I-280 to the south and Pleasant Valley Way to the east; oldest
  section name, valley capes/ranches/Colonials), **Llewellyn Park** (private gated section, 1854 planned community;
  private Committee of Managers under the 1857 deed of trust — NOT a township COA, except the Gate House), **Tory
  Corner** (historic crossroads section, older residential roofs), **Crestmont and Crystal Lake** (Census-recognized
  localities, established residential streets), and the **Main Street / Valley Road commercial spine** (downtown
  commercial corridor; Valley Road and Pleasant Valley Way carry additional commercial frontage). **DROP** any
  street/section NOT above — the CURRENT files FABRICATE "Eagle Rock Avenue," "Prospect Avenue," "Rock Spring Avenue,"
  "Northfield Avenue" as a ridge-top claim, "Pleasant Valley" as a neighborhood, and "Eagle Rock / St. Cloud premium
  estate" framing; do **NOT** carry them. Do **NOT** publish a fabricated individual-landmark list beyond the three
  verified examples (Holy Trinity Episcopal Church, the State Diner, the Hedges Block).
- **Geography (HARD guardrails):**
  - West Orange sits on the **First Watchung (Orange Mountain) ridge** and **CONTAINS PART of the South Mountain
    Reservation AND part of the Eagle Rock Reservation**, per **Essex County Parks**. Both press mature canopy against
    ridge-side roofs → leaf/branch debris in valleys and gutters, branch impact in nor'easters/summer storms,
    shade-driven moss/algae on north slopes (St. Cloud and the reservation-edge sections). Keep **QUALITATIVE**.
  - **RESERVATION GUARDRAIL MATRIX (the cross-city contamination guard — never violate it):**
    **South Mountain Reservation = WEST ORANGE only** (in this batch; Montclair, Glen Ridge, Verona, Cedar Grove do
    NOT touch it). **Eagle Rock Reservation = West Orange, Montclair, Verona.** **Mills Reservation = Montclair,
    Cedar Grove.** **Hilltop Reservation = Verona, Cedar Grove.** **Glen Ridge borders NO large county reservation.**
    For West Orange, name **South Mountain Reservation + Eagle Rock Reservation ONLY** — NEVER Mills, NEVER Hilltop.
  - **Ridge-line wind exposure** on the First Watchung slopes is a verified qualitative stressor (a hillside slope
    catches stronger wind than a low-lying lot) — keep it **QUALITATIVE**: NO elevation figure, NO gust figure.
  - Main Street / Valley Road / Pleasant Valley Way + the Route 280 corridor carry the low-slope commercial
    storefronts (EPDM/TPO/mod-bit). Do **NOT** import Maplewood's "South-Mountain-reaching-into-the-western-edge,"
    South Orange's "reservation on the EASTERN edge / Seton Hall," Belleville's "Second-River / Route 21," Nutley's
    "Third-River / ON3," Bloomfield's "town center / GSP," Irvington's "Vailsburg / I-78," or East Orange's "flat
    Watsessing plain" framing as West Orange's.
- **Climate (shared EWR baseline, HEDGED — identical to every prior city):** ~31.5 in/yr snow; nor'easters Oct–April;
  ~25–30 thunderstorms/yr; ground snow load **Pg ~25 psf** and **~110–115 mph ASCE 7-16** design wind kept **HEDGED**
  ("near," not Essex-confirmed). **BAN every city-specific degree/gust/elevation/canopy-% number.**
- **UNVERIFIED — never publish:** any population integer, an exact pre-1940/pre-1950 %, a median year built, the
  Construction Official's name, any individually designated landmark list beyond the three verified examples, COA
  fees/fines, any street/section beyond the verified list above, any FEMA flood-zone figure, AND the specific banned
  fabrications the crib flags: the **500-foot elevation swing**, **618 ft**, **70 mph gusts**, **"15–20% stronger"
  ridge wind, the **"300-foot" ice-dam line**, the **2–4 in** figure, the **"130-mph wind-rated / six-nail / insurance
  premium discount"** claim, the named slate quarries / inventory ("**Pennsylvania black**," "**Vermont gray-green**,"
  "**unfading green**," "**Lehigh Valley quarries**"), the "$15,000–$50,000" / "$350–$1,500" / "$300–$700" invented
  pricing tiers, and any fabricated NQR warranty term.

## D. De-fab targets present in the CURRENT combo files (fix all)
- `overview[0]` opens "Newark Quality Roofing delivers expert {service} in West Orange — with prices starting from
  $X–$Y and free estimates available today" → **delete the price + hype**, replace with an answer-first NQR-applied,
  entity-grounded lead (bold the named topics; figure-free).
- **The "elevation" fabrication engine.** The current West Orange files are saturated with a fabricated
  altitude/elevation story: "**500-foot elevation swing**," "**that altitude swing produces wildly different repair
  scenarios**," winds "**15 to 20 percent stronger**" on the ridge, "**70 miles per hour**" nor'easter gusts,
  "north-facing slopes **above 300 feet** hold snow longer," "**elevation-aware assessment**," "elevation-specific
  failure patterns," "exposure profile," "ridge-top vs valley-floor" repair-strategy contrasts → **DELETE every
  numeric elevation/gust/percentage claim.** Keep ONLY the QUALITATIVE verified fact: West Orange sits on the First
  Watchung ridge, and a hillside slope catches stronger wind than a low-lying lot (no numbers).
- **Fabricated streets / sections** — "**Eagle Rock Avenue**," "**Prospect Avenue**," "**Rock Spring Avenue**,"
  "**Northfield Avenue**" used as a ridge-top wind claim, "**Pleasant Valley**" as a neighborhood, "Eagle Rock area
  home," "Eagle Rock and St. Cloud premium estate" framing → **DELETE.** Use only the VERIFIED neighborhood list in
  §C (St. Cloud, Gregory, Pleasantdale, Llewellyn Park, Tory Corner, Crestmont and Crystal Lake, Main Street /
  Valley Road commercial spine).
- **Named slate quarries / inventory** — "**Pennsylvania black slate**," "**Vermont gray-green**," "**unfading
  green**," "**Lehigh Valley quarries**," "matching slate from Vermont quarries," "salvage networks and specialty
  importers" → **DELETE.** Replace with the VERIFIED slate facts: natural slate lasts 60–150 years per the InterNACHI
  life-expectancy chart; replace broken slate tile by tile with **non-ferrous copper or stainless slater's nails, per
  NPS Preservation Brief 29**; NPS Brief 29 advises replacing the roof rather than individual repairs once **20% or
  more** of the slates are broken/cracked/missing/sliding.
- **The "130-mph / six-nail / insurance premium discount" claim** in the roof-repair FAQ → **DELETE** (fabricated
  product-spec + fabricated insurance benefit). De-quantify to verified wind/flashing facts.
- **Thomas Edison National Historical Park** "preservation standard" framing in historic-roof-restoration → drop the
  Edison angle (it is federal-property color, not a West Orange roofing fact); replace with the verified Section 25-30
  / landmark-only COA framing + NPS Brief 29 slate facts.
- **Pricing range** is the OLD `$350–$1,500` / `$15,000–$50,000` / `$300–$700` (and other invented tiers) → replace
  with the sourced default for the service type (§E): repair & maintenance `$400–$1,000`; replacement/installation
  `$10,000–$25,000`.
- **`whyChooseUs`** templated trust lines — "NJ licensed, GAF Certified — 15+ years protecting Essex County…",
  "Premium materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response" →
  **de-fab** to clean factual reasons (§E), using the **registered HIC / fully insured** framing.
- **`conversionHooks.urgencyNote`** "Don't wait for minor damage to become a major expense. Early action saves
  thousands" → factual, no fabricated savings.
- **Inline markdown self-links** like `[roof repair](/roof-repair)`, `[Montclair](/roof-repair-montclair-nj)`,
  `[Verona](/roof-repair-verona-nj)`, `[Glen Ridge](/roof-repair-glen-ridge-nj)`,
  `[West Orange](/roofing-in-west-orange-nj)` → strip the link syntax (keep words as plain text; the committed
  siblings carry zero links).
- **Unsourced hard numbers** (decade-specific lifespans, the "three to five times more" cost multiple, "75 to 100
  years," "4 to 8 weeks / 2 to 6 months," "10-degree differential," "Level II certification," "20,000 square feet")
  → name-source from the packs (lifespans = the InterNACHI life-expectancy chart; flashing share = the NRCA;
  ASTM C1153 = wet-insulation detection only) or **de-quantify**. Do NOT invent NQR thermographer certifications.
- **Preserve** the genuinely good West Orange texture (hillside Tudor / Llewellyn Park slate-and-copper restoration;
  capes/ranches/Colonials in Pleasantdale and Gregory; deteriorated sheathing at tear-off; Main Street / Valley Road
  low-slope membrane; reservation-edge St. Cloud canopy debris; the Section-25-30 landmark-only COA framework where
  it applies) — restructure it answer-first, do not discard it.

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
- The **cost FAQ** answers with the same range + free-written-estimate framing; never a fabricated guarantee. (A
  natural slate or copper roof on a Llewellyn Park estate or hillside Tudor costs more than asphalt, with slate
  installed at roughly **$10–$30 per square foot per NJ roofing guides** — keep that ONLY if attributed to NJ roofing
  guides, as the committed city page does; never as an invented NQR price.)

**`whyChooseUs`** (raw, no `**`) — replace the templated trust line with 3–4 of:
- "A registered New Jersey Home Improvement Contractor, fully insured."
- "Local Essex County crew familiar with West Orange's wide stock, from valley capes and ranches up through hillside Tudors and Llewellyn Park estate homes."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials, NO "licensed.")

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in
West Orange."). `urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural
water damage.").

## F. Differentiation directive (pre-empt cross-city overlap — the four other west-essex siblings are the PRIMARY differentiate target)
**West Orange shares the Watchung-ridge + reservation-edge canopy pattern with its west-essex siblings (Montclair,
Glen Ridge, Verona, Cedar Grove) and the slate-heavy hillside-Tudor stock with the South-Mountain pair (Maplewood /
South Orange).** Lead with the facts that are UNIQUE to West Orange so the page never mirrors a sibling or the
committed Newark/East Orange/Orange/Irvington/Bloomfield/Belleville/Nutley/Maplewood/South Orange versions:
- **West Orange-DISTINCT anchors to FOREGROUND:** the **NARROW LANDMARK-ONLY COA** (Section 25-30; roughly ten
  locally designated landmarks — Holy Trinity Episcopal Church, the State Diner, the Hedges Block; a typical reroof
  needs none); **Llewellyn Park = PRIVATE 1857 deed-of-trust / Committee of Managers, NOT a township COA** (except the
  Gate House); **CONTAINS part of South Mountain Reservation AND part of Eagle Rock Reservation** (per Essex County
  Parks); the **First Watchung ridge-line** wind exposure (qualitative); the **wide / mixed stock** (capes, ranches,
  Colonials in Pleasantdale and Gregory up through hillside Tudors and Llewellyn Park estates); the **Main Street /
  Valley Road / Pleasant Valley Way + Route 280** commercial spine; the verified neighborhoods (St. Cloud, Gregory,
  Pleasantdale, Llewellyn Park, Tory Corner, Crestmont and Crystal Lake); the **Township of West Orange Building &
  Construction Code Enforcement** office.
- **AVOID importing the OTHER four west-essex siblings' anchors** (do NOT write these into a West Orange combo):
  - **Montclair:** CONDITIONAL LOCAL COA (Article XXIII of Chapter 347 §347-136; only inside 4 districts or a local
    landmark; in-kind exempt); office = the **Township of Montclair Building Office**; reservations = **Eagle Rock +
    Mills**. (Do NOT give West Orange the Mills Reservation or a four-district gate.)
  - **Glen Ridge:** BINDING LOCAL COA, BROADEST IN THE BATCH (Chapter 15.32; district covers **>90% of the borough**);
    office = the **Borough of Glen Ridge Building Department at 825 Bloomfield Avenue**; **NO reservation**. (Do NOT
    give West Orange a borough-wide district or 825 Bloomfield Avenue.)
  - **Verona:** NARROW "HPC REVIEW" (Chapter 150 Article XXII; only **2 designated landmarks**; in-kind exempt; NOT a
    literal "Certificate of Appropriateness"); office = the **Township of Verona Department of Building and Inspections,
    Municipal Building, 600 Bloomfield Avenue**; reservations = **Eagle Rock + Hilltop**; **Peckman River**. (Do NOT
    give West Orange the Hilltop Reservation, the Peckman River, or Verona's 2-landmark "HPC review" framing — West
    Orange has a real Certificate of Appropriateness for ~ten landmarks.)
  - **Cedar Grove:** NONE (no HPC, no COA; advisory **Heritage Advisory Committee** only); office = the **Township of
    Cedar Grove Building Department at 525 Pompton Avenue**; reservations = **Mills + Hilltop**. (Do NOT give West
    Orange a no-COA posture or the Mills/Hilltop reservations.)
- **AVOID importing the committed siblings' anchors** — Maplewood's "South-Mountain-reaching-into-the-WESTERN-edge /
  Article-VIII conditional-COA," South Orange's "reservation on the EASTERN edge / Seton Hall 58-acre campus / SOPAC /
  Chapter-185 Montrose Park," Bloomfield's "Chapter-302 list / GSP," Nutley's "Chapter-410 Third-River district / ON3,"
  Belleville's "Second-River / Route 21," Irvington's "Vailsburg / I-78," East Orange's "flat Watsessing plain,"
  Orange's "four districts / Watchung-ridge-foot." West Orange = First Watchung ridge, BOTH reservations, narrow
  landmark-only COA, Llewellyn Park private covenant.
- For the **process-heavy / low-localizability** services — **roof-thermal-imaging-inspections,
  storm-damage-roof-repair, commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection,
  insurance-roof-replacement, roof-overlay-installation** — LEAD with the West Orange situation (Main Street / Valley
  Road / Route 280 storefronts; reservation-edge St. Cloud branch impact; hillside Tudor / Llewellyn Park slate
  detailing; ridge-line wind exposure; owner-occupant documentation) before the standardized facts.
**Preserve every cited standard/cost fact** (ASTM C1153, NRCA cadence, IRC R905.1.2, IRC/UCC sections, HomeAdvisor/
Modernize/InterNACHI/Copper Development Association figures) — differentiation is about which local facts lead, not
about changing the sourced figures.

## G. Output format
Write the **complete file** to `<service>.snippet.ts` (in `.planning/content-system/combo-batch9-west-essex/west-orange/`)
— keep the exact first line `import type { ComboContent } from '../schema';` and the EXACT
`export const <ExportName>: ComboContent = {` you are given (so `west-orange/index.ts` imports stay valid). Keep
`serviceId` and `cityId: 'west-orange'` unchanged. **Omit the `definition` field.** Also write a short `<service>.md`
noting the de-fabs you cleared + the named sources you used. The final assembled files land in
`src/data/combo-content/west-orange/`. Voice/structure exemplar: the committed **Orange combo
`src/data/combo-content/orange/roof-repair.ts`** (same answer-first + entity-grounded shape — localize, do NOT copy
Orange's geography or COA) and the committed West Orange **city page** `src/data/city-content/west-essex.ts`
(cityId 'west-orange') for verified West Orange geography/voice.
