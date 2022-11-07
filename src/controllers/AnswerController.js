const AnswerModel = require('../models/AnswerModel');

exports.createAnswer = async (req, res) => {
    await AnswerModel.create({
        content: req.body.content,
        isCorrect: req.body.isCorrect,
        questionId: req.body.questionId
    }).then(response => res.send(response)).catch(err => res.send(err));
}

exports.updateAnswer = async (req, res) => {
    await AnswerModel.update({
        content: req.body.content,
        isCorrect: req.body.isCorrect
    },{
        where: {
            id: req.params.id
        }
    }).then(response => res.send(response)).catch(err => res.send(err));
}

exports.deleteAnswer = async (req, res) => {
    await AnswerModel.destroy({
        where: {
            id: req.params.id
        }
    }).then(response => res.send('réponse supprimée')).catch(err => res.send(err));
}

exports.getAllAnswer = async (req, res) => {
    await AnswerModel.findAll().then(response => res.send(response)).catch(err => res.send(err));
}

exports.getOneAnswer = async (req, res) => {
    await AnswerModel.findByPk(req.params.id).then(response => res.send(response)).catch(err => res.send(err));
}

exports.getAllByQuestionId = async (req, res) => {
    await AnswerModel.findAll({
        where: {
            questionId: req.params.id
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'questionId']
        }
    }).then(response => res.send(response)).catch(err => res.send(err));
}