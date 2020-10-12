import React from 'react';
// import { Link } from 'react-router-dom';
import './Recipes.css';
import Recipe from '../Recipe/Recipe';
import SearchBar from '../SearchBar/SearchBar';

const Recipes = (props) => {
    return (
        <div className="Recipes-container">
            <SearchBar />
            <div className="Recipes-box">
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
            </div>
        </div>
    )
}

export default Recipes;