// https://www.youtube.com/watch?v=AGeRXBW9vsg
// 22:04 Color Flipper

const btnNewColor = document.querySelector("#new-colour-button");
const currentColorEl = document.getElementById("current-colour");

const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F"
];

const getRandomHexValue = () => {
  const randomIndexPosition = Math.floor(Math.random() * hexValues.length);

  const randomHexValue = hexValues[randomIndexPosition];

  return randomHexValue;
};

function getRandomHexString(stringLength) {
  let hexString = "";
  for (let i = 0; i < stringLength; i++) {
    hexString += getRandomHexValue();
  }
  return hexString;
}

btnNewColor.addEventListener("click", () => {
  const randomHexString = `#${getRandomHexString(6)}`;

  document.body.style.setProperty("background-color", randomHexString);
});
