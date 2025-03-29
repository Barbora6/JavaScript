const containerEl = document.querySelector(".container");

const careers = ["YouTube", "Web Developer", "Freelancer", "Instructor"];

let careersIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `<h1>I am ${
    careers[careersIndex].slice(0, 1) === "I" ? "an" : "a"
  } ${careers[careersIndex].slice(0, characterIndex)}</h1>`;

  //   Pokud je characterIndex na konci slova, přejde se na další kariéru a resetuje se characterIndex.
  if (characterIndex === careers[careersIndex].length) {
    careersIndex++;
    characterIndex = 0;
  }
  //   Pokud se dostaneme na konec pole careers, začneme znovu od první kariéry.
  if (careersIndex === careers.length) {
    careersIndex = 0;
  }
  //   Opakování animace po 400 ms
  setTimeout(updateText, 400);
}
// Volá updateText() znovu za 400 milisekund, což vytváří efekt postupného psaní.
