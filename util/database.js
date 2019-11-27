const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  'node-complete',
  'root',
  'aa00',
  { dialect: 'mysql', host: 'localhost' }
)

module.exports = sequelize
