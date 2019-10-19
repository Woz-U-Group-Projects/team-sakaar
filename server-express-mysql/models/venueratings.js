'use strict';
module.exports = (sequelize, DataTypes) => {
  const venueRatings = sequelize.define('venueRatings', {
    BandId: DataTypes.INTEGER,
    VenueId: DataTypes.INTEGER,
    Rating: DataTypes.INTEGER,
    Review: DataTypes.STRING
  }, {});
  venueRatings.associate = function(models) {
    models.venueRatings.belongsTo(models.venues,{
      foreignKey: "VenueId",
      targetKey: "VenueId"
    });
  };
  return venueRatings;
};