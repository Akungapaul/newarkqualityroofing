import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import { siteConfig as canonicalConfig } from '@/config/site-config';
import { buildRoofingContractorNodeSchema } from '@/lib/schema';
import {
  coraReplVeronaBlockIntro,
  coraReplVeronaBlockSummary,
  coraReplVeronaCardFields,
  coraReplVeronaCardH3,
  coraReplVeronaCardIntro,
  coraReplVeronaCommentTexts,
  coraReplVeronaFieldNotes,
  coraReplVeronaFieldNotesH2,
  coraReplVeronaFieldNotesHeading,
  coraReplVeronaFieldNotesIntro,
  coraReplVeronaFormAddressName,
  coraReplVeronaFormButton,
  coraReplVeronaFormH3,
  coraReplVeronaFormIntro,
  coraReplVeronaFormLabelAddress,
  coraReplVeronaFormLabelChecklist,
  coraReplVeronaFormLabelService,
  coraReplVeronaFormName,
  coraReplVeronaFormQuery,
  coraReplVeronaFormServiceName,
  coraReplVeronaGalleryImages,
  coraReplVeronaGuideH2,
  coraReplVeronaGuideIntro,
  coraReplVeronaOffers,
  coraReplVeronaPhotoGroups,
  coraReplVeronaPhotoH3,
  coraReplVeronaPhotoIntro,
  coraReplVeronaQuotes,
  coraReplVeronaQuotesCaption,
  coraReplVeronaQuotesH3,
  coraReplVeronaQuotesIntro,
  coraReplVeronaResourcesIntro,
  coraReplVeronaResourcesLinks,
  coraReplVeronaSectionComments,
  coraReplVeronaSections,
  coraReplVeronaServiceLogEntries,
  coraReplVeronaServiceLogH3,
  coraReplVeronaServiceLogIntro,
  coraReplVeronaServiceLogLabels,
} from '@/data/cora-261015r-verona-content';

// Cora 2026-10-15 phrase-roadmap block for the VERONA roof
// REPLACEMENT page ("roof replacement verona nj"; the
// corrected rerun — the 2026-10-14 report was mis-keyed to
// the Glen Ridge page and never implemented; this page's only
// prior pass is the REPAIR pass, PR #21, on the sibling
// page). First supplemental block on this page. H1 frozen.
// Clean list, artifacts, skips and blocked families are
// recorded in the verification file
// (cora-phrase-verification-verona-replacement-2026-10-15.md).
// Coordination targets: +16 headings (2 H2 + 10 H3 + 2 H4 +
// 2 H5) 13 -> 29 (the heading ask priced off the genuine
// setter R2's 29, not the doorway headline 49); 18 images,
// all ALT, captioned figures; NO questions programme (no
// questions line is roadmapped — the page's own six FAQ
// questions appear verbatim inside blockquotes instead);
// ONE block JSON-LD graph (business node with the
// Bloomfield-wiring PostalAddress, priceRange '$$', canonical
// logo, page hero, areaServed, AND hasMap = the business's
// Google Maps query URL — the Montclair treatment; a Service
// node with serviceType + a 5-offer hasOfferCatalog, names
// only, no prices; WebPage; BreadcrumbList with
// variation-form crumb names); a microdata service-record
// card mirroring the graph (PostalAddress itemscope +
// priceRange + hasMap itemprop + OfferCatalog itemscope +
// Service itemscope with serviceType); ONE genuine Google
// Maps search form whose name and two field names carry
// verbatim variation forms (the NAME Attributes line); NO
// comment programme (boundary comments structural and
// phrase-light), NO <style> programme, NO openingHours, NO
// ContactPoint, NO ContactAction, NO rating, NO social
// placeholders (roadmap-only discipline).

const PAGE_URL =
  'https://newarkqualityroofing.com/roof-replacement-verona-nj';
const HERO_URL =
  'https://newarkqualityroofing.com/images/heroes/city-verona.webp';
const MAPS_QUERY_URL =
  'https://www.google.com/maps?q=Newark+Quality+Roofing,+Newark,+NJ';

function Cmt({ text }: { text: string }) {
  return <span dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }} />;
}

