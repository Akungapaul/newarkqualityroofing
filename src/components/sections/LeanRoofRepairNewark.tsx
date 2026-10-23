import Link from 'next/link';
import Image from 'next/image';
import { JsonLd } from '@/components/seo/JsonLd';
import { RoofRepairGuideSchema } from '@/components/sections/RoofRepairGuide';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { generateComboSlug, generateServicePageSlug } from '@/lib/slug-utils';
import { siteConfig } from '@/data/site-config';
import { SEO_CONFIG } from '@/lib/seo-config';

// LEAN TEST 2026-10-23 (Paul's approved controlled experiment, ONE page):
// replaces the stacked body of /roof-repair-newark-nj (rich prose band,
// planning guide, areas grid, related band and the CoraRoadmap260926
// supplemental block) with one tight contractor service page. The hero,
// H1, first sentence, both lead forms, closing CTA banner and ALL factual
// schema are unchanged: the template JSON-LD graph is untouched, the
// guide graph renders via RoofRepairGuideSchema, and the Cora block's
// JSON-LD Service node + microdata h-card are re-emitted below. Copy
// facts come only from the page this replaces. Revert = inverse merge
// of the test PR.

const serviceHref = (id: string) => {
  const s = services.find((x) => x.id === id);
  return s ? `/${generateServicePageSlug(s.slug)}` : '/roofing-services';
};

const repairCityHref = (cityId: string) => {
  const c = cities.find((x) => x.id === cityId);
  return c ? `/${generateComboSlug('roof-repair', c.slug)}` : '/roofing-services';
};

const repairServices = [
  {
    name: 'Roof leak repair',
    href: serviceHref('roof-leak-repair'),
    text: 'traced to the failed flashing, pipe boot, or seam and resealed at the source.',
  },
  {
    name: 'Shingle repair',
    href: null,
    text: 'missing, cracked, or wind-lifted shingles replaced and the water layer restored.',
  },
  {
    name: 'Flashing repair',
    href: serviceHref('roof-flashing-installation-repair'),
    text: 'step and counter-flashing rebuilt at chimneys, walls, skylights, and valleys.',
  },
  {
    name: 'Flat roof repair',
    href: serviceHref('flat-roof-installation-repair'),
    text: 'EPDM, TPO, and modified bitumen seams patched, punctures sealed, ponding corrected.',
  },
  {
    name: 'Storm damage repair',
    href: serviceHref('storm-damage-roof-repair'),
    text: 'wind and hail damage documented with timestamped photos for insurance claims.',
  },
  {
    name: 'Emergency roof repair',
    href: serviceHref('emergency-roof-repair'),
    text: 'active leaks tarped first, with the permanent repair scheduled behind it.',
  },
] as const;

const processSteps = [
  {
    title: 'Inspection.',
    text: 'We trace the moisture path from ridge to eave and record every failure point.',
  },
  {
    title: 'Written scope.',
    text: 'The failed components, materials, and price are set out in a free written estimate before work begins.',
  },
  {
    title: 'Repair.',
    text: 'The failed component is repaired or rebuilt to manufacturer specification.',
  },
  {
    title: 'Verification.',
    text: 'A lead verifies the repair is watertight, runs a magnet sweep for nails, and issues a written workmanship warranty.',
  },
] as const;

const faqs = [
  {
    question: 'How much does roof repair cost in Newark, NJ?',
    answer:
      'Most projects run $350 to $1,500, depending on scope and materials. Your written estimate fixes the price for your roof before any work begins.',
  },
  {
    question: 'Do I need a permit from Newark for a roof repair?',
    answer:
      'Minor repairs, such as replacing damaged shingles, resealing flashing, and patching a small membrane area, typically do not. Structural work or replacing more than 25% of the roof surface does, and we handle those applications when required.',
  },
  {
    question: 'What happens first on an urgent roof repair after a storm?',
    answer:
      'Emergency tarping comes first, so water entry stops before any permanent scope is written. The permanent repair follows once the deck is dry enough to bond.',
  },
] as const;

export function LeanRoofRepairNewark() {
  return (
    <>
      {/* Schema kept from the removed blocks: the planning guide graph and
          the Cora block's Service node (factual schema is not cut). */}
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

      <section aria-labelledby="lean-repair-intro-heading">
        <h2 id="lean-repair-intro-heading" className="font-heading text-2xl font-bold text-forest">
          Roof Repair in Newark, NJ
        </h2>
        <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
          Most roof leaks do not start where the stain shows inside. Water enters at a failed
          detail, usually flashing, a pipe boot, a valley, or damaged shingles, and travels before
          it appears. We trace that water path first, then repair the component that actually
          failed, so the fix closes the cause rather than the symptom.
        </p>
        <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-md">
          <Image
            src="/images/homepage/residential-split.webp"
            alt="Roofer fastening a replacement asphalt shingle beside exposed underlayment and roof deck"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
        </div>
      </section>

      <section aria-labelledby="lean-repair-services-heading">
        <h2 id="lean-repair-services-heading" className="font-heading text-2xl font-bold text-forest">
          Roof Repairs We Perform
        </h2>
        <ul className="mt-4 space-y-3 font-body text-base leading-relaxed text-text-secondary">
          {repairServices.map((item) => (
            <li key={item.name}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="font-semibold text-forest underline decoration-copper/40 underline-offset-2 transition-colors hover:text-copper"
                >
                  {item.name}
                </Link>
              ) : (
                <strong className="font-semibold text-forest">{item.name}</strong>
              )}
              : {item.text}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="lean-repair-process-heading">
        <h2 id="lean-repair-process-heading" className="font-heading text-2xl font-bold text-forest">
          How Our Roof Repair Process Works
        </h2>
        <ol className="mt-4 list-decimal space-y-3 pl-6 font-body text-base leading-relaxed text-text-secondary">
          {processSteps.map((step) => (
            <li key={step.title}>
              <strong className="font-semibold text-forest">{step.title}</strong> {step.text}
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="lean-repair-cost-heading">
        <h2 id="lean-repair-cost-heading" className="font-heading text-2xl font-bold text-forest">
          Roof Repair Costs in Newark, NJ
        </h2>
        <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
          Most repairs run $350 to $1,500. The exact price depends on the failed component, the
          materials, roof access, and what the inspection finds. Newark Quality Roofing is a
          registered New Jersey Home Improvement Contractor carrying general liability and workers
          compensation insurance, so the estimate you sign is the price you pay, with no obligation
          to proceed.
        </p>
      </section>

      <section aria-labelledby="lean-repair-areas-heading">
        <h2 id="lean-repair-areas-heading" className="font-heading text-2xl font-bold text-forest">
          Roof Repair Across Newark and Essex County
        </h2>
        <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
          We repair roofs in every Newark neighborhood, including the Ironbound, Forest Hill, the
          North Ward, Downtown, and Vailsburg, and across Essex County in{' '}
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
          , Belleville, Montclair, and Nutley.
        </p>
      </section>

      <section aria-labelledby="lean-repair-faq-heading">
        <h2 id="lean-repair-faq-heading" className="font-heading text-2xl font-bold text-forest">
          Roof Repair Questions
        </h2>
        <div className="mt-4 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-heading text-lg font-semibold text-forest">{faq.question}</h3>
              <p className="mt-2 font-body text-base leading-relaxed text-text-secondary">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Microdata h-card kept from the removed Cora block: the business's
          real name, service area, phone and email in schema form. */}
      <div
        className="h-card rounded-lg bg-parchment p-5"
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
