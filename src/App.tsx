import "./App.css";
import { useState } from "react";
import Landing from "./components/Landing";
import Weather from "./components/Weather";

function App() {
  const [location, setLocation] = useState<string>("");
  const [page, setPage] = useState<string>("landing");

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
