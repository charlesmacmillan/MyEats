const express = require('express');
const router = express.Router();
const APICtrl = require('../../controllers/api/spoonacular');

router.use(require('../../config/auth'));

router.get('/recipe', APICtrl.getRecipeByIngredients);

module.exports = router;