import { parseRichText } from '@/lib/rich-text';
import { ProseLead } from './ProseLead';
import { homeInstallation as d } from '@/data/home-installation';

// ─── Homepage "Roof Installation in Newark" block ────────────────────────────
// Question-form H2 + four H3 subsections (what-makes-it-different, process,
// materials as labeled market ranges, personas). Inserted after the residential/
// commercial split, before the why-choose band. See src/data/home-installation.ts.

const H3 = 'font-heading text-xl font-semibold text-forest sm:text-2xl';

export function HomeInstallation() {
  return (
    <section className="bg-parchment py-16 lg:py-24" aria-labelledby="home-install-heading">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 id="home-install-heading" className="font-heading text-3xl font-bold text-forest sm:text-4xl">
          {d.h2}
        </h2>
        <div className="mt-5">
          <ProseLead paragraphs={d.intro} />
        </div>

        {/* What makes it different */}
        <div className="mt-12">
          <h3 className={H3}>{d.different.h3}</h3>
          <div className="mt-4 space-y-4 max-w-[68ch]">
            {d.different.body.map((p, i) => (
              <p
                key={i}
                className="font-body text-base leading-relaxed text-text-secondary [&_strong]:font-semibold [&_strong]:text-forest"
              >
                {parseRichText(p)}
              </p>
            ))}
          </div>
        </div>

        {/* Installation process */}
        <div className="mt-12">
          <h3 className={H3}>{d.process.h3}</h3>
          <ol className="mt-6 space-y-5">
            {d.process.steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-copper/15 font-heading text-base font-bold text-copper"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <span className="block font-heading text-lg font-semibold text-forest">{s.title}</span>
                  <p className="mt-1 font-body text-base leading-relaxed text-text-secondary">
                    {parseRichText(s.description)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Materials (labeled market ranges) */}
        <div className="mt-12">
          <h3 className={H3}>{d.materials.h3}</h3>
          <p className="mt-4 max-w-[68ch] font-body text-base leading-relaxed text-text-secondary [&_strong]:font-semibold [&_strong]:text-forest">
            {parseRichText(d.materials.intro)}
          </p>
          <ul className="mt-6 space-y-3">
            {d.materials.items.map((m) => (
              <li key={m.name} className="rounded-lg border border-border bg-white p-4 shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <span className="font-heading text-base font-semibold text-forest">{m.name}</span>
                  <span className="font-body text-sm font-semibold text-copper">{m.range}</span>
                </div>
                <p className="mt-1 font-body text-sm leading-relaxed text-text-secondary">{m.note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-body text-sm italic leading-relaxed text-text-secondary">
            {d.materials.projectNote}
          </p>
        </div>

        {/* Who it's for */}
        <div className="mt-12">
          <h3 className={H3}>{d.personas.h3}</h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {d.personas.items.map((p) => (
              <li key={p.name} className="rounded-lg border border-border bg-white p-4 shadow-sm">
                <span className="block font-heading text-base font-semibold text-forest">{p.name}</span>
                <p className="mt-1 font-body text-sm leading-relaxed text-text-secondary">{p.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
