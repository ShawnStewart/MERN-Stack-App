const Validator = require("validator");
const checkEmpty = require("./check-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !checkEmpty(data.title) ? data.title : "";
  data.company = !checkEmpty(data.company) ? data.company : "";
  data.from = !checkEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Job title field is required";
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = "Company field is required";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }

  return {
    errors,
    isValid: checkEmpty(errors)
  };
};
