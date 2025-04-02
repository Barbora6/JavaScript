ento kód slouží jako úvěrová kalkulačka, která vypočítá měsíční splátku úvěru na základě:

Částky úvěru

Úrokové sazby

Doby splácení (v letech, přepočítané na měsíce)

1️⃣ Funkce calculateLoan()
Tato funkce se spustí vždy, když uživatel změní hodnotu v některém z inputů.

let vyseUveruHodnota = Number(document.getElementById("loan-amount").value);

Z inputu s id loan-amount se načte hodnota (výše úvěru).

Používá se Number(), aby se hodnota převedla na číslo (protože value vrací string).

let urokovaSazbaHodnota = Number(document.getElementById("interest-rate").value);
let dobaSplaceniHodnota = Number(document.getElementById("years-to-pay").value) \* 12;

interest-rate = úroková sazba

years-to-pay = převede se na měsíce (roky \* 12)

1️⃣ Výpočet úroku na měsíc
let hodnotaUroku = (vyseUveruHodnota _ (urokovaSazbaHodnota _ 0.01)) / dobaSplaceniHodnota;

Celkový úrok = (výše úvěru \* úroková sazba) / 100

Úrok na jeden měsíc = (celkový úrok) / (počet měsíců)

2️⃣ Výpočet měsíční splátky
let mesicniPlatba = vyseUveruHodnota / dobaSplaceniHodnota + hodnotaUroku;

Rozložení úvěru na měsíční splátky

Každý měsíc se splácí část úvěru + měsíční úrok

3️⃣ Zobrazení výsledku
document.getElementById("payment").innerHTML = `Měsíční splátka: ${mesicniPlatba.toFixed(2)} CZ`;

toFixed(2) zaokrouhluje splátku na dvě desetinná místa

Výsledek se zobrazí v <p id="payment"></p>

2️⃣ Události (event listeners)
Tyto řádky spustí funkci calculateLoan() vždy, když se změní hodnota v některém z polí:

change = spustí se při změně hodnoty v inputu

Takže po změně částky úvěru, úroku nebo let splácení se automaticky přepočítá výsledek
