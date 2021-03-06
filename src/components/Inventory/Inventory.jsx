import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import './Inventory.css';
import AddThingForm from '../AddThingForm/AddThingForm';
import InventoryThing from '../InventoryThing/InventoryThing';
import * as thingApi from '../../utils/things-api';


const Inventory = (props) => {
      const [things, setThings] = useState([]);
    useEffect(() => {
        thingApi.getAll().then(res => setThings(res))
    }, [props.things])
    return (
        <div className="Inventory-box-container">
            <div className="Inventory-box">
                <h2>Ingredients</h2>
                <ul>
                    {things.map((thing, i) => (
                        <InventoryThing
                            handleDeleteThing={props.handleDeleteThing}
                            thing={thing}
                            i={i}
                            key={thing._id}
                        />
                    ))}
                </ul>
                <AddThingForm
                    handleAddThing={props.handleAddThing}
                />
            </div>
        </div>
    )
}

export default Inventory;