import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import {
  coraReplWestOrangeBlockIntro,
  coraReplWestOrangeBlockSummary,
  coraReplWestOrangeCardCatalogH4,
  coraReplWestOrangeCardFields,
  coraReplWestOrangeCardH3,
  coraReplWestOrangeCardIntro,
  coraReplWestOrangeCommentTexts,
  coraReplWestOrangeFieldNotes,
  coraReplWestOrangeFieldNotesH2,
  coraReplWestOrangeFieldNotesHeading,
  coraReplWestOrangeFieldNotesIntro,
  coraReplWestOrangeFormAddressName,
  coraReplWestOrangeFormButton,
  coraReplWestOrangeFormH3,
  coraReplWestOrangeFormH4,
  coraReplWestOrangeFormIntro,
  coraReplWestOrangeFormLabelAddress,
  coraReplWestOrangeFormLabelChecklist,
  coraReplWestOrangeFormLabelService,
  coraReplWestOrangeFormLegend,
  coraReplWestOrangeFormName,
  coraReplWestOrangeFormQuery,
  coraReplWestOrangeFormServiceName,
  coraReplWestOrangeGalleryImages,
  coraReplWestOrangeGuideH2,
  coraReplWestOrangeGuideIntro,
  coraReplWestOrangePhotoGroups,
  coraReplWestOrangePhotoH3,
  coraReplWestOrangePhotoIntro,
  coraReplWestOrangeQuestionAnswers,
  coraReplWestOrangeQuestionH2,
  coraReplWestOrangeQuestionH4,
  coraReplWestOrangeQuestionH4Text,
  coraReplWestOrangeQuestionIntro,
  coraReplWestOrangeResourcesH4,
  coraReplWestOrangeResourcesIntro,
  coraReplWestOrangeResourcesLinks,
  coraReplWestOrangeSections,
  coraReplWestOrangeServiceLogEntries,
  coraReplWestOrangeServiceLogH3,
  coraReplWestOrangeServiceLogIntro,
  coraReplWestOrangeServiceLogLabels,
  coraReplWestOrangeOffers,
  coraReplWestOrangeSectionComments,
} from '@/data/cora-261015r-west-orange-content';

// Cora 2026-10-15 phrase-roadmap block for the WEST ORANGE roof
// REPLACEMENT page ("roof replacement west orange nj"; the
// page's first Cora pass against this keyword). First
// supplemental block on this page; the page's six template FAQ
// questions ALREADY render as real H3s — no questions programme
// is promoted; the run's one questions line (H2) is served by
// the genuine question H2 inside this block. H1 frozen. Clean
// list, artifacts, skips and blocked families are recorded in
// the verification file
// (cora-phrase-verification-west-orange-replacement-2026-10-15.md).
// Coordination targets: +27 headings (3 H2 + 8 H3 + 16 H4)
// 22 -> 49 (the heading ask at full value — goal 49 = R6's
// genuine live-exact count); 33 images, all ALT, captioned figures;
// entity-dense H3 copy; a genuine njconsumeraffairs.gov
// reference link (R4 genuine); ONE block JSON-LD graph
// (business node with the Bloomfield-wiring PostalAddress,
// priceRange '$$', her ImageObject, areaServed, AND a
// ContactAction potentialAction targeting the business's real
// /contact page — both ContactAction lines are carried by two
// genuine setters, R4 + R6, live-verified; the batch's first
// ContactAction build, disclosed in both deliverable files) +
// WebPage node + BreadcrumbList (variation-form crumb names);
// a microdata service-record card mirroring the business node
// (PostalAddress itemscope + priceRange itemprop + an
// itemscope ContactAction twin); a <style> element (24-form
// comment programme; crediting unproven); ONE genuine Google
// Maps directions form wrapped in a <fieldset> with a
// variation-form <legend> (the form/fieldset variation lines);
// NO comment programme (no comment line is roadmapped);
// NO openingHours, NO hasMap property, NO ContactPoint, NO
// rating, NO social placeholders (roadmap-only discipline).

const PAGE_URL =
  'https://newarkqualityroofing.com/roof-replacement-west-orange-nj';
const HERO_URL =
  'https://newarkqualityroofing.com/images/heroes/city-west-orange.webp';
const MAPS_QUERY_URL =
  'https://www.google.com/maps?q=Newark+Quality+Roofing,+Newark,+NJ';

