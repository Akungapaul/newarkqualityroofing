// Cora 2026-10-14 phrase roadmap — SUPPLEMENTAL BLOCK for the
// LIVINGSTON roof REPLACEMENT page (/roof-replacement-livingston-nj,
// keyword "roof replacement livingston nj").
//
// This is the page's FIRST Cora component: the page is a plain
// Oct-4 combo page (13 headings, 12 images, seven genuine FAQ
// questions invisible to heading counters — six in <summary>
// elements and one in its FAQPage schema). This block implements
// the CLEAN 73 lines of the verification file at their adjusted
// values (clean list in
// cora-phrase-verification-livingston-replacement-2026-10-14.md;
// the title/meta/keywords clean lines 1–11 + 73 are served via
// the page.tsx override for this slug from the same data file).
//
// Heading program (clean lines 12–31): the block carries
// exactly +44 headings — 2 H2 + 14 H3 + 14 H4 + 14 H5
// (13 → 57, R8's tracked total): 5 guide sections
// (H3 + H4 + 2×H5), 3 subsections (H4 + H5), a materials H4 +
// H5, the questions lead-in H3 + the page's OWN 7 FAQ questions
// verbatim as H3s + 1 written question (8 question H3s total,
// serving Questions +8 / Questions-in-H3 +7 / Has Question),
// the photo H4, the card H4, the resources H4, the social H4,
// and the field-notes H2 + H4. Two H4s are whole-variation
// headings ("Roof Replacement Cost Livingston NJ" in the cost
// section; the materials H4 in the data file). The page's H1
// is NOT touched (H1 frozen; the two H1-bucket lines are
// flagged-open in the verification).
//
// Content program (clean lines 32–49): the block's sentences
// carry the thirteen HTML phrase singles at their asks, the
// Exact Matches residue at +4 (four verbatim comma-less
// exact-phrase sentences — the goal's only genuine carrier
// is Sigma's 4; the other carrier is our own repair sibling,
// excluded), Variations in Sentences +81 by construction,
// and P Tags +25 (the block adds ~58 real paragraphs).
//
// This run's LSI terms are written into sentences in the
// field notes (standing practice; the LSI pair itself is
// the frozen constant, never chased).
//
// Schema (clean lines 64–69 — ONE build, ONLY roadmapped
// properties): a JSON-LD graph with an Organization node
// carrying a PostalAddress of addressLocality "Newark"
// (the business's OWN published home city — Livingston is
// asserted only as this page's service area, never as the
// business address), addressRegion NJ, addressCountry US —
// NO postalCode, NO streetAddress (the postalCode pair is
// HELD OUT under D-01) — plus a WebSite node with a
// ReadAction potentialAction (target = this page), a
// WebPage node, and a BreadcrumbList whose crumb names are
// the Display-URL-variations lever (clean line 53). The
// microdata mirror is the service-area card (itemscope
// Organization + PostalAddress itemProps + a WebSite
// itemscope carrying the ReadAction), which doubles as
// the h-card for the MicroFormats line (clean line 70).
// NO ContactPoint, NO telephone, NO openingHours, NO
// hasMap, NO areaServed count, NO rating/AggregateRating
// (rating family BLOCKED under D-01).
//
// External links (clean lines 54–57): five genuine
// references (nj.gov / livingstonnj.org permits /
// njconsumeraffairs.gov / gaf.com / owenscorning.com) plus
// three platform-root placeholders (YouTube / LinkedIn /
// Facebook), FLAGGED pending Paul's verified profile URLs.
//
// Images (clean lines 58–60 + 62): 28 pool images, ALL
// with genuine ALT (40 images / 40 ALT page-wide), each in
// a <figure> with a plain caption. All srcs /images/…
// (never /public/images/…).
//
// Style variations (clean line 61, adjusted +24 on the
// Shared-Average basis): the <style> element below carries
// the phrases as CSS custom properties. Comment
// variations (clean line 63, gray zone at adjusted +3):
// the two boundary comments carry the variation text.
// HTML Comments (clean line 71, +36): genuine structural
// marker comments rendered from the data file's array
// (37 markers + 2 boundary = 39 new comments).
//
// House pattern (standing): expandable <details> block
// starting collapsed, never display:none.

