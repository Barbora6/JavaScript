// https://www.youtube.com/watch?v=NfvtQ2p5QG4
// projekt 23 BMI

const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  // validace vstupu
  if (
    heightValue <= 0 ||
    weightValue <= 0 ||
    isNaN(heightValue) ||
    isNaN(weightValue)
  ) {
    bmiInputEl.value = "";
    weightConditionEl.innerText = "! Zadej platné číslo pro výšku i váhu!";
    return;
  }

  const bmiValue = Math.floor(weightValue / (heightValue * heightValue));

  bmiInputEl.value = bmiValue;

  if (bmiValue < 18.5) {
    weightConditionEl.innerText = "Podvýživa";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "Normální váha";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "Nadváha";
  } else if (bmiValue >= 30) {
    weightConditionEl.innerText = "Obezita";
  }
}

btnEl.addEventListener("click", calculateBMI);
