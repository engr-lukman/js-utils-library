/**
 * Converts an object to a URL query string
 * @param {Object} params - The object containing key-value pairs to convert
 * @returns {string} URL-encoded query string
 */
export const objectToQueryString = (params) => {
  const queryString = [];

  Object.keys(params).forEach((keyName) => {
    if (
      Object.prototype.hasOwnProperty.call(params, keyName) &&
      params?.[keyName] !== "null" &&
      params?.[keyName]
    ) {
      if (Array.isArray(params?.[keyName])) {
        params?.[keyName].forEach((item) => {
          queryString.push(
            `${encodeURIComponent(keyName)}=${encodeURIComponent(item)}`
          );
        });
      } else {
        queryString.push(
          `${encodeURIComponent(keyName)}=${encodeURIComponent(
            params[keyName]
          )}`
        );
      }
    }
  });

  return queryString.join("&");
};

export default objectToQueryString;
