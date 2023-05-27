import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Landing from "./components/Landing";
import Weather from "./components/Weather";

function getCurrTime() {
  const currDate: Date = new Date();
  let currHour: number = currDate.getHours();
  const AMorPM: string = currHour >= 12 ? "PM" : "AM";
  currHour = currHour === (0 || 12) ? 12 : currHour % 12;

  let currMin: any = currDate.getMinutes();
  currMin = currMin < 10 ? "0" + currMin : currMin;

  return `${currHour}:${currMin} ${AMorPM}`;
}

function App() {
  const [location, setLocation] = useState<string>("");
  const [time, setTime] = useState<string>(getCurrTime());
  const [page, setPage] = useState<string>("landing");

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

  function updatePage(newPage: string) {
    setPage(newPage);
  }

  return (
    <div className="main-page">
      {page === "landing" ? (
        <Landing
          location={location}
          time={time}
          updateLoc={updateLocation}
          updatePage={updatePage}
        ></Landing>
      ) : (
        <Weather location={location} updatePage={updatePage}></Weather>
      )}
    </div>
  );
}

export default App;
