const GenreController = require("../controllers/genre-controller");
const bodyValidation = require("../middlewares/body-validation-middleware");
const { mediasValidator } = require("../validators/genre-validator");

const genreRouter = require("express").Router();

genreRouter
	.route("/")
	.get(GenreController.getAll)
	.post(bodyValidation(mediasValidator), GenreController.add);

genreRouter
	.route("/:id")
	.get(GenreController.getOne)
	.put(bodyValidation(mediasValidator), GenreController.update)
	.delete(GenreController.delete);

module.exports = genreRouter;
