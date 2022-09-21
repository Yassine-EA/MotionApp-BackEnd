const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
	const Classification = Sequelize.define(
		"genres",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				unique: true,
			},
			id_genre: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			id_media: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
		},
		{
			timestamps: false,
			tableName: "genres",
		}
	);
	return Classification;
};
