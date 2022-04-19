import {React, useState} from 'react';
import BF from '../Util/Breakfast'
const BreakfastMeal = () => {
    const [breakfast, setBreakfast] = useState(BF)
    console.log(breakfast)
    return (
        <div className="BF-Meals">
            <h1>High Protien Breakfast Meals</h1>
            <hr /> 
            <div className="Breakfast-Container">
            {breakfast.map((fast)=>{
                const {id,Name,Time,Ingredients,StepOne,StepTwo,StepThree,Picture,type} = fast;
                return (
                    <div className="Fast-card" key={id}>
                        <img src={Picture} alt={Name} />
                        <h1>{Name}</h1>
                        <p>Time: {Time}</p>
                        <p>Type: {type}</p>
                        <br />
                        <h3>Ingredients: </h3>
                        <hr />
                        <p>{Ingredients}</p>
                        <hr />
                        <h3>Steps to Follow:</h3>
                        <hr />
                        <ul>
                            <li>Step One: {StepOne}</li>
                            <br />
                            <li>Step Two: {StepTwo}</li>
                            <br />
                            <li>Step Three: {StepThree}</li>
                        </ul>
                        
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default BreakfastMeal
