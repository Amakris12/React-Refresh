import React from 'react'
import Breakfast from '../Components/Breakfast'
import Lunch from '../Components/Lunch'
import Dinner from '../Components/Dinner'
const Home = () => {
    return (
        
        <div className="home-container">
            <h1>Andrew's High Protein Meals</h1>
            <hr />
            <div className="card-container">
                 <Breakfast/>
                <Lunch/>
                <Dinner/>
            </div>
        </div>
    )
}

export default Home
