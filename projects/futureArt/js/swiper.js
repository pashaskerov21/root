const bannerSwiper = new Swiper(".banner-swiper", {
    autoplay: {
    delay: 5000,
    },
    loop: true,
});


const projectSwiper = new Swiper(".project-swiper", {
    autoplay: {
    delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      },
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
        576: {slidesPerView: 2},
        992: {slidesPerView: 3},
        //1400: {spaceBetween: 30,},
    },
  });

  const videoSwiper = new Swiper(".video-swiper", {
    autoplay: {
    delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      },
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
        576: {slidesPerView: 2},
        992: {slidesPerView: 3},
        //1400: {spaceBetween: 30,},
    },
  });

  const commentSwiper = new Swiper(".comment-swiper", {
    autoplay: {
    delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      },
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
        992: {slidesPerView: 2},
        //1400: {spaceBetween: 30,},
    },
  });




  const contactImageSwiper = new Swiper(".contact-image-swiper", {
    autoplay: {
    delay: 5000,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});