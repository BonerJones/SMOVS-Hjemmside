document.addEventListener('DOMContentLoaded', () => {
	const cards = document.querySelectorAll('.offer-card');
	cards.forEach(card => {
		const more = card.querySelector('.more-link');
		const less = card.querySelector('.less-link');
		const details = card.querySelector('.offer-details');
		if (!more || !less || !details) return;

		more.addEventListener('click', (e) => {
			e.preventDefault();
			card.classList.add('open');
			// update aria attributes
			details.setAttribute('aria-hidden', 'false');
			more.setAttribute('aria-expanded', 'true');
			less.setAttribute('aria-expanded', 'true');
			// optional: focus the first interactive element inside details
			const btn = details.querySelector('button, a');
			if (btn) btn.focus();
		});

		less.addEventListener('click', (e) => {
			e.preventDefault();
			card.classList.remove('open');
			// update aria attributes
			details.setAttribute('aria-hidden', 'true');
			more.setAttribute('aria-expanded', 'false');
			less.setAttribute('aria-expanded', 'false');
		});
	});
});
