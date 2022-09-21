const ImageController = require("../controllers/images-controller");
const bodyValidation = require("../middlewares/body-validation-middleware");
const { ImagesValidator } = require("../validators/images-validator");

const ImagesRouter = require("express").Router();

ImagesRouter.route("/")
	.get(ImageController.getAll)
	.post(bodyValidation(ImagesValidator), ImageController.add);

ImagesRouter.route("/:id")
	.get(ImageController.getOne)
	.put(bodyValidation(ImagesValidator), ImageController.update)
	.delete(ImageController.delete);

module.exports = ImagesRouter;
