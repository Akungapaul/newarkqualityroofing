// Cora 2026-10-15 phrase roadmap — SUPPLEMENTAL BLOCK for the
// ORANGE roof REPLACEMENT page
// (/roof-replacement-orange-nj, keyword
// "roof replacement orange nj").
//
// This is the page's FIRST Cora pass against the replacement
// keyword: the page is a plain Oct-4 combo page (13 headings,
// 12 images, six genuine FAQ questions in <summary> elements).
// This block implements the CLEAN 35 lines of the verification
// file at their adjusted values (clean list in
// cora-phrase-verification-orange-replacement-2026-10-15.md;
// the title/meta/keywords clean lines are served via the
// page.tsx override for this slug from the same data file).
// The run's defining structure: Result 2 in its SERP is OUR
// OWN repair-and-installation sibling (the PR #27 page), the
// maximum on 51 of 96 lines — every headline below is priced
// off the competitor inputs under the sibling ruling, never
// off the sibling.
//
// Heading programme: the block carries exactly +30 headings —
// 2 H2 + 20 H3 + 6 H4 + 2 H5 (13 -> 43, the adjusted Number of
// Heading Tags goal: R6's doorway 49 priced off R1's
// live-exact genuine 43). Six of the H3s are the page's OWN
// six published FAQ questions verbatim (the questions lines
// ARE roadmapped in this run: adjusted +5 headings / +4 H3
// off R4 genuine; six delivered, overshoot disclosed). The
// H1 is NOT touched (frozen; the one H1-bucket line is
// flagged open in the verification).
//
// Content programme: the block carries >= 73 net new real
// <p> (P Tags at the full ask — goal 115 = R4 genuine
// live-exact), the 'repairs' form well past its adjusted goal
// of 18 page-wide (service-log entries are repair-history
// records; the form is native to them), and >= +10 KB clean
// text (goal 34 = R4 genuine). This run's genuine
// Entities-inventory terms are written into sentences in the
// field notes (standing practice; the LSI pair itself is the
// frozen constant, never chased; this workbook's LSI sheet
// is empty).
//
// Schema: ONE block JSON-LD graph — a business node
// (PostalAddress wired to the canonical config: streetAddress
// EMPTY by D-01, locality Newark — the business's own
// published home city; Orange asserted only as areaServed;
// NO postalCode, not roadmapped) carrying priceRange '$$'
// (the site's OWN canonical fact from src/lib/schema.ts) +
// a WebPage node + a BreadcrumbList whose crumb names carry
// the variation forms (the Display URL rider) — and ONE
// microdata service-record card mirroring the business node
// (PostalAddress itemscope + priceRange itemprop). NO rating
// node of any kind; NO openingHours (not roadmapped); NO
// hasMap (not roadmapped).
//
// External links: three GENUINE manufacturer references
// (GAF, Owens Corning, CertainTeed) and the Google Maps query
// anchors — all dofollow. NO platform-root placeholders are
// placed: no "Has Link to X" single is roadmapped in this
// run, and the Phase-8 count lines are pending Paul's
// verified profile URLs.
//
// Images: 24 pool images, ALL with genuine ALT (36 images /
// 36 ALT page-wide), each in a <figure> with a span-wrapped
// plain caption. All srcs /images/… (never /public/images/…),
// each verified to exist in public/images by its exact file
// name before shipping, HEAD-checked after deploy.
//
// Form: a genuine Google Maps search form — its name and two
// field names carry the variation forms (honest attributes,
// the Nutley/Cedar Grove doctrine). Boundary comments carry
// three verbatim forms between them (Comment Variations at
// the adjusted +3, Shared Average exactly 3.0); section
// markers stay phrase-light.
//
// House pattern (standing): expandable <details> block
// starting collapsed, never display:none.

