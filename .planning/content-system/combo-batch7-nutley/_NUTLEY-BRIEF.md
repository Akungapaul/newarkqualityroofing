# Nutley Combo Author Brief — Combo Batch 7 (entity-grounding inherited)

You are rewriting ONE Nutley service×city combo page (`src/data/combo-content/nutley/<service>.ts`)
**answer-first**, **de-fabbed**, and **entity-grounded**. The combo = the intersection of a service (already
rewritten answer-first at `src/data/service-content/<categoryFile>.ts`) and Nutley (facts below).
**Localize the finished service content to Nutley** — do not invent a new service story.

> Nutley = **Township of Nutley**, Essex County, NJ — an inner-ring "first-suburb" (~3.4 sq mi, **about 30,000
> residents** — 2020 Census 30,143) **north of Newark**, on the **Passaic River** (which forms its western edge). Its
> defining stock is **predominantly older, predominantly single-family homes** built in the streetcar/railroad-suburb era
> (much **~1890–1940**, Lambert-era developments) **plus substantial 1940s–60s stock and some two-family / small
> multi-family**. Ownership is an **owner-occupied MAJORITY (60.5% owner-occupied; ~30.1% of units in multi-unit
> structures)** — frame the audience as **owner-occupants of a mature single-family suburb**, with a secondary two-family /
> small multi-family and large-commercial (ON3) angle. NOT a renter-majority urban core and NOT an even owner/renter
> split. The single biggest Nutley-specific fact for COA framing: **Nutley HAS a local Historic Preservation Committee
> with a BINDING Certificate-of-Appropriateness gate — its Historic Preservation ordinance (Chapter 410) designates a
> "Historic District of the Third River and Environs" where exterior work, including roofing, requires a COA.** (This is
> the OPPOSITE of Belleville's "active HPC but no district / no COA"; it is closest to Bloomfield's and Orange's binding
> gates — but Nutley's gate is its OWN Chapter 410 / Third River district, NOT Bloomfield's Chapter 302 Property List and
> NOT Orange's four districts. Cite "Chapter 410" generically and tell the owner to verify the specific parcel.)

---

## 0. ENTITY-GROUNDING (read first — it changes directAnswer + credentials)
This batch bakes the site-wide entity-grounding pattern into the combos from the start (Newark/EO/Orange got it as a
retrofit; Nutley gets it natively, like Irvington, Bloomfield, and Belleville did).

1. **`directAnswer` is entity-grounded** — author it in this exact shape (gold exemplars:
   `src/data/combo-content/orange/roof-repair.ts` and the committed Nutley CITY page
   `src/data/city-content/first-suburbs.ts`, cityId 'nutley'):
   > `**Newark Quality Roofing is a roofing contractor providing {service} across Nutley, New Jersey, and Essex County, {1–2 city-specific scope clauses}** … as a registered New Jersey Home Improvement Contractor.`
   - The **bolded span** (from "Newark Quality Roofing" through the scope clauses) must be **≤40 words** — end the
     bold before the credential tail if needed. The credential tail "as a registered New Jersey Home Improvement
     Contractor." is OUTSIDE the bold.
   - Establish **"Nutley, New Jersey"** (the state, spelled out) and **"roofing contractor"** as the descriptor.
   - This answers the page H1 "Who Provides {Service} in Nutley?". No modality.
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
(H1 "Who Provides {Service} in Nutley?", later H2 "What {Service} Is Available in Nutley?") — **do NOT write
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
   to Nutley's building stock** (figure-free; the entity definition is the separate spliced block — do not
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
   Newark/Orange/Irvington/Bloomfield/Belleville combos carry ZERO inline links — match that. No synthesized superlatives.
6. **No price in any prose lead.** Pricing lives ONLY in the `pricing` field (see §E) and the cost FAQ.

## C. Nutley load-bearing facts (carry verbatim where used; source = CITY-FACTS-first-suburbs.md §Nutley + §0–§5, and the committed Nutley city page `src/data/city-content/first-suburbs.ts`, cityId 'nutley')
- **Permit office:** the **Township of Nutley Code Enforcement Department** (the State UCC enforcing agency; Town Hall,
  2nd Floor). Use the generic safe phrasing ("the Township of Nutley Code Enforcement Department"); do **NOT** name a
  Construction Official, a director, or a fee schedule. **A prior pass FABRICATED a Construction Official named "James
  O'Malley, PE" — never name an individual.**
- **Reroof permit rule (statewide UCC — identical to Newark/East Orange/Orange/Irvington/Bloomfield/Belleville):** a
  **detached one- or two-family reroof — including a full tear-off and re-cover — is "ordinary maintenance" under
  N.J.A.C. 5:23-2.7 and requires NO construction permit, no inspection, and no notice.** A permit IS required on
  **commercial, multi-family, or attached** buildings (the **25% rule**: repairing >25% of total roof area in a
  12-month period) and any structural roof work; recover-vs-tear-off limits follow the **Rehab Subcode, N.J.A.C.
  5:23-6.4**. Nutley's large-commercial/institutional **ON3** campus (below) is the natural place this commercial /
  multi-family permit path applies. **Do NOT claim Nutley "eliminates exemptions for minor roofing"** (a prior pass
  asserted this — UNCONFIRMED and contrary to the statewide UCC).
- **Historic = BINDING LOCAL COA (KEY — the OPPOSITE of Belleville; closest to Bloomfield/Orange but its OWN ordinance).**
  The **Township of Nutley has a local Historic Preservation Committee** that issues/denies **binding Certificates of
  Appropriateness** for exterior work (including roofing) on regulated properties, authorized under **N.J.S.A. 40:55D-107
  et seq.** Nutley's **Historic Preservation ordinance is Chapter 410** (adopted 2012, amended 2017). Frame exactly:
  *"Nutley's Historic Preservation ordinance (Chapter 410) designates a Historic District of the Third River and Environs,
  where exterior roofing requires a Certificate of Appropriateness from the Nutley Historic Preservation Committee — a
  separate approval from the construction permit. Verify the specific parcel against the Township's official
  historic-district map."* Rules:
  - **Cite "Chapter 410" generically.** It is the Historic Preservation chapter. **Chapter 272 is the SEPARATE
    Construction Codes chapter — do NOT conflate them** (a prior pass confused the two).
  - The **one locally designated district named in the accessible ordinance text is the "Historic District of the Third
    River and Environs."** Do **NOT** invent sub-sections, additional districts, COA **fees**, **fines** ("$2,000/day"),
    a "200-foot buffer zone," or a list of individually designated landmarks. **A prior pass FABRICATED a five-landmark
    list (Public Library / First Presbyterian Church / Historical Society Museum / Woodland Cemetery Chapel / former Town
    Hall) and invented fees/fines/buffers — NONE is confirmed; never publish them.**
  - The block/lot **boundary map is held on file with the Township, NOT in the public code** — always tell the owner to
    **"verify the specific parcel against the Township's official historic-district map."**
  - **The Enclosure** (the dead-end artists'/writers'-colony lane by the Third River) is **National-Register-listed (1974)
    for certain**; its **LOCAL** designation is **LIKELY-but-UNCONFIRMED** (it lies along the Third River and is very
    likely within the local district, but the ordinance does not name it by parcel). **Do NOT flatly assert "a reroof in
    The Enclosure requires a COA"** — write "verify the specific parcel against the Township's official historic-district
    map." Per the **National Park Service**, a Register listing alone places **no restriction** on a private owner.
  - A **COA is a SEPARATE approval from the building permit**, not a substitute for it (and not a substitute the other
    way). State this where the historic angle arises (historic-roof-restoration, slate/tile/cedar-shake,
    custom-roof-design-consultation). Do **NOT** import Bloomfield's Chapter 302 / Property-List framing, Orange's
    four-district framing, or Newark's COA districts.
- **Housing stock:** ~30,143 residents in ~3.4 sq mi (2020 Census — use qualitatively; **NEVER ~35,000 / ~34,981 — that
  figure is WRONG**). Defining stock = **predominantly older, predominantly single-family** homes (much **~1890–1940**,
  Lambert-era Prospect Heights / Terrace Height / Nutley Park) **plus 1940s–60s stock and some two-family / small
  multi-family** and small apartment buildings; tree-lined streets throughout. Frame "mostly pre-WWII to mid-century
  single-family, with some two-family" qualitatively — do **NOT** publish an exact pre-1940/pre-1950 % or a median year
  built (both UNVERIFIED). Ownership = **owner-occupied majority (60.5%)** with **~30.1% of units in multi-unit
  structures** — frame the audience as **owner-occupants of a mature single-family suburb** (with a secondary two-family /
  small multi-family + ON3 commercial angle). The older single-family stock → **plank decking discovered at tear-off**,
  aging flashing on Colonials/Capes; the two-family/small-multi + flat-roofed commercial → EPDM/TPO/mod-bit membrane.
- **Neighborhoods / sections (VERIFIED ONLY — drop anything not on this list):**
  - **Five school-anchored sections** — Nutley is commonly divided into five sections, each with its own grammar school:
    **Spring Garden, Radcliffe, Lincoln, Washington, and Yantacaw** ("Yantacaw" is the standard spelling).
  - **Yantacaw** — a primarily-residential NE section; home to **Yantacaw Park** (the **Third River runs through it**).
  - **Spring Garden** — tree-lined residential section (name from former fresh-water springs).
  - **Radcliffe** — quiet, tree-lined residential section in the southern township; well-kept single-family homes.
  - **Avondale** — a real section in the **EASTERN** part of Nutley; residential + commercial near shopping corridors.
  - **Franklin Avenue** — Nutley's **principal commercial spine / downtown (Nutley Center)**. Treat "Franklin" primarily
    as the commercial **AVENUE** / downtown, NOT a tightly bounded residential neighborhood.
  - **The Enclosure** — a real, distinctive **dead-end historic lane** near the Third River (artists'/writers' colony).
    Present it as a **notable historic enclave**, NOT a general residential "section"; for COA, verify local-district
    inclusion first (see Historic above).
  - **DROP** any section/street NOT above. Do **NOT** publish a fabricated individual-landmark list.
- **Geography (HARD guardrails):** Nutley is a township **north of Newark** in Essex County. Keep the **two watercourses
  distinct**:
  - The **Third River — also called the Yantacaw — runs THROUGH Nutley** (through Yantacaw Park and Memorial Park; it
    historically powered mills). It supports a localized **drainage / low-lying** angle along the river/park corridors —
    **QUALITATIVE only** (no FEMA zone/%/depth/named-street flood).
  - The **Passaic River forms Nutley's boundary (the WESTERN edge)**; Nutley sits on the Passaic. Frame riverfront /
    low-lying drainage **qualitatively**. **Do NOT swap the two rivers** — Third River runs THROUGH, Passaic BORDERS the
    west.
  - **ON3** (the former Hoffmann-La Roche campus, 1929–~2013) is now a ~116-acre **mixed-use redevelopment that STRADDLES
    Nutley AND Clifton** (anchors include a medical school, Eisai, Ralph Lauren, Quest Diagnostics). **Do NOT describe ON3
    as entirely in Nutley.** Use it for the **large-commercial / institutional flat-roof** angle (the 25% rule + UCC
    permitting apply). Tenant rosters / unit counts are time-sensitive — keep them out.
  - Nutley borders **Belleville, Bloomfield, Newark, Glen Ridge, Montclair** (Essex Co.) and **Clifton** (Passaic Co.).
    **NO reservation** applies to Nutley (do not invent one).
  - **Mature street-tree canopy** — a heavily tree-lined township with **nine public parks** → leaf/branch debris in
    valleys & gutters, branch-impact in nor'easters/summer storms, shade-driven moss/algae on north slopes. Keep
    **QUALITATIVE** (no canopy-% figure).
  - Do **NOT** import Belleville's "Second-River Newark border / Soho / Washington Avenue / Route 21" framing, Irvington's
    "no-river / Vailsburg / I-78," East Orange's "flat Watsessing plain," Orange's "Watchung-ridge," or Bloomfield's
    "town center / Garden State Parkway" framing.
- **Climate (shared EWR baseline, HEDGED — identical to Newark/EO/Orange/Irvington/Bloomfield/Belleville):** ~31.5 in/yr
  snow; nor'easters Oct–April; ~25–30 thunderstorms/yr; ground snow load **Pg ~25 psf** and **~110–115 mph ASCE 7-16**
  design wind kept **HEDGED** (not Essex-confirmed). Mature street-tree canopy (oak/maple/sycamore) loads valleys &
  gutters with leaf/branch debris. **BAN every city-specific degree/gust number.** No distinct Nutley microclimate number.
- **UNVERIFIED — never publish:** ~35,000 / ~34,981 population, exact pre-1940 %, median year built, renter/owner % as a
  renter-majority claim, the Construction Official's name (no "James O'Malley, PE"), any individually designated landmark
  list, COA fees/fines/buffer-zone figures, any section/street beyond the verified list above, any FEMA flood-zone figure,
  any claim that Nutley "eliminates exemptions for minor roofing."

## D. De-fab targets present in the CURRENT combo files (fix all)
- `overview[0]` typically opens "Newark Quality Roofing delivers expert {service} in Nutley — with prices starting from
  $X–$Y and free estimates available today" → **delete the price + hype**, replace with an answer-first NQR-applied
  lead (bold the named topics; figure-free).
- **Pricing range** is the OLD `$350–$1,500` → replace with the sourced default for the service type (§E): repair &
  maintenance `$400–$1,000`; replacement/installation `$10,000–$25,000`.
- **`whyChooseUs`** templated trust lines — "NJ licensed, GAF Certified — 15+ years protecting Essex County…",
  "Premium materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response" →
  **de-fab** to clean factual reasons (see §E), using the **registered HIC / fully insured** framing.
- **Fabricated Nutley-specific prose in the current files** — any **~35,000 population**, a Construction Official named
  **"James O'Malley, PE,"** a five-landmark list (**Public Library / First Presbyterian / Historical Society Museum /
  Woodland Cemetery Chapel / former Town Hall**), COA **fees / fines ("$2,000/day") / "200-foot buffer zone,"** a claim
  that Nutley **"eliminates exemptions for minor roofing,"** **Chapter 272↔410 conflation,** the rivers **swapped**, any
  invented street/section, "same-day completion," "multi-generational repeat business" → **DELETE all of it.** Replace
  with VERIFIED Nutley texture (older ~1890–1940 single-family stock; Yantacaw Park / Third River drainage corridor;
  Franklin Avenue commercial spine / Nutley Center; ON3 institutional flat roofs straddling Nutley/Clifton; mature
  nine-parks canopy debris; the binding Chapter 410 / Third-River-district COA where it applies).
- **`conversionHooks.urgencyNote`** "Early action saves thousands" → factual, no fabricated savings.
- **Inline markdown self-links** like `[roof repair](/roof-repair)` or `[Bloomfield](/roof-repair-bloomfield-nj)` →
  strip the link syntax (keep words as plain text; the committed siblings carry zero links).
- **Unsourced hard numbers** (decade-specific lifespans like "20–25-year design life," "30–40-year corrosion," the
  "30 percent" repair-vs-replace rule) → name-source from the packs (the 30% rule = Kellow/Modernize/Josten per
  materials-economics §8; lifespans = the InterNACHI life-expectancy chart) or **de-quantify**.
- **Preserve** the genuinely good Nutley texture (older single-family stock + plank decking at tear-off; two-family /
  small multi-family + flat-roofed commercial membrane work; valley-and-transition flashing failures; vent-boot leak
  sources; Yantacaw Park / Third River drainage; Franklin Avenue / Nutley Center commercial corridor; ON3 institutional
  flat roofs; mature-canopy debris) — restructure it answer-first, do not discard it.

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
- "Local Essex County crew familiar with Nutley's older single-family, two-family, and small multi-family building stock."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials, NO "licensed.")

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in
Nutley."). `urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural
water damage.").

