import { JsonLd } from '@/components/seo/JsonLd';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { combos } from '@/data/combos';
import {
  cora261023BloomfieldCatalogServices,
  cora261023BloomfieldComments,
  cora261023BloomfieldCss,
  cora261023BloomfieldH2s,
  cora261023BloomfieldH3s,
  cora261023BloomfieldIntro,
  cora261023BloomfieldSpanForms,
  cora261023BloomfieldSummary,
} from '@/data/cora-261023-bloomfield-content';

// CORA 261023 rerun block for /roof-replacement-bloomfield-nj
// (keyword "roof replacement bloomfield nj", run M3,
// workbook 2026-10-23 15:36:58). Identity verified in the
// study (files/cora-study-bloomfield-replacement-261023.md):
// Search Terms exact, Localize "Bloomfield, NJ", tracked
// URL this exact page (Result 30). The 261015r block stays
// untouched. Lines this block works:
//   Phase 1: Title Variations +1 ★ (the 261023 overrides in
//     page.tsx), H3 Entities +11 ★, Heading Tags +1 ★,
//     Meta Variations +2 / Length +104 / Word Count +17 /
//     'new jersey' form (overrides), Leading Variations in
//     H1-H6 +2 ★ and H1H2H3 +1 ★ (headings that open with
//     variation forms), 'bloomfield roofing' in H1-H6.
//   Phase 2: CKWD +1 ★ (the accordion mass), 'bloomfield
//     new jersey' in HTML.
//   Phase 6: Display URL +1 ★ / Link Text +1 ★ — carriers:
//     the BreadcrumbList below + the new title's forms (the
//     slug stays frozen under Rule 7); Link Text Length +28
//     rides on the override.
//   Phase 11: Span Tags +13 ★ (forms index + microdata
//     spans), Host Citations +2 (the two definitional
//     reference links in the reference line below).
//   Phase 12 (ledger in the study): JLD ContactPoint + JLD
//     contactType + SCH contactpoint + SCH contacttype (the
//     batch credited pattern), JLD LocalBusiness (a distinct
//     plain-string node) + SCH localbusiness (the card's
//     dual-type microdata), Entity References +1 (the
//     graph's @id cross-references), SCH brand (the business
//     name as its own brand, in the card + on the node).
//     GATED by name x14: diversityPolicy pair, givenName/
//     familyName x4, GeoCircle/geoRadius x4, openingHours
//     pair, foundingDate pair. Form not evidenced x2:
//     productSupported pair (not guessed, per Amendment 2).
//     No address, geo, rating, hours, founding date, or
//     named person is emitted anywhere in this block.
//   Phase X: Has Trademarks + Number of Trademarks (the
//     factual attribution line in the materials section),
//     CSS Includes +7 (9 real files).
// NOT built, named in the study: Variations in H1 (frozen
// H1; Top 200 escalated), the LSI pair (constants,
// escalated), Page Size KB (skip set; escalated), Images
// without ALT +9 (refused — the house standard is ALT on
// every image; escalated for Paul's ruling), URL Domain /
// Host Name variations (no carrier), the Houzz and
// policies.google.com corpus links (no honest carrier),
// Phase 8 social x4 (supply), remaining skip set.

const PAGE_URL = 'https://newarkqualityroofing.com/roof-replacement-bloomfield-nj';
const CONTRACTOR_ID = `${PAGE_URL}#roofingcontractor-261023`;
const LOCALBUSINESS_ID = `${PAGE_URL}#localbusiness-261023`;
const LOGO_URL = 'https://newarkqualityroofing.com/logo.svg';
const IMAGE_URL = 'https://newarkqualityroofing.com/images/heroes/service-roof-replacement.webp';
const EMAIL = 'info@billnackexpress.com';

const TOWNS: string[] = [
  'Newark',
  'East Orange',
  'Orange',
  'West Orange',
  'Montclair',
  'Bloomfield',
  'Belleville',
  'Nutley',
  'Irvington',
  'Maplewood',
  'South Orange',
  'Livingston',
  'Millburn',
  'Cedar Grove',
  'Verona',
  'Glen Ridge',
  'Caldwell',
  'Essex Fells',
  'Fairfield',
  'North Caldwell',
  'Roseland',
];

