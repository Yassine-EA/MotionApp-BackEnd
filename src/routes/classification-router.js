const ClassificationController = require("../controllers/classification-controller");
const bodyValidation = require("../middlewares/body-validation-middleware");
const {
	classificationValidator,
} = require("../validators/classification-validator");

const classificationRouter = require("express").Router();

classificationRouter
	.route("/")
	.get(ClassificationController.getAll)
	.post(
		bodyValidation(classificationValidator),
		ClassificationController.add
	);

classificationRouter
	.route("/:id")
	.get(ClassificationController.getOne)
	.put(
		bodyValidation(classificationValidator),
		ClassificationController.update
	)
	.delete(ClassificationController.delete);

module.exports = classificationRouter;