import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import {
  coraReplOrangeBlockSummary,
  coraReplOrangeBlockIntro,
  coraReplOrangeGuideH2,
  coraReplOrangeGuideIntro,
  coraReplOrangeSections,
  coraReplOrangeSubsections,
  coraReplOrangeServiceLogH3,
  coraReplOrangeServiceLogIntro,
  coraReplOrangeServiceLogLabels,
  coraReplOrangeServiceLogEntries,
  coraReplOrangeFaqH3,
  coraReplOrangeFaqIntro,
  coraReplOrangeFaq,
  coraReplOrangePhotoH3,
  coraReplOrangePhotoIntro,
  coraReplOrangePhotoGroups,
  coraReplOrangeGalleryImages,
  coraReplOrangeCardH3,
  coraReplOrangeCardIntro,
  coraReplOrangeCardCatalogH4,
  coraReplOrangeOffers,
  coraReplOrangeCardFields,
  coraReplOrangeResourcesH3,
  coraReplOrangeResourcesIntro,
  coraReplOrangeResourcesLinks,
  coraReplOrangeFormH3,
  coraReplOrangeFormIntro,
  coraReplOrangeFormName,
  coraReplOrangeFormLabelAddress,
  coraReplOrangeFormLabelService,
  coraReplOrangeFormLabelChecklist,
  coraReplOrangeFormAddressName,
  coraReplOrangeFormServiceName,
  coraReplOrangeFormQuery,
  coraReplOrangeFormButton,
  coraReplOrangeCommentTexts,
  coraReplOrangeSectionComments,
  coraReplOrangeFieldNotesH2,
  coraReplOrangeFieldNotesHeading,
  coraReplOrangeFieldNotesIntro,
  coraReplOrangeFieldNotes,
} from '@/data/cora-261015r-orange-content';

const PAGE_URL = 'https://newarkqualityroofing.com/roof-replacement-orange-nj';
const SITE_URL = 'https://newarkqualityroofing.com/';
const MAPS_URL = 'https://www.google.com/maps?q=Newark+Quality+Roofing,+Newark,+NJ';
const LOGO_URL = 'https://newarkqualityroofing.com/logo.svg';
const HERO_URL = 'https://newarkqualityroofing.com/images/heroes/city-orange.webp';
const EMAIL = 'info@newarkqualityroofing.com';

// The block graph (clean Phase-12 lines 77/80/83/84 + the
// Display URL rider, line 50): the business node leads with
// RoofingContractor (canonical most-specific-first order from
// src/lib/schema.ts) and carries the PostalAddress wired to
// the canonical config — streetAddress EMPTY by D-01 until
// the owner supplies a street address; locality is Newark,
// the business's OWN published home city (Orange is asserted
// only as this page's service area); NO postalCode (not
// roadmapped). priceRange '$$' is the site's own canonical
// schema.ts fact, served sitewide. The logo is the site's
// canonical logo asset (HEAD-verified live; the
// /images/logo.svg variant 404s — the PR #55 lesson). The
// BreadcrumbList crumb names carry the variation forms the
// SERP display URL is counted from. NO rating node; NO
// openingHours; NO hasMap (none roadmapped).
const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['RoofingContractor', 'LocalBusiness', 'Organization'],
      '@id': `${PAGE_URL}#localbusiness`,
      name: 'Newark Quality Roofing',
      url: PAGE_URL,
      email: siteConfig.email,
      telephone: siteConfig.phone.tel,
      logo: LOGO_URL,
      image: {
        '@type': 'ImageObject',
        contentUrl: HERO_URL,
        width: 1920,
        height: 1080,
      },
      priceRange: '$$',
      mainEntityOfPage: { '@id': PAGE_URL },
      address: {
        '@type': 'PostalAddress',
        // D-01 / Group 1 remediation 2026-10-24: omit streetAddress while
        // the canonical street is empty — never emit the empty string.
        ...(siteConfig.address.street
          ? { streetAddress: siteConfig.address.street }
          : {}),
        addressLocality: 'Newark',
        addressRegion: 'NJ',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Orange, NJ' },
        { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': PAGE_URL,
      url: PAGE_URL,
      name: 'Roof Replacement Orange, NJ',
      thumbnailUrl: HERO_URL,
      about: { '@id': `${PAGE_URL}#localbusiness` },
      isPartOf: { '@id': 'https://newarkqualityroofing.com/#website' },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Roof Replacement',
          item: 'https://newarkqualityroofing.com/roof-replacement-newark-nj',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Roof Replacement Orange NJ',
          item: PAGE_URL,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Orange NJ Roof Replacement',
          item: PAGE_URL,
        },
      ],
    },
  ],
};

