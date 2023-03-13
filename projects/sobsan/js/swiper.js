
const swiper1 = new Swiper(".main-swiper-1", {
    autoplay: {
    delay: 3000,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

const swiper2 = new Swiper(".main-swiper-2", {
    autoplay: {
    delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

const swiper3 = new Swiper(".popular-products-swiper", {
    autoplay: {
    delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {slidesPerView: 2,spaceBetween: 10},
      992: {slidesPerView: 3,spaceBetween: 10},
      1200: {slidesPerView: 4,spaceBetween: 10},
      },
  });

const swiper5 = new Swiper(".news-swiper", {
    autoplay: {
    delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {slidesPerView: 2,spaceBetween: 10},
      992: {slidesPerView: 3,spaceBetween: 10},
      },
  });

const swiper6 = new Swiper(".video-swiper", {
    autoplay: {
    delay: 5000,
    },
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {slidesPerView: 2,spaceBetween: 10},
      992: {slidesPerView: 3,spaceBetween: 10},
      1400: {slidesPerView: 4,spaceBetween: 10},
      
      },
  });

const swiper7 = new Swiper(".partners-swiper", {
    autoplay: {
    delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {slidesPerView: 2,spaceBetween: 10},
      992: {slidesPerView: 3,spaceBetween: 10},
      },
  });

  const swiper8 = new Swiper(".masters-main-swiper", {
    autoplay: {
    delay: 3000,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const swiper9 = new Swiper(".masters-category-swiper", {
    autoplay: {
    delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {slidesPerView: 2,spaceBetween: 10},
      1200: {slidesPerView: 3,spaceBetween: 10},
      },
  });
  const swiper10 = new Swiper(".masters-gallery-swiper-1", {
    autoplay: {
    delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {slidesPerView: 2,spaceBetween: 10},
      1200: {slidesPerView: 3,spaceBetween: 10},
      },
  });
  const swiper11 = new Swiper(".masters-gallery-swiper-2", {
    autoplay: {
    delay: 5000,
    },
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {slidesPerView: 2,spaceBetween: 10},
      1200: {slidesPerView: 3,spaceBetween: 10},
      },
  });