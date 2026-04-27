import Link from 'next/link';
import type { City, Service } from '@/lib/types';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { PRIORITY_CITY_IDS, PRIORITY_SERVICE_IDS, isPriorityCity, isPriorityService } from '@/data/seo-priority';
import { getCityProofProfile, getLocalProofSummary, getServiceProofProfile } from '@/data/local-proof';
import { generateCityPageSlug, generateComboSlug } from '@/lib/slug-utils';

interface ContentAuthorityBlockProps {
  service?: Service;
  city?: City;
  pageType: 'service' | 'city' | 'combo' | 'comparison' | 'article';
}

function PillList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="rounded-full bg-parchment px-3 py-1 font-body text-xs font-semibold text-forest">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ContentAuthorityBlock({ service, city, pageType }: ContentAuthorityBlockProps) {
  const cityProfile = city ? getCityProofProfile(city) : null;
  const serviceProfile = service ? getServiceProofProfile(service) : null;
  const priorityServices = services.filter((s) => PRIORITY_SERVICE_IDS.includes(s.id as (typeof PRIORITY_SERVICE_IDS)[number])).slice(0, 6);
  const priorityCities = cities.filter((c) => PRIORITY_CITY_IDS.includes(c.id as (typeof PRIORITY_CITY_IDS)[number])).slice(0, 6);

  const title = city && service
    ? `Why ${service.name} in ${city.name} needs a local roofing plan`
    : city
      ? `Why roofing in ${city.name} needs local proof`
      : service
        ? `How we evaluate ${service.name} for Essex County properties`
        : 'How this guide supports better roofing decisions';

  return (
    <section aria-labelledby={`${pageType}-authority-heading`} className="rounded-xl border border-copper/25 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-copper-dark">
            Local proof + indexing quality
          </p>
          <h2 id={`${pageType}-authority-heading`} className="mt-2 font-heading text-2xl font-bold text-forest sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="hidden rounded-md bg-forest px-3 py-2 text-center text-text-on-dark sm:block">
          <p className="font-heading text-xl font-bold">10/10</p>
          <p className="font-body text-[10px] uppercase tracking-wider">content target</p>
        </div>
      </div>

      <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
        {getLocalProofSummary(service, city)} The goal is to make the page useful as a real local roofing reference, not just another service-area landing page.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {cityProfile && (
          <div className="rounded-lg border border-border bg-parchment-light p-4">
            <h3 className="font-heading text-lg font-semibold text-forest">Local property context</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
              Common local roof work involves {cityProfile.propertyTypes.slice(0, 3).join(', ')}.
            </p>
            <PillList items={cityProfile.neighborhoods.slice(0, 5)} />
          </div>
        )}

        {cityProfile && (
          <div className="rounded-lg border border-border bg-parchment-light p-4">
            <h3 className="font-heading text-lg font-semibold text-forest">Roof problems we expect</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
              The page accounts for {cityProfile.roofPatterns.slice(0, 3).join(', ')}.
            </p>
            <PillList items={cityProfile.localRisks.slice(0, 4)} />
          </div>
        )}

        {serviceProfile && (
          <div className="rounded-lg border border-border bg-parchment-light p-4">
            <h3 className="font-heading text-lg font-semibold text-forest">Service decision factors</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
              We evaluate {serviceProfile.decisionFactors.slice(0, 4).join(', ')} before recommending scope.
            </p>
            <PillList items={serviceProfile.proofPoints.slice(0, 4)} />
          </div>
        )}
      </div>

      <div className="mt-6 rounded-lg border border-forest/10 bg-forest/5 p-4">
        <h3 className="font-heading text-lg font-semibold text-forest">Priority crawl paths</h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
          These links reinforce the pages most likely to earn impressions and leads first.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-wider text-text-secondary">Priority services</p>
            <ul className="mt-2 space-y-1.5">
              {priorityServices.map((item) => (
                <li key={item.id}>
                  <Link href={`/${item.slug}`} className="font-body text-sm text-copper underline-offset-2 hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-wider text-text-secondary">Priority locations</p>
            <ul className="mt-2 space-y-1.5">
              {priorityCities.map((item) => (
                <li key={item.id}>
                  <Link href={`/${generateCityPageSlug(item.slug)}`} className="font-body text-sm text-copper underline-offset-2 hover:underline">
                    Roofing in {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {service && city && (isPriorityService(service) || isPriorityCity(city)) && (
          <Link href={`/${generateComboSlug(service.slug, city.slug)}`} className="mt-4 inline-flex rounded-md bg-copper px-4 py-2 font-body text-sm font-semibold text-text-on-copper hover:bg-copper-dark">
            Priority page: {service.name} in {city.name}
          </Link>
        )}
      </div>
    </section>
  );
}
