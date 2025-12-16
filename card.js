// Vent til siden er fuldt indlæst
document.addEventListener('DOMContentLoaded', () => {
	// Find alle tilbudskort på siden
	const cards = document.querySelectorAll('.offer-card');
	
	// Gå gennem hvert kort
	cards.forEach(card => {
		// Find elementerne i kortet
		const more = card.querySelector('.more-link');      // "Læs mere" knap
		const less = card.querySelector('.less-link');      // "Luk" knap
		const details = card.querySelector('.offer-details'); // Detaljer at vise/skjule
		
		// Spring over hvis kortet mangler elementer
		if (!more || !less || !details) return;

		// Når "Læs mere" klikkes
		more.addEventListener('click', (e) => {
			e.preventDefault(); // Stop normal link-funktion
			
			card.classList.add('open'); // Åbn kortet (CSS viser detaljer)
			
			// Opdater tilgængelighed for skærmlæsere
			details.setAttribute('aria-hidden', 'false');
			more.setAttribute('aria-expanded', 'true');
			less.setAttribute('aria-expanded', 'true');
		});

		// Når "Luk" klikkes
		less.addEventListener('click', (e) => {
			e.preventDefault(); // Stop normal link-funktion
			
			card.classList.remove('open'); // Luk kortet (CSS skjuler detaljer)
			
			// Opdater tilgængelighed for skærmlæsere
			details.setAttribute('aria-hidden', 'true');
			more.setAttribute('aria-expanded', 'false');
			less.setAttribute('aria-expanded', 'false');
		});
	});
});
