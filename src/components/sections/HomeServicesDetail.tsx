import Image from 'next/image';
import { parseRichText } from '@/lib/rich-text';
import {
  homeServicesDetail,
  homeServicesDetailH2,
  homeServicesDetailIntro,
} from '@/data/home-services-detail';

// Homepage services-detail block (Cora "Roofing Contractor" run, Phase 1).
// Renders one H3 per service area with a single H4 sub-point beneath it, so the
// heading tree stays monotonic H2 -> H3 -> H4 for scripts/audit-headings.ts.

const H3 = 'font-heading text-xl font-bold text-forest sm:text-2xl';
const H4 = 'font-heading text-lg font-semibold text-forest';

export function HomeServicesDetail() {
  return (
    <section
      className="bg-white py-12 lg:py-16"
      aria-labelledby="home-services-detail-heading"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h2
          id="home-services-detail-heading"
          className="font-heading text-2xl font-bold text-forest sm:text-3xl"
        >
          {homeServicesDetailH2}
        </h2>
        <p className="mt-4 font-body text-base leading-relaxed text-text-primary">
          {parseRichText(homeServicesDetailIntro)}
        </p>
        <figure className="photo-treatment mt-6 overflow-hidden rounded-lg">
          <div className="relative aspect-[21/9] w-full">
            <Image
              src="/images/newark-roofing-team.jpg"
              alt="Newark Quality Roofing crew on a Newark, NJ roof during a replacement"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
              loading="lazy"
            />
          </div>
        </figure>

        <div className="mt-10 space-y-10">
          {homeServicesDetail.map((s) => (
            <div key={s.h3}>
              <h3 className={H3}>{s.h3}</h3>
              <figure className="photo-treatment mt-3 overflow-hidden rounded-lg">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={s.img.src}
                    alt={s.img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    loading="lazy"
                  />
                </div>
              </figure>
              {s.body.map((p, i) => (
                <p
                  key={i}
                  className="mt-3 font-body text-base leading-relaxed text-text-primary"
                >
                  {parseRichText(p)}
                </p>
              ))}
              <div className="mt-5 border-l-2 border-copper/40 pl-4">
                <h4 className={H4}>{s.point.h4}</h4>
                <p className="mt-2 font-body text-base leading-relaxed text-text-secondary">
                  {parseRichText(s.point.body)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
