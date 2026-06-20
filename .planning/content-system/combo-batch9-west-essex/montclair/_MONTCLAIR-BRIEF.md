# Montclair Combo Author Brief — Combo Batch 9 (West Essex; entity-grounding inherited)

You are rewriting ONE Montclair service×city combo page (`src/data/combo-content/montclair/<service>.ts`)
**answer-first**, **de-fabbed**, and **entity-grounded**. The combo = the intersection of a service (already
rewritten answer-first at `src/data/service-content/<categoryFile>.ts`) and Montclair (facts below).
**Localize the finished service content to Montclair** — do not invent a new service story.

> Montclair = **Township of Montclair**, Essex County, NJ — a **First-Watchung-ridge township** with a **large
> pre-WWII housing majority** and roughly **54% of units in multi-unit structures (per the U.S. Census Bureau)**,
> adjoining the **Eagle Rock Reservation** and the **Mills Reservation** (per Essex County Parks). Its defining stock is
> **architecturally diverse early-20th-century homes** — Victorian, Queen Anne, Tudor, Craftsman, and Colonial Revival
> on tree-lined streets — plus the period storefronts of **Montclair Center (Bloomfield Avenue)**, **Watchung Plaza**,
> and the **Upper Montclair** business district. Frame the audience as **owner-occupants of a mature, architecturally
> diverse township** with a strong secondary commercial / multi-unit angle. The single biggest Montclair-specific fact
> for COA framing: **Montclair has a CONDITIONAL local Certificate-of-Appropriateness gate — required ONLY for
> appearance-changing exterior roofing on a property inside one of FOUR locally designated districts (Town Center,
> Upper Montclair Business, Pine Street, Watchung Plaza) or on a designated local landmark, under Article XXIII of
> Chapter 347 (§347-136); in-kind maintenance/repair with no change in design, scale, or appearance is EXEMPT.** This
> sits between Glen Ridge's binding borough-wide gate, Verona's narrow "HPC review," West Orange's landmark-only gate,
> and Cedar Grove's no-COA. **NEVER assert a Village-wide or township-wide COA.**

---

## 0. ENTITY-GROUNDING (read first — it changes directAnswer + credentials)
This batch bakes the site-wide entity-grounding pattern into the combos from the start (like Irvington, Bloomfield,
Belleville, Nutley, Maplewood, and South Orange did).

1. **`directAnswer` is entity-grounded** — author it in this exact shape (gold exemplars:
   `src/data/combo-content/orange/roof-repair.ts` and the committed Montclair CITY page
   `src/data/city-content/west-essex.ts`, cityId 'montclair'):
   > `**Newark Quality Roofing is a roofing contractor providing {service} across Montclair, New Jersey, and Essex County, {1–2 city-specific scope clauses}** … as a registered New Jersey Home Improvement Contractor.`
   - The **bolded span** (from "Newark Quality Roofing" through the scope clauses) must be **≤40 words** — end the
     bold before the credential tail if needed. The credential tail "as a registered New Jersey Home Improvement
     Contractor." is OUTSIDE the bold.
   - Establish **"Montclair, New Jersey"** (the state, spelled out) and **"roofing contractor"** as the descriptor.
   - This answers the page H1 "Who Provides {Service} in Montclair?". No modality.
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
(H1 "Who Provides {Service} in Montclair?", later H2 "What {Service} Is Available in Montclair?") — **do NOT write
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
   to Montclair's building stock** (figure-free; the entity definition is the separate spliced block — do not
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
   prose only, and **strip every existing markdown self-link** like `[commercial roof repair](/commercial-roof-repair)`
   or `[Montclair](/roofing-in-montclair-nj)`. The committed Newark/Orange/Irvington/Bloomfield/Belleville/Nutley/
   Maplewood/South-Orange combos carry ZERO inline links — match that. No synthesized superlatives.
6. **No price in any prose lead.** Pricing lives ONLY in the `pricing` field (see §E) and the cost FAQ.

## C. Montclair load-bearing facts (carry verbatim where used; source = the Montclair crib `.planning/content-system/cities-batchC/montclair.md` and the committed Montclair city page `src/data/city-content/west-essex.ts`, cityId 'montclair')
- **Permit office:** the **Township of Montclair Building Office** (the local UCC enforcing agency / permit office).
  Use that generic safe phrasing — FUNCTION only; do **NOT** name a Construction Official, a director, or a fee
  schedule, and do **NOT** publish a street address for it.
