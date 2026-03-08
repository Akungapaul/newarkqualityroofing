import { PhoneNumber } from '@/components/ui/PhoneNumber';

interface CityPricingProps {
  pricing: {
    averageRepair: string;
    averageReplacement: string;
    note?: string;
  };
  cityName: string;
}

export function CityPricing({ pricing, cityName }: CityPricingProps) {
  return (
    <section aria-labelledby="city-pricing-heading">
      <h2
        id="city-pricing-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        Roofing Costs in {cityName}, NJ
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-sm border-2 border-copper/30 bg-white p-5 shadow-sm">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-copper">
            Average Repair
          </p>
          <p className="mt-2 font-heading text-3xl font-bold text-forest">
            {pricing.averageRepair}
          </p>
          <p className="mt-1 font-body text-xs text-text-secondary">
            Most residential repairs
          </p>
        </div>
        <div className="rounded-sm border-2 border-forest/20 bg-forest/5 p-5 shadow-sm">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-forest">
            Average Replacement
          </p>
          <p className="mt-2 font-heading text-3xl font-bold text-forest">
            {pricing.averageReplacement}
          </p>
          <p className="mt-1 font-body text-xs text-text-secondary">
            Full roof replacement
          </p>
        </div>
      </div>

      {pricing.note && (
        <p className="mt-3 font-body text-sm text-text-secondary">
          {pricing.note}
        </p>
      )}

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
        <PhoneNumber
          size="lg"
          className="rounded-sm bg-copper px-5 py-2.5 font-heading text-sm font-bold text-text-on-copper transition-colors hover:bg-copper-dark"
        />
        <span className="font-body text-xs text-text-secondary">
          Get your free, personalized estimate today
        </span>
      </div>
    </section>
  );
}
