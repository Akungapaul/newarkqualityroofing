import Link from 'next/link';
import Image from 'next/image';
import { JsonLd } from '@/components/seo/JsonLd';
import { RoofRepairGuideSchema } from '@/components/sections/RoofRepairGuide';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { generateComboSlug, generateServicePageSlug } from '@/lib/slug-utils';
import { siteConfig } from '@/data/site-config';
import { SEO_CONFIG } from '@/lib/seo-config';
import { NEWARK_REPAIR_GALLERY } from '@/data/roof-repair-newark-gallery';
import { NEWARK_REPAIR_FAQS } from '@/data/roof-repair-newark-restructure';

// RESTRUCTURE 2026-10-23 (Paul's direction, on the lean test page): Paul
// judged the lean page did not communicate to the customer and directed a
// five-part restructure (Who we are / What we do / Why we are the best at
// what we do, argued through proof-led headings / Where we do it / How we
// do it) built on the LAST Cora report, run 261014 ('roof repair newark
// nj'). Blueprint: lean-restructure-newark-repair-blueprint-2026-10-23.md;
// study + per-line dispositions: cora-study-newark-repair-261014.md.
// Paul's amendments of 2026-10-23: (1) the run's image lines (L21/L22,
// goal 143 images / 143 ALT) are served in FULL by the collapsed photo
// gallery below, sourced from the site's existing image pool; (2) the six
// FAQ questions render as collapsed <details> accordions with the question
// H3 in the <summary>, and the FAQPage schema is extended (not replaced)
// with the same six in ServiceTemplate; (3) the page's lead forms are
// minimized on mobile (LeadForm mobileCollapsed, passed only for this
// page); (4) anything implementable that does not fit the visible
// sections is built to goal in the collapsed supplemental accordion at
// the foot of the body (NEWARK_REPAIR_SUPPLEMENTAL). Frozen: H1, title,
// slug, and every factual schema node the lean page carried. Copy facts
// come only from what the site already asserts. No trademark symbol is
// placed anywhere (run 261014 lines L30/L32 stay blocked pending Paul's
// brand confirmation).
//
// POP PASS 2026-10-24 (PageOptimizer Pro report 1982649, Paul's
// direction): POP's direction on this page is a REDUCTION pass and
// supersedes the Cora-built mass here. The supplemental accordion was
// removed, the gallery cut from 142 to 14 photographs (POP range 4-19),
// copy trimmed to POP's zone term ranges, H2 +2 (Housing, When), H4 +2,
// one honest cost table and one italic added, and two Google Maps embeds
// of Newark added in the Where section. H1 stays frozen; the title was
// rewritten in services.ts to carry the contiguous phrase. The FAQPage
// schema follows NEWARK_REPAIR_FAQS as before; no other schema changed.

const serviceHref = (id: string) => {
  const s = services.find((x) => x.id === id);
  return s ? `/${generateServicePageSlug(s.slug)}` : '/roofing-services';
};

const repairCityHref = (cityId: string) => {
  const c = cities.find((x) => x.id === cityId);
  return c ? `/${generateComboSlug('roof-repair', c.slug)}` : '/roofing-services';
};

const CSS_FILES = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
] as const;

