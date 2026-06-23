# Articles Batch — design-consultation.ts brief (9 articles)

Answer-first rewrite of the 9 `parentType: 'service'` articles in
`src/data/article-content/design-consultation.ts` — 3 parent services × 3 articles
(*signs* / *cost-guide* / *decision*). These are **educational KB articles**
(route `/roofing-knowledge-base/<slug>`), NOT NQR-promotional pages: they answer a
**general** question, so the `directAnswer` lead is **topic-definitional** (answers the
H1 with a named-sourced fact), and NQR appears only in `ctaText`.

**Gold to mirror (read these):**
- Article answer-first shape + voice → `src/data/article-content/homepage.ts` (3 committed
  exemplars: directAnswer bold ≤40w → 1-sentence intro → question-heading sections whose
  `body[0]` opens with a ≤40w bold answer → R3 re-bold in every paragraph).
- **Facts (the source of truth for this batch)** → the committed parent service pages in
  `src/data/service-content/design-consultation.ts` (Batch 7, clean + de-fabbed). Pull every
  number/standard from there. Supporting packs: `research/facts-historic-restoration.md`,
  `research/facts-energy-solar.md` (§0 credit currency), `research/facts-components-specialty.md`
  (IRC R806.2 / R905.1.2 / R-value).

## Shared rules (Semantic Content Ruleset v1.7 — gated subset)

- **directAnswer (new field):** a ≤40-word **bold-span** definitive answer to the H1.
  Put the answer in `**bold**` (bold span ≤40 words). Name a source where it is a factual
  claim. Topic-definitional — answer the H1, do NOT lead "Newark Quality Roofing is…".
- **intro:** ONE supporting bridge sentence after the directAnswer. No second answer.
- **Section headings = QUESTIONS.** Each `sections[i].heading` is a question. The FIRST
  sentence of `body[0]` is a definitive ≤40-word answer to that question, main topic in `**bold**`.
- **R3 strict-bold:** every body paragraph OPENS by re-bolding a topic named in its
  section's answer. Bold only the named main topics (not whole sentences).
- **R6 NO modality** (build-failing): never `will, shall, should, need to, needs to, have to,
  has to, must, ought to` in declaratives. Write definitive present tense ("NJ requires…",
  "Flashing details cause…"). FAQ-style question headings are exempt; "can" is allowed.
- **R9 no outbound links / URLs.** Internal links optional, ≤1 per section, as
  `[descriptive anchor](/slug)` to a real page (`/roof-repair`, `/roof-replacement`,
  `/roofing-services`, `/custom-roof-design-consultation`, `/historic-roof-restoration`,
  `/roof-ice-dam-prevention`). Never "click here / learn more".
- **R10 de-fab (build-failing):** never emit `24/7`, `same-day`, `GAF Certified`,
  `Master Elite`, `CertainTeed SELECT ShingleMaster`, `0% financing`, `top-rated`,
  `N+ years experience`, `500+ projects`, `HAAG`, fabricated phone/address, or ANY claim
  that NQR *holds* a manufacturer certification.
- **R14 no hype:** no `best / premier / leading / premium / trusted / world-class /
  exceptional / unbeatable`. Name materials/standards/facts instead. ("premium" as a price
  noun — "a price premium" — is fine; as an adjective for NQR/quality it is not.)
