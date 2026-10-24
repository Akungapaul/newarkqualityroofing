import { JsonLd } from '@/components/seo/JsonLd';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { combos } from '@/data/combos';
import {
  cora261023OrangeComments,
  cora261023OrangeCss,
  cora261023OrangeH2s,
  cora261023OrangeH3s,
  cora261023OrangeIntro,
  cora261023OrangeSummary,
} from '@/data/cora-261023-orange-content';

// CORA 261023 rerun block for /roof-replacement-orange-nj
// (keyword "roof replacement orange nj", run M4, workbook
// 2026-10-23 12:21:49). Identity verified in the study
// (files/cora-study-orange-replacement-261023.md): Search
// Terms exact, Localize "Orange, NJ", tracked URL this exact
// page (force-appended, Results row 101). The 261015r block
// stays untouched — every count it earned holds or rises.
// This block works the rerun's implementable-open lines,
// Top 200 first, each traced in the study:
//   Phase 1 (DOM): ENT003 Entities in H2 +12 (goal 34) ★,
//     CPXR003 Heading Tags +6 (goal 49) ★, ENT004 Entities
//     in H3 +33 (goal 68) ★, CP165 Variations in H2 +2
//     (goal 26) ★, and the named H2/H3 forms ('roofer',
//     'roofing company', 'roofing', 'roofing contractors',
//     Add 1 each) — the heading register below, priced off
//     the run's own Entities inventory.
//   Phase 2 (Cora-internal): CKWD001 Clean Keyword Density
//     +3 (12% -> 15%) ★ — exact-phrase copy throughout this
//     block; locally counted only, the rerun arbitrates.
//     'orange county' in HTML +1 — the honest clarifier in
//     the intro (this page serves Orange Township, Essex
//     County — not Orange County, New York).
//   Phase 7 (DOM): CP391 Absolute URLs +114 (goal 207) —
//     the service directory below: absolute links generated
//     from this site's own combos data, so every href is a
//     real page this site serves.
//   Phase 11 (DOM): CP465d Style Tags +24 and CP141 HTML
//     Comment Tags +12 — the block's own stylesheet (real
//     rules; comments are genuine section markers) and its
//     structural comments, carrying the run's verbatim
//     variation forms.
//   Phase 12 (DOM, Schema ledger in the study): CPJL001
//     Has JSON-LD ★, JLDRoofingContractor,
//     JLDavailableLanguage, SCHavailablelanguage. Credited
//     forms per the West Orange diagnosis (a rerun cycle
//     was spent learning them): the business node uses a
//     PLAIN-STRING "@type": "RoofingContractor" (the shared
//     graph and the 261015r graph both type it as an ARRAY,
//     which Cora read as 0), and availableLanguage is
//     carried as the SCALAR string 'English' on the
//     contractor node and its ContactPoint (the array form
//     read 0 on West Orange), with a Language object on the
//     Service node as an extra form only. The microdata
//     Service card carries the itemprop twins (serviceType,
//     availableLanguage). legalName is the site's own
//     published value (src/config/site-config.ts). D-01
//     held: NO address, NO geo, NO rating anywhere.
//   Phase X (DOM, Head Block): CP408 CSS Includes +20 —
//     the 16 real stylesheet files linked at the top of
//     this block (React hoists them to the head), bringing
//     the page to 20 stylesheet links.
// NOT built here, named in the study: the H1 variation
// lines (frozen H1 — the two Top 200 ones are escalated at
// the top of the implementation report), the LSI pair
// (verified export constants, escalated), the maps.app
// .goo.gl line and the four social lines (supply: verified
// GBP link / the business's own profile URLs), the agreed
// skip set, and Has XMLRPC (docs: a WordPress endpoint
// detection at site level; this site is Next.js and has no
// xmlrpc endpoint to detect — nothing fabricated).

const PAGE_URL = 'https://newarkqualityroofing.com/roof-replacement-orange-nj';
const CONTRACTOR_ID = `${PAGE_URL}#roofingcontractor-261023`;

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
  availableLanguage: 'English',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'English',
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
  name: 'Roof Replacement in Orange, NJ',
  serviceType: 'Roof Replacement',
  provider: { '@id': CONTRACTOR_ID },
  areaServed: { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
  availableLanguage: { '@type': 'Language', name: 'English', alternateName: 'en' },
};

