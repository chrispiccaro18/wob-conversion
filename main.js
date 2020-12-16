const CONSTANT = 2.204622;


const kgToLb = kg => (kg * CONSTANT).toFixed(6);
const lbToKg = lb => (lb / CONSTANT).toFixed(6);
const pricePerKgToLb = pricePerKg => (pricePerKg / CONSTANT).toFixed(6);
const pricePerLbToKg = pricePerLb => (pricePerLb * CONSTANT).toFixed(6);

const functions = {
  kgToLb,
  lbToKg,
  pricePerKgToLb,
  pricePerLbToKg,
};

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener("input", () => {
    const result = functions[input.id](input.value);
    const resultDisplay = document.getElementById(`${input.id}Result`);
    resultDisplay.textContent = result;
  })
});
