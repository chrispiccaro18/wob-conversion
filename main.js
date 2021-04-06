const CONSTANT = 2.2046;

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

const conversionInputs = document.querySelectorAll('.conversion');

conversionInputs.forEach(input => {
  input.addEventListener("input", () => {
    const result = functions[input.id](input.value);
    const resultDisplay = document.getElementById(`${input.id}Result`);
    resultDisplay.textContent = result;
  })
});

const marginFormClearButton = document.getElementById('margin-form-clear');
const marginForm = document.getElementById('margin-form');

marginFormClearButton.addEventListener('click', () => {
  marginForm.reset();
});

const costInput = document.getElementById('cost');
const sellingPriceInput = document.getElementById('selling-price');
const marginInput = document.getElementById('margin');

marginForm.addEventListener('submit', event => {
  event.preventDefault();
  
  if(!marginInput.value) {
    const grossProfit = sellingPriceInput.value - costInput.value;
    const marginPercent = grossProfit / sellingPriceInput.value * 100;
    const markupPercent = grossProfit / costInput.value * 100;
    marginInput.value = marginPercent;
  
    const markupDisplay = document.getElementById('markup');
    markupDisplay.textContent = markupPercent + '%';
  }

  if(!sellingPriceInput.value) {
    const sellingPrice = costInput.value / (1 - marginInput.value / 100);
    sellingPriceInput.value = sellingPrice;
  }

  if(!costInput.value) {
    const cost = sellingPriceInput.value * (1 - marginInput.value / 100);
    costInput.value = cost;
  }
});
