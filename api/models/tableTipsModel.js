const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const RestaurantTable = require('../models/restaurantTableModel')

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
    primaryKey: true,
    allowNull:false,
    references:{
    model:'restauranttables',
    key:'id'
    }
  },
  id_service:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull:false,
    references:{
    model:'services',
    key:'id'
    }
  }
}, {
  sequelize,
  modelName: 'tableTips',
  createdAt: 'created_at',
  updatedAt: 'modified_at'
});

TableTips.belongsTo(RestaurantTable, { foreignKey: 'id_restaurantTable' });

module.exports = TableTips;