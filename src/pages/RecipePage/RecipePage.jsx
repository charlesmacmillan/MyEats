import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RecipePage.css';
import spoonacular from '../../utils/spoonacular';

const RecipePage = props => {
    const recipe = props.recipe.location.state.recipe;
    const [steps, setSteps] = useState([]);
    useEffect(() => {
        spoonacular.getInfo(recipe.id).then(res => setSteps(res))
    }, [])
    console.log(steps) 
   
    return(
        <div className="RecipePage">
            <Link to='/'>BACK</Link>
            <h1>{recipe.title}</h1>
            <img className="RecipePage-img" src={recipe.image} alt="recipe"/>
                {recipe.missedIngredients.map((ing, i) => 
                    <li className="RecipePage-ing not-from" key={i}>
                        <img src={ing.image} alt=""/>&nbsp;&nbsp;
                        <p>{ing.original}</p>
                    </li>
                )}
                {recipe.usedIngredients.map((ing, i) =>
                    <li className="RecipePage-ing from" key={i}>
                         <img src={ing.image} alt=""/>&nbsp;&nbsp;
                        <p>{ing.original}</p>
                    </li>
                )}
        </div>
    )
}

export default RecipePage;