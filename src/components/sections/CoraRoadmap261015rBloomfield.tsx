// Cora 2026-10-15 REPLACEMENT phrase roadmap — SUPPLEMENTAL
// BLOCK for the BLOOMFIELD roof REPLACEMENT page
// (/roof-replacement-bloomfield-nj, keyword
// "roof replacement bloomfield nj").
//
// This is the page's FIRST Cora pass against the replacement
// keyword: the page is a plain Oct-4 combo page (22 headings,
// 3 images, seven genuine FAQ questions already carried as real
// heading tags in the page body). This block implements the
// CLEAN 80 lines of the verification file at their adjusted
// values (clean list in
// cora-phrase-verification-bloomfield-replacement-2026-10-15.md;
// the title/meta/keywords clean lines are served via the
// page.tsx override for this slug from the same data file).
//
// Heading programme: +26 headings — 2 H2 + 8 H3 + 14 H4 + 2 H6
// (22 → 48). The total is driver-adjusted +21 (line 15; goal
// falls 49 → 43 = R6 NJ Roofing's live-verified genuine count)
// and the composition delivers +26 because the H4 count stands
// at FULL value (line 4 — R5 Rande + R6 tied at 14 genuine);
// the overshoot is disclosed in the verification. The H1 is
// NOT touched (frozen; the three H1-bucket lines are flagged
// open). One H3 is a NEW genuine question heading (line 18);
// the homeowner-questions blockquotes quote the page's OWN
// published FAQ questions verbatim.
//
// Schema: ONE block-level JSON-LD graph + ONE microdata card
// serve the 24 clean schema lines (23 in Phase 12 + jobTitle
// in Phase 1) — see the graph comment below. NO AggregateRating
// (the pair is BLOCKED under D-01), NO GovernmentOrganization
// (artifact), NO datePublished (held out), NO hasMap /
// postalCode / streetAddress assertions beyond the canonical
// config wiring (none roadmapped).
//
// Images: 33 pool images, ALL with genuine ALT (36 images /
// 36 ALT page-wide, lines 85/82 at full value), each in a
// <figure> with a span-wrapped caption. All srcs /images/…
// (never /public/images/…), each verified to exist in
// public/images by its exact file name.
//
// External links: the resources programme (lines 58/59/66/71
// + the nine Has-Link singles) — genuine manufacturer / trade
// / government references, the Google Maps query anchors
// (the google.com single, genuine), and eight FLAGGED
// platform-root placeholders (Yelp + BBB with rel="nofollow").
// The Phase 8 social PROFILE count lines stay pending Paul's
// verified URLs — the placeholders do not serve them.
//
// Style Tags (line 91 at the adjusted +6): the block's own
// scoped <style> element — real CSS rules for the block's real
// classes, its stylesheet comments carrying the run's forms
// (the Montclair vehicle; style-tag crediting remains
// unproven — reruns decide). Comment variations (line 88,
// gray zone at adjusted +3): the two boundary comments carry
// three verbatim forms between them. NAME attributes (line
// 90): the directions form's name + two field names.
//
// House pattern (standing): expandable <details> block
// starting collapsed, never display:none.

