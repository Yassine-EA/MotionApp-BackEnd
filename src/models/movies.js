const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
  const Movies = Sequelize.define(
    "movie",
    {
      id_movie: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      id_crew: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      title_french: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      synopsis: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      release_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      production_company: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      budget: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_movie_url: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      distinction: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "movie",
    }
  );
  return Movies;
};
