'use strict';
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

const enquiryForm = document.querySelector('#enquiry');
if (enquiryForm) {
  const status = enquiryForm.querySelector('.enquiry-status');
  enquiryForm.addEventListener('submit', event => {
    event.preventDefault();
    status.textContent = 'All required fields are complete.';
  });
  enquiryForm.addEventListener('input', () => {
    status.textContent = '';
  });
  enquiryForm.querySelector('button[type="submit"]').disabled = false;
}
