// ================================================
// TILBUDSKORT - Expand/collapse funktionalitet
// ================================================

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

	// ================================================
	// MENU MODAL - Håndtering af menu visning
	// ================================================

	let currentPage = 0;
	const pages = document.querySelectorAll(".menu-page");
	const overlay = document.getElementById("overlay");
	const modal = document.getElementById("menuModal");

	// Funktion til at åbne menu modal
	function openMenu(pageIndex) {
		currentPage = pageIndex;
		overlay.classList.add("show");
		modal.classList.add("show");
		showPage(currentPage);
	}

	// Funktion til at lukke menu modal
	function closeMenu() {
		overlay.classList.remove("show");
		modal.classList.remove("show");
	}

	// Funktion til at vise den valgte side
	function showPage(index) {
		pages.forEach((p, i) => {
			p.style.display = i === index ? "block" : "none";
		});
		
		// Skjul navigationsknapper på mad-siden (sidste side)
		const navButtons = document.querySelector(".menu-nav");
		if (index === pages.length - 1) {
			navButtons.style.display = "none";
		} else {
			navButtons.style.display = "flex";
		}
	}

	// Event listeners for åbne-knapper
	document.querySelectorAll('[data-open-menu]').forEach(btn => {
		btn.addEventListener('click', function(e) {
			e.preventDefault();
			const pageIndex = parseInt(this.getAttribute('data-open-menu'));
			openMenu(pageIndex);
		});
	});

	// Event listener for næste-knap
	document.getElementById("nextBtn").addEventListener("click", () => {
		currentPage = (currentPage + 1) % pages.length;
		showPage(currentPage);
	});

	// Event listener for forrige-knap
	document.getElementById("prevBtn").addEventListener("click", () => {
		currentPage = (currentPage - 1 + pages.length) % pages.length;
		showPage(currentPage);
	});

	// Event listeners for luk-knapper
	document.getElementById("closeMenu").addEventListener("click", closeMenu);
	document.querySelectorAll('.menu-close-x').forEach(btn => {
		btn.addEventListener('click', closeMenu);
	});
	overlay.addEventListener("click", closeMenu);
});
