const yup = require("yup");

const similarsValidator = yup.object().shape({
	id_media: yup.string().trim().max(20).required(),
	id_similars: yup.string().trim().max(20).required(),
});

module.exports = {
	similarsValidator,
};
