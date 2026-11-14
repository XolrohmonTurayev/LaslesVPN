const swiper = new Swiper(".testimonials-swiper", {
  pagination: {
    el: ".testimonials-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testimonials-swiper-navigation-button-next",
    prevEl: ".testimonials-swiper-navigation-button-prev",
  },
  loop: true,
  slidesPerView: 2,
  spaceBetween: 40,
  watchSlidesProgress: true,
});
