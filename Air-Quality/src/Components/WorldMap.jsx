import React, { useState, useEffect } from "react";
import { TileLayer, Marker, MapContainer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import module from "./map.module.css";
import { fetchAirQualityData } from "../API/AQIapi";

const getColor = (aqi) => {
  if (aqi <= 50) return "green";
  if (aqi <= 100) return "yellow";
  if (aqi <= 150) return "orange";
  if (aqi <= 200) return "red";
  return "purple"; // Very unhealthy
};

const AirQualityMap = ({ lat, lon }) => {
  const [airQualityData, setAirQualityData] = useState([]);

  useEffect(() => {
    fetchAirQualityData(lat, lon).then((data) => setAirQualityData(data));
  }, [lat, lon]);

  return (
    <>
      {airQualityData ? (
        <div className={module.info_map}>
          <h1>{airQualityData.city}</h1>
          <h2>{airQualityData.country}</h2>
          {/* Dont know why but when I try to display the span for AQI the map is not displaying but when I frist let the map load then when I uncomment the span it displays correctly */}
          {/* <span
            style={{
              color: `${getColor(airQualityData.current.pollution.aqius)}`,
            }}
          >
            {airQualityData?.current.pollution.aqius}
          </span> */}
        </div>
      ) : null}
      {lat && lon && (
        <MapContainer center={[lat, lon]} zoom={8}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a>"
          />

          {airQualityData.length > 0 &&
            airQualityData.map((station) => (
              <Marker
                key={station.id}
                icon={
                  <div
                    style={{
                      backgroundColor: getColor(
                        station.current.pollution.aqius
                      ),
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "12px", color: "white" }}>
                      {station.current.pollution.aqius}
                    </span>
                  </div>
                }
              >
                <Popup>
                  <div>
                    <h2>
                      Air Quality Index: {station.current.pollution.aqius}
                    </h2>
                    <p>Latitude: {station.location.coordinates[1]}</p>
                    <p>Longitude: {station.location.coordinates[0]}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      )}
    </>
  );
};

export default AirQualityMap;
