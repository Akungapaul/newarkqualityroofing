import Image from 'next/image';
import Link from 'next/link';

export function HomeResidentialCommercial() {
  return (
    <section aria-labelledby="residential-heading">
      {/* Residential Block — forest-dark bg */}
      <div className="bg-forest-dark py-16 text-text-on-dark lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2
                id="residential-heading"
                className="font-heading text-3xl font-bold sm:text-4xl"
              >
                Residential Roofing Company Serving Newark, New Jersey
              </h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-parchment/80">
                Your home deserves a roofing company that treats every project
                like their own. We specialize in residential roofing across
                Newark and all of Essex County — from asphalt shingle
                installations to slate and metal roof systems.{' '}
                <strong>
                  Our team provides affordable roofing services without cutting
                  corners on quality or craftsmanship.
                </strong>
              </p>

              <h3 className="mt-10 font-heading text-xl font-semibold text-copper-light">
                Comprehensive Roofing Services for Every Project
              </h3>
              <p className="mt-3 font-body text-base leading-relaxed text-parchment/70">
                Whether you need a single-layer shingle repair or a full
                tear-off and replacement, we handle every phase of your
                residential roofing project. Our contracting team manages
                permits, material delivery, installation, and cleanup — so you
                can focus on what matters.
              </p>

              <h3 className="mt-8 font-heading text-xl font-semibold text-copper-light">
                Roof Inspections and Roof Maintenance
              </h3>
              <p className="mt-3 font-body text-base leading-relaxed text-parchment/70">
                Regular roof inspections catch small problems before they become
                expensive emergencies. Our roof maintenance programs extend the
                life of your roof by 5 to 10 years, saving you thousands in
                premature replacement costs.
              </p>

              <div className="mt-8">
                <Link
                  href="/residential-roof-installation"
                  className="inline-flex items-center gap-2 rounded-md bg-copper px-6 py-3 font-heading text-base font-semibold text-text-on-copper transition-colors hover:bg-copper-dark"
                >
                  Explore Residential Roofing
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/commercial-roofing-newark.jpg"
                alt="Commercial roofing in Newark NJ — trusted local roof repair services"
                width={800}
                height={600}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-copper/30 via-forest/50 to-forest-dark/80"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex items-end p-6">
                <p className="font-heading text-sm font-semibold text-parchment/90">
                  Commercial roof system — Newark, NJ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Commercial Block — parchment bg */}
      <div className="bg-parchment py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2
            id="commercial-heading"
            className="font-heading text-3xl font-bold text-forest sm:text-4xl"
          >
            Commercial Roof Services and Repairs
          </h2>
          <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-text-secondary">
            Newark businesses trust us for commercial roofing that minimizes
            downtime and maximizes roof lifespan. We install and repair TPO,
            EPDM, modified bitumen, and commercial metal roof systems — all
            backed by manufacturer warranties and our workmanship guarantee.
          </p>

          <h3 className="mt-10 font-heading text-xl font-semibold text-forest">
            Siding, Gutter, and Window Services
          </h3>
          <p className="mt-3 max-w-3xl font-body text-base leading-relaxed text-text-secondary">
            A complete building envelope means more than just your roof. We
            also provide professional siding installation, gutter replacement
            and repair, and window services to protect your property from top
            to bottom. Bundle your roofing project with siding or gutter work
            and save.
          </p>

          <div className="mt-8">
            <Link
              href="/commercial-roof-installation"
              className="inline-flex items-center gap-2 rounded-md border-2 border-forest bg-transparent px-6 py-3 font-heading text-base font-semibold text-forest transition-colors hover:bg-forest hover:text-text-on-dark"
            >
              Explore Commercial Roofing
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
