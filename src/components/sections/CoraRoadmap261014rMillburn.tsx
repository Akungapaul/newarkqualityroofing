// Cora 2026-10-14 phrase roadmap — SUPPLEMENTAL BLOCK for the
// MILLBURN roof REPLACEMENT page (/roof-replacement-millburn-nj,
// keyword AS RUN "roof replacement milburn nj" — one L, see the
// spelling note in the data file; Paul's decision 2026-10-15:
// proceed with this report, ALL copy in correct "Millburn"
// spelling).
//
// This is the page's FIRST Cora component: the page is a plain
// Oct-4 combo page (13 headings, 12 images, no prior Cora block;
// the PR #30 pass was the REPAIR page). This block implements
// the CLEAN 40 lines of the verification file at their adjusted
// values (clean list in
// cora-phrase-verification-millburn-replacement-2026-10-14.md;
// the title/meta/keywords clean lines 1–3 + 40 are served via
// the page.tsx override for this slug from the same data file).
//
// Heading program (clean lines 8–19): the block carries exactly
// +31 headings — 3 H2 + 14 H3 + 14 H4 (13 → 44, R2's tracked
// total): the guide H2 + 5 sections (H3+H4), the materials H2 +
// 5 sections (H3+H4), the photo H4, the card H4, and the
// field-notes H2 + 4 notes (H3, two with H4). The H3 texts are
// entity-dense (Entities in H3 +23, R1); eight H3s and all three
// H2s open with verbatim variation phrases (the leading lines
// +6/+8/+8). NO question-heading program is built — no
// question line is roadmapped in this run. The page's H1 is
// NOT touched (H1 frozen; the two H1-bucket lines are
// flagged-open in the verification).
//
// Content program (clean lines 20–21): the block's real
// paragraphs serve P Tags +31 (R1's genuine 73); Distinct
// Entities +7 rides the manufacturer/material/place naming.
// This run's LSI terms are written into sentences in the
// field notes (standing practice; the LSI pair itself is the
// frozen constant, never chased). The two Exact Matches lines
// are zero-carrier artifacts (and their factor string is the
// misspelled query) — excluded, nothing here chases them.
//
// Schema (clean lines 29–39 — ONE build, ONLY roadmapped
// properties): a JSON-LD graph with an Organization node
// carrying legalName (the canonical config's own published
// value), category "Roofing Contractor", a PostalAddress of
// addressRegion "NJ" / addressCountry "US" (NO addressLocality
// — not roadmapped in this run; NO postalCode, NO
// streetAddress — D-01), areaServed as this page's City
// (the business-node form Cora credits on R1/R5; our Service
// node's existing areaServed was tracked 0), and openingHours
// in string + Specification form from the site's OWN published
// hours (src/lib/schema.ts: Mon–Fri 07:00–18:00, Sat
// 08:00–14:00) — plus a WebPage node and a BreadcrumbList
// whose crumb names are the Display-URL-variations lever
// (clean line 6). The microdata mirror is the service-area
// card (itemscope Organization + PostalAddress itemProps +
// legalName/category/areaServed/openingHours itemProps),
// whose <address> element serves clean line 28. NO
// ContactPoint, NO telephone, NO hasMap, NO rating (no
// rating lines are roadmapped in this run).
//
// Variations in other places: the block intro sits in a
// <header> element (clean line 27, R1-sole carriage);
// span-carried labels and captions throughout serve clean
// line 26; the two boundary comments carry the
// Comment Variations gray-zone line (clean line 25, +1,
// rulebook-included). NO platform-root placeholders and NO
// social row: no Has-Link line is roadmapped in this run,
// and the six Phase 8 profile-count lines stay pending
// Paul's verified profile URLs.
//
// Images (clean lines 22–24): 24 pool images, ALL with
// genuine ALT (36 images / 36 ALT page-wide), each in a
// <figure> with a plain caption. All srcs /images/…
// (never /public/images/…).
//
// House pattern (standing): expandable <details> block
// starting collapsed, never display:none.

