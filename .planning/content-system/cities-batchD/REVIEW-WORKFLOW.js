export const meta = {
  name: 'cities-batchD-content-verify',
  description: 'Adversarial content review of the 5 assembled caldwells-roseland city entries: factual accuracy, named citations, NJ-code/per-city historic-COA accuracy, reservation + Passaic-floodplain geography, fabrication purge, answer-first + gate compliance, follow-through + R35-R38 micro-semantics + R3 strict bold; med/high findings go through a refute pass',
  phases: [
    { title: 'Review', detail: 'one reviewer per city across 8 dimensions' },
    { title: 'Refute', detail: 'adversarial refutation of every med/high finding' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const SOURCE = `${PROJECT}/src/data/city-content/caldwells-roseland.ts`;

const CITIES = ['caldwell', 'north-caldwell', 'essex-fells', 'fairfield', 'roseland'];

const GROUNDING = `
READ for ground truth before reviewing:
- ${SOURCE}  (the assembled file — find the object whose cityId matches your assignment)
- ${PROJECT}/.planning/content-system/cities-batchD/CITY-FACTS-caldwells-roseland.md  (the §0 global corrections + YOUR city's section — the AUTHORITY for demographics, construction office, historic LOCAL-vs-Register-vs-state-site designation, verified neighborhoods, geography/climate incl. reservation adjacency + the Passaic floodplain)
- ${PROJECT}/.planning/content-system/research/facts-nj-regulatory-climate.md  (§1.1 ordinary-maintenance no-permit N.J.A.C. 5:23-2.7; §1.2 25% rule; §1.4 recover N.J.A.C. 5:23-6.4; §2 HIC + $500k CGL N.J.S.A. 56:8-142; §3 NJ climate — snow ~31.5 in/yr, Pg ~25 psf, ~110-115 mph design wind, nor'easters, ~25-30 thunderstorms/yr — all Newark/EWR, shared by all 5 cities)
- ${PROJECT}/.planning/content-system/research/facts-historic-restoration.md  (§8 COA framework N.J.S.A. 40:55D-107; "Register listing alone does NOT restrict a private reroof" per the NPS; §1-§7 slate/copper/cedar restoration figures — Standard 6, Preservation Briefs 4/19/29/30, red-cedar-no-copper-nails, 20% slate threshold)
- ${PROJECT}/.planning/content-system/research/facts-materials-economics.md  (§0 lifespans; §2 slate; §5 cedar; §7 NJ pricing + $10,000-$25,000 replacement; §8 repair-vs-replace)
- ${PROJECT}/.planning/content-system/research/facts-cost-stats.md  (§5 repair-vs-replace; §6 replacement benchmark; §7 ROI; §8 Triple-I stats)
- ${PROJECT}/.planning/content-system/research/facts-causes-signs.md  (§2.1 flashing 90-95% per NRCA; §2.2 wind/ASTM D3161; §2.5 aging; §3/§4 signs)
- ${PROJECT}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md  (rules + banned list + R35-R38 micro-semantics + R3 strict body-lead bold)
`;

const DIMENSIONS = `
Review these 8 dimensions for the assigned city entry:
1. factualAccuracy — every hard number/spec is present in the fact packs / CITY-FACTS and attributed to the SAME named source. Flag any figure invented, mis-attributed, or contradicting the sources: a population/land-area not matching the U.S. Census table in CITY-FACTS §6/§[city] (Caldwell 9,027 / 1.17 sq mi; North Caldwell 6,694 / 3.07 sq mi; Essex Fells 2,244 / 1.41 sq mi; Fairfield 7,872 / ~10.13 sq mi; Roseland 6,299 / 3.62 sq mi); a BANNED city-specific snow/wind/temperature/elevation number (only the shared EWR baseline is allowed; Pg ~25 psf + ~110-115 mph design wind stay HEDGED; the ONLY allowed point elevation is the ~691 ft Essex County high point at the Hilltop in North Caldwell attributed "per the North Caldwell description/Wikipedia"; flag "60 mph", "winds 15-20% stronger", "2-4 inches greater per storm", "30 degrees", "15-25% savings", "50-60 degrees" as fabricated); a material lifespan other than InterNACHI's; an NJ cost outside the packs' ranges (flag invented city-tier figures like "$35,000-$150,000+", "$50,000 to $200,000", "$8,500–$25,000", "$350–$1,500"); a neighborhood CITY-FACTS does not confirm (flag "Personette Street" for Caldwell; a Livingston border for Essex Fells; a Fairfield-Roseland shared border; a named "Fairfield Business Campus"); a RESERVATION/FLOODPLAIN-GEOGRAPHY error (per CITY-FACTS §0 Rules 3-4: Hilltop Reservation = North Caldwell ONLY among these 5 — flag it on Caldwell/Essex Fells/Fairfield/Roseland; Caldwell/Essex Fells/Fairfield/Roseland border NO large reservation; Roseland contains county PARKS [Becker Park / West Essex Park], NOT reservations; the Passaic floodplain is Fairfield's DEFINING stressor + Roseland's WESTERN edge ONLY — flag floodplain framing on Caldwell/North Caldwell/Essex Fells [all upland]; flag North Caldwell bordering the Passaic).
2. namedCitations — authorities are named in-text for every figure (the U.S. Census Bureau, NOAA, the NJ Uniform Construction Code / N.J.A.C. 5:23-2.7 / 5:23-6.4, the NJ DCA, InterNACHI, the NRCA, the IRC, ASTM, the National Park Service / Preservation Briefs / Secretary of the Interior's Standards, Essex County Parks, FEMA, the NOAA-NWS, Josten Roofing / HomeAdvisor / Modernize, the Insurance Information Institute / Triple-I, the township/borough ordinance/HPC named in CITY-FACTS). Flag a hard number with no named source, or a code/standard/ordinance cited with the wrong number/requirement.
3. regulatoryAccuracy — NJ code + historic claims are correct and correctly scoped:
   - PERMITS: a detached 1- or 2-family dwelling reroof of the roof covering is "ordinary maintenance" — NO permit (N.J.A.C. 5:23-2.7). Repairing >25% of a commercial/multi-family/attached roof in 12 months needs a permit (highly relevant to Fairfield's Route 46/I-80 stock + Roseland's office corridor). Flag any inverted/mis-scoped permit claim. Recover/overlay limits = N.J.A.C. 5:23-6.4.
   - HISTORIC (per CITY-FACTS §0 Rule 1 — EACH CITY DIFFERS SHARPLY; do NOT flatten): **Caldwell** = local COA EXISTS (Chapter 130) but ONLY for the borough's TWO individually designated LANDMARKS (one = the Caldwell Public Library, a LOCAL-only landmark on Bloomfield Avenue; the SECOND is UNNAMED) — NO designated district; FLAG a township-wide/"historic district"/"downtown overlay" COA claim, FLAG naming a second landmark, FLAG calling the Library an NRHP property, and FLAG treating the Grover Cleveland Birthplace (state-owned) as a homeowner COA gate. **North Caldwell** = advisory HPC (Chapter 107 Art. XIII), NO COA, NO designated district/landmark, NO Register property — FLAG any North Caldwell COA/designation claim or citing proposed Ord. O-8-2026 as in force. **Essex Fells** = NO HPC, NO ordinance, NO COA, NO Register listing — FLAG any Essex Fells COA/HPC/"historic district" claim (incl. confusing the code's Ch. 142 "HISTORIC STRUCTURE" FEMA term with preservation). **Fairfield** = advisory/educational HPC, NO binding COA, NO designated district — FLAG any Fairfield COA claim; the Van Ness House (NRHP + township-owned) + Fairfield Dutch Reformed Church (NRHP + church-owned) are heritage color, NOT homeowner gates — FLAG treating them as gates, and FLAG attributing the Israel Crane House to Fairfield (it is in Montclair). **Roseland** = a real COA ordinance EXISTS (Chapter 30 Art. IX; §30-909) but NO property is confirmed locally DESIGNATED and §30-901.1 requires owner consent — so NO homeowner is subject to a COA; FLAG an unconditional "you need a COA in Roseland" claim, and FLAG treating the Williams-Harrison House (Register + museum) as a homeowner gate. Register/National listing ALONE never restricts a private reroof (per the NPS) — flag any claim that it does. A state-owned site / township-or-church-owned Register site / society museum is NOT a municipal COA — flag any conflation.
4. fabrication — THE CRITICAL CHECK for cities. Flag every fabricated NQR specific: a specific COMPLETED project (street address, material count, project duration/timeline, "Restored the original steep-pitch roof on an 1890s Victorian", "Replaced 200+ damaged slates", "30,000 sq ft 60-mil TPO membrane", "completed in 5 weeks/single weekend/8-week timeline", "Removed 3 shingle layers totaling 9,000 lbs"); a "our crews working in [City] routinely…" or "our Caldwell homeowners consistently note" or "Roseland's corporate property managers trust us" anecdote framed as history; a fabricated client/portfolio/partnership/property-manager/community-association relationship or named building owner; a sponsorship/community-roots/team-residence/referral claim; a "[City] Projects Completed"/"hundreds of projects" count; a certification-gated warranty/tier claim ("GAF Certified", "Master Elite", "Golden Pledge", "Platinum Protection", "NDL/No Dollar Limit", "VELUX certified") or a fabricated warranty TERM stated as an NQR offer ("25-year workmanship warranty", "50-year transferable warranty", "non-prorated material coverage" as an NQR promise); a fabricated savings/performance figure ("50-60 degrees", "15-25% savings", "5 to 8 years", "payback periods of three to five years", "Class 4 ... insurance premium discounts"); a financing claim. projectSpotlights MUST be representative project TYPES (capability), never specific completed jobs. (Capability claims like "Newark Quality Roofing installs EPDM membranes on flat decks" are FINE; a MATERIAL's manufacturer warranty or InterNACHI service life attributed to the maker/InterNACHI is FINE.)
5. answerFirst — the FIRST string of each content array (overview, residential.content, commercial.content, weatherChallenges.content) is a definitive ≤40-word answer to that section's rendered heading (overview[0] answers "What Roofing Problems Are Common in [City]?", not a city description); each faqs[].answer opens with a ≤40-word definitive answer; directAnswer ≤40 words. Flag naked/non-answer openers or >40-word first strings.
6. gateCompliance — ** appears ONLY in the rich-parsed fields (directAnswer; the answer-first leads + ProseLead-parsed body paragraphs of overview/residential.content/commercial.content/weatherChallenges.content; the FIRST SENTENCE of each faqs[].answer). Any ** in neighborhoods/projectSpotlights/whyChoose/pricing/meta is a render-leak defect. ALSO check R3 STRICT BODY-LEAD BOLD: each content-array body paragraph OPENS by re-bolding a topic bolded in that section's lead, in order — flag a body paragraph that opens with no lead-matched bold or bolds a topic not in the lead. NO modality (will/should/need to/needs to/have to/has to/must/ought to) in declarative prose (faqs[].question fields are EXEMPT; faqs[].answer and all other body fields are NOT). NO de-fab literals ("24/7", "same-day", "GAF Certified", "0% financing", "top-rated", "500+", "N+ years experience", "N+ projects/roofs/homes/reviews"). NO outbound links/URLs. NO hype words (best/leading/trusted/premier/top-rated/amazing). credentialsHighlight is EXACTLY ['NJ HIC Licensed', 'Fully Insured & Bonded', 'Family-Owned & Local']. metaTitle ≤70 chars, metaDescription ≤160 chars.
7. followThrough — after the answer-first lead, the section body MUST develop the lead's own claim IN THE ORDER the lead introduces it, for overview / weatherChallenges.content / residential.content / commercial.content. Flag: (a) a lead that enumerates N items ("3 stressors: A, B, C") whose body does not develop those exact N in sequence, or develops a different count → counted-plural mismatch; (b) a body paragraph that introduces a NEW top-level point the lead never set up; (c) an OFF-TOPIC fact that belongs to a different section's question — city demographics/population/land-area/housing-age under a "problems" lead, permit-law detail inside a residential/commercial service body, or historic-COA detail inside a materials/services body; (d) a paragraph that teleports topic instead of continuing the prior thread (Rule 21).
8. microSemantics — R35-R38. Flag: (R35) a section body that RESTATES its lead in reworded form instead of developing it through the head entity's lexical relations (hyponyms/meronyms/antonyms/synonyms); (R36) a hard fact (a material lifespan, the $10,000-$25,000 range, a code citation, the population) repeated in full across more than one section instead of stated once in its owning section; (R37) an answer-first lead or FAQ answer written as agentless passive ("is installed", "can be seen") or opened with "there is/it is" instead of a clean subject-verb-object declarative with a NAMED agent; (R38) the first mention of a roofing entity (a material/system/code/component) left BARE — named with no function clause and no differentiator. (A section that correctly develops its lead via distinct lexical facets, states each fact once, uses SVO answer spans, and defines its entities is CLEAN — do not invent drift.)
`;

const FINDING_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['cityId', 'verdict', 'findings'],
  properties: {
    cityId: { type: 'string' },
    verdict: { type: 'string', enum: ['clean', 'minor', 'issues'] },
    findings: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        required: ['dimension', 'severity', 'quote', 'problem', 'fix'],
        properties: {
          dimension: { type: 'string', enum: ['factualAccuracy', 'namedCitations', 'regulatoryAccuracy', 'fabrication', 'answerFirst', 'gateCompliance', 'followThrough', 'microSemantics'] },
          severity: { type: 'string', enum: ['low', 'medium', 'high'] },
          quote: { type: 'string', description: 'the exact offending text from the entry' },
          problem: { type: 'string' },
          fix: { type: 'string', description: 'the exact before→after replacement text' },
        },
      },
    },
  },
};

