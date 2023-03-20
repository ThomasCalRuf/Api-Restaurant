const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Service extends Model {}

Service.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  shiftType: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  shiftClosed: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'services',
  createdAt: 'created_at',
  updatedAt: 'modified_at'
});

module.exports = Service;