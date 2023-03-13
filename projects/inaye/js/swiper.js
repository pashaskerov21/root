const swiper1 = new Swiper(".footer-swiper", {
    slidesPerView: 1,
    autoplay: {
    delay: 3000,
    },
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      380:{
        slidesPerView: 2,
        spaceBetween: 10,
      },
      540: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  });

  const swiper2 = new Swiper(".main-swiper-1", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {delay: 6000,},
    navigation: {nextEl: ".swiper-button-next",prevEl: ".swiper-button-prev",},
    pagination: {el: ".swiper-pagination",clickable: true,},
  });

  const swiper3 = new Swiper(".fealiyyet-swiper", {
    slidesPerView: 1,
    autoplay: {delay: 3000,},
    spaceBetween: 10,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {slidesPerView: 2,spaceBetween: 40,},
      992: {slidesPerView: 3,spaceBetween: 40,},
      1140: {slidesPerView: 4,spaceBetween: 50,},
    },
  });
  const swiper4 = new Swiper(".aksiya-swiper", {
    slidesPerView: 1,
    autoplay: {delay: 3000,},
    spaceBetween: 10,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {slidesPerView: 2,spaceBetween: 40,},
      992: {slidesPerView: 3,spaceBetween: 40,},
      1140: {slidesPerView: 4,spaceBetween: 50,},
    },
  });

  const swiper5 = new Swiper(".layihe-swiper", {
    slidesPerView: 1,
    autoplay: {delay: 3000,},
    spaceBetween: 10,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {slidesPerView: 2,spaceBetween: 40,},
      992: {slidesPerView: 3,spaceBetween: 40,},
      1140: {slidesPerView: 4,spaceBetween: 50,},
    },
  });