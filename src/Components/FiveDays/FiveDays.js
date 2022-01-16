import React, { useEffect, useState } from 'react'

const FiveDays = ({input}) => {
    const [fiveDaysData, setFiveDaysData] = useState();
    // console.log(fiveDaysData);
    
    const fetchFiveDaysData = async() => {
        try{
            const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=048c43a2f7e00f37c3b4044df2ec3128`);
            const res = await data.json();
            setFiveDaysData(res);
        }catch(err) {
            alert("City Not Found")
        }
    }
    
    useEffect(() => {
        fetchFiveDaysData(); 
    }, [])

    return (
        <div>
            {
            fiveDaysData &&
            <div>

                <div id='top'>
                    <h1> City : {fiveDaysData.city.name}</h1>
                    <h1> Country: {fiveDaysData.city.country}</h1>
                </div>
                
                <div style={{display:'flex', justifyContent:'space-around'}}>
                    <h3> Date & Time </h3>
                    <h3> Temperature </h3>
                    <h3> Humidity </h3>
                    <h3> Pressure </h3>
                    <h3> Wind Speed </h3>
                    <h3> Description </h3>
                
                </div>

                <div>
                    {
                        fiveDaysData.list.map( (e, i) => (
                            (i === 0 || i % 8 === 0 ) &&
                            <div key={i} style={{display:'flex', justifyContent:'space-around'}}>
                                <p> {e.dt_txt} </p>
                                <p> {(e.main.temp - 273.15).toFixed(2) } °C </p>
                                <p> {e.main.humidity} </p>
                                <p> {e.main.pressure} </p>
                                <p> {e.wind.speed} </p>
                                <p> {e.weather[0].description} </p>

                            </div>
                        ))
                    }
                </div>
            
            </div>
            
            }
        </div>  
    )
}

export default FiveDays
