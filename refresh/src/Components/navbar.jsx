import React from 'react'
import {
  Link
} from "react-router-dom";

const navbar = () => {
    return (
           <div id="nav_bar">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><a href="">Meals</a>                                      
                <ul>
                    <li><Link to='/Breakfast'>Breakfast</Link></li>
                    <li><Link to='/Lunch'>Lunch</Link></li>
                    <li><Link to='/Dinner'>Dinner</Link></li>
                </ul>
                    </li>                                  
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                    <li><Link to='/Weekly'>Weekly Meal</Link></li>
                </ul>
            </div>
    )
}

export default navbar
