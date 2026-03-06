interface ServiceProcessProps {
  steps: { title: string; description: string }[];
}

export function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <section aria-labelledby="service-process-heading">
      <h2
        id="service-process-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        Our Process
      </h2>
      <ol className="mt-8 space-y-6">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-4">
            {/* Step number circle */}
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest font-heading text-lg font-bold text-text-on-dark"
              aria-hidden="true"
            >
              {index + 1}
            </div>
            <div className="pt-1">
              <h3 className="font-heading text-lg font-bold text-forest">
                {step.title}
              </h3>
              <p className="mt-1 font-body text-base leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
