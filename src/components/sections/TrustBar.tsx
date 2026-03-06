import { siteConfig } from '@/data/site-config';

export function TrustBar() {
  return (
    <section
      className="border-y border-border bg-parchment-dark py-6"
      aria-label="Company credentials"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:flex lg:items-center lg:justify-between">
          {siteConfig.trustStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-bold text-forest">
                {stat.value}
              </p>
              <p className="mt-1 font-body text-sm text-text-secondary">
                {stat.label}
              </p>
            </div>
          ))}
          {/* BBB Accredited badge placeholder */}
          <div className="col-span-2 text-center lg:col-span-1">
            <p className="font-heading text-lg font-bold text-forest">
              BBB
            </p>
            <p className="mt-1 font-body text-sm text-text-secondary">
              Accredited Business
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
