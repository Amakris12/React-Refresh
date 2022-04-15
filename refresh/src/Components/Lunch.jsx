import React from 'react'

const Lunch = () => {
    return (
        <div>
            <div className="row">
            <div className="Lunch-1 card">
                <div className="wrapper">
                <div className="date">
                    <span className="day">16</span>
                    <span className="month">Apr</span>
                    <span className="year">2022</span>
                </div>
                <div className="data">
                    <div className="content">
                    <span className="author">Andrew Makris</span>
                    <h2 className="title"><a href="#">Lunch: Get your Macros In</a></h2>
                    <p className="text">Eating lunch raises your blood sugar level in the middle of the day, which gives you the energy you need for the rest of the day. It also enables you to focus and concentrate on the rest of the afternoon.</p>
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
        </div>
    )
}

export default Lunch