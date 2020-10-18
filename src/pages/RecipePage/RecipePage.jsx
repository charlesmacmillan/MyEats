import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RecipePage.css';
import spoonacular from '../../utils/spoonacular';

const RecipePage = props => {
    const recipe = props.recipe.location.state.recipe;
    const [steps, setSteps] = useState([]);
    useEffect(() => {
        spoonacular.getInfo(recipe.id).then(res => setSteps(res))
    }, [recipe.id])
 
    let stepsHTML = steps.length ? 
        <div className="steps">
            <h4>INSTRUCTIONS</h4>
            {steps[0].steps.map((step, i) => 
                <li className="step" key={i}><span>{step.step}</span></li>
                )}
        </div>
        :
        <h4>Sorry! There are no instructions available for this recipe &#128530;</h4>
        
    return(
        <div className="RecipePage">
            <Link className="RecipePage-Link" to='/'>BACK</Link>
            <h1>{recipe.title}</h1>
            <img className="RecipePage-img" src={recipe.image} alt="recipe"/>
            <div className="RecipePage-ingredients">
                <h4>INGREDIENTS</h4>
                <div className="RecipePage-key">
                    <small>key</small>
                        <div className="RecipePage-key-div">
                            <div className="from key-div">
                                <small className="left">from inventory: <small className="right">{recipe.usedIngredients.length}</small></small>
                            </div>  &nbsp;&nbsp;
                            <div className="not-from key-div">
                                <small className="left">not from inventory: <small> {recipe.missedIngredients.length}</small></small>
                            </div>
                    </div>
                </div>
                <ul>
                    {recipe.usedIngredients.map((ing, i) =>
                        <li className="RecipePage-ing" key={i}>
                            <img className="from" src={ing.image} alt=""/>&nbsp;&nbsp;
                            {ing.original}
                        </li> 
                    )}
                </ul><ul>
                    {recipe.missedIngredients.map((ing, i) => 
                        <li className="RecipePage-ing" key={i}>
                            <img className="not-from" src={ing.image} alt=""/>&nbsp;&nbsp;
                            <p>{ing.original}</p>
                        </li>
                    )}
                </ul>
            </div>
            {stepsHTML}
        </div>
    )
}

export default RecipePage;