import React from 'react'
import {
  Link
} from "react-router-dom";

const card = () => {
    return (
       <div class="breakfast card">
            <div class="wrapper">
            <div class="header">
                <div class="date">
                <span class="day">12</span>
                <span class="month">Aug</span>
                <span class="year">2016</span>
                </div>
                <ul class="menu-content">
                <li>
                    <a href="#" class="fa fa-bookmark-o"></a>
                </li>
                <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
                <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
                </ul>
            </div>
            <div class="data">
                <div class="content">
                <span class="author">Andrew Makris</span>
                <h1 class="title"><a href="#">Breakfast: Most important Meal of the day</a></h1>
                <p class="text"></p>
                <Link to='/Breakfast'><a href="">Click To See More</a></Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default card
