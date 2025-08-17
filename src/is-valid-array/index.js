/**
 * Checks if the given data is a valid array (not null)
 * @param {*} data - The data to check
 * @returns {boolean} True if data is a valid array, false otherwise
 */
export const isValidArray = (data) => {
  return data !== null && Array.isArray(data);
};

export default isValidArray;
