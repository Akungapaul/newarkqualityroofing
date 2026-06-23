# Articles Batch — energy-solar.ts brief (12 articles)

Answer-first rewrite of the 12 `parentType: 'service'` articles in
`src/data/article-content/energy-solar.ts` — 4 parent services × 3 articles
(*signs* / *cost-guide* / *decision*). These are **educational KB articles** that render
their full content at **root `/<slug>`** (via `ArticleTemplate`/`ArticleBody`), NOT
NQR-promotional pages: they answer a **general** question, so the `directAnswer` lead is
**topic-definitional** (answers the H1 with a named-sourced fact), and NQR appears only in `ctaText`.

**Gold to mirror (read these):**
- Article answer-first shape + voice → `src/data/article-content/homepage.ts` and
  `design-consultation.ts` (committed exemplars: directAnswer bold ≤40w → 1-sentence intro →
  question-heading sections whose `body[0]` opens with a ≤40w bold answer → R3 re-bold in every paragraph).
- **Facts (the source of truth for this batch)** → the committed parent service pages in
  `src/data/service-content/energy-solar.ts` (Batch 6, clean + de-fabbed + already current to 2026).
  Pull every number/standard/credit-status from there. Supporting pack: `research/facts-energy-solar.md`
  (§0 credit currency). **The current dirty article copy is NOT a fact source — it is the fabrication
  to overwrite.**

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
  "A reflective coating lowers…"). FAQ-style question headings are exempt; "can" is allowed.
- **R9 no outbound links / URLs.** Internal links optional, ≤1 per section, as
  `[descriptive anchor](/slug)` to a real page (`/roof-replacement`, `/roof-repair`,
  `/roofing-services`, `/solar-panel-roofing-installation`, `/solar-shingle-installation`,
  `/energy-efficient-roofing-solutions`, `/silicone-roof-coating`, `/roof-coating`). Never "click here / learn more".
- **R10 de-fab (build-failing):** never emit `24/7`, `same-day`, `GAF Certified`,
  `GAF-certified`, `Master Elite`, `Tesla-certified`, `CertainTeed SELECT ShingleMaster`,
  `0% financing`, `top-rated`, `N+ years experience`, `500+ projects`, `HAAG`, fabricated
  phone/address, or ANY claim that NQR *holds* a manufacturer/installer certification.
- **R14 no hype:** no `best / premier / leading / premium / trusted / world-class / exceptional /
  unbeatable`. Name materials/standards/facts instead. ("premium" as a price noun — "a price
  premium," "premium materials" — is fine; as a quality adjective for NQR it is not.)
- **Named-source attribution, no URLs:** cite organizations/standards BY NAME — IRS, NJ Board of
  Public Utilities (NJBPU), NJ Division of Taxation, NJ Clean Energy Program, EPA, U.S. Department
  of Energy (DOE), NREL, CRRC (Cool Roof Rating Council), LBNL Heat Island Group, NRCA, RCMA, SPFA,
  ASCE, ASTM, UL, NEC, IRC, 2021 IECC, IEA-PVPS, EnergySage, SolarReviews, WattBuild, GAF Energy,
  Tesla, CertainTeed, IronRidge, SPRI, Gaco, Henry, Mule-Hide; statutes/codes
  `N.J.A.C. 5:23-2.7`, `N.J.S.A. 48:3-87`, `IRC R324.6`, `NEC 690.12`, `UL 790`, `UL 2218`,
  `UL 3741`, `ASTM C1549`, `ASTM C1371`, `ASTM E1980`, `ASTM D3161`, `ASTM D6694`,
  `2021 IECC Table R402.1.3`, `IRS §25D`, `§25C`, `§48E`, `§179D`, Forms `ST-4` / `CRES`.
- **metaDescription ≤160 chars**, no de-fab literals, no modality.
- **conclusion/ctaText:** definitive, de-fabbed, no self-cert/warranty claims.

## NQR credential framing (registration ≠ license) + positioning

NQR = **a registered New Jersey Home Improvement Contractor, insured and serving Essex County**. NJ
has **no roofing license** — the HIC is a *registration* under the Contractors' Registration Act. Say
**registered**, never "licensed" for the HIC. NQR holds **no verified manufacturer/installer
certification** → never claim one. Phone is template-rendered; never write a phone number in content.
NQR provides a **free written estimate and inspection**.

**Solar positioning (critical):** for solar-panel and solar-shingle articles, NQR is the **roofing
contractor doing the roofing side of solar** — watertight mount flashing to the roof-covering
manufacturer instructions, roof-structure load verification per ASCE 7, re-roof-before-solar, and
NEC/fire-code coordination with the solar installer. NQR is **not** the solar designer/installer.
Never write "our solar designers create custom systems," "we calculate your solar savings," or imply
NQR sizes/sells the PV array. The ctaText points to NQR's roofing role (preparing/flashing the roof
for solar, or installing the building-integrated shingle as the roof covering) + free written estimate.

