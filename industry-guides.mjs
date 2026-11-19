export const industryGuides = {
  finance: {
    title: 'An invoice arrives with incomplete details',
    context: 'In this example, a vendor sends an invoice without the purchase reference the finance team expects. The assistant prepares an exception for review. The purpose is to save the approver from reconstructing the history while keeping payment authority with the finance team.',
    steps: [
      ['Log the original invoice', 'Record when it arrived, the vendor reference and where the supporting document is stored. Check whether the invoice already exists in the intake queue. If there is a possible match, attach the reference and flag it for review rather than creating a second payable item.'],
      ['Show the information gap', 'Compare the invoice with the purchase record your team identifies as authoritative. Record the missing reference and any other mismatch without changing either source. If a routine clarification is allowed, note who was contacted and when a response is due.'],
      ['Route the decision', 'Give the reviewer the invoice, the expected reference and a short description of the gap. Mark who owns the next action and what should happen if the answer arrives after the period-end review. Record the reviewer’s decision in the approved system.']
    ],
    setup: [
      ['Intake fields', 'Confirm which fields are safe to record in the queue and which must stay in the source system. Provide an example with a missing purchase reference and an example of a suspected duplicate.'],
      ['Authority map', 'Write down who can clarify, approve, post, adjust or pay an invoice. Assign an alternate reviewer for urgent exceptions, and record which tasks are administrative only.'],
      ['Period deadlines', 'Share the review cadence and reporting dates. Agree whether late items enter the current review or the next one and who decides when a cut-off exception is needed.']
    ],
    exceptions: [
      ['Vendor details have changed', 'Keep the original message and alert the authorised owner through the established channel. The assistant can document the request but should not update payment details or verify them on behalf of the approver.'],
      ['A potential duplicate is already in review', 'Link the two references and show how they differ. Ask the reviewer to decide which record is authoritative before the queue is closed.'],
      ['The owner is absent at cut-off', 'Use the agreed backup or flag the item for the next review. Include the deadline and why it cannot proceed so the substitute can make an informed decision.']
    ],
    review: [
      ['Approver readiness', 'Sample a few exceptions. Check whether each identifies the source, the discrepancy and the decision requested without requiring a second round of information gathering.'],
      ['Queue ownership', 'Separate items awaiting a vendor from items awaiting finance review. Confirm that every item has a next owner and a review date.'],
      ['Source integrity', 'Check the intake record against the original invoice. Review whether copying or reformatting introduced omissions, and update the intake fields if needed.']
    ],
    handover: 'A period-end handover should include the current exception list, its cut-off date and the link to the authorised approval record. Keep sensitive financial details in the source system and point the next owner to the appropriate access route.',
    planning: {
      id: 'plan-coverage', title: "Prepare for a busy close without blurring approvals.",
      intro: "Compare a normal week and a close week before setting coverage. Decide what gets logged first, who can review exceptions and where the review record belongs.",
      items: [
        ["Before the cutoff", "Put recurring dates and named reviewers in the checklist. Record which invoices need a missing purchase reference, who can supply it and when to flag the item so it stays visible in the close review."],
        ["During the close", "Keep open record checks in a queue with a status, a due date and a link to the source. Route bank detail changes and payment requests through the finance team’s own approval process before any action is taken."],
        ["After the cutoff", "Summarise what was resolved, what moved to the next period and which items still need a decision. Keep the source documents in the agreed system so a reviewer can retrace the status without another export."]
      ]
    }
  },
  'real-estate': {
    title: 'Book a viewing without losing the enquiry history',
    context: 'A prospect asks about a property through a listing portal and follows up by email. The viewing schedule is shared across several agents. A sample handoff links the enquiry, appointment and next action so the agent can spend time on the conversation itself.',
    steps: [
      ['Match the enquiry to the property', 'Check the listing reference and record the channel, contact preference and what the prospect asked. Look for an existing record before opening a new one. If the enquiry concerns a similar listing, confirm the address reference before using a template.'],
      ['Offer an approved viewing window', 'Check the agent’s calendar and the property access instructions. Offer only the agreed windows and confirm who will attend. Record confirmation and route any access request that the assistant cannot verify under the normal rules.'],
      ['Prepare the agent’s follow-up', 'Give the agent the confirmed time, property reference, source message and outstanding questions. After the viewing, note the outcome and schedule the agreed next action. Pass questions about terms or pricing directly to the agent.']
    ],
    setup: [
      ['Listing source of truth', 'Identify the approved source for availability, property details and images. Confirm which fields can be updated after approval and how a change should be recorded across portals.'],
      ['Viewing rules', 'Give a calendar window, travel buffers and instructions for requests outside ordinary hours. Document who can provide access and which viewing changes require consent from another party.'],
      ['Follow-up rules', 'Supply approved scripts and identify which channels may be used. Give an example of an ordinary reminder and an example of a question that belongs with a licensed agent.']
    ],
    exceptions: [
      ['The portal and source sheet disagree', 'Record both values and ask the listing owner which is current. Hold the change until the owner approves the source data.'],
      ['A viewing cannot go ahead', 'Use the approved cancellation route, explain the next available option and confirm the calendar update. Give the agent the previous appointment context so they can follow up.'],
      ['A prospect asks about an offer', 'Log the request and contact information in the approved system. Route it to the agent with the source message and any deadline.']
    ],
    review: [
      ['Enquiry coverage', 'Check a sample of portal and email messages against the CRM. Look for missed records, duplicate enquiries and items without a named agent.'],
      ['Viewing accuracy', 'Compare appointments with the confirmed time, attendees and access instructions. Review cancellations separately so they remain visible for follow-up.'],
      ['Readiness for follow-up', 'Open a completed viewing record and ask whether the agent can tell what happened and what action is due without searching for another message.']
    ],
    handover: 'Give the next coordinator the active viewing calendar, unresolved enquiries and the current listing update queue. Pass offer terms and other decisions through the named agent rather than a general operations note.',
    planning: {
      id: 'plan-coverage', title: "Cover enquiry peaks around listings and viewings.",
      intro: "Open houses, newly listed properties and schedule changes create different kinds of follow-up. Agree who responds when agents are showing properties or travelling.",
      items: [
        ["New listing days", "Prepare approved listing details and appointment windows before enquiries start. Log the property reference, enquiry source and requested viewing time together so an agent can check the full conversation before calling back."],
        ["Viewing windows", "Define which slots can be offered and who can approve a late change. If an agent’s schedule shifts, keep a short list of affected appointments and the last update each prospect received."],
        ["After the event", "Log attendance, follow-up commitments and any enquiries that still need a response. Route questions about offers, terms or screening to the responsible agent with the original question attached."]
      ]
    }
  },
  ecommerce: {
    title: 'Keep a delayed order moving through the right queue',
    context: 'A customer asks about an order that has left the store but has no recent carrier scan. They also want to know whether a replacement is possible. This example separates the routine status update from a commercial decision the store owner may need to make.',
    steps: [
      ['Confirm the order and shipment', 'Match the help desk ticket with the order record, SKU and shipment reference. Check for partial shipments or a recent carrier update. Note what the systems agree on and which information is still unknown before replying.'],
      ['Give the customer a useful next update', 'Use approved wording and state the current shipment status. Explain when the store will check again and log the message on the order. Keep a supplier follow-up separate from the promise made to the customer.'],
      ['Escalate the replacement request', 'Record what the customer asked for, the relevant policy and whether an exception is needed. Assign the decision to the store owner with a review date. Update the customer after the decision using the approved channel.']
    ],
    setup: [
      ['Order and ticket matching', 'Confirm which identifier connects store orders, marketplace orders and help desk tickets. Test an order with multiple items or a shipment split across carriers.'],
      ['Current return policy', 'Share the approved response examples and the conditions under which a ticket can close. Agree who reviews refund, cancellation and replacement exceptions.'],
      ['Inventory and supplier handoff', 'List the systems that hold stock information, the fields the assistant can change and the supplier contact route. Confirm whether an alert is enough or a response must be chased.']
    ],
    exceptions: [
      ['Tracking conflicts with the customer’s report', 'Record the status and the customer’s account. Route any claim or refund decision with both pieces of context rather than treating a tracking scan as the final answer.'],
      ['A product page and the stock record differ', 'Flag the SKU and both values. Ask the authorised owner to approve the correction before updating availability or pricing.'],
      ['A promotion creates more requests than planned', 'Group urgent exceptions and establish which replies can use approved templates. Confirm the temporary coverage window before promising faster updates.']
    ],
    review: [
      ['Accuracy across systems', 'Review a small set of tickets against order records and carrier updates. Check that the customer received a realistic status and time for the next update.'],
      ['Age of exceptions', 'Separate open supplier requests, customer replies and store decisions. Give each blocked order a named owner and a date to revisit it.'],
      ['Catalogue changes', 'Compare released changes with the approved product brief and look for incorrect variants, broken links or images attached to the wrong SKU.']
    ],
    handover: 'A change of coverage should include unresolved order issues, the last update each customer received and which decisions still belong to the store owner. Keep order details within the approved workspace.',
    planning: {
      id: 'plan-coverage', title: "Plan ahead for promotions and order spikes.",
      intro: "Use a recent busy day to see which requests can be answered from order information and which need input from fulfilment, inventory or a store lead.",
      items: [
        ["Before the promotion", "Document which offers apply, where inventory updates appear and what delivery estimates are approved for replies. Agree which channels the assistant checks and who reviews exceptions while the promotion runs."],
        ["When orders are delayed", "Flag deliveries that are past the communicated date. Separate cases waiting on carrier tracking from those needing a replacement or refund decision. Keep the promised update time on each ticket so the next shift knows when to follow up."],
        ["After the rush", "Compare the unresolved queue with shipment status. Record recurring issues, such as a tracking delay or an unclear returns message, so the store owner can decide whether to change the customer instructions."]
      ]
    }
  },
  'agencies-publications': {
    title: 'Keep two client releases on the same calendar',
    context: 'An agency is preparing a landing page for one client and an editorial release for another. Both need the same designer’s time. A useful delivery handoff makes the conflict visible without mixing accounts, approvals or unpublished material.',
    steps: [
      ['Separate the briefs before grouping the work', 'Record each client’s objective, due date and final approver in its own workspace. Link the shared design dependency on the internal calendar. Share only the level of cross-account detail that the delivery team is authorised to see.'],
      ['Identify the decision that unblocks the calendar', 'Show what can proceed using approved assets and what depends on the designer. Give the account leads two realistic sequencing options and note which deadline would move under each. Ask the priority owner to decide.'],
      ['Deliver and preserve the approval trail', 'Keep preview links and feedback attached to the correct brief. Once the final version is approved, schedule it and record the release link. Send the account lead a short summary of published work and items still waiting.']
    ],
    setup: [
      ['Account boundaries', 'Identify separate folders, credentials and review channels for each client or publication. Explain how a shared resource can be scheduled without exposing another account’s material.'],
      ['Release criteria', 'Define which items require a preview, source checks or image clearance. Confirm which person signs off on the version that will be published.'],
      ['Calendar ownership', 'Agree who resolves conflicts, how urgent work is flagged and whether a missed decision should delay publication. Give the assistant a clear route to reach that owner.']
    ],
    exceptions: [
      ['A client sends feedback to the wrong channel', 'Record it in the correct review thread and confirm it applies to the current draft. Ask the account lead to check any conflicting instruction.'],
      ['A required asset has not cleared review', 'Mark the item blocked and show the effect on the calendar. Offer an approved substitute only when the client or editorial lead can sign off.'],
      ['Two deadlines are both described as urgent', 'List the dependencies and the effect of moving either item. Ask the priority owner to decide before changing dates.']
    ],
    review: [
      ['Version control', 'Pick one released item per account and trace it from brief to final approval and live link. Note where competing files made the reviewed version unclear.'],
      ['Delivery visibility', 'Check whether the status report distinguishes work that is scheduled, ready for review and blocked. Give each open item an owner and next action.'],
      ['Client separation', 'Review a sample of links, assets and folders. Confirm that each was shared through the account’s agreed channel with the expected access.']
    ],
    handover: 'Share the calendar, approved versions and decisions log with the next delivery owner. Keep separate client access and provide a clear point of contact for deadlines that are likely to move.',
    planning: {
      id: 'plan-coverage', title: "Make space for client review in the production schedule.",
      intro: "Manage client dates, assets and publishing access separately. A shared calendar can show upcoming work while individual records carry the details and decisions.",
      items: [
        ["Before production", "Ask for the approved brief, client contact and date for the first review. Record which asset version and channel are in scope, especially when two clients have similar work due in the same week."],
        ["During review", "Record when feedback was requested, who responded and which decision is still open. If approval is late, mark the affected release and check dependencies such as a scheduled newsletter or a campaign page."],
        ["At release", "Give the account owner a record with the final preview, approval reference and live location when available. Keep working files and feedback in the right client workspace so a new reviewer can take over without crossing account boundaries."]
      ]
    }
  },
  'ai-technology': {
    title: 'Route a product issue with the context engineering needs',
    context: 'A customer reports a failed onboarding step shortly before a product release. Support needs to acknowledge the issue, engineering needs steps to reproduce it and the product owner needs to decide what can be said about the release. The example shows how those threads stay connected.',
    steps: [
      ['Collect a safe reproduction record', 'Ask for the relevant steps, expected behaviour and environment using the approved support channel. Remove private data from the handoff and record what is known about impact. Keep hypotheses about the cause separate from observed facts.'],
      ['Put the issue in the right queue', 'Link the support case and create an issue with the current evidence, owner and open questions. Follow the documented routing rules. Ask engineering to confirm severity or priority when the impact is unclear.'],
      ['Coordinate the customer update', 'Track the owner’s decision and use approved language for the next customer reply. Keep release dates, capability claims and security answers with the responsible team. Record the promised follow-up date so it survives a shift change.']
    ],
    setup: [
      ['Intake and severity', 'Choose a template with steps to reproduce, expected behaviour and impact. Clarify which situations need immediate escalation and who determines severity when a case is unclear.'],
      ['Approved systems', 'Map where issues, customer data and public documentation belong. Confirm the rules for screenshots, logs and external tools before adding them to an issue or draft.'],
      ['Release ownership', 'List who reviews technical claims, approves release notes and handles sensitive questions. Provide an example of a product update that can follow the normal publication route.']
    ],
    exceptions: [
      ['An issue includes sensitive evidence', 'Keep the material in its approved channel and record only the reference in the general queue. Ask the appropriate owner how the issue can be reproduced safely.'],
      ['A customer asks for a delivery date', 'Route the request to the product or account owner. Keep the approved update focused on the next check-in until a date can be confirmed.'],
      ['A draft includes a new product claim', 'Flag the specific claim and its context. Ask the product owner to verify the wording before the assistant schedules or publishes it.']
    ],
    review: [
      ['Reproducibility', 'Sample recent issue handoffs and check whether the recipient had enough detail to reproduce or investigate the problem without asking for the same information again.'],
      ['Release trace', 'Check that release notes, documentation and customer updates link to approved wording. Record any claims that were removed or changed during review.'],
      ['Follow-up coverage', 'Review blocked onboarding cases for a current owner and next update. Keep an agreed route for cases that cross a support or engineering coverage window.']
    ],
    handover: 'Give the next owner the current issue links, outstanding customer updates and approvals for public wording. Preserve references to sensitive evidence without copying it into a general handover.',
    planning: {
      id: 'plan-coverage', title: "Prepare for a launch and its first support queue.",
      intro: "Product questions, onboarding requests and defects can arrive together. Set rules for where they go and when users receive an update.",
      items: [
        ["Before launch", "Gather current product notes, known limitations and approved onboarding answers. Identify who reviews questions about model behaviour, data handling or availability and record when each answer was last checked."],
        ["During launch", "Group reports that share a symptom and link them to the existing issue before opening another ticket. Collect the minimum version and environment details needed for triage and keep private customer data in the approved system."],
        ["After launch", "Give the product owner a list of repeated questions, issues awaiting confirmation and users owed an update. Update support notes after a fix or decision is confirmed so later replies reflect the current product."]
      ]
    }
  },
  'professional-services': {
    title: 'Prepare a consultation without exposing client material',
    context: 'A prospective client asks for an introductory appointment and sends a document that belongs in the firm’s approved intake channel. The assistant’s role is to route the request, prepare a useful appointment brief and leave the acceptance decision with the appropriate professional.',
    steps: [
      ['Create the initial enquiry record', 'Record the source and category of the request using the fields the firm approves. Give the enquiry an owner and use the approved route to ask for missing details. Keep sensitive content out of the general scheduling record.'],
      ['Prepare a review-ready appointment', 'Confirm the time and the people who should attend. Use the intake checklist to show which items are complete and what still needs review. Link to approved source material rather than attaching extra copies to the invite.'],
      ['Record the decision and follow-up', 'After the appointment, assign the agreed next action and due date. Route questions about acceptance, terms or fees to the engagement owner. Keep any draft proposal separate until the named professional approves it.']
    ],
    setup: [
      ['Intake checklist', 'Agree the minimum information required to route an enquiry and identify what can only be collected through a private channel. Test the checklist with a typical request and an incomplete one.'],
      ['File handling', 'Specify the approved workspace, naming rules and who can access each folder. Agree whether an assistant can move, copy or remove files and how changes should be recorded.'],
      ['Client commitments', 'Identify who approves fees, deliverables and deadlines. Provide wording for administrative acknowledgements and a separate route for requests that need professional judgment.']
    ],
    exceptions: [
      ['An enquiry arrives with confidential information', 'Use the firm’s approved route for the material and notify the owner. Keep only the minimum reference needed to track the request.'],
      ['A proposed deadline is outside ordinary capacity', 'Check existing work and bring the decision to the engagement owner. Record the date requested and the next step without promising an outcome.'],
      ['A draft changes the scope or fee', 'Show the changed terms and route the draft to the authorised person. Keep it in review until the firm confirms the version that can be shared.']
    ],
    review: [
      ['Intake completeness', 'Sample recent appointment briefs and check whether each shows an owner, missing information and the next action. Identify what required a second request.'],
      ['Document trace', 'Confirm that client files were recorded in the correct location and access matched the approved list. Check that general calendar entries do not carry confidential details.'],
      ['Follow-up consistency', 'Review open proposals and onboarding tasks for a date, accountable owner and last approved version. Move unresolved decisions back to the relevant professional.']
    ],
    handover: 'Give the next coordinator the approved intake checklist, upcoming appointments and the actions waiting on an engagement owner. Keep confidential material in its designated workspace.',
    planning: {
      id: 'plan-coverage', title: "Coordinate new enquiries around the team’s availability.",
      intro: "An enquiry, a consultation and active client work can require different records and permissions. Decide which information is needed at each stage.",
      items: [
        ["First enquiry", "Capture contact details, the broad request and availability using approved intake fields. Flag requests needing a conflict or eligibility check for the responsible professional before confirming scope or making a commitment."],
        ["Before the consultation", "Confirm the slot and meeting format. Record which materials were requested and where the client should submit them. Keep detailed records within the approved client workspace."],
        ["After the consultation", "Log the next action, the responsible person and any deadline promised to the client. Record whether the team is waiting for internal review, additional information or a decision to begin work so another person can follow up."]
      ]
    }
  }
};
