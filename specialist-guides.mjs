// Worked examples use fictional records and demonstrate a scoped handoff.
export const specialistGuides = {
  'accounting-bookkeeping': {
    title: 'How a bookkeeping virtual assistant prepares a close pack',
    setupTitle: 'Set the rules for accounts payable and receivable',
    reviewTitle: 'Review what your bookkeeping virtual assistant prepared',
    context: 'In this fictional example, a small retailer is closing the month. Its marketplace deposit is lower than gross sales, one supplier bill has arrived twice, and a refund lands near the cutoff. Accounting and bookkeeping support turns those loose ends into a traceable review pack. The finance owner can see the evidence and decide how each open item should be treated.',
    steps: [
      ['Collect one period of source records', 'Start with the date range, statement totals, marketplace payout export, bill register and previous close checklist. A bookkeeping virtual assistant can link each source and note which export covers which dates. Keep the actual statements in the authorised workspace so a reviewer can check the original record.'],
      ['Match deposits, invoices and receipts', 'Compare the deposit with the marketplace batch and show the sales, fees and refund entries that explain it. In the accounts payable and receivable registers, check for repeated invoice references and receipts without a match. Separate explained timing differences from items that still need the finance owner.'],
      ['Send a decision-ready pack', 'Prepare the reconciliation worksheet, unpaid invoice and bill aging, and a list of questions with links to evidence. Accounting and bookkeeping support can also prepare draft reports from the approved ledger. Record the reviewer’s decisions and show which items remain open after the review.']
    ],
    setup: [
      ['Ledger and source of truth', 'Give the bookkeeping virtual assistant the correct entity, period, accounts and chart of accounts. Provide one approved coding example and a list of transactions that must be left for the reviewer. Confirm where a corrected entry and its reason should be recorded.'],
      ['Accounts payable and receivable rules', 'List who can draft a bill, issue an invoice, send an approved reminder or approve a payment. Share the matching rule for partial payments and examples of credit notes. Treat vendor bank detail changes as their own workflow with an authorised owner.'],
      ['Close calendar and permissions', 'Set the document cutoff, review date and backup owner before accounting and bookkeeping support begins. Agree which tools allow draft edits, which are read-only and how to flag late documents. Make sure the first sample can be reviewed without sharing more access than it needs.']
    ],
    exceptions: [
      ['The payout total does not tie', 'Record the deposit date and batch, then compare fees, refunds and items outside the report range. A bookkeeping virtual assistant can show the unexplained balance and checks already performed. Put the evidence and open question in the reviewer’s queue before any correction is posted.'],
      ['An invoice looks like a duplicate', 'Check the vendor, amount, currency and original invoice reference. Link the two records and keep the suspected duplicate visible in accounts payable and receivable until the authorised reviewer identifies the correct entry. Note if one copy is already scheduled or marked as paid.'],
      ['A late item crosses the cutoff', 'Save the original dates and the supporting document. Accounting and bookkeeping support can flag which report or reconciliation is affected and ask whether to include it in the current close or the next one. Record the answer and the owner of any adjustment.']
    ],
    review: [
      ['Trace a sample to the source', 'Pick a matched bank line, a customer receipt and a vendor bill. Check the amount, date, account, link and note against the original. Ask the bookkeeping virtual assistant to identify any coding rule that was unclear during the batch.'],
      ['Check balances and next actions', 'Compare accounts payable and receivable totals with their source exports. Check which items are waiting on a vendor, a customer or finance. If the status changes the next follow-up date, make that date visible in the register.'],
      ['Review draft reporting together', 'Look at what accounting and bookkeeping support prepared and what the reviewer still needs to sign off. Confirm the reporting period, any unmapped entries and the link to approval. Record corrections in the close checklist so the next month starts from the agreed treatment.']
    ],
    handover: 'Leave the close pack, date range, reviewer and approved matches in the finance workspace. A replacement bookkeeping virtual assistant can see which documents are still missing.',
    handoverRows: [
      ['Source set', 'Record the statement dates, report versions and links to the original evidence.', 'Check what is in the close period and request any missing export.'],
      ['Reconciliation status', 'List matched lines, timing differences and balances needing an explanation.', 'Start with the outstanding amounts and see what was already checked.'],
      ['Accounts payable and receivable', 'Show draft or approved status, due date, disputed balance and next owner.', 'Send only authorised follow-ups and leave payment and write-off decisions with finance.'],
      ['Close decisions', 'Save the reviewer’s answer and any item carried to the next period.', 'Continue from the last agreed position without repeating an adjustment.']
    ],
    planning: {
      id: 'plan-coverage',
      title: 'Plan accounting and bookkeeping support around the close',
      intro: 'Choose a rhythm for new documents, recurring reconciliations and approvals. The pace can be different for a weekly register and a month-end review.',
      items: [
        ['Ordinary weeks', 'Agree when the bookkeeping virtual assistant checks new receipts, posts approved entries and prepares the invoice queue. Use a short weekly summary for documents missing from the ledger and for overdue items that need an owner. Keep the current bank and card records linked in one place.'],
        ['Month-end', 'Set a last date for supplier documents and payout exports, then book the review window with the finance owner. Plan a separate checkpoint for accounts payable and receivable aging so payment or collection questions can be resolved without holding up the whole reconciliation.'],
        ['Growth and new channels', 'When a new marketplace, entity or payment processor is added, update the accounting and bookkeeping support scope with the source reports and approval rules. Review one payout or bill batch before expanding the routine. Identify who will check accounting treatment for new fees or refunds.']
      ]
    }
  },
  'research-data-support': {
    title: 'Turn market and competitor research into a comparison',
    setupTitle: 'Define the brief for market and competitor research',
    exceptionsTitle: 'Handle gaps in data entry and cleanup',
    reviewTitle: 'Check the quality of research and data support',
    context: 'In this fictional example, a founder needs to compare six providers before choosing which ones to interview. Their websites describe different packages and some prices depend on volume or contract length. Research and data support produces a comparison the founder can check, with a source for each finding and a separate list of questions to ask.',
    steps: [
      ['Agree the question and comparison fields', 'Before starting market and competitor research, confirm the audience, region, inclusion rules and the decision the research will inform. Use the same fields for every provider, such as service scope, pricing basis, relevant restrictions and evidence date. Mark anything that can only be answered in a sales conversation.'],
      ['Collect and check the records', 'Use the approved sources and record the relevant page, access date and detail for each field. Data entry and cleanup can normalise units and remove duplicates while keeping the original values available. If two sources disagree, note both and indicate which one is newer or closer to the provider.'],
      ['Deliver the brief with the evidence', 'Use research and data support to prepare a sortable workbook and a short findings note. Identify where published figures can be compared and where the commercial basis differs. Give the reviewer the source links and follow-up questions so they can verify the most important fields before making a decision.']
    ],
    setup: [
      ['Search criteria and sources', 'Share the questions for market and competitor research, the sources you consider acceptable, and any topics or records to exclude. Give a valid and an invalid example so the researcher can see where the inclusion rule matters. Agree when you want a second source for a claim.'],
      ['Data entry and cleanup format', 'Define required columns, date and currency formats, and the fields that identify a duplicate. Decide how to label unknown, conflicting and unverified values. Share a sample row and what you want preserved from the original if a spreadsheet is transformed for import.'],
      ['Output and review owner', 'Name who will check the first batch of research and data support. Agree the format, turnaround, permissions and how the findings will be used. For regular reporting, document the source query, definition, period and refresh date so the next batch can be reproduced.']
    ],
    exceptions: [
      ['Two sources describe different offers', 'Keep the original claims and dates separate. Market and competitor research can record that one page describes a trial and another describes a paid plan, or that a feature was described in a different region. Flag the comparison field for the reviewer instead of combining incompatible records.'],
      ['A row has missing or disputed data', 'Keep the record with its missing fields marked. Data entry and cleanup can link likely duplicates for review and record why a match is uncertain. If the gap affects a decision, show the missing evidence and a way the reviewer could verify it.'],
      ['A source is outside the agreed scope', 'Record that a field could not be verified from the available sources and ask the owner whether to use an alternative. If the work requires a new login, export or personal data, pause that part of the research and data support until the authorised scope is confirmed.']
    ],
    review: [
      ['Check the trail back to the source', 'Sample a few rows and open the evidence behind the most important fields. Check publication or access date, spelling, units and whether the selected detail really supports the claim. Useful market and competitor research should make it possible to repeat this check without starting over.'],
      ['Check structured output before use', 'For data entry and cleanup, compare an original record and a transformed row side by side. Confirm that required fields are present and that a changed value, removed duplicate or unresolved mismatch is documented. Review import field mapping on a small batch first.'],
      ['Check the summary against the question', 'Ask whether research and data support answered the decision you originally posed. Review the gaps as well as the findings. Confirm which differences are supported by evidence, which may reflect varying scope, and what follow-up would resolve remaining uncertainty.']
    ],
    handover: 'The next reviewer gets the source register, the final dataset and the date of the last check. Keep the criteria and open questions with the market and competitor research so the next pass can update the evidence without silently changing the comparison.',
    handoverRows: [
      ['Research brief', 'Save the decision, inclusion criteria, approved sources and report date.', 'Repeat the search within the same scope or propose an explicit change.'],
      ['Findings and evidence', 'Link each important claim to its source and record any conflicting details.', 'Verify and refresh a finding without reconstructing the workbook.'],
      ['Data entry and cleanup log', 'Record formatting, duplicate candidates and imports prepared or approved.', 'Avoid repeating a completed change and check the next batch consistently.'],
      ['Open questions', 'Mark missing fields and the person who will confirm them.', 'Follow up on the points that could affect the decision.']
    ],
    planning: {
      id: 'plan-coverage',
      title: 'Choose a rhythm for research and data support',
      intro: 'A one-off comparison and an ongoing report need different checks. Decide which findings are time sensitive and when the underlying sources should be refreshed.',
      items: [
        ['One-off comparisons', 'Agree a cut-off date for market and competitor research and a final review window. Send a small set of sample rows before expanding collection. That gives the reviewer a chance to check if the proposed fields distinguish the options and whether any source needs a different treatment.'],
        ['Recurring data and reporting', 'Set a refresh date, a source owner and a review step for data entry and cleanup. Keep the previous version and note changes to metric definitions or records. If the data source changes, document it before comparing results across periods.'],
        ['Handoffs into another system', 'Agree which version of the research and data support output can be shared or imported. Test the import with a small approved file, confirm how the destination handles duplicates, and keep a record of what was accepted and what still needs correction.']
      ]
    }
  },
  'recruiting-people-operations': {
    title: 'Follow one vacancy from LinkedIn candidate sourcing to interview',
    setupTitle: 'Set the scope for a recruitment virtual assistant',
    exceptionsTitle: 'Handle exceptions in LinkedIn candidate sourcing',
    reviewTitle: 'Review recruiting and people operations support',
    context: 'In this fictional example, an operations role has been posted and the recruiter has an approved shortlist brief. An applicant also appears in the LinkedIn candidate sourcing queue, one interviewer works in another time zone, and a reference is still outstanding. Recruiting and people operations support keeps those details in one record so the hiring lead can make the decisions.',
    steps: [
      ['Open the role and connect the records', 'A recruitment virtual assistant can confirm which brief is current, review the approved role fields and link the job posting to the applicant tracker. If someone applied directly and was also sourced, mark the possible duplicate and preserve their submission and contact history for the recruiter to review.'],
      ['Coordinate approved outreach and interviews', 'Use LinkedIn candidate sourcing only through the agreed tools and access. Draft a role-specific introduction for review, then log any approved contact and reply. For interviews, confirm interviewer availability, the candidate’s time zone, format and meeting link. Put the current role brief and interview materials in the authorised workspace.'],
      ['Hand over what the recruiter needs next', 'Bring the interview status, responses, reference requests and pending decisions together. Recruiting and people operations support can also prepare the onboarding checklist after the hiring lead confirms the selection. Keep the offer, employment terms and candidate evaluation with the authorised team.']
    ],
    setup: [
      ['Role brief and communication rules', 'Give the recruitment virtual assistant the approved job description, required records, interview process and sender authority. Record which stage changes are routine administration and which need a recruiter’s decision. Share an approved invitation, reschedule notice and closure message so wording stays consistent.'],
      ['Sourcing channels and applicant tracker', 'Agree the permitted LinkedIn candidate sourcing tools and how to record source, application date and contact history. Confirm who can access candidate records and how long the organisation keeps them. Use a test record to check which fields the assistant can edit or share.'],
      ['Panel calendar and onboarding owners', 'Agree who can approve times, how to route last-minute changes and who owns follow-up when the recruiter is away. Recruiting and people operations support should also have an owner for each onboarding item, such as paperwork, training, equipment and access requests.']
    ],
    exceptions: [
      ['The same candidate is in two queues', 'A recruitment virtual assistant can flag a match and link the relevant records without merging them or losing the applicant’s original messages. Show the last approved contact and next action. The recruiter decides how to combine the records and whether to continue outreach.'],
      ['The role or timing changes mid-search', 'Update the LinkedIn candidate sourcing queue with the new brief and ask the recruiter to confirm what is on hold. Identify candidates with scheduled conversations or outstanding replies. Prepare an approved update for affected people and keep the old instructions with the record for reference.'],
      ['A reference or document is sensitive', 'Use the approved channel and record the minimum status needed in the general tracker. A recruitment virtual assistant can follow up on authorised requests and show what is outstanding. The recruiter or HR owner decides what the material means and how it affects the process.']
    ],
    review: [
      ['Check applicant records against the source', 'Sample a direct applicant, a sourced contact and an open exception. Verify source and last contact, role, stage and next action. Ask the recruitment virtual assistant to flag any fields that repeatedly go missing or have ambiguous definitions.'],
      ['Check the interview handoff', 'Match the confirmed time, location or link and invitees to the appointment record. Recruiting and people operations support can gather feedback forms and flag missing responses. Confirm the next owner can access the material without circulating it more broadly.'],
      ['Check sourcing and follow-up status', 'Review LinkedIn candidate sourcing with the recruiter. Separate records awaiting approved contact from records awaiting a reply or decision. Give each blocked item a due date and owner so a pending decision does not trigger a duplicate message.']
    ],
    handover: 'Keep live roles, interviews and pending messages together. Keep candidate details in the approved system.',
    handoverRows: [
      ['Role and current brief', 'Link the approved posting, sourcing scope and recruiter responsible for changes.', 'Use the current version when preparing updates or invitations.'],
      ['Applicant and outreach status', 'Keep source, last contact, next action and any duplicate flag with the applicant record.', 'Continue approved follow-ups and avoid a second message to the same person.'],
      ['Interview and references', 'Record confirmed times, requested material and the owner for outstanding responses.', 'Reschedule or follow up under the agreed rules and route exceptions.'],
      ['Onboarding status', 'List approved next steps, deadlines and the HR, IT or training owner.', 'Prepare the first-week handoff after the hiring decision is recorded.']
    ],
    planning: {
      id: 'plan-coverage',
      title: 'Plan recruiting and people operations support around hiring stages',
      intro: 'Choose review windows for new applicants, interviews and confirmed starts. Candidate communication depends on the hiring team being available to answer the right questions.',
      items: [
        ['When a role opens', 'Confirm the posting version, LinkedIn candidate sourcing scope, calendar owner and response templates. Test an applicant record and an approved outreach draft before expanding the queue. Agree how to stop or revise the search if requirements change.'],
        ['During interviews', 'Give the recruitment virtual assistant a predictable time to check replies and update scheduling. Keep an exception list for missed interviews, material still needed and unavailable panel members. Agree the alternate contact for changes close to the interview time.'],
        ['Before a new hire starts', 'Use recruiting and people operations support to track approved paperwork, training, access and equipment requests. Confirm which owners can complete each item, then check readiness and send a short handoff to the manager with anything still open.']
      ]
    }
  },
  'workflow-automation': {
    title: 'Test CRM automation support before routing live leads',
    setupTitle: 'Set the rules for workflow automation support',
    exceptionsTitle: 'Handle failures in CRM automation support',
    reviewTitle: 'Check AI workflow automation before it goes live',
    handoverTitle: 'Hand off workflow automation support',
    context: 'In this fictional example, a contact form sends new enquiries to a CRM and creates a task for sales. One test record already exists, another has no region, and a third runs when the destination is unavailable. Workflow automation support makes each outcome visible before the owner decides which actions can run automatically.',
    steps: [
      ['Map the source and the decisions', 'Write down the trigger, required fields, duplicate rule, destination and the fields each system owns. For CRM automation support, agree who reviews unclear assignments and when an automated task may be created. Use test accounts or fictional data to show how the normal and exception paths work.'],
      ['Check failure and repeat cases', 'Run a normal form, a repeat submission, a missing field and a temporary destination failure. Compare what happened with the expected action, including whether a retry could create a second contact or task. For AI workflow automation, also verify the output against a known sample and require review where an uncertain result could affect a customer.'],
      ['Review the change before release', 'Put the field map, sample outcomes, unresolved issues and rollback instructions in the release record. Workflow automation support can arrange a limited pilot, then review runs with the system owner. Confirm what should happen to pending records if the live workflow is paused.']
    ],
    setup: [
      ['Source records and ownership', 'For CRM automation support, name the source of each field, the permitted destination and the person who can approve a mapping change. Use examples with missing and duplicate data. Agree which records can be modified, which are read-only and which events should be ignored.'],
      ['AI workflow automation review rules', 'Write down approved inputs, the intended output and what a person needs to check. A draft, summary or classification should have a known destination and fallback for low confidence. Agree which data must stay in the source system and how to record reviewer corrections.'],
      ['Tests, permissions and limits', 'Workflow automation support starts with scoped permissions and a small set of acceptance examples. Confirm the allowed triggers, conditions, account roles and whether the first run can be a dry run. Decide who can enable, pause and resume the live workflow and how exceptions are delivered.']
    ],
    exceptions: [
      ['The same record arrives twice', 'Check the source event and matching fields, then route a possible duplicate to the agreed queue. CRM automation support can show whether a previous action succeeded before a retry. Retain the existing contact or task reference so the owner can resolve the record without a second send.'],
      ['The destination rejects an update', 'Record the failed field, error, time and run reference. Workflow automation support can separate retryable connection issues from records that need correction. Pause if the same failure is affecting a batch and give the owner a way to verify which actions have already run.'],
      ['A draft is uncertain or misleading', 'Send the original input and proposed result to a named reviewer. For AI workflow automation, record what needs correction and keep the output out of live messages, customer records or approvals until the reviewer has decided. Review whether the prompt, input or exception rule needs changing.']
    ],
    review: [
      ['Confirm inputs and destinations', 'Compare expected and actual outcomes for normal, duplicate and incomplete records. Check that CRM automation support preserved source identifiers, sent each field to the approved destination and created the right next owner. Include one case where a rule should intentionally take no action.'],
      ['Review the human checkpoint', 'Use representative AI workflow automation outputs to test accuracy, uncertainty and tone. Confirm the reviewer can find the original source, correct the draft and see which actions remain on hold. Record repeated errors so the owner can decide whether to change or stop the workflow.'],
      ['Check the run and incident record', 'Compare completed, skipped and failed events with the source volume. Workflow automation support can report run history and response times under agreed definitions. Check whether failed records are assigned and whether a retry or manual action would duplicate work.']
    ],
    handover: 'Hand over the approved workflow, tests and permissions. Show the next owner how to find a failed record and resume it safely.',
    handoverRows: [
      ['Field and trigger map', 'Link the original source, destination, field owner and approved matching rule.', 'Identify what will change before editing a rule or connector.'],
      ['Test evidence', 'Keep expected and observed results for ordinary and exception cases.', 'Repeat the important checks before the next release.'],
      ['Open runs and failures', 'Record event references, last action, retry status and next owner.', 'Decide which items can be retried and which need manual review.'],
      ['Release and fallback', 'Save the approval, version, connection owner and manual process.', 'Pause the workflow and recover the pending queue if needed.']
    ],
    planning: {
      id: 'plan-coverage',
      title: 'Plan monitoring and rollout for workflow automation support',
      intro: 'Choose who will monitor the pilot, who can approve changes and what should trigger a pause. Decide when to switch to the manual workflow.',
      items: [
        ['Pilot window', 'Test with a small batch during a period when the owner can check outcomes. For AI workflow automation, compare drafts or classifications with examples the reviewer has already approved. Confirm expected error handling and manual review before widening the batch.'],
        ['Ongoing operations', 'Set a frequency for checking failures, queued decisions and fields that change upstream. CRM automation support can prepare a weekly summary with links to affected records and a named owner for each follow-up. Make urgent alerts distinct from ordinary review items.'],
        ['After a system change', 'If a form, CRM field or connector changes, revisit the mapping and rerun the acceptance cases. Workflow automation support can prepare a new test record, explain effects on pending work and record when the owner approved the new version.']
      ]
    }
  },
  'ecommerce-operations': {
    title: 'A Shopify virtual assistant prepares a bundle launch',
    setupTitle: 'Define the inputs for product listing management',
    reviewTitle: 'Review e-commerce operations support',
    context: 'In this fictional example, a retailer plans to launch a two-product bundle in its store and one marketplace. The warehouse count changed after a supplier delay, the two channels display variants differently, and one return is still open. E-commerce operations support connects catalogue readiness, fulfilment and customer messages before the owner confirms the release.',
    steps: [
      ['Match listings to the master catalogue', 'For product listing management, check the bundle SKU and components against the approved product file. Verify channel-specific titles, descriptions, images, variants and stock fields. Capture a preview and record any difference that needs a decision about pricing, product claims or an asset before publishing.'],
      ['Check stock and order commitments', 'A Shopify virtual assistant can compare the storefront, marketplace and warehouse records at the same cutoff. Identify stock reserved for orders or another channel, and flag an unconfirmed supplier date. Check the approved delivery promise and route any stock or launch change to the store owner.'],
      ['Release the approved batch and watch exceptions', 'Record which listings or promotions were approved and check them after publication. E-commerce operations support can monitor the order and returns queue, confirm that handoffs use the correct SKU and channel, and report any discrepancy alongside the current customer or fulfilment action.']
    ],
    setup: [
      ['Product listing management rules', 'Share the master product record, channel templates, approved images and who can change each field. Give examples for a single item, variant and bundle. Decide when a change should be drafted, when the store owner can approve a batch and how to record the live page.'],
      ['Access for a Shopify virtual assistant', 'Name the storefronts, seller dashboards, help desk, inventory system and fulfilment partner in scope. Set the access needed for reading orders, preparing updates and sending routine replies. Share policies for delays, returns, replacements and billing questions, and identify where exceptions go.'],
      ['Order and stock reporting rhythm', 'E-commerce operations support needs a shared cutoff for stock, order status and supplier dates. Decide how to track shipped, delayed, cancelled and returned orders and who checks changes affecting inventory. Use one normal order and one exception to test the handoff.']
    ],
    exceptions: [
      ['Stock counts differ across channels', 'Link the channel and warehouse records and note the time of each update. A Shopify virtual assistant can show affected SKUs, open orders and the discrepancy without changing the source counts. The inventory owner decides whether to adjust stock or hold a launch.'],
      ['The product page does not match approval', 'Check the approved version, SKU and live listing before correcting anything. Product listing management can prepare the proposed correction and identify other channels that use the same asset or field. The owner approves changes to a claim, price or publication status.'],
      ['A return crosses a policy boundary', 'Record the order, product, reason and dates and check the approved policy. E-commerce operations support can prepare the response and route the refund or replacement decision with the relevant history. Track the customer’s next update even if the decision is still pending.']
    ],
    review: [
      ['Sample a published listing', 'Compare the live page with the approved product source. Check variant selection, key details and links on the devices or marketplaces you agreed to review. Product listing management should leave the approval and release date alongside any remaining exceptions.'],
      ['Check one delayed order and one return', 'A Shopify virtual assistant can show the source order, latest tracking, current case status and what the customer was told. Look for stale estimates, duplicate messages or cases that appear closed before the responsible owner has acted.'],
      ['Review the store report and payout handoff', 'Use e-commerce operations support to compare reported order volume, refunds, stock exceptions and outstanding supplier items with the source systems. Check that the payout and fee files cover the right period before sending them to bookkeeping.']
    ],
    handover: 'Keep the live listings, stock checks and next customer updates together. A Shopify virtual assistant can see who owns open refunds and supplier commitments.',
    handoverRows: [
      ['Catalogue and launch', 'Record affected SKUs, approved version, channel, preview and live link.', 'Verify that each published listing reflects the agreed update.'],
      ['Orders and customer promises', 'Keep current tracking, promised update and next owner with the case.', 'Continue the conversation with the current delivery information.'],
      ['Inventory and suppliers', 'Save counts at the agreed cutoff, discrepancies and supplier follow-up.', 'Resolve open stock questions before a reorder or launch decision.'],
      ['Returns and payouts', 'Link the approval, refund status and export period used for bookkeeping.', 'Continue policy and reconciliation review from the recorded state.']
    ],
    planning: {
      id: 'plan-coverage',
      title: 'Set a weekly rhythm for e-commerce operations support',
      intro: 'Use separate review windows for order exceptions, listing releases and payouts. A busy promotion may need different coverage from a normal week.',
      items: [
        ['Normal store operations', 'Agree when the Shopify virtual assistant checks orders, tickets and inventory, and when the store owner reviews exceptions. Keep a weekly catalogue window for low-risk edits and identify which customer promises cannot wait until that review.'],
        ['Promotions and product launches', 'Plan product listing management around confirmed assets, stock, discount rules and delivery promises. Review the preview and inventory before the release window. Arrange coverage for customer enquiries, unconfirmed shipments and changes to approved promotional copy.'],
        ['Month-end and busy returns periods', 'Use e-commerce operations support to organise payout, refund and fee exports and review open return cases before close. Keep the cutoff and review owner visible for each channel. Escalate totals that do not match the source before the accounting team takes over.']
      ]
    }
  },
  healthcare: {
    title: 'A healthcare virtual assistant tracks a referral to the next owner',
    setupTitle: 'Set access and scripts for medical receptionist support',
    reviewTitle: 'Review appointments and medical billing administration',
    context: 'In this fictional example, a practice receives a referral with an attachment missing. A patient has also asked about an appointment and the billing team needs to verify a detail. Medical receptionist support can keep those three actions visible in the approved system so the practice knows who should respond next.',
    steps: [
      ['Record the referral in the agreed queue', 'A healthcare virtual assistant can check which intake fields are required, confirm the referral source and link the available documents in the practice system. Note what is missing and use the approved request for that item. Keep the record with the assigned practice owner while information is outstanding.'],
      ['Coordinate an appointment under practice rules', 'Use the approved scheduling script and appointment categories. Medical receptionist support can offer available times, send the permitted confirmation and record what the patient has been told. Questions about urgency, preparation or treatment go to the practice contact named in the escalation process.'],
      ['Separate billing follow-up from scheduling', 'If the record needs a verification or billing decision, prepare the administrative details and route the question to the authorised owner. Medical billing administration can track requested documents, claim or balance status and the next follow-up. Keep open decisions visible even when an appointment has been scheduled.']
    ],
    setup: [
      ['Approved scripts and available slots', 'Give medical receptionist support the practice’s approved welcome, reminder and rescheduling wording. Record which appointment types can be offered, the information required and when to route to a clinical or practice owner. Include an example of a request that should leave the routine queue.'],
      ['Authorised access and record handling', 'Agree what a healthcare virtual assistant may read, edit or share, and which tasks require a different role. Keep documents in the authorised practice system. Decide which identifiers belong in an appointment or billing queue and use fictional records to test the workflow.'],
      ['Medical billing administration checklist', 'Name the team that owns verification, coding, submission, denials and adjustments. Agree which fields can be collected, when payment or statement status is checked, and who decides what a patient may be told. Test with one routine request and one that needs review.']
    ],
    exceptions: [
      ['The request needs clinical attention', 'A healthcare virtual assistant can record the minimum required details and use the practice’s urgent escalation route. Keep the next owner and expected response visible. Clinical guidance and urgency decisions belong to the practice’s qualified team.'],
      ['The referral or appointment record is incomplete', 'Check the agreed fields and send an approved request for the missing item. Medical receptionist support can hold the appropriate slot or note the next scheduling step if authorised. Avoid copying unnecessary patient details into a shared note or message.'],
      ['A claim or balance needs a decision', 'Medical billing administration can record the source, status, date and missing evidence, then route it to the billing owner. Keep changes to codes, amounts, patient statements or coverage decisions in the review queue until approved.']
    ],
    review: [
      ['Check appointment accuracy', 'Sample an appointment, a cancellation and a pending request. Compare the time, location and permitted confirmation with the practice schedule. Review whether medical receptionist support sent the right message and whether the next person knows if a follow-up is due.'],
      ['Check access and open records', 'Review a referral with the healthcare virtual assistant. Verify that the original request is in the authorised system and that only necessary information appears in status summaries. Check whether open requests have both a responsible owner and a follow-up date.'],
      ['Check billing status against its source', 'Compare one item awaiting verification and one item ready for billing review. Medical billing administration should leave a record of what was checked, which source was used and what requires a decision. Keep clinical and billing exceptions with the appropriate reviewer.']
    ],
    handover: 'Share the scheduling window and open referrals with the next healthcare virtual assistant. Keep patient records in the approved system and name the people who handle exceptions.',
    handoverRows: [
      ['Reception queue', 'Record the request type, approved next action, reply channel and follow-up due.', 'Continue a patient update using the correct record and wording.'],
      ['Referrals and appointments', 'Link the source record and note outstanding documents, status and assigned practice owner.', 'Confirm which appointments can proceed and which require review.'],
      ['Medical billing administration', 'Show verification status, claim or statement reference and outstanding evidence.', 'Send the relevant question to the billing owner without altering a claim or balance.'],
      ['Access and escalation', 'Keep approved roles, contact routes and coverage windows with the handover.', 'Know where urgent or sensitive items belong when the usual owner is away.']
    ],
    planning: {
      id: 'plan-coverage',
      title: 'Plan medical receptionist support around practice hours',
      intro: 'Choose when calls and messages are checked, when appointment reminders go out and which team takes over outside the agreed hours.',
      items: [
        ['Routine practice hours', 'Set a time for appointment confirmations, referral follow-ups and queue review. The healthcare virtual assistant can prepare a short open-items summary before the practice changes shifts. Identify which questions should go directly to the named owner.'],
        ['Busy clinics and schedule changes', 'Give medical receptionist support a plan for cancellations, a temporary clinic closure or a high-volume appointment day. Prepare the approved message and record affected appointments and promised updates so the practice can coordinate rebooking.'],
        ['Billing review and reporting', 'Set a cutoff for medical billing administration and agree when the billing owner reviews pending evidence, status or payment questions. Keep the review packet in the approved system and note any commitments or unresolved decisions for the next batch.']
      ]
    }
  },
  legal: {
    title: 'A legal virtual assistant turns an enquiry into a review-ready file',
    setupTitle: 'Define the rules for law firm intake support',
    exceptionsTitle: 'Where a legal virtual assistant needs a decision',
    reviewTitle: 'Check files and legal billing support',
    context: 'In this fictional example, a potential client contacts a law firm by phone and email. A document arrives later, but the firm has yet to clear the matter and a date in the correspondence needs confirmation. Law firm intake support keeps the information together so the lawyer can review it before accepting work or making a commitment.',
    steps: [
      ['Collect the approved intake fields', 'Use the firm’s intake script, note the source of the enquiry and link related messages without collecting more than the firm allows. Law firm intake support can request missing administrative details and put the record in the conflict and engagement review queue. Keep any promised callback time with the original contact.'],
      ['Prepare the file and flag dates for review', 'A legal virtual assistant can index the documents, label the current version and record a date as pending confirmation. Separate consultation scheduling from any approval to proceed. Give the lawyer the original correspondence and an explicit question about dates or documents that need professional judgment.'],
      ['Record the decision and the next action', 'Once the lawyer records the decision, update the approved matter status and the reminders the firm has authorised. Legal billing support can collect agreed time or expense records and prepare a separate draft pack. Leave external communications and billing issuance in their respective approval queues.']
    ],
    setup: [
      ['Law firm intake support rules', 'Provide the approved intake questions, secure submission route and script for consultations or follow-ups. Confirm which people and entities the firm needs for its own conflict review. Give one routine and one sensitive example, and say what information should stay out of a general log.'],
      ['Matter files and calendar permissions', 'Agree which case folders, fields and calendars the legal virtual assistant can access. Set version naming and the rule for recording dates with their source and status. Name the person who confirms the date and the backup contact when a question cannot wait.'],
      ['Legal billing support inputs', 'Provide the approved time-entry and expense fields, billing period and format for a review pack. Agree who can ask for missing entries and who owns decisions on rates, adjustments, client invoices or funds. Test a routine billing record and an exception separately.']
    ],
    exceptions: [
      ['A possible conflict appears', 'Law firm intake support can preserve the names and original request in the approved system and flag it for the designated reviewer. Hold further intake steps as instructed and avoid promising that the firm can accept the matter until the responsible lawyer confirms the next action.'],
      ['A document contains an unconfirmed deadline', 'A legal virtual assistant can point the lawyer to the exact source and note that confirmation is pending. Keep the escalation visible and use the agreed urgent contact if the date is close. Apply calendar reminders only against the instruction the lawyer approves.'],
      ['An invoice or time entry is disputed', 'Legal billing support can record the period, affected item, client question and supporting file. Prepare an issue summary for the billing owner. Keep the original ledger or time entry unchanged unless the authorised owner approves a correction.']
    ],
    review: [
      ['Check an intake from first contact to review', 'Open a completed enquiry and verify the source, approved fields, latest status and owner. Look for duplicate contact records or a promised update without a date. Law firm intake support should give the reviewer enough context to act without asking the client for the same material twice.'],
      ['Check the matter file and deadline source', 'Sample a saved document and a reminder. The legal virtual assistant should be able to point to the current file version and the instruction that confirms the date. Record any mismatch and ask the matter owner how to correct it.'],
      ['Check the draft billing pack', 'Compare a few time and expense entries with the source and the agreed reporting period. Legal billing support can note missing fields, review status and the decision required. Keep any issue affecting client funds or invoice release with the authorised owner.']
    ],
    handover: 'Leave the intake status, deadlines and open matters for the next legal virtual assistant. Show which actions the lawyer or billing owner still needs to approve.',
    handoverRows: [
      ['Enquiries awaiting a decision', 'Link the authorised intake record and capture the agreed next contact time.', 'Follow up through the approved route once the lawyer has reviewed it.'],
      ['Matter and document versions', 'Identify the current approved files, open document requests and their owners.', 'Continue preparation without working from an outdated version.'],
      ['Dates and reminders', 'Record the source and who confirmed each deadline or calendar entry.', 'Review what is due soon and send questions to the matter owner.'],
      ['Legal billing support', 'Keep the draft pack, period and open discrepancies with the billing reviewer.', 'Confirm missing inputs and leave approval and issuance with the firm.']
    ],
    planning: {
      id: 'plan-coverage',
      title: 'Set review windows for law firm intake support',
      intro: 'Agree when enquiries, matter records and billing batches are checked. Give urgent items their own route so they reach a person who can decide.',
      items: [
        ['Daily intake', 'Schedule a check for new enquiries, confirmations and unanswered requests. A legal virtual assistant can prepare an update for the lawyer showing matters awaiting conflict or engagement review. Keep the current callback and appointment status with each record.'],
        ['Before a filing or hearing window', 'Ask the matter owner which dates and documents need a separate check. Use law firm intake support and matter administration to record approved reminders, document versions and outstanding signatures. Escalate changes to the lawyer through the agreed contact route.'],
        ['Billing cycle', 'Use legal billing support to collect and review approved source entries before the cutoff. Identify which items depend on a decision or supporting record, then send the review packet to the billing owner in time for the firm’s approval process.']
      ]
    }
  },
  'construction-field-services': {
    title: 'A construction virtual assistant keeps a job moving after a change',
    setupTitle: 'Prepare inputs for field service scheduling',
    reviewTitle: 'Check construction project coordination before closeout',
    context: 'In this fictional example, a contractor has scheduled a crew and delivery for a site. The supplier moves its delivery window, a drawing revision arrives and the customer asks for additional work. Construction project coordination brings the dates, documents and decisions into one job record so the project lead can see what needs attention.',
    steps: [
      ['Check the job against its latest schedule', 'Use the project reference, current crew and site window, approved scope and supplier confirmation. Field service scheduling can record the reported delay, which jobs may be affected and whether an approved alternative is available. Confirm who can approve a change before updating anyone’s commitment.'],
      ['Update document control and the change log', 'A construction virtual assistant can log the drawing revision, link the source and show who needs to review it. Record any open request for information or submittal with the due date, latest status and assigned reviewer. Save the customer’s additional request as a separate item for scope approval.'],
      ['Prepare the next shift or billing handoff', 'Construction project coordination can record the approved schedule change and what was communicated to the crew, supplier and customer. Collect completion evidence, timesheets and purchase records for the project or finance owner. Keep the quote, site instruction and payment decisions with their designated reviewers.']
    ],
    setup: [
      ['Field service scheduling rules', 'Provide approved service windows, service areas and who can authorise a change. List what the crew needs before accepting an appointment, such as access instructions or materials. Confirm the escalation route for a customer request that affects another booking or needs a safety review.'],
      ['Job, supplier and document records', 'Give the construction virtual assistant the project tracker, approved scope reference and current supplier contacts. Define revision and issue numbering, where requests for information are recorded and which project owner confirms a new drawing, quote or instruction before it is distributed.'],
      ['Approval and closeout checklist', 'For construction project coordination, separate approval for schedule, estimate, scope, safety, payment and payroll. Provide an example of a completed job and one still waiting on delivery or confirmation. Agree what completion evidence should accompany a timesheet or invoice draft.']
    ],
    exceptions: [
      ['A delivery no longer fits the site window', 'Field service scheduling can show the new estimate, jobs affected and the available alternatives. Confirm whether any materials are already in transit and who can change the booking. Send approved updates to the parties involved and keep the original promise in the history.'],
      ['A revision affects planned work', 'The construction virtual assistant can log the new file, compare its reference with the current record and flag which work may depend on it. Route the technical decision to the project lead. Share only the approved version and keep prior revisions available for authorised review.'],
      ['A customer requests work outside the scope', 'Construction project coordination can capture the request, reason, relevant records and who needs to approve it. Mark the item as pending and explain what schedule, materials or quote could be affected. Your project lead confirms the change before work or costs are committed.']
    ],
    review: [
      ['Match appointments to their confirmations', 'Sample an ordinary appointment, a reschedule and an open exception. Check site, crew, time and access notes against the latest approved record. Field service scheduling should show what each party was told and what needs a further update.'],
      ['Check the project and document log', 'Compare a submittal or request for information with the source file and the agreed reviewer. A construction virtual assistant can identify records that have no version, owner or due date. Use those gaps to improve the checklist before the next project.'],
      ['Check closeout and billing inputs', 'Sample a completed job and confirm that the agreed evidence, time and supplier reference are present. Construction project coordination can route any discrepancy to the owner responsible for approving the work or expense. Keep open decisions separate from items ready for billing.']
    ],
    handover: 'Hand over the job schedule, approved drawings and open supplier changes. Include who tells the crew and customer when dates move.',
    handoverRows: [
      ['Job and crew schedule', 'Record approved windows, site notes, last contact and job owner.', 'Continue field service scheduling from the confirmed plan.'],
      ['Suppliers and deliveries', 'Link purchase records, revised estimates and affected jobs.', 'Follow up on outstanding delivery details and route a change if needed.'],
      ['Documents and changes', 'Keep the latest approved version, open requests and scope decisions.', 'Prepare the next handoff with the correct instructions and owner.'],
      ['Closeout and billing', 'Save job evidence, timesheets and missing items for the reviewer.', 'Move complete records forward and leave exceptions with the right approver.']
    ],
    planning: {
      id: 'plan-coverage',
      title: 'Plan construction project coordination around site activity',
      intro: 'Set a daily dispatch check and a separate project review. Busy site days and supplier changes may need a different response window from ordinary paperwork.',
      items: [
        ['Daily dispatch', 'Agree when field service scheduling checks new requests, confirmed appointments and travel or access changes. Keep a short list of issues due before the crew leaves and identify a backup for decisions if the project owner is already on site.'],
        ['Active projects', 'Have the construction virtual assistant maintain a regular document, supplier and deadline review. Give requests for information, approvals and delivery dependencies their own statuses so an open technical question is visible before the affected work starts.'],
        ['Closeout and invoice periods', 'Use construction project coordination to gather completion evidence, approved time and source records before the billing cutoff. Show which files are ready, what still needs review and who can resolve discrepancies before the pack reaches finance.']
      ]
    }
  },
  'nonprofits-membership': {
    title: 'A nonprofit virtual assistant coordinates a programme deadline',
    setupTitle: 'Set up donor and member administration',
    reviewTitle: 'Review grant research support and programme records',
    context: 'In this fictional example, a nonprofit is preparing a volunteer event while a grant opportunity comes up for review. A donation needs an acknowledgement and a member asks about renewing. Donor and member administration gives each item a record and an owner without mixing contact details, event logistics and grant decisions in one inbox.',
    steps: [
      ['Check the donor and member records', 'Use the approved CRM fields to record the donation or renewal request and confirm the source and contact preference. Donor and member administration can prepare the acknowledgement or reply using the current template. Flag a duplicate or uncertain permission before adding someone to a campaign.'],
      ['Coordinate the event and open assignments', 'A nonprofit virtual assistant can maintain the volunteer roster, check signups and gaps, and send the approved reminders. Record the next action for any unfilled shift or outstanding vendor item. Keep costs, safety questions and public statements with the programme lead.'],
      ['Prepare a sourced grant review packet', 'Use grant research support to check the funding source, published criteria, deadline and required documents. Link the original guidance and gather the materials already approved for review. Put questions about eligibility, budget and programme claims in the decision list for the grant owner.']
    ],
    setup: [
      ['Donor and member administration rules', 'Provide the permitted CRM fields, consent and contact preferences, approved acknowledgement wording and who can change a record. Share an example of a donation and an incomplete renewal. Agree which details belong in a restricted workspace and which can appear in a status report.'],
      ['Volunteer and event operating notes', 'Give the nonprofit virtual assistant the event schedule, roles, capacity and backup contact. Confirm which communications the assistant can send and which changes need approval. Document the route for an unfilled shift, cancellation or late change to the venue.'],
      ['Grant research support checklist', 'List priority programmes, geographic or other inclusion criteria, approved sources and the internal owner for each opportunity. Define the evidence needed for a review pack and who decides whether to apply. Identify the person who can approve programme descriptions, budgets and submissions.']
    ],
    exceptions: [
      ['Two contacts look like the same donor', 'Donor and member administration can link the potential match and document how the records differ. Keep preferences and transaction references intact until the authorised owner decides whether to merge. Pause an acknowledgement or campaign update if the destination or consent is uncertain.'],
      ['A volunteer shift is uncovered', 'The nonprofit virtual assistant can check the approved backup list and share available options with the event owner. If the change affects the programme or a participant commitment, ask for approval before sending updates. Record who was contacted and which coverage is still pending.'],
      ['A deadline or criterion is unclear', 'Grant research support can record the exact question, published source and date, and ask the grant owner to confirm the next action. Keep unverified eligibility or budget claims out of the draft submission. Record who will clarify the point and by when.']
    ],
    review: [
      ['Check records and acknowledgement status', 'Sample a donation, a renewal and an open exception. Confirm the source record, approved contact preference and whether the intended communication was drafted, approved or sent. Donor and member administration should leave the next owner visible without exposing unnecessary details.'],
      ['Review event readiness', 'Ask the nonprofit virtual assistant to show confirmed volunteers, unresolved shifts, vendor commitments and the timing of the next update. Compare a sample with the source roster. Check that access to personal details is limited to the people who need them for the event.'],
      ['Verify grant evidence before review', 'For grant research support, compare the deadline, requirements and materials with the original funding source. Confirm the reviewer can tell which records are verified and what still needs a programme or finance decision. Keep any approved changes with the evidence.']
    ],
    handover: 'Give the next nonprofit virtual assistant the programme calendar and donor and member administration queue. List owners for volunteer changes, public updates and grants.',
    handoverRows: [
      ['Donor and member records', 'Link the current CRM record, approved contact route and unresolved duplicate or consent questions.', 'Continue routine follow-ups and send exceptions to the record owner.'],
      ['Events and volunteers', 'Record current shifts, confirmations, outstanding logistics and the backup contact.', 'See which tasks need attention before the event starts.'],
      ['Grant opportunities', 'Keep the source, due date, required materials and review status.', 'Follow up on missing inputs without changing approved claims.'],
      ['Board and finance notes', 'Link the current agenda, draft reporting inputs and decisions that need approval.', 'Prepare the next meeting or accounting handoff using the current version.']
    ],
    planning: {
      id: 'plan-coverage',
      title: 'Plan coverage for events, renewals and grant research support',
      intro: 'A routine member queue and an event week have different deadlines. Set review dates around the points when a programme, finance or board owner needs to act.',
      items: [
        ['Routine member and donor work', 'Choose when donor and member administration checks new records, renewals and acknowledgements. Give the record owner a separate list of duplicates and consent questions. Keep the last approved communication visible before handing the queue to another person.'],
        ['Events and volunteer peaks', 'Use a nonprofit virtual assistant to prepare a pre-event roster review and confirm which changes need the lead. Record the cutoffs for reminder messages, venue updates and vendor confirmations so a substitute can pick up the right item.'],
        ['Funding and board deadlines', 'Plan grant research support around the public deadline and the internal review window. Prepare the eligibility questions, approved records and draft reporting inputs early enough for the programme and finance owners to check them. Record what changed and which version reached the board or grant reviewer.']
      ]
    }
  },
  'startups-small-business': {
    title: 'A startup virtual assistant turns a founder’s inbox into an operating queue',
    setupTitle: 'Prepare a brief for a startup virtual assistant',
    exceptionsTitle: 'When founder operations support needs an approval',
    reviewTitle: 'Review work from a virtual assistant for small businesses',
    context: 'In this fictional example, a founder prepares for a customer demo while investor meeting notes, a LinkedIn post and supplier receipts are waiting in different tools. Founder operations support starts with one shared record. The founder can review what needs a decision and give routine items to the right owner.',
    steps: [
      ['Pick the first workflow and agree the output', 'A startup virtual assistant can start with a daily brief covering urgent messages, meetings and open decisions. Identify which sources to check and the format that helps the founder respond. Test one normal day and one busy day before adding CRM or finance work.'],
      ['Connect the relevant records and owners', 'A virtual assistant for small businesses can turn a demo request into an agreed CRM action, link the approved LinkedIn draft to its reviewer and put receipts in the finance queue. Record where each task belongs and what the next owner needs to act on it.'],
      ['Review the handoff before expanding', 'At the end of the first cycle, check what moved without follow-up and which items waited for the founder. Founder operations support can separate scheduling, research and coordination from pricing, product or spending decisions. Use what you learn to decide which workflow to add next.']
    ],
    setup: [
      ['Founder operations support priorities', 'Give the assistant a list of urgent decisions, current deadlines and tasks that can be batched. Share the daily brief, CRM or project tracker format and an example of an item that should go straight to the founder. Agree how to surface a decision if the founder is away.'],
      ['Tools and permissions for a startup virtual assistant', 'Identify the inbox, calendar and workspaces for the first workflow. Record which changes are allowed, where sensitive records belong and who can approve new access. Use a fictional record or a limited batch to test links and handoffs before broader access is granted.'],
      ['Capacity for a virtual assistant for small businesses', 'Describe a normal week and any upcoming launch, event or finance deadline. Confirm the expected volumes, response windows, review time and approval contacts. Start with the queues your team can explain and review rather than assigning several unrelated requests at once.']
    ],
    exceptions: [
      ['A demo request needs a product or commercial decision', 'A startup virtual assistant can record the request, link the prospect history and book an approved time. Route questions about a product commitment, price or scope to the founder or sales owner. Record the last response and date for the next update.'],
      ['A release and an investor deadline compete', 'Founder operations support can show the items blocked by the same reviewer, the due dates and the work that can continue. Offer the founder a short decision list with affected deadlines. Update schedules and approved messages once the priority is confirmed.'],
      ['Work arrives outside the agreed scope', 'A virtual assistant for small businesses can capture the request and show which tools, access and reviewer it would need. Keep it visible as a proposed addition. Agree capacity and decision limits before treating it as part of the recurring queue.']
    ],
    review: [
      ['Review the founder brief with a real day', 'Compare a few recorded items with the source and ask whether the next action is clear. A startup virtual assistant should show which actions are complete and which need the founder. Check whether anything urgent was buried in routine updates.'],
      ['Sample a cross-team handoff', 'Follow one demo, content item or receipt from the source to its destination. Founder operations support should keep the next owner, deadline and approval linked. Fix missing or ambiguous instructions before they affect another queue.'],
      ['Check how much work the team can review', 'Review how many decisions are waiting and how long they have been open. A virtual assistant for small businesses can report repeated blockers, missing records and work that rolls over. Agree one practical change and check whether it helps in the next review.']
    ],
    handover: 'Keep the founder brief, current projects, open decisions and next deadlines together. A replacement startup virtual assistant should be able to see who owns each queue, what was promised and which tasks are ready to continue.',
    handoverRows: [
      ['Founder priorities', 'Record the current brief, upcoming decisions and escalation contacts.', 'Resume founder operations support from the latest priorities.'],
      ['Sales and client work', 'Link CRM records, next meetings and open onboarding items.', 'Continue approved follow-up and route commitments to the owner.'],
      ['Content and launch', 'Keep current assets, approvals, dependencies and release dates together.', 'Prepare the next approved step without sending an outdated draft.'],
      ['Finance and hiring', 'Record pending receipts, roles or onboarding tasks and their review owners.', 'Follow up under the agreed rules and leave hiring or payment decisions with the team.']
    ],
    planning: {
      id: 'plan-coverage',
      title: 'Grow founder operations support one workflow at a time',
      intro: 'Start with the queue that interrupts the founder most. Review completed work and the approval load before committing to another recurring workflow.',
      items: [
        ['First recurring task', 'Give the startup virtual assistant a single output to prepare and a named person to review it. Agree a time to check how exceptions were handled. Use the feedback to write rules for the next batch before adding more tools or permissions.'],
        ['Launches and hiring periods', 'A virtual assistant for small businesses can prepare checklists for launch dependencies, candidate scheduling or customer follow-ups. Share expected peaks and identify the people who approve changes. Review availability before moving work that has an existing deadline or owner.'],
        ['When the process is stable', 'Use founder operations support to document the repeatable steps and the cases that still need human review. Decide whether to add another queue, assign a second reviewer or test automation in a small batch. Keep each change visible in the work log.']
      ]
    }
  }
};
