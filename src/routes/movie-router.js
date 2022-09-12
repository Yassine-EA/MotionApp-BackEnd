const MovieController = require("../controllers/membre-controller");
const bodyValidation = require("../middleware/body-validation-middleware");
const { movieValidator } = require("../validators/movie-validator");

const movieRouter = require("express").Router();

membreRouter
  .route("/")
  .get(MovieController.getAll)
  .post(bodyValidation(movieValidator), MovieController.add);

membreRouter
  .route("/:id")
  .get(membreController.getOne)
  .put(bodyValidation(movieValidator), MovieController.update)
  .delete(MovieController.delete);

module.exports = movieRouter;