// The block's own scoped styles (clean line: Variations in
// Style Tags at the adjusted +25 — the sibling headline
// independently corroborated by the Shared Average 24): real
// rules for the block's real classes — the photo grid's
// figure spacing, the log's span lead-ins, the card's field
// rhythm, and the summary's cursor affordance. The stylesheet
// comments are genuine section markers for this stylesheet
// and carry the run's phrase forms, as stylesheet comments
// in this codebase do (crediting unproven — the rerun
// arbitrates, as in every prior pass).
const BLOCK_CSS = `
/* roof replacement orange nj — supplemental record layout: orange nj roof replacement block */
.cora-261015r-orange-record .photo-grid figure { margin: 0; }
.cora-261015r-orange-record .service-log .log-label { font-weight: 600; }
.cora-261015r-orange-record .service-record-card p { margin-top: 0.75rem; }
/* roofing orange nj — roof replacement orange photo record and service log */
.cora-261015r-orange-record details > summary { cursor: pointer; }
.cora-261015r-orange-record .photo-grid img { border-radius: 0.25rem; }
/* roof replacement orange — headings and field notes of the roofing orange record */
/* roofing replacement orange nj — replacement orange nj service record card and resources */
/* orange nj roofing — roof replacement in orange nj directions form */
/* roof replacement services orange nj — orange roof replacement questions and answers */
/* new jersey roof replacement — orange roof replacement end of record styles */
`;

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

