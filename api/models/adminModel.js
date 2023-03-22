const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Admin extends Model {}

Admin.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  pincode: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'admins',
  createdAt: 'created_at',
  updatedAt: 'modified_at'
});

module.exports = Admin;