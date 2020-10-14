import React, { useState, useEffect } from 'react';
import spoonacular from '../../utils/spoonacular';
import './RecipePage.css';

const RecipePage = props => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        spoonacular.getAll().then(res => setRecipes(res))
    }, [])
    console.log(recipes)
    return(
        <div>
            <h1></h1>
        </div>
    )
}

export default RecipePage;