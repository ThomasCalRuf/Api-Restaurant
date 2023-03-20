const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class RestaurantTable extends Model {}

RestaurantTable.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'restaurantTable',
  createdAt: 'created_at',
  updatedAt: 'modified_at'
});

module.exports = RestaurantTable;