// const sortSelect = document.getElementById('filtering__select');
// const priceRadios = document.querySelectorAll('input[name="price-range"]');
// const lowestPriceInput = document.getElementById('lowest-price');
// const highestPriceInput = document.getElementById('highest-price');
// const filteringForm = document.querySelector('.filtering');
// const submitCountEl = document.querySelector('.filtering-submit__number');
const productList = document.querySelector('.products__list');

// [기능 1] '직접 입력하기' 라디오 버튼 켜고 끄기 조절
// function updateRangeInputState() {
//   const isCustom = document.getElementById('filtering-price__unit04').checked;
//   lowestPriceInput.disabled = !isCustom;
//   highestPriceInput.disabled = !isCustom;
//   if (!isCustom) {
//     lowestPriceInput.value = '';
//     highestPriceInput.value = '';
//   }
// }

// [기능 2] 메인 엔진: 필터링 + 정렬 + 개수 세기 + 화면 배치 한방에 처리!
function applyFilter() {
  1. 현재 카테고리에서 활성화된 상품들 다 가져오기
  const currentItems = document.querySelectorAll('.products__item.active');

  // 2. 현재 체크된 라디오 버튼 정보 가져오기
  const checkedRadio = document.querySelector(
    'input[name="price-range"]:checked',
  );
  const radioValue = checkedRadio ? checkedRadio.value : '';

  let filteredCount = 0;

  // 3. 상품들 하나씩 검사하면서 보일지 숨길지 결정 (필터링)
  currentItems.forEach((item) => {
    // 상품 안의 가격 텍스트(예: "27,000원")를 숫자로 변경
    const priceText = item.querySelector('.product-price').textContent;
    const price = Number(priceText.replace(/[^0-9]/g, ''));

    // 조건 검사 통과 여부 확인
    let pass = true;
    if (radioValue === 'under-30000' && price > 30000) pass = false;
    else if (radioValue === '30000-50000' && (price < 30000 || price > 50000))
      pass = false;
    else if (radioValue === '50000-over' && price < 50000) pass = false;
    else if (radioValue === 'custom') {
      const min = Number(lowestPriceInput.value) || 0;
      const max = Number(highestPriceInput.value) || Infinity;
      if (price < min || price > max) pass = false;
    }

    // 통과했으면 보여주고 count 올리기, 탈락이면 숨기기
    if (pass) {
      item.classList.remove('is-hidden');
      filteredCount++;
    } else {
      item.classList.add('is-hidden');
    }
  });

  // 4. 필터 통과해서 화면에 살아남은 애들만 모아서 정렬하기
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

    if (sortType === 'low-price') return priceA - priceB; // 낮은 가격순
    if (sortType === 'high-price') return priceB - priceA; // 높은 가격순
    return 0;
  });

  // 5. 정렬된 순서대로 HTML에 다시 꽂아넣기 (DOM 재배치)
  visibleItems.forEach((item) => productList.appendChild(item));

  // 6. 하단 버튼에 필터링된 개수 찍어주기
  // submitCountEl.textContent = filteredCount;

  // 7. 그리드 뷰 새로고침 (가지고 계신 함수)
  // if (typeof productGridview === 'function') productGridview();
// }

// 이벤트 연결
priceRadios.forEach((radio) =>
  radio.addEventListener('change', updateRangeInputState),
);
sortSelect.addEventListener('change', applyFilter);
filteringForm.addEventListener('submit', (e) => {
  e.preventDefault();
  applyFilter();
});

// 시작할 때 라디오 상태 초기화
updateRangeInputState();
