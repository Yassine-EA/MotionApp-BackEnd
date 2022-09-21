const yup = require("yup");

const rolesValidator = yup.object().shape({
	id_maker: yup.string().trim().max(20).required(),
	id_media: yup.string().trim().max(20).required(),
	roles: yup.string().required().max(100),
	as_character: yup.string().required().max(250),
});

module.exports = {
	rolesValidator,
};
