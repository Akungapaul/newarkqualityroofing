# Irvington Combo Author Brief — Combo Batch 4 (entity-grounding inherited)

You are rewriting ONE Irvington service×city combo page (`src/data/combo-content/irvington/<service>.ts`)
**answer-first**, **de-fabbed**, and **entity-grounded**. The combo = the intersection of a service (already
rewritten answer-first at `src/data/service-content/<categoryFile>.ts`) and Irvington (facts below).
**Localize the finished service content to Irvington** — do not invent a new service story.

> Irvington = **Township of Irvington**, Essex County, NJ — a small (~2.9 sq mi), very densely settled inner-ring
> township directly **southwest of Newark**, majority-renter and rental/multi-family-heavy, with aging pre- and
> immediate-postwar housing stock. The single biggest Irvington-specific fact for COA framing: **Irvington has NO
> local historic-preservation ordinance and NO locally designated districts → NO Certificate of Appropriateness**
> (structurally like East Orange; the *opposite* of Newark/Orange). The eastern edge borders **Newark's Vailsburg
> section** — Vailsburg is in **Newark, NOT Irvington**.

---

## 0. ENTITY-GROUNDING (THE BATCH-4 DELTA — read first, it changes directAnswer + credentials)
This batch bakes the site-wide entity-grounding pattern into the combos from the start (the 3 done cities got it as
a retrofit; Irvington gets it natively).

1. **`directAnswer` is entity-grounded** — author it in this exact shape (gold exemplar:
   `src/data/combo-content/orange/roof-repair.ts`):
   > `**Newark Quality Roofing is a roofing contractor providing {service} across Irvington, New Jersey, and Essex County, {1–2 city-specific scope clauses}** … as a registered New Jersey Home Improvement Contractor.`
   - The **bolded span** (from "Newark Quality Roofing" through the scope clauses) must be **≤40 words** — end the
     bold before the credential tail if needed. The credential tail "as a registered New Jersey Home Improvement
     Contractor." is OUTSIDE the bold.
   - Establish **"Irvington, New Jersey"** (the state, spelled out) and **"roofing contractor"** as the descriptor.
   - This answers the page H1 "Who Provides {Service} in Irvington?". No modality.
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
(H1 "Who Provides {Service} in Irvington?", later H2 "What {Service} Is Available in Irvington?") — **do NOT write
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
   to Irvington's building stock** (figure-free; the entity definition is the separate spliced block — do not
   duplicate it here).
2. **R3 strict body-lead bold** — bold 1–3 named topics in each lead with `**…**`. Then each following body string
   **opens by re-bolding a topic from that section's lead**, in the same order. Fact-preserve.
3. **R6 no modality** in declaratives — ban "will / should / need to / must" in statements (FAQ *questions* are
   exempt). Use indicative: "requires," "restores," "traces," "admits."
4. **No de-fab literals anywhere** (GATE-failing): `GAF Certified`, `same-day`, `24/7`, `0% financing`, `500+`,
   `top-rated`, `15+ years`, fabricated review counts/ratings, "hundreds of projects," any invented NQR self-stat,
   any response-time claim ("within 2–4 hours"), any manufacturer-certification claim, any "closest contractor"
   superlative, any fabricated program ("investment property program," "portfolio pricing"). NQR's only credential
   framing is **"a registered New Jersey Home Improvement Contractor"** + **"fully insured."**