export function CoraRoadmap261015rVerona() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      buildRoofingContractorNodeSchema(),
      {
        '@type': ['RoofingContractor', 'LocalBusiness', 'Organization'],
        '@id': `${PAGE_URL}#localbusiness`,
        name: 'Newark Quality Roofing',
        // Group 2 credited-form package (2026-10-24): legalName
        // from the canonical config; scalar availableLanguage
        // 'English' (the Form Library form) on the node and its
        // ContactPoint; the streetAddress key emitted only when
        // the canonical value is non-empty (today EMPTY under
        // D-01 — an empty emission is a forbidden form).
        legalName: canonicalConfig.legalName,
        availableLanguage: 'English',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: siteConfig.phone.tel,
          contactType: 'customer service',
          areaServed: 'US',
          availableLanguage: 'English',
        },
        url: 'https://newarkqualityroofing.com',
        telephone: siteConfig.phone.tel,
        email: siteConfig.email,
        logo: 'https://newarkqualityroofing.com/logo.svg',
        image: HERO_URL,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          ...(siteConfig.address.street
            ? { streetAddress: siteConfig.address.street }
            : {}),
          addressLocality: 'Newark',
          addressRegion: 'NJ',
          addressCountry: 'US',
        },
        hasMap: MAPS_QUERY_URL,
        areaServed: [
          { '@type': 'City', name: 'Verona, NJ' },
          { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
        ],
        mainEntityOfPage: PAGE_URL,
      },
      {
        '@type': 'Service',
        '@id': `${PAGE_URL}#service`,
        name: 'Roof Replacement',
        serviceType: 'Roof Replacement',
        provider: { '@id': `${PAGE_URL}#localbusiness` },
        areaServed: { '@type': 'City', name: 'Verona, NJ' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Roof Replacement Verona NJ — Services',
          itemListElement: coraReplVeronaOffers.map((offer) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: offer },
          })),
        },
      },
      {
        '@type': 'WebPage',
        '@id': PAGE_URL,
        url: PAGE_URL,
        name: 'Roof Replacement Verona NJ',
        isPartOf: { '@id': 'https://newarkqualityroofing.com/#website' },
        about: { '@id': 'https://newarkqualityroofing.com/#business' },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          contentUrl: HERO_URL,
          url: HERO_URL,
          width: 1920,
          height: 1080,
          caption: 'Roof replacement in Verona, New Jersey',
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
            name: 'Roof Replacement Verona NJ',
            item: PAGE_URL,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Roofing Verona NJ',
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <section
      aria-label="Roof Replacement Verona NJ — Extended Record"
      className="cora-261015r-verona-record mx-auto max-w-4xl px-4 pb-16"
    >
      {/* One block graph: business node (Bloomfield-wiring
          PostalAddress + priceRange + hasMap) + Service node
          (serviceType + OfferCatalog) + WebPage +
          BreadcrumbList. */}
      <JsonLd data={graph} />
      <Cmt text={coraReplVeronaCommentTexts[0]} />
      <details className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <summary className="text-xl font-bold text-slate-900">
          {coraReplVeronaBlockSummary}
        </summary>
        <p className="mt-4 text-slate-700">{coraReplVeronaBlockIntro}</p>

        <Cmt text={coraReplVeronaSectionComments[0]} />
        <h2 className="mt-8 text-2xl font-bold text-slate-900">
          {coraReplVeronaGuideH2}
        </h2>
        <p className="mt-3 text-slate-700">{coraReplVeronaGuideIntro}</p>

        {coraReplVeronaSections.map((section, i) => (
          <article key={section.h3}>
            <Cmt text={coraReplVeronaSectionComments[1 + i]} />
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

        <Cmt text={coraReplVeronaSectionComments[6]} />
        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          {coraReplVeronaServiceLogH3}
        </h3>
        <p className="mt-3 text-slate-700">{coraReplVeronaServiceLogIntro}</p>
        <p className="mt-3 text-slate-700">
          {coraReplVeronaServiceLogLabels.map((label) => (
            <span key={label} className="mr-3 font-medium text-slate-800">
              {label}
            </span>
          ))}
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
          {coraReplVeronaServiceLogEntries.map((entry) => (
            <li key={entry.lead}>
              <strong>{entry.lead}</strong>
              {entry.rest}
            </li>
          ))}
        </ul>

        <Cmt text={coraReplVeronaSectionComments[7]} />
        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          {coraReplVeronaQuotesH3}
        </h3>
        <p className="mt-3 text-slate-700">{coraReplVeronaQuotesIntro}</p>
        {coraReplVeronaQuotes.map((question) => (
          <figure key={question} className="mt-4">
            <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-800">
              <p>{question}</p>
            </blockquote>
            <figcaption className="mt-1 pl-4 text-sm text-slate-500">
              {coraReplVeronaQuotesCaption}
            </figcaption>
          </figure>
        ))}

        <Cmt text={coraReplVeronaSectionComments[8]} />
        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          {coraReplVeronaPhotoH3}
        </h3>
        <p className="mt-3 text-slate-700">{coraReplVeronaPhotoIntro}</p>
        {[0, 1].map((group) => (
          <div key={group}>
            <h5 className="mt-5 text-base font-semibold text-slate-800">
              {coraReplVeronaPhotoGroups[group]}
            </h5>
            <div className="mt-3 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
              {coraReplVeronaGalleryImages.filter(
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
                  <figcaption className="mt-1 text-sm text-slate-600">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}

        <Cmt text={coraReplVeronaSectionComments[9]} />
        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          {coraReplVeronaCardH3}
        </h3>
        <p className="mt-3 text-slate-700">{coraReplVeronaCardIntro}</p>
        <div
          itemScope
          itemType="https://schema.org/RoofingContractor"
          className="mt-4 rounded-xl border border-slate-200 p-5"
        >
          {siteConfig.address.street ? (
            <meta itemProp="streetAddress" content={siteConfig.address.street} />
          ) : null}
          <p className="font-semibold text-slate-900">
            <span itemProp="name">Newark Quality Roofing</span>
            <meta itemProp="legalName" content={canonicalConfig.legalName} />
          </p>
          <link itemProp="logo" href="https://newarkqualityroofing.com/logo.svg" />
          <p className="mt-1 text-slate-700">
            <span
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              {siteConfig.address.street ? (
                <meta itemProp="streetAddress" content={siteConfig.address.street} />
              ) : null}
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
            <link itemProp="hasMap" href={MAPS_QUERY_URL} />
            <a href={MAPS_QUERY_URL} className="underline">
              Newark Quality Roofing on Google Maps
            </a>{' '}
            · Contact page:{' '}
            <a href="https://newarkqualityroofing.com/contact" className="underline">
              Newark Quality Roofing contact page
            </a>
          </p>
          <span
            itemProp="provider"
            itemScope
            itemType="https://schema.org/Service"
          >
            <meta itemProp="serviceType" content="Roof Replacement" />
            <meta itemProp="name" content="Roof Replacement" />
          </span>
          <div
            itemProp="hasOfferCatalog"
            itemScope
            itemType="https://schema.org/OfferCatalog"
          >
            <meta itemProp="name" content="Roof Replacement Verona NJ — Services" />
            <p className="mt-4 text-lg font-semibold text-slate-800">
              Roof replacement services offered in Verona
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
              {coraReplVeronaOffers.map((offer) => (
                <li
                  key={offer}
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <span
                    itemProp="itemOffered"
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <span itemProp="name">{offer}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <dl className="mt-4 space-y-2 text-slate-700">
            {coraReplVeronaCardFields.map((field) => (
              <div key={field.label}>
                <dt className="font-medium text-slate-800">{field.label}</dt>
                <dd>{field.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-lg font-semibold text-slate-800">
            Manufacturer references
          </p>
          <p className="mt-1 text-slate-700">{coraReplVeronaResourcesIntro}</p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
            {coraReplVeronaResourcesLinks.map((link) => (
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

        <Cmt text={coraReplVeronaSectionComments[10]} />
        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          {coraReplVeronaFormH3}
        </h3>
        <p className="mt-3 text-slate-700">{coraReplVeronaFormIntro}</p>
        <form
          name={coraReplVeronaFormName}
          action="https://www.google.com/maps/search/"
          method="get"
          className="mt-4 space-y-3"
        >
          <label className="block text-slate-700">
            {coraReplVeronaFormLabelAddress}
            <input
              type="text"
              name={coraReplVeronaFormAddressName}
              className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2"
            />
          </label>
          <label className="block text-slate-700">
            {coraReplVeronaFormLabelService}
            <select
              name={coraReplVeronaFormServiceName}
              className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2"
            >
              <option>Architectural asphalt shingles</option>
              <option>Natural slate</option>
              <option>Cedar shake</option>
              <option>Standing seam metal</option>
              <option>Membrane — EPDM, TPO or modified bitumen</option>
              <option>Not sure — read the roof first</option>
            </select>
          </label>
          <label className="block text-slate-700">
            <input type="checkbox" name="include office" defaultChecked />{' '}
            {coraReplVeronaFormLabelChecklist}
          </label>
          <input type="hidden" name="api" value="1" />
          <input type="hidden" name="query" value={coraReplVeronaFormQuery} />
          <button
            type="submit"
            className="rounded-md bg-slate-900 px-4 py-2 font-medium text-white"
          >
            {coraReplVeronaFormButton}
          </button>
        </form>

        <Cmt text={coraReplVeronaSectionComments[11]} />
        <div>
          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            {coraReplVeronaFieldNotesH2}
          </h2>
          <p className="mt-3 font-medium text-slate-800">
            {coraReplVeronaFieldNotesHeading}
          </p>
          <p className="mt-2 text-slate-700">{coraReplVeronaFieldNotesIntro}</p>
          {coraReplVeronaFieldNotes.map((note) => (
            <p key={note.slice(0, 32)} className="mt-3 text-slate-700">
              {note}
            </p>
          ))}
        </div>
      </details>
      <Cmt text={coraReplVeronaCommentTexts[1]} />
    </section>
  );
}
