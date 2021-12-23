const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //Iterating through colors array, getting random numbers from it and adding them to hash value
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    hash += colors[getRandomNumber()];
  }
  document.body.style.backgroundColor = hash;
  document.getElementById("btn").style.backgroundColor = "lightblue";
  color.innerHTML = hash;
});

//Getting random values from colors array
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