import { JsonLd } from '@/components/seo/JsonLd';
import {
  coraReplMillburnBlockSummary,
  coraReplMillburnBlockIntro,
  coraReplMillburnGuideH2,
  coraReplMillburnGuideIntro,
  coraReplMillburnSections,
  coraReplMillburnMaterialsH2,
  coraReplMillburnMaterialsIntro,
  coraReplMillburnMaterials,
  coraReplMillburnServiceLogIntro,
  coraReplMillburnServiceLogEntries,
  coraReplMillburnPhotoH4,
  coraReplMillburnPhotoIntro,
  coraReplMillburnGalleryImages,
  coraReplMillburnCardH4,
  coraReplMillburnCardIntro,
  coraReplMillburnFieldNotesH2,
  coraReplMillburnFieldNotesIntro,
  coraReplMillburnFieldNotes,
  coraReplMillburnCommentTexts,
  coraReplMillburnSectionComments,
} from '@/data/cora-261014r-millburn-content';

const PAGE_URL = 'https://newarkqualityroofing.com/roof-replacement-millburn-nj';

// Renders one HTML comment into the served markup. Comments
// are genuine structural markers for this block (clean line
// 25 carries the variation text); React strips JSX comments,
// so the comment is injected as raw HTML inside a hidden
// div — the mechanism used by every prior Cora pass on this
// site.
function Cmt({ text }: { text: string }) {
  return (
    <div
      aria-hidden="true"
      style={{ display: 'none' }}
      dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }}
    />
  );
}