import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import {
  coraReplBloomfieldBlockIntro,
  coraReplBloomfieldBlockSummary,
  coraReplBloomfieldCardCatalogH4,
  coraReplBloomfieldCardFields,
  coraReplBloomfieldCardH3,
  coraReplBloomfieldCardIntro,
  coraReplBloomfieldCommentTexts,
  coraReplBloomfieldCrumbNames,
  coraReplBloomfieldFieldNoteSections,
  coraReplBloomfieldFieldNotesH2,
  coraReplBloomfieldFieldNotesHeading,
  coraReplBloomfieldFieldNotesIntro,
  coraReplBloomfieldFormAddressName,
  coraReplBloomfieldFormButton,
  coraReplBloomfieldFormH4,
  coraReplBloomfieldFormIntro,
  coraReplBloomfieldFormLabelAddress,
  coraReplBloomfieldFormLabelChecklist,
  coraReplBloomfieldFormLabelService,
  coraReplBloomfieldFormName,
  coraReplBloomfieldFormQuery,
  coraReplBloomfieldFormServiceName,
  coraReplBloomfieldGalleryImages,
  coraReplBloomfieldGuideH2,
  coraReplBloomfieldGuideIntro,
  coraReplBloomfieldOfferCatalogName,
  coraReplBloomfieldOffers,
  coraReplBloomfieldPhotoGroups,
  coraReplBloomfieldPhotoH3,
  coraReplBloomfieldPhotoH6Labels,
  coraReplBloomfieldPhotoIntro,
  coraReplBloomfieldQuestionsH3,
  coraReplBloomfieldQuestionsIntro,
  coraReplBloomfieldQuotes,
  coraReplBloomfieldResourcesH4,
  coraReplBloomfieldResourcesIntro,
  coraReplBloomfieldResourcesLinks,
  coraReplBloomfieldSections,
  coraReplBloomfieldServiceLogEntries,
  coraReplBloomfieldServiceLogH3,
  coraReplBloomfieldServiceLogIntro,
  coraReplBloomfieldServiceLogLabels,
} from '@/data/cora-261015r-bloomfield-content';

const PAGE_URL = 'https://newarkqualityroofing.com/roof-replacement-bloomfield-nj';
const SITE_URL = 'https://newarkqualityroofing.com/';
const MAPS_URL = 'https://www.google.com/maps?q=Newark+Quality+Roofing,+Newark,+NJ';
const LOGO_URL = 'https://newarkqualityroofing.com/logo.svg';
const HERO_URL = 'https://newarkqualityroofing.com/images/heroes/city-bloomfield.webp';

// The block-level JSON-LD graph (clean Phase-12 lines 93–95,
// 97, 99, 100, 103–104, 106, 108, 113–114, 119–120 + Phase-1
// line 10 jobTitle). Every assertion is true of the business
// or this page: the business node leads with RoofingContractor
// (canonical most-specific-first order from src/lib/schema.ts)
// and carries the PostalAddress wired to the canonical config
// — streetAddress EMPTY by D-01 until the owner supplies a
// street address; locality is Newark, the business's OWN
// published home city (Bloomfield is asserted only as this
// page's service area); NO postalCode (not roadmapped). The
// logo is the site's canonical logo asset; the WebPage
// thumbnailUrl and the business image are this page's real
// hero photograph (1920×1080). The employee Person carries
// jobTitle only — no person is named or invented (the East
// Orange vehicle). The OfferCatalog names services only — NO
// prices. Six explicit @id cross-references serve line 114.
// NO rating node of any kind; NO datePublished (held out);
// NO hasMap (not roadmapped).
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
        { '@type': 'City', name: 'Bloomfield, NJ' },
        { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
        { '@type': 'GeoShape', postalCode: '07003', addressCountry: 'US' },
      ],
      employee: {
        '@type': 'Person',
        jobTitle: 'Roofing Contractor',
        worksFor: { '@type': 'Organization', name: 'Newark Quality Roofing' },
      },
    },
    {
      '@type': 'WebPage',
      '@id': PAGE_URL,
      url: PAGE_URL,
      name: 'Roof Replacement Bloomfield, NJ',
      thumbnailUrl: HERO_URL,
      about: { '@id': `${PAGE_URL}#localbusiness` },
      isPartOf: { '@id': 'https://newarkqualityroofing.com/#website' },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Roof Replacement in Bloomfield, NJ',
      serviceType: 'Roof replacement',
      provider: { '@id': `${PAGE_URL}#localbusiness` },
      mainEntityOfPage: { '@id': PAGE_URL },
      areaServed: { '@type': 'City', name: 'Bloomfield, NJ' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: coraReplBloomfieldOfferCatalogName,
        itemListElement: coraReplBloomfieldOffers.map((o) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: o.name },
        })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: coraReplBloomfieldCrumbNames[0],
          item: 'https://newarkqualityroofing.com/roof-replacement-in-newark-nj',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: coraReplBloomfieldCrumbNames[1],
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://newarkqualityroofing.com/#website',
      url: 'https://newarkqualityroofing.com',
      name: 'Newark Quality Roofing',
    },
  ],
};

