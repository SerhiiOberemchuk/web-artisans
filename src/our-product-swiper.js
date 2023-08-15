import Swiper from 'swiper/bundle';
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.pagination',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