## F. Differentiation directive (pre-empt cross-city overlap with Newark/East Orange/Orange/Irvington/Bloomfield/Belleville)
For the **process-heavy / low-localizability** services — **roof-thermal-imaging-inspections, storm-damage-roof-repair,
commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection, insurance-roof-replacement,
roof-overlay-installation** (and similar standardized-process pages) — **foreground the Nutley-specific application**
so the page does not mirror the other six cities. Lead with the local situation, then bring in the standardized facts:
- **The Franklin Avenue commercial spine / Nutley Center + the ON3 redevelopment (straddling Nutley and Clifton)** —
  downtown storefronts, mixed-use, and large institutional / commercial flat & low-slope roofs (25% rule + UCC permitting).
- **Older ~1890–1940 single-family stock** → plank decking discovered at tear-off; aging flashing details on Colonials and
  Capes; two-family / small multi-family + flat-roofed commercial → membrane stock, parapet/wall flashing, owner/landlord
  documentation; tenant-occupied access under NJ landlord–tenant notice.
- **The Third River / Yantacaw Park drainage corridor** (qualitative low-lying drainage) and the **Passaic River western
  edge**; **mature street-tree canopy / nine public parks** loading valleys and gutters with leaf/branch debris.
- Where historic work arises, lead with the **binding Chapter 410 / Third-River-district COA** (verify the parcel) — the
  one fact that differentiates Nutley from Belleville's no-COA posture.
**Preserve every cited standard/cost fact** (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize/
InterNACHI figures) — differentiation is about which local facts lead, not about changing the sourced figures.

## G. Output format
Write the **complete file** to `<service>.snippet.ts` — keep the exact first line
`import type { ComboContent } from '../schema';` and the EXACT `export const <ExportName>: ComboContent = {` you are
given (so `nutley/index.ts` imports stay valid). Keep `serviceId` and `cityId: 'nutley'` unchanged. **Omit the
`definition` field.** Also write a short `<service>.md` noting the de-fabs you cleared + the named sources you used.
Voice/structure exemplar: the committed **Orange combo `src/data/combo-content/orange/roof-repair.ts`** (same
answer-first + entity-grounded shape — localize, do not copy Orange's geography or COA) and the committed Nutley
**city page** `src/data/city-content/first-suburbs.ts` (cityId 'nutley') for verified Nutley geography/voice.
