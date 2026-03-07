import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * Parse markdown-style inline links [text](url) within paragraph text
 * and render them as Next.js Link components.
 *
 * Example input: "We serve [Bloomfield](/roof-repair-bloomfield-nj) and nearby areas."
 * Output: JSX with clickable Link for "Bloomfield"
 */
export function renderParagraphWithLinks(text: string): ReactNode {
  // Match [link text](url) pattern
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const linkText = match[1];
    const href = match[2];

    parts.push(
      <Link
        key={`${href}-${match.index}`}
        href={href}
        className="text-copper font-semibold underline decoration-copper/40 underline-offset-2 transition-colors hover:text-copper-dark hover:decoration-copper"
      >
        {linkText}
      </Link>,
    );

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after last link
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  // If no links found, return plain text
  if (parts.length === 0) {
    return text;
  }

  return <>{parts}</>;
}
