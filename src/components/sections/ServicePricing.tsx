import { PhoneNumber } from '@/components/ui/PhoneNumber';

interface ServicePricingProps {
  pricing: {
    range: string;
    factors: string[];
    financingNote?: string;
  };
  serviceName: string;
}

export function ServicePricing({ pricing, serviceName }: ServicePricingProps) {
  return (
    <section aria-labelledby="service-pricing-heading">
      <h2
        id="service-pricing-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        {serviceName} Pricing in Essex County
      </h2>

      <div className="mt-6 rounded-sm border-2 border-copper/40 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-copper">
              Typical Price Range
            </p>
            <p className="mt-1 font-heading text-3xl font-bold text-forest">
              {pricing.range}
            </p>
          </div>
          <div className="shrink-0">
            <PhoneNumber
              size="lg"
              className="rounded-sm bg-copper px-6 py-3 font-heading text-sm font-bold text-text-on-copper shadow-sm transition-colors hover:bg-copper-dark"
            />
          </div>
        </div>

        {pricing.factors.length > 0 && (
          <div className="mt-6 border-t border-border pt-4">
            <p className="font-heading text-sm font-semibold text-forest">
              Cost Factors:
            </p>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">
              {pricing.factors.map((factor, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 font-body text-sm leading-relaxed text-text-secondary"
                >
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-copper" aria-hidden="true" />
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        )}

        {pricing.financingNote && (
          <p className="mt-4 rounded-sm bg-forest/5 px-4 py-2 font-body text-sm text-forest">
            {pricing.financingNote}
          </p>
        )}
      </div>
    </section>
  );
}
