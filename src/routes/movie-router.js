const MovieController = require("../controllers/");
const bodyValidation = require("../middleware/body-validation-middleware");
const { movieValidator } = require("../validators/movie-validator");

const moviesRouter = require("express").Router();

moviesRouter
	.route("/")
	.get(MovieController.getAll)
	.post(bodyValidation(movieValidator), MovieController.add);

moviesRouter
	.route("/:id")
	.get(MovieController.getOne)
	.put(bodyValidation(movieValidator), MovieController.update)
	.delete(MovieController.delete);

module.exports = moviesRouter;
