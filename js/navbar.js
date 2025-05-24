document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.getElementById('customNavbarToggler');
  const nav = document.getElementById('navbarNav');

  toggler.addEventListener('click', function () {
    nav.classList.toggle('collapse');
  });
});

//! Testimonial

// JavaScript for carousel navigation
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial-card");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentIndex = 2; // Start with the third card (Miles Dawson) as active to match the image

  function updateCarousel() {
    testimonials.forEach((card, index) => {
      card.classList.remove("active", "prev", "next");
      if (index === currentIndex) {
        card.classList.add("active");
      } else if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) {
        card.classList.add("prev");
      } else if (index === (currentIndex + 1) % testimonials.length) {
        card.classList.add("next");
      }
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateCarousel();
  });

  // Initialize carousel
  updateCarousel();
});