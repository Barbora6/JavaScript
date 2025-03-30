Projekt číslo 6
https://www.youtube.com/watch?v=NfvtQ2p5QG4

Tento kód se stará o změnu barvy pozadí stránky na základě přepínače (checkboxu) a zároveň ukládá uživatelskou volbu do localStorage, aby byla zachována i po znovunačtení stránky.

1. Výběr prvků z DOM:
   const inputEl = document.querySelector(".input");
   const bodyEl = document.querySelector("body");

inputEl odkazuje na HTML prvek s třídou .input (pravděpodobně checkbox).

bodyEl odkazuje na prvek <body>, jehož barvu pozadí budeme měnit.

2. Načtení uloženého stavu z localStorage:

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

Z localStorage se načte uložený režim.

JSON.parse() převádí uloženou hodnotu ("true" nebo "false") zpět na boolean.

3. Inicializace vzhledu stránky podle uložené hodnoty:

Funkce updateBody() nastaví barvu pozadí stránky podle hodnoty inputEl.checked.

4. function updateBody() {
   if (inputEl.checked) {
   bodyEl.style.background = "black";
   } else {
   bodyEl.style.background = "white";
   }
   }

Pokud je inputEl.checked == true, nastaví se černé pozadí.

Jinak se nastaví bílé pozadí.

5. Reakce na změnu checkboxu:

inputEl.addEventListener("input", () => {
updateBody();
});

Když uživatel přepne checkbox, zavolá se funkce updateBody(), která změní pozadí.

6. Ukládání stavu do localStorage:
   function updateLocalStorage() {
   localStorage.setItem("mode", JSON.stringify(inputEl.checked));
   }

Tato funkce uloží aktuální stav checkboxu (true nebo false) do localStorage.
