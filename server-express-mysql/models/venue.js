'use strict';
module.exports = (sequelize, DataTypes) => {
  const venue = sequelize.define('venue', {
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
    Email: DataTypes.STRING,
    PhoneNumber: DataTypes.STRING
    
}, {});
  venue.associate = function(models) {
    models.venue.hasMany(models.venue, { foreignKey: "VenueId" });
  };
  return venue;
};
