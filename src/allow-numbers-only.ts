export const allowNumbersOnly = (evt: KeyboardEvent): void => {
  // Regex: allow digits 0-9 or a single dot
  const regex = /^[0-9.]$/;
  const keyPressed = evt.key;

  if (!regex.test(keyPressed)) {
    evt.preventDefault();
  }
};
