export const specialistServices = [
  {
    id: 'accounting-bookkeeping',
    icon: 'ledger',
    title: 'Accounting and bookkeeping support',
    label: 'Accounting and bookkeeping',
    tabLabel: 'Books',
    portrait: 'records',
    summary: 'Keep invoices, expenses, reconciliations and month-end records organised for the person who approves the books.',
    tasks: ['Accounts payable and receivable', 'Transaction coding and reconciliation', 'Payroll preparation and close packs'],
    sample: {
      title: 'Month-end review pack',
      type: 'SAMPLE · CLOSE CHECKLIST',
      rows: [['AP', 'Vendor invoice matched to purchase order', 'Ready for review'], ['AR', 'Overdue invoice reminder prepared', 'Drafted'], ['Bank', 'Deposit has no matching payout', 'Review needed']],
      note: 'Review item: verify the deposit against the processor statement before posting an adjustment.'
    },
    steps: [
      ['Collect the records', 'Gather invoices, receipts, statements, payroll inputs and the previous close checklist in the approved workspace.'],
      ['Match and prepare', 'Apply the agreed coding rules, compare the ledger with source records and put uncertain entries in an exception list.'],
      ['Hand over for approval', 'Deliver the reconciliation status, outstanding items and draft reports to the named finance reviewer.']
    ],
    tools: 'Agree which QuickBooks Online, Xero or other ledger roles are needed, what can be edited and where supporting records are stored.',
    boundary: 'Your authorised finance team approves accounting treatment, payment release, payroll submission, tax filings and final financial statements. Controller, CFO and tax work requires a separately agreed qualified specialist.',
    playbook: {
      copy: [
        'Accounting and bookkeeping support keeps invoices, reconciliations and reports ready for your finance reviewer.',
        'For accounts payable and receivable, we match invoices to source records, update what’s outstanding and prepare reminders for approval. At month-end, you get reconciliation notes and a list of mismatches to review alongside your draft reports.'
      ],
      first: 'Start with one account and one month of records.',
      input: 'Chart of accounts, source statements, coding examples, approval limits and close dates.',
      cadence: 'Weekly ledger upkeep · monthly close review',
      systems: ['QuickBooks Online or Xero', 'Expense and payroll systems', 'Approved document storage'],
      matrix: [
        ['Bookkeeping and cleanup', 'Enter and categorise transactions from approved sources, attach evidence, and flag duplicate or historical entries for review.', 'Clean ledger batch and exception list', 'New coding rules, journal adjustments and historical corrections'],
        ['Accounts payable', 'Capture bills, match invoices to purchase orders and receipts, track due dates and prepare a draft payment queue.', 'Bill register and approval packet', 'New vendor banking details and release of funds'],
        ['Accounts receivable', 'Prepare agreed invoices, match receipts, maintain aging reports and draft overdue reminders.', 'Invoice, collection and aging tracker', 'Credit terms, disputes, write-offs and escalation'],
        ['Bank and card reconciliation', 'Compare statement lines to ledger entries and identify timing differences, duplicates or missing evidence.', 'Reconciliation worksheet with exceptions', 'Adjustments and final sign-off'],
        ['Expenses and payroll preparation', 'Check receipts and reimbursements, compile approved timesheets and prepare payroll changes for review.', 'Expense and payroll input pack', 'Pay rates, deductions, payroll approval and submission'],
        ['Close and reporting', 'Maintain the close checklist and prepare draft profit and loss, balance sheet and cash summaries from approved records.', 'Month-end pack, open items and draft reports', 'Final statements, forecasts, filings and advice'],
        ['Store and practice bookkeeping', 'Match marketplace payouts, fees and returns, or organise client documents and billing records for professional practices.', 'Payout reconciliation or client document index', 'Tax treatment, inventory valuation and client billing decisions']
      ],
      scenarios: [
        ['Set up a weekly invoice routine', 'Group new vendor bills by due date, match each to its supporting record and send the approval owner one list with exceptions.'],
        ['Prepare for a monthly close', 'Compare the bank and card statements with the ledger. Show what matches and what needs review so the accountant can focus on the open items.'],
        ['Recover a backlog', 'Select one period, test the proposed cleanup on a sample and record corrections before the finance owner approves work on older periods.']
      ],
      checks: ['Keep evidence with each entry.', 'Verify the account, period and source totals.', 'Separate prepared transactions from approved transactions.', 'Record the reason, owner and due date for each exception.']
    },
    details: [
      {
        id: 'accounting-workflows',
        title: 'What a bookkeeping virtual assistant does each week',
        intro: 'Define the records, reporting cycle, software access and finance reviewer before starting.',
        items: [
          ['Daily and weekly records', 'Capture bills and receipts, record approved transactions and track missing documents. Review <a href="industry-finance.html#worked-example">invoice exceptions</a> with your finance owner.'],
          ['Month-end and year-end preparation', 'Collect statements, prepare reconciliations and assemble draft reports. Track missing evidence in one checklist. Review <a href="industry-ecommerce.html#store-catalogue-and-fulfilment">store payouts and fees</a> before close.'],
          ['Work with your finance specialist', 'Organise source records for payroll, tax or controller review. Financial advice and final approval stay with your authorised specialist.']
        ]
      }
    ],
    faq: [
      ['Can you work in our existing accounting system?', 'We scope accounting and bookkeeping support around your ledger, source records, coding examples and permissions. Share a reviewer for the first sample.'],
      ['Can a bookkeeping virtual assistant help with overdue invoices?', 'We can prepare aging lists, match incoming payments and draft or send approved reminders. Disputes, collections escalation and write-offs go to your finance owner.'],
      ['What happens when a bank line does not match?', 'We record the amount, date, source and likely reason for the difference and send it for review. The reviewer decides whether an adjustment is needed.'],
      ['Can you help prepare payroll?', 'We can collect approved hours and employee changes, check missing inputs and prepare a review pack. Your authorised payroll owner approves and submits the run.'],
      ['Can you clean up older bookkeeping records?', 'Start with a small period and agree the correction rules. We document proposed changes and flag entries that need accounting judgment before a wider cleanup.'],
      ['What do I receive at month-end?', 'Your accounting and bookkeeping support handoff can include reconciliation status, aging reports, draft ledger reports, source links and a list of decisions still open.']
    ]
  },
  {
    id: 'research-data-support',
    icon: 'ledger',
    title: 'Research and data support',
    label: 'Research and data',
    tabLabel: 'Research',
    portrait: 'operations',
    summary: 'Turn market, competitor, prospect and internal data into a checked spreadsheet, research brief or reporting pack.',
    tasks: ['Market and competitor research', 'Data entry, cleanup and validation', 'Reporting, datasets and annotation'],
    sample: {
      title: 'Competitor research brief',
      type: 'SAMPLE · VERIFIED SOURCES',
      rows: [['01', 'Service scope checked against provider website', 'Verified'], ['02', 'Pricing basis differs across providers', 'Context added'], ['03', 'An important field has no public source', 'Open question']],
      note: 'Every usable finding has a source, date and note about how it was verified.'
    },
    steps: [
      ['Define the question', 'Agree the audience, sources, search criteria, required fields and how you will use the result.'],
      ['Collect and validate', 'Record evidence with each finding, deduplicate entries and distinguish verified facts from open questions.'],
      ['Deliver a usable record', 'Hand over the structured dataset, a short summary of findings and the decisions or data gaps that need review.']
    ],
    tools: 'Use your existing spreadsheet, database or reporting tool. Agree access and source rules before collecting or moving records.',
    boundary: 'Your team approves sources, data permissions, collection rules, target criteria and business decisions. Research for regulated work is prepared for the responsible professional.',
    playbook: {
      copy: [
        'Research and data support turns market, prospect and spreadsheet data into checked reports.',
        'Use market and competitor research to compare vendors, prices or products against the same criteria. We record the source and date for each finding, so you can see which details are verified and which need a follow-up before you act.',
        'Our data entry and cleanup work can combine approved exports, standardise fields and flag duplicates or missing values. You get a spreadsheet with the source links and a short note on the records that still need review before anyone uses them.'
      ],
      first: 'Start with a five-record sample and clear source rules.',
      input: 'Research question, example row, approved sources, fields and intended decision.',
      cadence: 'Defined research batch or recurring data review',
      systems: ['Google Sheets or Excel', 'Approved research sources', 'Reporting and database tools'],
      matrix: [
        ['Market and competitor research', 'Compare offers, audiences, prices where comparable, and trends using agreed public or licensed sources.', 'Sourced comparison and findings brief', 'Scope and interpretation of findings'],
        ['Prospect, contact and vendor research', 'Find companies, contacts, products or suppliers against agreed criteria and verify their details.', 'Checked shortlist with source links', 'Outreach permission and vendor choice'],
        ['Data entry and collection', 'Transcribe or extract agreed records from forms, documents, spreadsheets or authorised exports.', 'Structured sheet or import file', 'Collection permissions and destination'],
        ['Data cleanup and verification', 'Standardise field formats, check duplicates, verify records and flag missing values.', 'Cleaned dataset and change log', 'Deletions, merges and exception rules'],
        ['Reporting and visual summaries', 'Prepare recurring summaries, spreadsheet views, charts and dashboards using agreed definitions.', 'Report with refresh date and source notes', 'Metric definitions and business conclusions'],
        ['Dataset preparation and annotation', 'Apply documented labels to approved text or images and check a sample against the rubric.', 'Labelled batch with review notes', 'Label definitions, permitted content and acceptance'],
        ['Editorial and technical research', 'Find original sources, verify facts and compile notes for articles, proposals or knowledge base updates.', 'Research packet with citations and open questions', 'Editorial, technical or professional conclusions']
      ],
      scenarios: [
        ['Compare vendors before a decision', 'Use the same fields for each vendor and record where a published claim needs confirmation, such as availability or included features.'],
        ['Prepare a list before outreach', 'Check that each account matches the target audience, keep the source and remove duplicates before the list is reviewed.'],
        ['Clean a report that keeps drifting', 'Trace the fields back to the source, agree one definition for each metric and give the team a repeatable refresh checklist.']
      ],
      checks: ['Attach a source and date to each finding.', 'Sample the output against the original records.', 'Mark unknown or conflicting values.', 'Record changes before importing data into another system.']
    },
    faq: [
      ['Can you research competitors or markets?', 'Yes. Agree the markets, questions and comparable fields first. We return sources, dates and any important differences in how the information was reported.'],
      ['Can you build a prospect list?', 'We can prepare a list using your targeting and source rules, verify entries and mark missing information for review. Your team decides who may be contacted.'],
      ['What happens if a source is unclear?', 'We mark the field as uncertain or missing and explain the conflicting evidence. You can review the record before it is used.'],
      ['Can you clean or annotate an existing dataset?', 'Share an authorised sample and the intended format or labelling rubric. We review the first batch against the rules before continuing.'],
      ['Can you prepare recurring reports?', 'Yes. Agree the source, refresh schedule, metric definitions and the decisions the report should support.'],
      ['What formats can the work be delivered in?', 'Agree the output before setup. A checked spreadsheet, CSV import, research memo, chart or dashboard update can all be scoped around the same source record.']
    ]
  },
  {
    id: 'recruiting-people-operations',
    icon: 'people',
    title: 'Recruiting and people operations support',
    label: 'Recruiting and people operations',
    tabLabel: 'Hiring',
    portrait: 'team',
    summary: 'Keep job posts, candidate records, interviews and employee onboarding moving with a clear owner at each stage.',
    tasks: ['Candidate sourcing and applicant tracking', 'Interview and reference coordination', 'New hire onboarding and HR records'],
    sample: {
      title: 'Hiring pipeline handoff',
      type: 'SAMPLE · WEEKLY REVIEW',
      rows: [['Open', 'Operations assistant posting approved', 'Ready to publish'], ['Next', 'Two interview slots confirmed', 'Scheduled'], ['Check', 'Reference still outstanding', 'Hiring lead review']],
      note: 'The hiring lead receives the candidate history, outstanding documents and next scheduled action.'
    },
    steps: [
      ['Confirm the role and criteria', 'Agree the job brief, sourcing channels, applicant fields and who approves communication and stage changes.'],
      ['Coordinate the pipeline', 'Maintain the applicant tracker, arrange interviews and gather agreed evidence using the approved process.'],
      ['Prepare the next handoff', 'Send a status summary for the hiring lead, then coordinate the approved onboarding checklist for the selected hire.']
    ],
    tools: 'Work in your applicant tracking system, calendar and approved HR workspace. Use authorised LinkedIn recruiting features where agreed.',
    boundary: 'Your hiring team owns role requirements, selection, employment terms, consent and hiring decisions. HR policy, employment advice and specialist credential assessments stay with the responsible owner.',
    playbook: {
      copy: [
        'Recruiting and people operations support keeps candidate records, interviews and onboarding moving.',
        'Use LinkedIn candidate sourcing to assemble a shortlist against criteria your hiring team agrees. We keep interview slots, candidate documents and next steps in your tracker, so the recruiter can review each application and make decisions on schedule.'
      ],
      first: 'Start with one role and one interview calendar.',
      input: 'Approved job brief, sourcing rules, interview process and candidate communication templates.',
      cadence: 'Applicant queue checks · weekly hiring review',
      systems: ['Applicant tracking system', 'LinkedIn or approved job boards', 'Calendar and HR workspace'],
      matrix: [
        ['Job posting and role intake', 'Format the approved description and track job board postings and staffing requests.', 'Live posting and role tracker', 'Requirements, compensation and publication'],
        ['Candidate sourcing', 'Find potential candidates against job-related criteria using permitted sources and log the context.', 'Source list for recruiter review', 'Outreach, criteria changes and selection'],
        ['Applicant administration', 'Update applicant records and compile a factual checklist of requested materials for the hiring team.', 'Current pipeline with missing information noted', 'Candidate evaluation and progression decisions'],
        ['Interview and reference coordination', 'Confirm availability, send approved updates, gather feedback forms and track reference requests.', 'Interview schedule and decision-ready file', 'Assessment and reference interpretation'],
        ['Onboarding and credential tracking', 'Collect required documents through approved channels and track tasks, access requests and expiry reminders.', 'New hire checklist and exception log', 'Eligibility, access approval and credential acceptance'],
        ['People operations administration', 'Organise employee records, training schedules, timesheet inputs and renewal reminders.', 'HR status pack and next owners', 'Payroll, policy and employee decisions']
      ],
      scenarios: [
        ['Keep interviews on track', 'Confirm a slot with both sides, send the approved agenda and attach the right candidate material to the recruiter’s workspace.'],
        ['Give a staffing team one view of open roles', 'Link job orders, approved postings, scheduled interviews and next steps so each hiring lead sees what needs attention.'],
        ['Prepare a new hire’s first week', 'Track paperwork, training, equipment and access requests and send exceptions to the accountable team.']
      ],
      checks: ['Keep candidate details in the approved system.', 'Verify dates, names and role before sending.', 'Use the agreed fields and document what is missing.', 'Separate coordination from assessment and approval.']
    },
    details: [
      {
        id: 'linkedin-recruiting',
        title: 'LinkedIn recruiting and candidate sourcing',
        intro: 'Agree the role, approved sourcing tools and who can contact candidates before using LinkedIn in your recruitment workflow. For company posts, see <a href="marketing-content.html#linkedin-support">LinkedIn publishing and engagement</a>. For leads, see <a href="crm-lead-operations.html#linkedin-sales-support">LinkedIn prospecting and sales support</a>.',
        items: [
          ['Build a relevant shortlist', 'Research profiles against the recruiter’s role criteria, document relevant experience and record the source in the applicant tracker.'],
          ['Prepare outreach and keep the tracker current', 'Draft tailored messages for review, record approved outreach and responses and update interview status in the authorised system.'],
          ['Hand candidates over to the hiring team', 'Send the shortlist, replies, outstanding questions and interview availability to the recruiter. The hiring team decides next steps.']
        ]
      }
    ],
    faq: [
      ['Can you source candidates through LinkedIn?', 'Yes, within the approved role criteria, permitted tools and access. We can research candidates and prepare outreach for your recruiter’s review.'],
      ['Can a recruitment virtual assistant update our applicant tracking system?', 'We can maintain records, interview schedules and agreed status updates using the access you authorise.'],
      ['Who decides which candidates move forward?', 'Your hiring team reviews candidate information and makes progression, selection and offer decisions.'],
      ['Can you coordinate references or credentials?', 'We can request and track the agreed items through approved channels. Your reviewer decides how to assess them.'],
      ['Can you help onboard a new employee?', 'We can coordinate the checklist for paperwork, calendars, training and access requests and flag anything waiting for an owner.'],
      ['What can a weekly recruiting report include?', 'Open roles, applicant status, interviews due, outstanding references, onboarding tasks and the decisions your hiring team needs to make.']
    ]
  },
  {
    id: 'workflow-automation',
    icon: 'web',
    title: 'AI workflow automation and technical operations',
    label: 'Workflow automation',
    tabLabel: 'Automation',
    portrait: 'systems',
    summary: 'Map repetitive work, connect approved tools and test automation with a clear exception queue and human review.',
    tasks: ['Form, CRM and reporting automation', 'AI-assisted drafts and classification', 'Testing, monitoring and technical handoffs'],
    sample: {
      title: 'Automation test and release record',
      type: 'SAMPLE · LEAD ROUTING',
      rows: [['Normal', 'New form enquiry creates CRM task', 'Passed'], ['Duplicate', 'Existing contact routed to review', 'Passed'], ['Missing', 'Blank region held for assignment', 'Review needed']],
      note: 'Release only after the owner verifies field mapping, access and what happens when an action fails.'
    },
    steps: [
      ['Map the current work', 'Document the trigger, inputs, actions, owners, exceptions and the point where a human needs to decide.'],
      ['Build and test a small workflow', 'Use authorised tools and test records to check field mapping, duplicates, failures and the approval step.'],
      ['Release and monitor', 'Get approval for the rollout, document the fallback and track errors and unresolved items after launch.']
    ],
    tools: 'Scope the workflow in your existing tools or an approved platform such as Zapier, Make or n8n. Confirm API access, data flows and ownership before connecting systems.',
    boundary: 'Your owner approves access, data transfer, live releases and changes to business rules. Custom engineering, AI model development and infrastructure work require a qualified specialist scope.',
    playbook: {
      copy: [
        'Use AI workflow automation to route enquiries, create tasks or draft replies for review.',
        'With CRM automation support, a new form submission can create a record, assign the right owner and send a reminder. We test the usual route and exceptions, so your team can see when a rule fails and who should review it.'
      ],
      first: 'Start with one trigger, one action and one exception.',
      input: 'Current instructions, source fields, destination, sample records and approval owner.',
      cadence: 'Pilot build · monitored rollout · periodic review',
      systems: ['Zapier, Make or n8n', 'CRM, forms and spreadsheets', 'Approved AI tools and test environment'],
      matrix: [
        ['Process mapping', 'Document the current sequence, handoffs and points where automation would save repeat work.', 'Workflow map and scope', 'Business rules and exceptions'],
        ['CRM and intake automation', 'Map fields, create tasks, route enquiries and flag missing or duplicate information.', 'Tested rule and exception queue', 'Routing, access and outbound permissions'],
        ['Data and report automation', 'Prepare approved imports, scheduled summaries and spreadsheet or CRM syncs.', 'Scheduled workflow and source checks', 'Fields, schedule and destination access'],
        ['Finance and admin automation', 'Route documents, receipts or reminders to the right queue and prepare status reports.', 'Test run and review route', 'Accounting decisions, payments and payroll release'],
        ['AI-assisted workflows', 'Use approved inputs for draft summaries, classification, extraction or answer suggestions with review.', 'Reviewable output and sample checks', 'AI data use and any external action'],
        ['QA and technical operations', 'Test common and failure cases, log defects, maintain runbooks and monitor known exceptions.', 'Test report, issue log and fallback steps', 'Production release and incident decisions']
      ],
      scenarios: [
        ['Route a website enquiry', 'Check required fields, create an owner task in the CRM and send incomplete entries to a queue for review.'],
        ['Turn a support message into a draft', 'Classify the issue using approved categories and prepare a draft response for review, with the original message linked.'],
        ['Make failures visible', 'Record skipped and failed actions with the source and retry status so the operator can resolve them without duplicating work.']
      ],
      checks: ['Test a valid record, a duplicate and a missing field.', 'Verify who can see the inputs and results.', 'Document monitoring, retry and fallback steps.', 'Confirm approval before enabling the live trigger.']
    },
    details: [
      {
        id: 'technical-projects',
        title: 'Technical work to scope with a specialist',
        intro: 'Bring a brief for work that needs engineering beyond a configured workflow. Define the owner, acceptance checks and maintenance plan before a technical engagement starts.',
        items: [
          ['Web and commerce development', 'Scope frontend and backend features, APIs and integrations, WordPress and WooCommerce changes, Framer pages or work in existing PHP, Laravel or React stacks.'],
          ['App and AI engineering', 'For iOS, Android or cross-platform apps, machine learning models, data science or AI integrations, document the requirements, test data, deployment owner and specialist skills needed.'],
          ['Technical operations and documentation', 'Coordinate first-line help desk triage, QA checks, issue reproduction, technical writing, release notes and handoff records with the team that owns the systems.']
        ],
        links: [['mobile-app-development.html', 'Explore mobile app development'], ['website-development.html', 'Explore website development']]
      }
    ],
    faq: [
      ['Which tasks are good starting points for workflow automation support?', 'Choose a repeatable task with stable inputs and a clear output, such as routing a form submission or compiling a scheduled report.'],
      ['Can you work in our existing automation platform?', 'Yes, subject to the tools, connection permissions and workflow complexity agreed during setup.'],
      ['How do you review AI workflow automation outputs?', 'We agree what data may be used, how outputs are checked and which drafts require human approval before sending or publishing.'],
      ['What happens when an automation fails?', 'A CRM automation support log should show the affected item, error, attempted action and next owner. We agree when to retry, pause or switch to a manual process.'],
      ['Can you automate accounting or payroll steps?', 'Administrative steps such as collecting inputs and routing approvals can be scoped. Your authorised finance owner keeps the accounting decisions and release permissions.'],
      ['Can you build a custom app or integration?', 'Share the technical brief first. We define specialist requirements, acceptance checks and who will own the release and ongoing maintenance.']
    ]
  },
  {
    id: 'ecommerce-operations',
    icon: 'pipeline',
    title: 'E-commerce operations support',
    label: 'E-commerce operations',
    tabLabel: 'Store',
    portrait: 'commerce',
    summary: 'Keep listings, orders, inventory, supplier updates and store enquiries organised across Shopify and marketplaces.',
    tasks: ['Catalogue, variants and launch preparation', 'Order processing and returns coordination', 'Stock, supplier and store reporting'],
    sample: {
      title: 'Store operations queue',
      type: 'SAMPLE · STORE REVIEW',
      rows: [['SKU', 'New variant is ready for listing review', 'Drafted'], ['Order', 'Carrier scan checked and customer updated', 'Complete'], ['Stock', 'Warehouse count differs from marketplace', 'Owner needed']],
      note: 'The store owner receives the SKU, order references, evidence and actions that require approval.'
    },
    steps: [
      ['Agree the source records', 'Identify the approved catalogue, order, stock and supplier systems and the fields the assistant can change.'],
      ['Work the agreed queues', 'Prepare listing changes, check order or stock updates and send routine replies using store policies.'],
      ['Report results and exceptions', 'Share the changes, open issues, customer commitments and the named owner for decisions.']
    ],
    tools: 'Agree access for Shopify, Amazon, WooCommerce or another marketplace, plus the order, inventory, supplier and support systems involved.',
    boundary: 'Your store owner approves pricing, claims, promotions, refunds outside policy, purchase orders, payment settings and inventory adjustments.',
    playbook: {
      copy: [
        'Hand off store updates, stock checks, fulfilment follow-ups and routine customer enquiries.',
        'Use product listing management to keep variants, prices, images and stock status consistent across your approved channels. We check order exceptions, track open supplier questions and return a list of what needs attention, with the people who can approve refunds or changes to availability marked on each item.'
      ],
      first: 'Start with one catalogue batch or one order queue.',
      input: 'SKU source, policies, sales channels, order and inventory access and approval limits.',
      cadence: 'Daily order and stock checks · weekly catalogue review',
      systems: ['Shopify, Amazon or WooCommerce', 'Order and inventory tools', 'Carrier and support systems'],
      matrix: [
        ['Catalogue and listings', 'Prepare descriptions, titles, images, variants and product attributes and check them against the master SKU list.', 'Ready-to-review listing batch', 'Prices, claims, images and publication'],
        ['Launch and marketplace upkeep', 'Prepare listing assets and approved discount codes, monitor account health and coordinate marketplace, shopping and social ad handoffs.', 'Launch checklist, live links and campaign report', 'Promotions, advertising spend, release timing and channel rules'],
        ['Orders and fulfilment', 'Check order status, coordinate routine processing and track warehouses, dropshipping partners, third-party fulfilment and carriers.', 'Updated order record with next action', 'Order amendments, cancellations and replacements'],
        ['Customer support and returns', 'Answer approved questions, track reviews and document returns, refunds or escalations in the help desk.', 'Case history and resolution or approval request', 'Exceptions, refunds and compensation'],
        ['Inventory and supplier coordination', 'Compare stock counts, flag low stock and shortages, and follow up with vendors on approved purchase orders.', 'Stock and supplier exception report', 'Reorders, purchase terms and adjustments'],
        ['Store reporting and bookkeeping handoff', 'Summarise order volume, returns and SKU issues, and organise payout and fee exports for accounting.', 'Store performance pack and payout files', 'Accounting treatment and trading decisions']
      ],
      scenarios: [
        ['Prepare a product launch', 'Check that every SKU, variant and image has an approved source. Give the store owner a preview and checklist before publication.'],
        ['Resolve a delayed delivery', 'Check the carrier and order history, send an approved update and flag any replacement or refund decision. See <a href="industry-ecommerce.html#worked-example">how a store handles a delayed order</a>.'],
        ['Track a stock discrepancy', 'Compare the channel and warehouse records, confirm the last update and route the adjustment to the inventory owner.']
      ],
      checks: ['Match orders and product edits to the correct SKU and channel.', 'Confirm the latest store policy before sending replies.', 'Record which orders or stock records were changed.', 'Give open exceptions an owner and next review date.']
    },
    faq: [
      ['Which stores can you support?', 'We scope e-commerce operations support around your Shopify, Amazon, WooCommerce or other marketplace workflow and the permissions each queue needs.'],
      ['Can product listing management include publishing?', 'We prepare and check approved product data, descriptions, assets and variants. Agree which updates the assistant can publish.'],
      ['Can you handle returns and customer enquiries?', 'We can answer approved questions and process routine steps within your rules. Exceptions go to the authorised store owner.'],
      ['Can you monitor inventory or suppliers?', 'We can compare records, flag low stock, maintain a vendor follow-up queue and report discrepancies before anyone changes stock or places an order.'],
      ['Can you help with store accounting?', 'We can organise orders, payout exports, fees and returns for bookkeeping review. See <a href="accounting-bookkeeping.html#scope">our accounting and bookkeeping scope</a> for reconciliations.'],
      ['How do we prepare for a promotion?', 'Share the dates, approved listings, expected volumes, delivery policies and escalation owners before the launch.']
    ]
  }
];
