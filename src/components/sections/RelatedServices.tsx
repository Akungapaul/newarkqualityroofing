import Link from 'next/link';

interface RelatedService {
  name: string;
  slug: string;
  shortDescription: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
}

export function RelatedServices({ services }: RelatedServicesProps) {
  if (services.length === 0) return null;

  return (
    <section
      className="border-t border-border bg-parchment-light py-16 lg:py-20"
      aria-labelledby="related-services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          id="related-services-heading"
          className="text-center font-heading text-2xl font-bold text-forest sm:text-3xl"
        >
          Related Services
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group rounded-lg border border-border bg-white p-6 transition-all hover:border-copper hover:shadow-md focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-none"
            >
              <h3 className="font-heading text-lg font-bold text-forest transition-colors group-hover:text-copper">
                {service.name}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary line-clamp-3">
                {service.shortDescription}
              </p>
              <span className="mt-4 inline-block font-body text-sm font-semibold text-copper transition-colors group-hover:text-copper-dark">
                Learn More &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
