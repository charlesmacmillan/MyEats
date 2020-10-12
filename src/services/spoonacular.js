const API_KEY = '1496119e3d4e46aaafb971792dd45d40';

export function getRecipeByIngredients() {
    console.log(API_KEY)
    return fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=banana`)
        .then(res => res.json())
}