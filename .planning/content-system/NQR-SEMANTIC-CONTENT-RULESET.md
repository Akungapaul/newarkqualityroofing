# NQR Semantic Content Ruleset

> Canonical writing + audit standard for every Newark Quality Roofing (NQR) page and KB article. Answer-first semantic SEO. Any writer or auditor follows this verbatim. Pilot reference: the Roof Repair service page (`slug: roof-repair`).
>
> **Companion files:** verified facts and citable authorities live in `.planning/content-system/research/sources-and-nqr-facts.md` (Source Register Part A = cite-by-name authorities; Part B = NQR business facts with provenance flags). Statistics with provenance live in the `facts-*.md` research files. Page architecture lives in `map-template.md` + `map-prose-schema.md`.
>
> **D-01 hard rule overrides everything below:** no placeholder or fabricated trust value renders in HTML or JSON-LD. If a canonical value is unknown, OMIT it — never placeholder, never invent. A statistic flagged `[UNVERIFIED]` in the research files is stated qualitatively or dropped, never as a hard number.

---

## SECTION 1 — Non-Negotiable Rules (numbered checklist)

1. **Every heading is phrased as a question.** Search engines reframe headings as questions, so write them that way explicitly ("How Do You Repair a Leaking Roof in Newark?", not "Roof Leak Repair"). — *Verify:* read every `<h2>`/`<h3>`; each ends in `?` and is a grammatical question.

2. **The first sentence under each heading is a definitive factual answer, ≤40 words / ~320 characters.** It directly answers the heading question before any expansion. — *Verify:* sentence 1 word count ≤40 and char count ≤320; it answers the heading, not background.

3. **The answer text is bolded — not the search term.** Wrap the factual answer span in `**`, never the keyword for its own sake. — *Verify:* the bolded span is the answer clause; the bare keyword alone is not the only thing bolded.

4. **Heading and answer share opening structure** ("How to do X" → "To do X, …"; "What is X?" → "X is …"; "How much does X cost?" → "X costs …"). The answer mirrors the question's adjective/noun/predicate order. — *Verify:* the answer's first words map to the question's grammatical form, not "X is known for…".

5. **State established facts, never predictions or opinions.** Write "X does Y" / "Asphalt shingles last 15–30 years", not "X is known for Y" or "shingles will probably last". — *Verify:* every claim is a present-tense established fact, not a forecast or judgment.

6. **No modality words: `will`, `should`, `need to`, `have to` (and `must`, `can`, `might`, `may` as hedges).** These signal opinion, not fact. — *Verify:* grep the prose for `will|should|need to|have to|must|might`; each hit is removed or rewritten to indicative present tense.

7. **Every information point carries an exact number, percentage, or statistic.** Quantify wherever a verified figure exists ("NJ leak repair costs $400–$1,000", "~90–95% of leaks originate at flashing"). — *Verify:* each paragraph/list item contains a figure or names the qualified count; vague intensifiers ("a lot", "very long") are absent.

8. **Plural nouns are qualified with a count** ("6 common causes", "3 warning signs", "5 roofing materials"). — *Verify:* every enumerated set is introduced by its exact integer count, and the count matches the number of items that follow.

9. **Authorities are cited by name in-text, never hyperlinked out** ("According to the NRCA, …", "Per the NJ Uniform Construction Code, …"). A plain, unlinked source list may sit at the page foot. — *Verify:* in-text citations name a Source-Register Part-A authority; zero outbound `<a href>` to external domains in body prose.

10. **No fabricated or unverified numbers render.** Use only figures present (and not flagged `[UNVERIFIED]`/`[VERIFY]`) in the research files; otherwise state the fact qualitatively or omit it. — *Verify:* cross-check every hard number against `facts-*.md` / `sources-and-nqr-facts.md`; any `[VERIFY]`/`[UNVERIFIED]` figure is omitted or de-quantified.

11. **Delete every word that does not change meaning.** Shortest sentence that carries the fact; "as short as possible, as long as necessary." — *Verify:* removing any remaining word would lose a fact; no filler, throat-clearing, or restatement remains.

12. **No everyday/casual language and no analogies.** No "basically", "a roof is like an umbrella", "at the end of the day". — *Verify:* scan for colloquialisms and `like a`/`as if`/`imagine` analogy framings; none present.

13. **Name entities and their attributes; use no pronoun that co-refers back to an entity.** Repeat "the flashing", "the underlayment", "Newark" rather than "it"/"they"/"there". — *Verify:* every "it/they/this/that/these/those/there" either has no entity antecedent or is replaced by the named entity.

14. **No power, sentiment, or hype words.** Ban "best", "amazing", "trusted", "leading", "premier", "unbeatable", "love", "stunning". — *Verify:* grep for the banned sentiment list; each hit is removed (brand trust claims live only in branded CTAs, not semantic prose).

