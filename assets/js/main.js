// Mobile nav toggle — shared across all pages
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menuToggle');
  const panel = document.getElementById('mobilePanel');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    const open = panel.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    panel.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
});
