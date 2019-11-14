'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
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
    Email: {
      type: DataTypes.STRING,
      unique: true
    },
    Password: DataTypes.STRING,
    AccountType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    FirstTimeLogin: { type: DataTypes.BOOLEAN, defaultValue: 1}
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};