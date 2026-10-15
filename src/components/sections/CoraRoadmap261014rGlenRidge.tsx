// Cora 2026-10-14 phrase roadmap — SUPPLEMENTAL BLOCK for the
// GLEN RIDGE roof REPLACEMENT page
// (/roof-replacement-glen-ridge-nj, keyword
// "roof replacement glen ridge nj").
//
// This is the page's FIRST Cora component: the page is a plain
// Oct-4 combo page (13 headings, 11 images, six genuine FAQ
// questions invisible to heading counters — all six in
// <summary> elements). This block implements the CLEAN 72
// lines of the verification file at their adjusted values
// (clean list in
// cora-phrase-verification-glen-ridge-replacement-2026-10-14.md;
// the title/meta/keywords clean lines 1–18 + 72 are served via
// the page.tsx override for this slug from the same data file).
//
// Heading program (clean lines 19–35): the block carries
// exactly +26 headings — 2 H2 + 6 H3 + 17 H4 + 1 H6
// (13 → 39, priced off R4's tracked total; genuine-only floor
// +15 off R5 disclosed in the verification): 5 guide sections
// as genuine <article> elements (H3 + H4), the questions
// lead-in H3 + FIVE of the page's OWN six FAQ questions
// verbatim as H4s with the page's own answers (Questions in
// H4 +5, R5-genuine headline — no question invented), 2
// subsection H4s, the photo H4, the card H4, the resources
// H4, the social H4, the field-notes H2 + H4, and one
// entity-carrying H6 in the card. The page's H1 is NOT
// touched (H1 frozen; the two H1-bucket lines are
// flagged-open in the verification).
//
// Content program (clean lines 36–40): the block's sentences
// carry 'glen ridge roofing' +22 (R5-genuine headline), the
// 'roof replacements' / 'replacements' singles at +3, P Tags
// at the adjusted +6 by real paragraphs (delivered count
// reported as measured), and the Distinct Entities residue
// at +2 by genuine manufacturer/material/place naming. This
// run's LSI terms are written into sentences in the field
// notes (standing practice; the LSI pair itself is the
// frozen constant, never chased).
//
// Schema (clean lines 53–70 — ONE build, ONLY roadmapped
// properties): a JSON-LD graph with an Organization node
// (PostalAddress of addressLocality "Newark" — the
// business's OWN published home city; Glen Ridge is
// asserted only as this page's service area, never as the
// business address — addressRegion NJ, addressCountry US,
// telephone = the business's real published phone, hasMap =
// the Google Maps QUERY URL for the business, the Montclair
// treatment, FLAGGED) and a Service node (serviceUrl = this
// page, areaServed "Glen Ridge, NJ", provider → the
// Organization, hasOfferCatalog of the replacement services
// this page publishes, with Offer entries valued only with
// the page's own facts — NO prices invented). The microdata
// mirror is the service-area card (itemscope Organization +
// PostalAddress itemProps + telephone + areaServed + hasMap
// + serviceUrl + an OfferCatalog/Offer itemscope), which
// doubles as the h-card. NO postalCode, NO streetAddress
// (HELD OUT under D-01), NO rating/AggregateRating (BLOCKED
// under D-01), NO slogan, NO foundingDate, NO reviewBody
// (no honest values on record), NO ContactPoint and NO
// openingHours (not roadmapped in this run).
//
// External links (clean line 46): four genuine references
// (nj.gov / njconsumeraffairs.gov / gaf.com /
// owenscorning.com) plus ONE platform-root placeholder
// (LinkedIn — carried by all four setters), FLAGGED pending
// Paul's verified profile URL.
//
// Images (clean lines 47–48): 17 pool images, ALL with
// genuine ALT (28 images / 28 ALT page-wide), each in a
// <figure> with a plain caption. All srcs /images/…
// (never /public/images/…).
//
// Style variations (clean line 52, +24 on the Shared-Average
// basis): the <style> element below carries the phrases as
// CSS custom properties. Comment variations (clean line 48,
// gray zone at adjusted +3): the two boundary comments carry
// the variation text; section markers are kept phrase-light.
// NAME-attribute variations (clean line 50, rider): three
// genuine variation-named anchors at section boundaries.
// Whole-span variations (clean line 51): three spans whose
// entire text is one verbatim variation form, set as genuine
// labels in the service log.
//
// House pattern (standing): expandable <details> block
// starting collapsed, never display:none.

