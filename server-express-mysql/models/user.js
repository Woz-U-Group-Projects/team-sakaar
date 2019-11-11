'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Username: {
      type: DataTypes.STRING,
      unique: true
    },
    Password: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};