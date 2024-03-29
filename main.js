import {
  kgToLb,
  lbToKg,
  pricePerKgToLb,
  pricePerLbToKg,
  calcMargin,
  calcProfitMargin,
  calcMarkup,
  calcSellingPriceWithCostAndPM,
  calcSellingPriceWithCostAndMarkup,
  calcCostWithSPAndPM,
  calcCostWithSPAndMarkup,
} from './calcFunctions.js';

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

marginFormClearButton.addEventListener('click', event => {
  marginForm.reset();
  event.preventDefault();
});

const costInput = document.getElementById('cost');
const sellingPriceInput = document.getElementById('selling-price');
const profitMarginInput = document.getElementById('profit-margin');
const markupInput = document.getElementById('markup');
const marginInput = document.getElementById('margin');

marginForm.addEventListener('submit', event => {
  event.preventDefault();

  let cost = costInput.valueAsNumber;
  let markup = markupInput.valueAsNumber;
  let profitMargin = profitMarginInput.valueAsNumber;
  let sellingPrice = sellingPriceInput.valueAsNumber;
  let margin = marginInput.valueAsNumber;

  if(!profitMargin) {
    profitMarginInput.value = calcProfitMargin(cost, sellingPrice);
  }

  if(!markup) {
    markupInput.value = calcMarkup(cost, sellingPrice);
  }

  if(!cost) {
    if(!profitMargin) {
      cost = calcCostWithSPAndMarkup(sellingPrice, markup);
      costInput.value = cost;
      profitMarginInput.value = calcProfitMargin(cost, sellingPrice);
    } else {
      cost = calcCostWithSPAndPM(sellingPrice, profitMargin);
      costInput.value = cost;
      markupInput.value = calcMarkup(cost, sellingPrice);
    }
  }

  if(!sellingPrice) {
    if(!profitMargin) {
      sellingPrice = calcSellingPriceWithCostAndMarkup(cost, markup);
      sellingPriceInput.value = sellingPrice;
      profitMarginInput.value = calcProfitMargin(cost, sellingPrice);
    } else {
      sellingPrice = calcSellingPriceWithCostAndPM(cost, profitMargin);
      sellingPriceInput.value = sellingPrice;
      markupInput.value = calcMarkup(cost, sellingPrice);
    }
  }

  if(cost && sellingPrice) {
    marginInput.value = calcMargin(cost, sellingPrice);
  }
});
