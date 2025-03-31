Vysvětlení kódu: Project 9 - Digitalni hodiny

1. Získání HTML elementů
   const hourEl = document.getElementById("hour");
   const minuteEl = document.getElementById("minutes");
   const secondEl = document.getElementById("seconds");
   const ampmEl = document.getElementById("ampm");

Tyto proměnné uchovávají reference na HTML prvky, do kterých se bude zapisovat aktuální čas.

2. Funkce updateClock()
   Tato funkce aktualizuje čas a zobrazí jej v HTML.
   let h = new Date().getHours();
   let m = new Date().getMinutes();
   let s = new Date().getSeconds();
   let ampm = "AM";
   Získává aktuální hodiny, minuty a sekundy z objektu Date(). Výchozí hodnota proměnné ampm je nastavena na "AM".

Pokud jsou hodiny větší než 12, převedou se na 12hodinový formát a nastaví se PM.
if (h > 12) {
h = h - 12;
ampm = "PM";
}

Pokud jsou hodnoty hodin, minut nebo sekund menší než 10, přidá se před ně "0" (např. místo 9 se zobrazí 09).

h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;

Použitím setTimeout() se funkce volá znovu každou sekundu, aby se čas neustále aktualizoval.

setTimeout(() => {
updateClock();
}, 1000);

updateClock();
Tímto se funkce spustí hned při načtení skriptu.
