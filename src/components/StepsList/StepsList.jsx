import React, { useState, useEffect } from 'react';
import './StepsList.css';
import spoonacular from '../../utils/spoonacular';


const StepsList = props => {
     const [steps, setSteps] = useState([]);
    useEffect(() => {
        spoonacular.getInfo(props.recipe.id).then(res => setSteps(res))
    }, [props.recipe.id])
    console.log('steps', steps)

    let stepsHTML = steps.length ? 
    <div className="steps">
        <h4>INSTRUCTIONS</h4>
        {steps[0].steps.map((step, i) => 
            <li className="step" key={i}><span>{step.step}</span></li>
            )}
    </div>
    :
    <h4>Sorry! There are no instructions available for this recipe <span role="img" aria-label="img">&#128530;</span></h4>

    return (
        <div>
            {stepsHTML}
        </div>
    )
}

export default StepsList;