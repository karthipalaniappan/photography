// Hamburger Menu Logic
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuIcon = document.getElementById("menu-icon");

if (menuBtn && navLinks && menuIcon) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("open");

    // Swap icons
    if (menuBtn.classList.contains("open")) {
      menuIcon.classList.remove("ri-menu-line");
      menuIcon.classList.add("ri-close-line");
    } else {
      menuIcon.classList.remove("ri-close-line");
      menuIcon.classList.add("ri-menu-line");
    }
  });
}

if (navLinks) {
  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.setAttribute("class", "ri-menu-line");
  });
}

// Sticky Navbar on Scroll
const navbar = document.querySelector(".navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 10);
  });
}

// ScrollReveal Animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", { ...scrollRevealOption });
ScrollReveal().reveal(".about__container .section__description", { ...scrollRevealOption, delay: 500, interval: 500 });
ScrollReveal().reveal(".about__container img", { ...scrollRevealOption, delay: 1500 });

ScrollReveal().reveal(".service__container .section__header", { ...scrollRevealOption });
ScrollReveal().reveal(".service__container .section__description", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".service__card", { duration: 1000, delay: 1000, interval: 500 });

ScrollReveal().reveal(".blog__content .section__header", { ...scrollRevealOption });
ScrollReveal().reveal(".blog__content h4", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".blog__content p", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".blog__content .blog__btn", { ...scrollRevealOption, delay: 1500 });

// Swiper Setup
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

// Instagram Scroll Effect
const instagram = document.querySelector(".instagram__flex");
if (instagram) {
  Array.from(instagram.children).forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    instagram.appendChild(duplicateNode);
  });
}

// Masonry Gallery Layout + Fancybox config
document.addEventListener("DOMContentLoaded", function () {
  // Masonry Gallery Layout
  const grid = document.querySelector(".gallery");
  if (grid) {
    imagesLoaded(grid, function () {
      new Masonry(grid, {
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",
        percentPosition: true,
        gutter: 0
      });
    });
  }

  // Fancybox Setup — only close + next/prev arrows
  if (typeof Fancybox !== "undefined") {
    Fancybox.bind("[data-fancybox='gallery']", {
      Toolbar: {
        display: ["close"]
      },
      Carousel: {
        showNav: true,
        showScrollbar: false
      },
      Thumbs: false,
      Image: {
        zoom: false,
        click: false,
        wheel: false
      },
      Fullscreen: false,
      Slideshow: false,
      compact: false,
      animated: false,
      showClass: false,
      hideClass: false,
      closeButton: "inside"
    });
  } else {
    console.error("Fancybox is not available.");
  }
  
  
});
