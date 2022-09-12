const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
  const Episodes = Sequelize.define(
    "episode",
    {
      id_episode: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      id_tv: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      id_crew: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      episode: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      first_release: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "episode",
    }
  );
  return Episodes;
};
