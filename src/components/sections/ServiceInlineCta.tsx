import { PhoneNumber } from '@/components/ui/PhoneNumber';

interface ServiceInlineCtaProps {
  serviceName: string;
}

export function ServiceInlineCta({ serviceName }: ServiceInlineCtaProps) {
  return (
    <div className="rounded-lg bg-copper px-6 py-4 text-center sm:flex sm:items-center sm:justify-center sm:gap-3 sm:text-left">
      <p className="font-heading text-base font-semibold text-white">
        Ready for your free {serviceName.toLowerCase()} estimate?
      </p>
      <div className="mt-2 flex items-center justify-center gap-3 sm:mt-0">
        <PhoneNumber className="!text-white hover:!text-parchment" size="md" />
        <span className="text-sm text-white/70">or</span>
        <a
          href="#lead-form"
          className="inline-block rounded-md bg-white/15 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/25 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-copper"
        >
          Request a Quote
        </a>
      </div>
    </div>
  );
}
