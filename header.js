// ================================================
// HEADER MENU - Burger menu funktionalitet
// ================================================

// Vent til siden er indlæst
document.addEventListener('DOMContentLoaded', function () {
  // Find burger-knap og menu
  const burger = document.querySelector('.burger');
  const menu = document.getElementById('mobileMenu');
  if (!burger || !menu) return; // Stop hvis elementer mangler
  
  // Find burger-ikon billedet (skal skiftes mellem burger og X)
  const burgerImg = burger.querySelector('.burger-icon');
  const burgerSrc = burgerImg ? burgerImg.getAttribute('src') : null;
  const closeSrc = 'images/icons/x.svg';

  // Funktion til at åbne menuen
  function openMenu() {
    menu.classList.add('open'); // Tilføj 'open' klasse
    menu.setAttribute('aria-hidden', 'false'); // Opdater tilgængelighed
    burger.setAttribute('aria-expanded', 'true');
    if (burgerImg) burgerImg.setAttribute('src', closeSrc); // Skift til X-ikon
    const firstLink = menu.querySelector('a');
    if (firstLink) firstLink.focus(); // Sæt fokus på første link
  }

  // Funktion til at lukke menuen
  function closeMenu() {
    menu.classList.remove('open'); // Fjern 'open' klasse
    menu.setAttribute('aria-hidden', 'true'); // Opdater tilgængelighed
    burger.setAttribute('aria-expanded', 'false');
    if (burgerImg && burgerSrc) burgerImg.setAttribute('src', burgerSrc); // Skift tilbage til burger-ikon
    burger.focus(); // Sæt fokus tilbage på burger-knap
  }

  // Åbn/luk menu når burger klikkes
  burger.addEventListener('click', function () {
    const isOpen = menu.classList.contains('open');
    if (isOpen) closeMenu(); else openMenu();
  });

  // Luk menu når et link klikkes
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Luk menu når Escape trykkes
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  // Luk menu når vinduet ændres fra mobil til desktop
  let previousWidth = window.innerWidth;
  window.addEventListener('resize', function () {
    const currentWidth = window.innerWidth;
    // Hvis vi krydser desktop breakpoint (900px), luk menu
    if (previousWidth < 900 && currentWidth >= 900) {
      closeMenu();
    }
    previousWidth = currentWidth;
  });
});
