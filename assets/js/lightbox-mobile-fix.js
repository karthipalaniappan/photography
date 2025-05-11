document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 768) {
    const lightboxLinks = document.querySelectorAll('a[data-lightbox]');
    lightboxLinks.forEach(link => {
      link.removeAttribute('data-lightbox');
    });

    // Optional: Hide overlay elements if they exist
    const overlay = document.querySelector('.lightboxOverlay');
    const lightbox = document.querySelector('.lightbox');
    if (overlay) overlay.style.display = 'none';
    if (lightbox) lightbox.style.display = 'none';
  }
});