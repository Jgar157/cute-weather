import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./components/Landing";
import Weather from "./components/Weather";
import "./App.css";

export const WeatherColors: Readonly<{ [key: string]: string }> = {
  "default": "#71bcfd",   // Light blue for default
  "HighTemp": "#FF4500",  // Red for high temperature
  "HighUV": "#FF0000",    // Bright red for high UV
  "Sunny": "#FFFF00",     // Yellow for sunny but warm
  "HeavyRain": "#00008B", // Dark blue for heavy rain
  "LightRain": "#ADD8E6", // Light blue for light rain
  "Snow": "#B0E0E6",      // Super light blue for snow
  "Clouds": "#808080"     // Grey for clouds
};


function Content() {
  const [location, setLocation] = useState<string>("");
  const navigate = useNavigate();
  const [bgColor, setBgColor] = useState<string>('#71bcfd');

  useEffect(() => {
    setBgColor(window.location.pathname === '/' ? WeatherColors['default'] : WeatherColors['HighTemp']);
  }, [window.location.pathname]);

  // Update the current location
  function updateLocation(event: React.ChangeEvent<HTMLInputElement>) {
    setLocation(event.target.value);
  }

  function updatePage(newPage: string) {
    if (newPage === "weather") {
      navigate(`/weather/${location}`);
    } else {
      navigate("/");
    }
  }

  return (

    <div className="main-page" style={{ backgroundColor: bgColor, transition: 'background-color 1s ease-in-out' }}>
      <Routes>
        <Route path="/" element={<Landing location={location} updateLoc={updateLocation} updatePage={updatePage} />} />
        <Route path="/weather/:location" element={<Weather />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
       <div>
        <Content />
      </div>
    </Router>
  );
}

export default App;
