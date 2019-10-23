'use strict';
module.exports = (sequelize, DataTypes) => {
  const bandRatings = sequelize.define('bandRatings', {
    BandId: DataTypes.INTEGER,
    VenueId: DataTypes.INTEGER,
    Rating: DataTypes.INTEGER,
    Review: DataTypes.STRING
  }, {});
  bandRatings.associate = function(models) {
    models.bandRatings.belongsTo(models.bands, {
      foreignKey: "BandId",
      targetKey: "BandId"
    });
  };
  return bandRatings;
};