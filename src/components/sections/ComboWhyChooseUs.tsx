interface ComboWhyChooseUsProps {
  reasons: string[];
}

export function ComboWhyChooseUs({ reasons }: ComboWhyChooseUsProps) {
  return (
    <section aria-labelledby="combo-why-heading">
      <h2
        id="combo-why-heading"
        className="font-heading text-xl font-bold text-forest sm:text-2xl"
      >
        Why Choose Newark Quality Roofing
      </h2>
      <ul className="mt-4 space-y-3">
        {reasons.map((reason, index) => (
          <li
            key={index}
            className="flex items-start gap-3 rounded-sm border-l-4 border-copper/50 bg-white p-3 shadow-sm"
          >
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-copper"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-body text-sm leading-relaxed text-text-secondary">
              {reason}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
