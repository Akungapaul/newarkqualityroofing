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
import {
  NEWARK_REPAIR_FAQS,
  NEWARK_REPAIR_SUPPLEMENTAL,
} from '@/data/roof-repair-newark-restructure';

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
    text: 'A leak repair starts at the entry point: failed flashing, a lifted pipe boot, a cracked valley, or a seam that has opened. We trace the water path from the stain back to that entry point, then reseal or rebuild the detail that failed. The repair is tested before the crew leaves, and the entry point is photographed for the job record. Read more about ',
    after: '.',
  },
  {
    title: 'Shingle Repair and Replacement',
    href: null,
    linkText: null,
    text: 'Missing, cracked, curled, or wind-lifted shingles expose the underlayment and the deck below. We replace damaged shingles with matching material, reset the fasteners to the manufacturer\u2019s pattern, and check the surrounding courses for the same wear, so the patch blends into the roof instead of becoming its weakest area. Granule loss across a wide area is a sign the roof is aging, and we will say so plainly in the written scope.',
    after: '',
  },
  {
    title: 'Flashing Repair at Chimneys, Valleys and Walls',
    href: serviceHref('roof-flashing-installation-repair'),
    linkText: 'flashing repair',
    text: 'Flashing seals the transitions where a roof meets a chimney, a wall, a skylight, or a valley, and it is where most leaks begin. We rebuild step flashing and counter-flashing with corrosion-resistant metal, reseat valley metal, and seal the joints to the manufacturer\u2019s detail, so water is directed onto the shingle surface instead of behind it. Read more about ',
    after: '.',
  },
  {
    title: 'Flat Roof Repair for Newark Homes and Businesses',
    href: serviceHref('flat-roof-installation-repair'),
    linkText: 'flat roof repair',
    text: 'Flat and low-slope roofs in EPDM, TPO, and modified bitumen fail at seams, punctures, and ponding areas. We patch seams with manufacturer-approved bonding, seal punctures, and correct the spots where water stands longer than it should. The same crew handles the flat sections on Newark homes, row houses, and commercial buildings. Read more about ',
    after: '.',
  },
  {
    title: 'Emergency Roof Repair Services in Newark',
    href: serviceHref('emergency-roof-repair'),
    linkText: 'emergency roof repair',
    text: 'When a storm opens a roof at night or on a weekend, the first job is to stop the water. Our crew tarps the damaged area and handles emergency repairs across Newark, securing loose material and sealing the entry point before a permanent scope is written. Emergency repairs are stabilization, not a shortcut: the permanent repair is inspected, priced in writing, and scheduled as soon as the roof is dry enough to bond. Read more about ',
    after: '.',
  },
  {
    title: 'Storm Damage Roof Repair in Newark',
    href: serviceHref('storm-damage-roof-repair'),
    linkText: 'storm damage roof repair',
    text: 'Wind lifts shingles and tears flashing loose; hail bruises the shingle mat where granules protect it. After a storm we document every damaged area with timestamped photographs, make the roof watertight, and write the repair scope in the format an insurance adjuster works from. The homeowner gets the full photo record with the estimate. Read more about ',
    after: '.',
  },
] as const;

