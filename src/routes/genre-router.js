const GenreController = require("../controllers/genre-controller");
const bodyValidation = require("../middlewares/body-validation-middleware");
const { genreValidator } = require("../validators/genre-validator");

const genreRouter = require("express").Router();

genreRouter
  .route("/")
  .get(GenreController.getAll)
  .post(bodyValidation(genreValidator), GenreController.add);

genreRouter
  .route("/:id")
  .get(GenreController.getOne)
  .put(bodyValidation(genreValidator), GenreController.update)
  .delete(GenreController.delete);

module.exports = genreRouter;
