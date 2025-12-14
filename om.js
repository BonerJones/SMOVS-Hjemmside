document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.faq-card');
  items.forEach(card => {
    const btn = card.querySelector('.faq-toggle');
    const plus = card.querySelector('.icon-plus');
    const minus = card.querySelector('.icon-minus');
    const answer = card.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const opened = card.classList.toggle('open');
      answer.setAttribute('aria-hidden', (!opened).toString());
      btn.setAttribute('aria-expanded', opened.toString());
      if (opened) {
        plus.style.display = 'none';
        minus.style.display = 'block';
      } else {
        plus.style.display = 'block';
        minus.style.display = 'none';
      }
    });
  });
});
