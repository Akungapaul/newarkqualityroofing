import Image from 'next/image';
import Link from 'next/link';
import { PRICING } from '@/data/content-constants';
import { PhoneNumber } from '@/components/ui/PhoneNumber';
import { AnimateIn } from '@/components/animations/AnimateIn';
import { getHomepageImage } from '@/data/image-manifest';

const pricingRows = [
  { key: 'roof-repair' as const, label: 'Roof Repair', slug: 'roof-repair' },
  { key: 'roof-replacement' as const, label: 'Roof Replacement', slug: 'roof-replacement' },
  { key: 'roof-inspection' as const, label: 'Roof Inspection', slug: 'roof-inspection' },
  {
    key: 'gutter-installation-repair' as const,
    label: 'Gutter Installation & Repair',
    slug: 'gutter-installation-repair',
  },
  { key: 'emergency-roof-repair' as const, label: 'Emergency Roof Repair', slug: 'emergency-roof-repair' },
  {
    key: 'roof-maintenance-programs' as const,
    label: 'Roof Maintenance Program',
    slug: 'roof-maintenance-programs',
  },
];

export function HomePricingTable() {
  const estimateImg = getHomepageImage('pricing-estimate');
  const estimateSrc = estimateImg?.path ? `/${estimateImg.path}` : '/images/affordable-roofing-estimate.jpg';
  const estimateAlt = estimateImg?.alt ?? 'affordable roofing estimate in Newark';

  return (
    <section
      className="bg-forest-dark py-16 text-text-on-dark lg:py-24"
      aria-labelledby="home-pricing-heading"
    >
      <AnimateIn className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="home-pricing-heading"
            className="font-heading text-3xl font-bold sm:text-4xl"
          >
            Affordable Pricing and Cost Guide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-parchment/70">
            Transparent pricing with <em>no-obligation</em> quotes. Roof replacement in Newark, NJ starts with a clear estimate. Every roofing quote includes
            materials, labor, and cleanup. Get a{' '}
            <Link href="/roof-replacement" className="text-copper-light underline hover:text-copper">replacement quote</Link>,{' '}
            <Link href="/roof-repair" className="text-copper-light underline hover:text-copper">repairs estimate</Link>, or{' '}
            <Link href="/emergency-roof-repair" className="text-copper-light underline hover:text-copper">emergency help</Link>,{' '}
            <Link href="/roof-inspection" className="text-copper-light underline hover:text-copper">inspections</Link>, or{' '}
            <Link href="/roof-maintenance-programs" className="text-copper-light underline hover:text-copper">maintenance plans</Link>{' '}
            today.
          </p>
        </div>

        <h3 className="mt-12 font-heading text-2xl font-semibold text-copper-light">
          Roof Replacement Cost in New Jersey
        </h3>

        <div className="mt-6 overflow-hidden rounded-lg border border-parchment/15 shadow-lg">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-copper/90">
                <th className="px-5 py-3 font-heading text-sm font-bold uppercase tracking-wider text-text-on-copper">
                  Service
                </th>
                <th className="px-5 py-3 font-heading text-sm font-bold uppercase tracking-wider text-text-on-copper">
                  Price Range
                </th>
                <th className="hidden px-5 py-3 font-heading text-sm font-bold uppercase tracking-wider text-text-on-copper sm:table-cell">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-parchment/10">
              {pricingRows.map((row, index) => {
                const data = PRICING[row.key];
                return (
                  <tr
                    key={row.key}
                    className={
                      index % 2 === 0 ? 'bg-forest/40' : 'bg-forest/20'
                    }
                  >
                    <td className="px-5 py-4 font-heading text-base font-semibold text-parchment">
                      <Link href={`/${row.slug}`} className="underline decoration-parchment/30 hover:decoration-copper-light hover:text-copper-light transition-colors">
                        {row.label}
                      </Link>
                    </td>
                    <td className="px-5 py-4 font-body text-base tabular-nums text-copper-light">
                      {data.range}
                    </td>
                    <td className="hidden px-5 py-4 font-body text-sm text-parchment/60 sm:table-cell">
                      {data.note}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex justify-center">
          <Image
            src={estimateSrc}
            alt={estimateAlt}
            width={400}
            height={260}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* PAA answers */}
        <div className="mt-10 space-y-6">
          <h4 className="font-heading text-xl font-semibold text-copper-light">
            Common Pricing Questions
          </h4>
          <div>
            <p className="font-heading text-lg font-semibold text-parchment">
              How much does a replacement cost in NJ?
            </p>
            <p className="mt-2 font-body text-base leading-relaxed text-parchment/70">
              A typical residential roof replacement in New Jersey costs between
              $8,500 and $25,000, depending on size, pitch, material
              choice, and whether a full tear-off is required. Request a free
              roofing estimate to get an exact figure for your home.
            </p>
          </div>
          <div>
            <p className="font-heading text-lg font-semibold text-parchment">
              What is the 25% rule?
            </p>
            <p className="mt-2 font-body text-base leading-relaxed text-parchment/70">
              If more than 25% of your roof is damaged, most building codes
              require a full roof replacement rather than a partial repair. This
              threshold often determines insurance coverage in NJ.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="font-body text-base text-parchment/70">
            Roofing prices vary by project. Call for your personalized free roof repair or replacement estimate.{' '}
            <Link href="/asphalt-shingle-roofing" className="text-copper-light underline hover:text-copper">Shingle options</Link>{' '}and{' '}
            <Link href="/flat-roof-installation-repair" className="text-copper-light underline hover:text-copper">flat roof systems</Link>{' '}available.
          </p>
          <div className="mt-4">
            <PhoneNumber
              size="lg"
              className="text-copper-light hover:text-copper"
            />
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