## VERIFIED-FACT KILL / CONFIRM TABLE — correct these fabrications in the current copy

**Cross-cutting currency (applies to every cost-guide + every "incentives" article):**

| Current (WRONG / outdated) | Correct (use this) | Source |
|---|---|---|
| "federal Investment Tax Credit (ITC) at 30%" / "30% federal ITC" presented as active; "net cost drops to…" | **§25D residential solar credit was 30% for systems completed through 2025 and is REPEALED for systems completed after Dec 31, 2025** (One Big Beautiful Bill) → no federal residential solar credit in 2026; route to a tax professional | IRS; gold residential/FAQ + pack §0 |
| "ITC applies to the entire BIPV roof" as a live advantage | Moot — §25D is repealed for 2026 residential systems; state the repeal, do not sell a dead credit | IRS |
| "federal 25C tax credit provides up to $1,200 annually" presented as active | **§25C Energy Efficient Home Improvement Credit is REPEALED for property placed in service after Dec 31, 2025** → no longer applies | IRS; pack §0 |
| (commercial solar credit) | **§48E Clean Electricity Investment Credit remains** for business-/third-party-owned solar; solar facilities terminate after Dec 31, 2027 unless construction begins within 12 months of OBBB enactment; **§179D** = whole-building deduction vs ASHRAE 90.1, not a roof credit | IRS; gold commercial |
| "Current TREC (Transition Renewable Energy Certificate) values ~$90–$100/MWh" | **NJ SuSI (Successor Solar Incentive) pays a fixed per-MWh SREC-II incentive over a 15-year term, administered by the NJBPU** — TREC was the prior, now-closed Transition program | NJBPU; gold residential/FAQ |
| "NJ Sales Tax exemption 6.625%" / "property tax exemption" | Correct — keep: **NJ sales-tax exemption claimed via Form ST-4** + **property-tax exemption via Form CRES** | NJ Division of Taxation; gold |
| "NJ net metering at full retail rate" | Correct — keep: **net metering credits exported power at full retail up to annual usage** (N.J.S.A. 48:3-87) | gold |
| "NJ Home Performance with ENERGY STAR rebates up to $4,000"; "PSE&G and JCP&L … additional incentives" (specific $) | DROP the invented rebate $ figures; frame NJ energy programs **qualitatively** (the NJ Clean Energy Program / utility efficiency programs exist; check current eligibility) and route tax/incentive questions to a tax professional | gold stays qualitative; ENERGY STAR roof program dead |

**Cool-roof / energy-efficiency facts:**

