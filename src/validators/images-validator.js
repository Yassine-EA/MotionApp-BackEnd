const yup = require("yup");

const ImagesValidator = yup.object().shape({
	id_media: yup.string().trim().max(20).required(),
	image_type: yup.string().trim().max(20).required(),
	url: yup.string().required().max(2000),
});

module.exports = {
	ImagesValidator,
};
