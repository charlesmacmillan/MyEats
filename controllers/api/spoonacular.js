const axios = require('axios');

const API_KEY = process.env.SPOONACULAR_KEY;

module.exports = {
    getRecipeByIngredients
}

function getRecipeByIngredients(req, res) {
    axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=banana`)
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



// export function getRecipeByIngredients() {
//     return fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=banana`)
//         .then(res => res.json())
// }