const swiper1 = new Swiper(".main-swiper", {
    autoplay: {
    delay: 5000,
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

const swiper2 = new Swiper(".child-age-swiper", {
    autoplay: {
    delay: 4000,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      360: {slidesPerView: 2,spaceBetween: 10},
      540: {slidesPerView: 3,spaceBetween: 10},
      768: {slidesPerView: 4,spaceBetween: 10},
      992: {slidesPerView: 5,spaceBetween: 10},
      1200: {slidesPerView: 6,spaceBetween: 10},
      1300: {slidesPerView: 7,spaceBetween: 10},
      },
  });
  
  const swiper3 = new Swiper(".new-products-swiper", {
    autoplay: {
    delay: 9000,
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

  const swiper4 = new Swiper(".kampaniya-products-swiper", {
    autoplay: {
    delay: 5000,
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
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      768: {slidesPerView: 2,spaceBetween: 10},
      992: {slidesPerView: 3,spaceBetween: 10},
      },
  });

  const swiper5 = new Swiper(".brands-swiper", {
    autoplay: {
    delay: 5000,
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      540: {slidesPerView: 2,spaceBetween: 10},
      768: {slidesPerView: 3,spaceBetween: 10},
      992: {slidesPerView: 4,spaceBetween: 10},
      1200: {slidesPerView: 5,spaceBetween: 10},
      },
  });
  const swiper6 = new Swiper(".insta-image-swiper", {
    autoplay: {
    delay: 5000,
    },
    loop: true,
    slidesPerView: 1,
    
    breakpoints: {
      540: {slidesPerView: 2},
      768: {slidesPerView: 3},
      992: {slidesPerView: 4},
      1200: {slidesPerView: 5},
      },
  });

  const swiper7 = new Swiper(".recommended-products-swiper", {
    autoplay: {
    delay: 9000,
    },
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
  });

  const swiper8 = new Swiper(".image-sm-swiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiper9 = new Swiper(".image-lg-swiper", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper8,
    },
  });