import { JsonLd } from '@/components/seo/JsonLd';
import {
  coraReplLivingstonBlockSummary,
  coraReplLivingstonBlockIntro,
  coraReplLivingstonGuideH2,
  coraReplLivingstonGuideIntro,
  coraReplLivingstonSections,
  coraReplLivingstonSubsections,
  coraReplLivingstonMaterialsH4,
  coraReplLivingstonMaterialsP,
  coraReplLivingstonMaterialsH5,
  coraReplLivingstonMaterialsH5P,
  coraReplLivingstonQuestionsH3,
  coraReplLivingstonQuestionsIntro,
  coraReplLivingstonQuestions,
  coraReplLivingstonServiceLogIntro,
  coraReplLivingstonServiceLogEntries,
  coraReplLivingstonPhotoH4,
  coraReplLivingstonPhotoIntro,
  coraReplLivingstonGalleryImages,
  coraReplLivingstonCardH4,
  coraReplLivingstonCardIntro,
  coraReplLivingstonResourcesH4,
  coraReplLivingstonResourcesIntro,
  coraReplLivingstonResourcesLinks,
  coraReplLivingstonSocialH4,
  coraReplLivingstonSocialIntro,
  coraReplLivingstonFieldNotesH2,
  coraReplLivingstonFieldNotesHeading,
  coraReplLivingstonFieldNotesH4,
  coraReplLivingstonFieldNotesIntro,
  coraReplLivingstonFieldNotes,
  coraReplLivingstonStylePhrases,
  coraReplLivingstonCommentTexts,
  coraReplLivingstonSectionComments,
} from '@/data/cora-261014r-livingston-content';

const PAGE_URL = 'https://newarkqualityroofing.com/roof-replacement-livingston-nj';

// Renders one HTML comment into the served markup. Comments
// are genuine structural markers for this block (clean
// lines 63 + 71); React strips JSX comments, so the
// comment is injected as raw HTML inside a hidden div —
// the mechanism used by every prior Cora pass on this site.
function Cmt({ text }: { text: string }) {
  return (
    <div
      aria-hidden="true"
      style={{ display: 'none' }}
      dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }}
    />
  );
}

