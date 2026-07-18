// 배너 스와이퍼
const bannerSwiper = new Swiper('.banner.swiper', {
  autoplay: true,
  loop: true,

  navigation: {
    nextEl: '.banner_button--next',
    prevEl: '.banner_button--prev',
  },

  scrollbar: {
    el: '.banner_scrollbar',
  },
});

// 큐레이션 클릭
const curationSummary = document.querySelectorAll('.curation__summary');

curationSummary.forEach((curationclicker) => {
  curationclicker.addEventListener('click', () => {
    const curationItem = curationclicker.closest('.curation__item');
    const curaationProduct = curationItem.querySelector('.curation__product');
    curationclicker.classList.toggle('active');
    curaationProduct.classList.toggle('active');
  });
});

// 큐레이션 스와이퍼
const curationProducts = document.querySelectorAll('.curation__product');

curationProducts.forEach((el) => {
  new Swiper(el, {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 30,

    navigation: {
      prevEl: el.querySelector('.curation_arrow--prev'),
      nextEl: el.querySelector('.curation_arrow--next'),
    },

    breakpoints: {
      360: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 4,
      },
      800: {
        slidesPerView: 5,
      },
      1000: {
        slidesPerView: 6,
      },
    },
  });
});
