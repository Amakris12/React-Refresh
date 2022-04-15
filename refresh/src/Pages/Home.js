import React from 'react'
import Navbar from '../Components/navbar'
import Banner from '../Components/banner'
import Breakfast from '../Components/Breakfast'
import Lunch from '../Components/Lunch'
import Dinner from '../Components/Dinner'
const Home = () => {
    return (
        
        <div className="home-container">
            <Navbar/>
            <Banner/>
            <h1>Andrew's High Protein Meals</h1>
            <hr />
                    <Breakfast/>
                    <Lunch/>
                    <Dinner/>
        </div>
    )
}

export default Home
