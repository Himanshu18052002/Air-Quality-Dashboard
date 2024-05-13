// WeatherAPI.js
import axios from "axios";

const API_KEY = "5dc66c929555e9c434fcd5fcd43137c6";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        units: "metric",
        appid: API_KEY,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
