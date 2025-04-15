// https://www.youtube.com/watch?v=AGeRXBW9vsg

// 1.projekt:
const btnHi = document.querySelector("button");

const spanEl = document.querySelector("span");

btnHi.addEventListener("click", () => {
  const yourName = prompt("Prosím, zadejte svoje jméno:");
  spanEl.textContent = yourName;
});

// 2.projekt:

// kliknutím na tlačítko se schová text:

const btnModal = document.querySelector("#openModal");
const modalEl = document.querySelector(".modal");
const modalContentEl = modalEl.querySelector(".modal_content");

btnModal.addEventListener("click", () => {
  modalEl.classList.add("open");
});

modalContentEl.addEventListener("click", () => {
  modalEl.classList.remove("open");
});
