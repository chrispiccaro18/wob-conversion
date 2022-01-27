const CONSTANT = 2.2046;
const NUMBER_LENGTH = 4;

export const kgToLb = kg => (kg * CONSTANT).toFixed(NUMBER_LENGTH);
export const lbToKg = lb => (lb / CONSTANT).toFixed(NUMBER_LENGTH);
export const pricePerKgToLb = pricePerKg => (pricePerKg / CONSTANT).toFixed(NUMBER_LENGTH);
export const pricePerLbToKg = pricePerLb => (pricePerLb * CONSTANT).toFixed(NUMBER_LENGTH);
export const calcMargin = (cost, sellingPrice) => sellingPrice - cost;
export const calcProfitMargin = (cost, sellingPrice) => ((calcMargin(cost, sellingPrice) / sellingPrice) * 100).toFixed(NUMBER_LENGTH);
export const calcMarkup = (cost, sellingPrice) => ((calcMargin(cost, sellingPrice) / cost) * 100).toFixed(NUMBER_LENGTH);
export const calcSellingPriceWithCostAndPM = (cost, profitMargin) => (cost / (1 - profitMargin / 100)).toFixed(NUMBER_LENGTH);
export const calcSellingPriceWithCostAndMarkup = (cost, markup) => (cost * (markup / 100) + cost).toFixed(NUMBER_LENGTH);
export const calcCostWithSPAndPM = (sellingPrice, profitMargin) => (sellingPrice * (1 - profitMargin / 100)).toFixed(NUMBER_LENGTH);
export const calcCostWithSPAndMarkup = (sellingPrice, markup) => (sellingPrice / (markup / 100 + 1)).toFixed(NUMBER_LENGTH);

