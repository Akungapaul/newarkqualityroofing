export const meta = {
  name: 'eg3b-combo-reframe',
  description: 'Entity-grounding 3b: reframe each of 65 services’ 3 city-combo directAnswers (roofing-contractor + [City], New Jersey + registered NJ HIC), mirroring the gated 2a service directAnswer',
  phases: [{ title: 'Reframe', detail: '65 service agents × 3 city directAnswers each, in parallel' }],
};

// PAYLOAD is injected by build-author-workflow.mjs (replaces the placeholder below
// with the contents of _payload.json) — workflow runtime has no fs access. Each item:
//   { serviceId, gold, newark, eastOrange, orange, newarkHasTail, eastOrangeHasTail, orangeHasTail }
const PAYLOAD = __PAYLOAD_JSON__;
const OUTDIR = '/Users/akungapaul/Projects/Newarkqualityroofing/.planning/content-system/entity-grounding-3b-combo-reframe/reframed';

const CITY = [
  { key: 'newark', display: 'Newark, New Jersey' },
  { key: 'eastOrange', display: 'East Orange, New Jersey' },
  { key: 'orange', display: 'Orange, New Jersey' },
];

const SPEC = `
You are reframing the **directAnswer** (the answer-first hero lead) of THREE city combo pages for one roofing service on Newark Quality Roofing's site (Newark, East Orange, and Orange, NJ). This is a TARGETED reframe of ONE field per page — you do NOT rewrite overview/challenges/process/faqs.

GOAL: make each combo directAnswer read like its already-shipped, gated SERVICE-page directAnswer (the GOLD below), with the city swapped in and the combo’s own city-specific specifics preserved.

THE GOLD (the service-page directAnswer — your structural template):
This shows the locked framing: "**Newark Quality Roofing is a roofing contractor {verb-ing} {service} across {City}, New Jersey, and Essex County**, {specifics} as a registered New Jersey Home Improvement Contractor."

HARD RULES (a build-failing check enforces these):
1. BOLD SPAN = the establishing clause only: "**Newark Quality Roofing is a roofing contractor {verb-ing} {service} across {City}, New Jersey, and Essex County**". This bolded span is the ≤ 40-word answer. Mirror the GOLD’s verb phrase ({verb-ing} {service}) exactly. Close the bold at "Essex County" — the specifics and credential are NOT bolded.
2. CITY NAMING: establish the city EXACTLY as given (e.g. "Newark, New Jersey" / "East Orange, New Jersey" / "Orange, New Jersey"). NEVER write "City of Orange Township" as the establishing phrase — Orange = "Orange, New Jersey".
3. PRESERVE THE COMBO’S CITY-SPECIFIC SPECIFICS. Each current combo names local building stock / neighborhoods (e.g. Newark row houses, brownstones, Ironbound flat roofs; East Orange pre-war apartments, multi-family walk-ups; Orange two-/three-family homes, Valley Arts lofts, Main Street). Keep THAT city’s specifics in the UNBOLDED portion. Do NOT copy the gold’s generic specifics over the local ones — the gold supplies only the descriptor + credential framing.
4. CREDENTIAL TAIL (unbolded, at the end): "as a registered New Jersey Home Improvement Contractor." Use "registered" — NEVER "licensed". Remove ANY NQR self-claim of being "licensed" (e.g. "licensed and insured", "a New Jersey licensed contractor") and replace it with the registered-HIC tail. (NJ HIC is a registration, N.J.S.A. 56:8-136, not a license.)
5. NO MODALITY in the declarative sentence: no "will", "should", "must", "need to", "can".
6. ONE sentence. Keep it natural and specific to the city. Do not invent new facts, neighborhoods, or figures — reuse only what the current combo directAnswer already contains for that city.
7. Some combos currently have NO credential tail (descriptor + city only). For those, add the roofing-contractor + "[City], New Jersey" framing; append the registered-HIC tail only if it reads naturally and the bold span stays ≤ 40 words.

OUTPUT: Write a JSON file. Do NOT return the strings in your message — write them to disk.
`;

function promptFor(item) {
  const lines = CITY.map((c) => {
    const tail = item[`${c.key}HasTail`] ? '' : ' (NOTE: this one currently has NO credential tail — add descriptor+city; append the registered-HIC tail only if ≤40w/natural.)';
    return `  ${c.display} (key "${c.key}")${tail}\n    CURRENT: ${item[c.key] || '(missing)'}`;
  }).join('\n');

  const path = `${OUTDIR}/${item.serviceId}.json`;

  return `${SPEC}

SERVICE: ${item.serviceId}

GOLD (service-page directAnswer — mirror its descriptor/verb/credential framing, swap the city):
  ${item.gold}

THE THREE COMBO directAnswers to reframe (preserve each city’s OWN specifics):
${lines}

TASK: Produce the THREE reframed directAnswer strings (one per city), each obeying all HARD RULES. Then use the Write tool to write EXACTLY this file (valid JSON, UTF-8, no markdown fence):

PATH: ${path}
CONTENT shape:
{
  "serviceId": "${item.serviceId}",
  "newark": "<reframed Newark directAnswer>",
  "eastOrange": "<reframed East Orange directAnswer>",
  "orange": "<reframed Orange directAnswer>",
  "notes": "<one line: what you changed / any judgment call>"
}

Keep apostrophes and em-dashes as normal characters in the JSON string values (JSON-escape only the quote and backslash — do NOT use \\' ). The bolded **...** markdown stays literally in the string. After writing, return ONE line confirming the path and that all three obey the ≤40-word bold-span rule.`;
}

phase('Reframe');

const results = await parallel(
  PAYLOAD.map((item) => () =>
    agent(promptFor(item), { label: `reframe:${item.serviceId}`, phase: 'Reframe' })
  )
);

const ok = results.filter(Boolean).length;
log(`reframe agents completed: ${ok}/${PAYLOAD.length}`);
return { completed: ok, total: PAYLOAD.length };
