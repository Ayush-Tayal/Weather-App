import React, { useState } from 'react';
import './App.css';
import SingleDay from './Components/SingleDay/SingleDay';
import FiveDays from './Components/FiveDays/FiveDays';
import SixteenDays from './Components/SixteenDays/SixteenDays';
import SideNav from './Components/SideNavbar/SideNav';
import InputComp from './Components/InputComp/InputComp';

function App() {
  const [showToday, setShowToday] = useState(true)  
  const [showFiveDays, setShowFiveDays] = useState(false)  
  const [showSixteenDays, setShowSixteenDays] = useState(false)  
  
  const handleToday = () => { 
    setShowToday(true);
    setShowFiveDays(false);
    setShowSixteenDays(false);  
  }

  const handleWeek = () => {
    setShowToday(false);
    setShowFiveDays(true);
    setShowSixteenDays(false);
  }

  const handleMonth = () => {
    setShowToday(false);
    setShowFiveDays(false);
    setShowSixteenDays(true);
  }

  return (
    <div id='main'>

      <div id='side'>
        <SideNav/>
      </div>
      
      <div id='input'>
        <InputComp/>
      </div>

      <div id='route'>
        <div className='route-div'>
          <h1 onClick={handleToday}> Today </h1>
          <h1 onClick={handleWeek}> Week </h1>
          <h1 onClick={handleMonth}> Month </h1>
        </div>
        
        {
          showToday && !showFiveDays && !showSixteenDays && 
          <div>
            <SingleDay/>
          </div>
        }

        {
          !showToday && showFiveDays && !showSixteenDays && 
          <div>
            <FiveDays/>
          </div>
        }

        {
          !showToday && !showFiveDays && showSixteenDays && 
          <div>
            <SixteenDays/>
          </div>
        }
      </div>

    </div>
  );
}

export default App;
