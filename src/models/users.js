const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
  const User = Sequelize.define(
    "users",
    {
      id_user: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      date_birth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING(1),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      pseudo: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "users",
    }
  );
  return User;
};
