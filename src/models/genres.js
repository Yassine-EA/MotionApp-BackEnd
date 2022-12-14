const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
	const Genres = Sequelize.define(
		"genres",
		{
			id_genre: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				unique: true,
			},
			genre_value: {
				type: DataTypes.STRING(250),
				allowNull: false,
			},
		},
		{
			timestamps: false,
			tableName: "genres",
		}
	);
	return Genres;
};
