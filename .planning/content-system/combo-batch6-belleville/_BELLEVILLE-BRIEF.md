# Belleville Combo Author Brief — Combo Batch 6 (entity-grounding inherited)

You are rewriting ONE Belleville service×city combo page (`src/data/combo-content/belleville/<service>.ts`)
**answer-first**, **de-fabbed**, and **entity-grounded**. The combo = the intersection of a service (already
rewritten answer-first at `src/data/service-content/<categoryFile>.ts`) and Belleville (facts below).
**Localize the finished service content to Belleville** — do not invent a new service story.

> Belleville = **Township of Belleville**, Essex County, NJ — an inner-ring "first-suburb" (~3.30 sq mi, ~38,222
> residents, 2020 Census) **directly north of Newark**, sharing its southern/southwestern border with Newark along the
> **Second River**. Its defining stock is an **older, dense mix of single-family and two-family homes plus substantial
> small/mid multi-family** (postwar garden apartments), with **roughly one-third built before 1940** and **about half of
> all units in 2-or-more-unit structures**; the oldest, densest stock concentrates near the **river/southern (Soho)
> edge** and the **Washington Avenue** corridor. Ownership is a **roughly even owner/renter split (~55.9% owner-occupied)**
> — frame the audience as **owner-occupants AND two-family / small multi-family owners**, NOT a high-homeownership suburb
> and NOT a majority-renter township. The single biggest Belleville-specific fact for COA framing: **Belleville HAS an
> active Historic Preservation Commission, but it has NO locally designated district and only ONE designated local landmark
> (a church) — so a typical homeowner reroof requires NO Certificate of Appropriateness.** (This is the OPPOSITE of
> Bloomfield's binding Ch. 302 listed-parcel COA gate; it is closest to East Orange / Irvington, except an HPC does exist
> as a body — so state "an active HPC but no reroof COA," never "Bloomfield's Ch. 302 gate" and never "no HPC at all.")

---

## 0. ENTITY-GROUNDING (read first — it changes directAnswer + credentials)
This batch bakes the site-wide entity-grounding pattern into the combos from the start (Newark/EO/Orange got it as a
retrofit; Belleville gets it natively, like Irvington and Bloomfield did).

1. **`directAnswer` is entity-grounded** — author it in this exact shape (gold exemplars:
   `src/data/combo-content/orange/roof-repair.ts` and the committed Belleville CITY page
   `src/data/city-content/first-suburbs.ts`, cityId 'belleville'):
   > `**Newark Quality Roofing is a roofing contractor providing {service} across Belleville, New Jersey, and Essex County, {1–2 city-specific scope clauses}** … as a registered New Jersey Home Improvement Contractor.`
   - The **bolded span** (from "Newark Quality Roofing" through the scope clauses) must be **≤40 words** — end the
     bold before the credential tail if needed. The credential tail "as a registered New Jersey Home Improvement
     Contractor." is OUTSIDE the bold.
   - Establish **"Belleville, New Jersey"** (the state, spelled out) and **"roofing contractor"** as the descriptor.
   - This answers the page H1 "Who Provides {Service} in Belleville?". No modality.
2. **DO NOT author a `definition` field.** The canonical "What Is {service}?" definition is propagated verbatim from
   the service layer by a deterministic post-assembly splice (entity-stable across all cities). If you write one it
   will be overwritten — omit it entirely.
3. **Credential = "registered New Jersey Home Improvement Contractor" — NEVER "licensed" for NQR.** NJ has no
   standalone roofing license; roofing is HIC *registration* (N.J.S.A. 56:8-136). NQR self-credential framing is
   **"a registered New Jersey Home Improvement Contractor"** and, where insurance is mentioned, **"fully insured."**
   Do **NOT** write "licensed and insured," "NJ licensed," or "licensed roofing contractor" for NQR anywhere
   (directAnswer, overview, challenges, process, faqs, whyChooseUs, metaDescription, conversionHooks).
   - KEEP factual **third-party** "licensed" cites verbatim where the fact pack uses them: a *licensed Construction
     Official*, a *licensed public adjuster or attorney* (N.J.S.A. 17:22B), a *licensed structural/professional
     engineer*, a *licensed asbestos abatement* contractor, "*not licensed to remediate mold*." Those are correct.

---

