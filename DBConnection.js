const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'test_db',
    'root',
    'test',
     {
       host: 'localhost',
       dialect: 'mysql',
       define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true
    }
     }
);

module.exports = sequelize;