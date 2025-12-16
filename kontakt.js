document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".kontakt-hero-btn");
    button.addEventListener("click", () => {
      const formSection = document.getElementById("kontakt-form-section");
      if (formSection) {
        const offset = -50; // Adjust this value to control how far above the section the scroll stops
        const top = formSection.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({
          top: top,
          behavior: "smooth",
        });
      } else {
        console.error("Element with id 'kontakt-form-section' not found.");
      }
    });
  });