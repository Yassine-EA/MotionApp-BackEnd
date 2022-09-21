const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
	const Medias = Sequelize.define(
		"medias",
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
				unique: true,
			},
			title: {
				type: DataTypes.STRING(250),
				allowNull: false,
			},
			fullTitle: {
				type: DataTypes.STRING(250),
				defaultValue: null,
			},
			media_type: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			release_year: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			image: {
				type: DataTypes.STRING(2000),
				allowNull: false,
			},
			releaseDate: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			runtimeStr: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			plot: {
				type: DataTypes.STRING(2000),
				defaultValue: null,
			},
			directors: {
				type: DataTypes.STRING(250),
				defaultValue: null,
			},
			writers: {
				type: DataTypes.STRING(250),
				defaultValue: null,
			},
			stars: {
				type: DataTypes.STRING(250),
				defaultValue: null,
			},
			creators: {
				type: DataTypes.STRING(250),
				defaultValue: null,
			},
			seasons: {
				type: DataTypes.STRING(250),
				defaultValue: null,
			},
			companies: {
				type: DataTypes.STRING(250),
				defaultValue: null,
			},
			countries: {
				type: DataTypes.STRING(250),
				defaultValue: null,
			},
			languages: {
				type: DataTypes.STRING(250),
				defaultValue: null,
			},
			rating: {
				type: DataTypes.STRING(5),
				defaultValue: null,
			},
			poster: {
				type: DataTypes.STRING(2000),
				defaultValue: null,
			},
			backdrops: {
				type: DataTypes.STRING(2000),
				defaultValue: null,
			},
		},
		{
			timestamps: false,
			tableName: "medias",
		}
	);
	return Medias;
};
