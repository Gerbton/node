const Sequelize = require('sequelize');
const sequelize = new Sequelize('node', 'node', 'node', {
    host: 'database',
    dialect: 'mysql'
});

module.exports = sequelize;