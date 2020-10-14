const axios = require('axios').default;
const Thing = require('../../models/thing');

const APIKEY = process.env.APIKEY;

module.exports = {
    getRecipeByIngredients
}

async function getRecipeByIngredients(req, res) {
    const things = await Thing.find({user: req.user._id});
    let ingredients = things.map(thing => thing.thing)
    axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKEY}&ingredients=${ingredients.join()}`)
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
