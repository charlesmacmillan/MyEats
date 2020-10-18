import React from 'react';
import './IngList.css';
import IngKey from '../IngKey/IngKey';

const IngList = props => {
    let recipe = props.recipe;
    return (
        <div className="RecipePage-ingredients">
            <h4>INGREDIENTS</h4>
            <IngKey recipe={recipe}/>
            <ul className="RecipePage-ul">
                {recipe.usedIngredients.map((ing, i) =>
                    <li className="RecipePage-ing" key={i}>
                        <img className="from" src={ing.image} alt=""/>&nbsp;&nbsp;
                        {ing.original}
                    </li> 
                )}
            </ul><ul className="RecipePage-ul">
                {recipe.missedIngredients.map((ing, i) => 
                    <li className="RecipePage-ing" key={i}>
                        <img className="not-from" src={ing.image} alt=""/>&nbsp;&nbsp;
                        {ing.original}
                    </li>
                )}
            </ul>
        </div>
    )
}


export default IngList;