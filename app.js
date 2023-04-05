const colors = ["green", "red", "blue", "orange", "yellow"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const getRandomNumber = randomNumber();
  document.body.style.backgroundColor = colors[getRandomNumber];
  color.textContent = colors[getRandomNumber];
});
function randomNumber() {
  return Math.floor(Math.random() * colors.length);
}
