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

db.EpisodeMakers = require("./episode-makers")(sequelize);
db.Episodes = require("./episodes")(sequelize);
db.Favorites = require("./favorites")(sequelize);
db.Genre = require("./genres")(sequelize);
db.Makers = require("./makers")(sequelize);
db.MediaGenre = require("./media-genre")(sequelize);
db.MediaMovieUrl = require("./media-movie-url")(sequelize);
db.MediaMovie = require("./media-movie")(sequelize);
db.MediaTvShoweUrl = require("./media-tvshow-url")(sequelize);
db.MediaTvShow = require("./media-tvshow")(sequelize);
db.Medias = require("./medias")(sequelize);
db.MovieMakers = require("./movie-makers")(sequelize);
db.Movies = require("./movies")(sequelize);
db.TvShow = require("./tv-shows")(sequelize);
db.TvShowMakers = require("./tvshow-makers")(sequelize);
db.url = require("./url")(sequelize);
db.users = require("./users")(sequelize);

// db.Genre.belongsToMany(db.Medias, { through: "media_genre" });
// db.Medias.belongsToMany(db.Genre, { through: "media_genre" });

// db.tournoi.hasOne(db.scoreMatch, {
//   foreignKey: "id_tournoi",
// });

module.exports = db;
