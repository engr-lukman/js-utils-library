/**
 * Generates a random alphanumeric string of specified length
 * @param {number} length - The length of the random string to generate (default: 32)
 * @returns {string} A random alphanumeric string
 */
export const getRandomString = (length = 32) => {
  let result = "";

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const charactersLength = characters?.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export default getRandomString;
