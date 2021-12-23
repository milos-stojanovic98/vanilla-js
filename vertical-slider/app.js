const sliderContainer = document.querySelector(".slider-container");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");
const slidesLength = rightSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", function () {
  return moveSlide("up");
});
downButton.addEventListener("click", function () {
  return moveSlide("down");
});
function moveSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  rightSlide.style.transform = `translateY(-${activeSlideIndex * 100}%)`;

  leftSlide.style.transform = `translateY(${activeSlideIndex * 100}%)`;
}
