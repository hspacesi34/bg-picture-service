const sequelize = require('../../DBConnection');
const DataTypes = require('sequelize');

const PictureModel = sequelize.define("picture", {
    src: DataTypes.STRING
})

module.exports = PictureModel;