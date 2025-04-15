// https://www.youtube.com/watch?v=AGeRXBW9vsg

// 1.projekt:
const btnHi = document.querySelector("button");

const spanEl = document.querySelector("span");

btnHi.addEventListener("click", () => {
  const yourName = prompt("Prosím, zadejte svoje jméno:");
  spanEl.textContent = yourName;
});