export function CoraRoadmap261014rMillburn() {
  const blockGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://newarkqualityroofing.com/#organization-millburn-replacement',
        name: 'Newark Quality Roofing',
        legalName: 'Newark Quality Roofing',
        category: 'Roofing Contractor',
        url: 'https://newarkqualityroofing.com/',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'NJ',
          addressCountry: 'US',
        },
        areaServed: {
          '@type': 'City',
          name: 'Millburn, NJ',
        },
        openingHours: ['Mo-Fr 07:00-18:00', 'Sa 08:00-14:00'],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '08:00',
            closes: '14:00',
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: 'Roof Replacement Millburn, NJ',
        isPartOf: { '@id': 'https://newarkqualityroofing.com/#website' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Roof Replacement Services', item: 'https://newarkqualityroofing.com/roof-replacement' },
          { '@type': 'ListItem', position: 2, name: 'Roof Replacement Millburn NJ', item: PAGE_URL },
        ],
      },
    ],
  };

  const c = coraReplMillburnSectionComments;

  return (
    <section
      aria-label="Roof replacement in Millburn, NJ — extended guide, materials record, photo record, and field notes"
      className="bg-cream py-14"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content="Roof Replacement Millburn, NJ" />
      <meta itemProp="url" content={PAGE_URL} />
      <JsonLd data={blockGraph} />
      <Cmt text={coraReplMillburnCommentTexts[0]} />
      <div className="container mx-auto px-4 max-w-4xl">
        <details className="group border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
          <summary className="cursor-pointer font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplMillburnBlockSummary}
          </summary>

          <Cmt text={c[0]} />
          <header>
            <p className="mt-4 text-navy/85 leading-relaxed">
              <span>Roof replacement Millburn NJ</span> — {coraReplMillburnBlockIntro}
            </p>
          </header>

          <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
            {coraReplMillburnGuideH2}
          </h2>
          <p className="mt-3 text-navy/85 leading-relaxed">{coraReplMillburnGuideIntro}</p>

          {coraReplMillburnSections.map((s, i) => (
            <div key={s.h3}>
              <Cmt text={c[1 + i]} />
              <h3 className="mt-8 font-display text-xl md:text-2xl font-semibold text-navy">{s.h3}</h3>
              <p className="mt-2 text-navy/85 leading-relaxed">{s.p}</p>
              <h4 className="mt-5 font-display text-lg font-semibold text-navy">{s.h4}</h4>
              <p className="mt-1 text-navy/85 leading-relaxed">{s.h4p}</p>
            </div>
          ))}

          <Cmt text={c[6]} />
          <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
            {coraReplMillburnMaterialsH2}
          </h2>
          <p className="mt-3 text-navy/85 leading-relaxed">{coraReplMillburnMaterialsIntro}</p>

          {coraReplMillburnMaterials.map((s, i) => (
            <div key={s.h3}>
              <Cmt text={c[7 + i]} />
              <h3 className="mt-8 font-display text-xl md:text-2xl font-semibold text-navy">{s.h3}</h3>
              <p className="mt-2 text-navy/85 leading-relaxed">{s.p}</p>
              <h4 className="mt-5 font-display text-lg font-semibold text-navy">{s.h4}</h4>
              <p className="mt-1 text-navy/85 leading-relaxed">{s.h4p}</p>
            </div>
          ))}

          <Cmt text={c[12]} />
          <p className="mt-8 text-navy/85 leading-relaxed">{coraReplMillburnServiceLogIntro}</p>
          {coraReplMillburnServiceLogEntries.map((entry) => (
            <p key={entry.slice(0, 48)} className="mt-3 text-navy/85 leading-relaxed">
              {entry}
            </p>
          ))}

          <Cmt text={c[13]} />
          <h4 className="mt-8 font-display text-lg font-semibold text-navy">{coraReplMillburnPhotoH4}</h4>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplMillburnPhotoIntro}</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {coraReplMillburnGalleryImages.map((img) => (
              <figure key={img.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto rounded" />
                <figcaption className="mt-1 text-sm text-navy/70">
                  <span>{img.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <Cmt text={c[14]} />
          <h4 className="mt-8 font-display text-lg font-semibold text-navy">{coraReplMillburnCardH4}</h4>
          <div
            className="mt-3 border border-navy/15 rounded-lg bg-white/70 px-5 py-4"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <meta itemProp="category" content="Roofing Contractor" />
            <meta itemProp="openingHours" content="Mo-Fr 07:00-18:00" />
            <meta itemProp="openingHours" content="Sa 08:00-14:00" />
            <p className="text-navy/85 leading-relaxed">
              <span className="p-name" itemProp="name">
                Newark Quality Roofing
              </span>{' '}
              — the business holding the Millburn replacement files above. Legal name:{' '}
              <span itemProp="legalName">Newark Quality Roofing</span>. Its own record for this
              page lives at{' '}
              <a className="u-url underline" itemProp="url" href={PAGE_URL}>
                this Millburn roof replacement record
              </a>
              .
            </p>
            <address
              className="mt-2 text-navy/85 leading-relaxed not-italic"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span>Roof replacement Millburn NJ</span> service base: <span itemProp="addressRegion">NJ</span>,{' '}
              <span itemProp="addressCountry">US</span> — a Millburn, New Jersey roofing record,
              kept from that base.
            </address>
            <p className="mt-2 text-navy/85 leading-relaxed">
              Service area of this page:{' '}
              <span itemProp="areaServed" itemScope itemType="https://schema.org/City">
                <span itemProp="name">Millburn, New Jersey</span>
              </span>{' '}
              and the surrounding Essex County townships.
            </p>
            <p className="mt-2 text-navy/85 leading-relaxed">{coraReplMillburnCardIntro}</p>
          </div>

          <Cmt text={c[15]} />
          <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
            {coraReplMillburnFieldNotesH2}
          </h2>
          <p className="mt-3 text-navy/85 leading-relaxed">{coraReplMillburnFieldNotesIntro}</p>
          {coraReplMillburnFieldNotes.map((note, i) => (
            <div key={note.h3}>
              <Cmt text={c[16 + i]} />
              <h3 className="mt-8 font-display text-xl md:text-2xl font-semibold text-navy">{note.h3}</h3>
              <p className="mt-2 text-navy/85 leading-relaxed">{note.p}</p>
              {note.h4 && (
                <>
                  <h4 className="mt-5 font-display text-lg font-semibold text-navy">{note.h4}</h4>
                  <p className="mt-1 text-navy/85 leading-relaxed">{note.h4p}</p>
                </>
              )}
            </div>
          ))}
        </details>
      </div>
      <Cmt text={coraReplMillburnCommentTexts[1]} />
    </section>
  );
}
