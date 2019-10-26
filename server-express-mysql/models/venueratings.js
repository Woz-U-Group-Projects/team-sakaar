'use strict';
module.exports = (sequelize, DataTypes) => {
  const venueRatings = sequelize.define('venueRatings', {
    VenueId: DataTypes.INTEGER,
    FoodServiceRating: DataTypes.INTEGER,
    BarServiceRating: DataTypes.INTEGER,
    MusicVenueRating: DataTypes.INTEGER,
    Comment: DataTypes.STRING
  }, {});
    venueRatings.associate = function(models) {
    models.venueRatings.belongsTo(models.venues, {
      foreignKey: "VenueId",
      targetKey: "VenueId"
    });
  };
  return venueRatings;
};

