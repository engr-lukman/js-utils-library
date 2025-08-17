/**
 * Creates a delay/pause in async code execution
 * @param {number} time - The delay time in milliseconds (default: 500)
 * @returns {Promise} A promise that resolves after the specified time
 */
export const delay = (time = 500) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export default delay;