const contractorNode = {
  '@type': 'RoofingContractor',
  '@id': CONTRACTOR_ID,
  name: 'Newark Quality Roofing',
  legalName: 'Newark Quality Roofing',
  brand: 'Newark Quality Roofing',
  url: PAGE_URL,
  logo: LOGO_URL,
  image: IMAGE_URL,
  email: EMAIL,
  availableLanguage: 'English',
  contactPoint: {
    '@type': 'ContactPoint',
    '@id': `${PAGE_URL}#contactpoint-261023`,
    contactType: 'customer service',
    availableLanguage: 'English',
    email: EMAIL,
    url: PAGE_URL,
  },
  areaServed: [
    ...TOWNS.map((town) => ({
      '@type': 'City',
      name: `${town}, NJ`,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
    })),
    { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
    { '@type': 'State', name: 'New Jersey' },
  ],
};

const localBusinessNode = {
  '@type': 'LocalBusiness',
  '@id': LOCALBUSINESS_ID,
  name: 'Newark Quality Roofing',
  legalName: 'Newark Quality Roofing',
  url: PAGE_URL,
  logo: LOGO_URL,
  image: IMAGE_URL,
  email: EMAIL,
};

const serviceNode = {
  '@type': 'Service',
  '@id': `${PAGE_URL}#service-261023`,
  name: 'Roof Replacement in Bloomfield, NJ',
  serviceType: 'Roof Replacement',
  provider: { '@id': CONTRACTOR_ID },
  areaServed: { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
  availableLanguage: { '@type': 'Language', name: 'English', alternateName: 'en' },
};

const catalogNode = {
  '@type': 'OfferCatalog',
  '@id': `${PAGE_URL}#offercatalog-261023`,
  name: 'Roofing services offered by Newark Quality Roofing',
  provider: { '@id': CONTRACTOR_ID },
  itemListElement: cora261023BloomfieldCatalogServices.map((name) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name, provider: { '@id': CONTRACTOR_ID } },
  })),
};

const breadcrumbNode = {
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb-261023`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Newark Quality Roofing', item: 'https://newarkqualityroofing.com/' },
    { '@type': 'ListItem', position: 2, name: 'Roof Replacement Bloomfield NJ', item: PAGE_URL },
  ],
};

const DIRECTORY_SERVICES = [
  'roof-replacement',
  'roof-repair',
  'emergency-roof-repair',
  'roof-inspection',
  'roof-leak-repair',
  'asphalt-shingle-roofing',
];

const cityName = new Map(cities.map((c) => [c.id, c.name]));
const serviceName = new Map(services.map((s) => [s.id, s.name]));
const directoryLinks = combos
  .filter((c) => DIRECTORY_SERVICES.includes(c.serviceId))
  .map((c) => ({
    href: `https://newarkqualityroofing.com/${c.slug}`,
    label: `${serviceName.get(c.serviceId)} ${cityName.get(c.cityId)} NJ`,
  }));

const navNode = {
  '@type': 'SiteNavigationElement',
  '@id': `${PAGE_URL}#sitenavigation-261023`,
  name: 'Newark Quality Roofing service directory',
  itemListElement: directoryLinks.slice(0, 21).map((l) => l.href),
};

const CSS_FILES = 'abcdefghi'.split('').map((l) => `/cora-261023-bloomfield-${l}.css`);

// H3 distribution across the 7 H2 sections: 2 each = 14.
const H3_SLICES: [number, number][] = [
  [0, 2],
  [2, 4],
  [4, 6],
  [6, 8],
  [8, 10],
  [10, 12],
  [12, 14],
];

function Cmt({ text }: { text: string }) {
  return (
    <div
      aria-hidden="true"
      style={{ display: 'none' }}
      dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }}
    />
  );
}

const h2Class = 'mt-10 font-display text-2xl md:text-3xl font-semibold text-navy';
const h3Class = 'mt-8 font-display text-xl md:text-2xl font-semibold text-navy';
const pClass = 'mt-3 text-navy/85 leading-relaxed';

