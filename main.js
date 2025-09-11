const button = document.querySelector(".gallery__show-all");
const container = document.querySelector(".swiper-wrapper");
const items = container.querySelectorAll(".swiper-slide");
const icon = document.querySelector(".gallery-icon");
const openFeedbackBtn = document.querySelector(".phone");
const closeFeedbackBtn = document.querySelector(".close-feedback");
const feedbackMenu = document.querySelector(".feedback-menu");
const openheaderMenuBtn = document.querySelector(".header__menu");
const closeBtnClose = document.querySelector(".btn-close");
const mobileMenu = document.querySelector(".mobile");
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
  const countItems = Math.trunc(containerWidth / (itemsWidth + 25));

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

openFeedbackBtn.addEventListener("click", () => {
  console.log("click");
  feedbackMenu.classList.add("active");
});
console.log(openFeedbackBtn);

openheaderMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeBtnClose.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
