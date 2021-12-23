const loadingText = document.querySelector(".loading-text");
const loadingDoneText = document.querySelector(".loading-done");
const bg = document.querySelector(".bg");


// Setting loading to 0
let load = 0;
// Interval set to 25 miliseconds 
let interval = setInterval(blurring, 25);

function blurring() {
  // Loading will stop and disappear once it reaches 100
  load++;
  if (load > 99) {
    clearInterval(interval);

    // Show text when loaded 
    loadingDoneText.classList.add("show-done");
  }
  
  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// Scaling function
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
