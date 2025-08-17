/**
 * Formats a number to Bangladeshi Taka currency format
 * @param {string|number} amount - The amount to format
 * @param {boolean} isToFixed - Whether to format with 2 decimal places and thousand separators
 * @returns {string|null} Formatted currency string or null for invalid input
 */
export const formatToCurrency = (amount = "", isToFixed = true) => {
  if (["", null, undefined].includes(amount)) {
    return null;
  }

  if (!isToFixed) return `৳ ${amount}`;

  const modifiedAmount = parseFloat(amount);

  if (Number.isNaN(modifiedAmount)) {
    return null;
  }

  return `৳ ${modifiedAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};

export default formatToCurrency;
