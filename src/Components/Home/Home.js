import React, { useEffect, useState } from "react";
import "../../App.css";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import SingleDay from "../SingleDay/SingleDay";
import WeeklyWeather from "../WeeklyWeather/WeeklyWeather";
import SideNav from "../SideNavbar/SideNav";
import SixteenDays from "../SixteenDays/SixteenDays";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Home = () => {
  const [showToday, setShowToday] = useState(true);
  const [showWeeklyWeather, setShowWeeklyWeather] = useState(false);
  const [showSixteenDays, setShowSixteenDays] = useState(false);
  const [input, setInput] = useState("delhi");
  const [data, setData] = useState();

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

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=048c43a2f7e00f37c3b4044df2ec3128`
      );
      const res = await data.json();
      // console.log("res",res.cod);

      if (res.cod === "404") {
        alert("City Not Found");
      } else {
        setData(res);
      }
    } catch (err) {
      alert("City Not Found");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    fetchData();
    // console.log(data);
  };

  return (
    <div id="main">
      <div id="side">
        <SideNav data={data} />
      </div>
     
      <div id="search">
        <TextField
          style={{ width: "90%", marginRight: "20px" }}
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          autoComplete="false"
          placeholder="Enter City Name"
          onChange={(e) => setInput(e.target.value)}
        />

        <Button variant="outlined" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>

      <div id="route">
        <div className="route-div">
          <h1
            className={showToday ? "active" : "not-active"}
            onClick={handleToday}
          >
            Today
          </h1>
          <h1
            className={showWeeklyWeather ? "active" : "not-active"}
            onClick={handleWeek}
          >
            Week
          </h1>
          <h1
            className={showSixteenDays ? "active" : "not-active"}
            onClick={handleMonth}
          >
            Month
          </h1>
        </div>

        {showToday && !showWeeklyWeather && !showSixteenDays && (
          <div>
            <SingleDay singleData={data} />
          </div>
        )}

        {!showToday && showWeeklyWeather && !showSixteenDays && (
          <div>
            <WeeklyWeather input={input} />
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
};

export default Home;
