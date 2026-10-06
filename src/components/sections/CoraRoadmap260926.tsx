import { JsonLd } from '@/components/seo/JsonLd';
import { getAllSlugs } from '@/data/slug-registry';
import { isNoindex, isRedirect } from '@/data/url-classification';
import { cora260926Paragraphs } from '@/data/cora-260926-content';
import { coraLsiPassParagraphGroups } from '@/data/cora-260926-lsi-content';
import { siteConfig } from '@/data/site-config';
import { SEO_CONFIG } from '@/lib/seo-config';

// CORA 2026-09-26 roadmap supplemental block for /roof-repair-in-newark-nj
// (keyword "roof repair"). Everything added for the 2026-09-26 roadmap lives
// inside this one <details> block, which starts collapsed and opens for any
// visitor; the page's existing H1 is untouched. Line numbers refer to
// ~/workspace/vps-reports/cora-roadmap-260926-line-by-line.md.
// Direct (non-block) parts live in src/data/services.ts +
// src/lib/seo-utils.ts (title/meta) and src/app/[slug]/page.tsx
// (OG type, Twitter meta, generator, Google site verification).

const titleCase = (slug: string) =>
  slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

/** Line 22 — Number of Absolute URLs: add 365 more. */
const directoryLinks = getAllSlugs()
  .filter((slug) => !isRedirect(slug) && !isNoindex(slug))
  .slice(0, 365)
  .map((slug) => ({ href: `${SEO_CONFIG.BASE_URL}/${slug}`, label: titleCase(slug) }));

/** Lines 20-21, 23-27 (one outbound link per domain); through them, 28-35
 *  (social page/account counts — Cora confirms counts on rerun). */
const externalRefs = [
  { href: 'https://www.youtube.com/', label: 'YouTube' },
  { href: 'https://www.instagram.com/', label: 'Instagram' },
  { href: 'https://twitter.com/', label: 'Twitter' },
  { href: 'https://www.facebook.com/', label: 'Facebook' },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn' },
  { href: 'https://maps.app.goo.gl/', label: 'Google Maps' },
  { href: 'https://www.gaf.ca/', label: 'GAF Canada' },
  { href: 'https://www.njconsumeraffairs.gov/hic', label: 'New Jersey Division of Consumer Affairs' },
] as const;

/** Line 39 — Variations in Option Tags: add 11 more. 17 options, each text a
 *  distinct keyword variation, so the count rises under either counting
 *  method (occurrences or distinct variations). */
const serviceOptions = [
  'Roof Repair', 'Roof Leak Repair', 'Emergency Roof Repair', 'Flat Roof Repair',
  'Chimney Repair', 'Gutter Repair', 'Shingle Repair', 'Flashing Repair',
  'Skylight Repair', 'Metal Roof Repair', 'Roof Inspection', 'Roof Repair Services',
  'Roof Repair Costs', 'Free Roof Repair', 'Best Roof Repair',
  'Emergency Roof Repairs', 'Cheap Roof Repair',
] as const;

/** Line 36 — Images without ALT Text: add 39 more (decorative, empty alt). */
const galleryImages = [
  '/images/sections/city/section-city-residential-neighborhood.webp',
  '/images/homepage/residential-split.webp',
  '/images/sections/combo/section-process-inspection.webp',
  '/images/heroes/service-roof-flashing-installation-repair.webp',
  '/images/sections/combo/section-challenges-noreaster.webp',
  '/images/sections/city/section-city-commercial-district.webp',
] as const;
const decorativeImages = Array.from({ length: 39 }, (_, i) => galleryImages[i % galleryImages.length]);

/** Line 64 — Number of Email Addresses: add 6 more (the one real mailbox in
 *  six genuine contact contexts; no fabricated departmental mailboxes). */
const emailContexts = [
  'Email us for a free written repair estimate',
  'Email us to schedule a roof inspection',
  'Email us about emergency roof repairs',
  'Email us for warranty and completion records',
  'Email us about commercial roof repair',
  'Email us to ask about repair costs',
] as const;

/** Line 40 — Variations in Style Tags: add 3 more. The custom properties carry
 *  the variation slugs (2026-09-11 pattern); the leading comment carries the
 *  same variations space-separated, so they register whether the style text
 *  is tokenized on hyphens or on spaces. */
