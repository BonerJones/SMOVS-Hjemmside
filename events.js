// ================================================
// EVENTS KALENDER - Filtrering af events efter dato
// ================================================

// Vent til siden er indlæst
document.addEventListener("DOMContentLoaded", () => {
  // Find alle interaktive datoknapper i kalenderen
  const dateButtons = document.querySelectorAll(".calendar-dates button.interactive");
  const eventCard1 = document.querySelector(".event-card-1");
  const eventCard2 = document.querySelector(".event-card-2");
  const eventCard3 = document.querySelector(".event-card-3");
  const eventsHeading = document.querySelector(".events-heading");
  const backLink = document.querySelector(".back-link");

  // Funktion til at vise det korrekte event-kort baseret på valgt dato
  function showEventCard(date) {
    // Skjul alle event-kort først
    eventCard1.style.display = "none";
    eventCard2.style.display = "none";
    eventCard3.style.display = "none";

    // Vis "tilbage" link
    backLink.style.display = "block";

    // Opdater overskrift og vis det rigtige event-kort
    if (date === "10") {
      eventsHeading.textContent = "Events d. 10 Januar";
      eventCard1.style.display = "block";
    } else if (date === "15") {
      eventsHeading.textContent = "Events d. 15 Januar";
      eventCard2.style.display = "block";
    } else if (date === "23") {
      eventsHeading.textContent = "Events d. 23 Januar";
      eventCard3.style.display = "block";
    }
  }

  // Tilføj klik-event til alle interaktive knapper
  dateButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Fjern "active" klasse fra alle knapper
      dateButtons.forEach(btn => btn.classList.remove("active"));

      // Tilføj "active" klasse til den klikkede knap
      button.classList.add("active");

      // Vis det korrekte event-kort baseret på den valgte dato
      const selectedDate = button.dataset.date; // Læs data-date attributten
      showEventCard(selectedDate);
    });
  });

  // Tilføj klik-event til "Tilbage" linket
  backLink.addEventListener("click", (e) => {
    e.preventDefault(); // Forhindre standard link-funktion

    // Nulstil overskrift og vis alle event-kort
    eventsHeading.textContent = "Kommende Events";
    eventCard1.style.display = "block";
    eventCard2.style.display = "block";
    eventCard3.style.display = "block";

    // Skjul "tilbage" link
    backLink.style.display = "none";

    // Fjern "active" klasse fra alle knapper
    dateButtons.forEach(btn => btn.classList.remove("active"));
  });

  // Standard tilstand: Vis alle kort og skjul "tilbage" link
  eventsHeading.textContent = "Kommende Events";
  eventCard1.style.display = "block";
  eventCard2.style.display = "block";
  eventCard3.style.display = "block";
  backLink.style.display = "none";
});