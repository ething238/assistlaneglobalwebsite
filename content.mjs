export const services = [
  {
    id:'administrative-support', icon:'calendar', title:'Administrative and executive support', label:'Executive support', tone:'warm',
    heading:'Make room for the work only you can do.',
    summary:'Give recurring inbox, calendar and coordination work a clear owner and a practical handoff.',
    tasks:['Inbox triage','Calendar and meeting coordination','Travel and document preparation'],
    groups:[
      ['Inbox and calendar','Sort incoming mail, flag decisions and protect focus time using agreed priorities.'],
      ['Meetings and travel','Prepare agendas, capture action items and assemble itinerary options for approval.'],
      ['Records and coordination','Maintain shared documents, chase agreed inputs and keep action lists current.']
    ],
    sample:{title:'Executive daily brief', type:'MONDAY · 09:00', rows:[['09:30','Leadership check-in','Agenda ready'],['11:00','Partner call','Confirmed'],['14:30','Proposal review','Decision needed']], note:'Decision for today: approve the revised proposal before the partner follow-up.'},
    steps:[['Agree priorities','Share inbox rules, calendar preferences and people who should always be flagged.'],['Prepare the brief','Group urgent items, decisions and upcoming commitments in one place.'],['Approve exceptions','Keep sensitive replies, purchases and unusual changes with the agreed approver.']],
    tools:'A shared calendar, delegated mailbox and task list are useful starting points. Agree which folders and calendars are in scope.',
    boundary:'Agree who can send messages, reschedule meetings or authorise purchases. Keep personal or sensitive folders outside the role unless specifically needed.',
    faq:[
      ['Can an assistant reply from my inbox?','Decide which routine replies can be sent using approved wording, and which should be drafted for you.'],
      ['What should I hand over first?','A recurring task with a clear output works well. Try a daily inbox and calendar brief with a short list of priority contacts.'],
      ['How are calendar conflicts handled?','Give the assistant rules for which meetings can move, how much notice to give and who decides when priorities conflict.'],
      ['Can you prepare meetings and track the actions afterward?','Agree which meetings need an agenda and what the action record should include. Give each follow-up an owner and due date.'],
      ['What belongs in an executive brief?','Include upcoming commitments, items that need a decision, and actions that are waiting on another person. Agree how urgent items should reach you.']
    ]
  },
  {
    id:'customer-support', icon:'headset', title:'Customer and client support', label:'Customer support', tone:'sky',
    heading:'Give customer requests a clear next step.',
    summary:'Organise incoming enquiries, handle approved responses and escalate exceptions with the context someone needs to act.',
    tasks:['Shared inbox and ticket triage','Replies using approved guidance','Escalation and queue reporting'],
    groups:[['Channels and triage','Agree the inbox or ticket queue, classify requests and route urgent items first.'],['Replies and records','Use approved guidance for routine questions and record what was sent or resolved.'],['Escalations and quality','Send policy exceptions to the right person, then review a sample of replies for accuracy and tone.']],
    sample:{title:'Ticket handoff', type:'TICKET 1042 · EMAIL', rows:[['01','Order status request','Classified'],['02','Tracking details checked','Reply drafted'],['03','Refund request added','Escalated']], note:'Handoff: attach the order reference, relevant policy and the decision needed.'},
    steps:[['Classify the request','Record the channel, topic, priority and next owner.'],['Respond or escalate','Use the approved knowledge base. Route exceptions with a short summary.'],['Close the loop','Record the resolution and flag recurring questions for a knowledge base update.']],
    tools:'Agree the support inbox or ticketing system, knowledge base, permitted customer records and queue reporting format.',
    boundary:'Set coverage hours and rules for refunds, sensitive complaints and account changes before queue access is granted.',
    faq:[
      ['Can you cover every channel?','Choose the channels and hours needed first. The scope should state which queues are covered and what happens outside that coverage.'],
      ['Who approves a refund?','Set refund limits and identify the person responsible for exceptions before work begins.'],
      ['Can you work in our existing help desk?','Start with the queues, permissions and status rules you already use. Share sample tickets and the approved knowledge base during setup.'],
      ['How do we keep replies consistent?','Provide approved templates and examples for common requests. Review a sample of replies and record changes to the guidance.'],
      ['What happens when a ticket cannot be resolved?','The escalation should include the customer’s request, what has been checked and which decision is needed. Assign a next owner before closing the handoff.']
    ]
  },
  {
    id:'crm-lead-operations', icon:'pipeline', title:'CRM and lead operations', label:'CRM and leads', tone:'mint',
    heading:'Know what happens after a lead comes in.',
    summary:'Keep contact records clean, follow-ups visible and pipeline reporting useful to the people who own the sale.',
    tasks:['Lead intake and record cleanup','Follow-up tasks and pipeline updates','Weekly pipeline summaries'],
    groups:[['Lead intake','Check new records for duplicates, complete agreed fields and assign the correct owner.'],['Pipeline upkeep','Update stages from approved rules, flag overdue activity and prepare the next task.'],['Reporting','Summarise intake, overdue follow-ups and records that need a decision.']],
    sample:{title:'Lead activity snapshot', type:'FRIDAY · PIPELINE REVIEW', rows:[['New','Studio North','Owner assigned'],['Review','Harbor Goods','Duplicate flagged'],['Follow-up','Fieldwork Co.','Reminder due']], note:'Review item: confirm whether the two Harbor Goods records should be merged.'},
    steps:[['Capture and check','Find existing records and validate the required fields.'],['Assign the next action','Set an owner, a status and a due date.'],['Report exceptions','Bring duplicates, overdue items and ambiguous stages to the pipeline review.']],
    tools:'Start with the CRM, intake form and reporting sheet you already use. Define field permissions, stage rules and who can approve merges or exports.',
    boundary:'CRM execution supports the sales process. Set separate responsibility for outreach decisions, consent, sales conversations and bulk changes.',
    faq:[
      ['Can you clean up an existing CRM?','Agree the fields and cleanup rules, then review a small batch before making larger changes.'],
      ['Does this include sales outreach?','Follow-up administration and sending authority should be scoped separately. Agree who owns messaging, consent and sales decisions.'],
      ['How do you handle duplicate contacts?','Agree which fields identify a match. Flag uncertain records for review and confirm who approves merges before any records are combined.'],
      ['What should a pipeline report include?','Start with new leads, overdue follow-ups, unassigned records and items blocked by a decision. Use definitions your team can verify against the CRM.'],
      ['Can you route leads from several sources?','List each source, the information it provides and the owner rules. Test how the process handles missing fields, duplicates and unassigned leads.']
    ]
  },
  {
    id:'marketing-content', icon:'content', title:'Social media marketing and content support', label:'Social media and content', tone:'warm',
    heading:'Keep approved content moving.',
    summary:'Plan, create and publish approved LinkedIn, social media, editorial and email content, then report how it performed.',
    tasks:['LinkedIn and social media management','Writing, graphics and video','Newsletters and campaign coordination'],
    groups:[['Plan the queue','Turn briefs into a calendar with owners, formats, dates and dependencies.'],['Prepare and coordinate','Collect source material, organise approved assets and route drafts to reviewers.'],['Schedule and report','Check links and formats, schedule approved items and track what went live.']],
    sample:{title:'Editorial calendar', type:'WEEK 02 · CONTENT QUEUE', rows:[['Tue','Product update post','In review'],['Thu','Customer newsletter','Draft ready'],['Fri','Editorial article','Scheduled']], note:'Before scheduling: confirm the final link, image rights and named approver.'},
    steps:[['Brief the work','Confirm audience, format, source material and due date.'],['Prepare and review','Use brand guidelines and route the draft to the agreed reviewer.'],['Publish and record','Schedule the approved version and record the live link.']],
    tools:'A shared content calendar, brand asset folder and the relevant publishing or email platform are a practical starting point.',
    boundary:'Agree who owns strategy, original copy, design, budget and final approval. Keep paid campaigns and specialist production separately scoped.',
    faq:[
      ['Can you work with our existing brand guidelines?','Use a brand handoff with example copy, asset locations, approval owners and any claims that need review.'],
      ['Who signs off before publication?','Name one reviewer and define how their approval is recorded before an item is scheduled.'],
      ['Can you turn one approved piece into several formats?','Agree which versions are in scope, such as a newsletter excerpt or social post. Route changes in claims or tone back to the reviewer.'],
      ['How are assets and versions tracked?','Use the agreed folder or project board to record the current draft, the approved assets and the final published link.'],
      ['What happens when a brief is missing an asset or decision?','Flag the missing item, assign an owner and show which publication date it affects. Resume when the required material is approved.']
    ]
  },
  {
    id:'seo-wordpress', icon:'web', title:'SEO and WordPress support', label:'SEO and WordPress', tone:'sky',
    heading:'Publish site updates with a clear checklist.',
    summary:'Prepare approved content, check on-page details and document changes so the next review starts with a useful record.',
    tasks:['WordPress formatting and publishing','On-page SEO updates','Page checks and change logs'],
    groups:[['On-page upkeep','Prepare approved titles, descriptions, headings, links and image descriptions.'],['WordPress publishing','Format pages in the agreed editor, preview them and schedule approved content.'],['Quality and change records','Check layout and links, document the change and flag issues that need a specialist.']],
    sample:{title:'Page publication checklist', type:'DRAFT · DELEGATION GUIDE', rows:[['01','Title, headings and metadata','Checked'],['02','Links and image descriptions','Checked'],['03','Mobile layout and final copy','Awaiting approval']], note:'Release record: add the live URL, publication date and any follow-up checks.'},
    steps:[['Prepare the draft','Use the brief, supplied assets and approved on-page requirements.'],['Preview and review','Check links and layout on desktop and mobile, then request approval.'],['Publish and log','Publish the agreed version and record the URL and change notes.']],
    tools:'Confirm the WordPress editor, permission level, preview process and reporting tools before handing over access.',
    boundary:'Agree approval for URL or indexing changes. Separately scope migrations, theme development, plugin upgrades and technical SEO fixes.',
    faq:[
      ['Do these updates guarantee rankings?','Search rankings are not guaranteed. Agree the publishing tasks and report the work completed.'],
      ['How do you handle changes to live pages?','Define which edits need a preview or backup, who approves them and where the change is recorded.'],
      ['What can you check before a page goes live?','Compare the draft with the approved brief, review headings, links and metadata, and check how the page looks at mobile and desktop widths.'],
      ['What WordPress permissions are needed?','Start with the role needed to draft or edit the agreed pages. Review publishing rights, admin access and plugin changes separately.'],
      ['What information goes into the release record?','Record the live URL, the work completed, the approval and any checks that still need attention after publication.']
    ]
  }
];

