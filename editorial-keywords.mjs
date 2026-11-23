// Reviewed copy edits keep each page's existing primary phrase in useful context.
// Density uses keyword-word coverage in editorial copy, not phrase frequency.
import { pageSEO } from './seo.mjs';
import { specialistPageSEO } from './specialist-seo.mjs';

export const primaryKeywords = Object.fromEntries(
  Object.entries({...pageSEO, ...specialistPageSEO})
    .filter(([, settings])=>settings.keywords?.length)
    .map(([file, settings])=>[file, settings.keywords[0]])
);

export function editorialMinimum(file) {
  const phrase=primaryKeywords[file];
  if(!phrase) return 1510;
  const length=phrase.split(/\s+/).length;
  return length===5 ? 1710 : length===4 ? 1565 : 1610;
}

export function keywordMetrics(tokens, file) {
  const keyword=primaryKeywords[file];
  if(!keyword) return {file, keyword:null, status:'No primary keyword configured'};
  const phrase=keyword.toLowerCase().split(/\s+/);
  const words=tokens.map(token=>token.toLowerCase());
  let mentions=0;
  for(let i=0;i<=words.length-phrase.length;i++) {
    if(phrase.every((word,j)=>word===words[i+j])) mentions++;
  }
  return {file, keyword, mentions, keywordWords:phrase.length, editorialWords:words.length,
    wordCoveragePercent:mentions*phrase.length*100/words.length,
    phraseFrequencyPercent:mentions*100/words.length};
}

