import logo from './logo.svg';
import './App.css';
import SingleDay from './Components/SingleDay/SingleDay';
import FiveDays from './Components/FiveDays/FiveDays';
import SixteenDays from './Components/SixteenDays/SixteenDays';

function App() {
  return (
    <div className="App">
      <SingleDay/>
      <FiveDays/>
      <SixteenDays/>
    </div>
  );
}

export default App;
