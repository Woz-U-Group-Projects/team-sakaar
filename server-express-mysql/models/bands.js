'use strict';
module.exports = (sequelize, DataTypes) => {
  const bands = sequelize.define('bands', {
    BandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    Name: DataTypes.STRING,
    ContactPerson: DataTypes.STRING,
    Genre: DataTypes.STRING,
    ZipCode: DataTypes.INTEGER
  }, {});
  bands.associate = function(models) {
    models.bands.hasMany(models.bands, { foreignKey: "BandId" });
  };
  return bands;
};