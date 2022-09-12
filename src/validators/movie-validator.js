const yup = require("yup");

const movieValidator = yup.object().shape({
  title: yup.string().trim().required().max(100),
  title_french: yup.string().trim().required().max(100),
  synopsis: yup.string().max(1500),
  release_date: yup.date().required(),
  country: yup.string().max(50),
  production_company: yup.string().required().max(150),
  budget: yup.number().positive(),
  distinction: yup.string().max(1000),
});

module.exports = {
  movieValidator,
};
