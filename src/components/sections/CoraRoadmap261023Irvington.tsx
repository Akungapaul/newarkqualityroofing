import { JsonLd } from '@/components/seo/JsonLd';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { combos } from '@/data/combos';
import {
  cora261023IrvingtonCatalogServices,
  cora261023IrvingtonComments,
  cora261023IrvingtonCss,
  cora261023IrvingtonH2s,
  cora261023IrvingtonH3s,
  cora261023IrvingtonIntro,
  cora261023IrvingtonSpanForms,
  cora261023IrvingtonSummary,
} from '@/data/cora-261023-irvington-content';

// CORA 261023 rerun block for /roof-replacement-irvington-nj
// (keyword "roof replacement irvington nj", run M3,
// workbook 2026-10-23 15:35:38). Identity verified in the
// study (files/cora-study-irvington-replacement-261023.md):
// Search Terms exact, Localize "Irvington, NJ", tracked
// URL this exact page (Results row 56). The 261015r block
// stays untouched. The study documents this run's Phase 2
// goal-setter pollution (franchise/directory/coverage-map
// corpus; goals 38x the tracked page) and the honest-field
// treatment: this block is the genuine register, and the
// eight polluted lines are escalated BY NAME at the top of
// the implementation report with the setter evidence.
// Lines this block works:
//   Phase 1: Title Variations +1 ★, 'roof repair' and
//     'irvington nj' in Title (the 261023 overrides in
//     page.tsx), 'roof' in H1-H6, Meta forms (overrides).
//   Phase 2: CKWD +1 ★ (the accordion mass), Unique
//     Variations +2 ★ and Distinct Entities +4 ★ (Phase 4)
//     via the register's diverse forms and entity-rich copy.
//   Phase 6: Display URL +2 ★ / Link Text +2 ★ — carriers:
//     the BreadcrumbList below + the new title's forms (the
//     slug stays frozen under Rule 7); Link Text Length +39
//     and Summary Length/Variations ride on the overrides.
//   Phase 11: Fieldset Tags +4 (the forms index below is a
//     genuine fieldset grouping), Style +24, Comments +4.
//   Phase 12 (ledger in the study): Has JSON-LD ★, JLD
//     image + SCH image (node + microdata twin); the full
//     graph pattern from the batch's credited precedent.
//     GATED by name: reviewCount pair, priceRange pair,
//     credentialCategory pair. No honest carrier: Product
//     pair (a service page). No address, geo, or rating is
//     emitted anywhere in this block.
//   Phase X: CSS Includes +15 (17 real files), Has
//     MicroFormats (the h-card classes on the record card
//     below: p-name, u-url, u-email).
// NOT built, named in the study: Variations in H1 (frozen
// H1; Top 200 escalated), the LSI pair (constants,
// escalated), the 8 polluted Phase 2/size lines (escalated
// with evidence), Rewritten Page Title (SERP behavior, no
// page carrier), the 2 corpus vendor links (no honest
// carrier), Phase 8 social x5 (supply), Pingbacks and the
// WordPress-theme pair (not a WordPress site), skip set.

const PAGE_URL = 'https://newarkqualityroofing.com/roof-replacement-irvington-nj';
const CONTRACTOR_ID = `${PAGE_URL}#roofingcontractor-261023`;
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

const serviceNode = {
  '@type': 'Service',
  '@id': `${PAGE_URL}#service-261023`,
  name: 'Roof Replacement in Irvington, NJ',
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
  itemListElement: cora261023IrvingtonCatalogServices.map((name) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name, provider: { '@id': CONTRACTOR_ID } },
  })),
};

