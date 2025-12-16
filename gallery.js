// ================================================
// GALLERI LIGHTBOX - Fuldskærmsvisning af billeder
// ================================================

// Vent til siden er indlæst
document.addEventListener('DOMContentLoaded', function() {
  // Find lightbox-elementer
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const galleryItems = document.querySelectorAll('.gallery-item img');

  // Tilføj klik-event til alle galleribilleder
  galleryItems.forEach(img => {
    img.addEventListener('click', function() {
      lightboxImg.src = this.src; // Kopier billedets kilde
      lightboxImg.alt = this.alt; // Kopier billedets alt-tekst
      lightbox.classList.add('active'); // Vis lightbox
      document.body.style.overflow = 'hidden'; // Forhindre scrolling når lightbox er åben
    });
  });

  // Luk lightbox når der klikkes udenfor billedet
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Luk lightbox når Escape trykkes
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
});

// Funktion til at lukke lightbox
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active'); // Skjul lightbox
  document.body.style.overflow = ''; // Gendan scrolling
}
