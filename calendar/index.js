const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();

monthNameEl.innerText = date.toLocaleString("cz", {
  month: "long"
});

dayNameEl.innerText = date.toLocaleString("cz", {
  weekday: "long"
});

dayNumEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();

// date.getMonth() – vrací číslo měsíce (0 = leden, 1 = únor, …, 11 = prosinec).

// date.getDate() – vrací aktuální den v měsíci (např. 29).

// date.getFullYear() – vrací aktuální rok (např. 2025).

// Formátování a vložení do HTML
// Metoda .toLocaleString("cz", { ... }) převádí datum do čitelného formátu v češtině:

// { month: "long" } – vrátí celý název měsíce (např. "březen").

// { weekday: "long" } – vrátí celý název dne v týdnu (např. "sobota").

// Každá hodnota se poté přiřadí do odpovídajícího HTML prvku (innerText).