- **Named-source attribution, no URLs:** cite organizations BY NAME — NRCA, ARMA, InterNACHI,
  NPS (Preservation Briefs 4/19/29/30 + Secretary of the Interior's Standards), Copper
  Development Association, National Slate Association, IRS, NPS, NJEDA, NJ DEP Historic
  Preservation Office, NJ Division of Consumer Affairs, NOAA/NWS, University of Minnesota
  Extension, U.S. Department of Energy, ASCE, ASTM, and statutes `N.J.S.A. 40:55D-107`,
  `N.J.A.C. 5:23-2.7`, `IRC R806.2`, `IRC R905.1.2`, `2021 IECC R402.1.3`, `ASTM D1970`.
- **metaDescription ≤160 chars**, no de-fab literals, no modality.
- **conclusion/ctaText:** definitive, de-fabbed, no self-cert/warranty claims.

## NQR credential framing (registration ≠ license)

NQR = **a registered New Jersey Home Improvement Contractor, insured and serving Essex
County**. NJ has **no roofing license** — the HIC is a *registration* under the Contractors'
Registration Act. Say **registered**, never "licensed" for the HIC. NQR holds **no verified
manufacturer certification** → never claim one. Phone is template-rendered; never write a
phone number in content. NQR provides a **free written estimate and inspection**.

## VERIFIED-FACT TABLE — correct these fabrications in the current copy

### Custom roof design & consultation (kill invented fee economics)
| Current (WRONG / unverified) | Correct (use this) | Source |
|---|---|---|
| consultation fee "$500–$2,000", "applied as a credit" | NQR provides a **free written estimate and consultation**; cost lands in the install, not a standalone design fee | parent gold `pricing.range` |
| install priced by "design fee" | NJ architectural asphalt **$6.50–$11.00/sq ft**, metal **$9.00–$16.00**, slate **$10–$30** | Josten Roofing / NJ roofing guides |
| "$1,500 consultation", "$3,000–$15,000 to correct errors", "$2,000 restocking" | DROP all — reframe qualitatively: a written spec defines flashing/transition details in advance, reducing field improvisation that drives future leaks | flashing ~90–95% of leaks per NRCA |
| town-specific "HOA architectural review board" (Livingston/Roseland/Fairfield) | DROP invented boards; a **designated landmark or local historic district** needs a Certificate of Appropriateness, `N.J.S.A. 40:55D-107`; some municipalities regulate roof materials via zoning — frame generically | parent gold + N.J.S.A. 40:55D-107 |

Verified spine (custom design): InterNACHI lifespans — 3-tab asphalt **20y**, architectural
**30y**, metal **40–80y**, slate **60–150y**, copper **70+y**, wood **25y**, clay/concrete tile
**100+y**. Loads to **ASCE 7** (NJ UCC). Attic ventilation min net free area **1/150**
(IRC R806.2 + ARMA). Structural change to rafters/trusses/ridge beams/pitch → construction
permit `N.J.A.C. 5:23-2.7`; re-roof of a detached 1–2 family covering = ordinary maintenance,
no permit; commercial >25% of roof area in 12 mo → permit. NJ install ranges sit **10–40% above**
national (labor ~60–70% of an install, per Modernize). Written roofing specification deliverable
per Integrity Home Exteriors documentation guidance.

### Historic roof restoration (currency + unverified grants)
| Current (WRONG / unverified) | Correct (use this) | Source |
|---|---|---|
| slate "$500–$800/square", copper "$20–$35/lf", standing seam "$25–$50/sq ft", labor "40–60% higher", phased "$8,000–$20,000 / $25,000–$50,000" | historic slate restoration **$2,500–$10,000+**, individual slate **$50–$300 ea**, slate flashing/fastener **$400–$3,000**, clay tile repair **$500–$2,500** | HomeGuide (parent gold `pricing`) |
| "NJ Historic Trust matching grants up to $750,000" for homeowner roofs | DROP — unverified for private homeowner roofs | not in gold/pack |
| "property tax abatement freezes assessed value for five years" | DROP — unverified | not in gold/pack |
| homeowner gets the federal 20% credit | federal **20% HTC (IRC §47) is income-producing-ONLY**; owner-occupied residences do **not** qualify; §47 **remains in effect 2026** (NOT repealed) | NPS / IRS; pack §10 |
| (NJ state credit) | **NJ HPRP (NJEDA)** income-producing only (residential = rental ≥4 units); pending **S3545** homeowner credit is **NOT law** | NJEDA; pack §10 |
| HPC review "4–8 weeks" | soften — review timelines vary by municipality | not in gold |

Verified spine (historic): **NPS Brief 29 20% rule** — 20%+ of slates broken/cracked/missing/
sliding → full replacement costs less than individual repairs; below 20% favors selective
in-kind repair. Non-ferrous fasteners (solid copper / stainless) for slate & clay tile;
**red cedar never copper** (hot-dipped zinc / aluminum / stainless), per NPS Briefs 19/29/30.
**Secretary of the Interior's Standards, Standard 6** — repair in kind, match replacement in
design/color/texture and where possible material. **Certificate of Appropriateness**
(`N.J.S.A. 40:55D-107`) from the municipal HPC is the binding gate, separate from the
construction permit; a **National/NJ Register listing alone places no restriction** on a
private owner using private funds (NPS + NJ DEP HPO). Lifespans: slate **60–150y** (premium
100+y, National Slate Association), copper **70+y** (InterNACHI) / service life **100+y**
(Copper Development Association), clay tile **~100y** (Brief 30). Glen Ridge HPC est. 1987,
local-ordinance district covers **>90% of the borough** (frame as a LOCAL ordinance, not
"because National-Register-listed"). Materials restored in kind: natural slate, clay/terra-cotta
tile, wood/cedar shingle, historic metal (terne + copper). Crew does not walk directly on slate
or high-profile clay tile (Briefs 29/30).

### Roof ice dam prevention (repealed credit + wrong code numbers)
| Current (WRONG / unverified) | Correct (use this) | Source |
|---|---|---|
| "Federal 25C energy efficiency tax credits" (presented as active) | **§25C repealed** for property placed in service after Dec 31, 2025 — no longer applies | IRS, P.L. 119-21 (OBBB); pack §0 |
| "NJ Home Performance with ENERGY STAR rebates $500–$2,000", "drops by 20–35%" | DROP the dollar figures; frame incentives generically (air-sealing/insulation overlap with energy-efficiency programs; confirm current NJ programs) | ENERGY STAR roof program dead; not in gold/pack |
| insulation "R-49 (current NJ code)" | **R-60** ceiling (2021 IECC Table R402.1.3, Climate Zones 4–5); **R-49** is only the full-ceiling raised-heel-eave exception | 2021 IECC; pack |
| ice-and-water shield "6+ feet vs code-minimum 3 feet" | ice barrier from the eave to **≥24 in inside the exterior wall line**, **≥36 in along slope on ≥8:12 roofs** | IRC R905.1.2 + ASTM D1970 |
| invented "$500–$1,500/winter removal", "$1,000–$5,000 damage", "$3,000–$8,000 package", "$7,500–$32,500 over 5 years", "1–3 winter payback" | DROP invented totals; reframe prevention-vs-removal qualitatively (one-time root-cause fix vs recurring seasonal cost); price from an inspection | parent gold `pricing.range`/`factors` |
| "10–15% higher wind in West Orange/Verona/Cedar Grove" / elevation as a hard % | frame elevation qualitatively (exposed/elevated sites see colder temps, longer snow retention) | city-batch refuted |

Verified spine (ice dam): root cause = **attic heat escape driven by air leakage, not gutters**
(University of Minnesota Extension + building-science consensus); correct it in order —
**air-seal → insulate (to code-minimum) → balance soffit-and-ridge ventilation** (U.S.
Department of Energy), then the **eave ice barrier**. 3 formation conditions: snow on the roof,
upper roof above 32°F melting the snowpack, eave below 32°F refreezing meltwater into a dam.
Ventilation min net free area **1/150** (IRC R806.2; Newark Zone 4–5, no 1/300 exception).
Newark crosses 32°F repeatedly, **avg January low ~25.5°F**, **~31.5 in** annual snowfall
(NOAA 1991–2020 at Newark Liberty / EWR). Heat cables manage the eave-meltwater symptom and do
NOT correct attic heat escape. Self-adhering polymer-modified bitumen membrane (ASTM D1970).

## Per-article specs

Each article: directAnswer (topic-definitional, ≤40w bold) → intro → **3** question-heading
sections (`body` 2–3 paragraphs each, R3 bold, named sources) → conclusion → ctaHeading →
ctaText (NQR registered NJ HIC, insured, free estimate — no cert/warranty claims) → metaDescription ≤160c.

### 1. custom-roof-design-consultation-signs
**H1:** What Are the Signs You Need Custom Roof Design & Consultation?
**directAnswer:** the signs — a new build or addition with no roofing specification, a complex
roof geometry (multiple valleys, dormers, hips), a material-selection decision across material
families, and a structural change that triggers a permit. Source InterNACHI / N.J.A.C. 5:23-2.7.
**Sections:** (a) "When Do Standard Roofing Solutions Fall Short?" — complex geometry + multi-
material roofs (slate/copper/standing-seam/flat) need a unified spec to avoid mismatched flashing
at transitions; Essex County character homes (Montclair, Glen Ridge, South Orange). (b) "Which
Projects Call for a Roof Design Consultation?" — new build/addition (sets wind+snow loads to
ASCE 7 before ordering), additions tying into an existing roof, material selection across the
7 InterNACHI families. (c) "What NJ Code and Local Approvals Apply?" — structural change to
rafters/trusses/ridge beams/pitch → permit `N.J.A.C. 5:23-2.7` (covering re-roof = ordinary
maintenance, no permit; commercial >25% → permit); a designated landmark / local historic
district → Certificate of Appropriateness `N.J.S.A. 40:55D-107`; some municipalities regulate
roof material/color via zoning (generic, no invented HOA boards).