| Current (WRONG / unverified) | Correct (use this) | Source |
|---|---|---|
| "ENERGY STAR Cool Roof ratings … qualify for NJ incentive programs" | **The ENERGY STAR roof products program ended** (new certifications stopped June 1, 2021; recognition ended June 1, 2022) → the **CRRC-1** rating is the successor; reflectance per **ASTM C1549**, emittance per **ASTM C1371**, SRI per **ASTM E1980** | EPA, CRRC; gold |
| insulation "below R-49 current code" / "to R-49 (current NJ code)" | ceiling **R-60** (2021 IECC Table R402.1.3, Climate Zones 4–5); **R-49** is only the raised-heel-eave full-ceiling exception | 2021 IECC; gold |
| "reduce cooling costs by 15–30%" / "10–20% cooling cost reduction" / "dramatic cooling savings" (annual-bill framing) | a cool roof **reduces PEAK cooling demand by 11–27% in air-conditioned residential buildings** (a peak-demand figure, not an annual bill); a reflective coating **adds no R-value**; Newark is **Climate Zone 4–5 heating-dominated → a winter heating penalty** offsets part of the summer gain | EPA, DOE; gold |
| (reflective-roof temperature) | a reflective roof stays **>50°F cooler** than a conventional roof on a sunny afternoon (DOE); a clean white roof reflecting 80% stays ~**55°F (31°C) cooler** than a gray roof reflecting 20% (LBNL Heat Island Group) | DOE, LBNL; gold |
| component costs "$500–$1,500 cool shingles / $1,000–$2,500 radiant barrier / $1,500–$3,500 insulation / $3,000–$6,000 spray foam" | DROP — not gold-sourced; frame energy-efficient cost **qualitatively** (white membrane, reflective coating, above-deck insulation, ceiling insulation, ventilation/radiant barrier each price separately; free written estimate; NJ ranges sit above national figures) | gold pricing |
| "15–30% energy savings → $375–$1,200/yr"; "payback 4–8 yrs"; "3–5× return" | DROP invented $/yr + payback + ROI multiples — keep the EPA peak-cooling figure + winter-penalty caveat only | gold |

**Solar-panel facts (NQR = roofing side):**

| Current (WRONG / unverified) | Correct (use this) | Source |
|---|---|---|
| "$18,000–$30,000 (6–10 kW) before incentives"; "$2.80–$3.50/W"; "net cost drops to $12,600–$21,000" | panel install ~**$2.50–$4.00/W** installed (gold cross-reference); NQR prices only the **roofing scope** (mount flashing, re-roof-before-solar) via a **free written estimate**; **no 30% ITC net-cost math** | EnergySage/SolarReviews/WattBuild; gold |
| "4.2–4.5 peak sun hours"; "Solar Pathfinder shade analysis"; "monocrystalline 20–22% vs polycrystalline"; "Enphase vs SolarEdge"; "production monitoring app" | these are the **solar installer's** scope, not the roofer's — re-scope the panel articles to the **roofing** signs/cost/incentives (worn covering, flashing leak path, ASCE 7 load, NEC 690.12 rapid shutdown, IRC R324.6 firefighter access, UL 790 assembly fire rating; module life 25–30+ yr, ~0.5%/yr degradation to 85–88%, per NREL/DOE) | gold signs/approach |
| "panels add 2–4 lb/sqft"; "older homes … structural evaluation" | keep qualitatively — load capacity confirmed before install; uplift and required ballast follow **ASCE 7**, corner/perimeter zones carry more ballast than the field | ASCE 7; gold |

**Solar-shingle facts:**

| Current (WRONG / unverified) | Correct (use this) | Source |
|---|---|---|
| "GAF-certified contractors" / "GAF-certified Master Elite contractors" / "Tesla-certified installers" (NQR-cert claims) | DROP all cert self-claims; frame generically — **the manufacturer requires a certified install to keep its system warranty** (GAF Energy lists a Solar Max warranty addendum requiring a certified install); never state NQR holds a cert | gold approach; R10 |
| "$35,000–$70,000 before incentives"; "net cost $24,500–$49,000 after 30% ITC" | solar shingles run ~**$3.50–$8.00/W installed** vs panels ~**$2.50–$4.00/W** (≈1.5–2× per-watt cost); a solar shingle pairs with a reroof, so tear-off/deck repair add to the PV cost; **no §25D for 2026 residential**; free written estimate | EnergySage/SolarReviews/WattBuild; gold |
| "produce 60–80% of the energy of equivalent panels"; "payback 10–15 yrs vs 5–8" | reframe: solar shingles are **less efficient (14–18% module efficiency vs >20% panels)** and cost more per watt — an **integration/appearance choice**, not an efficiency or per-watt-value choice; a 6 kW shingle system needs ~**360 sqft** vs ~250 for panels (~44% more area) | SolarReviews, EnergySage, NREL; gold |
| product list (Tesla, GAF Energy, CertainTeed Solstice, SunRoof) | **GAF Energy Timberline Solar** (57 W/shingle, nailable, min 2:12 pitch), **Tesla Solar Roof** (72 W/active tile), **CertainTeed Solstice** (70 W, 19.85% efficiency, new-roof/reroof only); all list **UL 2218 Class 4** hail + **UL 790 Class A** fire + **ASTM D3161** wind | each manufacturer; gold |

