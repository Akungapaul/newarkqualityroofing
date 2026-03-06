import type { ReactNode } from 'react';

interface StickyFormSidebarProps {
  children: ReactNode;
}

export function StickyFormSidebar({ children }: StickyFormSidebarProps) {
  return (
    <aside className="hidden lg:block" aria-label="Request a free estimate">
      <div className="sticky top-24">{children}</div>
    </aside>
  );
}
