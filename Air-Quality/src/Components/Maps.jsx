// // Maps.js
// import React, { useState, useEffect } from "react";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// // import { Map, TileLayer, Marker, Popup } from "react-leaflet";

// const API_KEY = "5dc66c929555e9c434fcd5fcd43137c6"; // Move API key to the top level

// function Maps() {
//   // Rename the component to follow PascalCase convention
//   const [cities, setCities] = useState([]);
//   const [weatherData, setWeatherData] = useState({});
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchCitiesData()
//       .then((data) => {
//         setCities(data.list);
//         fetchWeatherDataForCities(data.list);
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   }, []);

//   const fetchCitiesData = async () => {
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=${API_KEY}`
//       );
//       return response.json();
//     } catch (error) {
//       throw error;
//     }
//   };

//   const fetchWeatherDataForCities = async (cities) => {
//     cities.forEach((city) => {
//       fetchWeatherData(city.id)
//         .then((weather) => {
//           setWeatherData((prevState) => ({ ...prevState, [city.id]: weather }));
//         })
//         .catch((error) => {
//           setError(error.message);
//         });
//     });
//   };

//   const fetchWeatherData = async (cityId) => {
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${API_KEY}`
//       );
//       return response.json();
//     } catch (error) {
//       throw error;
//     }
//   };
//   const position = [51.505, -0.09];
//   // return (
//   //   <MapContainer
//   //     style={{
//   //       width: "100vw",
//   //       height: "30vh",
//   //       display: "flex",
//   //       justifyContent: "center",
//   //       alignItems: "center",
//   //     }}
//   //     scrollWheelZoom={false}
//   //     center={[51.505, -0.09]}
//   //     zoom={4}
//   //   >
//   //     <TileLayer
//   //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   //       attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a>"
//   //     />
//   //     {cities.map((city) => (
//   //       <Marker key={city.id} position={[city.coord.lat, city.coord.lon]}>
//   //         <Popup>
//   //           <h2>{city.name}</h2>
//   //           {weatherData[city.id] && ( // Add a conditional rendering for weather data
//   //             <>
//   //               <p>Temperature: {weatherData[city.id].main.temp}°C</p>
//   //               <p>
//   //                 Precipitation: {weatherData[city.id].weather[0].description}
//   //               </p>
//   //               <p>Wind: {weatherData[city.id].wind.speed} m/s</p>
//   //             </>
//   //           )}
//   //         </Popup>
//   //       </Marker>
//   //     ))}
//   //   </MapContainer>
//   // );
//   return (
//     <MapContainer center={[51.505, -0.09]} zoom={0} scrollWheelZoom={false}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={[51.505, -0.09]}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// }

// export default Maps;
