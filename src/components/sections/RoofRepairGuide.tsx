import Image from 'next/image';
import { Fragment } from 'react';
import { roofRepairGuide } from '@/data/roof-repair-guide';
import { JsonLd } from '@/components/seo/JsonLd';
import { SEO_CONFIG } from '@/lib/seo-config';

const pageUrl = `${SEO_CONFIG.BASE_URL}/roof-repair-in-newark-nj`;
const groups = [...new Set(roofRepairGuide.map((entry) => entry.group))];
const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const preparation = [
  { name: 'What Roofing Problem Should You Record?', steps: [
    'Write down when the leak or damage appeared and which rooms or roof areas seem affected.',
    'Collect photographs from safe, accessible locations; do not climb onto the roof to obtain them.',
  ] },
  { name: 'How Should You Prepare for the Roofing Visit?', steps: [
    'Gather previous estimates, repair records and warranty documents for the inspector to review.',
    'Tell the contractor about access restrictions, pets and any areas that cannot be entered safely.',
  ] },
  { name: 'What Should You Review in the Roof Repair Proposal?', steps: [
    'Ask for a written scope identifying the repair area, materials, price and exclusions.',
    'Confirm how additional findings, scheduling and the completion record will be handled before agreeing to the work.',
  ] },
];

// Match complete repair phrases; spans preserve the exact visible wording.
function RepairText({ text }: { text: string }) {
  return text.split(/(\broof repair costs\b|\broof leak repair\b|\bflat roof repair\b|\bflashing repair\b|\bgutter repair\b|\bchimney repair\b|\broof repair\b)/gi).map((part, i) =>
    i % 2 ? <span className="roof-repair-phrase" key={i}>{part}</span> : <Fragment key={i}>{part}</Fragment>,
  );
}

export function RoofRepairGuide() {
  const images = roofRepairGuide.map((entry, index) => ({
    '@type': 'ImageObject',
    '@id': `${pageUrl}#roof-repair-image-${index + 1}`,
    contentUrl: `${SEO_CONFIG.BASE_URL}${entry.image}`,
    caption: entry.alt,
    description: `Illustrative roofing image for ${entry.term.toLowerCase()}.`,
  }));
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'ImageGallery', '@id': `${pageUrl}#roof-repair-guide`,
        name: 'Roof repair planning guide', isPartOf: { '@id': pageUrl }, image: images },
      { '@type': 'DefinedTermSet', '@id': `${pageUrl}#roof-repair-terms`,
        name: 'Roof repair planning terms',
        hasDefinedTerm: roofRepairGuide.map((entry) => ({
          '@type': 'DefinedTerm', name: entry.term,
          '@id': `${pageUrl}#roof-repair-${slug(entry.term)}`,
          description: entry.text,
          inDefinedTermSet: { '@id': `${pageUrl}#roof-repair-terms` },
        })),
      },
      { '@type': 'HowTo', '@id': `${pageUrl}#roof-repair-visit`,
        name: 'Prepare for a roof repair visit',
        description: 'Record the concern, prepare access information and review the written proposal.',
        step: preparation.map((section, index) => ({
          '@type': 'HowToSection', name: section.name, position: index + 1,
          itemListElement: section.steps.map((text, stepIndex) => ({
            '@type': 'HowToStep', position: stepIndex + 1, text,
            url: `${pageUrl}#roof-repair-step-${index}-${stepIndex}`,
          })),
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      {/* Guide styles live in globals.css (35 single-rule stylesheet includes consolidated on 2026-09-16). */}
      <section id="roof-repair-guide" aria-labelledby="roof-repair-guide-heading" className="mt-12 space-y-8">
        <h2 id="roof-repair-guide-heading" className="font-heading text-3xl font-bold text-forest">Roof Repair Planning and Reference Guide</h2>
        <p className="font-body text-lg text-text-secondary">Use these repair notes to prepare questions, compare a written scope and understand the work being proposed. Images illustrate roofing tasks and materials; they are not records of a particular customer project.</p>
        {groups.map((group, groupIndex) => (
          <section key={group} aria-labelledby={`roof-repair-group-${groupIndex}`}>
            <h3 id={`roof-repair-group-${groupIndex}`} className="font-heading text-2xl font-bold text-forest">{group}</h3>
            <div className="mt-5 space-y-8">
              {roofRepairGuide.filter((entry) => entry.group === group).map((entry) => (
                <aside key={entry.term} id={`roof-repair-${slug(entry.term)}`} aria-label={`${entry.group}: ${entry.term}`} className="roof-repair-note rounded-lg border border-forest/15 p-5 sm:p-6">
                  <p className="roof-repair-term mb-4 font-body text-xl font-semibold text-forest"><dfn className="not-italic">{entry.term}</dfn></p>
                  <figure className="roof-repair-figure mb-5">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-md">
                      <Image src={entry.image} alt={entry.alt} fill sizes="(max-width: 768px) 100vw, 60vw" loading="lazy" className="object-cover" />
                    </div>
                    <figcaption className="roof-repair-caption mt-2 font-body text-lg text-text-secondary">{entry.group}: {entry.term.toLowerCase()} — illustrative reference.</figcaption>
                  </figure>
                  <p className="roof-repair-explanation font-body text-lg leading-relaxed text-text-secondary"><RepairText text={entry.text} /></p>
                </aside>
              ))}
            </div>
          </section>
        ))}
      </section>
      <section id="roofing-repair-questions" aria-labelledby="roofing-repair-questions-heading" className="mt-12">
        <h2 id="roofing-repair-questions-heading" className="font-heading text-3xl font-bold text-forest">What Should Newark Owners Ask About Roofing Repair?</h2>
        <p className="mt-4 font-body text-lg leading-relaxed text-text-secondary">Use the questions below to organize the observations and documents you can safely gather before a contractor arrives. They help the estimator identify the affected area, access needs and the details that belong in a written proposal.</p>
      </section>
      <section id="roof-repair-visit" aria-labelledby="roof-repair-visit-heading" className="mt-12">
        <h2 id="roof-repair-visit-heading" className="font-heading text-3xl font-bold text-forest">How Should You Prepare for a Roofing Repair Visit?</h2>
        {preparation.map((section, index) => (
          <section key={section.name} className="mt-6">
            <h3 className="font-heading text-xl font-bold text-forest">{section.name}</h3>
            <ol className="mt-3 list-decimal space-y-3 pl-6 font-body text-lg text-text-secondary">
              {section.steps.map((text, stepIndex) => <li id={`roof-repair-step-${index}-${stepIndex}`} key={text}>{text}</li>)}
            </ol>
          </section>
        ))}
      </section>
    </>
  );
}
