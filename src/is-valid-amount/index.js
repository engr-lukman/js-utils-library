/**
 * Validates if an amount is a valid positive number with at most 2 decimal places
 * @param {number} amount - The amount to validate
 * @returns {boolean} True if the amount is valid, false otherwise
 */
export const isValidAmount = (amount) => {
  if (typeof amount !== "number" || Number.isNaN(amount)) return false;

  const decimalPart = amount.toString().split(".")[1];
  return decimalPart ? decimalPart.length <= 2 && amount > 0 : amount > 0;
};

export default isValidAmount;
