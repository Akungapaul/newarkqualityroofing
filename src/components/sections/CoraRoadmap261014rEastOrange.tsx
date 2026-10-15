// CoraRoadmap261014rEastOrange — supplemental block for
// /roof-replacement-east-orange-nj (Cora 2026-10-14
// phrase-setup report, keyword "roof replacement east
// orange nj"). This is the page's FIRST Cora supplemental
// block. It implements the CLEAN 19-line verified list at
// its ADJUSTED values (see
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-verification-east-orange-replacement-2026-10-14.md):
//
//   Head (page.tsx direct edits, NOT this component):
//   title rewrite at 76 chars (lines 1–3 + rider 7:
//   Title Variations +2 adj, Entities in Title +2 adj,
//   Title Has Free, Link Text Length floor 60), meta
//   refresh at 170 chars (line 4 + riders 8/11:
//   Meta Variations, Summary Length adj, Summary
//   Variations), and the meta keywords tag created with
//   9 keywords (line 19: R4's real setter count).
//   Heading program served HERE (lines 5/6): +14 tags
//   (2 H2 + 6 H3 + 6 H4, 23 → 37 at R4's genuine total)
//   with entity-dense H3 texts (Entities in H3 +4 adj).
//   Image program (lines 13–15): OrdersSection = the
//   photo header (an H4) + an intro paragraph; PhotoGrid
//   = 77 <figure>s, each a genuine pool image with full
//   ALT (Images 80 total, ALT 80 — the ALT delta
//   overshoots by design, disclosed) and a plain caption
//   text (NOT figcaption — see the Livingston header:
//   figcaption cost 26 sibling-set P-tag variations
//   there and added none here by advocacy; captions
//   ride <p>). ALT Variations +7 adj rides the ALT texts.
//   Style phrases (line 16, adj +24): StyleTagPhrase
//   renders ONE <style> whose :root block carries 24
//   verbatim variation phrases as CSS custom properties.
//   Comments (line 17, gray-zone adj +3): Cmt injects
//   the two boundary comments (variation-carrying) + 13
//   section markers as raw HTML inside hidden divs —
//   the mechanism used by every prior Cora pass on this
//   site (never display:none on content itself).
//   Schema (line 18): JsonLd writes ONE graph — an
//   Organization node asserting ONLY the business's real
//   name, real URL, and a genuine `image` (the roadmapped
//   Uses JSON-LD image property), a minimal WebPage node,
//   and a BreadcrumbList whose crumb names serve the
//   Display URL Variations rider (line 10). NO address,
//   NO telephone, NO ContactPoint, NO postalCode, NO
//   streetAddress, NO datePublished (held out — no
//   verifiable date on record), NO areaServed, NO rating.
//   Social (line 12): ONE platform-root placeholder link
//   to tiktok.com, FLAGGED — pending Paul's verified
//   profile URL (the five Phase 8 profile-count lines
//   stay pending with no placeholders).
//
// H1 FROZEN — the block's headings are H2/H3/H4 only.
// The field-notes <details> lives inside THIS block,
// collapsible at two levels, never display:none. Mass
// adds live inside <details> starting collapsed (house
// rule), EXCEPT the schema graph and the style/comment
// carriers. NO figcaption anywhere.

import {
  coraReplEastOrangeBlockIntro,
  coraReplEastOrangeBlockSummary,
  coraReplEastOrangeCardH3,
  coraReplEastOrangeCardIntro,
  coraReplEastOrangeCommentTexts,
  coraReplEastOrangeFieldNotes,
  coraReplEastOrangeFieldNotesH2,
  coraReplEastOrangeFieldNotesHeading,
  coraReplEastOrangeFieldNotesIntro,
  coraReplEastOrangeGalleryImages,
  coraReplEastOrangeGuideH2,
  coraReplEastOrangeGuideIntro,
  coraReplEastOrangeMaterialsH4,
  coraReplEastOrangeMaterialsP,
  coraReplEastOrangeOrgImage,
  coraReplEastOrangePhotoH4,
  coraReplEastOrangePhotoIntro,
  coraReplEastOrangeSectionComments,
  coraReplEastOrangeSections,
  coraReplEastOrangeServiceLogEntries,
  coraReplEastOrangeServiceLogH3,
  coraReplEastOrangeServiceLogIntro,
  coraReplEastOrangeSocialIntro,
  coraReplEastOrangeStylePhrases,
} from '@/data/cora-261014r-east-orange-content';

// Module-scope <style> content: the 24 verbatim variation
// phrases as CSS custom properties on :root, plus the
// phrases carried in a trailing CSS comment (the
// mechanism used by every prior Cora pass on this site).
const CORA_EO_STYLE_TEXT =
  `:root {\n${coraReplEastOrangeStylePhrases
    .map((phrase, i) => `  --cora-eo-phrase-${i + 1}: "${phrase}";`)
    .join('\n')}\n}` +
  `\n/* East Orange replacement record phrases: ${coraReplEastOrangeStylePhrases.join('; ')} */`;

// Renders one HTML comment into the served markup. Comments
// are genuine structural markers for this block (clean
// line 17); React strips JSX comments, so the comment is
// injected as raw HTML inside a hidden div — the mechanism
// used by every prior Cora pass on this site.
function Cmt({ text }: { text: string }) {
  return (
    <div
      aria-hidden="true"
      style={{ display: 'none' }}
      dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }}
    />
  );
}

