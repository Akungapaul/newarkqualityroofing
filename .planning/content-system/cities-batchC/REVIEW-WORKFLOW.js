export const meta = {
  name: 'cities-batchC-content-verify',
  description: 'Adversarial content review of the 5 assembled west-essex city entries: factual accuracy, named citations, NJ-code/per-city historic-COA accuracy, reservation geography, fabrication purge, answer-first + gate compliance, follow-through + R35-R38 micro-semantics + R3 strict bold; med/high findings go through a refute pass',
  phases: [
    { title: 'Review', detail: 'one reviewer per city across 8 dimensions' },
    { title: 'Refute', detail: 'adversarial refutation of every med/high finding' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const SOURCE = `${PROJECT}/src/data/city-content/west-essex.ts`;

const CITIES = ['west-orange', 'montclair', 'glen-ridge', 'verona', 'cedar-grove'];

const GROUNDING = `
READ for ground truth before reviewing:
- ${SOURCE}  (the assembled file — find the object whose cityId matches your assignment)
- ${PROJECT}/.planning/content-system/cities-batchC/CITY-FACTS-west-essex.md  (the §0 global corrections + YOUR city's section — the AUTHORITY for demographics, construction office, historic LOCAL-vs-Register-vs-private-covenant designation, verified neighborhoods, geography/climate incl. reservation adjacency)
- ${PROJECT}/.planning/content-system/research/facts-nj-regulatory-climate.md  (§1.1 ordinary-maintenance no-permit N.J.A.C. 5:23-2.7; §1.2 25% rule; §1.4 recover N.J.A.C. 5:23-6.4; §2 HIC + $500k CGL N.J.S.A. 56:8-142; §3 NJ climate — snow ~31.5 in/yr, Pg ~25 psf, ~110-115 mph design wind, nor'easters, ~25-30 thunderstorms/yr — all Newark/EWR, shared by all 5 cities)
- ${PROJECT}/.planning/content-system/research/facts-historic-restoration.md  (§8 COA framework N.J.S.A. 40:55D-107; "Register listing alone does NOT restrict a private reroof" per the NPS; §1-§7 slate/copper/cedar restoration figures — Standard 6, Preservation Briefs 4/19/29/30, red-cedar-no-copper-nails, 20% slate threshold)
- ${PROJECT}/.planning/content-system/research/facts-materials-economics.md  (§0 lifespans; §2 slate; §5 cedar; §7 NJ pricing + $10,000-$25,000 replacement; §8 repair-vs-replace)
- ${PROJECT}/.planning/content-system/research/facts-cost-stats.md  (§5 repair-vs-replace; §6 replacement benchmark; §7 ROI; §8 Triple-I stats)
- ${PROJECT}/.planning/content-system/research/facts-causes-signs.md  (§2.1 flashing 90-95% per NRCA; §2.2 wind/ASTM D3161; §2.5 aging; §3/§4 signs)
- ${PROJECT}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md  (rules + banned list + R35-R38 micro-semantics + R3 strict body-lead bold)
`;

const DIMENSIONS = `
Review these 8 dimensions for the assigned city entry:
1. factualAccuracy — every hard number/spec is present in the fact packs / CITY-FACTS and attributed to the SAME named source. Flag any figure invented, mis-attributed, or contradicting the sources: a population/land-area not matching the U.S. Census table in CITY-FACTS §[city]; a BANNED city-specific snow/wind/temperature/elevation number (only the shared EWR baseline is allowed; Pg ~25 psf + ~110-115 mph design wind stay HEDGED; flag "500 feet", "70 mph", "winds 15-20% stronger", "2-4 inches greater per storm", "30 degrees", "15-25% savings", "10-28% discounts" as fabricated); a material lifespan other than InterNACHI's; an NJ cost outside the packs' ranges (flag invented city-tier figures like "$35,000-$75,000 in Llewellyn Park" or "$40,000-$80,000 slate"); a neighborhood CITY-FACTS does not confirm; a RESERVATION-GEOGRAPHY error (per CITY-FACTS §0: South Mountain Reservation = West Orange ONLY among these 5 — flag it on Montclair/Verona/Cedar Grove/Glen Ridge; Eagle Rock = West Orange/Montclair/Verona; Mills = Cedar Grove/Montclair; Hilltop = Verona/Cedar Grove; Glen Ridge abuts NO large reservation).
2. namedCitations — authorities are named in-text for every figure (the U.S. Census Bureau, NOAA, the NJ Uniform Construction Code / N.J.A.C. 5:23-2.7 / 5:23-6.4, the NJ DCA, InterNACHI, the NRCA, the IRC, ASTM, the National Park Service / Preservation Briefs / Secretary of the Interior's Standards, Essex County Parks, Josten Roofing / HomeAdvisor / Modernize, the Insurance Information Institute / Triple-I, the township ordinance/HPC named in CITY-FACTS). Flag a hard number with no named source, or a code/standard/ordinance cited with the wrong number/requirement.
3. regulatoryAccuracy — NJ code + historic claims are correct and correctly scoped:
   - PERMITS: a detached 1- or 2-family dwelling reroof of the roof covering is "ordinary maintenance" — NO permit (N.J.A.C. 5:23-2.7). Repairing >25% of a commercial/multi-family/attached roof in 12 months needs a permit. Flag any inverted/mis-scoped permit claim. Recover/overlay limits = N.J.A.C. 5:23-6.4.
   - HISTORIC (per CITY-FACTS §0 Rule 1 — EACH CITY DIFFERS; do NOT flatten): **Montclair** = conditional LOCAL COA (Article XXIII of Chapter 347; COA §347-136) for exterior changes that ALTER APPEARANCE on a Montclair Local Historic Landmark or a property in one of the FOUR locally designated districts (Town Center, Upper Montclair Business, Pine Street, Watchung Plaza); in-kind repair is EXEMPT — FLAG "every reroof needs a COA"/township-wide/Estate-Section/Register-only-district COA claims. **Glen Ridge** = BINDING local COA (Chapter 15.32; HPC est. 1987) for exterior alterations incl. roof replacement/material change/dormers in the Glen Ridge Historic District covering OVER 90% of the borough — correct, but FLAG framing it as "because it is National-Register-listed" (it is a LOCAL-ordinance matter) and FLAG a literal "100% of the borough" claim. **West Orange** = LOCAL COA only for the ~ten locally designated landmarks (Section 25-30, Chapter 25) — FLAG a township-wide or NR-only COA claim; Llewellyn Park = a PRIVATE Committee-of-Managers covenant (1857 deed), NOT a municipal COA (except an individually designated structure like the Gate House) — FLAG treating Llewellyn Park's private covenant as a municipal COA, and FLAG treating Glenmont/Edison NHP (federal NPS) as a homeowner COA matter. **Verona** = HPC review (Chapter 150, Article XXII) prior to permits for only TWO locally designated landmarks (Erie Railroad Freight Shed, 62 Depot St; Verona United Methodist Church); in-kind repair EXEMPT — FLAG the literal phrase "Certificate of Appropriateness" used for Verona, an Afterglow-requires-review claim, or calling Verona Park National-Register-listed. **Cedar Grove** = NO local HPC, NO COA, no locally designated district/landmark (only an advisory Heritage Advisory Committee) — FLAG any Cedar Grove COA/HPC-review/designated-landmark claim. Register/National listing ALONE never restricts a private reroof (per the NPS) — flag any claim that it does. A private deed covenant (Llewellyn Park) is NOT a municipal COA — flag any conflation.
4. fabrication — THE CRITICAL CHECK for cities. Flag every fabricated NQR specific: a specific COMPLETED project (street address, material count, project duration/timeline, "we have restored turret roofs on South Fullerton Avenue Victorians", "completed in 5 weeks", "we re-roofed N homes"); a "our crews working in [City] routinely encounter…" or "we coordinate with the community association" anecdote framed as history; a fabricated client/portfolio/partnership/property-manager/community-association relationship or named building owner; a sponsorship/community-roots/team-residence/referral claim; a "[City] Projects Completed"/"hundreds of projects" count; a certification-gated warranty/tier claim ("GAF Certified", "Master Elite", "Golden Pledge", "VELUX certified") or a fabricated warranty TERM stated as an NQR offer ("25-year workmanship warranty", "50-year material warranties", "transferable warranty" as an NQR promise); a fabricated savings/performance figure ("30 degrees", "15-25% savings", "5 to 8 years", "10-28% discounts"); a financing claim. projectSpotlights MUST be representative project TYPES (capability), never specific completed jobs. (Capability claims like "Newark Quality Roofing installs EPDM membranes on flat decks" are FINE; a MATERIAL's manufacturer warranty or InterNACHI service life attributed to the maker/InterNACHI is FINE.)
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
    `You are an adversarial roofing-content reviewer. Review the assembled city entry for cityId "${id}" in west-essex.ts.\n${GROUNDING}\n${DIMENSIONS}\n\nBe precise and skeptical, but do not invent problems — a clean entry returns verdict "clean" with no findings. For each real finding give the exact offending quote and the exact corrected text. low = stylistic/minor; medium = a wrong/mis-attributed figure, a modality slip in a declarative, a non-answer-first opener, a lexical-restatement/anti-dilution slip, an R3 body-lead bold mismatch, or a counted-plural mismatch; high = a fabricated completed-project/client/sponsorship/certification/warranty-term/savings claim, a population/climate/elevation number not in the sources, a permit-scope inversion, a COA asserted that does not match the city's §0 gate (esp. a Glen Ridge binding-COA the pack did not confirm, a West Orange municipal-COA, or treating Llewellyn Park's private covenant as a municipal COA), a reservation-geography error (South Mountain on the wrong city), a ** in a raw-rendered field, or a de-fab literal.`,
    { label: `review:${id}`, phase: 'Review', schema: FINDING_SCHEMA }
  ),
  // Refute every medium/high finding; low findings auto-confirm.
  (review, id) => {
    const escalate = (review.findings || []).filter((f) => f.severity !== 'low');
    if (escalate.length === 0) return { cityId: id, confirmed: review.findings || [] };
    return parallel(escalate.map((f) => () =>
      agent(
        `You are a roofing standards + NJ construction-code + historic-preservation + local-geography + facts expert running a REFUTATION pass. A reviewer flagged this finding on city "${id}":\nDIMENSION: ${f.dimension} | SEVERITY: ${f.severity}\nQUOTE: ${f.quote}\nPROBLEM: ${f.problem}\nPROPOSED FIX: ${f.fix}\n\nTry to REFUTE it. Check CITY-FACTS-west-essex.md (the city's section + §0 — esp. the per-city COA gate, the reservation geography, the Census figures), the fact packs (facts-nj-regulatory §1.1-§1.4/§3, facts-historic-restoration §8 + §1-§7, facts-materials-economics §0-§8, facts-cost-stats §5-§8, facts-causes-signs §2-§4), and the ruleset (incl. R35-R38 + R3 strict bold). Is this a REAL defect, or is the original text actually correct/acceptable (e.g. naming a material/brand NQR installs is fine; naming an authority — the U.S. Census Bureau/NOAA/InterNACHI/the NRCA/the NPS/Essex County Parks/N.J.A.C. 5:23/a township ordinance — is fine; a capability claim like "Newark Quality Roofing installs EPDM membranes on flat decks" is NOT fabrication; a material's manufacturer warranty attributed to the maker is NOT a fabricated NQR warranty; faqs[].question fields ARE modality-exempt; a detached 1-2 family reroof needing NO permit IS correct; an attributed NJ cost range IS allowed; a Census population matching CITY-FACTS IS correct; an inline example list like "oak, maple, hickory" is NOT a counted-plural defect; ** in a ProseLead-parsed content-array body paragraph is ALLOWED and REQUIRED by R3, only ** in neighborhoods/projectSpotlights/whyChoose/pricing/meta leaks)? Confirm only if it is a genuine defect. If confirmed, give the exact final before→after fix.`,
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
