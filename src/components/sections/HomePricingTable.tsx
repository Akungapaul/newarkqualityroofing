import { PRICING } from '@/data/content-constants';
import { PhoneNumber } from '@/components/ui/PhoneNumber';

const pricingRows = [
  { key: 'roof-repair' as const, label: 'Roof Repair' },
  { key: 'roof-replacement' as const, label: 'Roof Replacement' },
  { key: 'roof-inspection' as const, label: 'Roof Inspection' },
  {
    key: 'gutter-installation-repair' as const,
    label: 'Gutter Installation & Repair',
  },
  { key: 'emergency-roof-repair' as const, label: 'Emergency Roof Repair' },
  {
    key: 'roof-maintenance-programs' as const,
    label: 'Roof Maintenance Program',
  },
];

export function HomePricingTable() {
  return (
    <section
      className="bg-forest-dark py-16 text-text-on-dark lg:py-24"
      aria-labelledby="home-pricing-heading"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="home-pricing-heading"
            className="font-heading text-3xl font-bold sm:text-4xl"
          >
            Affordable Roofing Services — Pricing and Cost Guide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-parchment/70">
            Transparent pricing with no hidden fees. Every estimate includes
            materials, labor, and cleanup.
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
                      {row.label}
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

        {/* PAA answers */}
        <div className="mt-10 space-y-6">
          <div>
            <p className="font-heading text-lg font-semibold text-parchment">
              How much does a roof replacement cost in NJ?
            </p>
            <p className="mt-2 font-body text-base leading-relaxed text-parchment/70">
              A typical residential roof replacement in New Jersey costs between
              $8,500 and $25,000, depending on roof size, pitch, material
              choice, and whether a full tear-off is required.{' '}
              <strong className="text-parchment/90">
                Newark homeowners can request a free, detailed estimate from our
                team to get an exact figure for their home.
              </strong>
            </p>
          </div>
          <div>
            <p className="font-heading text-lg font-semibold text-parchment">
              What is the 25% rule in roofing?
            </p>
            <p className="mt-2 font-body text-base leading-relaxed text-parchment/70">
              The 25% rule states that if more than 25% of your roof is damaged,
              most building codes and insurance policies require a full roof
              replacement rather than a partial roof repair. In Newark and
              across New Jersey, this threshold often determines whether your
              insurer covers a repair or a complete replacement.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="font-body text-base text-parchment/70">
            Prices vary by project. Call for your personalized free estimate.
          </p>
          <div className="mt-4">
            <PhoneNumber
              size="lg"
              className="text-copper-light hover:text-copper"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
