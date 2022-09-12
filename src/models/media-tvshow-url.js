const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} Sequelize
 */

module.exports = (Sequelize) => {
  const MediaTvShoweUrl = Sequelize.define(
    "media_tv_show",
    {
      id_url: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      id_tv_url: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      media_type: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "media_tv_show",
    }
  );
  return MediaTvShoweUrl;
};
