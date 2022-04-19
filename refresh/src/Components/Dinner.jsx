import React from 'react'
import {
  Link
} from "react-router-dom";

const Dinner = () => {
    return (
        <div class="dinner card">
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
                <h1 class="title"><a href="#">Dinner: Finish The Day Right</a></h1>
                <p class="text">Having a healthy dinner is linked to good sleep, good choices at breakfast and lunch, lower inflammation, greater resilience to stress, better digestion, stable blood sugar and lower anxiety</p>
                <Link to='/Breakfast'><a href="">Click To See More</a></Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Dinner