**Silicone-coating facts:**

| Current (WRONG / unverified) | Correct (use this) | Source |
|---|---|---|
| "$3–$6/sqft coating vs $5–$10/sqft replacement"; "$15,000–$30,000 vs $25,000–$50,000"; "25–30 mils for 10-yr warranty" | DROP invented $/sqft and totals; cost = **a fraction of tear-off and replacement** (free written estimate); warranty term scales with **dry-film thickness — ~10–15 yr at 20–22 mils, 15–20 yr at 30 mils** (renewable, recoat at 15–20 yr) | RCMA/Gaco/Henry/Mule-Hide; gold |
| "TPO and PVC generally do not accept silicone"; "10–20% cooling cost reduction" | keep substrate framing qualitatively; cooling = **EPA 11–27% peak cooling demand (residential, air-conditioned)**, smaller net annual benefit in Newark's heating-dominated Zone 4–5; coating **adds no R-value** | EPA, DOE, RCMA; gold |
| (governing standard) | **ASTM D6694 governs liquid-applied silicone coating** (principal polymer >95% silicone); cool-roof reflectance/emittance rated by the **CRRC under ASTM C1549** | ASTM, CRRC; gold |
| silicone "incentives and savings" article — implying a tax credit/rebate | **HONEST answer: there is no federal/NJ tax credit or rebate specific to a roof coating** (it generates no electricity → no §25D/SREC; it adds no R-value → no insulation incentive). The "savings" = **deferred replacement** (recoat at a fraction of tear-off, renewable warranty defers replacement) + **cool-roof peak-cooling reduction** + the RCMA "maintenance vs capital improvement" framing (defer tax treatment to the owner's tax professional) | gold commercial/FAQ; RCMA |

## Per-article specs

Each article: directAnswer (topic-definitional, ≤40w bold) → intro (1 bridge sentence) → **3**
question-heading sections (`body` 2–3 paragraphs each, R3 bold, named sources) → conclusion →
ctaHeading → ctaText (NQR registered NJ HIC, insured, free estimate; roofing-side positioning; no
cert/warranty claims) → metaDescription ≤160c.

### 1. solar-panel-roofing-installation-signs
**H1:** What Are the Signs You Need Solar Panel Roofing Installation?
**directAnswer:** the roofing signs before a solar array — a roof covering with less remaining life than
the 25–30+ yr module life (re-roof first), a mount flashed on top of rather than under the upslope
shingle course (a leak path), an unconfirmed roof-structure load, and a missing NEC 690.12 rapid
shutdown or IRC R324.6 firefighter access. Source NRCA Rooftop PV Guidelines / NREL / NEC / IRC.
**Sections:** (a) "When Should a Roof Be Re-Roofed Before Solar?" — module life 25–30+ yr, ~0.5%/yr
degradation to ~85–88% (NREL/DOE); a worn covering under an array forces a costly removal/reinstall, so
replace a covering with less remaining life than the array first (a roofing rule of thumb). (b) "What
Roofing Conditions Signal a Leak or Warranty Risk?" — the flashed foot must tuck under the upslope
shingle course so water sheds onto intact shingles (NRCA Rooftop PV Guidelines, IronRidge); a flashing
sitting on top of the course is a leak path; mount flashing must match the roof-covering manufacturer
instructions with a compatible sealant or the roofing warranty voids. (c) "What Structural and Code
Signs Apply?" — roof-structure load confirmed before install (uplift/ballast per ASCE 7, corner/perimeter
zones carry more ballast than the field); NEC 690.12 rapid shutdown (30 V outside / 80 V inside in 30 s);
IRC R324.6 firefighter pathways (36 in) + ridge setback (18 in at ≤33% coverage, 36 in above); UL 790
assembly fire rating; the array carries an AHJ building+electrical permit.

