const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
  const TvShowMakers = Sequelize.define(
    "tv_show_makers",
    {
      id_maker: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      id_crew: {
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
      tableName: "tv_show_makers",
    }
  );
  return TvShowMakers;
};
