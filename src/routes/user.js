var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

// Create:
router.post('/store', userController.store);
// Update:
router.put('/store/:id', userController.store);
// Delete:
router.delete('/delete-hardly/:id', userController.deleteHardly);
router.post('/delete-softly/:id', userController.deleteSoftly);
// Read:
router.get('/create', userController.create);
router.get('/update/:id', userController.update);
router.get('/:id', userController.detail);
router.get('/', userController.index);

module.exports = router;
