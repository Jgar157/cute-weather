import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Landing from "./components/Landing";

function getCurrTime() {
  const currDate: Date = new Date();
  let currHour: number = currDate.getHours();
  const AMorPM: string = currHour > 12 ? "PM" : "AM";
  currHour = currHour === 0 ? 12 : currHour % 12;

  let currMin: any = currDate.getMinutes();
  currMin = currMin < 10 ? "0" + currMin : currMin;

  return `${currHour}:${currMin} ${AMorPM}`;
}

function App() {
  const [location, setLocation] = useState<string>("");
  const [time, setTime] = useState<string>(getCurrTime());

  // Timer updater for the clock on the landing page
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = getCurrTime();
      setTime(newTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Update the current location
  function updateLocation(event: React.ChangeEvent<HTMLInputElement>) {
    setLocation(event.target.value);
  }

  return (
    <div className="main-page">
      <Landing
        location={location}
        time={time}
        updateLoc={updateLocation}
      ></Landing>
    </div>
  );
}

export default App;
