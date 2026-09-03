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
  const pattern = /(\[([^\]]+)\]\(([^)]+)\))|\*\*(.+?)\*\*|\*(.+?)\*/g;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    // Push preceding plain text
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1]) {
      // Link: [text](/url) — dispatch on the shared outbound policy.
      // Internal hrefs render exactly as they always have (byte-identical
      // output). Allowlisted https citations gain a rel. Anything else renders
      // as plain label text rather than becoming an unvetted outbound link.
      const policy = linkPolicy(match[3]);
      if (policy === 'reject') {
        parts.push(match[2]);
      } else {
        parts.push(
          <a key={key++} href={match[3]} rel={relFor(policy)} className="text-copper underline decoration-copper/40 underline-offset-2 transition-colors hover:text-copper-dark hover:decoration-copper">
            {match[2]}
          </a>
        );
      }
    } else if (match[4]) {
      // Bold: **text**
      parts.push(<strong key={key++} className="text-forest">{match[4]}</strong>);
    } else if (match[5]) {
      // Italic: *text*
      parts.push(<em key={key++}>{match[5]}</em>);
    }

    lastIndex = match.index + match[0].length;
  }

  // Push remaining plain text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  // If no markers found, return original string
  if (parts.length === 0) return text;
  if (parts.length === 1 && typeof parts[0] === 'string') return text;

  return <>{parts}</>;
}
