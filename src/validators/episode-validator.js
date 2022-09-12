const yup = require("yup");

const episodeValidator = yup.object().shape({
  episode: yup.number().integer().positive().required().min(0).max(3000),
  first_release: yup.date().required(),
});

module.exports = {
  episodeValidator,
};
