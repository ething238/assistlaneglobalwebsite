import { sendEnquiry } from './form-delivery.js';

function openLinkedDetail() {
  let id;
  try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
  const target = id && document.getElementById(id);
  if (!target) return;
  let detail = target.closest('details');
  if (!detail) return;
  while (detail) {
    detail.open = true;
    detail = detail.parentElement?.closest('details');
  }
  target.scrollIntoView();
}
window.addEventListener('hashchange', openLinkedDetail);
openLinkedDetail();
// Animate only cards as they enter view. Content stays readable without JS or motion.
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
if (!motionPreference.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      if (!motionPreference.matches) entry.target.classList.add('scroll-entered');
      observer.unobserve(entry.target);
    }
  }, {rootMargin: '0px 0px -24px 0px'});
  for (const card of document.querySelectorAll('main .section :is(.simple-card, .service-card, .steps > li, .service-portrait)')) {
    observer.observe(card);
  }
}

const mobile = document.querySelector('.mobile-menu');
const nav = document.querySelector('#navigation');
const dropdowns = Array.from(document.querySelectorAll('.nav-dropdown'));

function closeDropdowns(except = null) {
  for (const dropdown of dropdowns) {
    if (dropdown !== except) dropdown.open = false;
  }
}

function closeMenus(restore = false) {
  const openDropdown = dropdowns.find(dropdown => dropdown.open);
  if (openDropdown) {
    openDropdown.open = false;
    if (restore) openDropdown.querySelector('summary').focus();
  } else if (nav?.classList.contains('open')) {
    nav.classList.remove('open');
    mobile.setAttribute('aria-expanded', 'false');
    if (restore) mobile.focus();
  }
}

for (const dropdown of dropdowns) {
  dropdown.addEventListener('toggle', () => {
    if (dropdown.open) closeDropdowns(dropdown);
  });
}

mobile?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  mobile.setAttribute('aria-expanded', String(open));
  if (!open) closeDropdowns();
});
nav?.querySelector('.mobile-contact[href="#enquiry"]')?.addEventListener('click', event => {
  event.preventDefault();
  closeDropdowns();
  closeMenus();
  const enquiry = document.getElementById('enquiry');
  enquiry.scrollIntoView();
  enquiry.focus({preventScroll: true});
});
document.addEventListener('click', event => {
  for (const dropdown of dropdowns) {
    if (dropdown.open && !dropdown.contains(event.target)) dropdown.open = false;
  }
  if (nav?.classList.contains('open') && !nav.contains(event.target) && !mobile.contains(event.target)) closeMenus();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenus(true);
});
matchMedia('(max-width: 1023px)').addEventListener('change', () => {
  closeDropdowns();
  closeMenus();
});
for (const group of document.querySelectorAll('[role="tablist"]')) {
  const tabs = Array.from(group.querySelectorAll('[role="tab"]'));
  function activate(next) {
    for (const tab of tabs) {
      const active = tab === next;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
    }
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      activate(tabs[next]);
      tabs[next].focus();
    });
  });
}

const serviceStrip = document.querySelector('[data-service-strip]');
if (serviceStrip) {
  const track = serviceStrip.querySelector('.service-strip-track');
  const controls = serviceStrip.querySelector('.service-strip-controls');
  const previous = controls.querySelector('[data-strip-previous]');
  const next = controls.querySelector('[data-strip-next]');
  const [firstCard, secondCard] = track.children;

  function updateControls() {
    const max = track.scrollWidth - track.clientWidth;
    controls.hidden = max <= 1;
    previous.setAttribute('aria-disabled', String(track.scrollLeft <= 1));
    next.setAttribute('aria-disabled', String(track.scrollLeft >= max - 1));
  }

  function moveStrip(direction, button) {
    if (button.getAttribute('aria-disabled') === 'true') return;
    const cardStep = secondCard.offsetLeft - firstCard.offsetLeft;
    track.scrollBy({left: direction * cardStep, behavior: motionPreference.matches ? 'auto' : 'smooth'});
  }

  previous.addEventListener('click', () => moveStrip(-1, previous));
  next.addEventListener('click', () => moveStrip(1, next));
  track.addEventListener('scroll', updateControls, {passive:true});
  new ResizeObserver(updateControls).observe(track);
  updateControls();
}

