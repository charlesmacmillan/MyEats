import React from 'react';
// import { Link } from 'react-router-dom';
import './Inventory.css';

const Inventory = (props) => {
    return (
        <div className="Inventory-box">
            <h2>{props.user.name}'s Inventory</h2>
            <ul>
                <li>Thing1</li>
                <li>Thing2</li>
                <li>Thing3</li>
                <li>Thing4</li>
            </ul>
        </div>
    )
}

export default Inventory;