const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
  const Medias = Sequelize.define(
    "media",
    {
      id_media: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      title_french: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      id_creator: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      id_screen_writer: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      poster: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "media",
    }
  );
  return Medias;
};
