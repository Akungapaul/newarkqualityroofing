export const meta = {
  name: 'cities-batchB-content-verify',
  description: 'Adversarial content review of the 5 assembled first-suburbs city entries: factual accuracy, named citations, NJ-code/per-city historic-COA accuracy, fabrication purge, answer-first + gate compliance, follow-through + R35-R38 micro-semantics; med/high findings go through a refute pass',
  phases: [
    { title: 'Review', detail: 'one reviewer per city across 8 dimensions' },
    { title: 'Refute', detail: 'adversarial refutation of every med/high finding' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const SOURCE = `${PROJECT}/src/data/city-content/first-suburbs.ts`;

const CITIES = ['bloomfield', 'belleville', 'nutley', 'maplewood', 'south-orange'];

const GROUNDING = `
READ for ground truth before reviewing:
- ${SOURCE}  (the assembled file — find the object whose cityId matches your assignment)
- ${PROJECT}/.planning/content-system/cities-batchB/CITY-FACTS-first-suburbs.md  (the §0 global corrections + YOUR city's section — the AUTHORITY for demographics, construction office, historic LOCAL-vs-Register designation, verified neighborhoods, geography/climate)
- ${PROJECT}/.planning/content-system/research/facts-nj-regulatory-climate.md  (§1.1 ordinary-maintenance no-permit N.J.A.C. 5:23-2.7; §1.2 25% rule; §1.4 recover N.J.A.C. 5:23-6.4; §2 HIC + $500k CGL N.J.S.A. 56:8-142; §3 NJ climate — snow ~31.5 in/yr, Pg ~25 psf, ~110-115 mph design wind, nor'easters, ~25-30 thunderstorms/yr — all Newark/EWR, shared by all 5 cities)
- ${PROJECT}/.planning/content-system/research/facts-historic-restoration.md  (§8 COA framework N.J.S.A. 40:55D-107; "Register listing alone does NOT restrict a private reroof" per the NPS)
- ${PROJECT}/.planning/content-system/research/facts-materials-economics.md  (§0 lifespans; §7 NJ pricing + $10,000-$25,000 replacement; §8 repair-vs-replace)
- ${PROJECT}/.planning/content-system/research/facts-cost-stats.md  (§5 repair-vs-replace; §6 replacement benchmark; §7 ROI; §8 Triple-I stats)
- ${PROJECT}/.planning/content-system/research/facts-causes-signs.md  (§2.1 flashing 90-95% per NRCA; §2.2 wind/ASTM D3161; §2.5 aging; §3/§4 signs)
- ${PROJECT}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md  (rules + banned list + the new R35-R38 micro-semantics layer)
`;

const DIMENSIONS = `
Review these 8 dimensions for the assigned city entry:
1. factualAccuracy — every hard number/spec is present in the fact packs / CITY-FACTS and attributed to the SAME named source. Flag any figure invented, mis-attributed, or contradicting the sources: a population/land-area not matching the U.S. Census §5 table in CITY-FACTS (Bloomfield 53,105; Belleville 38,222; Nutley 30,143 — NOT ~35k; Maplewood 25,684; South Orange 18,484); a BANNED city-specific snow/wind/temperature number (only the shared EWR baseline is allowed; Pg ~25 psf + ~110-115 mph design wind stay HEDGED); a tree-canopy COVERAGE percentage (NONE is sourced — only South Orange's "over 8,000 shade trees across 181 Village streets" count is usable, and ONLY for South Orange); a flood-zone acreage/percentage (none sourced); a material lifespan other than InterNACHI's; an NJ cost outside the packs' ranges; a neighborhood CITY-FACTS does not confirm; a GEOGRAPHY error (rivers: the Third River runs THROUGH Nutley + near Bloomfield's town center; the SECOND River = Belleville–Newark border; the Passaic = Belleville's east bank / Nutley's western border; Watsessing Park's waters are the Second River + Toney's Brook, NOT the Third River; South Mountain Reservation partially LIES IN Maplewood but only BORDERS South Orange; ON3 straddles Nutley AND Clifton).
2. namedCitations — authorities are named in-text for every figure (the U.S. Census Bureau, NOAA, the NJ Uniform Construction Code / N.J.A.C. 5:23-2.7 / 5:23-6.4, the NJ DCA, InterNACHI, the NRCA, the IRC, ASTM, the National Park Service, Josten Roofing / HomeAdvisor / Modernize, the Insurance Information Institute / Triple-I, the township codes named in CITY-FACTS — Bloomfield Ch. 302, Nutley Ch. 410, South Orange Ch. 185, Maplewood Article VIII, the Belleville HPC). Flag a hard number with no named source, or a code/standard cited with the wrong number/requirement (e.g. Nutley's HP chapter is Ch. 410, NOT "Ch. 272").
3. regulatoryAccuracy — NJ code + historic claims are correct and correctly scoped:
   - PERMITS: a detached 1- or 2-family dwelling reroof of the roof covering is "ordinary maintenance" — NO permit (N.J.A.C. 5:23-2.7). Repairing >25% of a commercial/multi-family/attached roof in 12 months needs a permit. Flag any inverted/mis-scoped permit claim. Recover/overlay limits = N.J.A.C. 5:23-6.4.
   - HISTORIC (per CITY-FACTS §0 Rule 2 — EACH CITY DIFFERS; do NOT flatten): **Bloomfield** = conditional LOCAL COA via Ch. 302, ONLY for parcels on the Township's "Historic District Property List" (do not conflate the National Register Bloomfield Green district with the local list, do not assert a whole neighborhood is regulated). **Nutley** = conditional LOCAL COA via Ch. 410 for the "Historic District of the Third River and Environs" (verify the parcel; NO fabricated fee/fine/buffer/landmark-list). **South Orange** = LOCAL COA via Ch. 185 inside the Montrose Park Historic District / for designated local landmarks, asserted as a LOCAL-ordinance matter (NOT "because it's National-Register-listed"), NOT Village-wide. **Maplewood** = a COA mechanism EXISTS (Article VIII) but NO active local district — the Maplewood Village Historic District is NATIONAL-REGISTER-ONLY with NO private-owner restriction, so FLAG any claim that a Maplewood Village reroof needs a township COA; correct framing is conditional ("IF a property is in a locally designated district/landmark…"). **Belleville** = NO local historic district; ONE local landmark only (the Old Reformed Church / Reformed Dutch Church of Second River, 171 Main St, designated 2014) — FLAG any broader COA claim; all other historic context is Register-only/honorary. Register/National listing ALONE never restricts a private reroof (per the NPS) — flag any claim that it does.
4. fabrication — THE CRITICAL CHECK for cities. Flag every fabricated NQR specific: a specific COMPLETED project (street address, material count, project duration/timeline, "completed on schedule/budget", "we re-roofed N homes"); a "our crews working in [City] routinely encounter…" or "we recommend X on every [City] estimate" anecdote framed as history; a fabricated client/portfolio/partnership/property-manager relationship or named building owner; a sponsorship/community-roots/team-residence claim; a "[City] Projects Completed"/"hundreds of projects" count; a certification-gated warranty/tier claim ("GAF Certified", "Master Elite", "Golden Pledge", "VELUX certified") or a fabricated warranty TERM stated as an NQR offer. projectSpotlights MUST be representative project TYPES (capability), never specific completed jobs. (Capability claims like "Newark Quality Roofing installs EPDM membranes on flat decks" are FINE.)
5. answerFirst — the FIRST string of each content array (overview, residential.content, commercial.content, weatherChallenges.content) is a definitive ≤40-word answer to that section's rendered heading (overview[0] answers "What Roofing Problems Are Common in [City]?", not a city description); each faqs[].answer opens with a ≤40-word definitive answer; directAnswer ≤40 words. Flag naked/non-answer openers or >40-word first strings.
6. gateCompliance — ** appears ONLY in the rich-parsed fields (directAnswer; the answer-first leads + ProseLead-parsed body paragraphs of overview/residential.content/commercial.content/weatherChallenges.content; the FIRST SENTENCE of each faqs[].answer). Any ** in neighborhoods/projectSpotlights/whyChoose/pricing/meta is a render-leak defect. NO modality (will/should/need to/needs to/have to/has to/must/ought to) in declarative prose (faqs[].question fields are EXEMPT; faqs[].answer and all other body fields are NOT). NO de-fab literals ("24/7", "same-day", "GAF Certified", "0% financing", "top-rated", "500+", "N+ years experience", "N+ projects/roofs/homes/reviews"). NO outbound links/URLs. NO hype words (best/leading/trusted/premier/top-rated/amazing). credentialsHighlight is EXACTLY ['NJ HIC Licensed', 'Fully Insured & Bonded', 'Family-Owned & Local']. metaTitle ≤70 chars, metaDescription ≤160 chars.
7. followThrough — after the answer-first lead, the section body MUST develop the lead's own claim IN THE ORDER the lead introduces it, for overview / weatherChallenges.content / residential.content / commercial.content. Flag: (a) a lead that enumerates N items ("3 stressors: A, B, C") whose body does not develop those exact N in sequence, or develops a different count → counted-plural mismatch (NOTE: the scoped audit flagged advisory R8 plural-count mismatches in belleville/nutley/maplewood overview[0] + maplewood/south-orange residential.content[0] — VERIFY each: is the lead's stated count wrong vs the body's developed topics [a REAL defect → fix the count or the body], or are the extra counted items just inline examples like "oak, maple, sycamore" that are NOT separate developed topics [acceptable]?); (b) a body paragraph that introduces a NEW top-level point the lead never set up; (c) an OFF-TOPIC fact that belongs to a different section's question — city demographics/population/land-area/housing-age under a "problems" lead, permit-law detail inside a residential/commercial service body, or historic-COA detail inside a materials/services body; (d) a paragraph that teleports topic instead of continuing the prior thread (Rule 21).
8. microSemantics — R35-R38 (NEW this batch). Flag: (R35) a section body that RESTATES its lead in reworded form instead of developing it through the head entity's lexical relations (hyponyms — specific instances; meronyms — parts; antonyms — opposite-but-relevant; synonyms — varied terms); (R36) a hard fact (a material lifespan, the $10,000-$25,000 range, a code citation, the population) repeated in full across more than one section instead of stated once in its owning section; (R37) an answer-first lead or FAQ answer written as agentless passive ("is installed", "can be seen") or opened with "there is/it is" instead of a clean subject-verb-object declarative with a NAMED agent; (R38) the first mention of a roofing entity (a material/system/code/component) left BARE — named with no function clause and no differentiator (alternative/part/contrast). (A section that correctly develops its lead via distinct lexical facets, states each fact once, uses SVO answer spans, and defines its entities is CLEAN — do not invent drift.)
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
    `You are an adversarial roofing-content reviewer. Review the assembled city entry for cityId "${id}" in first-suburbs.ts.\n${GROUNDING}\n${DIMENSIONS}\n\nBe precise and skeptical, but do not invent problems — a clean entry returns verdict "clean" with no findings. For each real finding give the exact offending quote and the exact corrected text. low = stylistic/minor; medium = a wrong/mis-attributed figure, a modality slip in a declarative, a non-answer-first opener, a lexical-restatement/anti-dilution slip, or a counted-plural mismatch; high = a fabricated completed-project/client/sponsorship/certification/warranty-term claim, a population/climate number not in the sources, a permit-scope inversion, a COA asserted that does not match the city's §0 Rule 2 gate (esp. a Maplewood Village or whole-neighborhood COA claim), a ** in a raw-rendered field, or a de-fab literal.`,
    { label: `review:${id}`, phase: 'Review', schema: FINDING_SCHEMA }
  ),
  // Refute every medium/high finding; low findings auto-confirm.
  (review, id) => {
    const escalate = (review.findings || []).filter((f) => f.severity !== 'low');
    if (escalate.length === 0) return { cityId: id, confirmed: review.findings || [] };
    return parallel(escalate.map((f) => () =>
      agent(
        `You are a roofing standards + NJ construction-code + historic-preservation + local-geography + facts expert running a REFUTATION pass. A reviewer flagged this finding on city "${id}":\nDIMENSION: ${f.dimension} | SEVERITY: ${f.severity}\nQUOTE: ${f.quote}\nPROBLEM: ${f.problem}\nPROPOSED FIX: ${f.fix}\n\nTry to REFUTE it. Check CITY-FACTS-first-suburbs.md (the city's section + §0 — esp. Rule 2 the per-city COA gate, Rule 4 geography, Rule 5 Census), the fact packs (facts-nj-regulatory §1.1-§1.4/§3, facts-historic-restoration §8, facts-materials-economics §0-§8, facts-cost-stats §5-§8, facts-causes-signs §2-§4), and the ruleset (incl. R35-R38). Is this a REAL defect, or is the original text actually correct/acceptable (e.g. naming a material/brand NQR installs is fine; naming an authority — the U.S. Census Bureau/NOAA/InterNACHI/the NRCA/the NPS/N.J.A.C. 5:23/a township code — is fine; a capability claim like "Newark Quality Roofing installs EPDM membranes on flat decks" is NOT fabrication; faqs[].question fields ARE modality-exempt; a detached 1-2 family reroof needing NO permit IS correct; an attributed NJ cost range IS allowed; a Census population matching CITY-FACTS §5 IS correct; an inline example list like "oak, maple, sycamore" is NOT a counted-plural defect; ** in a ProseLead-parsed content-array body paragraph is ALLOWED, only ** in neighborhoods/projectSpotlights/whyChoose/pricing/meta leaks)? Confirm only if it is a genuine defect. If confirmed, give the exact final before→after fix.`,
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
