import {React,useState} from 'react';
import LN from '../Util/Lunch'

const LunchMeal = () => {
    const [lunch, setLunch] = useState(LN)
    return (
        <div className="BF-Meals">
            <h1>High Protein Lunch Meals</h1>
            <hr /> 
            <div className="Breakfast-Container">
            {lunch.map((fast)=>{
                const {id,Name,Time,Ingredients,StepOne,StepTwo,StepThree,Picture,Type} = fast;
                return (
                    <div className="Fast-card" key={id}>
                        <img src={Picture} alt={Name} />
                        <h1>{Name}</h1>
                        <p>Time: {Time}</p>
                        <p>Type: {Type}</p>
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

export default LunchMeal
