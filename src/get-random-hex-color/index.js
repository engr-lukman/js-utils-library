/**
 * Generates a random hexadecimal color code
 * @returns {string} A random hex color code (e.g., "#A1B2C3")
 */
export const getRandomHexColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

export default getRandomHexColor;
