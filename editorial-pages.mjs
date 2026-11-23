import { pageWordTokens, concisePage } from './page-limits.mjs';
import { siteGuides } from './site-guides.mjs';
import { companyGuides } from './company-guides.mjs';
import { privacyNotes, recoveryNotes, homeNotes } from './reader-notes.mjs';
import { legacyAnchorIds } from './legacy-anchors.mjs';
import { applyKeywordCopy, editorialMinimum, keywordNotes } from './editorial-keywords.mjs';

export function editorialWordTokens(html) {
  return pageWordTokens(html.replace(/<header\b[\s\S]*?<\/header>/g,'').replace(/<footer\b[\s\S]*?<\/footer>/g,'').replace(/<section\b[^>]*\bid="footer-cta"[^>]*>[\s\S]*?<\/section>/g,'').replace(/<form\b[\s\S]*?<\/form>/g, '').replace(/<nav\b[\s\S]*?<\/nav>/g, ''));
}

export const countEditorialWords = html => editorialWordTokens(html).length;

const headingEdits = new Map([
  ['What the finished handoff looks like.', 'What you receive'],
  ['From request to review.', 'How the work gets done'],
  ['Where this helps day to day.', 'When this support helps'],
  ['What to verify before closing a task.', 'How we check the work'],
  ['Decide what happens when the normal rule fails.', 'When a task needs your decision'],
  ['Build the scope from the work.', 'What to agree before we start'],
  ['Explore connected services', 'Related services'],
  ['Set the guardrails', 'Agree the limits'],
  ['Prepare the inputs and rules.', 'What we need from you'],
  ['Check the work against the original brief.', 'Review the results'],
  ['Leave a record the next person can use.', 'Make the next step clear'],
  ['Workstream', 'Task'],
  ['Approval boundary.', 'Decisions your team keeps.']
]);

function simplify(html) {
  return html.replace(/<figure\b[^>]*class="(?:workflow-illustration|decision-graphic|assistant-flow)[^"]*"[^>]*>[\s\S]*?<\/figure>/g, '')
    .replace(/<img\b[^>]*class="section-backdrop"[^>]*>/g, '')
    .replace(/\bphoto-background\b/g, '').replace(/\bdark-section\b/g, 'plain-section')
    .replace(/(<(?:h[123]|strong)>)([^<]+)(<\/(?:h[123]|strong)>)/g, (match, open, text, close) => open+(headingEdits.get(text) || text)+close)
    .split(/(<[^>]+>)/g).map(part=>part.startsWith('<') ? part : part
      .replace(/review cadence/gi, 'review schedule')
      .replace(/source of truth/gi, 'main record')
      .replace(/operating context/gi, 'working day')
      .replace(/virtual assistant for entrepreneurs/gi, 'virtual assistant')
      .replace(/workstreams/g, 'tasks').replace(/workstream/g, 'task'))
    .join('');
}

function sectionInfo(section) {
  return { id: section.match(/^<section\b[^>]*\bid="([^"]+)"/)?.[1], title: section.match(/<h2>([\s\S]*?)<\/h2>/)?.[1] || 'Practical guidance' };
}

function asDetail(section) {
  const {id,title}=sectionInfo(section);
  let inside=section.replace(/^<section\b[^>]*>/,'').replace(/<\/section>$/,'');
  inside=inside.replace(/^<div class="wrap">/,'').replace(/<\/div>$/,'');
  inside=inside.replace(/<h2>[\s\S]*?<\/h2>/, '');
  return `<details class="reader-detail"${id?` id="${id}"`:''}><summary>${title}</summary><div class="reader-detail-body">${inside}</div></details>`;
}

function candidateItems(section) {
  const {title}=sectionInfo(section);
  const items=Array.from(section.matchAll(/<h3>([\s\S]*?)<\/h3>[\s\S]*?<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/g),match=>({group:title,title:match[1],copy:match[2]}));
  for (const row of section.matchAll(/<tr><th\b[^>]*>([\s\S]*?)<\/th>([\s\S]*?)<\/tr>/g)) {
    const cells=Array.from(row[2].matchAll(/<td>([\s\S]*?)<\/td>/g),cell=>cell[1].replace(/<span class="cell-label"[^>]*>[\s\S]*?<\/span>/g,''));
    if(cells.length) items.push({group:title,title:row[1],copy:cells.join(' ')});
  }
  // A chapter without cards still contains a useful, complete paragraph.
  return items.length ? items : Array.from(section.matchAll(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/g),match=>({group:title,title:'A practical starting point',copy:match[1]}));
}

