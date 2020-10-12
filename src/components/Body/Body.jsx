import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css';
import Inventory from '../../components/Inventory/Inventory';
import Recipes from '../../components/Recipes/Recipes';

const Body = (props) => {
    let content = props.user ?
        <div className="Body">
            <Inventory
                user={props.user}
            />
            <Recipes
                user={props.user}
                recipes={props.recipes}
            />
        </div>
        :
        <div className="Body-message">
            <h1>Please <Link to='/login' className='NavBar-link'>LOG IN</Link>
             or
            <Link to='/signup' className='NavBar-link'>SIGN UP</Link> to use this app :) </h1>
        </div>
    return (
        content
    )
}

export default Body;