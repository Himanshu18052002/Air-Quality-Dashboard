import axios from "axios";

const API_KEY = "34042310-d772-45f4-9a02-7dc85be01631";

export const fetchAirQualityData = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${API_KEY}`
    );
    console.log("pollution ", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
