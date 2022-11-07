const router = require('express').Router();
const QuizzController = require('../controllers/QuizzController');

router.post('/create', QuizzController.createQuizz);
router.put('/update/:id', QuizzController.updateQuizz);
router.delete('/delete/:id', QuizzController.deleteQuizz);
router.get('/getAll', QuizzController.getAllQuizz);
router.get('/getOne/:id', QuizzController.getOneQuizz);

module.exports = router;