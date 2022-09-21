const KnownForController = require("../controllers/known-for-controller");
const bodyValidation = require("../middlewares/body-validation-middleware");
const { knownForValidator } = require("../validators/known-for-validator");

const knownForRouter = require("express").Router();

knownForRouter
	.route("/")
	.get(KnownForController.getAll)
	.post(bodyValidation(knownForValidator), KnownForController.add);

knownForRouter
	.route("/:id")
	.get(KnownForController.getOne)
	.put(bodyValidation(knownForValidator), KnownForController.update)
	.delete(KnownForController.delete);

module.exports = knownForRouter;
