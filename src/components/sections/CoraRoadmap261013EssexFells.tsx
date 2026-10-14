// CORA 2026-10-13 PHRASE pass — supplemental block for
// /roof-repair-essex-fells-nj (keyword "roof repair essex fells nj").
// This is the page's FIRST supplemental block; it follows the deployed
// per-city pattern (Nutley 2026-10-13 most recently). Implements the
// 16 clean verification lines plus the 3 competitor-backed residues
// Paul approved on 2026-10-14 (Sentences +52, Variations in Sentences
// +48, P Tags +4); the rest of the R1 sibling-set complex is DROPPED
// by his ruling. Full accounting:
// files/cora-phrase-implementation-essex-fells-2026-10-13.md
// (goal newarkqualityroofing-com-seo-analysis).
//
// What renders here:
//  - One <style> element carrying this run's 24 style-tag variation
//    phrases (Variations in Style Tags +24; East Orange / Roseland /
//    Irvington mechanism).
//  - A block-level JSON-LD graph (WebPage + BreadcrumbList). The
//    BreadcrumbList crumb names carry the variation forms the
//    roadmap's SERP display-URL line counts. Unlike the Nutley pass,
//    this roadmap asks for NO business-node / hasMap / geo / logo
//    lines, so no business schema is added; the page's template JSON-LD
//    graph is untouched (the roadmap's Has JSON-LD line is a Cora
//    detection discrepancy, not a page defect).
//  - The expandable guide itself: exactly 16 new headings (the page
//    goes 13 -> 29) — six H2s, eight entity-dense H3s, and the page's
//    first two H5s, each H5 opening with a verbatim variation form.
//  - A 32-photograph record from the site's existing heroes pool (the
//    page goes 12 -> 44 images), every photograph with genuine ALT
//    text written from this run's variation forms.
//  - Field notes writing this run's own LSI/entity terms into natural
//    sentences (term coverage only; the +562/+264 pair is a software
//    constant and is not chased).
// The block starts COLLAPSED (a <details> without `open`, never
// display:none), carries no tooling labels in visible copy, and never
// touches the page H1.

import Image from 'next/image';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  coraEssexFellsTitle,
  coraEssexFellsBlockSummary,
  coraEssexFellsBlockIntro,
  coraEssexFellsSections,
  coraEssexFellsPhotoHeading,
  coraEssexFellsPhotoIntro,
  coraEssexFellsH5Notes,
  coraEssexFellsGalleryImages,
  coraEssexFellsStylePhrases,
  coraEssexFellsFieldNotesHeading,
  coraEssexFellsFieldNotesIntro,
  coraEssexFellsFieldNotesSummary,
  coraEssexFellsFieldNotes,
} from '@/data/cora-261013-essex-fells-content';

const PAGE_URL = 'https://newarkqualityroofing.com/roof-repair-essex-fells-nj';

const essexFellsSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage-cora-261013`,
      url: PAGE_URL,
      name: coraEssexFellsTitle,
      isPartOf: { '@id': 'https://newarkqualityroofing.com/#website' },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb-cora-261013` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb-cora-261013`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://newarkqualityroofing.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Roof Repair Services',
          item: 'https://newarkqualityroofing.com/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Roof Repair Essex Fells NJ',
          item: PAGE_URL,
        },
      ],
    },
  ],
};

const galleryFirstHalf = coraEssexFellsGalleryImages.slice(0, 16);
const gallerySecondHalf = coraEssexFellsGalleryImages.slice(16);

export function CoraRoadmap261013EssexFells() {
  return (
    <section aria-label="Essex Fells Roof Repair Guide and Records" className="bg-white">
      <style>
        {`:root { ${coraEssexFellsStylePhrases.map((phrase) => `--cora-261013-ef-${phrase.replace(/ /g, '-')}: 1;`).join(' ')} }
        /* CORA 2026-10-13 (Essex Fells) phrase style-tag variations: ${coraEssexFellsStylePhrases.join(', ')} */`}
      </style>
      <JsonLd data={essexFellsSchemaGraph} />
      <details className="cora-261013-essex-fells-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          {coraEssexFellsBlockSummary}
        </summary>

        <p className="mb-4 font-body text-base leading-relaxed text-slate-700">
          <b>Roof Repair Essex Fells, NJ</b>{' '}
          {coraEssexFellsBlockIntro.replace(/^Roof Repair Essex Fells, NJ /, '')}
        </p>

        {coraEssexFellsSections.map((section) => (
          <div key={section.h2}>
            <h2 className="mt-8 mb-3 font-heading text-2xl font-semibold text-brand-navy">{section.h2}</h2>
            <p className="mb-4 font-body text-base leading-relaxed text-slate-700">{section.intro}</p>
            {section.subs.map((sub) => (
              <div key={sub.h3}>
                <h3 className="mt-6 mb-2 font-heading text-xl font-semibold text-brand-navy">{sub.h3}</h3>
                <p className="mb-4 font-body text-base leading-relaxed text-slate-700">{sub.p}</p>
              </div>
            ))}
          </div>
        ))}

        <h2 className="mt-8 mb-3 font-heading text-2xl font-semibold text-brand-navy">{coraEssexFellsPhotoHeading}</h2>
        <p className="mb-4 font-body text-base leading-relaxed text-slate-700">{coraEssexFellsPhotoIntro}</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryFirstHalf.map((image) => (
            <figure key={image.src} className="overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="h-full w-full object-cover"
              />
            </figure>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallerySecondHalf.map((image) => (
            <figure key={image.src} className="overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="h-full w-full object-cover"
              />
            </figure>
          ))}
        </div>

        {coraEssexFellsH5Notes.map((note) => (
          <div key={note.h5}>
            <h5 className="mt-6 mb-2 font-heading text-lg font-semibold text-slate-900">{note.h5}</h5>
            <p className="mb-4 font-body text-base leading-relaxed text-slate-700">{note.p}</p>
          </div>
        ))}

        <h2 className="mt-8 mb-3 font-heading text-2xl font-semibold text-brand-navy">{coraEssexFellsFieldNotesHeading}</h2>
        <p className="mb-4 font-body text-base leading-relaxed text-slate-700">{coraEssexFellsFieldNotesIntro}</p>
        <details className="cora-261013-essex-fells-lsi-details">
          <summary className="cursor-pointer py-2 font-body text-base font-semibold text-brand-navy">
            {coraEssexFellsFieldNotesSummary}
          </summary>
          {coraEssexFellsFieldNotes.map((note) => (
            <p key={note.term} className="mb-4 font-body text-base leading-relaxed text-slate-700">
              <b>{note.term}</b>
              {' — '}
              {note.note}
            </p>
          ))}
        </details>
      </details>
    </section>
  );
}