export const process = [
  ['Discovery','List the recurring work, current tools, priorities and coverage needs. Identify who can approve scope and access.'],
  ['Scope and matching','Define outputs, capacity, responsibilities and approval limits. Confirm the skills and working arrangement needed.'],
  ['Onboarding','Document a starting workflow, give only the access it requires and run a small example through review.'],
  ['Ongoing delivery','Assign work through the agreed channel, record completed items and surface exceptions with a named next owner.'],
  ['Review and continuity','Review work against the original scope, agree adjustments and document how handovers or absences would be managed.']
];

export const questions = [
  ['What work can I delegate first?','Start with a repeatable task, a clear input and a result you can check. An inbox brief, a queue summary or a content checklist makes a good first handoff.'],
  ['Will I work with a dedicated assistant?','Confirm the assignment model, named point of contact and any specialist involvement in the scope before work begins.'],
  ['How do we agree coverage and working hours?','Share your time zone, required overlap and the tasks that are time sensitive. The scope should record the agreed coverage and how exceptions are handled.'],
  ['How is access handled?','Discuss the accounts, data and permissions needed for each task. Start with the minimum access needed and agree how it will be removed at handover.'],
  ['How is support priced?','The proposed scope should account for capacity, specialist skills, schedule and any setup or reporting needs. Ask for those items to be listed separately.'],
  ['What happens if the scope or assigned person changes?','Agree how changes, handovers and absences will be managed before work begins. Keep task instructions and approvals in the shared work record.']
];

