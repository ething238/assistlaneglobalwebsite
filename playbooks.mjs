// Sample operating scopes. The controls and tool choices are agreed during discovery.
export const playbooks = {
  'administrative-support': {
    copy: [
      'Hand off inbox triage, scheduling and meeting prep. See what’s ready and what needs your judgment.',
      'An email management virtual assistant can use your priority rules to sort routine requests, draft replies and flag time-sensitive messages. You get a short brief with proposed calendar changes and the questions that need your decision.'
    ],
    first: 'Start with a daily inbox and calendar brief.',
    input: 'Priority contacts, calendar rules and examples of messages worth escalating.',
    cadence: 'Daily brief · weekly review',
    systems: ['Google Workspace or Microsoft 365', 'Shared calendar', 'Task tracker'],
    matrix: [
      ['Inbox triage', 'Sort and tag by urgency, draft routine replies and flag decisions.', 'Priority queue and reply drafts', 'Sensitive replies and new send permissions'],
      ['Calendar management', 'Check availability, place holds and resolve routine clashes.', 'Updated calendar with a change note', 'High-stakes moves and schedule exceptions'],
      ['Meeting preparation', 'Collect pre-reads, confirm attendees and prepare agendas.', 'Agenda and pre-read links', 'Agenda decisions and confidential distribution'],
      ['Meeting follow-through', 'Capture agreed actions, owners and dates.', 'Action register with follow-up dates', 'Decisions and external commitments'],
      ['Travel coordination', 'Compare routes, timing and cancellation terms.', 'Shortlist and draft itinerary', 'Purchases and exceptions to travel policy'],
      ['Document coordination', 'Gather inputs, apply naming rules and prepare review versions.', 'Organised folder and review pack', 'Access changes and final sign-off']
    ],
    scenarios: [
      ['Your inbox gets ahead of you.', 'A morning brief groups messages into decisions, drafts and items to watch. Priority contacts are flagged using rules you set.'],
      ['Every meeting creates loose ends.', 'An action register records what was agreed, who owns it and when a follow-up is due.'],
      ['The week keeps reshuffling.', 'Calendar changes come with a short note about what moved, what conflicts and what still needs confirmation.']
    ],
    checks: ['Confirm time zone, invitees and meeting links.', 'Flag anything that requires a response in your voice.', 'Record changes that affect another person’s calendar.', 'Review open actions before the weekly handoff.'],
    extraFAQ: ['Can you support more than one executive?', 'Scope the inboxes, calendars, priority rules and coverage for each person. Agree who resolves conflicts between competing requests.']
  },
  'customer-support': {
    copy: [
      'A customer service virtual assistant triages requests, drafts replies and sends exceptions to the person who can resolve them.',
      'With outsourced customer support services, we work in your shared inbox or help desk, check order details and follow your reply guidelines. Your team sees the cases we closed, the promises still due and any refunds waiting for approval.'
    ],
    first: 'Start with one queue and a reviewed set of reply templates.',
    input: 'Common enquiries, response policy, coverage window and a list of escalation owners.',
    cadence: 'Queue sweeps · exception review',
    systems: ['Shared inbox or help desk', 'Knowledge base', 'Order system with scoped access'],
    matrix: [
      ['Intake and triage', 'Classify incoming requests and check for duplicate tickets.', 'Categorised queue with named owners', 'Priority and coverage rules'],
      ['Routine replies', 'Use approved templates and verify details against the source record.', 'Reply and resolution note', 'Sensitive or ambiguous communications'],
      ['Order enquiries', 'Check order state and explain documented next steps.', 'Order-status update and case note', 'Refunds or changes beyond agreed limits'],
      ['Escalations', 'Summarise history, evidence and the decision needed.', 'Escalation brief with a next owner', 'Policy exceptions and complaints'],
      ['Knowledge base upkeep', 'Flag repeat questions and draft corrections.', 'Article change request', 'Final policy wording and publishing'],
      ['Queue reporting', 'Summarise open items by age, topic and reason blocked.', 'Queue health report', 'Service targets and staffing decisions']
    ],
    scenarios: [
      ['Customers are repeating themselves.', 'Link duplicate tickets and carry the full context into the reply or escalation.'],
      ['Refunds are piling up.', 'Separate routine questions from policy exceptions and hand off each exception with the order details and decision needed.'],
      ['Nobody can see the backlog.', 'Group open requests by age, reason and owner so the team knows what to resolve first.']
    ],
    checks: ['Verify the customer and source record before replying.', 'Keep template wording aligned with the current policy.', 'Identify the next owner on every escalated ticket.', 'Review a sample of replies for accuracy and tone.'],
    extraFAQ: ['Can you handle a new product launch?', 'Agree expected volumes, an escalation contact, temporary reply templates and the coverage window before opening the queue.']
  },
  'crm-lead-operations': {
    copy: [
      'A CRM virtual assistant keeps contact records clean, routes leads and tracks follow-ups in a pipeline your sales team can review.',
      'With CRM data entry services, we verify new contact fields against your intake records and flag missing information before it stalls a follow-up. Your sales team gets a list of proposed merges alongside the records that still need an owner.'
    ],
    first: 'Start with a sample of recent enquiries and overdue follow-ups.',
    input: 'CRM fields, pipeline stage definitions, routing rules and ownership exceptions.',
    cadence: 'Lead intake · weekly pipeline review',
    systems: ['HubSpot, Salesforce or existing CRM', 'Lead forms', 'Reporting sheet'],
    matrix: [
      ['Lead intake', 'Verify required fields and check for an existing contact.', 'Clean lead record with source noted', 'Changes to intake criteria'],
      ['Routing', 'Apply territory, product or queue rules and assign a next owner.', 'Owner and next action on the record', 'Unassigned or ambiguous accounts'],
      ['Follow-up tracking', 'Add due dates and flag overdue activities.', 'Follow-up queue with reasons blocked', 'Messaging and outreach decisions'],
      ['Record cleanup', 'Identify missing data, inconsistent tags and duplicate candidates.', 'Cleanup batch with an audit note', 'Bulk edits, merges and deletions'],
      ['Stage hygiene', 'Check stage changes against the approved definitions.', 'Stage exceptions and stale deals list', 'Forecast and qualification decisions'],
      ['Pipeline reporting', 'Summarise intake, overdue actions and owner gaps.', 'Weekly exceptions and activity report', 'Revenue forecasts and targets']
    ],
    scenarios: [
      ['A lead arrives with no owner.', 'Check the intake fields, apply the assignment rule and flag incomplete records for review.'],
      ['A report disagrees with the CRM.', 'Trace the fields and filters that drive it before changing definitions or editing records.'],
      ['Two records look like one company.', 'Identify the matching details and record what would change before asking for merge approval.']
    ],
    checks: ['Preserve the source and timestamp of new records.', 'Check owner, next action and due date before closing intake.', 'Preview bulk edits on a small batch.', 'Flag unclear consent or outreach permissions.'],
    extraFAQ: ['Can we keep our existing pipeline stages?', 'Yes. Start from your current stage definitions and document ambiguous transitions before changing records or reports.']
  },
  'marketing-content': {
    copy: [
      'Turn briefs into an editorial calendar. Keep assets, approvals and published links in one place.',
      'An email marketing virtual assistant can prepare newsletters and test links. We can also format approved LinkedIn posts, graphics and short videos for the channels you use. You review the copy, audience and schedule, and we keep a record of what goes live.'
    ],
    first: 'Start with an approved publishing queue and one named reviewer.',
    input: 'Brand guidelines, channel access, source files, format rules and approval owners.',
    cadence: 'Editorial planning · publication checks',
    systems: ['Editorial calendar', 'Asset library', 'Email and social publishing tools'],
    matrix: [
      ['Editorial planning', 'Convert briefs into items with owners, dates and dependencies.', 'Editorial calendar and status view', 'Campaign priorities and dates'],
      ['Asset coordination', 'Collect approved images, copy and references.', 'Versioned asset folder', 'Rights, claims and brand exceptions'],
      ['Review routing', 'Prepare a review pack and track requested changes.', 'Approval history and decision log', 'Final copy and creative approval'],
      ['Email preparation', 'Assemble content, check links and prepare a test send.', 'Preview and QA checklist', 'Audience choice and send approval'],
      ['Social scheduling', 'Format approved assets for each channel and schedule.', 'Scheduled items and live URLs', 'New messaging or sensitive replies'],
      ['Publishing report', 'Summarise what shipped, slipped and needs attention.', 'Weekly publication and exceptions report', 'Strategy and budget changes']
    ],
    scenarios: [
      ['Drafts are stuck in review.', 'Give each piece one reviewer, a due date and a place to record the decision.'],
      ['Assets live in too many folders.', 'Create a source list and distinguish the approved versions from working files.'],
      ['A newsletter is ready to send.', 'Verify the audience, links and preview. Record the approval before scheduling.']
    ],
    checks: ['Confirm the reviewer has approved the current version.', 'Verify links, images and rights before publication.', 'Check channel-specific formatting and mobile previews.', 'Record the final live URL and flag missing assets.'],
    extraFAQ: ['Can you run paid ads or define our strategy?', 'Scope execution separately from strategy, ad spend and specialist production. Identify who owns budget and performance decisions.']
  },
  'seo-wordpress': {
    copy: [
      'An SEO virtual assistant prepares approved WordPress updates, checks staging and records what changed when a page goes live.',
      'Our website content update services cover page titles, internal links, images and responsive checks. You get a preview and a list of proposed changes, so your team can approve the page before publication and check the live result afterward.'
    ],
    first: 'Start with one approved page and a checklist for repeatable edits.',
    input: 'Page brief, approved assets, editor permissions and publishing rules.',
    cadence: 'Publishing queue · change review',
    systems: ['WordPress', 'Staging or preview access', 'Search Console, if authorised'],
    matrix: [
      ['Page preparation', 'Format approved text and assets in the designated editor.', 'Preview link and formatted draft', 'Final messaging and layout exceptions'],
      ['On-page updates', 'Apply approved headings, metadata, alt text and internal links.', 'Page checklist and edit summary', 'Keyword strategy and indexing decisions'],
      ['Preflight QA', 'Check responsive layout, links and calls to action.', 'Pass list and blockers', 'Acceptance of known issues'],
      ['Publication', 'Publish the reviewed version and check the live URL.', 'Live URL and publication timestamp', 'Final approval and release timing'],
      ['Change records', 'Log pages updated, reasons and follow-up checks.', 'Searchable release record', 'Rollback and incident decisions'],
      ['Issue triage', 'Record symptoms, affected pages and steps to reproduce.', 'Issue report for the right specialist', 'Theme, plugin, migration and code changes']
    ],
    scenarios: [
      ['A page is approved but still in a document.', 'Your WordPress virtual assistant creates a preview, checks the layout and links, and requests sign-off.'],
      ['A routine update could affect search visibility.', 'Flag changes to URLs, canonical tags or indexing rules for specialist review.'],
      ['A live page looks wrong on mobile.', 'Record the viewport and steps to reproduce, then route the issue with the change history.']
    ],
    checks: ['Compare the preview with the approved source.', 'Check desktop and mobile views before release.', 'Confirm the live URL and page state after publication.', 'Record redirects or indexing changes only when approved.'],
    extraFAQ: ['Can you make changes to a live WordPress site?', 'Agree which edits can go straight to review and which need staging, a rollback plan or specialist approval.']
  }
};

export const sampleSchedules = [
  ['Daily', 'Inbox, support queue and lead intake', 'A short brief with new items, completed work, owners and decisions.'],
  ['Weekly', 'Pipeline hygiene, editorial planning and site updates', 'A summary of changes, what’s blocked and the next review date.'],
  ['As needed', 'Refund exceptions, urgent calendar changes and publishing risks', 'A handoff with the context, decision required and named approver.']
];
