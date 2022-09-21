const SimilarsController = require("../controllers/similars-controller");
const bodyValidation = require("../middlewares/body-validation-middleware");
const { similarsValidator } = require("../validators/similars-validator");

const similarsRouter = require("express").Router();

similarsRouter
	.route("/")
	.get(SimilarsController.getAll)
	.post(bodyValidation(similarsValidator), SimilarsController.add);

similarsRouter
	.route("/:id")
	.get(SimilarsController.getOne)
	.put(bodyValidation(similarsValidator), SimilarsController.update)
	.delete(SimilarsController.delete);

module.exports = similarsRouter;
