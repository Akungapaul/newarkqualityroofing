interface ServiceCredentialsProps {
  credentials: string[];
}

export function ServiceCredentials({ credentials }: ServiceCredentialsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2" role="list" aria-label="Credentials and certifications">
      {credentials.map((credential, index) => (
        <span
          key={index}
          role="listitem"
          className="inline-flex items-center gap-1.5 rounded-sm border border-copper/30 bg-copper/5 px-3 py-1.5 font-body text-xs font-semibold text-forest"
        >
          <svg
            className="h-3.5 w-3.5 text-copper"
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
          {credential}
        </span>
      ))}
    </div>
  );
}
