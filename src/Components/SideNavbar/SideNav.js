import React from 'react'
import './SideNav.css';

const SideNav = () => {
    // let searhedData = JSON.parse(localStorage.getItem("cityWeather")) 

    return (
        <div id='side-nav'>
            <div id='side-top'>
                <h3> Jan 16, 2022 </h3>
            </div>

            <div id='side-bottom'>
                <h1> 21° </h1>
                <h2> London </h2>
                <h1> ° ° ° ° </h1>
            </div>
        </div>
    )
}

export default SideNav