export const keywordCopy = {
  'index.html': [
    ['<em>Virtual assistants</em> for your growing business.', 'A <em>virtual assistant agency</em> for your growing business.'],
    ['Get help with your inbox, calendar, customers and everyday tasks.', 'Our virtual assistant agency helps with your inbox, calendar, customers and everyday tasks.'],
    ['Choose the support you need. Start with one task or a regular workload.', 'Choose the support you need from our virtual assistant agency. Start with one task or a regular workload.'],
    ['AssistLane Global supports founders and growing teams', 'Our virtual assistant agency supports founders and growing teams'],
    ['The best first task is one your team already understands.', 'A virtual assistant agency can start with a task your team already understands.'],
    ['In this fictional example, teams share one log and keep separate approval rules.', 'See how a virtual assistant agency can coordinate teams in this fictional example. They share one log and keep separate approval rules.'],
    ['Choose a request that usually goes well. Show the inputs', 'Give your virtual assistant agency a request that usually goes well. Show the inputs'],
    ['Decide which system owns each field.', 'Agree with your virtual assistant agency which system owns each field.'],
    ['A short review helps separate a poorly defined task from a mistake in the work.', 'A short review with your virtual assistant agency helps separate a poorly defined task from a mistake in the work.'],
    ['Start with the amount of work you can explain and review, then decide whether a wider scope makes sense.', 'Ask your virtual assistant agency to start with work you can explain and review, then decide whether a wider scope makes sense.'],
    ['Email or call us with the task you want help with.', 'Contact our virtual assistant agency by email or phone with the task you want help with.']
  ],
  'services.html': [
    ['When a task moves between tools or teams, define where each handoff happens', 'When virtual assistant services span tools or teams, define where each handoff happens'],
    ['Write down what needs doing, what a finished result looks like', 'Scope virtual assistant services by writing down what needs doing, what a finished result looks like'],
    ['The service names describe different kinds of work, but an output usually makes the choice clearer.', 'Compare virtual assistant services by their outputs, rather than choosing from service names alone.'],
    ['A request can involve several tools and still have one main result.', 'Virtual assistant services can involve several tools and still have one main result.'],
    ['Record the time zone and what makes the request urgent.', 'For virtual assistant services, record the time zone and what makes a request urgent.'],
    ['When requests begin to involve a different system or level of judgment, revisit the agreement.', 'Revisit the agreement when virtual assistant services involve a different system or level of judgment.'],
    ['Start with a repeatable task, a clear input and a result you can check.', 'Start virtual assistant services with a repeatable task, a clear input and a result you can check.']
  ],
  'administrative-support.html': [
    ['An email management virtual assistant can use your priority rules', 'An administrative virtual assistant can use your priority rules'],
    ['Use this scope to decide what goes into the queue', 'Use this scope to decide what your administrative virtual assistant handles in the queue'],
    ['Define how an executive virtual assistant fits your coverage', 'Define how an administrative virtual assistant fits your coverage'],
    ['The assistant can prepare options and coordinate approved arrangements', 'An administrative virtual assistant can prepare options and coordinate approved arrangements'],
    ['A morning brief groups messages into decisions', 'An administrative virtual assistant groups messages into decisions'],
    ['An executive shares an inbox and calendar with an assistant for a sample two-week pilot.', 'An executive shares an inbox and calendar with an administrative virtual assistant for a sample two-week pilot.'],
    ['At the start of the agreed window, check new messages', 'At the start of the agreed window, the administrative virtual assistant checks new messages'],
    ['Use separate rules for drafting, sending and changing an invitation.', 'Give your administrative virtual assistant separate rules for drafting, sending and changing an invitation.'],
    ['Give the assistant rules for which meetings can move', 'Give your administrative virtual assistant rules for which meetings can move'],
    ['Include upcoming commitments, items that need a decision, and actions that are waiting on another person.', 'Ask your administrative virtual assistant to include upcoming commitments, items that need a decision, and actions waiting on another person.']
  ],
  'customer-support.html': [
    ['Use this scope to decide what goes into the queue', 'Use this scope to decide what your customer service virtual assistant handles in the queue'],
    ['Collect approved intake fields, coordinate setup calls and track open tasks.', 'A customer service virtual assistant can collect approved intake fields, coordinate setup calls and track open tasks.'],
    ['Check the order reference and match the new ticket to the existing conversation.', 'The customer service virtual assistant checks the order reference and matches the new ticket to the existing conversation.'],
    ['Supply approved examples for common requests and explain where they can be personalised.', 'Give your customer service virtual assistant approved examples for common requests and explain where they can be personalised.'],
    ['Review a small sample against the actual policy and source records.', 'Review a small sample from your customer service virtual assistant against the actual policy and source records.'],
    ['Start with the queues, permissions and status rules you already use.', 'Your customer service virtual assistant can start with the queues, permissions and status rules you already use.']
  ],
  'crm-lead-operations.html': [
    ['Use this scope to decide what goes into the queue', 'Use this scope to decide what your CRM virtual assistant handles in the queue'],
    ['Maintain stages, owners, due dates and activity reports.', 'A CRM virtual assistant maintains stages, owners, due dates and activity reports.'],
    ['Search the CRM using the email and organisation.', 'The CRM virtual assistant searches using the email and organisation.'],
    ['Set a task with a due date, give the owner the enquiry context and record any follow-up', 'The CRM virtual assistant sets a task with a due date, gives the owner the enquiry context and records any follow-up'],
    ['Provide the approved rules for assigning new enquiries', 'Give your CRM virtual assistant the approved rules for assigning new enquiries'],
    ['Compare a small set of updates with the original source.', 'Compare a small set of updates from your CRM virtual assistant with the original source.'],
    ['Agree the fields and cleanup rules, then review a small batch before making larger changes.', 'Give your CRM virtual assistant the agreed fields and cleanup rules, then review a small batch before making larger changes.']
  ],
  'marketing-content.html': [
    ['A social media virtual assistant can keep LinkedIn content and conversations organised.', 'A marketing virtual assistant can keep LinkedIn content and conversations organised.'],
    ['Record the audience, objective, source article, two output formats and final reviewer.', 'Give your marketing virtual assistant the audience, objective, source article, two output formats and final reviewer.'],
    ['Show a completed example so the assistant can tell', 'Show a completed example so your marketing virtual assistant can tell']
  ],
  'seo-wordpress.html': [
    ['A WordPress virtual assistant can format drafts', 'An SEO virtual assistant can format drafts'],
    ['Your WordPress virtual assistant creates a preview', 'Your SEO virtual assistant creates a preview'],
    ['Use this scope to decide what goes into the queue', 'Use this scope to decide what your SEO virtual assistant handles in the queue'],
    ['Open the correct page in the agreed editor and confirm which fields may be changed.', 'The SEO virtual assistant opens the correct page in the agreed editor and confirms which fields may be changed.'],
    ['Compare the preview with the source brief.', 'Review the preview from your SEO virtual assistant against the source brief.'],
    ['Confirm the approved version and release time.', 'Give your SEO virtual assistant the approved version and release time.'],
    ['Include the latest version, the source link and the current status.', 'Ask your SEO virtual assistant to include the latest version, the source link and the current status.'],
    ['Record which rule changed, who approved it and when it starts.', 'Tell your SEO virtual assistant which rule changed, who approved it and when it starts.'],
    ['Group approved formatting changes, image updates and link checks into a small batch.', 'Give your SEO virtual assistant a small batch of approved formatting changes, image updates and link checks.']
  ],
  'recruiting-people-operations.html': [
    ['Recruiting and people operations support keeps those details in one record', 'The shared hiring tracker keeps those details in one record']
  ],
  'workflow-automation.html': [
    ['Workflow automation support makes each outcome visible', 'AI workflow automation makes each outcome visible'],
    ['Workflow automation support can arrange a limited pilot', 'AI workflow automation can start with a limited pilot'],
    ['Workflow automation support starts with scoped permissions', 'AI workflow automation starts with scoped permissions']
  ],
  'ecommerce-operations.html': [
    ['Identify the approved catalogue, order, stock and supplier systems', 'For e-commerce operations support, identify the approved catalogue, order, stock and supplier systems'],
    ['We prepare and check approved product data, descriptions, assets and variants.', 'E-commerce operations support can prepare and check approved product data, descriptions, assets and variants.']
  ],
  'accounting-bookkeeping.html': [
    ['Open the topics that matter to your team.', 'Explore the accounting and bookkeeping support topics that matter to your team.']
  ],
  'industries.html': [
    ['Compare virtual assistant services by industry', 'Compare specialized virtual assistant services by industry'],
    ['Match the support to your working day,', 'Match specialized virtual assistant services to your working day,'],
    ['These examples show how the work changes with the tools, approval rules and responsibilities of the business.', 'These examples show how specialized virtual assistant services adapt to the tools, approval rules and responsibilities of a business.'],
    ['Start with a real example and name the tools,', 'Scope specialized virtual assistant services with a real example and name the tools,'],
    ['Start with the work itself. A recurring queue, calendar or review process', 'Choose specialized virtual assistant services around the work itself. A recurring queue, calendar or review process'],
    ['The assistant may need to view a record or draft an update before they need permission to change it.', 'Specialized virtual assistant services may begin with viewing records or drafting updates before permission to change them is needed.']
  ],
  'industry-finance.html': [
    ['An accounts payable virtual assistant can check incoming bills', 'A finance virtual assistant can check incoming bills'],
    ['A financial services virtual assistant can coordinate routine records', 'A finance virtual assistant can coordinate routine records'],
    ['Use this example scope to agree the work, the deliverable and who makes the final decision.', 'Agree the work, deliverable and decision limits for your finance virtual assistant.'],
    ['The assistant prepares an exception for review.', 'The finance virtual assistant prepares an exception for review.'],
    ['The assistant can document the request but should not update payment details', 'The finance virtual assistant can document the request but should not update payment details'],
    ['An assistant can organise documents, flag missing details', 'A finance virtual assistant can organise documents, flag missing details'],
    ['An assistant can collect inputs and flag exceptions', 'A finance virtual assistant can collect inputs and flag exceptions'],
    ['which fields the assistant is allowed to update.', 'which fields the finance virtual assistant is allowed to update.'],
    ['Your financial services virtual assistant can maintain a log', 'Your finance virtual assistant can maintain a log']
  ],
  'industry-real-estate.html': [
    ['the assistant cannot verify under the normal rules.', 'the real estate virtual assistant cannot verify under the normal rules.'],
    ['The assistant can record the message and route it with context.', 'The real estate virtual assistant can record the message and route it with context.'],
    ['A virtual assistant for realtors can log enquiry sources,', 'A real estate virtual assistant can log enquiry sources,']
  ],
  'industry-ecommerce.html': [
    ['A virtual assistant for online store support can prepare descriptions,', 'An ecommerce virtual assistant can prepare descriptions,'],
    ['the fields the assistant can change and the supplier contact route.', 'the fields the ecommerce virtual assistant can change and the supplier contact route.'],
    ['A virtual assistant for online store support can organise those details', 'An ecommerce virtual assistant can organise those details'],
    ['Match the ticket to the order and check tracking against the carrier record.', 'The ecommerce virtual assistant matches the ticket to the order and checks tracking against the carrier record.']
  ],
  'industry-agencies-publications.html': [
    ['A virtual assistant for creative agencies can organise drafts,', 'A marketing agency virtual assistant can organise drafts,'],
    ['Use this example scope to agree the work, the deliverable and who makes the final decision.', 'Agree the work, deliverable and decision limits for your marketing agency virtual assistant.'],
    ['Give the assistant a clear route to reach that owner.', 'Give the marketing agency virtual assistant a clear route to reach that owner.'],
    ['An agency is preparing a landing page for one client and an editorial release for another.', 'A marketing agency virtual assistant is coordinating a landing page for one client and an editorial release for another.'],
    ['A virtual assistant for marketing agencies can maintain a shared calendar', 'A marketing agency virtual assistant can maintain a shared calendar']
  ],
  'industry-ai-technology.html': [
    ['A virtual assistant for software companies can record where a demo request came from,', 'A SaaS virtual assistant can record where a demo request came from,'],
    ['Use this example scope to agree the work, the deliverable and who makes the final decision.', 'Agree the work, deliverable and decision limits for your SaaS virtual assistant.'],
    ['A virtual assistant for software companies can run documented QA checks,', 'A SaaS virtual assistant can run documented QA checks,'],
    ['A virtual assistant for tech startups can coordinate investor and board calendars,', 'A SaaS virtual assistant can coordinate investor and board calendars,'],
    ['before the assistant schedules or publishes it.', 'before the SaaS virtual assistant schedules or publishes it.'],
    ['A virtual assistant for software companies should use current approved guidance', 'A SaaS virtual assistant should use current approved guidance'],
    ['Your virtual assistant for tech startups can check intake details,', 'Your SaaS virtual assistant can check intake details,']
  ],
  'industry-professional-services.html': [
    ['A client intake virtual assistant can schedule first meetings,', 'A virtual assistant for consultants can schedule first meetings,'],
    ['Use this example scope to agree the work, the deliverable and who makes the final decision.', 'Agree what your virtual assistant for consultants handles, the deliverable and who makes the final decision.'],
    ['The assistant’s role is to route the request,', 'The virtual assistant for consultants can route the request,'],
    ['whether an assistant can move, copy or remove files', 'whether a virtual assistant for consultants can move, copy or remove files'],
    ['The assistant can prepare drafts and track status.', 'The virtual assistant for consultants can prepare drafts and track status.'],
    ['Give the assistant the approved appointment windows', 'Give your virtual assistant for consultants the approved appointment windows']
  ],
  'industry-healthcare.html': [
    ['Scope remote practice administration around patient scheduling, referrals, insurance paperwork and billing follow-up.', 'Scope a healthcare virtual assistant role around patient scheduling, referrals, insurance paperwork and billing follow-up.'],
    ['Use this example scope to agree the work, the deliverable and who makes the final decision.', 'Agree the work, deliverable and decision limits for your healthcare virtual assistant.'],
    ['Use the approved scheduling script and appointment categories.', 'Give your healthcare virtual assistant the approved scheduling script and appointment categories.'],
    ['We can track balances, claim status and missing evidence for your billing team.', 'A healthcare virtual assistant can track balances, claim status and missing evidence for your billing team.'],
    ['The assistant records and routes the question using the approved escalation process.', 'The healthcare virtual assistant records and routes the question using the approved escalation process.']
  ],
  'industry-legal.html': [
    ['Keep intake, matter files, approved research, deadlines and billing administration organised for the responsible lawyer.', 'A legal virtual assistant keeps intake, matter files, approved research, deadlines and billing administration organised for the responsible lawyer.'],
    ['Use this example scope to agree the work, the deliverable and who makes the final decision.', 'Agree the work, deliverable and decision limits for your legal virtual assistant.'],
    ['We can compile approved sources and organise notes for the responsible professional to review and interpret.', 'A legal virtual assistant can compile approved sources and organise notes for the responsible professional to review and interpret.']
  ],
  'industry-construction-field-services.html': [
    ['We handle field service scheduling and track enquiries, estimates, supplier updates, project records and billing across sites.', 'A construction virtual assistant handles field service scheduling and tracks enquiries, estimates, supplier updates, project records and billing across sites.'],
    ['Use this example scope to agree the work, the deliverable and who makes the final decision.', 'Agree the work, deliverable and decision limits for your construction virtual assistant.'],
    ['Confirm the site, scope reference, requester and decision owner.', 'Give your construction virtual assistant the site, scope reference, requester and decision owner.'],
    ['We can gather inputs, track quotes and format approved estimate drafts for your qualified reviewer.', 'A construction virtual assistant can gather inputs, track quotes and format approved estimate drafts for your qualified reviewer.'],
    ['Yes. We can confirm agreed milestones, log delays and flag the jobs affected by a change.', 'Yes. Your construction virtual assistant can confirm agreed milestones, log delays and flag the jobs affected by a change.']
  ],
  'industry-nonprofits-membership.html': [
    ['Give donor, volunteer, grant, event and member administration a clear workflow and review owner.', 'Give your nonprofit virtual assistant a clear workflow and review owner for donor, volunteer, grant, event and member administration.'],
    ['Use this example scope to agree the work, the deliverable and who makes the final decision.', 'Agree the work, deliverable and decision limits for your nonprofit virtual assistant.'],
    ['Provide the permitted CRM fields, consent and contact preferences,', 'Give your nonprofit virtual assistant the permitted CRM fields, consent and contact preferences,'],
    ['We can compile sourced opportunities and deadlines, gather approved inputs and route a draft pack to your reviewer.', 'A nonprofit virtual assistant can compile sourced opportunities and deadlines, gather approved inputs and route a draft pack to your reviewer.'],
    ['We can coordinate calendars, guest or participant updates, vendor follow-ups and the review checklist.', 'A nonprofit virtual assistant can coordinate calendars, guest or participant updates, vendor follow-ups and the review checklist.']
  ],
  'industry-startups-small-business.html': [
    ['A virtual assistant for small businesses can give customer replies,', 'A startup virtual assistant can give customer replies,'],
    ['Use this example scope to agree the work, the deliverable and who makes the final decision.', 'Agree the work, deliverable and decision limits for your startup virtual assistant.'],
    ['Give the assistant a list of urgent decisions,', 'Give your startup virtual assistant a list of urgent decisions,'],
  ],
  'how-it-works.html': [
    ['Start with a clear scope, test a small handoff and decide how everyday work gets assigned, reviewed and improved.', 'Our virtual assistant onboarding process starts with a clear scope and a small handoff. Agree how everyday work gets assigned, reviewed and improved.'],
    ['What happens at each stage', 'The virtual assistant onboarding process, step by step'],
    ['Use the first conversation to choose the work, identify the person who can review it and agree a small example.', 'Begin the virtual assistant onboarding process by choosing the work, identifying the person who can review it and agreeing a small example.'],
    ['Choose the first output and the person who will review it.', 'During the virtual assistant onboarding process, choose the first output and the person who will review it.'],
    ['The first pass is a chance to test the workflow from intake to review.', 'The virtual assistant onboarding process includes a first pass to test the workflow from intake to review.'],
    ['A change in coverage, priority or personnel can disrupt a workflow if the current state lives in messages or personal notes.', 'Revisit the virtual assistant onboarding process when coverage, priorities or personnel change. A workflow is harder to continue if its current state lives in messages or personal notes.'],
    ['Your virtual assistant onboarding checklist should include a normal request, an exception, the expected output and the responsible reviewer.', 'For the virtual assistant onboarding process, prepare a normal request, an exception, the expected output and the responsible reviewer.']
  ],
  'pricing.html': [
    ['Use discovery to define a scope you can compare:', 'Discuss virtual assistant pricing through discovery and define a scope you can compare:'],
    ['What affects the cost', 'What affects virtual assistant pricing'],
    ['Expected volume, regular hours, time zone overlap and how quickly a task needs attention.', 'Virtual assistant pricing depends on expected volume, regular hours, time zone overlap and how quickly a task needs attention.'],
    ['The systems involved, the level of specialist input and whether work spans several functions.', 'Virtual assistant pricing also reflects the systems involved, the level of specialist input and whether work spans several functions.'],
    ['Documentation, onboarding, quality review, reporting and access setup.', 'Ask whether virtual assistant pricing includes documentation, onboarding, quality review, reporting and access setup.'],
    ['Use examples of the work rather than one total for the whole queue.', 'Discuss virtual assistant pricing using examples of the work rather than one total for the whole queue.'],
    ['Confirm what happens to instructions, open items and access if the scope ends or moves to another person.', 'When reviewing virtual assistant pricing, confirm what happens to instructions, open items and access if the scope ends or moves to another person.'],
    ['A recurring task can have predictable peaks and unexpected exceptions.', 'A recurring task can have predictable peaks and unexpected exceptions that affect virtual assistant pricing.'],
    ['Review the quote against the first month’s work.', 'Review virtual assistant pricing against the first month’s work.'],
    ['Check the minimum term, notice period and cancellation rules in the proposed agreement.', 'Assess virtual assistant pricing alongside the minimum term, notice period and cancellation rules in the proposed agreement.']
  ],
  'about.html': [
    ['AssistLane Global provides virtual assistant support for founders and growing teams.', 'AssistLane Global is a virtual assistant company supporting founders and growing teams.'],
    ['Your virtual assistant team starts with a real example from your day.', 'Our virtual assistant company starts with a real example from your day.'],
    ['We help teams hand off recurring work.', 'How our virtual assistant company helps.'],
    ['We help define a handoff with a clear owner,', 'Our virtual assistant company helps define a handoff with a clear owner,'],
    ['The people involved depend on the workflow.', 'Within our virtual assistant company, the people involved depend on the workflow.'],
    ['Here’s how roles could work together on a recurring client update.', 'Here’s how roles at a virtual assistant company could work together on a recurring client update.'],
    ['Look for a fit in the work itself.', 'Choose a virtual assistant company around the work itself.'],
    ['Check how much time goes to correcting the result or finding missing information.', 'When reviewing a virtual assistant company, check how much time goes to correcting the result or finding missing information.'],
    ['What you can learn in the first conversation.', 'What to ask a virtual assistant company.']
  ],
  'trust.html': [
    ['Use these questions to set permissions, review points and handover responsibilities before sharing accounts or records.', 'Plan virtual assistant data security by setting permissions, review points and handover responsibilities before sharing accounts or records.'],
    ['The access model', 'The access model for virtual assistant data security'],
    ['A queue may need to reference a customer ticket, an invoice or a private document.', 'Virtual assistant data security starts with deciding what a queue needs to reference: a customer ticket, an invoice or a private document.'],
    ['Include the named account, system, role, reason for access and who approved it.', 'For virtual assistant data security reviews, include the named account, system, role, reason for access and who approved it.'],
    ['Ask the relevant owner which tools can receive the information.', 'Support virtual assistant data security by asking the relevant owner which tools can receive the information.'],
    ['After the owner responds, update the record with what was approved and who will verify it.', 'Keep the virtual assistant data security record current: after the owner responds, note what was approved and who will verify it.'],
    ['Identify those tasks during scope and agree the approver and how approval is recorded.', 'For virtual assistant data security, identify those tasks during scope and agree the approver and how approval is recorded.']
  ],
  'contact.html': [
    ['Tell us about the task, your current tools and the result you want.', 'Use this page as a written virtual assistant task planner. Tell us about the task, your current tools and the result you want.'],
    ['Bring one practical example.', 'Start your virtual assistant task planner with one example.'],
    ['A short brief works best when a reader can tell what to do first.', 'A written virtual assistant task planner works best when a reader can tell what to do first.'],
    ['Describe a normal day and a busy day using a recent range.', 'In your virtual assistant task planner, describe a normal day and a busy day using a recent range.'],
    ['If the result took time to review, show which part was hard to use.', 'Use your virtual assistant task planner to note which part of the result was hard to review.'],
    ['Note the days and channels that usually produce requests.', 'Record in your virtual assistant task planner the days and channels that usually produce requests.'],
    ['Read the brief as the person who will use it.', 'Review your virtual assistant task planner.'],
    ['A virtual assistant task brief should name what arrives, what action is needed and what should come back.', 'Your virtual assistant task planner should name what arrives, what action is needed and what should come back.']
  ]
};

