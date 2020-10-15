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
    axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKEY}&ingredients=${ingredients.join()}&number=1`)
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

async function getSteps(req, res) {
    const id = await req.params.id;
    axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${APIKEY}`)
    .then(function(response) {
        console.log('why it look like dis', response)
        res.json(response.data)
    })
    .catch(function(errors) {
        console.log(errors);
    })
}

