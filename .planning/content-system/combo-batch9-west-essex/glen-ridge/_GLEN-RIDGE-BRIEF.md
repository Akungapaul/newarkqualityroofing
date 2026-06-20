# Glen Ridge Combo Author Brief — Combo Batch 9 / West-Essex (entity-grounding inherited)

You are rewriting ONE Glen Ridge service×city combo page (`src/data/combo-content/glen-ridge/<service>.ts`)
**answer-first**, **de-fabbed**, and **entity-grounded**. The combo = the intersection of a service (already
rewritten answer-first at `src/data/service-content/<categoryFile>.ts`) and Glen Ridge (facts below).
**Localize the finished service content to Glen Ridge** — do not invent a new service story.

> Glen Ridge = **Borough of Glen Ridge**, Essex County, NJ — a small (~1.3 sq mi), fully built-out inner **LOWLAND**
> borough west of Newark, predominantly **pre-WWII Victorian / Edwardian / Colonial Revival / Tudor / Dutch Colonial
> single-family homes (~1890s–1930s)** on tree-lined streets, **~93% owner-occupied**, that borders **NO large county
> reservation**. Its defining roof stressor is the **mature street-tree canopy** (NOT ridge elevation, NOT reservation
> adjacency). Slate and complex multi-gable rooflines detail the larger high-style houses; the commercial footprint is
> minimal, confined to the **Bloomfield Avenue station edge**, served by the single Glen Ridge NJ Transit station.
> Frame the audience as **owner-occupants of a mature, pre-WWII single-family borough**, with a secondary station-edge
> low-slope-commercial angle. The single biggest Glen Ridge-specific fact for COA framing: **Glen Ridge has a BINDING
> LOCAL Certificate of Appropriateness under Borough Code Chapter 15.32, and the Glen Ridge Historic District covers
> OVER 90% of the borough** — the BROADEST COA gate in this west-essex batch, so MOST homes fall inside the regulated
> district. This is the OPPOSITE of Cedar Grove (no COA) and Verona/West Orange (narrow landmark-only), and broader than
> Montclair (conditional, 4 districts + landmarks). Frame it as the **Chapter 15.32 local-ordinance** matter, NOT the
> 1982 National Register listing (per the National Park Service, listing alone places no restriction on a private owner).

---

## 0. ENTITY-GROUNDING (read first — it changes directAnswer + credentials)
This batch bakes the site-wide entity-grounding pattern into the combos from the start (like Irvington, Bloomfield,
Belleville, Nutley, Maplewood, and South Orange did).

1. **`directAnswer` is entity-grounded** — author it in this exact shape (gold exemplars:
   `src/data/combo-content/orange/roof-repair.ts` and the committed Glen Ridge CITY page
   `src/data/city-content/west-essex.ts`, cityId 'glen-ridge'):
   > `**Newark Quality Roofing is a roofing contractor providing {service} across Glen Ridge, New Jersey, and Essex County, {1–2 city-specific scope clauses}** … as a registered New Jersey Home Improvement Contractor.`
   - The **bolded span** (from "Newark Quality Roofing" through the scope clauses) must be **≤40 words** — end the
     bold before the credential tail if needed. The credential tail "as a registered New Jersey Home Improvement
     Contractor." is OUTSIDE the bold.
   - Establish **"Glen Ridge, New Jersey"** (the state, spelled out) and **"roofing contractor"** as the descriptor.
   - This answers the page H1 "Who Provides {Service} in Glen Ridge?". No modality.
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
(H1 "Who Provides {Service} in Glen Ridge?", later H2 "What {Service} Is Available in Glen Ridge?") — **do NOT write
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
   to Glen Ridge's building stock** (figure-free; the entity definition is the separate spliced block — do not
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
   prose only, and **strip every existing markdown self-link** like `[gutter repair](/gutter-installation-repair-glen-ridge-nj)`
   or `[Montclair](/roof-repair-montclair-nj)`. The committed Newark/Orange/Irvington/Bloomfield/Belleville/Nutley/
   Maplewood/South-Orange combos carry ZERO inline links — match that. No synthesized superlatives.
6. **No price in any prose lead.** Pricing lives ONLY in the `pricing` field (see §E) and the cost FAQ.

## C. Glen Ridge load-bearing facts (carry verbatim where used; source = CITY-FACTS-west-essex.md §Glen Ridge + the crib `.planning/content-system/cities-batchC/glen-ridge.md`, and the committed Glen Ridge city page `src/data/city-content/west-essex.ts`, cityId 'glen-ridge')
- **Permit office:** the **Borough of Glen Ridge Building Department**, at **825 Bloomfield Avenue**. Use that generic
  safe phrasing; do **NOT** name a Construction Official, a director, or a fee schedule.
