const CONSTANT = 2.2046;
const NUMBER_LENGTH = 4;

export const kgToLb = kg => (kg * CONSTANT).toFixed(NUMBER_LENGTH);
export const lbToKg = lb => (lb / CONSTANT).toFixed(NUMBER_LENGTH);

export const pricePerKgToLb = pricePerKg => (pricePerKg / CONSTANT).toFixed(NUMBER_LENGTH);
export const pricePerLbToKg = pricePerLb => (pricePerLb * CONSTANT).toFixed(NUMBER_LENGTH);

// margin = selling price - cost
export const calcMargin = (cost, sellingPrice) => (sellingPrice - cost).toFixed(NUMBER_LENGTH);

// profit margin = margin / selling price * 100
export const calcProfitMargin = (cost, sellingPrice) => ((calcMargin(cost, sellingPrice) / sellingPrice) * 100).toFixed(NUMBER_LENGTH);

// markup = margin / cost * 100
export const calcMarkup = (cost, sellingPrice) => ((calcMargin(cost, sellingPrice) / cost) * 100).toFixed(NUMBER_LENGTH);

// selling price = cost / (1 - profit margin as decimal)
export const calcSellingPriceWithCostAndPM = (cost, profitMargin) => (cost / (1 - profitMargin / 100)).toFixed(NUMBER_LENGTH);

// selling price = cost * (markup / 100) + cost
export const calcSellingPriceWithCostAndMarkup = (cost, markup) => (cost * (markup / 100) + cost).toFixed(NUMBER_LENGTH);

// cost = selling price * (1 - profit margin as decimal)
export const calcCostWithSPAndPM = (sellingPrice, profitMargin) => (sellingPrice * (1 - profitMargin / 100)).toFixed(NUMBER_LENGTH);

//  cost = selling price / (markup / 100 + 1)
export const calcCostWithSPAndMarkup = (sellingPrice, markup) => (sellingPrice / (markup / 100 + 1)).toFixed(NUMBER_LENGTH);

// Alternate way: Cost and Profit margin we need to get the factor. Factor is 1/(1-profit margin as a decimal). With that factor multiply cost.
