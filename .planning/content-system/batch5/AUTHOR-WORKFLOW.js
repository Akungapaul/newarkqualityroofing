export const meta = {
  name: 'batch5-author-components-specialty',
  description: 'Author 10 answer-first components-specialty service snippets (Batch 5) grounded in ruleset + gold exemplar + fact packs',
  phases: [
    { title: 'Author', detail: 'one expert author per service → .snippet.ts + .md draft' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const OUT = `${PROJECT}/.planning/content-system/batch5`;

// Shared grounding the author must READ before writing (real files on disk).
const GROUNDING = `
BEFORE writing, READ these files in full:
1. ${PROJECT}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md  (the 34 rules + banned list + component templates)
2. ${PROJECT}/src/data/service-content/repair-maintenance.ts  (GOLD EXEMPLAR — match the 'roof-repair' object literal's structure, tone, and answer-first quality EXACTLY)
3. ${PROJECT}/src/lib/schemas.ts  (ServiceContentSchema — the exact field shape your object MUST satisfy)
4. ${PROJECT}/.planning/content-system/research/facts-components-specialty.md  (Batch-5 component facts — your primary fact source)
5. ${PROJECT}/.planning/content-system/research/facts-causes-signs.md  (flashing 90-95%, ventilation 1:150/1:300, deck decay, gutter cleaning, ice dams)
6. ${PROJECT}/.planning/content-system/research/facts-cost-stats.md  (attic vent extends life ~25%, insurance claim stats)
7. ${PROJECT}/.planning/content-system/research/facts-materials-economics.md  (material lifespans, repair-vs-replace rules)
8. ${PROJECT}/.planning/content-system/research/sources-and-nqr-facts.md  (Part A named authorities; Part B NQR safe facts)
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
- License: "New Jersey Home Improvement Contractor" (NO license number). Insured: carries liability coverage (Contractors Registration Act requires it). Free roof inspections.
- Hours: Monday–Friday 7:00 AM–6:00 PM and Saturday 8:00 AM–2:00 PM.
- credentialsHighlight MUST be exactly: ['NJ HIC Licensed', 'Insured', 'Free Roof Inspections', 'Local Essex County Roofers'].
- Naming a product BRAND NQR installs is allowed (gold exemplar names Firestone/Carlisle/Johns Manville). Claiming a CERTIFICATION is NOT — BANNED: "GAF Certified", "VELUX certified installer", any unverified certified-installer status.
BANNED de-fab literals anywhere (incl. metaTitle/metaDescription you propose): "24/7", "same-day", "GAF Certified", "0% financing", "top-rated", "500+", "15+ years", fabricated ratings/phone/address, any [VERIFY]/[UNVERIFIED] literal.
`;

const GATE_RULES = `
HARD GATE RULES (audit:semantics will fail the build otherwise):
- Answer-first: the FIRST sentence under each heading is a definitive factual answer ≤40 words, wrapped in **bold** (bold the ANSWER clause, not the keyword). directAnswer ≤40 words.
- NO modality words in declarative prose: will, should, need to, have to, must, might, may, would, could. (EXCEPTION: faqs[].question fields may use "Should you…/Do you need…" — questions are exempt. faqs[].answer fields are NOT exempt.)
- Every hard number is attributed in-text to a NAMED source from facts-*.md ("per the NRCA", "per the InterNACHI life-expectancy chart", "per the IRC", "per HomeGuide cost data"). NEVER invent a number. If a fact is UNVERIFIED in the packs, state it qualitatively (no number) or omit.
- Counted plurals: introduce enumerated sets with their exact integer ("Newark Quality Roofing installs 5 flashing types: …").
- NO outbound links / URLs in prose. NO pronoun co-reference to entities (repeat "the flashing", "the gutter", "Newark Quality Roofing" — avoid it/they/this/that/there). NO hype words (best/leading/trusted/premier/top-rated/unbeatable/amazing/seamless-as-praise).
- approachSubheadings.length === approachContent.length (2 or 3 each).
- One macro topic per page; repeat the primary n-gram in the opening answer and the closing section.
`;

const SNIPPET_SPEC = `
OUTPUT — write TWO files:
(A) ${OUT}/<serviceId>.snippet.ts — a SINGLE JavaScript/TypeScript object literal followed by a trailing comma, drop-in for an array. It MUST start with a line comment "// ─── N. <Name> ───" then "{" and end with "},". It is concatenated between "export const componentsSpecialtyContent: ServiceContent[] = [" and "];" so it must parse as one array element. Use single quotes; escape apostrophes; use en-dashes for ranges. Include ALL required schema fields: serviceId, directAnswer, overview (2-5), optional subServices, signsHeading, signs (4-10), approachHeading, approachContent (2-5), approachSubheadings (=== approachContent length), residential{heading,content(2-5),ctaLabel}, commercial{heading,content(2-5),ctaLabel}, processSteps (4-8 {title,description}), faqs (4-10 {question,answer}), credentialsHighlight (the exact 4-item array), pricing{range,factors[]}, whyChooseUs{heading,reasons[]}. Match the gold exemplar's field set.
(B) ${OUT}/<serviceId>.md — a short draft doc: a rendered-heading→field map table, the named sources used + the exact figure each is attributed to, and a self-audit checklist confirming: answer-first bolded openers, zero modality in declaratives, every number named-sourced, approachSubheadings===approachContent length, no de-fab literals, no outbound links, credentialsHighlight exact.
SELF-AUDIT before finishing: re-read your snippet and grep your own prose for will/should/need to/have to/must/might/may/would/could OUTSIDE faqs[].question — remove every one. Confirm every digit has a named source.
Return a JSON summary (do not paste the whole snippet back).
`;

// SERVICES — finalized after research synthesis. Each `facts` hint names the
// fact-pack sections/figures the author should ground in.
const SERVICES = [
  {
    id: 'roof-flashing-installation-repair', name: 'Roof Flashing Installation Repair',
    isResidential: true, isCommercial: true,
    facts: 'Ground in facts-components-specialty.md §1 (+ §0 global corrections). Key entities: step, counter, valley, apron, drip edge, kickout/diverter, pipe-boot, chimney flashing (counted plural). Use: drip edge ≥2 in onto deck + ≤12 in O.C. (IRC R905.2.8.5 — NOT 8-10 in); kickout where eave meets sidewall (IRC R903.2.1); step flashing one piece per shingle course, continuous strip = defective (InterNACHI); ice-and-water shield ASTM D1970 self-seals around fasteners; flashing reseal $200-$500 (Modernize). The "roughly 90-95% of leaks originate at flashing" line MUST be hedged exactly as "an industry estimate attributed to the NRCA" (see §0.1). Also pull from facts-causes-signs.md §2.1/§5.',
  },
  {
    id: 'chimney-flashing-repair', name: 'Chimney Flashing Repair',
    isResidential: true, isCommercial: false,
    facts: 'Ground in facts-components-specialty.md §2 (+ §0). Spine = NRCA two-part system (base/step flashing woven per course + counter/cap flashing set into a reglet cut in a mortar joint). Continuous one-piece flashing = defective (InterNACHI). Surface caulk alone is temporary — masonry-vs-roof movement + freeze-thaw crack it (IIBEC). Cricket/saddle required where chimney width parallel to ridge > 30 in (IRC R1003.20). Cost $300-$1,800, most $400-$1,600, spot reseal $150-$300 (HomeGuide/Angi). Chimney = largest penetration, most leak-prone. isCommercial=false.',
  },
  {
    id: 'gutter-installation-repair', name: 'Gutter Installation Repair',
    isResidential: true, isCommercial: true,
    facts: 'Ground in facts-components-specialty.md §3 (+ §0). Material lifespans from InterNACHI chart (copper 50+, aluminum 20-40+, steel 20, vinyl 25+). 5-in vs 6-in K-style + matched downspouts (2x3 / 3x4). Seamless vs sectional (Englert — joints are where sectional leaks). Slope ~1/4 in per 10 ft is a TRADE rule, NOT code (do not cite a code section for slope). Clog → overflow → fascia/soffit rot + foundation/basement water (Angi). Cleaning 2x/yr, 3-4x with pines (Angi/GAF). Cost ~$12-$25/ft installed; repair $100-$450 avg ~$275 (HomeGuide). CRITICAL: do NOT say "clogged gutters cause ice dams" — root cause is attic heat loss (Building Science Digest 135 / Univ. of Minnesota Extension); gutters only aggravate. Ice barrier ≥24 in inside wall line (IRC R905.1.2).',
  },
  {
    id: 'gutter-guard-installation', name: 'Gutter Guard Installation',
    isResidential: true, isCommercial: false,
    facts: 'Ground in facts-components-specialty.md §4 (+ §0). Spine = the 5 types (micro-mesh, screen/perforated, reverse-curve, foam, brush — This Old House) and the HONEST caveat that NO guard is maintenance-free — guards reduce, not eliminate, cleaning (This Old House; Consumer Reports "easier cleaning, not elimination"). Survey n=1,000 Nov 2025: ~30% stopped cleaning, 41% annual, 22% twice (63% still clean ≥annually). Micro-mesh = finest filtration, 316L stainless on uPVC frame, ~100-300 micron sweet spot (LeafFilter). Cost ladder by type (This Old House/Angi). BANNED: "100% clog-free / never clean again / maintenance-free"; universal single micron rating; cert claims. isCommercial=false.',
  },
  {
    id: 'skylight-installation-repair', name: 'Skylight Installation Repair',
    isResidential: true, isCommercial: true,
    facts: 'Ground in facts-components-specialty.md §5 (+ §0). Skylight life 10-20 yr (InterNACHI). Leading leak cause = failed/improper FLASHING, not the glass (qualitative — no invented %). VELUX warranty terms: 20-yr glass seal, 10-yr product, 10-yr No Leak (conditioned on matching VELUX flashing kit). Fakro similar. Deck-mounted vs curb-mounted, each needs its matched flashing kit; engineered flashing beats degrading caulk (VELUX). Skylights on <3:12 roofs sit on a ≥4-in curb (IRC R308.6.8). Condensation vs leak — water at a skylight is often winter condensation from indoor humidity, not a leak (VELUX). Cost: install $1,600-$4,200, replace $800-$2,400 (HomeGuide), repair $225-$800 (Angi). NQR installs VELUX and Fakro — NEVER "certified". The services.ts metaDescription "VELUX certified installer" is being de-fabbed; do not echo any cert claim.',
  },
  {
    id: 'fascia-installation-repair', name: 'Fascia Installation Repair',
    isResidential: true, isCommercial: false,
    facts: 'Ground in facts-components-specialty.md §6 (+ §0). Fascia closes the rafter-tail ends and is the mounting surface that holds the gutters (InterNACHI). Rots from clogged/overflowing or loose gutters soaking the board; water-filled gutters ~5-7 lb/ft that weak fascia cannot carry → sagging gutters pull away (the key tell). Signs: peeling paint, soft/spongy spots, cracks, sagging gutters (Ledegar). Materials: painted wood (pine/cedar, ~15-25 yr, repaint), PVC (impervious), aluminum cladding, fiber-cement/composite. Aluminum fascia bundled 20-40+ yr (InterNACHI). Keep PVC/aluminum lifespans qualitative (no spec). isCommercial=false.',
  },
  {
    id: 'soffit-installation-repair', name: 'Soffit Installation Repair',
    isResidential: true, isCommercial: false,
    facts: 'Ground in facts-components-specialty.md §7 (+ §0) and facts-causes-signs.md §5. Spine = soffit vents are the PRIMARY INTAKE; blocked by insulation/paint/debris → balanced system fails, attic traps heat & moisture → condensation/mold (U.S. DOE Building America / PNNL; InterNACHI). Insulation baffles keep eave insulation from choking the soffit intake (DOE). Balanced system ~50% intake / 50% exhaust (ARMA/Air Vent). IRC R806.2 min 1/150 (do NOT claim Newark qualifies for 1/300 on the cold-zone vapor-retarder basis — Newark is Zone 4-5). Materials: vinyl/aluminum/wood/fiber-cement, vented vs solid. isCommercial=false.',
  },
  {
    id: 'roof-vent-installation-repair', name: 'Roof Vent Installation Repair',
    isResidential: true, isCommercial: true,
    facts: 'Ground in facts-components-specialty.md §8 (+ §0). STRONGEST differentiated claim: NEVER mix two exhaust-vent types over a shared attic (ridge + power fan, ridge + gable, ridge + box/turbine) — it short-circuits airflow and the lower exhaust becomes an intake that pulls in wind-driven rain/snow (Air Vent Inc./Paul Scelsi; RAVC; GAF). 5 vent types (counted): ridge, box/static, turbine, powered/solar, gable. Balanced 50/50 intake/exhaust (ARMA). IRC R806.2 min net free area 1/150 (1/300 needs a vapor retarder; cold-zone leg N/A in Newark Zone 4-5). NFA = actual unobstructed opening (ARMA). Passive ridge+soffit preferred over powered fans, which depressurize the attic (DOE Building America; Lstiburek). Ventilation reduces mold/ice dams, often a shingle-warranty condition (NRCA). Treat any "extends shingle life ~20-30% / up to 25%" as an industry estimate only — do NOT state as a verbatim NRCA/ARMA stat.',
  },
  {
    id: 'roof-waterproofing', name: 'Roof Waterproofing',
    isResidential: true, isCommercial: true,
    facts: 'Ground in facts-components-specialty.md §9 (+ §0). FLAGSHIP stat: a fully sealed roof deck cuts water entry into the home by as much as 95% vs. an unsealed deck (IBHS — Brown-Giammanco / Anne Cope, P.E.); on a 2,000-sq-ft unsealed roof stripped of shingles up to 750 gal/in of rain enter (~nine bathtubs, IBHS/Cope). Ice barrier ≥24 in inside wall line, ≥36 in along slope on ≥8:12 roofs (IRC R905.1.2, NJ enforces 2021 IRC). Self-adhered membrane ASTM D1970 self-seals around fasteners. Underlayment ASTM D226 felt vs near-waterproof synthetic. Low-slope needs ¼ in/ft min slope (NRCA). IBHS-approved sealed-deck methods; liquid/elastomeric membrane at low-slope & flashing details. NJ adopts 2021 IRC via N.J.A.C. 5:23. No dollar cost (none sourced — qualitative/omit).',
  },
  {
    id: 'roof-deck-repair-replacement', name: 'Roof Deck Repair and Replacement',
    isResidential: true, isCommercial: true,
    facts: 'Ground in facts-components-specialty.md §10 (+ §0). CORNERSTONE: roofing nails must penetrate ≥3/4 in into the deck (or fully through + 1/8 in if deck <3/4 in) — so rotted sheathing that cannot grip a nail must be replaced (ARMA; InterNACHI ties deck rot to lost fastener hold + wind vulnerability). APA span ratings (7/16" = 24/16 typical min; 15/32"=32/16; 19/32"=40/20; 23/32"=48/24). Panels <1/2 in over rafters >20 in o.c. need H-clips/T&G/blocking (IRC R803.2/Table R503.2.1.1(1)). InterNACHI 5/8" at 24" o.c. Failing-deck signs: daylight through deck, soft/spongy/crumbling wood, sag between rafters, delaminated plywood / swollen OSB (InterNACHI; GAF). Plywood partly recovers; OSB swells irreversibly. Reroof over a water-soaked/deteriorated deck not permitted (IRC R908). Cost $2-$5/sq ft (~$5,500 avg, HomeGuide; Angi $2-$6); re-deck add-on ~$50-$120/4x8 sheet (contractor). OSB cheaper than plywood. No deck-specific lifespan number.',
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
    `You are an expert SEO roofing copywriter producing answer-first semantic content for Newark Quality Roofing.\n\nWRITE the content object for service "${s.name}" (serviceId: ${s.id}), entry #${i + 1} of 10 in the components-specialty category.\n\n${GROUNDING}\n${RENDERED_HEADINGS(s.name)}\n${NQR_FACTS}\n${GATE_RULES}\n\nFACT GROUNDING FOR THIS SERVICE: ${s.facts}\n\nThis service isResidential=${s.isResidential}, isCommercial=${s.isCommercial}. ${s.isCommercial ? 'Write a substantive commercial block.' : 'isCommercial is false, but the schema still REQUIRES a commercial{} block — write a concise, honest commercial block (e.g. for multi-family / mixed-use / small commercial properties in Essex County) that stays factual; do not over-claim a commercial specialty.'}\n\n${SNIPPET_SPEC}`,
    { label: `author:${s.id}`, phase: 'Author', schema: SUMMARY_SCHEMA }
  )
));

return { authored: results.filter(Boolean) };
