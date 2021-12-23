let count = 0;
const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

//Looping through all buttons
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const button = e.currentTarget.classList;
    if (button.contains("decrease")) {
      count--;
    } else if (button.contains("increase")) {
      count++;
    } else {
      if (count !== 0) {
        window.alert("Timer reset successfully!");
        count = 0;
      }
    }

    //Setting value colors
    if (count > 0) {
      value.style.color = "blue";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
