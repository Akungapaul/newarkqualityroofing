export const meta = {
  name: 'batch5-content-verify',
  description: 'Adversarial content review of the 10 assembled components-specialty entries: factual accuracy, named citations, regulatory/code accuracy, answer-first + gate compliance; med/high findings go through a refute pass',
  phases: [
    { title: 'Review', detail: 'one reviewer per service across 5 dimensions' },
    { title: 'Refute', detail: 'adversarial refutation of every med/high finding' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const SOURCE = `${PROJECT}/src/data/service-content/components-specialty.ts`;

const SERVICES = [
  'roof-flashing-installation-repair',
  'chimney-flashing-repair',
  'gutter-installation-repair',
  'gutter-guard-installation',
  'skylight-installation-repair',
  'fascia-installation-repair',
  'soffit-installation-repair',
  'roof-vent-installation-repair',
  'roof-waterproofing',
  'roof-deck-repair-replacement',
];

const GROUNDING = `
READ for ground truth before reviewing:
- ${SOURCE}  (the assembled file — find the object whose serviceId matches your assignment)
- ${PROJECT}/.planning/content-system/research/facts-components-specialty.md  (the §0 global corrections + per-service named facts — the authority for every number)
- ${PROJECT}/.planning/content-system/research/facts-causes-signs.md, facts-cost-stats.md, facts-materials-economics.md, sources-and-nqr-facts.md
- ${PROJECT}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md  (rules + banned list)
`;

const DIMENSIONS = `
Review these 5 dimensions for the assigned service entry:
1. factualAccuracy — every hard number/spec is present in the fact packs and attributed to the SAME named source. Flag any figure that is invented, mis-attributed, or contradicts the packs (e.g., a value borrowed from a different component).
2. namedCitations — authorities are named in-text (NRCA, ARMA, IRC R###, ASTM D1970, InterNACHI, IBHS, VELUX, HomeGuide…). Flag a hard number with no named source, or a code section quoted with the wrong number/requirement.
3. regulatoryAccuracy — IRC/ASTM/N.J.A.C. claims are correct and correctly scoped: drip edge ≤12 in O.C. (R905.2.8.5, NOT 8-10); ice barrier 24 in inside wall + 36 in on ≥8:12 (R905.1.2); cricket >30 in (R1003.20); skylight curb ≥4 in only <3:12 (R308.6.8); vent 1/150 and NO claim Newark qualifies for 1/300 on the vapor-retarder basis (Zone 4-5); nail penetration ≥3/4 in (ARMA); reroof over unsound deck barred (R908). Flag any inversion or over-scope.
4. answerFirst — the first sentence under each section is a definitive ≤40-word bolded answer that matches the rendered question heading; directAnswer ≤40 words. Flag naked openers, non-answer openers, or >40-word first sentences.
5. gateCompliance — NO modality (will/should/need to/have to/must/might/may/would/could) in declarative prose (FAQ question: fields are EXEMPT; FAQ answers are NOT). NO de-fab literals or fabricated certifications ("VELUX certified", "GAF Certified", "24/7", "same-day", "0% financing", "maintenance-free/clog-proof/never clean again", "lifetime no-leak", invented %). NO outbound links/URLs. NO hype words. approachSubheadings.length === approachContent.length. credentialsHighlight is the exact safe 4-item array.
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
    `You are an adversarial roofing-content reviewer. Review the assembled service entry for serviceId "${id}" in components-specialty.ts.\n${GROUNDING}\n${DIMENSIONS}\n\nBe precise and skeptical, but do not invent problems — a clean entry should return verdict "clean" with no findings. For each real finding give the exact offending quote and the exact corrected text. Low-severity = stylistic/minor; medium = a wrong/mis-attributed figure or a modality slip in a declarative; high = a fabricated number, a regulatory inversion, a de-fab/cert literal, or a hard "90-95%" stated as a primary NRCA stat.`,
    { label: `review:${id}`, phase: 'Review', schema: FINDING_SCHEMA }
  ),
  // Refute every medium/high finding; low findings auto-confirm.
  (review, id) => {
    const escalate = (review.findings || []).filter((f) => f.severity !== 'low');
    if (escalate.length === 0) return { serviceId: id, confirmed: review.findings || [] };
    return parallel(escalate.map((f) => () =>
      agent(
        `You are a roofing code + facts expert running a REFUTATION pass. A reviewer flagged this finding on service "${id}":\nDIMENSION: ${f.dimension} | SEVERITY: ${f.severity}\nQUOTE: ${f.quote}\nPROBLEM: ${f.problem}\nPROPOSED FIX: ${f.fix}\n\nTry to REFUTE it. Check the fact packs (facts-components-specialty.md §0+per-service, facts-causes-signs.md) and the ruleset. Is this a REAL defect, or is the original text actually correct/acceptable (e.g., the hedged "industry estimate attributed to the NRCA" framing IS allowed; FAQ question fields ARE modality-exempt; naming a brand NQR installs is fine)? Confirm only if it is a genuine defect. If confirmed, give the exact final before→after fix.`,
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
