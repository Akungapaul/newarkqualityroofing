import { siteConfig } from '@/data/site-config';

interface PhoneNumberProps {
  className?: string;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg font-semibold',
} as const;

export function PhoneNumber({
  className,
  showIcon = true,
  size = 'md',
}: PhoneNumberProps) {
  const displayNumber = siteConfig.phone.display;
  const telNumber = siteConfig.phone.tel;

  return (
    <a
      href={`tel:${telNumber}`}
      aria-label={`Call us at ${displayNumber}`}
      className={`inline-flex items-center gap-1.5 text-copper transition-colors hover:text-copper-dark ${sizeClasses[size]} ${className ?? ''}`}
    >
      {showIcon && (
        <svg
          className="h-[1em] w-[1em] shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )}
      <span>{displayNumber}</span>
    </a>
  );
}
