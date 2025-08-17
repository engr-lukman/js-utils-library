/**
 * Checks if a string contains only alphanumeric characters, spaces, and hyphens
 * @param {string} str - The string to validate
 * @returns {boolean} True if string is alphanumeric (with spaces and hyphens), false otherwise
 */
export const isAlphanumeric = (str) => {
  const regex = /^[a-zA-Z0-9- ]+$/;
  return regex.test(str);
};

export default isAlphanumeric;
