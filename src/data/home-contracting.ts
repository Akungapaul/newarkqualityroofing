// ─── Homepage "How Contracting Works" block ──────────────────────────────────
//
// Cora "Roofing Contractor" run (2026-09-01). Closes the exact-match heading rows
// the previous pass missed by using the PLURAL: Cora's exact match is word-boundary
// anchored on the singular search term, so "Roofing Contractors Diagnose…" scored 0.
// Every H3 here carries the singular phrase.
//   CP150a3 Exact Matches in H3 Tags      0 -> goal 10
//   CP159a  Exact Matches in H1-H6 Tags   1 -> goal 21
//   VAR-contracting / VAR-contractors / VAR-best-roofing-contractor
//
// Every claim is anchored to a DOCUMENT, a REGULATION, or a PHYSICAL PROCESS —
// never to the habitual behaviour of a class of contractors, which nobody surveyed.
// Business facts are limited to src/config/site-config.ts: registered NJ Home
// Improvement Contractor (never "licensed"), insured, Newark/Essex County NJ, the
// published hours, the email, more than 25 years, a 25-point inspection,
// GAF-certified installers, 1-4 hr emergency response, financing, free written
// estimates, and the GAF/Owens Corning/CertainTeed product lines.
//
// Rich-text markers: {{text}} -> <b>, **text** -> <strong>. NEVER nest {{ }} inside
// ** ** — parseRichText matches {{ }} first and leaks a literal ** to the page.

export interface HomeContractingStep {
  h3: string;
  body: string[];
  point: { h4: string; body: string };
}

export const homeContractingH2 =
  'How Contracting Works With a Newark, NJ Roofing Contractor';

export const homeContractingIntro =
  '**Choosing the best roofing contractor is a documentation question before it is a roofing question.** Registration, insurance, the written contract, the permit file, and the warranty terms are each a record a homeowner reads, and each one is checkable before a crew reaches the roof. The sections below set out what every document in a contracting file contains, what New Jersey requires of it, and what the best roofing contractor for one building carries that the best roofing contractor for another does not.';

