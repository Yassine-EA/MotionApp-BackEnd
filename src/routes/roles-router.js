const RolesController = require("../controllers/roles-controller");
const bodyValidation = require("../middlewares/body-validation-middleware");
const { rolesValidator } = require("../validators/roles-validator");

const rolesRouter = require("express").Router();

rolesRouter
	.route("/")
	.get(RolesController.getAll)
	.post(bodyValidation(rolesValidator), RolesController.add);

rolesRouter
	.route("/:id")
	.get(RolesController.getOne)
	.put(bodyValidation(rolesValidator), RolesController.update)
	.delete(RolesController.delete);

module.exports = rolesRouter;
