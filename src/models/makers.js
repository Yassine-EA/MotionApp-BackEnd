const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
	const Makers = Sequelize.define(
		"makers",
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
				unique: true,
			},
			full_name: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			role: {
				type: DataTypes.STRING(100),
			},
			image: {
				type: DataTypes.STRING(2000),
			},
			date_birth: {
				type: DataTypes.STRING(150),
				defaultValue: "  ",
			},
			date_death: {
				type: DataTypes.STRING(150),
				defaultValue: "  ",
			},
		},
		{
			timestamps: false,
			tableName: "makers",
		}
	);
	return Makers;
};