const processSteps = [
  {
    title: 'Roof Inspection and Leak Tracing',
    text: 'The visit starts on the roof and, where access allows, in the attic. The crew checks the shingle field, every flashing transition, the valleys, the vents and pipe boots, and the drainage path to the gutters, then traces any active leak from its interior stain back to the entry point on the surface. Findings are photographed as they are found.',
  },
  {
    title: 'Written Estimate and Scope',
    text: 'Everything the inspection found is written into a scope: the failed component, the repair the manufacturer specifies for it, the materials, and the price. If opening the assembly could reveal a concealed condition, such as decking damaged under a long-running leak, the scope separates the approved repair from that possibility and prices it only if it is found. The homeowner approves the written scope before work begins.',
  },
  {
    title: 'The Repair, Built to Specification',
    text: 'The crew completes the approved repair to the manufacturer\u2019s written specification: fasteners to pattern, flashing fabricated and lapped correctly, membrane seams bonded with the approved system. Debris from the repair is contained as the work proceeds, and the area below the work is protected before the first shingle is lifted.',
  },
  {
    title: 'Final Verification and Photo Record',
    text: 'A lead verifies the finished repair is watertight, walks the surrounding courses and details, and runs a magnet sweep for stray nails. The homeowner receives the before-and-after photographs, the inspection field notes, and the written workmanship warranty. That photo record is the same documentation a homeowner sends an insurer after storm damage.',
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
                name: 'Flat Roof Repair for Newark Homes and Businesses',
                url: `${SEO_CONFIG.BASE_URL}${serviceHref('flat-roof-installation-repair')}`,
              },
            },
            {
              '@type': 'ListItem',
              position: 5,
              item: {
                '@type': 'Service',
                name: 'Emergency Roof Repair Services in Newark',
                url: `${SEO_CONFIG.BASE_URL}${serviceHref('emergency-roof-repair')}`,
              },
            },
            {
              '@type': 'ListItem',
              position: 6,
              item: {
                '@type': 'Service',
                name: 'Storm Damage Roof Repair in Newark',
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
        <p className="mt-4 font-body text-base text-text-secondary">
          We are a registered New Jersey Home Improvement Contractor and carry general
          liability and workers compensation insurance. The crew that arrives is the crew that
          documents the work: before-and-after photographs are part of every job record, so the
          homeowner can see what was found, what was repaired, and what the finished repair
          looks like. That record is also what a homeowner sends an insurer when storm damage
          is part of the claim.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="nqr-rs" aria-labelledby="nqr-what-heading">
        <h2 id="nqr-what-heading" className="nqr-rs-h2 font-heading text-2xl font-bold text-forest">
          Roof Repair Services in Newark, NJ
        </h2>
        <p className="mt-4 font-body text-base text-text-secondary">
          One visit can cover more than one failure, and most Newark roofs need exactly that. A
          leak at the chimney often travels with worn shingles above it, and a flat roof section
          can pond water against a wall flashing that has already split. The six repair services
          below are the work our crews perform every week across Newark: each one is scoped on
          its own, priced in the same written estimate, and repaired to the manufacturer&rsquo;s
          specification for the material already on your roof. If the inspection finds that a
          repair no longer makes sense, we say so in writing and explain why, rather than
          selling a repair that cannot hold.
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
          Roof Leak Repair That Finds the Source, Not Just the Stain
        </h2>
        <p className="mt-4 font-body text-base text-text-secondary">
          Most failed repairs share one history: somebody fixed the place where water showed,
          not the place where water entered. A ceiling stain can sit ten feet from the failed
          detail that caused it, because water runs along the deck, a rafter, or the top of a
          wall before it drips. Our diagnosis follows that path from the ridge to the eave,
          checking the flashing at every penetration and transition, the condition of the
          shingle field, and the attic side for daylight and damp decking. When the entry point
          is found, the repair is planned against it, and the stain becomes evidence instead of
          the target. That is why our written scope names the failed component before it names
          a price. A homeowner comparing estimates can hold our scope next to any other and see
          exactly which detail failed, what will be rebuilt, and what it costs. Roof leak
          repair done this way ends the cycle of patch, stain, patch that costs Newark
          homeowners more than one correct repair.
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
          exposure line; flashing metal has a bend, a lap, and a seal sequence; flat roof
          membranes have bonding and seam rules that decide whether a patch holds for a season
          or for years. Our crews install to those written specifications: fasteners placed and
          counted to pattern, flashing fabricated from corrosion-resistant stock matched to the
          existing detail, and membrane patches bonded with the manufacturer&rsquo;s approved
          system rather than adhesive alone. Where a detail cannot be brought back to
          specification, the written scope says so and prices the rebuild instead. This is also
          what protects a manufacturer&rsquo;s material warranty on the rest of the roof: a
          repair installed off-spec can give a manufacturer a reason to walk away from a claim
          on shingles that were never touched. Specification is not paperwork. It is the
          difference between a repair and a recurring expense, and it is the standard behind
          every service on this page, from a single flashing repair to a full flat roof repair
          section.
        </p>
      </section>

      {/* WHY: proof block 3 */}
      <section className="nqr-proof" aria-labelledby="nqr-why-3-heading">
        <h2 id="nqr-why-3-heading" className="font-heading text-2xl font-bold text-forest">
          Every Repair Verified Watertight and Backed in Writing
        </h2>
        <p className="mt-4 font-body text-base text-text-secondary">
          A repair is not finished when the last fastener is set. A lead walks the repaired
          area at the end of every job, checks the detail that failed, confirms the surrounding
          courses and flashing are seated, and runs a magnet sweep for nails before the crew
          leaves the property. The homeowner receives before-and-after photographs of the work,
          the field notes from the inspection, and the final scope as built. The workmanship
          warranty is written, not verbal: it states what was repaired, what the warranty
          covers, and how to reach us if the same detail ever leaks again. That written record
          does three jobs. It proves the repair to the homeowner, it gives an insurer a dated
          document when storm damage is claimed, and it gives the next roofer, home inspector,
          or buyer a clear history of the roof. Verification is the step most repairs skip,
          because it cannot be sold from a ladder. We treat it as part of the repair itself.
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
          Central Wards. Newark&rsquo;s housing stock asks for local knowledge. Attached
          brownstones and row houses share party walls and flashing lines with the building
          next door, triple-deckers carry flat rear sections over living space, and older slate
          and tile roofs in Forest Hill need a different hand than the asphalt shingles on most
          of the city. The same crews serve Essex County, including emergency repairs in the
          Ironbound and Forest Hill after summer storms, and regular repair work in{' '}
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
          , Belleville, Montclair, and Nutley. Wherever the job is, the process is the same:
          inspection first, a written scope, and a verified repair. A homeowner in any of
          these towns reaches the same phone number, (973) 649-9535, and the same
          written-estimate standard.
        </p>
      </section>

      {/* PHOTO GALLERY (Paul amendment 1: images to the full Cora goal in a
          collapsed accordion; run 261014 lines L21/L22). */}
      <section className="nqr-rs" aria-labelledby="nqr-gallery-heading">
        <h2 id="nqr-gallery-heading" className="nqr-rs-h2 font-heading text-2xl font-bold text-forest">
          Roof Repair Photo Gallery
        </h2>
        <p className="mt-4 font-body text-base text-text-secondary">
          Photographs from the repair work described on this page: leak damage before and after
          repair, flashing details, flat roof sections, storm damage, materials, and finished
          repairs across Newark and Essex County.
        </p>
        <details className="nqr-gallery">
          <summary>Browse the roof repair photo gallery (142 photographs)</summary>
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
          Our Roof Repair Process, From First Inspection to Final Verification
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
            around it is a longer one. Three things move the price. The first is access: roof
            height, pitch, and staging decide how much crew time a repair needs before it
            starts. The second is the extent of the flashing work, because flashing details
            take longer to rebuild correctly than open shingle field. The third is what the
            inspection finds under the repair area: decking softened by a long-running leak has
            to be replaced before new material can fasten to it.
          </p>
          <p className="mt-4 font-body text-base text-text-secondary">
            Repairs here are not priced blind per square. A per-square number means nothing
            until the failed component is known, so every price is scoped per job in a free
            written estimate. The estimate fixes the price before work begins, and there is no
            obligation to proceed. A homeowner who wants the number before anyone climbs a
            ladder can call (973) 649-9535 and describe the leak; we will say honestly whether
            it sounds like a repair in this range.
          </p>
        </div>
      </section>

      {/* FAQ (Paul amendment 2: six questions as collapsed accordions, the
          question H3 carried in the <summary>). */}
      <section className="nqr-rs" aria-labelledby="nqr-faq-heading">
        <h2 id="nqr-faq-heading" className="nqr-rs-h2 font-heading text-2xl font-bold text-forest">
          Roof Repair Questions From Newark Homeowners
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
      </section>

      {/* SUPPLEMENTAL ACCORDION (Paul amendment 4, 2026-10-23 21:28):
          implementable run-261014 content that does not fit the visible
          sections, built to goal as real sentences from the run's own
          variation, entity, and LSA inventories. Collapsed by default. */}
      <details className="nqr-supp">
        <summary>Detailed Roof Repair Notes and Service Detail</summary>
        <div className="nqr-supp-body">
          {NEWARK_REPAIR_SUPPLEMENTAL.map((note) => (
            <div key={note.heading}>
              <p className="nqr-supp-h font-body text-base">{note.heading}</p>
              <p className="font-body text-base text-text-secondary">{note.body}</p>
            </div>
          ))}
        </div>
      </details>

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
