const bannerSwiper = new Swiper(".banner-swiper", {
    autoplay: {
    delay: 5000,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const trainerSwiper = new Swiper(".product-swiper", {
    autoplay: {
    delay: 8000,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      576: {slidesPerView: 2,spaceBetween: 20},
      768: {slidesPerView: 3,spaceBetween: 20},
      992: {slidesPerView: 4,spaceBetween: 20},
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });