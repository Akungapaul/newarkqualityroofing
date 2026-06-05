export const meta = {
  name: 'batch7-author-design-consultation',
  description: 'Author 3 answer-first design-consultation service snippets (Batch 7: custom-roof-design-consultation, historic-roof-restoration, roof-ice-dam-prevention) grounded in ruleset + gold exemplar + the batch7 fact packs',
  phases: [
    { title: 'Author', detail: 'one expert author per service → .snippet.ts + .md draft' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const OUT = `${PROJECT}/.planning/content-system/batch7`;

// Shared grounding the author must READ before writing (real files on disk).
const GROUNDING = `
BEFORE writing, READ these files in full:
1. ${PROJECT}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md  (the rules + banned list + component templates)
2. ${PROJECT}/src/data/service-content/repair-maintenance.ts  (GOLD EXEMPLAR — match the 'roof-repair' object literal's structure, tone, and answer-first quality EXACTLY)
3. ${PROJECT}/src/lib/schemas.ts  (ServiceContentSchema — the exact field shape your object MUST satisfy)
4. The fact pack(s) named in YOUR service's FACT GROUNDING below — your PRIMARY fact source. Read the §0 GLOBAL CORRECTIONS block first where one exists.
5. ${PROJECT}/.planning/content-system/research/facts-materials-economics.md  (material lifespans + NJ regional pricing — slate §2, metal §3, wood §5, clay tile §6, copper in §0 master table; §7 NJ pricing)
6. ${PROJECT}/.planning/content-system/research/facts-nj-regulatory-climate.md  (NJ UCC permit thresholds, ordinary-maintenance N.J.A.C. 5:23-2.7, Essex County climate)
7. ${PROJECT}/.planning/content-system/research/sources-and-nqr-facts.md  (Part A named authorities; Part B NQR safe facts)
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
- Related-services / KB-articles / scheduling H2s ← rendered by template, no content field needed
Residential block ← residential{heading,content,ctaLabel}; Commercial block ← commercial{...}; Process ← processSteps[]; FAQ ← faqs[].
`;

const NQR_FACTS = `
NQR BUSINESS FACTS — assert ONLY these (omit unknowns, never invent, never placeholder):
- Brand: Newark Quality Roofing. Service area: Essex County, NJ. Named cities: Newark, East Orange, Bloomfield, Montclair, Belleville, Irvington, Glen Ridge.
- License: "New Jersey Home Improvement Contractor" (NO license number). Insured: carries liability coverage. Free roof inspections.
- Hours: Monday–Friday 7:00 AM–6:00 PM and Saturday 8:00 AM–2:00 PM.
- credentialsHighlight MUST be exactly: ['NJ HIC Licensed', 'Insured', 'Free Roof Inspections', 'Local Essex County Roofers'].
- Naming a product BRAND or material NQR installs is allowed (the gold exemplar names Firestone/Carlisle/Johns Manville; you may name slate/copper/terne, GAF, VELUX). Naming an AUTHORITY is allowed (NPS, the Secretary of the Interior's Standards, NPS Preservation Briefs, the National Slate Association, the Copper Development Association, the NJ DEP Historic Preservation Office, a municipal Historic Preservation Commission, the IRS, the NJEDA, the University of Minnesota Extension, the IRC, the NRCA, ASTM, ASCE 7). Claiming a CERTIFICATION / dealer / accreditation status for NQR is NOT allowed.
- BANNED de-fab literals anywhere (incl. any metaTitle/metaDescription you propose): "24/7", "same-day", "GAF Certified", "0% financing", "top-rated", "500+", "N+ years of experience", "certified historic restoration"/"preservation-certified" (for NQR), fabricated ratings/phone/address, fabricated guarantees, any [VERIFY]/[UNVERIFIED] literal.

BATCH-7 SPECIFIC CAUTIONS (do NOT violate):
- HISTORIC: NQR is a roofing contractor, NOT a preservation architect, the State Historic Preservation Office, or a tax advisor — attribute every preservation/regulatory/tax claim ("per the NPS", "per the municipal Historic Preservation Commission", "per the NJ DEP Historic Preservation Office", "per the IRS", "per the NJEDA"). NEVER claim NQR holds a "certified historic restoration" credential. Do NOT tell a homeowner that a National Register or NJ Register LISTING by itself forbids an ordinary reroof — the binding private-owner gate is a LOCAL historic-district ordinance + Certificate of Appropriateness. State tax-credit values qualitatively (the federal 20% §47 credit is income-producing-only; treat caps/percentages as time-sensitive per the fact pack §0).
- ICE-DAM: the ROOT CAUSE is attic heat escape / air leakage, NOT gutters — NEVER write "clogged gutters cause ice dams". Do NOT cite a NJ-specific attic R-value number (it is flagged UNVERIFIED in the packs); frame insulation qualitatively as "to the code-minimum attic/ceiling insulation level" with NO number. Heat / de-icing cables MANAGE the symptom at the eave and do not fix the root cause — frame honestly, never as a cure.
- CUSTOM-DESIGN: this is an advisory design + specification service that can lead to a Newark Quality Roofing installation — do NOT claim vendor-neutral independence or "we don't sell materials" (NQR is a roofer that installs). No fabricated consultation fee, no fabricated turnaround time, no fabricated guarantee.
`;

const GATE_RULES = `
HARD GATE RULES (audit:semantics will fail the build otherwise):
- Answer-first: the FIRST sentence under each heading is a definitive factual answer ≤40 words, wrapped in **bold** (bold the ANSWER clause, not the keyword). directAnswer ≤40 words.
- NO modality words in declarative prose: will, should, need to, have to, must, might, may, would, could. (EXCEPTION: faqs[].question fields may use "Should you…/Do you need…" — questions are exempt. faqs[].answer fields are NOT exempt.)
- Every hard number is attributed in-text to a NAMED source from the fact packs ("per the NPS", "per NPS Preservation Brief 29", "per the IRC", "per the University of Minnesota Extension", "per InterNACHI", "per the National Slate Association", "per the IRS"). NEVER invent a number. If a fact is UNVERIFIED in the packs, state it qualitatively (no number) or omit.
- Counted plurals: introduce enumerated sets with their exact integer ("Newark Quality Roofing prevents ice dams with 3 measures: …").
- NO outbound links / URLs in prose. NO pronoun co-reference to entities (repeat "the slate", "the ice dam", "Newark Quality Roofing" — avoid it/they/this/that/there). NO hype words (best/leading/trusted/premier/top-rated/unbeatable/amazing/seamless-as-praise).
- approachSubheadings.length === approachContent.length (2 or 3 each).
- One macro topic per page; repeat the primary n-gram in the opening answer and the closing section.
`;

const SNIPPET_SPEC = `
OUTPUT — write TWO files:
(A) ${OUT}/<serviceId>.snippet.ts — a SINGLE JavaScript/TypeScript object literal followed by a trailing comma, drop-in for an array. It MUST start with a line comment "// ─── N. <Name> ───" then "{" and end with "},". It is concatenated between "export const designConsultationContent: ServiceContent[] = [" and "];" so it must parse as one array element. Use single quotes; escape apostrophes; use en-dashes for ranges. Include ALL required schema fields: serviceId, directAnswer, overview (2-5), optional subServices, signsHeading, signs (4-10), approachHeading, approachContent (2-5), approachSubheadings (=== approachContent length), residential{heading,content(2-5),ctaLabel}, commercial{heading,content(2-5),ctaLabel}, processSteps (4-8 {title,description}), faqs (4-10 {question,answer}), credentialsHighlight (the exact 4-item array), pricing{range,factors[]}, whyChooseUs{heading,reasons[]}. Match the gold exemplar's field set.
(B) ${OUT}/<serviceId>.md — a short draft doc: a rendered-heading→field map, the named sources used + the exact figure each is attributed to, and a self-audit checklist confirming: answer-first bolded openers, zero modality in declaratives, every number named-sourced, approachSubheadings===approachContent length, no de-fab literals, no outbound links, credentialsHighlight exact.
SELF-AUDIT before finishing: re-read your snippet and grep your own prose for will/should/need to/have to/must/might/may/would/could OUTSIDE faqs[].question — remove every one. Confirm every digit has a named source present in the fact packs.
Return a JSON summary (do not paste the whole snippet back).
`;

// SERVICES — ids/names/flags are final. The `facts` hint points each author at
// the right packs/sections and the macro angle for the page.
const SERVICES = [
  {
    id: 'custom-roof-design-consultation', name: 'Custom Roof Design and Consultation',
    isResidential: true, isCommercial: true,
    facts: `Ground PRIMARILY in facts-process-standards.md (the consultation/assessment workflow, NRCA inspection cadence, the two distinct warranties workmanship vs material, wind-resistance ASCE 7 framing) + facts-materials-economics.md (material lifespans for the SELECTION decision: asphalt ~20–30 yr, metal 40–70 yr, natural slate 60–150 yr, wood/cedar ~25 yr, clay/concrete tile 50+ yr, copper 70+ yr — all per the InterNACHI life-expectancy chart; §7 NJ regional pricing) + facts-nj-regulatory-climate.md (NJ UCC permit thresholds; detached one- and two-family reroof = ordinary maintenance under N.J.A.C. 5:23-2.7; commercial >25% in 12 months needs a permit). MACRO ANGLE = the ADVISORY design + material-evaluation + written-specification service for new builds, additions, complex geometry, and material-selection decisions — it can lead to a Newark Quality Roofing installation (do NOT claim vendor-neutral independence; do NOT claim "we don't sell materials"). Counted enumerations where grounded (e.g. material families compared; deliverables of the consultation = assessment + material evaluation + a written specification). Attribute every lifespan to InterNACHI; attribute wind-load design to ASCE 7; attribute permit thresholds to the NJ Uniform Construction Code / N.J.A.C. 5:23-2.7. NO fabricated consultation fee, turnaround, or guarantee — pricing.range = free written estimate / consultation framing. isResidential=true, isCommercial=true → write a substantive residential block (Essex County custom homes, additions, dormers, character homes in Montclair/Glen Ridge/South Orange) AND a substantive commercial block (specification development, fire/wind/energy-code compliance via the NJ UCC + ASCE 7, design-build spec packages).`,
  },
  {
    id: 'historic-roof-restoration', name: 'Historic Roof Restoration',
    isResidential: true, isCommercial: true,
    facts: `Ground PRIMARILY in the NEW facts-historic-restoration.md (read its §0 GLOBAL CORRECTIONS FIRST) + facts-materials-economics.md §2 (slate 60–150 yr / National Slate Association 100+), §5 (wood/cedar ~25 yr), §6 (clay & concrete tile 50+), §0 master table (copper 70+ yr) — all per InterNACHI. MACRO ANGLE = period-accurate restoration governed by the in-kind/matching preservation principle + the local historic-district approval process. Key grounded facts (attribute by name): the Secretary of the Interior's Standards for Rehabilitation direct that deteriorated historic roofing be REPAIRED rather than replaced, and where replacement is necessary the new material MATCH the old in design, color, texture, and material where feasible (per the NPS); retain the roof shape and character-defining features — dormers, cresting, finials, snow guards (per NPS Preservation Brief 4 "Roofing for Historic Buildings"); historic slate is repaired with copper or stainless fasteners and slate hooks and is never painted (per NPS Preservation Brief 29 / the National Slate Association); historic clay tile is matched by profile and glaze (per NPS Preservation Brief 30); historic metal roofing is commonly standing-seam or flat-seam terne and copper (per the Copper Development Association). REGULATORY: a Certificate of Appropriateness from the municipal Historic Preservation Commission is typically required before exterior roofing work on a designated landmark or a contributing property in a LOCAL historic district, under the NJ Municipal Land Use Law (attribute to the municipal HPC / N.J.S.A. 40:55D as the pack states). CRITICAL CAUTION (pack §0): a National Register or NJ Register listing alone does NOT bar a private owner using private funds from reroofing — the binding gate is the LOCAL ordinance + COA; state this precisely, do not over-claim a restriction. TAX: the federal 20% Historic Rehabilitation Tax Credit (IRC §47) applies to certified rehabilitation of INCOME-PRODUCING certified historic structures only (per the NPS/IRS); name the NJ Historic Property Reinvestment Program (administered by the NJEDA) QUALITATIVELY — treat any percentage/cap as time-sensitive per the pack. Frame historic tax credits as relevant to INCOME-PRODUCING / commercial / multi-family historic buildings, NOT a homeowner's house; the pending NJ homeowner credit (S3545) is NOT law (pending in committee) — do NOT present it as available to homeowners (pack §0 rules 5–8). NQR is NOT a preservation architect, the SHPO, or a tax advisor and claims NO "certified historic restoration" credential. Essex local angle ONLY as the pack confirms (e.g. Glen Ridge / Montclair / Newark historic districts). pricing.range = free written estimate framing (or an attributed-aggregator slate/copper restoration range only if facts-materials-economics states one, e.g. slate restoration $2,500–$10,000+ per HomeGuide). isResidential=true, isCommercial=true → residential block (Essex County Victorians, colonials, slate/tile/cedar homes) AND commercial/institutional block (historic churches, civic and landmark buildings, contributing commercial structures in local districts).`,
  },
  {
    id: 'roof-ice-dam-prevention', name: 'Roof Ice Dam Prevention',
    isResidential: true, isCommercial: false,
    facts: `Ground PRIMARILY in facts-causes-signs.md §2.4 (ice-dam mechanism) + §2.6 (eave ice barrier) and facts-components-specialty.md §0.7 + the ventilation/ice-barrier tables. MACRO ANGLE = preventing ice dams by correcting the ROOT CAUSE (attic heat escape / air leakage) with air-sealing + insulation + balanced ventilation, plus the code eave ice-barrier membrane — NOT gutter cleaning. Key grounded facts (attribute by name): an ice dam forms from 3 conditions — snow on the roof, an upper roof surface above 32°F that melts the snowpack, and an eave below 32°F that refreezes the meltwater into a dam at the edge — and the trapped water backs up under the shingles (per the University of Minnesota Extension); the ROOT CAUSE is attic heat escape driven by air leakage, NOT gutters (BANNED phrasing: "clogged gutters cause ice dams" — building-science consensus). Prevention levers (counted, e.g. "3 measures"): air-seal attic bypasses, add attic/ceiling insulation to the code-minimum level (state qualitatively — do NOT cite a NJ R-value number, flagged UNVERIFIED), and balance soffit-intake-to-ridge-exhaust ventilation (attic ventilation 1/150 net free area per IRC R806.2). The eave ICE BARRIER: per the IRC (R905.1.2) an ice barrier is required at eaves with an ice-dam history, extending from the eave to at least 24 inches inside the exterior wall line (and at least 36 inches along the slope on roofs 8:12 and steeper), as two cemented layers of underlayment or one self-adhering polymer-modified bitumen membrane; valley protection uses 36-inch self-adhered underlayment (ASTM D1970) per GAF. Observable WARNING SIGNS for signs[] (per the University of Minnesota Extension / trade guidance): large icicles at the eaves, thick ice ridges at the roof edge, uneven snow-melt with bare patches where attic heat escapes, and interior ceiling stains near exterior walls and the top floor. Heat / de-icing cables manage meltwater at the eave but do not fix the root cause — frame honestly, never as a cure. NO fabricated cost — pricing.range = free written estimate framing. isResidential=true (PRIMARY — steep-slope homes), isCommercial=false → write a concise HONEST commercial block: steep-slope commercial/institutional buildings (older mixed-use, churches) form eave ice dams the same way, while low-slope commercial roofs face freeze-thaw at internal drains and parapets — without over-claiming a commercial ice-dam specialty.`,
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
    `You are an expert SEO roofing copywriter producing answer-first semantic content for Newark Quality Roofing.\n\nWRITE the content object for service "${s.name}" (serviceId: ${s.id}), entry #${i + 1} of 3 in the design-consultation category.\n\n${GROUNDING}\n${RENDERED_HEADINGS(s.name)}\n${NQR_FACTS}\n${GATE_RULES}\n\nFACT GROUNDING FOR THIS SERVICE: ${s.facts}\n\nThis service isResidential=${s.isResidential}, isCommercial=${s.isCommercial}. The schema REQUIRES BOTH a residential{} block AND a commercial{} block regardless of these flags.\n${s.isResidential ? 'Write a substantive residential block.' : 'isResidential is false, but still write a concise, HONEST residential block without over-claiming a residential specialty.'}\n${s.isCommercial ? 'Write a substantive commercial block.' : 'isCommercial is false (primarily residential), but still write a concise, HONEST commercial block without over-claiming a commercial specialty.'}\n\n${SNIPPET_SPEC}`,
    { label: `author:${s.id}`, phase: 'Author', schema: SUMMARY_SCHEMA }
  )
));

return { authored: results.filter(Boolean) };
