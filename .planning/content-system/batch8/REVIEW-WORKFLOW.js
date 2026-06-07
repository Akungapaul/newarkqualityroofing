export const meta = {
  name: 'batch8-content-verify',
  description: 'Adversarial content review of the 15 assembled replacement-sub-page entries: factual accuracy, named citations, regulatory/code/insurance-compliance accuracy, answer-first + gate compliance; med/high findings go through a refute pass',
  phases: [
    { title: 'Review', detail: 'one reviewer per service across 5 dimensions' },
    { title: 'Refute', detail: 'adversarial refutation of every med/high finding' },
  ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const SOURCE = `${PROJECT}/src/data/service-content/replacement-sub-pages.ts`;

const SERVICES = [
  'full-roof-tear-off',
  'roof-overlay-installation',
  're-roofing',
  'insurance-roof-replacement',
  'storm-damage-roof-replacement',
  'aging-roof-replacement',
  'roof-replacement-after-leak',
  'fire-damage-roof-replacement',
  'roof-replacement-cost',
  'asphalt-shingle-roof-replacement',
  'metal-roof-replacement',
  'slate-roof-replacement',
  'tile-roof-replacement',
  'flat-roof-replacement',
  'cedar-shake-roof-replacement',
];

const GROUNDING = `
READ for ground truth before reviewing:
- ${SOURCE}  (the assembled file — find the object whose serviceId matches your assignment)
- ${PROJECT}/.planning/content-system/research/facts-replacement-reroofing-insurance.md  (the §0 global corrections + the insurance-claim process + NJ public-adjuster compliance + overlay-vs-tear-off economics + post-fire structural — the authority for the insurance/overlay/fire pages)
- ${PROJECT}/.planning/content-system/research/facts-materials-economics.md  (lifespans §0/§1/§2/§3/§4/§5/§6 per InterNACHI + named trade bodies; §5b cedar fire ratings; §7 NJ pricing; §8 repair-vs-replace rules)
- ${PROJECT}/.planning/content-system/research/facts-cost-stats.md  (§4 roof age; §5 repair-vs-replace; §6 replacement benchmark; §7 ROI; §8 Triple-I insurance stats; §9 storm share)
- ${PROJECT}/.planning/content-system/research/facts-nj-regulatory-climate.md  (§1.1 ordinary-maintenance no-permit; §1.2 25% rule; §1.4 N.J.A.C. 5:23-6.4 recover conditions; §3 NJ climate)
- ${PROJECT}/.planning/content-system/research/facts-causes-signs.md  (§2.1 flashing 90-95%; §2.2 wind/ASTM D3161; §2.3 hail; §2.5 aging; §3/§4 signs)
- ${PROJECT}/.planning/content-system/research/facts-components-specialty.md  (deck/sheathing + IRC R908 recover prohibition + failing-deck signs)
- ${PROJECT}/.planning/content-system/research/facts-process-standards.md  (workflow; two warranties; ¼-in/ft slope + 48-hr ponding NRCA/ARMA; ASTM D3161 wind classes)
- ${PROJECT}/.planning/content-system/research/sources-and-nqr-facts.md
- ${PROJECT}/.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md  (rules + banned list)
`;

const DIMENSIONS = `
Review these 5 dimensions for the assigned service entry:
1. factualAccuracy — every hard number/spec is present in the fact packs and attributed to the SAME named source. Flag any figure that is invented, mis-attributed, or contradicts the packs (e.g. a slate lifespan other than InterNACHI's 60-150 / National Slate Association 100+; a metal lifespan other than 40-70; a cedar lifespan other than CSSB 20-40 shake / 30-50 shingle or InterNACHI ~25; an NJ $/sq-ft outside the Josten/NJ-guide ranges; an NJ replacement total outside $10,000-$25,000; a Triple-I claim stat other than wind&hail ≈1 in 36 / avg ≈$14,747 or fire ≈1 in 430 / avg ≈$77,340; a per-sq-ft asphalt-layer WEIGHT with no named source; an invented "% of failures" figure that the packs flag UNVERIFIED).
2. namedCitations — authorities are named in-text (InterNACHI, the NRCA, the National Slate Association, the Tile Roofing Industry Alliance, the Cedar Shake & Shingle Bureau, the IRC / ICC R908 / R908.3, N.J.A.C. 5:23-2.7 / 5:23-6.4, the NJ Uniform Construction Code, ASTM D3161 / E108, UL 790, the Insurance Information Institute / Triple-I, the NAIC, NJ DOBI / N.J.S.A. 17:22B, IBHS, ASTM/ARMA for slope, Josten Roofing / HomeAdvisor / Modernize for NJ cost). Flag a hard number with no named source, or a code/standard quoted with the wrong number/requirement.
3. regulatoryAccuracy — code / insurance / compliance claims are correct and correctly scoped:
   - INSURANCE COMPLIANCE (insurance-/storm-/fire-damage pages) — THE CRITICAL CHECK: Newark Quality Roofing must NOT be portrayed as adjusting, negotiating, settling, or "handling" the insurance claim; must NOT guarantee claim approval or a "free roof"; must NOT offer to waive/absorb/rebate the deductible (illegal in NJ). NQR legitimately inspects, documents damage with photos, writes a scope/estimate matching the insurer's line items, meets the adjuster, and performs the approved work. ACV = replacement cost minus depreciation; RCV pays full like-kind replacement and releases recoverable depreciation on completion — flag any inverted/wrong definition. Flag any percentage-deductible or NJ "matching" claim stated as a guaranteed mandate rather than policy/state-specific.
   - REROOFING CODE: a roof recover (overlay) is NOT permitted over wood shake/slate/clay-cement-tile, over a water-soaked/deteriorated deck, or where 2+ layers already exist (N.J.A.C. 5:23-6.4 / IRC R908.3). Flag any claim that an overlay is allowed in those cases, or any overlay presented as equal to a tear-off (it hides the deck, traps heat → shorter life, can limit the manufacturer warranty). Permit nuance: a detached 1-2-family reroof of the covering is ordinary maintenance (no permit) under N.J.A.C. 5:23-2.7; a commercial reroof >25% of area in 12 months needs a permit. Flag an inverted/mis-scoped permit claim.
   - FIRE: Class A/B/C are UL 790 / ASTM E108 roof-covering ratings (Class A most fire-resistant; untreated cedar is nonclassified — NOT Class C; FR-treated cedar Class B/C; Class A wood is assembly-only). Flag "untreated cedar = Class C" or any single-shingle "Class A" claim. NQR does not perform structural engineering — a structural assessment is referenced generally, not claimed as an NQR service.
4. answerFirst — the first sentence under each section is a definitive ≤40-word bolded answer that matches the rendered question heading; directAnswer ≤40 words. The entry MUST include a repair-vs-replace FAQ (answers the rendered "Should You Repair or Replace Your Roof?" H2). Flag naked openers, non-answer openers, or >40-word first sentences.
5. gateCompliance — NO modality (will/should/need to/have to/must/might/may/would/could) in declarative prose (FAQ question: fields are EXEMPT; FAQ answers are NOT). NO de-fab literals or fabricated certifications/financing ("GAF Certified", "24/7", "same-day", "0% financing", "top-rated", "500+", invented %, "N+ years of experience", a fabricated warranty term/guarantee/rating/phone/address, a public-adjuster status for NQR). NO outbound links/URLs. NO hype words. approachSubheadings.length === approachContent.length. credentialsHighlight is the exact safe 4-item array ['NJ HIC Licensed', 'Insured', 'Free Roof Inspections', 'Local Essex County Roofers'].
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
    `You are an adversarial roofing-content reviewer. Review the assembled service entry for serviceId "${id}" in replacement-sub-pages.ts.\n${GROUNDING}\n${DIMENSIONS}\n\nBe precise and skeptical, but do not invent problems — a clean entry should return verdict "clean" with no findings. For each real finding give the exact offending quote and the exact corrected text. Low-severity = stylistic/minor; medium = a wrong/mis-attributed figure or a modality slip in a declarative; high = a fabricated number/cost, a code/insurance inversion (an overlay allowed over slate/tile/2-layers, an overlay presented as equal to a tear-off, NQR adjusting/guaranteeing/handling a claim or waiving a deductible, an ACV/RCV definition error, "untreated cedar = Class C", a single-shingle Class A claim, a de-fab/cert/financing literal, or a fabricated warranty/guarantee).`,
    { label: `review:${id}`, phase: 'Review', schema: FINDING_SCHEMA }
  ),
  // Refute every medium/high finding; low findings auto-confirm.
  (review, id) => {
    const escalate = (review.findings || []).filter((f) => f.severity !== 'low');
    if (escalate.length === 0) return { serviceId: id, confirmed: review.findings || [] };
    return parallel(escalate.map((f) => () =>
      agent(
        `You are a roofing standards + NJ construction-code + property-insurance-compliance + facts expert running a REFUTATION pass. A reviewer flagged this finding on service "${id}":\nDIMENSION: ${f.dimension} | SEVERITY: ${f.severity}\nQUOTE: ${f.quote}\nPROBLEM: ${f.problem}\nPROPOSED FIX: ${f.fix}\n\nTry to REFUTE it. Check the fact packs (facts-replacement-reroofing-insurance §0+tables, facts-materials-economics §0-§8/§5b, facts-cost-stats §4-§9, facts-nj-regulatory §1.1-§1.4/§3, facts-causes-signs §2-§4, facts-components-specialty deck/R908, facts-process-standards) and the ruleset. Is this a REAL defect, or is the original text actually correct/acceptable (e.g. naming a material/brand NQR installs is fine; naming an authority — InterNACHI/NRCA/IRC/Triple-I/NJ DOBI — is fine; FAQ question fields ARE modality-exempt; ACV = replacement cost minus depreciation IS correct; describing NQR as documenting damage + meeting the adjuster + performing approved work — WITHOUT adjusting/guaranteeing the claim — IS compliant; an attributed NJ cost range IS allowed)? Confirm only if it is a genuine defect. If confirmed, give the exact final before→after fix.`,
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
