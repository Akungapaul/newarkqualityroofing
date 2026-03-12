import { LeadForm } from '@/components/forms/LeadForm';
import type { Service, City } from '@/lib/types';
import type { NavServiceGroup } from '@/data/nav-data';

interface ComboCtaBannerProps {
  service: Service;
  city: City;
  serviceGroups: NavServiceGroup[];
}

export function ComboCtaBanner({ service, city, serviceGroups }: ComboCtaBannerProps) {
  return (
    <section
      className="relative overflow-hidden bg-forest-dark py-16 lg:py-20"
      aria-labelledby="combo-cta-heading"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 50%, rgba(42,90,58,0.4) 0%, transparent 70%),
            linear-gradient(180deg, #0F2218 0%, #1A3A2A 50%, #0F2218 100%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <h2
          id="combo-cta-heading"
          className="text-center font-heading text-2xl font-bold text-text-on-dark sm:text-3xl lg:text-4xl"
        >
          Don&rsquo;t Let a Small Leak Become a $10,000 Problem
        </h2>
        <p className="mt-4 text-center font-body text-lg text-parchment/80">
          Get your free {service.name.toLowerCase()} estimate in {city.name} today &mdash; same-day response, no obligation.
          We&rsquo;ve helped 500+ Essex County property owners protect their biggest investment.
        </p>
        <div className="mt-10">
          <LeadForm
            variant="standard"
            defaultService={service.slug}
            defaultCity={city.id}
            serviceGroups={serviceGroups}
          />
        </div>
      </div>
    </section>
  );
}