export const homeContracting: HomeContractingStep[] = [
  {
    h3: 'A Roofing Contractor Puts the Estimate in Writing Before Any Work Starts',
    body: [
      '**A written estimate records the scope of work, the materials, the total price, and the payment terms in one document, so the figure a homeowner accepts is attached to a described job rather than to a spoken number.** A verbal quote carries no scope, no material names, and no payment schedule, leaving nothing to compare against the finished work. Under New Jersey\'s home improvement practice regulations, a home improvement contract with a purchase price above $500 is a written document signed by the homeowner and by the roofing contractor performing the work.',
      'The estimate separates tear-off of the old covering from repair of the {{roof deck}} beneath it, and deck condition is read before tear-off — attic staining, sheathing deflection, and moisture-meter readings — so board replacement carries a unit-rate line with a price fixed before the covering comes off. Separate lines for {{underlayment}} and for the {{flashing}} at chimneys, valleys, and sidewalls put a price on the transitions where water enters a roof assembly, and debris disposal stands as a line of its own. Under the New Jersey Uniform Construction Code, some roof-covering replacement is treated as ordinary maintenance and some requires a construction permit, with the building type and the scope of work deciding which; where a permit applies, the application names the property, the work, and the contractors performing it, and the fee appears in the estimate as its own line. The contracting terms — start and completion dates, total price, and payment schedule — sit in that same document, which becomes the contracting record between the homeowner and the contractors once both sign it.',
    ],
    point: {
      h4: 'A Written Estimate From a Roofing Contractor Records Scope, Materials, and Price',
      body: 'Newark Quality Roofing is a roofing contractor with more than 25 years in business, registered as a New Jersey Home Improvement Contractor and insured, serving Newark and Essex County, New Jersey. Its written estimates are free and carry no obligation, a 25-point inspection is available, and the {{shingle}} products installed include GAF Timberline and Timberline HDZ, Owens Corning, and CertainTeed. Registration under New Jersey\'s home improvement regulations places a business on the State\'s public register of contractors, a record open to a homeowner alongside the written estimate and the contracting schedule for the {{roof covering}} work.',
    },
  },
  {
    h3: 'A Roofing Contractor Files the Newark, NJ Permit the Scope Requires',
    body: [
      '**Whether a roof replacement in Newark, New Jersey requires a construction permit turns on the building type and the scope of work, because N.J.A.C. 5:23-2.7 classifies roof covering replacement as ordinary maintenance under stated conditions.** The conditions in that section differ by building use group, and structural repair to the roof framing sits outside covering replacement in any case. The application filed with the building department carries the property address, the scope of work, and the names of the contractors performing it, and the code requires the issued permit before that work starts.',
      'A contracting agreement between a homeowner and a roofing contractor describes the job in its own words, and a permit application describes the same job in the terms the building department reviews. Where the scope stays inside the ordinary maintenance conditions of N.J.A.C. 5:23-2.7, no permit file opens, and the contracting record is the written account of what came off the {{roof deck}} and what {{roof covering}} went back on. Where the scope requires a permit, a municipal inspection closes the file, and the building department retains that result against the property address. A copy of a closed permit comes from a records request to the municipality, since a title search reports recorded conveyances and liens rather than building department files.',
    ],
    point: {
      h4: 'Building Type and Scope Decide the Newark, NJ Permit',
      body: 'A closed permit carries a municipal inspection sign-off, and the {{roof}} that passes that inspection has a record a future owner retrieves from the building department. That record lists the contractors named on the application, and contracting terms signed with a roofing contractor for the same {{tear-off}} and rebuild put that scope in a second document. Two records that name one scope and the same contractors leave a single account of the job at the address.',
    },
  },
  {
    h3: 'A Roofing Contractor Sets the Payment Schedule in the Contract, Not on the Roof',
    body: [
      '**New Jersey home improvement contracts over $500 are written documents carrying the total price and the dates the work begins and ends, which places the payment terms on paper rather than in a conversation at the door.** Newark Quality Roofing provides free written estimates with no obligation, and an estimate in writing carries numbers a homeowner reads before a contracting agreement exists.',
      'That contracting agreement names both sides of the job — the homeowner and the roofing contractor — and carries the total price along with a description of the work. New Jersey requires a home improvement contractor registration number on that document, and the state\'s public register of contractors lists the same number. N.J.A.C. 13:45A-16.2 requires any change to the contracting terms to be in writing and signed by both parties, so a repair to the {{roof deck}} found after the tear-off carries signatures before it becomes a charge. Under N.J.A.C. 5:23-2.7 the New Jersey Uniform Construction Code treats some {{roof covering}} replacement as ordinary maintenance that requires no construction permit, with the building type and the scope of the work deciding which applies, and the contractors named on an issued permit are on file with the municipality.',
    ],
    point: {
      h4: 'The Written Contract Carries the Price and the Dates',
      body: 'A completion date written into the contracting record gives the end of the job a fixed reference, and the final payment reads against that date. Walking the finished {{roof}} compares the {{shingles}} the contractors on site installed with the products the contract names. A homeowner weighing one roofing contractor against another reads the same items in each document: the total price, the payment schedule, the start date, and the completion date.',
    },
  },
  {
    h3: 'Choosing the Best Roofing Contractor Starts With the Registration Number',
    body: [
      '**The New Jersey Division of Consumer Affairs issues each home improvement contractor registration number and holds the file behind it, which records the registrant\'s identity, the insurance certificate on file, and the registration\'s current status.** Under the state\'s home improvement contractor registration rules, that number appears on contracts, estimates, and advertisements. Newark Quality Roofing works under that registration and carries insurance.',
      'Choosing the best roofing contractor starts with the registration number, then the certificate of insurance, then the written {{contracting}} agreement, then the reference list. The Division of Consumer Affairs keeps a public register of contractors, and the number printed on a roofing contractor\'s estimate opens the entry behind it. Under N.J.A.C. 5:23-2.7 the scope of the work decides whether {{roof-covering replacement}} takes a construction permit, and a permit application names the contractors performing the contracting work at the address. The best roofing contractor for a two-family house is not automatically the best roofing contractor for a {{flat commercial roof}}, because the contracting scope differs.',
    ],
    point: {
      h4: 'The Registration Number Traces Back to a State Record',
      body: 'Registration status and a current {{certificate of insurance}} form the first filter; the {{contracting}} agreement between a homeowner and contractors forms the second. The reference list names addresses where the contractors on site completed work of the same type. The registration number leads that order because the state holds the record behind it, not the roofing contractor issuing the estimate.',
    },
  },
  {
    h3: 'A Roofing Contractor Carries Insurance the Homeowner Can Verify',
    body: [
      '**A certificate of insurance names the insurance carrier, the policy numbers, the coverage types, the limits, and the effective and expiration dates, and the agency listed on the form confirms those details when a homeowner contacts it.** A homeowner requests that form from the roofing contractor and confirms the policy status with the agency printed on it, since the certificate summarizes coverage rather than reproducing the policy. Newark Quality Roofing is insured and registered as a New Jersey Home Improvement Contractor.',
      'The New Jersey Contractors\' Registration Act, at N.J.S.A. 56:8-142, conditions registration on commercial general liability coverage of at least $500,000 per occurrence, and the Division of Consumer Affairs keeps the register of contractors where a registration is confirmed. New Jersey\'s Workers\' Compensation Law, at N.J.S.A. 34:15-71, directs an employer to insure that obligation with an authorized carrier or to be approved as a self-insurer, and that is the coverage answering an injury on the {{roof deck}} during the contracting work. General liability answers damage to the {{roof}} and to the property beneath it, and a certificate names both coverages, with their limits, for the contractors listed on it. A homeowner reads the effective and expiration dates against the contracting schedule, and asks the roofing contractor for a current certificate when the contracting agreement is signed after the date the copy in hand expires.',
    ],
    point: {
      h4: 'A Roofing Contractor\'s Certificate of Insurance Names the Carrier and Dates',
      body: 'A certificate reports the coverage in force on the date it carries. {{Roof replacement}} scheduled months later sits under whatever coverage is in force then, so a certificate dated near the start of the {{roof}} work is the one that documents it. That dated copy, filed with the agreement and the names of the contractors on the job, is the contracting record a homeowner keeps.',
    },
  },
  {
    h3: 'A Roofing Contractor Names the Warranty Terms Before the Tear-Off',
    body: [
      '**A manufacturer material warranty covers defects in the shingles themselves, and a workmanship warranty covers the installation labor that fastens those shingles to the deck.** The two documents come from different parties and carry different durations, different exclusions, and different claim procedures. The material document names the manufacturer of the covering; the workmanship document names the roofing contractor that performed the installation.',
      'A leak appearing in year three is answered by whichever document covers its cause: a manufacturing defect in the {{shingle mat}} is a material claim, and a fastener driven high or a {{flashing}} lap left short is a workmanship claim. The contracting agreement records each warranty\'s duration, its transfer terms, and the party that answers a claim under it, while the {{tear-off}} date entered on the contracting schedule dates the installation the warranty periods reference. Where the scope of work requires a construction permit under the New Jersey Uniform Construction Code, the permit application names the contractors performing the work, and that filing sits beside the contracting record and the New Jersey Division of Consumer Affairs register of home improvement contractors. Newark Quality Roofing, a roofing contractor registered as a New Jersey home improvement contractor and serving Newark and Essex County, New Jersey, installs GAF Timberline and Timberline HDZ, Owens Corning, and CertainTeed products.',
    ],
    point: {
      h4: 'Material Warranties and Workmanship Warranties Cover Different Failures',
      body: 'Each manufacturer warranty document states its own exclusions, and where installation outside the published application instructions is listed among them, material coverage turns on how the {{fasteners}} and the {{underlayment}} were installed rather than on the product alone. Reading those exclusions against the workmanship terms a contracting agreement assigns to the contractors on site shows which failures fall outside both documents.',
    },
  },
  {
    h3: 'A Roofing Contractor Documents Storm Damage the Way an Adjuster Reads It',
    body: [
      '**Storm damage documentation consists of dated photographs, each condition located by elevation and slope, in a written file that separates one event\'s damage from accumulated wear.** A claim file organized around the date of loss places each elevation, each slope, and each visible failure under that date. The written estimate names the roofing contractor performing the work and carries the same dates as the photographs.',
      'Wind creases a {{shingle}} tab along its fastener line; hail bruises the mat and leaves a strike count inside a marked test square. A photograph framed beside a reference object and a slope marker fixes the size of that bruise, and the count per elevation enters the contracting record as a written line. The contracting terms drawn from that record list the {{roof deck}} conditions found, the {{underlayment}} exposed, and the date each was seen. A contracting agreement between a homeowner and contractors, written under New Jersey\'s home improvement regulations, states the scope of the work and the total price, and the dated photographs sit in the same file.',
    ],
    point: {
      h4: 'Dated Photographs and Elevation Notes Anchor a Roofing Contractor\'s Claim File',
      body: 'A photograph without a date proves nothing about when the damage occurred. The {{roof}} file that carries dates separates one storm from ten years of weather, and the contracting schedule signed by the homeowner and the roofing contractor sets the dates the work runs. The New Jersey Division of Consumer Affairs holds a public register of home improvement contractors, and that register answers whether the contractors named in the agreement carry a current registration.',
    },
  },
  {
    h3: 'A Roofing Contractor Protects the Property Around the Contracting Work',
    body: [
      '**Tarps over landscaping and the air-conditioning condenser, plywood standing against the siding, and a magnetic sweep of the lawn and driveway catch the nails and shingle fragments a tear-off sends off the roof edge.** The lawn, the driveway, and the exterior walls sit inside the work area for the full run of the contracting work. New Jersey\'s home improvement regulations require a contract above $500 to be in writing and signed by both parties, so the site-protection scope agreed with a roofing contractor enters the contracting record.',
      'A tear-off sends {{shingle}} fragments and nails over the drip edge at speed, and a magnetic sweep of the lawn and driveway recovers what the {{tarps}} miss. Container placement is settled before the contracting schedule starts: a driveway position stays on private property, while a curbside position occupies the public right-of-way, which municipal rules govern. On a Newark, New Jersey block, that decision also fixes which parking spaces the contractors on site use, and for how long. An estimate that prices {{debris removal}} and site protection as their own lines carries that scope into the contracting agreement a homeowner signs with contractors, before the covering comes off.',
    ],
    point: {
      h4: 'Tarps and Plywood Shield the Ground During Tear-Off',
      body: 'An air-conditioning {{condenser}} on a pad beside the house sits directly below the roof edge, within reach of a dropped bundle strap or a length of {{drip edge}}. New Jersey\'s registration law for home improvement contractors sets a commercial general liability minimum of $500,000 per occurrence, and the certificate of insurance names the carrier that answers a claim for damage to that equipment. The Division of Consumer Affairs register shows whether a roofing contractor holds a current registration.',
    },
  },
  {
    h3: 'A Roofing Contractor Schedules Around Newark, NJ Weather Windows',
    body: [
      '**Temperature and rainfall set the roofing work window, because asphalt shingle sealant strips bond by solar warming and open decking stays exposed to weather until underlayment covers it.** Northern New Jersey sits in a humid continental climate, so the contracting schedule in Newark, NJ moves with cold snaps, summer heat, and coastal storm tracks. The forecast, not the calendar, marks the days open to a roofing contractor for tear-off and re-cover.',
      '{{Asphalt shingles}} carry a thermally activated sealant strip that bonds each course to the one below once surface temperature rises. Bare decking left open ahead of rain admits water into the framing and insulation the covering protects, so the contracting sequence divides a {{roof deck}} into sections sized to the hours the contractors on site have inside one weather window. Under N.J.A.C. 5:23-2.7, the New Jersey Uniform Construction Code treats some roof-covering replacement as ordinary maintenance requiring no construction permit, and the building type together with the scope of work decides which applies. Where the scope requires a permit, that permit names the work described and the contractors performing it, and the written agreement between a homeowner and a roofing contractor fixes the scope before the contracting work starts.',
    ],
    point: {
      h4: 'Temperature and Rainfall Set the Roofing Work Window',
      body: 'Drying in means covering exposed decking with {{underlayment}} before the crew leaves the site. The {{underlayment}} is a weather barrier rather than the finished covering, and it holds the opening closed against rain until the shingles go on. A contracting agreement that states the drying-in step records what the contractors on site leave in place at the end of a work day.',
    },
  },
  {
    h3: 'A Roofing Contractor Answers the Callback After the Contracting Work Ends',
    body: [
      '**A callback after the contracting work ends is answered out of the file the job leaves behind: the signed written contract, the workmanship warranty and its stated term, the manufacturer warranty registration, and the dated completion photographs.** A workmanship warranty is a document with three checkable parts — a term, a transfer clause, and a list of exclusions — and those parts define what a later visit covers. N.J.A.C. 13:45A-16.2, New Jersey\'s home improvement practices rule, puts a home improvement contract above $500 in writing and signed by the parties, so the terms governing a later callback exist on paper rather than in recollection.',
      'The {{workmanship warranty}} is the document a callback runs on: it names the party bound by it, states a term in years, and lists what sits outside that term, while the manufacturer warranty on the shingles carries its own registration and its own term. A closeout sheet recording the completion date, the products installed — GAF Timberline HDZ, Owens Corning, or CertainTeed — and the crew lead names the roofing professionals who performed the contracting work, and dated photographs fix the condition of the {{roof deck}} to that date. Where the scope required a {{construction permit}}, the municipal record closes with a final inspection and a certificate of approval naming the contractors on the permit, and that record stays with the property; N.J.A.C. 5:23-2.7 treats some roof-covering replacement as ordinary maintenance instead, with the building type and the scope of work deciding which applies. New Jersey\'s public register of contractors lists each registered home improvement contractor by business name, town, and registration status, which is how a local roofer named on that closeout sheet stays identifiable as the same roofing contractor years later.',
    ],
    point: {
      h4: 'The Contracting Record Decides Whether a Roofing Contractor Answers a Callback',
      body: 'A callback lands at the contact point written into the contracting record. Newark Quality Roofing is a registered New Jersey Home Improvement Contractor, insured, more than 25 years in business, and reachable at info@newarkqualityroofing.com, Monday through Friday 07:00–18:00 and Saturday 08:00–14:00. The public register of contractors carries that registration, and the {{roof}} file carries the completion date and the product records that identify the roofing contractor named on the job.',
    },
  },
];