import { JsonLd } from '@/components/seo/JsonLd';
import {
  coraReplGlenRidgeBlockSummary,
  coraReplGlenRidgeBlockIntro,
  coraReplGlenRidgeGuideH2,
  coraReplGlenRidgeGuideIntro,
  coraReplGlenRidgeSections,
  coraReplGlenRidgeQuestionsH3,
  coraReplGlenRidgeQuestionsIntro,
  coraReplGlenRidgeQuestions,
  coraReplGlenRidgeSubsections,
  coraReplGlenRidgeServiceLogIntro,
  coraReplGlenRidgeServiceLogEntries,
  coraReplGlenRidgePhotoH4,
  coraReplGlenRidgePhotoIntro,
  coraReplGlenRidgeGalleryImages,
  coraReplGlenRidgeCardH4,
  coraReplGlenRidgeCardIntro,
  coraReplGlenRidgeResourcesH4,
  coraReplGlenRidgeResourcesIntro,
  coraReplGlenRidgeResourcesLinks,
  coraReplGlenRidgeSocialH4,
  coraReplGlenRidgeSocialIntro,
  coraReplGlenRidgeFieldNotesH2,
  coraReplGlenRidgeFieldNotesHeading,
  coraReplGlenRidgeFieldNotesH4,
  coraReplGlenRidgeFieldNotesIntro,
  coraReplGlenRidgeFieldNotes,
  coraReplGlenRidgeStylePhrases,
  coraReplGlenRidgeCommentTexts,
  coraReplGlenRidgeSectionComments,
} from '@/data/cora-261014r-glen-ridge-content';

const PAGE_URL = 'https://newarkqualityroofing.com/roof-replacement-glen-ridge-nj';
const MAPS_URL = 'https://www.google.com/maps?q=Newark+Quality+Roofing,+Newark,+NJ';
const PHONE_TEL = '+19736499535';
const PHONE_DISPLAY = '(973) 649-9535';

// Renders one HTML comment into the served markup. Comments
// are genuine structural markers for this block (clean line
// 48); React strips JSX comments, so the comment is injected
// as raw HTML inside a hidden div — the mechanism used by
// every prior Cora pass on this site.
function Cmt({ text }: { text: string }) {
  return (
    <div
      aria-hidden="true"
      style={{ display: 'none' }}
      dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }}
    />
  );
}


// Renders a genuine named anchor (clean line 50 rider — the
// NAME-attribute vehicle). React 19's types no longer accept
// the name attribute on <a>, so it is injected as raw HTML,
// the same mechanism as the comments above.
function NamedAnchor({ name }: { name: string }) {
  return (
    <span
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: `<a name="${name}"></a>` }}
    />
  );
}

