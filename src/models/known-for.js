const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
	const KnownFor = Sequelize.define(
		"known_for",
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
			role: {
				type: DataTypes.STRING(50),
				defaultValue: "crédité au générique",
			},
		},
		{
			timestamps: false,
			tableName: "known_for",
		}
	);
	return KnownFor;
};
