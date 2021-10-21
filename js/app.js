const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  mousewheel: false,
  /* autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
  speed: 800,
  setWrapperSize: true,
  effect: "coverflow",

  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
   
  },
});
