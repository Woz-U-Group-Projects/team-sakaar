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
    Email: {
      type: DataTypes.STRING,
      unique: true
    },
    Password: DataTypes.STRING,
    AccountType: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    FirstTimeLogin: { type: DataTypes.BOOLEAN, defaultValue: 1}
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};