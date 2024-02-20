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

//click on  Section links on header
let sectionLinks = Array.from(
  document.querySelectorAll(".header nav .menu ul li")
);
sectionLinks.forEach(function (link) {
  link.onclick = function () {
    sectionLinks.forEach((l) => {
      l.classList.remove("active");
    });
    link.classList.add("active");
  };
});

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
  spaceBetween: 0,
  loop: true,
});

// Copy Rigth Year

var pyear = document.querySelector(".copy-rigth p");

var y = new Date();

pyear.innerHTML = `&copy; ${y.getFullYear()} Restaurant , <span>Ahmed Abdelrashed</span>`;

// Reservation
let closeresrve = document.getElementById("closeResrv");
let reservation = document.querySelector(".reservation");
let btn_res = document.querySelectorAll(".btn-res");

closeresrve.onclick = () => {
  reservation.classList.remove("active");
};

btn_res.forEach((btn) => {
  btn.onclick = () => {
    reservation.classList.add("active");
  };
});
