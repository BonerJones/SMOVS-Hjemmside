document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.faq-card');
  items.forEach(card => {
    const btn = card.querySelector('.faq-toggle');
    // Icons are handled via CSS ::before mask; image elements are kept for
    // accessibility but should not be toggled via JS to avoid duplicate icons.
    const answer = card.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const opened = card.classList.toggle('open');
      answer.setAttribute('aria-hidden', (!opened).toString());
      btn.setAttribute('aria-expanded', opened.toString());
      // visual state handled by CSS (.faq-card.open .faq-toggle::before)
    });
  });
});
