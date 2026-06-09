export const meta = {
  name: 'cmp4-author',
  description: 'Answer-first rewrite of 8 CMP-4 decision-helper comparisons (1 expert author agent per comparison → snippet.ts + .md)',
  phases: [
    { title: 'Author', detail: '8 parallel author agents, one per comparison' },
  ],
}

const REPO = '/Users/akungapaul/Projects/Newarkqualityroofing'
const OUT = `${REPO}/.planning/content-system/comparisons-batch4`
const SRC = `${REPO}/src/data/comparison-content/decision-helper.ts`
const GOLD = `${REPO}/src/data/comparison-content/material-vs-material.ts`
const RULESET = `${REPO}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md`
const R = `${REPO}/.planning/content-system/research`

const SHAPE = `
## THE ANSWER-FIRST SHAPE (ComparisonContent object — match the gold exemplar STRUCTURE, adapt to RANKING semantics)

Read the gold exemplar FIRST for STRUCTURE/density/sourcing/bold/question-heading style: ${GOLD} lines 6–98 (comparisonId 'asphalt-shingles-vs-metal-roofing') is a fully-rewritten, signed-off object. Mirror its answer-first mechanics EXACTLY. Then read your own comparison's CURRENT object in ${SRC} (find your comparisonId) — it holds the factual seed (the ranked options, the rows, the facets), but its prose is NOT answer-first and carries heavy debt you must clear.

⚠️ CRITICAL — THESE ARE DECISION-HELPER / RANKING comparisons, NOT A-vs-B. They RANK multiple options (materials/systems/warranty-types) for a scenario (NJ weather, commercial, flat roofs, historic homes, cost-per-year, energy, Colonials, warranties). Adapt the shape:
- directAnswer + leads name the TOP-RANKED option(s) in **bold** + the single decisive SOURCED criterion — NOT "A beats B". e.g. "**Standing seam metal** and **architectural asphalt shingles** rank highest for NJ weather — metal's 40–80-year life and asphalt's lower install cost lead the field, per the InterNACHI chart and Josten Roofing."
- comparisonRows = the ranked OPTIONS: feature = the option/material name, itemA = its key attribute (sourced), itemB = its best-for scenario. winner is OPTIONAL — usually OMIT it for rankings (these rows aren't A-vs-B), or use 'depends'. NO '**' in any cell.
- verdict.winner = a RANKING statement (which option leads + the runner-up / best alternate scenario).
- bold the named OPTIONS (the materials/systems/warranty-types), and re-bold the same option in each developing body paragraph (R3 strict, in lead order).

Your snippet is ONE JavaScript object literal of type ComparisonContent with these fields:
- comparisonId: string (keep EXACTLY as given — do not change it)
- directAnswer: string — the hero answer. ≤40 words. Names the top-ranked option(s) in **bold** + the decisive sourced figure/criterion.
- introHeading: string — QUESTION form, no '**' (raw-rendered <h2>). e.g. "What Is the Best Roofing Material for New Jersey Weather?".
- introParagraphs: string[1..3] — each opens with a **bold** option/topic; para 1 frames the decision + names the leading options by function (R38); para 2 names the contenders + their differentiators, named-sourced.
- comparisonRows: {feature,itemA,itemB,winner?}[4..15] — NO '**'. feature = option name; itemA = sourced key attribute; itemB = best-for scenario. winner usually OMITTED (optional).
- verdict: {winner, reasoning, alternateScenario} — winner ≤40w ranking statement; reasoning + alternateScenario each open with a **bold** option + the ranking rationale + named source.
- detailedAnalysis: {heading, content[1..4]}[2..5] — heading = QUESTION form, no '**'. content[0] = the ≤40-word answer-first lead bolding the option(s) that lead THIS facet. EACH subsequent paragraph OPENS by re-bolding ONE option from the lead (R3 strict, in lead order) and develops a DISTINCT facet (cost / weather / failure-mode / code / energy / resale). Every paragraph carries a figure or named authority (R7).
- njSpecific: {heading (question, no '**'), content[1..3]} — NJ code/market/climate. Cite N.J.A.C. 5:23-2.7 / IECC Zone 4A / NOAA snowfall / ASCE 7-16 / N.J.S.A. where relevant, exactly as the packs state.
- residentialSection / commercialSection: {heading (question, no '**'), content[1..3]} — each lead ≤40w, bolds the option, answers "Which suits a [house]/[commercial building]?".
- faqs: {question, answer}[4..6] — question = no '**'; answer OPENS with a **bold** definitive sentence ≤40 words, then 1 expansion sentence, named-sourced.
- metaDescription: string ≤160 chars, NO '**', no de-fab literals, factual.

## BOLD-SAFE FIELD MAP (CRITICAL — a '**' in the wrong field LEAKS as literal asterisks AND fails the build gate)
- '**bold**' REQUIRED in: directAnswer, introParagraphs[], verdict.{winner,reasoning,alternateScenario}, detailedAnalysis[].content[], njSpecific.content[], residentialSection.content[], commercialSection.content[], faqs[].answer
- '**' BANNED in (raw-rendered): introHeading, EVERY .heading, ALL comparisonRows cells, faqs[].question, metaDescription
`

