export const meta = {
  name: 'batch6-content-verify',
  description: 'Adversarial content review of the 5 assembled energy-solar entries: factual accuracy, named citations, regulatory/standard accuracy, answer-first + gate compliance; med/high findings go through a refute pass',
  phases: [
    { title: 'Review', detail: 'one reviewer per service across 5 dimensions' },
    { title: 'Refute', detail: 'adversarial refutation of every med/high finding' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const SOURCE = `${PROJECT}/src/data/service-content/energy-solar.ts`;

const SERVICES = [
  'solar-panel-roofing-installation',
  'solar-shingle-installation',
  'energy-efficient-roofing-solutions',
  'silicone-roof-coating',
  'silicone-elastomeric-roof-coating',
];

const GROUNDING = `
READ for ground truth before reviewing:
- ${SOURCE}  (the assembled file — find the object whose serviceId matches your assignment)
- ${PROJECT}/.planning/content-system/research/facts-energy-solar.md  (the §0 global corrections + per-topic named facts — the authority for every number)
- ${PROJECT}/.planning/content-system/research/facts-materials-economics.md  (§6 PVC & SPF reflectance/recoat/R-value; §7 — cross-referenced)
- ${PROJECT}/.planning/content-system/research/sources-and-nqr-facts.md
- ${PROJECT}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md  (rules + banned list)
`;

const DIMENSIONS = `
Review these 5 dimensions for the assigned service entry:
1. factualAccuracy — every hard number/spec is present in the fact packs and attributed to the SAME named source. Flag any figure that is invented, mis-attributed, or contradicts the packs (e.g. a reflectance value borrowed from a different material, a wattage not in the pack, an incentive dollar figure the pack flagged time-sensitive, a coating cost not sourced).
2. namedCitations — authorities are named in-text (NRCA, SEIA, DOE, NREL, CRRC, RCMA, ASTM E1980/C1549/D6694/D6083, NEC 690.12, UL 61730, IFC 605, IRS, NJ BPU, EnergySage…). Flag a hard number with no named source, or a standard/code quoted with the wrong number/requirement.
3. regulatoryAccuracy — standards/code/program claims are correct and correctly scoped:
   - NEC 690.12 rapid shutdown applies to rooftop PV (NFPA 70); UL 61730 (current) / UL 1703 (legacy) PV module + roof-system fire class; IFC 605 / IRC R324 firefighter access setbacks/pathways.
   - Cool-roof metrics: Solar Reflectance + Thermal Emittance → SRI per ASTM E1980; reflectance per ASTM C1549. ENERGY STAR ROOF PRODUCTS PROGRAM ENDED (~2022) — flag any claim of an active ENERGY STAR roof label; CRRC is the live rating body.
   - Coatings: silicone ASTM D6694, acrylic ASTM D6083; silicone resists ponding water, acrylic does NOT; coatings add NEGLIGIBLE R-value — flag ANY claim a coating adds meaningful insulation/R-value.
   - NJ heating-climate caveat: a reflective/cool roof's summer savings are partly offset by a winter heating penalty in NJ (Zone 4–5) — flag any promise of universal year-round energy savings. Title 24 is CA-only — flag if cited as NJ.
   - Incentives: federal 30% Residential Clean Energy Credit (25D) through 2032 per the IRS; NJ SuSI/SREC-II administered by the NJ BPU; NJ net metering + sales/property-tax exemptions. Flag a stale/precise SREC dollar value stated as durable, or any incentive presented as tax advice.
4. answerFirst — the first sentence under each section is a definitive ≤40-word bolded answer that matches the rendered question heading; directAnswer ≤40 words. Flag naked openers, non-answer openers, or >40-word first sentences.
5. gateCompliance — NO modality (will/should/need to/have to/must/might/may/would/could) in declarative prose (FAQ question: fields are EXEMPT; FAQ answers are NOT). NO de-fab literals or fabricated certifications ("GAF Certified", "GAF Energy certified", "NABCEP certified" for NQR, "Tesla certified installer", "24/7", "same-day", "0% financing", "maintenance-free", invented %, "N+ years of experience"). NO outbound links/URLs. NO hype words. approachSubheadings.length === approachContent.length. credentialsHighlight is the exact safe 4-item array. silicone-roof-coating vs silicone-elastomeric-roof-coating must not duplicate the same full treatment (info-gain / no self-cannibalization).
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
    `You are an adversarial roofing-content reviewer. Review the assembled service entry for serviceId "${id}" in energy-solar.ts.\n${GROUNDING}\n${DIMENSIONS}\n\nBe precise and skeptical, but do not invent problems — a clean entry should return verdict "clean" with no findings. For each real finding give the exact offending quote and the exact corrected text. Low-severity = stylistic/minor; medium = a wrong/mis-attributed figure or a modality slip in a declarative; high = a fabricated number, a regulatory/program inversion (e.g. active ENERGY STAR roof label, coating R-value claim, Title-24-in-NJ), a de-fab/cert literal, or a stale incentive figure stated as durable.`,
    { label: `review:${id}`, phase: 'Review', schema: FINDING_SCHEMA }
  ),
  // Refute every medium/high finding; low findings auto-confirm.
  (review, id) => {
    const escalate = (review.findings || []).filter((f) => f.severity !== 'low');
    if (escalate.length === 0) return { serviceId: id, confirmed: review.findings || [] };
    return parallel(escalate.map((f) => () =>
      agent(
        `You are a roofing standards + facts expert running a REFUTATION pass. A reviewer flagged this finding on service "${id}":\nDIMENSION: ${f.dimension} | SEVERITY: ${f.severity}\nQUOTE: ${f.quote}\nPROBLEM: ${f.problem}\nPROPOSED FIX: ${f.fix}\n\nTry to REFUTE it. Check the fact packs (facts-energy-solar.md §0+per-topic, facts-materials-economics §6) and the ruleset. Is this a REAL defect, or is the original text actually correct/acceptable (e.g. naming a brand NQR installs is fine; naming NABCEP as the industry credential is fine if NQR isn't claimed to hold it; FAQ question fields ARE modality-exempt; the durable "30% federal credit per the IRS" framing IS allowed; the pack's hedged framing IS allowed)? Confirm only if it is a genuine defect. If confirmed, give the exact final before→after fix.`,
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
