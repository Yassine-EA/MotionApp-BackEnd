const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
  const MediaGenre = Sequelize.define(
    "media_genre",
    {
      id_genre: {
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
      tableName: "media_genre",
    }
  );
  return MediaGenre;
};
