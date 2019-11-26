'use strict';
module.exports = (sequelize, DataTypes) => {
  const venueRating = sequelize.define('venueRating', {
    VenueId: DataTypes.INTEGER,
    FoodServiceRating: DataTypes.INTEGER,
    BarServiceRating: DataTypes.INTEGER,
    MusicVenueRating: DataTypes.INTEGER,
    Comment: DataTypes.STRING
  }, {});
    venueRating.associate = function(models) {
    models.venueRating.belongsTo(models.venue, {
      foreignKey: "VenueId",
      targetKey: "VenueId"
    });
  };
  return venueRating;
};