### 2. solar-panel-roofing-installation-cost-guide
**H1:** How Much Does Solar Panel Roofing Installation Cost in NJ?
**directAnswer:** rack-mounted solar panels run about **$2.50–$4.00 per watt installed** in NJ, while
the **roofing scope** that supports the array — mount flashing, structural verification, and any
re-roof-before-solar — is priced separately by a free written estimate. Source EnergySage/SolarReviews/
WattBuild. **(KILL the $18–30k / $2.80–3.50/W / 30%-ITC-net-cost math.)**
**Sections:** (a) "What Does the PV Array Itself Cost?" — ~$2.50–$4.00/W installed (gold cross-reference);
larger systems reach better per-watt pricing; the PV system is the **solar installer's** scope. (b) "What
Drives the Roofing Cost?" — roof age/condition (a re-roof-before-solar adds the covering cost), mount
type (pitched flashed-foot vs low-slope ballasted or mechanically-attached/flashed, per NRCA/SPRI),
structural verification (ASCE 7), and code coordination (NEC 690.12 / UL 790 / IRC R324.6 under an AHJ
permit); NJ ranges sit above national figures; NQR provides a free written estimate. (c) "Do Federal and
NJ Incentives Lower the Cost?" — **§25D residential 30% credit was available through 2025 and is repealed
for systems completed after Dec 31, 2025 (IRS)** → no federal residential credit in 2026; NJ SuSI
(SREC-II, 15-yr, NJBPU), net metering, and the ST-4/CRES exemptions remain; route to a tax professional.

### 3. solar-panel-roofing-installation-decision
**H1:** What NJ Incentives and Savings Apply to Solar Panel Roofing Installation?
**directAnswer:** New Jersey applies the **Successor Solar Incentive (SREC-II, 15-yr, NJBPU)**, **net
metering** at full retail, and **sales-tax (ST-4)** and **property-tax (CRES)** exemptions; the federal
**§25D** 30% residential credit is **repealed for systems completed after Dec 31, 2025**. Source IRS /
NJBPU. **(KILL TREC + active 30% ITC.)**
**Sections:** (a) "What NJ State Incentives Apply?" — SuSI pays a fixed per-MWh **SREC-II** incentive over
a **15-year** term (NJBPU); net metering credits exported power at full retail up to annual usage
(N.J.S.A. 48:3-87); the 6.625% sales-tax exemption (Form ST-4) and the property-tax exemption (Form CRES)
remove two cost barriers. (b) "What Federal Credit Applies in 2026?" — the §25D residential clean energy
credit was 30% for systems completed through 2025 and is **repealed** for systems completed after Dec 31,
2025 (One Big Beautiful Bill, IRS); a 2026 homeowner consults a tax professional. (c) "How Do Commercial
Solar Incentives Differ?" — a business-/third-party-owned system follows the **§48E Clean Electricity
Investment Credit** (solar facilities terminate after Dec 31, 2027 unless construction begins within 12
months of OBBB), alongside SuSI, net metering, and the NJ exemptions; tax questions go to a tax professional.

### 4. solar-shingle-installation-signs
**H1:** What Are the Signs You Need Solar Shingle Installation?
**directAnswer:** signs a solar shingle fits — a roof at or near reroof age (a shingle replaces the
covering), a preference for a uniform roof surface over visible panels, a roof pitch of 2:12 or steeper,
roughly 44% more available roof area than a panel array, and a budget that accepts a higher per-watt cost
for integrated appearance. Source DOE / GAF Energy / SolarReviews.
**Sections:** (a) "When Does a Solar Shingle Fit the Roof?" — BIPV replaces the covering, so it pairs with
a new roof or full reroof, not an add-on to a sound roof (CertainTeed Solstice is new-roof/reroof only);
min pitch 2:12 (GAF Energy, Tesla). (b) "Who Should Choose Shingles Over Panels?" — a homeowner
prioritizing the integrated appearance of a uniform surface over the lower per-watt cost of panels; solar
shingles cost ~1.5–2× per watt and produce less per square foot — an appearance choice, not an efficiency
choice (SolarReviews, EnergySage). (c) "What Roof and Product Requirements Apply?" — a 6 kW shingle system
needs ~360 sqft vs ~250 for panels (~44% more area, GAF Energy); products list UL 2218 Class 4 hail, UL
790 Class A fire, ASTM D3161 wind (GAF Energy Timberline Solar 57 W/shingle, Tesla Solar Roof 72 W/active
tile, CertainTeed Solstice 70 W). **(NQR installs the shingle as the roof covering; NO GAF-certified/Tesla-certified self-claim.)**

