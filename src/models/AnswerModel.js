const sequelize = require('../../DBConnection');
const DataTypes = require('sequelize');


const AnswerModel = sequelize.define("answer", {
    content: DataTypes.STRING,
    isCorrect: DataTypes.BOOLEAN
});

  
  
module.exports = AnswerModel;