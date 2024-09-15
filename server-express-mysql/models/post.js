'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    UserId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Comment: DataTypes.STRING,
    UserName: DataTypes.STRING,
  }, {});
  post.associate = function(models) {
    // associations can be defined here
  };
  return post;
};