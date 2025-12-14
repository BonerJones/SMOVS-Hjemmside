document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.faq-card');
  items.forEach(card => {
    const btn = card.querySelector('.faq-toggle');
    const answer = card.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const opened = card.classList.toggle('open');
      answer.setAttribute('aria-hidden', (!opened).toString());
      btn.setAttribute('aria-expanded', opened.toString());
      // Icon visuals are handled via CSS pseudo-element (::before).
      // Keep the inline <img> elements hidden (they exist for fallback/accessibility),
      // so do not toggle their `display` here.
    });
  });
});