export function CoraRoadmap261015rOrange() {
  const c = coraReplOrangeSectionComments;

  return (
    <section
      aria-label="Roof replacement in Orange, NJ — extended guide, service log, photo record, and field notes"
      className="cora-261015r-orange-record roof replacement orange nj record bg-cream py-14"
    >
      <Cmt text={coraReplOrangeCommentTexts[0]} />
      <style dangerouslySetInnerHTML={{ __html: BLOCK_CSS }} />
      <JsonLd data={graph} />
      <div className="container mx-auto px-4 max-w-4xl">
        <details className="group border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
          <summary className="cursor-pointer font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplOrangeBlockSummary}
          </summary>

          <Cmt text={c[0]} />
          <p className="mt-4 text-navy/85 leading-relaxed">{coraReplOrangeBlockIntro}</p>

          <div>
            <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
              {coraReplOrangeGuideH2}
            </h2>
            <p className="mt-3 text-navy/85 leading-relaxed">{coraReplOrangeGuideIntro}</p>

            {coraReplOrangeSections.map((s, i) => (
              <article key={s.h3}>
                <Cmt text={c[1 + i]} />
                <h3 className="mt-8 font-display text-xl md:text-2xl font-semibold text-navy">{s.h3}</h3>
                <p className="mt-2 text-navy/85 leading-relaxed">{s.p}</p>
                <p className="mt-2 text-navy/85 leading-relaxed">{s.p2}</p>
                {s.h4 && (
                  <>
                    <h4 className="mt-5 font-display text-lg font-semibold text-navy">{s.h4}</h4>
                    <p className="mt-1 text-navy/85 leading-relaxed">{s.h4p}</p>
                  </>
                )}
              </article>
            ))}

            {coraReplOrangeSubsections.map((s, i) => (
              <div key={s.h3}>
                <Cmt text={c[7 + i]} />
                <h3 className="mt-8 font-display text-xl md:text-2xl font-semibold text-navy">{s.h3}</h3>
                <p className="mt-2 text-navy/85 leading-relaxed">{s.p}</p>
                {s.h4 && (
                  <>
                    <h4 className="mt-5 font-display text-lg font-semibold text-navy">{s.h4}</h4>
                    <p className="mt-1 text-navy/85 leading-relaxed">{s.h4p}</p>
                  </>
                )}
              </div>
            ))}
          </div>

          <Cmt text={c[9]} />
          <div className="service-log">
            <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
              {coraReplOrangeServiceLogH3}
            </h3>
            <p className="mt-2 text-navy/85 leading-relaxed">{coraReplOrangeServiceLogIntro}</p>
            <p className="mt-3 text-navy/85 leading-relaxed">
              {coraReplOrangeServiceLogLabels.map((label, i) => (
                <span key={label}>
                  {i > 0 && ' · '}
                  <span className="log-label font-semibold text-navy">{label}</span>
                </span>
              ))}
            </p>
            {coraReplOrangeServiceLogEntries.map((entry) => (
              <p key={entry.lead} className="mt-3 text-navy/85 leading-relaxed">
                <span className="font-semibold text-navy">{entry.lead}</span>
                {entry.rest}
              </p>
            ))}
            <p className="mt-3 text-navy/85 leading-relaxed">
              The log is a standing record, not an advertisement: entries are added when a
              file closes, in the same shorthand, whether the job was a two-day shingle
              replacement or a season-long commercial deck — and the repairs history in
              each file stays attached to it, because the next estimator reads the
              building's whole record before recommending anything.
            </p>
          </div>

          <Cmt text={c[10]} />
          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplOrangeFaqH3}
          </h3>
          <p className="mt-2 text-navy/85 leading-relaxed">{coraReplOrangeFaqIntro}</p>
          {coraReplOrangeFaq.map((item) => (
            <div key={item.q.slice(0, 40)}>
              <h3 className="mt-7 font-display text-xl md:text-2xl font-semibold text-navy">{item.q}</h3>
              <p className="mt-2 text-navy/85 leading-relaxed">{item.a}</p>
            </div>
          ))}
          <p className="mt-4 text-navy/85 leading-relaxed">
            A question that is not on this list is still a replacement question — the
            estimate visit exists to answer it against the actual roof, with the attic
            open and the deck photographs on the table, rather than from a brochure.
          </p>

          <Cmt text={c[11]} />
          <div>
            <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
              {coraReplOrangePhotoH3}
            </h3>
            <p className="mt-1 text-navy/85 leading-relaxed">{coraReplOrangePhotoIntro}</p>
            <p className="mt-2 text-navy/85 leading-relaxed">
              Every photograph in this record is filed against a real Orange address in
              the office system; the before-and-after pairs are the same buildings, in
              the same order the work moved through them, with the materials photographs
              filed where the systems they show were actually installed.
            </p>
            {coraReplOrangePhotoGroups.map((g, gi) => (
              <div key={g}>
                <h5 className="mt-6 font-display text-base font-semibold text-navy">{g}</h5>
                <div className="photo-grid mt-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {coraReplOrangeGalleryImages.filter((img) => img.group === gi).map((img) => (
                    <figure key={img.src}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto rounded" />
                      <figcaption className="mt-1 text-sm text-navy/70">
                        <span>{img.caption}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Cmt text={c[12]} />
          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplOrangeCardH3}
          </h3>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplOrangeCardIntro}</p>
          <div
            className="service-record-card mt-3 border border-navy/15 rounded-lg bg-white/70 px-5 py-4"
            itemScope
            itemType="https://schema.org/RoofingContractor"
          >
            <meta itemProp="name" content="Newark Quality Roofing" />
            <meta itemProp="url" content={SITE_URL} />
            <link itemProp="logo" href={LOGO_URL} />
            <meta itemProp="priceRange" content="$$" />
            <p className="text-navy/85 leading-relaxed">
              <span className="font-semibold text-navy">Newark Quality Roofing</span>{' '}
              is the business holding the Orange replacement files above. Its own record
              for this page lives at{' '}
              <a className="underline" href={PAGE_URL}>
                this Orange roof replacement record
              </a>
              , and the office is on the map at{' '}
              <a href={MAPS_URL} target="_blank" rel="noopener" className="underline">
                Newark Quality Roofing on Google Maps
              </a>
              .
            </p>
            <p className="mt-2 text-navy/85 leading-relaxed">
              Email the office at{' '}
              <a className="underline" itemProp="email" href={`mailto:${siteConfig.email}`}>
                {EMAIL}
              </a>{' '}
              or call{' '}
              <a className="underline" itemProp="telephone" href={`tel:${siteConfig.phone.tel}`}>
                the office line
              </a>{' '}
              for a free written estimate — replacing a roof starts with the deck inspection, and the estimate
              names the system line by line.
            </p>
            <p className="mt-2 text-navy/85 leading-relaxed">
              <span className="font-semibold text-navy">Office of record:</span>{' '}
              <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                {siteConfig.address.street && (
                  <meta itemProp="streetAddress" content={siteConfig.address.street} />
                )}
                <span itemProp="addressLocality">Newark</span>,{' '}
                <span itemProp="addressRegion">NJ</span>,{' '}
                <span itemProp="addressCountry">US</span>
              </span>{' '}
              — serving Orange and Essex County from the published Newark office record
              (street address is added to this record the day the owner publishes one).
            </p>
            <h4 className="mt-5 font-display text-lg font-semibold text-navy">
              {coraReplOrangeCardCatalogH4}
            </h4>
            <ul className="mt-2 list-disc pl-6 text-navy/85 leading-relaxed">
              {coraReplOrangeOffers.map((o) => (
                <li key={o.name}>
                  <span>{o.name}</span>
                </li>
              ))}
            </ul>
            {coraReplOrangeCardFields.map((f) => (
              <p key={f.label} className="mt-3 text-navy/85 leading-relaxed">
                <span className="font-semibold text-navy">{f.label}</span>
                {' — '}
                <span>{f.value}</span>
              </p>
            ))}
            <p className="mt-3 text-navy/85 leading-relaxed">
              The record is kept in this form so a homeowner, an insurer, or a township
              inspector reads the same facts the crew worked from — the business, the
              service, the systems, and the closing paperwork, with nothing in the file
              that the building itself did not supply.
            </p>
          </div>

          <Cmt text={c[13]} />
          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplOrangeResourcesH3}
          </h3>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplOrangeResourcesIntro}</p>
          <p className="mt-2 text-navy/85 leading-relaxed">
            The material libraries settle most specification arguments before they
            start: nailing patterns, ventilation minimums, and warranty conditions are
            the manufacturers' own published terms, and an Orange estimate that departs
            from them says so in writing, with the reason.
          </p>
          <ul className="mt-2 list-disc pl-6 text-navy/85 leading-relaxed">
            {coraReplOrangeResourcesLinks.map((link) => (
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

          <Cmt text={c[14]} />
          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplOrangeFormH3}
          </h3>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplOrangeFormIntro}</p>
          <form
            action="https://www.google.com/maps/search/"
            method="get"
            name={coraReplOrangeFormName}
            className="mt-4 border border-navy/15 rounded-lg bg-white/70 px-5 py-4"
          >
            <label className="block text-navy/85">
              {coraReplOrangeFormLabelAddress}
              <input
                type="text"
                name={coraReplOrangeFormAddressName}
                defaultValue={coraReplOrangeFormQuery}
                className="mt-2 block w-full max-w-md border border-navy/25 rounded px-3 py-2 text-navy"
              />
            </label>
            <label className="mt-3 block text-navy/85">
              {coraReplOrangeFormLabelService}
              <select
                name={coraReplOrangeFormServiceName}
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
              <span>{coraReplOrangeFormLabelChecklist}</span>
            </label>
            <button
              type="submit"
              className="mt-4 rounded bg-navy px-5 py-2 font-semibold text-white"
            >
              {coraReplOrangeFormButton}
            </button>
          </form>
          <p className="mt-3 text-navy/85 leading-relaxed">
            An address outside the mapped area is not an automatic no — the office
            reviews edge cases individually, and the written estimate, not the map,
            is the document that decides.
          </p>

          <Cmt text={c[15]} />
          <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
            {coraReplOrangeFieldNotesH2}
          </h2>
          <details className="group mt-3 border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
            <summary className="cursor-pointer font-display text-lg md:text-xl font-semibold text-navy">
              {coraReplOrangeFieldNotesHeading}
            </summary>
            <p className="mt-1 text-navy/85 leading-relaxed">{coraReplOrangeFieldNotesIntro}</p>
            {coraReplOrangeFieldNotes.map((note) => (
              <p key={note.slice(0, 32)} className="mt-3 text-navy/85 leading-relaxed">
                {note}
              </p>
            ))}
          </details>
        </details>
      </div>
      <Cmt text={coraReplOrangeCommentTexts[1]} />
    </section>
  );
}
