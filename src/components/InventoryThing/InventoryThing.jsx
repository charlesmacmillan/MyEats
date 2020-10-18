import React from 'react';
// import {Link} from 'react-router-dom';
import './InventoryThing.css';

const InventoryThing = (props) => {
    const colors = ['moccasin', '#B5C6D8', '#92DCBE', '#916997', '#EBC44B', '#DCAF95', '#F07D43'];
    return (
        <div className="InventoryThing">
            <li
                style={{
                    color: colors[props.i % colors.length],
                    textTransform: 'capitalize'
                }}
            >
                {props.thing.thing}
            </li>
            <button
                onClick={() => props.handleDeleteThing(props.thing._id)}
            ></button>
        </div>
    )
}

export default InventoryThing;