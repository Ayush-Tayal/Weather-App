import React from 'react'
import './SideNav.css';

const SideNav = ({data}) => {
    // console.log("data in side", data);
    
    let dateObj = JSON.stringify(new Date(data?.dt * 1000))
    let date = dateObj.slice(1,11)

    return (
        <>
        {
        data && 
            <div id='side-nav'>
                <div id='side-top'>
                    <h2> { date } </h2>
                </div>

                <div id='side-bottom'>
                    <h1> {(data.main.temp - 273.15).toFixed(2) } °C </h1>
                    <h2> { data.name } </h2>
                    <h1> ° ° ° ° </h1>
                </div>
            </div>
        }
        </>
    )
}

export default SideNav
