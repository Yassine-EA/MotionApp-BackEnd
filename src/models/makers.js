const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
  const Makers = Sequelize.define(
    "makers",
    {
      id_maker: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      stage_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      middle_name: {
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
      date_death: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      nationality: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      place_birth: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "makers",
    }
  );
  return Makers;
};
