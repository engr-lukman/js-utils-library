/**
 * Filters an array of objects to return only unique objects based on a specified property
 * @param {Array} array - The array of objects to filter
 * @param {string} propertyName - The property name to check for uniqueness
 * @returns {Array} A new array containing only unique objects
 */
export const uniqueArrayOfObjects = (array, propertyName) => {
  const uniqueValues = new Set();

  return array?.filter((obj) => {
    const propertyValue = obj[propertyName];
    if (!uniqueValues.has(propertyValue)) {
      uniqueValues.add(propertyValue);
      return true;
    }
    return false;
  });
};

export default uniqueArrayOfObjects;
