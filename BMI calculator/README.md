1. const btnEl = document.getElementById("btn");
   const bmiInputEl = document.getElementById("bmi-result");
   const weightConditionEl = document.getElementById("weight-condition");

2. Funkce calculateBMI()
   Spustí se, když uživatel klikne na tlačítko.

const heightValue = document.getElementById("height").value / 100;

Získá hodnotu z inputu "výška" (např. 170 cm).

Dělí se 100, aby byla ve metrech (např. 1.7 m).

const weightValue = document.getElementById("weight").value;

Získá hodnotu z inputu "váha" (např. 65 kg).

3. 🧮 Vzorec pro výpočet BMI:

const bmiValue = Math.floor(weightValue / (heightValue \* heightValue));

BMI se počítá jako:
váha (kg) / (výška v metrech)²

Math.floor() zaokrouhlí výsledek dolů na celé číslo.

4. ✏️ Zobrazení výsledku:

bmiInputEl.value = bmiValue;
Zobrazí vypočítané BMI do inputu

5. 🔎 Určení "váhové kategorie":

if (bmiValue < 18.5) {
weightConditionEl.innerText = "Podvýživa";
} else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
weightConditionEl.innerText = "Normální váha";
} else if (bmiValue >= 25 && bmiValue <= 29.9) {
weightConditionEl.innerText = "Nadváha";
} else if (bmiValue >= 30) {
weightConditionEl.innerText = "Obezita";
}

6. 🖱️ A nakonec – spuštění funkce po kliknutí:

btnEl.addEventListener("click", calculateBMI);
