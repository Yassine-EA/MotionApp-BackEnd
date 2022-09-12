const episodeRouter = require("./episode-router");
const genreRouter = require("./genre-router");

const router = require("express").Router();

router.use("/episodes", episodeRouter);
router.use("/genres", genreRouter);

module.exports = router;
