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
    return (
        <div className="Recipes-container">
            <div className="Recipes-box">
                {recipes.map((recipe, i) =>
                    <Recipe 
                        recipe={recipe}
                        key={i}
                    />
                )}
            </div>
        </div>
    )
}

export default Recipes;