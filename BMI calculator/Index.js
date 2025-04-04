const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

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
