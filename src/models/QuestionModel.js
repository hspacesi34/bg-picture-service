const sequelize = require('../../DBConnection');
const DataTypes = require('sequelize');

const AnswerModel = require('./AnswerModel');

const QuestionModel = sequelize.define("question", {
    content: DataTypes.STRING
});

QuestionModel.hasMany(AnswerModel, { as: "answers" });
AnswerModel.belongsTo(QuestionModel, {
    foreignKey: "questionId",
    as: "question"
})  
  
module.exports = QuestionModel;