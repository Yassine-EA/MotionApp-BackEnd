const yup = require("yup");

const classificationValidator = yup.object().shape({
	id_genre: yup.number().required(),
	id_media: yup.string().required().max(20),
});

module.exports = {
	classificationValidator,
};
