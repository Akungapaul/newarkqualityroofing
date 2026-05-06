import Link from 'next/link';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { PRIORITY_CITY_IDS, PRIORITY_SERVICE_IDS, PRIORITY_COMBO_PAIRS } from '@/data/seo-priority';
import { generateCityPageSlug, generateComboSlug } from '@/lib/slug-utils';

const gscPriorityLinks = [
  { href: '/roof-repair-newark-nj', label: 'Roof repair in Newark', note: 'Primary repair page with existing GSC impressions' },
  { href: '/emergency-roof-repair-newark-nj', label: 'Emergency roof repair in Newark', note: '24/7 storm and leak intent' },
  { href: '/roof-replacement-newark-nj', label: 'Roof replacement in Newark', note: 'High-value replacement intent' },
  { href: '/roof-leak-repair-newark-nj', label: 'Roof leak repair in Newark', note: 'Top visible query cluster' },
  { href: '/flat-roof-installation-repair-newark-nj', label: 'Flat roof installation in Newark', note: 'Correct target for flat-roof installation searches' },
  { href: '/commercial-roof-installation-newark-nj', label: 'Commercial roof installation in Newark', note: 'Commercial Newark money page' },
] as const;

export function PriorityIndexingHub() {
  const priorityServices = services.filter((s) => PRIORITY_SERVICE_IDS.includes(s.id as (typeof PRIORITY_SERVICE_IDS)[number]));
  const priorityCities = cities.filter((c) => PRIORITY_CITY_IDS.includes(c.id as (typeof PRIORITY_CITY_IDS)[number]));
  const comboLinks = [...PRIORITY_COMBO_PAIRS].map((pair) => {
    const [serviceId, cityId] = pair.split(':');
    const service = services.find((s) => s.id === serviceId);
    const city = cities.find((c) => c.id === cityId);
    if (!service || !city) return null;
    return { label: `${service.name} in ${city.name}`, slug: generateComboSlug(service.slug, city.slug) };
  }).filter((item): item is { label: string; slug: string } => item !== null);

  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="priority-indexing-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-body text-sm font-bold uppercase tracking-[0.18em] text-copper-dark">Priority roofing pages</p>
          <h2 id="priority-indexing-heading" className="mt-3 font-heading text-3xl font-bold text-forest sm:text-4xl">
            Start with the Newark roofing pages Google is most likely to trust first
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
            Instead of treating every long-tail page equally, these visible crawl paths concentrate authority around the services, cities, and service-area pages already showing Search Console impressions.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-copper/30 bg-copper/5 p-6">
          <h3 className="font-heading text-xl font-semibold text-forest">GSC priority pages to crawl first</h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
            These internal links point homepage authority directly at the Newark money pages that already show search demand or need faster recrawling.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {gscPriorityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-border bg-white p-4 transition-colors hover:border-copper"
              >
                <span className="block font-body text-sm font-semibold text-copper underline-offset-2 hover:underline">
                  {link.label}
                </span>
                <span className="mt-1 block font-body text-xs leading-relaxed text-text-secondary">
                  {link.note}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-parchment-light p-6">
            <h3 className="font-heading text-xl font-semibold text-forest">Core services</h3>
            <ul className="mt-4 space-y-2">
              {priorityServices.map((service) => (
                <li key={service.id}>
                  <Link href={`/${service.slug}`} className="font-body text-sm text-copper underline-offset-2 hover:underline">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-parchment-light p-6">
            <h3 className="font-heading text-xl font-semibold text-forest">Primary cities</h3>
            <ul className="mt-4 space-y-2">
              {priorityCities.map((city) => (
                <li key={city.id}>
                  <Link href={`/${generateCityPageSlug(city.slug)}`} className="font-body text-sm text-copper underline-offset-2 hover:underline">
                    Roofing in {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-parchment-light p-6">
            <h3 className="font-heading text-xl font-semibold text-forest">Money-page combinations</h3>
            <ul className="mt-4 space-y-2">
              {comboLinks.map((combo) => (
                <li key={combo.slug}>
                  <Link href={`/${combo.slug}`} className="font-body text-sm text-copper underline-offset-2 hover:underline">
                    {combo.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
