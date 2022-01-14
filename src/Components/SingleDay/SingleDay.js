import React, { useEffect, useState } from 'react'
import './SingleDay.css'

const SingleDay = () => {
    const [singleData, setSingleData] = useState();
    // console.log(singleData);

    const fetchSingleData = async() => {
        const data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=048c43a2f7e00f37c3b4044df2ec3128");
        const res = await data.json();
        setSingleData(res);
    }
    
    useEffect(() => {
        fetchSingleData();
    }, [])


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
                        <p> {singleData.dt} </p>
                    </div>

                    <div>
                        <h3> Temperature </h3>
                        <p> {singleData.main.temp} </p>

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
