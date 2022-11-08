const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'begreen-picture',
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