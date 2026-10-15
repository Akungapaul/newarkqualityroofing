// Cora 2026-10-14 phrase roadmap — SUPPLEMENTAL BLOCK for the
// CALDWELL roof REPLACEMENT page
// (/roof-replacement-caldwell-nj, keyword
// "roof replacement caldwell nj").
//
// This is the page's FIRST Cora pass against the replacement
// keyword: the page is a plain Oct-4 combo page (13 headings,
// 12 images, six genuine FAQ questions invisible to heading
// counters — all six in <summary> elements; NO questions line
// is roadmapped in this run, so no question headings are
// manufactured). This block implements the CLEAN 75 lines of
// the verification file at their adjusted values (clean list
// in cora-phrase-verification-caldwell-replacement-2026-10-14.md;
// the title/meta/keywords clean lines are served via the
// page.tsx override for this slug from the same data file).
//
// Heading program: the block carries exactly +26 headings —
// 2 H2 + 16 H3 + 8 H4 (13 → 39, goal tied between the doorway
// R1 and the genuine R4). Seven guide articles (H3 + H4),
// three subsections, and H3s for the service log, homeowner
// questions, photo record, service-area card, resources,
// profiles, directions form, plus the field-notes H2 + H4.
// H4s carry the entity goal (R2's 13) and the H4 variation
// goal (R2's 11); several open with verbatim variation
// phrases. The doorway-priced heading goals are implemented
// at their driver-adjusted values (priced off R4). The page's
// H1 is NOT touched (H1 frozen; the three H1-bucket lines
// are flagged open in the verification).
//
// Content program: the block's sentences carry the phrase
// singles VERBATIM in lowercase (the factor counts
// case-sensitive literal occurrences; baseline validated
// one-for-one against Cora's tracked values) — 'caldwell nj'
// +16, 'caldwell nj roofing' +9, 'roofing caldwell' +4,
// 'roofing caldwell nj' +4, 'roof repair caldwell nj' +2,
// 'roof repair nj' +2, 'caldwells' +2, 'replacing' ridden,
// 'repairs' +17 as a floor; Exact Matches at the adjusted +4
// (sole genuine carrier R4). This run's LSI terms are written
// into sentences in the field notes (standing practice; the
// LSI pair itself is the frozen constant, never chased).
//
// Schema (ONE build, ONLY roadmapped properties): a JSON-LD
// graph with an Organization node (legalName — on record in
// src/config/site-config.ts — image = the real Caldwell hero,
// logo = the site's real /logo.svg, hasMap = the Google Maps
// QUERY URL for the business, the Montclair treatment,
// FLAGGED) and a Service node (areaServed = the business's
// REAL service area: the 21 cities of src/data/cities.ts +
// Essex County + New Jersey = 23 entries, the adjusted value
// for the repetition-arithmetic headline of 522; an Offer
// with priceCurrency USD + availability InStock and NO price
// asserted). The microdata mirror is the service-area card
// (itemscope Organization + legalName + image + logo +
// hasMap + an Offer itemscope). NO ContactPoint, NO
// telephone, NO address, NO openingHours (none roadmapped),
// NO rating/AggregateRating (D-01).
//
// External links: the GAF manufacturer reference (genuine)
// and the Google Maps query anchor (genuine) are the
// roadmapped outbound singles, plus TWO platform-root
// placeholders (LinkedIn, g.page) FLAGGED pending Paul's
// verified profile URLs.
//
// Images: 26 pool images, ALL with genuine ALT (38 images /
// 38 ALT page-wide — the adjusted field-level value), each in
// a <figure> with a plain caption. All srcs /images/…
// (never /public/images/…), each verified to exist in
// public/images by its exact file name.
//
// Form: a genuine Google Maps search form (the Bloomfield
// mechanism, already proven on this page's repair pass) —
// its name, three labels, and variation-dense submit button
// carry the Form/Label/Button variation lines at their
// adjusted values. Style variations (+24, Shared-Average
// basis): the <style> element carries 24 phrases as CSS
// custom properties. Comment variations (gray zone, exactly
// the +3 ask): the two boundary comments carry the forms.
//
// House pattern (standing): expandable <details> block
// starting collapsed, never display:none.

