var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/users');
/* GET users listing. */
router.get('/', ctrl.getAllUsers);
router.post('/', ctrl.create);
router.put('/:userId', ctrl.update);
router.delete('/:userId', ctrl.delete);

module.exports = router;
