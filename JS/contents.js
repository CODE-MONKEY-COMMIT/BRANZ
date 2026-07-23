<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BRNAZ | 21 Square Logo Top - 썸웨어버터</title>
    <link
      rel="stylesheet"
      as="style"
      crossorigin
      href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css"
    />
    <link rel="stylesheet" href="../CSS/reset.css" />
    <link rel="stylesheet" href="../CSS/common.css" />
    <link rel="stylesheet" href="../CSS/sub.css" />
    <link rel="stylesheet" href="../CSS/content.css" />
  </head>
  <body>
    <div class="wrap">
      <header id="header">
        <div class="header__mobile">
          <h1 class="header__logo">
            <a href="../index.html"
              ><img
                src="../Images/main/main_logo.png"
                alt="브랜즈 로고"
                class="main_logo"
            /></a>
          </h1>
          <button class="gnb__button">
            <img src="../Images/main/menu.png" alt="메뉴열기" />
          </button>
        </div>
        <div class="header__inner header__pc">
          <!-- <video
            src="./videos/depth_background.mp4"
            autoplay
            loop
            muted
            playsinline
            class="depth2__bg-video"
          ></video> -->
          <h1 class="header__logo">
            <a href="../index.html"
              ><img
                src="../Images/main/main_logo.png"
                alt="브랜즈 로고"
                class="main_logo"
            /></a>
          </h1>
          <div class="header-utility">
            <ul class="header-utility__list">
              <li class="header-utility__item">
                <a href="#" aria-label="마이페이지"
                  ><i class="fa-solid fa-user"></i
                ></a>
              </li>
              <li class="header-utility__item">
                <a href="#" aria-label="찜한 상품"
                  ><i class="fa-solid fa-heart"></i
                ></a>
              </li>
              <li class="header-utility__item">
                <a href="#" aria-label="장바구니"
                  ><i class="fa-solid fa-cart-shopping"></i
                ></a>
              </li>
              <li class="header-utility__item">
                <a href="#" aria-label="로그인"
                  ><i class="fa-solid fa-right-to-bracket"></i
                ></a>
              </li>
              <li class="header-utility__item header-utility__item--search">
                <button aria-label="검색">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <form class="header-utility__search">
                  <label for="search-box" aria-label="검색어 입력창"></label>
                  <input
                    type="text"
                    id="search-box"
                    placeholder="검색어를 입력하세요"
                  />
                  <input type="submit" value="검색" />
                </form>
              </li>
            </ul>
          </div>
          <nav class="gnb depth1">
            <ul class="depth1__list">
              <li class="depth1__item">
                <a href="#" class="depth1__link">BEST</a>
              </li>
              <li class="depth1__item" data-menu="women">
                <a href="#" class="depth1__link">WOMEN</a>
              </li>
              <li class="depth1__item" data-menu="men">
                <a href="#" class="depth1__link">MEN</a>
              </li>
              <li class="depth1__item" data-menu="interior">
                <a href="#" class="depth1__link">INTERIOR</a>
              </li>
            </ul>
          </nav>
          <div class="header__banner">
            <div></div>
          </div>
        </div>
      </header>
      <main id="main">
        <div class="main__wrap">
          <!-- 메인 기본 페이지 -->
          <section class="main-default" id="main-default">
            <div class="contents">
              <div class="contents__wrap">
                <div class="detail">
                  <div class="detail__top">
                    <div class="detail-visual swiper">
                      <div class="detail-visual__list swiper-wrapper">
                        <div class="detail-visual__item swiper-slide">
                          <img
                            src="../Images/contents/product01.png"
                            alt="상품 썸네일 이미지 01"
                          />
                        </div>
                        <div class="detail-visual__item swiper-slide">
                          <img
                            src="../Images/contents/product12.png"
                            alt="상품 썸네일 이미지 02"
                          />
                        </div>
                        <div class="detail-visual__item swiper-slide">
                          <img
                            src="../Images/contents/product13.png"
                            alt="상품 썸네일 이미지 03"
                          />
                        </div>
                      </div>
                      <div class="detail-visual__buttons">
                        <button
                          class="detail-visual__button detail-visual__button--prev"
                          aria-label="이전 보기"
                        >
                          <i class="fa-solid fa-angle-left"></i>
                        </button>
                        <button
                          class="detail-visual__button detail-visual__button--next"
                          aria-label="다음 보기"
                        >
                          <i class="fa-solid fa-angle-right"></i>
                        </button>
                      </div>
                    </div>
                    <div class="detail-info">
                      <div class="detail-info__top">
                        <div class="detail-info__header">
                          <a href="#" class="detail-info__brand">썸웨어버터</a>
                          <h1 class="detail-info__title">21 Square Logo Top</h1>
                          <div class="detail-info__price-box">
                            <span class="detail-info__discount">29%</span>
                            <span class="detail-info__price">27,690원</span>
                          </div>
                        </div>
                        <div class="detail-options">
                          <div class="detail-options__row">
                            <label for="color-select">COLOR</label>
                            <div class="detail-options__select">
                              <select id="color-select">
                                <option value="">색상을 선택하세요</option>
                                <option value="yellow">Yellow</option>
                                <option value="white">White</option>
                              </select>
                            </div>
                          </div>
                          <div class="detail-options__row">
                            <label for="size-select">SIZE</label>
                            <div class="detail-options__select">
                              <select id="size-select">
                                <option value="">사이즈를 선택하세요</option>
                                <option value="S">S (90)</option>
                                <option value="M">M (95)</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="detail-info__middle">
                        <ul class="detail-options__list"></ul>
                      </div>
                      <div class="detail-info__bottom">
                        <div class="payment">
                          <span class="payment__label">총 상품 금액</span>
                          <span
                            ><strong class="payment__price">27,690</strong
                            >원</span
                          >
                        </div>
                        <div class="payment__buttons">
                          <button
                            type="button"
                            class="payment__button payment__button--cart"
                          >
                            장바구니
                          </button>
                          <button
                            type="button"
                            class="payment__button payment__button--now"
                          >
                            바로 구매하기
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="detail__bottom">
                    <div class="detail-tab">
                      <ul class="detail-tab__list">
                        <li
                          class="detail-tab__item active"
                          data-target=".detail-product"
                        >
                          상품 소개
                        </li>
                        <li
                          class="detail-tab__item"
                          data-target=".detail-review"
                        >
                          리뷰
                        </li>
                        <li
                          class="detail-tab__item"
                          data-target=".detail-inquiry"
                        >
                          Q&A
                        </li>
                      </ul>
                    </div>
                    <div class="detail-content">
                      <div class="detail-product">
                        <h3 class="detail-product__title">상품 상세 정보</h3>
                        <div class="detail-product__info">
                          <ul class="detail-product__spec">
                            <li class="detail-product__spec-item">
                              <span class="detail-product__spec-title"
                                >성별</span
                              >
                              <span class="detail-product__spec-text">여</span>
                            </li>
                            <li class="detail-product__spec-item">
                              <span class="detail-product__spec-title"
                                >시즌</span
                              >
                              <span class="detail-product__spec-text"
                                >여름</span
                              >
                            </li>
                          </ul>
                          <div class="detail-product__images">
                            <img
                              src="../Images/contents/detail_product/01.jpg"
                              alt="제품 상세 이미지"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="detail-review board_template">
                        <h3 class="detail-product__title">리뷰</h3>
                        <ul class="detail-board__list"></ul>
                        <div class="detail-pagination">
                          <ol class="detail-pagination__list">
                            <li
                              class="detail-pagination__item arrow-btn"
                              aria-label="이전보기"
                            >
                              <button class="detail-pagination__link">
                                <i class="fa-solid fa-angles-left"></i>
                              </button>
                            </li>
                            <li class="detail-pagination__item active">
                              <a href="#" class="detail-pagination__link">1</a>
                            </li>
                            <li class="detail-pagination__item">
                              <a href="#" class="detail-pagination__link">2</a>
                            </li>
                            <li class="detail-pagination__item">
                              <a href="#" class="detail-pagination__link">3</a>
                            </li>
                            <li
                              class="detail-pagination__item arrow-btn"
                              aria-label="다음보기"
                            >
                              <button class="detail-pagination__link">
                                <i class="fa-solid fa-angles-right"></i>
                              </button>
                            </li>
                          </ol>
                        </div>
                      </div>
                      <div class="detail-inquiry board_template">
                        <h3 class="detail-product__title">Q&A</h3>
                        <ul class="detail-board__list">
                          <li class="detail-board__item">
                            <a href="#" class="detail-board__link">
                              <div class="detail-board__title">
                                <span class="answer-status none">미답변</span
                                >반품 문의
                              </div>
                              <div class="detail-board__textbox">
                                <div class="detail-board__customer">
                                  <p class="detail-board__nickname">헤롱이</p>
                                  <p class="detail-board__text">반품합니다.</p>
                                  <span class="detail-board__date"
                                    >2026-08-24</span
                                  >
                                </div>
                              </div>
                            </a>
                          </li>
                          <li class="detail-board__item">
                            <a href="#" class="detail-board__link">
                              <div class="detail-board__title">
                                <span class="answer-status complete"
                                  >답변 완료</span
                                >무료 기부 문의
                              </div>
                              <div class="detail-board__textbox">
                                <div class="detail-board__customer">
                                  <p class="detail-board__nickname">헤롱이</p>
                                  <p class="detail-board__text">
                                    옷 좀 무료로 나눔 받을 수 있을가여
                                  </p>
                                  <span class="detail-board__date"
                                    >2026-08-17</span
                                  >
                                </div>
                                <div class="detail-board__seller">
                                  <span class="detail-board__nickname"
                                    >판매자</span
                                  >
                                  <p class="detail-board__text">
                                    고객님, 죄송하지만 어려울 것 같습니다.
                                  </p>
                                  <span class="detail-board__date"
                                    >2026-08-18</span
                                  >
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                        <div class="detail-pagination">
                          <ol class="detail-pagination__list">
                            <li
                              class="detail-pagination__item arrow-btn"
                              aria-label="이전보기"
                            >
                              <button class="detail-pagination__link">
                                <i class="fa-solid fa-angles-left"></i>
                              </button>
                            </li>
                            <li class="detail-pagination__item active">
                              <a href="#" class="detail-pagination__link">1</a>
                            </li>
                            <li class="detail-pagination__item">
                              <a href="#" class="detail-pagination__link">2</a>
                            </li>
                            <li class="detail-pagination__item">
                              <a href="#" class="detail-pagination__link">3</a>
                            </li>
                            <li
                              class="detail-pagination__item arrow-btn"
                              aria-label="다음보기"
                            >
                              <button class="detail-pagination__link">
                                <i class="fa-solid fa-angles-right"></i>
                              </button>
                            </li>
                          </ol>
                        </div>
                      </div>
                      <div class="detail-frequent">
                        <ul class="detail-frequent__list">
                          <li class="detail-frequent__item">
                            <div class="detail-frequent__title">배송 안내</div>
                            <div class="detail-frequent__text">
                              주문을 받은 후 배송됩니다. 주문 전에는 배송되지
                              않으니 참고 부탁드립니다.
                              <br />예상 도착 시간 00:00~24:00
                            </div>
                          </li>
                          <li class="detail-frequent__item">
                            <div class="detail-frequent__title">
                              교환 및 반품 안내
                            </div>
                            <div class="detail-frequent__text">
                              교환이나 반품을 원하실 경우 교환이나 반품이
                              진행됩니다.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer id="footer">
              <div class="footer__inner">
                <img
                  src="../Images/main/footer_logo.png"
                  alt="브랜즈 로고"
                  class="footer__logo"
                />
                <div class="footer__content">
                  <p class="footer__address">
                    (06579) 서울특별시 잘하구 잘하기로 777(카츠동)<br />
                    대표전화 02-1004-1004 (운영시간: 09:00~18:00, 공휴일 제외)
                  </p>
                  <div class="footer__link">
                    <a href="#">개인정보처리방침</a>
                    <a href="#">저작권정책</a>
                  </div>
                </div>
              </div>
            </footer>
          </section>
          <!-- 2차 메뉴 -->
          <section class="main-category" id="main-category">
            <div class="depth2" data-menu="women">
              <ul class="depth2__list">
                <li class="depth2__item">
                  <a href="./sub.html" class="depth2__link">
                    <div class="depth2__image">
                      <img src="../Images/main/woman01.webp" alt="" />
                    </div>
                    <div class="depth2__text">의류</div></a
                  >
                </li>
                <li class="depth2__item">
                  <a href="./sub.html" class="depth2__link">
                    <div class="depth2__image">
                      <img src="../Images/main/woman02.webp" alt="" />
                    </div>
                    <div class="depth2__text">가방</div></a
                  >
                </li>
                <li class="depth2__item">
                  <a href="./sub.html" class="depth2__link">
                    <div class="depth2__image">
                      <img src="../Images/main/woman03.webp" alt="" />
                    </div>
                    <div class="depth2__text">신발</div></a
                  >
                </li>
                <li class="depth2__item">
                  <a href="./sub.html" class="depth2__link">
                    <div class="depth2__image">
                      <img src="../Images/main/woman04.webp" alt="" />
                    </div>
                    <div class="depth2__text">액세서리</div></a
                  >
                </li>
                <li class="depth2__item">
                  <a href="./sub.html" class="depth2__link">
                    <div class="depth2__image">
                      <img src="../Images/main/woman05.webp" alt="" />
                    </div>
                    <div class="depth2__text">주얼리</div></a
                  >
                </li>
                <li class="depth2__item">
                  <button class="depth2__link depth2__close" aria-label="닫기">
                    <span class="depth2__close--icon">X</span>
                    <span class="depth2__close--text">close</span>
                  </button>
                </li>
              </ul>
            </div>
            <div class="depth2" data-menu="men">
              <ul class="depth2__list">
                <li class="depth2__item">
                  <a href="./sub.html" class="depth2__link">
                    <div class="depth2__image">
                      <img src="../Images/main/man01.webp" alt="" />
                    </div>
                    <div class="depth2__text">의류</div></a
                  >
                </li>
                <li class="depth2__item">
                  <a href="./sub.html" class="depth2__link">
                    <div class="depth2__image">
                      <img src="../Images/main/man02.webp" alt="" />
                    </div>
                    <div class="depth2__text">가방</div></a
                  >
                </li>
                <li class="depth2__item">
                  <a href="./sub.html" class="depth2__link">
                    <div class="depth2__image">
                      <img src="../Images/main/man03.webp" alt="" />
                    </div>
                    <div class="depth2__text">신발</div></a
                  >
                </li>
                <li class="depth2__item">
                  <a href="./sub.html" class="depth2__link">
                    <div class="depth2__image">
                      <img src="../Images/main/man04.webp" alt="" />
                    </div>
                    <div class="depth2__text">액세서리</div></a
                  >
                </li>
                <li class="depth2__item">
                  <a href="./sub.html" class="depth2__link">
                    <div class="depth2__image">
                      <img src="../Images/main/man05.webp" alt="" />
                    </div>
                    <div class="depth2__text">주얼리</div></a
                  >
                </li>
                <li class="depth2__item">
                  <button class="depth2__link depth2__close" aria-label="닫기">
                    <span class="depth2__close--icon">X</span>
                    <span class="depth2__close--text">close</span>
                  </button>
                </li>
              </ul>
            </div>
            <div class="depth2" data-menu="interior">
              <ul class="depth2__list">
                <li class="depth2__item">
                  <a href="./sub.html" class="depth2__link">
                    <div class="depth2__image">
                      <img src="../Images/main/interior01.webp" alt="" />
                    </div>
                    <div class="depth2__text">해외브랜드</div></a
                  >
                </li>
                <li class="depth2__item">
                  <a href="./sub.html" class="depth2__link">
                    <div class="depth2__image">
                      <img src="../Images/main/interior02.webp" alt="" />
                    </div>
                    <div class="depth2__text">침구</div></a
                  >
                </li>
                <li class="depth2__item">
                  <a href="./sub.html" class="depth2__link">
                    <div class="depth2__image">
                      <img src="../Images/main/interior03.webp" alt="" />
                    </div>
                    <div class="depth2__text">홈패브릭</div></a
                  >
                </li>
                <li class="depth2__item">
                  <a href="./sub.html" class="depth2__link">
                    <div class="depth2__image">
                      <img src="../Images/main/interior04.webp" alt="" />
                    </div>
                    <div class="depth2__text">가구</div></a
                  >
                </li>
                <li class="depth2__item">
                  <a href="./sub.html" class="depth2__link">
                    <div class="depth2__image">
                      <img src="../Images/main/interior05.webp" alt="" />
                    </div>
                    <div class="depth2__text">조명</div></a
                  >
                </li>
                <li class="depth2__item">
                  <a href="./sub.html" class="depth2__link">
                    <div class="depth2__image">
                      <img src="../Images/main/interior06.webp" alt="" />
                    </div>
                    <div class="depth2__text">홈데코</div></a
                  >
                </li>
                <li class="depth2__item">
                  <a href="./sub.html" class="depth2__link">
                    <div class="depth2__image">
                      <img src="../Images/main/interior07.webp" alt="" />
                    </div>
                    <div class="depth2__text">스테이셔너리</div></a
                  >
                </li>
                <li class="depth2__item">
                  <button class="depth2__link depth2__close" aria-label="닫기">
                    <span class="depth2__close--icon">X</span>
                    <span class="depth2__close--text">close</span>
                  </button>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
    <div class="review-modal" id="reviewModal">
      <button type="button" class="modal-btn prev-btn" aria-label="이전보기">
        ‹
      </button>
      <img
        class="review-modal__content"
        id="modalImg"
        src=""
        alt="리뷰 이미지"
      />
      <button type="button" class="modal-btn next-btn" aria-label="다음보기">
        ›
      </button>
      <button class="review-modal__close" aria-label="창 닫기">X</button>
    </div>
  </body>
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>
  <script src="../JS/common.js"></script>
  <script src="../JS/contents.js"></script>
</html>
