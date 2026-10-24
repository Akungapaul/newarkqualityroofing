import { JsonLd } from '@/components/seo/JsonLd';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { combos } from '@/data/combos';
import {
  cora261023EastOrangeCatalogServices,
  cora261023EastOrangeComments,
  cora261023EastOrangeCss,
  cora261023EastOrangeH2s,
  cora261023EastOrangeH3s,
  cora261023EastOrangeH4s,
  cora261023EastOrangeIntro,
  cora261023EastOrangeSummary,
} from '@/data/cora-261023-east-orange-content';

// CORA 261023 rerun block for /roof-replacement-east-orange-nj
// (keyword "roof replacement east orange nj", run M3,
// workbook 2026-10-23 14:17:52). Identity verified in the
// study (files/cora-study-east-orange-replacement-261023.md):
// Search Terms exact, Localize "East Orange, NJ", tracked
// URL this exact page (Shared Data "Result 100"). The
// 261014r block stays untouched. This block works the
// rerun's implementable-open lines, Top 200 first:
//   Phase 1: Heading Tags +12 ★ (29 new headings → 66),
//     H3 Variations +3 ★ and H3 Entities +27 ★ (19 H3 titles
//     written entity-dense from the run's inventory), title
//     and meta forms served by the 261023 overrides in
//     page.tsx (this block's register supports them).
//   Phase 2: 'roofing company' in HTML +11 (the form carried
//     throughout the register), 'shingle replacement' +1,
//     Clean Keyword Density +3 ★ (the accordion mass itself;
//     the percent is Cora-computed).
//   Phase 6: Display URL +1 ★ and Link Text +1 ★ — carriers
//     built: the BreadcrumbList below (exact page crumb) and
//     the 261023 title's forms; SERP-measured, the slug stays
//     frozen under Rule 7 (stated in the study).
//   Phase 11: Comment Tags +12, Style Tags +26 (carriers in
//     the content file, counted on the built page).
//   Phase 12 (ledger in the study): Has JSON-LD ★, JLD
//     OfferCatalog + SCH offercatalog (the Nutley credited
//     pattern: node + microdata twin, the site's real
//     services, NO prices). GATED by name: JLD
//     GeoCoordinates + SCH geocoordinates (D-01) — no geo,
//     address or rating is emitted anywhere in this block.
//   Phase X: CSS Includes +69 — 69 real stylesheet files.
// Also served (Shared Data asks): H3 Tags +19 (the 19 H3s),
// Entities in H4 +3 (the record-section H4s), TITLE
// attributes +12 (on the directory anchors), Exact Matches
// in A Tags +2 (the two in-copy exact-phrase anchors),
// Absolute URLs (the 126-link directory), and two genuine
// external links (gaf.com, owenscorning.com — both named in
// this page's own copy; see the materials section).
// NOT built, named in the study: the H1 line (frozen H1;
// Top 200 escalated), the LSI pair (constants, escalated),
// Top 100 Shared Factors (derived), g.page (GBP supply),
// Phase 8 social (supply).

const PAGE_URL = 'https://newarkqualityroofing.com/roof-replacement-east-orange-nj';
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
  name: 'Roof Replacement in East Orange, NJ',
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
  itemListElement: cora261023EastOrangeCatalogServices.map((name) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name, provider: { '@id': CONTRACTOR_ID } },
  })),
};

