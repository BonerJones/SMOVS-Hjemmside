// ================================================
// KONTAKT SCROLL - Scroll til formular
// ================================================

// Vent til siden er indlæst
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".kontakt-hero-btn");
  
  button.addEventListener("click", () => {
    // Find formular-sektionen
    const formSection = document.getElementById("kontakt-form-section");
    
    if (formSection) {
      // Beregn position med offset (50px over sektionen)
      const offset = -50;
      const top = formSection.getBoundingClientRect().top + window.scrollY + offset;
      
      // Scroll smooth til positionen
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    } else {
      console.error("Element med id 'kontakt-form-section' blev ikke fundet.");
    }
  });
});