const repairServiceCards = [
  {
    title: 'Roof Leak Repair in Newark',
    href: serviceHref('roof-leak-repair'),
    linkText: 'roof leak repair',
    text: 'A leak repair starts at the entry point: failed flashing, a lifted pipe boot, a cracked valley, or a seam that has opened. We trace the water path from the stain back to that entry point, then reseal or rebuild the detail that failed, and test the repair before the crew leaves. Read more about ',
    after: '.',
  },
  {
    title: 'Shingle Repair and Replacement',
    href: null,
    linkText: null,
    text: 'Missing, cracked, or wind-lifted shingles expose the underlayment and the deck. We replace the failed courses with matching material, reset fasteners to pattern, and check the surrounding courses for the same wear, so the patch blends into the roof instead of becoming its weakest area.',
    after: '',
  },
  {
    title: 'Flashing Repair at Chimneys, Valleys and Walls',
    href: serviceHref('roof-flashing-installation-repair'),
    linkText: 'flashing repair',
    text: 'Flashing seals the transitions where a roof meets a chimney, a wall, a skylight, or a valley, and it is where most leaks begin. We rebuild step flashing and counter-flashing in corrosion-resistant stock, reseat valley metal, and seal the joints to the manufacturer\u2019s detail. Read more about ',
    after: '.',
  },
  {
    title: 'Flat Roof Repair for Newark Properties',
    href: serviceHref('flat-roof-installation-repair'),
    linkText: 'flat roof repair',
    text: 'Flat and low-slope roofs in EPDM, TPO, and modified bitumen fail at seams, punctures, and ponding areas. We patch seams with manufacturer-approved bonding, seal punctures, and correct the spots where water stands longer than it should, on houses, row houses, and commercial blocks alike. Read more about ',
    after: '.',
  },
  {
    title: 'Emergency Roof Repair and Tarping',
    href: serviceHref('emergency-roof-repair'),
    linkText: 'emergency roof repair',
    text: 'When a storm opens a roof, the first job is to stop the water. Our crew tarps the damaged area, documents the damage for your insurer, and writes the damage repair scope before the permanent repair is priced in writing. Read more about ',
    after: '.',
  },
  {
    title: 'Storm Damage Repair',
    href: serviceHref('storm-damage-roof-repair'),
    linkText: 'storm damage',
    text: 'Wind lifts shingles and tears flashing loose; hail bruises the shingle mat. After a storm we document every damaged area with timestamped photographs, make the roof watertight, and write the repair scope in the format an insurance adjuster works from. Read more about ',
    after: '.',
  },
] as const;

const processSteps = [
  {
    title: 'Exterior Inspection and Leak Tracing',
    text: 'The visit starts on the roof and, where access allows, in the attic. The crew checks the shingle field, every flashing transition, the valleys, the vents and pipe boots, and the drainage path, then traces any active leak from its interior stain back to the entry point. Findings are photographed as they are found.',
  },
  {
    title: 'Written Estimate and Scope',
    text: 'Everything the inspection found is written into a scope: the failed component, the repair the manufacturer specifies, the materials, and the fixed price. The homeowner approves the written scope before work begins, and the price does not change when the work starts.',
  },
  {
    title: 'The Repair, Built to Specification',
    text: 'The crew completes the approved repair to the manufacturer\u2019s written specification: fasteners to pattern, flashing fabricated and lapped correctly, membrane seams bonded with the approved system. The area below the work is protected before the first shingle is lifted, and the finished exterior detail is water-tested before we call it done.',
  },
  {
    title: 'Final Verification and Photo Record',
    text: 'A lead verifies the finished repair is watertight, walks the surrounding courses and details, and runs a magnet sweep for stray nails. The homeowner receives the before-and-after photographs, the field notes, and the written workmanship warranty.',
  },
] as const;

