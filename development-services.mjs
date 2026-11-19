export const developmentServices = [
  {
    id: 'mobile-app-development',
    icon: 'mobile',
    title: 'Mobile app development services',
    label: 'Mobile app development',
    tabLabel: 'Mobile apps',
    portrait: 'systems',
    summary: 'Design, build and release iOS, Android and cross-platform apps connected to the tools your business uses.',
    tasks: ['iOS, Android and cross-platform apps', 'Prototypes, APIs and device testing', 'App store releases and updates'],
    playbook: {
      title: 'Mobile app development services for iOS and Android',
      copy: 'Build an app around a real customer or employee workflow. From iOS and Android app development to release and support, we design the screens, connect your systems and test on the devices your users rely on.',
      scope: {
        title: 'What our mobile app development services cover',
        intro: 'Scope mobile app development services around the job the app needs to do and the devices it must support. Agree what goes into the first release and how your team will review it.',
        workColumn: 'What we build or configure'
      },
      matrix: [
        ['iOS and Android app development', 'Build platform-specific features for iPhone, iPad and Android devices. Define supported operating systems, screen sizes and device permissions.', 'Device builds and compatibility results', 'Platforms, versions and permissions'],
        ['Cross-platform app development', 'Use shared code for common screens and business logic where it fits. Test behaviours that differ by operating system, including notifications, deep links and permissions.', 'iOS and Android builds from a shared project', 'Framework choice and platform-specific differences'],
        ['Product design and prototypes', 'Map the sign-in, booking, checkout or task flow. Prototype the main screens and the states users see when inputs are missing or a request fails.', 'A clickable prototype and a list of screens', 'User journeys, visual design and accessibility needs'],
        ['APIs and business systems', 'Connect the app to approved account, booking, order or payment services. Define how requests are authenticated, how data syncs and what happens when a service is unavailable.', 'Connected features and test results', 'Systems, data access and payment settings'],
        ['Internal and field apps', 'Set up task lists, forms, status updates and role-based views. If staff work offline, decide which information can stay on the device and how it syncs on reconnection.', 'Role-based app and documented sync rules', 'Roles, device data and exception handling'],
        ['Release and mobile app maintenance', 'Prepare beta builds and store submissions. Agree which crashes, dependency changes and operating system updates to track after launch.', 'Release pack, known issues and support scope', 'Store listing, release date and maintenance terms']
      ],
      systems: ['Swift', 'Kotlin', 'Flutter', 'React Native', 'TestFlight', 'Google Play Console'],
      toolsTitle: 'Tools for iOS and Android app development',
      checksTitle: 'Release checks for mobile app development services',
      scenarios: [
        ['Customer bookings and self-service', 'Cross-platform app development can suit a booking flow that works the same on iOS and Android. Agree how cancellations and reminders work and what happens if a slot is no longer available.'],
        ['Field work with intermittent connectivity', 'Use mobile app development services to capture checklists, photos and job status from a phone. Show staff when entries are saved locally and when a supervisor can see them. Decide how to handle conflicting changes.'],
        ['An app that needs another release', 'Start mobile app maintenance with a review of crash reports, third-party packages and store requirements. Reproduce problems on the affected devices and prioritise the fixes that unblock the next release.']
      ],
      checks: [
        'Test sign-in, account recovery and permissions with each user role.',
        'Check key journeys on supported devices with slow or interrupted connections.',
        'Review labels, focus order, text scaling and screen reader behaviour.',
        'Confirm how failed payments, bookings or syncs are shown and retried.',
        'Review store metadata, privacy disclosures, signing access and test accounts before submission.'
      ]
    },
    details: [
      {
        id: 'mobile-platforms',
        title: 'Native and cross-platform app development',
        intro: 'Compare native iOS and Android app development with a shared codebase around device features, user needs and the work your team will maintain.',
        items: [
          ['Native iOS', 'Build in Swift when the app needs a close fit with Apple devices and platform conventions. Agree whether the first release supports iPhone, iPad or both, and test the features that depend on the operating system.'],
          ['Native Android', 'Use Kotlin where the product needs Android-specific capabilities. Pick representative screen sizes and devices for testing. Include the permissions, navigation and compatibility cases that matter to your users.'],
          ['Shared iOS and Android code', 'Cross-platform app development with Flutter or React Native can reduce duplicate work for apps with similar features on both platforms. Check early whether the app needs native modules, and plan separate store testing for both builds.']
        ]
      },
      {
        id: 'mobile-integrations',
        title: 'Connect accounts, data and devices',
        intro: 'Plan the integration work as part of iOS and Android app development. Confirm which system owns each record and what the user should see when a connection fails.',
        items: [
          ['Sign-in and roles', 'Give customers, employees and administrators the screens and actions they need. Define session expiry, password recovery and what happens when an account loses access.'],
          ['Notifications and payments', 'For cross-platform app development, check how notification permissions and payment flows differ by device. Test cancelled, failed and successful payments, and show customers how to confirm an order or booking without repeating it.'],
          ['APIs and offline sync', 'Our mobile app development services can connect existing systems or scope new endpoints for the required features. Document the records each connection reads or updates, and decide how to reconcile entries after time offline.']
        ],
        links: [['workflow-automation.html', 'Explore automation and integrations']]
      },
      {
        id: 'mobile-first-release',
        title: 'Define a first release you can test',
        intro: 'Use mobile app development services to prove the most important workflow first. A short list of acceptance checks gives your team a way to say when that release is ready.',
        items: [
          ['Agree what the first version must do', 'Describe the user, their starting point and the outcome they need. For a booking app, that might be finding a slot, confirming it and seeing the booking in their account. Decide which admin functions are needed to keep that journey running and which features can wait.'],
          ['Set the device and access plan', 'For iOS and Android app development, decide which devices, operating system versions and account roles the first version needs to support. Use a small test group that reflects your audience. Identify a reviewer for accessibility and check which device permissions need explaining inside the app.'],
          ['Plan how to review integration failures', 'Give testers a sample account and known states to try, such as an expired session, a rejected payment or a device that has lost its connection. For cross-platform app development, record which checks apply to both builds and which need a separate result on each platform.']
        ]
      },
      {
        id: 'mobile-launch-and-support',
        title: 'Prepare for release and mobile app maintenance',
        intro: 'Agree which accounts your team owns, who approves each release and how issues will be reported after launch.',
        items: [
          ['Get feedback in beta', 'Use TestFlight or a Google Play testing track to give reviewers access before public release. For cross-platform app development, compare beta feedback from both builds before approving launch.'],
          ['Prepare the store listings', 'Review screenshots, descriptions, permissions and data disclosures with your account owner. We can help prepare submissions for the App Store and Google Play. Store reviews and approvals follow each platform’s process.'],
          ['Hand over the project', 'Walk through the repository, build instructions, environments and changes queued for a future release. Mobile app maintenance can cover fixes, operating system compatibility and performance checks under a separate support scope.']
        ]
      },
      {
        id: 'mobile-handover',
        title: 'Handover for mobile app maintenance',
        intro: 'The handover from mobile app development services gives your team a record of what shipped, how to build it and what still needs attention.',
        items: [
          ['Keep a reproducible build', 'Record the released version, repository location and build steps. For iOS and Android app development, note which team owns each store account and who can manage app signing. Agree what your developers need to reproduce a release from the approved source.'],
          ['Document shared and native features', 'In cross-platform app development, give the next developer a map of the shared code and the parts maintained separately for each operating system. Include integration settings, supported device ranges and device behaviours already covered by tests.'],
          ['Set priorities for the next update', 'Make a list of open issues with links to test results and explain how to reproduce them. Mobile app maintenance can focus on crashes, operating system changes or a small feature request. Agree who decides which fixes should ship together.']
        ]
      }
    ],
    sample: {
      title: 'Release review for a field service app',
      type: 'SAMPLE RELEASE CHECKLIST',
      rows: [['Roles', 'Technician and supervisor accounts tested', 'Checked'], ['Sync', 'Offline job notes sync after reconnection', 'Checked'], ['Beta', 'Pilot feedback ready for release review', 'Awaiting approval']],
      note: 'In this example, the first release covers job notes and status updates. The supervisor checks the sync results before approving a wider rollout.'
    },
    steps: [
      ['Define the first release', 'Choose the audience, primary workflow and supported devices. For mobile app development services, agree how users will sign in, what systems they need and which criteria will make the release ready.'],
      ['Prototype, build and test', 'Review the main screens before implementation. During iOS and Android app development, test working builds early and check the mobile and backend flows together, including failed requests and recovery.'],
      ['Release and hand over', 'Prepare store assets and change notes. Review what is ready to ship, who owns the store and build accounts, and which issues or updates fall under mobile app maintenance.']
    ],
    tools: 'Choose the technology after you review the workflows, device features and existing systems. For an app you already own, review its repository, account access and current release process first.',
    boundary: 'Your team approves app permissions, data collection, store listings, release timing and the support scope.',
    faq: [
      ['Can we launch on one platform first?', 'Yes. We can scope iOS and Android app development in phases. Tell us which devices your users have and which features they need. We’ll check whether decisions for the first app affect the second release.'],
      ['When does a shared codebase make sense?', 'Cross-platform app development suits products whose screens and behaviour are largely shared. We compare development effort, native features, performance goals and the cost of maintaining both builds.'],
      ['Can the app connect to our website or CRM?', 'Yes, where you have authorised API access. We define which system owns the records, what the app can update and how it handles missing data or delayed responses.'],
      ['Can you take over an app that is already live?', 'We can review the code, dependencies, release accounts and open issues. That review gives us a basis for scoping bug fixes, upgrades and other mobile app maintenance.'],
      ['What affects the cost and schedule?', 'Mobile app development services vary with the number of features, platforms, integrations, user roles and tests required. A clear first release and a named reviewer make it easier to estimate the build.'],
      ['Who controls the source code and store accounts?', 'We agree code ownership, licence terms and account access when scoping mobile app development services. The handover can include the agreed source, a build guide and a record of the settings needed for future releases.']
    ]
  },
  {
    id: 'website-development',
    icon: 'web',
    title: 'Website development services',
    label: 'Website development',
    tabLabel: 'Websites',
    portrait: 'role-web',
    summary: 'Build or redesign a business website, online store or content site with responsive layouts and a clear handover.',
    tasks: ['Business websites and online stores', 'Content tools, booking and CRM integrations', 'Redesign, migration and maintenance'],
    playbook: {
      title: 'Website development services for businesses',
      copy: 'Give customers a clear way to find your services, book or buy. Our website development services cover responsive design, integrations and launch checks, with a handover for the team that will run the site.',
      scope: {
        title: 'What our website development services cover',
        intro: 'Choose the pages, features and connected systems the site needs. Define the actions visitors should be able to complete and who will keep the site current.',
        workColumn: 'What we design or build'
      },
      matrix: [
        ['Business and service websites', 'Use website development services to plan key pages around the questions visitors need answered. Build reusable layouts, mobile navigation and clear ways to make an enquiry.', 'Responsive site with tested enquiry paths', 'Page content, design and the next action for visitors'],
        ['E-commerce website development', 'Build catalogue and product pages, filters, cart and checkout. Configure agreed payment, tax, delivery and order systems and test a purchase from start to finish.', 'Store with a tested purchase and order flow', 'Products, prices, payment and fulfilment rules'],
        ['Content management', 'Set up templates and editing roles in a content management system. Support agreed pages, articles and assets so your team can update them without changing the layout.', 'Editable templates and a guide for editors', 'Editor permissions and publishing workflow'],
        ['Forms and integrations', 'Connect approved forms and bookings to email, a CRM or another system. Decide what to collect, who receives it and what a visitor sees when delivery fails.', 'Working connections and test records', 'Data fields, routing and account access'],
        ['Website redesign and migration', 'Inventory the current pages and features. Move approved content, map redirects and test key paths before switching the live site.', 'Staging preview, URL map and cutover plan', 'Pages to retain, redirects and launch timing'],
        ['Website maintenance and support', 'Agree who handles dependency and plugin updates, defects and new features. Review backups and the way hosting and deployment are managed.', 'Maintenance plan, owners and access checklist', 'Support terms, hosting and update priorities']
      ],
      systems: ['WordPress', 'Shopify', 'WooCommerce', 'Google Search Console', 'Google Analytics 4'],
      toolsTitle: 'Platforms for business sites and online stores',
      checksTitle: 'Release checks for website development services',
      scenarios: [
        ['A new site for a service business', 'Use website development services to organise services by customer need and give each page a clear next step. Test where enquiries go and who takes ownership when one arrives.'],
        ['Replace a site without losing key pages', 'Start website redesign and migration with an inventory of live URLs, popular pages and legacy features. Keep a mapping for the pages that move and verify the important redirects after switching.'],
        ['Launch a shop with a manageable catalogue', 'For e-commerce website development, start with a representative range of products. Check variants, stock status, payment, confirmation emails and what the team sees in the order queue.']
      ],
      checks: [
        'Test navigation, forms and checkout on representative phone and desktop sizes.',
        'Review keyboard navigation, form labels and clear error messages.',
        'Check images, scripts and font loading on the pages visitors use most.',
        'Verify live redirects, canonical URLs, the sitemap and search settings where in scope.',
        'Confirm who owns hosting, domain access, deployments, backups and future updates.'
      ]
    },
    details: [
      {
        id: 'website-platforms',
        title: 'Plan how your team will run the website',
        intro: 'When scoping website development services, choose the platform based on how content changes, how customers buy and which systems the site needs to connect to.',
        items: [
          ['Editable business sites', 'Use website development services to plan page templates and content types around your team’s needs. WordPress or another content management system can let authorised staff update copy, images and articles without editing code.'],
          ['Online stores', 'E-commerce website development can use Shopify or WooCommerce, depending on your catalogue, checkout and back-office tools. Agree pricing, inventory, shipping and returns so the store and the team managing orders work from the same rules.'],
          ['Custom and connected sites', 'Build custom features where the project needs account areas, booking rules or data from another system. For a wallet-connected site, scope the supported network and user journey separately. Show which actions require a signature and how users can recover from an interrupted transaction.']
        ],
        links: [['ecommerce-operations.html', 'Explore ongoing store operations']]
      },
      {
        id: 'website-integrations-and-search',
        title: 'Set up integrations, search and measurement',
        intro: 'Agree which actions matter to your business and how to verify that enquiries, bookings and orders reach the right system.',
        items: [
          ['Enquiries, bookings and payments', 'Connect each form or purchase path to the approved destination. During e-commerce website development, test abandoned checkout, failed payments and notifications so customers and staff can tell whether the order went through.'],
          ['Search at launch', 'Website development services can include page titles, internal links, crawl checks and a sitemap. During website redesign and migration, carry over useful content and map changed URLs. Set up Search Console if it is part of the release.'],
          ['Analytics around business actions', 'When measurement is in scope, configure events for agreed actions such as a completed booking or order. Test which events fire, and confirm the privacy and cookie settings before enabling visitor tracking.']
        ],
        links: [['seo-wordpress.html', 'Explore SEO and WordPress support']]
      },
      {
        id: 'website-content-and-ownership',
        title: 'Decide who owns the content and connected tools',
        intro: 'Before website development services begin, name a decision owner for the content, integrations and accounts the site will use.',
        items: [
          ['Audit what visitors already use', 'For website redesign and migration, inventory current pages, downloadable files and important entry points. Mark what moves, what needs rewriting and what can be retired. Check which pages have important links or receive enquiries before agreeing the replacement paths.'],
          ['Organise the catalogue and checkout rules', 'E-commerce website development needs representative product records before the team can design useful filters or test checkouts. Share the required fields, types of product variants and the rules for taxes, delivery and returns. Agree who reviews a test order and who confirms the store can go live.'],
          ['Confirm account and content responsibilities', 'Identify who controls the domain, hosting, content system and connected accounts. Set approval roles for page changes and agree how new editors will get access. Website maintenance and support should start with a clear record of who can approve changes after launch.']
        ]
      },
      {
        id: 'website-launch-and-support',
        title: 'Launch the site and make it easy to maintain',
        intro: 'Use a staging site to review real content and key journeys. For website redesign and migration, give each launch action and follow-up check an owner.',
        items: [
          ['Review before switching', 'Share the preview with the people who approve the content, technical setup and redirects. For website redesign and migration, coordinate the domain or hosting switch and agree when the old site can be retired.'],
          ['Handover and editorial training', 'Walk through the page editor, access roles, where enquiries arrive and how to request a change. Document the repository, hosting and deployment steps so someone else can pick up the work.'],
          ['Website maintenance and support', 'Agree how to handle updates, backups, fixes and new work. Identify who checks the site after updates and how your team will report problems such as forms that stop routing or checkout errors.']
        ]
      },
      {
        id: 'website-launch-review',
        title: 'Check the live site after website redesign and migration',
        intro: 'Website development services include release checks for the paths visitors and staff depend on. Agree which checks have to pass before the project can move into support.',
        items: [
          ['Verify the paths people rely on', 'Visit a sample of important old URLs after website redesign and migration. Confirm they lead to the intended pages, then check the main navigation and enquiry paths on a phone. Record broken links and decide which issues need a fix before promoting the site.'],
          ['Check what reaches the back office', 'For e-commerce website development, run a test order using the agreed test setup. Confirm that payment status, inventory and notifications reach the correct systems. Check who can resolve a failed order or make sure a duplicate notification has not triggered another fulfilment task.'],
          ['Leave a repeatable review checklist', 'Document where to report defects, how to check a backup and which changes need a preview. The website maintenance and support owner can use that checklist to review future updates and record which changes were tested.']
        ]
      }
    ],
    sample: {
      title: 'Launch checks for a redesigned business site',
      type: 'SAMPLE LAUNCH CHECKLIST',
      rows: [['URLs', 'Old service URLs tested against redirects', 'Checked'], ['Forms', 'Test enquiry reaches the CRM and team inbox', 'Checked'], ['Launch', 'Site owner reviews staging before the switch', 'Awaiting approval']],
      note: 'In this example, the launch owner keeps the current site available until the team approves the preview and confirms the plan to switch back if needed.'
    },
    steps: [
      ['Plan the pages and features', 'Scope website development services around your audience, what visitors need to do and the content or product records you already have. Set approval points for design, functionality and anything that needs to move.'],
      ['Design, build and review', 'Review layouts, then check the working site in staging. For website redesign and migration, ask the people who publish pages, receive leads or manage orders to test how their work will continue.'],
      ['Launch and train the team', 'Complete the agreed release checks and confirm permissions, hosting and support ownership. Plan further work under the agreed website maintenance and support scope.']
    ],
    tools: 'We can review your existing site, hosting and integrations before recommending a platform. The choice depends on who edits the site, what it needs to connect to and how it will be supported.',
    boundary: 'Your team approves content, data collection, payment and fulfilment rules, tracking and launch timing.',
    faq: [
      ['Can you build a new site and take over an existing one?', 'Yes. For a new site, we scope the pages and features first. For website redesign and migration, we review the live content, URLs, forms and hosting before planning the changes.'],
      ['Can our team edit the site after launch?', 'Yes, if editing is part of the project. We set up content fields and publishing permissions so authorised staff can make routine updates. The handover shows which changes need development.'],
      ['Can you build an online store with our existing tools?', 'E-commerce website development can connect your store with agreed payment, stock, order and shipping tools. We check compatibility and test a purchase and the order handoff before launch.'],
      ['Do you include SEO and analytics?', 'Website development services can include technical search setup, metadata, redirects and agreed analytics events. We scope the work around the project and confirm when tracking can be enabled.'],
      ['What affects development cost and timing?', 'The cost of website development services depends on templates, supplied content, catalogue size, integrations and review time. A staged release can help you prioritise the pages and features you need first.'],
      ['Can you keep the site updated after release?', 'Website maintenance and support can cover the agreed updates, backups, bug fixes and compatibility checks. We confirm responsibilities and what counts as a separate feature before work begins.']
    ]
  }
];