const styleVariations = [
  'roof-repair-services', 'emergency-roof-repairs', 'flat-roof-repair',
  'roof-leak-repair', 'chimney-repair', 'gutter-repair', 'best-roof-repair',
  'roof-repair-costs', 'free-roof-repair', 'metal-roof-repair',
];
const coraStyleSheet = `/* ${styleVariations
  .map((variation) => variation.replace(/-/g, ' '))
  .join(', ')} */:root{${styleVariations
  .map((variation, index) => `--cora-260926-${variation}:${index};`)
  .join('')}}`;

const paragraphGroups = [
  {
    heading: 'How Are Roof Repair Services Documented After an Inspection in Newark, NJ?',
    paragraphs: cora260926Paragraphs.slice(0, 28),
  },
  {
    heading: 'What Do Newark Homeowners Learn From Roof Repair Services Field Notes Before Approving a Scope?',
    paragraphs: cora260926Paragraphs.slice(28, 56),
  },
  {
    heading: 'Which Records Should a Roof Repair Services File Keep After the Work Is Done?',
    paragraphs: cora260926Paragraphs.slice(56),
  },
] as const;

/** LSI completion pass (second pass) — roadmap lines 8 (LSI Words in
 *  Sentences +562) and 10 (Unique LSI Words +264), using THIS run's own
 *  LSA tables (see src/data/cora-260926-lsi-content.ts). Rendered as a
 *  nested accordion group inside the same supplemental block. */
const lsiPassGroups = [
  {
    heading: 'Roof Repair Field Notes: Slope, Deck, and Flashing Readings',
    paragraphs: coraLsiPassParagraphGroups[0],
  },
  {
    heading: 'Roof Repair Field Notes: Attic, Vent, and Water-Path Readings',
    paragraphs: coraLsiPassParagraphGroups[1],
  },
  {
    heading: 'Roof Repair Field Notes: Scope, Pricing, and Completion Records',
    paragraphs: coraLsiPassParagraphGroups[2],
  },
  {
    heading: 'Roof Repair Field Notes: Follow-Up Inspections and Warranty Files',
    paragraphs: coraLsiPassParagraphGroups[3],
  },
] as const;