const inboxEstimator = document.querySelector('[data-inbox-estimator]');
if (inboxEstimator) {
  const controls = inboxEstimator.querySelector('.inbox-controls');
  const current = controls.querySelector('#inbox-current');
  const review = controls.querySelector('#inbox-review');
  const result = inboxEstimator.querySelector('#inbox-saved');
  const example = inboxEstimator.querySelector('.inbox-example');
  const currentLabel = controls.querySelector('[data-current-minutes]');
  const reviewLabel = controls.querySelector('[data-review-minutes]');

  function updateEstimate() {
    const currentMinutes = current.valueAsNumber;
    const reviewMinutes = review.valueAsNumber;
    const weeklyMinutes = Math.max(0, currentMinutes - reviewMinutes) * 5;
    const hours = Math.floor(weeklyMinutes / 60);
    const minutes = weeklyMinutes % 60;
    currentLabel.textContent = `${currentMinutes} min/day`;
    reviewLabel.textContent = `${reviewMinutes} min/day`;
    current.setAttribute('aria-valuetext', `${currentMinutes} minutes per day`);
    review.setAttribute('aria-valuetext', `${reviewMinutes} minutes per day`);
    result.value = [hours ? `${hours} hr` : '', minutes || !hours ? `${minutes} min` : ''].filter(Boolean).join(' ');
  }

  controls.hidden = false;
  example.hidden = true;
  controls.addEventListener('input', updateEstimate);
  updateEstimate();
}

for (const form of document.querySelectorAll('[data-enquiry-form]')) {
  const status = form.querySelector('.enquiry-status');
  const fieldset = form.querySelector('fieldset');
  const button = form.querySelector('button[type="submit"]');
  const phone = form.querySelector('[name="phone"]');
  const description = form.querySelector('[name="description"]');
  const deliveryReady = Boolean(form.querySelector('[name="access_key"]').value.trim());
  let sending = false;

  function validateInput(input) {
    if (input === phone) {
      const value = phone.value.trim();
      const digits = value.replace(/\D/g, '');
      phone.setCustomValidity(value && (!/^\+?[\d\s().-]+$/.test(value) || digits.length < 7 || digits.length > 15) ? 'Enter a valid phone number with its country code.' : '');
    }
    if (input === description) description.setCustomValidity(description.value && !description.value.trim() ? 'Please describe the support you need.' : '');
  }

  form.addEventListener('input', event => {
    validateInput(event.target);
    if (!sending && deliveryReady) {
      status.textContent = '';
      status.classList.remove('is-error', 'is-success');
    }
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!deliveryReady) return;
    if (sending) return;
    validateInput(phone);
    validateInput(description);
    if (!form.reportValidity()) return;
    const values = Object.fromEntries(Array.from(new FormData(form), ([name, value]) => [name, String(value).trim()]));
    if (values.botcheck) return;
    const sourcePage = window.location.origin + window.location.pathname;
    const attribution = Object.fromEntries(['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid'].map(name => [name, new URLSearchParams(window.location.search).get(name) || '']));
    const message = [
      ['Name', values.name], ['Email', values.email], ['Phone', values.phone],
      ['Company', values.company], ['Support needed', values.service],
      ['Requirements', values.description], ['Preferred start date', values.startDate],
      ['Time zone', values.timeZone], ['Source page', sourcePage]
    ].filter(([, value]) => value).map(([name, value]) => `${name}: ${value}`).join('\n');
    sending = true;
    fieldset.disabled = true;
    form.setAttribute('aria-busy', 'true');
    button.textContent = 'Sending your enquiry…';
    status.textContent = '';
    status.classList.remove('is-error', 'is-success');
    try {
      await sendEnquiry({ name: values.name, email: values.email, phone: values.phone, company: values.company, service: values.service, description: values.description, startDate: values.startDate, timeZone: values.timeZone, consent: values.consent, message, source_page: sourcePage, ...attribution }, values.access_key);
      form.reset();
      status.textContent = 'Your enquiry has been sent. Thank you. Our team will contact you to discuss the next steps.';
      status.classList.add('is-success');
      button.textContent = 'Send another enquiry';
    } catch (error) {
      status.textContent = error.message;
      status.classList.add('is-error');
      button.textContent = 'Try again';
    } finally {
      sending = false;
      fieldset.disabled = false;
      form.removeAttribute('aria-busy');
    }
  });
}