export const keywordNotes = {
  'pricing.html': [{title:'Record the assumptions behind the quote',copy:'Keep the workload sample with the proposal. Note which tasks were included, which were excluded and when the estimate was prepared. If actual demand differs, compare the new requests with that sample before agreeing a change. This gives both teams a practical starting point for the next review.'}],
  'trust.html': [{title:'Check a handover before closing access',copy:'Choose one open item and confirm the next owner can reach its approved source. Record what remains unresolved and where the response should go. Ask the account owner to verify that the outgoing role has been removed, then save the confirmation beside the handover record.'}],
  'industry-healthcare.html': [{title:'Prepare a change of shift',copy:'Before the practice changes shifts, separate confirmed appointments from requests still waiting on a document or decision. Check that each open item has the practice reference, next action and approved contact route. Avoid including clinical details in a general status message. Tell the receiving owner when the patient was last contacted and whether another update was promised. If a referral or billing question remains unresolved, keep it in its own queue with the responsible reviewer. A shift handover should help the next person continue the existing conversation without asking the patient to repeat their request.'}],
  'industry-legal.html': [{title:'Review an open matter handover',copy:'Before a matter changes hands, compare the current file list with the approved checklist. Identify missing documents, unanswered requests and reminders awaiting confirmation. Keep the original correspondence available to the authorised reviewer, with its date and source intact. Explain what the client has already been told and when the next response is due. The receiving professional should be able to distinguish completed administration from a decision that still requires their judgment.'}],
  'industry-construction-field-services.html': [{title:'Prepare the next site update',copy:'Before sending a job update, check the latest approved schedule and the date of the supplier confirmation. Separate a proposed delivery window from one the site lead has accepted. Record which crew, customer or subcontractor has already received the previous plan so the owner can identify who needs an update. Keep an unresolved drawing, access or scope question visible beside the affected activity. After approval, log the message and confirmation in the job record. This gives the next coordinator a reliable starting point when a customer calls or another delivery changes during the working day.'}],
  'industry-nonprofits-membership.html': [{title:'Prepare the next programme handover',copy:'Before an event or renewal deadline, review the current roster and communications list with the programme owner. Separate people awaiting a reply from tasks awaiting an internal decision. Record which reminder was approved, when it was sent and who will handle the next response. Keep donor preferences and restricted information in their designated system. For a grant deadline, link the original guidance and the version already reviewed, then list outstanding questions for the appropriate owner. A useful handover lets a colleague continue the agreed work while preserving the context of each conversation and the organisation’s approval rules.'}]
};

