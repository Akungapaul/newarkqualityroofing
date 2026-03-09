import Link from 'next/link';
import type { NearbyLink, GroupedRelatedServices, ParentPageLinks } from '@/data/linking/link-engine';
import { getCityAnchorText, getServiceAnchorText } from '@/data/linking/anchor-text';

interface ComboRelatedLinksProps {
  nearbyCities: NearbyLink[];
  relatedServices: GroupedRelatedServices[];
  parents: ParentPageLinks;
  cityName: string;
}

export function ComboRelatedLinks({
  nearbyCities,
  relatedServices,
  parents,
  cityName,
}: ComboRelatedLinksProps) {
  return (
    <section aria-labelledby="combo-related-heading" className="space-y-10">
      <h2
        id="combo-related-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        Related Services & Locations
      </h2>

      {/* 1. Nearby Cities -- card grid */}
      {nearbyCities.length > 0 && (
        <div>
          <h3 className="font-heading text-lg font-bold text-forest">
            Nearby Cities
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {nearbyCities.map((link, index) => (
              <Link
                key={link.slug}
                href={`/${link.slug}`}
                className="group rounded-sm border border-border bg-white p-4 shadow-sm transition-all hover:border-copper hover:shadow-md"
              >
                <span className="font-heading text-sm font-semibold text-forest group-hover:text-copper">
                  {getCityAnchorText(link.name, index)}
                </span>
                <span className="mt-1 block font-body text-xs text-text-secondary">
                  {link.name}, NJ
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 2. Other Services in City -- categorized list */}
      {relatedServices.length > 0 && (
        <div>
          <h3 className="font-heading text-lg font-bold text-forest">
            Other Services in {cityName}
          </h3>
          <div className="mt-4 space-y-4">
            {relatedServices.map((group) => (
              <div key={group.category}>
                <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-text-secondary">
                  {group.categoryLabel}
                </h4>
                <ul className="mt-2 space-y-1">
                  {group.services.map((svc, svcIndex) => (
                    <li key={svc.slug}>
                      <Link
                        href={`/${svc.slug}`}
                        className="font-body text-sm text-forest underline decoration-copper/30 underline-offset-2 transition-colors hover:text-copper"
                      >
                        {getServiceAnchorText(svc.name, svcIndex)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Parent Pages */}
      <div>
        <h3 className="font-heading text-lg font-bold text-forest">
          Parent Pages
        </h3>
        <ul className="mt-3 space-y-2">
          <li>
            <Link
              href={parents.servicePage.slug}
              className="font-body text-sm text-forest underline decoration-copper/30 underline-offset-2 transition-colors hover:text-copper"
            >
              {parents.servicePage.name} (all locations)
            </Link>
          </li>
          <li>
            <Link
              href={parents.cityPage.slug}
              className="font-body text-sm text-forest underline decoration-copper/30 underline-offset-2 transition-colors hover:text-copper"
            >
              {parents.cityPage.name}
            </Link>
          </li>
        </ul>
      </div>

      {/* Phase 7: Supporting article link will go here */}
    </section>
  );
}
