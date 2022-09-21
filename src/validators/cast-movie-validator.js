const yup = require("yup");

const castMovieValidator = yup.object().shape({
	id_maker: yup.string().trim().max(20).required(),
	id_media: yup.string().trim().max(20).required(),
	role: yup.string().required().max(100),
});

module.exports = {
	castMovieValidator,
};
