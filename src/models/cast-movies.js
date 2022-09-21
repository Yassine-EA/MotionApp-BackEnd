const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
	const CastMovies = Sequelize.define(
		"cast_movies",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				unique: true,
			},
			id_maker: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
			id_media: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
			roles: {
				type: DataTypes.STRING(100),
				defaultValue: "non crédité au générique",
			},
			as_character: {
				type: DataTypes.STRING(250),
				defaultValue: "non crédité au générique",
			},
		},
		{
			timestamps: false,
			tableName: "cast_movies",
		}
	);
	return CastMovies;
};
