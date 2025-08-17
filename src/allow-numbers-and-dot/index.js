/**
 * Prevents non-numeric and non-dot characters from being entered in input fields
 * @param {KeyboardEvent} evt - The keyboard event object
 */
export const allowNumbersAndDot = (evt) => {
  const regex = /^[0-9.]$/;
  if (!regex.test(evt.key)) evt.preventDefault();
};

export default allowNumbersAndDot;