## A. The combo render contract (author to these fields, in this order)
`ComboTemplate` renders: **EntityDefinition** (first H2 "What Is {Service}?" — *spliced, you do NOT write it*) →
`directAnswer` (hero, copper-bold) → `overview` (ProseLead, **first string = lead**) → `challenges` (ProseLead,
first string = lead) → `conversionHooks.midPageCta`+`urgencyNote` → `process` (parseRichText) → `pricing` →
`whyChooseUs` (**ignored at render — but still de-fab it**) → `faqs` (parseRichText). Headings are template-driven
(H1 "Who Provides {Service} in Belleville?", later H2 "What {Service} Is Available in Belleville?") — **do NOT write
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
   to Belleville's building stock** (figure-free; the entity definition is the separate spliced block — do not
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
   prose only, and **strip every existing markdown self-link** like `[roof repair](/roof-repair)`. The committed
   Newark/Orange/Irvington/Bloomfield combos carry ZERO inline links — match that. No synthesized superlatives.
6. **No price in any prose lead.** Pricing lives ONLY in the `pricing` field (see §E) and the cost FAQ.

## C. Belleville load-bearing facts (carry verbatim where used; source = CITY-FACTS-first-suburbs.md §0–§5 + Belleville section, and the committed Belleville city page `src/data/city-content/first-suburbs.ts`, cityId 'belleville')
- **Permit office:** the **Township of Belleville's construction office** (construction permits / UCC enforcement).
  Use the generic safe phrasing ("the Township of Belleville's construction office"); do **NOT** name a director or a
  fee schedule.
- **Reroof permit rule (statewide UCC — identical to Newark/East Orange/Orange/Irvington/Bloomfield):** a **detached
  one- or two-family reroof — including a full tear-off and re-cover — is "ordinary maintenance" under N.J.A.C.
  5:23-2.7 and requires NO construction permit, no inspection, and no notice.** A permit IS required on **commercial,
  multi-family, or attached** buildings (the **25% rule**: repairing >25% of total roof area in a 12-month period) and
  any structural roof work; recover-vs-tear-off limits follow the **Rehab Subcode, N.J.A.C. 5:23-6.4**. Load-bearing
  here: Belleville has a **significant two-family / small multi-family / garden-apartment share** (about half of units
  sit in 2+-unit structures), so the permit-required commercial/multi-family path applies to a large share of its stock
  — frame this qualitatively (do NOT publish a renter % or a 5+-unit %).