- **Reroof permit rule (statewide UCC — identical to every prior city):** a **detached one- or two-family reroof —
  including a full tear-off and re-cover — is "ordinary maintenance" under N.J.A.C. 5:23-2.7 and requires NO
  construction permit, no inspection, and no notice.** A permit IS required on **commercial, multi-family, or
  attached** buildings (the **25% rule**: repairing >25% of total roof area in a 12-month period) and any structural
  roof work; recover-vs-tear-off limits follow the **Rehab Subcode, N.J.A.C. 5:23-6.4**. The small Bloomfield Avenue
  station-edge commercial buildings are the natural place this commercial path applies. **The CURRENT files don't name
  a permit office at all in the body — use "the Borough of Glen Ridge Building Department at 825 Bloomfield Avenue."**
- **Historic = BINDING LOCAL COA, the BROADEST IN THE BATCH (KEY — the OPPOSITE of Cedar Grove's none).** The
  **Glen Ridge Historic Preservation Commission** issues a **Certificate of Appropriateness under Borough Code
  Chapter 15.32**, and the **Glen Ridge Historic District covers OVER 90% of the borough** (NOT literally 100%), so
  **MOST homes fall inside the regulated district.** A COA applies to exterior alterations including **roof
  replacement, a change of roofing material, dormers, and visible roof-mounted equipment** on regulated/contributing
  properties — a **SEPARATE local approval from the construction permit.** Frame it as the **LOCAL-ordinance Chapter
  15.32** matter, NOT the **1982 National Register listing** (per the National Park Service, listing alone places no
  federal restriction on a private property owner). A detached one- or two-family reroof is still no-permit ordinary
  maintenance under N.J.A.C. 5:23-2.7; the COA is the separate local approval. Advise confirming a specific parcel
  with the HPC / Building Department. Frame exactly:
  > *"Exterior roofing on a regulated property in the Glen Ridge Historic District requires a Certificate of
  > Appropriateness from the borough Historic Preservation Commission under Glen Ridge's Historic Preservation
  > ordinance, Chapter 15.32. The Certificate of Appropriateness governs roof replacement, a change of roofing
  > material, dormers, and visible roof-mounted equipment, and the Glen Ridge Historic District covers over 90% of the
  > borough, per the Borough of Glen Ridge, so most homes fall inside the regulated district. The Certificate of
  > Appropriateness is a local-ordinance requirement, not a consequence of the 1982 National Register listing —
  > per the National Park Service, National Register listing alone places no federal restriction on a private owner,
  > so confirm a specific parcel with the Historic Preservation Commission or Building Department."*
  Rules:
  - The COA is **BINDING and BROAD** — assert it confidently for regulated properties ("requires… most homes fall
    inside the regulated district"). Indicative present, no `can`/`may`/modal hedge in the declarative.
  - **Over 90%, NOT 100%** — never write "every home," "nearly every home qualifies as historic," or "virtually every
    home." The CURRENT files do exactly this; correct it to "over 90% of the borough… most homes."
  - **NOT the National Register / NRHP listing.** The CURRENT files frame the gate as the "National Register Historic
    District" — that is WRONG. The binding gate is the LOCAL Chapter 15.32 COA. The 1982 NRHP listing is real but does
    NOT itself restrict a private owner (per the National Park Service).
  - **Do NOT** import another city's gate: not Cedar Grove's none, not Verona's "HPC review"/2-landmark framing, not
    West Orange's Section 25-30 landmark-only, not Montclair's Article XXIII / Chapter 347 §347-136 four-districts.
  - State the COA framework where the historic angle arises (historic-roof-restoration, slate/tile/cedar-shake,
    custom-roof-design-consultation). A COA, where it applies, is a **SEPARATE approval from the building permit**.
- **Housing stock:** predominantly **pre-WWII Victorian / Edwardian / Colonial Revival / Tudor / Dutch Colonial
  single-family** homes of **~1890s–1930s**, per the **Glen Ridge Historical Society**, on tree-lined streets;
  **~93% owner-occupied** (frame QUALITATIVE). Slate, dormers, and multi-gable forms detail the larger high-style
  houses; the small **Bloomfield Avenue station edge** carries the borough's minimal commercial / low-slope footprint.
  **Do NOT publish a population or housing-units integer, a pre-1940 %, or a median year built — frame housing-age and
  owner-occupancy qualitatively.** The older stock → **plank/deteriorated sheathing discovered at tear-off**, aging
  valley/chimney/dormer flashing, slate/metal/copper period detailing; the station-edge buildings → EPDM/TPO/mod-bit
  low-slope membrane.
- **Neighborhoods / sections (VERIFIED ONLY — the ONLY ones any combo may name; drop anything not on this list):**
  **Ridgewood Avenue** (principal residential spine roughly parallel to the rail corridor; the Glen Ridge NJ Transit
  station sits at Bloomfield Avenue and Ridgewood Avenue; tree-shaded pre-WWII Victorian/Colonial-Revival/Tudor homes,
  most within the historic district), **Forest Avenue** (established residential street; mature canopy loads valleys
  and gutters), **Baldwin Street** (residential street, older detached homes), **Linden Avenue** (residential street,
  single-family homes and larger period houses), **The Glen and Toney's Brook** (the wooded glen along Toney's Brook
  for which the borough is named; Toney's Brook flows from Montclair southeast through and beyond Glen Ridge — a
  localized runoff/drainage angle), **the Bloomfield Avenue station edge** (the borough's principal commercial edge,
  a small station-area commercial strip near Bloomfield Avenue and Ridgewood Avenue; the rest of the borough is
  overwhelmingly residential). **DROP** any street/section NOT above — the CURRENT files FABRICATE "**Carteret
  Street**," "gaslit streets / century-old elms" mythologizing, and similar; do **NOT** carry them. Do **NOT** publish
  a fabricated individual-landmark list.
- **Geography (HARD guardrails):**
  - Glen Ridge is a **small (~1.3 sq mi), fully built-out inner Essex County LOWLAND borough that borders NO large
    county reservation.** The defining roof stressor is the **MATURE STREET-TREE CANOPY** (heavy oak, maple, elm) →
    leaf/branch debris in valleys & gutters, branch impact in nor'easters/summer storms, shade-driven moss/algae on
    north slopes. **NEVER assert any ridge-elevation, reservation-adjacency, or hilltop wind/snow differential for
    Glen Ridge — it has none.** Keep the canopy stressor **QUALITATIVE** (no canopy-% figure).
  - **RESERVATION GUARDRAIL MATRIX (the cross-city contamination guard — never violate):**
    - **South Mountain Reservation = WEST ORANGE only** (in this batch). Montclair, **Glen Ridge**, Verona, Cedar Grove
      do NOT touch it.
    - **Eagle Rock Reservation = West Orange, Montclair, Verona.**
    - **Mills Reservation = Montclair, Cedar Grove.**
    - **Hilltop Reservation = Verona, Cedar Grove.**
    - **Glen Ridge borders NO large county reservation** (inner lowland borough; canopy is the stressor).
  - **The Glen / Toney's Brook** is a **localized drainage angle** (the wooded glen along the brook running from
    Montclair southeast through and beyond the borough) — **QUALITATIVE only** (no FEMA zone/%/depth/named-street).
  - The borough has **ONE rail station** (Glen Ridge, at Bloomfield Avenue and Ridgewood Avenue) — do NOT attribute a
    Bay Street or Watchung Avenue station to Glen Ridge.
  - Glen Ridge borders **Montclair, Bloomfield, and East Orange.** Do **NOT** import Maplewood's "South Mountain
    Reservation reaching into its western edge," South Orange's "reservation eastern edge," Belleville's "Second-River /
    Route 21," Nutley's "Third-River / ON3," Bloomfield's "town center / GSP," Irvington's "Vailsburg / I-78," East
    Orange's "flat Watsessing plain," or Orange's "Watchung-ridge-foot" framing as Glen Ridge's.
