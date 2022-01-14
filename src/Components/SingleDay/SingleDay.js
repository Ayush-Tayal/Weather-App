import React, { useEffect, useState } from 'react'

const SingleDay = () => {
    const [singleData, setsingleData] = useState();
    
    const fetchSingleData = async() => {
        const data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=048c43a2f7e00f37c3b4044df2ec3128");
        const res = await data.json();
        console.log(res);
    }
    
    useEffect(() => {
        fetchSingleData();
    }, [])

    return (
        <div>
    

        </div>
    )
}

export default SingleDay
