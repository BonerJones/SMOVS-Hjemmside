// ====== DATA FOR EVENTS (10, 15, 23) ======
const eventsByDay = {
    10: {
      type: "Musik",
      title: "Jazz Night med lokale kunstnere",
      date: "10. jan 2026",
      time: "19:00",
      description:
        "Nyd en afslappet aften med live jazz, gode vine og hyggelig stemning hos SMOVS.",
      image: "images/events/jazz-night.jpg",
      link: "#"
    },
    15: {
      type: "Quiz",
      title: "Trivia Thursday",
      date: "15. jan 2026",
      time: "20:00",
      description:
        "Test din viden til en underholdende quiz-aften med fede præmier og kolde øl.",
      image: "images/events/trivia.jpg",
      link: "#"
    },
    23: {
      type: "Workshop",
      title: "Cocktail Workshop",
      date: "23. jan 2026",
      time: "17:00",
      description:
        "Lær at shake farverige cocktails sammen med vores bartendere – perfekt til venne-hygge.",
      image: "images/events/cocktail-workshop.jpg",
      link: "#"
    }
  };
  
  // DOM-elementer
  const dayButtons = document.querySelectorAll(".calendar-day[data-day]");
  const card = document.getElementById("event-card");
  const label = document.getElementById("event-label");
  const title = document.getElementById("event-title");
  const meta = document.getElementById("event-meta");
  const desc = document.getElementById("event-description");
  const image = document.getElementById("event-image");
  const link = document.getElementById("event-link");
  const emptyMessage = document.getElementById("events-empty");
  
  // Funktion: vis event for valgt dato
  function showEventForDay(dayString) {
    const day = Number(dayString);
    const event = eventsByDay[day];
  
    // Aktiv styling på datoer
    dayButtons.forEach(btn => {
      btn.classList.toggle("calendar-day--active", btn.dataset.day === dayString);
    });
  
    if (!event) {
      // Ingen event den dag
      card.style.display = "none";
      emptyMessage.classList.add("events-empty--visible");
      return;
    }
  
    // Der findes et event
    emptyMessage.classList.remove("events-empty--visible");
    card.style.display = "block";
  
    label.textContent = event.type;
    title.textContent = event.title;
    meta.textContent = `${event.date} · ${event.time}`;
    desc.textContent = event.description;
    image.src = event.image;
    image.alt = event.title;
    link.href = event.link || "#";
  }
  
  // Klik på datoer (kun 10, 15, 23 har data-day)
  dayButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const day = btn.dataset.day;
      showEventForDay(day);
    });
  });
  
  // Standardvisning: d. 10
  showEventForDay("10");