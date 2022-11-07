const router = require('express').Router();
const QuestionController = require('../controllers/QuestionController');

router.post('/create', QuestionController.createQuestion);
router.get('/getAllByQuizzId/:quizzId', QuestionController.getAllByQuizzId);
router.delete('/delete/:id', QuestionController.deleteQuestion);
router.put('/update/:id', QuestionController.updateQuestion);
router.get('/getAll', QuestionController.getAllQuestion);
router.get('/getOne/:id', QuestionController.getOneQuestion);


module.exports = router;