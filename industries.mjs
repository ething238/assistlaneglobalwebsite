export const industries = [
  {
    id: 'finance',
    name: 'Finance',
    icon: 'ledger',
    headline: 'Virtual assistant services for finance teams',
    summary: 'A finance virtual assistant helps your team organise invoice intake, client records, reporting and approval queues.',
    coverDetails: [
      'An accounts payable virtual assistant can check incoming bills against source documents, flag duplicate invoices and track missing references. Your finance team gets an approval queue showing what’s ready, when it’s due and what still needs a decision.'
    ],
    tasks: ['Invoice intake and document checks', 'Reporting preparation and approval tracking'],
    audience: 'Finance operations teams and financial services firms',
    starter: 'Prepare an invoice exception for review.',
    cadence: 'Daily intake and a weekly exceptions review',
    scope: [
      ['Invoice intake', 'Match incoming documents to the vendor and purchase references provided by your team.', 'Indexed invoice and missing-field notes', 'Vendor creation and changes to payment details'],
      ['Approval tracking', 'Log the current reviewer and remind them about open items.', 'Approval queue with owners and due dates', 'Invoice approval and authorisation to pay'],
      ['Client records', 'Collect approved documents through the designated channel and flag gaps.', 'Intake checklist and review status', 'Client acceptance and identity verification decisions'],
      ['Reporting inputs', 'Collect approved source files and flag inconsistencies for review.', 'Source pack with dates and unresolved items', 'Accounting treatment, adjustments and final reporting'],
      ['Period-end coordination', 'Maintain the checklist and follow up with owners on outstanding items.', 'Status summary and exception log', 'Reconciliation sign-off and close decisions']
    ],
    flow: [
      ['Record the invoice', 'Capture the reference, received date and supporting documents in the approved workspace.'],
      ['Flag the discrepancy', 'Check for a missing reference or conflicting details, and record what needs review.'],
      ['Hand it to the approver', 'Assign the reviewer and include the source documents, issue and requested decision.']
    ],
    sample: {
      title: 'Invoice exception record',
      type: 'INVOICE FN–084 / FICTIONAL RECORD',
      rows: [['01', 'Invoice and vendor reference recorded', 'Complete'], ['02', 'Purchase reference missing', 'Flagged'], ['03', 'Invoice routed to finance lead', 'Awaiting review']],
      note: 'Handoff: the finance lead receives the supporting record and owns the decision to approve or return it.'
    },
    inputs: ['An invoice intake checklist and sample source documents', 'A role map showing who can approve, post or pay', 'A named workspace and rules for handling sensitive records'],
    tools: ['Document workspace', 'Invoice queue', 'Approval tracker', 'Reporting workbook'],
    boundary: 'Scope administrative access to the agreed records. Authorised staff own accounting decisions, financial advice, changes to bank details and payment approval.',
    services: ['accounting-bookkeeping', 'administrative-support', 'crm-lead-operations', 'research-data-support'],
    faq: [
      ['Can an assistant help with invoice processing?', 'An assistant can organise documents, flag missing details and track reviews within the agreed scope. Your authorised staff approve, post and pay invoices.'],
      ['Can the team help prepare a monthly reporting pack?', 'Agree the source files, reporting calendar and reviewers. An assistant can collect inputs and flag exceptions for the person who owns the report.'],
      ["What should we share before finance support starts?", "Provide an intake checklist, sample documents, review deadlines and a named approver. Identify the system that holds the source record and which fields the assistant is allowed to update."],
      ["Can an assistant approve payments or change bank details?", "Administrative support can include preparing documents, checking missing details and tracking reviews. Authorised finance staff own approval, payment execution and the verification of any requested change to banking or vendor details."],
      ["How are invoice exceptions reported?", "Your financial services virtual assistant can maintain a log linking the invoice, the issue found, the reviewer and the next follow-up time. Agree the format so the finance owner can find the evidence needed for a decision."],
      ["Can coverage change around month-end?", "Share close dates, expected peaks and reviewer availability before the period begins. Agree which records take priority and how extra work or a changed review window will be approved before adding it to the queue."]
    ]
  },
  {
    id: 'real-estate',
    name: 'Real estate',
    icon: 'calendar',
    headline: 'Real estate virtual assistant services',
    summary: 'A real estate virtual assistant helps agents, brokerages and property teams organise enquiries, viewings, listing changes and document deadlines.',
    coverDetails: [
      'A virtual assistant for realtors can check availability, confirm viewing times and make sure questions reach the right agent. After each enquiry, the property record shows the last contact, the next follow-up and who owns it.',
      'During a sale or rental, we can track document deadlines and prepare approved listing updates. Your team reviews changes to public details and decides how to handle negotiations and exceptions.'
    ],
    tasks: ['Lead intake and viewing coordination', 'Listing updates and transaction checklists'],
    audience: 'Agents, brokerages and property teams',
    starter: 'Turn a property enquiry into a booked viewing.',
    cadence: 'Enquiry sweeps and a daily follow-up list',
    scope: [
      ['Lead intake', 'Check for duplicate enquiries, capture the source and assign an agent.', 'CRM record with a next action', 'Contact permissions and qualification rules'],
      ['Viewings', 'Offer approved slots and confirm access instructions.', 'Calendar entry and confirmation', 'Access exceptions and unapproved appointments'],
      ['Listing upkeep', 'Prepare approved copy and photos, then check fields against the source sheet.', 'Listing preview and change record', 'Price, property details and publication sign-off'],
      ['Transaction tracking', 'Maintain the checklist, flag missing documents and remind owners of deadlines.', 'Open items and deadline register', 'Contract terms, negotiation and licensed decisions'],
      ['Follow-up', 'Queue agreed reminders and record replies against the property.', 'Follow-up list with status and owner', 'Advice, offers and commitments to buyers']
    ],
    flow: [
      ['Capture the enquiry', 'Match the property reference and add the contact, source and preferred time to the CRM.'],
      ['Confirm the viewing', 'Offer a slot within the agent’s rules and escalate any access exception.'],
      ['Set the next action', 'Record the outcome and assign follow-up to the agent with the full context.']
    ],
    sample: {
      title: 'Viewing coordination brief',
      type: 'PROPERTY RE–214 / FICTIONAL RECORD',
      rows: [['01', 'Enquiry matched to listing and agent', 'Recorded'], ['02', 'Thursday viewing confirmed', 'Scheduled'], ['03', 'Buyer asks about offer terms', 'Agent review']],
      note: 'Handoff: the agent receives the enquiry context and owns the response about offer terms.'
    },
    inputs: ['A listing reference sheet and permitted contact scripts', 'Agent calendars, viewing rules and the correct CRM owner', 'A transaction checklist and a contact for licensed decisions'],
    tools: ['Property CRM', 'Listing portal', 'Shared calendar', 'Approved document workspace'],
    boundary: 'Set the local scope with the brokerage. The qualified professional owns negotiations, advice, contract terms and any activity that requires a licence.',
    services: ['crm-lead-operations', 'administrative-support', 'marketing-content', 'accounting-bookkeeping'],
    faq: [
      ['Can you update listings across several portals?', 'Start with the portals and fields in scope, the source for listing details, and who approves changes before publication.'],
      ['Who responds when an enquiry turns into an offer?', 'The assistant can record the message and route it with context. The agent or broker owns negotiations, advice and commitments.'],
      ["What can be prepared before a viewing?", "Your real estate virtual assistant can check the approved property details, available slots and prospect’s request, then prepare a confirmation for the agreed review or sending process. Agents decide any exception to the scheduling rules."],
      ["Can the assistant keep our CRM records current?", "A virtual assistant for realtors can log enquiry sources, contact details and agreed follow-up actions in the approved fields. Provide the rules for duplicates, ownership and which updates need an agent’s confirmation."],
      ["How are last-minute calendar conflicts handled?", "Your virtual assistant for real estate agents should identify the affected appointments, record the latest information and ask the responsible agent to choose the next step. The agreed backup route should cover times when that agent is unavailable."],
      ["What do we need to provide during setup?", "Bring current listing information, approved replies, viewing availability and a normal enquiry example. Confirm the workspace, the agent who approves changes and which questions should always be routed back before a commitment is made."]
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    icon: 'headset',
    headline: 'E-commerce virtual assistant services',
    summary: 'An ecommerce virtual assistant tracks catalogue updates, order exceptions and supplier follow-ups for online stores and marketplace sellers.',
    coverDetails: [
      'With ecommerce virtual assistant services, we can check product variants, track stock differences and follow up when an order misses its expected dispatch date. We bring the relevant order and product records together so your team can see what happened.',
      'Use the same queue to track replacement requests, carrier updates and supplier questions. We record the next action and bring refund exceptions to the store owner.'
    ],
    tasks: ['Catalogue and variant checks', 'Order triage and inventory reporting'],
    audience: 'Online retailers and marketplace sellers',
    starter: 'Resolve the routine steps in a delayed order.',
    cadence: 'Order queue sweeps and weekly stock exceptions',
    scope: [
      ['Product data', 'Prepare approved titles, images, variants and attributes. Flag mismatched SKUs.', 'Catalogue change list and preview', 'Product claims, prices and promotions'],
      ['Order enquiries', 'Check tracking and send documented updates to customers.', 'Updated ticket and order note', 'Refunds, cancellations and replacements outside policy'],
      ['Inventory checks', 'Compare stock records and flag low stock or discrepancies.', 'SKU exception report', 'Stock adjustments and reorder quantities'],
      ['Supplier coordination', 'Follow up on agreed delivery dates and log supplier replies.', 'Supplier update and next owner', 'Purchase orders, terms and payments'],
      ['Store upkeep', 'Schedule approved content updates and flag broken product links.', 'Storefront change record', 'Technical releases and advertising spend']
    ],
    flow: [
      ['Verify the order', 'Match the ticket to the order and check tracking against the carrier record.'],
      ['Update the customer', 'Use an approved delivery message and give the customer the next check-in point.'],
      ['Route the exception', 'Log the supplier follow-up and assign any refund or replacement decision to the store owner.']
    ],
    sample: {
      title: 'Delayed order exception',
      type: 'ORDER EC–1042 / FICTIONAL RECORD',
      rows: [['01', 'Carrier scan missing after dispatch', 'Verified'], ['02', 'Delivery update sent from template', 'Sent'], ['03', 'Replacement requested by customer', 'Owner review']],
      note: 'The ecommerce virtual assistant records the customer message, tracking evidence and requested remedy for the next owner.'
    },
    inputs: ['Sample SKUs, catalogue conventions and approved product data', 'Shipping, return and refund procedures with named exception owners', 'Store, order and support access scoped to the work'],
    tools: ['Store admin', 'Marketplace dashboard', 'Help desk', 'Inventory tracker'],
    boundary: 'Agree what can change in the store and in the order record. Your team controls buying, payments, refund exceptions and technical releases.',
    services: ['ecommerce-operations', 'customer-support', 'marketing-content', 'seo-wordpress', 'accounting-bookkeeping'],
    faq: [
      ['Can you help during promotions or launch weeks?', 'Share expected order volume, coverage windows and temporary response rules so the scope reflects the busiest period.'],
      ['Do you have to give full store access?', 'Start with the permissions needed for the chosen queue, such as reading orders or preparing catalogue changes. Review additional access separately.'],
      ["Can an assistant answer order-status questions?", "Your ecommerce virtual assistant can check the approved order and shipment records and prepare replies using the store’s current guidance. Agree what happens when tracking is missing, a delivery estimate has changed or fulfilment needs to investigate."],
      ["Who decides refunds and replacements?", "Ecommerce virtual assistant services should follow the store’s agreed policy and permission limits. Requests outside that policy go to the person authorised to decide, with the order history and customer’s question attached for review."],
      ["What information should a returns request include?", "Provide the order reference, reported issue, relevant dates and any evidence your policy requires. A virtual assistant for online store support can organise those details and show what is missing before the store owner reviews the request."],
      ["How do we review completed store support?", "Check a sample of resolved orders, an open case and a request that needed approval. Compare each record with the latest shipment information and any customer update promised, then clarify the instructions before the next cycle."]
    ]
  },
  {
    id: 'agencies-publications',
    name: 'Marketing',
    icon: 'content',
    headline: 'Virtual assistant services for marketing teams',
    summary: 'A marketing agency virtual assistant tracks campaign briefs, creative assets, editorial approvals and releases across client accounts.',
    coverDetails: [
      'A virtual assistant for creative agencies can organise drafts, collect feedback and keep approved assets beside the campaign schedule. The account lead can see which version is ready and where an approval is still holding up a release.',
      'We can also prepare posts, check links and record published URLs across the channels you approve. Your team decides when a campaign goes live and handles changes to client messaging.'
    ],
    tasks: ['Campaign intake and asset collection', 'Editorial calendars and publishing checks'],
    audience: 'In-house marketing teams, agencies and publishers',
    starter: 'Move an approved brief through to a checked publication.',
    cadence: 'Weekly planning and release checks',
    scope: [
      ['Brief intake', 'Collect the objective, owner, assets and deadlines in the right project.', 'Brief with a missing-input list', 'Scope, priority and client promises'],
      ['Editorial calendar', 'Track drafts, assignments and review dates across accounts or titles.', 'Calendar with owners and blockers', 'Editorial priorities and deadline changes'],
      ['Asset and review routing', 'Record versions, collect feedback and send the current draft to its reviewer.', 'Review pack and sign-off history', 'Brand, rights, claims and final copy'],
      ['Publishing', 'Format approved material, check metadata and links, then record the live URL.', 'Publication checklist and release record', 'Final approval and publishing window'],
      ['Campaign reporting', 'Collect agreed campaign figures and action items for the lead.', 'Status pack with sources and next actions', 'Analysis, strategy, spend and performance commitments']
    ],
    flow: [
      ['Check the brief', 'Confirm the audience, format, due date and final approver before work enters the calendar.'],
      ['Track versions and review', 'Keep the current draft and assets together. Record requested changes and final approval.'],
      ['Publish and report', 'Use the agreed checklist and send the live link, remaining actions and any blockers.']
    ],
    sample: {
      title: 'Editorial delivery record',
      type: 'ARTICLE AG–027 / FICTIONAL RECORD',
      rows: [['01', 'Brief, artwork and owner recorded', 'Ready'], ['02', 'Article checked in staging', 'QA passed'], ['03', 'Final image rights confirmation', 'Editor review']],
      note: 'Handoff: release stays on hold until the editor records approval for the current version.'
    },
    inputs: ['One real brief and an approved example for each format', 'Brand rules, client-specific folders and a named approval owner', 'Publishing access, release windows and rules for handling competing deadlines'],
    tools: ['Project board', 'Editorial calendar', 'Asset library', 'CMS or newsletter editor'],
    boundary: 'Keep client accounts and assets separate. Your editorial or account lead owns factual review, brand decisions, campaign strategy and final approval.',
    services: ['marketing-content', 'seo-wordpress', 'research-data-support', 'administrative-support'],
    faq: [
      ['Can one workflow cover several client accounts?', 'Use a shared process for status and deadlines, with separate folders, access and approval rules for each account.'],
      ['What happens when urgent work interrupts the calendar?', 'Flag the work that would move, then let the account or editorial lead confirm the new priority before changing deadlines.'],
      ["What needs approval before content is scheduled?", "Give your marketing agency virtual assistant the approved copy, asset version, channel and release date. Identify the reviewer who can confirm a change so the team can check the exact item before it is scheduled."],
      ["Can support coordinate work across several channels?", "A virtual assistant for marketing agencies can maintain a shared calendar linking the approved assets, review dates and destinations. Agree channel-specific checks and note which releases depend on the same page or client approval."],
      ["How do we keep client work separate?", "A virtual assistant for creative agencies should use the approved workspace and access rules for each account. Keep source assets, client feedback and approval records in the correct folders while sharing only the status information needed for coordination."],
      ["What happens if reviewers give conflicting feedback?", "Record both instructions and ask the named decision owner which version should be used. Keep the affected item visible in the review queue and check any scheduled releases that depend on the same decision."]
    ]
  },
  {
    id: 'ai-technology',
    name: 'AI and technology',
    icon: 'web',
    headline: 'Virtual assistant services for AI and technology teams',
    summary: 'A SaaS virtual assistant coordinates demos, onboarding, support requests and releases for software and AI product teams.',
    coverDetails: [
      'A virtual assistant for software companies can record where a demo request came from, coordinate onboarding steps and flag product questions that need an engineer. Each request has a next action for the right team.',
      'For an upcoming release, we can link support reports to the relevant product change, prepare approved customer updates and track unanswered questions. Your product team approves technical answers and release timing.'
    ],
    tasks: ['Demo routing and CRM updates', 'Customer triage and release coordination'],
    audience: 'AI startups, SaaS companies and product teams',
    starter: 'Route a demo request with enough context for sales.',
    cadence: 'Daily queue review and a weekly release handoff',
    scope: [
      ['Founder support', 'Coordinate meetings, collect pre-reads and maintain action lists.', 'Brief and follow-up register', 'Investor, partner and hiring decisions'],
      ['Demo operations', 'Verify intake, apply routing rules and schedule with the assigned owner.', 'CRM record, agenda and demo context', 'Lead qualification and product commitments'],
      ['Customer onboarding', 'A SaaS virtual assistant tracks checklist progress and routes setup blockers.', 'Onboarding status and next owner', 'Security exceptions and account configuration'],
      ['Product triage', 'Collect reproduction steps, environment details and known impact.', 'Structured issue for engineering', 'Severity, root cause and fix priority'],
      ['Knowledge and releases', 'Format approved documentation and coordinate release notes.', 'Draft or release checklist', 'Technical accuracy, model claims and release approval']
    ],
    flow: [
      ['Check the request', 'Record the use case, company and timing using the fields sales has approved.'],
      ['Route and schedule', 'Apply the assignment rule, book an approved slot and give the owner the relevant context.'],
      ['Log the outcome', 'Record what happened and route technical or security questions to the accountable team.']
    ],
    sample: {
      title: 'Demo handoff record',
      type: 'INBOUND REQUEST AT–018 / FICTIONAL RECORD',
      rows: [['01', 'Use case and source recorded', 'Complete'], ['02', 'Demo scheduled with account owner', 'Scheduled'], ['03', 'Data retention question noted', 'Security review']],
      note: 'Handoff: the sales owner gets the demo context. The security team owns the answer on retention.'
    },
    inputs: ['Lead routing rules and approved onboarding documentation', 'A triage template and engineering escalation contact', 'Release approval rules and limits on sensitive data in external tools'],
    tools: ['CRM', 'Help desk', 'Issue tracker', 'Knowledge base'],
    boundary: 'Engineering and product teams own technical decisions, software changes, release approval and claims about model capabilities.',
    services: ['workflow-automation', 'crm-lead-operations', 'customer-support', 'research-data-support', 'recruiting-people-operations'],
    faq: [
      ['What makes a bug report ready for engineering?', 'Include the expected and actual behaviour, reproduction steps, environment and customer impact. Remove sensitive data before sharing evidence.'],
      ['Can an assistant publish product documentation?', 'Agree the editor permissions and route technical details to the product owner before publication.'],
      ["Which onboarding tasks can you help coordinate?", "A SaaS virtual assistant can track the agreed checklist, follow up on missing inputs and route setup blockers to the responsible team. Product and technical owners decide account configuration, exceptions and any change to product behaviour."],
      ["Can an assistant make product or security commitments?", "A virtual assistant for software companies should use current approved guidance and route uncertain claims to the product or security owner. Keep the original question and relevant context with the request so the specialist can give an informed answer."],
      ["How are demo enquiries assigned?", "Your virtual assistant for tech startups can check intake details, link the CRM record and apply your routing rules. The assigned sales owner receives the source request, scheduling context and any open product questions before following up."],
      ["What should we prepare before a launch?", "Share the current product notes, known limitations, approved onboarding answers and escalation contacts. Identify when reviewers are available and which customer questions need a confirmed answer before the support notes or public documentation are updated."]
    ]
  },
  {
    id: 'professional-services',
    name: 'Professional services',
    icon: 'people',
    headline: 'Virtual assistant services for professional firms',
    summary: 'Keep appointments, onboarding records and deliverables organised for advisers and client service teams.',
    coverDetails: [
      'A client intake virtual assistant can schedule first meetings, request the agreed documents and show which records are missing. The engagement owner sees what’s ready for review and who should handle the next question.',
      'For existing accounts, we track client feedback, follow up on sign-offs and turn meeting notes into an action list. The project lead approves commitments and deliverables.'
    ],
    tasks: ['Client intake and document collection', 'Appointment and proposal coordination'],
    audience: 'Consultancies, advisory teams and client service firms',
    starter: 'Turn a new enquiry into a clean onboarding handoff.',
    cadence: 'Daily intake review and weekly engagement status',
    scope: [
      ['Appointments', 'Offer approved slots, send reminders and prepare a meeting brief.', 'Confirmed meeting and pre-read', 'Urgency, exceptions and advice'],
      ['Client intake', 'Collect agreed information via approved channels and flag gaps.', 'Intake checklist and assigned owner', 'Client acceptance and sensitive requests'],
      ['Records and files', 'Organise received documents using client and version rules.', 'Indexed client folder and missing-item list', 'Access, retention and deletion decisions'],
      ['Proposals', 'Format approved terms and track revisions and deadlines.', 'Review-ready proposal and status record', 'Fees, scope and professional advice'],
      ['Billing preparation', 'Organise approved records or prepare reminders when in scope.', 'Draft or exception list for finance', 'Invoice issuance, adjustments and payments']
    ],
    flow: [
      ['Log the enquiry', 'Record the source and enough context to route the enquiry to the right professional.'],
      ['Prepare onboarding', 'Schedule the meeting and collect approved information using the firm’s channel.'],
      ['Escalate for review', 'Give the engagement owner the checklist and let them decide whether the matter can proceed.']
    ],
    sample: {
      title: 'Client intake brief',
      type: 'ENGAGEMENT PS–031 / FICTIONAL RECORD',
      rows: [['01', 'Introductory appointment confirmed', 'Scheduled'], ['02', 'Approved intake documents indexed', 'Recorded'], ['03', 'Engagement acceptance pending', 'Owner review']],
      note: 'Handoff: the professional sees the record, missing items and the decision needed before accepting the engagement.'
    },
    inputs: ['Approved intake templates and document collection routes', 'Appointment rules and a named engagement approver', 'Client file permissions and instructions for confidential material'],
    tools: ['Shared calendar', 'Client CRM', 'Secure document workspace', 'Task tracker'],
    boundary: 'Your firm owns client acceptance, professional advice, fee commitments and financial authorisations. Scope confidential records separately.',
    services: ['administrative-support', 'crm-lead-operations', 'customer-support', 'accounting-bookkeeping', 'research-data-support'],
    faq: [
      ['Can you help collect client documents?', 'Yes, within the agreed intake checklist and approved storage channels. Your team decides what sensitive documents are required and who can access them.'],
      ['Who signs off on proposals or invoices?', 'The assistant can prepare drafts and track status. An authorised person at the firm approves terms, fees and issuance.'],
      ["Can you coordinate consultation appointments?", "A virtual assistant for consultants can collect availability, prepare meeting details and maintain the schedule within agreed rules. Give the assistant the approved appointment windows and the person who can authorise an exception or a new commitment."],
      ["What happens when an enquiry requires professional advice?", "A client intake virtual assistant can record the question and organise the approved background information. The responsible professional reviews the request and provides any advice, eligibility decision or commitment about the services the firm will deliver."],
      ["How are client follow-ups managed?", "Your virtual assistant for consulting firms can record the next action, deadline and responsible person after an enquiry or meeting. Agree how to distinguish a request waiting on client information from one needing an internal decision."],
      ["What do we need to provide before starting?", "Bring an intake example, approved information fields, consultation rules and a named reviewer. Confirm where client material belongs and who can access it so the first task follows the firm’s working practices."]
    ]
  }
];