export function CoraRoadmap261014rGlenRidge() {
  const styleCss =
    ':root {\n' +
    coraReplGlenRidgeStylePhrases
      .map((p, i) => `  --cora-glen-ridge-phrase-${i + 1}: "${p}";`)
      .join('\n') +
    '\n}\n/* Glen Ridge replacement record phrases: ' +
    coraReplGlenRidgeStylePhrases.join('; ') +
    ' */';

  const blockGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://newarkqualityroofing.com/#organization-glen-ridge-replacement',
        name: 'Newark Quality Roofing',
        url: 'https://newarkqualityroofing.com/',
        telephone: PHONE_TEL,
        hasMap: MAPS_URL,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Newark',
          addressRegion: 'NJ',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'Service',
        '@id': `${PAGE_URL}#service`,
        name: 'Roof Replacement Glen Ridge, NJ',
        serviceType: 'Roof Replacement',
        serviceUrl: PAGE_URL,
        url: PAGE_URL,
        areaServed: 'Glen Ridge, NJ',
        provider: { '@id': 'https://newarkqualityroofing.com/#organization-glen-ridge-replacement' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Roof Replacement Services in Glen Ridge, NJ',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Slate Roof Replacement in Glen Ridge, NJ', url: PAGE_URL },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Architectural Asphalt Roof Replacement in Glen Ridge, NJ', url: PAGE_URL },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Low-Slope Membrane Roof Replacement in Glen Ridge, NJ', url: PAGE_URL },
            },
          ],
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: 'Roof Replacement Glen Ridge, NJ',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Roof Replacement Services', item: 'https://newarkqualityroofing.com/roof-replacement' },
          { '@type': 'ListItem', position: 2, name: 'Roof Replacement Glen Ridge NJ', item: PAGE_URL },
        ],
      },
    ],
  };

  const c = coraReplGlenRidgeSectionComments;

  return (
    <section
      aria-label="Roof replacement in Glen Ridge, NJ — extended guide, questions, photo record, and field notes"
      className="bg-cream py-14"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content="Roof Replacement Glen Ridge, NJ" />
      <meta itemProp="url" content={PAGE_URL} />
      <JsonLd data={blockGraph} />
      <Cmt text={coraReplGlenRidgeCommentTexts[0]} />
      <style dangerouslySetInnerHTML={{ __html: styleCss }} />
      <div className="container mx-auto px-4 max-w-4xl">
        <details className="group border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
          <summary className="cursor-pointer font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplGlenRidgeBlockSummary}
          </summary>

          <NamedAnchor name="roof-replacement-glen-ridge-nj" />
          <Cmt text={c[0]} />
          <p className="mt-4 text-navy/85 leading-relaxed">{coraReplGlenRidgeBlockIntro}</p>

          <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
            {coraReplGlenRidgeGuideH2}
          </h2>
          <p className="mt-3 text-navy/85 leading-relaxed">{coraReplGlenRidgeGuideIntro}</p>

          {coraReplGlenRidgeSections.map((s, i) => (
            <article key={s.h3}>
              <Cmt text={c[1 + i]} />
              <h3 className="mt-8 font-display text-xl md:text-2xl font-semibold text-navy">{s.h3}</h3>
              <p className="mt-2 text-navy/85 leading-relaxed">{s.p}</p>
              <h4 className="mt-5 font-display text-lg font-semibold text-navy">{s.h4}</h4>
              <p className="mt-1 text-navy/85 leading-relaxed">{s.h4p}</p>
            </article>
          ))}

          <NamedAnchor name="glen-ridge-roofing-guide" />
          <Cmt text={c[6]} />
          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplGlenRidgeQuestionsH3}
          </h3>
          <p className="mt-2 text-navy/85 leading-relaxed">{coraReplGlenRidgeQuestionsIntro}</p>
          {coraReplGlenRidgeQuestions.map((q, i) => (
            <div key={q.h4}>
              <Cmt text={c[7 + i]} />
              <h4 className="mt-6 font-display text-lg font-semibold text-navy">{q.h4}</h4>
              <p className="mt-1 text-navy/85 leading-relaxed">{q.p}</p>
            </div>
          ))}

          <Cmt text={c[12]} />
          {coraReplGlenRidgeSubsections.map((s) => (
            <div key={s.h4}>
              <h4 className="mt-6 font-display text-lg font-semibold text-navy">{s.h4}</h4>
              <p className="mt-1 text-navy/85 leading-relaxed">{s.p}</p>
            </div>
          ))}

          <Cmt text={c[13]} />
          <p className="mt-8 text-navy/85 leading-relaxed">{coraReplGlenRidgeServiceLogIntro}</p>
          <p className="mt-3 text-navy/85 leading-relaxed">
            <span className="font-semibold text-navy">Glen Ridge Roofing</span>
            {' · '}
            <span className="font-semibold text-navy">Roof Replacement Glen Ridge NJ</span>
            {' · '}
            <span className="font-semibold text-navy">Glen Ridge Roof Replacement</span>
          </p>
          {coraReplGlenRidgeServiceLogEntries.map((entry) => (
            <p key={entry.slice(0, 48)} className="mt-3 text-navy/85 leading-relaxed">
              {entry}
            </p>
          ))}

          <Cmt text={c[14]} />
          <h4 className="mt-8 font-display text-lg font-semibold text-navy">{coraReplGlenRidgePhotoH4}</h4>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplGlenRidgePhotoIntro}</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {coraReplGlenRidgeGalleryImages.map((img) => (
              <figure key={img.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto rounded" />
                <figcaption className="mt-1 text-sm text-navy/70">{img.caption}</figcaption>
              </figure>
            ))}
          </div>

          <NamedAnchor name="glen-ridge-roof-replacement-record" />
          <Cmt text={c[15]} />
          <h4 className="mt-8 font-display text-lg font-semibold text-navy">{coraReplGlenRidgeCardH4}</h4>
          <div
            className="h-card mt-3 border border-navy/15 rounded-lg bg-white/70 px-5 py-4"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <meta itemProp="serviceUrl" content={PAGE_URL} />
            <meta itemProp="areaServed" content="Glen Ridge, NJ" />
            <p className="text-navy/85 leading-relaxed">
              <span className="p-name" itemProp="name">
                Newark Quality Roofing
              </span>{' '}
              — the business holding the Glen Ridge replacement files above. Its own record for
              this page lives at{' '}
              <a className="u-url underline" itemProp="url" href={PAGE_URL}>
                this Glen Ridge roof replacement record
              </a>
              , and the office is on the map at{' '}
              <a href={MAPS_URL} target="_blank" rel="noopener" className="underline" itemProp="hasMap">
                Newark Quality Roofing on Google Maps
              </a>
              .
            </p>
            <p
              className="mt-2 text-navy/85 leading-relaxed"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              Business locality: <span itemProp="addressLocality">Newark</span>,{' '}
              <span itemProp="addressRegion">NJ</span>, <span itemProp="addressCountry">US</span> —
              serving Glen Ridge and the surrounding Essex County townships from that base.
            </p>
            <p className="mt-2 text-navy/85 leading-relaxed">
              Call the office at{' '}
              <a href={`tel:${PHONE_TEL}`} className="underline" itemProp="telephone">
                {PHONE_DISPLAY}
              </a>{' '}
              for a free written estimate on a Glen Ridge replacement.
            </p>
            <div
              itemProp="hasOfferCatalog"
              itemScope
              itemType="https://schema.org/OfferCatalog"
            >
              <meta itemProp="name" content="Roof Replacement Services in Glen Ridge, NJ" />
              <p className="mt-2 text-navy/85 leading-relaxed">
                The catalog for this page:{' '}
                <span itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                  <span itemProp="itemOffered" itemScope itemType="https://schema.org/Service">
                    <meta itemProp="name" content="Slate Roof Replacement in Glen Ridge, NJ" />
                    slate roof replacement
                  </span>
                </span>
                ,{' '}
                <span itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                  <span itemProp="itemOffered" itemScope itemType="https://schema.org/Service">
                    <meta itemProp="name" content="Architectural Asphalt Roof Replacement in Glen Ridge, NJ" />
                    architectural asphalt roof replacement
                  </span>
                </span>
                , and{' '}
                <span itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                  <span itemProp="itemOffered" itemScope itemType="https://schema.org/Service">
                    <meta itemProp="name" content="Low-Slope Membrane Roof Replacement in Glen Ridge, NJ" />
                    low-slope membrane roof replacement
                  </span>
                </span>{' '}
                in Glen Ridge, New Jersey.
              </p>
            </div>
            <p className="mt-2 text-navy/85 leading-relaxed">{coraReplGlenRidgeCardIntro}</p>
            <p className="mt-2 text-navy/85 leading-relaxed">
              <u>Essex County, New Jersey</u> — the county this record&rsquo;s roofs stand in.
            </p>
            <h6 className="mt-3 text-xs font-semibold uppercase tracking-wide text-navy/60">
              Newark Quality Roofing · Essex County, New Jersey · GAF · Owens Corning
            </h6>
          </div>

          <Cmt text={c[16]} />
          <h4 className="mt-8 font-display text-lg font-semibold text-navy">{coraReplGlenRidgeResourcesH4}</h4>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplGlenRidgeResourcesIntro}</p>
          <ul className="mt-2 list-disc pl-6 text-navy/85 leading-relaxed">
            {coraReplGlenRidgeResourcesLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener" className="underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Cmt text={c[17]} />
          <h4 className="mt-8 font-display text-lg font-semibold text-navy">{coraReplGlenRidgeSocialH4}</h4>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplGlenRidgeSocialIntro}</p>
          <p className="mt-2 text-navy/85 leading-relaxed">
            {/* Platform-root placeholder for the roadmapped Has-Link
                line (clean line 46) — FLAGGED: replace the root with
                the business's verified LinkedIn profile URL when
                supplied. */}
            <a href="https://www.linkedin.com" target="_blank" rel="noopener" className="underline">
              Newark Quality Roofing on LinkedIn
            </a>
          </p>

          <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
            {coraReplGlenRidgeFieldNotesH2}
          </h2>
          <Cmt text={c[18]} />
          <details className="group mt-3 border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
            <summary className="cursor-pointer font-display text-lg md:text-xl font-semibold text-navy">
              {coraReplGlenRidgeFieldNotesHeading}
            </summary>
            <h4 className="mt-4 font-display text-lg font-semibold text-navy">
              {coraReplGlenRidgeFieldNotesH4}
            </h4>
            <p className="mt-1 text-navy/85 leading-relaxed">{coraReplGlenRidgeFieldNotesIntro}</p>
            {coraReplGlenRidgeFieldNotes.map((note) => (
              <p key={note.slice(0, 32)} className="mt-3 text-navy/85 leading-relaxed">
                {note}
              </p>
            ))}
          </details>
        </details>
      </div>
      <Cmt text={coraReplGlenRidgeCommentTexts[1]} />
    </section>
  );
}
