const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
  const MediaMovie = Sequelize.define(
    "media_movie",
    {
      id_movie: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      id_media: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "media_movie",
    }
  );
  return MediaMovie;
};