import { JsonLd } from '@/components/seo/JsonLd';
import {
  coraReplCaldwellBlockSummary,
  coraReplCaldwellBlockIntro,
  coraReplCaldwellGuideH2,
  coraReplCaldwellGuideIntro,
  coraReplCaldwellSections,
  coraReplCaldwellSubsections,
  coraReplCaldwellServiceLogIntro,
  coraReplCaldwellServiceLogLabels,
  coraReplCaldwellServiceLogEntries,
  coraReplCaldwellQuotesH3,
  coraReplCaldwellQuotesIntro,
  coraReplCaldwellQuotes,
  coraReplCaldwellPhotoH3,
  coraReplCaldwellPhotoIntro,
  coraReplCaldwellGalleryImages,
  coraReplCaldwellCardH3,
  coraReplCaldwellCardIntro,
  coraReplCaldwellResourcesH3,
  coraReplCaldwellResourcesIntro,
  coraReplCaldwellResourcesLinks,
  coraReplCaldwellSocialH3,
  coraReplCaldwellSocialIntro,
  coraReplCaldwellFormH3,
  coraReplCaldwellFormIntro,
  coraReplCaldwellFormName,
  coraReplCaldwellFormLabelAddress,
  coraReplCaldwellFormLabelService,
  coraReplCaldwellFormLabelChecklist,
  coraReplCaldwellFormQuery,
  coraReplCaldwellFormButton,
  coraReplCaldwellStylePhrases,
  coraReplCaldwellCommentTexts,
  coraReplCaldwellSectionComments,
  coraReplCaldwellFieldNotesH2,
  coraReplCaldwellFieldNotesHeading,
  coraReplCaldwellFieldNotesH4,
  coraReplCaldwellFieldNotesIntro,
  coraReplCaldwellFieldNotes,
} from '@/data/cora-261014r-caldwell-content';

const PAGE_URL = 'https://newarkqualityroofing.com/roof-replacement-caldwell-nj';
const MAPS_URL = 'https://www.google.com/maps?q=Newark+Quality+Roofing,+Newark,+NJ';
const HERO_URL = 'https://newarkqualityroofing.com/images/heroes/city-caldwell.webp';
const LOGO_URL = 'https://newarkqualityroofing.com/logo.svg';
const EMAIL = 'info@newarkqualityroofing.com';

// The business's real service area — the 21 cities in
// src/data/cities.ts, in the file's own order.
const SERVICE_CITIES = [
  'Newark', 'East Orange', 'Orange', 'West Orange', 'Montclair',
  'Bloomfield', 'Belleville', 'Nutley', 'Irvington', 'Maplewood',
  'South Orange', 'Livingston', 'Millburn', 'Cedar Grove', 'Verona',
  'Glen Ridge', 'Caldwell', 'Essex Fells', 'Fairfield', 'North Caldwell',
  'Roseland',
];

// Renders one HTML comment into the served markup. Comments
// are genuine structural markers for this block; React strips
// JSX comments, so the comment is injected as raw HTML inside
// a hidden div — the mechanism used by every prior Cora pass
// on this site.
function Cmt({ text }: { text: string }) {
  return (
    <div
      aria-hidden="true"
      style={{ display: 'none' }}
      dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }}
    />
  );
}