const RULES = `
## NON-NEGOTIABLE RULES (gate-enforced unless marked advisory) — read ${RULESET} for the full text
- R1 every heading is a QUESTION ending in '?'. R4 heading↔answer share opening structure ("What is best for X?"→"X is best served by …").
- R2 first sentence under each heading = definitive factual answer ≤40 words. R3 bold the ANSWER span (the named options/entities), not keywords; strict body↔lead bold (each body paragraph re-bolds a lead option, identical wording, in lead order).
- R5 state established facts, present tense — never predictions/opinions. R37 answers are subject–verb–object with a NAMED subject (no agentless passive, no "there is/it is" openers).
- R6 NO MODALITY in body prose (GATE): no will / shall / should / need to / needs to / have to / has to / must / ought to / may / might. FAQ question: fields are exempt. Rewrite to indicative present.
- R7 every info point carries an exact figure/percentage. R10 NO fabricated/unverified numbers (GATE) — use ONLY figures present in the fact packs; otherwise state qualitatively or omit. NEVER invent a $/year-savings, $-premium, or self-derived cost-per-year as a measured claim.
- R9 cite authorities BY NAME in-text, never hyperlink (GATE: zero outbound links). R29 name the precise entity (EPDM, modified bitumen, TPO, standing seam), not a generic stand-in.
- R10 de-fab literals BANNED (GATE, incl. metaDescription): "24/7", "same-day", "GAF Certified", "Master Elite", "0% financing", "top-rated", "N+ years/projects" trust-counts, fake NAP, "we warranty/we register/we install"-as-stat, "thousands of installations", "15+ years of experience", "decades of local performance data".
- R14 NO hype/sentiment (advisory but ENFORCE): "best", "premier", "leading", "top recommendation", "unbeatable", "premium" as praise. KEEP only denotative/price nouns ("resale premium") and FORMAL grade names. ⚠️ These pages are RANKINGS — naming the leading option on a SOURCED criterion is allowed ("standing seam metal leads on lifespan, per InterNACHI"), but NEVER an unsourced superlative ("the best roof", "our top recommendation", "the best warranty program") and NEVER rank a BRAND ("GAF Golden Pledge is the best warranty").
- R21/R35/R36 each section body DEVELOPS its lead in order via the head entity's lexical relations; state each hard fact ONCE, in the section whose question owns it; no cross-section restatement.
- R8 qualify plural nouns with a count that matches the list. R38 define each introduced entity by function + ≥1 differentiator at first mention.

## SOURCING DISCIPLINE
- Ground EVERY hard number in a named source from your assigned fact packs. Use name-only attribution ("per the InterNACHI chart", "per Josten Roofing", "per the EPA", "per N.J.A.C. 5:23-2.7"). NO outbound links.
- If a figure in the CURRENT object is NOT in any fact pack, do NOT carry it as a hard number — restate qualitatively or drop it, and list it under a "## GAPS / DROPPED" heading at the BOTTOM of your .md draft.
- Cost rows use the SAME sourced ranges the rest of the site uses (NJ asphalt $5.50–$11.00/sq ft per Josten Roofing; NJ repair $400–$1,000 / replacement $10,000–$25,000; per-material ranges only where a pack states them). Surface attribution in adjacent prose, not the raw cell.
- COST-PER-YEAR (cheapest-vs-most-durable only): frame any per-year number as an ILLUSTRATIVE division of a SOURCED install range by a SOURCED lifespan ("a $X roof over its Y-year life works out to about $Z/year"), explicitly a calculation method — NEVER an NQR-measured or guaranteed figure, and NEVER invent the inputs.
`

