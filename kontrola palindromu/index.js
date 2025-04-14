const input = document.getElementById("input");
const btnInput = document.querySelector("#btn");

function prevodTextu(slovo) {
  //   "hello word"[("hello", "word")];
  //   Funkce split() v JavaScriptu rozdělí řetězec (string) na pole (array) podle zadaného oddělovače.
  //   'hello' => ['h', 'e', 'l', 'l', 'o']
  return slovo.split("").reverse().join("");
}

function zkontrolujInput() {
  const value = input.value;
  const reverse = prevodTextu(value);

  if (value === reverse) {
    alert("P A L I N D R O M E");
  } else {
    alert("Zkus to znovu!");
  }

  input.value = "";
}

btnInput.addEventListener("click", zkontrolujInput);