### 2. custom-roof-design-consultation-cost-guide
**H1:** How Much Does Custom Roof Design & Consultation Cost in NJ?
**directAnswer:** a custom roof design and consultation is typically a **free written estimate**
from the contractor; the cost lands in the install, priced by material — architectural asphalt
$6.50–$11.00/sq ft, metal $9.00–$16.00, slate $10–$30 (Josten Roofing / NJ guides).
**Sections:** (a) "Is There a Separate Design Consultation Fee?" — many NJ contractors fold
design/consultation into a free written estimate rather than charging a standalone fee
(**KILL $500–$2,000 fee + credit**). (b) "What Drives the Cost of a Custom Roof?" — material
selection (InterNACHI lifespans + NJ $/sq ft per Josten), roof complexity (valleys/dormers/hips
raise material+labor), deck condition, structural-change permit (5:23-2.7); NJ ranges 10–40%
above national (labor ~60–70%, Modernize). (c) "How Does Design Planning Prevent Costly Errors?"
— a written roofing specification defines flashing/transition details in advance, reducing field
improvisation that drives leaks (flashing ~90–95% of leaks, NRCA) (**KILL $3,000–$15,000 /
$2,000 invented figures**).

### 3. custom-roof-design-consultation-decision
**H1:** What Should You Expect From Custom Roof Design & Consultation?
**directAnswer:** it moves through assessment → material evaluation → written specification — the
contractor surveys the roof, deck, attic ventilation, and geometry, compares materials by measured
lifespan (InterNACHI), and produces a written spec with wind+snow loads to ASCE 7.
**Sections:** (a) "What Happens During the Roof Assessment?" — surveys roof/deck/attic ventilation
(sized to 1/150, IRC R806.2 + ARMA)/geometry, identifies NJ code triggers (5:23-2.7), notes the
architectural period for character homes. (b) "How Are Materials Evaluated and Selected?" —
compares 7 InterNACHI families by lifespan; weighs structural load (slate/tile weight), Essex
County climate (freeze-thaw, NOAA Jan low 25.5°F), and color/streetscape harmony. (c) "What Is
the Final Deliverable?" — a written roofing specification (material, underlayment, flashing,
ventilation, wind+snow loads to ASCE 7, ice-barrier scope per IRC R905.1.2) an install or
competitive bid works from (Integrity Home Exteriors guidance).

