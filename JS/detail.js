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

const imgs = document.querySelectorAll(".detail__img");
const btnLeft = document.querySelector(".carousel__left");
const btnRight = document.querySelector(".carousel__right");

let curSlide = 0;

const arrangeSlide = function () {
  imgs.forEach((item, ind) => {
    item.style.transform = `translateX(${(ind - curSlide) * 100}%)`;
  });
};
arrangeSlide();

btnRight.addEventListener("click", function () {
  curSlide = curSlide === imgs.length - 1 ? 0 : curSlide + 1;
  arrangeSlide();
});

btnLeft.addEventListener("click", function () {
  curSlide = curSlide === 0 ? imgs.length - 1 : curSlide - 1;
  arrangeSlide();
});
