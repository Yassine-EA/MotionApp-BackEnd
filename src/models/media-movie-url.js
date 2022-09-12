const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
  const MediaMovieUrl = Sequelize.define(
    "media_movie_url",
    {
      id_url: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      id_movie_url: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      media_type: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "media_movie_url",
    }
  );
  return MediaMovieUrl;
};