### 5. solar-shingle-installation-cost-guide
**H1:** How Much Does Solar Shingle Installation Cost in NJ?
**directAnswer:** solar shingles run about **$3.50–$8.00 per watt installed** — roughly 1.5–2× the
~$2.50–$4.00 per watt of rack-mounted panels — because a solar shingle replaces the roof covering and
pairs with a full reroof. Source EnergySage / SolarReviews / WattBuild. **(KILL $35–70k / 30% ITC math.)**
**Sections:** (a) "What Drives Solar Shingle Cost?" — per-watt cost ~$3.50–$8.00/W; roof area (~360 sqft
for 6 kW); product/wattage (GAF Energy 57 W, Tesla 72 W/tile, CertainTeed 70 W); a solar shingle pairs
with a reroof, so tear-off and deck repair add to the PV cost. (b) "How Does It Compare to Panels?" — ~1.5–2×
the per-watt cost and lower module efficiency (14–18% vs >20%); the fair comparison weighs the integrated
appearance against the lower per-watt value of panels (SolarReviews, EnergySage, NREL). (c) "Do Incentives
Lower the Cost?" — **§25D 30% residential credit is repealed for systems completed after Dec 31, 2025
(IRS)** → no federal residential credit in 2026; NJ SuSI (SREC-II, 15-yr), net metering, and the ST-4/CRES
exemptions apply equally to BIPV; a business-owned system follows §48E; route to a tax professional.

### 6. solar-shingle-installation-decision
**H1:** What NJ Incentives and Savings Apply to Solar Shingle Installation?
**directAnswer:** the same New Jersey incentives that apply to panels apply to a solar shingle — **SuSI
(SREC-II, 15-yr, NJBPU)**, **net metering**, and the **ST-4 / CRES** exemptions — because the NJBPU makes
no distinction between panel and BIPV technology; the federal **§25D** credit is **repealed for 2026
residential** systems. Source NJBPU / IRS.
**Sections:** (a) "What NJ Incentives Apply to a Solar Shingle?" — SuSI pays a fixed per-MWh SREC-II over
15 years (NJBPU); net metering at full retail (N.J.S.A. 48:3-87); sales-tax exemption (ST-4) and
property-tax exemption (CRES) apply equally to BIPV — the NJBPU makes no panel-vs-BIPV distinction. (b)
"What Federal Credit Applies in 2026?" — the §25D residential credit was 30% through 2025 and is repealed
for systems completed after Dec 31, 2025 (OBBB, IRS); a 2026 homeowner consults a tax professional. (c)
"How Do Commercial Solar Shingle Incentives Differ?" — a business-/third-party-owned BIPV system follows
**§48E** (solar facilities terminate after Dec 31, 2027 unless construction begins within 12 months of
OBBB), plus SuSI, net metering, and the NJ exemptions; tax questions go to a tax professional.

### 7. energy-efficient-roofing-solutions-signs
**H1:** What Are the Signs You Need Energy Efficient Roofing Solutions?
**directAnswer:** signs — a dark conventional roof reaching over 150°F on a sunny afternoon, a top-floor
space that overheats under summer sun, ceiling insulation below the code-minimum depth, rising peak
cooling demand, and an attic with blocked or unbalanced intake-and-exhaust ventilation. Source EPA / DOE
/ 2021 IECC.
**Sections:** (a) "What Surface and Comfort Signs Point to a Hot Roof?" — a dark roof over 150°F rejects
little solar heat (a reflective roof stays >50°F cooler, DOE); a top-floor space overheating signals heat
transferring into the conditioned space; a weathered dark low-slope membrane has lost reflectance (a clean
white roof reflecting 80% stays ~55°F cooler than a gray roof reflecting 20%, LBNL). (b) "What Insulation
and Ventilation Signs Apply?" — ceiling insulation below **R-60** (2021 IECC Table R402.1.3, Climate Zones
4–5; R-49 is only the raised-heel exception) marks an under-insulated assembly; blocked/missing/unbalanced
attic ventilation traps heat and moisture against the deck. **(KILL "below R-49 current code".)** (c) "When
Is the Best Time to Address Energy Efficiency?" — rising peak cooling demand in an air-conditioned building
points to a heat-absorbing roof (a cool roof cuts peak cooling demand 11–27% in air-conditioned residential
buildings, EPA); the deck-accessible window of a roof replacement is when reflective surface + insulation +
ventilation install together.

