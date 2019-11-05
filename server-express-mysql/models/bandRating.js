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
      _targetKey: "BandId",
      get targetKey() {
        return this._targetKey;
      },
      set targetKey(value) {
        this._targetKey = value;
      },
    });
  };
  return bandRating;
};