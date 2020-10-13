import React from 'react';
// import { Link } from 'react-router-dom';
import './Inventory.css';
import AddThingForm from '../AddThingForm/AddThingForm';
import InventoryThing from '../InventoryThing/InventoryThing';

const Inventory = (props) => {
    return (
        <div className="Inventory-box">
            <h2>Ingredients</h2>
                {props.things.map((thing, i) => (
                    <InventoryThing
                        handleDeleteThing={props.handleDeleteThing}
                        thing={thing}
                        i={i}
                        key={thing._id}
                    />
                ))}
            <AddThingForm
                handleAddThing={props.handleAddThing}
            />
        </div>
    )
}

export default Inventory;