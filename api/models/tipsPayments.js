const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class TipsPayments extends Model {}

TipsPayments.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  amount:{
    type :DataTypes.INTEGER,
    allowNull:false
  },
  id_user:{
    type: DataTypes.INTEGER,
    allowNull:false,
    references:{
    model:'users',
    key:'id'
    }
  }
}, {
  sequelize,
  modelName: 'tipspayments',
  createdAt: 'created_at',
  updatedAt: 'modified_at'
});

module.exports = TipsPayments;