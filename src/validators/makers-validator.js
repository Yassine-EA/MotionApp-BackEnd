const yup = require("yup");

const makersValidator = yup.object().shape({
	id_maker: yup.string().trim().max(20).required(),
	id_media: yup.string().trim().max(20).required(),
	full_name: yup.string().required().max(100),
	role: yup.string().required().max(100),
	image: yup.string().required().max(2000),
	date_birth: yup.string().required().max(150),
	date_death: yup.string().required().max(150),
});

module.exports = {
	makersValidator,
};
