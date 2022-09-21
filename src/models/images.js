const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
	const Images = Sequelize.define(
		"images",
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
			image_title: {
				type: DataTypes.STRING(20),
			},

			image_type: {
				type: DataTypes.STRING(250),
			},
			url: {
				type: DataTypes.INTEGER(2000),
			},
		},
		{
			timestamps: false,
			tableName: "images",
		}
	);
	return Images;
};
