interface ServiceWhyChooseUsProps {
  heading: string;
  reasons: { title: string; description: string }[];
}

export function ServiceWhyChooseUs({ heading, reasons }: ServiceWhyChooseUsProps) {
  return (
    <section aria-labelledby="service-why-heading">
      <h2
        id="service-why-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        {heading}
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="rounded-sm border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-start gap-3">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-copper/10 font-heading text-sm font-bold text-copper"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-forest">
                  {reason.title}
                </h3>
                <p className="mt-1 font-body text-sm leading-relaxed text-text-secondary">
                  {reason.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
