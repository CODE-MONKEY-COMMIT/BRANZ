//키워드 필터링
const tagItems = document.querySelectorAll('.contents-tag__item');
const taglinks = document.querySelectorAll('.contents-tag__link');
const productItems = document.querySelectorAll('.products__item');

window.addEventListener('load', () => {
  productItems.forEach((item) => {
    item.classList.add('active');
  });
});

taglinks.forEach((tag) => {
  tag.addEventListener('click', (e) => {
    e.preventDefault();
    const tagParent = tag.closest('.contents-tag__item');
    const tagData = tagParent.dataset.category;

    if (tagParent.classList.contains('active')) return;

    tagItems.forEach((item) => {
      item.classList.remove('active');
    });
    tagParent.classList.add('active');

    productItems.forEach((item) => {
      item.classList.remove('active');
    });
    const relatedProduct = document.querySelectorAll(
      `.products__item[data-category="${tagData}"]`,
    );
    if (relatedProduct) {
      relatedProduct.forEach((product) => {
        product.classList.add('active');
      });
      if (tagData === 'all') {
        productItems.forEach((item) => {
          item.classList.add('active');
        });
      }
    }
    resetFilter();
    productGridview();
    filteringWrap.classList.remove('active');
  });
});

// 상품 그리드
function productGridview() {
  const productList = document.querySelector('.products__list');
  const productItems = document.querySelectorAll(
    '.products__item.active:not(.is-hidden)',
  );

  if (!productList || productItems.length === 0) return;

  const gap = 20;
  const listWidth = productList.offsetWidth;
  const itemWidth = productItems[0].offsetWidth;
  const colCount = Math.floor((listWidth + gap) / (itemWidth + gap));
  const colHeights = Array(colCount).fill(0);

  productItems.forEach((item) => {
    const minHeight = Math.min(...colHeights);
    const colIndex = colHeights.indexOf(minHeight);
    const leftPosition = colIndex * (itemWidth + gap);

    item.style.left = leftPosition + 'px';
    item.style.top = minHeight + 'px';
    colHeights[colIndex] += item.offsetHeight + gap;
  });

  productList.style.height = Math.max(...colHeights) + 'px';
}

window.addEventListener('load', productGridview);
window.addEventListener('resize', productGridview);

//가격 설정
const sortSelect = document.getElementById('filtering__select');
const filteringForm = document.querySelector('.filtering');
const radios = document.querySelectorAll('.filtering-price__radio');
const lowestPriceInput = document.getElementById('lowest-price');
const highestPriceInput = document.getElementById('highest-price');
const submitCount = document.querySelector('.filtering-submit__number');
const productList = document.querySelector('.products__list');
const producItems = document.querySelectorAll('.products__item');
const originalProducts = Array.from(
  document.querySelectorAll('.products__item'),
);

//가격 입력창 활성 유무
radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    const isCustom = document.getElementById('filtering-price__unit04').checked;
    lowestPriceInput.disabled = !isCustom;
    highestPriceInput.disabled = !isCustom;
    if (!isCustom) {
      lowestPriceInput.value = '';
      highestPriceInput.value = '';
    }
    updateFilteredCount();
  });
});

[lowestPriceInput, highestPriceInput].forEach((input) => {
  input.addEventListener('input', () => {
    updateFilteredCount();
  });
});

function isPassed(item) {
  const checkedRadio = document.querySelector(
    '.filtering-price__radio:checked',
  );
  const checkedRadioValue = checkedRadio ? checkedRadio.value : '';
  const itemPrice = item.querySelector('.product-price').textContent;
  const price = Number(itemPrice.replace(/[^0-9]/g, ''));

  if (checkedRadioValue === 'under-30000' && price > 30000) return false;
  else if (
    checkedRadioValue === '30000-50000' &&
    (price < 30000 || price > 50000)
  )
    return false;
  else if (checkedRadioValue === '50000-over' && price < 50000) return false;
  else if (checkedRadioValue === 'custom') {
    const min = Number(lowestPriceInput.value) || 0;
    const max = Number(highestPriceInput.value) || Infinity;
    if (price < min || price > max) return false;
  }
  return true;
}

function updateFilteredCount() {
  const currentItems = document.querySelectorAll('.products__item.active');
  let filteredCount = 0;

  currentItems.forEach((item) => {
    if (isPassed(item)) {
      filteredCount++;
    }
  });
  submitCount.textContent = filteredCount + '개의';
}

function applyFilter() {
  const currentItems = document.querySelectorAll('.products__item.active');
  currentItems.forEach((item) => {
    if (isPassed(item)) {
      item.classList.remove('is-hidden');
    } else {
      item.classList.add('is-hidden');
    }
  });
}

function sortArray() {
  const visibleItems = Array.from(
    document.querySelectorAll('.products__item.active:not(.is-hidden)'),
  );
  const sortType = sortSelect.value;

  visibleItems.sort((a, b) => {
    const priceA = Number(
      a.querySelector('.product-price').textContent.replace(/[^0-9]/g, ''),
    );
    const priceB = Number(
      b.querySelector('.product-price').textContent.replace(/[^0-9]/g, ''),
    );
    if (sortType === 'low-price') return priceA - priceB;
    if (sortType === 'high-price') return priceB - priceA;
    return 0;
  });

  visibleItems.forEach((item) => {
    productList.appendChild(item);
  });
  productGridview();
}
sortSelect.addEventListener('change', sortArray);
filteringForm.addEventListener('submit', (e) => {
  e.preventDefault();
  applyFilter();
  productGridview();
});

function resetFilter() {
  radios.forEach((radio) => {
    radio.checked = false;
  });
  lowestPriceInput.value = '';
  highestPriceInput.value = '';
  lowestPriceInput.disabled = true;
  highestPriceInput.disabled = true;

  sortSelect.selectedIndex = 0;
  originalProducts.forEach((item) => {
    productList.appendChild(item);
  });
  producItems.forEach((item) => {
    item.classList.remove('is-hidden');
  });

  submitCount.textContent = '';
}

const filteringButton = document.querySelector('.price-setting');
const filteringWrap = document.querySelector('.filtering-price__wrap');
const filteringSubmit = document.querySelector('.filtering-submit');
filteringButton.addEventListener('click', () => {
  filteringWrap.classList.toggle('active');
});
filteringSubmit.addEventListener('click', () => {
  filteringWrap.classList.remove('active');
});
