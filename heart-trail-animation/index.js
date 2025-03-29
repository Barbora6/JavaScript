// https://www.youtube.com/watch?v=NfvtQ2p5QG4

const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  // Tato část kódu říká: „Když se pohne myš nad stránkou, zavolej tuto funkci“. Event obsahuje informace o události pohybu myši.
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  //   event.offsetX a event.offsetY získají souřadnice myši relativně k prvku, nad kterým se nachází.
  // xPos = vodorovná souřadnice (X)
  // yPos = svislá souřadnice (Y)

  const spanEl = document.createElement("span");
  //   Vytvoří nový <span> prvek v paměti (ještě není vidět na stránce).
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  //   Nově vytvořený <span> je přidán do <body>, takže se objeví na stránce.

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
