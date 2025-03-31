🔹testimonials je pole objektů obsahující tři recenze.
🔹 Každý objekt obsahuje jméno (name), URL obrázku (photoUrl) a text recenze (text).

2. Výběr HTML prvků pomocí querySelector
   const imgEl = document.querySelector("img");
   const textEl = document.querySelector(".text");
   const usernameEl = document.querySelector(".username");

3. Nastavení indexu idx a spuštění updateTestimonial()

let idx = 0;
updateTestimonial();

🔹 idx je index, který určuje, kterou recenzi zobrazit. Začínáme od 0.
🔹 updateTestimonial() se spustí ihned po načtení stránky.

4. Funkce updateTestimonial()

function updateTestimonial() {
const { name, photoUrl, text } = testimonials[idx];
imgEl.src = photoUrl;
textEl.innerText = text;
usernameEl.innerText = name;}

🔹 Pomocí destrukturalizace { name, photoUrl, text } = testimonials[idx]; získáme data z aktuální recenze.
🔹 Nastavíme obsah HTML prvků:

imgEl.src = photoUrl; → nastaví obrázek

textEl.innerText = text; → nastaví text recenze

usernameEl.innerText = name; → nastaví jméno