### 8. energy-efficient-roofing-solutions-cost-guide
**H1:** How Much Does Energy Efficient Roofing Solutions Cost in NJ?
**directAnswer:** energy-efficient roofing cost varies by roof size, the reflective product (white TPO/PVC
membrane or reflective coating), the insulation scope (ceiling R-60), and the ventilation work, because
each measure prices separately; NQR sets the scope in a free written estimate. Source gold pricing.
**(KILL invented component $ ranges.)**
**Sections:** (a) "What Components Drive the Cost?" — a white reflective TPO/PVC membrane prices by area
and thickness (~0.70–0.85 initial reflectance, 0.80–0.90 emittance per ASTM C1549, CRRC-listed); a
reflective elastomeric coating prices by area and dry-film thickness and **adds no R-value**; above-deck
and ceiling insulation price by the R-value target (R-60, 2021 IECC); ventilation and radiant-barrier work
price by attic area. (b) "Why Reflectance and R-Value Price Separately" — reflectance governs solar heat
gain at the surface while R-value governs conductive heat flow through the assembly (DOE), so a coating
(reflectance) and insulation (R-value) are separate line items, never one. (c) "Do Incentives Offset the
Cost?" — the federal **§25C** energy-efficiency credit and **§25D** solar credit are **repealed for 2026**
(IRS); NJ solar incentives (SuSI/net-metering/ST-4/CRES) apply when the roof includes solar; the NJ Clean
Energy Program / utility efficiency programs exist (check current eligibility); route to a tax professional.
**(KILL §25C-as-active + "$4,000 ENERGY STAR rebate" + payback/ROI numbers.)**

### 9. energy-efficient-roofing-solutions-decision
**H1:** What NJ Incentives and Savings Apply to Energy Efficient Roofing Solutions?
**directAnswer:** the federal **§25C** and **§25D** credits are **repealed for 2026**, so the savings come
from the energy performance itself — a cool roof cuts **peak cooling demand 11–27% in air-conditioned
residential buildings (EPA)** — offset by a winter heating penalty in Newark's Climate Zone 4–5. Source
IRS / EPA / DOE.
**Sections:** (a) "What Federal and NJ Programs Apply in 2026?" — §25C (energy-efficiency) and §25D (solar)
are repealed for property/systems placed in service after Dec 31, 2025 (IRS); NJ solar incentives
(SuSI/net-metering/ST-4/CRES) apply when the roof includes solar; the NJ Clean Energy Program / utility
efficiency programs exist (check current eligibility); §179D is a commercial whole-building deduction vs
ASHRAE 90.1. (b) "What Are the Real Energy Savings?" — a cool roof cuts peak cooling demand 11–27% in
air-conditioned residential buildings (EPA), a peak-demand figure not an annual bill; a reflective roof
stays >50°F cooler (DOE); a reflective coating adds no R-value, so insulation carries the conductive savings.
(c) "How Does the NJ Climate Affect the Net Benefit?" — Newark sits in heating-dominated Climate Zone 4–5,
so a reflective surface carries a winter heating penalty that offsets part of the summer gain; the net
annual benefit depends on the climate and the insulation, balanced for Essex County (DOE). **(KILL "$375–$1,200/yr" + payback.)**