export function CoraRoadmap261014rLivingston() {
  const styleCss =
    ':root {\n' +
    coraReplLivingstonStylePhrases
      .map((p, i) => `  --cora-livingston-phrase-${i + 1}: "${p}";`)
      .join('\n') +
    '\n}\n/* Livingston replacement record phrases: ' +
    coraReplLivingstonStylePhrases.join('; ') +
    ' */';

  const blockGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://newarkqualityroofing.com/#organization-livingston-replacement',
        name: 'Newark Quality Roofing',
        url: 'https://newarkqualityroofing.com/',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Newark',
          addressRegion: 'NJ',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://newarkqualityroofing.com/#website-livingston-replacement',
        url: 'https://newarkqualityroofing.com/',
        potentialAction: {
          '@type': 'ReadAction',
          target: PAGE_URL,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: 'Roof Replacement Livingston, NJ',
        isPartOf: { '@id': 'https://newarkqualityroofing.com/#website-livingston-replacement' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Roof Replacement Services', item: 'https://newarkqualityroofing.com/roof-replacement' },
          { '@type': 'ListItem', position: 2, name: 'Roof Replacement Livingston NJ', item: PAGE_URL },
        ],
      },
    ],
  };

  const c = coraReplLivingstonSectionComments;

  return (
    <section
      aria-label="Roof replacement in Livingston, NJ — extended guide, questions, photo record, and field notes"
      className="bg-cream py-14"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content="Roof Replacement Livingston, NJ" />
      <meta itemProp="url" content={PAGE_URL} />
      <JsonLd data={blockGraph} />
      <Cmt text={coraReplLivingstonCommentTexts[0]} />
      <style dangerouslySetInnerHTML={{ __html: styleCss }} />
      <div className="container mx-auto px-4 max-w-4xl">
        <details className="group border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
          <summary className="cursor-pointer font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplLivingstonBlockSummary}
          </summary>

          <Cmt text={c[0]} />
          <p className="mt-4 text-navy/85 leading-relaxed">{coraReplLivingstonBlockIntro}</p>

          <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
            {coraReplLivingstonGuideH2}
          </h2>
          <p className="mt-3 text-navy/85 leading-relaxed">{coraReplLivingstonGuideIntro}</p>

          {coraReplLivingstonSections.map((s, i) => (
            <div key={s.h3}>
              <Cmt text={c[1 + i]} />
              <h3 className="mt-8 font-display text-xl md:text-2xl font-semibold text-navy">{s.h3}</h3>
              <p className="mt-2 text-navy/85 leading-relaxed">{s.p}</p>
              <h4 className="mt-5 font-display text-lg font-semibold text-navy">{s.h4}</h4>
              <p className="mt-1 text-navy/85 leading-relaxed">{s.h4p}</p>
              {s.subs.map((sub) => (
                <div key={sub.h5}>
                  <h5 className="mt-4 font-display text-base font-semibold text-navy">{sub.h5}</h5>
                  <p className="mt-1 text-navy/85 leading-relaxed">{sub.p}</p>
                </div>
              ))}
            </div>
          ))}

          {coraReplLivingstonSubsections.map((s, i) => (
            <div key={s.h4}>
              <Cmt text={c[6 + i]} />
              <h4 className="mt-6 font-display text-lg font-semibold text-navy">{s.h4}</h4>
              <p className="mt-1 text-navy/85 leading-relaxed">{s.p}</p>
              <h5 className="mt-4 font-display text-base font-semibold text-navy">{s.h5}</h5>
              <p className="mt-1 text-navy/85 leading-relaxed">{s.h5p}</p>
            </div>
          ))}

          <Cmt text={c[9]} />
          <h4 className="mt-6 font-display text-lg font-semibold text-navy">{coraReplLivingstonMaterialsH4}</h4>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplLivingstonMaterialsP}</p>
          <h5 className="mt-4 font-display text-base font-semibold text-navy">{coraReplLivingstonMaterialsH5}</h5>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplLivingstonMaterialsH5P}</p>

          <Cmt text={c[10]} />
          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplLivingstonQuestionsH3}
          </h3>
          <p className="mt-2 text-navy/85 leading-relaxed">{coraReplLivingstonQuestionsIntro}</p>
          {coraReplLivingstonQuestions.map((q, i) => (
            <div key={q.h3}>
              <Cmt text={c[11 + i]} />
              <h3 className="mt-6 font-display text-lg md:text-xl font-semibold text-navy">{q.h3}</h3>
              <p className="mt-1 text-navy/85 leading-relaxed">{q.p}</p>
            </div>
          ))}

          <Cmt text={c[19]} />
          <p className="mt-8 text-navy/85 leading-relaxed">{coraReplLivingstonServiceLogIntro}</p>
          <Cmt text={c[20]} />
          {coraReplLivingstonServiceLogEntries.map((entry) => (
            <p key={entry.slice(0, 48)} className="mt-3 text-navy/85 leading-relaxed">
              {entry}
            </p>
          ))}

          <Cmt text={c[21]} />
          <h4 className="mt-8 font-display text-lg font-semibold text-navy">{coraReplLivingstonPhotoH4}</h4>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplLivingstonPhotoIntro}</p>
          <Cmt text={c[22]} />
          <Cmt text={c[23]} />
          <Cmt text={c[24]} />
          <Cmt text={c[25]} />
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {coraReplLivingstonGalleryImages.map((img) => (
              <figure key={img.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto rounded" />
                <figcaption className="mt-1 text-sm text-navy/70">{img.caption}</figcaption>
              </figure>
            ))}
          </div>

          <Cmt text={c[26]} />
          <h4 className="mt-8 font-display text-lg font-semibold text-navy">{coraReplLivingstonCardH4}</h4>
          <div
            className="h-card mt-3 border border-navy/15 rounded-lg bg-white/70 px-5 py-4"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <p className="text-navy/85 leading-relaxed">
              <span className="p-name" itemProp="name">
                Newark Quality Roofing
              </span>{' '}
              — the business holding the Livingston replacement files above. Its own record for
              this page lives at{' '}
              <a className="u-url underline" itemProp="url" href={PAGE_URL}>
                this Livingston roof replacement record
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
              serving Livingston and the surrounding Essex County townships from that base.
            </p>
            <Cmt text={c[27]} />
            <p className="mt-2 text-navy/85 leading-relaxed">{coraReplLivingstonCardIntro}</p>
            <p className="mt-2 text-navy/85 leading-relaxed">
              <u>Essex County, New Jersey</u> — the county this record&rsquo;s roofs stand in.
            </p>
            <span itemScope itemType="https://schema.org/WebSite">
              <meta itemProp="url" content="https://newarkqualityroofing.com/" />
              <span
                itemProp="potentialAction"
                itemScope
                itemType="https://schema.org/ReadAction"
              >
                <meta itemProp="target" content={PAGE_URL} />
              </span>
            </span>
          </div>

          <Cmt text={c[28]} />
          <h4 className="mt-8 font-display text-lg font-semibold text-navy">{coraReplLivingstonResourcesH4}</h4>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplLivingstonResourcesIntro}</p>
          <Cmt text={c[29]} />
          <ul className="mt-2 list-disc pl-6 text-navy/85 leading-relaxed">
            {coraReplLivingstonResourcesLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener" className="underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Cmt text={c[30]} />
          <h4 className="mt-8 font-display text-lg font-semibold text-navy">{coraReplLivingstonSocialH4}</h4>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplLivingstonSocialIntro}</p>
          <p className="mt-2 text-navy/85 leading-relaxed">
            {/* Platform-root placeholders for the roadmapped Has-Link
                lines (clean lines 55–57) — FLAGGED: replace each root
                with the business's verified profile URL when supplied. */}
            <a href="https://www.youtube.com" target="_blank" rel="noopener" className="underline">
              Newark Quality Roofing on YouTube
            </a>
            {' · '}
            <a href="https://www.linkedin.com" target="_blank" rel="noopener" className="underline">
              Newark Quality Roofing on LinkedIn
            </a>
            {' · '}
            <a href="https://www.facebook.com" target="_blank" rel="noopener" className="underline">
              Newark Quality Roofing on Facebook
            </a>
          </p>

          <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
            {coraReplLivingstonFieldNotesH2}
          </h2>
          <Cmt text={c[31]} />
          <details className="group mt-3 border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
            <summary className="cursor-pointer font-display text-lg md:text-xl font-semibold text-navy">
              {coraReplLivingstonFieldNotesHeading}
            </summary>
            <h4 className="mt-4 font-display text-lg font-semibold text-navy">
              {coraReplLivingstonFieldNotesH4}
            </h4>
            <p className="mt-1 text-navy/85 leading-relaxed">{coraReplLivingstonFieldNotesIntro}</p>
            {coraReplLivingstonFieldNotes.map((note, i) => (
              <div key={note.slice(0, 32)}>
                <Cmt text={c[32 + i]} />
                <p className="mt-3 text-navy/85 leading-relaxed">{note}</p>
              </div>
            ))}
          </details>
        </details>
      </div>
      <Cmt text={coraReplLivingstonCommentTexts[1]} />
    </section>
  );
}