### 4. historic-roof-restoration-signs
**H1:** What Are the Signs You Need Historic Roof Restoration?
**directAnswer:** signs — slates sliding with rust staining at the nail line, open or lifted metal
seams, clay tiles slipping with corroded fasteners, and water intrusion staining historic interior
fabric. Source NPS Briefs 4/29/30.
**Sections:** (a) "How Do Historic Roofs Show Their Age?" — slate delamination + nail corrosion
(rust = plain/galvanized steel corroding before the slate, Brief 29); copper/terne open or lifted
seams (Brief 4 + Copper Development Association); clay tiles slipping with corroded iron fasteners
(failure is fastener/flashing/sheathing, not the ~100y tile, Brief 30). Restoration preserves
original material, replaces only failed elements in kind (Standard 6); the **20% rule** (Brief 29).
(b) "When Does a Historic District Require Approval?" — a designated landmark/contributing property
in a **local** historic district needs a Certificate of Appropriateness (`N.J.S.A. 40:55D-107`),
separate from the construction permit; a Register listing **alone** places no restriction on a
private owner using private funds (NPS + NJ DEP HPO). Glen Ridge HPC (est. 1987) local district
>90% of the borough; Newark Landmarks & HPC. (c) "What Interior and Exterior Signs Signal Trouble?"
— displaced slates, corroded flashing, moss (retains moisture), sagging; interior attic moisture,
ceiling stains, daylight through the deck; overlapping multiplying patches; water staining
ornamental plaster/woodwork = active failure threatening character-defining fabric (Standard 2).