### 10. silicone-roof-coating-signs
**H1:** What Are the Signs You Need Silicone Roof Coating?
**directAnswer:** signs — standing water that ponds more than 48 hours after rain, aging seams/splits/
lifted flashings leaking across the field, a sound deck and dry insulation under a deteriorated surface,
a softened or chalked acrylic coating, and a spray-foam roof with an eroded topcoat. Source RCMA / SPFA.
**Sections:** (a) "When Is a Flat Roof a Coating Candidate?" — a sound deck and dry insulation under a
deteriorated **surface** make restoration the economical path (recoat at a fraction of tear-off, avoids
landfill, RCMA); coating is NOT for widespread saturation, wet insulation, or a failed deck (those need
replacement — an infrared moisture survey decides). (b) "What Surface Signs Favor Silicone?" — ponding
>48 hr suits 100% silicone (resists permanent/standing water without softening; a flat roof needs ≥¼ in
per foot to drain, RCMA/NRCA); aging seams/splits/lifted flashings seal under one monolithic membrane; a
softened/chalked/washed-off acrylic in ponded areas signals the wrong chemistry (acrylic re-emulsifies
under immersion, RCMA/Western Colloid). (c) "What Roof Types Suit Silicone?" — modified bitumen, BUR,
EPDM, metal, and SPF take silicone; a UV-sensitive SPF roof with an eroded topcoat needs recoating on a
~15–20 yr silicone cycle (SPFA); the reflective white surface cuts peak cooling demand (EPA 11–27%,
residential, air-conditioned).

### 11. silicone-roof-coating-cost-guide
**H1:** How Much Does Silicone Roof Coating Cost in NJ?
**directAnswer:** silicone roof coating restores a low-slope roof at **a fraction of tear-off and
replacement cost** and is priced by roof size, the dry-film thickness specified, and the surface prep the
roof needs — NQR sets the scope in a free written estimate. Source RCMA. **(KILL $3–$6/sqft + $15–30k totals.)**
**Sections:** (a) "What Drives Silicone Coating Cost?" — roof size sets the silicone volume (~1.5 gal per
100 sqft for ~22 dry mils, Gaco/Henry); surface prep (cleaning, seam/split/flashing repair and
reinforcement) adds cost; an aged asphalt surface takes an epoxy primer after a 24-hr adhesion test (Gaco).
(b) "How Does Coating Compare to Replacement?" — recoating restores a roof at a fraction of tear-off and
replacement cost and keeps the old roof out of landfill (RCMA); a maintained silicone roof is recoated at
the 15–20 yr interval rather than torn off, and a recoated roof recoats again. (c) "How Does Warranty Term
Affect Cost?" — the renewable warranty scales with dry-film thickness — ~10–15 yr at 20–22 mils, 15–20 yr
at 30 mils (RCMA/Henry/Mule-Hide/Gaco) — so a thicker film raises both material and warranty length;
silicone is high-solids (~90%), so one application can reach the specified thickness.

### 12. silicone-roof-coating-decision
**H1:** What NJ Incentives and Savings Apply to Silicone Roof Coating?
**directAnswer:** no federal or NJ tax credit or rebate applies specifically to a roof coating — it
generates no electricity and adds no R-value — so the savings come from **deferred replacement** (recoat
at a fraction of tear-off, a renewable warranty) plus a reflective cool-roof reduction in **peak cooling
demand (EPA 11–27%, residential, air-conditioned)**. Source RCMA / EPA / DOE.
**Sections:** (a) "Do Tax Credits or Rebates Apply to a Roof Coating?" — honest: a roof coating generates
no electricity, so the solar §25D/SuSI/SREC paths do not apply, and it adds no R-value, so insulation
incentives do not apply; the RCMA classifies a coating as **maintenance** rather than a capital improvement
and defers the tax treatment to the building owner's tax professional. (b) "Where Do the Savings Come
From?" — deferred replacement (recoat at a fraction of tear-off, avoids landfill, renewable 10/15/20-yr
warranty defers full replacement, RCMA); a reflective white silicone surface (initial reflectance ~0.80–0.88,
CRRC) cuts peak cooling demand 11–27% in air-conditioned residential buildings (EPA), with a smaller net
annual benefit in Newark's heating-dominated Zone 4–5 (DOE). (c) "What Standard and Rating Govern the
Cool-Roof Claim?" — **ASTM D6694** governs liquid-applied silicone coating (principal polymer >95% silicone);
the cool-roof reflectance/emittance are listed by the **CRRC under ASTM C1549**, the successor to the
retired ENERGY STAR roof label (ended 2021); a silicone coating adds no R-value, so the benefit is
reflectance, not insulation.
