var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/create', userController.create);
router.get('/update/:id', userController.update);
router.post('/store', userController.store);
router.put('/store/:id', userController.store);
router.delete('/delete/:id', userController.delete);
router.get('/:id', userController.detail);
router.get('/', userController.index);

module.exports = router;