export const pageQuestions = {
  "services": [
    questions[0],
    questions[2],
    questions[4],
    [
      "Can I combine more than one service?",
      "Yes. Virtual assistant services can share a workflow when each role has a defined output. Record who owns the final result and how questions move between administrative, customer, CRM or publishing support."
    ],
    [
      "What should I prepare before choosing support?",
      "Bring a recent request, an example of the finished result and the tools involved. Outsourced administrative services are easier to scope when your team can explain the usual volume, deadlines and decisions that need approval."
    ],
    [
      "Can we start with a single task?",
      "Start with one recurring task that you can explain and review. Before work starts, agree the source information, expected output and a small first batch to check together."
    ]
  ],
  "industries": [
    [
      "What if my industry is not listed?",
      "Start with the work itself. A recurring queue, calendar or review process can be described in a task brief even if your industry has a different name."
    ],
    [
      "Can support cover work from more than one sector?",
      "Yes. Define each workflow separately when it uses different tools, permissions or approvers, then agree how the work is prioritised."
    ],
    [
      "What should I share before discussing coverage?",
      "Bring a typical request and a difficult example. Include approximate volume, expected turnaround and where exceptions go."
    ],
    [
      "How do we choose the right industry page?",
      "Compare the sector pages using the work your team handles. Choose the page with the closest queue, source records and approval rules, then use its example to describe the differences in your own workflow."
    ],
    [
      "Can an assistant use our industry software?",
      "List the systems and the actions the task requires. Industry specific virtual assistants need approved access, current instructions and a reviewed example before handling unfamiliar fields or actions that affect other teams."
    ],
    [
      "Do industry examples define exactly what is included?",
      "The examples help you discuss the work. Specialized virtual assistant services should have a written scope covering the tasks, expected output, coverage and approvals agreed for your team before delivery begins."
    ]
  ],
  "how": [
    questions[1],
    questions[2],
    questions[3],
    [
      "What should I prepare before onboarding starts?",
      "Your virtual assistant onboarding checklist should include a normal request, an exception, the expected output and the responsible reviewer. Add the systems involved and which permissions your account owner has approved for the first task."
    ],
    [
      "How do we review the first result?",
      "Use the first pass to check how to work with a virtual assistant in practice. Compare the result with your example and give specific feedback on accuracy, missing context, format and the decisions that still need your input."
    ],
    [
      "Does the virtual assistant onboarding process cover additional workflows?",
      "A new queue should have its own inputs, review owner and approval rules. Test a small batch and confirm that the original work still receives the agreed attention before expanding the ongoing scope."
    ]
  ],
  "pricing": [
    questions[4],
    [
      "What if my workload changes?",
      "Ask how extra work is approved, billed or rescheduled, and what happens to unused capacity."
    ],
    [
      "Is there a minimum commitment?",
      "Check the minimum term, notice period and cancellation rules in the proposed agreement."
    ],
    [
      "What information makes a quote more useful?",
      "Share normal and peak volumes, the tools involved, coverage windows and examples of routine and unusual requests. Virtual assistant pricing is easier to compare when each proposal uses the same workload and expected result."
    ],
    [
      "Do hourly rates include setup and review time?",
      "Ask for setup, execution, reporting and review responsibilities to be stated in the scope. When comparing virtual assistant hourly rates, check which activities are included and who approves any extra work or specialist input."
    ],
    [
      "How should we compare two proposals?",
      "Compare the tasks, expected volume, coverage and approval responsibilities together. The cost of hiring a virtual assistant should be considered alongside the output you receive and the time your own team will spend providing input and reviewing work."
    ]
  ],
  "about": [
    [
      "Who will work on my account?",
      "The roles, required skills and named points of contact should be agreed during setup based on your scope."
    ],
    [
      "How do I know whether a task is a good fit?",
      "Start with a task that happens regularly and has an output you can review. Use the enquiry form to describe the inputs, expected result and decisions involved."
    ],
    [
      "Can I see examples of the work?",
      "The service and industry pages include sample briefs, checklists and status records."
    ],
    [
      "Who is the founder?",
      "Anuj Gupta founded GlobMitra, our virtual assistant company. Read <a href=\"#founder\">about his experience building teams and products</a> and how it shapes our approach."
    ],
    [
      "What kinds of work does the company cover?",
      "The service areas include executive administration, customer enquiries, CRM and lead records, marketing content, and SEO and WordPress updates. Start with the task you need completed and agree which parts belong in the first scope."
    ],
    [
      "How does support fit with our existing staff?",
      "Your virtual assistant team needs a named contact for each decision and a shared place to record the work. Internal staff provide priorities and approvals, and the delivery owner records completed tasks and flags exceptions for review."
    ]
  ],
  "trust": [
    questions[3],
    [
      "Can sensitive tasks require a second review?",
      "Identify those tasks during scope and agree the approver and how approval is recorded."
    ],
    [
      "What happens when work ends?",
      "Agree the return or removal of working files, the status of open work and who confirms access has been removed."
    ],
    [
      "Do we need to put passwords in a task brief?",
      "Describe the systems and permissions the work requires. Virtual assistant access management should be agreed with the account owner using approved accounts or delegation methods, with login credentials kept out of task briefs and shared status reports."
    ],
    [
      "Can external or AI tools be used for the work?",
      "Agree permitted tools before information is entered into them. Virtual assistant data security decisions should identify what each tool may receive, where its output is stored and who checks the result before it is used."
    ],
    [
      "How should working copies of records be handled?",
      "Set the approved workspace, permitted fields and people who can view the copy. Virtual assistant confidentiality also needs an agreed process for returning, retaining or removing working files after the result has been accepted."
    ]
  ],
  "contact": [
    [
      "Can I ask about more than one service?",
      "Yes. Describe the work you need help with and tell us which task should come first. Include any other teams or workflows that depend on it."
    ],
    [
      "Can I enquire if I’m still defining the role?",
      "Yes. Start with the work that keeps piling up and the result you want. Include the tools you use or the hours you need covered if you know them."
    ],
    [
      "Do I need every field to get started?",
      "Yes. Enter your name, company name, email and phone number, then describe the work you need help with."
    ],
    [
      "What makes a task description useful?",
      "A virtual assistant task brief should name what arrives, what action is needed and what should come back. Use one recent request and include a case that needs a different decision so the reviewer can understand the limits."
    ],
    [
      "What if I do not know the exact workload?",
      "Use a typical day and a busy day to describe the range. The virtual assistant requirements template can record approximate volume, when requests arrive and the deadlines your team has already promised."
    ],
    [
      "Can I include private customer information?",
      "Use an invented or anonymised example to explain the task. Keep passwords, confidential records and private links out of the enquiry, and agree an approved channel for any information the actual work will require."
    ]
  ]
};
