const yup = require("yup");

const mediasValidator = yup.object().shape({
	id_media: yup.string().trim().max(20).required(),
	title: yup.string().required().max(250),
	fullTitle: yup.string().required().max(250),
	media_type: yup.string().required().max(50),
	release_year: yup.string().required().max(50),
	image: yup.string().required().max(2000),
	releaseDate: yup.string().required().max(50),
	runtimeStr: yup.string().required().max(50),
	plot: yup.string().max(2000),
	directors: yup.string().max(250),
	writers: yup.string().max(250),
	stars: yup.string().max(250),
	creators: yup.string().max(250),
	seasons: yup.string().max(250),
	companies: yup.string().max(250),
	countries: yup.string().max(250),
	languages: yup.string().max(250),
	countries: yup.string().max(250),
	rating: yup.string().max(5),
	poster: yup.string().max(2000),
	backdrops: yup.string().max(2000),
});

module.exports = {
	mediasValidator,
};
