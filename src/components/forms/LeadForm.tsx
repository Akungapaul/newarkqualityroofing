'use client';

import { useActionState } from 'react';
import { submitLead, type LeadFormState } from '@/app/actions/submit-lead';
import { SubmitButton } from './SubmitButton';
import type { NavServiceGroup } from '@/data/nav-data';

interface LeadFormProps {
  defaultService?: string;
  defaultCity?: string;
  className?: string;
  variant?: 'hero' | 'standard';
  serviceGroups: NavServiceGroup[];
}

const initialState: LeadFormState = {};

const inputClasses =
  'w-full rounded-md border border-border bg-white px-4 py-3 font-body text-text-primary placeholder:text-text-secondary/60 focus:border-copper focus:ring-2 focus:ring-copper focus:outline-none transition-colors';

const selectClasses =
  'w-full appearance-none rounded-md border border-border bg-white px-4 py-3 pr-10 font-body text-text-primary focus:border-copper focus:ring-2 focus:ring-copper focus:outline-none transition-colors';

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors || errors.length === 0) return null;
  return (
    <p className="mt-1 text-sm text-red-600" aria-live="polite">
      {errors[0]}
    </p>
  );
}

export function LeadForm({
  defaultService,
  className,
  variant = 'standard',
  serviceGroups,
}: LeadFormProps) {
  const [state, formAction] = useActionState(submitLead, initialState);

  const isHero = variant === 'hero';

  const wrapperClasses = isHero
    ? 'rounded-lg bg-forest-dark/90 p-6 text-text-on-dark backdrop-blur-sm md:p-8'
    : 'rounded-lg border border-border bg-parchment-light p-6 text-text-primary';

  const labelClasses = isHero
    ? 'block text-sm font-semibold text-parchment mb-1.5'
    : 'block text-sm font-semibold text-text-primary mb-1.5';

  return (
    <div className={`${wrapperClasses} ${className ?? ''}`}>
      <p className="mb-6 font-heading text-2xl font-bold">
        Get Your Free Roofing Estimate
      </p>

      <form action={formAction} className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="lead-name" className={labelClasses}>
            Full Name
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your full name"
            className={inputClasses}
          />
          <FieldError errors={state.errors?.name} />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="lead-email" className={labelClasses}>
            Email
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="your@email.com"
            className={inputClasses}
          />
          <FieldError errors={state.errors?.email} />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="lead-phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="(973) 555-0123"
            className={inputClasses}
          />
          <FieldError errors={state.errors?.phone} />
        </div>

        {/* Service Needed */}
        <div className="relative">
          <label htmlFor="lead-service" className={labelClasses}>
            Service Needed
          </label>
          <select
            id="lead-service"
            name="serviceNeeded"
            required
            defaultValue={defaultService ?? ''}
            className={selectClasses}
          >
            <option value="" disabled>
              Select a service...
            </option>
            {serviceGroups.map((group) => (
              <optgroup key={group.category} label={group.categoryLabel}>
                {group.services.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          {/* Custom chevron */}
          <svg
            className="pointer-events-none absolute right-3 top-[2.4rem] h-5 w-5 text-text-secondary"
            fill="none"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="m6 8 4 4 4-4"
            />
          </svg>
          <FieldError errors={state.errors?.serviceNeeded} />
        </div>

        {/* General error message */}
        {state.message && !state.success && (
          <p className="text-sm text-red-600" aria-live="polite">
            {state.message}
          </p>
        )}

        <SubmitButton />
        <p className="mt-3 text-center font-body text-xs text-text-secondary/70">
          100% free, no obligation. We respond within 1 hour.
        </p>
      </form>
    </div>
  );
}