export function CoraRoadmap261014rCaldwell() {
  const styleCss =
    ':root {\n' +
    coraReplCaldwellStylePhrases
      .map((p, i) => `  --cora-caldwell-phrase-${i + 1}: "${p}";`)
      .join('\n') +
    '\n}\n/* Caldwell replacement record phrases: ' +
    coraReplCaldwellStylePhrases.join('; ') +
    ' */';

  const blockGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://newarkqualityroofing.com/#organization-caldwell-replacement',
        name: 'Newark Quality Roofing',
        legalName: 'Newark Quality Roofing',
        url: 'https://newarkqualityroofing.com/',
        image: HERO_URL,
        logo: LOGO_URL,
        hasMap: MAPS_URL,
      },
      {
        '@type': 'Service',
        '@id': `${PAGE_URL}#service`,
        name: 'Roof Replacement Caldwell, NJ',
        serviceType: 'Roof Replacement',
        serviceUrl: PAGE_URL,
        url: PAGE_URL,
        provider: { '@id': 'https://newarkqualityroofing.com/#organization-caldwell-replacement' },
        areaServed: [
          ...SERVICE_CITIES.map((name) => ({ '@type': 'City', name: `${name}, NJ` })),
          { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
          { '@type': 'State', name: 'New Jersey' },
        ],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          itemOffered: { '@type': 'Service', name: 'Roof Replacement in Caldwell, NJ', url: PAGE_URL },
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: 'Roof Replacement Caldwell, NJ',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Roof Replacement Services', item: 'https://newarkqualityroofing.com/roof-replacement' },
          { '@type': 'ListItem', position: 2, name: 'Roof Replacement Caldwell NJ', item: PAGE_URL },
        ],
      },
    ],
  };

  const c = coraReplCaldwellSectionComments;

  return (
    <section
      aria-label="Roof replacement in Caldwell, NJ — extended guide, service log, photo record, and field notes"
      className="bg-cream py-14"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content="Roof Replacement Caldwell, NJ" />
      <meta itemProp="url" content={PAGE_URL} />
      <JsonLd data={blockGraph} />
      <Cmt text={coraReplCaldwellCommentTexts[0]} />
      <style dangerouslySetInnerHTML={{ __html: styleCss }} />
      <div className="container mx-auto px-4 max-w-4xl">
        <details className="group border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
          <summary className="cursor-pointer font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplCaldwellBlockSummary}
          </summary>

          <Cmt text={c[0]} />
          <p className="mt-4 text-navy/85 leading-relaxed">{coraReplCaldwellBlockIntro}</p>

          <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
            {coraReplCaldwellGuideH2}
          </h2>
          <p className="mt-3 text-navy/85 leading-relaxed">{coraReplCaldwellGuideIntro}</p>

          {coraReplCaldwellSections.map((s, i) => (
            <article key={s.h3}>
              <Cmt text={c[1 + i]} />
              <h3 className="mt-8 font-display text-xl md:text-2xl font-semibold text-navy">{s.h3}</h3>
              <p className="mt-2 text-navy/85 leading-relaxed">{s.p}</p>
              <h4 className="mt-5 font-display text-lg font-semibold text-navy">{s.h4}</h4>
              <p className="mt-1 text-navy/85 leading-relaxed">{s.h4p}</p>
            </article>
          ))}

          {coraReplCaldwellSubsections.map((s, i) => (
            <div key={s.h3}>
              <Cmt text={c[8 + i]} />
              <h3 className="mt-8 font-display text-xl md:text-2xl font-semibold text-navy">{s.h3}</h3>
              <p className="mt-2 text-navy/85 leading-relaxed">{s.p}</p>
            </div>
          ))}

          <Cmt text={c[11]} />
          <p className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            Roof Replacement Service Log — Caldwell NJ &amp; Essex County
          </p>
          <p className="mt-2 text-navy/85 leading-relaxed">{coraReplCaldwellServiceLogIntro}</p>
          <p className="mt-3 text-navy/85 leading-relaxed">
            {coraReplCaldwellServiceLogLabels.map((label, i) => (
              <span key={label}>
                {i > 0 && ' · '}
                <span className="font-semibold text-navy">{label}</span>
              </span>
            ))}
          </p>
          {coraReplCaldwellServiceLogEntries.map((entry) => (
            <p key={entry.slice(0, 48)} className="mt-3 text-navy/85 leading-relaxed">
              {entry}
            </p>
          ))}

          <Cmt text={c[12]} />
          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplCaldwellQuotesH3}
          </h3>
          <p className="mt-2 text-navy/85 leading-relaxed">{coraReplCaldwellQuotesIntro}</p>
          {coraReplCaldwellQuotes.map((q) => (
            <figure key={q.q.slice(0, 40)} className="mt-5">
              <blockquote className="border-l-4 border-navy/25 pl-4 text-navy/85 italic leading-relaxed">
                <p>&ldquo;{q.q}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-1 text-sm text-navy/70">{q.a}</figcaption>
            </figure>
          ))}

          <Cmt text={c[13]} />
          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplCaldwellPhotoH3}
          </h3>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplCaldwellPhotoIntro}</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {coraReplCaldwellGalleryImages.map((img) => (
              <figure key={img.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto rounded" />
                <figcaption className="mt-1 text-sm text-navy/70">{img.caption}</figcaption>
              </figure>
            ))}
          </div>

          <Cmt text={c[14]} />
          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplCaldwellCardH3}
          </h3>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplCaldwellCardIntro}</p>
          <div
            className="h-card mt-3 border border-navy/15 rounded-lg bg-white/70 px-5 py-4"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <meta itemProp="image" content={HERO_URL} />
            <meta itemProp="logo" content={LOGO_URL} />
            <p className="text-navy/85 leading-relaxed">
              <span className="p-name" itemProp="name">
                Newark Quality Roofing
              </span>{' '}
              — registered legal name{' '}
              <span itemProp="legalName">Newark Quality Roofing</span> — is the business holding
              the Caldwell replacement files above. Its own record for this page lives at{' '}
              <a className="u-url underline" itemProp="url" href={PAGE_URL}>
                this Caldwell roof replacement record
              </a>
              , and the office is on the map at{' '}
              <a href={MAPS_URL} target="_blank" rel="noopener" className="underline" itemProp="hasMap">
                Newark Quality Roofing on Google Maps
              </a>
              .
            </p>
            <p className="mt-2 text-navy/85 leading-relaxed">
              Email the office at <span itemProp="email">{EMAIL}</span> for a free written
              estimate — replacing a roof starts with the deck inspection, and the estimate
              names the system line by line.
            </p>
            <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
              <meta itemProp="priceCurrency" content="USD" />
              <link itemProp="availability" href="https://schema.org/InStock" />
              <p className="mt-2 text-navy/85 leading-relaxed">
                The offer this page publishes:{' '}
                <span itemProp="itemOffered" itemScope itemType="https://schema.org/Service">
                  <meta itemProp="name" content="Roof Replacement in Caldwell, NJ" />
                  roof replacement in Caldwell, NJ
                </span>
                , priced in US dollars after a written estimate — no flat price is asserted,
                because the deck decides the scope.
              </p>
            </div>
          </div>

          <Cmt text={c[15]} />
          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplCaldwellResourcesH3}
          </h3>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplCaldwellResourcesIntro}</p>
          <ul className="mt-2 list-disc pl-6 text-navy/85 leading-relaxed">
            {coraReplCaldwellResourcesLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener" className="underline">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={MAPS_URL} target="_blank" rel="noopener" className="underline">
                Newark Quality Roofing on Google — maps listing, directions &amp; service area
              </a>
            </li>
          </ul>

          <Cmt text={c[16]} />
          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplCaldwellSocialH3}
          </h3>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplCaldwellSocialIntro}</p>
          <p className="mt-2 text-navy/85 leading-relaxed">
            {/* Platform-root placeholders for the two roadmapped
                Has-Link lines (clean lines 60/61) — FLAGGED: replace
                each root with the business's verified profile URL
                when Paul supplies it. */}
            <a href="https://www.linkedin.com" target="_blank" rel="noopener" className="underline">
              Newark Quality Roofing on LinkedIn
            </a>
            {' · '}
            <a href="https://g.page" target="_blank" rel="noopener" className="underline">
              Newark Quality Roofing on Google (g.page)
            </a>
          </p>

          <Cmt text={c[17]} />
          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplCaldwellFormH3}
          </h3>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplCaldwellFormIntro}</p>
          <form
            action="https://www.google.com/maps/search/"
            method="get"
            name={coraReplCaldwellFormName}
            className="mt-4 border border-navy/15 rounded-lg bg-white/70 px-5 py-4"
          >
            <label className="block text-navy/85">
              {coraReplCaldwellFormLabelAddress}
              <input
                type="text"
                name="q"
                defaultValue={coraReplCaldwellFormQuery}
                className="mt-2 block w-full max-w-md border border-navy/25 rounded px-3 py-2 text-navy"
              />
            </label>
            <label className="mt-3 block text-navy/85">
              {coraReplCaldwellFormLabelService}
              <select
                name="service"
                className="mt-2 block w-full max-w-md border border-navy/25 rounded px-3 py-2 text-navy"
              >
                <option>Full roof replacement</option>
                <option>Slate or cedar replacement</option>
                <option>Flat roof replacement</option>
                <option>Storm damage replacement</option>
              </select>
            </label>
            <label className="mt-3 flex items-start gap-2 text-navy/85">
              <input type="checkbox" name="checklist" className="mt-1" />
              <span>{coraReplCaldwellFormLabelChecklist}</span>
            </label>
            <button
              type="submit"
              className="mt-4 rounded bg-navy px-5 py-2 font-semibold text-white"
            >
              {coraReplCaldwellFormButton}
            </button>
          </form>

          <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
            {coraReplCaldwellFieldNotesH2}
          </h2>
          <Cmt text={c[18]} />
          <details className="group mt-3 border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
            <summary className="cursor-pointer font-display text-lg md:text-xl font-semibold text-navy">
              {coraReplCaldwellFieldNotesHeading}
            </summary>
            <h4 className="mt-4 font-display text-lg font-semibold text-navy">
              {coraReplCaldwellFieldNotesH4}
            </h4>
            <p className="mt-1 text-navy/85 leading-relaxed">{coraReplCaldwellFieldNotesIntro}</p>
            {coraReplCaldwellFieldNotes.map((note) => (
              <p key={note.slice(0, 32)} className="mt-3 text-navy/85 leading-relaxed">
                {note}
              </p>
            ))}
          </details>
        </details>
      </div>
      <Cmt text={coraReplCaldwellCommentTexts[1]} />
    </section>
  );
}
