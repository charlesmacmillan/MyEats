import React from 'react';
import './IngKey.css';

const IngKey = props => {
    let recipe = props.recipe;
    return (
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
    )
}

export default IngKey;