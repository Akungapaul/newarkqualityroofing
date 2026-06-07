export const meta = {
  name: 'cities-batchA-content-verify',
  description: 'Adversarial content review of the 4 assembled urban-core city entries: factual accuracy, named citations, NJ-code/historic-COA accuracy, fabrication purge, answer-first + gate compliance; med/high findings go through a refute pass',
  phases: [
    { title: 'Review', detail: 'one reviewer per city across 6 dimensions' },
    { title: 'Refute', detail: 'adversarial refutation of every med/high finding' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const SOURCE = `${PROJECT}/src/data/city-content/urban-core.ts`;

const CITIES = ['newark', 'east-orange', 'orange', 'irvington'];

const GROUNDING = `
READ for ground truth before reviewing:
- ${SOURCE}  (the assembled file — find the object whose cityId matches your assignment)
- ${PROJECT}/.planning/content-system/cities-batchA/CITY-FACTS-urban-core.md  (the §0 global corrections + YOUR city's section — the AUTHORITY for demographics, construction office, historic LOCAL-vs-Register designation, verified neighborhoods, geography/climate)
- ${PROJECT}/.planning/content-system/research/facts-nj-regulatory-climate.md  (§1.1 ordinary-maintenance no-permit N.J.A.C. 5:23-2.7; §1.2 25% rule; §1.4 recover N.J.A.C. 5:23-6.4; §2 HIC; §3 NJ climate — snow ~31.5 in/yr, Pg ~25 psf, ~110-115 mph design wind, nor'easters, ~25-30 thunderstorms/yr — all Newark/EWR, shared by all 4 cities)
- ${PROJECT}/.planning/content-system/research/facts-historic-restoration.md  (§8 COA framework N.J.S.A. 40:55D-107; §9 Newark Landmarks & HPC + James Street Commons/Lincoln Park; "Register listing alone does NOT restrict a private reroof" per the NPS)
- ${PROJECT}/.planning/content-system/research/facts-materials-economics.md  (§0 lifespans; §7 NJ pricing + $10,000-$25,000 replacement; §8 repair-vs-replace)
- ${PROJECT}/.planning/content-system/research/facts-cost-stats.md  (§5 repair-vs-replace; §6 replacement benchmark; §7 ROI; §8 Triple-I stats)
- ${PROJECT}/.planning/content-system/research/facts-causes-signs.md  (§2.1 flashing 90-95% per NRCA; §2.2 wind/ASTM D3161; §2.5 aging; §3/§4 signs)
- ${PROJECT}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md  (rules + banned list)
`;

const DIMENSIONS = `
Review these 6 dimensions for the assigned city entry:
1. factualAccuracy — every hard number/spec is present in the fact packs / CITY-FACTS and attributed to the SAME named source. Flag any figure invented, mis-attributed, or contradicting the sources: a population/land-area not matching the U.S. Census figure in CITY-FACTS; a climate figure not in facts-nj-regulatory §3 (e.g. an unsourced "10-15°F above suburbs", "surface temps reduced 50°F", "attic temps reduced 20-30°F", "80 mph downtown wind tunnel"); a material lifespan other than InterNACHI's; an NJ cost outside the packs' ranges; a neighborhood that CITY-FACTS does not confirm is real; a geography error (e.g. asserting Orange directly contains/borders South Mountain Reservation if CITY-FACTS says otherwise).
2. namedCitations — authorities are named in-text for every figure (the U.S. Census Bureau, NOAA, the U.S. EPA, the NJ Uniform Construction Code / N.J.A.C. 5:23-2.7 / 5:23-6.4, the NJ DCA, InterNACHI, the NRCA, the IRC, ASTM, the National Park Service, the NJ Historic Preservation Office, Josten Roofing / HomeAdvisor / Modernize). Flag a hard number with no named source, or a code/standard cited with the wrong number/requirement.
3. regulatoryAccuracy — NJ code + historic claims are correct and correctly scoped:
   - PERMITS: a detached 1- or 2-family dwelling reroof of the roof covering is "ordinary maintenance" — NO permit (N.J.A.C. 5:23-2.7). Repairing >25% of a commercial/multi-family/attached roof in 12 months needs a permit. Flag any inverted/mis-scoped permit claim (e.g. saying a homeowner reroof needs a permit, or that commercial never does). Recover/overlay limits = N.J.A.C. 5:23-6.4.
   - HISTORIC: a Certificate of Appropriateness is required only where a LOCAL historic designation is CONFIRMED in CITY-FACTS for that city/district. Register/National listing ALONE does NOT restrict a private reroof (per the NPS). Flag any COA requirement asserted for a neighborhood CITY-FACTS does not confirm as locally designated, or any claim that Register listing restricts a private reroof.
4. fabrication — THE CRITICAL CHECK for cities. Flag every fabricated NQR specific: a specific COMPLETED project (street address, slate/tile count, project duration/timeline, "completed on schedule and budget", "we re-roofed N homes"); a fabricated client/portfolio/partnership (named building owner, "Gateway Center", "Habitat for Humanity", "we partnered with investors"); a sponsorship/community-roots/team-residence claim; a "[City] Projects Completed" or "hundreds of projects" count; a certification-gated warranty/tier claim ("GAF Certified", "Master Elite", "Golden Pledge warranty", "VELUX certified") or a fabricated warranty TERM stated as an NQR offer ("20-year warranty", "50-year manufacturer warranty"). projectSpotlights MUST be representative project TYPES (capability), never specific completed jobs. (Capability claims like "Newark Quality Roofing installs EPDM membranes on brownstone flat roofs" are FINE.)
5. answerFirst — the FIRST string of each content array (overview, residential.content, commercial.content, weatherChallenges.content) is a definitive ≤40-word answer to that section's rendered heading (overview[0] answers "What Roofing Problems Are Common in [City]?", not a city description); each faqs[].answer opens with a ≤40-word definitive answer; directAnswer ≤40 words. Flag naked/non-answer openers or >40-word first strings.
6. gateCompliance — ** appears ONLY in directAnswer (any ** elsewhere is a render-leak defect). NO modality (will/should/need to/needs to/have to/has to/must/ought to) in declarative prose (faqs[].question fields are EXEMPT; faqs[].answer and all other body fields are NOT). NO de-fab literals ("24/7", "same-day", "GAF Certified", "0% financing", "top-rated", "500+", "N+ years experience", "N+ projects/roofs/homes/reviews", fabricated rating/phone/address). NO outbound links/URLs. NO hype words (best/leading/trusted/premier/top-rated/amazing). credentialsHighlight is EXACTLY ['NJ HIC Licensed', 'Fully Insured & Bonded', 'Family-Owned & Local']. metaTitle ≤70 chars, metaDescription ≤160 chars.
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
          dimension: { type: 'string', enum: ['factualAccuracy', 'namedCitations', 'regulatoryAccuracy', 'fabrication', 'answerFirst', 'gateCompliance'] },
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
    `You are an adversarial roofing-content reviewer. Review the assembled city entry for cityId "${id}" in urban-core.ts.\n${GROUNDING}\n${DIMENSIONS}\n\nBe precise and skeptical, but do not invent problems — a clean entry returns verdict "clean" with no findings. For each real finding give the exact offending quote and the exact corrected text. low = stylistic/minor; medium = a wrong/mis-attributed figure, a modality slip in a declarative, or a non-answer-first opener; high = a fabricated completed-project/client/sponsorship/certification/warranty-term claim, a population/climate number not in the sources, a permit-scope inversion, a COA asserted without a confirmed LOCAL designation, a ** outside directAnswer, or a de-fab literal.`,
    { label: `review:${id}`, phase: 'Review', schema: FINDING_SCHEMA }
  ),
  // Refute every medium/high finding; low findings auto-confirm.
  (review, id) => {
    const escalate = (review.findings || []).filter((f) => f.severity !== 'low');
    if (escalate.length === 0) return { cityId: id, confirmed: review.findings || [] };
    return parallel(escalate.map((f) => () =>
      agent(
        `You are a roofing standards + NJ construction-code + historic-preservation + local-geography + facts expert running a REFUTATION pass. A reviewer flagged this finding on city "${id}":\nDIMENSION: ${f.dimension} | SEVERITY: ${f.severity}\nQUOTE: ${f.quote}\nPROBLEM: ${f.problem}\nPROPOSED FIX: ${f.fix}\n\nTry to REFUTE it. Check CITY-FACTS-urban-core.md (the city's section + §0), the fact packs (facts-nj-regulatory §1.1-§1.4/§3, facts-historic-restoration §8-9, facts-materials-economics §0-§8, facts-cost-stats §5-§8, facts-causes-signs §2-§4), and the ruleset. Is this a REAL defect, or is the original text actually correct/acceptable (e.g. naming a material/brand NQR installs is fine; naming an authority — the U.S. Census Bureau/NOAA/EPA/InterNACHI/the NRCA/the NPS/N.J.A.C. 5:23 — is fine; a capability claim like "Newark Quality Roofing installs EPDM membranes on brownstone flat roofs" is NOT fabrication; faqs[].question fields ARE modality-exempt; a detached 1-2 family reroof needing NO permit IS correct; an attributed NJ cost range IS allowed; a Census population matching CITY-FACTS IS correct)? Confirm only if it is a genuine defect. If confirmed, give the exact final before→after fix.`,
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
