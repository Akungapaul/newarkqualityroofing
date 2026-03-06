import { siteConfig } from '@/data/site-config';

export default function PrivacyPolicyPage() {
  const { companyName, phone, address, email } = siteConfig;
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;

  return (
    <div className="min-h-screen bg-parchment">
      <header className="px-6 pb-4 pt-16 text-center">
        <h1 className="font-heading text-4xl font-bold text-forest sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 font-body text-sm text-text-secondary">
          Last updated: March 2026
        </p>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-20">
        <article className="space-y-10 font-body text-base leading-relaxed text-text-primary">
          {/* Intro */}
          <p>
            {companyName} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website or use our
            roofing services in Essex County, New Jersey.
          </p>

          {/* Information We Collect */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Information We Collect
            </h2>
            <p className="mb-3">
              We may collect the following types of information:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Form submissions:</strong> When you request a free
                estimate or contact us, we collect your name, email address,
                phone number, and service interest.
              </li>
              <li>
                <strong>Website usage data:</strong> We automatically collect
                information about your visit, including pages viewed, time spent,
                and referral source through cookies and analytics tools.
              </li>
              <li>
                <strong>Device and browser information:</strong> We collect your
                IP address, browser type, operating system, and device type for
                website optimization and security purposes.
              </li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              How We Use Your Information
            </h2>
            <p className="mb-3">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Contact you about the roofing services you requested or inquired
                about
              </li>
              <li>
                Respond to your inquiries, schedule inspections, and provide
                estimates
              </li>
              <li>
                Improve our website, services, and customer experience
              </li>
              <li>
                Send service-related communications, including appointment
                confirmations, project updates, and follow-up surveys
              </li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Information Sharing
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                We use <strong>GoHighLevel CRM</strong> for lead management and
                customer communication. Your contact information is securely
                transmitted to this platform when you submit a form on our
                website.
              </li>
              <li>
                We do <strong>not</strong> sell, rent, or trade your personal
                information to third parties for marketing purposes.
              </li>
              <li>
                We may share information with trusted contractors, subcontractors,
                or material suppliers when necessary to deliver the roofing
                services you requested.
              </li>
              <li>
                We may disclose information when required by law or to protect
                our rights, safety, or property.
              </li>
            </ul>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Cookies and Tracking
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Our website uses cookies to improve functionality, analyze
                traffic, and personalize your experience.
              </li>
              <li>
                We may use Google Analytics or similar tools to understand how
                visitors use our website. These tools collect anonymous usage
                data.
              </li>
              <li>
                You can disable cookies through your browser settings. Disabling
                cookies may affect certain features of our website.
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Data Security
            </h2>
            <p>
              We implement reasonable administrative, technical, and physical
              security measures to protect your personal information. All form
              submissions on our website are transmitted using SSL encryption.
              However, no method of electronic transmission or storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Your Rights
            </h2>
            <p className="mb-3">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Access:</strong> Request a copy of the personal data we
                hold about you.
              </li>
              <li>
                <strong>Deletion:</strong> Request that we delete your personal
                information from our systems.
              </li>
              <li>
                <strong>Opt out:</strong> Unsubscribe from marketing
                communications at any time by contacting us using the
                information below.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us using the information
              in the Contact Us section below.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Contact Us
            </h2>
            <p className="mb-3">
              If you have questions about this Privacy Policy or wish to exercise
              your data rights, contact us at:
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
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. The &ldquo;Last
              updated&rdquo; date at the top of this page indicates when the
              policy was most recently revised. We encourage you to review this
              page periodically.
            </p>
          </section>

          {/* Legal Disclaimer */}
          <div className="rounded-lg border border-copper/30 bg-copper/5 p-5">
            <p className="text-sm text-text-secondary">
              <strong>Note:</strong> This privacy policy is a template and should
              be reviewed by a legal professional to ensure compliance with all
              applicable federal, state, and local regulations.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
