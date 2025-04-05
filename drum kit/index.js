const kits = ["crash", "kick", "snare", "tom"];

const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.innerText = kit;
  btnEl.style.backgroundImage = "url(images/" + kit + ".png)";
  containerEl.appendChild(btnEl);
});
