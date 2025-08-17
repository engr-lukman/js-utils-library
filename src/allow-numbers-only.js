const allowNumbersAndDot = (evt) => {
  const regex = /^[0-9.]$/;
  if (!regex.test(evt.key)) evt.preventDefault();
};

export default allowNumbersAndDot;
