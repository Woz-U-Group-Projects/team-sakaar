'use strict';
module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD:server-express-mysql/models/band.js
  const band = sequelize.define('band', {
=======
  
  const bands = sequelize.define('bands', {
>>>>>>> dev:server-express-mysql/models/bands.js
    BandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
<<<<<<< HEAD:server-express-mysql/models/band.js
    Name: DataTypes.STRING,
    ContactPerson: DataTypes.STRING,
    Email: DataTypes.STRING,
    Genre: DataTypes.STRING,
    ZipCode: DataTypes.INTEGER
  }, {});
  band.associate = function(models) {
    models.band.hasMany(models.band, { foreignKey: "BandId" });
=======
    BandPicture: {
      type: DataTypes.BLOB(),
      name: DataTypes.STRING
    },
    Name:            DataTypes.STRING,
    ContactPerson:   DataTypes.STRING,
    ContactPersonPhoneNumber: DataTypes.STRING,
    Genre:           DataTypes.STRING,
    ZipCode:         DataTypes.INTEGER,
    Bio:             DataTypes.STRING(1024),
    Price:           DataTypes.INTEGER,
    PersonalWebsite: {type: DataTypes.STRING, allowNull:true},
    Facebook:        {type: DataTypes.STRING, allowNull:true},
    Instagram:       {type: DataTypes.STRING, allowNull:true},
    Twitter:         {type: DataTypes.STRING, allowNull:true},
    FirstTimeLogin:  {type: DataTypes.BOOLEAN, defaultValue: 0}
    
  }, {});
  
  bands.associate = function(models) {
    models.bands.hasMany(models.bandRatings, { 
      foreignKey: "BandId" 
    });
>>>>>>> dev:server-express-mysql/models/bands.js
  };
  return band;
};
