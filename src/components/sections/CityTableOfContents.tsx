'use client';

import { useScrollSpy } from '@/lib/hooks/useScrollSpy';

interface TocSection {
  id: string;
  label: string;
}

interface CityTableOfContentsProps {
  sections: TocSection[];
}

export function CityTableOfContents({ sections }: CityTableOfContentsProps) {
  const sectionIds = sections.map((s) => s.id);
  const activeId = useScrollSpy(sectionIds);

  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-24 hidden lg:block"
    >
      <p className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-forest">
        On This Page
      </p>
      <ul className="space-y-1">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block border-l-2 py-1.5 pl-3 font-body text-sm transition-colors ${
                  isActive
                    ? 'border-copper text-copper font-semibold'
                    : 'border-transparent text-text-secondary hover:border-border hover:text-forest'
                }`}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
