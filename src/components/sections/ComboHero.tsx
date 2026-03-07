import { LeadForm } from '@/components/forms/LeadForm';
import { PhoneNumber } from '@/components/ui/PhoneNumber';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import type { Service, City } from '@/lib/types';
import type { NavServiceGroup } from '@/data/nav-data';

// ─── Category label mapping ────────────────────────────────────────────────

const categoryLabels: Record<string, string> = {
  'repair-maintenance': 'Repair & Maintenance',
  'residential-roof-types': 'Residential Roof Types',
  'commercial-roof-types': 'Commercial Roof Types',
  'components-specialty': 'Components & Specialty',
  'energy-solar': 'Energy & Solar',
  'commercial-services': 'Commercial Services',
  'design-consultation': 'Design & Consultation',
  'replacement-sub-pages': 'Replacement Services',
};

interface ComboHeroProps {
  service: Service;
  city: City;
  serviceGroups: NavServiceGroup[];
}

export function ComboHero({ service, city, serviceGroups }: ComboHeroProps) {
  const categoryLabel = categoryLabels[service.category] ?? service.category;

  return (
    <section
      className="relative overflow-hidden bg-forest-dark"
      aria-labelledby="combo-hero-heading"
    >
      {/* Layered CSS background: gradient + geometric grid + grain */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 40%, rgba(42,90,58,0.5) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 80% 60%, rgba(193,127,78,0.15) 0%, transparent 60%),
            linear-gradient(160deg, #0F2218 0%, #1A3A2A 40%, #0F2218 100%)
          `,
        }}
        aria-hidden="true"
      />
      {/* Geometric grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,240,232,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,240,232,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: service.name, href: `/${service.slug}` },
            { label: `${service.name} in ${city.name}` },
          ]}
        />

        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Left: Category badge + headline + trust signals */}
          <div className="text-text-on-dark lg:col-span-3">
            {/* Service category badge -- combo-specific identity */}
            <span className="inline-block rounded-sm border border-copper/40 bg-copper/10 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-copper-light">
              {categoryLabel}
            </span>

            <h1
              id="combo-hero-heading"
              className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              {service.name}
              <br />
              <span className="text-copper">in {city.name}, NJ</span>
            </h1>

            {/* Compact trust bar -- 3 items inline (combo-specific, not benefit list) */}
            <div
              className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-sm text-parchment/80"
              aria-label="Trust signals"
            >
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-copper" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Licensed NJ Contractor
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-copper" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Full Insurance Coverage
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-copper" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Free Estimates
              </span>
            </div>

            <div className="mt-8 flex items-center gap-3 font-body text-parchment/70">
              <span>Or call us directly:</span>
              <PhoneNumber size="lg" className="text-copper-light hover:text-copper" />
            </div>
          </div>

          {/* Right: Lead Form */}
          <div id="lead-form" className="lg:col-span-2">
            <LeadForm
              variant="hero"
              defaultService={service.slug}
              defaultCity={city.id}
              serviceGroups={serviceGroups}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
