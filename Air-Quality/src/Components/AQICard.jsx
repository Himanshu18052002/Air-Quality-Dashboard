// AirQualityCard.js
import React from "react";
import { getAQI } from "../API/AQIapi";

const AirQualityCard = ({ city }) => {
  const [airQualityData, setAirQualityData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchAirQualityData = async () => {
      setLoading(true);
      const data = await getAQI(city);
      setAirQualityData(data);
      setLoading(false);
    };
    fetchAirQualityData();
  }, [city]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!airQualityData) {
    return <div>No air quality data found</div>;
  }

  const aqiLevel = getAQILevel(airQualityData.current.pollution.aqius);
  const mainPollutants = getMainPollutants(airQualityData.current.pollution);

  return (
    <div>
      <h2>{city}</h2>
      <p>AQI: {aqiLevel}</p>
      <p>Main Pollutants: {mainPollutants}</p>
      <div
        style={{
          backgroundColor: getAQIColor(aqiLevel),
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          display: "inline-block",
        }}
      />
    </div>
  );
};

const getAQILevel = (aqi) => {
  if (aqi < 50) return "Good";
  if (aqi < 100) return "Moderate";
  if (aqi < 200) return "Unhealthy for Sensitive Groups";
  if (aqi < 300) return "Unhealthy";
  if (aqi < 400) return "Very Unhealthy";
  return "Hazardous";
};

const getAQIColor = (aqiLevel) => {
  if (aqiLevel === "Good") return "#008000";
  if (aqiLevel === "Moderate") return "#ff8c00";
  if (aqiLevel === "Unhealthy for Sensitive Groups") return "#ff0000";
  if (aqiLevel === "Unhealthy") return "#800000";
  return "#800080";
};

const getMainPollutants = (pollutionData) => {
  const mainPollutants = [];
  for (const pollutant in pollutionData) {
    if (pollutionData[pollutant] > 0) {
      mainPollutants.push(pollutant);
    }
  }
  return mainPollutants.join(", ");
};

export default AirQualityCard;
