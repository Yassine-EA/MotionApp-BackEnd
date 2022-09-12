const yup = require("yup");

const genreValidator = yup.object().shape({
  genre: yup.string().trim().required().max(100),
});

module.exports = {
  genreValidator,
};
