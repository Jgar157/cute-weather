import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  function getCurrTime() {
    const currDate: Date = new Date();
    let currHour: number = currDate.getHours();
    currHour = currHour === 0 ? 12 : currHour % 12;

    let currMin: any = currDate.getMinutes();
    currMin = currMin < 10 ? "0" + currMin : currMin;

    return `${currHour}:${currMin} ` + (currHour > 12 ? "PM" : "AM");
  }

  const [location, setLocation] = useState<string>("");
  const [time, setTime] = useState<string>(getCurrTime());

  // Update the current location
  function updateLocation(event: React.ChangeEvent<HTMLInputElement>) {
    setLocation(event.target.value);
  }

  // Timer updater for the clock on the landing page
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = getCurrTime();
      setTime(newTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="main-page">
      <div className="landing-page">
        <h1 className="time">{time}</h1>
        <p className="landing-p">Input your location below</p>
        <form className="location-form">
          <input
            className="location-box"
            type="text"
            value={location}
            onChange={updateLocation}
            maxLength={64}
          />
        </form>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default App;
