import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './Recipes.css';
import Recipe from '../Recipe/Recipe';
import spoonacular from '../../utils/spoonacular';

const Recipes = props => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        spoonacular.getAll().then(res => setRecipes(res))
    }, [props.things])
    let recipees = recipes.length ? 
        <>  
            <div className="Recipes-key">
                <p>key</p>
                     <small>ingredients count</small>
                 <div className="Recipes-key-counter">
                     <div className="Recipes-key-piece">
                        <small>from<br/>inventory</small>
                        <small className="Recipe-from"></small>
                    </div><div className="Recipes-key-piece">
                        <small>not<br/>from<br/>inventory</small>
                        <small className="Recipe-not-from"></small>
                    </div><div className="Recipes-key-piece">
                        <small>unused<br/>from<br/>inventory</small>
                        <small className="Recipe-unused"></small>
                    </div>
                </div>
            </div>
            <div className="Recipes-box">
                    {recipes.map((recipe, i) =>
                        <Recipe 
                            recipe={recipe}
                            key={i}
                        />
                    )}
            </div>
        </>
        :
        <h1 className="advice"> &#128072; &nbsp;&nbsp;Start adding ingredients, then recipes will show up here</h1>

    return (
        <div className="Recipes-container">
          {recipees}
        </div>
    )
}

export default Recipes;