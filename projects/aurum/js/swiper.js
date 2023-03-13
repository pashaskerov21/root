/*header background swiper*/
const headerBackgroundSwiper = new Swiper(".header-bg-swiper", {
    autoplay: {
    delay: 5000,
    },
    loop: true,
  });

/*header about swiper*/
const headerAboutSwiper = new Swiper(".header-about-swiper", {
  autoplay: {
  delay: 6000,
  },
  loop: true,
  pagination: {
  el: '.swiper-pagination',
  clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*service swiper*/
const serviceSwiper = new Swiper(".service-swiper", {
  autoplay: {
  delay: 5000,
  },
  slidesPerView: 1,
  spaceBetween: 10,
    breakpoints: {
      768: {slidesPerView: 2},
      992: {slidesPerView: 3},
    },
});
/*mission swiper*/
const missionSwiper = new Swiper(".mission-swiper", {
  autoplay: {
  delay: 5000,
  },
  slidesPerView: 1,
  spaceBetween: 10,
    breakpoints: {
      768: {slidesPerView: 2},
      992: {slidesPerView: 3},
    },
});
/*blog swiper*/
const blogSwiper = new Swiper(".blog-swiper", {
  autoplay: {
  delay: 5000,
  },
  slidesPerView: 1,
  spaceBetween: 10,
    breakpoints: {
      768: {slidesPerView: 2},
      1200: {slidesPerView: 3},
    },
});

/*certificate swiper*/
const certificateSwiper = new Swiper(".certificate-swiper", {
  autoplay: {
  delay: 5000,
  },
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,
    breakpoints: {
      576: {slidesPerView: 2},
      992: {slidesPerView: 3},
      1200: {slidesPerView: 4},
    },
});

/*partner swiper*/
const partnerSwiper = new Swiper(".partner-swiper", {
  autoplay: {
  delay: 5000,
  },
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,
    breakpoints: {
      576: {slidesPerView: 2},
      768: {slidesPerView: 3},
      992: {slidesPerView: 4},
      1200: {slidesPerView: 5},
    },
});

/*employee swiper*/
const employeeSwiper = new Swiper(".employee-swiper", {
  autoplay: {
  delay: 5000,
  },
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,
    breakpoints: {
      576: {slidesPerView: 2},
      992: {slidesPerView: 3},
      1200: {slidesPerView: 4},
    },
});

/*employee swiper*/
const shipVideoSwiper = new Swiper(".ship-video-swiper", {
  autoplay: {
  delay: 5000,
  },
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
  loop: true,
  spaceBetween: 10,
    breakpoints: {
      576: {slidesPerView: 2},
      992: {slidesPerView: 3},
      1200: {slidesPerView: 4},
    },
});

/*blue about swiper*/
const blueAboutSwiper = new Swiper(".blue-about-swiper", {
  autoplay: {
  delay: 5000,
  },
  loop: true,
});

/*service swiper*/
const monthSwiper = new Swiper(".month-swiper", {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 3,
  //spaceBetween: 10,
    breakpoints: {
      450: {slidesPerView: 4},
      768: {slidesPerView: 5},
    },
});