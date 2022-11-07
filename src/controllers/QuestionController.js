const QuestionModel = require('../models/QuestionModel');

exports.createQuestion = async (req, res) => {
    await QuestionModel.create({
        content: req.body.content,
        quizzId: req.body.quizzId
    }).then(response => {res.send(response)}).catch(err => res.send('erreur'))
}

exports.getAllByQuizzId = async (req, res) => {
    await QuestionModel.findAll({
        where: {
            quizzId: req.params.quizzId
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'quizzId']
        }
    }).then(response => {res.send(response)}).catch(err => res.send('erreur'))
}

exports.deleteQuestion = async (req, res) => {
    await QuestionModel.destroy({
        where: {
            id: req.params.id
        }
    }).then(response => res.send('question supprimée')).catch(err => res.send('erreur'));
}

exports.getAllQuestion = async (req, res) => {
    await QuestionModel.findAll().then(response => res.send(response)).catch(err => res.send('erreur'));
}

exports.getOneQuestion = async (req, res) => {
    await QuestionModel.findByPk(req.params.id).then(response => res.send(response)).catch(err => res.send('erreur'));
}

exports.updateQuestion = async (req, res) => {
    await QuestionModel.update({
        content: req.body.content
    }, {
        where: { id: req.params.id }
    }).then(response => res.send('question updaté')).catch(err => res.send('erreur'+err));
}