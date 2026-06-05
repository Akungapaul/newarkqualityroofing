import Image from 'next/image';
import { parseRichText } from '@/lib/rich-text';

interface ServiceOverviewProps {
  heading: string;
  paragraphs: string[];
  /**
   * Structured Core sub-services (e.g. the 6 core roof repairs). Optional —
   * when present, renders a counted definition list beneath the overview
   * paragraphs. Services without it render exactly as before.
   */
  subServices?: { name: string; description: string }[];
  image?: { src: string; alt: string };
  imagePosition?: 'above' | 'below';
}

/**
 * Splits the leading answer sentence from the remainder so the answer can be
 * rendered bold. Authors wrap the answer in **…** markdown. The closing **
 * may sit mid-sentence (e.g. "…storm damage** — for residential …properties.")
 * or at the sentence end (e.g. "…drip point.** Water enters…"). In both cases
 * the surrounding ** must be stripped — never rendered as literal asterisks —
 * and the full answer sentence bolded with no stray ** leaking downstream.
 */
function splitAnswer(text: string): { answer: string | null; rest: string } {
  if (text.startsWith('**')) {
    const close = text.indexOf('**', 2);
    if (close !== -1) {
      const inner = text.slice(2, close);
      const rest = text.slice(close + 2);
      // If the bolded span does not already end in sentence punctuation, the
      // answer sentence continues past the closing ** — pull that tail into
      // the bolded answer. Otherwise the bolded span is the whole sentence.
      if (!/[.!?]$/.test(inner.trimEnd())) {
        const tail = rest.match(/^(\s*[^.!?]*[.!?])([\s\S]*)/);
        if (tail) {
          return { answer: inner + tail[1], rest: tail[2].replace(/^\s+/, '') };
        }
      }
      return { answer: inner, rest: rest.replace(/^\s+/, '') };
    }
  }
  const match = text.match(/^(.*?[.!?])\s*([\s\S]*)/);
  if (!match) return { answer: null, rest: text };
  return { answer: match[1], rest: match[2] };
}

function boldFirstSentence(text: string) {
  const { answer, rest } = splitAnswer(text);
  if (answer === null) return <>{parseRichText(text)}</>;
  return (
    <>
      <strong className="text-forest">{parseRichText(answer)}</strong>
      {rest ? <> {parseRichText(rest)}</> : null}
    </>
  );
}

export function ServiceOverview({ heading, paragraphs, subServices, image, imagePosition = 'above' }: ServiceOverviewProps) {
  const imageBlock = image && (
    <div className="photo-treatment mt-6 overflow-hidden rounded-lg">
      <Image
        src={image.src}
        alt={image.alt}
        width={1200}
        height={400}
        className="aspect-[3/1] w-full object-cover"
        sizes="(max-width: 768px) 100vw, 65vw"
        loading="lazy"
      />
    </div>
  );

  return (
    <section aria-labelledby="service-overview-heading">
      <h2
        id="service-overview-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        {heading}
      </h2>

      {imagePosition === 'above' && imageBlock}

      <div className="mt-6 space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="font-body text-base leading-relaxed text-text-secondary"
          >
            {index === 0 ? boldFirstSentence(paragraph) : parseRichText(paragraph)}
          </p>
        ))}
      </div>

      {/* Counted Core sub-services list (e.g. the 6 core roof repairs).
          Rendered only when the structured field is supplied. */}
      {subServices && subServices.length > 0 && (
        <ul className="mt-8 space-y-4">
          {subServices.map((sub, index) => (
            <li
              key={index}
              className="flex items-start gap-3 font-body text-base leading-relaxed text-text-secondary"
            >
              <span
                className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-copper"
                aria-hidden="true"
              />
              <span>
                <strong className="text-forest">{sub.name}</strong> — {parseRichText(sub.description)}
              </span>
            </li>
          ))}
        </ul>
      )}

      {imagePosition === 'below' && imageBlock}
    </section>
  );
}
