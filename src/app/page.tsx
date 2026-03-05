export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-parchment px-6">
      <main className="max-w-2xl text-center">
        <h1 className="font-heading text-5xl font-bold text-forest sm:text-6xl">
          Newark Quality Roofing
        </h1>
        <p className="mt-6 font-body text-xl leading-relaxed text-text-secondary sm:text-2xl">
          Expert roofing services for Essex County and Northern New Jersey.
          Licensed, insured, and committed to quality craftsmanship.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="tel:+19735551234"
            className="inline-block rounded-sm bg-copper px-8 py-4 font-heading text-lg font-semibold text-text-on-copper transition-colors hover:bg-copper-dark"
          >
            Call for Free Estimate
          </a>
          <span className="font-body text-sm text-text-secondary">
            Serving 21+ communities across Northern NJ
          </span>
        </div>
        <div className="mt-16 border-t border-border pt-8">
          <p className="font-body text-sm text-text-secondary">
            Residential &amp; Commercial Roofing &middot; Roof Repair &middot; Roof Replacement &middot; New Installation
          </p>
        </div>
      </main>
    </div>
  );
}
