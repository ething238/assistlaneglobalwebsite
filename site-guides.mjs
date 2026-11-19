export const siteGuides = {
  home: [
    {
      id: 'delegation-signals', title: 'Notice where work keeps coming back.',
      intro: 'The best first task is one your team already understands. Look for a recurring queue, a decision that waits for the same person every week, or a finished item that is hard to verify. These are three places to start.',
      items: [
        ['Unanswered requests', 'A customer writes on two channels and receives two different answers. Start by bringing both requests into one record. Choose the person who owns the next reply, and agree what information they need before they can send it.'],
        ['A calendar that keeps moving', 'Requests arrive faster than the executive can decide what matters. Start with a daily brief that separates routine scheduling from conflicts and decisions. Provide examples of meetings that can move and appointments that need explicit approval.'],
        ['Work that is ready but still waiting', 'A page or campaign item has approved copy but no clear release owner. Define who checks the current version, who schedules it and where the final link is recorded. Move open questions into the review queue before they become last-minute delays.']
      ], visual: [['Find the repeat','Name an owner','Define the result'],['pipeline','people','check']]
    },
    {
      id: 'example-working-day', title: 'See where the handoffs meet.',
      intro: 'In this fictional example, teams share one log and keep separate approval rules.',
      items: [
        ['Morning: prioritise', 'Executive support checks the inbox and calendar. A prospect has requested an earlier demo, and a client meeting now overlaps with a deadline. The brief puts the conflict and proposed options in front of the calendar owner. The prospect’s request goes into the CRM queue.'],
        ['Midday: handle and route', 'CRM support checks the prospect’s record and assigns a next action. A related support ticket asks for information the team cannot confirm yet. The assistant links the ticket and gives the product owner a clear decision to make before the customer receives another update.'],
        ['Afternoon: release and record', 'Content support prepares an approved page for release. WordPress support checks the preview and records the published URL. The work log now shows the published page, the demo owner and the customer question still waiting for a decision.']
      ], visual: [['Morning brief','Queue review','Release record'],['calendar','headset','web']]
    },
    {
      id: 'delegation-readiness', title: 'Give your virtual assistant for entrepreneurs a clear starting point.',
      intro: 'Use a fictional record if your example contains confidential information.',
      items: [
        ['One normal example', 'Choose a request that usually goes well. Show the inputs, the decisions made and what the recipient expects at the end. If the output is a report, include the layout and what each field means.'],
        ['One difficult example', 'Show a request that cannot follow the normal route. Explain what made it unusual, who decided what to do and how the decision was recorded. This helps define exceptions without writing instructions for every possibility.'],
        ['A useful finish line', 'Choose the smallest outcome someone can verify. For an inbox brief that might be a list of decisions with deadlines. For a published page it might be a preview, approval and live link. Give the reviewer a way to say what needs to change.']
      ]
    },
    {
      id: 'working-in-your-tools', title: 'Keep the record where the team looks for it.',
      intro: 'A handoff can cross email, a help desk, a CRM or a publishing tool. Choose where the primary record lives and use links to carry context between tools. This keeps a status report from becoming a competing version of the work.',
      items: [
        ['Pick the source of truth', 'Decide which system owns each field. A CRM might hold the contact and follow-up owner, while a help desk holds the conversation. Agree how to handle disagreement before copying an old value into a second place.'],
        ['Scope the access', 'Give access to the specific tool and actions that the workflow needs. For a first publishing task, drafting and preview access may be enough. Let the relevant owner approve any additional rights.'],
        ['Give decisions a route', 'A written rule should say who can approve an exception and where the response belongs. If an approver is away, the assistant needs a backup route and a way to show what remains blocked.']
      ], visual: [['Source system','Working queue','Approval record'],['ledger','pipeline','check']]
    },
    {
      id: 'quality-over-time', title: 'Check the work and improve the instructions.',
      intro: 'A short review helps separate a poorly defined task from a mistake in the work. Start with a handful of real items and compare them with the result you agreed. Use what you learn to adjust the process before adding another queue.',
      items: [
        ['Look at the output', 'Pick one completed item, one that needed a decision and one that is still open. Check whether the output is accurate, easy to use and stored in the right place. Review what would have made the open item easier to resolve.'],
        ['Review the exceptions', 'Look for the same question coming up more than once. Decide whether the rule can be clarified, the task should stay with a specialist or the reviewer needs a better way to receive it.'],
        ['Change one thing at a time', 'Write down the change and give the assistant an example. At the next review, check whether the change made the handoff easier. Keep any adjustment to permissions or coverage separate so it can be approved clearly.']
      ]
    },
    {
      id: 'choosing-a-start', title: 'Start at the level that fits your work.',
      intro: 'Some teams need a single task taken off their plate. Others need coordination across a few queues. Start with the amount of work you can explain and review, then decide whether a wider scope makes sense.',
      items: [
        ['One recurring task', 'Choose a daily or weekly item with a clear finish, such as an inbox brief or a content checklist. It is easier to learn the review process when the first task has familiar inputs and a named decision owner.'],
        ['One complete queue', 'Define the types of requests that belong in the queue, the coverage window and the exceptions. Give the reviewer a sample of urgent and routine requests so they can see whether the queue rules are working.'],
        ['A connected workflow', 'When several teams share a result, agree a handoff at each transition. A campaign brief can become a published page only after the asset, brand review and release approval are visible to the next owner.']
      ]
    }
  ],
  services: [
    {
      id: 'service-entry-points', title: 'Start with the output your team needs.',
      intro: 'The service names describe different kinds of work, but an output usually makes the choice clearer. Match a task to the team that will review it and the tool where the result should live.',
      items: [
        ['A decision brief', 'Choose executive support when you need a daily view of calendar changes, deadlines and messages that require a decision. Share the priority contacts and a sample brief your team would actually read.'],
        ['A queue with a next owner', 'Choose customer support for replies and escalations, or CRM support for a clear follow-up on leads and accounts. Specify which system records the next action and which permissions are needed.'],
        ['A publication record', 'Choose social media marketing and content support for briefs, LinkedIn, assets and approvals. Add SEO and WordPress support when the work also needs staging checks, on-page changes or a record of the live URL.']
      ], visual: [['What arrives','Who owns it','What comes back'],['content','people','check']]
    },
    {
      id: 'scope-a-request', title: 'Put a usable request into the queue.',
      intro: 'A task has a clearer scope when the person doing it can find the source, see the deadline and know where to send the result. This is especially useful when several people can request work.',
      items: [
        ['Identify the source', 'Link to the request, policy or approved draft. Include the current version and identify the tool where any changes should be recorded. A screenshot can give context when it does not contain sensitive information.'],
        ['Describe the expected result', 'State the output in terms the reviewer can verify. For example, ask for a contact with an owner and a due date, or a page preview with checked links and a review status.'],
        ['State the deadline and exceptions', 'Record the time zone and what makes the request urgent. Add the situations that need approval and the person who can make that decision if the normal reviewer is away.']
      ]
    },
    {
      id: 'scope-boundaries', title: 'Separate routine work from exceptions.',
      intro: 'Use examples to agree what the assistant can do independently. Set a higher approval bar for work that changes a customer commitment, account permission, live page or record used for reporting.',
      items: [
        ['Routine work', 'A reply can use approved wording, a draft can follow a checklist and a contact can be routed by a documented rule. Record the source and the action so the team can review the result.'],
        ['An exception', 'A refund outside policy, an uncertain duplicate or a change to a public claim needs an owner who can decide. Prepare the evidence and keep the task marked as waiting for review.'],
        ['A new category of work', 'When requests begin to involve a different system or level of judgment, revisit the agreement. Test a small batch before adding the new task to ongoing coverage.']
      ], visual: [['Apply the rule','Flag the exception','Record the decision'],['ledger','pipeline','check']]
    },
    {
      id: 'prepare-a-trial', title: 'Make a short trial representative.',
      intro: 'Choose a small group of requests that includes both ordinary work and one exception. A representative trial shows where the instructions are clear and where a reviewer still needs to provide context.',
      items: [
        ['Pick the examples', 'Select work the team can check against a source. If the workflow involves publishing, use a preview. If it involves data cleanup, identify the fields that should change and those that should be left for approval.'],
        ['Review the first pass', 'Compare the work with the expected result and record specific changes. Feedback such as “link to the original request” is easier to apply than a general request for more detail.'],
        ['Decide when to expand', 'Confirm who owns the next batch and how urgent items are covered. Add another queue only when the first workflow has a usable record of decisions and exceptions.']
      ]
    },
    {
      id: 'compare-tasks', title: "Find the service by looking at the finished work.",
      intro: "A request can involve several tools and still have one main result. Choose the service whose output is closest to the thing you want someone to return.",
      visual: [["Name the result", "Choose the service", "Agree the approval"], ["ledger", "people", "check"]],
      items: [
        ["A decision list or updated calendar", "Choose administrative and executive support if the result is a daily brief, a prepared agenda or a confirmed schedule. Describe which changes can be made directly and which ones need the calendar owner to decide."],
        ["A resolved conversation or an owned lead", "Customer support covers requests that need a reply or resolution. CRM support focuses on accurate records and clear next steps for enquiries. When a conversation needs both, agree where the source message lives and who owns the follow-up."],
        ["A ready-to-publish item or a verified page", "Marketing support can coordinate assets, review and release dates. WordPress support can prepare a draft or make approved edits in the site. Name the person who checks content and the person who can approve the live change."]
      ]
    },
    {
      id: 'compare-delivery-needs', title: "Choose between a regular queue and a scheduled batch.",
      intro: "The shape of the work matters as much as the service category. A support mailbox might need checks each day while a contact list can often be reviewed in one batch.",
      items: [
        ["A queue that keeps changing", "Choose how often it needs attention and define which items can wait for the next review. Identify the internal person who can answer time-sensitive questions during those hours."],
        ["A batch with a clear finish", "Give the assistant the source list, the rule for handling each item and one example of the finished result. For a CRM batch, agree how missing values, duplicate records and unmatched accounts should be flagged."],
        ["A release with dependencies", "List any assets, sign-offs or tool access that must be ready before work begins. Use a shared checklist so the person coordinating a release can see whether a delay is due to missing input, an open decision or an unfinished task."]
      ]
    },
    {
      id: 'combine-services-example', title: "See where two services can share a record.",
      intro: "Suppose a software team receives a product enquiry that includes a support question. It can use CRM and customer support together if the two teams agree what they each own.",
      items: [
        ["Log the request once", "Capture the source message and check whether a contact or case already exists. Link the records if both are needed so a sales owner can see why the enquiry came in and a support reviewer can see what was promised."],
        ["Give each person a specific action", "The support owner checks the product question against approved guidance. The sales owner receives the enquiry with the next follow-up due and the status of the support question."],
        ["Close each part in the right place", "Record the answer in the support queue and the follow-up decision in the CRM. When the next person opens either record, they should know which action has already happened and which one they still own."]
      ]
    }
  ],
  industries: [
    {
      id: 'industry-daily-work', title: 'Find the queue that matches your team.',
      intro: 'A familiar example is a better starting point than an industry label alone. These examples identify one recurring queue for each sector and the kind of work that belongs with its owner.',
      items: [
        ['Finance operations', 'An invoice arrives with a missing purchase reference. The assistant prepares a record with the invoice source, the missing detail and the person who can review it. Payment approval stays with authorised finance staff.'],
        ['Real estate', 'A viewing request arrives through a listing portal. The assistant checks the listing reference and agent availability, then records the appointment and any follow-up. Pricing and offer questions go to the agent.'],
        ['E-commerce', 'An order has no recent carrier update. The assistant checks the order history and prepares the approved reply. A replacement or refund outside the policy goes to the store owner.'],
        ['Marketing', 'A campaign release depends on an asset that is still in review. The assistant links the draft and asset in the calendar and shows who can approve the final version.'],
        ['AI and technology', 'A support issue needs engineering review. The assistant captures reproduction steps, routes the issue and tracks the next customer update without sharing sensitive evidence in the general queue.'],
        ['Professional services', 'A new enquiry needs an appointment and an intake checklist. The assistant prepares the review brief and asks the engagement owner to make the acceptance decision.']
      ], visual: [['Incoming work','Sector-specific check','Decision owner'],['pipeline','ledger','people']]
    },
    {
      id: 'industry-access-patterns', title: 'Set permissions to match the task.',
      intro: 'Even similar tasks can need different permissions. A store ticket, finance exception and product issue each have a source system and a person who can approve how the information is used.',
      items: [
        ['Start with the minimum', 'The assistant may need to view a record or draft an update before they need permission to change it. Identify the smallest role that can produce the first useful output and check it on a sample.'],
        ['Keep sensitive evidence in place', 'Use an approved reference when a task needs to point to a customer document or financial record. The work log should show where the item belongs and who can review it.'],
        ['Review permissions when scope changes', 'Adding a new team or queue can change which records are involved. Decide who can authorise the change, how it is recorded and when access should be reviewed again.']
      ]
    },
    {
      id: 'industry-owner-handoff', title: 'Make the transition between teams visible.',
      intro: 'A sector workflow often passes through several roles. Choose one record for the current status and link out to the detail each team needs. This makes it possible to see when a task is finished and when it is still waiting.',
      items: [
        ['Name the next owner', 'If a support issue needs product input, identify who will review it and when the customer should hear back. Avoid closing the task while it still depends on an internal decision.'],
        ['Keep the source and decision together', 'For a listing change or campaign release, keep the approved source next to the decision record. When someone takes over, they should be able to see what changed and which version went live.'],
        ['Carry deadlines across queues', 'A finance close, marketing launch or property appointment has a date that matters to several teams. Include the deadline and the impact of a delay when routing an exception.']
      ], visual: [['Show the request','Route the decision','Confirm the update'],['content','people','check']]
    },
    {
      id: 'industry-choose-coverage', title: 'Bring a normal week and a busy one.',
      intro: 'To set a realistic scope, describe how work arrives under ordinary conditions and when it peaks. A promotion, publication cycle, release or reporting deadline can change volume and turnaround without changing the underlying task.',
      items: [
        ['Typical work', 'Estimate the volume, the systems involved and the expected turnaround. Give the team one example of a finished item that meets your standard.'],
        ['Peak work', 'Identify the busiest days, what must happen first and who can change priorities. Decide whether a temporary coverage window or a narrower queue would help.'],
        ['First review', 'Agree how you will tell if the handoff works. Check the output, the next owner and the decisions that returned to the right person. Adjust the rules before adding another category of work.']
      ]
    },
    {
      id: 'industry-evaluate-fit', title: 'Use an example your team can verify.',
      intro: 'The right first output is one the receiving team can check against its source. Choose an example that shows whether the work saves a second round of questions and makes the next decision clearer.',
      items: [
        ['For a record-based workflow', 'Compare the new record with the original invoice, listing or enquiry. Check that the reference matches, the latest status is clear and the next owner has the information they need.'],
        ['For a response-based workflow', 'Compare the reply with the current policy and the customer’s question. Check whether the next update and any exception are recorded in the correct queue.'],
        ['For a publishing workflow', 'Follow the record from brief to approved version, then open the live result. Check that someone can see the release decision, where the final version lives and which follow-ups remain open.']
      ], visual: [['Compare the source','Review the output','Record the decision'],['ledger','check','people']]
    },
    {
      id: 'sector-exception-map', title: "Compare how different sectors handle the same exception.",
      intro: "A missing field can delay work in any industry. The important difference is who can resolve it, which records can be used and what must happen before the work moves on.",
      visual: [["Spot the missing detail", "Route the decision", "Update the record"], ["content", "people", "check"]],
      items: [
        ["An invoice with no reference", "In finance, record the missing reference and ask the requester or reviewer to supply it. Keep the invoice visible at close while payment or vendor changes remain with the team authorised to make those decisions."],
        ["An order with an incomplete address", "In e-commerce, check the order system and approved verification rules. If the parcel has already left the warehouse, route it to the team that can confirm carrier options and keep the customer’s promised update time on the case."],
        ["A campaign with unclear approval", "In marketing, check which asset and version the client reviewed. Hold the scheduled release until the responsible reviewer confirms the correct version, then update any related content that depends on the same decision."]
      ]
    }
  ]
};
