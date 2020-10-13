var express = require('express');
var router = express.Router();
var thingsCtrl = require('../../controllers/api/things');

router.use(require('../../config/auth'));

router.get('/', thingsCtrl.index);
router.post('/', thingsCtrl.create);
router.delete('/:id', thingsCtrl.delete);


module.exports = router;