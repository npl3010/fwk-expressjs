var express = require('express');
var router = express.Router();
const meController = require('../controllers/meController');

router.get('/my-employees', meController.employees);
router.get('/', meController.index);

module.exports = router;
