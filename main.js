const menuButton = document.querySelector('.menu-button, .nav-button');
const siteNav = document.querySelector('.site-nav, .top nav');
if (menuButton && siteNav) {
  menuButton.setAttribute('aria-label', 'Open navigation');
  menuButton.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    menuButton.textContent = open ? 'Close' : 'Menu';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
}
const fanButtons = [...document.querySelectorAll('.fan-inspect button')];
const rays = [...document.querySelectorAll('.state-ray')];
const stateDescription = document.querySelector('.state-description');
fanButtons.forEach((button) => {
  button.addEventListener('click', () => {
    fanButtons.forEach((item) => item.setAttribute('aria-pressed', 'false'));
    rays.forEach((ray) => ray.classList.remove('inspected'));
    button.setAttribute('aria-pressed', 'true');
    const ray = document.querySelector(`[data-ray="${button.dataset.state}"]`);
    if (ray) ray.classList.add('inspected');
    if (stateDescription) stateDescription.textContent = button.dataset.description;
  });
});