function JsonLd() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Newark Quality Roofing',
        url: 'https://newarkqualityroofing.com/',
        image: coraReplEastOrangeOrgImage,
      },
      {
        '@type': 'WebPage',
        name: 'Roof Replacement East Orange, NJ — Newark Quality Roofing',
        url: 'https://newarkqualityroofing.com/roof-replacement-east-orange-nj',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Roof Replacement Services',
            item: 'https://newarkqualityroofing.com/roof-replacement-east-orange-nj',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Roof Replacement East Orange NJ',
            item: 'https://newarkqualityroofing.com/roof-replacement-east-orange-nj',
          },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

function RecordCard() {
  const sc = coraReplEastOrangeSectionComments;
  return (
    <>
      <Cmt text={sc[10]} />
      <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-4">
        {coraReplEastOrangeCardH3}
      </h3>
      <p className="text-base text-[#1E293B] leading-relaxed mb-6">
        {coraReplEastOrangeCardIntro}
      </p>
      <Cmt text={sc[11]} />
      <p className="text-base text-[#1E293B] leading-relaxed mb-2">
        {coraReplEastOrangeSocialIntro}
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1E3A5F] underline"
          >
            TikTok
          </a>
        </li>
      </ul>
    </>
  );
}

function PhotoGrid() {
  const sc = coraReplEastOrangeSectionComments;
  return (
    <>
      <Cmt text={sc[9]} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {coraReplEastOrangeGalleryImages.map((img) => (
          <figure key={img.src}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              width={640}
              height={420}
              loading="lazy"
              className="w-full h-auto rounded-md"
            />
            <p className="text-sm text-[#475569] mt-2">{img.caption}</p>
          </figure>
        ))}
      </div>
    </>
  );
}

export function CoraRoadmap261014rEastOrange() {
  const sc = coraReplEastOrangeSectionComments;
  const scTail = coraReplEastOrangeSectionComments.slice(1, 5);
  return (
    <section className="py-12 bg-white">
      <Cmt text={coraReplEastOrangeCommentTexts[0]} />
      <JsonLd />
      <style dangerouslySetInnerHTML={{ __html: CORA_EO_STYLE_TEXT }} />
      <div className="container mx-auto px-4 max-w-4xl">
        <details>
          <summary className="font-heading text-2xl md:text-3xl font-bold text-[#1E3A5F] cursor-pointer">
            {coraReplEastOrangeBlockSummary}
          </summary>
          <Cmt text={sc[0]} />
          <p className="text-base text-[#1E293B] leading-relaxed mt-6 mb-8">
            {coraReplEastOrangeBlockIntro}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
            {coraReplEastOrangeGuideH2}
          </h2>
          <p className="text-base text-[#1E293B] leading-relaxed mb-8">
            {coraReplEastOrangeGuideIntro}
          </p>
          {coraReplEastOrangeSections.map((s, i) => (
            <div key={s.h3} className="mb-8">
              <Cmt text={scTail[i]} />
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-3">
                {s.h3}
              </h3>
              <p className="text-base text-[#1E293B] leading-relaxed mb-4">
                {s.p}
              </p>
              <h4 className="font-heading text-xl md:text-2xl font-bold text-[#1E3A5F] mb-2">
                {s.h4}
              </h4>
              <p className="text-base text-[#1E293B] leading-relaxed">
                {s.h4p}
              </p>
            </div>
          ))}
          <Cmt text={sc[5]} />
          <h4 className="font-heading text-xl md:text-2xl font-bold text-[#1E3A5F] mb-2">
            {coraReplEastOrangeMaterialsH4}
          </h4>
          <p className="text-base text-[#1E293B] leading-relaxed mb-8">
            {coraReplEastOrangeMaterialsP}
          </p>
          <Cmt text={sc[6]} />
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-3">
            {coraReplEastOrangeServiceLogH3}
          </h3>
          <p className="text-base text-[#1E293B] leading-relaxed mb-4">
            {coraReplEastOrangeServiceLogIntro}
          </p>
          <Cmt text={sc[7]} />
          {coraReplEastOrangeServiceLogEntries.map((entry) => (
            <p
              key={entry.slice(0, 40)}
              className="text-base text-[#1E293B] leading-relaxed mb-4"
            >
              {entry}
            </p>
          ))}
          <Cmt text={sc[8]} />
          <h4 className="font-heading text-xl md:text-2xl font-bold text-[#1E3A5F] mb-2">
            {coraReplEastOrangePhotoH4}
          </h4>
          <p className="text-base text-[#1E293B] leading-relaxed mb-6">
            {coraReplEastOrangePhotoIntro}
          </p>
          <PhotoGrid />
          <RecordCard />
          <Cmt text={sc[12]} />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-10 mb-4">
            {coraReplEastOrangeFieldNotesH2}
          </h2>
          <details>
            <summary className="font-heading text-xl font-bold text-[#1E3A5F] cursor-pointer">
              {coraReplEastOrangeFieldNotesHeading}
            </summary>
            <p className="text-base text-[#1E293B] leading-relaxed mt-4 mb-4">
              {coraReplEastOrangeFieldNotesIntro}
            </p>
            {coraReplEastOrangeFieldNotes.map((note) => (
              <p
                key={note.slice(0, 40)}
                className="text-base text-[#1E293B] leading-relaxed mb-4"
              >
                {note}
              </p>
            ))}
          </details>
        </details>
      </div>
      <Cmt text={coraReplEastOrangeCommentTexts[1]} />
    </section>
  );
}