const breadcrumbNode = {
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb-261023`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Newark Quality Roofing', item: 'https://newarkqualityroofing.com/' },
    { '@type': 'ListItem', position: 2, name: 'Roof Replacement East Orange NJ', item: PAGE_URL },
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

const CSS_FILES = Array.from({ length: 69 }, (_, i) => `/cora-261023-east-orange-${String(i + 1).padStart(2, '0')}.css`);

// H3 distribution across the 7 H2 sections: 3,3,3,3,3,2,2 = 19.
const H3_SLICES: [number, number][] = [
  [0, 3],
  [3, 6],
  [6, 9],
  [9, 12],
  [12, 15],
  [15, 17],
  [17, 19],
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
const h4Class = 'mt-6 font-display text-lg font-semibold text-navy';
const pClass = 'mt-3 text-navy/85 leading-relaxed';

export function CoraRoadmap261023EastOrange() {
  const c = cora261023EastOrangeComments;
  return (
    <section
      aria-label="Roof replacement in East Orange, NJ — 261023 city record, roofer's register, service directory and business record"
      className="cora-261023-east-orange-record bg-cream py-14"
    >
      {CSS_FILES.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <Cmt text={c[0]} />
      <style dangerouslySetInnerHTML={{ __html: cora261023EastOrangeCss }} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [contractorNode, serviceNode, catalogNode, breadcrumbNode, navNode],
        }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <details className="group border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
          <summary className="cursor-pointer font-display text-xl md:text-2xl font-semibold text-navy">
            {cora261023EastOrangeSummary}
          </summary>

          <Cmt text={c[1]} />
          <p className={pClass}>{cora261023EastOrangeIntro}</p>

          <div className="register">
            {cora261023EastOrangeH2s.map((s, i) => (
              <article key={s.h2}>
                {i === 2 && <Cmt text={c[2]} />}
                {i === 5 && <Cmt text={c[3]} />}
                <h2 className={h2Class}>{s.h2}</h2>
                <p className={pClass}>{s.p}</p>
                {cora261023EastOrangeH3s.slice(H3_SLICES[i][0], H3_SLICES[i][1]).map((t) => (
                  <div key={t.h3}>
                    <h3 className={h3Class}>{t.h3}</h3>
                    <p className={pClass}>{t.p}</p>
                  </div>
                ))}
              </article>
            ))}
          </div>

          <h2 className={h2Class}>Service Directory: This Site's Own Pages, Town by Town</h2>
          <p className={pClass}>
            The index the estimators work from: this page&apos;s own{' '}
            <a href="#eo261023-directory" className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
              roof replacement east orange nj
            </a>{' '}
            directory of every page this site publishes for the six core services across
            Essex County, so a roofing company caller in any town lands on the right page.
          </p>
          <nav
            id="eo261023-directory"
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
          <Cmt text={c[4]} />

          <h2 className={h2Class}>Business Record for This Page</h2>
          <p className={pClass}>
            Manufacturer references for the materials named in the register above:{' '}
            <a href="https://www.gaf.com" target="_blank" rel="noopener" className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
              GAF
            </a>{' '}
            and{' '}
            <a href="https://www.owenscorning.com" target="_blank" rel="noopener" className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
              Owens Corning
            </a>{' '}
            publish the shingle specifications this office installs to.
          </p>
          <p className={pClass}>
            The structured record below states the roofing company behind this roof
            replacement East Orange NJ page, the service this page covers, the services the
            office offers, and the language it serves in — in the machine-readable forms
            this site publishes. Copyright © 2026 Newark Quality Roofing — this East Orange
            replacement record is the office&apos;s working record for the page.
          </p>
          <h4 className={h4Class}>{cora261023EastOrangeH4s[0]}</h4>
          <div itemScope itemType="https://schema.org/RoofingContractor" className="record-card mb-4">
            <link itemProp="logo" href={LOGO_URL} />
            <link itemProp="image" href={IMAGE_URL} />
            <p className={pClass}>
              <span itemProp="name">Newark Quality Roofing</span> — the roofing contractor of
              record for this page. Its legal name, as stated in this site&apos;s own published
              configuration, is <span itemProp="legalName">Newark Quality Roofing</span>. This
              page is its{' '}
              <a itemProp="url" href={PAGE_URL} className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                roof replacement page for East Orange, NJ
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
          <h4 className={h4Class}>{cora261023EastOrangeH4s[1]}</h4>
          <div itemScope itemType="https://schema.org/Service" className="record-card mb-4">
            <p className={pClass}>
              Service record for this page: <span itemProp="name">Roof Replacement in East Orange, NJ</span>{' '}
              — service type <span itemProp="serviceType">Roof Replacement</span>, served in{' '}
              <span itemProp="availableLanguage" itemScope itemType="https://schema.org/Language">
                <span itemProp="name">English</span> (<span itemProp="alternateName">en</span>)
              </span>
              , covering full tear-off and replacement of slate, asphalt shingle, and flat
              membrane roofs across the service area named in this record.
            </p>
          </div>
          <h4 className={h4Class}>{cora261023EastOrangeH4s[2]}</h4>
          <div itemScope itemType="https://schema.org/OfferCatalog" className="record-card mb-4" id="eo261023-catalog">
            <p className={pClass}>
              <span itemProp="name">Roofing services offered by Newark Quality Roofing</span>:{' '}
              {cora261023EastOrangeCatalogServices.map((name, i) => (
                <span key={name}>
                  <span itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                    <span itemProp="itemOffered" itemScope itemType="https://schema.org/Service">
                      <span itemProp="name">{name}</span>
                    </span>
                  </span>
                  {i < cora261023EastOrangeCatalogServices.length - 1 ? ' · ' : '.'}
                </span>
              ))}{' '}
              The full list is this page&apos;s{' '}
              <a href="#eo261023-catalog" className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                roof replacement east orange nj
              </a>{' '}
              catalog of services, scoped from the same written reading as every replacement
              this roofing company signs.
            </p>
          </div>
          <Cmt text={c[5]} />
          <Cmt text={c[6]} />
          <Cmt text={c[7]} />
        </details>
      </div>
    </section>
  );
}
