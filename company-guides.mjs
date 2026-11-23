export const companyGuides = {
  about: [
    {
      id: 'company-purpose', title: 'Make recurring work easier to hand over.',
      intro: 'The work that keeps a business running is often spread across several people and tools. A calendar change is made in a message, a customer reply sits in a draft and a release depends on an approval that nobody recorded. The company’s service brings those steps into an agreed way of working.',
      items: [
        ['Keep the task visible', 'Identify what has arrived, what is underway and what needs a decision. A useful status record lets the client check the work without asking for a separate summary every time.'],
        ['Give the decision to the right person', 'Some work follows a clear rule. Other work requires permission, knowledge of a client or approval from a specialist. Agree how to recognise the difference before anyone changes a record or sends a reply.'],
        ['Make the work easier to continue', 'Document the important rules and sources so a new person can understand the current state. Keep the instructions close to the work and adjust them when the process changes.']
      ], visual: [['Make it visible','Route decisions','Keep it usable'],['pipeline','people','check']]
    },
    {
      id: 'team-coordination', title: 'One workflow can need several kinds of support.',
      intro: 'The person who carries out the work, the person who reviews it and the person who approves a change can be different. Agree those roles with your team during setup, especially when a task moves from one system to another.',
      items: [
        ['The person doing the work', 'They follow the agreed instructions and document what they did. When a source is missing or a rule does not apply, they record the issue and route it rather than trying to guess the preferred outcome.'],
        ['The person reviewing the result', 'They compare the first sample against the expected output and provide feedback specific enough to apply to the next request. Review can become lighter when the work and exception rules are stable.'],
        ['The decision owner', 'This person has authority for the decisions named in the scope. For example, a channel owner can approve a release date and a finance lead can decide what happens to an invoice exception.']
      ], visual: [['Assistant','Reviewer','Decision owner'],['content','check','people']]
    },
    {
      id: 'company-fit', title: 'Look for a fit in the work itself.',
      intro: 'A useful engagement starts when a team can identify a recurring workload and wants to make it easier to delegate. The first conversation can be about a single queue, a regular brief or a handoff that crosses teams.',
      items: [
        ['A small team with a growing queue', 'Start by choosing the requests that can follow the same rules. Agree the operating hours and decide where exceptions belong before opening the rest of the queue.'],
        ['A manager with a predictable review cycle', 'Use one deliverable that already has an audience, such as a weekly pipeline report or content calendar. Define which fields help the team decide what to do next and which are only useful in the source system.'],
        ['A team adding a second workflow', 'Agree who owns the connection between the two tasks. For example, support might log a product question while marketing updates an approved help article. One named owner should confirm the change.']
      ]
    },
    {
      id: 'who-decides-what', title: "See who owns each decision.",
      intro: "Here’s how roles could work together on a recurring client update. Agree names and responsibilities during setup so everyone knows whom to ask before a deadline is missed.",
      visual: [["Set the rules", "Prepare the update", "Check the result"], ["people", "content", "check"]],
      items: [
        ["Your point of contact", "The person who owns the update on your team identifies its recipients, provides the approved sources and decides whether a late item should go out. They also name a backup who can take that decision when they are away."],
        ["The person doing the work", "The assistant collects the approved inputs, updates the agreed record and asks about information that’s missing. They keep the draft and any unresolved decisions visible so the person reviewing the update can see exactly what changed."],
        ["The reviewer", "The agreed reviewer checks the result against a recent example and returns specific feedback. If the format or expectations need to change, they record the new rule alongside the example for the next update."]
      ]
    },
    {
      id: 'first-conversation', title: "What you can learn in the first conversation.",
      intro: "A good first conversation should leave both sides with a concrete understanding of the work. A recent example and a busy-week example usually reveal more than a long job description.",
      items: [
        ["Identify where the work starts", "Explain what triggers a request and where it arrives. If an inbox, form and message channel all receive the same work, choose which one is used to record the status."],
        ["Agree what comes back", "Show one completed example. A short report, draft reply or updated record helps define what the assistant can return and who reviews the result before it reaches someone outside your team."],
        ["Pick one place to begin", "Choose a recurring task that can be tested with the tools and permissions available. If an access decision or a specialist is needed first, record that dependency before setting a start date or adding more work."]
      ]
    },
    {
      id: 'working-relationships', title: "Where support fits in different kinds of teams.",
      intro: "The starting point depends on who currently does the work. These examples show how responsibility can be divided across three common team setups.",
      items: [
        ["Founder-led business", "An assistant can maintain the executive’s calendar and turn recurring messages into a short decision list. The founder sets which meetings take priority and handles commitments that require business judgment."],
        ["Growing in-house team", "An operations lead might keep ownership of policy while an assistant handles routine intake and follow-up. A shared queue lets both see pending items, with the internal lead taking cases that require an exception."],
        ["Client-facing team", "An account lead can keep responsibility for client commitments while an assistant prepares updates and tracks dates. Separate client workspaces and agreed sharing rules make it easier for reviewers to keep information and approvals in the right place."]
      ]
    },
    {
      id: 'working-standards', title: "How to tell if the support is helping.",
      intro: "Pick indicators that show what changed for your team. Compare a small set of examples before and after an agreed adjustment, using the same definition of a finished item.",
      items: [
        ["Time the team spends reviewing", "Check how much time goes to correcting the result or finding missing information. If review still takes too long, agree whether the format, the instructions or the original inputs should change."],
        ["Unresolved work with a clear owner", "Look at open items and see whether each one has a next action and a responsible person. Pay special attention to work that depends on another team and can be easy to lose between systems."],
        ["Confidence to expand", "Try a second task once the first produces a result your team can consistently use. Set a separate approval boundary and choose an example the next reviewer can check without relying on assumptions from the first task."]
      ]
    }
  ],
  how: [
    {
      id: 'discovery-agenda', title: 'What to cover in the first conversation.',
      intro: 'Use the first conversation to choose the work, identify the person who can review it and agree a small example. You can learn more from one well-described request than from a long list of tasks with no expected result.',
      items: [
        ['Bring recent work', 'Choose a routine request that already has a finished example. Explain where it arrived, what a good outcome looked like and whether the person handling it had to ask for a decision.'],
        ['Name the constraints', 'Discuss coverage, deadlines and the systems that are allowed. Explain when the client should be contacted directly and which types of requests require a specialist or approver.'],
        ['Agree the first milestone', 'Choose the first output and the person who will review it. Put the review date and instructions somewhere both sides can find them. Decide what needs to happen before work moves from a trial to normal delivery.']
      ], visual: [['Show an example','Set the limits','Schedule a review'],['content','ledger','calendar']]
    },
    {
      id: 'trial-run', title: 'Run a small batch through the whole process.',
      intro: 'The first pass is a chance to test the workflow from intake to review. Include one ordinary item and an exception so both people can see which rules work in practice and where a decision needs more context.',
      items: [
        ['Use the agreed tools', 'Put the input in the same place the assistant will normally find it. Run the first task with the permissions it actually needs and confirm that the output reaches the right workspace.'],
        ['Review the record as well as the result', 'Check whether the item can be traced from request to result. Confirm which version was reviewed and that the next owner or approver can see the information they need.'],
        ['Make feedback actionable', 'Write down the change and show an example. If a draft reply missed a useful deadline, explain which source to check and where the deadline should be recorded next time.']
      ], visual: [['Open the request','Complete the trial','Review the output'],['pipeline','content','check']]
    },
    {
      id: 'coverage-changes', title: 'Handle changes without losing the work.',
      intro: 'A change in coverage, priority or personnel can disrupt a workflow if the current state lives in messages or personal notes. Use one handover record that explains what is open, what is blocked and what has already been promised.',
      items: [
        ['When volume changes', 'Review what arrived, which deadlines are affected and whether a temporary queue makes sense. Get approval before extending a commitment beyond the coverage already agreed.'],
        ['When the owner changes', 'Provide the new owner with the working instructions, the latest output and a list of decisions still open. Confirm their access to the records before the previous owner steps away.'],
        ['When the scope changes', 'Describe the new task separately from the existing work. Agree the tools, permissions, coverage and first example to review. For new account permissions, see <a href="trust.html#access">how to review and approve access changes</a>.']
      ]
    },
    {
      id: 'first-month-review', title: 'Decide what to improve before adding volume.',
      intro: 'Review a few finished and blocked items. Ask whether the work is accurate, whether decisions reached the right person and whether the next owner could continue from the record. Use those answers to prioritise one or two improvements.',
      items: [
        ['Keep what works', 'Record the examples that met the standard so they can be reused during training or a change in coverage.'],
        ['Correct the rules that cause rework', 'Clarify any instruction that produced the same mistake twice. Update the source guidance and agree how to check it on the next batch.'],
        ['Review the next request', 'Use a fresh example to see whether the change solved the problem. Keep the original approval boundary unless a responsible person agrees to change it.']
      ]
    },
    {
      id: 'delivery-example', title: "Follow a request from the queue to the finished record.",
      intro: "Suppose a partner asks to move a meeting and needs an updated agenda. One shared record lets the assistant, executive and meeting owner see the same next step.",
      visual: [["Capture the request", "Get a decision", "Close the loop"], ["calendar", "people", "check"]],
      items: [
        ["At intake", "The assistant links the request to the calendar entry and checks the time zone, attendees and deadline. They mark whether the request includes new timing options or needs a reply before any slot can be offered."],
        ["While the work is open", "The assistant drafts options and checks them against approved scheduling rules. If moving the meeting affects another commitment, the executive receives the choice and its impact together so they can respond without opening multiple threads."],
        ["When the task is complete", "The assistant updates the approved invite, confirms the agenda link and records what was sent and when. The meeting owner can see the new time and the one item still awaiting an answer."]
      ]
    },
    {
      id: 'delivery-priorities', title: "Agree what moves to the front of the queue.",
      intro: "Give the assistant criteria they can apply when several requests arrive at once. Use a deadline, a business consequence and an owner when setting each priority.",
      items: [
        ["Time-sensitive work", "Identify tasks that affect a commitment already made, such as a promised customer update or a meeting starting soon. State when to notify the owner and where they will see the message."],
        ["Routine work", "Assign a regular review window for items that can wait until the next pass. Give the assistant a way to distinguish the ones they can complete independently from the ones that need approval."],
        ["Missing information", "Leave blocked items visible with the question that needs answering and who can answer it. Set a follow-up time so a request that cannot move today still appears in the next review."]
      ]
    },
    {
      id: 'delivery-expansion', title: "Add another queue when the first one is stable.",
      intro: "A new queue can change coverage, access and review needs. A short test gives you a better basis for expanding than assuming the existing setup will carry over.",
      items: [
        ["Compare the starting rules", "Look at how requests enter the new queue, what a finished result looks like and who owns exceptions. Reuse instructions only when the same people and approval boundaries apply."],
        ["Test a small batch", "Pick an ordinary case and an exception. Have the new reviewer compare the outputs with the agreed examples and confirm where questions should go before the assistant handles a larger volume."],
        ["Agree what to check next", "Track whether the original queue still gets attention when the new one is busy. Review the two queues separately so the team can tell whether a delay came from added volume, an unclear rule or unavailable reviewers."]
      ]
    }
  ],
  trust: [
    {
      id: 'permission-example', title: 'Approve a small role before opening a wider account.',
      intro: 'In this publishing example, the assistant needs to edit an approved draft and show it to a reviewer. Map those actions to the roles available in the existing tool, then confirm who can publish the page. Use the example to test how access is requested and removed.',
      items: [
        ['Describe the actions', 'List viewing, editing, sharing, publishing and changing settings separately. Choose the actions needed for the first deliverable and record who owns the account.'],
        ['Test on a sample', 'Check that the assistant can open the right draft, save the agreed changes and give the reviewer a usable preview. If a permission is missing, record the request for the account owner.'],
        ['Review the role later', 'When a workflow ends or changes, check which permissions are still needed. Agree who confirms access has been removed and where that confirmation is recorded.']
      ], visual: [['Request a role','Verify access','Remove when done'],['content','check','people']]
    },
    {
      id: 'information-boundaries', title: 'Agree which information belongs in each tool.',
      intro: 'A queue may need to reference a customer ticket, an invoice or a private document. Decide whether the assistant needs the record itself or a pointer to it. Use approved channels and keep copies to the amount the workflow actually requires.',
      items: [
        ['Reference the source', 'Keep the main record in its designated workspace. A handoff can use an approved link or internal reference so another person can find the source without sending a duplicate.'],
        ['Keep summaries purposeful', 'A reviewer needs the decision requested, the deadline and enough context to act. Avoid copying sensitive fields into a general task board if those fields already live in an approved system.'],
        ['Confirm the external tools', 'Decide which tools can process which kinds of information and who approves exceptions. Check those decisions again when the workflow begins to use a new system or data type.']
      ]
    },
    {
      id: 'escalation-record', title: 'Give the next owner an actionable report.',
      intro: 'An access issue or a mistaken change should reach someone who can assess it. Keep the report focused on what happened, which record is affected and the immediate decision needed. Use the channel agreed for that kind of concern.',
      items: [
        ['Describe what was observed', 'Include the time, system, action and link to the approved record where appropriate. Keep an observation separate from an assumption about the cause.'],
        ['Route it to a named owner', 'Identify who can review access, content or customer impact. Follow the agreed coverage rule and record which action is waiting for a decision.'],
        ['Confirm the next step', 'After the owner responds, update the record with what was approved and who will verify it. Review whether the task instructions need to change.']
      ], visual: [['Record the concern','Send to the owner','Verify the result'],['ledger','people','check']]
    },
    {
      id: 'access-register', title: "Keep a record of who can access each system.",
      intro: "An access register can be a short list your account owner can review. Keep it in an approved place and update it when the task, system or person changes.",
      visual: [["Record the role", "Review permissions", "Confirm removal"], ["ledger", "people", "check"]],
      items: [
        ["What to record", "Include the named account, system, role, reason for access and who approved it. Add an expiry or review date when access is temporary so the owner can check whether it is still needed."],
        ["How to review", "Compare the assigned permissions with the current task. If someone only prepares drafts, check whether they also have access to publishing, exports or account settings and ask the system owner to adjust the role where needed."],
        ["What to close out", "At the end of the work, check any groups, shared files or delegated access separately. Mark who confirmed each change and where the finished work was handed back so the record is useful later."]
      ]
    },
    {
      id: 'tool-evaluation', title: "Decide where work can be stored and processed.",
      intro: "A task may touch a mailbox, a shared drive and a specialist tool. Draw the route before giving access so everyone can see where data is copied and who can open it.",
      items: [
        ["Source and working copy", "Identify where the original record stays and what fields are needed for the task. When a draft or checklist is needed, agree the workspace and whether it should link to the original or contain a reduced set of fields."],
        ["External tools", "Ask the relevant owner which tools can receive the information. This includes extensions, automations and AI tools. Review a dummy record first if you need to understand how a tool stores or shares its input and output."],
        ["Return and removal", "Agree what happens to working copies once the result is accepted. Assign the person who can confirm delivery or removal, and record any files that have to stay available for an ongoing review."]
      ]
    },
    {
      id: 'access-changes', title: "Review changes before expanding a role.",
      intro: "A legitimate request for more access should be easy to explain. Record the exact operation, why the current role cannot do it and how long the change is needed.",
      items: [
        ["Confirm the new work", "Check whether the work is part of the agreed scope. For a website update, the ability to create a draft and the ability to publish it may belong to different roles. Ask the owner which role should act."],
        ["Use a small trial", "If new access is approved, try the task on one suitable item and review the result. Record any additional data or controls that become visible so the owner can assess whether the role is appropriate."],
        ["Set a review date", "Decide when the additional permission will be reviewed or removed. Log the change alongside the approver and the task so the next owner can understand why it was granted."]
      ]
    },
    {
      id: 'reporting-a-concern', title: "Make it easy to raise an access concern.",
      intro: "Agree how someone should report an unexpected permission, an unfamiliar shared link or a record that appears in the wrong place.",
      items: [
        ["Write down the facts", "Record the system, time and action that led to the concern. Keep the original event reference if one exists and use the approved reporting channel for any details that contain private information."],
        ["Route to the right owner", "Tell the system or team owner which work is affected and whether an action was already taken. Agree who decides if the task should pause, access should change or another team needs to be involved."],
        ["Record the next check", "Once the owner responds, capture the action, person responsible and next review time. Confirm any changes to access or instructions with the people who do the work so the same concern can be recognised next time."]
      ]
    }
  ],
  contact: [
    {
      id: 'brief-by-service', title: 'Write the brief around the result.',
      intro: 'The most useful starting brief names one recurring task and one output. Use these examples to choose a scale you can explain and review. Each can be adapted to your systems, hours and approval rules.',
      items: [
        ['Inbox or calendar', 'Ask for a short daily brief that shows what needs a decision, which messages can wait and which meetings have changed. Describe how to handle a private item or a change outside the agreed calendar rules.'],
        ['Customer or lead queue', 'Ask for requests to be checked, assigned and updated in the tool your team already uses. Include one exception and say who can approve a refund, merge a record or change the next action.'],
        ['Content or website', 'Ask for an approved draft to be checked, scheduled or prepared for review. Define which assets are current, which fields are in scope and who approves a live release.']
      ], visual: [['Name the work','Describe the result','Set the approvals'],['content','check','people']]
    },
    {
      id: 'brief-coverage-example', title: 'Describe a window someone can plan around.',
      intro: 'Coverage is easier to agree when the brief includes a time zone, frequency and any exceptions. Explain whether the work needs attention at a specific time or just a result by an agreed deadline.',
      items: [
        ['Specify when work arrives', 'Note the days and channels that usually produce requests. If work comes in after hours, say whether it should wait for the next window or be escalated.'],
        ['Explain what is urgent', 'Give an example of an urgent request and a routine one. Write down who can move other work to make room for the urgent item and where that decision should be recorded.'],
        ['Show typical volume', 'Estimate a normal week and call out peaks such as launches or reporting deadlines. The person reviewing the brief can then decide whether the initial scope needs one task or a larger queue.']
      ]
    },
    {
      id: 'brief-review-checklist', title: 'Read the brief as the person who will use it.',
      intro: 'Read your description and check whether someone else can tell what to do without a second conversation. Keep examples simple, write down how to verify the output and leave sensitive details in the appropriate workspace.',
      items: [
        ['Can they find the starting point?', 'Identify where work arrives and which type of request belongs in the task. If two systems are involved, state which one records the final result.'],
        ['Can they tell when the task is finished?', 'Include a realistic outcome and a reviewer. For instance, a finished page update could require a preview, checked links and a record of final approval.'],
        ['Can they recognise an exception?', 'Name the situations that need a different route and the role that makes the decision. Check whether the brief explains who should act if the normal owner is away.']
      ], visual: [['Find the input','Check the output','Route exceptions'],['pipeline','check','people']]
    },
    {
      id: 'brief-first-review', title: 'Test one normal item and one exception.',
      intro: 'A first review should be specific enough that your team can agree what to change. Pick one recent example of the work and use the brief to walk through it with the person responsible for the outcome.',
      items: [
        ['Start with the normal route', 'Check whether the source, expected result and deadline are clear without filling in gaps from memory. Add any missing detail to the brief.'],
        ['Try the exception', 'Ask who would decide and what the assistant would send to them. If the answer depends on the person available that day, name a backup route.'],
        ['Update the instructions', 'Record the change and keep the latest version with the work. Review another example after the new instruction has been used.']
      ]
    },
    {
      id: 'task-brief-example', title: "Turn a broad request into a usable task.",
      intro: "A short brief works best when a reader can tell what to do first. Try using one recent request to convert a general goal into a specific output.",
      visual: [["Describe the task", "Name the result", "Choose the approver"], ["content", "ledger", "people"]],
      items: [
        ["Start with the actual request", "Name the mailbox, the types of messages to check and when the work should happen. Include any folders or senders your team uses to identify requests. For example, ask for a weekday review of routine appointment requests and outstanding replies."],
        ["Describe what to return", "Ask for one summary that lists urgent messages, routine replies ready for approval and items waiting on another person. Give an example of how each row should appear so the first draft is easy to compare."],
        ["Make exceptions concrete", "Name one case that needs your decision, such as a new appointment that conflicts with an existing commitment. Add who can approve a change and when they should hear about it."]
      ]
    },
    {
      id: 'task-brief-when-unknown', title: "Fill in the details you have today.",
      intro: "You can write a useful first brief before knowing every tool or deadline. Make open questions visible so the next person can help you answer them.",
      items: [
        ["When volume varies", "Describe a normal day and a busy day using a recent range. If there is no count yet, share how requests arrive and the event that tends to increase them. The first test can produce a better estimate."],
        ["When the tool is undecided", "State where the work is handled today and where you want to see the finished result. Ask the current owner to check whether the assistant can use the existing queue and what access it would require."],
        ["When someone else owns approval", "List the role that should make the decision and when it is normally available. Confirm the individual and backup with your team before the task depends on that approval."]
      ]
    },
    {
      id: 'task-brief-after-testing', title: "Use feedback to improve the brief.",
      intro: "After the first run, read the result and the instructions side by side. One specific change is easier to test than a full rewrite.",
      items: [
        ["Check the missing context", "If the assistant could not classify a request, add the field or example they needed. Make the rule concrete enough that the same request would have a clear next step the next time it arrives."],
        ["Check the output", "If the result took time to review, show which part was hard to use. Agree where decision requests should sit and what supporting links should be included so the reviewer can move faster."],
        ["Check the approval", "If work stalled with an unanswered question, update the decision owner or review window. Use the revised brief on a similar task and record whether it resolved the delay."]
      ]
    }
  ]
};
