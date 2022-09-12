const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
  const Url = Sequelize.define(
    "url",
    {
      id_url: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      url: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "url",
    }
  );
  return Url;
};
