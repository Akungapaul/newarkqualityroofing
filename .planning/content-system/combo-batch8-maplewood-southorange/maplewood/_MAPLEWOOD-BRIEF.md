# Maplewood Combo Author Brief — Combo Batch 8 (entity-grounding inherited)

You are rewriting ONE Maplewood service×city combo page (`src/data/combo-content/maplewood/<service>.ts`)
**answer-first**, **de-fabbed**, and **entity-grounded**. The combo = the intersection of a service (already
rewritten answer-first at `src/data/service-content/<categoryFile>.ts`) and Maplewood (facts below).
**Localize the finished service content to Maplewood** — do not invent a new service story.

> Maplewood = **Township of Maplewood**, Essex County, NJ — an inner-ring "first-suburb" west of Newark, set between
> the First and Second Watchung ridges, where the **South Mountain Reservation reaches into its wooded WESTERN /
> northwestern edge**. Its defining stock is **architect-designed early-20th-century homes** — Tudor, Colonial Revival,
> and Italian Revival — on tree-lined streets, plus the cohesive period storefronts of **Maplewood Village** and
> **Springfield Avenue**, served by the Maplewood NJ Transit rail line. Ownership is **strongly homeowner-facing
> (74.9% owner-occupied across about 9,051 housing units, per the U.S. Census Bureau)** — frame the audience as
> **owner-occupants of a mature, architect-designed single-family suburb**, with a secondary Village / Springfield-Avenue
> commercial-storefront angle. The single biggest Maplewood-specific fact for COA framing: **Maplewood has a Historic
> Preservation Commission and an Article VIII historic-preservation ordinance, but the one prominent district —
> Maplewood Village — is NATIONAL-REGISTER-ONLY (no local COA), and NO active, locally designated COA district is
> confirmed.** This is the OPPOSITE of South Orange's binding Montrose-Park / Chapter-185 COA, and unlike Bloomfield's
> Chapter-302 listed-parcel gate, Nutley's Chapter-410 Third-River district, or Orange's four districts: Maplewood's COA
> mechanism EXISTS but is **conditional / framework-only** — assert it only as "IF a property is in a locally designated
> Maplewood district or landmark…confirm current local designation with the Township."

---

## 0. ENTITY-GROUNDING (read first — it changes directAnswer + credentials)
This batch bakes the site-wide entity-grounding pattern into the combos from the start (like Irvington, Bloomfield,
Belleville, and Nutley did).

1. **`directAnswer` is entity-grounded** — author it in this exact shape (gold exemplars:
   `src/data/combo-content/orange/roof-repair.ts` and the committed Maplewood CITY page
   `src/data/city-content/first-suburbs.ts`, cityId 'maplewood'):
   > `**Newark Quality Roofing is a roofing contractor providing {service} across Maplewood, New Jersey, and Essex County, {1–2 city-specific scope clauses}** … as a registered New Jersey Home Improvement Contractor.`
   - The **bolded span** (from "Newark Quality Roofing" through the scope clauses) must be **≤40 words** — end the
     bold before the credential tail if needed. The credential tail "as a registered New Jersey Home Improvement
     Contractor." is OUTSIDE the bold.
   - Establish **"Maplewood, New Jersey"** (the state, spelled out) and **"roofing contractor"** as the descriptor.
   - This answers the page H1 "Who Provides {Service} in Maplewood?". No modality.
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
(H1 "Who Provides {Service} in Maplewood?", later H2 "What {Service} Is Available in Maplewood?") — **do NOT write
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
   to Maplewood's building stock** (figure-free; the entity definition is the separate spliced block — do not
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
   `[South Orange](/roof-repair-south-orange-nj)`. The committed Newark/Orange/Irvington/Bloomfield/Belleville/Nutley
   combos carry ZERO inline links — match that. No synthesized superlatives.
6. **No price in any prose lead.** Pricing lives ONLY in the `pricing` field (see §E) and the cost FAQ.

## C. Maplewood load-bearing facts (carry verbatim where used; source = CITY-FACTS-first-suburbs.md §Maplewood + §0–§5, and the committed Maplewood city page `src/data/city-content/first-suburbs.ts`, cityId 'maplewood')
- **Permit office:** the **Township of Maplewood Construction Division** (the State UCC enforcing agency), at
  **574 Valley Street**; a complete application is granted or denied within **20 business days**, per the Township of
  Maplewood. Use that generic safe phrasing; do **NOT** name a Construction Official, a director, or a fee schedule.
