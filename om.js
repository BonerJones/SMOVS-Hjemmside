// ================================================
// FAQ ACCORDION - Åbn/luk spørgsmål og svar
// ================================================

// Vent til siden er indlæst
document.addEventListener('DOMContentLoaded', () => {
  // Find alle FAQ-kort
  const items = document.querySelectorAll('.faq-card');
  
  items.forEach(card => {
    const btn = card.querySelector('.faq-toggle'); // Knap til at åbne/lukke
    const answer = card.querySelector('.faq-answer'); // Svaret der skal vises/skjules
    if (!btn || !answer) return; // Stop hvis elementer mangler

    // Når knappen klikkes
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // Forhindre standard link-funktion
      
      const opened = card.classList.toggle('open'); // Skift 'open' klasse
      
      // Opdater tilgængelighed
      answer.setAttribute('aria-hidden', (!opened).toString());
      btn.setAttribute('aria-expanded', opened.toString());
      
      // Visuel tilstand håndteres af CSS (.faq-card.open .faq-toggle::before)
    });
  });
});
