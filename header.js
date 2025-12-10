// header.js — handles header interactions (mobile menu toggle)

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const menu = document.getElementById('mobileMenu');
  if (!burger || !menu) return;
  // burger image element (swap src between burger and x)
  const burgerImg = burger.querySelector('.burger-icon');
  const burgerSrc = burgerImg ? burgerImg.getAttribute('src') : null;
  const closeSrc = 'images/icons/x.svg';

  function openMenu() {
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true');
    if (burgerImg) burgerImg.setAttribute('src', closeSrc);
    const firstLink = menu.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
    if (burgerImg && burgerSrc) burgerImg.setAttribute('src', burgerSrc);
    burger.focus();
  }

  burger.addEventListener('click', function () {
    const isOpen = menu.classList.contains('open');
    if (isOpen) closeMenu(); else openMenu();
  });

  // Close when a link is clicked
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
});
