const EpisodeController = require("../controllers/episodes-controller");
const bodyValidation = require("../middlewares/body-validation-middleware");
const { episodeValidator } = require("../validators/episode-validator");

const episodeRouter = require("express").Router();

episodeRouter
  .route("/")
  .get(EpisodeController.getAll)
  .post(bodyValidation(episodeValidator), EpisodeController.add);

episodeRouter
  .route("/:id")
  .get(EpisodeController.getOne)
  .put(bodyValidation(episodeValidator), EpisodeController.update)
  .delete(EpisodeController.delete);

module.exports = episodeRouter;
