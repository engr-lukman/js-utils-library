/**
 * Checks if an event was triggered by a trusted user interaction
 * @param {Event} event - The event object to check
 * @returns {boolean} True if the event is trusted, false otherwise
 */
export const isTrustedUserEvent = (event) => {
  return event?.isTrusted;
};

export default isTrustedUserEvent;
