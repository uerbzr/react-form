// returns true if input value is valid
export const validateMinimumLength = (value, minLength) =>
  value.length >= minLength;



export const validateEmail = (value) =>
  value.indexOf("@") !== -1 ? true : false;
