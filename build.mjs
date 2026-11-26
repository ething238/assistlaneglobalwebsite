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
import { countPageWords, seoOverrides } from './page-limits.mjs';
import { web3formsAccessKey } from './form-config.mjs';
import { prepareEditorialPage, countEditorialWords, editorialWordTokens } from './editorial-pages.mjs';
import { keywordMetrics } from './editorial-keywords.mjs';
import { cleanPageReferences, publicPagePath, siteOrigin } from './routes.mjs';

const allServices = [...coreServices, ...specialistServices, ...developmentServices];
const services = [...allServices.filter(service=>service.id==='accounting-bookkeeping'), ...allServices.filter(service=>service.id!=='accounting-bookkeeping')];
const industries = [...coreIndustries, ...specialistIndustries];

const dir = new URL('./dist/',import.meta.url);
await mkdir(dir,{recursive:true});
const styleVersion = createHash('sha256').update(await readFile(new URL('site.css',dir))).digest('hex').slice(0,8);
const scriptVersion = createHash('sha256').update(await readFile(new URL('site.js',dir))).update(await readFile(new URL('form-delivery.js',dir))).digest('hex').slice(0,8);
const siteName = 'AssistLane Global';
const contactEmail = 'support@assistlaneglobal.com';
const contactPhone = '+91 7011956780';
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
const link = (url,label,cls='text-link')=>`<a class="${cls}" href="${url}">${label}</a>`;
const enquiryPageUrl = 'contact.html#contact-form';
const enquiryLabel = 'Get in touch';
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
const contactLinks = (className='')=>`<address class="contact-details ${className}" aria-label="${siteName} contact details">
 <a href="mailto:${contactEmail}"><span>Email</span><strong>${contactEmail}</strong></a>
 <a href="tel:${contactPhone.replace(/\s/g,'')}"><span>Phone</span><strong>${contactPhone}</strong></a>
</address>`;

function enquiryForm(serviceId=''){
 const selected = ({'administrative-support':'Virtual assistant','accounting-bookkeeping':'Bookkeeping','customer-support':'Customer support','crm-lead-operations':'CRM and sales','marketing-content':'Marketing and content','seo-wordpress':'Marketing and content'})[serviceId] || (serviceId ? 'Other support' : 'Virtual assistant');
 return `<form class="enquiry" id="enquiry" data-enquiry-form action="https://api.web3forms.com/submit" method="post" aria-labelledby="enquiry-title" tabindex="-1">
 <h2 id="enquiry-title">Discuss your requirement</h2>
 <input type="hidden" name="access_key" value="${web3formsAccessKey}">
 <input type="hidden" name="from_name" value="AssistLane Global website">
 <input type="hidden" name="subject" value="AssistLane Global website enquiry">
 <fieldset class="enquiry-fields"><legend class="visually-hidden">Contact details and requirements</legend>
 <div class="field"><label for="enquiry-name">Full name *</label><input id="enquiry-name" name="name" type="text" autocomplete="name" placeholder="Your name" maxlength="100" pattern=".*\\S.*" required></div>
 <div class="field"><label for="enquiry-email">Work email *</label><input id="enquiry-email" name="email" type="email" autocomplete="email" placeholder="you@company.com" maxlength="254" required></div>
 <div class="field"><label for="enquiry-phone">Phone number (optional)</label><input id="enquiry-phone" name="phone" type="tel" autocomplete="tel" placeholder="Country code + number" maxlength="30" pattern="\\+?[0-9\\s\\-\\(\\).]{7,25}"></div>
 <div class="field"><label for="enquiry-service">Support needed</label><select id="enquiry-service" name="service">${['Bookkeeping','Virtual assistant','Customer support','CRM and sales','Marketing and content','Other support'].map(label=>`<option${selected===label?' selected':''}>${label}</option>`).join('')}</select></div>
 <div class="field field-wide"><label for="enquiry-description">What do you need? *</label><textarea id="enquiry-description" name="description" rows="2" maxlength="2000" placeholder="Your tasks, current tools and preferred start date" required></textarea></div>
 <details class="enquiry-optional field-wide"><summary>Add optional details <span aria-hidden="true">+</span></summary><div class="enquiry-optional-fields">
 <div class="field field-wide"><label for="enquiry-company">Company (optional)</label><input id="enquiry-company" name="company" type="text" autocomplete="organization" maxlength="150"></div>
 <div class="field"><label for="enquiry-start">Preferred start date</label><input id="enquiry-start" name="startDate" type="date"></div>
 <div class="field"><label for="enquiry-timezone">Time zone</label><input id="enquiry-timezone" name="timeZone" type="text" placeholder="e.g. IST or GMT" maxlength="100"></div>
 </div></details>
 <div class="form-honeypot" aria-hidden="true"><label for="enquiry-botcheck">Leave empty</label><input id="enquiry-botcheck" name="botcheck" type="text" tabindex="-1" autocomplete="off"></div>
 <label class="enquiry-consent field-wide"><input name="consent" type="checkbox" value="agreed" required><span>I agree to be contacted about my enquiry and have read the <a href="${privacyPolicyUrl}">Privacy Policy</a>.</span></label>
 <button class="button primary field-wide" type="submit"${web3formsAccessKey ? '' : ' disabled'}>Send enquiry</button>
 </fieldset>
 <p class="enquiry-status" role="status" aria-live="polite"></p>
 </form>`;
}

