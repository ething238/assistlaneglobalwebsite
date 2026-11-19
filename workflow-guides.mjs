// Worked examples describe possible operating rules using fictional scenarios.
export const workflowGuides = {
  'administrative-support': {
    title: 'A morning brief that earns its place',
    context: 'An executive shares an inbox and calendar with an assistant for a sample two-week pilot. The first goal is a reliable morning brief that separates decisions from information. The pilot also needs to protect private appointments and prevent conflicting instructions from two people who use the same calendar.',
    steps: [
      ['Read the inbox against the calendar', 'At the start of the agreed window, check new messages for a deadline or a change to an event. Link the original email to the calendar item. Put changes that affect travel time or another participant in the decision list, even when the new time itself is available.'],
      ['Make decisions easy to find', 'Put the time-sensitive items first. Write the action the executive needs to take, give the relevant deadline, and link to the source. Keep drafted replies and ordinary reminders in their own groups so a reader can scan the brief without opening every thread.'],
      ['Close the day with a record', 'Record the decisions made, which invitations changed, and what still needs a reply. Keep open actions in one place rather than copying a running list into every email. At the next review, confirm what should move to the following day.']
    ],
    setup: [
      ['Priority contacts', 'List the people and organisations that should always be flagged. For each, agree whether a message should go straight to the executive or into the next brief. A title alone is rarely enough to determine urgency.'],
      ['Calendar preferences', 'Write down working hours, time zones, buffers and protected blocks. Give two examples of meetings that may be moved and one that requires approval even if it looks routine.'],
      ['Sending authority', 'Use separate rules for drafting, sending and changing an invitation. Confirm which mailbox or alias each rule applies to and where to record when a message has been approved.']
    ],
    exceptions: [
      ['Conflicting instructions', 'Two organisers ask for the same protected slot. Note the conflict, show the alternatives and ask the calendar owner to choose before accepting either request.'],
      ['A message contains a sensitive decision', 'Move the decision to the agreed private channel. Keep the general work log to the minimum needed to show that it is awaiting review.'],
      ['A deadline is unclear', 'Check the source and time zone first. If there is still a gap, flag the assumption and suggest the safest next step before moving another person’s meeting.']
    ],
    review: [
      ['Decision quality', 'Look at three items escalated during the week. Check whether each gave the executive enough context to act and whether a routine item could have been handled under a clearer rule.'],
      ['Scheduling accuracy', 'Compare a sample of invites with the source messages. Confirm the attendee list, time zone, meeting location and any buffer that was promised.'],
      ['Open action age', 'Review actions that rolled over more than once. Decide whether the owner is wrong, the deadline changed or the executive needs to intervene.']
    ],
    handover: 'For an absence, share the current brief, the list of protected commitments and the location of the approved reply templates. Keep personal calendar details out of the general handover. Confirm who can make urgent changes during the coverage window.',
    planning: {
      id: 'plan-coverage', title: "Set inbox and calendar coverage around the executive’s day.",
      intro: "Start by identifying the windows when someone needs a decision. A morning digest, a pre-meeting check and a travel-day update serve different purposes.",
      items: [
        ["Ordinary days", "Choose one time for the inbox brief and agree when it needs a second pass. A morning brief might cover changes for the next day and outstanding replies, with a later check reserved for meetings that can no longer wait."],
        ["Travel or deadline weeks", "Share the dates, time zones and people who can approve changes. Ask for a separate list of flight changes, rescheduling requests and meeting conflicts so routine messages stay out of the urgent queue."],
        ["When the executive is unavailable", "Give the assistant a backup for each decision type, such as the meeting owner for a reschedule or the finance lead for a booking change. Record how long to wait before escalating and what can safely be drafted while waiting."]
      ]
    }
  },
  'customer-support': {
    title: 'One customer issue across two queues',
    context: 'In this example, a customer writes to the support inbox about a delayed order, then opens a second ticket from another channel. The first response should reflect the latest order record, avoid duplicate promises and leave a clear owner for any exception. The same pattern works for a delayed service appointment.',
    steps: [
      ['Bring the history together', 'Check the order reference and match the new ticket to the existing conversation. Link the duplicate without closing the only channel the customer can still see. Record the preferred contact route and what the customer has already been told.'],
      ['Use the current policy', 'Read the latest shipment record and compare it with the support guidance. Draft a reply that acknowledges the delay, states what is known and explains the next update. Separate a carrier estimate from a commitment the store has actually approved.'],
      ['Carry the exception forward', 'If the customer requests a replacement outside policy, note the request, the evidence checked and the decision needed. Route the ticket to the named owner. Add a reminder for the next update so the customer is not left to restart the conversation.']
    ],
    setup: [
      ['Ticket categories', 'Choose labels that drive an action, such as status request, account change or policy exception. Agree which fields are required for each category and check that the labels match the help desk.'],
      ['Response examples', 'Supply approved examples for common requests and explain where they can be personalised. Identify phrases that need a reviewer, such as a promise about a refund or a service date.'],
      ['Coverage and ownership', 'Define queue hours, urgent flags and the next owner outside those hours. Include a backup decision maker for exceptions that cannot wait for the normal review.']
    ],
    exceptions: [
      ['Policy differs from the customer’s expectation', 'State what the records show, log the requested exception and route the decision. A draft reply can wait for approval while the ticket stays visible in the queue.'],
      ['A message contains sensitive account details', 'Use the established verification route and avoid reproducing the details in a general note. Ask the owner to confirm the next allowed action.'],
      ['The customer writes again before review', 'Link the follow-up to the open case and confirm the next update window. Keep a single person accountable for the answer.']
    ],
    review: [
      ['First reply accuracy', 'Review a small sample against the actual policy and source records. Check whether each reply sets an expectation the team can meet.'],
      ['Age of blocked tickets', 'Separate tickets waiting for a customer from tickets waiting for an internal decision. Assign an owner or review date to each unresolved internal item.'],
      ['Duplicate handling', 'Look for customers who contacted more than one channel. Check whether the replies conflicted and whether the next owner could see the full history.']
    ],
    handover: 'A new queue owner should receive the open exceptions list, current policy links and the latest customer promise for each urgent ticket. Where two teams share coverage, agree which person sends the next update before the changeover.',
    planning: {
      id: 'plan-coverage', title: "Choose support hours around the queue.",
      intro: "Look at when requests arrive, what can be answered from policy and how quickly your team can resolve exceptions. Those three things shape useful coverage.",
      items: [
        ["Daily queue", "Pick the channels that should be checked together. Agree what counts as a first response and what counts as a completed case, so a holding reply never makes an unresolved issue disappear from the queue."],
        ["Launches or busy weekends", "Share the dates and any revised delivery windows, returns rules or product changes before volume rises. Flag the topics that should have a prepared reply and identify when internal staff can review refund or account requests."],
        ["End of coverage", "Leave the next shift a short list of cases with promised updates, pending approvals or an owner outside support. Keep each ticket’s original timeline visible so a customer can get an answer without repeating the story."]
      ]
    }
  },
  'crm-lead-operations': {
    title: 'Recover an enquiry with no owner',
    context: 'A contact arrives from an event list and also submits a website enquiry. The CRM contains an older record for the same organisation. A good handoff recognises the overlap, preserves the contact’s original context and puts a concrete action in front of the right owner.',
    steps: [
      ['Find and compare the records', 'Search the CRM using the email and organisation. Check whether the older record is active and whether there is an open opportunity. Keep the source and date of the new enquiry even if the contact is a confirmed match.'],
      ['Apply the agreed routing rule', 'Confirm the relevant product, region or existing account owner using the rules the sales team supplied. If the information is incomplete, assign the enquiry to the triage queue and note the missing field. Avoid advancing the stage by guessing.'],
      ['Make the next action explicit', 'Set a task with a due date, give the owner the enquiry context and record any follow-up that has already been sent. A pipeline reviewer should be able to open the record and see the reason for the action without searching another tool.']
    ],
    setup: [
      ['Field definitions', 'List the required contact and opportunity fields. Specify acceptable values, the source of truth and whether a missing value should be left blank or sent to a reviewer.'],
      ['Routing and consent', 'Provide the approved rules for assigning new enquiries and flag channels with different permissions. Document who reviews an uncertain consent status before a message is sent.'],
      ['Trial records', 'Choose a new enquiry, an existing customer and a likely duplicate for the first batch. Agree the expected outcomes so the team can validate the rules against real edge cases.']
    ],
    exceptions: [
      ['Similar records may be different people', 'Preserve both records and list the fields that disagree. The approved reviewer decides whether to merge, update or leave them separate.'],
      ['A lead has two possible owners', 'Use the documented tie-break rule if it applies. Otherwise record both candidates and assign the decision to the pipeline owner.'],
      ['A bulk cleanup would change reporting', 'Pause before changing the affected fields. Show a sample of the proposed changes and ask the report owner to confirm the impact.']
    ],
    review: [
      ['Unassigned enquiries', 'Review the queue for items without an owner. Separate gaps in the intake form from gaps in the assignment rules.'],
      ['Follow-up completeness', 'Sample active records and check the owner, next action and date. A populated stage does not help if nobody knows who should act.'],
      ['Data quality', 'Compare a small set of updates with the original source. Track fields that repeatedly need correction so the team can improve the intake process.']
    ],
    handover: 'Record the current routing rules, the last reviewed batch and unresolved merge decisions. If someone takes over the queue, give them access to the decisions log and define who approves the next import.',
    planning: {
      id: 'plan-coverage', title: "Set a clear follow-up rhythm for each source.",
      intro: "A demo request and a batch from an event call for different response windows. Agree when each source is checked, where ownership is assigned and how overdue work is surfaced.",
      items: [
        ["High-intent enquiries", "Decide how often to review demo forms and what information is required to route a request. Keep the source message linked and flag incomplete requests for review before assigning them to the wrong account."],
        ["Event and campaign lists", "Set aside a separate review pass to check source, duplicate records and any fields your team requires before outreach. A small reviewed batch makes it easier to find mapping errors before they affect a full import."],
        ["Owner gaps", "Name a backup for unassigned enquiries and set the point at which an overdue task goes back to the sales lead. The backup needs the last touch, the promised next step and any reason the original owner paused."]
      ]
    }
  },
  'marketing-content': {
    title: 'Take a campaign item from brief to release',
    context: 'A marketing team plans an email and a social post from one approved article. Both use an image that is still under review. The workflow needs to preserve the source copy, make the different versions easy to review and prevent either item from going live before the asset is cleared.',
    steps: [
      ['Turn the request into an editorial item', 'Record the audience, objective, source article, two output formats and final reviewer. Split the deliverables into separate tasks with one shared dependency for the image. A calendar date alone does not say what is ready to ship.'],
      ['Prepare previews in the correct channels', 'Adapt the approved material to the agreed length and format. Attach previews and the current asset version to the review item. Flag any change to a claim or promise so the reviewer can distinguish it from routine formatting.'],
      ['Release the approved version', 'Check the approval against the specific draft, link destinations and publication time zone. After scheduling or publishing, record the final link and update the calendar. Carry any unapproved derivative forward as a separate item.']
    ],
    setup: [
      ['Brief template', 'Use fields for audience, format, objective, due date and approver. Show a completed example so the assistant can tell when source material or a decision is missing.'],
      ['Asset library', 'Identify the folder or system that holds approved copy, images and templates. Use version names that a reviewer can recognise without comparing several files by eye.'],
      ['Publication rules', 'Confirm who can schedule or publish, which channels require preview links, and how to record approval. Agree when a time-sensitive exception should go to the campaign owner.']
    ],
    exceptions: [
      ['An asset lacks permission to publish', 'Keep the item in review and note what evidence is missing. Offer an approved alternative only if the reviewer can confirm that it fits the brief.'],
      ['Two reviewers send conflicting edits', 'Record both requests against the current draft and route them to the final approver. Do not schedule a version while the decision is open.'],
      ['A date moves after scheduling', 'Check dependent items and time zones, update the calendar and ask the channel owner to confirm the new date before replacing the scheduled version.']
    ],
    review: [
      ['Approval trace', 'Pick a published item and follow it back to the approved draft, asset and reviewer. If any link is missing, improve how the handoff is recorded.'],
      ['Release readiness', 'Look at the next week’s calendar and distinguish ready items from drafts waiting on an asset, review or decision. Assign someone to each blocked item.'],
      ['Reuse quality', 'Compare a derivative with its source. Confirm that headlines, links and claims remain accurate for the intended channel and audience.']
    ],
    handover: 'Share the publishing calendar, the approved assets folder and the list of items still under review. Identify who can reschedule a live queue and where released URLs are recorded.',
    planning: {
      id: 'plan-coverage', title: "Build a publishing calendar around approvals.",
      intro: "Use the first few releases to check whether approval and production windows are realistic. Dates should show when an item becomes ready to work on and when it can actually go live.",
      items: [
        ["Recurring publishing", "Give each channel a cutoff for approved copy and assets. Reserve a separate window for formatting, checking links and building previews. A schedule with both dates makes it easier to see whether the review queue or the production queue is causing a delay."],
        ["Launch weeks", "Mark items that rely on a single go-live decision. Keep the final creative, web destination and campaign tracking together, and decide whether related posts should move as a group if a page slips."],
        ["Late changes", "Record who can approve a different date or a last-minute copy change. Keep the old version linked for reference and verify that the new change is reflected wherever the item was scheduled."]
      ]
    }
  },
  'seo-wordpress': {
    title: 'Publish a page with a traceable release record',
    context: 'A sample page update changes the introduction, adds an internal link and replaces a hero image. The client wants a preview and a clear summary of the work. The update is a good pilot because it combines familiar editing with a few checks that matter on the live site.',
    steps: [
      ['Create the preview', 'Open the correct page in the agreed editor and confirm which fields may be changed. Use the approved brief and assets, then record the preview link. Keep any out-of-scope layout or plugin question in a separate note.'],
      ['Run the page checks', 'Compare the preview with the source brief. Review the heading order, link target, image placement and supplied alternative text. Check a narrow viewport for wrapping and make sure the old and new versions are easy to compare.'],
      ['Publish after sign-off', 'Confirm the approved version and release time. Open the live URL afterward and record which checks were repeated. If something differs from the preview, write down what changed and give the site owner a clear decision to make.']
    ],
    setup: [
      ['Editing permissions', 'Identify the editor role, pages and environments in scope. Decide who has authority to publish, change templates or make changes that affect other pages.'],
      ['Definition of done', 'Use a checklist that includes the preview link, copy comparison, metadata when in scope, accessibility details and live checks. Give an example of an approved release record.'],
      ['Rollback and escalation', 'Agree who can restore the previous version and where to find it. Route plugin, DNS, indexing or performance questions to the relevant specialist.']
    ],
    exceptions: [
      ['The update changes the URL', 'Flag internal links, redirects and indexing implications for the site owner. Wait for the approved plan before editing the URL or publishing.'],
      ['Preview and live layouts disagree', 'Capture the affected viewport and page state. Ask the responsible owner to decide whether to revert, fix or leave the page while the issue is investigated.'],
      ['The brief asks for a plugin or theme edit', 'Separate the request from routine publishing. Record why it needs a specialist and keep the approved content update in its existing queue.']
    ],
    review: [
      ['Copy and link accuracy', 'Sample recent releases against their source briefs. Look for changed destinations, missing text or images that were approved in a different version.'],
      ['Live verification', 'Confirm the release record includes the real URL and a check of the live page. Keep the preview link for context where the workspace allows it.'],
      ['Recurring defects', 'Group repeated issues by source, such as incomplete briefs, inconsistent assets or a missing mobile check. Improve the relevant review step instead of adding a vague final reminder.']
    ],
    handover: 'Share the approved queue, change log, checklist and the contacts for staging, publishing and rollback. The next editor should be able to see exactly which changes are authorised and which still need a decision.',
    planning: {
      id: 'plan-coverage', title: "Separate routine edits from releases that need oversight.",
      intro: "A draft formatting change can run on a regular schedule. Changes to URLs, templates or tracking deserve a window when the appropriate reviewers are available.",
      items: [
        ["Routine page work", "Group approved formatting changes, image updates and link checks into a small batch. Capture the draft link and a short change note so the reviewer can compare what was requested with what will appear on the live page."],
        ["Coordinated releases", "For a new campaign page, agree when the destination, analytics tags and related links will be ready to verify. Keep access and approval with the people who can sign off on the changes affecting navigation or measurement."],
        ["When something fails", "Record what was changed, the pages involved and the first symptom. Agree who can restore the previous version or pause a scheduled release. A reviewer should be able to see where the issue started before deciding what to reverse."]
      ]
    }
  }
};
