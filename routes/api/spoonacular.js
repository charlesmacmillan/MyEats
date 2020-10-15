const express = require('express');
const router = express.Router();
const APICtrl = require('../../controllers/api/spoonacular');

router.use(require('../../config/auth'));

router.get('/recipe', APICtrl.getRecipeByIngredients);
router.get('/recipe/:id', APICtrl.getSteps);

module.exports = router;