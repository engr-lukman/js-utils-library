/**
 * Validates Bangladeshi mobile number format
 * @param {string} mobileNumber - The mobile number to validate
 * @returns {boolean} True if valid Bangladeshi mobile number, false otherwise
 */
export const isValidBangladeshiMobileNumber = (mobileNumber) => {
  if (mobileNumber) {
    // Regular expression for Bangladeshi mobile numbers
    // Matches 11-digit numbers starting with 013-019
    const regex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
    return regex.test(mobileNumber);
  }

  return false;
};

export default isValidBangladeshiMobileNumber;
