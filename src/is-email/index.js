/**
 * Validates email address format
 * @param {string} email - The email address to validate
 * @returns {boolean} True if valid email format, false otherwise
 */
export const isEmail = (email = "") => {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

export default isEmail;
