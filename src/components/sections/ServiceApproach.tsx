import Image from 'next/image';
import { parseRichText } from '@/lib/rich-text';

interface ServiceApproachProps {
  heading: string;
  content: string[];
  image?: { src: string; alt: string };
  subheadings?: string[];
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

export function ServiceApproach({ heading, content, image, subheadings, imagePosition = 'above' }: ServiceApproachProps) {
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
    <section aria-labelledby="service-approach-heading">
      <h2
        id="service-approach-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        {heading}
      </h2>

      {imagePosition === 'above' && imageBlock}

      <div className="mt-6 space-y-4">
        {content.map((paragraph, index) => (
          <div key={index}>
            {subheadings?.[index] && (
              <span className="mb-2 block font-heading text-lg font-semibold text-forest">
                {subheadings[index]}
              </span>
            )}
            <p className="font-body text-base leading-relaxed text-text-secondary">
              {index === 0 ? boldFirstSentence(paragraph) : parseRichText(paragraph)}
            </p>
          </div>
        ))}
      </div>

      {imagePosition === 'below' && imageBlock}
    </section>
  );
}