### 5. historic-roof-restoration-cost-guide
**H1:** How Much Does Historic Roof Restoration Cost in NJ?
**directAnswer:** historic slate restoration commonly runs **$2,500–$10,000+**, with individual
slate replacement $50–$300 each and slate flashing/fastener work $400–$3,000, per HomeGuide;
premium materials and specialized in-kind labor drive the cost.
**Sections:** (a) "What Drives Historic Restoration Costs?" — premium materials (slate, copper,
terne) + specialized in-kind craftsmanship; fastener/flashing in durable metals matched to the
slate's life (Brief 29); per-unit gold ranges (slate $50–$300/slate, flashing/fastener $400–$3,000,
clay tile repair $500–$2,500); NJ 10–40% above national (**KILL $500–$800/square, $20–$35/lf,
$25–$50/sq ft, 40–60% labor**). (b) "Can Homeowners Get a Historic Tax Credit or Grant?" —
federal **20% HTC (IRC §47) income-producing only**, owner-occupied does not qualify, still in
effect 2026; NJ HPRP (NJEDA) income-producing only; S3545 not law; route to a tax professional /
NPS / NJEDA (**KILL $750k NJ Historic Trust grant + 5-yr tax abatement**). (c) "How Can Owners
Phase a Large Restoration?" — restore in sections over multiple years, water-critical areas first
(valleys, wall flashing, areas over occupied spaces); preserve sound material, replace failed
elements in kind (Standard 6) (**KILL invented $8,000–$50,000 phased totals — anchor to the
$2,500–$10,000+ slate range**).

### 6. historic-roof-restoration-decision
**H1:** What Should You Expect From Historic Roof Restoration?
**directAnswer:** it proceeds through documentation + HPC coordination → in-kind material sourcing
and matching → section-by-section repair under the Secretary's Standards, preserving original
material and replacing only failed elements in kind. Source NPS Brief 4 + Standard 6 + N.J.S.A. 40:55D-107.
**Sections:** (a) "How Does Documentation and HPC Approval Work?" — document the existing roof
(photos, material ID, condition mapping, Brief 4); a designated landmark/contributing property
needs a Certificate of Appropriateness (`N.J.S.A. 40:55D-107`) from the municipal HPC, separate
from the construction permit; the Secretary's Standards guide HPC decisions (review timelines
vary by municipality — **no hard "4–8 weeks"**). (b) "How Is Period-Accurate Material Sourced?" —
match original by quarry/alloy/species; salvage yards stock reclaimed slate/copper; where original
is unavailable the HPC may accept compatible substitutes (synthetic slate for some non-contributing
structures; individually designated landmarks typically require natural material); fasteners
non-ferrous for slate/tile, never copper on red cedar (Briefs 19/29/30). (c) "What Happens During
the Restoration?" — proceeds in sections, salvageable material sorted for reinstallation, new
integrated with existing; flashing in period-appropriate metals (copper / lead-coated copper) to
match profiles; document completed work; crew does not walk directly on slate or high-profile clay
tile (Briefs 29/30).

