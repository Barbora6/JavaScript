const textInput = document.getElementById("textInput");
const btnLength = document.getElementById("lengthBtn");
const textResult = document.getElementById("textResult");

btnLength.addEventListener("click", () => {
  const text = textInput.value;
  textResult.innerHTML = `${text}, délka textu je: ${text.length} znaků.`;
});

// --------------------------------------------------------

const inputFruit = document.getElementById("inputFruit");
const btnFruit = document.getElementById("btnFruit");
const arrayResults = document.getElementById("arrayResults");

let fruits = [];

btnFruit.addEventListener("click", () => {
  const fruit = inputFruit.value.trim();
  // 🔹 trim() je metoda pro odstranění mezer na začátku a konci textu (řetězce).

  if (fruit === "") {
    arrayResults.innerHTML = "⚠️ Zadej nějaké ovoce!";
    return;
  }

  fruits.push("🍎");
  inputFruit.value = "";
  inputFruit.focus();
  // metoda, která přesune kurzor do inputu, aktivuje ho jako bys na něj klikla
  // můžeš hned začít psát a nemusíš klikat myší

  arrayResults.innerHTML = `Ovoce na seznamu: ${fruit} ${fruits.join(
    ","
  )} (délka: ${fruits.length})`;
});
