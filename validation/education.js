const Validator = require("validator");
const checkEmpty = require("./check-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !checkEmpty(data.school) ? data.school : "";
  data.degree = !checkEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !checkEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !checkEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "School field is required";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree field is required";
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study field is required";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }

  return {
    errors,
    isValid: checkEmpty(errors)
  };
};
