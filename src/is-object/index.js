/**
 * Checks if the given data is a plain object (not an array or null)
 * @param {*} objData - The data to check
 * @returns {boolean} True if the data is a plain object, false otherwise
 */
export const isObject = (objData) => {
  return (
    typeof objData === "object" && objData !== null && !Array.isArray(objData)
  );
};

export default isObject;
