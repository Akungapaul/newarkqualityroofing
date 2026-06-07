# Orange (cityId: orange) — body-paragraph bold spans added

Body bolds added to the 4 follow-through arrays. Leads (overview[0], residential.content[0],
commercial.content[0], weatherChallenges.content[0]), FAQs, directAnswer, neighborhoods,
projectSpotlights, whyChoose, pricing, and meta were left byte-identical (their pre-existing ** preserved).

## overview (skipped overview[0] lead)
- overview[1]: **Tight-lot access** — develops the lead's tight-lot-access stressor
- overview[2]: **Low-lying stormwater** — develops the lead's low-lying stormwater/moisture stressor
- overview[3]: **Tree debris** — develops the lead's tree-debris stressor

## residential.content (skipped content[0] lead)
- content[1]: **natural slate and copper** — develops the lead's natural-slate-and-copper material track
- content[2]: **asphalt shingles** — develops the lead's asphalt-shingle material track

## commercial.content (skipped content[0] lead)
- content[1]: **EPDM** — develops the lead's EPDM/TPO/modified-bitumen membrane track at first mention
- content[1]: **Main Street commercial corridor** — second key entity the paragraph introduces
- content[2]: **Main Street low-slope roof** — develops the Main Street low-slope drainage subject

## weatherChallenges.content (skipped content[0] lead)
- content[1]: **31.5 inches of snow** — develops the lead's snow stressor (wording matched to lead)
- content[1]: **freeze-thaw cycling** — develops the lead's freeze-thaw stressor (wording matched to lead)
- content[2]: **Nor'easters** — develops the lead's nor'easter stressor (wording matched to lead)
- content[2]: **25 to 30 thunderstorms** — develops the lead's thunderstorm stressor (wording matched to lead)

## Self-audit
1. Stripping all ** from orange.snippet.ts (minus the leading comment line) diffs against
   urban-core.ts lines 382-574 with differences ONLY on pre-existing lead/FAQ/directAnswer
   bold lines; every body paragraph I bolded strips back to the source byte-for-byte. PASS.
2. All 9 body paragraphs of the 4 follow-through sections now bold the topic each develops. PASS.
3. Leads + FAQs + directAnswer ** unchanged. PASS.
4. No ** added to neighborhoods / projectSpotlights / whyChoose / pricing / meta / headings. PASS.
5. ** marker count = 78 (even; all spans closed, no nesting). PASS.
