document.addEventListener("DOMContentLoaded", () => {
  const dateButtons = document.querySelectorAll(".calendar-dates button.interactive");
  const eventCard1 = document.querySelector(".event-card-1");
  const eventCard2 = document.querySelector(".event-card-2");
  const eventCard3 = document.querySelector(".event-card-3");
  const eventsHeading = document.querySelector(".events-heading");
  const backLink = document.querySelector(".back-link");

  // Function to show the correct event card based on the selected date
  function showEventCard(date) {
    // Hide all event cards initially
    eventCard1.style.display = "none";
    eventCard2.style.display = "none";
    eventCard3.style.display = "none";

    // Show the back link
    backLink.style.display = "block";

    // Update the heading and show the correct event card
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

  // Add click event listeners to all interactive buttons
  dateButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove "active" class from all buttons
      dateButtons.forEach(btn => btn.classList.remove("active"));

      // Add "active" class to the clicked button
      button.classList.add("active");

      // Show the correct event card based on the selected date
      const selectedDate = button.dataset.date; // Read the data-date attribute
      showEventCard(selectedDate);
    });
  });

  // Add click event listener to the "Back" link
  backLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior

    // Reset the heading and show all event cards
    eventsHeading.textContent = "Kommende Events";
    eventCard1.style.display = "block";
    eventCard2.style.display = "block";
    eventCard3.style.display = "block";

    // Hide the back link
    backLink.style.display = "none";

    // Remove "active" class from all buttons
    dateButtons.forEach(btn => btn.classList.remove("active"));
  });

  // Set default state to show all cards and hide the back link
  eventsHeading.textContent = "Kommende Events";
  eventCard1.style.display = "block";
  eventCard2.style.display = "block";
  eventCard3.style.display = "block";
  backLink.style.display = "none"; // Hide the back link initially
});