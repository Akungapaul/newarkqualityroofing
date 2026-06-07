# Newark — Body Bold Spans Added (cityId: newark)

Body bolds added to the developed topic in each follow-up body paragraph of the 4 follow-through arrays. Lead (index 0), FAQ, and directAnswer ** preserved unchanged. No ** added to neighborhoods / projectSpotlights / whyChoose / pricing / meta.

## overview (body paragraphs after overview[0])
- overview[1] — **Nor'easter wind** (develops the lead's nor'easter-wind stressor)
- overview[2] — **Freeze-thaw cycling** (develops the lead's freeze-thaw stressor)
- overview[3] — **Dense party-wall flashing** (develops the lead's flashing stressor)

## residential.content (body paragraphs after content[0])
- residential.content[1] — **Asphalt shingles** (develops the steep-slope asphalt track)
- residential.content[2] — **EPDM and TPO membranes** (develops the flat-roof membrane track)

## commercial.content (body paragraphs after content[0])
- commercial.content[1] — **EPDM** (develops the membrane-lifespan / seam-failure track)
- commercial.content[2] — **low-slope roof** (develops the slope/drainage requirement)

## weatherChallenges.content (body paragraphs after content[0])
- weatherChallenges.content[1] — **Snow**; **Freeze-thaw cycling** (the two stressors this paragraph develops)
- weatherChallenges.content[2] — **Nor'easter wind**; **Summer storms** (the two stressors this paragraph develops)

## Self-audit
1. Stripping all ** from newark.snippet.ts is byte-identical to the source object (lines 10–195 of urban-core.ts) — verified via diff (IDENTICAL).
2. Every body paragraph of the 4 follow-through sections now bolds the topic it develops.
3. Lead (index 0) + FAQ + directAnswer ** unchanged (directAnswer 6=6; faqs 30=30).
4. No ** added to neighborhoods (0), projectSpotlights (0), whyChoose/meta/pricing (0).
5. Total ** count = 78 (even / all balanced).
