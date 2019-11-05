'use strict';
module.exports = (sequelize, DataTypes) => {
  const client = sequelize.define('client', {
    ClientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    CompanyName: DataTypes.STRING,
    EventName: DataTypes.STRING,
    EventDate: DataTypes.DATE, 
    EventZipCode: DataTypes.INTEGER,
    Genre: DataTypes.STRING
    
  }, {});
  client.associate = function(models) {

models.client.hasMany(models.client, { foreignKey: "ClientId", targetKey: "ClientId"  });
  };
  return client;
};