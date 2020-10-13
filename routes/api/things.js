var express = require('express');
var router = express.Router();
var thingsCtrl = require('../../controllers/api/things');

/* GET /api/puppies */
router.get('/', thingsCtrl.index);
router.post('/', thingsCtrl.create);
router.delete('/:id', thingsCtrl.delete);

module.exports = router;