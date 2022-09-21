const MediasController = require("../controllers/medias-controller");
const bodyValidation = require("../middlewares/body-validation-middleware");
const { mediasValidator } = require("../validators/medias-validator");

const mediasRouter = require("express").Router();

mediasRouter
	.route("/")
	.get(MediasController.getAll)
	.post(bodyValidation(mediasValidator), MediasController.add);

mediasRouter
	.route("/:id")
	.get(MediasController.getOne)
	.put(bodyValidation(mediasValidator), MediasController.update)
	.delete(MediasController.delete);

module.exports = mediasRouter;
