1.  const containerEl = document.querySelector(".container");

Vybere HTML prvek s třídou .container, do kterého se bude vkládat text.

2. const careers = ["YouTube", "Web Developer", "Freelancer", "Instructor"];
   Pole obsahující různé kariéry, které se budou postupně zobrazovat.

3. Indexy pro sledování pozice v textu

let careersIndex = 0;
let characterIndex = 0;

careersIndex → index aktuální kariéry v poli careers.

characterIndex → index písmena, které se právě zobrazuje.

4. Spuštění funkce updateText()

updateText();

Zavolá funkci, která se bude starat o animaci psaní textu.

5. Funkce updateText() – generování textu po písmenech

function updateText() {
characterIndex++;
}
Zvýší se characterIndex, takže se zobrazí další písmeno aktuální kariéry.

5.1 Vložení textu do .container

containerEl.innerHTML = `<h1>I am ${
    careers[careersIndex].slice(0, 1) === "I" ? "an" : "a"
  } ${careers[careersIndex].slice(0, characterIndex)}</h1>`;

Používá slice(0, characterIndex), což znamená, že z kariéry zobrazí pouze část odpovídající characterIndex.

Kontroluje, jestli první písmeno aktuální kariéry je „I“. Pokud ano, použije "an" místo "a" (např. „I am an Instructor“ místo „I am a Instructor“).

5.2 Kontrola, zda bylo vypsáno celé slovo

if (characterIndex === careers[careersIndex].length) {
careersIndex++;
characterIndex = 0;
}

Pokud je characterIndex na konci slova, přejde se na další kariéru a resetuje se characterIndex.

5.3 Restartování cyklu po poslední kariéře
if (careersIndex === careers.length) {
careersIndex = 0;
}
Pokud se dostaneme na konec pole careers, začneme znovu od první kariéry.

5.4 Opakování animace po 400 ms
setTimeout(updateText, 400);
Volá updateText() znovu za 400 milisekund, což vytváří efekt postupného psaní.
