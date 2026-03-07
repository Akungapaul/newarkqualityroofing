interface ComboProcessProps {
  steps: string[];
  serviceName: string;
}

export function ComboProcess({ steps, serviceName }: ComboProcessProps) {
  return (
    <section aria-labelledby="combo-process-heading">
      <h2
        id="combo-process-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        Our {serviceName} Process
      </h2>
      <ol className="mt-8 space-y-4">
        {steps.map((step, index) => (
          <li
            key={index}
            className="flex gap-4 rounded-sm border border-border bg-white p-4 shadow-sm"
          >
            {/* Step number badge */}
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-copper font-heading text-sm font-bold text-text-on-copper"
              aria-hidden="true"
            >
              {index + 1}
            </div>
            <p className="pt-0.5 font-body text-base leading-relaxed text-text-secondary">
              {step}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
