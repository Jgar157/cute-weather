import { useEffect, useState } from "react";
import styles from "./Weather.module.css";
import testData from "../weatherData.json";

interface WeatherProps {
  location: string;
  updatePage: (newPage: string) => void;
}

function Weather({ location, updatePage }: WeatherProps) {
  // API request using location
  // updatePage("landing"); Move back to the landing page
  const [weatherData, setWeatherData] = useState<any>({}); //

  let locationData = {
    city: "",
    state: "",
    country: "",
  };

  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  // Parse the location string into city, state, and country
  const parsedLocation = (location: string) => {
    let locationArray = location.split(",");
    locationArray = locationArray.map(
      (loc) => loc[0].toUpperCase() + loc.slice(1)
    );

    if (locationArray.length >= 1) {
      locationData.city = locationArray[0];
    }

    if (locationArray.length === 2) {
      locationData.country = locationArray[1];
    }

    if (locationArray.length === 3) {
      locationData.state = locationArray[1];
      locationData.country = locationArray[2];
    }
    return locationData;
  };

  parsedLocation(location);

  useEffect(() => {
    // const geoCode = async () => {
    //   const response = await fetch(
    //     `https://api.openweathermap.org/geo/1.0/direct?q=${locationData.city},${locationData.state},${locationData.country}&limit=3&appid=${apiKey}`
    //   );
    //   const data = await response.json();
    //   console.log(data);
    //   setLatitude(data[0].lat);
    //   setLongitude(data[0].lon);
    // };
  });

  const apiKey = "8d970943abb5e65c2d3f7f042ffb071e";
  const forecastLength = 6;
  // Api call for actual weather forecasting (only run on first render!)
  useEffect(() => {
    const forecastCall = async () => {
      // async function
      // const response = await fetch(
      //   `http://api.openweathermap.org/data/2.5/forecast?q=${locationData.city},${locationData.state},${locationData.country}&appid=${apiKey}&cnt=${forecastLength}`
      // );
      // const data = await response.json();
      // console.log(data);

      // Use imported weatherData
      setWeatherData(testData);
    };

    forecastCall();
    // console.log(weatherData);
  }, []);

  return (
    <div className={styles.weatherPage}>
      <h1>Weather</h1>
      <p>
        {locationData.city} {locationData.state} {locationData.country}{" "}
      </p>
      <ul>
        {weatherData.list?.map((item: any) => (
          <li key={item.dt}>
            {item.dt_txt} {item.main.temp} {item.weather[0].description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Weather;
