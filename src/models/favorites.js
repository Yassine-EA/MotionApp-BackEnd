const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
  const Favorites = Sequelize.define(
    "favorites",
    {
      id_movie: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      id_tv: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      id_user: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "favorites",
    }
  );
  return Favorites;
};
