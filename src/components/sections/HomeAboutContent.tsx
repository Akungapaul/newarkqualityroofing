import { PhoneNumber } from '@/components/ui/PhoneNumber';

export function HomeAboutContent() {
  return (
    <section
      className="bg-parchment py-16 lg:py-24"
      aria-labelledby="home-about-heading"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2
          id="home-about-heading"
          className="text-center font-heading text-3xl font-bold text-forest sm:text-4xl"
        >
          Newark Roofing — Protecting Your Home and Property
        </h2>

        <div className="mt-10 space-y-6 font-body text-lg leading-relaxed text-text-secondary">
          <p>
            For over 15 years, Newark Quality Roofing has provided reliable
            roofing services to homeowners and businesses across Newark, NJ and
            all of Essex County. Our mission is simple: deliver honest work,
            fair pricing, and lasting protection for every property we touch.
          </p>

          <p>
            <em className="not-italic text-forest/80">
              &ldquo;We treat every roof like it&rsquo;s our own — because our
              reputation in this community depends on it.&rdquo;
            </em>
          </p>

          <p>
            When you call Newark Quality Roofing, you get a team that knows the
            Newark area inside and out. We understand the unique challenges NJ
            roofing faces — from freeze-thaw cycles and nor&rsquo;easters to
            intense summer UV. That local knowledge means better
            recommendations, better materials, and a roof that lasts.
          </p>
        </div>

        <h3 className="mt-10 font-heading text-2xl font-semibold text-forest">
          Top-Rated Roofing in the Newark Area
        </h3>
        <p className="mt-4 font-body text-lg leading-relaxed text-text-secondary">
          Our 5-star rating across Google and HomeAdvisor reflects our
          commitment to quality and customer satisfaction. We earn every review
          with transparent communication, on-time project delivery, and
          workmanship that speaks for itself.
        </p>

        <h3 className="mt-10 font-heading text-2xl font-semibold text-forest">
          Trusted Local Roof Repair Services
        </h3>
        <p className="mt-4 font-body text-lg leading-relaxed text-text-secondary">
          As a family-owned roofing company, we hold ourselves to the highest
          standards. Every crew member on your project is trained, licensed, and
          insured — because your home deserves nothing less.
        </p>

        <ul className="mt-6 space-y-3 font-body text-base text-text-secondary">
          <li className="flex items-center gap-3">
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper/15"
              aria-hidden="true"
            >
              <svg
                className="h-3.5 w-3.5 text-copper"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            NJ Home Improvement Contractor (HIC) Licensed
          </li>
          <li className="flex items-center gap-3">
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper/15"
              aria-hidden="true"
            >
              <svg
                className="h-3.5 w-3.5 text-copper"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            GAF Certified Contractor
          </li>
          <li className="flex items-center gap-3">
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper/15"
              aria-hidden="true"
            >
              <svg
                className="h-3.5 w-3.5 text-copper"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            Fully Insured and Bonded
          </li>
          <li className="flex items-center gap-3">
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper/15"
              aria-hidden="true"
            >
              <svg
                className="h-3.5 w-3.5 text-copper"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            5-Star Google Rating — 500+ Reviews
          </li>
        </ul>

        <div className="mt-10 text-center">
          <p className="font-body text-lg text-text-secondary">
            Get a free quote from the Newark area&rsquo;s most trusted roofing
            team.
          </p>
          <div className="mt-4">
            <PhoneNumber
              size="lg"
              className="text-copper hover:text-copper-dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
