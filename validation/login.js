const Validator = require("validator");
const checkEmpty = require("./check-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !checkEmpty(data.email) ? data.email : "";
  data.password = !checkEmpty(data.password) ? data.password : "";

  // email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  } else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  return {
    errors,
    isValid: checkEmpty(errors)
  };
};