const ITEMS = [
  {
    id: 'best-roofing-material-nj-weather',
    packs: ['facts-materials-economics.md §0/§7 (NJ asphalt $5.50–$11.00/sqft Josten; per-material install/lifespan ranges; replacement $10,000–$25,000)', 'facts-nj-regulatory-climate.md §3.1 (Newark snowfall ~31.5" NOAA 1991–2020 normals, ~78% Dec–Feb; Climate Zone 4A; ~110–115 mph design wind ASCE 7-16; N.J.A.C. 5:23-2.7 re-roof = ordinary maintenance; ice-and-water barrier R905.1.2)', 'facts-energy-solar.md §0.3–0.4 (reflectance/thermal-emittance not R-value; EPA 11–27% PEAK cooling demand; CRRC/DOE; NJ Zone 4A–5 winter caveat — for the heat/UV ranking)', 'facts-causes-signs.md (freeze-thaw + weathering failure modes per material)', 'facts-components-specialty.md (TPO/EPDM flat-roof behavior for the flat-roof entries)'],
    debt: `DROP NQR self-stats: "thousands of installations across Newark", "decades of local performance data", "our emergency calls are dominated by 3-tab shingle blow-offs and improperly fastened roofing" → qualitative/free-inspection framing. RECONCILE numbers to packs or de-quantify: metal "140+ mph" wind → ~110–115 mph design wind (ASCE 7-16) that metal/architectural EXCEED (qualitative); "80+ freeze-thaw cycles per winter" → ~35–45 freeze-thaw cycles as "regional climate estimates" (per CMP-3 lesson NOAA backs ONLY the 31.5" snowfall, NOT the freeze-thaw count); "28 inches of snow" → ~31.5" (NOAA 1991–2020); "$425–$600 per year" / "$8,500–$18,000" / "$15,000–$35,000 metal" → reconcile to Josten $/sqft + NJ replacement $10,000–$25,000, surface attribution, OR de-quantify; "GAF Timberline HDZ (130 mph)" / brand colors → neutral "architectural asphalt shingles"; "15–25%" cooling and "white surface cuts cooling costs 15–25%" → EPA 11–27% PEAK cooling demand + reflectance/emittance (CRRC), no annual-bill %. Verify "50 inches of rainfall" against the climate pack or de-quantify. NJ Clean Energy rebate claim → drop unless pack-sourced. Question-form ALL headings.`,
  },
  {
    id: 'best-commercial-roofing-material',
    packs: ['facts-components-specialty.md (commercial membrane behavior, ponding, seam technology)', 'facts-replacement-reroofing-insurance.md (commercial systems, recover limits)', 'facts-energy-solar.md §0.1–0.4 (cool-roof CRRC not ENERGY STAR; EPA 11–27% peak cooling; coatings/reflective add NO R-value; IECC requirements as stated in the pack; 179D only if pack-supported)', 'facts-nj-regulatory-climate.md (NJ commercial permit/UCC; 25% rule; licensed contractor)', 'facts-materials-economics.md §7 (membrane $/sqft where the pack states it)'],
    debt: `DROP fabricated lifecycle math: "$3,000/year in energy savings ($90,000 total)", "net 30-year cost favors TPO by $60,000+", and the invented building totals "$200,000 / $170,000 / $300,000" → reframe qualitatively (energy savings compound on air-conditioned buildings; metal's longer life lowers cost-per-year on long-hold properties) with NO invented $ totals. "NJ Clean Energy Program rebates $0.10–$0.30 per sq ft" → drop unless pack-sourced. "cuts cooling costs 15–25%" → EPA 11–27% PEAK cooling demand. Reconcile membrane $/sqft ($7–$12 TPO, $6–$11 EPDM, etc.) to a pack OR de-quantify. Section 179D / prevailing wage / FM-UL-listing → keep only if pack-supported, qualitative. DROP "we coordinate both systems"/"We provide comparative bids for your top 2–3 options" self-promo → qualitative/free-estimate. R-30/R-49 IECC Zone 4A only as the pack states. Question-form ALL headings.`,
  },
  {
    id: 'best-roofing-for-flat-roofs',
    packs: ['facts-components-specialty.md (flat-roof membrane behavior, ponding tolerance, heat-welded vs adhesive seams, tapered insulation)', 'facts-replacement-reroofing-insurance.md (flat systems, recover)', 'facts-energy-solar.md §0.3–0.4 (TPO/PVC reflectance; EPA 11–27% peak cooling; no R-value)', 'facts-nj-regulatory-climate.md (positive-drainage code, min slope, R-30; UL-listed assemblies)', 'facts-materials-economics.md §7 (flat-roof $/sqft where stated)'],
    debt: `DROP "15–25%" cooling → EPA 11–27% PEAK cooling demand + reflectance/emittance (CRRC). DROP self-promo "we warranty our flat roof work against leaks", "We install tapered insulation systems on every flat roof", "Our team handles permit applications and inspection coordination" → qualitative. Reconcile membrane $/sqft + lifespans to packs OR de-quantify (e.g. drop "$4–$8 spray foam" / "$7–$12 TPO" if no pack line). Verify "asphalt shingles require minimum 2:12 pitch" (IRC R905.2.2) against a pack. "$500–$2,000 cost differences" / "under 1,000 sq ft" residential figures → qualify. KEEP ponding-tolerance + seam-reliability rankings (NRCA/manufacturer behavior, named). Scrub modality ("should not have chronic ponding" → indicative). Question-form ALL headings.`,
  },
  {
    id: 'best-roofing-for-historic-homes-nj',
    packs: ['facts-historic-restoration.md §0 + §8–9 (GOVERNS — Secretary of the Interior\'s Standards [Standard 6 in-kind matching]; the binding private-owner gate is the local municipal Certificate of Appropriateness under N.J.S.A. 40:55D, NOT a National/NJ Register listing alone; federal §47 HTC is INCOME-PRODUCING-ONLY [a homeowner reroof does NOT qualify]; NJ HPRP income-producing-only; the NJ homeowner credit S3545 is NOT law; §25D/§25C repealed; Preservation Briefs 4/19/29/30; red cedar must NOT use copper nails per Brief 19)', 'facts-materials-economics.md (slate/cedar/synthetic-slate/clay-tile install ranges where stated)', 'facts-nj-regulatory-climate.md (Essex County HPC context)'],
    debt: `CRITICAL — KILL the FALSE tax-credit claims: "NJ offers a 25% credit for owner-occupied residential properties" (that is S3545, NOT law) and "Federal historic tax credits (20%) apply" as if a homeowner reroof qualifies (§47 HTC is INCOME-PRODUCING-ONLY). Per facts-historic-restoration §0: drop the "20–25% tax credit" framing for owner-occupied homes entirely; if credits are mentioned, state federal §47 + NJ HPRP are income-producing-ONLY and the homeowner credit is not enacted. FIX the governing gate: the binding control on a private-funded reroof is the local municipal Certificate of Appropriateness (N.J.S.A. 40:55D), NOT a National/NJ Register listing (listing alone does NOT restrict a private reroof — NPS/NJ HPO). Verify "Glen Ridge's entire borough is a National Register Historic District" + Montclair district claims against the cities facts (Glen Ridge = binding LOCAL COA Ch.15.32; Montclair = 4 LOCAL districts, NOT township-wide) — reframe as local-ordinance COA, not "because NR-listed". DROP "We provide the documentation ... required for tax credit applications" self-promo → qualitative. Reconcile slate $20,000–$45,000 / cedar / synthetic ranges to materials-economics where stated. KEEP slate/cedar/synthetic-slate guidance + Secretary's Standards in-kind matching + the red-cedar-no-copper-nails detail (Brief 19). Scrub modality. Question-form ALL headings.`,
  },
  {
    id: 'cheapest-vs-most-durable-roofing',
    packs: ['facts-materials-economics.md §0/§7 (per-material NJ install ranges; asphalt $5.50–$11.00/sqft Josten; NJ replacement $10,000–$25,000; maintenance figures where stated)', 'facts-cost-stats.md §4/§7 (material lifespans; resale recoup ~61% Zonda / 60–68% Zillow via Opendoor; roof age at replacement)', 'facts-energy-solar.md §0.3–0.4 (reflective savings = peak-cooling only, NO fabricated annual $)', 'facts-nj-regulatory-climate.md (NJ labor/market context only if pack-stated)'],
    debt: `DROP "15+ years of local experience" self-stat. DROP fabricated energy $: "$500–$1,500 annually in cooling costs", "$25,000–$75,000 in energy savings over 50 years" → reframe via EPA peak-cooling qualitatively, NO annual $ totals. DROP self-promo "We provide fixed-price quotes that protect you", "We provide lifecycle cost comparisons" → free-estimate/qualitative. VERIFY or QUALIFY "NJ labor costs run 15–25% above national", "Metal and asphalt prices have increased 20–40% since 2020", cedar maintenance "$500–$1,500 per cycle every 3–5 years" → keep only if a pack states it, else qualitative. RECONCILE all install ranges ($8,500–$13,000 3-tab, $10,000–$18,000 architectural, $15,000–$35,000 metal, $20,000–$45,000 slate, $6,000–$16,000 EPDM, $14,000–$30,000 cedar, $7,000–$18,000 TPO) to materials-economics/cost-stats lines OR to the NJ replacement $10,000–$25,000 site-standard with per-material attribution where sourced. FRAME cost-per-year as an ILLUSTRATIVE division of a sourced install range by a sourced lifespan (a calculation method) — NEVER an NQR-measured/guaranteed figure, NEVER invent inputs. Resale recoup → ~61% Zonda / 60–68% Zillow (cost-stats §7), not "60–70%" unsourced. Scrub modality. Question-form ALL headings.`,
  },
  {
    id: 'most-energy-efficient-roofing-materials',
    packs: ['facts-energy-solar.md §0 (GOVERNS — federal §25D 30% solar ITC REPEALED for systems placed in service after 2025-12-31 per P.L. 119-21/OBBB [no current 30% credit — frame historically + refer to a tax professional]; coatings/reflective add NO R-value; EPA 11–27% reduction in PEAK cooling demand in air-conditioned buildings; NJ Zone 4A–5 winter-heating caveat; CRRC-1 not ENERGY STAR; spray foam R-6.5/inch; SREC-II/SuSI qualitative; Section 179D only as stated; reflectance/emittance values where the pack gives them)', 'facts-nj-regulatory-climate.md (IECC Zone 4A: R-49 attic / R-30 commercial as the pack states)', 'facts-components-specialty.md (insulation, ventilation)'],
    debt: `CRITICAL per facts-energy-solar §0: DROP the "30% federal ITC" as CURRENT ("Solar roofing qualifies for 30% federal ITC and NJ SREC-II credits") → frame the §25D 30% credit HISTORICALLY (repealed for systems placed in service after 2025-12-31, P.L. 119-21) + refer to a tax professional; SREC-II/SuSI qualitative (NJBPU). DROP fabricated annual savings "$200–$500 annually", "$1,500–$4,000 annually", "$500–$1,500 more ... save $200–$500" → EPA 11–27% PEAK cooling demand (air-conditioned) + NJ Zone 4A–5 winter-heating caveat; reflective/coatings add NO R-value (CRRC/DOE). RECONCILE reflectance claims "reflects 65–70%", "reflects 80%+", "reflects 80%+ of solar energy" to pack reflectance/emittance values OR de-quantify to "high solar reflectance and thermal emittance, per the CRRC". Verify spray foam "R-6.5/inch" against the pack. Named cool-roof products (GAF Timberline Cool Series, CertainTeed Solaris/Solaris) → keep as NEUTRAL examples of cool-roof asphalt OR genericize; drop "GAF Timberline HDZ" colors. "Section 179D" / "ITC includes solar roofing" → only as pack-stated, qualitative. Scrub modality. Question-form ALL headings.`,
  },
  {
    id: 'best-roofing-for-essex-county-colonial-homes',
    packs: ['facts-historic-restoration.md (Secretary of the Interior\'s Standards; substyle period-material matching; copper detailing; the COA gate where a Colonial sits in a local historic district)', 'facts-materials-economics.md (architectural asphalt / slate / standing-seam metal / cedar / synthetic-slate install ranges where stated)', 'facts-nj-regulatory-climate.md (Essex County context)'],
    debt: `DROP "roofed thousands of Essex County Colonials" self-stat. DROP brand-color promo "GAF Timberline HDZ in Charcoal or Pewter Gray, CertainTeed Landmark in Weathered Wood or Georgetown Gray ... our most-requested colors" → neutral "architectural asphalt shingles in charcoal, weathered-wood, or slate-gray tones". DROP self-promo "We offer copper accent packages that elevate ...". VERIFY/QUALIFY "increases labor costs 15–30%" + "costs 15–30% more to roof than the same-sized home without dormers" → qualitative unless a pack states it. RECONCILE slate/metal/cedar $ ranges to materials-economics where stated. KEEP the substyle-matching guidance (Georgian/Federal/Colonial Revival/Dutch Colonial period materials) as qualitative architectural facts. R14: soften hype "look their best", "quintessentially Colonial", "communicate quality and permanence" → factual. Scrub modality. Question-form ALL headings.`,
  },
  {
    id: 'roof-warranty-comparison-guide',
    packs: ['GAP-decision-helpers.md (GOVERNS — warranty STRUCTURE/types + NJ disclosure law: pro-rated vs non-prorated mechanics; manufacturer-system vs contractor-workmanship; commercial NDL [no-dollar-limit]; transferability windows; common warranty-void causes incl. ventilation; NJ written-warranty-disclosure N.J.A.C. 13:45A-16.2 / Consumer Fraud Act; HIC registration N.J.S.A. 56:8-136)', 'facts-nj-regulatory-climate.md §2 (HIC registration; NJ Division of Consumer Affairs)', 'facts-process-standards.md (ventilation as a warranty condition)', 'facts-components-specialty.md (attic ventilation R806 — the most common warranty-void cause)'],
    debt: `GENERICIZE per the LOCKED decision — rewrite around warranty STRUCTURE, NOT a brand ranking. REMOVE the ranked brand table + labels: "GAF Golden Pledge = Best overall residential warranty program", "CertainTeed SureStart Plus = Best competing warranty", "Owens Corning Platinum = Best workmanship coverage period", and all specific "50-year material + 25-year workmanship, non-prorated 10 years" brand terms presented as ranked facts → reframe comparisonRows by warranty TYPE (manufacturer system warranty / contractor workmanship-only / commercial NDL / extended-registered / standard-limited / transferable), each row = what it covers + best-for. Name a manufacturer program ONLY as a neutral manufacturer-attributed example (mirror the gold exemplar's neutral GAF Golden Pledge mention — "terms set and registered by the manufacturer, not by Newark Quality Roofing"), NEVER ranked "best". verdict.winner = a STRUCTURAL statement (a non-prorated manufacturer system warranty installed by a credentialed contractor gives the strongest protection — no brand). DROP self-promo "We register every warranty on behalf of our customers", "Our free post-installation ventilation inspection", "Our commercial maintenance programs satisfy warranty requirements" → qualitative (registration + ventilation compliance protect warranty validity). "NJ roofing contractors have a high turnover rate" → qualitative/drop. KEEP the real education: pro-rated-vs-non-prorated mechanics, manufacturer-vs-contractor, NDL definition, transferability, what voids coverage (ventilation per manufacturer + IRC R806), NJ written-disclosure law (N.J.A.C. 13:45A-16.2) + HIC registration (N.J.S.A. 56:8-136) + NJ Division of Consumer Affairs recourse. R14: no "best warranty" superlatives. Scrub modality. Question-form ALL headings.`,
  },
]

