import React from 'react';
// import { Link } from 'react-router-dom';
import './Body.css';
import Inventory from '../../components/Inventory/Inventory';
import Recipes from '../../components/Recipes/Recipes';

const Body = (props) => {
    return (
        <div className="Body">
            <Inventory />
            <Recipes />
        </div>
    )
}

export default Body;