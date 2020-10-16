const axios = require('axios').default;
const Thing = require('../../models/thing');

const APIKEY = process.env.APIKEY;

module.exports = {
    getRecipeByIngredients,
    getSteps
}

async function getRecipeByIngredients(req, res) {
    const things = await Thing.find({user: req.user._id});
    let ingredients = things.map(thing => thing.thing)
    axios.get(`https://rapidapi.p.rapidapi.com/recipes/findByIngredients?ingredients=${ingredients.join()}`, {
        headers: {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	        "x-rapidapi-key": APIKEY
        }
    })
    .then(function(response) {
        // handle success
        console.log(response);
        res.json(response.data);
    })
    .catch(function(error) {
        // handle error
        console.log(error)
    })
}



function getSteps(req, res) {
    console.log(req.params.id)
    axios.get(`https://rapidapi.p.rapidapi.com/recipes/${req.params.id}/analyzedInstructions`, {
        headers: {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": APIKEY
        }
    })
    .then(function(response) {
        console.log('why it look like dis ----------------------------------', response)
        res.json(response.data)
    })
    .catch(function(errors) {
        console.log(errors);
    })
}