phase('Author')
await parallel(ITEMS.map((it) => () => agent(
  `You are an expert roofing copywriter + fact-checker rewriting ONE decision-helper (RANKING) comparison page for Newark Quality Roofing (Essex County, NJ) to the answer-first Semantic Content Ruleset. Your output is a drop-in TypeScript object literal — it IS the deliverable, not a message.

COMPARISON: ${it.id}

${SHAPE}

${RULES}

## YOUR ASSIGNED FACT PACKS (read these in ${R}/ , except GAP-* which live in ${OUT}/)
${it.packs.map((p) => '- ' + p).join('\n')}

## DEBT YOU MUST CLEAR (specific to ${it.id})
${it.debt}

## STEPS
1. Read ${RULESET} (the rules), the gold exemplar (${GOLD} comparisonId 'asphalt-shingles-vs-metal-roofing' lines 6–98) for STRUCTURE, and your CURRENT object (${SRC}, comparisonId '${it.id}') for the factual seed.
2. Read your assigned fact packs. Note every figure you can source vs. cannot.
3. Rewrite the FULL object answer-first with RANKING semantics: question headings, ≤40-word bolded answer-first leads naming the top-ranked option(s), strict body↔lead bold re-bolding the same option, every figure named-sourced, modality scrubbed, debt cleared, bold-safe field map respected.
4. SELF-AUDIT before writing: (a) every .heading + introHeading + faqs[].question is a '?'-question with NO '**'; (b) directAnswer + every content[0] + every faqs[].answer-first-sentence ≤40 words; (c) no will/should/need to/must/may/might in body prose; (d) no de-fab literals, no NQR self-stats, no brand ranking, no unsourced superlatives anywhere; (e) every comparisonRows cell is plain text (no '**'); (f) every hard number traces to a named pack source; (g) metaDescription ≤160 chars, no '**', factual.

## OUTPUT (use the Write tool — do NOT print to your message)
- Write the object literal to ${OUT}/${it.id}.snippet.ts — a single '{ … },' object literal (trailing comma OK) starting with '{' and ending with '}' or '},'. NO imports, NO 'export', NO array brackets — just the object. Valid TS that drops into a ComparisonContent[] array.
- Write a human-readable draft + a "## GAPS / DROPPED" section (figures you removed and why) to ${OUT}/${it.id}.md
Return a 4–6 line summary: what you rewrote, the key sourced figures you used, and any figure you DROPPED for lack of a source.`,
  { label: `author:${it.id}`, phase: 'Author' },
)))

return { authored: ITEMS.map((i) => i.id) }
