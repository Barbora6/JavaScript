const body = document.getElementsByTagName("body")[0];
const btnRandom = document.querySelector("#random");
const btnGreen = document.querySelector("#green");
const btnRed = document.querySelector("#red");
const btnBlue = document.querySelector("#blue");

btnGreen.addEventListener("click", () => {
  body.style.backgroundColor = "green";
});
btnBlue.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
});
btnRed.addEventListener("click", () => {
  body.style.backgroundColor = "red";
});

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = color;
}

btnRandom.addEventListener("click", randomColor);
