const imageContainerEl = document.querySelector(".image-container");
const buttonEl = document.querySelector(".btn");

buttonEl.addEventListener("click", () => {
  addNewImages();
});

function addNewImages() {
  const newImageEl = document.createElement("img");
  newImageEl.src = `https://picsum.photos/300?random=${Math.floor(
    Math.random() * 2000
  )}`;
  imageContainerEl.appendChild(newImageEl);
}