const breadcrumbNode = {
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb-261023`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Newark Quality Roofing', item: 'https://newarkqualityroofing.com/' },
    { '@type': 'ListItem', position: 2, name: 'Roof Replacement Irvington NJ', item: PAGE_URL },
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

const CSS_FILES = Array.from({ length: 17 }, (_, i) => `/cora-261023-irvington-${String(i + 1).padStart(2, '0')}.css`);

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

export function CoraRoadmap261023Irvington() {
  const c = cora261023IrvingtonComments;
  return (
    <section
      aria-label="Roof replacement in Irvington, NJ — 261023 township record, roofer's register, forms index, service directory and business record"
      className="cora-261023-irvington-record bg-cream py-14"
    >
      {CSS_FILES.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <Cmt text={c[0]} />
      <style dangerouslySetInnerHTML={{ __html: cora261023IrvingtonCss }} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [contractorNode, serviceNode, catalogNode, breadcrumbNode, navNode],
        }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <details className="group border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
          <summary className="cursor-pointer font-display text-xl md:text-2xl font-semibold text-navy">
            {cora261023IrvingtonSummary}
          </summary>

          <Cmt text={c[1]} />
          <p className={pClass}>{cora261023IrvingtonIntro}</p>

          <div className="register">
            {cora261023IrvingtonH2s.map((s, i) => (
              <article key={s.h2}>
                {i === 2 && <Cmt text={c[2]} />}
                {i === 5 && <Cmt text={c[3]} />}
                <h2 className={h2Class}>{s.h2}</h2>
                <p className={pClass}>{s.p}</p>
                {cora261023IrvingtonH3s.slice(H3_SLICES[i][0], H3_SLICES[i][1]).map((t) => (
                  <div key={t.h3}>
                    <h3 className={h3Class}>{t.h3}</h3>
                    <p className={pClass}>{t.p}</p>
                  </div>
                ))}
              </article>
            ))}
          </div>

          <h2 className={h2Class}>Forms Index: The Vocabulary of This Record</h2>
          <fieldset className="mt-3">
            <legend className="font-body text-base text-navy/85">
              The forms this page covers, grouped as the office files them — the same
              phrases the register above works with:
            </legend>
            <p className="forms-index mt-3 leading-relaxed">
              {cora261023IrvingtonSpanForms.map((f) => (
                <span key={f} className="rounded border border-navy/15 bg-white/70 px-2 py-0.5 font-body text-sm text-navy/85">
                  {f}
                </span>
              ))}
            </p>
          </fieldset>
          <Cmt text={c[4]} />

          <h2 className={h2Class}>Service Directory: This Site's Own Pages, Town by Town</h2>
          <p className={pClass}>
            The index the estimators work from when a roof replacement Irvington NJ caller
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
            Irvington NJ page, the service this page covers, the services the office
            offers, and the language it serves in — in the machine-readable forms this site
            publishes. Copyright © 2026 Newark Quality Roofing — this Irvington replacement
            record is the office&apos;s working record for the page.
          </p>
          <div itemScope itemType="https://schema.org/RoofingContractor" className="record-card h-card mb-4">
            <link itemProp="logo" href={LOGO_URL} />
            <link itemProp="image" href={IMAGE_URL} />
            <p className={pClass}>
              <span itemProp="name" className="p-name">Newark Quality Roofing</span> — the
              roofing contractor of record for this page. Its legal name, as stated in this
              site&apos;s own published configuration, is{' '}
              <span itemProp="legalName">Newark Quality Roofing</span>. This page is its{' '}
              <a itemProp="url" href={PAGE_URL} className="u-url text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                roof replacement page for Irvington, NJ
              </a>
              . Write to the office at{' '}
              <a itemProp="email" href={`mailto:${EMAIL}`} className="u-email text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
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
              Service record for this page: <span itemProp="name">Roof Replacement in Irvington, NJ</span>{' '}
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
              {cora261023IrvingtonCatalogServices.map((name, i) => (
                <span key={name}>
                  <span itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                    <span itemProp="itemOffered" itemScope itemType="https://schema.org/Service">
                      <span itemProp="name">{name}</span>
                    </span>
                  </span>
                  {i < cora261023IrvingtonCatalogServices.length - 1 ? ' · ' : '.'}
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
