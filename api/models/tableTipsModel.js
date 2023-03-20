const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class TableTips extends Model {}

TableTips.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  tips: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_restaurantTable: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_service:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'tableTips',
  createdAt: 'created_at',
  updatedAt: 'modified_at'
});

module.exports = TableTips;