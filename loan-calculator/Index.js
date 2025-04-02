function calculateLoan() {
  let vyseUveruHodnota = Number(document.getElementById("loan-amount").value);

  let urokovaSazbaHodnota = Number(
    document.getElementById("interest-rate").value
  );

  let dobaSplaceniHodnota =
    Number(document.getElementById("years-to-pay").value) * 12;

  let hodnotaUroku =
    (vyseUveruHodnota * (urokovaSazbaHodnota * 0.01)) / dobaSplaceniHodnota;

  let mesicniPlatba = vyseUveruHodnota / dobaSplaceniHodnota + hodnotaUroku;

  document.getElementById(
    "payment"
  ).innerHTML = `Měsíční splátka: ${mesicniPlatba.toFixed(2)} CZ`;
}

document
  .querySelectorAll("#loan-amount, #interest-rate, #years-to-pay")
  .forEach((input) => input.addEventListener("change", calculateLoan));
