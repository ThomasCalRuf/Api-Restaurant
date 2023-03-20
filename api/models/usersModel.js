const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Users extends Model {}

Users.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status:{
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  active:{
    type :DataTypes.BOOLEAN,
    allowNull: false
  } 
}, {
  sequelize,
  modelName: 'users',
  createdAt: 'created_at',
  updatedAt: 'modified_at'
});

module.exports = Users;