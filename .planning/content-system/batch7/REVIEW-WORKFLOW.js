export const meta = {
  name: 'batch7-content-verify',
  description: 'Adversarial content review of the 3 assembled design-consultation entries: factual accuracy, named citations, regulatory/preservation/code accuracy, answer-first + gate compliance; med/high findings go through a refute pass',
  phases: [
    { title: 'Review', detail: 'one reviewer per service across 5 dimensions' },
    { title: 'Refute', detail: 'adversarial refutation of every med/high finding' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const SOURCE = `${PROJECT}/src/data/service-content/design-consultation.ts`;

const SERVICES = [
  'custom-roof-design-consultation',
  'historic-roof-restoration',
  'roof-ice-dam-prevention',
];

const GROUNDING = `
READ for ground truth before reviewing:
- ${SOURCE}  (the assembled file — find the object whose serviceId matches your assignment)
- ${PROJECT}/.planning/content-system/research/facts-historic-restoration.md  (the §0 global corrections + per-topic named facts — the authority for the historic page)
- ${PROJECT}/.planning/content-system/research/facts-causes-signs.md  (§2.4 ice-dam mechanism; §2.6 eave ice barrier)
- ${PROJECT}/.planning/content-system/research/facts-components-specialty.md  (§0.7 ice dams; ventilation + ice-barrier tables)
- ${PROJECT}/.planning/content-system/research/facts-process-standards.md  (consultation workflow, two warranties, ASCE 7 wind, inspection cadence)
- ${PROJECT}/.planning/content-system/research/facts-materials-economics.md  (slate §2 60–150 / metal §3 / wood §5 ~25 / clay tile §6 50+ / copper §0 70+ per InterNACHI; §7 NJ pricing)
- ${PROJECT}/.planning/content-system/research/facts-nj-regulatory-climate.md  (NJ UCC; N.J.A.C. 5:23-2.7)
- ${PROJECT}/.planning/content-system/research/sources-and-nqr-facts.md
- ${PROJECT}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md  (rules + banned list)
`;

const DIMENSIONS = `
Review these 5 dimensions for the assigned service entry:
1. factualAccuracy — every hard number/spec is present in the fact packs and attributed to the SAME named source. Flag any figure that is invented, mis-attributed, or contradicts the packs (e.g. a slate lifespan that is not InterNACHI's 60–150; a copper lifespan not 70+; an ice-dam ice-barrier distance other than the IRC's 24 in / 36 in; a fabricated consultation fee or restoration cost; a NJ attic R-value number — that is flagged UNVERIFIED and must NOT appear as a number).
2. namedCitations — authorities are named in-text (NPS, the Secretary of the Interior's Standards, NPS Preservation Brief 4/29/30, the National Slate Association, the Copper Development Association, the NJ DEP Historic Preservation Office, the municipal Historic Preservation Commission, the IRS / IRC §47, the NJEDA, the University of Minnesota Extension, IRC R905.1.2 / R806.2, ASTM D1970, InterNACHI, the NRCA, ASCE 7, the NJ Uniform Construction Code / N.J.A.C. 5:23-2.7). Flag a hard number with no named source, or a standard/code quoted with the wrong number/requirement.
3. regulatoryAccuracy — preservation/code/program claims are correct and correctly scoped:
   - HISTORIC: in-kind / matching (design, color, texture, material) is the governing principle, per the Secretary of the Interior's Standards (NPS). A National Register or NJ Register LISTING by itself does NOT bar a private owner using private funds from reroofing — the binding gate is a LOCAL historic-district ordinance + a Certificate of Appropriateness from the municipal Historic Preservation Commission. The federal 20% Historic Rehabilitation Tax Credit (IRC §47) is for INCOME-PRODUCING certified historic structures only (NOT owner-occupied homes). Flag: any "certified historic restoration"/preservation-certified claim for NQR; any statement that a Register listing forbids an ordinary reroof; the §47 credit applied to a homeowner residence; a stale/precise NJEDA cap or percentage stated as durable.
   - ICE-DAM: the root cause is attic heat escape / air leakage, NOT gutters — flag ANY "clogged gutters cause ice dams" phrasing. The eave ice barrier extends ≥24 in inside the exterior wall line (≥36 in along slope on ≥8:12) per the IRC (R905.1.2). Flag any NJ-specific attic R-value stated as a number (UNVERIFIED). Heat/de-icing cables manage the symptom and are not a root-cause cure — flag if framed as a cure.
   - CUSTOM-DESIGN: NQR installs, so flag any vendor-neutral-independence / "we don't sell materials" claim. Permit scope: a detached one- and two-family reroof is ordinary maintenance under N.J.A.C. 5:23-2.7 (no permit); a commercial reroof over 25% of area in 12 months needs a permit. Flag an inverted/mis-scoped permit claim. Wind design = ASCE 7.
4. answerFirst — the first sentence under each section is a definitive ≤40-word bolded answer that matches the rendered question heading; directAnswer ≤40 words. Flag naked openers, non-answer openers, or >40-word first sentences.
5. gateCompliance — NO modality (will/should/need to/have to/must/might/may/would/could) in declarative prose (FAQ question: fields are EXEMPT; FAQ answers are NOT). NO de-fab literals or fabricated certifications ("GAF Certified", "certified historic restoration"/"preservation-certified" for NQR, "24/7", "same-day", "0% financing", "top-rated", invented %, "N+ years of experience", fabricated guarantees/ratings/phone/address). NO outbound links/URLs. NO hype words. approachSubheadings.length === approachContent.length. credentialsHighlight is the exact safe 4-item array ['NJ HIC Licensed', 'Insured', 'Free Roof Inspections', 'Local Essex County Roofers'].
`;

const FINDING_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['serviceId', 'verdict', 'findings'],
  properties: {
    serviceId: { type: 'string' },
    verdict: { type: 'string', enum: ['clean', 'minor', 'issues'] },
    findings: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        required: ['dimension', 'severity', 'quote', 'problem', 'fix'],
        properties: {
          dimension: { type: 'string', enum: ['factualAccuracy', 'namedCitations', 'regulatoryAccuracy', 'answerFirst', 'gateCompliance'] },
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
  SERVICES,
  (id) => agent(
    `You are an adversarial roofing-content reviewer. Review the assembled service entry for serviceId "${id}" in design-consultation.ts.\n${GROUNDING}\n${DIMENSIONS}\n\nBe precise and skeptical, but do not invent problems — a clean entry should return verdict "clean" with no findings. For each real finding give the exact offending quote and the exact corrected text. Low-severity = stylistic/minor; medium = a wrong/mis-attributed figure or a modality slip in a declarative; high = a fabricated number/cost, a preservation/regulatory inversion (NQR cert claim, Register-listing-forbids-reroof, §47 applied to a home, a NJ ice-dam R-value number, "clogged gutters cause ice dams", a de-fab/cert literal, or a stale tax figure stated as durable).`,
    { label: `review:${id}`, phase: 'Review', schema: FINDING_SCHEMA }
  ),
  // Refute every medium/high finding; low findings auto-confirm.
  (review, id) => {
    const escalate = (review.findings || []).filter((f) => f.severity !== 'low');
    if (escalate.length === 0) return { serviceId: id, confirmed: review.findings || [] };
    return parallel(escalate.map((f) => () =>
      agent(
        `You are a roofing standards + historic-preservation + facts expert running a REFUTATION pass. A reviewer flagged this finding on service "${id}":\nDIMENSION: ${f.dimension} | SEVERITY: ${f.severity}\nQUOTE: ${f.quote}\nPROBLEM: ${f.problem}\nPROPOSED FIX: ${f.fix}\n\nTry to REFUTE it. Check the fact packs (facts-historic-restoration §0+tables, facts-causes-signs §2.4/§2.6, facts-components-specialty §0.7, facts-process-standards, facts-materials-economics §2/§5/§6/§0) and the ruleset. Is this a REAL defect, or is the original text actually correct/acceptable (e.g. naming a material NQR installs is fine; naming the NPS/Preservation Brief/HPC/IRS as an authority is fine; FAQ question fields ARE modality-exempt; the in-kind matching principle attributed to the NPS IS correct; a Register-listing-does-not-restrict-private-reroof statement IS correct; an attributed-aggregator restoration cost range IS allowed)? Confirm only if it is a genuine defect. If confirmed, give the exact final before→after fix.`,
        { label: `refute:${id}:${f.dimension}`, phase: 'Refute', schema: REFUTE_SCHEMA }
      ).then((v) => ({ ...f, refute: v }))
    )).then((judged) => ({
      serviceId: id,
      confirmed: [
        ...(review.findings || []).filter((f) => f.severity === 'low'),
        ...judged.filter((j) => j.refute && j.refute.confirmed),
      ],
    }));
  }
);

const all = reviewed.filter(Boolean);
const confirmedFindings = all.flatMap((r) => (r.confirmed || []).map((f) => ({ serviceId: r.serviceId, ...f })));
return { perService: all, confirmedFindings, totalConfirmed: confirmedFindings.length };
