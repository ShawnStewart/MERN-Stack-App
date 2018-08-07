const Validator = require("validator");
const checkEmpty = require("./check-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !checkEmpty(data.handle) ? data.handle : "";
  data.status = !checkEmpty(data.status) ? data.status : "";
  data.skills = !checkEmpty(data.skills) ? data.skills : "";

  // handle
  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle is required";
  } else if (!Validator.isLength(data.handle, { min: 1, max: 14 })) {
    errors.handle = "Handle needs to be atleast";
  }

  // status
  if (Validator.isEmpty(data.status)) {
    errors.status = "Status field is required";
  }

  // skills
  if (Validator.isEmpty(data.skills)) {
    errors.skills = "Skills field is required";
  }

  // website
  if (!checkEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "Note a valid URL";
    }
  }

  // twitter
  if (!checkEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Note a valid URL";
    }
  }

  // linkedin
  if (!checkEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Note a valid URL";
    }
  }

  // instagram
  if (!checkEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "Note a valid URL";
    }
  }

  // youtube
  if (!checkEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "Note a valid URL";
    }
  }

  return {
    errors,
    isValid: checkEmpty(errors)
  };
};
