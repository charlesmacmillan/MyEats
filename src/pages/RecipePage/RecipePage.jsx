import React from 'react';
import './RecipePage.css';

const RecipePage = props => {
    const recipe = props.recipe.location.state.recipe;
    console.log(recipe) 
    return(
        <div className="">
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt="recipe image"/>
            <ul>
            {recipe.usedIngredients.map((ing, i) => 
                <li key={i}>
                    {ing.original}
                </li>
            )}
            </ul>
        </div>
    )
}

export default RecipePage;