- **Historic = ACTIVE HPC but NO reroof COA (KEY — the OPPOSITE of Bloomfield's binding gate).** The **Township of
  Belleville HAS an active Historic Preservation Commission** (a municipal body), **but it has NO locally designated
  historic district and only ONE confirmed local landmark designation** — the **Old Reformed Church / Reformed Dutch
  Church of Second River (171 Main Street), designated a local landmark on July 4, 2014.** Frame exactly:
  *"Belleville maintains an active Historic Preservation Commission, but a typical detached one- or two-family reroof
  requires no Certificate of Appropriateness — the Township has no locally designated historic district, and its only
  confirmed local landmark designation is a single church."* Rules:
  - Do **NOT** assert that a Certificate of Appropriateness is required for a typical homeowner reroof. A COA, if it
    applies at all, applies only to the single 2014-designated church landmark.
  - The **Reformed Dutch Church is also Register-listed** (NJ Register July 12, 1978; National Register Dec 21, 1978) —
    that Register status is **separate** from the 2014 local designation. Per the **National Park Service**, a
    Register listing alone places **no restriction** on a private property owner.
  - Frame any other historic property as **Register-only/honorary with no private-reroof restriction**.
  - Where a historic angle arises (historic-roof-restoration, slate/tile/cedar-shake, custom-roof-design-consultation),
    state the **active-HPC-but-no-reroof-COA** position — do **NOT** import Bloomfield's Ch. 302 / Property-List gate,
    Newark's, or Orange's COA districts, and do **NOT** say Belleville "has no HPC."
- **Housing stock:** ~38,222 residents in ~3.30 sq mi (2020 Census — use qualitatively). Defining stock = an **older,
  dense mix of single-family and two-family homes plus substantial small/mid multi-family** (postwar garden
  apartments). **About one-third of units predate 1940**; the oldest, densest stock concentrates near the **river/
  southern (Soho) edge** and the **Washington Avenue** corridor (frame "older pre-war / mid-century stock" / "1920s–
  1940s homes" qualitatively — do **NOT** publish an exact pre-1940 % or a median year built; both are UNVERIFIED).
  **About half of all units sit in 2-or-more-unit structures** (two-family + small multi-family + garden apartments,
  flat-roofed → EPDM/TPO/mod-bit membrane). Ownership is a **roughly even owner/renter split** — frame the audience as
  **owner-occupants AND two-family / small multi-family owners** (NOT majority-renter, NOT high-homeownership).
- **Neighborhoods / sections (VERIFIED ONLY — drop anything not on this list):**
  - **Soho** — a real, confirmed Belleville section (formerly part of Woodside, absorbed 1869) of **older, denser stock
    near the southern/river edge**; the densest, oldest building fabric concentrates here.
  - **Silver Lake** — a census-designated place **split between Belleville and Bloomfield** (NOT Newark); dense
    rental and two-family character, with shopping/dining along **Washington Avenue**.
  - **Belwood** and **Big Tree** — named Belleville locales/place names.
  - **Washington Avenue** — Belleville's **principal commercial spine** (storefronts, mixed-use, small commercial);
    Town Hall / the Building & Construction Code office sits at **152 Washington Avenue**.
  - **Main Street** — a verified Belleville civic-core street: the 2014-designated **Old Reformed Church of Second
    River** sits at **171 Main Street**, and "Main Street and Washington Avenue storefronts" anchor the commercial core.
  - **Franklin Avenue** and **Stephens Street** — real **STREETS** (commercial/residential), NOT named "sections" —
    refer to them as streets, never as neighborhoods.
  - **DROP** any street/section NOT above (e.g. "Joralemon Street," "Mill Street," "Belleville Turnpike corridor,"
    Italian-American neighborhood framing — all unverified or fabricated; do not use).
- **Geography (HARD guardrails):** Belleville is a township **north of Newark**. Keep the **two rivers distinct**:
  - The **Second River** forms Belleville's **southern/southwestern border with Newark** and flows through Branch Brook
    Park before joining the Passaic. **NEVER write "the Passaic River separates Belleville from Newark" — that border
    is the Second River.**
  - The **Passaic River** forms Belleville's **eastern/northeastern boundary**; Belleville sits on the **WEST bank**,
    opposite North Arlington, Lyndhurst, and Kearny. Low-lying riverfront parcels carry **flood exposure described
    qualitatively only (NO FEMA zone or figure).**
  - **Branch Brook Park** (principally Newark's North Ward) **extends into Belleville at its northern end** — do **NOT**
    claim the park is *in* Belleville; say it *extends into* / *borders* Belleville's northern end.
  - Belleville borders **Bloomfield, Newark, Nutley** (Essex Co.); **Lyndhurst, North Arlington** (Bergen Co.); and
    **Kearny** (Hudson Co.). **NO reservation** applies to Belleville (do not invent one).
  - The **Route 21 (McCarter Highway) / Passaic riverfront corridor** carries **industrial / commercial flat & low-slope
    roof types** (EPDM/TPO/mod-bit) versus the residential interior — keep this **qualitative and general** (not pinned
    to a city-specific named source).
  - Do **NOT** import Irvington's "no-river/Vailsburg/I-78" framing, East Orange's "flat Watsessing plain," Orange's
    "Watchung-ridge" framing, or Bloomfield's "Third River / town center" framing.
- **Climate (shared EWR baseline, HEDGED — identical to Newark/EO/Orange/Irvington/Bloomfield):** ~31.5 in/yr snow;
  nor'easters Oct–April; ~25–30 thunderstorms/yr; ground snow load **Pg ~25 psf** and **~110–115 mph ASCE 7-16** design
  wind kept **HEDGED** (not Essex-confirmed). **Urban heat island = EPA-attributed, QUALITATIVE ONLY** ("about 1–7°F
  higher than outlying areas"). Mature street-tree canopy (oak/maple/sycamore) loads valleys & gutters with leaf/branch
  debris. **BAN every city-specific degree/gust number.** No distinct Belleville microclimate number.
- **UNVERIFIED — never publish:** exact pre-1940 %, median year built, renter/owner %, 5+-unit %, the official
  construction-department name/director, the permit fee, any neighborhood/street beyond the verified list above
  (Joralemon, Mill, Belleville Turnpike, etc.), lot-width or house-spacing figures, any ethnic-community/language
  framing, a COA requirement for a typical reroof, any FEMA flood-zone figure.

## D. De-fab targets present in the CURRENT combo files (fix all)
- `overview[0]` opens "Newark Quality Roofing delivers expert {service} in Belleville — with prices starting from
  $X–$Y and free estimates available today" → **delete the price + hype**, replace with an answer-first NQR-applied
  lead (bold the named topics; figure-free).
- **Pricing range** is the OLD `$350–$1,500` → replace with the sourced default for the service type (§E): repair &
  maintenance `$400–$1,000`; replacement/installation `$10,000–$25,000`.
- **`whyChooseUs`** templated trust lines — "NJ licensed, GAF Certified — 15+ years protecting Essex County…",
  "Premium materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response" →
  **de-fab** to clean factual reasons (see §E), using the **registered HIC / fully insured** framing.
- **Fabricated Belleville-specific prose in the current files** — "Italian-American community character," "speak with
  homeowners in Italian," "Washington Avenue bakeries," narrow "25-to-40-foot lots," homes "eight feet apart,"
  "Joralemon Street," "Mill Street," "Belleville Turnpike corridor," "multi-generational repeat business,"
  "same-day completion" → **DELETE all of it.** Replace with VERIFIED Belleville texture (Soho older river-edge stock;
  two-family / small multi-family membrane roofs; Washington Avenue commercial spine; Route 21 / Passaic riverfront
  flat roofs; low-lying Passaic-riverfront drainage; mature-canopy debris; Second-River Newark border).
- **`conversionHooks.urgencyNote`** "Early action saves thousands" → factual, no fabricated savings.
- **Inline markdown self-links** like `[roof repair](/roof-repair)` or `[Bloomfield](/roof-repair-bloomfield-nj)` →
  strip the link syntax (keep words as plain text; the committed siblings carry zero links).
- **Unsourced hard numbers** (decade-specific lifespans like "20–25-year design life," "30–40-year corrosion," the
  "30 percent" repair-vs-replace rule) → name-source from the packs (the 30% rule = Kellow/Modernize/Josten per
  materials-economics §8; lifespans = the InterNACHI life-expectancy chart) or **de-quantify**.
- **Preserve** the genuinely good Belleville texture (older two-family / small multi-family / garden-apartment stock;
  flat-roof membrane work; valley-and-transition flashing failures; vent-boot leak sources; two-family owner
  landlord-tenant documentation; Soho / Silver Lake / Washington Avenue; Route 21 / Passaic riverfront commercial flat
  roofs; mature-canopy debris; low-lying Passaic riverfront drainage) — restructure it answer-first, do not discard it.

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
- "Local Essex County crew familiar with Belleville's older single-family, two-family, and small multi-family building stock."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials, NO "licensed.")

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in
Belleville."). `urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural
water damage.").

## F. Differentiation directive (pre-empt cross-city overlap with Newark/East Orange/Orange/Irvington/Bloomfield)
For the **process-heavy / low-localizability** services — **roof-thermal-imaging-inspections, storm-damage-roof-repair,
commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection, insurance-roof-replacement,
roof-overlay-installation** (and similar standardized-process pages) — **foreground the Belleville-specific application**
so the page does not mirror the other five cities. Lead with the local situation, then bring in the standardized facts:
- **Washington Avenue commercial spine + the Route 21 / McCarter Highway / Passaic riverfront corridor** — storefronts,
  mixed-use, and industrial/commercial flat & low-slope roofs.
- **Flat-roofed two-family homes + small multi-family + postwar garden apartments** (about half of units) → membrane
  stock, parapet/wall flashing, owner/landlord documentation; tenant-occupied access under NJ landlord–tenant notice.
- **Soho** older, denser river-edge stock; **low-lying Passaic-riverfront** drainage (qualitative flood exposure);
  **mature street-tree canopy** loading valleys and gutters with leaf/branch debris.
- **Older pre-war / mid-century stock** → plank decking discovered at tear-off; aging flashing details on Colonials and
  Capes.
**Preserve every cited standard/cost fact** (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize/
InterNACHI figures) — differentiation is about which local facts lead, not about changing the sourced figures.

## G. Output format
Write the **complete file** to `<service>.snippet.ts` — keep the exact first line
`import type { ComboContent } from '../schema';` and the EXACT `export const <ExportName>: ComboContent = {` you are
given (so `belleville/index.ts` imports stay valid). Keep `serviceId` and `cityId: 'belleville'` unchanged. **Omit the
`definition` field.** Also write a short `<service>.md` noting the de-fabs you cleared + the named sources you used.
Voice/structure exemplar: the committed **Orange combo `src/data/combo-content/orange/roof-repair.ts`** (same
answer-first + entity-grounded shape — localize, do not copy Orange's geography or COA) and the committed Belleville
**city page** `src/data/city-content/first-suburbs.ts` (cityId 'belleville') for verified Belleville geography/voice.
