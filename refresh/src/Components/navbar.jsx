import React from 'react'

const navbar = () => {
    return (
           <div id="nav_bar">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Meals</a>                                      
                <ul>
                    <li><a href="survival.html">Breakfast</a></li>
                    <li><a href="pure-pvp.html">Lunch</a></li>
                    <li><a href="gamesworld.html">Dinner</a></li>
                </ul>
                    </li>                                  
                    <li><a href="rules.html">About</a></li>
                    <li><a href="vote.html">Weekly Meal</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
    )
}

export default navbar