// Block stylesheet (clean line: Variations in Style Tags +24 —
// the goal IS the Shared Average itself, 24; the Fairfield
// ruling takes it at face value at the full ask; crediting is
// unproven — the rerun arbitrates). The stylesheet comments
// carry the run's verbatim phrase forms; the rules below them
// are the block's real, load-bearing layout rules.
const BLOCK_CSS = `
/* cora 261015r west orange record styles */
/* roof replacement west orange nj | west orange nj roof replacement | roof replacement west orange */
/* roofing west orange nj | roof replacement company west orange nj | roof replacement cost west orange nj */
/* roof replacement services west orange nj | shingle roof replacement west orange nj | roof replacement contractor west orange nj */
/* roof replacement estimate west orange nj | roofs replacement west orange nj | roofing replacement west orange nj */
/* replacement roof west orange nj | roof replacement in west orange | west orange new jersey roof replacement */
/* new roof west orange nj | roofing company west orange nj | roofing contractor west orange */
/* roofers west orange nj | roof replacement west orange new jersey | orange nj roof replacement */
/* roof repair west orange nj | roofing contractors west orange nj | roof replacement companies west orange nj */
.cora-261015r-west-orange-record .cora-261015r-details { border: 1px solid rgba(15, 23, 42, 0.12); }
.cora-261015r-west-orange-record summary { cursor: pointer; }
.cora-261015r-west-orange-record .cora-261015r-photo-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; }
.cora-261015r-west-orange-record figure { margin: 0; }
.cora-261015r-west-orange-record figcaption { font-size: 0.85rem; }
`;

function Cmt({ text }: { text: string }) {
  return <span dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }} />;
}

