export const specialistIndustries = [
  {
    id: 'healthcare',
    name: 'Healthcare practices',
    icon: 'headset',
    headline: 'Virtual assistant support for healthcare practices',
    summary: 'Scope remote practice administration around patient scheduling, referrals, insurance paperwork and billing follow-up.',
    coverDetails: [
      'Medical receptionist support can cover appointment reminders, approved administrative replies and routing referrals to the right person. For billing, we can check claim status, follow up on missing documents and keep a record of the cases your practice manager needs to review.'
    ],
    tasks: ['Patient reception and scheduling', 'Referral, insurance and billing administration'],
    audience: 'Medical, dental, mental health, veterinary and allied health practices',
    starter: 'Start with one appointment or referral queue.',
    cadence: 'Agreed reception hours · daily handoff',
    scope: [
      ['Patient reception', 'Answer agreed calls and messages, record the request and route it using the practice’s intake rules.', 'Call or message log with next owner', 'Urgent or clinical guidance'],
      ['Scheduling and follow-up', 'Book approved slots, send appointment reminders and coordinate cancellations or referrals.', 'Current calendar and follow-up list', 'Clinical priority and scheduling exceptions'],
      ['Insurance and authorisation paperwork', 'Collect approved fields, check administrative status and organise documents for review.', 'Verification or authorisation checklist', 'Coverage interpretation and eligibility decisions'],
      ['Medical billing administration', 'Track invoices, claim status, denials and balances, and prepare follow-up for the billing team.', 'Billing queue and exception summary', 'Coding, submission authority and adjustments'],
      ['Records and documentation', 'Organise approved forms or prepare a transcription or scribe workflow for professional review when scoped.', 'Indexed file or draft note', 'Record changes, clinical content and final sign-off']
    ],
    flow: [
      ['Capture the request', 'Use the approved intake fields and secure workspace, then record which queue owns it.'],
      ['Apply the practice rules', 'Confirm approved appointment options or document requirements and escalate exceptions.'],
      ['Hand over the record', 'Give the practice the status, evidence and action due.']
    ],
    sample: {title:'Referral coordination log',type:'SAMPLE · PRACTICE QUEUE',rows:[['Intake','Request logged with the agreed fields','Complete'],['Schedule','Approved appointment window sent','Waiting'],['Review','Eligibility question assigned','Escalated']],note:'Only the authorised practice owner decides coverage, priority and clinical next steps.'},
    inputs: ['Approved scheduling and intake scripts', 'Named practice and billing escalation owners', 'Authorised tools, minimum access and data handling rules'],
    tools: ['Practice management system', 'Approved phone and messaging', 'Billing and referral queue'],
    boundary: 'Confirm the practice’s privacy and access requirements before handling patient information. Clinical judgment, coding review, care decisions and regulated activities stay with the qualified team.',
    services: ['customer-support','administrative-support','accounting-bookkeeping'],
    faq: [
      ['Can you help answer practice calls?', 'We can scope routine reception, appointment scheduling and message routing around approved scripts and coverage hours.'],
      ['Can you follow up on referrals?', 'We can track approved referral documents, appointment status and outstanding requests and route exceptions to the practice owner.'],
      ['Do you handle insurance checks?', 'We can gather approved details and verify administrative status. Your team owns any coverage or eligibility decision.'],
      ['Can you support billing follow-up?', 'We can track balances, claim status and missing evidence for your billing team. Agree coding, submission and adjustment permissions separately.'],
      ['How do we handle patient information?', 'Agree the system, access role, storage rules and escalation contact before assigning work. Use an authorised or fictional record to test the workflow.'],
      ['What happens when a patient asks for advice?', 'The assistant records and routes the question using the approved escalation process. The care team owns the response.']
    ]
  },
  {
    id: 'legal',
    name: 'Legal practices',
    icon: 'ledger',
    headline: 'Virtual assistant support for legal practices',
    summary: 'Keep intake, matter files, approved research, deadlines and billing administration organised for the responsible lawyer.',
    coverDetails: [
      'Law firm intake support can log new enquiries, request approved documents and prepare a checklist for the responsible lawyer. We can also gather time entries and flag gaps for the person who checks the draft invoice and approves any changes.'
    ],
    tasks: ['Client and matter intake', 'Document, docket and billing coordination'],
    audience: 'Law firms, legal operations teams and supervised paralegal workflows',
    starter: 'Start with an intake checklist and a named matter owner.',
    cadence: 'Daily intake and docket review · weekly matter status',
    scope: [
      ['Reception and intake', 'Answer agreed enquiries, book consultations and gather approved details for conflict review.', 'Intake record and consultation brief', 'Conflict, engagement and legal advice'],
      ['Matter files and document preparation', 'Index files, track versions, format approved templates and organise signature or filing checklists.', 'Current file and document checklist', 'Legal drafting, filing authority and final content'],
      ['Docket and deadline coordination', 'Record approved deadlines, track appointments and surface missing inputs for the responsible reviewer.', 'Deadline tracker and exception list', 'Calculating or interpreting legal deadlines'],
      ['Research and paralegal coordination', 'Compile authorised sources, references and document comparisons for a qualified reviewer.', 'Sourced research or review packet', 'Legal interpretation, contract review and advice'],
      ['Billing and case reporting', 'Organise time records, draft invoice inputs and track matter updates or receivables.', 'Billing review pack and matter status', 'Bill release, trust funds and payment decisions']
    ],
    flow: [
      ['Record the intake', 'Capture the approved details in the firm’s system and route the record for conflict and engagement review.'],
      ['Prepare the matter workspace', 'Organise documents and reminders according to the lawyer’s approved checklist.'],
      ['Flag what needs a decision', 'Share the status and source record with the assigned lawyer or billing owner.']
    ],
    sample: {title:'Matter intake and deadline log',type:'SAMPLE · LEGAL OPERATIONS',rows:[['Intake','Consultation details recorded','Review ready'],['Files','Two approved records indexed','Complete'],['Date','Deadline confirmation requested','Lawyer review']],note:'The matter owner confirms all legal decisions and external filings.'},
    inputs: ['Intake script and approved matter fields','File and deadline rules','Named lawyer, billing owner and confidentiality permissions'],
    tools: ['Practice management system','Document workspace','Approved billing and calendar tools'],
    boundary: 'The responsible legal professional reviews conflicts, legal research and work product, interprets deadlines and approves engagement, filings and advice.',
    services: ['administrative-support','research-data-support','accounting-bookkeeping'],
    faq: [
      ['Can you book consultations?', 'Yes. Agree the permitted information to collect, approved availability and who clears engagement or conflict questions.'],
      ['Can you organise matter documents?', 'We can index approved records, maintain version names and flag missing items within the firm’s workspace.'],
      ['Who confirms legal deadlines?', 'The responsible legal professional confirms deadlines. We maintain the agreed tracker and reminders.'],
      ['Can a legal virtual assistant prepare research?', 'We can compile approved sources and organise notes for the responsible professional to review and interpret.'],
      ['Can you help prepare legal invoices?', 'We can organise time entries and draft billing inputs, then route the pack for review and issuance.'],
      ['What happens if a caller needs legal advice?', 'We record the request and route it through your approved process to the responsible lawyer.']
    ]
  },
  {
    id: 'construction-field-services',
    name: 'Construction and field services',
    icon: 'calendar',
    headline: 'Virtual assistant support for construction and field services',
    summary: 'We handle field service scheduling and track enquiries, estimates, supplier updates, project records and billing across sites.',
    coverDetails: [
      'With construction project coordination, we keep job schedules, supplier confirmations and site records together. Your project lead gets a list of missing details, delayed deliveries and change requests, with the decisions that need approval before the crew can move ahead.'
    ],
    tasks: ['Job intake, dispatch and scheduling', 'Project, vendor and document coordination'],
    audience: 'Builders, trades, field service, architecture and logistics teams',
    starter: 'Start with the next week’s job and supplier schedule.',
    cadence: 'Daily job and dispatch checks · weekly project review',
    scope: [
      ['Intake and dispatch', 'Record inbound jobs, confirm approved windows and route requests to the assigned crew or dispatcher.', 'Scheduled job and next action', 'Site access, urgency and commitments'],
      ['Estimating and proposals', 'Collect quote inputs, organise takeoff documents and format approved estimates for review.', 'Draft proposal and missing-input list', 'Quantities, pricing, specifications and sign-off'],
      ['Project and compliance records', 'Track milestones, site files, permits, credentials, RFIs and change requests.', 'Current project log and expiry reminders', 'Safety, compliance and change order decisions'],
      ['Vendors, stock and logistics', 'Maintain purchase order and delivery records, coordinate supplier and carrier follow-ups and track delays.', 'Delivery schedule and exceptions', 'Purchasing, routing changes and contract terms'],
      ['Billing and handover', 'Collect approved job completion evidence, timesheets and invoice inputs for the project owner.', 'Handover and billing pack', 'Acceptance, payment and payroll']
    ],
    flow: [
      ['Capture the job', 'Confirm the site, scope reference, requester and decision owner.'],
      ['Coordinate the next step', 'Check the schedule and approved logistics, then record the crew, supplier or next reviewer.'],
      ['Close or escalate', 'Save the completion record or route the outstanding item with evidence.']
    ],
    sample: {title:'Job and supplier status board',type:'SAMPLE · FIELD OPERATIONS',rows:[['Job','Customer confirmed approved service window','Scheduled'],['Supply','Supplier revised delivery estimate','Updated'],['Change','Additional site work requested','Owner review']],note:'The project lead approves changes to scope, cost and site instructions.'},
    inputs: ['Job categories and dispatch rules','Approved estimate, site and supplier records','Project, safety and billing owners'],
    tools: ['Field service or project tracker','Shared calendar','Approved estimate and purchase order files'],
    boundary: 'Qualified team members approve estimates, technical drawings, site safety, scope changes, permits, contract terms and spending.',
    services: ['administrative-support','customer-support','accounting-bookkeeping'],
    faq: [
      ['What does field service scheduling include?', 'We can route and book approved service windows and record customer or crew updates. Agree the dispatch and urgent escalation rules first.'],
      ['Can you help prepare estimates?', 'We can gather inputs, track quotes and format approved estimate drafts for your qualified reviewer.'],
      ['Can construction project coordination include deliveries and suppliers?', 'Yes. We can confirm agreed milestones, log delays and flag the jobs affected by a change.'],
      ['How do you record change requests?', 'Record the original scope, requested change, evidence and owner. Your team decides the cost, timing and approval.'],
      ['Can you prepare job billing records?', 'We can gather timesheets, completion evidence and agreed invoice inputs for the finance or project owner.'],
      ['What needs to be agreed before starting?', 'Share the job tracker, permitted fields, standard confirmations and escalation contacts for schedule, safety and commercial decisions.']
    ]
  },
  {
    id: 'nonprofits-membership',
    name: 'Nonprofits and memberships',
    icon: 'people',
    headline: 'Virtual assistant support for nonprofits and membership teams',
    summary: 'Give donor, volunteer, grant, event and member administration a clear workflow and review owner.',
    coverDetails: [
      'Donor and member administration can cover acknowledgements, event registrations and renewal follow-ups. We can also coordinate volunteer schedules and prepare a grant deadline tracker, so your team can see which people need a response and which records still need review before the next event.'
    ],
    tasks: ['Donor and member records', 'Grant, event and volunteer coordination'],
    audience: 'Nonprofits, associations, community programmes and membership teams',
    starter: 'Start with the donor or member update queue.',
    cadence: 'Weekly record and event review · deadline checks',
    scope: [
      ['Donor and member administration', 'Update approved CRM records, log donations or renewals and prepare acknowledgements and member reminders.', 'Updated donor or member queue', 'Consent, acknowledgements and access rules'],
      ['Grant and fundraising support', 'Research opportunities, track requirements and deadlines and assemble approved application materials.', 'Opportunity tracker and review pack', 'Eligibility, application claims and submission'],
      ['Volunteers and events', 'Coordinate signups, shifts, calendars, vendors and participant communications.', 'Roster, schedule and exception list', 'Selection, spending and event decisions'],
      ['Community and communications', 'Prepare approved newsletters, social posts and programme updates and moderate messages using agreed rules.', 'Publishing calendar and engagement record', 'Public statements, campaigns and policy'],
      ['Board and financial operations', 'Gather board pre-reads, track actions and organise receipts, fund records and draft reporting inputs.', 'Board pack and finance handoff', 'Governance, accounting treatment and funds']
    ],
    flow: [
      ['Confirm the queue', 'Agree the programme, sources, privacy rules and deadlines.'],
      ['Prepare the work', 'Update the relevant records and draft approvals or follow-ups for review.'],
      ['Report and hand over', 'Show completed work, open deadlines and which owner needs to act.']
    ],
    sample: {title:'Programme operations brief',type:'SAMPLE · WEEKLY REVIEW',rows:[['Donor','Acknowledgement drafted','Review ready'],['Event','Volunteer shift confirmed','Complete'],['Grant','Budget attachment missing','Owner needed']],note:'The programme lead approves messages, funding commitments and applications.'},
    inputs: ['Donor or member record rules','Programme dates and communications guidance','Named grant, board and finance reviewers'],
    tools: ['Donor CRM or membership platform','Shared event calendar','Grant and approval tracker'],
    boundary: 'Your organisation owns donor data, grant claims, fundraising approvals, budget decisions and final communications.',
    services: ['administrative-support','research-data-support','marketing-content','accounting-bookkeeping'],
    faq: [
      ['Can you maintain donor or member records?', 'Yes. Agree which fields and acknowledgement workflows are in scope and how to handle consent and duplicates.'],
      ['Can you research grants?', 'We can compile sourced opportunities and deadlines, gather approved inputs and route a draft pack to your reviewer.'],
      ['Can you coordinate volunteers?', 'We can track signups, send approved reminders and maintain rosters and shift schedules.'],
      ['Can you help with events?', 'We can coordinate calendars, guest or participant updates, vendor follow-ups and the review checklist.'],
      ['Can you help with board meetings?', 'We can organise agendas and pre-reads, capture agreed actions and track outstanding items.'],
      ['Who approves fundraising communications?', 'Your authorised team approves public claims, recipients, spending, submissions and commitments.']
    ]
  },
  {
    id: 'startups-small-business',
    name: 'Startups and small businesses',
    icon: 'pipeline',
    headline: 'Virtual assistant support for startups and small businesses',
    summary: 'Start with one task, then add admin, sales, support, marketing or bookkeeping as your team grows.',
    coverDetails: [
      'A virtual assistant for small businesses can give customer replies, booking requests or invoice follow-ups a regular owner. You can also hand over meeting prep and lead tracking while keeping pricing, policy exceptions and hiring decisions with your team.'
    ],
    tasks: ['Founder and business administration', 'Research, growth and operations coordination'],
    audience: 'Founders, entrepreneurs, startups and small or medium-sized teams',
    starter: 'Start with the repeat task taking the most founder time.',
    cadence: 'Agreed daily priorities · weekly operations review',
    scope: [
      ['Founder and executive support', 'Manage approved inbox and calendar routines, prepare meetings and maintain project and decision records.', 'Daily brief and action tracker', 'Priorities, spending and commitments'],
      ['Sales and customer operations', 'Capture enquiries, maintain CRM records, schedule demos and route onboarding and support requests.', 'Current queue and next actions', 'Qualification exceptions and customer commitments'],
      ['Market research and investor support', 'Compare markets and competitors, organise investor contacts and prepare pitch or board materials for review.', 'Research brief and review pack', 'Investor communications and strategic decisions'],
      ['Content and growth administration', 'Coordinate LinkedIn, email and social content, prepare approved assets and report campaign results.', 'Publishing calendar and performance summary', 'Strategy, public claims and spend'],
      ['People, finance and systems', 'Track recruiting and onboarding tasks, organise invoice and expense records, and document routine work for automation.', 'Operations status and pilot checklist', 'Hiring, payments and live system changes']
    ],
    flow: [
      ['Choose the first workflow', 'Set priorities, workload, expected output and the account owner.'],
      ['Test the work', 'Review a real or fictional example and agree how routine work and exceptions move through the team.'],
      ['Review and expand', 'Track open decisions and add the next queue once the workflow is understood.']
    ],
    sample: {title:'Founder’s weekly operations brief',type:'SAMPLE · OPERATIONS REVIEW',rows:[['Sales','Demo booked with a named owner','Complete'],['Content','LinkedIn draft linked for approval','In review'],['Finance','Three receipts need an owner','Open']],note:'Keep each queue and decision visible as additional work is added.'},
    inputs: ['Priority workflow and example output','Current tools, workload and response windows','Approval owners and what can be handled independently'],
    tools: ['Shared inbox and calendar','CRM and task tracker','Approved reporting and finance tools'],
    boundary: 'Agree a scope and access rules for each added queue. Founders and specialists keep decisions about finances, hiring, product and commercial commitments.',
    services: ['administrative-support','crm-lead-operations','research-data-support','marketing-content','workflow-automation'],
    faq: [
      ['What should a startup virtual assistant handle first?', 'Choose a recurring workflow with clear inputs and an output the team can check, such as a daily brief, lead queue or content calendar.'],
      ['Can a virtual assistant for small businesses cover several functions?', 'Yes, when the work, capacity and approvals are defined. Keep separate owners and review rules for sensitive queues.'],
      ['Can you help with LinkedIn content?', 'We can prepare founder or company content and coordinate approved publishing and engagement. Sales outreach is scoped separately in CRM support.'],
      ['Can founder operations support include investor or board materials?', 'We can coordinate schedules, research, decks and follow-ups. The founders approve claims and communications.'],
      ['Can you help when we start hiring?', 'We can coordinate job posts, applicant records, interviews and onboarding within the agreed recruiting workflow.'],
      ['When should we add automation?', 'Start when the workflow has repeatable inputs and well-understood exceptions. Test the change with a reviewer before switching on a live action.']
    ]
  }
];