const copyPolish = {
  'index.html': [
    ['a practical way to help.', 'a practical way to help your team with its everyday workload.'],
    ['Think about when the work arrives and when someone needs to act on it. A short daily update may suit a busy inbox, while a weekly review may suit research or publishing coordination. Explain which requests can wait and which should reach a named person promptly. If your priorities change, update the task list and the review schedule together. This helps your team understand the available support without treating every message as an urgent interruption. The right arrangement depends on the work you agree, rather than a promise of unlimited availability.', 'Plan support around when work arrives and when someone needs to act. Use a daily update for an inbox or a weekly review for research and publishing. Name urgent requests, identify the person who handles them and update the task list and review schedule. Agree coverage around the work instead of expecting every message to receive an immediate response.']
  ],
  'services.html': [['Start with one recurring task that you can explain and review.', 'Start with one recurring task that you can explain and review using the tools your team already knows.']],
  'administrative-support.html': [['Open the topics that matter to your team. These details explain how to prepare the work, review results and handle changes.', 'Prepare and review work.']],
  'customer-support.html': [['In this example, a customer writes to the support inbox about a delayed order, then opens a second ticket from another channel. The first response should reflect the latest order record, avoid duplicate promises and leave a clear owner for any exception. The same pattern works for a delayed service appointment.', 'A customer asks about a delay on two channels. Connect replies and assign exception owners.']],
  'crm-lead-operations.html': [['A populated stage does not help if nobody knows who should act.', 'A populated stage does not help if nobody knows who should act. Check the due date again after an owner changes.']],
  'marketing-content.html': [['Identify the folder or system that holds approved copy, images and templates.', 'Identify the folder or system that holds approved copy, images and templates. Before a campaign is scheduled, check the destination of every link and the version of each asset. Record what changed after review so the next item starts with current, approved wording, images and audience assumptions.']],
  'seo-wordpress.html': [['Keep any out-of-scope layout or plugin question in a separate note.', 'Keep any out-of-scope layout or plugin question in a separate note. Keep the preview beside the brief.']],
  'industries.html': [['Yes. Define each workflow separately when it uses different tools, permissions or approvers, then agree how the work is prioritised.', 'Yes. Define each workflow separately when it uses different tools, permissions or approvers, then agree how the work is prioritised. Keep separate instructions when the same queue uses different records, permissions or reviewers across departments, locations or lines of business.']],
  'industry-finance.html': [['Agree the source files, reporting calendar and reviewers.', 'Agree the source files, reporting calendar and reviewers using the same reporting period and cutoff.']],
  'industry-ecommerce.html': [['Test an order with multiple items or a shipment split across carriers.', 'Test an order with multiple items or a shipment split across carriers. For a marketplace order, keep the channel reference with the store reference. This helps the reviewer trace the promise, shipment and payment record without merging unrelated orders.']],
  'industry-agencies-publications.html': [['Open the topics that matter to your team. These details explain how to prepare the work, review results and handle changes.', 'Explore how to prepare work, review results and handle agreed changes.']],
  'industry-ai-technology.html': [['Record the promised follow-up date so it survives a shift change.', 'Record the promised follow-up date so it survives a shift change. Track the customer update separately from engineering progress, so an investigation does not leave a promised reply unowned.']],
  'industry-professional-services.html': [['An authorised person at the firm approves terms, fees and issuance.', 'An authorised person at the firm approves terms, fees and issuance through the agreed channel.']],
  'how-it-works.html': [['Write down the change and show an example.', 'Write down the change and show an example. Keep the example with the instructions so future requests start with the same format and decision rules.']],
  'pricing.html': [['This gives both teams a practical starting point for the next review.', 'This gives both teams a basis for review.']],
  'about.html': [['more than 25 years of experience building teams and launching products.', 'over 25 years of experience building teams and products.']],
  'trust.html': [['before sharing accounts or records.', 'before sharing accounts or records with another person.']],
  'contact.html': [['Agree where decision requests should sit and what supporting links should be included so the reviewer can move faster.', 'Agree where decision requests should sit and what supporting links should be included so the reviewer can move faster. Keep the example beside the brief, with its source and approval status, so everyone reviewing the batch uses the same reference.']],
  'accounting-bookkeeping.html': [['support topics that matter to your team.', 'support topics that regularly matter to your team.']],
  'research-data-support.html': [['Identify where published figures can be compared and where the commercial basis differs.', 'Identify where published figures can be compared and where the commercial basis differs. Keep unverified fields visible in the findings note so a blank cell is never mistaken for a confirmed result.']],
  'recruiting-people-operations.html': [['The shared hiring tracker keeps those details in one record', 'The shared hiring tracker keeps those details in one current record']],
  'workflow-automation.html': [['Confirm what should happen to pending records if the live workflow is paused.', 'Confirm what should happen to pending records if the live workflow is paused. Record the last successful action before retrying, and check whether a partial run already updated the destination.']],
  'ecommerce-operations.html': [['Agree which updates the assistant can publish.', 'Agree which updates the assistant can publish after review.']],
  'industry-healthcare.html': [['Before the practice changes shifts, separate confirmed appointments', 'Separate confirmed appointments']],
  'industry-legal.html': [
    ['compare the current file list with the approved checklist.', 'compare the file list with the approved checklist.'],
    ['Keep the original correspondence available to the authorised reviewer,', 'Keep the correspondence available to the authorised reviewer,'],
    ['what the client has already been told and when the next response is due.', 'what the client has been told and when the response is due.']
  ],
  'industry-nonprofits-membership.html': [['review the current roster and communications list with the programme owner.', 'review the current volunteer roster and approved communications list with the programme owner.']],
  'industry-startups-small-business.html': [['Keep it visible as a proposed addition.', 'Keep it visible as a proposed addition. Keep routine tasks visible while you review the exception.']]
};

export function applyKeywordCopy(body, file) {
  for (const [before, after] of [...(keywordCopy[file] || []), ...(copyPolish[file] || [])]) {
    if (!body.includes(before)) throw new Error(`Missing reviewed copy in ${file}: ${before}`);
    body = body.replace(before, after);
  }
  return body;
}
