/**
 * Parses a value and returns it if it's a valid numeric string, otherwise returns an empty string
 * @param {string} value - The value to parse
 * @returns {string} The original value if numeric, otherwise empty string
 */
export const parseNumeric = (value) => {
  return !!value && /^\d+$/.test(value) ? value : "";
};

export default parseNumeric;
