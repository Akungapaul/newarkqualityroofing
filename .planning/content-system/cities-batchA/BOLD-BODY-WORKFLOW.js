export const meta = {
  name: 'cities-batchA-bold-body',
  description: 'Add **bold** around the DEVELOPED TOPIC in each follow-up BODY paragraph of the 4 prose sections (overview[1..], residential.content[1..], commercial.content[1..], weatherChallenges.content[1..]), tying each body paragraph to the lead topic it develops. Insert ONLY ** markers — change no other character. The already-bolded leads and FAQ answers stay as-is.',
  phases: [ { title: 'BoldBody', detail: 'one agent per city → <cityId>.snippet.ts' } ],
}

const PROJECT = '/Users/akungapaul/Projects/Newarkqualityroofing';
const OUT = `${PROJECT}/.planning/content-system/cities-batchA`;
const SOURCE = `${PROJECT}/src/data/city-content/urban-core.ts`;

const RULES = `
You are a typographic editor. READ ${SOURCE}, find the object whose cityId matches your assignment. The leads and FAQ answers are ALREADY bolded (** present). Your ONLY job now: add **bold** around the DEVELOPED TOPIC in each follow-up BODY paragraph, so the bolded topic in the lead reappears bolded where the body develops it. Insert "**" markers only; change NO other character.

WHERE TO BOLD (the body paragraphs of the 4 follow-through arrays):
- overview[1], overview[2], ... (every element AFTER overview[0]) — each body paragraph develops one of the lead's topics; bold that topic where the paragraph introduces it (e.g. the paragraph that develops wind: "**Nor'easter wind** loads a Newark roof first..."; the freeze-thaw paragraph: "**Freeze-thaw cycling** follows the wind..."; the flashing paragraph: "**Dense party-wall flashing** carries the heaviest leak load...").
- residential.content[1..], commercial.content[1..], weatherChallenges.content[1..] — same: bold the topic each body paragraph develops (the material track, the membrane system, the stressor), at its first mention in that paragraph. 1-2 bold spans per paragraph max (the paragraph's subject topic; optionally one more key entity it introduces). Match the wording the lead bolded where possible (so "nor'easter wind" / "freeze-thaw cycling" read consistently).

DO NOT touch / DO NOT add **:
- overview[0], residential.content[0], commercial.content[0], weatherChallenges.content[0] (the leads — already bolded, leave their ** exactly as-is).
- faqs (already bolded — leave exactly as-is).
- neighborhoods, projectSpotlights, whyChoose, pricing, metaTitle, metaDescription, credentialsHighlight, directAnswer, headings (no ** — leave exactly as-is).

HARD CONSTRAINTS:
- Insert ONLY the ** pattern around a span. Every ** opened is closed. No nesting, no single-asterisk italics.
- Do not change wording, order, numbers, named sources, punctuation, or string delimiters. A diff that strips all ** from your output MUST equal the current object byte-for-byte.
- Keep each bold span to the topic ENTITY (≤6 words), not a whole sentence.
`;

const SNIPPET_SPEC = `
OUTPUT — write TWO files:
(A) ${OUT}/<cityId>.snippet.ts — the COMPLETE object literal with ** ADDED in the body paragraphs (and all existing lead/FAQ ** preserved, everything else byte-identical). Start with "// ─── <City Name> ───" then "{" and end "},". Concatenates as one array element.
(B) ${OUT}/<cityId>.boldbody.md — list each body span you bolded, grouped by section.
SELF-AUDIT: (1) strip all ** mentally → equals the current object byte-for-byte (no word/number/punctuation changed); (2) every body paragraph of the 4 follow-through sections now bolds the topic it develops; (3) leads + FAQs + directAnswer ** unchanged; (4) NO ** added to neighborhoods/spotlights/whyChoose/pricing/meta.
Return a JSON summary (do not paste the whole snippet back).
`;

const CITIES = [ { id: 'newark', name: 'Newark' }, { id: 'east-orange', name: 'East Orange' }, { id: 'orange', name: 'Orange' }, { id: 'irvington', name: 'Irvington' } ];

phase('BoldBody');
const SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['cityId', 'wrote', 'bodySpans', 'stripEqualsOriginal', 'leadsAndFaqsUntouched'],
  properties: {
    cityId: { type: 'string' }, wrote: { type: 'array', items: { type: 'string' } },
    bodySpans: { type: 'array', items: { type: 'string' }, description: 'each newly bolded body span, grouped by section' },
    stripEqualsOriginal: { type: 'string', description: 'confirm stripping all ** yields the current object byte-for-byte' },
    leadsAndFaqsUntouched: { type: 'string', description: 'confirm the lead/FAQ/directAnswer existing ** were preserved unchanged and no ** added to non-body fields' },
  },
};
const results = await parallel(CITIES.map((c) => () =>
  agent(`Bold the developed topic in each follow-up BODY paragraph for "${c.name}" (cityId: ${c.id}) in urban-core.ts. Insert ** markers only.\n\n${RULES}\n${SNIPPET_SPEC}`,
    { label: `boldbody:${c.id}`, phase: 'BoldBody', schema: SCHEMA })
));
return { bolded: results.filter(Boolean) };
