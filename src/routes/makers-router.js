const MakersController = require("../controllers/makers-controller");
const bodyValidation = require("../middlewares/body-validation-middleware");
const { castMovieValidator } = require("../validators/makers-validator");

const makersRouter = require("express").Router();

makersRouter
	.route("/")
	.get(MakersController.getAll)
	.post(bodyValidation(castMovieValidator), MakersController.add);

makersRouter
	.route("/:id")
	.get(MakersController.getOne)
	.put(bodyValidation(castMovieValidator), MakersController.update)
	.delete(MakersController.delete);

module.exports = makersRouter;
