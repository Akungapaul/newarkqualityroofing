import { siteConfig } from '@/data/site-config';

interface CityMapNapProps {
  cityName: string;
  state?: string;
}

export function CityMapNap({ cityName, state = 'NJ' }: CityMapNapProps) {
  const mapQuery = encodeURIComponent(`${cityName}, ${state}`);

  return (
    <div>
      <h2 id="location-heading" className="font-heading text-2xl font-bold text-forest sm:text-3xl">
        Find Us Near {cityName}
      </h2>
      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        {/* Google Maps embed */}
        <div className="overflow-hidden rounded-lg border border-border shadow-sm">
          <iframe
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            title={`Map of ${cityName}, ${state}`}
            loading="lazy"
            className="aspect-video w-full"
            allowFullScreen
          />
        </div>

        {/* NAP block */}
        <div className="flex flex-col justify-center">
          <h3 className="font-heading text-xl font-semibold text-forest">
            {siteConfig.companyName}
          </h3>

          <address className="mt-4 space-y-3 not-italic">
            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-copper"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <div className="font-body text-sm text-text-secondary">
                <p>{siteConfig.address.street}</p>
                <p>
                  {siteConfig.address.city}, {siteConfig.address.state}{' '}
                  {siteConfig.address.zip}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg
                className="h-5 w-5 shrink-0 text-copper"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <a
                href={`tel:${siteConfig.phone.tel}`}
                className="font-body text-sm font-semibold text-copper transition-colors hover:text-copper-dark"
              >
                {siteConfig.phone.display}
              </a>
            </div>
          </address>

          {/* Business hours */}
          <div className="mt-6">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-forest">
              Business Hours
            </h4>
            <dl className="mt-2 space-y-1">
              {siteConfig.businessHours.map((entry) => (
                <div
                  key={entry.day}
                  className="flex justify-between gap-4 font-body text-sm"
                >
                  <dt className="text-text-secondary">{entry.day}</dt>
                  <dd className="font-semibold text-forest">{entry.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