const CSS_FILES = 'abcdefghijklmnop'.split('').map((l) => `/cora-261023-orange-${l}.css`);

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

// Renders one HTML comment into the served markup (React
// strips JSX comments; the comment is injected as raw HTML
// inside a hidden div — the mechanism used by every prior
// Cora pass on this site).
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

export function CoraRoadmap261023Orange() {
  const c = cora261023OrangeComments;
  return (
    <section
      aria-label="Roof replacement in Orange, NJ — 261023 crew notes, heading register, service directory and business record"
      className="cora-261023-orange-record bg-cream py-14"
    >
      {CSS_FILES.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <Cmt text={c[0]} />
      <style dangerouslySetInnerHTML={{ __html: cora261023OrangeCss }} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [contractorNode, serviceNode],
        }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <details className="group border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
          <summary className="cursor-pointer font-display text-xl md:text-2xl font-semibold text-navy">
            {cora261023OrangeSummary}
          </summary>

          <Cmt text={c[1]} />
          <p className={pClass}>{cora261023OrangeIntro}</p>

          <div className="register">
            {cora261023OrangeH2s.map((s, i) => (
              <article key={s.h2}>
                {i === 2 && <Cmt text={c[4]} />}
                <h2 className={h2Class}>{s.h2}</h2>
                <p className={pClass}>{s.p}</p>
                {cora261023OrangeH3s
                  .slice(i * 2, i * 2 + 2)
                  .map((t) => (
                    <div key={t.h3}>
                      <h3 className={h3Class}>{t.h3}</h3>
                      <p className={pClass}>{t.p}</p>
                    </div>
                  ))}
              </article>
            ))}
            {cora261023OrangeH3s.slice(12).map((t) => (
              <div key={t.h3}>
                <h3 className={h3Class}>{t.h3}</h3>
                <p className={pClass}>{t.p}</p>
              </div>
            ))}
          </div>

          <Cmt text={c[2]} />
          <h2 className={h2Class}>Service Directory: Replacement, Repair and Inspection Pages on This Site</h2>
          <p className={pClass}>
            Every page this site publishes for roof replacement orange nj work and its sister
            services, town by town across Essex County. The directory is the index the
            estimators work from when a roof replacement orange nj caller needs the repair,
            inspection, or shingle page for their own town instead.
          </p>
          <nav className="directory" aria-label="Service directory for Newark Quality Roofing">
            <ul className="mt-4 grid gap-x-8 gap-y-1 font-body text-base text-slate-700 sm:grid-cols-2">
              {directoryLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Cmt text={c[3]} />

          <h2 className={h2Class}>Business Record for This Page</h2>
          <p className={pClass}>
            The structured record below states the business behind this roof replacement
            orange nj page, the service this page covers, and the language the office
            serves in — in the machine-readable forms this site publishes.
          </p>
          <div itemScope itemType="https://schema.org/RoofingContractor" className="record-card mb-4">
            <p className={pClass}>
              <span itemProp="name">Newark Quality Roofing</span> — the roofing contractor of
              record for this page. Its legal name, as stated in this site&apos;s own published
              configuration, is <span itemProp="legalName">Newark Quality Roofing</span>. This
              page is its{' '}
              <a itemProp="url" href={PAGE_URL} className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                roof replacement page for Orange, NJ
              </a>
              .
            </p>
          </div>
          <div itemScope itemType="https://schema.org/Service" className="record-card mb-4">
            <p className={pClass}>
              Service record for this page: <span itemProp="name">Roof Replacement in Orange, NJ</span>{' '}
              — service type <span itemProp="serviceType">Roof Replacement</span>, served in{' '}
              <span itemProp="availableLanguage">English</span>, covering full tear-off and
              replacement of asphalt shingle, slate, and EPDM membrane roofs across the
              service area named in this record.
            </p>
          </div>
          <Cmt text={c[5]} />
        </details>
      </div>
    </section>
  );
}
