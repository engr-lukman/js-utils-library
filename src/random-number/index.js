/**
 * Generates a random number within a specified range
 * @param {number} start - The minimum value (inclusive)
 * @param {number} end - The maximum value (exclusive)
 * @returns {number} A random integer between start (inclusive) and end (exclusive)
 */
export const randomNumber = (start = 1, end = 10000000) => {
  return Math.floor(Math.random() * (end - start)) + start;
};

export default randomNumber;
