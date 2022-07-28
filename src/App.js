import React, { useEffect, useState } from "react";
import "./App.css";
import SingleDay from "./Components/SingleDay/SingleDay";
import WeeklyWeather from "./Components/WeeklyWeather/WeeklyWeather";
import SixteenDays from "./Components/SixteenDays/SixteenDays";
import SideNav from "./Components/SideNavbar/SideNav";
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';

function App() {
  const [showToday, setShowToday] = useState(true);
  const [showWeeklyWeather, setShowWeeklyWeather] = useState(false);
  const [showSixteenDays, setShowSixteenDays] = useState(false);
  const [input, setInput] = useState("delhi")
  const [data, setData] = useState()
  // console.log("data", data);

  const handleToday = () => {
    setShowToday(true);
    setShowWeeklyWeather(false);
    setShowSixteenDays(false);
  };

  const handleWeek = () => {
    setShowToday(false);
    setShowWeeklyWeather(true);
    setShowSixteenDays(false);
  };

  const handleMonth = () => {
    setShowToday(false);
    setShowWeeklyWeather(false);
    setShowSixteenDays(true);
  };

  const fetchData = async() => {
    try {
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=048c43a2f7e00f37c3b4044df2ec3128`);
      const res = await data.json();
      // console.log("res",res.cod);
      
      if(res.cod === '404'){
        alert("City Not Found");
      } else{
        setData(res);
      }

    }catch(err) {
      alert("City Not Found");
    }
  }
  
  useEffect(() => {
    fetchData();
  }, [])

  const handleSearch = () => {
    fetchData();
    // console.log(data);
  }

  
  return (
    <div id="main">
      <div id="side">
        <SideNav input={input} data={data} />
      </div>

      <div id="search">
        <TextField 
          style={{ width: "90%", marginRight:'20px' }}
          id="outlined-basic" 
          label="Forecast" 
          variant="outlined" 
          placeholder="Enter City"
          onChange={(e) => setInput(e.target.value)}
        />

        <Button variant="outlined" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>

      <div id="route">
        <div className="route-div">
          <h1 className={showToday ? "active" : 'not-active'} onClick={handleToday}> Today </h1>
          <h1 className={showWeeklyWeather ? "active" : 'not-active'} onClick={handleWeek}> Week </h1>
          <h1 className={showSixteenDays ? "active" : 'not-active'} onClick={handleMonth}> Month </h1>
        </div>

        {showToday && !showWeeklyWeather && !showSixteenDays && (
          <div>
            <SingleDay singleData={data}/>
          </div>
        )}

        {!showToday && showWeeklyWeather && !showSixteenDays && (
          <div>
            <WeeklyWeather input={input}/>
          </div>
        )}

        {!showToday && !showWeeklyWeather && showSixteenDays && (
          <div>
            <SixteenDays input={input} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
