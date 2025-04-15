// https://github.com/techwithtim/5-Mini-JS-Projects-for-Beginners/blob/main/3/index.js
// https://www.youtube.com/watch?v=2ml4x0rO1PQ

const quotes = [
  "The only way to do great work is to love what you do.",
  "Life is what happens when you're busy making other plans.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It does not matter how slowly you go as long as you do not stop.",
  "In the end, it's not the years in your life that count. It's the life in your years.",
  "The purpose of our lives is to be happy.",
  "Get busy living or get busy dying.",
  "You only live once, but if you do it right, once is enough.",
  "Many of life's failures are people who did not realize how close they were to success when they gave up.",
  "If you want to live a happy life, tie it to a goal, not to people or things."
];

// Set je speciální objekt v JavaScriptu, který ukládá jen unikátní hodnoty – tzn. bez duplicit.
// Pomocí Set ukládáme čísla (indexy), které už byly použity → zabráníme tak opakování citátů.

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");
const btn = document.getElementById("btn");

function generateQuote() {
  // neustálé opakování citátů
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }

  //   Upozornění, že všechny citáty už byli zobrazeny:
  //   if (usedIndexes.size === quotes.length) {
  //     alert("Všechny citáty už byly zobrazeny!");
  //     return;
  //   }

  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);
    if (usedIndexes.has(randomIdx)) continue;

    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx);
    break;
  }
}

btn.addEventListener("click", generateQuote);
