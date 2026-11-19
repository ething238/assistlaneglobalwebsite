import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { services as coreServices, process, questions, pageQuestions } from './content.mjs';
import { playbooks, sampleSchedules } from './playbooks.mjs';
import { industries as coreIndustries } from './industries.mjs';
import { workflowGuides } from './workflow-guides.mjs';
import { industryGuides } from './industry-guides.mjs';
import { siteGuides } from './site-guides.mjs';
import { companyGuides } from './company-guides.mjs';
import { specialistServices } from './specialist-services.mjs';
import { developmentServices } from './development-services.mjs';
import { specialistIndustries } from './specialist-industries.mjs';
import { specialistGuides } from './specialist-guides.mjs';
import { serviceDetails, industryDetails } from './catalogue-details.mjs';
import { pageSEO } from './seo.mjs';
import { specialistPageSEO } from './specialist-seo.mjs';
import { applyPageSEO } from './seo-copy.mjs';

const services = [...coreServices, ...specialistServices, ...developmentServices];
const industries = [...coreIndustries, ...specialistIndustries];

const dir = new URL('./dist/',import.meta.url);
await mkdir(dir,{recursive:true});
const styleVersion = createHash('sha256').update(await readFile(new URL('site.css',dir))).digest('hex').slice(0,8);
const scriptVersion = createHash('sha256').update(await readFile(new URL('site.js',dir))).digest('hex').slice(0,8);
const siteName = 'AssistLane Global';
const aboutLabel = `About ${siteName}`;
const logo = await readFile(new URL('globmitra-mark.png',dir));
const logoVersion = createHash('sha256').update(logo).digest('hex').slice(0,8);
const mark = 'mark.svg?v=' + logoVersion;
const wordmarkFile = 'globmitra-wordmark.png';
const wordmarkVersion = createHash('sha256').update(await readFile(new URL(wordmarkFile,dir))).digest('hex').slice(0,8);
const wordmark = wordmarkFile + '?v=' + wordmarkVersion;
const arrow = '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>';
const shapes = {
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v5m10-5v5M3 10h18m-13 5h3m3 0h3"/>',
 headset:'<path d="M3 14v-2a9 9 0 0 1 18 0v4a4 4 0 0 1-4 4h-4"/><rect x="3" y="11" width="4" height="6" rx="1"/><rect x="17" y="11" width="4" height="6" rx="1"/>',
 pipeline:'<rect x="3" y="4" width="5" height="16" rx="1"/><rect x="10" y="4" width="5" height="12" rx="1"/><rect x="17" y="4" width="4" height="8" rx="1"/>',
 content:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8m-8 4h8m-8 4h5"/>',
 ledger:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8m-8 4h3m2 0h3m-8 4h3m2 0h3"/>',
 web:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18m-11 3-3 3 3 3m4-6 3 3-3 3"/>',
 mobile:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 5h2m-2 14h2"/>',
 check:'<circle cx="12" cy="12" r="8"/><path d="m8 12 3 3 5-6"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
 people:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2m2-15a3 3 0 0 1 0 6m1 3a4 4 0 0 1 3 4v2"/>'
};
const icon = (id,extra='')=>`<svg ${extra} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${shapes[id]}</svg>`;
const brand = `<span class="brand-mark" aria-hidden="true"><img src="${mark}" alt="" width="44" height="44" decoding="async"></span><span class="brand-wordmark">${siteName}</span>`;
const link = (url,label,cls='text-link')=>`<a class="${cls}" href="${url}">${label}${arrow}</a>`;
const enquiryPageUrl = 'contact.html#contact-form';
const enquiryLabel = 'Describe your task';
const enquiryAnchor = '#enquiry';
const companyHeroForms = new Set(['index.html', 'about.html']);
const privacyPolicyUrl = 'privacy-policy.html';
const call = (url=enquiryPageUrl)=>link(url,enquiryLabel,'button primary');
const serviceURL = s=>`${s.id}.html`;
const industryURL = industry=>`industry-${industry.id}.html`;
const serviceLabel = service=>service.label.replace(/^[A-Z][a-z]/, start=>start.toLowerCase());
const industryLabel = industry=>industry.name.toLowerCase().replace(/^ai /,'AI ');
const nav = (url,label,page)=>`<a href="${url}"${page===url?' aria-current="page"':''}>${label}</a>`;
const intro=(title,copy='',className='section-intro')=>`<div class="${className}"><h2>${title}</h2>${copy?`<p class="lead">${copy}</p>`:''}</div>`;
const catalogueIntro=(title,copy)=>intro(title,copy,'section-intro catalogue-intro');
const photoBackdrop = (name, eager = false) => `<img class="section-backdrop" src="${name}.webp" srcset="${name}-720.webp 720w, ${name}.webp 1280w" sizes="100vw" width="1280" height="853" alt="" loading="${eager ? 'eager' : 'lazy'}" decoding="async">`;
const section = (inside, cls = '', id = '', backdrop = '') => {
 const background = backdrop ? photoBackdrop(backdrop) : '';
 return `<section class="section ${cls}${backdrop ? ' photo-background' : ''}"${id ? ` id="${id}"` : ''}>${background}<div class="wrap">${inside}</div></section>`;
};
const cardIconRules = [
 ['mail', /inbox|email|message|reply|replies|newsletter/i],
 ['calendar', /calendar|meeting|schedul|timing|deadline|coverage|appointment|viewing|busy|volume/i],
 ['pipeline', /crm|lead|pipeline|routing|enquir|contact|follow.up/i],
 ['web', /website|wordpress|page|publish|release|preview|link|url|technical/i],
 ['headset', /customer|ticket|support|response|conversation/i],
 ['ledger', /invoice|cost|price|pricing|rate|quote|fee|capacity|record|report|data|field|budget/i],
 ['people', /people|team|owner|client|reviewer|approval|permission|access|role|discovery|leadership/i],
 ['check', /check|review|quality|accuracy|verify|finish|complete|decision|exception|resolve/i]
];
const cardIcon = title => cardIconRules.find(([,pattern])=>pattern.test(title))?.[0] || 'content';
const cardHeading = (title,symbol=cardIcon(title),level='h3')=>`<div class="card-heading"><span class="card-icon">${icon(symbol)}</span><${level}>${title}</${level}></div>`;

function enquiryForm(){
 return `<form class="enquiry" id="enquiry" method="post" aria-labelledby="enquiry-title" tabindex="-1">
 <div class="card-heading"><span class="card-icon">${icon('mail')}</span><h2 id="enquiry-title">Tell us what you need</h2></div>
 <div class="field"><label for="enquiry-name">Name</label><input id="enquiry-name" name="name" type="text" autocomplete="name" required></div>
 <div class="field"><label for="enquiry-company">Company name</label><input id="enquiry-company" name="company" type="text" autocomplete="organization" required></div>
 <div class="field"><label for="enquiry-email">Email</label><input id="enquiry-email" name="email" type="email" autocomplete="email" required></div>
 <div class="field"><label for="enquiry-phone">Phone number</label><input id="enquiry-phone" name="phone" type="tel" autocomplete="tel" required></div>
 <div class="field field-wide"><label for="enquiry-description">Description</label><textarea id="enquiry-description" name="description" rows="3" maxlength="2000" placeholder="Describe the task and the result you want." required></textarea></div>
 <button class="button primary" type="submit" disabled>Submit enquiry ${arrow}</button>
 <p class="enquiry-status" role="status"></p>
 <noscript><p>Enable JavaScript to use this form.</p></noscript>
 </form>`;
}