- **Reroof permit rule (statewide UCC — identical to every prior city):** a **detached one- or two-family reroof —
  including a full tear-off and re-cover — is "ordinary maintenance" under N.J.A.C. 5:23-2.7 and requires NO
  construction permit, no inspection, and no notice.** A permit IS required on **commercial, multi-family, or
  attached** buildings (the **25% rule**: repairing >25% of total roof area in a 12-month period) and any structural
  roof work; recover-vs-tear-off limits follow the **Rehab Subcode, N.J.A.C. 5:23-6.4**. Maplewood Village /
  Springfield-Avenue commercial storefronts are the natural place this commercial path applies. **The CURRENT files
  say "Maplewood's Construction Department" — correct it to "the Township of Maplewood Construction Division."**
- **Historic = CONDITIONAL / FRAMEWORK-ONLY COA (KEY — the OPPOSITE of South Orange's binding gate).** Maplewood **HAS**
  a Historic Preservation Commission and a historic-preservation ordinance under **Article VIII** of the municipal code,
  so the **Certificate-of-Appropriateness mechanism EXISTS** for **locally designated** historic sites/landmarks/districts.
  BUT the one prominent district — the **Maplewood Village Historic District** — was listed on the **National Register only
  (2022)**, and per the **National Park Service** a Register listing alone places **no restriction on a private owner**.
  **No currently named, LOCALLY designated Maplewood historic district or landmark (active COA) was confirmed.** Frame
  exactly, and conditionally:
  > *"A private homeowner reroof in Maplewood Village requires no Certificate of Appropriateness, because the Maplewood
  > Village Historic District is listed on the National Register only, which the National Park Service confirms places no
  > restriction on a private owner. Maplewood maintains a Historic Preservation Commission and a historic-preservation
  > ordinance under Article VIII, and exterior roofing work on a property in a locally designated Maplewood historic
  > district or landmark falls under a township Certificate of Appropriateness — confirm current local designation with
  > the Township."*
  Rules:
  - **Do NOT assert that any specific Maplewood neighborhood currently requires a COA.** The framework exists; no active
    local district is confirmed. Conditional, indicative present ("falls under… — confirm current local designation");
    NO `can`/`may`/modal hedge in the declarative.
  - **Do NOT** import South Orange's Montrose-Park / Village-Code-Chapter-185 framing, Bloomfield's Chapter-302 Property
    List, Nutley's Chapter-410 Third-River district, or Orange's four districts.
  - State the COA framework where the historic angle arises (historic-roof-restoration, slate/tile/cedar-shake,
    custom-roof-design-consultation). A COA, where it applies, is a **SEPARATE approval from the building permit**.
- **Housing stock:** **architect-designed early-20th-century** homes — **Tudor, Colonial Revival, Italian Revival** —
  on tree-lined streets, plus large period homes on sloped wooded lots toward the South Mountain ridge; Maplewood Village
  and Springfield Avenue carry the period storefronts and mixed-use. **74.9% owner-occupied across ~9,051 housing units,
  per the U.S. Census Bureau** (this figure IS published on the committed city page — keep it, named-sourced, in the
  who/what residential framing; do NOT print a population integer or a pre-1940 %). The older architect-designed stock →
  **plank/deteriorated sheathing discovered at tear-off**, aging valley/chimney/wall flashing, slate/metal period
  detailing; the Village / Springfield-Avenue storefronts → EPDM/TPO/mod-bit low-slope membrane.
- **Neighborhoods / sections (VERIFIED ONLY — drop anything not on this list):** **Maplewood Village** (downtown core /
  period storefronts, by the NJ Transit station + Memorial Library — Register-only HD), **Jefferson** (historically
  Jefferson Village; early-20th-century single/two-family near Jefferson School), **Hilton** (originally North Farms /
  Middleville; older single- and two-family), **Tuscan** (architect-designed early-20th-century near Tuscan School),
  **Wyoming** (larger period homes on the western side toward the South Mountain ridge — reservation-edge canopy),
  **Memorial Park** (tree-shaded homes around the central park between Village and residential streets). **Springfield
  Avenue** is the commercial **corridor** (storefronts), not a residential neighborhood. **DROP** any street/section NOT
  above — the CURRENT files FABRICATE "Ridgewood Road," "Rutgers Street," "Crestwood Drive," "Prospect Street,"
  "Crestwood Drive" and similar; do **NOT** carry them. Do **NOT** publish a fabricated individual-landmark list.
- **Geography (HARD guardrails):**
  - The **South Mountain Reservation reaches INTO Maplewood's wooded WESTERN / northwestern edge** (partial containment):
    a roughly **2,100-acre** Essex County reserve located **in portions of Maplewood, Millburn, and West Orange**, per
    **Essex County Parks**. (The CURRENT files say "2,110-acre" — use the city-page figure "roughly 2,100 acres".) It
    presses heavy canopy against western Maplewood roofs (Wyoming section) → leaf/branch debris in valleys & gutters,
    branch impact in nor'easters/summer storms, shade-driven moss/algae on north slopes. Keep **QUALITATIVE**.
  - Maplewood is set **between the First and Second Watchung ridges**; the East Branch of the Rahway River drainage and
    tree-lined streets give a localized low-lying/drainage angle — **QUALITATIVE only** (no FEMA zone/%/depth/named-street).
  - **Mature street-tree canopy** throughout → the defining Maplewood roof stressor. Keep QUALITATIVE (no canopy-% figure).
  - Maplewood borders **South Orange, Irvington, Newark, Union, Springfield, Millburn, and West Orange**. Do **NOT** import
    Belleville's "Second-River / Route 21," Nutley's "Third-River / ON3," Bloomfield's "town center / GSP," Irvington's
    "Vailsburg / I-78," East Orange's "flat Watsessing plain," or Orange's "Watchung-ridge-foot" framing as Maplewood's.
- **Climate (shared EWR baseline, HEDGED — identical to every prior city):** ~31.5 in/yr snow; nor'easters Oct–April;
  ~25–30 thunderstorms/yr; ground snow load **Pg ~25 psf** and **~110–115 mph ASCE 7-16** design wind kept **HEDGED**
  (not Essex-confirmed). **BAN every city-specific degree/gust number.** No distinct Maplewood microclimate number.
- **UNVERIFIED — never publish:** any population integer, an exact pre-1940/pre-1950 %, a median year built, the
  Construction Official's name, any individually designated landmark list, COA fees/fines, any street/section beyond the
  verified list above, any FEMA flood-zone figure, the "2,110-acre" reservation figure (use ~2,100), the fabricated
  "40–60% storm-spike" / "2–4 hour response" / named-quarry slate-inventory claims in the current files.

## D. De-fab targets present in the CURRENT combo files (fix all)
- `overview[0]` opens "Newark Quality Roofing delivers expert {service} in Maplewood — with prices starting from $X–$Y
  and free estimates available today" → **delete the price + hype**, replace with an answer-first NQR-applied,
  entity-grounded lead (bold the named topics; figure-free).
- **Pricing range** is the OLD `$350–$1,500` (and other invented tiers) → replace with the sourced default for the
  service type (§E): repair & maintenance `$400–$1,000`; replacement/installation `$10,000–$25,000`.
- **`whyChooseUs`** templated trust lines — "NJ licensed, GAF Certified — 15+ years protecting Essex County…",
  "Premium materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response" →
  **de-fab** to clean factual reasons (§E), using the **registered HIC / fully insured** framing.
- **Fabricated Maplewood-specific prose in the current files** — fabricated streets (**Ridgewood Road / Rutgers Street /
  Crestwood Drive / Prospect Street**), the "**40–60% storm-spike**," the "**2–4 hour** emergency-tarp response," "we
  pre-position tarps / enhanced storm-response protocols," named slate-quarry inventory ("**Vermont Unfading Green,
  Pennsylvania Black, Buckingham Virginia** … in standard repair sizes"), the "**2,110-acre**" figure, "Maplewood's
  Construction Department" → **DELETE/CORRECT all of it.** Replace with VERIFIED Maplewood texture (architect-designed
  Tudor/Colonial-Revival/Italian-Revival stock; plank decking at tear-off; Maplewood Village / Springfield Avenue
  storefronts; Wyoming reservation-edge canopy debris; the Article-VIII conditional-COA framework where it applies).
