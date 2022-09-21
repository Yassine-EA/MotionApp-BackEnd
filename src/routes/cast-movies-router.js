const CastMoviesController = require("../controllers/cast-movies-controller");
const bodyValidation = require("../middlewares/body-validation-middleware");
const { castMovieValidator } = require("../validators/cast-movie-validator");

const castMoviesRouter = require("express").Router();

castMoviesRouter
	.route("/")
	.get(CastMoviesController.getAll)
	.post(bodyValidation(castMovieValidator), CastMoviesController.add);

castMoviesRouter
	.route("/:id")
	.get(CastMoviesController.getOne)
	.put(bodyValidation(castMovieValidator), CastMoviesController.update)
	.delete(CastMoviesController.delete);

module.exports = castMoviesRouter;
