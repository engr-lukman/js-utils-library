/**
 * Converts camelCase strings to kebab-case
 * @param {string} str - The camelCase string to convert
 * @returns {string} The kebab-case string
 */
export const camelCaseToKebabCase = (str) => {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
};

export default camelCaseToKebabCase;