export function CoraRoadmap261023Bloomfield() {
  const c = cora261023BloomfieldComments;
  return (
    <section
      aria-label="Roof replacement in Bloomfield, NJ — 261023 township record, roofer's register, forms index, reference notes and business record"
      className="cora-261023-bloomfield-record bg-cream py-14"
    >
      {CSS_FILES.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <Cmt text={c[0]} />
      <style dangerouslySetInnerHTML={{ __html: cora261023BloomfieldCss }} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [contractorNode, localBusinessNode, serviceNode, catalogNode, breadcrumbNode, navNode],
        }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <details className="group border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
          <summary className="cursor-pointer font-display text-xl md:text-2xl font-semibold text-navy">
            {cora261023BloomfieldSummary}
          </summary>

          <Cmt text={c[1]} />
          <p className={pClass}>{cora261023BloomfieldIntro}</p>

          <div className="register">
            {cora261023BloomfieldH2s.map((s, i) => (
              <article key={s.h2}>
                {i === 2 && <Cmt text={c[2]} />}
                {i === 5 && <Cmt text={c[3]} />}
                <h2 className={h2Class}>{s.h2}</h2>
                <p className={pClass}>{s.p}</p>
                {cora261023BloomfieldH3s.slice(H3_SLICES[i][0], H3_SLICES[i][1]).map((t) => (
                  <div key={t.h3}>
                    <h3 className={h3Class}>{t.h3}</h3>
                    <p className={pClass}>{t.p}</p>
                  </div>
                ))}
              </article>
            ))}
          </div>

          <p className={pClass}>
            Reference notes for the materials terms used above: the standard definitions of{' '}
            <a href="https://en.wikipedia.org/wiki/Slate" target="_blank" rel="noopener" className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
              slate
            </a>{' '}
            as a roofing material and of the{' '}
            <a href="https://en.wikipedia.org/wiki/Asphalt_shingle" target="_blank" rel="noopener" className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
              asphalt shingle
            </a>{' '}
            are the ones this record follows.
          </p>
          <Cmt text={c[4]} />

          <h2 className={h2Class}>Forms Index: The Vocabulary of This Record</h2>
          <p className={pClass}>
            The forms this page covers, indexed as the office files them — the same phrases
            the register above works with, gathered in one place for the homeowner comparing
            scopes:
          </p>
          <p className="forms-index mt-3 leading-relaxed">
            {cora261023BloomfieldSpanForms.map((f) => (
              <span key={f} className="rounded border border-navy/15 bg-white/70 px-2 py-0.5 font-body text-sm text-navy/85">
                {f}
              </span>
            ))}
          </p>

          <h2 className={h2Class}>Service Directory: This Site's Own Pages, Town by Town</h2>
          <p className={pClass}>
            The index the estimators work from when a roof replacement Bloomfield NJ caller
            needs the repair, inspection, or shingle page for their own town instead: every
            page this site publishes for the six core services across Essex County.
          </p>
          <nav
            className="directory"
            aria-label="Service directory for Newark Quality Roofing"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
          >
            <ul className="mt-4 grid gap-x-8 gap-y-1 font-body text-base text-slate-700 sm:grid-cols-2">
              {directoryLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} title={l.label} className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Cmt text={c[5]} />

          <h2 className={h2Class}>Business Record for This Page</h2>
          <p className={pClass}>
            The structured record below states the business behind this roof replacement
            Bloomfield NJ page, the service this page covers, the services the office
            offers, and the language it serves in — in the machine-readable forms this site
            publishes. Copyright © 2026 Newark Quality Roofing — this Bloomfield replacement
            record is the office&apos;s working record for the page.
          </p>
          <div
            itemScope
            itemType="https://schema.org/RoofingContractor"
            className="record-card mb-4"
          >
            <span itemScope itemType="https://schema.org/LocalBusiness">
              <meta itemProp="name" content="Newark Quality Roofing" />
              <meta itemProp="url" content="https://newarkqualityroofing.com" />
            </span>
            <link itemProp="logo" href={LOGO_URL} />
            <link itemProp="image" href={IMAGE_URL} />
            <p className={pClass}>
              <span itemProp="name">Newark Quality Roofing</span> — the roofing contractor of
              record for this page. Its legal name, as stated in this site&apos;s own published
              configuration, is <span itemProp="legalName">Newark Quality Roofing</span>, and
              its brand, as published, is <span itemProp="brand">Newark Quality Roofing</span>.
              This page is its{' '}
              <a itemProp="url" href={PAGE_URL} className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                roof replacement page for Bloomfield, NJ
              </a>
              . Write to the office at{' '}
              <a itemProp="email" href={`mailto:${EMAIL}`} className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                {EMAIL}
              </a>
              .
            </p>
            <p className={pClass}>
              Contact point for this page:{' '}
              <span itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                <span itemProp="contactType">customer service</span>, served in{' '}
                <span itemProp="availableLanguage">English</span>, by email at{' '}
                <span itemProp="email">{EMAIL}</span>
              </span>
              .
            </p>
          </div>
          <div itemScope itemType="https://schema.org/Service" className="record-card mb-4">
            <p className={pClass}>
              Service record for this page: <span itemProp="name">Roof Replacement in Bloomfield, NJ</span>{' '}
              — service type <span itemProp="serviceType">Roof Replacement</span>, served in{' '}
              <span itemProp="availableLanguage" itemScope itemType="https://schema.org/Language">
                <span itemProp="name">English</span> (<span itemProp="alternateName">en</span>)
              </span>
              , covering full tear-off and replacement of slate, asphalt shingle, and flat
              membrane roofs across the service area named in this record.
            </p>
          </div>
          <div itemScope itemType="https://schema.org/OfferCatalog" className="record-card mb-4">
            <p className={pClass}>
              <span itemProp="name">Roofing services offered by Newark Quality Roofing</span>:{' '}
              {cora261023BloomfieldCatalogServices.map((name, i) => (
                <span key={name}>
                  <span itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                    <span itemProp="itemOffered" itemScope itemType="https://schema.org/Service">
                      <span itemProp="name">{name}</span>
                    </span>
                  </span>
                  {i < cora261023BloomfieldCatalogServices.length - 1 ? ' · ' : '.'}
                </span>
              ))}{' '}
              Scoped from the same written reading as every replacement this office signs.
            </p>
          </div>
          <Cmt text={c[6]} />
          <Cmt text={c[7]} />
        </details>
      </div>
    </section>
  );
}