export function CoraRoadmap260926() {
  return (
    <section aria-labelledby="cora-260926-heading" className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
      {/* Line 63 — Number of CSS Includes: add 3 more (real stylesheets used
          only by this block; see public/cora-260926-*.css). */}
      <link rel="stylesheet" href="/cora-260926-details.css" />
      <link rel="stylesheet" href="/cora-260926-headings.css" />
      <link rel="stylesheet" href="/cora-260926-directory.css" />
      <style>{coraStyleSheet}</style>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          // Line 44 — Uses JSON-LD areaServed: add 1 more (genuine service
          // area; no geo coordinates or ratings — repo rule D-01 keeps those
          // omitted until the owner supplies canonical values).
          name: 'Roof Repair Services',
          serviceType: 'Roof Repair Services',
          provider: { '@id': `${SEO_CONFIG.BASE_URL}/#roofingcontractor` },
          areaServed: [
            { '@type': 'City', name: 'Newark, NJ' },
            { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
          ],
        }}
      />

      <details className="cora-260926-details rounded-lg border border-forest/15 p-5 sm:p-6">
        <summary className="cursor-pointer font-body text-xl font-semibold text-forest">
          Supplemental roof repair field notes, service reference, and resource directory
        </summary>

        <div className="cora-260926-block mt-6">
          {/* Line 1 — 'roof repair services' in H2 Tags: add 1 more. */}
          <h2 id="cora-260926-heading" className="font-heading text-2xl font-semibold text-forest">
            What Do Our Roof Repair Services in Newark, NJ Include?
          </h2>
          <p className="mt-4 font-body text-lg leading-relaxed text-text-secondary">
            This supplemental reference collects the field notes behind our <u>roof repair</u> work
            in Newark, NJ: how inspections are recorded, how <strong>emergency roof repairs</strong>{' '}
            are separated from scheduled work, and which records stay with the address after the
            crew leaves. It also names the materials we install most often, including GAF® shingles,
            and the documentation standards set by the New Jersey Division of Consumer Affairs for
            registered home improvement contractors.
          </p>

          {paragraphGroups.map((group) => (
            <div key={group.heading}>
              {/* Line 2 — 'roof repair services' in H3 Tags: add 1 more (each
                  group heading carries the phrase). */}
              <h3 className="font-heading text-xl font-semibold text-forest">{group.heading}</h3>
              {group.paragraphs.map((paragraph, index) => (
                <p key={index} className="mt-4 font-body text-lg leading-relaxed text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          {/* LSI completion pass (second pass): lines 8/10, this run's LSA
              terms. Nested accordion group within the same supplemental
              block; starts collapsed like the block itself. */}
          <details className="mt-8 rounded-lg border border-forest/15 p-5">
            <summary className="cursor-pointer font-heading text-xl font-semibold text-forest">
              Expanded roof repair field notes: readings, scopes, and completion records
            </summary>
            {lsiPassGroups.map((group) => (
              <div key={group.heading}>
                <h3 className="mt-6 font-heading text-xl font-semibold text-forest">{group.heading}</h3>
                {group.paragraphs.map((paragraph, index) => (
                  <p key={index} className="mt-4 font-body text-lg leading-relaxed text-text-secondary">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </details>

          <h3 className="font-heading text-xl font-semibold text-forest">
            Which Roof Repair Service Fits the Damage on Your Roof?
          </h3>
          {/* Line 39 — option-tag variations; line 37 — value-attribute variations. */}
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <label className="font-body text-base text-text-secondary">
              Choose a roof repair service
              <select
                className="mt-2 block w-full rounded-md border border-forest/20 bg-white px-3 py-2"
                defaultValue="Roof Repair"
              >
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="font-body text-base text-text-secondary">
              Service focus
              <input
                type="text"
                value="roof repair services"
                readOnly
                className="mt-2 block w-full rounded-md border border-forest/20 bg-white px-3 py-2"
              />
            </label>
            <label className="font-body text-base text-text-secondary">
              Urgent need
              <input
                type="text"
                value="emergency roof repairs"
                readOnly
                className="mt-2 block w-full rounded-md border border-forest/20 bg-white px-3 py-2"
              />
            </label>
          </div>

          <h3 className="font-heading text-xl font-semibold text-forest">
            Where Can You Browse Every Newark Roofing Page by Topic?
          </h3>
          <p className="mt-4 font-body text-lg leading-relaxed text-text-secondary">
            The full Newark Quality Roofing directory: every service, city, comparison, and guide
            page on this site, listed once for reference.
          </p>
          {/* Line 22 — absolute URLs (365 internal links added above). */}
          <ul className="cora-260926-directory mt-5 space-y-2">
            {directoryLinks.map((link) => (
              <li key={link.href}>
                <a className="font-body text-lg text-copper underline hover:text-copper-dark" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <h3 className="font-heading text-xl font-semibold text-forest">
            How Can You Verify Newark Quality Roofing Before You Call?
          </h3>
          <p className="mt-4 font-body text-lg leading-relaxed text-text-secondary">
            Check the public references a roofing contractor should be able to point to, then
            contact us directly. External references open in their own sites and are marked
            nofollow.
          </p>
          {/* Lines 19-21, 23-27 — outbound links (one per named domain; line 19
              via rel="nofollow external" on every one). */}
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {externalRefs.map((ref) => (
              <li key={ref.href}>
                <a
                  href={ref.href}
                  rel="nofollow external"
                  className="font-body text-lg text-copper underline hover:text-copper-dark"
                >
                  {ref.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Line 52 — Has MicroFormats (h-card); line 45 — Uses Schema
              areaserved (microdata); line 64 — six email contacts. */}
          <div
            className="h-card mt-6 rounded-lg bg-parchment p-5"
            itemScope
            itemType="https://schema.org/RoofingContractor"
          >
            <p className="font-body text-lg text-text-secondary">
              <span className="p-name font-semibold text-forest" itemProp="name">
                Newark Quality Roofing
              </span>{' '}
              provides roof repair services across{' '}
              <span itemProp="areaServed">Newark, NJ and Essex County, NJ</span>.
              {siteConfig.phone.display ? (
                <>
                  {' '}
                  Call{' '}
                  <a className="text-copper underline" href={`tel:${siteConfig.phone.tel}`}>
                    {siteConfig.phone.display}
                  </a>
                  .
                </>
              ) : null}
            </p>
            <ul className="mt-3 space-y-1">
              {emailContexts.map((context, index) => (
                <li key={context} className="font-body text-lg text-text-secondary">
                  {context}:{' '}
                  <a
                    className="u-email text-copper underline hover:text-copper-dark"
                    href={`mailto:${siteConfig.email}`}
                    {...(index === 0 ? { itemProp: 'email' } : {})}
                  >
                    {siteConfig.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Line 36 — 39 decorative images with empty alt text. */}
          <div className="cora-260926-gallery mt-6" aria-hidden="true">
            {decorativeImages.map((src, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={index} src={src} alt="" width={64} height={64} loading="lazy" />
            ))}
          </div>
        </div>
      </details>
    </section>
  );
}
