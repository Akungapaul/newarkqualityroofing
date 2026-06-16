export const meta = {
  name: 'eg3b-combo-reframe-review',
  description: 'Entity-grounding 3b adversarial review: per-service, audit the 3 reframed combo directAnswers against the gold + originals for naturalness, preserved city-specifics, factual drift, credential accuracy',
  phases: [{ title: 'Review', detail: '65 per-service reviewers in parallel' }],
};

const PAYLOAD = __PAYLOAD_JSON__;
const OUTDIR = '/Users/akungapaul/Projects/Newarkqualityroofing/.planning/content-system/entity-grounding-3b-combo-reframe/findings';

const SPEC = `
You are an ADVERSARIAL reviewer auditing a TARGETED reframe of combo-page directAnswers for Newark Quality Roofing (a NJ roofing company). The reframe’s ONLY job was to: (a) make each directAnswer read like the service-page GOLD — "is a roofing contractor providing {service} across {City}, New Jersey, and Essex County … as a registered New Jersey Home Improvement Contractor"; (b) swap in the correct city; (c) keep each city’s OWN local specifics; (d) replace any "licensed" self-claim with "registered". The deterministic gate ALREADY confirmed: ≤40-word bold span, balanced **, "roofing contractor" present, correct "[City], New Jersey" present, zero "licensed", "registered" credential, no modality. Do NOT re-report those — they pass.

Your job is the QUALITATIVE layer. Flag ONLY genuine problems in these dimensions:
1. NATURAL READ — the reframe produced awkward grammar, a doubled/garbled clause, a dangling phrase, or a broken sentence.
2. PRESERVED CITY-SPECIFICS — the reframed string DROPPED the city’s distinctive local detail that the ORIGINAL had (e.g. Newark row houses/brownstones/Ironbound; East Orange pre-war apartments/multi-family walk-ups; Orange two-/three-family/Valley Arts/Main Street/Seven Oaks) and replaced it with the gold’s generic specifics — this would make the three cities read identically (a duplicate-content risk). Flag if local specifics were lost.
3. FACTUAL DRIFT — the reframe INVENTED a neighborhood, building type, material, or claim that was NOT in that city’s original directAnswer or the gold.
4. WRONG-CITY SPECIFICS — a city’s string carries another city’s landmark/neighborhood (e.g. Orange string mentioning "Ironbound", which is Newark).
5. CREDENTIAL/DE-FAB — any residual self-promotional fabrication, or the credential reads unnaturally.

For each genuine issue return a finding: {city: "newark"|"eastOrange"|"orange", severity: "high"|"med"|"low", issue: "...", suggestedFix: "full corrected directAnswer string"}.
If all three are clean, return an EMPTY findings array. Be precise — do not invent issues; a faithful, natural reframe that preserves specifics is a PASS.
`;

function promptFor(item) {
  const path = `${OUTDIR}/${item.serviceId}.json`;
  return `${SPEC}

SERVICE: ${item.serviceId}

GOLD (service-page directAnswer — the intended framing):
  ${item.gold}

PER CITY — ORIGINAL (pre-reframe) vs REFRAMED (current):
  NEWARK
    ORIGINAL:  ${item.originals.newark}
    REFRAMED:  ${item.reframed.newark}
  EAST ORANGE
    ORIGINAL:  ${item.originals.eastOrange}
    REFRAMED:  ${item.reframed.eastOrange}
  ORANGE
    ORIGINAL:  ${item.originals.orange}
    REFRAMED:  ${item.reframed.orange}

Audit all three. Then use the Write tool to write EXACTLY this file (valid JSON, no markdown fence):
PATH: ${path}
CONTENT:
{
  "serviceId": "${item.serviceId}",
  "findings": [ { "city": "...", "severity": "...", "issue": "...", "suggestedFix": "..." } ]
}
(findings = [] if all three are clean.) JSON-escape only quote and backslash. After writing, return ONE line: "<serviceId>: <N> findings".`;
}

phase('Review');
const results = await parallel(
  PAYLOAD.map((item) => () => agent(promptFor(item), { label: `review:${item.serviceId}`, phase: 'Review' }))
);
log(`review agents completed: ${results.filter(Boolean).length}/${PAYLOAD.length}`);
return { completed: results.filter(Boolean).length, total: PAYLOAD.length };
