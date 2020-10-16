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
        <div className="Recipes-box">
                {recipes.map((recipe, i) =>
                    <Recipe 
                        recipe={recipe}
                        key={i}
                    />
                )}
        </div>
        :
        <h1 className="advice"> &#128072; Add ingredients, then recipes will show up here &#128073;</h1>

    return (
        <div className="Recipes-container">
          {recipees}
        </div>
    )
}

export default Recipes;