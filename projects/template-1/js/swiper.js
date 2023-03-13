const headerBackgroundSwiper = new Swiper(".header-bg-swiper", {
    autoplay: {
    delay: 5000,
    },
    loop: true,
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

const productSwiper = new Swiper(".product-swiper", {
  autoplay: {
  delay: 4000,
  },
  navigation: {
    nextEl: '.products-next-button',
    prevEl: '.products-prev-button',
  },
  slidesPerView: 1,
  breakpoints: {
    576: {slidesPerView: 2},
    992: {slidesPerView: 3},   
    1200: {slidesPerView: 4},   
  },
});

const brandSwiper = new Swiper(".brand-swiper", {
  autoplay: {
  delay: 4000,
  },
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    576: {slidesPerView: 2},
    768: {slidesPerView: 3},
    992: {slidesPerView: 4},
  },
});

const whySwiper = new Swiper(".why-swiper", {
  autoplay: {
  delay: 3000,
  },
  loop: true,
  slidesPerView: 1,
});

const teamSwiper = new Swiper(".team-swiper", {
  autoplay: {
  delay: 4000,
  },
  slidesPerView: 1,
  breakpoints: {
    768: {slidesPerView: 2},   
    1200: {slidesPerView: 3},   
  },
});


const reviewSwiper = new Swiper(".review-swiper", {
  autoplay: {
  delay: 5000,
  },
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const thinkAboutSwiper = new Swiper(".think-about-swiper", {
  autoplay: {
  delay: 7000,
  },
  slidesPerView: 1,
  breakpoints: {
    768: {slidesPerView: 2},   
    1200: {slidesPerView: 3},   
  },
});
const cardImageSwiper = new Swiper(".card-image-swiper", {
  autoplay: {
  delay: 3000,
  },
  effect: 'fade',
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.image-next-button',
    prevEl: '.image-prev-button',
  },
});
