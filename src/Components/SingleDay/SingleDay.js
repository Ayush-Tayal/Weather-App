import React from 'react'
import './SingleDay.css'

const SingleDay = ({singleData}) => {

    let dateObj = JSON.stringify(new Date(singleData?.dt * 1000))
    let date = dateObj.slice(1,11)

    return (
        <div>
            {
            singleData &&
            <div>
                <div style={{textAlign:'center'}}>
                    <h1> City: {singleData.name}</h1>
                    <h2> Country: {singleData.sys.country}</h2>
                </div>
                
                <div id='singleDayInfo'>
                    <div>
                        <h3> Date </h3>
                        <p> {date} </p>
                    </div>

                    <div>
                        <h3> Temperature </h3>
                        <p> {(singleData.main.temp - 273.15).toFixed(2)} °C </p>
                    </div>

                    <div>
                        <h3> Humidity </h3>
                        <p> {singleData.main.humidity} </p>
                    </div>

                    <div>
                        <h3> Pressure </h3>
                        <p> {singleData.main.pressure} </p>
                    </div>

                    <div>
                        <h3> Wind Speed </h3>
                        <p> {singleData.wind.speed} </p>
                    </div>

                    <div>
                        <h3> Description </h3>
                        <p> {singleData.weather[0].description} </p>
                    </div>
                </div>

            </div>
            
            }
        </div>
    )
}

export default SingleDay
