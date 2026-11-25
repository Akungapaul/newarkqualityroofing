import { siteConfig } from '@/data/site-config';

export default function AccessibilityPage() {
  const { companyName, phone, address, email } = siteConfig;
  // D-01: street and ZIP are unpublished (empty in config) — compose the
  // address line from non-empty parts only, so it renders "Newark, NJ"
  // rather than a broken ", Newark, NJ ".
  const locality = [address.city, address.state].filter(Boolean).join(', ');
  const fullAddress = [address.street, locality, address.zip]
    .filter(Boolean)
    .join(', ');

  return (
    <div className="min-h-screen bg-parchment">
      <header className="px-6 pb-4 pt-16 text-center">
        <h1 className="font-heading text-4xl font-bold text-forest sm:text-5xl">
          Accessibility Statement
        </h1>
        <p className="mt-3 font-body text-sm text-text-secondary">
          Last updated: October 2026
        </p>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-20">
        <article className="space-y-10 font-body text-base leading-relaxed text-text-primary">
          {/* Commitment */}
          <p>
            {companyName} is committed to making our website accessible to
            everyone, including people with disabilities. We want every
            visitor to be able to learn about our roofing services, request
            an estimate, and contact us, regardless of ability or the
            technology they use.
          </p>

          {/* Our Goal */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Our Goal
            </h2>
            <p>
              We aim to conform to the Web Content Accessibility Guidelines
              (WCAG) 2.1 Level AA, the widely recognized standard for web
              accessibility. Accessibility is an ongoing effort for us, and
              we review our website as we add and update pages.
            </p>
          </section>

          {/* Measures We Take */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Measures We Take
            </h2>
            <p className="mb-3">
              To support accessibility, our website is built with:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Semantic structure:</strong> Headings, landmarks, and
                lists are marked up so assistive technologies can navigate
                each page in a logical order.
              </li>
              <li>
                <strong>Text alternatives:</strong> Meaningful images carry
                descriptive alternative text, and decorative images are
                hidden from assistive technologies.
              </li>
              <li>
                <strong>Keyboard access:</strong> Links, forms, and menus can
                be reached and operated by keyboard, with a visible focus
                indicator.
              </li>
              <li>
                <strong>Readable design:</strong> Text has strong color
                contrast against its background, and pages remain usable
                when zoomed or viewed on small screens.
              </li>
              <li>
                <strong>Clear forms:</strong> Our estimate and contact forms
                use labeled fields so visitors know what information is
                being requested.
              </li>
            </ul>
          </section>

          {/* Limitations */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Known Limitations
            </h2>
            <p>
              Despite our efforts, some content may not yet fully meet WCAG
              2.1 Level AA. Content provided by third parties, such as
              embedded maps or videos, is controlled by those providers and
              may not be fully accessible. When we find a barrier, we work
              to fix it, and we will always provide the same information or
              service another way on request.
            </p>
          </section>

          {/* Feedback and Assistance */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Feedback and Assistance
            </h2>
            <p className="mb-3">
              If you have difficulty accessing any part of this website, or
              if you would like information from this website in another
              format, contact us and we will help. We welcome feedback about
              the accessibility of our website.
            </p>
            <address className="not-italic">
              <p className="font-semibold">{companyName}</p>
              <p>{fullAddress}</p>
              <p>
                Phone:{' '}
                <a
                  href={`tel:${phone.tel}`}
                  className="text-copper hover:underline"
                >
                  {phone.display}
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href={`mailto:${email}`}
                  className="text-copper hover:underline"
                >
                  {email}
                </a>
              </p>
            </address>
            <p className="mt-3">
              Our hours are Monday to Friday, 7:00 AM to 6:00 PM, and
              Saturday, 8:00 AM to 2:00 PM. You can also reach us at any time
              through the contact form on this website.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
