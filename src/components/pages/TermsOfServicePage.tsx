import { siteConfig } from '@/data/site-config';

export default function TermsOfServicePage() {
  const { companyName, phone, address, email } = siteConfig;
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;

  return (
    <div className="min-h-screen bg-parchment">
      <header className="px-6 pb-4 pt-16 text-center">
        <h1 className="font-heading text-4xl font-bold text-forest sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-3 font-body text-sm text-text-secondary">
          Last updated: March 2026
        </p>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-20">
        <article className="space-y-10 font-body text-base leading-relaxed text-text-primary">
          {/* Agreement to Terms */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Agreement to Terms
            </h2>
            <p>
              By engaging {companyName} (&ldquo;we,&rdquo; &ldquo;our,&rdquo;
              or &ldquo;us&rdquo;) for roofing services, you (&ldquo;the
              Customer&rdquo;) agree to be bound by these Terms of Service.
              These terms constitute a legally binding agreement between you
              and {companyName}. If you do not agree to these terms, please
              do not engage our services. We reserve the right to update
              these terms at any time, and continued use of our services
              constitutes acceptance of the revised terms.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Services
            </h2>
            <p className="mb-3">
              {companyName} provides professional roofing services throughout
              Essex County, New Jersey. Our services include but are not
              limited to:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Residential and commercial roof installation, repair, and
                replacement
              </li>
              <li>
                Roof inspections, maintenance programs, and emergency leak
                repair
              </li>
              <li>
                Gutter installation and repair, skylight installation, and
                chimney flashing
              </li>
              <li>
                Flat roof systems, metal roofing, slate roofing, and
                specialty materials
              </li>
              <li>
                Storm damage assessment, insurance claim assistance, and
                restoration
              </li>
            </ul>
            <p className="mt-3">
              All work is performed by licensed and insured professionals in
              accordance with New Jersey building codes and manufacturer
              specifications.
            </p>
          </section>

          {/* Estimates and Pricing */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Estimates and Pricing
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                All estimates provided by {companyName} are free of charge
                and carry no obligation. Estimates are valid for 30 days
                from the date of issuance unless otherwise stated in
                writing.
              </li>
              <li>
                Final pricing may differ from the initial estimate if
                unforeseen conditions are discovered during the project,
                including but not limited to hidden structural damage,
                rotted decking, or code compliance requirements. Any
                additional costs will be communicated to you and require
                your written approval before work proceeds.
              </li>
              <li>
                Pricing is based on current material costs at the time of
                the estimate. Significant fluctuations in material pricing
                may require an updated estimate.
              </li>
            </ul>
          </section>

          {/* Scheduling and Project Timeline */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Scheduling and Project Timeline
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Project start dates and timelines are estimated in good
                faith. Actual schedules may be affected by weather
                conditions, material availability, permit processing, or
                other factors beyond our control.
              </li>
              <li>
                We will make reasonable efforts to notify you of any delays
                and provide updated timelines as soon as possible.
              </li>
              <li>
                {companyName} is not responsible for damages or losses
                resulting from schedule changes caused by circumstances
                outside our control, including inclement weather, supply
                chain disruptions, or municipal permitting delays.
              </li>
            </ul>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Payment Terms
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                A deposit may be required before work begins. The specific
                deposit amount will be outlined in your signed contract or
                proposal.
              </li>
              <li>
                Final payment is due upon satisfactory completion of the
                project unless alternative payment arrangements have been
                agreed upon in writing.
              </li>
              <li>
                We accept payment by check, cash, credit card, and bank
                transfer. Financing options may be available for qualifying
                projects.
              </li>
              <li>
                Late payments may be subject to a finance charge of 1.5%
                per month on the outstanding balance. {companyName} reserves
                the right to place a mechanic&rsquo;s lien on the property
                for unpaid balances in accordance with New Jersey law.
              </li>
            </ul>
          </section>

          {/* Warranties and Guarantees */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Warranties and Guarantees
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                {companyName} stands behind our workmanship. Specific
                warranty terms, including duration and coverage, will be
                detailed in your project contract.
              </li>
              <li>
                Material warranties are provided by the respective
                manufacturers and are separate from our workmanship
                warranty. We will assist you in registering and filing any
                manufacturer warranty claims.
              </li>
              <li>
                Warranties do not cover damage caused by acts of nature
                (hurricanes, tornadoes, hail beyond design specifications),
                neglect, unauthorized modifications, or failure to perform
                recommended maintenance.
              </li>
              <li>
                Warranty claims must be reported to {companyName} in writing
                within a reasonable time of discovering the issue. We will
                inspect the concern and perform covered repairs at no
                additional cost.
              </li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by New Jersey law,{' '}
              {companyName}&rsquo;s total liability for any claim arising
              from our services shall not exceed the total amount paid by
              the Customer for the specific project in question.{' '}
              {companyName} shall not be liable for indirect, incidental,
              consequential, or punitive damages, including but not limited
              to loss of use, lost profits, or damage to personal property
              not directly related to the roofing work performed.
            </p>
          </section>

          {/* Property Access and Safety */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Property Access and Safety
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Customer agrees to provide {companyName} and its crew
                reasonable access to the property for the duration of the
                project, including access for vehicles, equipment, and
                material staging.
              </li>
              <li>
                We will take reasonable care to protect your property,
                landscaping, and personal belongings during the project.
                However, some minor disruption to landscaping adjacent to
                the work area may occur.
              </li>
              <li>
                For safety reasons, the Customer and all non-authorized
                persons must stay clear of the active work zone at all
                times. {companyName} follows OSHA safety standards on every
                project.
              </li>
              <li>
                The Customer is responsible for disclosing any known hazards
                on the property, including but not limited to asbestos,
                electrical hazards, or structural instability.
              </li>
            </ul>
          </section>

          {/* Insurance */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Insurance
            </h2>
            <p>
              {companyName} maintains comprehensive general liability
              insurance and workers&rsquo; compensation coverage as required
              by New Jersey law. Proof of insurance is available upon
              request. Our insurance protects both our team and your
              property throughout the duration of the project. We recommend
              that customers also maintain adequate homeowner&rsquo;s or
              commercial property insurance for their own protection.
            </p>
          </section>

          {/* Cancellation Policy */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Cancellation Policy
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                In accordance with New Jersey consumer protection laws, you
                may cancel a home improvement contract within three business
                days of signing without penalty.
              </li>
              <li>
                Cancellations made after the three-day rescission period may
                be subject to charges for materials already ordered or work
                already performed. The specific cancellation terms will be
                outlined in your contract.
              </li>
              <li>
                {companyName} reserves the right to cancel or suspend a
                project if the Customer fails to meet payment obligations,
                denies property access, or if unsafe conditions are
                discovered on the property.
              </li>
            </ul>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Dispute Resolution
            </h2>
            <p>
              In the event of a dispute arising from our services, both
              parties agree to first attempt resolution through direct
              communication and good-faith negotiation. If a resolution
              cannot be reached, the parties agree to submit the dispute to
              mediation before a mutually agreed-upon mediator in Essex
              County, New Jersey. These terms are governed by the laws of
              the State of New Jersey. Any legal proceedings shall be
              conducted in the courts of Essex County, New Jersey.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Changes to Terms
            </h2>
            <p>
              We may update these Terms of Service from time to time to
              reflect changes in our business practices, services, or legal
              requirements. The &ldquo;Last updated&rdquo; date at the top
              of this page indicates when these terms were most recently
              revised. Changes do not apply retroactively to projects
              already under contract. We encourage you to review this page
              periodically.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-bold text-forest">
              Contact Information
            </h2>
            <p className="mb-3">
              If you have questions about these Terms of Service or need
              clarification on any of our policies, contact us at:
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

          {/* Legal Disclaimer */}
          <div className="rounded-lg border border-copper/30 bg-copper/5 p-5">
            <p className="text-sm text-text-secondary">
              <strong>Note:</strong> These terms of service are a template
              and should be reviewed by a legal professional to ensure
              compliance with all applicable federal, state, and local
              regulations.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