const companyKeys={'about.html':'about','how-it-works.html':'how','pricing.html':'pricing','trust.html':'trust','contact.html':'contact'};
const companyIds=new Set(Object.values(companyGuides).flat().map(group=>group.id));
const directoryIds=new Set([...siteGuides.services,...siteGuides.industries].map(group=>group.id));

function readerSection(details) {
  return details ? `<section class="section reader-guide" id="practical-guide"><div class="wrap"><div class="section-intro"><h2>Planning your support</h2><p class="lead">Open the topics that matter to your team. These details explain how to prepare the work, review results and handle changes.</p></div>${details}</div></section>` : '';
}

function renderNotes(groups) {
  return groups.map(({title,copy})=>`<details class="reader-detail"><summary>${title}</summary><div class="reader-detail-body"><p>${copy}</p></div></details>`).join('');
}

export function prepareEditorialPage(originalBody, file) {
  let full=simplify(originalBody);
  let body=concisePage(full,file);
  const allSections=Array.from(full.matchAll(/<section\b[^>]*>[\s\S]*?<\/section>/g),match=>match[0]);
  const removed=allSections.filter(section=>!body.includes(section));
  let pool=removed.flatMap(candidateItems);
  const retainedDetails=[];
  if (!['privacy-policy.html','404.html','index.html'].includes(file)) {
    body=body.replace(/<section\b[^>]*>[\s\S]*?<\/section>/g,section=>{
      const {id}=sectionInfo(section);
      if (['worked-example','exception-playbook'].includes(id) || (companyKeys[file] && companyIds.has(id)) || (['services.html','industries.html'].includes(file) && directoryIds.has(id))) {
        retainedDetails.push(asDetail(section));
        return '';
      }
      return section;
    });
  }
  if (file==='index.html') pool=[...siteGuides.home.flatMap(group=>[{group:group.title,title:'Why this helps',copy:group.intro},...group.items.map(([title,copy])=>({group:group.title,title,copy}))]),...homeNotes.map(note=>({...note,group:'Choosing the right support'}))];
  if (file==='privacy-policy.html') pool=privacyNotes.map(note=>({...note,group:'Understanding your information'}));
  if (file==='404.html') pool=recoveryNotes.map(note=>({...note,group:'Finding the right page'}));

  const additions=[];
  let details=retainedDetails.join('');
  let current=body+readerSection(details);
  while(countEditorialWords(current)<editorialMinimum(file) && pool.length) {
    const item=pool.shift();
    additions.push(item);
    const groups=new Map();
    for(const item of additions) {
      if(!groups.has(item.group)) groups.set(item.group,[]);
      groups.get(item.group).push(item);
    }
    const added=Array.from(groups,([title,items])=>`<details class="reader-detail"><summary>${title}</summary><div class="reader-detail-body">${items.map(item=>`<article><h3>${item.title}</h3><p>${item.copy}</p></article>`).join('')}</div></details>`).join('');
    details=retainedDetails.join('')+added;
    current=body+readerSection(details);
  }

  const extra=readerSection(details+renderNotes(keywordNotes[file]||[]));
  // Keep contact options and FAQs after the practical information.
  const faqStart=body.search(/<section\b[^>]*>(?:(?!<section)[\s\S])*?<h2>Frequently Asked Questions<\/h2>/);
  body=faqStart>=0 ? body.slice(0,faqStart)+extra+body.slice(faqStart) : body+extra;
  body=applyKeywordCopy(simplify(body),file).replace(/[\t ]+$/gm,'');
  const existingIds=new Set(Array.from(body.matchAll(/\bid="([^"]+)"/g),match=>match[1]));
  // Header/footer control IDs are retained there, rather than duplicated here.
  for(const id of ['top','main','navigation','services-dropdown','industries-dropdown','site-footer','footer-cta','footer-cta-title']) existingIds.add(id);
  const aliases=(legacyAnchorIds[file]||[]).filter(id=>!existingIds.has(id)).map(id=>`<span id="${id}" class="legacy-anchor" aria-hidden="true"></span>`).join('');
  return body.replace('<section class="section reader-guide"',aliases+'<section class="section reader-guide"');
}
