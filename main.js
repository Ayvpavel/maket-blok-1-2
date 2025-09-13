const button = document.querySelector(".gallery__show-all");
const container = document.querySelector(".swiper-wrapper");
const items = container.querySelectorAll(".swiper-slide");
const icon = document.querySelector(".gallery-icon");
const openFeedbackBtn = document.querySelector(".phone");
const openheaderMenuBtn = document.querySelector(".header__menu");
const oppenMessageBtn = document.querySelector(".message");
const closeBtnClose = document.querySelector(".btn-close");
const closeFeedbackBtn = document.querySelector(".close-feedback");
const callbackCloseBtn = document.querySelector(".callback__close");
const feedbackCloseBtn = document.querySelector(".feedback__close");
const feedbackMenu = document.querySelector(".feedback-menu");
const mobileMenu = document.querySelector(".mobile");
const mobileContent = document.querySelector(".content");
const callbackMenu = document.querySelector(".callback");
const mobileActiveHidden = document.querySelector(".mobile");
const asPhone = document.querySelector(".phone");
let isExpanded = false;

// button.addEventListener("click", function () {});

let swiperElement = null;

function initSwiper() {
  const swiperEl = document.querySelector(".swiper");

  if (!swiperEl) return;

  if (window.innerWidth < 768 && !swiperElement) {
    swiperElement = new Swiper(swiperEl, {
      direction: "horizontal",
      loop: true,
      speed: 300,
      slidesPerView: "auto",
      spaceBetween: 16,
      centeredSlides: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 768 && swiperElement) {
    swiperElement.destroy(true, true);
    swiperElement = null;
  }
}

function getVisibleCount() {
  const width = window.innerWidth;
  if (width < 768) return items.length;
  const containerWidth = container.offsetWidth;
  const itemsWidth = items[0].offsetWidth;
  const countItems = Math.trunc(containerWidth / (itemsWidth + 28));

  return countItems * 2;
}
window.addEventListener("resize", start);

function start() {
  getVisibleCount();
}

function updateVisibility() {
  if (swiperElement) return;
  const count = getVisibleCount();
  for (let index = 0; index < items.length; index++) {
    const item = items[index];

    if (isExpanded || index < count) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  }
  if (isExpanded) {
    button.textContent = "Скрыть";
    icon.src = "IMG2/стрел2.png";
  } else {
    button.textContent = "Показать все";
    icon.src = "IMG2/icon1.png";
  }
}

button.addEventListener("click", function () {
  isExpanded = !isExpanded;
  updateVisibility();
});

document.addEventListener("DOMContentLoaded", () => {
  updateVisibility();
  initSwiper();
});

window.addEventListener("resize", () => {
  updateVisibility();
  initSwiper();
});

oppenMessageBtn.addEventListener("click", () => {
  feedbackMenu.classList.add("active");
  mobileContent.classList.add("hidden");
  mobileMenu.classList.add("hidden");
  mobileMenu.classList.remove("active");
});

openheaderMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");

  mobileContent.classList.add("hidden");
});

// oppenMessageBtn.addEventListener("click", () => {
//   if (mobileMenu.classList.contains("active")) {
//     mobileMenu.classList.add("hidden");
//     mobileContent.classList.add("hidden");
//   }
// });

closeBtnClose.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  mobileContent.classList.remove("hidden");
});

openFeedbackBtn.addEventListener("click", () => {
  callbackMenu.classList.add("active");
  mobileContent.classList.add("hidden");
  mobileMenu.classList.add("hidden");
  mobileActiveHidden.classList.remove("active");
});

asPhone.addEventListener("click", () => {
  callbackMenu.classList.add("active");
});

callbackCloseBtn.addEventListener("click", () => {
  console.log("роиол");
  callbackMenu.classList.remove("active");
  mobileMenu.classList.remove("hidden");
  mobileContent.classList.remove("hidden");
});

feedbackCloseBtn.addEventListener("click", () => {
  console.log("ддь");
  feedbackMenu.classList.remove("active");
  mobileMenu.classList.remove("hidden");
  mobileContent.classList.remove("hidden");
});

// if (window.innerWidth < 768) {
//   // Открыть мобильное меню
//   openheaderMenuBtn.addEventListener("click", () => {
//     mobileMenu.classList.add("active");
//     mobileContent.classList.add("hidden");
//   });

//   // Если нажата кнопка обратной связи
//   openFeedbackBtn.addEventListener("click", () => {
//     mobileMenu.classList.remove("active");
//     mobileContent.classList.add("hidden");
//     feedbackMenu.classList.add("active");
//   });

//   // Если нажата кнопка "Заказать звонок"
//   oppenMessageBtn.addEventListener("click", () => {
//     mobileMenu.classList.remove("active");
//     mobileContent.classList.add("hidden");
//     callbackMenu.classList.add("active");
//   });
//   feedbackCloseBtn.addEventListener("click", () => {
//     feedbackMenu.classList.remove("active");
//     callbackMenu.classList.remove("active");
//     mobileMenu.classList.remove("active");
//     mobileContent.classList.remove("hidden");
//   });
// }
