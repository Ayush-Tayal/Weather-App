import React, { useEffect, useState } from 'react'

const SixteenDays = ({input}) => {
    const [sixteenDaysData, setsixteenDaysData] = useState();
    // console.log("16 days",sixteenDaysData);

    const fetchSixteenDaysData = async() => {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${input}&units=metric&cnt=16&appid=048c43a2f7e00f37c3b4044df2ec3128`);
        const res = await data.json();
        setsixteenDaysData(res);
    }
    
    useEffect(() => {
        fetchSixteenDaysData();
    }, [])


    return (
        <div>
            {/* country, city name */}

            { sixteenDaysData &&

                <div style={{textAlign:'center'}}>
                    <h1> City Name: {sixteenDaysData.city.name}</h1>
                    <h2> Country: {sixteenDaysData.city.country}</h2>
                    <h2> Population {sixteenDaysData.city.population}</h2>
                    <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
                        <h3> Date </h3>
                        <h3> Clouds </h3>
                        <h3> Humidity </h3>
                        <h3> Pressure </h3>
                        <h3> Speed </h3>
                        <h3> Description </h3>
                    </div>

                    {
                        sixteenDaysData.list.map( (e, i) => (
                            <div key={i} style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
                                <p> { (JSON.stringify(new Date(e?.dt * 1000)).slice(1,11))   } </p>
                                <p> {e.clouds} </p>
                                <p> {e.humidity} </p>
                                <p> {e.pressure} </p>
                                <p> {e.speed} </p>
                                <p> {e.weather[0].description} </p>
                            </div>
                        ))
                    }
                </div>
            }

        </div>
    )
}

export default SixteenDays
