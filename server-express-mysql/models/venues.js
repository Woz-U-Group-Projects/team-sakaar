'use strict';
module.exports = (sequelize, DataTypes) => {
  const venues = sequelize.define('venues', {
    VenueId:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    VenuePicture: {
      type: DataTypes.BLOB('long'),
      name: DataTypes.STRING
    },
    Name: DataTypes.STRING,
    Address: DataTypes.STRING,
    ContactPerson: DataTypes.STRING,
    PhoneNumber: DataTypes.STRING,
    FirstTimeLogin: { type: DataTypes.BOOLEAN, defaultValue: 0}
  }, {});
  venues.associate = function(models) {
    models.venues.hasMany(models.venueRatings,{
      foreignKey: "VenueId"
    });
  };
  return venues;
};