import React from 'react'

const card = () => {
    return (
       <div className="row">
            <div className="Breakfast-1 card">
                <div className="wrapper">
                <div className="date">
                    <span className="day">16</span>
                    <span className="month">Apr</span>
                    <span className="year">2022</span>
                </div>
                <div className="data">
                    <div className="content">
                    <span className="author">Andrew Makris</span>
                    <h2 className="title"><a href="#">Breakfast: The most important Meal</a></h2>
                    <p className="text">Breakfast is often called 'the most important meal of the day', and for good reason. As the name suggests, breakfast breaks the overnight fasting period. It replenishes your supply of glucose to boost your energy levels and alertness, while also providing other essential nutrients required for good health</p>
                    <label for="show-menu" className="menu-button"><span></span></label>
                    </div>
                    <input type="checkbox" id="show-menu" />
                    <ul className="menu-content">
                    <li>
                        <a href="#" className="fa fa-bookmark-o"></a>
                    </li>
                    <li><a href="#" className="fa fa-heart-o"><span>47</span></a></li>
                    <li><a href="#" className="fa fa-comment-o"><span>8</span></a></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default card
