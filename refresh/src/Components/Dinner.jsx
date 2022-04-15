import React from 'react'

const Dinner = () => {
    return (
        <div>
            <div className="row">
            <div className="Dinner-1 card">
                <div className="wrapper">
                <div className="date">
                    <span className="day">16</span>
                    <span className="month">Apr</span>
                    <span className="year">2022</span>
                </div>
                <div className="data">
                    <div className="content">
                    <span className="author">Andrew Makris</span>
                    <h2 className="title"><a href="#">Dinner: Finish The Day Right</a></h2>
                    <p className="text">Dinner is an important meal, but you can experiment with a range of great foods. Having a healthy dinner is linked to good sleep, good choices at breakfast and lunch, lower inflammation, greater resilience to stress, better digestion, stable blood sugar and lower anxiety.</p>
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

export default Dinner
