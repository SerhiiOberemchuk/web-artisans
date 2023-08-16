import Swiper from 'swiper/bundle';
const productsswiper = new Swiper('.productsswiper', {
  loop: true,
  mousewheel: true,
  keyboard: true,
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

const reviewsswiper = new Swiper('.reviewsswiper', {
  loop: true,
  mousewheel: true,
  keyboard: true,
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
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
