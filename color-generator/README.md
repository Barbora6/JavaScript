1. Výběr .container z HTML
   const containerEl = document.querySelector(".container");

2. Vytvoření 30 barevných kontejnerů (div elementů)
   for (let index = 0; index < 30; index++) {
   const colorContainerEl = document.createElement("div"); // Vytvoří nový <div>
   colorContainerEl.classList.add("color-container"); // Přidá třídu "color-container"
   containerEl.appendChild(colorContainerEl); // Přidá <div> do .container
   }
   🔹 Vytvoří 30 nových <div> elementů.
   🔹 Každému přidá třídu .color-container.
   🔹 Připojí ho do containerEl (hlavního kontejneru v HTML).

3. Výběr všech .color-container
   const colorContainerEls = document.querySelectorAll(".color-container");

🔹 Najde všechny vygenerované <div> elementy se třídou .color-container.
🔹 Uloží je do NodeList, který je podobný poli.

4. Funkce generateColors()
   generateColors();

🔹 Okamžitě spustí funkci pro vygenerování náhodných barev.

5. Funkce generateColors() – Nastavení barev
   function generateColors() {
   colorContainerEls.forEach((colorContainerEl) => {
   const newColorCode = randomColor();
   // Vygeneruje náhodný HEX kód
   colorContainerEl.style.backgroundColor = "#" + newColorCode;
   // Nastaví barvu
   colorContainerEl.innerText = "#" + newColorCode; // Zobrazí HEX kód uvnitř <div>
   });
   }

   🔹 Projde každý .color-container a nastaví mu:
   ✅ Náhodnou barvu jako backgroundColor.
   ✅ HEX kód barvy jako text uvnitř <div>.

   6. Funkce randomColor() – Generování náhodného HEX kódu
      function randomColor() {
      const chars = "0123456789abcdef";
      // Možné znaky pro HEX kód
      const colorCodeLength = 6;
      // HEX kód má 6 znaků
      let colorCode = "";

for (let index = 0; index < colorCodeLength; index++) {
const randomNum = Math.floor(Math.random() \* chars.length);
colorCode += chars.substring(randomNum, randomNum + 1);
}

return colorCode;
// Vrátí např. "a3f4c2"
}

🔹 HEX barvy se skládají ze 6 znaků (0-9 a a-f).
🔹 V cyklu vybere 6 náhodných znaků a složí z nich HEX kód.
🔹 Vrátí například "a3f4c2" (což odpovídá barvě #a3f4c2).
