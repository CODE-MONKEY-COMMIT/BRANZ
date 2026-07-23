const visualswiper = new Swiper('.detail-visual', {
  loop: true,
  navigation: {
    nextEl: '.detail-visual__button--next',
    prevEl: '.detail-visual__button--prev',
  },
});

const colorSelect = document.querySelector('#color-select');
const sizeSelect = document.querySelector('#size-select');
const optionList = document.querySelector('.detail-options__list');
const defaultPrice = document.querySelector('.detail-info__price');
const defaultPriceNum = Number(defaultPrice.textContent.replace(/[^0-9]/g, ''));
const totalPrice = document.querySelector('.payment__price');

function updateTotalPrice() {
  const items = document.querySelectorAll('.detail-options__item');
  let sum = 0;
  items.forEach((item) => {
    const quantity = Number(item.querySelector('.detail-options__input').value);
    const optionPriceBox = item.querySelector('.detail-options__price span');
    let optionPrice = defaultPriceNum * quantity;
    optionPriceBox.textContent = '';
    optionPriceBox.textContent = optionPrice.toLocaleString();
    sum += optionPrice;
  });
  totalPrice.textContent = sum.toLocaleString();
}

function addOption() {
  const color = colorSelect.value;
  const size = sizeSelect.value;
  const key = `${color} / ${size}`;

  if (!color || !size) return;

  const existing = optionList.querySelector(`[data-option="${key}"]`);
  if (existing) {
    const input = existing.querySelector('.detail-options__input');
    input.value = Number(input.value) + 1;
    updateTotalPrice();
    resetSelects();
    return;
  }

  const li = document.createElement('li');
  li.className = 'detail-options__item';
  li.dataset.option = key;
  li.innerHTML = `
      <div class="detail-options__name">${key}</div>
      <div class="detail-options__inputs">
        <button type="button" class="detail-options__button" data-type="minus">-</button>
        <input type="text" class="detail-options__input" value="1" readonly />
        <button type="button" class="detail-options__button" data-type="plus">+</button>
      </div>
      <div class="detail-options__price"><span>${defaultPrice.textContent}</span>원</div>
      <button type="button" class="detail-options__delete" aria-label="옵션 삭제">X</button>
    `;
  optionList.appendChild(li);
  updateTotalPrice();
  resetSelects();
}

function resetSelects() {
  colorSelect.value = '';
  sizeSelect.value = '';
}

colorSelect.addEventListener('change', addOption);
sizeSelect.addEventListener('change', addOption);

optionList.addEventListener('click', (e) => {
  const item = e.target.closest('.detail-options__item');
  if (!item) return;

  const deleteButton = e.target.closest('.detail-options__delete');
  if (deleteButton) {
    item.remove();
    updateTotalPrice();
    return;
  }

  const btn = e.target.closest('.detail-options__button');
  if (!btn) return;
  const quantityInput = item.querySelector('.detail-options__input');
  let quantityValue = Number(quantityInput.value);
  if (btn.dataset.type === 'minus' && quantityValue > 1) {
    quantityValue--;
  } else if (btn.dataset.type === 'plus') {
    quantityValue++;
  }
  quantityInput.value = quantityValue;
  updateTotalPrice();
});

const inquiryList = document.querySelector(
  '.detail-inquiry .detail-board__list',
);
inquiryList.addEventListener('click', (e) => {
  e.preventDefault();
  const item = e.target.closest('.detail-board__item');
  if (item) {
    const textBox = item.querySelector('.detail-board__textbox');
    textBox.classList.toggle('active');
  }
});

const frequentList = document.querySelector('.detail-frequent__list');
frequentList.addEventListener('click', (e) => {
  e.preventDefault();
  const item = e.target.closest('.detail-frequent__item');
  if (item) {
    item.classList.toggle('active');
  }
});

const detailTabItems = document.querySelectorAll('.detail-tab__item');
const detailContent = document.querySelector('.detail-content');
function tabclassUpdate(item) {
  detailTabItems.forEach((tab) => {
    tab.classList.remove('active');
  });
  item.classList.add('active');
}
function getTargetTop(target) {
  return target.getBoundingClientRect().top + window.scrollY;
}
detailTabItems.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    // tabclassUpdate(item);
    const windowWidth = window.innerWidth;
    let tabHeight = 80;
    if (windowWidth <= 1000) {
      tabHeight = 150;
    }
    const targetData = item.dataset.target;
    const target = detailContent.querySelector(targetData);
    const targetTop = getTargetTop(target);
    window.scrollTo({
      top: targetTop - tabHeight,
      behavior: 'smooth',
    });
  });
});
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  detailTabItems.forEach((item, i) => {
    const targetData = item.dataset.target;
    const target = detailContent.querySelector(targetData);

    if (!target) return;
    const targetTop = getTargetTop(target);
    const nextItem = detailTabItems[i + 1];
    if (nextItem) {
      const nextData = nextItem.dataset.target;
      const nextTarget = detailContent.querySelector(nextData);
      const nextItemTop = getTargetTop(nextTarget);

      if (nextItemTop > currentScroll && currentScroll >= targetTop - 200) {
        tabclassUpdate(item);
      }
    } else {
      if (currentScroll >= targetTop - 200) {
        tabclassUpdate(item);
      }
    }
  });
});

