// ================================================
// MENUKORT MODAL - Håndtering af menu visning
// ================================================

document.addEventListener('DOMContentLoaded', function () {
  let currentPage = 0;
  let maxPage = 4; // Standard til drikkevarer (0-4)
  const pages = document.querySelectorAll(".menu-page");
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("menuModal");

  // Funktion til at åbne menu modal
  function openMenu(pageIndex) {
    currentPage = pageIndex;
    
    // Sæt max side baseret på hvilken sektion vi er i
    if (pageIndex === 5) {
      maxPage = 5; // Kun mad-side
    } else {
      maxPage = 4; // Kun drikkevare-sider (0-4)
    }
    
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
    
    // Skjul navigationsknapper på mad-siden
    const navButtons = document.querySelector(".menu-nav");
    if (index === 5) {
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
    if (currentPage < maxPage) {
      currentPage = currentPage + 1;
    } else {
      currentPage = maxPage === 5 ? 5 : 0; // Loop tilbage til første side i nuværende sektion
    }
    showPage(currentPage);
  });

  // Event listener for forrige-knap
  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 0 && currentPage <= maxPage) {
      currentPage = currentPage - 1;
    } else {
      currentPage = maxPage; // Loop til sidste side i nuværende sektion
    }
    showPage(currentPage);
  });

  // Event listeners for luk-knapper
  document.getElementById("closeMenu").addEventListener("click", closeMenu);
  document.querySelectorAll('.menu-close-x').forEach(btn => {
    btn.addEventListener('click', closeMenu);
  });
  overlay.addEventListener("click", closeMenu);
});
