require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { mediasAssignment } = require("./utils/seed-medias");
const { mediaDbSeed } = require("./utils/seed-medias");
const { makersDbSeed } = require("./utils/seed-makers");
const { genreDbSeed } = require("./utils/seed-genre");
const { imageDbSeed } = require("./utils/seed-images");
const { castSeed, similarSeed } = require("./utils/seed-similars");
const { castActorSeed } = require("./utils/seed-roles");
const { PORT } = process.env;

const app = express();
app.use(express.json());
// Initialize DB
const db = require("./models");

db.sequelize
	.authenticate()
	.then(() => console.log("Connection DB - OK"))
	.catch((error) => console.log("Connection DB - NOT OK"));
// db.sequelize.sync({ alter: true, force: true });
// Middleware
app.use(cors());
app.use(express.json());

// Routing
const router = require("./routes");
app.use("/api", router);
console.log(PORT);
app.listen(PORT, () => {
	console.log(`Listenning to http://localhost:${PORT}`);
});
// mediaDbSeed();
// makersDbSeed();
// genreDbSeed();
// imageDbSeed();
// castSeed();
// similarSeed();
// castActorSeed();