export function CoraRoadmap261015rWestOrange() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['RoofingContractor', 'LocalBusiness', 'Organization'],
        '@id': `${PAGE_URL}#localbusiness`,
        name: 'Newark Quality Roofing',
        url: 'https://newarkqualityroofing.com',
        telephone: siteConfig.phone.tel,
        email: siteConfig.email,
        logo: 'https://newarkqualityroofing.com/logo.svg',
        image: HERO_URL,
        priceRange: '$$',
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
        potentialAction: {
          '@type': 'ContactAction',
          target: 'https://newarkqualityroofing.com/contact',
        },
        areaServed: [
          { '@type': 'City', name: 'West Orange, NJ' },
          { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
        ],
        mainEntityOfPage: PAGE_URL,
      },
      {
        '@type': 'WebPage',
        '@id': PAGE_URL,
        url: PAGE_URL,
        name: 'Roof Replacement West Orange NJ',
        isPartOf: { '@id': 'https://newarkqualityroofing.com/#website' },
        about: { '@id': 'https://newarkqualityroofing.com/#business' },
        thumbnailUrl: HERO_URL,
        primaryImageOfPage: {
          '@type': 'ImageObject',
          contentUrl: HERO_URL,
          url: HERO_URL,
          width: 1920,
          height: 1080,
          caption: 'Roof replacement in West Orange, New Jersey',
        },
      },
      {
        '@type': 'BreadcrumbList',
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
            name: 'Roof Replacement West Orange NJ',
            item: PAGE_URL,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'West Orange NJ Roof Replacement',
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <section
      aria-label="Roof Replacement West Orange NJ — Extended Record"
      className="cora-261015r-west-orange-record mx-auto max-w-4xl px-4 pb-16"
    >
      {/* Style-tag variations programme (see BLOCK_CSS note). */}
      <style dangerouslySetInnerHTML={{ __html: BLOCK_CSS }} />
      {/* One block graph: business node (Bloomfield-wiring
          PostalAddress + priceRange + ContactAction) +
          WebPage + BreadcrumbList. */}
      <JsonLd data={graph} />
      <Cmt text={coraReplWestOrangeCommentTexts[0]} />
      <details className="cora-261015r-details rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <summary className="text-xl font-bold text-slate-900">
          {coraReplWestOrangeBlockSummary}
        </summary>
        <p className="mt-4 text-slate-700">{coraReplWestOrangeBlockIntro}</p>

        <Cmt text={coraReplWestOrangeSectionComments[0]} />
        <h2 className="mt-8 text-2xl font-bold text-slate-900">
          {coraReplWestOrangeGuideH2}
        </h2>
        <p className="mt-3 text-slate-700">{coraReplWestOrangeGuideIntro}</p>

        {coraReplWestOrangeSections.map((section, i) => (
          <article key={section.h3}>
            <Cmt text={coraReplWestOrangeSectionComments[1 + i]} />
            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              {section.h3}
            </h3>
            <p className="mt-2 text-slate-700">{section.p}</p>
            <p className="mt-2 text-slate-700">{section.p2}</p>
            {section.h4s.map((sub) => (
              <div key={sub.h4}>
                <h4 className="mt-5 text-lg font-semibold text-slate-800">
                  {sub.h4}
                </h4>
                <p className="mt-1 text-slate-700">{sub.h4p}</p>
              </div>
            ))}
          </article>
        ))}

        <Cmt text={coraReplWestOrangeSectionComments[5]} />
        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          {coraReplWestOrangeServiceLogH3}
        </h3>
        <p className="mt-3 text-slate-700">{coraReplWestOrangeServiceLogIntro}</p>
        <p className="mt-3 text-slate-700">
          {coraReplWestOrangeServiceLogLabels.map((label) => (
            <span key={label} className="mr-3 font-medium text-slate-800">
              {label}
            </span>
          ))}
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
          {coraReplWestOrangeServiceLogEntries.map((entry) => (
            <li key={entry.lead}>
              <strong>{entry.lead}</strong>
              {entry.rest}
            </li>
          ))}
        </ul>

        <Cmt text={coraReplWestOrangeSectionComments[6]} />
        <h2 className="mt-10 text-2xl font-bold text-slate-900">
          {coraReplWestOrangeQuestionH2}
        </h2>
        <p className="mt-3 text-slate-700">{coraReplWestOrangeQuestionIntro}</p>
        {coraReplWestOrangeQuestionAnswers.map((answer) => (
          <p key={answer.slice(0, 32)} className="mt-2 text-slate-700">
            {answer}
          </p>
        ))}
        <h4 className="mt-5 text-lg font-semibold text-slate-800">
          {coraReplWestOrangeQuestionH4}
        </h4>
        <p className="mt-1 text-slate-700">{coraReplWestOrangeQuestionH4Text}</p>

        <Cmt text={coraReplWestOrangeSectionComments[7]} />
        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          {coraReplWestOrangePhotoH3}
        </h3>
        <p className="mt-3 text-slate-700">{coraReplWestOrangePhotoIntro}</p>
        {[0, 1].map((group) => (
          <div key={group}>
            <h4 className="mt-5 text-lg font-semibold text-slate-800">
              {coraReplWestOrangePhotoGroups[group]}
            </h4>
            <div className="cora-261015r-photo-grid mt-3">
              {coraReplWestOrangeGalleryImages.filter(
                (image) => image.group === group,
              ).map((image) => (
                <figure key={image.src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-auto w-full rounded-lg"
                  />
                  <figcaption className="mt-1 text-slate-600">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}

        <Cmt text={coraReplWestOrangeSectionComments[8]} />
        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          {coraReplWestOrangeCardH3}
        </h3>
        <p className="mt-3 text-slate-700">{coraReplWestOrangeCardIntro}</p>
        <div
          itemScope
          itemType="https://schema.org/RoofingContractor"
          className="mt-4 rounded-xl border border-slate-200 p-5"
        >
          {siteConfig.address.street && (
            <meta itemProp="streetAddress" content={siteConfig.address.street} />
          )}
          <p className="font-semibold text-slate-900">
            <span itemProp="name">Newark Quality Roofing</span>
          </p>
          <link itemProp="logo" href="https://newarkqualityroofing.com/logo.svg" />
          <p className="mt-1 text-slate-700">
            <span
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              {siteConfig.address.street && (
                <meta itemProp="streetAddress" content={siteConfig.address.street} />
              )}
              <span itemProp="addressLocality">Newark</span>,{' '}
              <span itemProp="addressRegion">NJ</span>,{' '}
              <span itemProp="addressCountry">US</span>
            </span>{' '}
            · Price range: <span itemProp="priceRange">$$</span>
          </p>
          <p className="mt-1 text-slate-700">
            Email:{' '}
            <a itemProp="email" href={`mailto:${siteConfig.email}`} className="underline">
              {siteConfig.email}
            </a>{' '}
            · Phone:{' '}
            <a itemProp="telephone" href={`tel:${siteConfig.phone.tel}`} className="underline">
              {siteConfig.phone.display}
            </a>
          </p>
          <p className="mt-1 text-slate-700">
            Map listing:{' '}
            <a href={MAPS_QUERY_URL} className="underline">
              Newark Quality Roofing on Google Maps
            </a>{' '}
            · Contact page:{' '}
            <a href="https://newarkqualityroofing.com/contact" className="underline">
              Newark Quality Roofing contact page
            </a>
          </p>
          <span
            itemProp="potentialAction"
            itemScope
            itemType="https://schema.org/ContactAction"
          >
            <link
              itemProp="target"
              href="https://newarkqualityroofing.com/contact"
            />
            <meta itemProp="name" content="Contact Newark Quality Roofing" />
          </span>
          <h4 className="mt-4 text-lg font-semibold text-slate-800">
            {coraReplWestOrangeCardCatalogH4}
          </h4>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
            {coraReplWestOrangeOffers.map((offer) => (
              <li key={offer.name}>{offer.name}</li>
            ))}
          </ul>
          <dl className="mt-4 space-y-2 text-slate-700">
            {coraReplWestOrangeCardFields.map((field) => (
              <div key={field.label}>
                <dt className="font-medium text-slate-800">{field.label}</dt>
                <dd>{field.value}</dd>
              </div>
            ))}
          </dl>
          <h4 className="mt-5 text-lg font-semibold text-slate-800">
            {coraReplWestOrangeResourcesH4}
          </h4>
          <p className="mt-1 text-slate-700">{coraReplWestOrangeResourcesIntro}</p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
            {coraReplWestOrangeResourcesLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="underline">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={MAPS_QUERY_URL} className="underline">
                Newark Quality Roofing on Google Maps — the office listing and directions
              </a>
            </li>
          </ul>
        </div>

        <Cmt text={coraReplWestOrangeSectionComments[9]} />
        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          {coraReplWestOrangeFormH3}
        </h3>
        <p className="mt-3 text-slate-700">{coraReplWestOrangeFormIntro}</p>
        <form
          name={coraReplWestOrangeFormName}
          action="https://www.google.com/maps/search/"
          method="get"
          className="mt-4 space-y-3"
        >
          <fieldset className="space-y-3 rounded-xl border border-slate-200 p-4">
            <legend className="px-1 font-medium text-slate-800">
              {coraReplWestOrangeFormLegend}
            </legend>
            <label className="block text-slate-700">
              {coraReplWestOrangeFormLabelAddress}
              <input
                type="text"
                name={coraReplWestOrangeFormAddressName}
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </label>
            <label className="block text-slate-700">
              {coraReplWestOrangeFormLabelService}
              <select
                name={coraReplWestOrangeFormServiceName}
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2"
              >
                <option>Architectural asphalt shingles</option>
                <option>Natural slate</option>
                <option>Standing seam metal</option>
                <option>Membrane — EPDM, TPO or modified bitumen</option>
                <option>Not sure — read the roof first</option>
              </select>
            </label>
            <label className="block text-slate-700">
              <input type="checkbox" name="include office" defaultChecked />{' '}
              {coraReplWestOrangeFormLabelChecklist}
            </label>
            <input type="hidden" name="api" value="1" />
            <input type="hidden" name="query" value={coraReplWestOrangeFormQuery} />
            <button
              type="submit"
              className="rounded-md bg-slate-900 px-4 py-2 font-medium text-white"
            >
              {coraReplWestOrangeFormButton}
            </button>
          </fieldset>
        </form>
        <h4 className="mt-5 text-lg font-semibold text-slate-800">
          {coraReplWestOrangeFormH4}
        </h4>
        <p className="mt-1 text-slate-700">
          West Orange calls route by slope and access as much as by street: the
          level streets of Pleasantdale and Gregory stage from the driveway, the
          hillside Tudors stage from below the pitch, and the Llewellyn Park lanes
          are walked before any truck is scheduled. The directions check settles
          the route; the estimate visit settles the staging.
        </p>

        <Cmt text={coraReplWestOrangeSectionComments[10]} />
        <div>
          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            {coraReplWestOrangeFieldNotesH2}
          </h2>
          <p className="mt-3 font-medium text-slate-800">
            {coraReplWestOrangeFieldNotesHeading}
          </p>
          <p className="mt-2 text-slate-700">{coraReplWestOrangeFieldNotesIntro}</p>
          {coraReplWestOrangeFieldNotes.map((note) => (
            <p key={note.slice(0, 32)} className="mt-3 text-slate-700">
              {note}
            </p>
          ))}
        </div>
      </details>
      <Cmt text={coraReplWestOrangeCommentTexts[1]} />
    </section>
  );
}
