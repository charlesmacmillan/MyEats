import React from 'react';
// import { Link } from 'react-router-dom';
import './Recipe.css';

const Recipe = (props) => {
    return (
        <div className="Recipe-box">
            <h3>{props.recipe.title}</h3>
            <img src={props.recipe.image} alt="recipe pic"/>
        </div>
        // <div className="Recipe-box">
        //     <h3>Recipe Title</h3>
        //     <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872" alt="recipe pic"/>
        // </div>
    )
}

export default Recipe;