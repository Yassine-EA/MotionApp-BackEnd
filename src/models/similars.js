const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
	const Similars = Sequelize.define(
		"similars",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				unique: true,
			},
			id_media: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
			id_similars: {
				type: DataTypes.STRING(20),
			},
			ratings: {
				type: DataTypes.STRING(10),
			},
		},
		{
			timestamps: false,
			tableName: "similars",
		}
	);
	return Similars;
};
