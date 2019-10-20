'use strict';
module.exports = (sequelize, DataTypes) => {
  const venues = sequelize.define('venues', {
    VenueId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    Name: DataTypes.STRING,
    Address: DataTypes.STRING,
    City: DataTypes.STRING,
    State: DataTypes.STRING,
    ZipCode: DataTypes.INTEGER,
    ContactPerson: DataTypes.STRING,
    Email: DataTypes.STRING
    
}, {});
  venues.associate = function(models) {
    models.venues.hasMany(models.venues, { foreignKey: "VenueId" });
  };
  return venues;
};