export function LeanRoofRepairNewark() {
  return (
    <>
      {/* Run 261014 line L35 carrier: twelve real stylesheet files holding
          this page's restructure component rules (sections, cards, proof
          blocks, gallery, steps, costs, FAQ and supplemental accordions,
          the mobile form expander, the h-card). Files live in public/. */}
      {CSS_FILES.map((letter) => (
        // eslint-disable-next-line @next/next/no-css-tags
        <link
          key={letter}
          rel="stylesheet"
          href={`/cora-261014-newark-${letter}.css`}
        />
      ))}

      {/* Schema kept from the lean page: the planning guide graph and the
          Cora block's Service node (factual schema is not cut). */}
      <RoofRepairGuideSchema />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Roof Repair Services',
          serviceType: 'Roof Repair Services',
          provider: { '@id': `${SEO_CONFIG.BASE_URL}/#roofingcontractor` },
          areaServed: [
            { '@type': 'City', name: 'Newark, NJ' },
            { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
          ],
        }}
      />
      {/* Run 261014 line L24 carrier: the ItemList whose ListItems carry
          explicit position values 1-6, matching the What section's six
          service headings in order. Added alongside, never replacing, the
          schema above. */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Roof Repair Services in Newark, NJ',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@type': 'Service',
                name: 'Roof Leak Repair in Newark',
                url: `${SEO_CONFIG.BASE_URL}${serviceHref('roof-leak-repair')}`,
              },
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@type': 'Service',
                name: 'Shingle Repair and Replacement',
                url: `${SEO_CONFIG.BASE_URL}/roof-repair-in-newark-nj`,
              },
            },
            {
              '@type': 'ListItem',
              position: 3,
              item: {
                '@type': 'Service',
                name: 'Flashing Repair at Chimneys, Valleys and Walls',
                url: `${SEO_CONFIG.BASE_URL}${serviceHref('roof-flashing-installation-repair')}`,
              },
            },
            {
              '@type': 'ListItem',
              position: 4,
              item: {
                '@type': 'Service',
                name: 'Flat Roof Repair for Newark Properties',
                url: `${SEO_CONFIG.BASE_URL}${serviceHref('flat-roof-installation-repair')}`,
              },
            },
            {
              '@type': 'ListItem',
              position: 5,
              item: {
                '@type': 'Service',
                name: 'Emergency Roof Repair and Tarping',
                url: `${SEO_CONFIG.BASE_URL}${serviceHref('emergency-roof-repair')}`,
              },
            },
            {
              '@type': 'ListItem',
              position: 6,
              item: {
                '@type': 'Service',
                name: 'Storm Damage Repair',
                url: `${SEO_CONFIG.BASE_URL}${serviceHref('storm-damage-roof-repair')}`,
              },
            },
          ],
        }}
      />

      {/* WHO WE ARE */}
      <section className="nqr-rs" aria-labelledby="nqr-who-heading">
        <h2 id="nqr-who-heading" className="nqr-rs-h2 font-heading text-2xl font-bold text-forest">
          A Newark Roof Repair Contractor Built Around Root-Cause Diagnosis
        </h2>
        <p className="nqr-rs-lead mt-4 font-body text-text-secondary">
          Newark Quality Roofing is a roof repair contractor serving Newark and Essex County,
          and our work starts with a diagnosis, not a sales pitch. When a homeowner calls about
          a leak, a missing shingle, or a ceiling stain, the first job is to find the component
          that failed. Water rarely enters where the stain appears, so a repair planned from the
          stain alone usually misses the cause and the leak comes back.
        </p>
        <div className="nqr-rs-img relative aspect-[16/9] overflow-hidden">
          <Image
            src="/images/homepage/residential-split.webp"
            alt="Roofer fastening a replacement asphalt shingle beside exposed underlayment and roof deck"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
        </div>
        <p className="font-body text-base text-text-secondary">
          Every repair visit begins with an inspection of the roof surface, the flashing
          details, the attic side of the deck where it is accessible, and the drainage path.
          What the inspection finds is written into a scope before any work is priced: the
          failed component, the materials the repair needs, and the price. The homeowner
          approves that written scope before a single shingle is lifted.
        </p>
        <h4 className="mt-6 font-heading text-lg font-semibold text-forest">
          A Registered Home Improvement Contractor
        </h4>
        <p className="mt-2 font-body text-base text-text-secondary">
          Newark Quality Roofing is a registered home improvement contractor, insured in
          New Jersey, and carries general liability and workers compensation insurance. Every
          repair is performed by our own crews and documented with before-and-after
          photographs, so the homeowner can see what was found, what was repaired, and what
          the finished repair looks like. That record is also what a homeowner sends an
          insurer when storm damage is part of the claim.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="nqr-rs" aria-labelledby="nqr-what-heading">
        <h2 id="nqr-what-heading" className="nqr-rs-h2 font-heading text-2xl font-bold text-forest">
          Roof Repair Services in Newark
        </h2>
        <p className="mt-4 font-body text-base text-text-secondary">
          One visit can cover more than one failure, and most Newark roofs need exactly that: a
          leak at the chimney often travels with worn shingles above it, and a flat section can
          pond water against a wall flashing that has already split. The six repair services
          below are scoped on their own, priced in the same written scope, and repaired to the
          manufacturer&rsquo;s specification for the material already on your roof.
        </p>
        <div className="nqr-service-grid mt-6">
          {repairServiceCards.map((card) => (
            <article key={card.title} className="nqr-service-card">
              <h3 className="font-heading text-lg font-semibold text-forest">{card.title}</h3>
              <p className="font-body text-base text-text-secondary">
                {card.text}
                {card.href && card.linkText ? (
                  <>
                    <Link href={card.href}>{card.linkText}</Link>
                    {card.after}
                  </>
                ) : null}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* WHY: proof block 1 */}
      <section className="nqr-proof" aria-labelledby="nqr-why-1-heading">
        <h2 id="nqr-why-1-heading" className="font-heading text-2xl font-bold text-forest">
          Repairs That Find the Source, Not Just the Stain
        </h2>
        <p className="mt-4 font-body text-base text-text-secondary">
          Most failed repairs share one history: somebody fixed the place where water showed,
          not the place where water entered. A ceiling stain can sit ten feet from the failed
          detail, because water runs along the deck, a rafter, or the top of a wall before it
          drips. Our diagnosis follows that path, checking the flashing at every penetration
          and transition and the <em>evidence</em> the stain leaves behind, until the entry
          point is found. The written scope then names the failed component before it names a
          price, so a homeowner comparing scopes can see exactly which detail failed and what
          will be rebuilt.
        </p>
      </section>

      {/* WHY: proof block 2 */}
      <section className="nqr-proof" aria-labelledby="nqr-why-2-heading">
        <h2 id="nqr-why-2-heading" className="font-heading text-2xl font-bold text-forest">
          Repairs Built to Manufacturer Specification, So They Last
        </h2>
        <p className="mt-4 font-body text-base text-text-secondary">
          A repair lasts when it is installed the way the material&rsquo;s manufacturer wrote
          it, not the way habit suggests. Shingle courses have a fastener pattern and an
          exposure line; flashing has a bend, a lap, and a seal sequence; flat membranes have
          bonding and seam rules that decide whether a patch holds for a season or for years.
          When the source is a chimney, vent, or party wall, the pros on our own crews rebuild
          the flashing in place to those written specifications. Where a detail cannot be
          brought back to specification, the written scope says so and prices the rebuild
          instead.
        </p>
      </section>

      {/* WHY: proof block 3 */}
      <section className="nqr-proof" aria-labelledby="nqr-why-3-heading">
        <h2 id="nqr-why-3-heading" className="font-heading text-2xl font-bold text-forest">
          Every Repair Verified Watertight and Backed in Writing
        </h2>
        <p className="mt-4 font-body text-base text-text-secondary">
          A repair is not finished when the last fastener is set. A lead walks the repaired
          area, checks the detail that failed, confirms the surrounding courses and flashing
          are seated, and runs a magnet sweep for nails before the crew leaves. The homeowner
          receives before-and-after photographs, the field notes, and the final scope as
          built, with the workmanship warranty in writing: what was repaired, what the
          warranty covers, and how to reach us if the same detail ever leaks again. That
          record proves the repair to the homeowner, gives an insurer a dated document when
          storm damage is claimed, and gives the next inspector or buyer a clear history of
          the roof.
        </p>
      </section>

      {/* WHERE WE DO IT */}
      <section className="nqr-rs nqr-where" aria-labelledby="nqr-where-heading">
        <h2 id="nqr-where-heading" className="nqr-rs-h2 font-heading text-2xl font-bold text-forest">
          Roof Repair Across Newark Neighborhoods and Essex County Towns
        </h2>
        <p className="mt-4 font-body text-base text-text-secondary">
          Our repair crews work across every Newark neighborhood: the Ironbound, Forest Hill,
          the North Ward, Downtown, Vailsburg, Weequahic, and the South, East, West, and
          Central Wards. Attached brownstones and row houses share party walls and flashing
          lines with the building next door, triple-deckers carry flat rear sections over
          living space, and older slate and tile roofs need a different hand than asphalt
          shingles. The same crews handle regular repair work in{' '}
          <Link href={repairCityHref('east-orange')} className="text-copper underline decoration-copper/40 underline-offset-2 transition-colors hover:text-copper-dark">
            East Orange
          </Link>
          , Orange,{' '}
          <Link href={repairCityHref('west-orange')} className="text-copper underline decoration-copper/40 underline-offset-2 transition-colors hover:text-copper-dark">
            West Orange
          </Link>
          ,{' '}
          <Link href={repairCityHref('irvington')} className="text-copper underline decoration-copper/40 underline-offset-2 transition-colors hover:text-copper-dark">
            Irvington
          </Link>
          ,{' '}
          <Link href={repairCityHref('bloomfield')} className="text-copper underline decoration-copper/40 underline-offset-2 transition-colors hover:text-copper-dark">
            Bloomfield
          </Link>
          , Belleville, Montclair, and Nutley, with the same standard everywhere: inspection
          first, a written scope, and a verified repair.
        </p>
        {/* POP pass 2026-10-24: two honest Google Maps embeds of Newark
            (roadmap + satellite), the pattern the Contact page uses. */}
        <figure className="mt-6">
          <div className="overflow-hidden rounded-lg border border-border shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=Newark+NJ&t=&z=12&ie=UTF8&iwloc=&output=embed"
              title="Map of Newark, NJ and the neighborhoods we serve"
              loading="lazy"
              className="aspect-video w-full"
              allowFullScreen
            />
          </div>
          <figcaption className="mt-2 font-body text-sm text-text-secondary">
            Newark, NJ: the neighborhoods our repair crews cover.
          </figcaption>
        </figure>
        <figure className="mt-6">
          <div className="overflow-hidden rounded-lg border border-border shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=Newark+NJ&t=k&z=13&ie=UTF8&iwloc=&output=embed"
              title="Satellite view of Newark, NJ rooftops"
              loading="lazy"
              className="aspect-video w-full"
              allowFullScreen
            />
          </div>
          <figcaption className="mt-2 font-body text-sm text-text-secondary">
            The same NJ streets from above: the rooftops we inspect and repair.
          </figcaption>
        </figure>
      </section>

      {/* HOUSING STOCK (POP pass 2026-10-24: H2 +1 of the +2 POP asks for;
          carries the building-stock copy the supplemental accordion held,
          in visible form). */}
      <section className="nqr-rs" aria-labelledby="nqr-housing-heading">
        <h2 id="nqr-housing-heading" className="nqr-rs-h2 font-heading text-2xl font-bold text-forest">
          Repairs Matched to the Building
        </h2>
        <p className="mt-4 font-body text-base text-text-secondary">
          Newark housing stock spans three centuries, and the repair follows the building.
          Each stock type fails differently and is scoped differently.
        </p>
        <div className="nqr-service-grid mt-6">
          <article className="nqr-service-card">
            <h3 className="font-heading text-lg font-semibold text-forest">Rowhouses and Party Walls</h3>
            <p className="font-body text-base text-text-secondary">
              Brick rowhouses share masonry party walls and flashing lines with the building
              next door, so a leak at the seam is scoped against both roof planes it serves.
            </p>
          </article>
          <article className="nqr-service-card">
            <h3 className="font-heading text-lg font-semibold text-forest">Wood-Frame Houses</h3>
            <p className="font-body text-base text-text-secondary">
              Wood-frame houses in the North Ward and Vailsburg carry pitched shingle fields
              where wind-lifted courses and backed-out fasteners are the usual failure.
            </p>
          </article>
          <article className="nqr-service-card">
            <h3 className="font-heading text-lg font-semibold text-forest">Low-Slope Commercial Buildings</h3>
            <p className="font-body text-base text-text-secondary">
              Commercial blocks in the Ironbound and Downtown carry low-slope membranes that
              fail at seams, parapet transitions, and drains, where ponding water concentrates
              the damage.
            </p>
          </article>
        </div>
      </section>

      {/* PHOTO GALLERY (Paul amendment 1: images to the full Cora goal in a
          collapsed accordion; run 261014 lines L21/L22). */}
      <section className="nqr-rs" aria-labelledby="nqr-gallery-heading">
        <h2 id="nqr-gallery-heading" className="nqr-rs-h2 font-heading text-2xl font-bold text-forest">
          Before-and-After Photo Gallery
        </h2>
        <p className="mt-4 font-body text-base text-text-secondary">
          Photographs from the repair work described on this page: the failed detail as found,
          and the finished repair on each Newark roof.
        </p>
        <details className="nqr-gallery">
          <summary>Browse the photo gallery ({NEWARK_REPAIR_GALLERY.length} photographs)</summary>
          <div className="nqr-gallery-grid">
            {NEWARK_REPAIR_GALLERY.map((img) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                width={400}
                height={300}
              />
            ))}
          </div>
        </details>
      </section>

      {/* HOW WE DO IT */}
      <section className="nqr-rs" aria-labelledby="nqr-how-heading">
        <h2 id="nqr-how-heading" className="nqr-rs-h2 font-heading text-2xl font-bold text-forest">
          Our Process, From First Inspection to Final Verification
        </h2>
        <p className="mt-4 font-body text-base text-text-secondary">
          Four steps, in the same order on every job, so a homeowner always knows what happens
          next and what they are approving.
        </p>
        <div className="nqr-steps">
          {processSteps.map((step) => (
            <div key={step.title} className="nqr-step">
              <h3 className="font-heading text-lg font-semibold text-forest">{step.title}</h3>
              <p className="font-body text-base text-text-secondary">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COSTS */}
      <section className="nqr-rs" aria-labelledby="nqr-costs-heading">
        <h2 id="nqr-costs-heading" className="nqr-rs-h2 font-heading text-2xl font-bold text-forest">
          Roof Repair Costs in Newark, NJ
        </h2>
        <div className="nqr-costs mt-5">
          <p className="font-body text-base text-text-secondary">
            <strong>Most roof repairs our crews complete in Newark run $350 to $1,500.</strong>{' '}
            The range is wide because the failed components are different: resealing a pipe
            boot is a short visit, while rebuilding chimney flashing and replacing the shingles
            around it is a longer one.
          </p>
          <p className="mt-4 font-body text-base text-text-secondary">
            Two scopes that look identical on paper can price very differently once the deck
            is open, which is why the pros walk the roof before quoting it. Three things move
            the price: access, the extent of the flashing work, and what the inspection finds
            under the repair area, because decking softened by a long-running leak has to be
            replaced before new material can fasten to it.
          </p>
          {/* POP pass 2026-10-24: the one honest table POP allows, built
              from the three price factors the page already asserts. */}
          <table className="mt-6 w-full border-collapse font-body text-base text-text-secondary">
            <caption className="pb-2 text-left font-heading font-semibold text-forest">
              What moves a Newark repair price
            </caption>
            <thead>
              <tr>
                <th scope="col" className="border border-border px-3 py-2 text-left">Factor</th>
                <th scope="col" className="border border-border px-3 py-2 text-left">What we check</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-3 py-2">Access</td>
                <td className="border border-border px-3 py-2">Roof pitch, height, and staging decide how much crew time the repair needs before it starts.</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2">Flashing extent</td>
                <td className="border border-border px-3 py-2">How much chimney, vent, or wall flashing has to be rebuilt to specification.</td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2">Concealed decking</td>
                <td className="border border-border px-3 py-2">Softened deck boards under the failed detail are replaced before new material can fasten to them.</td>
              </tr>
            </tbody>
          </table>
          <h4 className="mt-6 font-heading text-lg font-semibold text-forest">
            What Moves the Price in New Jersey
          </h4>
          <p className="mt-2 font-body text-base text-text-secondary">
            Permit rules and disposal costs vary by NJ municipality, so the written scope
            prices your building, not a citywide average.
          </p>
        </div>
      </section>

      {/* WHEN A REPAIR IS NO LONGER ENOUGH (POP pass 2026-10-24: H2 +2 of
          the +2 POP asks for). */}
      <section className="nqr-rs" aria-labelledby="nqr-when-heading">
        <h2 id="nqr-when-heading" className="nqr-rs-h2 font-heading text-2xl font-bold text-forest">
          When a Repair Is No Longer Enough
        </h2>
        <p className="mt-4 font-body text-base text-text-secondary">
          A repair stops making sense when failures multiply across the field: widespread
          shingle curling, deck rot in more than one area, or a membrane past its service
          life. When that is the honest answer, we say so, show you the photographs, and price
          the replacement separately. It is the standard of roofing Newark property owners
          should expect from any contractor, including us, and the repair visit still leaves
          the roof watertight in the meantime.
        </p>
      </section>

      {/* FAQ (Paul amendment 2: six questions as collapsed accordions, the
          question H3 carried in the <summary>). */}
      <section className="nqr-rs" aria-labelledby="nqr-faq-heading">
        <h2 id="nqr-faq-heading" className="nqr-rs-h2 font-heading text-2xl font-bold text-forest">
          Frequently Asked Questions
        </h2>
        <div className="nqr-faq">
          {NEWARK_REPAIR_FAQS.map((faq) => (
            <details key={faq.question}>
              <summary>
                <h3 className="font-heading font-semibold text-forest">{faq.question}</h3>
              </summary>
              <p className="font-body text-base text-text-secondary">{faq.answer}</p>
            </details>
          ))}
        </div>
        <p className="mt-4 font-body text-base text-text-secondary">
          Still deciding between roofing contractors? Call (973) 649-9535 and we will tell
          you honestly whether your roof needs a repair, a scope, or nothing at all.
        </p>
      </section>

      {/* The Cora-era supplemental accordion (Paul amendment 4, 2026-10-23)
          was removed here by the POP pass of 2026-10-24: POP report
          1982649 directed a reduction on this page, and the accordion was
          the largest single mass on it. */}

      {/* Microdata h-card kept from the removed Cora block: the business's
          real name, service area, phone and email in schema form. */}
      <div
        className="h-card nqr-hcard rounded-lg bg-parchment p-5"
        itemScope
        itemType="https://schema.org/RoofingContractor"
      >
        <p className="font-body text-base leading-relaxed text-text-secondary">
          <span className="p-name font-semibold text-forest" itemProp="name">
            Newark Quality Roofing
          </span>{' '}
          provides roof repair services across{' '}
          <span itemProp="areaServed">Newark, NJ and Essex County, NJ</span>. Call{' '}
          <a className="text-copper underline" href={`tel:${siteConfig.phone.tel}`}>
            {siteConfig.phone.display}
          </a>{' '}
          or email{' '}
          <a
            className="u-email text-copper underline hover:text-copper-dark"
            href={`mailto:${siteConfig.email}`}
            itemProp="email"
          >
            {siteConfig.email}
          </a>{' '}
          for a free written estimate.
        </p>
      </div>
    </>
  );
}
