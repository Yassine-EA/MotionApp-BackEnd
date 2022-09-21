const yup = require("yup");

const knownForValidator = yup.object().shape({
	id_maker: yup.string().trim().max(20).required(),
	id_media: yup.string().trim().max(20).required(),
	roles: yup.string().required().max(50),
});

module.exports = {
	knownForValidator,
};