const cards=(items,cls='')=>`<div class="card-grid ${cls}">${items.map(([h,p,symbol])=>`<article class="simple-card">${cardHeading(h,symbol)}<p>${p}</p></article>`).join('')}</div>`;
const steps=(items,level='h3')=>`<ol class="steps">${items.map(([h,p],i)=>`<li><span class="step-number">${String(i+1).padStart(2,'0')}</span>${cardHeading(h,cardIcon(h),level)}<p>${p}</p></li>`).join('')}</ol>`;
const faq=(items,id='')=>{
 if (items.length<6) throw new Error('FAQ sections need at least six questions.');
 return section(`<div class="faq-content">${intro('Frequently Asked Questions')}<div class="faq-list">${items.map(([q,a])=>`<details><summary>${q}<span aria-hidden="true"></span></summary><p>${a}</p></details>`).join('')}</div></div>`,'faq-section',id);
};
const invitation=(page)=>{
 const url = companyHeroForms.has(page) ? enquiryAnchor : page==='contact.html' ? '#contact-form' : enquiryPageUrl;
 return `<section class="footer-cta" id="footer-cta" aria-labelledby="footer-cta-title">
 <div class="wrap footer-cta-content">
  <h2 id="footer-cta-title">Let’s make your day easier.</h2>
  <p class="footer-cta-copy">Tell us what you need help with. We’ll discuss a simple starting point.</p>
  ${link(url,enquiryLabel,'button footer-cta-button')}
 </div>
</section>`;
};
const list = (items, cls='')=>`<ul class="check-list ${cls}">${items.map(item=>`<li>${icon('check')}<span>${item}</span></li>`).join('')}</ul>`;
const matrix = (columns,rows)=>`<table class="scope-table"><thead><tr>${columns.map(c=>`<th scope="col">${c}</th>`).join('')}</tr></thead><tbody>${rows.map(([title,...data])=>`<tr><th scope="row">${title}</th>${data.map((value,i)=>`<td><span class="cell-label" aria-hidden="true">${columns[i+1]}</span>${value}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
const photoDescriptions = {
 commerce: 'An open parcel is checked beside a tablet and packing materials.',
 records: 'Paper records are sorted into folders beside a calculator and notebook.',
 'client-support': 'A person wearing a headset handles a call at a laptop.',
 'editorial-review': 'Printed design drafts are compared with the layouts on a laptop screen.',
 'data-review': 'A printed data table is compared with charts on a laptop screen.',
 'hiring-review': 'Two people compare a document folder with notes during a review meeting.',
 'property-operations': 'A floor plan is reviewed beside a tablet and property keys.',
 'practice-intake': 'A person takes a phone call and records details at a medical reception desk.',
 'field-operations': 'A site plan is checked beside a tablet, hard hat and safety vest.',
 'matter-review': 'Document folders are sorted while their records are checked on a laptop.',
 'member-coordination': 'Two people prepare a registration table with lanyards, notes and a laptop.'
};
// Use a photo only where its visible subject explains the scope on that page.
// The deliverable itself provides the visual in each sample section.
const servicePhotos = {
 'customer-support': 'client-support',
 'marketing-content': 'editorial-review',
 'accounting-bookkeeping': 'records',
 'research-data-support': 'data-review',
 'recruiting-people-operations': 'hiring-review',
 'ecommerce-operations': 'commerce'
};
const industryPhotos = {
 finance: 'records',
 'real-estate': 'property-operations',
 ecommerce: 'commerce',
 'agencies-publications': 'editorial-review',
 healthcare: 'practice-intake',
 legal: 'matter-review',
 'construction-field-services': 'field-operations',
 'nonprofits-membership': 'member-coordination'
};
const photoSizes = '(max-width: 767px) calc(100vw - 32px), (max-width: 1424px) 48vw, 680px';
const photo = (name, { eager = false, sizes = photoSizes } = {}) => {
 const alt = photoDescriptions[name];
 if (!alt) throw new Error(`Missing description for photo: ${name}`);
 return `<figure class="editorial-image">
  <img src="${name}.webp" alt="${alt}" srcset="${name}-720.webp 720w, ${name}.webp 1280w" sizes="${sizes}" width="1280" height="${name === 'systems' ? 720 : 853}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}>
 </figure>`;
};
const photoIntro = (content, name) => name ? `<div class="split align-center photo-intro"><div>${content}</div>${photo(name)}</div>` : content;
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
 const menuLabel = label => label.replaceAll(' and ', ' &amp; ');
 const enquiryUrl = companyHeroForms.has(page) ? enquiryAnchor : enquiryPageUrl;
 return `<a class="skip" href="#main">Skip to content</a><header class="site-header"><div class="wrap header-row">
  <a class="brand" href="index.html" aria-label="${siteName} home">${brand}</a>
  <button class="mobile-menu" type="button" aria-expanded="false" aria-controls="navigation">Menu <span aria-hidden="true">☰</span></button>
  <nav id="navigation" class="navigation" aria-label="Main navigation">
   ${nav('index.html','Home',page)}${nav('about.html','About Us',page)}
   <details class="nav-dropdown services-menu" name="primary-navigation">
    <summary aria-controls="services-dropdown">Services ${chevron}</summary>
    <div class="menu-panel" id="services-dropdown">
     <div class="menu-grid">${services.map(service=>`<a href="${serviceURL(service)}"${page===serviceURL(service)?' aria-current="page"':''}>${icon(service.icon)}<span>${menuLabel(service.label)}</span></a>`).join('')}</div>
    </div>
   </details>
   <details class="nav-dropdown industries-menu" name="primary-navigation">
    <summary aria-controls="industries-dropdown">Industries ${chevron}</summary>
    <div class="menu-panel" id="industries-dropdown">
     <div class="menu-grid">${industries.map(industry=>`<a href="${industryURL(industry)}"${page===industryURL(industry)?' aria-current="page"':''}>${icon(industry.icon)}<span>${menuLabel(industry.name)}</span></a>`).join('')}</div>
    </div>
   </details>
   ${nav('how-it-works.html','Our Process',page)}${nav('trust.html','Trust and Security',page)}
   <a class="mobile-contact" href="${enquiryUrl}">${enquiryLabel}</a>
  </nav><div class="header-cta">${call(enquiryUrl)}</div></div></header>`;
}
const footer=(page)=>`<footer class="site-footer" id="site-footer"><div class="wrap"><div class="footer-grid">
 <div class="footer-brand">
  <a class="brand" href="index.html" aria-label="${siteName} home">${brand}</a>
  <p>Virtual assistant support for the everyday work around your business.</p>
  ${contactLinks('footer-contact')}
 </div>
 <nav class="footer-column" aria-label="Services">
  <p class="footer-title">Services</p>
  <div class="footer-links">${nav('services.html','All services',page)}${services.map(service=>nav(serviceURL(service),service.label,page)).join('')}</div>
 </nav>
 <nav class="footer-column" aria-label="Industries">
  <p class="footer-title">Industries</p>
  <div class="footer-links">${nav('industries.html','All industries',page)}${industries.map(industry=>nav(industryURL(industry),industry.name,page)).join('')}</div>
 </nav>
 <nav class="footer-column footer-company" aria-label="Company">
  <p class="footer-title">Company</p>
  <div class="footer-links">${nav('index.html','Home',page)}${nav('about.html','About us',page)}${nav('how-it-works.html','Our Process',page)}${nav('trust.html','Trust and Security',page)}${nav(privacyPolicyUrl,'Privacy Policy',page)}</div>
 </nav>
 </div><div class="footer-utility">
  ${link(enquiryPageUrl,enquiryLabel,'footer-action')}
  <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
 </div></div></footer>`;

function hero({title,copy,visual='',tone='warm',secondary='',home=false,action=true,showEnquiryForm=false,backdrop='',details='',enquiryService=''}){
 const background = backdrop ? photoBackdrop(backdrop, true) : '';
 const panel = showEnquiryForm ? enquiryForm(enquiryService) : visual;
 const enquiryAction = action && !showEnquiryForm ? call() : '';
 const actions = enquiryAction + secondary;
 const paragraphs = Array.isArray(copy) ? copy : [copy];
 const description = paragraphs.filter(Boolean).map(paragraph=>`<p class="lead">${paragraph}</p>`).join('');
 return `<section class="hero ${tone}${home ? ' home-hero' : ''}${backdrop ? ' photo-background' : ''}">${background}<div class="wrap ${panel?'split hero-grid':'compact-hero'}">
   <div class="hero-copy"><h1>${title}</h1>${description}${details}
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

const homeServices = [
 ['administrative-support','Admin and scheduling','Inbox management, calendars, meeting notes and everyday follow-ups.'],
 ['customer-support','Customer support','Help with enquiries, routine responses and open customer requests.'],
 ['crm-lead-operations','Sales and CRM','Keep contact records current and sales follow-ups on track.'],
 ['marketing-content','Marketing and content','Coordinate approved content, publishing and campaign tasks.'],
 ['research-data-support','Research and data','Organise information, update records and prepare useful summaries.'],
 ['website-development','Website support','Get help with agreed website updates and technical tasks.']
];
const homepage=hero({
 title:'<em>Virtual assistants</em> for your growing business.',
 copy:'Get help with your inbox, calendar, customers and everyday tasks. Tell us what takes up your time, and we’ll agree a practical way to help.',
 showEnquiryForm:true,
 secondary:link('services.html','Explore services'),
 home:true
})
 + section(intro('What can we help with?','Choose the support you need. Start with one task or a regular workload.')+`<div class="home-services-grid">${homeServices.map(([id,title,copy])=>`<a class="home-service" href="${id}.html"><h3>${title}</h3><p>${copy}</p></a>`).join('')}</div>`+link('services.html','View all services'),'','home-services')
 + section(photoIntro(intro('Bookkeeping, kept organised.','Keep invoices, expenses and financial records ready for review.')+list([
   'Transaction records and receipts',
   'Supplier invoices and customer billing',
   'Bank reconciliations and month-end preparation'
 ])+'<p class="bookkeeping-note">We prepare the records and flag missing information. Financial approvals stay with your team.</p>'+link('accounting-bookkeeping.html','Explore bookkeeping'),'records'),'sky','bookkeeping')
 + section(intro('Getting started is simple.')+cards([
   ['Tell us what you need','Share the task, your current tools and when you need support.'],
   ['Agree the details','We confirm the scope, schedule, access and person who will review the work.'],
   ['Stay up to date','Receive the agreed updates, review results and adjust the workload as needed.']
 ])+link('how-it-works.html','How it works'),'','first-workflow')
 + section(intro('Support for your industry','Explore virtual assistant support for finance, real estate, online stores, marketing teams, technology businesses and professional services. See how tasks, tools and responsibilities fit your working day.')+link('industries.html','Explore all industries'),'','industry-overview')
 + section(`<div class="founder-layout founder-preview"><div>${intro('Meet our founder','AssistLane Global supports founders and growing teams with clear responsibilities, agreed instructions and regular updates. Founder Anuj Gupta brings more than 25 years of experience building teams and products.')}<div class="section-links">${link('about.html','About AssistLane Global')}${link('trust.html','How we handle access')}</div></div>${founderProfile}</div>`,'','meet-the-founder')
 + faq([
   ['What can I delegate?','Start with admin, customer enquiries, CRM updates, research or content coordination. The Services page has the full range.'],
   ['Can I start with one task?','Yes. Agree one recurring task, the expected result and how you will review it.'],
   ['Can you use my existing tools?','We plan the work around your approved tools and the access you authorise.'],
   ['How will I get updates?','Agree an update schedule and a shared place for completed work, questions and next actions.'],
   ['What access will you need?','Only the access agreed for the task. Decisions outside your instructions come back to your authorised reviewer.'],
   ['How do I get started?','Email or call us with the task you want help with. We’ll discuss the scope and next steps.']
 ]);

const servicesPage=hero({
 title:'Virtual assistant services',
 copy:[
  'Choose support for the everyday work around your business, including administration, customer enquiries, sales, content and organised financial records.',
  'Before you hire a virtual assistant, decide what you want to review. Compare our virtual assistant services by the result they deliver, from a prioritised inbox to an updated sales pipeline or a reconciliation report.'
 ],
 showEnquiryForm:true
})
 + section(intro('Virtual assistant and specialist services')+serviceCards(),'','service-map')
 + section(intro('Start with your operating context.','See how the same service adapts to work such as property viewings, order exceptions, client approvals and product demos.')+link('industries.html','Browse industries'),'warm')
 + section(intro('What to hand off when you hire a virtual assistant')+`<div class="card-grid two">${[['Organise my day','administrative-support'],['Respond to customers','customer-support'],['Manage leads and follow-ups','crm-lead-operations'],['Publish on LinkedIn and social media','marketing-content'],['Keep the books current','accounting-bookkeeping'],['Run the store queue','ecommerce-operations']].map(([title,id])=>{const service=services.find(s=>s.id===id);return `<div class="simple-card">${cardHeading(title,service.icon)}${link(serviceURL(service),service.title)}</div>`;}).join('')}</div>`,'mint')
 + section(intro('Combine virtual assistant services around one result','When a task moves between tools or teams, define where each handoff happens and who owns the final output.')+cards([
   ['From enquiry to follow-up','Customer support records the enquiry, then CRM support checks the contact and assigns the next action.'],
   ['From brief to live page','Content support collects assets and approval, then WordPress support checks the preview and records the live URL.'],
   ['From meeting to action list','Executive support prepares the agenda and records decisions. The delivery owner tracks outstanding actions in the agreed workspace.']
 ]),'sky','combined-services','planning')
 + section(intro('The task and the working arrangement','Write down what needs doing, what a finished result looks like and who should review it. Then decide what can be handled independently.')+link('how-it-works.html','See the delivery process'))
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
 const scopePhoto = servicePhotos[s.id];
 return hero({
  title:p.title || s.title,copy:s.id==='accounting-bookkeeping' ? ['Keep invoices, expenses, bank reconciliations and month-end records ready for your finance reviewer.', ...p.copy.slice(1)] : p.copy,tone:'service-hero',
  secondary:link('#scope','Explore the scope','button primary'),
  showEnquiryForm:true,enquiryService:s.id
 })
 + section(photoIntro(intro(scope.title,scope.intro),scopePhoto)+matrix(['Workstream',scope.workColumn,'What you get','Your approval'],p.matrix),'','scope')
 + catalogueSections(s.details || serviceDetails[s.id])
 + section(intro('Where this helps day to day.')+cards(p.scenarios),'warm','scenarios')
 + section(intro('What the finished handoff looks like.','This example uses fictional records.')+`<div class="deliverable-example">${sample(s.sample)}</div>`,'dark-section','sample')
 + section(intro('From request to review.')+`<div class="split workflow-layout">${steps(s.steps)}${workflowIllustration(s.steps.map(([title])=>title),icons)}</div>`,'','handoff')
 + section(intro(p.checksTitle || 'What to verify before closing a task.')+`<div class="split">${list(p.checks)}<div class="scope-panel">${cardHeading(p.toolsTitle || 'Work in the tools you already use.','web')}<div class="system-tags">${p.systems.map(tool=>`<span>${tool}</span>`).join('')}</div><p>${s.tools}</p><p><strong>Approval boundary.</strong> ${s.boundary}</p>${link('trust.html','Read about trust and access')}</div></div>`,'mint','quality')
 + (guide ? detailedWorkflow(guide,icons,s.playbook ? catalogueIntro : intro) : '')
 + faq(p.extraFAQ ? [...s.faq,p.extraFAQ] : s.faq,'service-faq')
 + section(intro('Explore connected services')+`<div class="card-grid">${others.map(o=>`<div class="simple-card">${cardHeading(o.title,o.icon)}${link(serviceURL(o),'View '+serviceLabel(o))}</div>`).join('')}</div>`,'warm');
}

const industryDirectory = hero({
 title:'Virtual assistant support by industry',
 copy:[
  'Compare virtual assistant services by industry and see how the work changes from one sector to the next.',
  'Match the support to your working day, from store enquiries and client appointments to research, publishing and record updates. Agree the tools, responsibilities and decisions that matter to your team.'
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
 + section(intro('Approval boundaries for specialized virtual assistant services')+cards([
   ['Finance','The assistant prepares an exception record. An authorised finance reviewer decides what gets approved or paid.'],
   ['E-commerce','Routine order updates follow an approved policy. Refunds and replacements outside that policy go to the store owner.'],
   ['Marketing','The assistant prepares assets and previews. The brand or editorial owner signs off on the final version.']
 ])+link('trust.html','Read about access and approvals'),'sky','industry-approvals')
 + section(intro('Plan coverage for industry specific virtual assistants','Start with a real example and name the tools, the decision owner and how often the work comes in. Use the service playbooks to combine functions when one workflow spans several teams.')+
  cards([
    ['Select the work','Pick a recurring queue, a regular deadline or a handoff that keeps falling between teams.'],
    ['Set the guardrails','Agree account access, approvals and the decisions that require specialist expertise.'],
    ['Review the capacity','Estimate typical and peak volumes, time zone overlap and who reviews completed work.']
  ])+`<div class="actions">${link('services.html','Compare services')}${link(enquiryPageUrl,'Discuss the support you need')}</div>`)
 + editorialGuide(siteGuides.industries)
 + faq(pageQuestions.industries,'industry-faq');

function industryPage(industry) {
 const industryServices = ['finance','ecommerce','professional-services','startups-small-business'].includes(industry.id) ? ['accounting-bookkeeping', ...industry.services.filter(id=>id!=='accounting-bookkeeping')] : industry.services;
 const related = industryServices.map(id=>services.find(service=>service.id===id));
 const guide = industryGuides[industry.id] || specialistGuides[industry.id];
 const scopePhoto = industryPhotos[industry.id];
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
 + section(intro('How the handoff works.')+`<div class="split workflow-layout">${steps(industry.flow)}${workflowIllustration(industry.flow.map(([title])=>title),[industry.icon,'content','check'])}</div>`,'warm','sector-flow')
 + section(intro('What the finished handoff looks like.','This example uses fictional records.')+`<div class="deliverable-example">${sample(industry.sample)}</div>`,'dark-section','sector-sample')
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

const how = hero({title:'How it works',copy:'Start with a clear scope, test a small handoff and decide how everyday work gets assigned, reviewed and improved.',visual:`<div class="hero-panel mint">${steps([['Discover','Choose the first workflow.'],['Onboard','Agree instructions and access.'],['Review','Check the result together.']],'strong')}</div>`})
 + section(intro('What happens at each stage')+`<ol class="timeline">${process.map(([h,p],i)=>`<li><span class="step-number">0${i+1}</span><div>${cardHeading(h)}<p>${p}</p></div></li>`).join('')}</ol>`)
 + section(intro('Start with a daily brief.','Share a few examples and review a draft before approving replies or calendar changes.')+`<div class="deliverable-example">${sample(services.find(service=>service.id==='administrative-support').sample)}</div>`,'dark-section')
 + section(intro('Make each decision easy to route.')+cards([['You provide','Priorities, authorised access, source information and a named person for approvals.'],['Delivery owner','Written task instructions, an agreed work log, questions and exceptions that need a decision.'],['Review together','Check completed work, update the instructions and decide how to handle changes or absences.']])+link('trust.html#access','Plan access and approvals'),'','decision-owners','planning')
 + section(intro('Know what to review and when.')+matrix(['Cadence','Work in scope','What you review'],sampleSchedules),'warm')
 + section(intro('Decide whether to expand the scope.')+list(['Compare the result with the example you provided. Note any changes needed to tone, format or accuracy.','Check whether routine work could proceed and whether exceptions reached the right person.','Update the instructions, coverage and permissions before adding another queue or system.']))
 + editorialGuide(companyGuides.how)
 + faq(pageQuestions.how,'how-faq');

const about = hero({
 title:aboutLabel,
 copy:[
  `${siteName} provides virtual assistant support for founders and growing teams. We keep financial records organised and help with executive admin, customer enquiries, sales follow-ups and social publishing.`,
  'Founder Anuj Gupta brings more than 25 years of experience building teams and launching products. He applies that experience to how we scope work, assign responsibilities and check the result.',
  'Your virtual assistant team starts with a real example from your day. We agree where the work happens, what a finished result looks like and how to flag decisions before taking on a regular workload.'
 ],
 secondary:link('#founder','Meet the founder','button primary'),
 backdrop:'data-review',
 showEnquiryForm:true
})
 + section(intro('We help teams hand off recurring work.','An overflowing inbox, a growing queue or a publication backlog can pull people away from work that needs their judgment. We help define a handoff with a clear owner, a useful output and an agreed review step.')+link('services.html','Explore our services'),'','what-we-do')
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
 + section(intro('The access model')+steps([['Request','List the system, data, role and reason for access.'],['Authorise','Have the account owner approve the minimum permissions the task needs.'],['Review and remove','Recheck access when the scope changes and confirm removal at handover.']]),'mint','access')
 + section(intro('Decisions to document')+cards([['Collection and storage','Confirm the files and fields the work requires, where records are kept and which systems are approved.'],['Sharing and retention','Set who can view or export records, how long working copies are needed and how they are returned or removed.'],['Quality and escalation','Agree how sensitive work is reviewed and who to contact if data is mishandled or a task needs a decision.']]),'','access-decisions','team')
 + section(intro('Match permissions to the actual task.')+matrix(['Workflow','Starting permission','Separate approval'],[
   ['Executive inbox','Read and draft in the agreed mailbox.','Sending as the executive or changing mailbox rules.'],
   ['Customer queue','Access assigned tickets and documented policy.','Refunds, exports and account changes.'],
   ['CRM cleanup','Read the agreed fields and review a test batch.','Bulk updates, merges and deletions.'],
   ['WordPress update','Create and preview drafts with an editor role.','Publishing, changing redirects or installing plugins.']
 ]),'warm')
 + section(intro('Approve tools before sharing information.','Confirm which external tools are permitted, what information can be entered and how outputs will be checked. Discuss AI tools separately where relevant.'),'sky')
 + section(intro('Keep the next owner visible.')+cards([['Continuity','Write down where open work, instructions and approvals live so a replacement can pick them up. See <a href="how-it-works.html#coverage-changes">how a change in coverage is handled</a>.'],['Raising a concern','Agree an escalation contact and what to include: the system involved, what happened and when it was first noticed.']],'two'))
 + editorialGuide(companyGuides.trust)
 + faq(pageQuestions.trust,'trust-faq');

const contact = hero({title:'Describe the work you need help with',copy:'Tell us about the task, your current tools and the result you want. You can start with one recurring responsibility or ask about regular virtual assistant support.',details:contactLinks(),secondary:link('#contact-form',enquiryLabel),action:false})
 + section(`<div class="split contact-layout"><div>${intro('Bring one practical example.','Describe the work, the result you want and anything that needs approval. A short description is enough to start.')}${steps([['Workload','What comes up repeatedly, and how often?'],['Tools','Where do requests arrive and where is work recorded?'],['Coverage','Which time zone, days or handoffs matter?']])}</div>
 ${enquiryForm()}</div>`,'','contact-form')
 + section(intro('Pick one task you can review.')+cards([
   ['Start with a repeatable request','A daily inbox check, weekly CRM cleanup or regular page update gives you a concrete place to begin.'],
   ['Describe the finished result','Use a familiar format such as a daily digest, an updated record or a checklist with blocked items.'],
   ['Note the exception','Include a case that needs a different decision, such as a refund outside policy or a change that requires publishing approval.']
 ])+link('services.html','Browse service examples'),'mint','choose-a-task')
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
  <p>The enquiry form asks for your name, email, phone number, support needs and consent to be contacted. You may also share your company, preferred start date and time zone. We use Web3Forms to forward enquiries to our business support inbox. When you contact us directly, we receive the information and follow-up messages you share.</p>
 </section>
 <section>
  <h2>Website visits and cookies</h2>
  <p>The hosting service may receive technical information such as your IP address, browser type and the pages you request. It may use those details to deliver the website, troubleshoot problems and protect the service. ${siteName} does not currently add analytics or advertising cookies to this website.</p>
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
  <p>Send privacy questions or requests to ${siteName} using the email below. When emailing, use “Privacy request” as the subject and tell us what you’d like us to do. Include the email address you used for your enquiry if you have one.</p>
  <p><strong>Privacy email</strong> <a href="mailto:${contactEmail}">${contactEmail}</a></p>
  <p>We post updates to this policy on this page.</p>
 </section>
</article>`;

const notFound=hero({title:'We couldn’t find that page.',copy:'The page may have moved. Choose a destination below to continue.',action:false,secondary:link('/index.html','Go to homepage','button primary')})
 + `<div class="wrap recovery-grid">${[
   ['Home','Start with an overview of the work we help teams hand off. Browse service areas, read the practical guidance, or find the industry directory.','index.html','web'],
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
 ['about.html','About','Learn what the company does, meet founder Anuj Gupta and see how delivery roles fit together.',about],
 ['trust.html','Trust and Security','Plan account access, approvals, data handling and continuity.',trust],
 ['contact.html','Contact','Tell us about the work you need virtual assistant support with.',contact],
 [privacyPolicyUrl,'Privacy Policy',`Learn how ${siteName} handles information about website visits, enquiries and client work.`,privacyPolicy],
 ['404.html','Page Unavailable','This page could not be found.',notFound]
];
const generatedPages = [];
for(const [file,fallbackTitle,fallbackDescription,originalBody] of pages){
 const baseSettings = pageSEO[file] || specialistPageSEO[file];
 const settings = baseSettings ? {...baseSettings, ...seoOverrides[file]} : seoOverrides[file];
 const title = (settings?.title || fallbackTitle) + ' | ' + siteName;
 const desc = settings?.description || fallbackDescription;
 const body = prepareEditorialPage(originalBody,file);
 const page=`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="${siteName}: ${desc}"><meta property="og:site_name" content="${siteName}"><meta property="og:title" content="${title}"><meta property="og:description" content="${siteName}: ${desc}"><meta property="og:type" content="website"><meta property="og:url" content="${siteOrigin}${publicPagePath(file)}"><meta name="twitter:card" content="summary"><meta name="robots" content="${file === '404.html' ? 'noindex, nofollow' : 'index, follow'}"><link rel="canonical" href="${siteOrigin}${publicPagePath(file)}"><meta name="theme-color" content="#08162f">
<title>${title}</title>
<link rel="icon" href="${mark}" type="image/svg+xml"><link rel="stylesheet" href="site.css?v=${styleVersion}"><script type="module" src="site.js?v=${scriptVersion}"></script></head>
<body id="top">${header(file)}<main id="main" class="${file==='index.html'?'home-page':'content-page'}" tabindex="-1">${body}${invitation(file)}</main>${footer(file)}</body></html>`;
 const output = cleanPageReferences(page);
 generatedPages.push({file,html:output,words:countPageWords(output),editorialWords:countEditorialWords(body),keyword:keywordMetrics(editorialWordTokens(body),file)});
}
const shortPages = generatedPages.filter(page=>page.editorialWords<1500);
if (shortPages.length) throw new Error('Pages need at least 1,500 editorial words: '+shortPages.map(page=>`${page.file} (${page.editorialWords})`).join(', '));
const oversizedPages = generatedPages.filter(page=>page.words>2000);
if (oversizedPages.length) throw new Error('Pages exceed the 2,000-word limit: '+oversizedPages.map(page=>`${page.file} (${page.words})`).join(', '));
const densityFailures=generatedPages.filter(page=>page.keyword.keyword && Math.abs(page.keyword.wordCoveragePercent-2)>0.000001);
if(densityFailures.length) throw new Error('Primary keyword coverage must be 2%: '+densityFailures.map(page=>`${page.file} (${page.keyword.wordCoveragePercent.toFixed(4)}%)`).join(', '));
for (const page of generatedPages) await writeFile(new URL(page.file,dir),page.html);
// Redirect externally requested repository-folder aliases without relying on
// filesystem paths that differ between the two supported deployment layouts.
const aliasNames = generatedPages.filter(page=>!['index.html','contact.html'].includes(page.file)).map(page=>page.file.slice(0,-5)).join('|');
const distAliasRules = [
 '# BEGIN generated legacy dist aliases',
 String.raw`RewriteCond %{THE_REQUEST} \s+(?:https?://[^/\s]+)?/+(?:dist/)+index\.html(?:[?\s]) [NC]`,
 `RewriteRule ^ ${siteOrigin}/ [R=301,L]`,
 String.raw`RewriteCond %{THE_REQUEST} \s+(?:https?://[^/\s]+)?/+(?:dist/)+(contact)\.html(?:[?\s]) [NC]`,
 `RewriteRule ^ ${siteOrigin}${publicPagePath('contact.html')} [R=301,L]`,
 String.raw`RewriteCond %{THE_REQUEST} \s+(?:https?://[^/\s]+)?/+(?:dist/)+(${aliasNames})\.html(?:[?\s]) [NC]`,
 `RewriteRule ^ ${siteOrigin}/%1 [R=301,L]`,
 '# END generated legacy dist aliases'
].join('\n');
for (const config of [new URL('.htaccess',import.meta.url),new URL('.htaccess',dir)]) {
 let source = await readFile(config,'utf8');
 if (source.includes('# BEGIN generated legacy dist aliases')) {
  source = source.replace(/# BEGIN generated legacy dist aliases[\s\S]*?# END generated legacy dist aliases/,()=>distAliasRules);
 } else {
  source = source.replace('RewriteEngine On','RewriteEngine On\n\n'+distAliasRules);
 }
 await writeFile(config,source);
}
await writeFile(new URL('word-counts.json',dir),JSON.stringify({minimumEditorialWords:1500,maximumTotalWords:2000,editorialScope:'Page content, including expandable examples and FAQ answers; excludes header, footer, shared footer CTA, form fields and page navigation.',pages:generatedPages.map(({file,words,editorialWords})=>({file,words,editorialWords}))},null,2)+'\n');
await writeFile(new URL('keyword-density.json',dir),JSON.stringify({targetWordCoveragePercent:2,formula:'Exact primary-phrase mentions × phrase word count ÷ editorial word count × 100',scope:'Editorial page content, including expandable guidance. Excludes header, footer, shared footer CTA, forms and page navigation.',selection:'Existing first keyword in pageSEO or specialistPageSEO. Pages without a configured primary keyword are reported as not applicable.',pages:generatedPages.map(page=>page.keyword)},null,2)+'\n');
console.log(`Built ${generatedPages.length} pages; editorial range ${Math.min(...generatedPages.map(page=>page.editorialWords))}–${Math.max(...generatedPages.map(page=>page.editorialWords))}; maximum ${Math.max(...generatedPages.map(page=>page.words))} total words per page.`);
await writeFile(new URL('mark.svg',dir),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><title>${siteName}</title><image width="144" height="144" href="data:image/png;base64,${logo.toString('base64')}"/></svg>`);
const publicPages = pages.filter(([file]) => file !== '404.html');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicPages.map(([file]) => `  <url><loc>${siteOrigin}${publicPagePath(file)}</loc></url>`).join('\n')}
</urlset>
`;
await writeFile(new URL('sitemap.xml',dir),sitemap);
await writeFile(new URL('robots.txt',dir),`User-agent: *\nAllow: /\nDisallow: /404\nSitemap: ${siteOrigin}/sitemap.xml\n`);

