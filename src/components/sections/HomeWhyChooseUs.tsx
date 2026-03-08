import { WHY_CHOOSE_US_REASONS } from '@/data/content-constants';
import { PhoneNumber } from '@/components/ui/PhoneNumber';

export function HomeWhyChooseUs() {
  return (
    <section
      className="bg-parchment py-16 lg:py-24"
      aria-labelledby="home-why-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="home-why-heading"
            className="font-heading text-3xl font-bold text-forest sm:text-4xl"
          >
            Why Newark Homeowners Choose Our Roofing Contractors
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-text-secondary">
            Choosing the right roofing contractor means choosing a team that
            stands behind every job with transparency, expertise, and local
            accountability.
          </p>
        </div>

        <h3 className="mt-12 text-center font-heading text-2xl font-semibold text-forest">
          Licensed and Insured Roofing Contractors
        </h3>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {WHY_CHOOSE_US_REASONS.map((reason, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-copper/10 font-heading text-sm font-bold text-copper"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div>
                  <p className="font-heading text-lg font-bold text-forest">
                    {reason.title}
                  </p>
                  <p className="mt-2 font-body text-base leading-relaxed text-text-secondary">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-body text-lg text-text-secondary">
            <strong className="text-forest">
              Ready to work with a roofing contractor you can trust? Call us
              today for your free estimate.
            </strong>
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
