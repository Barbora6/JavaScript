Tento kód se stará o efekt, který reaguje na pohyb myši nad tlačítkem s třídou .btn.

1️⃣ Výběr tlačítka

const btnEl = document.querySelector(".btn");

document.querySelector(".btn") vybere první HTML element s třídou btn a uloží ho do proměnné btnEl.

2️⃣ Přidání posluchače události mouseover
btnEl.addEventListener("mouseover", (event) => {})

addEventListener("mouseover", callback) přidá událost, která se spustí, když uživatel přesune kurzor myši nad tlačítko.

3️⃣ Výpočet souřadnic kurzoru vůči tlačítku
const x = event.pageX - btnEl.offsetLeft;
const y = event.pageY - btnEl.offsetTop;

event.pageX a event.pageY vrací souřadnice kurzoru myši relativně k celé stránce.

btnEl.offsetLeft a btnEl.offsetTop vrací souřadnice levého horního rohu tlačítka vůči jeho rodičovskému prvku.

Odečtením těchto hodnot získáme souřadnice kurzoru myši relativně k tlačítku.

4️⃣ Nastavení CSS proměnných

V CSS se pravděpodobně používají CSS proměnné (--xPos a --yPos).

setProperty("--xPos", x + "px") nastaví hodnotu proměnné --xPos na souřadnici X v pixelech.

setProperty("--yPos", y + "px") nastaví hodnotu proměnné --yPos na souřadnici Y v pixelech.
