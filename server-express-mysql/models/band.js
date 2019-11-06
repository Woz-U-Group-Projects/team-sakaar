'use strict';
module.exports = (sequelize, DataTypes) => {
  const band = sequelize.define('band', {
    BandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    Name: DataTypes.STRING,
    ContactPerson: DataTypes.STRING,
    Email: DataTypes.STRING,
    Genre: DataTypes.STRING,
    ZipCode: DataTypes.INTEGER
  }, {});
  band.associate = function(models) {
    models.band.hasMany(models.band, { foreignKey: "BandId" });
  };
  return band;
};