import React from 'react';
import { linkPolicy, relFor } from '@/lib/outbound-links';

/**
 * Parses simple rich text markers into React nodes:
 *   **text** → <strong>
 *   *text*  → <em>
 *   [text](/url) → <a>
 *
 * No dangerouslySetInnerHTML — uses regex split + React elements.
 *
 * External hrefs are classified by `@/lib/outbound-links`: allowlisted HTTPS
 * citations render with an appropriate `rel`, everything else degrades to plain
 * text. Internal links are untouched.
 */
export function parseRichText(text: string): React.ReactNode {
  // Combined pattern: links, bold, italic (order matters — bold before italic)
  // ORDER MATTERS, and so does group numbering — the dispatch below indexes these
  // positionally. Any change here must renumber every match[n] in lockstep.
  //   1,2  [[TERM|expansion]]  → <abbr title>   (MUST precede the link branch:
  //                              "[[" would otherwise partially match a link)
  //   3,4,5 [text](/url)       → <a>            (3 = whole, 4 = label, 5 = href)
  //   6    {{text}}            → <b>            (offset without added importance)
  //   7    **text**            → <strong>       (bold before italic, or `**`
  //   8    *text*              → <em>            would be eaten as two italics)
  //   9    //text//          → <i>            (technical term, alternate voice)
  //   10   __text__          → <u>            (annotated term)
  const pattern = /\[\[([^\]|]+)\|([^\]]+)\]\]|(\[([^\]]+)\]\(([^)]+)\))|\{\{(.+?)\}\}|\*\*(.+?)\*\*|\/\/(.+?)\/\/|__(.+?)__|\*(.+?)\*/g;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  // Track marker matches explicitly. Inferring "no markers" from the shape of
  // `parts` breaks when a marker legitimately yields a lone string — a rejected
  // external link pushes its plain label, which would otherwise fall through the
  // guard below and render the RAW markdown to the reader.
  let matched = false;

  while ((match = pattern.exec(text)) !== null) {
    matched = true;
    // Push preceding plain text
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1]) {
      // Abbreviation: [[TERM|expansion]]
      parts.push(
        <abbr key={key++} title={match[2]} className="underline decoration-dotted decoration-from-font underline-offset-4">
          {match[1]}
        </abbr>
      );
    } else if (match[3]) {
      // Link: [text](/url) — dispatch on the shared outbound policy.
      // Internal hrefs render exactly as they always have (byte-identical
      // output). Allowlisted https citations gain a rel. Anything else renders
      // as plain label text rather than becoming an unvetted outbound link.
      const policy = linkPolicy(match[5]);
      if (policy === 'reject') {
        parts.push(match[4]);
      } else {
        parts.push(
          <a key={key++} href={match[5]} rel={relFor(policy)} className="text-copper underline decoration-copper/40 underline-offset-2 transition-colors hover:text-copper-dark hover:decoration-copper">
            {match[4]}
          </a>
        );
      }
    } else if (match[6]) {
      // Offset term: {{text}} → <b> (stylistic offset, not added importance)
      parts.push(<b key={key++} className="font-semibold text-forest">{match[6]}</b>);
    } else if (match[7]) {
      // Bold: **text**
      parts.push(<strong key={key++} className="text-forest">{match[7]}</strong>);
    } else if (match[8]) {
      // Technical term: //text// → <i>. Rendered upright, not italic: <i> marks an
      // alternate voice (a term of art), which is what these are; italicising every
      // roofing term would make the prose unreadable.
      parts.push(<i key={key++} className="not-italic">{match[8]}</i>);
    } else if (match[9]) {
      // Annotated term: __text__ → <u>, dotted so it never reads as a link.
      parts.push(<u key={key++} className="decoration-dotted decoration-from-font underline-offset-4">{match[9]}</u>);
    } else if (match[10]) {
      // Italic: *text*
      parts.push(<em key={key++}>{match[10]}</em>);
    }

    lastIndex = match.index + match[0].length;
  }

  // Push remaining plain text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  // No markers at all — hand back the original string untouched.
  if (!matched) return text;
  // A single plain-string result is legitimate (e.g. a rejected link reduced to
  // its label); return it as-is rather than the unparsed source text.
  if (parts.length === 1 && typeof parts[0] === 'string') return parts[0];

  return <>{parts}</>;
}