const REFUTE_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['confirmed', 'reasoning', 'finalFix'],
  properties: {
    confirmed: { type: 'boolean', description: 'true if the finding is a REAL defect that must be fixed' },
    reasoning: { type: 'string' },
    finalFix: { type: 'string', description: 'the corrected before→after edit if confirmed, else empty' },
  },
};

phase('Review');
const reviewed = await pipeline(
  CITIES,
  (id) => agent(
    `You are an adversarial roofing-content reviewer. Review the assembled city entry for cityId "${id}" in caldwells-roseland.ts.\n${GROUNDING}\n${DIMENSIONS}\n\nBe precise and skeptical, but do not invent problems — a clean entry returns verdict "clean" with no findings. For each real finding give the exact offending quote and the exact corrected text. low = stylistic/minor; medium = a wrong/mis-attributed figure, a modality slip in a declarative, a non-answer-first opener, a lexical-restatement/anti-dilution slip, an R3 body-lead bold mismatch, or a counted-plural mismatch; high = a fabricated completed-project/client/sponsorship/certification/warranty-term/savings claim, a population/climate/elevation number not in the sources, a permit-scope inversion, a COA asserted that does not match the city's §0 gate (esp. a Caldwell township-wide/district COA, ANY North Caldwell/Essex Fells COA, a Fairfield COA, or an unconditional Roseland COA), a reservation/floodplain-geography error (Hilltop on the wrong city; floodplain framing on an upland city), a ** in a raw-rendered field, or a de-fab literal.`,
    { label: `review:${id}`, phase: 'Review', schema: FINDING_SCHEMA }
  ),
  // Refute every medium/high finding; low findings auto-confirm.
  (review, id) => {
    const escalate = (review.findings || []).filter((f) => f.severity !== 'low');
    if (escalate.length === 0) return { cityId: id, confirmed: review.findings || [] };
    return parallel(escalate.map((f) => () =>
      agent(
        `You are a roofing standards + NJ construction-code + historic-preservation + local-geography + facts expert running a REFUTATION pass. A reviewer flagged this finding on city "${id}":\nDIMENSION: ${f.dimension} | SEVERITY: ${f.severity}\nQUOTE: ${f.quote}\nPROBLEM: ${f.problem}\nPROPOSED FIX: ${f.fix}\n\nTry to REFUTE it. Check CITY-FACTS-caldwells-roseland.md (the city's section + §0 — esp. the per-city COA gate [Caldwell landmark-only Chapter 130; North Caldwell advisory-no-COA; Essex Fells none; Fairfield advisory-no-COA; Roseland ordinance-but-no-designations], the reservation geography [Hilltop = North Caldwell only], the Passaic floodplain [Fairfield defining + Roseland western edge; the other three upland], the Census figures), the fact packs (facts-nj-regulatory §1.1-§1.4/§3, facts-historic-restoration §8 + §1-§7, facts-materials-economics §0-§8, facts-cost-stats §5-§8, facts-causes-signs §2-§4), and the ruleset (incl. R35-R38 + R3 strict bold). Is this a REAL defect, or is the original text actually correct/acceptable (e.g. naming a material/brand NQR installs is fine; naming an authority — the U.S. Census Bureau/NOAA/InterNACHI/the NRCA/the NPS/Essex County Parks/FEMA/the NOAA-NWS/N.J.A.C. 5:23/a borough ordinance — is fine; a capability claim like "Newark Quality Roofing installs EPDM membranes on flat decks" is NOT fabrication; a material's manufacturer warranty attributed to the maker is NOT a fabricated NQR warranty; faqs[].question fields ARE modality-exempt; a detached 1-2 family reroof needing NO permit IS correct; an attributed NJ cost range IS allowed; a Census population matching CITY-FACTS IS correct; Caldwell DOES have a real Chapter 130 COA for its two designated landmarks [so a conditional landmark-only COA statement for Caldwell is CORRECT, not a fabrication]; the Fairfield Passaic floodplain IS real and documentable; an inline example list like "oak, maple" is NOT a counted-plural defect; ** in a ProseLead-parsed content-array body paragraph is ALLOWED and REQUIRED by R3, only ** in neighborhoods/projectSpotlights/whyChoose/pricing/meta leaks)? Confirm only if it is a genuine defect. If confirmed, give the exact final before→after fix.`,
        { label: `refute:${id}:${f.dimension}`, phase: 'Refute', schema: REFUTE_SCHEMA }
      ).then((v) => ({ ...f, refute: v }))
    )).then((judged) => ({
      cityId: id,
      confirmed: [
        ...(review.findings || []).filter((f) => f.severity === 'low'),
        ...judged.filter((j) => j.refute && j.refute.confirmed).map((j) => ({ ...j, fix: (j.refute.finalFix || j.fix) })),
      ],
    }));
  }
);

const all = reviewed.filter(Boolean);
const confirmedFindings = all.flatMap((r) => (r.confirmed || []).map((f) => ({ cityId: r.cityId, ...f })));
return { perCity: all, confirmedFindings, totalConfirmed: confirmedFindings.length };