### 7. roof-ice-dam-prevention-signs
**H1:** What Are the Signs You Need Roof Ice Dam Prevention?
**directAnswer:** signs — large eave icicles, a thick ice ridge at the roof edge, uneven snow-melt
(bare upper roof while the eave stays snow-covered), and interior ceiling or wall stains near
top-floor exterior walls — all pointing to attic heat escape (University of Minnesota Extension).
**Sections:** (a) "How Do Ice Dams Form in Essex County?" — 3 conditions (snow on the roof, upper
roof above 32°F melting the snowpack, eave below 32°F refreezing meltwater into a dam); root cause
= attic heat escape driven by air leakage, not gutters (Univ. of Minnesota Extension); Newark
crosses 32°F repeatedly, avg Jan low 25.5°F, ~31.5 in snowfall (NOAA EWR); exposed/elevated sites
see colder temps + longer snow retention (qualitative). (b) "What Are the Visible and Interior
Warning Signs?" — visible: icicles, ice ridge above the gutter line, ice in soffit vents, uneven
snow-melt; interior: ceiling/wall stains near top-floor exterior walls, peeling paint/bubbling
drywall, attic frost; distinct from a summer flashing leak (GAF inspection guidance). (c) "Why Do
Ice Dams Keep Coming Back?" — previous damage history is the strongest predictor; conditions
persist until root causes (air sealing, insulation, ventilation) are addressed; emergency steam
removal treats the symptom, root-cause prevention eliminates recurrence (U.S. Department of Energy).

### 8. roof-ice-dam-prevention-cost-guide
**H1:** How Much Does Roof Ice Dam Prevention Cost in NJ?
**directAnswer:** ice dam prevention cost depends on the attic air-sealing scope, insulation added
to the code-minimum level, ventilation correction, and eave ice-barrier length, so contractors
price it from an attic-and-roof inspection rather than a flat package.
**Sections:** (a) "What Determines the Cost of Ice Dam Prevention?" — cost drivers: air-sealing
scope (number/size of ceiling bypasses), insulation added to the code-minimum ceiling (**R-60**,
2021 IECC Zones 4–5; R-49 only the raised-heel-eave exception), ventilation correction (1/150,
IRC R806.2), eave ice-barrier length (≥24 in inside the wall line, IRC R905.1.2), optional heat
cables (symptom). (b) "Is Prevention Cheaper Than Repeated Removal?" — root-cause prevention
(air-seal + insulate + ventilate) eliminates recurrence; emergency removal treats the symptom each
winter and interior damage recurs until corrected (DOE / Univ. of Minnesota Extension) — qualitative,
**no invented dollar totals**. (c) "Do Energy Incentives Apply to Ice Dam Work?" — air-sealing and
insulation overlap with energy-efficiency programs, so homeowners can check current NJ clean-energy
program eligibility; the federal **§25C** Energy Efficient Home Improvement Credit was repealed for
property placed in service after Dec 31, 2025 (IRS, P.L. 119-21) and no longer applies; route to a
tax professional (**KILL §25C-as-active + $500–$2,000 ENERGY STAR rebate / 20–35% figures**).

### 9. roof-ice-dam-prevention-decision
**H1:** What Should You Expect From Roof Ice Dam Prevention?
**directAnswer:** effective prevention is diagnostic-first — the contractor traces where attic heat
reaches the roof deck, then corrects it in sequence: air-seal bypasses, add insulation to the
code-minimum level, balance soffit-and-ridge ventilation, and install the eave ice barrier
(Univ. of Minnesota Extension / DOE / IRC R905.1.2).
**Sections:** (a) "How Is the Diagnosis Performed?" — identify where heat reaches the deck (a
blower-door test with smoke/infrared reveals air leaks; common sources = recessed light cans,
plumbing vent stacks, chimney chase gaps, attic access panels); infrared thermal imaging shows
thin/missing/displaced insulation (elevation framed qualitatively). (b) "What Is the Correct
Installation Sequence?" — order of impact: air-seal first (before insulation covers leak points),
then insulation, then ventilation (sized to 1/150, IRC R806.2); during a combined roof replacement,
tear-off exposes the deck → self-adhering eave ice barrier from the eave to **≥24 in inside the
exterior wall line** (≥36 in along slope on ≥8:12), per IRC R905.1.2 + ASTM D1970, then ventilation,
then the new covering (**KILL "6+ feet vs 3 feet"**). (c) "What Helps in Severe Cases?" — cathedral
ceilings / knee-wall attics can take spray foam at the deck underside (insulation + air barrier);
heat cables are a secondary eave defense that does not correct root-cause heat loss (supplement only,
Univ. of Minnesota Extension); an extended self-adhered eave membrane during replacement is
protection (prevents interior damage even if a dam forms), not prevention.