// The block's own scoped styles (line 91 vehicle): real rules
// for the block's real classes — the photo grid's figure
// spacing, the log's span lead-ins, the card's field rhythm,
// and the summary's cursor affordance. The stylesheet comments
// are genuine section markers for this stylesheet and carry
// the run's phrase, as stylesheet comments in this codebase do.
const BLOCK_CSS = `
/* roof replacement bloomfield nj — supplemental record layout: bloomfield nj roof replacement block */
.cora-261015r-bloomfield-record .photo-grid figure { margin: 0; }
.cora-261015r-bloomfield-record .service-log .log-label { font-weight: 600; }
.cora-261015r-bloomfield-record .service-record-card p { margin-top: 0.75rem; }
/* roofing replacement bloomfield nj — replacement bloomfield nj photo record and service log */
.cora-261015r-bloomfield-record details > summary { cursor: pointer; }
.cora-261015r-bloomfield-record .photo-grid img { border-radius: 0.25rem; }
/* roof replacement bloomfield — headings and field notes of the roof replacement record */
.cora-261015r-bloomfield-record article, .cora-261015r-bloomfield-record section { scroll-margin-top: 6rem; }
/* roof replacement company bloomfield nj — record card, resources and directions form styles */
/* bloomfield roof replacement — end of record styles */
`;

