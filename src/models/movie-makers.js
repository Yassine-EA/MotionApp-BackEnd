const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
  const MovieMakers = Sequelize.define(
    "movie_makers",
    {
      id_maker: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      id_tv: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      trade: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "movie_makers",
    }
  );
  return MovieMakers;
};
