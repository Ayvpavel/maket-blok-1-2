const button = document.querySelector(".gallery__show-all");
const container = document.querySelector(".swiper-wrapper");
const items = container.querySelectorAll(".swiper-slide");
const icon = document.querySelector(".gallery-icon");
let isExpanded = false;
let swiper = null;

button.addEventListener("click", function () {
  console.log("Кнопка нажата");
});

function initSwiper() {
  if (window.innerWidth <= 768 && !swiper) {
    swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else if (window.innerWidth > 900 && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

function getVisibleCount() {
  const width = window.innerWidth;
  if (width < 768) return items.length;
  if (width < 1135) return 4;
  if (width < 1437) return 6;
  return 8;
}
window.addEventListener("resize", start);

function start() {
  let count = getVisibleCount();
  console.log(count);
}

function updateVisibility() {
  if (swiper) return;
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

window.addEventListener("load", () => {
  updateVisibility();
  initSwiper();
});

window.addEventListener("resize", () => {
  updateVisibility();
});