15. **Do not add a sentence without a logical reason; combine facts that share a subject.** Two facts about "the flashing" become one sentence, not two. — *Verify:* no adjacent sentences share a subject that could merge without loss; each sentence advances the context.

16. **Put `if`/`because` constraints in the second half of the sentence** ("Repair the flashing, if corrosion covers under 30% of the area" — not "If corrosion…, repair…"). — *Verify:* conditional/causal clauses follow the main declaration, not precede it.

17. **Give examples after a plural noun, inline** ("3 materials: asphalt, slate, metal"). — *Verify:* example lists are introduced by the counted plural noun + colon, then the items.

18. **Respect singular/plural precision** ("a single warning sign" vs "6 warning signs"); subject–verb agreement matches the count. — *Verify:* noun number and verb agree with the stated count throughout.

19. **One macro context per page; a linear context vector from H1 to the final heading.** A roof-repair money page stays about roof repair end to end; context never jumps topic mid-section. — *Verify:* every heading descends logically from the H1 topic; no heading introduces an unrelated macro topic.

20. **Repeat the key n-gram near the start and near the end of the page,** and order declarations logically (definition → causes → signs → process → cost). — *Verify:* the primary n-gram ("roof repair", "roof repair in Newark") appears in the opening answer and in the closing section.

21. **Do not break context across paragraphs.** Each paragraph continues the prior one's subject thread; no orphan paragraph. — *Verify:* read consecutive paragraphs; each shares a context link (entity, process step, or cost dimension) with the one before.

22. **Split MAIN (money) vs SUPPLEMENTARY (informational) content; the money page stays focused.** Topic depth (full cause breakdowns, material deep-dives) lives in linked KB articles, not the service page. — *Verify:* the service page covers the conversion-relevant summary; exhaustive depth is delegated to a linked supporting article (no duplicate full treatments → no self-cannibalization).

23. **Internal-link anchor text appears in BOTH the source heading and the target page title.** Link to `targetURL#identifier`; link templatic siblings and antonyms; use `next/link`, never raw `<a href>`. — *Verify:* each internal anchor's text is a substring of the target page's `<title>`/H1; link uses `next/link` + optional `#fragment`.

24. **CTAs are branded and visually distinct from semantic content; CTA copy never enters the context vector.** Keep `#lead-form` above the fold. — *Verify:* CTA copy ("Schedule Your Free Inspection") sits in a CTA component, not in body prose, and is excluded from the answer/heading vector; `#lead-form` renders above the fold.

25. **Facts are identical across every page, schema, GBP, and citations (brand consistency).** Phone, hours, service area, license type, price ranges, and figures match the canonical `site-config.ts` everywhere. — *Verify:* spot-check a repeated fact (e.g., hours, service area = Essex County) across two pages + JSON-LD; values are byte-identical.

26. **One `<h1>` per page; strict heading hierarchy (h1 > h2 > h3, no skips).** — *Verify:* exactly one `<h1>`; no `<h3>` appears without a parent `<h2>`; no level is skipped.

---

## SECTION 2 — Content-Component Vocabulary (templates)

Each component carries one fact-unit. Bold the **answer**, not the keyword. Cite authorities by name. Use only verified figures.

### Definition
Names the entity and states what it is, in indicative present tense.
> **Template:** `[Entity] is [class] that [function/attribute].`
> **NQR example:** "Roof flashing is **the sheet-metal sealing the transitions and penetrations of a roof** — chimneys, valleys, and vent stacks. Flashing failure causes roughly 90–95% of roof leaks, per trade data attributed to the NRCA."

### Featured-Snippet Answer (≤40 words / ~320 chars)
The first sentence under a heading, snippet-shaped, bolded.
> **Template (heading → answer):** `H2: "What Causes Most Roof Leaks?"` → "**Most roof leaks originate at the flashing — the metal sealing roof transitions and penetrations.** Field-shingle failures cause only ~5–10% of leaks; the remaining ~90–95% trace to flashing, per trade data attributed to the NRCA."

### PAA Answer (one definitive sentence)
Answers a People-Also-Ask-style sub-question in a single self-contained sentence.
> **Template:** `[Subject] [verb] [quantified fact].`
> **NQR example:** "**Roof leak repair in New Jersey costs $400–$1,000**, roughly 10–15% above the national average."

