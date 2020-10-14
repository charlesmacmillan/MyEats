import React from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';

const Recipe = (props) => {
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
            <h3>{props.recipe.title}</h3>
            <img src={props.recipe.image} alt="recipe pic"/>
        </Link>
    )
}

export default Recipe;