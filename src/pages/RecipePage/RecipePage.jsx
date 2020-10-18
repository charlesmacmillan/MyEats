import React from 'react';
import { Link } from 'react-router-dom';
import './RecipePage.css';
import StepsList from '../../components/StepsList/StepsList';
import IngList from '../../components/IngList/IngList';

const RecipePage = props => {
    const recipe = props.recipe.location.state.recipe;
   
    return(
        <div className="RecipePage">
            <Link className="RecipePage-Link" to='/'>BACK</Link>
            <h1>{recipe.title}</h1>
            <img className="RecipePage-img" src={recipe.image} alt="recipe"/>
            <IngList recipe={recipe}/>
            <StepsList recipe={recipe}/>
        </div>
    )
}

export default RecipePage;