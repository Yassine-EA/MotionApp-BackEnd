const mediasRouter = require("./medias-router");
const ImagesRouter = require("./images-router");
const knownForRouter = require("./known-for-router");
const makersRouter = require("./makers-router");
const rolesRouter = require("./roles-router");
const similarsRouter = require("./similars-router");
const genreRouter = require("./genres-router");
const classificationRouter = require("./classification-router");
const castMoviesRouter = require("./cast-movies-router");

const router = require("express").Router();

router.use("/medias", mediasRouter);
router.use("/images", ImagesRouter);
router.use("/knowns", knownForRouter);
router.use("/makers", makersRouter);
router.use("/roles", rolesRouter);
router.use("/similars", similarsRouter);
router.use("/genres", genreRouter);
router.use("/class", classificationRouter);
router.use("/casts", castMoviesRouter);

module.exports = router;
