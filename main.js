if (window.innerWidth <= 900) {
  const swiper = new Swiper('.brands-slider', {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
}