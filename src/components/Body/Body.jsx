import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css';
import Inventory from '../../components/Inventory/Inventory';
import Recipes from '../../components/Recipes/Recipes';

const Body = (props) => {
    let content = props.user ?
        <div className="Body">
            <Inventory
                handleDeleteThing={props.handleDeleteThing}
                handleAddThing={props.handleAddThing}
                things={props.things}
                user={props.user}
            />
            <Recipes
                things={props.things}
                user={props.user}
                recipes={props.recipes}
            />
        </div>
        :
        <div className="Body-message">
            <h1>Please <Link to='/login' className='NavBar-link'>LOG IN</Link>
             or
            <Link to='/signup' className='NavBar-link'>SIGN UP</Link> to use this app  </h1>
            <h4>Why use this app?</h4>
            <li>Save what ingredients you have in your kitchen into our database!</li>
            <li>Get great recipe ideas based on those ingredients!</li>
            <li>Our recipes have easy to follow instructions!</li>
            <li></li>
            <img className="Body-img" src="https://i.imgur.com/kWYgZbK.png" alt=""/>
        </div>
    return (
        content
    )
}

export default Body;