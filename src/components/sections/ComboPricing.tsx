import { PhoneNumber } from '@/components/ui/PhoneNumber';

interface ComboPricingProps {
  pricing: {
    range: string;
    note?: string;
  };
  serviceName: string;
  cityName: string;
}

export function ComboPricing({ pricing, serviceName, cityName }: ComboPricingProps) {
  return (
    <section
      aria-labelledby="combo-pricing-heading"
      className="rounded-sm border-2 border-copper/30 bg-white p-6 shadow-sm"
    >
      <h2
        id="combo-pricing-heading"
        className="font-heading text-xl font-bold text-forest sm:text-2xl"
      >
        {serviceName} Cost in {cityName}
      </h2>
      <p className="mt-3 font-heading text-3xl font-bold text-copper">
        {pricing.range}
      </p>
      {pricing.note && (
        <p className="mt-1 font-body text-sm text-text-secondary">
          {pricing.note}
        </p>
      )}
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
        <PhoneNumber
          size="lg"
          className="rounded-sm bg-copper px-5 py-2.5 font-heading text-sm font-bold text-text-on-copper transition-colors hover:bg-copper-dark"
        />
        <span className="font-body text-xs text-text-secondary">
          Free estimate — no obligation
        </span>
      </div>
    </section>
  );
}