5. **Every hard number named-sourced** from a fact pack (cite the source in-text, e.g. "per HomeAdvisor," "an
   industry estimate attributed to the NRCA," "per N.J.A.C. 5:23-2.7," "per the InterNACHI life-expectancy chart").
   If no pack supports a number, **de-quantify** — never invent. **No links or URLs anywhere** — name sources in
   prose only, and **strip every existing markdown self-link** like `[roof repair](/roof-repair)` from the current
   file (the committed Newark/Orange combos carry ZERO inline links — match that). No synthesized superlatives.
6. **No price in any prose lead.** Pricing lives ONLY in the `pricing` field (see §E) and the cost FAQ.

## C. Irvington load-bearing facts (carry verbatim where used; source = CITY-FACTS-urban-core.md §Irvington + the
committed Irvington city page `src/data/city-content/urban-core.ts`, cityId 'irvington')
- **Permit office:** the **Township of Irvington's construction-code (building) office** (Municipal Building, 1
  Civic Square). Use the generic safe phrasing ("the Township of Irvington's construction-code office" / "Building
  Construction"); do **NOT** name a director or a fee schedule.
- **Reroof permit rule (statewide UCC — identical to Newark/East Orange/Orange):** a **detached one- or two-family
  reroof — including a full tear-off and re-cover — is "ordinary maintenance" under N.J.A.C. 5:23-2.7 and requires
  NO construction permit, no inspection, and no notice.** A permit IS required on **commercial, multi-family, or
  attached** buildings (the **25% rule**: repairing >25% of total roof area in a 12-month period) and any structural
  roof work; recover-vs-tear-off limits follow the **Rehab Subcode, N.J.A.C. 5:23-6.4**. Load-bearing here:
  Irvington is **majority-renter and rental/multi-family-heavy** (frame qualitatively — do NOT publish a renter %),
  so the permit-required commercial/multi-family path applies to a large share of its stock.
- **Historic = NO COA (KEY: like East Orange).** Irvington has **no local Historic Preservation Commission by
  ordinance and no locally designated historic districts or landmarks** → a homeowner reroof faces **no Certificate
  of Appropriateness step**. Irvington carries **no National Register listings** either (it does not appear in the
  NRHP listings for Essex County), and a Register listing alone places no restriction on a private owner, per the
  National Park Service. **Frame as "no local historic-district ordinance."** Where a historic angle would arise
  (historic-roof-restoration, slate/tile/cedar-shake, custom-roof-design-consultation), state plainly that Irvington
  imposes **no COA gate** — do NOT invent one, and do NOT import Newark's or Orange's COA districts.
- **Housing stock:** small (~2.91 sq mi land), **very densely settled** (one of NJ's most densely populated
  municipalities, ~61,176 residents, 2020 Census — use qualitatively), **older pre- and immediate-postwar stock**
  (frame "dense aging housing stock" / "1920s–1940s homes" qualitatively — do **NOT** publish a pre-1940 percentage
  or a median year built; both are UNVERIFIED). **Majority-renter, rental- and multi-family-heavy** with many
  **two-/three-family and investor/landlord-owned buildings** — frame the audience as cost-conscious owners and
  landlords, NOT a high-homeownership suburb. (Median owner-occupied value ~$335,600 and median household income
  ~$61,609 per Census QuickFacts — use only qualitatively as "cost-conscious," never as a hard claim about NQR.)
- **Neighborhoods / corridors (VERIFIED ONLY — drop anything not on this list):**
  - **Springfield Avenue corridor** — Irvington's principal commercial corridor (runs Newark → Irvington → Union
    County; becomes NJ Route 124 west of the Maplewood/Irvington line). The central business district around the
    **Irvington Bus Terminal** is a state-designated **Urban Enterprise Zone (UEZ)** — flat-roof storefronts and
    mixed-use buildings.
  - **Chancellor Avenue** — real commercial/residential corridor in southern Irvington; historically the location
    of the former **Olympic Park** amusement-park main entrance.
  - **Union Avenue** — real corridor in the eastern/NE township near the Newark (Vailsburg) border.
  - **Stuyvesant Avenue** — real Irvington corridor (older homes + storefronts).
  - **Olympic Park** — a colloquial neighborhood name from the **amusement park that operated 1887–1965** (closed
    1965) straddling the Irvington/Maplewood border at Chancellor Avenue. Present strictly as **history** + a
    residential section of dense early-20th-century homes — NOT a current attraction, NOT an officially bounded
    district.
  - **Upper Irvington** — recognized residential section (dense older single-family + 2-3-family).
  - **Irvington Center / CBD** — the downtown around the Irvington Bus Terminal on Springfield Avenue (the UEZ core).
  - **DROP** any street/neighborhood NOT above (e.g. "Nestor Terrace" is unverified — do not use). Only "Irving
    Place" is a named unincorporated community; "Upper Irvington / Olympic Park / Irvington Center" are colloquial.
- **Geography:** Irvington borders **Newark (Vailsburg section) to the east, Maplewood to the west, Hillside to the
  south, and Union (Union County) to the southwest.** **I-78 (Route 78) passes briefly along the SOUTHEASTERN
  border (Exit 54)** — this supports the **light-industrial / commercial flat-roof angle along the southeastern
  edge**; do NOT say I-78 bisects or runs through the township. **Vailsburg is a NEWARK neighborhood** on Irvington's
  eastern edge — frame the eastern edge as "near Newark's Vailsburg section," **never** "Irvington's Vailsburg."
  **NO river / flood / waterfront / reservation** applies to Irvington — do not invent any (and do not import East
  Orange's "flat Watsessing plain" framing or Orange's Watchung-ridge framing). The roofing-relevant environmental
  stressor is a **dense, built-out township with limited tree canopy** — qualitative only.
- **Climate (shared EWR baseline, HEDGED — identical to Newark/East Orange/Orange):** ~31.5 in/yr snow; nor'easters
  Oct–April; ~25–30 thunderstorms/yr; ground snow load **Pg ~25 psf** and **~110–115 mph ASCE 7-16** design wind
  kept **HEDGED** (not Essex-confirmed). **Urban heat island = EPA-attributed, QUALITATIVE ONLY** — use: "Per the
  U.S. EPA, the heat-island effect makes daytime air temperatures in U.S. urban areas about 1–7°F higher than
  outlying areas." **BAN every city-specific degree/gust number.** No distinct Irvington microclimate number.
