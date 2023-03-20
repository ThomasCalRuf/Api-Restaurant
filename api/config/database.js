const { Sequelize } = require('sequelize');

const name = process.env.NAME_DATABASE;
const user = process.env.USER_DATABASE;
const password = process.env.PASSWORD_DATABASE;
const host = process.env.HOSTNAME_DATABASE;
const dialect = process.env.DIALECT_DATABASE;

const sequelize = new Sequelize(name, user, password, {
  host: host,
  dialect: dialect
});

module.exports = sequelize;