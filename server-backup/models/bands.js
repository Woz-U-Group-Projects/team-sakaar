'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const bands = sequelize.define('bands', {
    BandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
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
  };
  return bands;
};