- **Reroof permit rule (statewide UCC — identical to every prior city):** a **detached one- or two-family reroof —
  including a full tear-off and re-cover — is "ordinary maintenance" under N.J.A.C. 5:23-2.7 and requires NO
  construction permit, no inspection, and no notice.** A permit IS required on **commercial, multi-family, or
  attached** buildings (the **25% rule**: repairing >25% of total roof area in a 12-month period) and any structural
  roof work; recover-vs-tear-off limits follow the **Rehab Subcode, N.J.A.C. 5:23-6.4**. Montclair's roughly 54%
  multi-unit stock and the Bloomfield Avenue / Watchung Plaza / Upper Montclair commercial storefronts are the natural
  place this commercial permit path applies, filed through the Township of Montclair Building Office.
- **Historic = CONDITIONAL LOCAL COA (KEY — four designated districts + local landmarks).** A **Certificate of
  Appropriateness from the Montclair Historic Preservation Commission** is required **ONLY for appearance-changing
  exterior roofing** on a property **inside one of the FOUR locally designated districts — Town Center, Upper Montclair
  Business, Pine Street, Watchung Plaza — or on a designated local landmark**, under **Article XXIII of Chapter 347
  (§347-136)**. **In-kind maintenance/repair with no change in design, scale, or appearance is EXEMPT.** The **Estate
  Section is NOMINATED only, NOT locally designated** — a typical reroof there follows the standard N.J.A.C. 5:23-2.7
  path. Per the **National Park Service**, **National Register listing alone places no federal restriction on a private
  owner**. Frame exactly:
  > *"Appearance-changing exterior roofing on a property in one of Montclair's four locally designated historic districts
  > — Town Center, Upper Montclair Business, Pine Street, or Watchung Plaza — or on a local landmark requires a Certificate
  > of Appropriateness from the Montclair Historic Preservation Commission under Article XXIII of Chapter 347, section
  > 347-136. In-kind maintenance or repair with no change in design, scale, or appearance does not require one, and the
  > Estate Section is nominated but not locally designated. Per the National Park Service, National Register listing alone
  > places no federal restriction on a private owner."*
  Rules:
  - **Assert the COA CONDITIONALLY** — only inside the four districts or on a local landmark. Indicative present
    ("requires a Certificate of Appropriateness"); NO `can`/`may`/modal hedge in the declarative.
  - **NEVER assert a Village-wide or township-wide COA.** In-kind repair is exempt; the Estate Section is not designated.
  - **Do NOT** import Glen Ridge's binding Chapter-15.32 borough-wide gate, Verona's "HPC review" / Chapter-150 Article
    XXII, West Orange's Section-25-30 landmark-only gate, Cedar Grove's no-COA, South Orange's Montrose-Park / Chapter-185
    framing, Bloomfield's Chapter-302 Property List, Nutley's Chapter-410 Third-River district, or Orange's four districts.
  - State the COA framework where the historic angle arises (historic-roof-restoration, slate/tile/cedar-shake,
    custom-roof-design-consultation). A COA, where it applies, is a **SEPARATE approval from the building permit**.
  - If the historic COA sentence runs long, **SPLIT it** so the first sentence (the definitive answer) stays ≤40 words —
    period after "…section 347-136," then the exemption and Estate-Section / NPS notes follow.
- **Housing stock:** **architecturally diverse early-20th-century** homes — **Victorian, Queen Anne, Tudor, Craftsman,
  and Colonial Revival** — on tree-lined streets, plus the period storefronts of Montclair Center (Bloomfield Avenue),
  Watchung Plaza, and Upper Montclair. **A large majority of the housing predates WWII (qualitative, per the Township of
  Montclair Housing Element)** and **roughly 54% of units sit in multi-unit structures, per the U.S. Census Bureau** —
  frame the multi-unit / commercial angle for low-slope and commercial services. **Do NOT publish a population integer or
  a pre-1940 %.** (The committed city page does cite "roughly 60% built before 1940, per the Township of Montclair Housing
  Element" in select paragraphs — you MAY reuse that exact named-sourced figure if the source is named, but the safe
  default is qualitative "a large majority predates WWII.") The older architecturally diverse stock → **plank/deteriorated
  sheathing discovered at tear-off**, aging valley/chimney/wall flashing, slate/metal/copper period detailing; the
  Bloomfield-Avenue / Watchung-Plaza / Upper-Montclair storefronts and two-/three-family rooflines → EPDM/TPO/mod-bit
  low-slope membrane.
