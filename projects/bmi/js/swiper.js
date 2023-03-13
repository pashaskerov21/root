const bannerSwiper = new Swiper(".banner-swiper", {
    autoplay: {
    delay: 5000,
    },
    loop: true,
});
const generalTrainingSwiper = new Swiper(".general-trainings-swiper", {
    spaceBetween: 10,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
});
const altTrainingSwiper = new Swiper(".alt-trainings-swiper", {
    autoplay: {
    delay: 4000,
    },
    spaceBetween: 10,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  });


  const trainerSwiper = new Swiper(".trainers-swiper", {
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
  });

  const newsSwiper = new Swiper(".news-swiper", {
    autoplay: {
    delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      768: {slidesPerView: 2,spaceBetween: 20},
      992: {slidesPerView: 3,spaceBetween: 20},
      },
  });

  const clientSwiper = new Swiper(".clients-swiper", {
    autoplay: {
    delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      380: {slidesPerView: 2,spaceBetween: 20},
      576: {slidesPerView: 3,spaceBetween: 20},
      768: {slidesPerView: 4,spaceBetween: 20},
      992: {slidesPerView: 6,spaceBetween: 20},
      },
  });

  const swiper8 = new Swiper(".partners-swiper", {
    autoplay: {
    delay: 5000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      380: {slidesPerView: 2,spaceBetween: 20},
      576: {slidesPerView: 4,spaceBetween: 20},
      768: {slidesPerView: 6,spaceBetween: 20},
      992: {slidesPerView: 8,spaceBetween: 20},
      },
  });

  const tedbirGallerySwiper = new Swiper(".tedbir-gallery-swiper", {
    autoplay: {
    delay: 5000,
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      576: {slidesPerView: 2,spaceBetween: 10},
      768: {slidesPerView: 3,spaceBetween: 10},
      992: {slidesPerView: 4,spaceBetween: 10},
      1200: {slidesPerView: 5,spaceBetween: 10},
      },
  });

  const digerTedbirlerSwiper = new Swiper(".diger-tedbirler-swiper", {
    autoplay: {
    delay: 5000,
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      768: {slidesPerView: 2,spaceBetween: 10},
      992: {slidesPerView: 3,spaceBetween: 10},
      },
  });




  const trainingGallerySwiper = new Swiper(".training-gallery-swiper", {
    autoplay: {
    delay: 5000,
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      576: {slidesPerView: 2,spaceBetween: 10},
      768: {slidesPerView: 3,spaceBetween: 10},
      992: {slidesPerView: 4,spaceBetween: 10},
      1200: {slidesPerView: 5,spaceBetween: 10},
      },
  });

  const othertrainingSwiper = new Swiper(".other-training-swiper", {
    autoplay: {
    delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      576: {slidesPerView: 2,spaceBetween: 10},
      768: {slidesPerView: 3,spaceBetween: 10},
      1200: {slidesPerView: 4,spaceBetween: 10},
      1400: {slidesPerView: 5,spaceBetween: 10},
      },
  });