- **`conversionHooks.urgencyNote`** "Early action saves thousands" → factual, no fabricated savings.
- **Inline markdown self-links** like `[roof repair](/roof-repair)`, `[South Orange](/roof-repair-south-orange-nj)`,
  `[Millburn](/roof-repair-millburn-nj)`, `[West Orange](/roof-repair-west-orange-nj)`, `[Maplewood](/roofing-in-maplewood-nj)`
  → strip the link syntax (keep words as plain text; the committed siblings carry zero links).
- **Unsourced hard numbers** (decade-specific lifespans, the "25–30%"/"30%" repair-vs-replace rule) → name-source from
  the packs (the 30% rule = Kellow/Modernize/Josten per materials-economics §8; lifespans = the InterNACHI
  life-expectancy chart) or **de-quantify**.
- **Preserve** the genuinely good Maplewood texture (architect-designed period stock + plank decking at tear-off; slate/
  metal period detailing; Village / Springfield-Avenue low-slope membrane; valley-and-transition flashing failures;
  reservation-edge canopy debris) — restructure it answer-first, do not discard it.

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
- "Local Essex County crew familiar with Maplewood's architect-designed early-20th-century homes and Village storefronts."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials, NO "licensed.")

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in
Maplewood."). `urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural
water damage.").

