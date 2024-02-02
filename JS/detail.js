const body = document.body;
const overlay = document.querySelector(".overlay");
const slider = document.querySelector(".slider");
const cartBtn = document.querySelector(".cart__btn");
const closeBtn = document.querySelector(".slider__close");

// SLIDER LOGIC
const slider_Functionality = function () {
  slider.classList.toggle("slider--active");
  body.classList.toggle("body--lock");
  overlay.classList.toggle("overlay--active");
};

cartBtn.addEventListener("click", slider_Functionality);
overlay.addEventListener("click", slider_Functionality);
closeBtn.addEventListener("click", slider_Functionality);
