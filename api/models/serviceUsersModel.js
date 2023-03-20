const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class ServiceUsers extends Model {}

ServiceUsers.init({
  id_service:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references:{
      model:'services',
      key:'id'
    }
  },
  id_user:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull:false,
    references:{
    model:'users',
    key:'id'
    }
  }
}, {
  sequelize,
  modelName: 'serviceusers',
  timestamps: false
});

module.exports = ServiceUsers;