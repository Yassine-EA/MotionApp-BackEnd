const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
  const Genre = Sequelize.define(
    "genre",
    {
      id_genre: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      genre: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "genre",
    }
  );
  return Genre;
};