### Listing + List Item + List Outro
Ordered/unordered list where every item starts with the same part of speech (verb+noun for actions, noun for things). Each item is a "Declaration: Evidence" unit where possible. Closed by an outro that restates the count or links onward.
> **Listing intro (counted plural + colon):** "6 components fail and cause roof leaks:"
> **List item template (parallel verb+noun, with figure):**
> - "Flashing corrodes at chimneys and valleys — flashing accounts for ~90–95% of leaks."
> - "Field shingles crack, curl, and lose granules — shingle failure causes only ~5–10% of leaks."
> - "Underlayment tears under wind-driven rain, exposing the deck within one storm cycle."
> **List outro:** "These 6 failure points define the scope of a Newark roof-leak repair."

### Table + Table Definition + Table Outro
A table is ALWAYS preceded by a context/definition sentence and ALWAYS closed by an outro sentence.
> **Table definition (precedes):** "Roof-repair cost in New Jersey varies by damage type, as the 3 ranges below show:"
> **Table:**
> | Repair type | NJ cost range | vs. national |
> |---|---|---|
> | Leak repair | $400–$1,000 | +10–15% |
> | Flashing replacement | (omit until verified) | — |
> | Coastal premium | +15–20% | salt-air exposure |
> **Table outro (closes):** "These NJ ranges sit ~10–40% above national averages because of higher labor and stricter NJ code."

### Declaration : Evidence (list item form)
A claim followed by its quantified or named-authority proof, in one item.
> **Template:** `[Declaration] — [statistic OR named authority].`
> **NQR example:** "Asphalt shingles dominate NJ residential roofing — asphalt holds ~73% of the U.S. residential market (2024 trade data)."

### Comparison Proposition
States a relationship between two templatic siblings or antonyms with a decision threshold.
> **Template:** `[Option A] over [Option B] when [quantified condition].`
> **NQR example:** "Roof replacement over roof repair when damage exceeds 25–30% of the roof area (the contractor-consensus '25% rule'), or when repair cost approaches 50% of replacement cost (the '50% rule')."

### Statistical Evidence
A standalone quantified fact attributed to a named authority, no outbound link.
> **Template:** `[Quantified fact], per [named authority].`
> **NQR example:** "Sealing the roof deck cuts water intrusion by up to 95%, per the IBHS." / "Wind and hail are the largest homeowners-claim type at ~2.8% of insured homes per year, per Triple-I."

---

## SECTION 3 — BANNED List

Nothing below appears in semantic body prose (headings, answers, lists, tables). Branded CTA components are the only exception for trust phrasing, and CTA copy stays out of the context vector.

**Modality / opinion signals (Rule 6):**
- `will`, `should`, `need to`, `have to`, `must`, `might`, `may` (as hedges), `would`, `could`
- Rewrite to indicative present: "shingles last 15–30 years", not "shingles should last…".

**Opinion & judgment:**
- "is known for", "we believe", "arguably", "in our opinion", "the best choice", "ideal", "perfect"

**Casual / everyday language:**
- "basically", "a ton of", "stuff", "things", "at the end of the day", "when it comes to", "kind of", "pretty much", "you guys"

**Analogies & figurative framing:**
- "a roof is like an umbrella", "think of flashing as…", "imagine…", `like a`, `as if`, metaphors of any kind

**Outbound citation links:**
- No `<a href>` to NRCA, ARMA, manufacturers, or any external domain in body prose. Cite by name only; a plain unlinked source list may sit at the page foot (preserves link equity).

**Pronoun co-reference to entities (Rule 13):**
- "it", "they", "them", "this", "that", "these", "those", "there" when the antecedent is a named entity — repeat the entity ("the flashing", "the underlayment", "Newark") instead.

**Power / sentiment / hype words (Rule 14):**
- "best", "amazing", "trusted", "leading", "premier", "top-rated", "unbeatable", "world-class", "stunning", "love", "incredible", "exceptional", "renowned", "cutting-edge", "game-changing"

**Fabricated / unverified figures (Rule 10, D-01):**
- Any number flagged `[VERIFY]` or `[UNVERIFIED]` in the research files (e.g., "500+ projects", invented failure-share percentages, fabricated ratings, placeholder license/phone numbers). Omit or state qualitatively — never placeholder, never invent.

---

## Quick audit pass (run in order)
1. Headings all end in `?` (Rule 1, 26). 2. First sentence ≤40 words, answer bolded (Rules 2, 3, 4). 3. Grep `will|should|need to|have to|must|might` → zero (Rule 6). 4. Every point has a verified figure or named authority (Rules 7, 9, 10). 5. Counts qualify plurals (Rule 8). 6. Grep sentiment/casual/analogy bans → zero (Rules 12, 14). 7. Grep entity-pronouns → zero (Rule 13). 8. Tables wrapped in definition + outro (Section 2). 9. Internal anchors match target titles; `next/link` only (Rule 23). 10. CTA copy isolated; `#lead-form` above fold (Rule 24). 11. Repeated facts match `site-config.ts` (Rule 25).
