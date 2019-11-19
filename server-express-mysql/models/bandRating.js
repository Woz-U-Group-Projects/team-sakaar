'use strict';
module.exports = (sequelize, DataTypes) => {
  const bandRating = sequelize.define('bandRating', {
    BandId: DataTypes.INTEGER,
    VenueId: DataTypes.INTEGER,
    Genre: DataTypes.STRING,
    Rating: DataTypes.INTEGER,
    Review: DataTypes.STRING
  }, {});
<<<<<<< HEAD:server-express-mysql/models/bandRating.js
  bandRating.associate = function(models) {
    models.bandRating.belongsTo(models.band, {
=======

  bandRatings.associate = function(models) {
    models.bandRatings.belongsTo(models.bands, {
>>>>>>> dev:server-express-mysql/models/bandratings.js
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
<<<<<<< HEAD:server-express-mysql/models/bandRating.js
  return bandRating;
=======

  
  return bandRatings;
>>>>>>> dev:server-express-mysql/models/bandratings.js
};