- **UNVERIFIED — never publish:** exact pre-1940/pre-1950 %, median year built, renter %, 5+-unit %, the official
  construction-department name/director, the 2026 permit fee, any bounded-neighborhood list beyond the above.

## D. De-fab targets present in the CURRENT combo files (fix all)
- `overview[0]` opens "Newark Quality Roofing delivers expert {service} in Irvington — with prices starting from
  $X–$Y and free estimates available today" → **delete the price + hype**, replace with an answer-first NQR-applied
  lead (bold the named topics; figure-free).
- **Inline markdown self-links** like `[East Orange](/roof-repair-east-orange-nj)` / `[roof repair](/roof-repair)`
  → **strip the link syntax** (keep the words as plain text; no URLs anywhere).
- Fabricated **"investment property program" / "portfolio pricing" / "discounts for landlords with multiple
  properties"** → remove (no invented program). Landlord/multi-family economics may be described factually, but no
  pricing program.
- Fabricated **response-time** claims ("respond within two to four hours," "emergency response capability for
  after-hours") → remove.
- Fabricated **"closest professional roofing contractor to any address in the township"** superlative → remove
  (NQR's Newark base borders Irvington at Newark's Vailsburg section — that proximity may be stated factually
  WITHOUT a superlative).
- `whyChooseUs` (templated de-fab) and any "NJ licensed, GAF Certified — 15+ years…", "same-day / 24/7" → **de-fab**
  to clean factual reasons (see §E), using the **registered HIC / fully insured** framing.
- Any unsourced hard number in prose (surface temps, percentages, lifespans, fabricated datasets) → name-source or
  de-quantify. Drop any **unverified street/neighborhood** (e.g. Nestor Terrace).
- **Preserve** the genuinely good Irvington texture (multi-family/rental landlord economics; tenant-occupied access;
  Springfield Avenue + Chancellor Avenue commercial flat roofs; Route 78 southeastern-edge light-industrial; older
  early-20th-century detached + 2-3-family stock; aging plank decking discovered at tear-off) — restructure it
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
- "Local Essex County crew familiar with Irvington's dense two-/three-family, rental, and older early-20th-century building stock."
- "Free, detailed written estimates with no obligation."
- "Workmanship documented with photos for your records and any insurance claim."
(No certifications, no years-in-business, no response-time claims, no manufacturer brands as credentials, NO "licensed.")

**`conversionHooks`** — `midPageCta`: a plain factual CTA (e.g. "Get your free written estimate for {service} in
Irvington."). `urgencyNote`: factual, no hype (e.g. "Addressing roof damage early limits interior and structural
water damage.").

## F. Differentiation directive (pre-empt cross-city overlap with Newark/East Orange/Orange)
For the **process-heavy / low-localizability** services — **roof-thermal-imaging-inspections, storm-damage-roof-
repair, commercial-roof-installation, commercial-roof-repair, infrared-roof-leak-detection,
insurance-roof-replacement, roof-overlay-installation** (and similar standardized-process pages) — **foreground the
Irvington-specific application** so the page does not mirror the other three cities. Lead with the local situation,
then bring in the standardized facts:
- **Springfield Avenue + Chancellor Avenue downtown commercial** flat/low-slope roofs (UEZ storefronts, mixed-use).
- **Route 78 (I-78) southeastern-edge light-industrial** buildings (large membrane roofs, vibration at seams).
- **Heavy 2-/3-family rental + investor/landlord ownership** → tenant-occupied access, NJ landlord–tenant notice,
  documentation for owners and insurers; cost-conscious portfolio decisions.
- **Dense, built-out, aging stock** → plank decking discovered at tear-off, limited staging room on small lots.
- **NO COA gate** (unlike Newark/Orange) — for historic-leaning services, state plainly Irvington has no COA.
**Preserve every cited standard/cost fact** (ASTM C1153, NRCA cadence, IRC/UCC sections, HomeAdvisor/Modernize/
InterNACHI figures) — differentiation is about which local facts lead, not about changing the sourced figures.

## G. Output format
Write the **complete file** to `<service>.snippet.ts` — keep the exact first line
`import type { ComboContent } from '../schema';` and the EXACT `export const <ExportName>: ComboContent = {` you are
given (so `irvington/index.ts` imports stay valid). Keep `serviceId` and `cityId: 'irvington'` unchanged. **Omit the
`definition` field.** Also write a short `<service>.md` noting the de-fabs you cleared + the named sources you used.
Voice/structure exemplar: the committed **Orange combo `src/data/combo-content/orange/roof-repair.ts`** (same
answer-first + entity-grounded shape — localize, do not copy Orange's geography or COA) and the committed Irvington
**city page** `src/data/city-content/urban-core.ts` (cityId 'irvington') for verified Irvington geography/voice.
