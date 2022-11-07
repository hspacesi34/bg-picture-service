const sequelize = require('../../DBConnection');
const DataTypes = require('sequelize');

const QuestionModel = require('./QuestionModel');


const QuizzModel = sequelize.define("quizz", {
    name: DataTypes.STRING
});

QuizzModel.hasMany(QuestionModel, { as: "questions" });
QuestionModel.belongsTo(QuizzModel, {
    foreignKey: "quizzId",
    as: "quizz"
})  
  
module.exports = QuizzModel;