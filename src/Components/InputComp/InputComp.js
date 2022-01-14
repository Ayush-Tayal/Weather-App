import { Button, Input } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./InputComp.css"

const InputComp = () => {
    const [input, setInput] = useState("");
    const [data, setData] = useState()
    // console.log("data is", data);
    // console.log("Input", input);

    const fetchData = async() => {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=048c43a2f7e00f37c3b4044df2ec3128`);
        const res = await data.json();
        setData(res);
    }
    
    useEffect(() => {
        fetchData();
    }, [])

    const handleSearch = () => {
        // localStorage.setItem("cityWeather", JSON.stringify(data));
        console.log(data)
    }

    return (
        <div id='search'>
            <Input 
                style={{width:'80%'}}
                id="standard-basic" 
                label="Standard" 
                variant="standard"
                placeholder='Enter City'
                onChange={(e) => setInput(e.target.value)}
            />

            <Button 
                variant='outlined' 
                color='secondary'
                onClick={handleSearch}
            > 
                Search 
            </Button>
            
        </div>
    )
}

export default InputComp