- **Climate (shared EWR baseline, HEDGED — identical to every prior city):** ~31.5 in/yr snow; nor'easters Oct–April;
  ~25–30 thunderstorms/yr; ground snow load **Pg ~25 psf** and **~110–115 mph ASCE 7-16** design wind kept **HEDGED**
  (not Essex-confirmed). **BAN every city-specific degree/gust/elevation number.** No distinct Glen Ridge microclimate
  number.
- **UNVERIFIED — never publish:** any population/units integer, an exact pre-1940/pre-1950 %, a median year built, the
  Construction Official's name, any individually designated landmark list, COA fees/fines, any street/section beyond the
  verified list above, any FEMA flood-zone figure, a gas-streetlight count, the fabricated NJ historic-roof tax-credit
  claim, the fabricated named-quarry slate inventory ("Vermont Unfading Green / Pennsylvania Black / Buckingham
  Virginia"), the "40–60% storm-spike," "within hours" response, "dozens of Glen Ridge homeowners," "two-phase
  protocol," or any "nearly every home / virtually every home is historic" overstatement in the current files.

## D. De-fab targets present in the CURRENT combo files (fix all)
- `overview[0]` opens "Newark Quality Roofing delivers expert {service} in Glen Ridge — with prices starting from $X–$Y
  and free estimates available today" → **delete the price + hype**, replace with an answer-first NQR-applied,
  entity-grounded lead (bold the named topics; figure-free).
- **WRONG COA FRAMING (the biggest Glen Ridge-specific fix):** the CURRENT files say the gate is the "**National
  Register Historic District**," that "**nearly every home falls within the National Register Historic District**" /
  "**virtually every home qualifies as historic**" / "**roof work on nearly any property requires…**" → **REPLACE
  with the binding LOCAL Chapter 15.32 COA framing (§C historic):** the **Glen Ridge Historic Preservation Commission**
  issues a **Certificate of Appropriateness under Chapter 15.32**, the **historic district covers OVER 90% of the
  borough (NOT 100% / not "every home")**, the COA is a **local-ordinance requirement, NOT the 1982 National Register
  listing** (NPS: listing alone = no private restriction).
- **Pricing range** is the OLD invented tier (`$350–$1,500` on roof-repair, `$500–$3,000` on storm-damage,
  `$15,000–$50,000` on historic-restoration, etc.) → replace with the sourced default for the service type (§E):
  repair & maintenance `$400–$1,000`; replacement/installation `$10,000–$25,000`.
- **`whyChooseUs`** templated trust lines — "NJ licensed, GAF Certified — 15+ years protecting Essex County…",
  "Premium materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response" →
  **de-fab** to clean factual reasons (§E), using the **registered HIC / fully insured** framing.
- **Fabricated Glen Ridge-specific prose in the current files** — fabricated streets (**Carteret Street**) and
  mythologizing ("**gaslit streets and century-old elms create a storybook setting**"); the **fabricated NJ
  historic-roof tax-credit** claim ("New Jersey offers historic preservation tax credits… Glen Ridge's National
  Register designation makes many borough homes eligible"); the **named-quarry slate inventory** ("relationships with
  specialty quarries in **Vermont, Pennsylvania, and Virginia**," "inventories of matching slate, cedar, and copper");
  the "**40–60% storm-spike**" / "**dozens of Glen Ridge homeowners** received fair settlements" / "**two-phase Glen
  Ridge protocol**" / "**within hours**" emergency response / "**comprehensive warranty**" invented terms; "Glen
  Ridge's standards are notably stricter [than Montclair]"; "compact lots / homes stand close together" overreach →
  **DELETE/CORRECT all of it.** Replace with VERIFIED Glen Ridge texture (pre-WWII Victorian/Edwardian/Colonial-Revival/
  Tudor/Dutch-Colonial stock; plank/deteriorated sheathing at tear-off; slate/copper period detailing; mature
  street-tree canopy debris in valleys & gutters; the Chapter 15.32 binding-COA framework where it applies;
  Bloomfield Avenue station-edge low-slope membrane).
- **`conversionHooks.urgencyNote`** "Don't wait for minor damage to become a major expense. Early action saves
  thousands" → factual, no fabricated savings.
- **Inline markdown self-links** like `[gutter repair](/gutter-installation-repair-glen-ridge-nj)`,
  `[roof inspections](/roof-inspection-glen-ridge-nj)`, `[Montclair](/roof-repair-montclair-nj)`,
  `[historic restoration work in Montclair](/historic-roof-restoration-montclair-nj)`,
  `[storm damage repair](/storm-damage-roof-repair-montclair-nj)` → strip the link syntax (keep words as plain text;
  the committed siblings carry zero links).
- **Unsourced hard numbers** (decade-specific lifespans, the "more than 30 to 40 percent" / "less than 20 percent"
  replace-vs-repair rules, "12 to 18 months" weathering, "8 to 16 weeks" timelines) → name-source from the packs
  (the 30% rule = Kellow/Modernize/Josten per materials-economics §8; lifespans = the InterNACHI life-expectancy
  chart) or **de-quantify**.
- **Preserve** the genuinely good Glen Ridge texture (pre-WWII high-style slate/copper period detailing; in-kind slate
  restoration with non-ferrous copper or stainless slater's nails; plank decking at tear-off; ice barrier at eaves;
  flashing failure as root cause on complex multi-gable rooflines; station-edge low-slope membrane) — restructure it
  answer-first, do not discard it.

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
- "Local Essex County crew familiar with Glen Ridge's pre-WWII Victorian, Tudor, and Colonial Revival homes and the Bloomfield Avenue station edge."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials, NO "licensed.")

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in
Glen Ridge."). `urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural
water damage.").

## F. Differentiation directive (pre-empt cross-city overlap — the in-archetype west-essex siblings are the primary differentiate target)
**Foreground the facts UNIQUE to Glen Ridge so the page never mirrors the other four west-essex siblings or the
committed Newark/East-Orange/Orange/Irvington/Bloomfield/Belleville/Nutley/Maplewood/South-Orange versions.**
- **Glen Ridge-DISTINCT anchors to FOREGROUND:** the **BINDING LOCAL COA under Chapter 15.32, the BROADEST in the
  batch (district covers OVER 90% of the borough → most homes regulated)**; the **NO-reservation inner lowland
  geography** where the **mature street-tree canopy** (oak/maple/elm) — not ridge or reservation — is the defining
  stressor; **The Glen / Toney's Brook** localized drainage; **pre-WWII Victorian / Edwardian / Colonial Revival /
  Tudor / Dutch Colonial** single-family stock (~1890s–1930s, ~93% owner-occupied); the verified streets/sections
  (**Ridgewood Avenue, Forest Avenue, Baldwin Street, Linden Avenue, The Glen and Toney's Brook, the Bloomfield
  Avenue station edge**); the permit office, the **Borough of Glen Ridge Building Department at 825 Bloomfield Avenue**.
- **AVOID importing the OTHER four west-essex siblings' anchors** (do NOT write these into a Glen Ridge combo):
  - **West Orange:** NARROW **landmark-only COA** (Section 25-30; ~10 designated landmarks; Llewellyn Park = a private
    deed-of-trust, NOT a township COA); office the **Township of West Orange Building & Construction Code Enforcement**;
    **South Mountain + Eagle Rock** reservations.
  - **Montclair:** **CONDITIONAL LOCAL COA** (Article XXIII of Chapter 347 §347-136; only inside 4 districts or a local
    landmark; in-kind exempt); office the **Township of Montclair Building Office**; **Eagle Rock + Mills** reservations.
  - **Verona:** NARROW **"HPC review"** (Chapter 150 Article XXII; only 2 designated landmarks; in-kind exempt; NOT a
    literal "Certificate of Appropriateness"); office the **Township of Verona Department of Building and Inspections,
    Municipal Building, 600 Bloomfield Avenue**; **Eagle Rock + Hilltop + Peckman River**.
  - **Cedar Grove:** **NONE** (no HPC, no COA; advisory **Heritage Advisory Committee** only); office the **Township of
    Cedar Grove Building Department at 525 Pompton Avenue**; **Mills + Hilltop** reservations.
- For the **process-heavy / low-localizability** services — **roof-thermal-imaging-inspections, storm-damage-roof-repair,
  commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection, insurance-roof-replacement,
  roof-overlay-installation** — LEAD with the Glen Ridge situation (Bloomfield-Avenue station-edge low-slope
  membrane; mature-canopy branch impact in valleys & gutters; pre-WWII plank-deck tear-offs; the Chapter 15.32 binding
  COA on regulated properties; owner-occupant documentation) before the standardized facts.
**Preserve every cited standard/cost fact** (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize/
InterNACHI figures) — differentiation is about which local facts lead, not about changing the sourced figures.

## G. Output format
Write the **complete file** to `<service>.snippet.ts` (in `.planning/content-system/combo-batch9-west-essex/glen-ridge/`)
— keep the exact first line `import type { ComboContent } from '../schema';` and the EXACT
`export const <ExportName>: ComboContent = {` you are given (so `glen-ridge/index.ts` imports stay valid). Keep
`serviceId` and `cityId: 'glen-ridge'` unchanged. **Omit the `definition` field.** Also write a short `<service>.md`
noting the de-fabs you cleared + the named sources you used. Final file destination after assembly:
`src/data/combo-content/glen-ridge/<service>.ts`. Voice/structure exemplar: the committed **Orange combo
`src/data/combo-content/orange/roof-repair.ts`** (same answer-first + entity-grounded shape — localize, do NOT copy
Orange's geography or COA) and the committed Glen Ridge **city page** `src/data/city-content/west-essex.ts`
(cityId 'glen-ridge') for verified Glen Ridge geography/voice and the exact Chapter 15.32 binding-COA framing.
