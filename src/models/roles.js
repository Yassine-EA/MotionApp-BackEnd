const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
	const Roles = Sequelize.define(
		"roles",
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
				allowNull: false,
			},
			as_character: {
				type: DataTypes.STRING(250),
				defaultValue: "crédité au générique",
			},
		},
		{
			timestamps: false,
			tableName: "roles",
		}
	);
	return Roles;
};
