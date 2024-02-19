// Menu icon
let iconMenu = document.getElementById("openmenu");
let menu = document.querySelector(".menu");

iconMenu.onclick = () => {
  iconMenu.classList.toggle("fa-times");
  menu.classList.toggle("active");
};

// Header on  Scroll
let header = document.querySelector("header");
window.onscroll = function () {
  if (this.scrollY >= 200) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

// Swiper Js
var swiper = new Swiper(".home-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween:0,
  loop: true,
});
