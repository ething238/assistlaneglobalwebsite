// Remove repetitive planning sections while retaining page-specific scopes,
// examples, checks, FAQs and the original page URLs.
const workflowCuts = ['first-batch', 'review-guide', 'coverage-handover', 'plan-coverage'];
const pageCuts = {
  'services.html': ['scope-a-request', 'scope-boundaries', 'prepare-a-trial', 'compare-delivery-needs', 'combine-services-example'],
  'industries.html': ['industry-daily-work', 'industry-access-patterns', 'industry-owner-handoff', 'industry-choose-coverage', 'industry-evaluate-fit'],
  'about.html': ['team-coordination', 'first-conversation', 'working-relationships'],
  'contact.html': ['brief-coverage-example', 'brief-review-checklist', 'brief-first-review'],
  'how-it-works.html': ['first-month-review', 'delivery-expansion'],
  'pricing.html': ['cost-questions', 'pricing-review'],
  'trust.html': ['escalation-record'],
  'mobile-app-development.html': ['mobile-launch-and-support', 'mobile-handover'],
  'website-development.html': ['website-content-and-ownership', 'website-launch-review'],
  'marketing-content.html': ['exception-playbook', 'scenarios']
};

export function concisePage(body, file) {
  const cuts = new Set([...workflowCuts, ...(pageCuts[file] || [])]);
  return body.replace(/<section\b([^>]*)>[\s\S]*?<\/section>/g, (section, attributes) => {
    const id = attributes.match(/\bid="([^"]+)"/)?.[1];
    return cuts.has(id) ? '' : section;
  });
}

const voidTags = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
const nonCopyTags = new Set(['head','script','style','noscript','template','svg','canvas']);
const wordPattern = /[\p{L}\p{N}]+(?:[’'@.+-][\p{L}\p{N}]+)*/gu;
const decode = text => text.replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos|nbsp|ndash|mdash|rsquo|lsquo|rdquo|ldquo|hellip);/gi, (entity, name) => {
  if (name[0] === '#') return String.fromCodePoint(parseInt(name.slice(name[1].toLowerCase() === 'x' ? 2 : 1), name[1].toLowerCase() === 'x' ? 16 : 10));
  return {amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:' ',ndash:'–',mdash:'—',rsquo:'’',lsquo:'‘',rdquo:'”',ldquo:'“',hellip:'…'}[name.toLowerCase()];
});

export function pageWordTokens(page) {
  const stack = [];
  const text = [];
  for (const token of page.match(/<!--[\s\S]*?-->|<[^>]+>|[^<]+/g) || []) {
    if (token.startsWith('<!--') || /^<!/.test(token)) continue;
    const closing = token.match(/^<\/([\w-]+)/);
    if (closing) {
      const index = stack.map(entry => entry.tag).lastIndexOf(closing[1].toLowerCase());
      if (index !== -1) stack.length = index;
      continue;
    }
    const opening = token.match(/^<([\w-]+)/);
    if (opening) {
      const tag = opening[1].toLowerCase();
      const excluded = stack.some(entry => entry.excluded) || nonCopyTags.has(tag) || /\baria-hidden\s*=\s*["']true["']/i.test(token);
      if (!voidTags.has(tag) && !token.endsWith('/>')) stack.push({tag, excluded});
    } else if (!stack.some(entry => entry.excluded)) {
      text.push(decode(token));
    }
  }
  return text.join(' ').match(wordPattern) || [];
}

export const countPageWords = page => pageWordTokens(page).length;

export const seoOverrides = {
  'index.html': {
    title: 'Virtual Assistant Services for Growing Businesses',
    description: 'Virtual assistants for inboxes, calendars, customer enquiries and daily operations. Hand off recurring work with a clear scope and updates you can review.'
  },
  'services.html': {
    title: 'Virtual Assistant and Business Support Services',
    description: 'Explore bookkeeping and virtual assistant services for administration, customer enquiries, CRM and operations.',
    h1: 'Virtual assistant and business support services'
  },
  'accounting-bookkeeping.html': {
    title: 'Bookkeeping Services | Invoices and Reconciliation',
    description: 'Keep invoices, bank reconciliations, expenses and month-end records organised for your finance reviewer with AssistLane Global bookkeeping support.',
    h1: 'Bookkeeping services for organised business finances'
  },
  'contact.html': {
    title: 'Contact | Virtual Assistant Support',
    description: 'Contact AssistLane Global about virtual assistant and business support. Email support@assistlaneglobal.com or call +91 7011956780.',
    h1: 'Tell us about the support you need'
  }
};
