export const meta = {
  name: 'batch6-author-energy-solar',
  description: 'Author 5 answer-first energy-solar service snippets (Batch 6) grounded in ruleset + gold exemplar + facts-energy-solar.md + facts-materials-economics §6/§7',
  phases: [
    { title: 'Author', detail: 'one expert author per service → .snippet.ts + .md draft' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const OUT = `${PROJECT}/.planning/content-system/batch6`;

// Shared grounding the author must READ before writing (real files on disk).
const GROUNDING = `
BEFORE writing, READ these files in full:
1. ${PROJECT}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md  (the 34 rules + banned list + component templates)
2. ${PROJECT}/src/data/service-content/repair-maintenance.ts  (GOLD EXEMPLAR — match the 'roof-repair' object literal's structure, tone, and answer-first quality EXACTLY)
3. ${PROJECT}/src/lib/schemas.ts  (ServiceContentSchema — the exact field shape your object MUST satisfy)
4. ${PROJECT}/.planning/content-system/research/facts-energy-solar.md  (Batch-6 fact pack — read §0 GLOBAL CORRECTIONS first; your PRIMARY fact source)
5. ${PROJECT}/.planning/content-system/research/facts-materials-economics.md  (§6 PVC & SPF cool-roof reflectance/emittance + recoat cycles + R-value; §7; material/cost economics — cross-referenced by the Batch-6 pack)
6. ${PROJECT}/.planning/content-system/research/sources-and-nqr-facts.md  (Part A named authorities; Part B NQR safe facts)
7. ${PROJECT}/.planning/content-system/research/facts-cost-stats.md  (energy/insurance/cost stats)
`;

const RENDERED_HEADINGS = (name) => `
The page template RENDERS these question H-tags from HEADING_CONFIG (you do NOT write headings; your content fields supply the ANSWERS under them):
- H1: "Who Provides ${name} in Newark?"            ← answered by directAnswer
- H2: "What ${name} Do We Provide?"                ← answered by overview[] (+ optional subServices[])
- H2: "How Do You Know If You Need ${name}?"        ← answered by signs[] (signsHeading is a label)
- H2: "How Do Our Roofing Contractors Perform ${name}?" ← approachContent[]/approachSubheadings[]
- H2: "How Much Does ${name} Cost?"                ← pricing.range + pricing.factors[]
- H2: "Should You Repair or Replace Your Roof?"     ← covered inside an faqs[] item
- H2: "Why Choose Our Roofing Company for ${name}?" ← whyChooseUs.reasons[]
- H2: "What Related Roofing Services Should You Consider?" / "What Knowledge Base Articles Explain This Service?" / "How Can You Schedule ${name}?" ← rendered by template, no content field needed
Residential block ← residential{heading,content,ctaLabel}; Commercial block ← commercial{...}; Process ← processSteps[]; FAQ ← faqs[].
`;

const NQR_FACTS = `
NQR BUSINESS FACTS — assert ONLY these (D-01: omit unknowns, never invent, never placeholder):
- Brand: Newark Quality Roofing. Service area: Essex County, NJ. Named cities: Newark, East Orange, Bloomfield, Montclair, Belleville, Irvington.
- License: "New Jersey Home Improvement Contractor" (NO license number). Insured: carries liability coverage. Free roof inspections.
- Hours: Monday–Friday 7:00 AM–6:00 PM and Saturday 8:00 AM–2:00 PM.
- credentialsHighlight MUST be exactly: ['NJ HIC Licensed', 'Insured', 'Free Roof Inspections', 'Local Essex County Roofers'].
- Naming a product BRAND NQR installs/uses is allowed (gold exemplar names Firestone/Carlisle/Johns Manville; you may name GAF Energy Timberline Solar, VELUX, CRRC, ASTM, NEC, NJ BPU, IRS by name as authorities/products). Claiming a CERTIFICATION/dealer status is NOT — BANNED: "GAF Certified", "GAF Energy certified", "NABCEP certified" (for NQR), "Tesla certified installer", any unverified certified-installer/dealer status. You MAY name NABCEP as the industry credential; you may NOT claim NQR holds it.
- INCENTIVES (2026 reality — read facts-energy-solar §0.2 + §0.7 + Part E carefully): The federal §25D residential solar credit and §25C insulation credit are BOTH REPEALED for systems completed / placed in service after Dec 31, 2025 (per the IRS, under the One Big Beautiful Bill). NEVER tout a current "30% federal tax credit" — for a 2026 homeowner there is none. If the federal credit is named at all, frame it HISTORICALLY ("the federal residential solar credit was 30% for systems completed through 2025, per the IRS"); the commercial §48E path remains for business-owned/third-party systems. NAME the NJ programs QUALITATIVELY: "New Jersey's Successor Solar Incentive (SuSI) program, administered by the NJ Board of Public Utilities", NJ net metering, the NJ sales-tax exemption (Form ST-4), the NJ property-tax exemption (Form CRES). Do NOT put a hard SREC-II $/MWh on the page. Attribute as "per the IRS" / "administered by the NJ Board of Public Utilities" — NQR installs eligible equipment and is NOT the program administrator or a tax advisor.
- NO fabricated efficiency/savings percentages. Reflective/cool-roof claims carry the NJ heating-climate caveat from the pack §0; roof COATINGS add NO meaningful R-value (savings come from reflectance) — never claim a coating adds insulation R-value.
BANNED de-fab literals anywhere (incl. metaTitle/metaDescription you propose): "24/7", "same-day", "GAF Certified", "0% financing", "top-rated", "500+", "N+ years of experience", fabricated ratings/phone/address, any [VERIFY]/[UNVERIFIED] literal.
`;

const GATE_RULES = `
HARD GATE RULES (audit:semantics will fail the build otherwise):
- Answer-first: the FIRST sentence under each heading is a definitive factual answer ≤40 words, wrapped in **bold** (bold the ANSWER clause, not the keyword). directAnswer ≤40 words.
- NO modality words in declarative prose: will, should, need to, have to, must, might, may, would, could. (EXCEPTION: faqs[].question fields may use "Should you…/Do you need…" — questions are exempt. faqs[].answer fields are NOT exempt.)
- Every hard number is attributed in-text to a NAMED source from the fact packs ("per the CRRC", "per ASTM E1980", "per the DOE", "per the IRS", "per the NJ Board of Public Utilities", "per the RCMA", "per EnergySage cost data"). NEVER invent a number. If a fact is UNVERIFIED in the packs, state it qualitatively (no number) or omit.
- Counted plurals: introduce enumerated sets with their exact integer ("Newark Quality Roofing installs solar with 3 mounting methods: …").
- NO outbound links / URLs in prose. NO pronoun co-reference to entities (repeat "the coating", "the solar array", "Newark Quality Roofing" — avoid it/they/this/that/there). NO hype words (best/leading/trusted/premier/top-rated/unbeatable/amazing/seamless-as-praise).
- approachSubheadings.length === approachContent.length (2 or 3 each).
- One macro topic per page; repeat the primary n-gram in the opening answer and the closing section. silicone-roof-coating vs silicone-elastomeric-roof-coating MUST NOT cannibalize — differentiate the angle (general silicone restoration coating vs the elastomeric coating category incl. acrylic-vs-silicone selection) and avoid duplicate full treatments.
`;

const SNIPPET_SPEC = `
OUTPUT — write TWO files:
(A) ${OUT}/<serviceId>.snippet.ts — a SINGLE JavaScript/TypeScript object literal followed by a trailing comma, drop-in for an array. It MUST start with a line comment "// ─── N. <Name> ───" then "{" and end with "},". It is concatenated between "export const energySolarContent: ServiceContent[] = [" and "];" so it must parse as one array element. Use single quotes; escape apostrophes; use en-dashes for ranges. Include ALL required schema fields: serviceId, directAnswer, overview (2-5), optional subServices, signsHeading, signs (4-10), approachHeading, approachContent (2-5), approachSubheadings (=== approachContent length), residential{heading,content(2-5),ctaLabel}, commercial{heading,content(2-5),ctaLabel}, processSteps (4-8 {title,description}), faqs (4-10 {question,answer}), credentialsHighlight (the exact 4-item array), pricing{range,factors[]}, whyChooseUs{heading,reasons[]}. Match the gold exemplar's field set.
(B) ${OUT}/<serviceId>.md — a short draft doc: a rendered-heading→field map, the named sources used + the exact figure each is attributed to, and a self-audit checklist confirming: answer-first bolded openers, zero modality in declaratives, every number named-sourced, approachSubheadings===approachContent length, no de-fab literals, no outbound links, credentialsHighlight exact.
SELF-AUDIT before finishing: re-read your snippet and grep your own prose for will/should/need to/have to/must/might/may/would/could OUTSIDE faqs[].question — remove every one. Confirm every digit has a named source present in the fact packs.
Return a JSON summary (do not paste the whole snippet back).
`;

// SERVICES — ids/names/flags are final. The `facts` hint is finalized from
// facts-energy-solar.md after the research workflow completes.
const SERVICES = [
  {
    id: 'solar-panel-roofing-installation', name: 'Solar Panel Roofing Installation',
    isResidential: true, isCommercial: true,
    facts: 'Ground in facts-energy-solar.md PART A (+ §0, esp. §0.6/§0.8/§0.12/§0.2). MACRO ANGLE = the ROOFING side of rack-mounted PV (watertight attachment + structure + fire/electrical code), NOT electricity economics. Key entities: the flashed foot (lag bolt into the rafter; the flashing flange tucks UNDER the upslope shingle course so water sheds onto intact shingles — a flashing on top of the course is a leak path; NRCA Rooftop PV Guidelines 2nd Ed. / IronRidge); mount flashing follows the roof-covering manufacturer instructions with a compatible sealant or it voids the roof warranty, so the solar installer COORDINATES with the roofer (NRCA). Flat/low-slope = 2 methods: ballasted/non-penetrating (weight on a protection pad over the membrane) vs mechanically-attached/penetrating-and-flashed (NRCA/SPRI). Loads per ASCE 7 (corner/perimeter zones need more ballast; the roof structure is verified to carry the added load before install — added load is qualitative "a few psf rail / more for ballast", NOT a fixed psf). Fire Class A/B/C is a SYSTEM rating of module + mounting + roof covering (UL 790; UL 1703→61730), never the module alone. Rapid shutdown per NEC 690.12 (≤30 V outside / ≤80 V inside the array boundary within 30 s; via module-level electronics or a listed UL 3741 system — it LIMITS voltage, does not zero the modules). Firefighter access IRC R324.6 (pathways ≥36 in; ridge setback 18 in for arrays ≤33% of roof / 36 in for >33%); AHJ building + electrical permit/inspection. Panel life ~25–30+ yr (NREL/DOE); degradation ~0.5%/yr median, ~85–88% output at 25–30 yr (NREL); modules ~350–470 W, systems ~6–12 kW (SECONDARY GreenLancer/SolarTech — approximate). NAME NABCEP PVIP as the industry installer credential but NEVER claim NQR holds it. Roof-age rule of thumb (qualitative, NOT code): re-roof first if the roof will not outlast the ~25–30-yr panels. Do NOT claim panels "extend roof life". No primary cost source → free-estimate framing for pricing.range. Incentives handoff per §0.2/Part E: NO current 30% federal credit; name NJ SuSI (NJ BPU) + net metering qualitatively.',
  },
  {
    id: 'solar-shingle-installation', name: 'Solar Shingle Installation',
    isResidential: true, isCommercial: false,
    facts: 'Ground in facts-energy-solar.md PART B (+ §0, esp. §0.8/§0.6/§0.12/§0.5/§0.2). MACRO ANGLE = BIPV solar shingles as a ROOF-COVERING REPLACEMENT (not a retrofit add-on), with HONEST positioning vs panels. Definition: BIPV (building-integrated PV) — the PV IS the roof covering — vs BAPV (rack-mounted panels added on top, power-only) (DOE EERE; IEA-PVPS/NREL). Named products WITH the manufacturer attributed (NEVER as NQR-tested/independent — §0.8): GAF Energy Timberline Solar (world\'s first NAILABLE solar shingle, installs with the same crew/tools as Timberline asphalt shingles; ES 2 = 57 W/shingle, ~16.7 W/sq ft; UL 7103 BIPV cert, UL 790 Class A fire, UL 2218 Class 4 hail, ASTM D3161 Class F wind ~130 mph, NEC 690.12 + UL 3741, pitch ≥2:12; 25-yr warranty, ~84.8% output at yr 25); Tesla Solar Roof (72 W/active glass tile, full replacement, Class F/Class 4/Class A, ~85% output at yr 25); CertainTeed Solstice (70 W/shingle, 19.85% module efficiency, 110 mph wind, new-roof/re-roof only — cannot go over an existing roof); SunTegra Shingle (105–114 W). HONEST trade-offs (counted): solar shingles cost MORE per watt than panels — ~$3.50–$8.00/W vs ~$2.50–$4.00/W, ~1.5–2× (EnergySage/SolarReviews/WattBuild); need ~44% more roof area (~360 vs ~250 sq ft for 6 kW, SolarReviews); efficiency clusters ~14–18% vs >20% for premium panels (SolarReviews/NREL). Frame solar shingles as an AESTHETICS/INTEGRATION choice, never an efficiency or value win. Roof-covering replacement best paired with a new roof/full reroof. NO certification claims for NQR (§0.6). Do NOT tout the federal 25D credit (gone after 2025 — §0.2). Do NOT assert walkability (unverified). Do NOT frame solar shingles as a NJ "cool roof" energy-saver (§0.5). isCommercial=false → write a concise honest commercial block (small commercial / mixed-use / multi-family in Essex County) without over-claiming a commercial specialty. No primary cost source → free-estimate framing or attributed-aggregator ranges for pricing.range.',
  },
  {
    id: 'energy-efficient-roofing-solutions', name: 'Energy Efficient Roofing Solutions',
    isResidential: true, isCommercial: true,
    facts: 'Ground in facts-energy-solar.md PART C (+ §0, esp. §0.1/§0.3/§0.4/§0.5/§0.2) and facts-materials-economics §6 for white-membrane reflectance. MACRO ANGLE = the cool-roof + insulation levers with the NJ heating-climate caveat and CRRC (NOT ENERGY STAR) framing. Core metrics (counted): solar reflectance (0–1) + thermal emittance (0–1) combine into SRI per ASTM E1980; reflectance measured per ASTM C1549, emittance per ASTM C1371 (EPA: reflectance is "the most important characteristic" of a cool roof). The CRRC-1 Rated Products Directory lists initial AND 3-yr aged reflectance/emittance and reports performance only — NOT a "certified cool" approval. CRITICAL §0.1: the ENERGY STAR Roof Products program ENDED (new certs stopped June 1, 2021; recognition ended June 1, 2022) — cite CRRC, NEVER "ENERGY STAR roof". Surface-temp facts: a reflective roof stays >50°F cooler than a conventional roof (DOE); a clean white roof (80% reflective) ~55°F/31°C cooler than a gray roof (20%) (LBNL). The ONLY defensible cooling figure is EPA\'s reduce PEAK cooling demand by 11–27% in air-conditioned residential buildings — state it as PEAK demand, NEVER as "cuts your bill 11–27%" (§0.4). NJ heating-climate caveat: a reflective roof carries a winter heating penalty in Zone 4A–5; net annual benefit is climate-dependent — never promise year-round savings. Levers: white TPO/PVC membrane (~0.70–0.85 SR per §6), reflective coatings, continuous above-deck insulation, radiant barrier, attic ventilation + code-minimum ceiling R-60 (2021 IECC R402.1.3, NJ adopted April 2023). Keep reflectance (radiative) and R-value (conductive) as SEPARATE non-interchangeable claims — coatings add NO R-value (§0.3). Federal §25C insulation + §25D solar credits BOTH repealed after Dec 31, 2025; §179D is a commercial whole-building deduction, not a roof credit (§0.2). Never cite Title 24 (CA only). Cost qualitative/free-estimate.',
  },
  {
    id: 'silicone-roof-coating', name: 'Silicone Roof Coating',
    isResidential: false, isCommercial: true,
    facts: 'Ground in facts-energy-solar.md PART D (+ §0, esp. §0.3/§0.1/§0.9/§0.6/§0.4/§0.10) and facts-materials-economics §6. MACRO ANGLE for THIS page = the SILICONE RESTORATION COATING SERVICE (ponding resistance, reflectivity, recoat-instead-of-tear-off). MUST DIFFERENTIATE from silicone-elastomeric-roof-coating (page 5 = the elastomeric category + silicone-vs-acrylic selection) — do NOT duplicate the full chemistry-comparison treatment here; keep this page on the silicone restoration service. Key facts: ASTM D6694 governs liquid-applied silicone coating for SPF roofing (>95% silicone; NEVER cite D6511 — wrong standard, §0.10); silicone is single-component MOISTURE-CURE (reacts with atmospheric moisture, enabling colder/higher-humidity application; Henry/RCMA). HEADLINE differentiator: 100% silicone resists permanent ponding/standing water without softening or degrading (hydrophobic Si-O backbone; RCMA/Gaco/Tremco/Henry/GE-Momentive). High-solids ~90%+, ~1.5 gal/100 sq ft for ~22 dry mils (Gaco/Henry). Initial solar reflectance ~0.80–0.88 as a COATING value (Henry 887 Tropi-Cool 0.88, CRRC) — keep DISTINCT from §6 white-membrane 0.70–0.85; aged reflectance drops faster because silicone holds dirt (0.88→0.73 at 3 yr, CRRC/Henry). Renewable: a maintained silicone roof is RECOATED (~15–20 yr interval, matches §6), not torn off — restoration at a fraction of replacement cost, avoids landfill (RCMA); warranty scales with DFT (10/15/20-yr; ~30 mils → 15–20 yr). Surface prep is mandatory: clean + fully DRY first ("a primer is no substitute for thorough cleaning"), repair seams/splits/flashing + reinforce details, adhesion test before full coat (e.g. Gaco Adhesion Test Kit) — even ponding-resistant silicone needs a clean dry surface (RCMA/Gaco). Silicone-over-silicone limitation: cured silicone is recoated with silicone, not acrylic/urethane (Gaco/RCMA). Tax framing QUALITATIVE only: coatings are "typically maintenance" but defer to the owner\'s tax professional (RCMA) — never a guaranteed tax outcome. CRITICAL §0.3: silicone coating adds NO meaningful R-value — savings come from reflectance, never insulation. NJ heating caveat (§0.4): peak-summer cooling-demand reduction + membrane-life extension, smaller net annual benefit in Zone 4–5. NO ENERGY STAR (use CRRC, §0.1), NO certification claims for NQR (§0.6). No primary cost source → free-estimate framing or attributed-aggregator ranges. isResidential=false → write a concise honest residential block (residential low-slope/flat sections — porch, garage, row-home flat roofs — in Essex County) without over-claiming a residential specialty.',
  },
  {
    id: 'silicone-elastomeric-roof-coating', name: 'Silicone Elastomeric Roof Coating',
    isResidential: false, isCommercial: true,
    facts: 'Ground in facts-energy-solar.md PART D (+ §0, esp. §0.3/§0.1/§0.10/§0.9/§0.6/§0.4) and facts-materials-economics §6. MACRO ANGLE for THIS page = the ELASTOMERIC-COATING CATEGORY + the silicone-vs-acrylic SELECTION decision + elongation/thermal-movement accommodation. MUST DIFFERENTIATE from silicone-roof-coating (page 4 = the silicone restoration service + full ponding/prep treatment) — here SUMMARIZE prep/ponding briefly and FOCUS on the chemistry-selection decision and the elastomeric/movement angle; do NOT duplicate page 4\'s full treatment (R22/R32 info-gain). Key facts: "elastomeric" = the coating STRETCHES and recovers to accommodate thermal movement — high elongation that exceeds elastomeric minimums (manufacturer datasheet, NOT an in-standard number: Simiron TEKTOP silicone 279% per ASTM D412; Acrymax AF-130FR acrylic 220% per ASTM D2370; §0.10 — do not invent the standard\'s minimum). RCMA recognizes the coating chemistries (counted): silicone (ASTM D6694, moisture-cure), acrylic (ASTM D6083, water-based latex), polyurethane (ASTM D6947, toughest film ~1,500 psi tensile), and SEBS. SELECTION decision (use a Comparison Proposition): silicone over acrylic when ponding/standing water is present (acrylic is water-based and re-emulsifies under immersion; most acrylic warranties exclude ponded areas — RCMA/Western Colloid); acrylic over silicone when dirt-pickup/recoatability matters (acrylic re-washes cleaner with rain while silicone holds dirt and loses reflectance faster — CRRC/Henry/Mule-Hide). Coverage: silicone high-solids (~90%+) often one coat; acrylic lower-solids (~50–60%) usually needs two coats. Both white coatings ~0.80–0.88 initial SR (CRRC) — a COATING value distinct from §6 membrane. Renewable recoat ~10–15 yr acrylic / ~15–20 yr silicone (§6); warranties 10/15/20-yr scale with DFT. CRITICAL §0.3: an elastomeric coating adds NO meaningful R-value (savings = reflectance, not insulation) — never "insulating coating". NJ heating caveat (§0.4). NO ENERGY STAR (use CRRC, §0.1), NO certification claims for NQR (§0.6), NO hard cost as a primary NQR price (free-estimate or attributed-aggregator, §0.9). isResidential=false → write a concise honest residential block (residential low-slope/flat sections in Essex County) without over-claiming a residential specialty.',
  },
];

phase('Author');
const SUMMARY_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['serviceId', 'wrote', 'namedSources', 'hardNumbers', 'modalityCheck', 'subheadingsEqual', 'defabCheck'],
  properties: {
    serviceId: { type: 'string' },
    wrote: { type: 'array', items: { type: 'string' }, description: 'file paths written' },
    namedSources: { type: 'array', items: { type: 'string' } },
    hardNumbers: { type: 'array', items: { type: 'string' }, description: 'each figure + its named source' },
    modalityCheck: { type: 'string', description: 'confirm zero modality in declaratives (FAQ questions exempt)' },
    subheadingsEqual: { type: 'boolean' },
    defabCheck: { type: 'string', description: 'confirm no banned de-fab literals / certifications' },
  },
};

const results = await parallel(SERVICES.map((s, i) => () =>
  agent(
    `You are an expert SEO roofing copywriter producing answer-first semantic content for Newark Quality Roofing.\n\nWRITE the content object for service "${s.name}" (serviceId: ${s.id}), entry #${i + 1} of 5 in the energy-solar category.\n\n${GROUNDING}\n${RENDERED_HEADINGS(s.name)}\n${NQR_FACTS}\n${GATE_RULES}\n\nFACT GROUNDING FOR THIS SERVICE: ${s.facts}\n\nThis service isResidential=${s.isResidential}, isCommercial=${s.isCommercial}. The schema REQUIRES BOTH a residential{} block AND a commercial{} block regardless of these flags.\n${s.isResidential ? 'Write a substantive residential block.' : 'isResidential is false (primarily a commercial/low-slope service), but still write a concise, HONEST residential block — e.g. for residential flat/low-slope sections, row-home flat roofs, porch/garage low-slope roofs, or multi-family homes in Essex County — without over-claiming a residential specialty.'}\n${s.isCommercial ? 'Write a substantive commercial block.' : 'isCommercial is false (primarily residential), but still write a concise, HONEST commercial block — e.g. for small commercial / mixed-use / multi-family properties in Essex County — without over-claiming a commercial specialty.'}\n\n${SNIPPET_SPEC}`,
    { label: `author:${s.id}`, phase: 'Author', schema: SUMMARY_SCHEMA }
  )
));

return { authored: results.filter(Boolean) };