- **Neighborhoods / sections (VERIFIED ONLY — drop anything not on this list):** **Upper Montclair** (prominent northern
  section, Upper Montclair train station + commercial corridor; Upper Montclair Business HD is a locally designated COA
  district), **Watchung Plaza** (early-20th-century shopping plaza at the Watchung Avenue station; Watchung Plaza Historic
  Business District is locally designated), **Montclair Center / Town Center** (downtown core along Bloomfield Avenue, the
  township's largest commercial district; Town Center HD is locally designated; attached storefront / low-slope stock),
  **Estate Section** (prominent residential south of Bloomfield Avenue, large period homes; **nominated but NOT a locally
  designated COA district** — standard 5:23-2.7 path), **Pine Street** (intact 1880s–1930s working-class district; Pine
  Street HD is locally designated), **South End** (southeast around Elm Street and Orange Road near Nishuane Park; denser
  and more affordable stock; **no COA district**), **Erwin Park** (quiet residential, Tudor and Colonial homes, mature
  canopy; **no COA district**). **DROP** any street/section NOT above — the CURRENT files FABRICATE "North Mountain
  Avenue," "Church Street," "Valley Road," "Montclair Heights," and similar; do **NOT** carry them. Do **NOT** publish a
  fabricated individual-landmark list.
- **Geography (HARD guardrails):**
  - Montclair lies along the **First Watchung ridge** and adjoins the **Eagle Rock Reservation** and the **Mills
    Reservation**, per **Essex County Parks**. The **west side stands more exposed to gusts than valley lots** — keep that
    **QUALITATIVE only** (NO elevation figure, NO "15–20 mph higher" gust number — the current files fabricate exactly that).
  - **RESERVATION GUARDRAIL MATRIX (cross-city contamination guard — never violate):**
    - **South Mountain Reservation = WEST ORANGE only** (in this batch). **Montclair, Glen Ridge, Verona, Cedar Grove do
      NOT touch it** — NEVER write South Mountain Reservation into a Montclair combo.
    - **Eagle Rock Reservation = West Orange, Montclair, Verona** (Montclair adjoins it — correct).
    - **Mills Reservation = Montclair, Cedar Grove** (Montclair adjoins it — correct).
    - **Hilltop Reservation = Verona, Cedar Grove** (NOT Montclair).
    - **Glen Ridge borders NO large county reservation** (inner lowland borough; canopy is the stressor).
  - **Mature street-tree canopy** plus the reservation edges → the defining Montclair roof stressor (leaf load and broken
    branches in valleys & gutters, branch impact in nor'easters/summer storms, shade-driven moss/algae on north slopes).
    Keep QUALITATIVE (no canopy-% figure, no "tree preservation ordinance" — the current files fabricate that).
  - Keep all Montclair geography QUALITATIVE. Do **NOT** import West Orange's "South Mountain + Eagle Rock," Glen Ridge's
    "no reservation / Toney's Brook lowland," Verona's "Peckman River / Hilltop," Cedar Grove's "Mills + Hilltop,"
    Maplewood's "South Mountain reaching into the western edge," South Orange's "reservation eastern edge," Belleville's
    "Second-River / Route 21," Nutley's "Third-River / ON3," Bloomfield's "town center / GSP," Irvington's "Vailsburg /
    I-78," East Orange's "flat Watsessing plain," or Orange's "Watchung-ridge-foot" framing as Montclair's.
- **Climate (shared EWR baseline, HEDGED — identical to every prior city):** ~31.5 in/yr snow; nor'easters Oct–April;
  ~25–30 thunderstorms/yr; ground snow load **Pg ~25 psf** and **~110–115 mph ASCE 7-16** design wind kept **HEDGED**
  (not Essex-confirmed). **BAN every city-specific degree/gust/elevation number.** No distinct Montclair microclimate number.
- **UNVERIFIED — never publish:** any population integer, an exact pre-1940/pre-1950 %, a median year built, the
  Construction Official's name, any individually designated landmark list, COA fees/fines, any street/section beyond the
  verified list above, any FEMA flood-zone figure, the fabricated "15–20 mph higher wind at upper elevations," the "130 mph
  wind / six-nail" specification, the "aggressive tree preservation ordinance," named-quarry slate-inventory claims
  ("active quarries in Vermont and Pennsylvania"), and any "same-day / 24/7 / within hours" response claim in the current files.

## D. De-fab targets present in the CURRENT combo files (fix all)
- `overview[0]` opens "Newark Quality Roofing delivers expert {service} in Montclair — with prices starting from $X–$Y
  and free estimates available today" → **delete the price + hype**, replace with an answer-first NQR-applied,
  entity-grounded lead (bold the named topics; figure-free).
- **Pricing range** is the OLD `$350–$1,500` (and other invented tiers like `$500–$5,000` on the commercial files) →
  replace with the sourced default for the service type (§E): repair & maintenance `$400–$1,000`;
  replacement/installation `$10,000–$25,000`.
- **`whyChooseUs`** templated trust lines — "NJ licensed, GAF Certified — 15+ years protecting Essex County…",
  "Premium materials from GAF, CertainTeed, and Owens Corning…", "Local team that knows Montclair — same-day estimates
  and 24/7 emergency response" → **de-fab** to clean factual reasons (§E), using the **registered HIC / fully insured**
  framing.
- **Fabricated Montclair-specific prose in the current files** — fabricated streets (**North Mountain Avenue / Church
  Street / Valley Road**) and a fabricated section (**"Montclair Heights"**); the fabricated **"15 to 20 miles per hour"
  higher-wind-at-upper-elevations** claim and "enhanced fastening schedules / wind-rated sealant" for it; the **"130 mph
  wind resistance with enhanced six-nail fastening"** spec; the **"aggressive tree preservation ordinance"** and "township
  tree ordinance requires permits"; the named slate-quarry inventory ("salvage inventory of reclaimed slate," "active
  quarries in Vermont and Pennsylvania"); the **"same-day emergency response" / "mobilize within hours"** claims;
  "Montclair's Construction Department" if present → **DELETE/CORRECT all of it.** Replace with VERIFIED Montclair texture
  (architecturally diverse Victorian/Queen-Anne/Tudor/Craftsman/Colonial-Revival stock; plank decking at tear-off; the
  Bloomfield-Avenue / Watchung-Plaza / Upper-Montclair storefronts and 54%-multi-unit two-/three-family rooflines;
  reservation-edge + street-canopy debris; the Article-XXIII conditional four-district COA where it applies).
- **`conversionHooks.urgencyNote`** "Early action saves thousands" → factual, no fabricated savings.
- **Inline markdown self-links** like `[commercial roof repair](/commercial-roof-repair)`,
  `[Montclair](/roofing-in-montclair-nj)`, `[Bloomfield](/commercial-roof-repair-bloomfield-nj)`,
  `[West Orange](/commercial-roof-repair-west-orange-nj)` → strip the link syntax (keep words as plain text; the committed
  siblings carry zero links).
- **Unsourced hard numbers** (decade-specific lifespans, the "25–30%"/"30%"/"twenty-five percent" repair-vs-replace rule)
  → name-source from the packs (the 30% / 25%-area rule = Kellow/Modernize/Josten/RapidRestore per materials-economics §8;
  lifespans = the InterNACHI life-expectancy chart; ponding >48 hours / ¼-in-per-foot slope = the NRCA and ARMA; flashing
  90–95% of leaks = an industry estimate attributed to the NRCA) or **de-quantify**.
- **Preserve** the genuinely good Montclair texture (architecturally diverse period stock + plank decking at tear-off;
  slate/copper period detailing and corroded-fastener / degraded-flashing failure mode; Tudor wall-to-roof transition
  flashing migration; complex steep-slope turret/dormer/valley geometry; Bloomfield-Avenue / Watchung-Plaza / Upper-Montclair
  low-slope membrane; reservation-edge + street-canopy debris) — restructure it answer-first, do not discard it.

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
- "Local Essex County crew familiar with Montclair's architecturally diverse Victorian, Tudor, and Colonial Revival homes and Bloomfield Avenue storefronts."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials, NO "licensed.")

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in
Montclair."). `urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural
water damage.").

## F. Differentiation directive (pre-empt cross-city overlap — the in-archetype WEST-ESSEX siblings are the primary target)
**The four other West-Essex cities — West Orange, Glen Ridge, Verona, Cedar Grove — share the ridge/reservation,
tree-canopy, and pre-war period-housing pattern.** Lead with the facts that are UNIQUE to Montclair so the page never
mirrors a sibling or the committed Newark/East Orange/Orange/Irvington/Bloomfield/Belleville/Nutley/Maplewood/
South-Orange versions:
- **Montclair-DISTINCT anchors to FOREGROUND:** the **CONDITIONAL local COA — four locally designated districts (Town
  Center, Upper Montclair Business, Pine Street, Watchung Plaza) + local landmarks, Article XXIII of Chapter 347
  §347-136, in-kind exempt, Estate Section nominated-not-designated**; the **Eagle Rock + Mills Reservation adjacency on
  the First Watchung ridge** plus the heavy street-tree canopy; **architecturally diverse Victorian / Queen Anne / Tudor /
  Craftsman / Colonial Revival** homes with **~54% of units in multi-unit structures (per the U.S. Census Bureau)**; the
  verified neighborhoods (**Upper Montclair, Watchung Plaza, Montclair Center/Town Center, Estate Section, Pine Street,
  South End, Erwin Park**); the **Bloomfield Avenue** commercial corridor; the **Township of Montclair Building Office**
  permit path.
- **AVOID importing the OTHER four West-Essex siblings' anchors** (do NOT write these into a Montclair combo):
  - **West Orange:** NARROW **LANDMARK-ONLY COA** (Section 25-30; ~10 designated landmarks; Llewellyn Park = private
    deed-of-trust, NOT a township COA); office the **Township of West Orange Building & Construction Code Enforcement**
    (the State UCC enforcing agency); **South Mountain + Eagle Rock**.
  - **Glen Ridge:** **BINDING LOCAL COA, BROADEST IN THE BATCH** (Chapter 15.32; district covers >90% of the borough);
    office the **Borough of Glen Ridge Building Department at 825 Bloomfield Avenue**; **NO reservation** (Toney's Brook
    lowland).
  - **Verona:** NARROW **"HPC REVIEW"** (Chapter 150 Article XXII; only 2 designated landmarks; in-kind exempt; **NOT a
    literal "Certificate of Appropriateness"**); office the **Township of Verona Department of Building and Inspections,
    Municipal Building, 600 Bloomfield Avenue**; **Eagle Rock + Hilltop + Peckman River**.
  - **Cedar Grove:** **NONE** (no HPC, no COA; advisory **Heritage Advisory Committee** only); office the **Township of
    Cedar Grove Building Department at 525 Pompton Avenue**; **Mills + Hilltop**.
- **AVOID** the committed Newark / East Orange / Orange / Irvington / Bloomfield / Belleville / Nutley / Maplewood /
  South-Orange anchors as well.
- For the **process-heavy / low-localizability** services — **roof-thermal-imaging-inspections, storm-damage-roof-repair,
  commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection, insurance-roof-replacement,
  roof-overlay-installation** — LEAD with the Montclair situation (Bloomfield-Avenue / Watchung-Plaza / Upper-Montclair
  storefronts; 54%-multi-unit two-/three-family rooflines; reservation-edge + street-canopy branch impact; architecturally
  diverse plank-deck tear-offs; the four-district conditional COA where it applies; owner-occupant documentation) before
  the standardized facts.
**Preserve every cited standard/cost fact** (ASTM C1153, NRCA cadence, IRC/UCC sections, NPS Preservation Brief 29,
Secretary of the Interior's Standard 6, HomeAdvisor/Modernize/InterNACHI figures) — differentiation is about which local
facts lead, not about changing the sourced figures.

## G. Output format
Write the **complete file** to `<service>.snippet.ts` (in
`.planning/content-system/combo-batch9-west-essex/montclair/`) — keep the exact first line
`import type { ComboContent } from '../schema';` and the EXACT `export const <ExportName>: ComboContent = {` you are
given (so `montclair/index.ts` imports stay valid). Keep `serviceId` and `cityId: 'montclair'` unchanged. **Omit the
`definition` field.** Also write a short `<service>.md` noting the de-fabs you cleared + the named sources you used.
Voice/structure exemplar: the committed **Orange combo `src/data/combo-content/orange/roof-repair.ts`** (same
answer-first + entity-grounded shape — localize, do NOT copy Orange's geography or COA) and the committed Montclair
**city page** `src/data/city-content/west-essex.ts` (cityId 'montclair') for verified Montclair geography/voice.