const reviews = [
  {
    nickname: '쥐돌이',
    stars: 4,
    img: ['review01.png', 'review02.png'],
    text: '아주 좋습니다 굿입니다 굿굿🐭',
    date: '2026-08-24',
  },
  {
    nickname: '바이럴알바생',
    stars: 5,
    img: [],
    text: '처음엔 정말 많이 고민했어요. 이 제품 괜찮을까? 믿고 입을 수 있을까... 그런데 밑져야 본전이라고 눈 딱 감고 구매했는데, 그 이후로 이틀째 눈이 잘 안떠지네요. 지금 이 리뷰도 음성인식으 로 하고 있습니다.',
    date: '2026-08-23',
  },
  {
    nickname: '헤롱이',
    stars: 1,
    img: ['review03.png'],
    text: '정말 좋아요 노란색... 굿(good)이네요. 무료 나눔 아니어서 별점 깎았어요.',
    date: '2026-08-22',
  },
];

const reviewList = document.querySelector('.detail-board__list');
function reviewUpdate() {
  reviewList.innerHTML = '';
  reviews.forEach((item, index) => {
    const maxStars = 5;
    const filledStar = item.stars;
    const emptyStar = maxStars - filledStar;
    const writeStars = '★'.repeat(filledStar) + '☆'.repeat(emptyStar);
    let imageHTML = '';
    if (item.img && item.img.length > 0) {
      imageHTML = `<div class="detail-board__image"><img src="../Images/contents/detail_product/${item.img[0]}" alt="리뷰사진" />${item.img.length > 1 ? `<span class="img-count">＋${item.img.length - 1}</span>` : ''}</div>`;
    }
    // if (item.img && item.img.length > 0) {
    //   imageHTML = `<div class="detail-board__image">`;
    //   item.img.forEach((src) => {
    //     imageHTML += `<img src="../images/contents/detail_product/${src}" alt="리뷰사진"/>`;
    //   });
    //   imageHTML += `</div>`;
    // }

    const reviewItem = document.createElement('li');
    reviewItem.className = 'detail-board__item';
    reviewItem.dataset.index = `${index}`;
    reviewItem.innerHTML = `<div class="review-star">${writeStars}</div>
                          <p class="detail-board__nickname">${item.nickname}</p>
                          <p class="detail-board__text">${item.text}</p>
                          ${imageHTML}
                          <span class="detail-board__date">${item.date}</span>`;
    reviewList.appendChild(reviewItem);
  });
}
reviewUpdate();

const reviewModal = document.querySelector('#reviewModal');
const reviewModalImg = reviewModal.querySelector('#modalImg');
const modalPrevBtn = reviewModal.querySelector('.prev-btn');
const modalNextBtn = reviewModal.querySelector('.next-btn');

let currentImgArray = [];
let currentImgIndex = 0;

reviewList.addEventListener('click', (e) => {
  const currentItem = e.target.closest('.detail-board__item');
  const currentImage = e.target.closest('.detail-board__image');
  const currentReviewIndex = currentItem.dataset.index;
  const currentReview = reviews[currentReviewIndex];

  currentImgArray = Array.from(currentReview.img);
  currentImgIndex = 0;
  if (currentImage) {
    reviewModal.style.display = 'block';
    reviewModalImg.src = `../images/contents/detail_product/${currentImgArray[0]}`;
  }
  if (currentImgArray.length <= 1) {
    modalPrevBtn.style.display = 'none';
    modalNextBtn.style.display = 'none';
  } else {
    updateButtonVisibility();
  }
});
reviewModal.addEventListener('click', (e) => {
  const currentPrev = e.target.closest('.prev-btn');
  const currentNext = e.target.closest('.next-btn');
  const reviewModalClose = e.target.closest('.review-modal__close');

  if (currentPrev && currentImgIndex > 0) {
    currentImgIndex--;
    updateButtonVisibility();
  } else if (currentNext && currentImgIndex < currentImgArray.length - 1) {
    currentImgIndex++;
    updateButtonVisibility();
  }
  reviewModalImg.src = `../images/contents/detail_product/${currentImgArray[currentImgIndex]}`;

  if (reviewModalClose || e.target === reviewModal) {
    reviewModal.style.display = 'none';
  }
});
function updateButtonVisibility() {
  if (currentImgIndex === 0) {
    modalPrevBtn.style.display = 'none';
    modalNextBtn.style.display = 'block';
  } else if (currentImgIndex === currentImgArray.length - 1) {
    modalPrevBtn.style.display = 'block';
    modalNextBtn.style.display = 'none';
  } else {
    modalPrevBtn.style.display = 'block';
    modalNextBtn.style.display = 'block';
  }
}
