import React from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';

const Recipe = (props) => {
    console.log(props.recipe)
    return (
        <Link 
        to={{ 
            pathname: `recipe/${props.recipe.id}`,
            state: {
                recipe: props.recipe
            } 
        }}
        recipe={props.recipe}
        className="Recipe-box"
        >
            <div className="h3"><h3>{props.recipe.title}</h3></div>
            <div>
                <img src={props.recipe.image} alt="recipe pic"/>
                <div className="Recipe-ing-count">
                    <small className="Recipe-from">
                        {props.recipe.usedIngredientCount}
                    </small><small className="Recipe-not-from">
                        {props.recipe.missedIngredientCount}
                    </small><small className="Recipe-unused">
                        {props.recipe.unusedIngredients.length}
                    </small>
                </div>
            </div>
        </Link>
    )
}

export default Recipe;