## F. Differentiation directive (pre-empt cross-city overlap — ESPECIALLY with South Orange, the sibling in THIS batch)
**Maplewood and South Orange both border the South Mountain Reservation and share the tree-canopy / slate-heavy
period-housing pattern — they are the closest city pair in the project.** Lead with the facts that are UNIQUE to
Maplewood so the page never mirrors South Orange or the committed Newark/East Orange/Orange/Irvington/Bloomfield/
Belleville/Nutley versions:
- **Maplewood-DISTINCT anchors to FOREGROUND:** the **conditional / framework-only COA** (Article VIII exists but
  Maplewood Village HD is Register-ONLY; no active local district — confirm with the Township); the **South Mountain
  Reservation reaching INTO the WESTERN/northwestern edge (partial containment, ~2,100 acres in Maplewood/Millburn/West
  Orange)** loading the **Wyoming** section; **architect-designed Tudor / Colonial Revival / Italian Revival** homes
  (74.9% owner-occupied); **Maplewood Village + Springfield Avenue** storefronts and the **Maplewood NJ Transit station**
  buildings; the Construction Division at **574 Valley Street**.
- **AVOID importing South Orange's distinct anchors** (do NOT write these into a Maplewood combo): **Seton Hall
  University's 58-acre campus**, the **South Orange Performing Arts Center (SOPAC)**, the **binding Montrose Park /
  Village Code Chapter 185 COA**, the **"8,000 shade trees across 181 Village streets"** Fast-Facts figure, "over half
  predates 1940 / 82% predates 1960," the **76 South Orange Avenue** office, and the "reservation on the Reservation's
  EASTERN edge" framing (Maplewood = reservation reaching into its WESTERN edge — keep them distinct).
- For the **process-heavy / low-localizability** services — **roof-thermal-imaging-inspections, storm-damage-roof-repair,
  commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection, insurance-roof-replacement,
  roof-overlay-installation** — LEAD with the Maplewood situation (Village/Springfield-Avenue storefronts; reservation-edge
  Wyoming branch impact; architect-designed plank-deck tear-offs; owner-occupant documentation) before the standardized facts.
**Preserve every cited standard/cost fact** (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize/
InterNACHI figures) — differentiation is about which local facts lead, not about changing the sourced figures.

## G. Output format
Write the **complete file** to `<service>.snippet.ts` (in `.planning/content-system/combo-batch8-maplewood-southorange/maplewood/`)
— keep the exact first line `import type { ComboContent } from '../schema';` and the EXACT
`export const <ExportName>: ComboContent = {` you are given (so `maplewood/index.ts` imports stay valid). Keep
`serviceId` and `cityId: 'maplewood'` unchanged. **Omit the `definition` field.** Also write a short `<service>.md`
noting the de-fabs you cleared + the named sources you used. Voice/structure exemplar: the committed **Orange combo
`src/data/combo-content/orange/roof-repair.ts`** (same answer-first + entity-grounded shape — localize, do NOT copy
Orange's geography or COA) and the committed Maplewood **city page** `src/data/city-content/first-suburbs.ts`
(cityId 'maplewood') for verified Maplewood geography/voice.
