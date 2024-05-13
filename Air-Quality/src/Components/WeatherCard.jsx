// WeatherCard.js
import React, { useEffect, useState } from "react";
import { getWeatherData } from "../API/Weatherapi";
import { useDispatch } from "react-redux";
import { saveCoordinates } from "../Redux/CoordinatesSlice";

const WeatherCard = ({ city }) => {
  const [weatherData, setWeatherData] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(city);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      const data = await getWeatherData(city);
      setWeatherData(data);
      console.log("latitude ", data.coord.lat, " longtitude ", data.coord.lon);
      dispatch(saveCoordinates({ lon: data.coord.lon, lat: data.coord.lat }));
      setLoading(false);
    };
    fetchWeatherData();
  }, [city]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!weatherData) {
    return <div>No data found</div>;
  }

  return (
    <div>
      <h2>{city}</h2>

      <p>Temperature: {weatherData.main.temp}°C</p>

      <p>Humidity: {weatherData.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