const cards=(items,cls='')=>`<div class="card-grid ${cls}">${items.map(([h,p,symbol])=>`<article class="simple-card">${cardHeading(h,symbol)}<p>${p}</p></article>`).join('')}</div>`;
const steps=items=>`<ol class="steps">${items.map(([h,p],i)=>`<li><span class="step-number">${String(i+1).padStart(2,'0')}</span>${cardHeading(h)}<p>${p}</p></li>`).join('')}</ol>`;
const faq=(items,id='')=>{
 if (items.length<6) throw new Error('FAQ sections need at least six questions.');
 return section(intro('Frequently Asked Questions')+`<div class="faq-list">${items.map(([q,a])=>`<details><summary>${q}<span aria-hidden="true"></span></summary><p>${a}</p></details>`).join('')}</div>`,'',id);
};
const invitation=(page)=>{
 const url = companyHeroForms.has(page) ? enquiryAnchor : page==='contact.html' ? '#contact-form' : enquiryPageUrl;
 return `<section class="footer-cta" id="footer-cta" aria-labelledby="footer-cta-title">
 <img class="footer-cta-image" src="footer-workspace.webp" srcset="footer-workspace-800.webp 800w, footer-workspace.webp 1600w" sizes="100vw" width="1600" height="683" alt="" loading="lazy" decoding="async">
 <div class="wrap footer-cta-content">
  <h2 id="footer-cta-title">Make room for <em>the work only you can do.</em></h2>
  <p class="footer-cta-copy">Tell us which task you’d like to hand off and what a good result looks like. Start with one piece of work that comes up regularly.</p>
  ${link(url,enquiryLabel,'button footer-cta-button')}
 </div>
</section>`;
};
const list = (items, cls='')=>`<ul class="check-list ${cls}">${items.map(item=>`<li>${icon('check')}<span>${item}</span></li>`).join('')}</ul>`;
const matrix = (columns,rows)=>`<table class="scope-table"><thead><tr>${columns.map(c=>`<th scope="col">${c}</th>`).join('')}</tr></thead><tbody>${rows.map(([title,...data])=>`<tr><th scope="row">${title}</th>${data.map((value,i)=>`<td><span class="cell-label" aria-hidden="true">${columns[i+1]}</span>${value}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
const photoDescriptions = {
 operations: 'A person works at a laptop beside an open checklist.',
 team: 'Two colleagues review work together at a table.',
 planning: 'A person writes in an open notebook beside a laptop.',
 commerce: 'A fulfilment worker checks a parcel beside a tablet.',
 records: 'Hands sort documents beside a calculator and notebook.',
 systems: 'A blue module connects translucent blocks along circuit traces.',
 'client-support': 'A customer support specialist wearing a headset works at a laptop.',
 'editorial-review': 'An editorial coordinator compares printed designs with a laptop preview.',
 'data-review': 'An analyst compares a printed table with records on a screen.',
 'hiring-review': 'Two colleagues review folders and notes at a hiring meeting.',
 'property-operations': 'A property coordinator reviews a floor plan beside a tablet and keys.',
 'practice-intake': 'A receptionist works at a medical practice front desk.',
 'field-operations': 'A construction coordinator checks a site plan beside a tablet and hard hat.',
 'matter-review': 'A legal coordinator checks a laptop while sorting navy matter folders.',
 'member-coordination': 'Two coordinators set up a volunteer sign-in table with lanyards and a laptop.',
 'access-review': 'A person reviews a laptop beside a USB security key.'
};
const servicePhotos = {
 'administrative-support': ['planning', 'operations'],
 'customer-support': ['client-support', 'operations'],
 'crm-lead-operations': ['data-review', 'client-support'],
 'marketing-content': ['editorial-review', 'data-review'],
 'seo-wordpress': ['editorial-review', 'systems'],
 'accounting-bookkeeping': ['records', 'data-review'],
 'research-data-support': ['data-review', 'planning'],
 'recruiting-people-operations': ['hiring-review', 'operations'],
 'workflow-automation': ['systems', 'access-review'],
 'ecommerce-operations': ['commerce', 'client-support'],
 'mobile-app-development': ['systems', 'team'],
 'website-development': ['editorial-review', 'operations']
};
const industryPhotos = {
 finance: ['records', 'planning'],
 'real-estate': ['property-operations', 'operations'],
 ecommerce: ['commerce', 'data-review'],
 'agencies-publications': ['editorial-review', 'planning'],
 'ai-technology': ['systems', 'client-support'],
 'professional-services': ['team', 'records'],
 healthcare: ['practice-intake', 'records'],
 legal: ['matter-review', 'access-review'],
 'construction-field-services': ['field-operations', 'planning'],
 'nonprofits-membership': ['member-coordination', 'team'],
 'startups-small-business': ['operations', 'systems']
};
const photoSizes = '(max-width: 767px) calc(100vw - 32px), (max-width: 1424px) 48vw, 680px';
const photo = (name, { eager = false, sizes = photoSizes } = {}) => {
 const alt = photoDescriptions[name];
 if (!alt) throw new Error(`Missing description for photo: ${name}`);
 return `<figure class="editorial-image">
  <img src="${name}.webp" alt="${alt}" srcset="${name}-720.webp 720w, ${name}.webp 1280w" sizes="${sizes}" width="1280" height="${name === 'systems' ? 720 : 853}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}>
 </figure>`;
};
const photoIntro = (content, name) => `<div class="split align-center photo-intro"><div>${content}</div>${photo(name)}</div>`;
const founderProfile = `<figure class="founder-profile">
 <img src="anuj-gupta.webp" alt="Portrait of Anuj Gupta" width="280" height="350" loading="lazy" decoding="async">
 <figcaption><span class="founder-name">Anuj Gupta</span><span class="founder-role">Founder, ${siteName}</span></figcaption>
</figure>`;

function workflowIllustration(labels, icons) {
 return `<figure class="workflow-illustration">
  <div class="graphic-label">${icon('pipeline')}<span>WORKFLOW MAP</span></div>
  <ol class="workflow-map-steps">
   ${labels.map((label,i)=>`<li>
    <span class="workflow-node-index">${String(i+1).padStart(2,'0')}</span>
    <span class="workflow-node-icon">${icon(icons[i])}</span>
    <strong>${label}</strong>
   </li>`).join('')}
  </ol>
 </figure>`;
}

const serviceWorkflowIcons = {
 'administrative-support':['calendar','content','check'],
 'customer-support':['headset','people','check'],
 'crm-lead-operations':['ledger','pipeline','people'],
 'marketing-content':['content','people','web'],
 'seo-wordpress':['web','check','ledger']
};

function decisionGraphic() {
 return `<figure class="decision-graphic">
  <div class="graphic-label">${icon('people')}<span>DECISION ROUTE</span></div>
  <div class="decision-body">
   <span class="decision-root">${icon('pipeline')} New request</span>
   <svg viewBox="0 0 320 48" preserveAspectRatio="none" aria-hidden="true"><path d="M160 0v23H80v24m80-24h80v24" fill="none" stroke="#6a9af2" stroke-width="2"/></svg>
   <div class="decision-branches"><span>${icon('check')} Apply the agreed rule</span><span>${icon('people')} Route for a decision</span></div>
  </div>
  <figcaption>The owner can follow the routine route or record the exception for review.</figcaption>
 </figure>`;
}

function editorialGuide(groups, renderIntro = intro) {
 return groups.map((group,index)=>section(
   group.visual
    ? `<div class="split align-center guide-heading">${renderIntro(group.title,group.intro)}${workflowIllustration(...group.visual)}</div>${cards(group.items)}`
    : renderIntro(group.title,group.intro)+cards(group.items),
   index%2===0?'sky':'',group.id
 )).join('');
}

function catalogueSections(groups = []) {
 return groups.map(({id,title,intro:copy,items,links},i) => section(
   catalogueIntro(title,copy) + cards(items) +
   (links?.length ? `<div class="actions">${links.map(([href,label])=>link(href,label)).join('')}</div>` : ''),
   i % 2 === 0 ? 'sky' : '', id
 )).join('');
}

function detailedWorkflow(guide, icons, renderIntro = intro) {
 const leadEnd = renderIntro === catalogueIntro ? guide.context.indexOf('. ') + 1 : 0;
 const caseLead = guide.context.slice(0, leadEnd);
 const caseDetails = guide.context.slice(leadEnd).trim();
 return section(
   renderIntro(guide.title,caseLead)+`<div class="split align-center guide-heading">
    <p class="case-details">${caseDetails}</p>
    ${workflowIllustration(['Check the source','Complete the work','Record the handoff'],icons)}
   </div>${steps(guide.steps)}`,
   'sky','worked-example'
 )
 + section(renderIntro(guide.setupTitle || 'Prepare the inputs and rules.','Before the first batch, give the assistant one routine example and one item that needs a decision. Compare both with the instructions to see which rules are already clear and which need to be written down.')+cards(guide.setup),'','first-batch')
 + section(
   `<div class="split align-center guide-heading">${renderIntro(guide.exceptionsTitle || 'Decide what happens when the normal rule fails.','Record the source, what you checked and who can decide. Keep blocked work visible until the next action changes.')}${decisionGraphic()}</div>`
   + cards(guide.exceptions),'mint','exception-playbook'
 )
 + section(renderIntro(guide.reviewTitle || 'Check the work against the original brief.','Use a few completed items and one unresolved case. Confirm what the next owner can tell from the record, then agree one change to test during the next cycle.')+cards(guide.review),'','review-guide')
 + section(renderIntro(guide.handoverTitle || 'Leave a record the next person can use.',guide.handover)+matrix(
   ['Part of the handover','What to record','What the next owner can do'],
   guide.handoverRows || [
    ['Current work','Include the latest version, the source link and the current status. Note what was already checked and which changes were approved.','Continue from the latest approved state without searching for the source or repeating a completed check.'],
    ['Open decisions','List each outstanding decision, the person who can make it and the point at which the next owner should follow up.','Prioritise the blocked items and ask a specific question when the next approval is due.'],
    ['Time-sensitive commitments','State the time zone, the next update due and any commitments that someone has already shared. Include the agreed backup contact.','Keep the next promise visible and make sure requests that cannot wait reach the correct person.'],
    ['Changes to the instructions','Record which rule changed, who approved it and when it starts. Keep an example that shows the difference in practice.','Use the current rule and compare new work with the agreed example during the next review.']
   ]
 ),'warm','coverage-handover')
 + editorialGuide([guide.planning],renderIntro);
}

function header(page){
 const chevron = '<svg aria-hidden="true" width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor"><path d="m3 6 5 5 5-5"/></svg>';
 const enquiryUrl = companyHeroForms.has(page) ? enquiryAnchor : enquiryPageUrl;
 return `<a class="skip" href="#main">Skip to content</a><header class="site-header"><div class="wrap header-row">
  <a class="brand" href="index.html" aria-label="${siteName} home">${brand}</a>
  <button class="mobile-menu" type="button" aria-expanded="false" aria-controls="navigation">Menu <span aria-hidden="true">☰</span></button>
  <nav id="navigation" class="navigation" aria-label="Main navigation">
   ${nav('index.html','Home',page)}
   ${nav('about.html','About Us',page)}
   <details class="nav-dropdown services-menu" name="primary-navigation">
    <summary aria-controls="services-dropdown">Services ${chevron}</summary>
    <div class="menu-panel" id="services-dropdown">
     <div class="menu-grid">${services.map(s=>`<a href="${serviceURL(s)}"${page===serviceURL(s)?' aria-current="page"':''}>${icon(s.icon)}<span><strong>${s.title}</strong><small>${s.tasks[0]}</small></span></a>`).join('')}</div>
     ${link('services.html','View all services')}
    </div>
   </details>
   <details class="nav-dropdown industries-menu" name="primary-navigation">
    <summary aria-controls="industries-dropdown">Industries ${chevron}</summary>
    <div class="menu-panel" id="industries-dropdown">
     <div class="menu-grid">${industries.map(industry=>`<a href="${industryURL(industry)}"${page===industryURL(industry)?' aria-current="page"':''}>${icon(industry.icon)}<span><strong>${industry.name}</strong><small>${industry.tasks[0]}</small></span></a>`).join('')}</div>
     ${link('industries.html','View all industries')}
    </div>
   </details>
   ${nav('how-it-works.html','How it works',page)}${nav('pricing.html','Pricing',page)}${nav('trust.html','Trust',page)}
   <a class="mobile-contact" href="${enquiryUrl}">${enquiryLabel}</a>
  </nav><div class="header-cta">${call(enquiryUrl)}</div></div></header>`;
}
const footer=(page)=>`<footer class="site-footer" id="site-footer"><div class="wrap"><div class="footer-grid">
 <div class="footer-brand">
  <a class="brand" href="index.html" aria-label="${siteName} home">${brand}</a>
  <p>${siteName} provides virtual assistants for executive support, customer service, sales and social media. Our specialist services cover bookkeeping, research, recruiting, automation, e-commerce, and mobile app and website development.</p>
  <p>Start with one recurring task. We’ll agree who owns it, what a finished result looks like and which decisions stay with your team.</p>
 </div>
 <nav class="footer-column" aria-label="Services">
  <p class="footer-title">Services</p>
  <div class="footer-links">${nav('services.html','All services',page)}${services.map(s=>nav(serviceURL(s),s.label,page)).join('')}</div>
 </nav>
 <nav class="footer-column" aria-label="Industries">
  <p class="footer-title">Industries</p>
  <div class="footer-links">${nav('industries.html','All industries',page)}${industries.map(industry=>nav(industryURL(industry),industry.name,page)).join('')}</div>
 </nav>
 <nav class="footer-column footer-company" aria-label="Company">
  <p class="footer-title">Company</p>
  <div class="footer-links">${nav('index.html','Home',page)}${nav('about.html',aboutLabel,page)}${nav('how-it-works.html','How it works',page)}${nav('pricing.html','Pricing',page)}${nav('trust.html','Trust and security',page)}${nav(privacyPolicyUrl,'Privacy Policy',page)}</div>
 </nav>
 </div><div class="footer-utility">
  ${link(enquiryPageUrl,enquiryLabel,'footer-action')}
  <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
 </div></div></footer>`;

function hero({title,copy,visual='',tone='warm',secondary='',home=false,action=true,showEnquiryForm=false,backdrop=''}){
 const background = backdrop ? photoBackdrop(backdrop, true) : '';
 const panel = showEnquiryForm ? enquiryForm() : visual;
 const enquiryAction = action && !showEnquiryForm ? call() : '';
 const actions = enquiryAction + secondary;
 const paragraphs = Array.isArray(copy) ? copy : [copy];
 const description = paragraphs.filter(Boolean).map(paragraph=>`<p class="lead">${paragraph}</p>`).join('');
 return `<section class="hero ${tone}${home ? ' home-hero' : ''}${backdrop ? ' photo-background' : ''}">${background}<div class="wrap ${panel?'split hero-grid':'compact-hero'}">
   <div class="hero-copy"><h1>${title}</h1>${description}
   ${actions?`<div class="actions">${actions}</div>`:''}</div>${panel}
 </div></section>`;
}
function sample(s,style=''){
 return `<figure class="sample ${style}"><div class="sample-top"><span class="sample-dot"></span><span>${s.type}</span></div>
  <div class="sample-body">${cardHeading(s.title)}<ul class="sample-rows">${s.rows.map(([id,task,status])=>`<li><span class="sample-id">${id}</span><strong>${task}</strong><span class="badge">${status}</span></li>`).join('')}</ul><figcaption>${s.note}</figcaption></div></figure>`;
}
function assistantFlowGraphic(){
 return `<figure class="assistant-flow" aria-labelledby="assistant-flow-title">
  <div class="assistant-flow-header">
   <span id="assistant-flow-title">How your virtual assistant helps</span>
  </div>
  <ol class="assistant-task-flow" id="assistant-task-flow">
   <li class="flow-step">
    <div class="flow-step-title"><span class="flow-step-number">1</span><span class="flow-person">${icon('mail')}</span><strong>You share the task</strong></div>
    <div class="flow-request"><p>“Organise my inbox and tomorrow’s meetings.”</p></div>
   </li>
   <li class="flow-step flow-assistant">
    <div class="flow-step-title"><span class="flow-step-number">2</span><span class="flow-person">${icon('headset')}</span><strong>Your virtual assistant handles it</strong></div>
    <p class="flow-person-note">A real person, following your instructions.</p>
    <ul class="flow-checklist">
     <li>${icon('check')}<span>Sorts urgent emails from routine requests</span></li>
     <li>${icon('check')}<span>Drafts replies using your instructions</span></li>
     <li>${icon('check')}<span>Checks meeting times and flags conflicts</span></li>
    </ul>
   </li>
   <li class="flow-step flow-delivery">
    <div class="flow-step-title"><span class="flow-step-number">3</span><span class="flow-person">${icon('check')}</span><strong>You review the results</strong></div>
    <ul class="flow-results">
     <li>${icon('mail')}<span>Prioritised inbox</span></li>
     <li>${icon('calendar')}<span>Meeting plan</span></li>
     <li>${icon('content')}<span>Replies to approve</span></li>
    </ul>
   </li>
  </ol>
  <figcaption>Professional virtual assistant services. You set priorities and approve key decisions.</figcaption>
 </figure>`;
}
const serviceCards=()=>`<div class="service-grid">${services.map(s=>`<article class="service-card">${cardHeading(s.title,s.icon)}<p>${s.summary}</p><ul>${s.tasks.map(t=>`<li>${t}</li>`).join('')}</ul>${link(serviceURL(s),'View playbook')}</article>`).join('')}</div>`;
const servicePortraits = {
 'administrative-support': 'role-admin',
 'customer-support': 'role-support',
 'crm-lead-operations': 'role-crm',
 'marketing-content': 'role-marketing',
 'seo-wordpress': 'role-web'
};

function serviceStrip() {
 return `<div class="service-strip" data-service-strip>
  <div class="service-strip-heading">
   ${intro('Find the support you need.','Browse the roles to see the work each one can take on.')}
   ${link('services.html','All services','button secondary')}
  </div>
  <ul class="service-strip-track" id="service-strip-track" aria-label="Service playbooks" tabindex="0">
   ${services.map(service=>`<li><a class="service-portrait" href="${serviceURL(service)}">
    <img src="${service.portrait || servicePortraits[service.id]}.webp" alt="" width="640" height="960" loading="lazy" decoding="async">
    <span>${icon(service.icon)}<b>${service.label}</b>${arrow}</span>
   </a></li>`).join('')}
  </ul>
  <div class="service-strip-controls" hidden>
   <button type="button" class="strip-previous" data-strip-previous aria-label="Previous services" aria-controls="service-strip-track">${arrow}</button>
   <button type="button" data-strip-next aria-label="Next services" aria-controls="service-strip-track">${arrow}</button>
  </div>
 </div>`;
}

function inboxSavings() {
 return `<div class="split align-center inbox-layout">
  <div>
   ${intro('Email alone can give you hours back.','Hand off the sorting, routine drafts and follow-ups. Keep the messages that need your judgment in one short brief.')}
   <ul class="inbox-points">
    <li>${icon('check')} Prioritise messages by deadline and importance.</li>
    <li>${icon('check')} Draft routine replies from approved examples.</li>
    <li>${icon('check')} Bring you decisions with the original context.</li>
   </ul>
   ${link('administrative-support.html#sample','See a sample inbox brief')}
  </div>
  <div class="inbox-estimator" data-inbox-estimator>
   <div class="inbox-estimator-heading">
    <span class="tile">${icon('mail')}</span>
    <h3>What could you get back?</h3>
   </div>
   <div class="inbox-total"><output id="inbox-saved" for="inbox-current inbox-review">3 hr 45 min</output><span>estimated per five-day workweek</span></div>
   <p class="inbox-example">Example based on 60 minutes of email work and 15 minutes of review per day.</p>
   <div class="inbox-controls" hidden>
    <div class="inbox-slider">
     <label for="inbox-current">Email time today</label><span data-current-minutes>60 min/day</span>
     <input type="range" id="inbox-current" min="0" max="180" step="5" value="60" aria-describedby="inbox-calc-note">
    </div>
    <div class="inbox-slider">
     <label for="inbox-review">Time you’d still spend reviewing</label><span data-review-minutes>15 min/day</span>
     <input type="range" id="inbox-review" min="0" max="180" step="5" value="15" aria-describedby="inbox-calc-note">
    </div>
    <p id="inbox-calc-note">The estimate subtracts review time from your current daily email time, then multiplies by five.</p>
   </div>
  </div>
 </div>`;
}
const industryCards=()=>`<div class="industry-grid">${industries.map(industry=>`
 <article class="service-card industry-card">
  ${cardHeading(industry.name,industry.icon)}
  <p>${industry.summary}</p>
  <ul>${industry.tasks.map(task=>`<li>${task}</li>`).join('')}</ul>
  ${link(industryURL(industry),`Explore ${industryLabel(industry)} support`)}
 </article>`).join('')}</div>`;

const tabSamples=()=>`<div class="tabs"><div class="tab-controls" role="tablist" aria-label="Example workflows">${services.map((s,i)=>`<button type="button" role="tab" id="sample-tab-${i}" aria-controls="sample-panel-${i}" aria-selected="${i===0}" tabindex="${i===0?'0':'-1'}">${s.tabLabel || ['Admin','Support','CRM','Social','Web'][i]}</button>`).join('')}</div>
${services.map((s,i)=>`<div role="tabpanel" tabindex="0" id="sample-panel-${i}" aria-labelledby="sample-tab-${i}"${i?' hidden':''}>${sample(s.sample)}${link(serviceURL(s),'See the '+serviceLabel(s)+' playbook')}</div>`).join('')}</div>`;

const homepage=hero({
 title:'Virtual assistants <em>for everyday business support.</em>',
 copy:[
  'Find a virtual assistant for entrepreneurs and growing teams. We handle inboxes, calendars, customer enquiries, sales follow-ups and social publishing.',
  'Our professional virtual assistant services can begin with a daily inbox brief, a queue of customer replies or a weekly lead report. You decide which requests need your approval.',
  'Our virtual assistant agency can also scope specialist support for bookkeeping, recruiting and workflow automation, or help you plan a new website or mobile app.'
 ],
 showEnquiryForm:true,
 secondary:link('#workflow-lab','See the work in action','button primary'),
 home:true
})
 + section(serviceStrip(),'','service-strip')
 + section(inboxSavings(),'sky','inbox-savings')
 + section(intro('Find the right service for your workload.','Start with the recurring task that causes the most friction. Each playbook shows the work, the outputs and the decisions that stay with your team.')+serviceCards(),'','service-map')
 + section(`<div class="split align-center"><div>${intro('See how support fits your business.','Explore industry workflows from finance and e-commerce to healthcare practices, property teams and startups.')}${link('industries.html','Explore industries','button secondary')}</div>${photo('operations')}</div>`,'mint')
 + section(intro('Inspect the work before you delegate it.','Switch between sample outputs to see what you get back and which decisions stay with you.')+`<div class="split lab-layout">${assistantFlowGraphic()}<div class="lab-tabs">${tabSamples()}${link('how-it-works.html','Read the delivery process')}</div></div>`,'dark-section','workflow-lab')
 + section(intro('What the work looks like over a week.','A sample schedule for a team handing off several workflows. Actual coverage, volume and review times are scoped with each engagement.')+matrix(['Cadence','Work in scope','What you review'],sampleSchedules),'','cadence')
 + section(intro('Keep decisions with the right people.')+cards([['Scoped access','Start with the minimum account permissions the task needs. Record the tool, role and approval before giving access.'],['Approval gates','Define what the assistant can handle independently and what needs sign-off, from refunds to live website changes.'],['Continuity','Keep instructions, work history and unresolved decisions in a shared place so someone else can take over when needed.']])+link('trust.html','Explore trust and security'),'mint')
 + section(intro('Get one workflow right first.')+steps([process[0],['Run a trial handoff','Document inputs, quality checks and decision limits. Review a sample before granting further access.'],['Set the operating rhythm','Agree the queue, reporting schedule, and how to handle out-of-scope or urgent work.']])+link('how-it-works.html','See the full onboarding sequence'),'warm','first-workflow','planning')
 + section(`<div class="split align-center"><div>${intro('Know what you’re buying.','A comparable scope spells out expected volumes, coverage hours, review time and what changes the cost. Use those details to assess capacity before committing.')}</div><div class="section-action">${link('pricing.html','See how pricing is scoped','button secondary')}</div></div>`)
 + editorialGuide(siteGuides.home)
 + section(`<div class="founder-layout founder-preview">
   <div>${intro('Meet our founder')}${link('about.html#founder','Read Anuj’s story')}</div>
   ${founderProfile}
  </div>`,'mint','meet-the-founder')
 + faq(questions);

const servicesPage=hero({
 title:'Virtual assistant services',
 copy:[
  'Choose outsourced administrative services for your inbox and calendar, bring in customer or CRM support, or hand off recurring social media and bookkeeping work.',
  'Before you hire a virtual assistant, decide what you want to review. Compare our virtual assistant services by the result they deliver, from a prioritised inbox to an updated sales pipeline or a reconciliation report.'
 ],
 showEnquiryForm:true
})
 + section(intro('Virtual assistant and specialist services')+serviceCards(),'','service-map')
 + section(photoIntro(intro('Start with your operating context.','See how the same service adapts to work such as property viewings, order exceptions, client approvals and product demos.')+link('industries.html','Browse industries'),'operations'),'warm')
 + section(intro('What to hand off when you hire a virtual assistant')+`<div class="card-grid two">${[['Organise my day','administrative-support'],['Respond to customers','customer-support'],['Manage leads and follow-ups','crm-lead-operations'],['Publish on LinkedIn and social media','marketing-content'],['Keep the books current','accounting-bookkeeping'],['Run the store queue','ecommerce-operations']].map(([title,id])=>{const service=services.find(s=>s.id===id);return `<div class="simple-card">${cardHeading(title,service.icon)}${link(serviceURL(service),service.title)}</div>`;}).join('')}</div>`,'mint')
 + section(intro('Combine virtual assistant services around one result','When a task moves between tools or teams, define where each handoff happens and who owns the final output.')+cards([
   ['From enquiry to follow-up','Customer support records the enquiry, then CRM support checks the contact and assigns the next action.'],
   ['From brief to live page','Content support collects assets and approval, then WordPress support checks the preview and records the live URL.'],
   ['From meeting to action list','Executive support prepares the agenda and records decisions. The delivery owner tracks outstanding actions in the agreed workspace.']
 ]),'sky','combined-services','planning')
 + section(`<div class="split align-center"><div>${intro('The task and the working arrangement','Write down what needs doing, what a finished result looks like and who should review it. Then decide what can be handled independently.')}${link('how-it-works.html','See the delivery process')}</div>${photo('team')}</div>`)
 + editorialGuide(siteGuides.services)
 + faq(pageQuestions.services,'service-faq');

function servicePage(s){
 const connected = {
  'administrative-support':['customer-support','accounting-bookkeeping','recruiting-people-operations'],
  'customer-support':['crm-lead-operations','ecommerce-operations','workflow-automation'],
  'crm-lead-operations':['research-data-support','marketing-content','workflow-automation'],
  'marketing-content':['crm-lead-operations','seo-wordpress','research-data-support'],
  'seo-wordpress':['marketing-content','workflow-automation','website-development'],
  'accounting-bookkeeping':['administrative-support','ecommerce-operations','workflow-automation'],
  'research-data-support':['crm-lead-operations','marketing-content','workflow-automation'],
  'recruiting-people-operations':['administrative-support','research-data-support','accounting-bookkeeping'],
  'workflow-automation':['crm-lead-operations','mobile-app-development','seo-wordpress'],
  'ecommerce-operations':['customer-support','accounting-bookkeeping','website-development'],
  'mobile-app-development':['website-development','workflow-automation','ecommerce-operations'],
  'website-development':['mobile-app-development','seo-wordpress','ecommerce-operations']
 };
 const others=connected[s.id].map(id=>services.find(service=>service.id===id));
 const p=playbooks[s.id] || s.playbook;
 const icons=serviceWorkflowIcons[s.id] || [s.icon,'content','check'];
 const guide=workflowGuides[s.id] || specialistGuides[s.id];
 const scope = p.scope || {
  title:'What you can hand off.',
  intro:'Use this scope to decide what goes into the queue, what a finished task looks like and which decisions your team keeps.',
  workColumn:'What the assistant does'
 };
 const [scopePhoto, samplePhoto] = servicePhotos[s.id];
 const backdrop = [scopePhoto, samplePhoto].includes('operations') ? 'team' : 'operations';
 return hero({
  title:p.title || s.title,copy:p.copy,tone:'service-hero',
  secondary:link('#scope','Explore the scope','button primary'),
  showEnquiryForm:true
 })
 + section(photoIntro(intro(scope.title,scope.intro),scopePhoto)+matrix(['Workstream',scope.workColumn,'What you get','Your approval'],p.matrix),'','scope')
 + catalogueSections(s.details || serviceDetails[s.id])
 + section(intro('Where this helps day to day.')+cards(p.scenarios),'warm','scenarios')
 + section(intro('What the finished handoff looks like.','This example uses fictional records.')+`<div class="split lab-layout with-photo">${photo(samplePhoto)}${sample(s.sample)}</div>`,'dark-section','sample')
 + section(intro('From request to review.')+`<div class="split workflow-layout">${steps(s.steps)}${workflowIllustration(s.steps.map(([title])=>title),icons)}</div>`,'','handoff',backdrop)
 + section(intro(p.checksTitle || 'What to verify before closing a task.')+`<div class="split">${list(p.checks)}<div class="scope-panel">${cardHeading(p.toolsTitle || 'Work in the tools you already use.','web')}<div class="system-tags">${p.systems.map(tool=>`<span>${tool}</span>`).join('')}</div><p>${s.tools}</p><p><strong>Approval boundary.</strong> ${s.boundary}</p>${link('trust.html','Read about trust and access')}</div></div>`,'mint','quality')
 + (guide ? detailedWorkflow(guide,icons,s.playbook ? catalogueIntro : intro) : '')
 + faq(p.extraFAQ ? [...s.faq,p.extraFAQ] : s.faq,'service-faq')
 + section(intro('Explore connected services')+`<div class="card-grid">${others.map(o=>`<div class="simple-card">${cardHeading(o.title,o.icon)}${link(serviceURL(o),'View '+serviceLabel(o))}</div>`).join('')}</div>`,'warm');
}

const industryDirectory = hero({
 title:'Virtual assistant support by industry',
 copy:[
  'Compare virtual assistant services by industry and see how the work changes from one sector to the next.',
  'Our specialized virtual assistant services can help a property team book viewings, an online store manage returns or a consultancy collect client records. Open the industry closest to your work to see the tasks, tools and approvals involved, and choose a workflow to start with.'
 ],
 tone:'service-hero industry-hero',
 secondary:link('#industry-directory','Compare industries','button primary'),
 showEnquiryForm:true
})
 + section(intro('Find your operating context.')+industryCards(),'','industry-directory')
 + section(intro('Handoff examples for industry specific virtual assistants','These examples show how the work changes with the tools, approval rules and responsibilities of the business.')+matrix(
  ['Industry','First workflow','Sample output'],
  industries.map(industry=>[industry.name,industry.starter,industry.sample.title])
 ),'warm')
 + section(intro('The same service can solve different problems.')+matrix(
  ['Service','One starting point','Another starting point'],
  [
    ['Customer support','An e-commerce team needs order updates and a path for refund exceptions.','A technology team needs onboarding questions sorted and product issues routed.'],
    ['CRM and lead operations','A brokerage needs viewing requests assigned to the right agent.','A professional firm needs incoming enquiries logged for the appropriate adviser.'],
    ['Social media marketing and content','An agency needs LinkedIn content and campaign approvals tracked across accounts.','A technology team needs approved documentation and release notes kept current.'],
    ['Accounting and bookkeeping','A finance team needs reconciliations and invoices ready for month-end review.','A store owner needs payouts, fees and returns organised for the ledger.'],
    ['Research and data','A startup needs a sourced competitor comparison.','A publication needs facts and original sources checked before review.']
  ]
 ),'','shared-workflows','planning')
 + section(photoIntro(intro('Approval boundaries for specialized virtual assistant services')+cards([
   ['Finance','The assistant prepares an exception record. An authorised finance reviewer decides what gets approved or paid.'],
   ['E-commerce','Routine order updates follow an approved policy. Refunds and replacements outside that policy go to the store owner.'],
   ['Marketing','The assistant prepares assets and previews. The brand or editorial owner signs off on the final version.']
 ],'stacked')+link('trust.html','Read about access and approvals'),'commerce'),'sky','industry-approvals')
 + section(`<div class="split align-center">${intro('Plan coverage for industry specific virtual assistants','Start with a real example and name the tools, the decision owner and how often the work comes in. Use the service playbooks to combine functions when one workflow spans several teams.')}${photo('data-review')}</div>`+
  cards([
    ['Select the work','Pick a recurring queue, a regular deadline or a handoff that keeps falling between teams.'],
    ['Set the guardrails','Agree account access, approvals and the decisions that require specialist expertise.'],
    ['Review the capacity','Estimate typical and peak volumes, time zone overlap and who reviews completed work.']
  ])+`<div class="actions">${link('services.html','Compare services')}${link('pricing.html','See how pricing is scoped')}</div>`)
 + editorialGuide(siteGuides.industries)
 + faq(pageQuestions.industries,'industry-faq');

function industryPage(industry) {
 const related = industry.services.map(id=>services.find(service=>service.id===id));
 const guide = industryGuides[industry.id] || specialistGuides[industry.id];
 const [scopePhoto, samplePhoto] = industryPhotos[industry.id];
 const backdrop = [scopePhoto, samplePhoto].includes('operations') ? 'team' : 'operations';
 return hero({
  title:industry.headline,
  copy:[industry.summary, ...industry.coverDetails],
  tone:'service-hero industry-hero',
  secondary:link('industries.html','All industries','button primary'),
  showEnquiryForm:true
 })
 + section(photoIntro(intro('What your team can hand off.','Use this example scope to agree the work, the deliverable and who makes the final decision.'),scopePhoto)+
  matrix(['Workstream','What the assistant does','What you get','Your approval'],industry.scope),'','sector-scope')
 + catalogueSections(industryDetails[industry.id])
 + section(intro('How the handoff works.')+`<div class="split workflow-layout">${steps(industry.flow)}${workflowIllustration(industry.flow.map(([title])=>title),[industry.icon,'content','check'])}</div>`,'warm','sector-flow',backdrop)
 + section(intro('What the finished handoff looks like.','This example uses fictional records.')+`<div class="split lab-layout with-photo">${photo(samplePhoto)}${sample(industry.sample)}</div>`,'dark-section','sector-sample')
 + section(intro('What to bring to setup.')+`<div class="split">${list(industry.inputs)}
   <div class="scope-panel">${cardHeading('Set access around the work.','people')}
    <div class="system-tags">${industry.tools.map(tool=>`<span>${tool}</span>`).join('')}</div>
    <p>${industry.boundary}</p>${link('trust.html','Read about access and approvals')}
   </div></div>`,'mint','sector-setup')
 + section(intro('Build the scope from the work.')+`<div class="card-grid">${related.map(service=>`
   <article class="simple-card">${cardHeading(service.title,service.icon)}<p>${service.summary}</p>${link(serviceURL(service),`Explore ${serviceLabel(service)}`)}</article>`).join('')}</div>`,'','sector-services')
 + (guide ? detailedWorkflow(guide,[industry.icon,'ledger','check'],industryGuides[industry.id] ? intro : catalogueIntro) : '')
 + faq(industry.faq,'sector-faq');
}

const how = hero({title:'How it works',copy:'Start with a clear scope, test a small handoff and decide how everyday work gets assigned, reviewed and improved.',visual:`<div class="hero-panel mint">${steps([['Discover','Choose the first workflow.'],['Onboard','Agree instructions and access.'],['Review','Check the result together.']])}</div>`})
 + section(intro('What happens at each stage')+`<ol class="timeline">${process.map(([h,p],i)=>`<li><span class="step-number">0${i+1}</span><div>${cardHeading(h)}<p>${p}</p></div></li>`).join('')}</ol>`)
 + section(intro('Start with a daily brief.','Share a few examples and review a draft before approving replies or calendar changes.')+`<div class="split lab-layout with-photo">${photo('operations')}${sample(services[0].sample)}</div>`,'dark-section')
 + section(intro('Make each decision easy to route.')+cards([['You provide','Priorities, authorised access, source information and a named person for approvals.'],['Delivery owner','Written task instructions, an agreed work log, questions and exceptions that need a decision.'],['Review together','Check completed work, update the instructions and decide how to handle changes or absences.']])+link('trust.html#access','Plan access and approvals'),'','decision-owners','planning')
 + section(intro('Know what to review and when.')+matrix(['Cadence','Work in scope','What you review'],sampleSchedules),'warm')
 + section(`<div class="split align-center"><div>${intro('Decide whether to expand the scope.')}${list(['Compare the result with the example you provided. Note any changes needed to tone, format or accuracy.','Check whether routine work could proceed and whether exceptions reached the right person.','Update the instructions, coverage and permissions before adding another queue or system.'])}</div>${photo('team')}</div>`)
 + editorialGuide(companyGuides.how)
 + faq(pageQuestions.how,'how-faq');

const pricing = hero({title:'Pricing for the work you need',copy:'Use discovery to define a scope you can compare: the tasks, capacity, coverage, specialist skills and review responsibilities.',tone:'sky',secondary:link('#quote','See what shapes a quote'),visual:workflowIllustration(['List the tasks','Estimate capacity','Review the scope'],['content','calendar','ledger'])})
 + section(photoIntro(intro('What affects the cost')+cards([['Time and coverage','Expected volume, regular hours, time zone overlap and how quickly a task needs attention.'],['Skills and complexity','The systems involved, the level of specialist input and whether work spans several functions.'],['Setup and oversight','Documentation, onboarding, quality review, reporting and access setup. See <a href="how-it-works.html#delivery-example">what the first handoff involves</a>.']],'stacked'),'records'),'','quote')
 + section(intro('Compare scope and terms together.')+`<div class="comparison">${[['Capacity','Hours or expected volume; overage rules; time zone and coverage.'],['Included work','Tasks, deliverables, tools, reviews and approval limits.'],['Fees and billing','Currency, billing period, setup fees and any specialist or tool charges.'],['Changes and continuity','How scope changes, handovers, unused capacity and gaps in coverage are handled.'],['Commitment','Start date, renewal, notice and cancellation terms.']].map(([h,p])=>`<div>${cardHeading(h)}<p>${p}</p></div>`).join('')}</div>`,'warm')
 + section(photoIntro(intro('Two ways to define the work')+cards([['Recurring admin','A daily inbox review and a weekly calendar check. Estimate typical volume, time zone overlap and how often an approval is needed.'],['Content publication','An approved article queue. Define expected volume, formatting and on-page checks, and which changes need specialist review.']],'stacked'),'planning'),'sky')
 + section(intro('Bring enough detail for a useful quote.','A small sample of real work makes it easier to separate execution time, review time and special cases.')+matrix(['Input','What to bring','Why it changes the scope'],[
   ['Volume','Typical and peak weekly item counts.','Surges may require extra coverage or different turnaround targets.'],
   ['Complexity','A routine example and an exception.','They show the difference between checklist work and work that needs judgment.'],
   ['Coverage','Time zone, response windows and deadlines.','Overlap and urgent availability affect how the work is scheduled.'],
   ['Approval load','Who signs off and how often.','Review time and blocked items affect the capacity you can use.']
 ]))
 + section(intro('Know when to revisit the quote.','Write down changes in workload, coverage or approval authority so both teams can compare the old scope with the new one.')+cards([
   ['A temporary peak','If an event or launch increases volume, define the extra work and the dates it applies to.'],
   ['A recurring change','If an additional queue becomes part of the regular workload, revisit capacity and assign someone to review the output.'],
   ['A higher-risk task','If the work needs broader permissions or a new approval rule, review <a href="trust.html#access-changes">how to approve access changes</a> before expanding the scope.']
 ]),'mint','scope-changes','data-review')
 + editorialGuide(companyGuides.pricing)
 + faq(pageQuestions.pricing,'pricing-faq');

const about = hero({
 title:aboutLabel,
 copy:[
  `${siteName} is a virtual assistant company for founders and teams with recurring work to hand off. We support executive admin, customer enquiries, sales follow-ups, social publishing and bookkeeping. We also build websites and mobile apps when an engagement calls for development.`,
  'Founder Anuj Gupta brings more than 25 years of experience building teams and launching products. He applies that experience to how we scope work, assign responsibilities and check the result.',
  'Your virtual assistant team starts with a real example from your day. We agree where the work happens, what a finished result looks like and how to flag decisions before taking on a regular workload.'
 ],
 secondary:link('#founder','Meet the founder','button primary'),
 backdrop:'data-review',
 showEnquiryForm:true
})
 + section(`<div class="split align-center"><div>${intro('We help teams hand off recurring work.','An overflowing inbox, a growing queue or a publication backlog can pull people away from work that needs their judgment. We help define a handoff with a clear owner, a useful output and an agreed review step.')}${link('services.html','Explore our services')}</div>${photo('team')}</div>`,'','what-we-do')
 + section(intro('Meet our founder')+`<div class="founder-layout">
   ${founderProfile}
   <div class="founder-bio">
    <p>Anuj joined Stryker as its first employee in India and built a 250-person IT organisation. He expanded Stryker’s research and development work in India and helped build teams that turned customer needs into products for global markets.</p>
    <p>He brings that experience to AssistLane Global, a virtual assistant company built around clear responsibilities and reliable handoffs. Our virtual assistant team starts with one recurring task, agrees who owns it and writes down when it needs review. Your professional virtual assistant gets clear instructions, and your team can check the result against the brief.</p>
   </div>
  </div>`,'mint','founder')
 + section(intro('The roles behind the work.','The people involved depend on the workflow. During setup, agree who will handle the work, who checks it and who makes decisions when something falls outside scope.')+cards([
   ['Virtual assistant','Handles the agreed tasks, records progress and flags issues that need an answer.'],
   ['Specialist support','Helps when the work requires experience with a particular tool, channel or publishing process.'],
   ['Delivery and review','Keeps track of the instructions, checks agreed outputs and makes sure exceptions reach the right person.']
 ]),'','team')
 + section(intro('Start with one workflow.')+steps([
   ['Define the handoff','Choose one repeatable task and agree its inputs, deadline, output and approval rules.'],
   ['Review a sample','Check an early example for accuracy and format. Use the review to improve the instructions.'],
   ['Expand when ready','Add work after the team understands the current scope, coverage and way of handling exceptions.']
 ])+link('how-it-works.html','See how work is organised'),'warm','working-model','planning')
 + section(`<div class="split align-center"><div>${intro('Keep the handoff easy to review.','A useful record lets someone see what happened, who owns the next action and which decisions still need approval.')}${link('trust.html','Read about access and approvals')}</div>${list([
  'Use only the systems and account permissions required for the agreed task.',
  'Record decisions, completed work and exceptions in the agreed workspace.',
  'Keep approval for sensitive actions with the person responsible for them.'
 ])}</div>`,'','principles')
 + editorialGuide(companyGuides.about)
 + faq(pageQuestions.about,'about-faq');

const trust = hero({title:'Trust and security',copy:'Use these questions to set permissions, review points and handover responsibilities before sharing accounts or records.',tone:'white',visual:workflowIllustration(['Request access','Approve the role','Review permissions'],['content','people','check'])})
 + section(photoIntro(intro('The access model'),'access-review')+steps([['Request','List the system, data, role and reason for access.'],['Authorise','Have the account owner approve the minimum permissions the task needs.'],['Review and remove','Recheck access when the scope changes and confirm removal at handover.']]),'mint','access')
 + section(intro('Decisions to document')+cards([['Collection and storage','Confirm the files and fields the work requires, where records are kept and which systems are approved.'],['Sharing and retention','Set who can view or export records, how long working copies are needed and how they are returned or removed.'],['Quality and escalation','Agree how sensitive work is reviewed and who to contact if data is mishandled or a task needs a decision.']]),'','access-decisions','team')
 + section(intro('Match permissions to the actual task.')+matrix(['Workflow','Starting permission','Separate approval'],[
   ['Executive inbox','Read and draft in the agreed mailbox.','Sending as the executive or changing mailbox rules.'],
   ['Customer queue','Access assigned tickets and documented policy.','Refunds, exports and account changes.'],
   ['CRM cleanup','Read the agreed fields and review a test batch.','Bulk updates, merges and deletions.'],
   ['WordPress update','Create and preview drafts with an editor role.','Publishing, changing redirects or installing plugins.']
 ]),'warm')
 + section(intro('Approve tools before sharing information.','Confirm which external tools are permitted, what information can be entered and how outputs will be checked. Discuss AI tools separately where relevant.'),'sky')
 + section(photoIntro(intro('Keep the next owner visible.')+cards([['Continuity','Write down where open work, instructions and approvals live so a replacement can pick them up. See <a href="how-it-works.html#coverage-changes">how a change in coverage is handled</a>.'],['Raising a concern','Agree an escalation contact and what to include: the system involved, what happened and when it was first noticed.']],'stacked'),'records'))
 + editorialGuide(companyGuides.trust)
 + faq(pageQuestions.trust,'trust-faq');

const contact = hero({title:'Describe the work you need help with',copy:'Use the examples below to plan your first handoff, then tell us what kind of work you need help with.',secondary:link('#contact-form',enquiryLabel),visual:photo('planning',{eager:true}),action:false})
 + section(`<div class="split contact-layout"><div>${intro('Bring one practical example.','Describe the work, the result you want and anything that needs approval. A short description is enough to start.')}${steps([['Workload','What comes up repeatedly, and how often?'],['Tools','Where do requests arrive and where is work recorded?'],['Coverage','Which time zone, days or handoffs matter?']])}</div>
 ${enquiryForm()}</div>`,'','contact-form')
 + section(photoIntro(intro('Pick one task you can review.')+cards([
   ['Start with a repeatable request','A daily inbox check, weekly CRM cleanup or regular page update gives you a concrete place to begin.'],
   ['Describe the finished result','Use a familiar format such as a daily digest, an updated record or a checklist with blocked items.'],
   ['Note the exception','Include a case that needs a different decision, such as a refund outside policy or a change that requires publishing approval.']
 ],'stacked')+link('services.html','Browse service examples'),'operations'),'mint','choose-a-task')
 + section(`<div class="split align-center"><div>${intro('See what to include in your description.','A short brief is enough if it says what to do, what to return, when the work happens and who handles exceptions.')}</div>
  ${sample({title:'Daily inbox triage',type:'SAMPLE HANDOFF BRIEF',rows:[
    ['TASK','Review the shared mailbox and draft routine replies.','Each weekday'],
    ['OUTPUT','Send a short digest of urgent items and draft responses.','Daily brief'],
    ['REVIEW','Route complaints or payment changes to the lead.','Approval needed']
  ],note:'Use a role or team name for the approver. Add the named contact when the workflow is agreed.'})}</div>`,'','example-brief')
 + section(intro('Keep the brief about the workflow.','Describe the systems and categories of information the work uses. Share sensitive material later through the appropriate approved channel.')+list([
   'Use an invented example or remove personal information from an existing example.',
   'Leave passwords, private links and customer records out of the brief.',
   'Describe the permission needed for the task, such as viewing a queue or editing drafts.'
 ])+link('trust.html','Read about access and data handling'),'warm','brief-information')
 + section(intro('Review the task with your team.')+steps([
   ['Review your description','Check that the task, output, timing and approval rules make sense together.'],
   ['Agree the next owner','Share the description with whoever currently owns the work and confirm who would handle decisions or exceptions.'],
   ['Choose a first example','Use a recent routine request to test the handoff before widening the scope.']
 ])+link('how-it-works.html','See the first handoff process'),'','after-download','team')
 + editorialGuide(companyGuides.contact)
 + faq(pageQuestions.contact,'planner-faq');

const privacyPolicy = hero({
 title:'Privacy Policy',
 tone:'privacy-hero',
 backdrop:'access-review',
 action:false
}) + `<article class="wrap privacy-content">
 <section>
  <h2>Information you share</h2>
  <p>The enquiry form asks for your name, company name, email address, phone number and a description of the support you need. Entries in the current form stay in your browser. When you contact us directly, we receive the information you share and any follow-up messages.</p>
 </section>
 <section>
  <h2>Website visits and cookies</h2>
  <p>The hosting service may receive technical information such as your IP address, browser type and the pages you request. It may use those details to deliver the website, troubleshoot problems and protect the service. Globe Mitra does not currently add analytics or advertising cookies to this website.</p>
 </section>
 <section>
  <h2>How we use information</h2>
  <p>We use the details you share to answer questions, understand the work you need and discuss a possible engagement. If you become a client, we use relevant information to manage and deliver the agreed services. We may also keep records to document our communications and meet applicable legal obligations.</p>
 </section>
 <section>
  <h2>Who can access information</h2>
  <p>The people who handle your enquiry or engagement may access the information they need for that work. Providers that host the site or support our business communications may process information to provide their services. We may also disclose information when the law requires it.</p>
  <p>Providers may process information in the countries where they operate. Where rules on international transfers apply, we use the safeguards those rules require.</p>
 </section>
 <section>
  <h2>How long we keep information</h2>
  <p>We keep enquiry correspondence for as long as we need it to respond and follow up. If an enquiry leads to client work, we keep the records needed to provide and document the agreed services. Contractual or legal recordkeeping requirements may affect how long we keep either type of record.</p>
 </section>
 <section>
  <h2>Information we handle for clients</h2>
  <p>During client work, we follow the agreed instructions and access permissions for the records a client makes available. If your request concerns information a client controls, contact that organisation.</p>
  <p>At handover, we agree with the client which working copies to return or remove and which records they need to keep. We also agree who checks that access to the accounts and shared files used for the work has been removed. Read about <a href="trust.html">Trust and Security</a> for more on access and handovers.</p>
 </section>
 <section>
  <h2>Your privacy rights</h2>
  <p>Depending on applicable law, you may have the right to request access to your information, ask us to correct or delete it, or object to or restrict certain uses. Where we rely on consent, you may withdraw it. You may also have the right to raise a concern with the relevant data protection authority. We may ask for enough information to confirm your identity and locate your records.</p>
 </section>
 <section id="privacy-contact">
  <h2>Privacy contact and updates</h2>
  <p>If you’ve been in touch with us, send privacy questions or requests to your usual Globe Mitra contact. When emailing, use “Privacy request” as the subject and tell us what you’d like us to do. Include the email address you used for your enquiry if you have one.</p>
  <p><strong>Privacy email</strong> [Email address to be added]</p>
  <p>We post updates to this policy on this page.</p>
 </section>
</article>`;

const recoveryPhotoSizes = '(max-width: 767px) 46vw, 23vw';
const notFound=hero({title:'We couldn’t find that page.',copy:'The page may have moved. Choose a destination below to continue.',action:false,secondary:link('/index.html','Go to homepage','button primary'),visual:`<div class="recovery-photos">${photo('operations',{eager:true,sizes:recoveryPhotoSizes})}${photo('team',{sizes:recoveryPhotoSizes})}</div>`})
 + `<div class="wrap recovery-grid">${[
   ['Home','Start with an overview of the work we help teams hand off. Browse service areas, open a sample output in the workflow lab, or find the industry directory.','index.html','web'],
   ['Services','Compare executive, customer, CRM, content and website support. Each playbook describes the work, gives a sample deliverable and explains which decisions stay with your team.','services.html','content'],
   ['Industries','Find examples for finance, real estate, e-commerce, marketing, technology and professional services. Each sector page shows a different queue, its tools and the person who can approve exceptions.','industries.html','pipeline'],
   [aboutLabel,'Read what the company does, meet founder Anuj Gupta and see the delivery roles that help carry work from request to review.','about.html','people'],
   ['How it works','Walk through discovery, setup and the first review. Use the sample sequence to understand what your team should provide and what a finished handoff can look like.','how-it-works.html','calendar'],
   ['Contact','Tell us which recurring task you want help with, the result you want and who should approve exceptions.',enquiryPageUrl,'mail']
 ].map(([title,copy,url,symbol])=>`<section class="simple-card">${cardHeading(title,symbol,'h2')}<p>${copy}</p>${link(url,url==='about.html'?aboutLabel:`Go to ${title.toLowerCase()}`)}</section>`).join('')}</div>`;
const pages=[
 ['index.html','Virtual Assistance and Managed Business Support','Explore virtual assistance for admin, customer support, CRM, content and WordPress.',homepage],
 ['services.html','Virtual Assistant Services','Explore virtual assistant and specialist support for recurring business work.',servicesPage],
 ...services.map(s=>[serviceURL(s),s.title,s.summary,servicePage(s)]),
 ['industries.html','Virtual Assistant Support by Industry','Explore industry playbooks with sample workflows, responsibilities and approval boundaries.',industryDirectory],
 ...industries.map(industry=>[industryURL(industry),industry.headline,industry.summary,industryPage(industry)]),
 ['how-it-works.html','How It Works','From discovery and onboarding through review and continuity.',how],
 ['pricing.html','Pricing and Plans','Understand what shapes the scope and price of virtual assistant support.',pricing],
 ['about.html','About','Learn what the company does, meet founder Anuj Gupta and see how delivery roles fit together.',about],
 ['trust.html','Trust and Security','Plan account access, approvals, data handling and continuity.',trust],
 ['contact.html','Contact','Tell us about the work you need virtual assistant support with.',contact],
 [privacyPolicyUrl,'Privacy Policy','Learn how Globe Mitra handles information about website visits, enquiries and client work.',privacyPolicy],
 ['404.html','Page Unavailable','This page could not be found.',notFound]
];
for(const [file,fallbackTitle,fallbackDescription,originalBody] of pages){
 const settings = pageSEO[file] || specialistPageSEO[file];
 const title = (settings?.title || fallbackTitle) + ' | ' + siteName;
 const desc = settings?.description || fallbackDescription;
 const body = settings ? applyPageSEO(originalBody, settings) : originalBody;
 const page=`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="${siteName}: ${desc}"><meta property="og:site_name" content="${siteName}"><meta name="robots" content="${file === '404.html' ? 'noindex, nofollow' : 'index, follow'}"><link rel="canonical" href="https://assistlaneglobal.com/${file === 'index.html' ? '' : file}"><meta name="theme-color" content="#08162f">
<title>${title}</title>
<link rel="icon" href="${mark}" type="image/svg+xml"><link rel="stylesheet" href="site.css?v=${styleVersion}"><script src="site.js?v=${scriptVersion}" defer></script></head>
<body id="top">${header(file)}<main id="main" tabindex="-1">${body}${invitation(file)}</main>${footer(file)}</body></html>`;
 await writeFile(new URL(file,dir),file==='404.html'?page
  .replace(/(href|src)="(?![#/])([^"]+)"/g,'$1="/$2"')
  .replace(/srcset="([^"]+)"/g,(_, candidates)=>'srcset="'+candidates.split(', ').map(candidate=>'/'+candidate).join(', ')+'"'):page);
}
await writeFile(new URL('mark.svg',dir),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><title>${siteName}</title><image width="144" height="144" href="data:image/png;base64,${logo.toString('base64')}"/></svg>`);
const publicPages = pages.filter(([file]) => file !== '404.html');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicPages.map(([file]) => `  <url><loc>https://assistlaneglobal.com/${file === 'index.html' ? '' : file}</loc></url>`).join('\\n')}
</urlset>
`;
await writeFile(new URL('sitemap.xml',dir),sitemap);
await writeFile(new URL('robots.txt',dir),'User-agent: *\\nAllow: /\\nDisallow: /404.html\\nSitemap: https://assistlaneglobal.com/sitemap.xml\\n');

