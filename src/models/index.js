const { Sequelize } = require("sequelize");

const { DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_SERVER, DB_PORT } =
	process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
	host: DB_SERVER,
	port: DB_PORT,
	dialect: "mysql",
});

const db = {};

db.sequelize = sequelize;

db.Genres = require("./genres")(sequelize);
db.Makers = require("./makers")(sequelize);
db.Medias = require("./medias")(sequelize);
db.KnownFor = require("./known-for")(sequelize);
db.Roles = require("./roles")(sequelize);
db.Similars = require("./similars")(sequelize);
db.CastMovies = require("./cast-movies")(sequelize);
db.Images = require("./images")(sequelize);
db.Classification = require("./classification")(sequelize);

// db.Genre.belongsToMany(db.Medias, { through: "media_genre" });
// db.Medias.belongsToMany(db.Genre, { through: "media_genre" });

// db.tournoi.hasOne(db.scoreMatch, {
//   foreignKey: "id_tournoi",
// });

module.exports = db;
