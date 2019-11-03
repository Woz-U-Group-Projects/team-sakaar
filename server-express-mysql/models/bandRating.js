'use strict';
module.exports = (sequelize, DataTypes) => {
  const bandRating = sequelize.define('bandRating', {
    BandId: DataTypes.INTEGER,
    VenueId: DataTypes.INTEGER,
    Rating: DataTypes.INTEGER,
    Review: DataTypes.STRING
  }, {});
  bandRating.associate = function(models) {
    models.bandRating.belongsTo(models.band, {
      foreignKey: "BandId",
      targetKey: "BandId"
    });
  };
  return bandRating;
};