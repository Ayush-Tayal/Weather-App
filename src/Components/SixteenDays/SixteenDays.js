import React, { useEffect, useState } from 'react'

const SixteenDays = () => {
    const [sixteenDaysData, setsixteenDaysData] = useState();
    
    const fetchSixteenDaysData = async() => {
        const data = await fetch("http://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=16&appid=048c43a2f7e00f37c3b4044df2ec3128");
        const res = await data.json();
        console.log(res);
    }
    
    useEffect(() => {
        fetchSixteenDaysData();
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default SixteenDays
