const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
  const EpisodeMakers = Sequelize.define(
    "episode-makers",
    {
      id_episode: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      id_maker: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "episode-makers",
    }
  );
  return EpisodeMakers;
};
