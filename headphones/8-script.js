// 8-script.js — accessible hamburger toggle and footer year
(function () {
  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!ham || !menu) return;

  ham.addEventListener('click', function () {
    const expanded = ham.getAttribute('aria-expanded') === 'true';
    ham.setAttribute('aria-expanded', String(!expanded));
    if (expanded) {
      menu.setAttribute('hidden', '');
      ham.setAttribute('aria-label', 'Open menu');
    } else {
      menu.removeAttribute('hidden');
      ham.setAttribute('aria-label', 'Close menu');
    }
  });

  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
      menu.setAttribute('hidden', '');
      ham.setAttribute('aria-expanded', 'false');
      ham.setAttribute('aria-label', 'Open menu');
    }
  });

  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;
})();
