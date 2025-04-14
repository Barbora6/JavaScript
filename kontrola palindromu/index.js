const input = document.getElementById("input");
const btnInput = document.querySelector("#btn");

function prevodTextu(slovo) {
  "hello word"[("hello", "word")];
  //   Funkce split() v JavaScriptu rozdělí řetězec (string) na pole (array) podle zadaného oddělovače.
  return slovo.split("");
}

function zkontrolujInput() {
  const value = input.value;
  alert(value);
}

btnInput.addEventListener("click", zkontrolujInput);