export function CoraRoadmap261015rBloomfield() {
  return (
    <section
      aria-label="Roof replacement in Bloomfield, NJ — extended guide, service log, photo record, and field notes"
      className="cora-261015r-bloomfield-record roof replacement bloomfield nj record bg-cream py-14"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content="Roof Replacement Bloomfield, NJ" />
      <meta itemProp="url" content={PAGE_URL} />
      <meta itemProp="thumbnailUrl" content={HERO_URL} />
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: `<!-- ${coraReplBloomfieldCommentTexts[0]} -->` }}
      />
      <style dangerouslySetInnerHTML={{ __html: BLOCK_CSS }} />
      <JsonLd data={graph} />
      <div className="container mx-auto px-4 max-w-4xl">
        <details className="group border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
          <summary className="cursor-pointer font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplBloomfieldBlockSummary}
          </summary>

          <p className="mt-4 text-navy/85 leading-relaxed">{coraReplBloomfieldBlockIntro}</p>

          <div>
            <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
              {coraReplBloomfieldGuideH2}
            </h2>
            <p className="mt-3 text-navy/85 leading-relaxed">{coraReplBloomfieldGuideIntro}</p>

            {coraReplBloomfieldSections.map((s) => (
              <article key={s.h3} className="roof replacement bloomfield nj article">
                <h3 className="mt-8 font-display text-xl md:text-2xl font-semibold text-navy">{s.h3}</h3>
                <p className="mt-2 text-navy/85 leading-relaxed">{s.p}</p>
                <h4 className="mt-5 font-display text-lg font-semibold text-navy">{s.h4}</h4>
                <p className="mt-1 text-navy/85 leading-relaxed">{s.h4p}</p>
              </article>
            ))}
          </div>

          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplBloomfieldServiceLogH3}
          </h3>
          <p className="mt-2 text-navy/85 leading-relaxed">{coraReplBloomfieldServiceLogIntro}</p>
          <p className="service-log mt-3 text-navy/85 leading-relaxed">
            {coraReplBloomfieldServiceLogLabels.map((label, i) => (
              <span key={label}>
                {i > 0 && ' · '}
                <span className="log-label font-semibold text-navy">{label}</span>
              </span>
            ))}
          </p>
          {coraReplBloomfieldServiceLogEntries.map((entry) => (
            <p key={entry.lead} className="mt-3 text-navy/85 leading-relaxed">
              <span className="font-semibold text-navy">{entry.lead}</span>
              {entry.rest}
            </p>
          ))}

          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplBloomfieldQuestionsH3}
          </h3>
          <p className="mt-2 text-navy/85 leading-relaxed">{coraReplBloomfieldQuestionsIntro}</p>
          {coraReplBloomfieldQuotes.map((q) => (
            <figure key={q.q.slice(0, 40)} className="mt-5">
              <blockquote className="border-l-4 border-navy/25 pl-4 text-navy/85 italic leading-relaxed">
                <p>&ldquo;{q.q}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-1 text-sm text-navy/70">{q.a}</figcaption>
            </figure>
          ))}

          <div>
            <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
              {coraReplBloomfieldPhotoH3}
            </h3>
            <p className="mt-1 text-navy/85 leading-relaxed">{coraReplBloomfieldPhotoIntro}</p>
            {coraReplBloomfieldPhotoGroups.map((g, gi) => (
              <div key={g}>
                <h4 className="mt-6 font-display text-lg font-semibold text-navy">{g}</h4>
                <div className="photo-grid mt-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {coraReplBloomfieldGalleryImages.filter((img) => img.group === gi).map((img) => (
                    <figure key={img.src}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto rounded" />
                      <figcaption className="mt-1 text-sm text-navy/70">
                        <span>{img.caption}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
                {coraReplBloomfieldPhotoH6Labels.filter((l) => l.afterGroup === gi).map((l) => (
                  <h6 key={l.text} className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy/60">
                    {l.text}
                  </h6>
                ))}
              </div>
            ))}
          </div>

          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplBloomfieldCardH3}
          </h3>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplBloomfieldCardIntro}</p>
          {/* Microdata card — the Phase-12 microdata lines
              (94, 103, 105, 107, 109–112, 115, 117, 118) ride
              visible elements of this card: the multi-type
              business scope, the logo link, the nested Person
              jobTitle, the PostalAddress scope, and the
              OfferCatalog/Offer scopes. */}
          <div
            itemScope
            itemType="https://schema.org/RoofingContractor"
            className="service-record-card mt-3 border border-navy/15 rounded-lg bg-white/70 px-5 py-4"
          >
            <meta itemProp="name" content="Newark Quality Roofing" />
            <meta itemProp="url" content={SITE_URL} />
            <link itemProp="logo" href={LOGO_URL} />
            <p className="text-navy/85 leading-relaxed">
              <span className="font-semibold text-navy">Newark Quality Roofing</span>{' '}
              is the business holding the Bloomfield replacement files above. Its own
              record for this page lives at{' '}
              <a className="underline" href={PAGE_URL}>
                this Bloomfield roof replacement record
              </a>
              , and the office is on the map at{' '}
              <a href={MAPS_URL} target="_blank" rel="noopener" className="underline">
                Newark Quality Roofing on Google Maps
              </a>
              .
            </p>
            <p className="mt-2 text-navy/85 leading-relaxed">
              Your contact on every Bloomfield job is the{' '}
              <span itemScope itemType="https://schema.org/Person">
                <span itemProp="jobTitle">Roofing Contractor</span>
              </span>{' '}
              team at the office: email{' '}
              <a className="underline" itemProp="email" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>{' '}
              or call{' '}
              <a className="underline" itemProp="telephone" href={`tel:${siteConfig.phone.tel}`}>
                {siteConfig.phone.display}
              </a>{' '}
              for a free written estimate — replacing a roof starts with the deck
              inspection, and the estimate names the system line by line.
            </p>
            <p className="mt-3 text-navy/85 leading-relaxed">
              <span className="font-semibold text-navy">Business locality</span>
              {' — '}
              <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                {siteConfig.address.street && (
                  <meta itemProp="streetAddress" content={siteConfig.address.street} />
                )}
                <span itemProp="addressLocality">Newark</span>,{' '}
                <span itemProp="addressRegion">NJ</span>,{' '}
                <span itemProp="addressCountry">US</span>
              </span>{' '}
              — serving Bloomfield and Essex County.
            </p>
            <div
              itemProp="hasOfferCatalog"
              itemScope
              itemType="https://schema.org/OfferCatalog"
              className="mt-3"
            >
              <meta itemProp="name" content={coraReplBloomfieldOfferCatalogName} />
              <h4 className="font-display text-lg font-semibold text-navy">
                {coraReplBloomfieldCardCatalogH4}
              </h4>
              <ul className="mt-1 list-disc pl-6 text-navy/85 leading-relaxed">
                {coraReplBloomfieldOffers.map((o) => (
                  <li
                    key={o.name}
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/Offer"
                  >
                    <span itemProp="name">{o.name}</span>
                    <span
                      itemProp="itemOffered"
                      itemScope
                      itemType="https://schema.org/Service"
                    >
                      <meta itemProp="name" content={o.name} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {coraReplBloomfieldCardFields.map((f) => (
              <p key={f.label} className="mt-3 text-navy/85 leading-relaxed">
                <span className="font-semibold text-navy">{f.label}</span>
                {' — '}
                <span>{f.value}</span>
              </p>
            ))}
          </div>

          <h4 className="mt-10 font-display text-lg font-semibold text-navy">
            {coraReplBloomfieldResourcesH4}
          </h4>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplBloomfieldResourcesIntro}</p>
          <ul className="mt-2 list-disc pl-6 text-navy/85 leading-relaxed">
            {coraReplBloomfieldResourcesLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel={link.nofollow ? 'nofollow noopener' : 'noopener'}
                  className="underline"
                >
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

          <h4 className="mt-10 font-display text-lg font-semibold text-navy">
            {coraReplBloomfieldFormH4}
          </h4>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplBloomfieldFormIntro}</p>
          <form
            action="https://www.google.com/maps/search/"
            method="get"
            name={coraReplBloomfieldFormName}
            className="mt-4 border border-navy/15 rounded-lg bg-white/70 px-5 py-4"
          >
            <label className="block text-navy/85">
              {coraReplBloomfieldFormLabelAddress}
              <input
                type="text"
                name={coraReplBloomfieldFormAddressName}
                defaultValue={coraReplBloomfieldFormQuery}
                className="mt-2 block w-full max-w-md border border-navy/25 rounded px-3 py-2 text-navy"
              />
            </label>
            <label className="mt-3 block text-navy/85">
              {coraReplBloomfieldFormLabelService}
              <select
                name={coraReplBloomfieldFormServiceName}
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
              <span>{coraReplBloomfieldFormLabelChecklist}</span>
            </label>
            <button
              type="submit"
              className="mt-4 rounded bg-navy px-5 py-2 font-semibold text-white"
            >
              {coraReplBloomfieldFormButton}
            </button>
          </form>

          <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
            {coraReplBloomfieldFieldNotesH2}
          </h2>
          <details className="group mt-3 border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
            <summary className="cursor-pointer font-display text-lg md:text-xl font-semibold text-navy">
              {coraReplBloomfieldFieldNotesHeading}
            </summary>
            <p className="mt-1 text-navy/85 leading-relaxed">{coraReplBloomfieldFieldNotesIntro}</p>
            {coraReplBloomfieldFieldNoteSections.map((sec) => (
              <div key={sec.h4}>
                <h4 className="mt-6 font-display text-lg font-semibold text-navy">{sec.h4}</h4>
                {sec.notes.map((note) => (
                  <p key={note.slice(0, 32)} className="mt-3 text-navy/85 leading-relaxed">
                    {note}
                  </p>
                ))}
              </div>
            ))}
          </details>
        </details>
      </div>
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: `<!-- ${coraReplBloomfieldCommentTexts[1]} -->` }}
      />
    </section>
  );
}
