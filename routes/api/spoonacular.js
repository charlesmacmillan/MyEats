const express = require('express');
const router = express.Router();
const APICtrl = require('../../controllers/api/spoonacular');

router.get('/recipe/:id', APICtrl.getRecipeByIngredients);

module.exports = router;