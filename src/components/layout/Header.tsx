'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import type { NavServiceGroup, NavCityItem } from '@/data/nav-data';
import { MobileMenu } from './MobileMenu';

// ─── Props ──────────────────────────────────────────────────────────────────

interface HeaderProps {
  serviceGroups: NavServiceGroup[];
  cityItems: NavCityItem[];
}

// ─── Dropdown wrapper ───────────────────────────────────────────────────────

function DropdownTrigger({
  label,
  isOpen,
  onToggle,
  onClose,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === 'Escape') onClose();
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-1.5 px-3 py-2 font-heading text-base font-semibold tracking-wide text-text-on-dark transition-colors duration-200 hover:text-copper-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
      >
        {label}
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`absolute top-full left-0 z-50 mt-2 transition-all duration-300 ${
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
        role="menu"
      >
        {children}
      </div>
    </div>
  );
}

// ─── Services mega menu ─────────────────────────────────────────────────────

function ServicesMegaMenu({
  groups,
  onClose,
}: {
  groups: NavServiceGroup[];
  onClose: () => void;
}) {
  return (
    <div className="w-[720px] rounded-lg border border-border bg-parchment p-6 shadow-2xl">
      <div className="grid grid-cols-2 gap-x-8 gap-y-5">
        {groups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-2 font-heading text-sm font-bold uppercase tracking-widest text-copper-dark">
              {group.categoryLabel}
            </h3>
            <ul className="space-y-0.5" role="group" aria-label={group.categoryLabel}>
              {group.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    onClick={onClose}
                    className="block rounded px-2 py-1 font-body text-sm text-text-primary transition-colors duration-150 hover:bg-forest/5 hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
                    role="menuitem"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Locations dropdown ─────────────────────────────────────────────────────

function LocationsDropdown({
  cityItems,
  onClose,
}: {
  cityItems: NavCityItem[];
  onClose: () => void;
}) {
  return (
    <div className="w-[340px] rounded-lg border border-border bg-parchment p-5 shadow-2xl">
      <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-widest text-copper-dark">
        Service Areas
      </h3>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-0.5" role="group" aria-label="Service locations">
        {cityItems.map((city) => (
          <li key={city.slug}>
            <Link
              href={`/${city.slug}`}
              onClick={onClose}
              className="block rounded px-2 py-1 font-body text-sm text-text-primary transition-colors duration-150 hover:bg-forest/5 hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
              role="menuitem"
            >
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Header component ───────────────────────────────────────────────────────

export function Header({ serviceGroups, cityItems }: HeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<'services' | 'locations' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeAll = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  const toggleDropdown = useCallback(
    (dropdown: 'services' | 'locations') => {
      setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
    },
    []
  );

  // Close dropdowns on Escape
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeAll();
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeAll]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-forest-dark/30 bg-forest shadow-lg shadow-forest-dark/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="group flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
            aria-label="Newark Quality Roofing - Home"
          >
            <span className="block font-heading text-xl font-bold tracking-tight text-parchment transition-colors duration-200 group-hover:text-copper-light sm:text-2xl">
              Newark Quality Roofing
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Main navigation"
          >
            <DropdownTrigger
              label="Services"
              isOpen={openDropdown === 'services'}
              onToggle={() => toggleDropdown('services')}
              onClose={closeAll}
            >
              <ServicesMegaMenu groups={serviceGroups} onClose={closeAll} />
            </DropdownTrigger>

            <DropdownTrigger
              label="Locations"
              isOpen={openDropdown === 'locations'}
              onToggle={() => toggleDropdown('locations')}
              onClose={closeAll}
            >
              <LocationsDropdown cityItems={cityItems} onClose={closeAll} />
            </DropdownTrigger>

            <Link
              href="/about"
              className="px-3 py-2 font-heading text-base font-semibold tracking-wide text-text-on-dark transition-colors duration-200 hover:text-copper-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="px-3 py-2 font-heading text-base font-semibold tracking-wide text-text-on-dark transition-colors duration-200 hover:text-copper-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
            >
              Contact
            </Link>
          </nav>

          {/* Right side: CTA + hamburger */}
          <div className="flex items-center gap-3">
            {/* CTA button */}
            <Link
              href="#lead-form"
              className="rounded-md bg-copper px-4 py-2 font-heading text-sm font-bold tracking-wide text-text-on-copper shadow-md transition-all duration-200 hover:bg-copper-dark hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-light focus-visible:ring-offset-2 focus-visible:ring-offset-forest sm:px-5 sm:text-base"
            >
              Get Free Estimate
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-parchment transition-colors duration-200 hover:bg-forest-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-forest md:hidden"
              aria-label="Open navigation menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        serviceGroups={serviceGroups}
        cityItems={cityItems}
      />
    </>
  );
}
