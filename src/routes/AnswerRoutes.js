const router = require('express').Router();
const AnswerController = require('../controllers/AnswerController');

router.post('/create', AnswerController.createAnswer);
router.put('/update/:id', AnswerController.updateAnswer);
router.delete('/delete/:id', AnswerController.deleteAnswer);
router.get('/getAll', AnswerController.getAllAnswer);
router.get('/getOne/:id', AnswerController.getOneAnswer);
router.get('/getAllByQuestionId/:id', AnswerController.getAllByQuestionId);


module.exports = router;