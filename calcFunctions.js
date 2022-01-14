const CONSTANT = 2.2046;

export const kgToLb = kg => (kg * CONSTANT).toFixed(6);
export const lbToKg = lb => (lb / CONSTANT).toFixed(6);
export const pricePerKgToLb = pricePerKg => (pricePerKg / CONSTANT).toFixed(6);
export const pricePerLbToKg = pricePerLb => (pricePerLb * CONSTANT).toFixed(6);
export const calcMargin = (cost, sellingPrice) => sellingPrice - cost;
export const calcProfitMargin = (cost, sellingPrice) => (calcMargin(cost, sellingPrice) / sellingPrice) * 100;
export const calcMarkup = (cost, sellingPrice) => (calcMargin(cost, sellingPrice) / cost) * 100;
export const calcSellingPriceWithCostAndPM = (cost, profitMargin) => cost / (1 - profitMargin / 100);
export const calcSellingPriceWithCostAndMarkup = (cost, markup) => cost * (markup / 100) + cost;
export const calcCostWithSPAndPM = (sellingPrice, profitMargin) => sellingPrice * (1 - profitMargin / 100);
export const calcCostWithSPAndMarkup = (sellingPrice, markup) => sellingPrice / (markup / 100 + 1);

