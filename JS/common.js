// 2차메뉴 오픈
const header = document.querySelector('header');
const mainCategory = document.querySelector('.main-category');
const menuItems = document.querySelectorAll('.depth1__link');
const depth2Menu = document.querySelectorAll('.depth2');

menuItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    item.classList.add('active');
    const itemParent = item.closest('.depth1__item');
    const targetMenu = itemParent.dataset.menu;
    menuItems.forEach((item) => item.classList.remove('active'));
    depth2Menu.forEach((menu) => menu.classList.remove('active'));

    if (!targetMenu) return;
    const targetDepth2 = document.querySelector(
      `.depth2[data-menu="${targetMenu}"]`,
    );

    if (targetDepth2) {
      mainCategory.classList.add('active');
      targetDepth2.classList.add('active');
      item.classList.add('active');
    }
    document.body.classList.add('menu_opened');
  });
});
// 메뉴닫기
const closeMenuButtons = document.querySelectorAll('.depth2__close');
closeMenuButtons.forEach((button) => {
  button.addEventListener('click', () => {
    mainCategory.classList.remove('active');
    menuItems.forEach((item) => item.classList.remove('active'));
    depth2Menu.forEach((menu) => menu.classList.remove('active'));
    document.body.classList.remove('menu_opened');
  });
});

//모바일 메뉴 열기
const mobileHeader = document.querySelector('.header__mobile');
const mobileMenuOpen = document.querySelector('.header__mobile .gnb__button');
const headerDesktop = document.querySelector('.header__pc');
mobileMenuOpen.addEventListener('click', () => {
  headerDesktop.classList.toggle('active');
  document.body.classList.toggle('menu_opened');
});

const searchButton = document.querySelector(
  '.header-utility__item--search button',
);
const searchBox = document.querySelector('.header-utility__search');
searchButton.addEventListener('click', () => {
  searchBox.classList.toggle('active');
});

let writeTop = 0;
window.addEventListener('scroll', (e) => {
  const scrollTop = window.scrollY;
  if (scrollTop > writeTop) {
    document.body.classList.add('mobile-hide');
  } else if (scrollTop < writeTop) {
    document.body.classList.remove('mobile-hide');
  }
  writeTop = scrollTop;
});
