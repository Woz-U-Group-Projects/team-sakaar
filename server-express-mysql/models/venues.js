'use strict';
module.exports = (sequelize, DataTypes) => {
  const venues = sequelize.define('venues', {
    VenueId:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    Name: DataTypes.STRING,
    Address: DataTypes.STRING,
    ContactPerson: DataTypes.STRING,
    PhoneNumber: DataTypes.INTEGER
  }, {});
  venues.associate = function(models) {
    models.venues.hasMany(models.venueRatings,{
      foreignKey: "VenueId"
    });
  };
  return venues;
};